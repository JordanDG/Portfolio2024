"use client";

import { motion } from 'framer-motion';
import React from 'react';
import {FaCheck} from 'react-icons/fa';

// Button
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Submission = () => {
    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center text-center">
                    <FaCheck className="text-[128px] text-accent mb-6"/>
                    <h1 className="h2 mb-2">Thank you for your submission<span className="text-accent">.</span></h1>
                    <p className="mb-6">I'll be in touch as soon as possible. I look forward to hearing from you!</p>
                    <Link href="/">
                        <Button>Return Home</Button>    
                    </Link>
                </div>
            </div>
        </motion.section>
    )
}

export default Submission;