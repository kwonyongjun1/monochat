import { useState } from "react";

import { motion } from "framer-motion";
import { useDrag } from "react-use-gesture";
import Dim from "@/components/Dim";

const BottomDrawer = ({
  openRoomId,
  setOpenRoomId,
}: {
  openRoomId: number | null;
  setOpenRoomId: (roomId: number | null) => void;
}) => {
  const [y, setY] = useState(0);

  const bind = useDrag(({ down, movement: [, my] }) => {
    if (down) {
      setY(my);
    } else {
      if (my > 100) {
        setOpenRoomId(null);
      }
      setY(0);
    }
  });

  return (
    <>
      {openRoomId && <Dim onClick={() => setOpenRoomId(null)} />}
      <motion.div
        {...bind()}
        initial={{ y: "100%" }}
        animate={{ y: !!openRoomId ? y : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 40 }}
        style={{
          position: "absolute",
          bottom: -10,
          left: 0,
          width: "100%",
          height: "300px",
          backgroundColor: "lightgray",
          boxShadow: "0 -2px 5px rgba(0,0,0,0.3)",
          touchAction: "none",
          zIndex: 10,
        }}
      >
        <h2>Drawer Content</h2>
        <p>This is the content of the drawer.</p>
      </motion.div>
    </>
  );
};

export default BottomDrawer;
