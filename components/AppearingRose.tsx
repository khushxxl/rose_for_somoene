// RoseAnimation.js
"use client";
import React from "react";
import { motion } from "framer-motion";

const RoseAnimation = () => {
  return (
    <div>
      <div className="container">
        <motion.div
          className="glass"
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <div className="thorns">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <motion.div
          className="glow"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
        <div className="rose-leaves">
          <div></div>
          <div></div>
        </div>
        <div className="rose-petals">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          ></motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          ></motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          ></motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          ></motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          ></motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
          ></motion.div>
        </div>
        <div className="sparkles">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -250 }}
            transition={{ duration: 4, delay: 3 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -250 }}
            transition={{ duration: 4, delay: 2 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -250 }}
            transition={{ duration: 4, delay: 1 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -250 }}
            transition={{ duration: 4, delay: 1 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -250 }}
            transition={{ duration: 4, delay: 3 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -250 }}
            transition={{ duration: 4, delay: 2 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -250 }}
            transition={{ duration: 4, delay: 3 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -250 }}
            transition={{ duration: 4, delay: 3 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -250 }}
            transition={{ duration: 4, delay: 2 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -250 }}
            transition={{ duration: 4, delay: 3 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoseAnimation;
