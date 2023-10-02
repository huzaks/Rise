import Image from "next/image";
import Link from "next/link";
import logo from "@/app/rise_logo_black-blue-2.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto items-center justify-center w-[90%] max-w-xl gap-16 px-4 lg:flex-row min-h-[100vh]">
      <div className="flex flex-col order-2 lg:order-1"> {/* MARC retire items-center */}
        <h1 className="font-bold text-5xl text-transparent bg-gradient-to-l from-[#4a578b] to-[#000c3b] bg-clip-text self-start">
          Bienvenue chez
        </h1>
        <Image src={logo} alt="logo rise black-blue" />
        <p className="text-lg font-bold text-[#000c3b] py-8">
          Réseau Interprovincial des Sports en Évolution.
        </p>
        <div className="flex gap-4 flex-col md:flex-row">
          <Link
            href={"/"}
            className="bg-[#000c3b] hover:bg-[#00061d] border-4 border-[#000c3b] hover:border-[#00061d] text-white rounded-[50px] py-2 px-8 text-xl font-bold items-center justify-center transition-all w-fit"
          >
            Abonnement
          </Link>

          <AlertDialog>
            <AlertDialogTrigger>
              <div className="bg-s hover:bg-[#000c3b] border-4 border-[#000c3b] text-[#000c3b] hover:text-white rounded-[50px] py-2 px-8 text-xl font-bold items-center justify-center transition-all w-fit">
                Ce que nous offrons
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Voici ce que nous offrons</AlertDialogTitle>
                <AlertDialogDescription>
                  <Image src={logo} className="md:w-full w-[50%]"/>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Retour</AlertDialogCancel>
                <AlertDialogAction>S'abonner</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
