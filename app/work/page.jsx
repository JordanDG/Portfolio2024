"use client";

// Metadata Workaround
import Head from "next/head";
import { useEffect } from "react";

// Animation
import {easeIn, motion} from 'framer-motion';
// Use state
import React, { useState } from 'react';
// Swiper component
import {Swiper, SwiperSlide} from 'swiper/react';
// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// Iconography
import {BsArrowUpRight, BsGithub} from 'react-icons/bs';
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs } from 'react-icons/si';
// Tooltips
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
// Next Components
import Link from 'next/link';
import Image from 'next/image';
// Component Imports
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum modi.',
        stack: [
            { name: 'HTML5', icon: <FaHtml5 /> }, { name: 'CSS3', icon: <FaCss3 /> }, { name: 'Javascript', icon: <FaJs /> }
        ],
        image: 'https://placehold.co/600x400.png',
        live: '',
        github: ''
    },
    {
        num: '02',
        category: 'fullstack',
        title: 'project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum modi.',
        stack: [
            { name: 'Next.JS', icon: <SiNextdotjs /> }, { name: 'Tailwind.CSS', icon: <SiTailwindcss /> }, { name: 'Node.JS', icon: <FaNodeJs /> }
        ],
        image: 'https://placehold.co/600x400.png',
        live: '',
        github: ''
    },
    {
        num: '03',
        category: 'frontend',
        title: 'project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum modi.',
        stack: [
            { name: 'Next.JS', icon: <SiNextdotjs /> }, { name: 'Tailwind.CSS', icon: <SiTailwindcss /> }
        ],
        image: 'https://placehold.co/600x400.png',
        live: '',
        github: ''
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    useEffect(() => {
        document.title = "JordanDG | Work ";
      }, []);
    return (
        <>
        <Head>
            <title>{document.title}</title>
            <meta name="description" content="Check out some of the awesome work I've completed in the past." />
        </Head>
        <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            {/* Outline Num */}
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                                {project.num}<span>.</span>
                            </div>
                            {/* Project Category */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
                            {/* Project Description */}
                            <p className='text-white/60'>{project.description}</p>
                            {/* Stack */}
                            <ul className='flex gap-6'>
                            {project.stack.map((item, index)=> {
                                return <li className='text-xl text-accent flex gap-2 justify-center items-center bg-[#232329] px-[10px] py-[5px] rounded-full shadow-md transition-all duration-500' key={index}>{item.icon}{item.name}</li>
                            })}
                            </ul>
                            {/* Border */}
                            <div className='border border-white/20'></div>
                            {/* Buttons */}
                            <div className='flex items-center gap-4'>
                            {/* Live Project Button */}
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center group hover:bg-accent hover:-rotate-[-45deg] transition-all duration-500'>
                                            <BsArrowUpRight className='text-accent text-3xl group-hover:text-primary' />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            {/* Github Project Button */}
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center group hover:bg-accent transition-all duration-500'>
                                            <BsGithub className='text-accent text-3xl group-hover:text-primary' />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>GitHub Repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange} /* modules={Pagination} pagination={true} */>
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className='w-full'>
                                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                                        {/* Overlay */}
                                        <div>
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        </div>
                                        {/* Image */}
                                        <div className='relative w-full h-full'>
                                            <Image src={project.image} fill className='object-cover' alt='' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            {/* Slider Buttons */}
                            <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500' />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
        </>
    )
}

export default Work;