import { CommonResponse, MetaInfo } from "@/app/api/types";
import { NextResponse } from "next/server";

export const createSuccessResponse = <T = object>(
  data: T,
  metaInfo: MetaInfo = { status: "success", message: "Success" }
) => {
  const response: CommonResponse<T> = {
    data,
    metaInfo,
  };

  return NextResponse.json(response);
};

export const createErrorResponse = (
  metaInfo: MetaInfo = { status: "error", message: "Failed" }
) => {
  const response: CommonResponse = {
    data: null,
    metaInfo,
  };

  return NextResponse.json(response);
};
