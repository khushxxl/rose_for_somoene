// PoetryRose.js
"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const PoetryRose = () => {
  return (
    <div className="">
      <div className=" inset-0 flex flex-col items-center justify-center">
        <Head>
          <link
            href="https://fonts.font.im/css?family=Sacramento"
            rel="stylesheet"
          />
        </Head>
        <div className="text-center">
          <h1 className="text-[#FE7696] text-3xl font-cursive">
            Heyy Srijanii ❤️
          </h1>
        </div>
        <motion.div
          className="poetry text-white text-center mt-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        >
          <p className="text-lg font-semibold max-w-sm text-left">
            I have brought all the happiness with me, can yo u please hold it?
            Look at me, i can see the pain within Come here sit and unfold it!
            Your smile opens the gate of heavens all the stones move aside, no
            we aint steppin I can see that hair strand coming your way just a
            sec i”ll move it. Theres a fold on your top, please call me yours so
            that i can fix it! I want you to be in my best, And i wanna hold you
            tight in your worst, what if you dont choose me, this thought, burns
            all my thirst! I love youu, and I promise to keep you very safe.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PoetryRose;
