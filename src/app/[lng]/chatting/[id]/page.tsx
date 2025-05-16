"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PRIVATE_ENV, CHAT_EVENT } from "@/constants";
import Pusher from "pusher-js";
import { sendMessage } from "@/app/fetchs/sendMessage";
import { MessageInfo } from "@/app/api/chat/send-message/types";
import { GrSend } from "react-icons/gr";
import { RiArrowGoBackFill } from "react-icons/ri";

const Chatting = () => {
  const { id } = useParams();
  const [message, setMessage] = useState<string[]>([]);
  const { back } = useRouter();
  const pusher = useMemo(
    () =>
      new Pusher(PRIVATE_ENV.PUSHER_KEY, {
        cluster: PRIVATE_ENV.PUSHER_CLUSTER,
      }),
    []
  );

  // TODO mounted 시 채팅방, 사용자 정보 불러오기
  useEffect(() => {
    const channel = pusher.subscribe("chat-channel");
    channel.bind(CHAT_EVENT.NEW_MESSAGE, (data: MessageInfo) => {
      setMessage((prev) => [...prev, data.message]);
      console.log(data);
      // TODO DB 채팅 메시지 정보 저장
    });

    return () => {
      console.log("unmount");
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [id, pusher]);

  const onSend = async (message: string = "안녕하세요 테스트에요.") => {
    sendMessage({
      roomId: "",
      senderId: "",
      senderName: "",
      message,
      type: CHAT_EVENT.NEW_MESSAGE,
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <div className="size-full flex flex-col">
      <header className="w-full">
        <div className="p-2">
          <button onClick={back}>
            <RiArrowGoBackFill size={20} />
          </button>
        </div>
      </header>
      <main className="size-full">
        <article>
          {MESSAGE_LIST.map((message, index) => (
            <div key={index}>{message.message}</div>
          ))}
        </article>
      </main>
      <footer className="w-full">
        <div className="p-3">
          <form className="flex items-center justify-center gap-2">
            <div className="flex w-full border-2 border-black rounded-lg items-center p-1">
              <textarea
                className="w-full overflow-hidden"
                placeholder="메시지를 입력하세요."
                style={{ height: "20px" }}
              />
            </div>
            <button
              onClick={(event) => {
                event.preventDefault();
                onSend();
              }}
            >
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

const MESSAGE_LIST = [
  {
    readBy: ["1", "2"],
    message: "안녕하세요",
    createdAt: "2021-01-01 12:00:00",
    senderId: "1",
  },
  {
    readBy: ["1", "2"],
    message: "ㅎㅇ",
    createdAt: "2021-01-01 12:00:00",
    senderId: "2",
  },
];
