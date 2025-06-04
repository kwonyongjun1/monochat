import Avatar from "@/components/Avatar";
import { ChatRoomInfo } from "@/types/chat";
import { getChatRoomsformatDateTime } from "@/utils/day";

interface ChatRoomCardProps {
  chatRoomInfo: ChatRoomInfo;
  onClick: () => void;
}
const ChatRoomCard = ({ chatRoomInfo, onClick }: ChatRoomCardProps) => {
  return (
    <article
      data-id={chatRoomInfo.roomId}
      className="px-2 py-3 border-b border-gray-200 hover:bg-gray-100 flex place-content-between flex-wrap cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <Avatar size={48} src="/assets/symbol/google.svg" className="border" />
        <div>
          <h1 className="text-lg font-semibold">{chatRoomInfo.title}</h1>
          <p className="text-sm text-gray-600">
            {chatRoomInfo.lastMessage || "\u00A0"}
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-500">
        {getChatRoomsformatDateTime(chatRoomInfo.lastDate)}
      </p>
    </article>
  );
};

export default ChatRoomCard;
