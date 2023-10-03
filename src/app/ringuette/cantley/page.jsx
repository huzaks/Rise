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

  return (
    <div className="flex flex-col w-full gap-10 min-h-[100vh] mt-28 md:mt-0">
      <div className="hidden md:flex justify-between items-center h-32 w-full bg-[#000c3b]">
        <h1 className="text-xl md:text-3xl font-bold text-white pl-6">
          Ringuette - Cantley
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
          href={"/ringuette"}
          className="group flex gap-4 bg-transparent hover:bg-[#00061d] border-4 border-[#00061d] text-[#00061d] hover:text-white rounded-[50px] py-2 px-4 text-md font-bold items-center justify-center transition-all "
        >
          <FiArrowLeft className=" text-[#00061d] text-lg group-hover:text-white transition-all" />
          Retour
        </Link>
      </div>
      <h2 className="text-4xl font-bold text-center md:pb-12 ">
        Catégories Ringuette - Cantley
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
            U8
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="u8-1">
              <div>
                <AccordionTrigger className="text-lg">Moustique 1</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Groupe 1
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Groupe 2
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="u8-2">
              <div>
                <AccordionTrigger className="text-lg">Moustique 2</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                  <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Groupe 1
                    </Link>
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Groupe 2
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">
            U10
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="u11-1">
              <div>
                <AccordionTrigger className="text-lg">Novice A</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Leclair
                    </Link>
                    
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="u11-2">
              <div>
                <AccordionTrigger className="text-lg">Novice B</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Duguay
                    </Link>
                  
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="u11-3">
              <div>
                <AccordionTrigger className="text-lg">Novice C1</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Rose
                    </Link>
                    
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">
            U12
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="u13-1">
              <div>
                <AccordionTrigger className="text-lg">Atome A</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Blais
                    </Link>
                    
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="u13-2">
              <div>
                <AccordionTrigger className="text-lg">Atome B</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Prud&apos;homme
                    </Link>
                  
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="u13-3">
              <div>
                <AccordionTrigger className="text-lg">Atome C1</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Casey
                    </Link>
      
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">
            U14
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="u15-1">
              <div>
                <AccordionTrigger className="text-lg">Benjamin A</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Matte
                    </Link>

                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="u15-2">
              <div>
                <AccordionTrigger className="text-lg">Benjamin B</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Fleury
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="u15-AA">
              <div>
                <AccordionTrigger className="text-lg">Benjamin C1</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Poupart
                    </Link>
                    
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">
            U16
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="u16-1">
              <div>
                <AccordionTrigger className="text-lg">Junior A</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Lortie
                    </Link>

                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="u16-2">
              <div>
                <AccordionTrigger className="text-lg">Junior B1</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Saumure
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="u16-AA">
              <div>
                <AccordionTrigger className="text-lg">Junior B2</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Gaumond
                    </Link>
                    
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            
          </Accordion>
        </div>
        <div>
          <h3 className="flex flex-col text-xl font-bold after:content-[''] after:w-12 after:bg-[#000c3b] after:rounded-md after:px-1 after:py-[2px]">
            U19
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="u17-1">
              <div>
                <AccordionTrigger className="text-lg">Cadette A</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      PrudHomme
                    </Link>

                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="u17-2">
              <div>
                <AccordionTrigger className="text-lg">Cadette B</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2">
                    <Link
                      href={"/stats-equipe"}
                      className="font-semibold hover:font-bold w-fit"
                    >
                      Morin
                    </Link>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          
            
          </Accordion>
        </div>
        
        
      </div>
    </div>
  );
}
