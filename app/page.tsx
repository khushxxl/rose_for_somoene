"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AppearingRose from "@/components/AppearingRose";
import { useState } from "react";
import PoetryRose from "@/components/RosePoetry";

export default function Home() {
  const [showPoetry, setshowPoetry] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center flex-col">
      {showPoetry ? <PoetryRose /> : <AppearingRose />}
      <div
        onClick={() => setshowPoetry(!showPoetry)}
        className=" absolute bottom-[80px]"
      >
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none  ">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer px-8 items-center justify-center rounded-full bg-slate-950 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {showPoetry ? "Show Rose 🌹" : " Click Me 🫂"}
          </span>
        </button>
      </div>
    </main>
  );
}
