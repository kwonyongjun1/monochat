"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";
import HeaderNav from "./HeaderNav";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const headerNavVisiblePaths = [
    /^\/[^/]+$/, // ${lng}
    /^\/[^/]+\/invite$/, // ${lng}/invite
    /^\/[^/]+\/info$/, // ${lng}/info
  ];
  const bottomNavVisiblePaths = [
    /^\/[^/]+$/, // ${lng}
    /^\/[^/]+\/invite$/, // ${lng}/invite
    /^\/[^/]+\/info$/, // ${lng}/info
  ];

  const isBottomNavVisible = bottomNavVisiblePaths.some((pattern) =>
    pattern.test(pathname)
  );

  return (
    <>
      <header>{headerNavVisiblePaths && <HeaderNav />}</header>
      <main className="size-full">{children}</main>
      <footer className="w-full max-w-screen-sm">
        {isBottomNavVisible && <BottomNav />}
      </footer>
    </>
  );
};

export default MainContainer;
