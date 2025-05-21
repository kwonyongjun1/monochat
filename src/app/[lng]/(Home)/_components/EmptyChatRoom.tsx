import dynamic from "next/dynamic";
import animationData from "@/assets/lottie/space-drift.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const EmptyChatRoom = () => {
  return (
    <div className="h-full content-center">
      <div className="flex flex-1 flex-col gap-2 place-items-center justify-center">
        <div className="w-full">
          <Lottie animationData={animationData} />
        </div>
        <h3 className="text-lg font-semibold text-zinc-500">
          Invite your friends
        </h3>
      </div>
    </div>
  );
};

export default EmptyChatRoom;
