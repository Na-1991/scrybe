'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {}

const NavSheet = (props: Props) => {

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
    <Sheet>
    <SheetTrigger><Menu/></SheetTrigger>
    <SheetContent className="bg-site text-white">
      <SheetHeader>
        <SheetTitle> </SheetTitle>
        <SheetDescription>
        
   
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col">
            {links.map(link=><SheetClose className="p-3" asChild key={link.label}>
            <Link href={link.href} className=' hover:text-black transition text-mg font-semibold'>{link.label}</Link>
        </SheetClose>)}
            </div>
    </SheetContent>
  </Sheet>
  )
}

export default NavSheet