import { Timestamp } from "@/types/chat";

export interface MessageInfo {
  senderId: string;
  message: string;
  createdAt: Timestamp;
  readBy: string[];
}
