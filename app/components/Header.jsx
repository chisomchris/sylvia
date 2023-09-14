"use client"
import { FaSearch } from "react-icons/fa"
import { Logo } from "./Logo"
import { useEffect, useState } from "react"
import Image from "next/image"

export const Header = () => {
    return (
        <header className="py-5 bg-[#33333333] absolute top-0 left-0 right-0">
            <div className='wrapper'>
                <div className="flex justify-between">
                    <Logo/>
                    <SearchBox desktop />
                    <div className="flex items-center gap-4">
                        <button className="text-white font-semibold">Sign In</button>
                        <button><Image src='/menu.png' alt='hamburger menu' width={120} height={120} className="w-8 h-auto" /></button>
                    </div>
                </div>
                <div className='pt-4'>
                    <SearchBox mobile />
                </div>
            </div>
        </header>
    )
}

const SearchBox = ({ mobile, desktop }) => {
    const [showIcon, setShowIcon] = useState(true)
    const [search, setSearch] = useState('')

    const onChange = (e) => {
        setSearch(e.target.value.trim())
    }

    useEffect(() => {
        if (search) { setShowIcon(false) } else { setShowIcon(true) }
    }, [search])

    return (
        <div className={`relative  ${mobile && 'md:hidden'} ${desktop && 'hidden min-w-[460px] md:block'} `}>
            <input type="search" onChange={onChange} placeholder="What do you want to watch?" className="w-full h-full pl-4 pr-5 bg-transparent outline-none border-[#f1f1f1] border-2 border-solid text-white rounded-md py-2 placeholder:text-[#f1f1f1] focus:border-white" />
            {!showIcon && <FaSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-white text-2xl" />}
        </div>
    )
}
