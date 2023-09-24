"use client"
import { buttonVariants } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export default function page(){

 return (
  <div className="flex flex-col w-full gap-12 ml-2">
    <Link href={"/hockey"} className={buttonVariants({ variant: "outline" })}>Retour</Link>
    <h1 className="text-3xl font-bold text-center">Hokey Cantley Categories</h1>
    
    
    <Accordion type='single' collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>M 7</AccordionTrigger>
      <AccordionContent>
        <div className='flex flex-col gap-2'>
        <Link className='hover:underline' href={'/hockey/cantley/m-7/loups'}>Loups</Link>
        <Link className='hover:underline' href={'/hockey/cantley/m-7/chats'}>Chats</Link>
        <Link className='hover:underline' href={'/hockey/cantley/m-7/lapins'}>Lapins</Link>
        </div>
      </AccordionContent>
      </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>M 21</AccordionTrigger>
      <AccordionContent>
        <div className='flex flex-col gap-2'>
        <Link className='hover:underline' href={'/hockey/cantley/m-21/aigles'}>Aigles</Link>
        <Link className='hover:underline' href={'/hockey/cantley/m-21/coyotes'}>Coyotes</Link>
        <Link className='hover:underline' href={'/hockey/cantley/m-21/ours'}>Ours</Link>
        </div>
      </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
      <AccordionTrigger>M 20</AccordionTrigger>
      <AccordionContent>
        <div className='flex flex-col gap-2'>
        <Link className='hover:underline' href={'/hockey/cantley/m-20/loups'}>Loups</Link>
        <Link className='hover:underline' href={'/hockey/cantley/m-20/chats'}>Chats</Link>
        <Link className='hover:underline' href={'/hockey/cantley/m-20/lapins'}>Lapins</Link>
        </div>
      </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
 )
}