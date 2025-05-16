import { useState } from "react";
import ChatRoomCard from "./_components/ChatRoomCard";
import EmptyChatList from "./_components/EmptyChatList";
import BottomDrawer from "./_components/BottomDrawer";
import { ChatRoomInfo } from "@/types/chat";

const ChatList = () => {
  const [selectedChatRoom, setSelectedChatRoom] = useState<ChatRoomInfo | null>(
    null
  );

  const onOpen = (chatRoom: ChatRoomInfo) => {
    setSelectedChatRoom(chatRoom);
  };
  const onClose = () => {
    setSelectedChatRoom(null);
  };

  const chatList: ChatRoomInfo[] = [
    {
      chatId: 1,
      title: "John Doe",
      lastMessage: "Hello, world!",
      lastDate: "2021-01-01 12:00:00",
    },
    {
      chatId: 2,
      title: "Jane Doe",
      lastMessage: "Hello, world!",
      lastDate: "2021-01-01 12:00:00",
    },
  ];

  if (!chatList.length) {
    return <EmptyChatList />;
  }

  return (
    <>
      {chatList.map((chatRoomInfo) => (
        <div key={chatRoomInfo.chatId}>
          <ChatRoomCard
            chatRoomInfo={chatRoomInfo}
            onClick={() => onOpen(chatRoomInfo)}
          />
        </div>
      ))}
      <BottomDrawer chatRoomInfo={selectedChatRoom} onClose={onClose} />
    </>
  );
};

export default ChatList;
