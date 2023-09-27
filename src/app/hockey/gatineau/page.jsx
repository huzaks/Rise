"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineSearch } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";

export default function page() {
  const [search, setSearch] = useState("");

  const gatineau = getGatineauEquipes();


  return (
    <div className="w-full gap-12 min-h-[100vh]">
      <div className="flex justify-between items-center h-32 w-full bg-[#000c3b]">
        <h1 className="text-xl md:text-3xl font-bold text-white pl-6">
          Hockey - Gatineau
        </h1>
        <div className="flex h-[52px] w-96 border-4 border-[#000c3b] rounded-[50px] mr-2">
          <div className="relative w-full h-full align-middle">
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher"
              value={search}
              className="font-bold rounded-[50px] px-3 w-full h-full border-0 focus:outline-none"
            />
            <Link href={"#"}>
              <AiOutlineSearch className="absolute right-0 top-0 bottom-0 h-8 w-8 m-auto pr-1" />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-12 pl-4 w-fit">
        <Link href={'/hockey'} className="group flex gap-4 bg-transparent hover:bg-[#00061d] border-4 border-[#00061d] text-[#00061d] hover:text-white rounded-[50px] py-2 px-4 text-md font-bold items-center justify-center transition-all ">
          <FiArrowLeft className=" text-[#00061d] text-lg group-hover:text-white transition-all" />Retour
        </Link>
      
      </div>
      <h2 className="text-4xl font-bold text-center pb-12 ">Catégories hockey - Gatineau</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-4">
      <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">MAHG</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m9-1">
              <div>
                <AccordionTrigger className="text-lg">MAHG</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">1 & 2</Link>
                  </div>
                  
                </AccordionContent>
              </div>
            </AccordionItem>
            
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">M9 - Novice</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m9-1">
              <div>
                <AccordionTrigger className="text-lg">1</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Barons</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Chevaliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Remparts</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Titans</Link>
                  </div>
                  
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m9-2">
              <div>
                <AccordionTrigger className="text-lg">2</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Barons</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Chevaliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Remparts</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Titans</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m9-3">
              <div>
                <AccordionTrigger className="text-lg">3</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Barons</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Chevaliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Remparts</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Titans</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m9-4">
              <div>
                <AccordionTrigger className="text-lg">4</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Barons</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Chevaliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Harfangs</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Remparts</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">M11 - Atome</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m11-BB">
              <div>
                <AccordionTrigger className="text-lg">BB</AccordionTrigger>
                <AccordionContent>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Ambassadeurs</Link>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m11-A">
              <div>
                <AccordionTrigger className="text-lg">A</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Chevaliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Guerriers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Remparts</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m11-B">
              <div>
                <AccordionTrigger className="text-lg">B</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Chevaliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Guerriers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Remparts</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m11-C">
              <div>
                <AccordionTrigger className="text-lg">C</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Chevaliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Guerriers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Remparts</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">M13 - PeeWee</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m13-BB">
              <div>
                <AccordionTrigger className="text-lg">BB</AccordionTrigger>
                <AccordionContent>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit"iv>Ambassadeurs</Link>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m13-A">
              <div>
                <AccordionTrigger className="text-lg">A</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Guerriers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Remparts</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m13-B">
              <div>
                <AccordionTrigger className="text-lg">B</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Boucliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Chevaliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Remparts</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m13-C">
              <div>
                <AccordionTrigger className="text-lg">C</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Archers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Boucliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Guerriers</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">M15 - Bantam</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m15-BB">
              <div>
                <AccordionTrigger className="text-lg">BB</AccordionTrigger>
                <AccordionContent>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit"iv>Ambassadeurs</Link>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m15-A">
              <div>
                <AccordionTrigger className="text-lg">A</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Boucliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Chevaliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Guerriers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Remparts</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m15-B">
              <div>
                <AccordionTrigger className="text-lg">B</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Archers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Boucliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Chevaliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Guerriers</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m15-C">
              <div>
                <AccordionTrigger className="text-lg">C</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Archers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Boucliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Guerriers</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">M18 - Midget</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m18-BB">
              <div>
                <AccordionTrigger className="text-lg">BB</AccordionTrigger>
                <AccordionContent>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit"iv>Avalanche</Link>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m18-A">
              <div>
                <AccordionTrigger className="text-lg">A</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Archers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Chevaliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Guerriers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Titans</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m18-B">
              <div>
                <AccordionTrigger className="text-lg">B</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Archers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Boucliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Chevaliers</Link>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Guerriers</Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
           
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">M21 - Junior</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m21-A">
              <div>
                <AccordionTrigger className="text-lg">A</AccordionTrigger>
                <AccordionContent>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit"iv>Chevaliers</Link>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m21-B">
              <div>
                <AccordionTrigger className="text-lg">B</AccordionTrigger>
                <AccordionContent>
                  <Link href={"/hockey/gatineau/equipe"} className="font-semibold hover:font-bold w-fit">Archers</Link>
                </AccordionContent>
              </div>
            </AccordionItem>
           
          </Accordion>
        </div>
      </div>
    </div>
  );
}

