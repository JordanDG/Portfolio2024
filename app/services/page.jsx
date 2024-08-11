"use client";

// Metadata Workaround
import Head from "next/head";
import { useEffect, useState } from "react";

// Imports
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';


const services = [
    {
        num: '01',
        title: 'Web Design',
        description: 'Combining sleek, modern designs with practicality & user-centric design principles to set the stage for perfection.',
        href: '#ThisIsAhref',
    },
    {
        num: '02',
        title: 'Web Development',
        description: 'Calling on a wide range of modern technologies and disciplines to deliver a responsive & attractive user-experience built to last.',
        href: '#ThisIsAhref',
    },
    {
        num: '03',
        title: 'SEO',
        description: 'This is a description.',
        href: '#ThisIsAhref',
    },
    {
        num: '04',
        title: 'PPC',
        description: 'This is a description!',
        href: '#ThisIsAhref',
    },
    
]

import { motion } from 'framer-motion';

const Services = () => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        // Client-side only logic
        setTitle("JordanDG | Services");
    }, []);
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="These are the disciplines I specialise in." />
        </Head>
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.8, duration: 0.4, ease: 'easeIn'}}} className='h1'>My Disciplines<span className="text-accent">.</span></motion.h1>
                <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.8, duration: 0.4, ease: 'easeIn'}}} className='mb-16'>Find out more about what I can do</motion.p>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2, duration: 0.4, ease: 'easeIn'}}} className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
                    {services.map((service, index) => {
                        return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                            {/* Top */}
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}<span className="text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">.</span></div>
                                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                    <BsArrowDownRight className='text-accent group-hover:text-primary transition-all duration-500 text-2xl'/>
                                </Link>
                            </div>
                            {/* Title */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                            {/* Description */}
                            <p className='text-white/65 group-hover:text-white transition-all duration-500'>{service.description}</p>
                            {/* Border */}
                            <div className='border-b border-white/20 w-full'></div>
                        </div>
                    })}
                </motion.div>
            </div>
        </section>
        </>
    )
}

export default Services;