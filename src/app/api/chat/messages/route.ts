import { firebaseStore } from "@/database/firebase/config";
import {
  createErrorResponse,
  createSuccessResponse,
} from "@/utils/api/response";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { filterSearchParams } from "@/utils/fetch";
import { NextRequest } from "next/server";
import { getChatRoomDocId } from "..";
import { MessageInfo } from "../types";

export const GET = async (request: NextRequest) => {
  try {
    const { roomId } = filterSearchParams({
      searchParams: request.nextUrl.searchParams,
      filterKeys: ["roomId"],
    }) as { roomId: string };
    const docId = await getChatRoomDocId(roomId);

    const messagesQuery = collection(firebaseStore, `chat/${docId}/messages`);
    const messagesSnapshot = await getDocs(messagesQuery);
    const messages: MessageInfo[] = messagesSnapshot.docs.map((doc) => {
      const message = doc.data();
      return {
        message: message.message,
        senderId: message.senderId,
        readBy: message.readBy,
        createdAt: message.createdAt,
        roomId: roomId,
        type: message.type,
      };
    });
    messages.sort((a, b) => a.createdAt.seconds - b.createdAt.seconds);

    return createSuccessResponse<MessageInfo[]>(messages);
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    return createErrorResponse({
      status: "error",
      message: "Failed to fetch chat messages",
    });
  }
};
