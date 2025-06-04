import { Noto_Sans_KR, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  variable: "--notoSansKr",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--roboto",
});

export const pretendard = localFont({
  src: "./PretendardVariable.ttf",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});
