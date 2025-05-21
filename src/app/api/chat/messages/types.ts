import { CommonResponse } from "../../types";
import { MessageInfo } from "../types";

export type GetMessageResponse = CommonResponse<MessageInfo[]>;

export type PostMessageRequest = MessageInfo & {
  roomId: string;
  type: string;
};

export type PostMessageResponse = CommonResponse<MessageInfo>;
