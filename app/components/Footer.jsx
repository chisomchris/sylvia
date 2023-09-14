import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
export const Footer = () => {
    return (
        <footer className='py-6 mt-auto'>
            <div className='wrapper'>
                <div className='flex items-center justify-center gap-8 text-4xl py-6'>
                    <FaFacebookSquare />
                    <FaInstagram />
                    <FaTwitter />
                    <FaYoutube />
                </div>
                <div className='flex items-center justify-center gap-x-6 gap-y-3 flex-wrap'>
                    <Link href={'/'} className='text-md sm:text-lg'>Conditions of Use</Link>
                    <Link href={'/'} className='text-md sm:text-lg'>Privacy & Policy</Link>
                    <Link href={'/'} className='text-md sm:text-lg'>Press Room</Link>
                </div>
                <p className='text-center mt-4 text-[#6B7280] text-lg'>&copy; {new Date().getFullYear()} MovieBox by Chisom Chris</p>
            </div>
        </footer>
    )
}
