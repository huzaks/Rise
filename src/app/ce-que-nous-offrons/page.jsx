import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

export default function page(){

 return (
  
    <div className="flex flex-col items-center justify-center gap-16 px-4 lg:flex-row h-[150vh] md:h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 h-[100%] md:h-[60%]">
        <Card className="relative p-4">
          <CardHeader>
            <CardTitle className='text-center'>9 $/an</CardTitle>
          </CardHeader>
          <CardContent className='pt-8'>
            <div className="flex flex-col gap-16">
            <ul className='flex flex-col gap-4 list-disc font-bold'>
                <li>Statistiques en temps réel</li>
                <li>Lorem ipsum dolor, sit amet consectetur.</li>
                <li>Lorem ipsum dolor, sit amet consectetur.</li>
                <li>Lorem ipsum dolor, sit amet consectetur.</li>
            </ul>
            <Link
              href={"#"}
              className="absolute bottom-4 self-center bg-slate-100 hover:bg-[#000c3b] border-2 border-[#000c3b] hover:border-[#00061d] text-[#000c3b] rounded-[50px] hover:text-white py-2 px-6 text-xl font-bold items-center justify-center transition-all w-fit"
            >
              S&apos;abonner
            </Link>
            </div>
          </CardContent>
        </Card>
        <Card className="relative p-4">
          <CardHeader>
          <CardTitle className='text-center'>99 $/an</CardTitle>
          </CardHeader>
          <CardContent className='pt-8'>
            <div className="flex flex-col gap-16">
            <ul className='flex flex-col gap-4 list-disc font-bold'>
                <li>Statistiques en temps réel</li>
                <li>Parties en direct</li>
                <li>Lorem ipsum dolor, sit amet consectetur.</li>
                <li>Lorem ipsum dolor, sit amet consectetur.</li>
            </ul>
            <Link
              href={"#"}
              className="absolute bottom-4 self-center bg-slate-100 hover:bg-[#000c3b] border-2 border-[#000c3b] hover:border-[#00061d] text-[#000c3b] rounded-[50px] hover:text-white py-2 px-6 text-xl font-bold items-center justify-center transition-all w-fit"
            >
              S&apos;abonner
            </Link>
            </div>
          </CardContent>
        </Card>
        <Card className="relative border-4 border-[#000c3b] p-4 ">
          <CardHeader>
          <CardTitle className='text-center'>999 $/an</CardTitle>
          </CardHeader>
          <CardContent className='pt-8'>
            <div className="flex flex-col gap-16">
            <ul className='flex flex-col gap-4 list-disc font-bold'>
                <li>Statistiques en temps réel</li>
                <li>Parties en direct</li>
                <li>Lorem ipsum dolor, sit amet consectetur.</li>
                <li>Lorem ipsum dolor, sit amet consectetur.</li>
            </ul>
            <Link
              href={"#"}
              className="absolute bottom-4 self-center bg-[#000c3b] hover:bg-[#00061d] border-4 border-[#000c3b] hover:border-[#00061d] text-white rounded-[50px] py-2 px-6 text-xl font-bold items-center justify-center transition-all w-fit"
            >
              S&apos;abonner
            </Link>
            </div>
          </CardContent>
        </Card>
        </div>
    </div>
    
 )
}