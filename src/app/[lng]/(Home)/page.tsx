"use client";

import { getChatRooms } from "@/app/fetchs/chat/getChatRooms";
import { useWelcomeNotify } from "@/hooks";
import { ChatRoomInfo } from "@/types/chat";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SkeletonLoading from "./_components/SkeletonLoading";
import EmptyChatRoom from "./_components/EmptyChatRoom";
import ChatRoomCard from "./_components/ChatRoomCard";
import BottomDrawer from "./_components/BottomDrawer";

const Page = () => {
  useWelcomeNotify();

  const [selectedChatRoom, setSelectedChatRoom] = useState<ChatRoomInfo | null>(
    null
  );

  const onOpen = (chatRoom: ChatRoomInfo) => {
    setSelectedChatRoom(chatRoom);
  };
  const onClose = () => {
    setSelectedChatRoom(null);
  };

  const { data: chatRoom, isLoading } = useQuery({
    queryKey: ["chat-list"],
    queryFn: () => getChatRooms("admin"),
  });

  const chatRoomList = chatRoom?.data;

  if (isLoading) {
    return (
      <>
        {[...Array(20)].map((_, index) => (
          <div key={index}>
            <SkeletonLoading />
          </div>
        ))}
      </>
    );
  }

  if (!chatRoomList?.length) {
    return <EmptyChatRoom />;
  }

  return (
    <article className="overflow-auto h-full">
      {chatRoomList.map((chatRoomInfo) => (
        <div key={chatRoomInfo.roomId}>
          <ChatRoomCard
            chatRoomInfo={chatRoomInfo}
            onClick={() => onOpen(chatRoomInfo)}
          />
        </div>
      ))}
      <BottomDrawer chatRoomInfo={selectedChatRoom} onClose={onClose} />
    </article>
  );
};

export default Page;
