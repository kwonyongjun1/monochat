import { useState } from "react";

import { motion } from "framer-motion";
import { useDrag } from "react-use-gesture";
import Dim from "@/components/Dim";
import Link from "next/link";
import { ChatRoomInfo } from "@/types/chat";

interface BottomDrawerProps {
  chatRoomInfo: ChatRoomInfo | null;
  onClose: () => void;
}
const BottomDrawer = ({ chatRoomInfo, onClose }: BottomDrawerProps) => {
  const [y, setY] = useState(0);

  const bind = useDrag(({ down, movement: [, my] }) => {
    if (down) {
      setY(my > 0 ? my : 0);
    } else {
      if (my > 100) {
        onClose();
      }
      setY(0);
    }
  });

  return (
    <>
      {!!chatRoomInfo && <Dim onClick={onClose} />}
      <motion.div
        {...bind()}
        initial={{ y: "100%" }}
        animate={{ y: !!chatRoomInfo ? y : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 40 }}
        style={{
          position: "absolute",
          bottom: -10,
          left: 0,
          width: "100%",
          height: "25vh",
          backgroundColor: "white",
          boxShadow: "0 -2px 5px rgba(0,0,0,0.3)",
          touchAction: "none",
          zIndex: 10,
          borderRadius: "10px 10px 0 0",
        }}
      >
        <header className="p-2 text-center">
          <div
            className="w-10 h-1 bg-black mx-auto rounded-full"
            onClick={onClose}
          />
        </header>
        <div className="size-full content-center p-3">
          {!!chatRoomInfo ? (
            <>
              <div>{chatRoomInfo?.id}</div>
              <div>{chatRoomInfo?.name}</div>
              <div className="flex justify-center gap-2">
                <Link href={`/chatting/${chatRoomInfo?.id}`}>
                  <button
                    type="button"
                    className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Chat
                  </button>
                </Link>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </div>
            </>
          ) : null}
        </div>
      </motion.div>
    </>
  );
};

export default BottomDrawer;
