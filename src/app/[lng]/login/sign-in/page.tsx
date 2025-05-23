"use client";

import { Avatar } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import BackHeader from "@/components/BackHeader";

const SignIn = () => {
  return (
    <div className="size-full flex flex-col">
      <BackHeader />
      <article className="size-full px-4 py-8">
        <div className="flex flex-center m-4 gap-2 text-slate-300 items-center">
          <hr className="flex-1 border-slate-300" />
          <p className="font-roboto"> 소셜 로그인</p>
          <hr className="flex-1 border-slate-300" />
        </div>
        <section className="flex gap-6 justify-center">
          <button>
            <Avatar
              size="4"
              radius="full"
              src="/assets/symbol/google.svg"
              fallback="A"
              className="border"
            />
          </button>
          <button onClick={() => signIn("kakao", { callbackUrl: "/" })}>
            <Avatar
              size="4"
              radius="full"
              src="/assets/symbol/kakao.svg"
              fallback="A"
              className="bg-yellow-300"
            />
          </button>
          <button>
            <Avatar
              size="4"
              radius="full"
              src="/assets/symbol/naver.svg"
              fallback="A"
              className="bg-green-500"
            />
          </button>
        </section>
      </article>
    </div>
  );
};

export default SignIn;
