import { getToken } from "next-auth/jwt";
import { NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets).*)"],
};

export const middleware = async (req: NextRequestWithAuth) => {
  const { nextUrl, headers } = req;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    console.log("로그인 필요");
  }
  const originalUrl = req.nextUrl.href;

  let lng: string | undefined;
  let hasLngPath = false;

  const languages = ["ko", "en"];

  for (const language of languages) {
    if (nextUrl.pathname.startsWith(`/${language}`)) {
      lng = language;
      hasLngPath = true;
      break;
    }
  }

  if (!lng) {
    const acceptLanguage = headers.get("accept-language");
    const userLang = acceptLanguage
      ? acceptLanguage.split(",")[0].split("-")[0]
      : languages[0];
    lng = userLang;
  }

  if (!hasLngPath) {
    nextUrl.pathname = `/${lng}${nextUrl.pathname}`;
    hasLngPath = true;
  }

  const isRedirect = originalUrl !== nextUrl.href;
  const res = isRedirect ? NextResponse.redirect(nextUrl) : NextResponse.next();

  return res;
};
