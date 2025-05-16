import { NextRequest } from "next/server";
import {
  createErrorResponse,
  createSuccessResponse,
} from "@/utils/api/response";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { firebaseStore } from "@/database/firebase/config";
import { ChatRoomInfo } from "@/types/chat";
import { filterSearchParams } from "@/utils/fetch";

export const GET = async (request: NextRequest) => {
  try {
    const { userId } = filterSearchParams({
      searchParams: request.nextUrl.searchParams,
      filterKeys: ["userId"],
    }) as { userId: string };

    const joinedChatRoomIds = await getJoinedChatRoomIds(userId);
    const q = query(
      collection(firebaseStore, "chat"),
      where("chatId", "in", joinedChatRoomIds)
    );
    const querySnapshot = await getDocs(q);
    const chatRooms: ChatRoomInfo[] = querySnapshot.docs.map((doc) => {
      const chatRoom = doc.data();
      return {
        chatId: chatRoom.chatId,
        lastDate: chatRoom.lastDate,
        lastMessage: chatRoom.lastMessage,
        title: chatRoom.title,
      };
    });
    return createSuccessResponse<ChatRoomInfo[]>(chatRooms);
  } catch (error) {
    console.error("Error fetching chat rooms:", error);
    return createErrorResponse({
      status: "error",
      message: "Failed to fetch chat rooms",
    });
  }
};

const getJoinedChatRoomIds = async (userId: string): Promise<string[]> => {
  const q = query(
    collection(firebaseStore, "chatParticipants"),
    where("userId", "==", userId)
  );
  const querySnapshot = await getDocs(q);
  const joinedChatRoomIds = querySnapshot.docs.map(
    (doc) => doc.data().chatRoomId
  );

  return joinedChatRoomIds;
};
