"use client";

import { useWelcomeNotify } from "@/hooks";
import ChatList from "./_components/ChatList";
const Page = () => {
  useWelcomeNotify();

  return (
    <article className="overflow-auto h-full">
      <ChatList />
    </article>
  );
};

export default Page;
