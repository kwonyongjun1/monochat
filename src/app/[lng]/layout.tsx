import { Metadata } from "next";
import GlobalProvider from "./_components/GlobalProvider";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "monochat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex size-full overflow-hidden text-slate-900">
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}

// zustand
// react-query
// indexeddb
// pusher
// i18n
// tailwindcss
// axios
// nextauth
