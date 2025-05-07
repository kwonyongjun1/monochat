import { useState } from "react";
import ChatRoomCard from "./_components/ChatRoomCard";
import EmptyChatList from "./_components/EmptyChatList";
import BottomDrawer from "./_components/BottomDrawer";
const ChatList = () => {
  const [openRoomId, setOpenRoomId] = useState<number | null>(null);

  const joinChat = (roomId: number) => {
    console.log(roomId);
    setOpenRoomId(roomId);
    // 서버 채팅방 Id
  };

  const chatList = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hello, world!",
      time: "2021-01-01 12:00:00",
    },
  ];

  if (!chatList.length) {
    return <EmptyChatList />;
  }

  return (
    <>
      {chatList.map((chatRoomData) => (
        <>
          <ChatRoomCard
            key={chatRoomData.id}
            chatRoomData={chatRoomData}
            onClick={() => joinChat(chatRoomData.id)}
          />
          <BottomDrawer
            key={`${chatRoomData.id}-drawer`}
            openRoomId={openRoomId}
            setOpenRoomId={setOpenRoomId}
          />
        </>
      ))}
    </>
  );
};

export default ChatList;
