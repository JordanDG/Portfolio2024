"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            {/* Image */}
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2, duration: 0.4, ease: 'easeIn'}}} >
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeInOut'}}} className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
                    <Image src="/meagain.PNG" priority quality={100} fill alt="Jordan Da Graca" className="object-cover rounded-full border-accent border-4" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Photo;