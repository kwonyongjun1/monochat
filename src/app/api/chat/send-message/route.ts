import { NextRequest } from "next/server";
import { CHAT_EVENT, STATE } from "@/constants";
import pusher from "@/utils/pusher";
import { SendMessageRequest, SendMessageResponse } from "./types";
import {
  createErrorResponse,
  createSuccessResponse,
} from "@/utils/api/response";

export const POST = async (request: NextRequest) => {
  try {
    const pusherData: SendMessageRequest = await request.json();
    // TODO "chat-channel" -> roomId로 변경
    // const { roomId } = body;
    await pusher.trigger("chat-channel", CHAT_EVENT.NEW_MESSAGE, pusherData);

    return createSuccessResponse<SendMessageResponse>({
      data: pusherData,
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
