"use client";

// Metadata Workaround
import Head from "next/head";
import { useEffect, useState } from "react";

// Imports
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import ServiceDetails from "@/components/ServiceDetails";


const services = [
    {
        num: '01',
        title: 'Web Design',
        description: 'Combining sleek, modern designs with practicality & user-centric design principles to present visually appealing, responsive web designs irrespective of any device or platform. ',
        href: 'webDesign',
        detailsTitle: 'Web Design',
        detailsText: 'Stemming from the need for a need for total control over all aspects of the design process, web design was something I took particular care to learn and utilise throughout my education at Solent University. Throughout the courses, Figma was the main program in use. Thanks to this, I am now able to prototype websites from the initial wireframing process through to the eventual high-fidelity prototype, making use of responsive design and components to emulate site functionality and demonstrate the expected product. In addition to this, Solent University was an Adobe partner, therefore granting full access to the Adobe Creative Suite. I utilised Adobe Photoshop, Premier Pro and Illustrator to create appropriate site assets optimised for modern web development.',
        image1: 'https://placehold.co/600x400.png',
        image2: 'https://placehold.co/600x400.png',
        image3: 'https://placehold.co/600x400.png',
        image4: 'https://placehold.co/600x400.png',
        displayBtn: true
    },
    {
        num: '02',
        title: 'Web Development',
        description: 'Calling on a wide range of modern technologies and disciplines to deliver a responsive & attractive user-experience scalably constructed to support any requirements.',
        href: 'webDevelopment',
        detailsTitle: 'Web Development',
        detailsText: 'Throughout college and into University, I learned the basics of web development - the HTML, the CSS and of course Javascript. Even after several years of university, course content had barely scratched the surface of React. Thankfully, in my own time I had been studying different areas of web development, learning stuff like Tailwind and SCSS as alternatives to CSS, or branching off into NextJS to further build upon the teachings of React. I soon realised the scale of the available languages, but also, how much I enjoyed learning and using them. What started as a hobby quickly evolved into a potential career path. In my current work, I am responsible for the upkeep and maintenance of several high-profile client websites built via Wordpress, reacting to inbound and internal issues to ensure uptime is maintained and facilitates success.',
        image1: 'https://placehold.co/600x400.png',
        image2: 'https://placehold.co/600x400.png',
        image3: 'https://placehold.co/600x400.png',
        image4: 'https://placehold.co/600x400.png',
        displayBtn: false
    },
    {
        num: '03',
        title: 'SEO',
        description: 'I employ modern techniques to ensure page content is optimised for search-engine visibility. All sites are designed to rank highly, and reflect current trends.',
        href: 'SEO',
        detailsTitle: 'SEO',
        detailsText: 'I believe in the importance of organic search-engine rankings, to minimise costs and of course boost traffic to any site. It is particularly important, in this instance, that all site text content is run through something like SEMRush to ensure it does not negatively impact site rankings. I believe a blended approach of research into the subject matter and utilisation of SEO optimisation tools, followed by ongoing upkeep as trends change and develop will continue to prompt site visibility, reach and eventual success.',
        image1: 'https://placehold.co/600x400.png',
        image2: 'https://placehold.co/600x400.png',
        image3: 'https://placehold.co/600x400.png',
        image4: 'https://placehold.co/600x400.png',
        displayBtn: true
    },
    {
        num: '04',
        title: 'User Experience',
        description: 'An often under-appreciated facet of modern design and development, I champion the importance of accessibility and site usability to create a site usable by all.',
        href: 'userExperience',
        detailsTitle: 'User Experience',
        detailsText: 'As perhaps the most often overlooked cornerstone of modern development, User Experience necessitates the utilisation of both qualitative and quantitative user data to inform design, positioning and layout choices on all modern websites. These decisions aim to improve accessibility (in adherence with the WCAG act) and hit often predefined internal goals on user journey speeds and bounce rates. On larger scale projects, I have made use of A/B testing, focus groups, individual interviews and user-experience mapping amongst other tools to inform design and layout choices. I believe the importance of this corner of web development cannot be understated, and as general good practice would recommend pre-launch UX work and post-launch continual UX upkeep be upkept on all websites, particularly those aiming to foster e-commerce or generate a user-base.',
        image1: 'https://placehold.co/600x400.png',
        image2: 'https://placehold.co/600x400.png',
        image3: 'https://placehold.co/600x400.png',
        image4: 'https://placehold.co/600x400.png',
        displayBtn: false
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
                <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.8, duration: 0.4, ease: 'easeIn'}}} className='mb-16 mt-2'>Find out more about what I believe to be the key cornerstones of my capabilities.</motion.p>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2, duration: 0.4, ease: 'easeIn'}}} className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
                    {services.map((service, index) => {
                        return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                            {/* Top */}
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}<span className="text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">.</span></div>
                                <Link href={"#" + service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
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
        <section className='min-h-[40vh] flex flex-col justify-start py-12 xl:py-0'>
            <div className="container mx-auto">
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.8, duration: 0.4, ease: 'easeIn'}}} className='h1'>More Details<span className="text-accent">.</span></motion.h1>
                <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.8, duration: 0.4, ease: 'easeIn'}}} className='mb-16 mt-2'>Across my time at university and within the industry, I have learnt and refined a wide array of skillsets applicable to modern web design and development. I believe in a systemic approach to user-centered design whereby the benefits of task-centered design can be retained to deliver polished, usable websites that have potentially infinite potential.</motion.p>
                {services.map((service, index) => {
                    return <ServiceDetails key={index} title={service.detailsTitle} paragraph={service.detailsText} image1={service.image1} image2={service.image2} image3={service.image3} image4={service.image4} anchor={service.href} contact={service.displayBtn}/>
                })}
            </div>
        </section>
        </>
    )
}

export default Services;