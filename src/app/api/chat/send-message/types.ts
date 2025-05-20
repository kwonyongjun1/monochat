import { CommonResponse } from "@/app/api/types";
import { MessageInfo } from "../types";

export type SendMessageRequest = MessageInfo & {
  roomId: string;
  type: string;
};

export type SendMessageResponse = CommonResponse<MessageInfo>;
