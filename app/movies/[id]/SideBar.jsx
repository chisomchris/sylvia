import { Logo } from '@/app/components/Logo'
import { IoLogOutOutline, IoListOutline } from 'react-icons/io5'
import { GoHome } from 'react-icons/go'
import { BiCameraMovie } from 'react-icons/bi'
import { RiSlideshow3Line } from 'react-icons/ri'
import { BsCalendar3 } from 'react-icons/bs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const active = 'bg-pink-100 border-r-4 border-r-solid border-r-pink-700'
  return (
    <div>
      <div className='bg-white w-screen fixed pt-5 pb-1 md:hidden px-4 top-0 left-0 right-0 flex items-center justify-between'>
        <Logo light />
        <button className='text-pink-700 text-3xl' onClick={() => { setIsOpen(v => !v) }}>
          <FaBars />
        </button>
      </div>
      <nav className={`${isOpen ? 'absolute z-10 bg-white top-0 w-[13rem]' : 'hidden'} min-h-screen shrink-0 basis-[12rem] rounded-tr-[3rem] rounded-br-[3rem] overflow-hidden c_shadow md:block`}>
        <div className='flex flex-col gap-4 sm:gap-9 justify-between h-full min-h-screen pt-8 pb-4'>
          <div className='pl-9'><Logo light /></div>
          <ul>
            <li>
              <Link className='flex items-center gap-3 font-semibold pl-12 pr-8 py-2' href={'/'}><GoHome className='text-3xl' /> Home</Link>
            </li>
            <li className={`${pathname.includes('movies') ? active : ""}`}>
              <Link className='flex items-center gap-3 font-semibold pl-12 pr-8 py-2' href={'/movies'}><BiCameraMovie className='text-3xl' /> Movies</Link>
            </li>
            <li>
              <Link className='flex items-center gap-3 font-semibold pl-12 pr-8 py-2' href={'/'}><RiSlideshow3Line className='text-3xl' />TV Series</Link>
            </li>
            <li>
              <Link className='flex items-center gap-3 font-semibold pl-12 pr-8 py-2' href={'/'}><BsCalendar3 className='text-3xl' />Upcoming</Link>
            </li>
          </ul>
          <div className='pl-9 pr-6 text-sm'>
            <div className='rounded-[1rem] bg-pink-50 border-solid border-pink-300 border-2 px-3 pt-6 pb-4'>
              <p className='font-semibold'>Play movie quizes and earn free tickets</p>
              <p className='mt-2'>50k people are playing now</p>
              <button className='text-sm bg-pink-200 text-pink-700 px-3 py-1 rounded-full mt-2 mx-auto block'>Start playing</button>
            </div>
            <button className='flex items-center gap-4 py-4 px-2 mt-2'><IoLogOutOutline className='text-3xl' /> Log out</button>
          </div>
        </div>
      </nav>
    </div>
  )
}
