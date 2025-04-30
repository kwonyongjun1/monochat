interface ChatListProps {
  chatList: {
    id: number;
    name: string;
    lastMessage: string;
    time: string;
  }[];
}

const ChatList = ({ chatList }: ChatListProps) => {
  const joinChat = (roomId: number) => {
    console.log(roomId);
    // 서버 채팅방 Id
  };
  return (
    <>
      {chatList.map((item) => (
        <div
          key={item.id}
          data-id={item.id}
          className="p-4 border-b border-gray-200 hover:bg-gray-100 flex place-content-between flex-wrap cursor-pointer"
          onClick={() => joinChat(item.id)}
        >
          <div>
            <h1 className="text-lg font-semibold">{item.name}</h1>
            <p className="text-sm text-gray-600">
              {item.lastMessage || "\u00A0"}
            </p>
          </div>
          <p className="text-xs text-gray-500">{item.time}</p>
        </div>
      ))}
    </>
  );
};

export default ChatList;
