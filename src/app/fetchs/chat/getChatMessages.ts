import { GetMessageResponse } from "@/app/api/chat/messages/types";
import { objectToURLSearchParams, fetchWithHandling } from "@/utils/fetch";

export const getChatMessages = async (
  roomId: string
): Promise<GetMessageResponse> => {
  const apiPath = "/api/chat/messages";
  const searchParams = objectToURLSearchParams({
    roomId,
  });
  const apiUrl = `${apiPath}?${searchParams}`;

  return fetchWithHandling<GetMessageResponse>(apiUrl);
};
