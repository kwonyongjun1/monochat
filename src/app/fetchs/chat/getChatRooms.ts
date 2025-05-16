import { GetChatRoomsResponse } from "@/app/api/chat/rooms/types";
import { fetchWithHandling, objectToURLSearchParams } from "@/utils/fetch";

export const getChatRooms = async (
  userId: string
): Promise<GetChatRoomsResponse> => {
  const apiPath = "/api/chat/rooms";
  const searchParams = objectToURLSearchParams({
    userId,
  });
  const apiUrl = `${apiPath}?${searchParams}`;

  return fetchWithHandling<GetChatRoomsResponse>(apiUrl);
};
