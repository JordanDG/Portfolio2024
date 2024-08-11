"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries, ciMenuFries } from 'react-icons/ci';
import Social from './Social';

// Components //


const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Services',
        path: '/services'
    },
    {
        name: 'Resume',
        path: '/resume'
    },
    {
        name: 'Work',
        path: '/work'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className='mt-20 mb-12 text-center text-2xl'>
                    <Link href="/">
                        <h1 className='text-4xl font-semibold'>Jordan DG<span className='text-accent'>.</span></h1>
                    </Link>
                </div>
                {/* Navi */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <SheetClose asChild key={index}>
                                <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                                    {link.name}
                                </Link>
                            </SheetClose>
                        );
                    })}
                </nav>
                <div className='absolute bottom-8 left-0 w-full h-8 flex justify-end items-center px-10 gap-8'>
                    <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;