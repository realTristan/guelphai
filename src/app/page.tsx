"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import aiLottieAnimData from "@/assets/lottie/ai-lottie.json";
import Navbar from "@/components/Navbar";

const LottiePlayer = dynamic(() => import("lottie-react").then((mod) => mod), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative flex min-h-screen w-screen flex-row items-start justify-between px-7 sm:px-14 pt-36 xl:px-20">
        <div className="relative flex w-full lg:w-[35rem] xl:w-[40rem] flex-col gap-2 p-10 bg-white/90 backdrop-blur-md xl:bg-transparent xl:backdrop-blur-none rounded-lg">
          {/**
           * Background blur
           */}
          <div className="blur-xl z-0 rounded-xl bg-white/50 xl:bg-transparent left-0 top-0 absolute h-full w-full"></div>

          {/**
           * Main content
           */}
          <h1 className="z-10 text-5xl md:text-6xl xl:text-7xl font-bold text-slate-950 leading-[3.3rem] line-clamp-6">
            Stay <mark className="bg-blue-600 text-white">up to date</mark>{" "}
          </h1>
          <h1 className="z-10 text-5xl md:text-6xl xl:text-7xl font-bold text-slate-950 leading-[3.3rem] line-clamp-6">
            with artificial intelligence at UofG!
          </h1>
          <p className="z-10 mt-3 w-3/4 text-sm font-normal tracking-wide text-slate-500">
            The Guelph Artificial Intelligence Club is a student-run
            organization at the University of Guelph. We aim to provide students
            with the opportunity to learn and apply artificial intelligence in a
            collaborative and supportive environment.
          </p>

          {/**
           * CTA buttons
           */}
          <div className="z-10 mt-7 flex flex-row gap-4">
            <a
              href="/learn-more"
              className="tracking-wide rounded-lg bg-blue-600 px-7 py-4 text-sm font-normal text-white duration-300 ease-in-out hover:px-14"
            >
              Learn More
            </a>
            <a
              href="mailto:tsimps01@uoguelph.ca"
              className="tracking-wide rounded-lg bg-slate-900 px-7 py-4 text-sm font-normal text-white duration-300 ease-in-out hover:px-14"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/**
         * Animated ai
         */}
        <LottiePlayer
          animationData={aiLottieAnimData}
          className="fixed -z-10 h-[50rem] w-[50rem] scale-150 md:-right-16 top-20"
          loop={true}
        />
      </main>
    </>
  );
}
