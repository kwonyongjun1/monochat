interface ChatRoomCardProps {
  chatRoomInfo: {
    id: number;
    name: string;
    lastMessage: string;
    time: string;
  };
  onClick: () => void;
}
const ChatRoomCard = ({ chatRoomInfo, onClick }: ChatRoomCardProps) => {
  return (
    <article
      data-id={chatRoomInfo.id}
      className="p-4 border-b border-gray-200 hover:bg-gray-100 flex place-content-between flex-wrap cursor-pointer"
      onClick={onClick}
    >
      <div>
        <h1 className="text-lg font-semibold">{chatRoomInfo.name}</h1>
        <p className="text-sm text-gray-600">
          {chatRoomInfo.lastMessage || "\u00A0"}
        </p>
      </div>
      <p className="text-xs text-gray-500">{chatRoomInfo.time}</p>
    </article>
  );
};

export default ChatRoomCard;