function getGatineauEquipes() {
  const gatineau = [
    {
      titre: "m9",
      classement: "1",
      nom: "Novice",
      equipes: ["Barons", "Chevaliers", "Remparts", "Titans"],
    },
    {
      titre: "m9",
      classement: "2",
      nom: "Novice",
      equipes: ["Barons", "Chevaliers", "Remparts", "Titans"],
    },
    {
      titre: "m9",
      classement: "3",
      nom: "Novice",
      equipes: ["Barons", "Chevaliers", "Remparts", "Titans"],
    },
    {
      titre: "m9",
      classement: "4",
      nom: "Novice",
      equipes: ["Barons", "Chevaliers", "Harfangs", "Remparts"],
    },
    {
      titre: "m11",
      classement: "BB",
      nom: "Atome",
      equipes: ["Ambassadeurs"],
    },
    {
      titre: "m11",
      classement: "A",
      nom: "Atome",
      equipes: ["Chevaliers", "Guerriers", "Remparts"],
    },
    {
      titre: "m11",
      classement: "B",
      nom: "Atome",
      equipes: ["Chevaliers", "Guerriers", "Remparts"],
    },
    {
      titre: "m11",
      classement: "C",
      nom: "Atome",
      equipes: ["Chevaliers", "Guerriers", "Remparts"],
    },
    {
      titre: "m13",
      classement: "BB",
      nom: "PeeWee",
      equipes: ["Ambassadeurs"],
    },
    {
      titre: "m13",
      classement: "A",
      nom: "PeeWee",
      equipes: ["Guerriers", "Remparts"],
    },
    {
      titre: "m13",
      classement: "B",
      nom: "PeeWee",
      equipes: ["Boucliers", "Chevaliers", "Remparts"],
    },
    {
      titre: "m13",
      classement: "C",
      nom: "PeeWee",
      equipes: ["Archers", "Boucliers", "Guerriers"],
    },
    {
      titre: "m15",
      classement: "BB",
      nom: "Bantam",
      equipes: ["Ambassadeurs"],
    },
    {
      titre: "m15",
      classement: "A",
      nom: "Bantam",
      equipes: ["Boucliers", "Chevaliers", "Guerriers", "Remparts"],
    },
    {
      titre: "m15",
      classement: "B",
      nom: "Bantam",
      equipes: ["Archers", "Boucliers", "Chevaliers", "Guerriers"],
    },
    {
      titre: "m18",
      classement: "BB",
      nom: "Midget",
      equipes: ["Avalanche"],
    },
    {
      titre: "m18",
      classement: "A",
      nom: "Midget",
      equipes: ["Archers", "Chevaliers", "Guerriers", "Titans"],
    },
    {
      titre: "m18",
      classement: "B",
      nom: "Midget",
      equipes: ["Archers", "Boucliers", "Chevaliers", "Guerriers"],
    },
    {
      titre: "m21",
      classement: "A",
      nom: "Junior",
      equipes: ["Chevaliers"],
    },
    {
      titre: "m21",
      classement: "B",
      nom: "Junior",
      equipes: ["Archers"],
    },
    {
      titre: "mahg",
      classement: "1 & 2",
      nom: "MAHG",
      equipes: ["MAHG"],
    },
  ];
  return gatineau;
}
