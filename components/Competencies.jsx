"use client";

import { motion } from "framer-motion";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaSass, FaWordpress} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs, SiExpress, SiSqlite } from 'react-icons/si';
import { SiAdobephotoshop, SiAdobexd, SiAdobepremierepro, SiAdobecreativecloud } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; 

const Design = [
    {
        icon: <FaFigma />,
        name: "Figma",
    },
    {
        icon: <SiAdobephotoshop />,
        name: "Photoshop",
    },
    {
        icon: <SiAdobexd />,
        name: "Adobe Xd",
    },
    {
        icon: <SiAdobepremierepro />,
        name: "Adobe Premier Pro",
    },
    {
        icon: <SiAdobecreativecloud />,
        name: "Adobe Creative Cloud",
    },
]

const Development = [
    {
        icon: <FaHtml5/>,
        name: 'HTML5'
    },
    {
        icon: <FaCss3/>,
        name: 'CSS3'
    },
    {
        icon: <FaJs/>,
        name: 'Javascript'
    },
    {
        icon: <FaReact/>,
        name: 'React.JS'
    },
    {
        icon: <SiNextdotjs/>,
        name: 'Next.JS'
    },
    {
        icon: <SiTailwindcss/>,
        name: 'Tailwind.CSS'
    },
    {
        icon: <FaNodeJs/>,
        name: 'Node.JS'
    },
    {
        icon: <FaSass/>,
        name: 'SCSS'
    },
    {
        icon: <SiExpress/>,
        name: 'Express.JS'
    },
    {
        icon: <SiSqlite/>,
        name: 'SQLite3'
    },
    {
        icon: <FaWordpress/>,
        name: 'Wordpress'
    },
]

const Competencies = () => {
    return (
        <section className="w-screen">
            <div className="container mx-auto flex-col items-center justify-center xl:justify-start">
                <h2 className="h2 pt-2 text-center xl:text-left">Proficiencies</h2>
                <motion.h3 initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.6, duration: 0.4, ease: 'easeIn'}}} className="h3 mt-2 mb-4 text-center xl:text-left">Development</motion.h3>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2, duration: 0.4, ease: 'easeIn'}}} className="flex items-center justify-center xl:justify-start w-full gap-x-8 gap-y-12 flex-wrap mb-12">
                    {Development.map((skill, index) => {
                        return <div key={index}>
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className='w-full rounded-xl flex justify-center items-center group transition-all duration-500' aria-describedby="Competency Tooltip">
                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                    </TooltipTrigger>
                                    <TooltipContent role="tooltip">
                                        <p className='capitalize'>{skill.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    })}
                </motion.div>
                <motion.h3 initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.6, duration: 0.4, ease: 'easeIn'}}} className="h3 mt-2 mb-4 text-center xl:text-left">Design</motion.h3>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2, duration: 0.4, ease: 'easeIn'}}} className="flex items-center justify-center xl:justify-start w-full gap-x-8 gap-y-12 flex-wrap mb-12">
                    {Design.map((skill, index) => {
                        return <div key={index}>
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className='w-full rounded-xl flex justify-center items-center group transition-all duration-500'>
                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className='capitalize'>{skill.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Competencies;