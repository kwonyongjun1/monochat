import { fetchWithHandling } from "@/utils/fetch";
import { SendMessageRequest } from "../api/chat/send-message/types";

export const sendMessage = async (
  request: SendMessageRequest
): Promise<void> => {
  return fetchWithHandling("/api/chat/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
};
