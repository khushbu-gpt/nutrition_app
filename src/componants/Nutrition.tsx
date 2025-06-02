import Image from "next/image";
import React from "react";

const Nutrition = () => {
  return (
    <div className="relative bg-gray-900 text-white w-full min-h-screen rounded-t-4xl " data-aos="fade-left">
      <div className="absolute -top-20 transform -translate-x-1/2 left-1/2  z-10" data-aos="fade-left">
        <Image
          src="/images/sports-girl.jpg"
          alt="Active sports woman"
          width={1000}
          height={800}
          className="rounded-4xl bg-cover"
          priority
        />
      </div>

      <div className="relative z-20 pt-[450px] pb-16 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold py-3" data-aos="fade-right">
          Nutritionist & Naturopath
        </h2>
        <p className="text-lg py-3 font-medium" data-aos="fade-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc
          justo sagittis suscipit ultrices. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <button className="bg-yellow-500 rounded-tr-4xl rounded-bl-4xl px-10 py-4 text-white font-semibold my-6 hover:bg-yellow-400 transition" data-aos="fade-right">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Nutrition;
