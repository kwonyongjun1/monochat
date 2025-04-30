import dynamic from "next/dynamic";
import animationData from "@/assets/lottie/chat-empty.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ChatRoomPlaceholder = () => {
  return (
    <div className="flex flex-1 flex-col gap-2 place-items-center">
      <div className="w-64 h-64">
        <Lottie animationData={animationData} style={{ width: "250px" }} />
      </div>
      <h3 className="text-lg font-semibold text-zinc-500">
        Enter chatting room
      </h3>
    </div>
  );
};

export default ChatRoomPlaceholder;
