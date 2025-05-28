"use client";

import { useParams, usePathname } from "next/navigation";
import ChatRoomPlaceholder from "./_components/ChatRoomPlaceholder";

const RightSidePannel = () => {
  const { lng } = useParams();
  const pathname = usePathname();

  return (
    <>
      <header></header>
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
