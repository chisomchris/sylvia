import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = ({ light }) => {
    return (
        <Link href={'/'} className={`inline-flex items-center gap-4 flex-nowrap font-bold ${light && 'text-black'} ${!light && 'text-white'}`}><span><Image src='/tv.png' alt='' width={200} height={200} className={`w-9 h-auto`} /></span> MovieBox</Link>
    )
}
