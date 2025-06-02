"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="bg-gray-800 flex justify-around items-center min-h-screen w-full p-20 text-white overflow-hidden">
      <motion.div
        className="w-[35%]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-7xl font-bold leading-tighter">
          Honest nutrition for healthy weight loss
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer bg-yellow-500 rounded-tr-4xl rounded-bl-4xl px-10 py-5 text-white font-semibold my-6"
        >
          WORK WITH US
        </motion.button>
      </motion.div>

      <motion.div
        className="relative w-[40%]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={"/images/happy-woman.jpg"}
          alt="logo"
          height={400}
          width={500}
          className="rounded-t-full bg-contain"
        />
        
        <motion.div
          className="absolute -bottom-10 -left-20 bg-yellow-500 px-6 py-10 rounded-tr-4xl w-52 h-60"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="font-bold text-7xl text-center">10+</span>
          <p className="text-2xl font-semibold py-3">YEARS OF EXPERIENCE</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
