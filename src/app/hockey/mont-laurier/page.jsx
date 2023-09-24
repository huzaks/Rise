"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { buttonVariants } from "@/components/ui/button"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';



export default function page(){


 return (
  <div className="flex flex-col w-full gap-12 ml-2">
    <Link href={"/hockey"} className={buttonVariants({ variant: "outline" })}>Retour</Link>
    <h1 className="text-3xl font-bold text-center">Hokey Mont-Laurier Categories</h1>
    
    
    <Accordion type='single' collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>M 8</AccordionTrigger>
      <AccordionContent>
        <div className='flex flex-col gap-2'>
        <Link className='hover:underline' href={'/hockey/mont-laurier/m-8/loups'}>Loups</Link>
        <Link className='hover:underline' href={'/hockey/mont-laurier/m-8/chats'}>Chats</Link>
        <Link className='hover:underline' href={'/hockey/mont-laurier/m-8/lapins'}>Lapins</Link>
        </div>
      </AccordionContent>
      </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>M 9</AccordionTrigger>
      <AccordionContent>
        <div className='flex flex-col gap-2'>
        <Link className='hover:underline' href={'/hockey/mont-laurier/m-9/aigles'}>Aigles</Link>
        <Link className='hover:underline' href={'/hockey/mont-laurier/m-9/coyotes'}>Coyotes</Link>
        <Link className='hover:underline' href={'/hockey/mont-laurier/m-9/ours'}>Ours</Link>
        </div>
      </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
      <AccordionTrigger>M 10</AccordionTrigger>
      <AccordionContent>
        <div className='flex flex-col gap-2'>
        <Link className='hover:underline' href={'/hockey/mont-laurier/m-10/loups'}>Loups</Link>
        <Link className='hover:underline' href={'/hockey/mont-laurier/m-10/chats'}>Chats</Link>
        <Link className='hover:underline' href={'/hockey/mont-laurier/m-10/lapins'}>Lapins</Link>
        </div>
      </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
 )
}