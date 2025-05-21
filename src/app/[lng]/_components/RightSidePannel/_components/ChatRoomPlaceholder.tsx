import dynamic from "next/dynamic";
import animationData from "@/assets/lottie/message-wave.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ChatRoomPlaceholder = () => {
  return (
    <div className="flex flex-1 flex-col gap-2 place-items-center justify-center">
      <div className="w-full">
        <Lottie
          animationData={animationData}
          style={{ maxWidth: "640px", height: "263px" }}
        />
      </div>
      <h3 className="text-lg font-semibold text-zinc-500">
        Enter chatting room
      </h3>
    </div>
  );
};

export default ChatRoomPlaceholder;
