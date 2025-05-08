"use client";

import { useParams } from "next/navigation";

const Chatting = () => {
  const { id } = useParams();
  return (
    <div className="size-full flex flex-col">
      <div className="w-full">Header</div>
      <div className="size-full">Chatting {id}</div>
    </div>
  );
};

export default Chatting;
