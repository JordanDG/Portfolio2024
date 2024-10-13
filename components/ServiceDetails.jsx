"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const ServiceDetails = (props) => {
    return (
        <div class="mb-24" id={props.anchor}>
            <h2 class="text-[42px] font-bold leading-none text-accent transition-all duration-500">{props.title}</h2>
            <p class="mt-4">{props.paragraph}</p>
            <div class="mt-6 flex flex-row items-center gap-14 justify-start h-[20vh] overflow-x-scroll pr-4 pb-4 overflow-y-hidden">
                <Image src={props.image1} alt='' width="400" height="300" />
                <Image src={props.image2} alt='' width="400" height="300" />
                <Image src={props.image3} alt='' width="400" height="300" />
                <Image src={props.image4} alt='' width="400" height="300" />
            </div>
            {props.contact && 
                <Button size='md' className='mt-4 max-w-40'><Link href="/contact">Get in touch</Link></Button> 
            }
        </div>
    )
}

export default ServiceDetails;