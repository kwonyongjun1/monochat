"use client";

import dynamic from "next/dynamic";

import { useParams } from "next/navigation";
import animationData from "@/assets/lottie/chat-empty.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const RightSidePannel = () => {
  const { lng } = useParams();

  return (
    <>
      <header>
        <nav>
          <a className="text-xl font-bold float-right p-4 border-t border-t-slate-100">
            {lng}
          </a>
        </nav>
      </header>
      <div className="size-full content-center">
        <div className="flex flex-1 flex-col gap-2 place-items-center">
          <div className="w-64 h-64">
            <Lottie animationData={animationData} style={{ width: "250px" }} />
          </div>
          <h3 className="text-lg font-semibold text-zinc-500">
            Enter chatting room
          </h3>
        </div>
      </div>
      <footer className="w-full max-w-screen-sm">
        <nav className="flex justify-center border-t border-t-slate-100 p-1"></nav>
      </footer>
    </>
  );
};

export default RightSidePannel;
