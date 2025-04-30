"use client";

import { useParams, usePathname } from "next/navigation";
import ChatRoomPlaceholder from "./_components/ChatRoomPlaceholder";

const RightSidePannel = () => {
  const { lng } = useParams();
  const pathname = usePathname();

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
        {pathname === `/${lng}` && <ChatRoomPlaceholder />}
      </div>
      <footer className="w-full max-w-screen-sm">
        <nav className="flex justify-center border-t border-t-slate-100 p-1"></nav>
      </footer>
    </>
  );
};

export default RightSidePannel;
