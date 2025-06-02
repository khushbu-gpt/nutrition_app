"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Adds = () => {
  useEffect(() => {
  AOS.init({ 
    duration: 1000,      
    easing: 'ease-in-out',
    once: false,           
    offset: 120,       
    delay: 100   
   });
}, []);
  return (
    <section className="bg-yellow-500 relative text-black h-screen w-full overflow-hidden">
      <div className="absolute  p-10 bg-white translate-x-1/3   translate-y-1/2 transform rounded-tr-4xl rounded-bl-4xl w-[50%] z-20"   data-aos="fade-right">
        <h2 className="text-5xl font-bold">
          90 Day Body & Mind Transformation Program
        </h2>
        <p className="text-lg py-4">
          Sample text. Click to select the Text Element.
        </p>
        <button className="bg-yellow-500 flex text-white font-bold text-base px-10 py-5 rounded-tl-4xl rounded-br-4xl">
          HOW IT WORKS
          <ArrowRight />
        </button>
      </div>
      <div className="absolute left-1/2 z-10 " data-aos="fade-up">
        <Image
          src={"/images/happy-young-sportsman.png"}
          alt="logo"
          height={600}
          width={600}
          className=" bg-contain"
        />
      </div>
    </section>
  );
};

export default Adds;
