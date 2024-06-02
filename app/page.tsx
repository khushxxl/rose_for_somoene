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
        <div className="relative focus:outline-none inline-flex group">
          <div className="absolute focus:outline-none hover:outline-none transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <div className="relative focus:outline-none hover:outline-none  inline-flex items-center justify-center px-8 py-3 text-white transition-all duration-200 bg-gray-900 font-pj rounded-full ">
            {showPoetry ? "Show Rose 🌹" : "Click Me 🫂"}
          </div>
        </div>
      </div>
    </main>
  );
}
