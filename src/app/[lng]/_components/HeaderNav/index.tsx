import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MdOutlineLanguage } from "react-icons/md";

const HeaderNav = () => {
  const { lng } = useParams();
  return (
    <div className="flex justify-between items-center w-full">
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
      <div className="text-2xl font-bold">
        <div className="flex items-center gap-1 p-2">
          <MdOutlineLanguage />
          {lng}
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
