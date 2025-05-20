import { NextRequest } from "next/server";
import { STATE } from "@/constants";
import pusher from "@/utils/pusher";
import { SendMessageRequest, SendMessageResponse } from "./types";
import {
  createErrorResponse,
  createSuccessResponse,
} from "@/utils/api/response";
import { getChatRoomDocId } from "..";
import { addDoc, collection } from "firebase/firestore";
import { firebaseStore } from "@/database/firebase/config";

export const POST = async (request: NextRequest) => {
  try {
    const {
      roomId,
      senderId,
      message,
      type,
      createdAt,
      readBy,
    }: SendMessageRequest = await request.json();

    const messageData = {
      createdAt,
      message,
      senderId,
      readBy,
    };

    const docId = await getChatRoomDocId(roomId);
    const messagesQuery = collection(firebaseStore, `chat/${docId}/messages`);
    await addDoc(messagesQuery, messageData);
    await pusher.trigger(roomId, type, messageData);
    // TODO 채팅방 last message 업데이트

    return createSuccessResponse<SendMessageResponse>({
      data: messageData,
      metaInfo: {
        status: STATE.SUCCESS,
        message: "Successfully sent message",
      },
    });
  } catch (error) {
    console.error("Error sending message:", error);
    return createErrorResponse({
      status: "error",
      message: "Failed to send message",
    });
  }
};
