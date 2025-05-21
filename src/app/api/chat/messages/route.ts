import { firebaseStore } from "@/database/firebase/config";
import {
  createErrorResponse,
  createSuccessResponse,
} from "@/utils/api/response";
import { addDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { filterSearchParams } from "@/utils/fetch";
import { NextRequest } from "next/server";
import { getChatRoomDocId } from "..";
import { MessageInfo } from "../types";
import { STATE } from "@/constants";
import pusher from "@/utils/pusher";
import { PostMessageRequest, PostMessageResponse } from "./types";

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

export const POST = async (request: NextRequest) => {
  try {
    const {
      roomId,
      senderId,
      message,
      type,
      createdAt,
      readBy,
    }: PostMessageRequest = await request.json();

    const messageData = {
      createdAt,
      message,
      senderId,
      readBy,
    };

    const docId = await getChatRoomDocId(roomId);
    const messagesQuery = collection(firebaseStore, `chat/${docId}/messages`);
    await addDoc(messagesQuery, messageData);
    const chatDocRef = doc(firebaseStore, `chat/${docId}`);
    await updateDoc(chatDocRef, {
      lastMessage: messageData.message,
    });
    await pusher.trigger(roomId, type, messageData);

    return createSuccessResponse<PostMessageResponse>({
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
