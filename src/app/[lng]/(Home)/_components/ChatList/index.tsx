import { useState } from "react";
import ChatRoomCard from "./_components/ChatRoomCard";
import EmptyChatList from "./_components/EmptyChatList";
import BottomDrawer from "./_components/BottomDrawer";
import { ChatRoomInfo } from "@/types/chat";
import { useQuery } from "@tanstack/react-query";
import { getChatRooms } from "@/app/fetchs/chat/getChatRooms";
import LoadingChatList from "./_components/LoadingChatList";
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

  const { data: chatRoom, isLoading } = useQuery({
    queryKey: ["chat-list"],
    queryFn: () => getChatRooms("admin"),
  });

  const chatRoomList = chatRoom?.data;

  if (isLoading) {
    return <LoadingChatList />;
  }

  if (!chatRoomList?.length) {
    return <EmptyChatList />;
  }

  return (
    <>
      {chatRoomList.map((chatRoomInfo) => (
        <div key={chatRoomInfo.roomId}>
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
