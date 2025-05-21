import { STATE } from "@/constants";

type StatusType = typeof STATE.SUCCESS | typeof STATE.ERROR;

export interface MetaInfo {
  status: StatusType;
  message: string;
  error?: string;
}

export interface CommonResponse<T = object> {
  data: T | null;
  metaInfo: MetaInfo;
}
