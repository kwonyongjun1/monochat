import { CommonResponse } from "../../types";

export type GetMessageResponse = CommonResponse<MessageInfo[]>;

export interface MessageInfo {
  message: string;
  readBy: string[];
  senderId: string;
  createdAt: string;
}
