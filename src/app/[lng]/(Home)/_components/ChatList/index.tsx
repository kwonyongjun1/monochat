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

  if (!chatList.length) {
    return <EmptyChatList />;
  }

  return (
    <>
      {chatList.map((chatRoomInfo) => (
        <div key={chatRoomInfo.id}>
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
