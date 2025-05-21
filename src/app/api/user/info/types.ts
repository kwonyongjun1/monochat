import { CommonResponse } from "../../types";

export type GetUserInfoResponse = CommonResponse<UserInfo>;

export interface UserInfo {
  id: string;
  lang: string;
  name: string;
  createAt: string;
}
