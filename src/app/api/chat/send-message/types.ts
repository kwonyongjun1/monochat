import { CHAT_EVENT } from "@/constants";
import { CommonResponse } from "@/app/api/types";

export type SendMessageRequest = MessageInfo;

export type SendMessageResponse = CommonResponse<MessageInfo>;

export interface MessageInfo {
  roomId: string;
  senderId: string;
  senderName: string;
  message: string;
  type: MessageType;
  createdAt: string;
}

export type MessageType =
  | typeof CHAT_EVENT.NEW_MESSAGE
  | typeof CHAT_EVENT.USER_JOIN
  | typeof CHAT_EVENT.USER_LEFT;
