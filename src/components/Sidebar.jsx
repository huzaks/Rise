"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/app/rise_logo_white-2.png";
import { GiHockey, GiSoccerBall } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Switch } from "@/components/ui/switch";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <>
      <nav className="hidden md:flex relative p-4 min-h-[100vh] w-64 bg-gradient-to-t from-[#00061d] to-[#000c3b] flex-col gap-4">
        <Link href={"/"}>
          <Image src={logo} alt="Logo Rise" />
        </Link>
        <div className="flex flex-col text-white text-sm gap-1">
          Général
          <Link
            href={"/"}
            className={`font-semibold rounded-sm px-2  text-lg flex gap-2 items-center mt-1  ${
              pathname === "/"
                ? "bg-slate-200/[.30]"
                : "text-white hover:bg-slate-200/[.30] transition-all"
            }`}
          >
            <IoHome />
            Accueil
          </Link>
        </div>
        <div className="flex flex-col text-white text-sm gap-1">
          Sports
          <Link
            href={"/hockey"}
            className={`font-semibold rounded-sm px-2  text-lg flex gap-2 items-center mt-1  ${
              pathname.includes("hockey")
                ? "bg-slate-200/[.30]"
                : "text-white hover:bg-slate-200/[.30] transition-all"
            }`}
          >
            <GiHockey />
            Hockey
          </Link>
          <Link
            href={"/soccer"}
            className={`font-semibold rounded-sm px-2 text-lg flex gap-2 items-center mt-1 ${
              pathname.includes("soccer")
                ? "bg-slate-200/[.30]"
                : "text-white hover:bg-slate-200/[.30] transition-all"
            }`}
          >
            <GiSoccerBall />
            Soccer
          </Link>
        </div>

        <div className="absolute bottom-4 flex flex-col text-white text-sm gap-6">
          
          <Link
            href={"/reglages"}
            className={`font-semibold rounded-sm px-2 text-lg flex gap-2 items-center mt-1 ${
              pathname.includes("reglages")
                ? "bg-slate-200/[.30]"
                : "text-white hover:bg-slate-200/[.30] transition-all"
            }`}
          >
            <FiSettings />
            Réglages
          </Link>
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">Utilisateur</p>
              <p>utilisateur@email.com</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
