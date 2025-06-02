// "use client";
// import Image from "next/image";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const About = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false, 
//     });
//   }, []);

//   return (
//     <section className="bg-white flex justify-center items-center min-h-screen w-full p-20 text-black gap-10">
//       <div className="w-[40%]" data-aos="fade-right">
//         <Image
//           src={"/images/happy-woman.jpg"}
//           alt="logo"
//           height={400}
//           width={500}
//           className="rounded-t-full bg-contain"
//         />
//       </div>
//       <div className="w-[30%]" data-aos="fade-left">
//         <h3 className="text-2xl">ABOUT ME</h3>
//         <h2 className="text-5xl font-bold py-3">Nutritionist & Naturopath</h2>
//         <p className="py-3 text-neutral-600 text-lg">
//           I offer free 15-minute Wellness Chats to help you understand what to expect from a treatment.
//         </p>
//         <p className="py-3 text-neutral-600 text-lg">
//           If you’re curious about my approach and want to see if we’re a good fit, let’s connect!
//         </p>
//         <button className="cursor-pointer bg-yellow-500 rounded-tr-4xl rounded-bl-4xl px-12 py-5 text-white font-semibold my-6">
//           LEARN MORE
//         </button>
//       </div>
//     </section>
//   );
// };

// export default About;



// "use client";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
//   }),
// };

// const About = () => {
//   return (
//     <section className="bg-white flex justify-center items-center min-h-screen w-full p-20 text-black gap-10">
      
//       {/* IMAGE SIDE */}
//       <motion.div
//         className="w-[40%]"
//         variants={fadeInUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//         custom={0}
//       >
//         <Image
//           src={"/images/happy-woman.jpg"}
//           alt="logo"
//           height={400}
//           width={500}
//           className="rounded-t-full bg-contain"
//         />
//       </motion.div>

//       {/* TEXT SIDE */}
//       <motion.div
//         className="w-[30%]"
//         variants={fadeInUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//         custom={1}
//       >
//         <h3 className="text-2xl">ABOUT ME</h3>
//         <h2 className="text-5xl font-bold py-3">Nutritionist & Naturopath</h2>
//         <p className="py-3 text-neutral-600 text-lg">
//           I offer free 15-minute Wellness Chats to help you understand what to expect from a treatment.
//         </p>
//         <p className="py-3 text-neutral-600 text-lg">
//           If you’re curious about my approach and want to see if we’re a good fit, let’s connect!
//         </p>
//         <button className="cursor-pointer bg-yellow-500 rounded-tr-4xl rounded-bl-4xl px-12 py-5 text-white font-semibold my-6">
//           LEARN MORE
//         </button>
//       </motion.div>
      
//     </section>
//   );
// };

// export default About;













"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section className="bg-white flex justify-center items-center min-h-screen w-full p-20 text-black gap-10">
      <motion.div
        className="w-[40%]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <Image
          src={"/images/happy-woman.jpg"}
          alt="happy woman"
          height={400}
          width={500}
          className="rounded-t-full bg-contain"
        />
      </motion.div>

      <motion.div
        className="w-[30%]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <h3 className="text-2xl">ABOUT ME</h3>
        <h2 className="text-5xl font-bold py-3">Nutritionist & Naturopath</h2>
        <p className="py-3 text-neutral-600 text-lg">
          I offer free 15-minute Wellness Chats to help you understand what to expect from a treatment.
        </p>
        <p className="py-3 text-neutral-600 text-lg">
          If you’re curious about my approach and want to see if we’re a good fit, let’s connect!
        </p>
        <button className="cursor-pointer bg-yellow-500 rounded-tr-4xl rounded-bl-4xl px-12 py-5 text-white font-semibold my-6">
          LEARN MORE
        </button>
      </motion.div>

    </section>
  );
};

export default About;
