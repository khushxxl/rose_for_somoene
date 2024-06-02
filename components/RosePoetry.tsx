// PoetryRose.js
"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const PoetryRose = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Head>
          <link
            href="https://fonts.font.im/css?family=Sacramento"
            rel="stylesheet"
          />
        </Head>
        <div className=" w-1/2 text-center">
          <h1 className="text-[#FE7696] text-6xl font-cursive">
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
            Accusam tempor sea aliquyam et at voluptua dolores. Elitr takimata
            dolore sea gubergren dolor kasd aliquyam ut erat. No sanctus sed
            dolores justo lorem stet justo, eirmod nonumy diam clita.
          </p>
          <p className="text-lg font-semibold max-w-sm text-left">
            Accusam tempor sea aliquyam et at voluptua dolores. Elitr takimata
            dolore sea gubergren dolor kasd aliquyam ut erat. No sanctus sed
            dolores justo lorem stet justo, eirmod nonumy diam clita.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PoetryRose;
