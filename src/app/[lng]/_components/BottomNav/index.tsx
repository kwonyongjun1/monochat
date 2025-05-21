import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import {
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { HiOutlinePlusCircle, HiPlusCircle } from "react-icons/hi";
import { RiInformation2Fill, RiInformation2Line } from "react-icons/ri";

const BottomNav = () => {
  const { lng } = useParams();
  const pathname = usePathname();

  const menuItems = [
    {
      path: `/${lng}`,
      label: "대화",
      activeIcon: <IoChatbubbleEllipses size={24} />,
      inactiveIcon: <IoChatbubbleEllipsesOutline size={24} />,
    },
    {
      path: `/${lng}/invite`,
      label: "초대",
      activeIcon: <HiPlusCircle size={24} />,
      inactiveIcon: <HiOutlinePlusCircle size={24} />,
    },
    {
      path: `/${lng}/info`,
      label: "내정보",
      activeIcon: <RiInformation2Fill size={24} />,
      inactiveIcon: <RiInformation2Line size={24} />,
    },
  ];

  return (
    <nav className="flex justify-center border-t border-t-slate-100 p-4">
      <ul className="flex w-full justify-between">
        {menuItems.map((item) => {
          const isCurrentPath = pathname === item.path;
          return (
            <li
              key={item.path}
              className="flex flex-col items-center w-full icon-hover-effect text-xs cursor-pointer"
            >
              <Link href={item.path}>
                <div className="w-full place-items-center">
                  {isCurrentPath ? item.activeIcon : item.inactiveIcon}
                  {item.label}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
