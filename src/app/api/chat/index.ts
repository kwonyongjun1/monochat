import { getDocs } from "firebase/firestore";
import { query } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { firebaseStore } from "@/database/firebase/config";
import { where } from "firebase/firestore";

export const getChatRoomDocId = async (
  roomId: string
): Promise<string | null> => {
  const chatQuery = query(
    collection(firebaseStore, "chat"),
    where("roomId", "==", roomId)
  );
  const chatSnapshot = await getDocs(chatQuery);

  if (chatSnapshot.empty) {
    return null;
  }

  const chatDocId = chatSnapshot.docs[0].id;
  return chatDocId;
};
