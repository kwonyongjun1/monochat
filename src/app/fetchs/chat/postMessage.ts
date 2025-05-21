import { PostMessageRequest } from "@/app/api/chat/messages/types";
import { fetchWithHandling } from "@/utils/fetch";

export const postMessage = async (
  request: PostMessageRequest
): Promise<void> => {
  return fetchWithHandling("/api/chat/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
};
