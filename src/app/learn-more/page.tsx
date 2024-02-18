"use client";

import dynamic from "next/dynamic";
import aiLottieAnimData from "@/assets/lottie/ai-lottie.json";
import Navbar from "@/components/Navbar";
import config from "@/lib/config/default.config";

const LottiePlayer = dynamic(() => import("lottie-react").then((mod) => mod), {
  ssr: false,
});

export default function LearnMore() {
  return (
    <>
      <Navbar />

      <main className="relative flex min-h-screen w-screen flex-row items-start justify-between px-7 pt-36 sm:px-14 xl:px-20">
        <div className="relative flex w-full flex-col gap-2 rounded-lg bg-white/90 p-10 backdrop-blur-md lg:w-[40rem] xl:w-[47rem] xl:bg-transparent xl:backdrop-blur-none">
          {/**
           * Background blur
           */}
          <div className="absolute left-0 top-0 z-0 h-full w-full rounded-xl bg-white/50 blur-xl xl:bg-transparent"></div>

          {/**
           * Main content
           */}
          <h1 className="z-10 line-clamp-6 text-5xl font-bold leading-[3.3rem] text-slate-950 md:text-6xl xl:text-7xl">
            Learn <mark className="bg-blue-600 text-white">more about</mark>{" "}
          </h1>
          <h1 className="z-10 line-clamp-6 text-5xl font-bold leading-[3.3rem] text-slate-950 md:text-6xl xl:text-7xl">
            artificial intelligence at UofG!
          </h1>
          <p className="z-10 mt-3 w-3/4 text-sm font-normal tracking-wide text-slate-500">
            The Guelph Artificial Intelligence Club hosts biweekly seminars to
            teach students about the latest trends, services, libraries, and
            concepts in artificial intelligence. Seminars are open to all
            students, regardless of their major or experience with AI.
          </p>

          {/**
           * CTA buttons
           */}
          <div className="z-10 mt-7 flex flex-row gap-4">
            <a
              href="/"
              className="rounded-lg bg-blue-600 px-7 py-4 text-center text-sm font-normal tracking-wide text-white duration-300 ease-in-out hover:px-14"
            >
              Go back home
            </a>
            <a
              href={config.discordUrl}
              className="rounded-lg bg-slate-900 px-7 py-4 text-center text-sm font-normal tracking-wide text-white duration-300 ease-in-out hover:px-14"
            >
              Join our Discord
            </a>
          </div>
        </div>

        {/**
         * Animated AI Lottie
         */}
        <LottiePlayer
          animationData={aiLottieAnimData}
          className="fixed top-20 -z-10 h-[50rem] w-[50rem] scale-150 md:-right-16"
          loop={true}
        />
      </main>
    </>
  );
}
