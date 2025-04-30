"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import BottomNav from "./BottomNav";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const { lng } = useParams();

  return (
    <>
      <header>
        <nav>
          <Link href={`/${lng}`}>
            <Image
              src="/assets/image/logo.png"
              alt="logo"
              width={65}
              height={65}
            />
          </Link>
        </nav>
      </header>
      {children}
      <footer className="w-full max-w-screen-sm">
        <BottomNav />
      </footer>
    </>
  );
};

export default MainContainer;
