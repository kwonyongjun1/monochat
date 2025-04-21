import { Metadata } from "next";
import "@/styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ToastProvider from "./_components/ToastProvider";
import GlobalProvider from "./_components/GlobalProvider";

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
        <GlobalProvider>
          <ToastContainer />
          <ToastProvider />
          {children}
        </GlobalProvider>
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
