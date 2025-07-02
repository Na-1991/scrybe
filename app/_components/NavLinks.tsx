'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const NavLinks = (props: Props) => {
const pathname = usePathname()
    const links = [
        {
            label:"About Us",
            href:'/#about-us',
            active:pathname.includes('about-us')
        },
        {
            label:"Services",
            href:'/#services',
            active:pathname.includes('services')
        },
        {
            label:"Blogs",
            href:'/blog',
            active:pathname.includes('blog')
        },
        {
            label:"Contact Us",
            href:'/#contact-us',
            active:pathname.includes('blog')
        },
    ]
  return (
    <nav className='flex items-center gap-10'>
        {links.map(link=><Link key={link.label} href={link.href} className=' hover:text-site transition'>{link.label}</Link>)}
    </nav>
  )
}

export default NavLinks