// import { getToken } from "next-auth/jwt";
import withAuth, { NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|auth|_next/static|_next/image|favicon.ico|assets).*)"],
};

const authRequiredRoutes = ["invite", "info"];

export const middleware = withAuth(
  async (req: NextRequestWithAuth) => {
    const { nextUrl, headers, nextauth } = req;
    // const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
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

    if (!nextauth.token) {
      const route = req.nextUrl.pathname.split("/")[2];
      if (authRequiredRoutes.includes(route)) {
        nextUrl.pathname = `/${lng}/login/sign-in`;
        return NextResponse.redirect(nextUrl);
      }
    }

    const isRedirect = originalUrl !== nextUrl.href;
    const res = isRedirect
      ? NextResponse.redirect(nextUrl)
      : NextResponse.next();

    return res;
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
);
