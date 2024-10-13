"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// Components // 
import Nav from "./Nav";
import MobileNav from "./MobileNav";

// Check for session for rendering
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react";

const Header = () => {

    const { data: session } = useSession();

    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Jordan DG<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* Desktop Nav & Hire Me Button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button name="Contact Button">Contact Me</Button>
                    </Link>
                    {session ? (
                        <button onClick={() => signOut()}>Logout</button>
                    ) : (
                        <p>&nbsp;</p>
                    )}
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav className="xl:hidden" />
                </div>
            </div>
        </header>
    )
}

export default Header;