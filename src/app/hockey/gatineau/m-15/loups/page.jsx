"use client"
import { buttonVariants } from "@/components/ui/button"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import calendar from '@/app/Calendar.webp'


export default function page(){

 return (
  <div className="flex flex-col w-full gap-12 ml-2 items-center">
<Link href={"/hockey/gatineau"} className={buttonVariants({ variant: "outline" })}>Retour</Link>
    <h1 className="text-3xl font-bold text-center">Loups de Gatineau</h1>
    <Image src={calendar} alt="calendar"/>
    
  </div>
 )
}