"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/app/risewhite.png";
import { GiHockey, GiSoccerBall } from "react-icons/gi";
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <>
      <div className="p-4 min-h-[100vh] w-52 bg-[#00092C] flex flex-col gap-4">
        <Link href={"/"} className="text-5xl font-bold">
          <Image src={logo} alt="Logo Rise" />
        </Link>
        <div className="text-white text-sm">
            Sports
        <Link
          href={"/hockey"}
          className={`text-lg flex gap-2 items-center mt-1 ml-4 ${
            pathname.includes("hockey")
              ? "text-[#B20600]"
              : "text-white hover:text-[#B20600] transition-all"
          }`}
        >
          <GiHockey />
          Hockey
        </Link>
        <Link
          href={"/soccer"}
          className={`text-lg flex gap-2 items-center mt-1 ml-4 ${
            pathname.includes("soccer")
              ? "text-[#B20600]"
              : "text-white hover:text-[#B20600] transition-all"
          }`}
        >
          <GiSoccerBall />
          Soccer
        </Link>
        </div>
        
        {/* <Link href={'/soccer'} className={`underline text-xl ${pathname.includes("soccer") ? "text-blue-800" : ''}`}>Soccer</Link> */}
      </div>
    </>
  );
}
