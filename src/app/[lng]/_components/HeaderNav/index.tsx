import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MdOutlineLanguage } from "react-icons/md";

const HeaderNav = () => {
  const { lng } = useParams();
  return (
    <div className="flex justify-between items-center w-full">
      <nav className="w-20 h-16 content-center">
        <Link href={`/${lng}`}>
          <Image
            src="/assets/image/monochat-logo.png"
            alt="logo"
            width={72}
            height={72}
          />
        </Link>
      </nav>
      <div className="text-xl font-bold">
        <div className="flex items-center gap-1 p-2">
          <MdOutlineLanguage />
          {lng}
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
