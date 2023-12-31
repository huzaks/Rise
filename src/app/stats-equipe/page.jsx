import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { BsBoxArrowUpRight, BsFillSuitDiamondFill } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
export default function page() {
  return (
    <div className="w-full min-h-[100vh] max-w-3xl pt-32">
      <div className="flex p-4 flex-col gap-8">
        <div className="w-fit">
          <Link
            href={"/hockey"}
            className="group flex gap-4 text-[#00061d] text-md font-bold items-center justify-center transition-all hover:underline"
          >
            <FiArrowLeft className=" text-[#00061d] text-lg" />
            Retour
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="flex text-4xl font-bold">Les Loups des Collines</h1>
          <Link
            href={"http://www.maryza.com/sites/201406/collinescoyotesnoa/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 items-center bg-transparent hover:bg-[#000c3b] border-4 border-[#000c3b] text-[#000c3b] hover:text-white rounded-[50px] py-2 px-8 w-fit font-bold transition-all"
          >
            <div>Site web</div>
            <BsBoxArrowUpRight />
          </Link>
        </div>
        <div className="flex gap-4 items-center text-2xl">
          <BsFillSuitDiamondFill className="text-[#000c3b]" />
          <h2 className="font-bold">Joueurs et entraîneurs</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[#000c3b]">Numéro</TableHead>
              <TableHead className="text-[#000c3b]">Nom du joueur</TableHead>
              <TableHead className="text-[#000c3b]">Position</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>23</TableCell>
              <TableCell>
                <Link href={"/stats-joueur"} className="hover:underline">
                  Gratton, Marc
                </Link>
              </TableCell>
              <TableCell>Centre</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>34</TableCell>
              <TableCell>
                {" "}
                <Link href={"/stats-joueur"} className="hover:underline">
                  Jeremy Giroux
                </Link>
              </TableCell>
              <TableCell>Ailier gauche</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>49</TableCell>
              <TableCell>
                {" "}
                <Link href={"/stats-joueur"} className="hover:underline">
                  Joueur 3
                </Link>
              </TableCell>
              <TableCell>Défenseur droit</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                {" "}
                <Link href={"/stats-joueur"} className="hover:underline">
                  Entraîneur Chef
                </Link>
              </TableCell>
              <TableCell>Entraîneur Chef</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
