"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PRIVATE_ENV, CHAT_EVENT } from "@/constants";
import Pusher from "pusher-js";
import { sendMessage } from "@/app/fetchs/sendMessage";
import { MessageInfo } from "@/app/api/chat/send-message/types";

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
      <div className="w-full">
        <button onClick={back}>뒤로가즈아</button>
        <button
          onClick={() => {
            onSend();
          }}
        >
          Send Message
        </button>
      </div>
      <div className="size-full">
        Chatting {id}
        {message.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    </div>
  );
};

export default Chatting;
