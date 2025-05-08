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
        <nav className="w-16 h-16">
          <Link href={`/${lng}`}>
            <Image
              src="/assets/image/logo.png"
              alt="logo"
              width={64}
              height={64}
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
