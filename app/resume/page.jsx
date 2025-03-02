"use client";

// Icons
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaSass, FaWordpress, FaBuilding, FaGraduationCap, FaKeyboard, FaUser} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs, SiExpress, SiMysql } from 'react-icons/si';
import { SiAdobephotoshop, SiAdobexd, SiAdobepremierepro, SiAdobecreativecloud } from "react-icons/si";
import { Button } from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";

// About Data
const about = {
    icon: <FaUser />,
    title: 'About Me',
    description: 'About me - and how to get in touch with me about your next big project.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Jordan Da Graca'
        },
        {
            fieldName: 'Phone',
            fieldValue: <a class="hover:text-accent transition-all duration-300" href="tel:07585259237">+44 (0) 7585259237</a>
        },
        {
            fieldName: 'Discord',
            fieldValue: '@sphen'
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'British / English'
        },
        {
            fieldName: 'Email',
            fieldValue: <a class="hover:text-accent transition-all duration-300" href="mailto:dagracajordan@gmail.com">dagracajordan@gmail.com</a>
        },
        {
            fieldName: 'Freelance',
            fieldValue: <a class="text-red-400 hover:underline transition-all duration-300" href="/contact">Unavailable</a>
        },
        
    ]
}

// Experience Data
const experience = {
    icon: <FaBuilding />,
    title: 'My Experience',
    description: "Check out the great places I've worked.",
    items: [
        {
            company: 'Damteq Solutions Ltd.',
            position: 'Junior Web Support Technician',
            duration: 'Jan 2024 - Present'
        },
        {
            company: 'Winchester Film Festival.',
            position: 'Web Designer and Developer (Wordpress)',
            duration: 'Jan 2017 - August 2018'
        },
    ]
}

// Education Data
const education = {
    icon: <FaGraduationCap />,
    title: 'My Education',
    description: 'View my academic accomplishments throughout both college and university.',
    items: [
        {
            institution: 'Solent University',
            degree: 'MSc Digital Design',
            duration: '2022 - 2023',
            attained: 'Distinction'
        },
        {
            institution: 'Solent University',
            degree: 'BSc (Hons) Design & Web Development',
            duration: '2019 - 2022',
            attained: 'First Class Honours'
        },
        {
            institution: 'Eastleigh College',
            degree: 'A-Level In Games & Digital Development',
            duration: '2016 - 2018',
            attained: 'Distinction / Distinction / Distinction'
        },
    ]
}

// Skills Data
const skills = {
    icon: <FaKeyboard />,
    title: 'My Skills',
    description: 'Here is what I can bring to the table for your project or business.',
    skillList: [
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
            icon: <SiMysql/>,
            name: 'MySQL'
        },
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
        {
            icon: <FaWordpress/>,
            name: 'Wordpress'
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; 
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}} className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='experience'>{experience.icon}&nbsp;Experience</TabsTrigger>
                        <TabsTrigger value='education'>{education.icon}&nbsp;Education</TabsTrigger>
                        <TabsTrigger value='skills'>{skills.icon}&nbsp;Skills</TabsTrigger>
                        <TabsTrigger value='about'>{about.icon}&nbsp;About Me</TabsTrigger>
                    </TabsList>
                    {/* Content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* Experience */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <motion.h3 initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.25, duration: 0.4, ease: 'easeInOut'}}} className='text-4xl font-bold'>{experience.title}<span className="text-accent">.</span></motion.h3>
                                <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.5, duration: 0.4, ease: 'easeInOut'}}} className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</motion.p>
                                <motion.ScrollArea initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.75, duration: 0.4, ease: 'easeInOut'}}} className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index)=> {
                                            return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </motion.ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Education */}
                        <TabsContent value='education' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <motion.h3 initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.25, duration: 0.4, ease: 'easeInOut'}}} className='text-4xl font-bold'>{education.title}<span className="text-accent">.</span></motion.h3>
                                <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.5, duration: 0.4, ease: 'easeInOut'}}} className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</motion.p>
                                <motion.ScrollArea initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.75, duration: 0.4, ease: 'easeInOut'}}} className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index)=> {
                                            return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.institution}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </motion.ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Skills */}
                        <TabsContent value='skills' className='w-full h-full'>
                            <div className="flex flex-col gap-[30px] mb-8">
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <motion.h3 initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.25, duration: 0.4, ease: 'easeInOut'}}} className='text-4xl font-bold'>{skills.title}<span className="text-accent">.</span></motion.h3>
                                    <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.5, duration: 0.4, ease: 'easeInOut'}}} className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</motion.p>
                                </div>
                            </div>
                            <motion.ScrollArea initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.75, duration: 0.4, ease: 'easeInOut'}}} className='h-[650px] mt-6'>
                            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                {skills.skillList.map((skill, index) => {
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group transition-all duration-500 shadow-sm hover:shadow-lg'>
                                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className='capitalize'>{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                            </motion.ScrollArea>
                        </TabsContent>
                        {/* About Me */}
                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <motion.h3 initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.25, duration: 0.4, ease: 'easeInOut'}}} className='text-4xl font-bold'>{about.title}<span className="text-accent">.</span></motion.h3>
                                <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.5, duration: 0.4, ease: 'easeInOut'}}} className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</motion.p>
                                <motion.ul initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.75, duration: 0.4, ease: 'easeInOut'}}} className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index)=> {
                                        return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                            <span className='text-white/60'>{item.fieldName}</span>
                                            <span className='text-xl'>{item.fieldValue}</span>
                                        </li>
                                    })}
                                </motion.ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
                {/* <a href='/JordanDaGracaCV2024.pdf' download='JordanDaGracaCV.pdf'>
                    <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 w-full max-w-[380px] mx-auto xl:mx-0">
                        Download CV
                        <FiDownload className="text-xl" />
                    </Button>
                </a> */}
            </div>
        </motion.div>
    )
}

export default Resume;