import { GetUserInfoResponse } from "@/app/api/user/info/types";
import { fetchWithHandling, objectToURLSearchParams } from "@/utils/fetch";

export const getUserInfo = async (
  userId: string
): Promise<GetUserInfoResponse> => {
  const apiPath = "/api/user/info";
  const searchParams = objectToURLSearchParams({
    userId,
  });
  const apiUrl = `${apiPath}?${searchParams}`;

  return fetchWithHandling<GetUserInfoResponse>(apiUrl);
};
