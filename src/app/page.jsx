import logo from "@/app/rise_logo_black-blue-2.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto items-center justify-center w-[90%] max-w-xl gap-16 px-4 lg:flex-row min-h-[100vh]">
      <div className="flex flex-col order-2 lg:order-1">
        <h1 className="font-bold text-5xl text-transparent bg-gradient-to-l from-[#4a578b] to-[#000c3b] bg-clip-text self-start">
          Bienvenue chez
        </h1>
        <Image src={logo} alt="logo rise black-blue" />
        <p className="text-lg font-bold text-[#000c3b] py-4">
          Réseau Interprovincial des Sports en Évolution.
        </p>
        <p className="text-lg font-bold text-[#293b83] py-4">
          Statistiques • Parties en direct • Assurances
        </p>
        <div className="flex gap-4 flex-col md:flex-row">
          <Link
            href={"/ce-que-nous-offrons"}
            className="
        bg-[#000c3b] hover:bg-[#00061d] border-4 border-[#000c3b] hover:border-[#00061d] text-white rounded-[50px] py-2 px-8 text-xl font-bold items-center justify-center transition-all w-fit"
          >
            Ce que nous offrons
          </Link>
          <Link
            href={"/"}
            className="hover:bg-[#000c3b] border-4 border-[#000c3b] text-[#000c3b] hover:text-white rounded-[50px] py-2 px-8 text-xl font-bold items-center justify-center transition-all w-fit"
          >
            Mode de paiement
          </Link>
        </div>
      </div>
    </div>
  );
}
