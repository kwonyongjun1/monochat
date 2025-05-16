import { GetMessageResponse } from "@/app/api/chat/messages/types";
import { objectToURLSearchParams, fetchWithHandling } from "@/utils/fetch";

export const getChatRoomMessage = async (
  chatId: string
): Promise<GetMessageResponse> => {
  const apiPath = "/api/chat/messages";
  const searchParams = objectToURLSearchParams({
    chatId,
  });
  const apiUrl = `${apiPath}?${searchParams}`;

  return fetchWithHandling<GetMessageResponse>(apiUrl);
};
