import { firebaseStore } from "@/database/firebase/config";
import {
  createErrorResponse,
  createSuccessResponse,
} from "@/utils/api/response";
import { getDocs } from "firebase/firestore";
import { collection, where } from "firebase/firestore";
import { filterSearchParams } from "@/utils/fetch";
import { query } from "firebase/firestore";
import { NextRequest } from "next/server";
import { MessageInfo } from "./types";

export const GET = async (request: NextRequest) => {
  try {
    const { chatId } = filterSearchParams({
      searchParams: request.nextUrl.searchParams,
      filterKeys: ["chatId"],
    }) as { chatId: string };
    const docId = await getChatRoomDocId(chatId);

    const messagesQuery = collection(firebaseStore, `chat/${docId}/messages`);
    const messagesSnapshot = await getDocs(messagesQuery);
    const messages: MessageInfo[] = messagesSnapshot.docs.map((doc) => {
      const message = doc.data();
      return {
        message: message.message,
        senderId: message.senderId,
        readBy: message.readBy,
        createdAt: message.createdAt,
      };
    });

    return createSuccessResponse<MessageInfo[]>(messages);
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    return createErrorResponse({
      status: "error",
      message: "Failed to fetch chat messages",
    });
  }
};

const getChatRoomDocId = async (chatId: string): Promise<string | null> => {
  const chatQuery = query(
    collection(firebaseStore, "chat"),
    where("chatId", "==", chatId)
  );
  const chatSnapshot = await getDocs(chatQuery);

  if (chatSnapshot.empty) {
    return null;
  }

  const chatDocId = chatSnapshot.docs[0].id;
  return chatDocId;
};
