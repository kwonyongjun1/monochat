"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { CiChat1, CiCircleInfo, CiCirclePlus } from "react-icons/ci";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const { lng } = useParams();

  return (
    <>
      <header>
        <nav>
          <a>Home</a>
        </nav>
      </header>
      {children}
      <footer className="w-full max-w-screen-sm">
        <nav className="flex justify-center border-t border-t-slate-100 p-1">
          <ul className="flex w-full justify-between">
            <li className="flex flex-col items-center w-full icon-fade icon-hover-effect text-sm cursor-pointer">
              <Link href={`/${lng}`} className="w-full place-items-center ">
                <CiChat1 size={24} />
              </Link>
              대화
            </li>
            <li className="flex flex-col items-center w-full icon-fade icon-hover-effect text-sm cursor-pointer">
              <Link
                href={`/${lng}/invite`}
                className="w-full place-items-center"
              >
                <CiCirclePlus size={24} />
              </Link>
              초대
            </li>
            <li className="flex flex-col items-center w-full icon-fade icon-hover-effect text-sm cursor-pointer">
              <Link href={`/${lng}/info`} className="w-full place-items-center">
                <CiCircleInfo size={24} />
              </Link>
              내정보
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default MainContainer;
