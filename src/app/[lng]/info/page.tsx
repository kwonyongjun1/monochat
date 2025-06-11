"use client";

import Avatar from "@/components/Avatar";
import Select from "@/components/Select";
import { cn } from "@/utils/cn";
import { useSession } from "next-auth/react";

import { signOut } from "next-auth/react";
import { useParams } from "next/navigation";

const Info = () => {
  const { data } = useSession();
  const { lng } = useParams();
  const handleSelectChange = (value: string) => {
    console.log(value);
    // TODO : 사용자 언어 업데이트
    // TODO : 경로 변경
  };

  return (
    <div className="size-full flex items-center">
      <article className="items-center size-full flex flex-col justify-between">
        <div className="flex flex-col w-full gap-2">
          <div className="flex flex-col w-full gap-2">
            <p className="font-bold p-2"> 사용자 정보 </p>
            <div className="flex items-center gap-2 justify-center">
              <Avatar size={80} className="border" />
              <fieldset className=" flex flex-col justify-start">
                <input
                  className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                  id="name"
                  defaultValue={data?.user?.name as string}
                />
              </fieldset>
            </div>
          </div>

          <div className="flex flex-col w-full gap-2">
            <p className="font-bold p-2">언어 설정</p>
            <div className="self-center ">
              <Select
                item={[
                  {
                    label: "English",
                    value: "en",
                  },
                  { label: "한국어", value: "ko" },
                ]}
                defaultValue={lng as string}
                handleChange={handleSelectChange}
              />
            </div>
          </div>
        </div>
        <div
          className="w-full items-center flex flex-col"
          style={{ paddingBottom: "4vh" }}
        >
          <button
            type="button"
            className={cn(
              "w-3/4 text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",
              "bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
              "disabled:bg-gray-500 disabled:hover:bg-gray-500"
            )}
          >
            정보저장
          </button>
          <button
            onClick={() => signOut()}
            type="button"
            className="w-3/4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            로그아웃
          </button>
        </div>
      </article>
    </div>
  );
};

export default Info;
