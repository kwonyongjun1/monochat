"use client";

import { useWelcomeNotify } from "@/hooks";
import ChatList from "./_components/ChatList";

const Page = () => {
  useWelcomeNotify();

  return (
    <main className="flex size-full flex-col overflow-auto animate-duration-150">
      <article className="flex min-h-full flex-col">
        <ChatList />
      </article>
    </main>
  );
};

export default Page;
