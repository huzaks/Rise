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
    <h1 className="text-3xl font-bold text-center">Hokey Gatineau Categories</h1>
    
    
    <Accordion type='single' collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>M 15</AccordionTrigger>
      <AccordionContent>
        <div className='flex flex-col gap-2'>
        <Link className='hover:underline' href={'/hockey/gatineau/m-15/loups'}>Loups</Link>
        <Link className='hover:underline' href={'/hockey/gatineau/m-15/chats'}>Chats</Link>
        <Link className='hover:underline' href={'/hockey/gatineau/m-15/lapins'}>Lapins</Link>
        </div>
      </AccordionContent>
      </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>M 18</AccordionTrigger>
      <AccordionContent>
        <div className='flex flex-col gap-2'>
        <Link className='hover:underline' href={'/hockey/gatineau/m-18/aigles'}>Aigles</Link>
        <Link className='hover:underline' href={'/hockey/gatineau/m-18/coyotes'}>Coyotes</Link>
        <Link className='hover:underline' href={'/hockey/gatineau/m-18/ours'}>Ours</Link>
        </div>
      </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
      <AccordionTrigger>M 19</AccordionTrigger>
      <AccordionContent>
        <div className='flex flex-col gap-2'>
        <Link className='hover:underline' href={'/hockey/gatineau/m-19/loups'}>Loups</Link>
        <Link className='hover:underline' href={'/hockey/gatineau/m-19/chats'}>Chats</Link>
        <Link className='hover:underline' href={'/hockey/gatineau/m-19/lapins'}>Lapins</Link>
        </div>
      </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
 )
}