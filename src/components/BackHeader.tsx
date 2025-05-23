"use client";

import { useRouter } from "next/navigation";
import { RiArrowGoBackFill } from "react-icons/ri";

const BackHeader = () => {
  const { push } = useRouter();

  return (
    <header className="w-full">
      <div className="p-2">
        <button onClick={() => push("/")}>
          <RiArrowGoBackFill size={20} />
        </button>
      </div>
    </header>
  );
};

export default BackHeader;
