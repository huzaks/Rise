"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function page() {

  const reg = [
    {
      region: "Gatineau",
    },
    {
      region: "Cantley",
    },
    {
      region: "Mont-Laurier",
    },
  ];

  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col w-full gap-12 ml-2">
      <h1 className="text-3xl font-bold text-center">Soccer Régions</h1>
      <input
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
        value={search}
        className="w-[90%] h-12 border-2 border-green-500"
      />
      <div className="grid grid-cols-3">
        {reg
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.region.toLowerCase().includes(search.toLowerCase());
          })
          .map((item, i) => (
            <Link
              key={i}
              href={`/soccer/${item.region.toLowerCase()}`}
              className="text-xl text-blue-500 font-bold underline text-center"
            >
              {item.region}
            </Link>
          ))}
        {/* <Link href={'/soccer/gatineau'} className='text-xl font-bold underline text-center'>Gatineau</Link>
        <Link href={'/soccer/cantley'} className='text-xl font-bold underline text-center'>Cantley</Link>
        <Link href={'/soccer/mont-laurier'} className='text-xl font-bold underline text-center'>Mont-Laurier</Link> */}
      </div>
    </div>
  );
}
