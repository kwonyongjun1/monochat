import { CommonResponse } from "@/app/api/types";

export type SendMessageRequest = MessageInfo;

export type SendMessageResponse = CommonResponse<MessageInfo>;

export interface MessageInfo {
  roomId: string;
  senderId: string;
  senderName: string;
  message: string;
  type: string;
  createdAt: string;
}
