"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Pusher from "pusher-js";
import { getChatMessages } from "@/app/fetchs/chat/getChatMessages";
import { useQuery } from "@tanstack/react-query";
import ChatBubble from "./_components/ChatBubble";
import SendMessageForm from "./_components/SendMessageForm";
import { getFormatTimestamp, getDay } from "@/utils/day";
import { MessageInfo } from "@/app/api/chat/types";
import { PRIVATE_ENV, CHAT_EVENT } from "@/constants";
import DateSeparator from "./_components/DateSeparator";
import BackHeader from "@/components/BackHeader";

const Chatting = () => {
  const { id: roomId } = useParams();
  const [messageList, setMessageList] = useState<MessageInfo[]>([]);
  const mainRef = useRef<HTMLDivElement>(null);

  const pusher = useMemo(
    () =>
      new Pusher(PRIVATE_ENV.PUSHER_KEY, {
        cluster: PRIVATE_ENV.PUSHER_CLUSTER,
      }),
    []
  );
  const { data: initialMessages } = useQuery({
    queryKey: ["chat-room-message", roomId],
    queryFn: () => getChatMessages(roomId as string),
  });

  const moveScrollBottom = () => {
    if (mainRef.current) {
      const bottom = mainRef.current.scrollHeight;
      mainRef.current.scrollTo({ top: bottom, behavior: "smooth" });
    }
  };

  useEffect(() => {
    moveScrollBottom();
  }, [initialMessages]);

  useEffect(() => {
    if (messageList.pop()?.senderId === "admin") moveScrollBottom();
  }, [messageList]);

  // TODO 사용자 정보 (session)
  useEffect(() => {
    const channel = pusher.subscribe(roomId as string);
    channel.bind(CHAT_EVENT.NEW_MESSAGE, async (message: MessageInfo) => {
      setMessageList((prev) => [...prev, message]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [roomId, pusher, messageList]);

  let chatDate = "";

  return (
    <div className="size-full flex flex-col">
      <BackHeader />
      <main className="size-full overflow-y-auto" ref={mainRef}>
        <article>
          {initialMessages?.data?.map((message, index) => {
            const messageDate = getDay(message.createdAt);
            const showDate = chatDate !== messageDate;
            if (showDate) chatDate = messageDate;

            return (
              <div key={`${message.senderId}-initial-${index}`}>
                {showDate && <DateSeparator date={messageDate} />}
                <ChatBubble
                  message={message.message}
                  sender={message.senderId}
                  time={getFormatTimestamp(message.createdAt)}
                  isMine={message.senderId === "admin"}
                />
              </div>
            );
          })}
          {messageList?.map((message, index) => {
            const messageDate = getDay(message.createdAt);
            const showDate = chatDate !== messageDate;
            if (showDate) chatDate = messageDate;

            return (
              <div key={`${message.senderId}-${index}`}>
                {showDate && <DateSeparator date={messageDate} />}
                <ChatBubble
                  message={message.message}
                  sender={message.senderId}
                  time={getFormatTimestamp(message.createdAt)}
                  isMine={message.senderId === "admin"}
                />
              </div>
            );
          })}
        </article>
      </main>
      <footer className="w-full">
        <SendMessageForm roomId={roomId as string} />
      </footer>
    </div>
  );
};

export default Chatting;
