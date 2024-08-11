"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Metadata Workaround
import Head from "next/head";
import { useEffect } from "react";

// Components //
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Competencies from "@/components/Competencies";

const Home = () => {
  useEffect(() => {
    document.title = "JordanDG | Home ";
  }, []);
  return (
    <>
    <Head>
      <title>My page title</title>
      <meta name="description" content="The portfolio site for Jordan Da Graca, a self-taught web-developer from Southampton." />
    </Head>
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-[#b3b3b3]">Web Design and Development</span>
            <h1 className="h1">Hello, I&apos;m <br/><span className="text-accent">Jordan.</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">I design and develop modern, intuitive platforms designed to bring out the best of any brand. Combining responsive, modern designs with development best-practices to inspire.</p>
            {/* Btn & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href='/JordanDaGracaCV2024.pdf' download='JordanDaGracaCV.pdf'>
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  Download CV
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Competencies />
      <Stats />
    </section>
    </>
  )
}

export default Home;