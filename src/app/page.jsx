import Image from 'next/image'
import Link from 'next/link'
import logo from '@/app/rise_logo_black-blue.png'

export default function Home() {
  return (
    <div className='flex flex-col mx-auto items-center justify-center w-[90%] max-w-6xl gap-16 px-4 lg:flex-row min-h-[100vh]'>
      <div className='flex flex-col gap-8 order-2 lg:order-1'>
        <h1 className='font-bold text-5xl text-transparent bg-gradient-to-l from-[#4a578b] to-[#000c3b] bg-clip-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit</h1>
        <p className='text-lg font-bold text-[#000c3b]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia similique amet accusamus, minus nisi, temporibus eveniet commodi eius dolor aliquam dolorem deleniti explicabo totam molestias nostrum quos quidem tempore nobis!</p>
        <div className='flex gap-4'>
        <Link href={'/hockey'} className='bg-[#000c3b] hover:bg-[#00061d] border-4 border-[#000c3b] hover:border-[#00061d] text-white rounded-[50px] py-2 px-8 text-xl font-bold items-center justify-center transition-all'>Hockey</Link>
        <Link href={'/soccer'} className='bg-[#000c3b] hover:bg-[#00061d] border-4 border-[#000c3b] hover:border-[#00061d] text-white rounded-[50px] py-2 px-8 text-xl font-bold items-center justify-center transition-all'>Soccer</Link>
        </div>
      </div>
      <div className='lg:order-2'>
      <Image src={logo} alt='logo rise black-blue'/>
      </div>
    </div>
  )
}
