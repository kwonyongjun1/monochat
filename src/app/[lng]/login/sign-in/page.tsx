"use client";

import { signIn } from "next-auth/react";
import BackHeader from "@/components/BackHeader";
import Avatar from "@/components/Avatar";

const SignIn = () => {
  return (
    <div className="size-full flex flex-col">
      <BackHeader />
      <article className="size-full px-4 py-8">
        <h1 className="font-bold text-center">
          SNS으로 간편하게 로그인하여 시작하세요.
        </h1>
        <div className="flex flex-center m-4 gap-2 text-slate-300 items-center">
          <hr className="flex-1 border-slate-300" />
          <p className="font-roboto"> 소셜 로그인</p>
          <hr className="flex-1 border-slate-300" />
        </div>
        <section className="flex gap-6 justify-center">
          <button>
            <Avatar
              size={48}
              src="/assets/symbol/google.svg"
              className="border hover-effect"
            />
          </button>
          <button onClick={() => signIn("kakao", { callbackUrl: "/" })}>
            <Avatar
              size={48}
              src="/assets/symbol/kakao.svg"
              className="bg-yellow-300 hover-effect"
            />
          </button>
          <button>
            <Avatar
              size={48}
              src="/assets/symbol/naver.svg"
              className="bg-green-500 hover-effect"
            />
          </button>
        </section>
      </article>
    </div>
  );
};

export default SignIn;
