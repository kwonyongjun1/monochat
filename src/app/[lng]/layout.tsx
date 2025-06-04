import { Metadata } from "next";
import "@/styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import "@radix-ui/themes/styles.css";
import ToastProvider from "./_components/ToastProvider";
import GlobalProvider from "./_components/GlobalProvider";
import MainContainer from "./_components/MainContainer";
import RightSidePannel from "./_components/RightSidePannel";
import { cn } from "@/utils/cn";
import { pretendard } from "@/configs/font";

export const metadata: Metadata = {
  title: "monochat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn("size-full", pretendard.className)}
      style={{ height: "100dvh" }}
    >
      <body
        className={cn(
          "flex size-full overflow-hidden text-slate-900 justify-center fade-1s"
        )}
      >
        <GlobalProvider>
          <ToastProvider />
          <div className="flex-1 max-h-cdvh relative flex h-full max-w-screen-xl">
            <div className="relative flex size-full flex-1 flex-col overflow-hidden text-slate-900 border-solid border border-t-slate-100 ">
              <MainContainer>{children}</MainContainer>
            </div>
            <div className="relative flex size-full flex-1 flex-col overflow-hidden text-slate-900 border-solid border border-t-slate-100 hidden md:block">
              <RightSidePannel />
            </div>
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
