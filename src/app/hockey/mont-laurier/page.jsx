"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";

export default function page() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col w-full gap-10 min-h-[100vh] mt-28 md:mt-0">
      <div className="hidden md:flex justify-between items-center h-32 w-full bg-[#000c3b]">
        <h1 className="text-xl md:text-3xl font-bold text-white pl-6">
          Hockey - Mont-Laurier
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
      <div className="pl-4 pt-4 md:pt-0 w-fit">
        <Link
          href={"/hockey"}
          className="group flex gap-4 bg-transparent hover:bg-[#00061d] border-4 border-[#00061d] text-[#00061d] hover:text-white rounded-[50px] py-2 px-4 text-md font-bold items-center justify-center transition-all "
        >
          <FiArrowLeft className=" text-[#00061d] text-lg group-hover:text-white transition-all" />
          Retour
        </Link>
      </div>
      <h2 className="text-4xl font-bold text-center md:pb-12 ">
        Catégories Hockey - Mont-Laurier
      </h2>
      <div className="flex justify-center md:hidden h-[52px] w-full bg-transparent">
        <div className="flex h-[52px] max-w-sm border-4 border-[#000c3b] rounded-[50px] mr-2">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-4">
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">
            MAHG
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m9-1">
              <div>
                <AccordionTrigger className="text-lg">MAHG</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      1 & 2
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">
            M9 - Novice
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m9-1">
              <div>
                <AccordionTrigger className="text-lg">1</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Barons
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Chevaliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Remparts
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Titans
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m9-2">
              <div>
                <AccordionTrigger className="text-lg">2</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Barons
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Chevaliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Remparts
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Titans
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m9-3">
              <div>
                <AccordionTrigger className="text-lg">3</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Chevaliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Remparts
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Titans
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Barons
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m9-4">
              <div>
                <AccordionTrigger className="text-lg">4</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Barons
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Chevaliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Harfangs
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Remparts
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">
            M11 - Atome
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m11-BB">
              <div>
                <AccordionTrigger className="text-lg">BB</AccordionTrigger>
                <AccordionContent>
                  <Link
                    href={"/stats-equipe"}
                    className="font-semibold hover:font-bold w-fit"
                  >
                    Ambassadeurs
                  </Link>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m11-A">
              <div>
                <AccordionTrigger className="text-lg">A</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Chevaliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Guerriers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Remparts
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m11-B">
              <div>
                <AccordionTrigger className="text-lg">B</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Chevaliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Guerriers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Remparts
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m11-C">
              <div>
                <AccordionTrigger className="text-lg">C</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Chevaliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Guerriers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Remparts
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">
            M13 - PeeWee
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m13-BB">
              <div>
                <AccordionTrigger className="text-lg">BB</AccordionTrigger>
                <AccordionContent>
                  <Link
                    href={"/stats-equipe"}
                    className="font-semibold hover:font-bold w-fit"
                    iv
                  >
                    Ambassadeurs
                  </Link>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m13-A">
              <div>
                <AccordionTrigger className="text-lg">A</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Guerriers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Remparts
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m13-B">
              <div>
                <AccordionTrigger className="text-lg">B</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Boucliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Chevaliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Remparts
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m13-C">
              <div>
                <AccordionTrigger className="text-lg">C</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Archers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Boucliers
                    </Link>
                    <Link
                      href={"/hockey/gatineau/equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Guerriers
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">
            M15 - Bantam
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m15-BB">
              <div>
                <AccordionTrigger className="text-lg">BB</AccordionTrigger>
                <AccordionContent>
                  <Link
                    href={"/stats-equipe"}
                    className="font-semibold hover:font-bold w-fit"
                    iv
                  >
                    Ambassadeurs
                  </Link>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m15-A">
              <div>
                <AccordionTrigger className="text-lg">A</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Boucliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Chevaliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Guerriers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Remparts
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m15-B">
              <div>
                <AccordionTrigger className="text-lg">B</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Archers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Boucliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Chevaliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Guerriers
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m15-C">
              <div>
                <AccordionTrigger className="text-lg">C</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Archers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Boucliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Guerriers
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">
            M18 - Midget
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m18-BB">
              <div>
                <AccordionTrigger className="text-lg">BB</AccordionTrigger>
                <AccordionContent>
                  <Link
                    href={"/stats-equipe"}
                    className="font-semibold hover:font-bold w-fit"
                    iv
                  >
                    Avalanche
                  </Link>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m18-A">
              <div>
                <AccordionTrigger className="text-lg">A</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Archers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Chevaliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Guerriers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Titans
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m18-B">
              <div>
                <AccordionTrigger className="text-lg">B</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Archers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Boucliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Chevaliers
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Guerriers
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">
            M21 - Junior
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="m21-A">
              <div>
                <AccordionTrigger className="text-lg">A</AccordionTrigger>
                <AccordionContent>
                  <Link
                    href={"/stats-equipe"}
                    className="font-semibold hover:font-bold w-fit"
                    iv
                  >
                    Chevaliers
                  </Link>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="m21-B">
              <div>
                <AccordionTrigger className="text-lg">B</AccordionTrigger>
                <AccordionContent>
                  <Link
                    href={"/stats-equipe"}
                    className="font-semibold hover:font-bold w-fit"
                  >
                    Archers
                  </Link>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
