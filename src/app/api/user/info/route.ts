import { firebaseStore } from "@/database/firebase/config";
import { getDocs, where } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { filterSearchParams } from "@/utils/fetch";
import { query } from "firebase/firestore";
import { NextRequest } from "next/server";
import { UserInfo } from "./types";
import { createSuccessResponse } from "@/utils/api/response";
import { createErrorResponse } from "@/utils/api/response";

export const GET = async (request: NextRequest) => {
  try {
    const { userId } = filterSearchParams({
      searchParams: request.nextUrl.searchParams,
      filterKeys: ["userId"],
    }) as { userId: string };

    const q = query(
      collection(firebaseStore, "users"),
      where("id", "==", userId)
    );
    const querySnapshot = await getDocs(q);
    const userInfo: UserInfo[] = querySnapshot.docs.map((doc) => {
      const user = doc.data();
      return {
        id: user.id,
        name: user.name,
        lang: user.lang,
        createAt: user.createAt,
      };
    });

    return createSuccessResponse<UserInfo[]>(userInfo);
  } catch (error) {
    console.error("Error fetching user info:", error);
    return createErrorResponse({
      status: "error",
      message: "Failed to fetch user info",
    });
  }
};
