import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const HeaderNav = () => {
  const { lng } = useParams();
  return (
    <nav className="w-16 h-16">
      <Link href={`/${lng}`}>
        <Image src="/assets/image/logo.png" alt="logo" width={64} height={64} />
      </Link>
    </nav>
  );
};

export default HeaderNav;
