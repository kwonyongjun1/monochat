"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PRIVATE_ENV, CHAT_EVENT } from "@/constants";
import Pusher from "pusher-js";
import { postMessage } from "@/app/fetchs/chat/postMessage";
import { GrSend } from "react-icons/gr";
import { RiArrowGoBackFill } from "react-icons/ri";
import { getChatMessages } from "@/app/fetchs/chat/getChatMessages";
import { useQuery } from "@tanstack/react-query";
import ChatBubble from "./_components/ChatBubble";
import { getChatRoomsformatDateTime, getCurrentTimeStamp } from "@/utils/day";
import { MessageInfo } from "@/app/api/chat/types";

const Chatting = () => {
  const { id: roomId } = useParams();
  const { push } = useRouter();
  const [messageList, setMessageList] = useState<MessageInfo[]>([]);

  const pusher = useMemo(
    () =>
      new Pusher(PRIVATE_ENV.PUSHER_KEY, {
        cluster: PRIVATE_ENV.PUSHER_CLUSTER,
      }),
    []
  );
  const { data: message } = useQuery({
    queryKey: ["chat-room-message", roomId],
    queryFn: () => getChatMessages(roomId as string),
  });

  useEffect(() => {
    setMessageList(message?.data || []);
  }, [message]);

  // 사용자 정보 (session)
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

  const onSend = async (message: string) => {
    await postMessage({
      roomId: roomId as string,
      senderId: "admin",
      message,
      type: CHAT_EVENT.NEW_MESSAGE,
      createdAt: getCurrentTimeStamp(),
      readBy: [],
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const message = formData.get("message") as string;
    onSend(message);
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="size-full flex flex-col">
      <header className="w-full">
        <div className="p-2">
          <button onClick={() => push("/")}>
            <RiArrowGoBackFill size={20} />
          </button>
        </div>
      </header>
      <main className="size-full overflow-y-auto">
        <article>
          {messageList?.map((message, index) => (
            <ChatBubble
              key={`${message.senderId}-${index}`}
              message={message.message}
              sender={message.senderId}
              time={getChatRoomsformatDateTime(message.createdAt)}
              isMine={message.senderId === "admin"}
            />
          ))}
        </article>
      </main>
      <footer className="w-full">
        <div className="p-3">
          <form
            className="flex items-center justify-center gap-2"
            onSubmit={onSubmit}
          >
            <div className="flex w-full border-2 border-black rounded-lg items-center p-1">
              <textarea
                className="w-full overflow-hidden text-sm contnet-center"
                placeholder="메시지를 입력하세요."
                style={{ height: "20px" }}
                name="message"
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    const form = (event.target as HTMLTextAreaElement).form;
                    const formData = new FormData(form as HTMLFormElement);
                    const message = formData.get("message") as string;
                    onSend(message);
                    form?.reset();
                  }
                }}
              />
            </div>
            <button type="submit">
              <div className="p-2 rounded-full bg-primary border-2 border-black transition-transform duration-300 transform hover:scale-110">
                <GrSend size={20} />
              </div>
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Chatting;
