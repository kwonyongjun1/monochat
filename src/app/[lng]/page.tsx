"use client";

import { useWelcomeNotify } from "@/hooks";
import ChatList from "./_components/ChatList";

const Page = () => {
  useWelcomeNotify();
  const testData = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hello, world!",
      time: "2021-01-01 12:00:00",
    },
    {
      id: 2,
      name: "Jane Doe",
      lastMessage: "Hello, world!",
      time: "2021-01-01 12:00:00",
    },
  ];

  return (
    <main className="flex size-full flex-col overflow-auto animate-duration-150">
      <article className="flex min-h-full flex-col">
        <ChatList chatList={testData} />
      </article>
    </main>
  );
};

export default Page;
