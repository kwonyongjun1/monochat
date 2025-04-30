import { Metadata } from "next";
import "@/styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ToastProvider from "./_components/ToastProvider";
import GlobalProvider from "./_components/GlobalProvider";
import MainContainer from "./_components/MainContainer";
import RightSidePannel from "./_components/RightSidePannel";

export const metadata: Metadata = {
  title: "monochat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="size-full" style={{ height: "100dvh" }}>
      <body className="flex size-full overflow-hidden text-slate-900 justify-center fade-1s">
        <GlobalProvider>
          <ToastProvider />
          <div className="flex-1 max-h-cdvh relative flex h-full w-fit max-w-screen-xl">
            <div className="relative flex size-full flex-1 flex-col overflow-hidden text-slate-900 border-solid border-t border-t-slate-100">
              <MainContainer>{children}</MainContainer>
            </div>
            <div className="relative flex size-full flex-1 flex-col overflow-hidden text-slate-900 border-solid border-t border-t-slate-100 hidden md:block">
              <RightSidePannel />
            </div>
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
