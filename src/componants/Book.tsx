import Image from "next/image";
import React from "react";

const Book = () => {
  return (
      <section className="bg-yellow-50 flex justify-around  items-center  min-h-screen w-full p-20 text-black " data-aos="fade-right">
        <div className="w-[40%]">
          <h3 className=" text-2xl">MY BOOK</h3>
          <h2 className="text-5xl font-bold py-2">How to Cook Healthy</h2>
          <p className="py-3 text-neutral-600 text-lg">
            Sample text. Click to select the Text Element. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button className="cursor-pointer bg-yellow-500 rounded-tr-4xl rounded-bl-4xl px-12 py-5 text-white font-semibold my-6" >
            BUY NOW
          </button>
        </div>
        <div className="w-[40%]" data-aos="zoom-in">
          <Image
            src={"/images/book.png"}
            alt="logo"
            height={500}
            width={500}
            className="bg-contain"
          />
        </div>
      </section>

  );
};

export default Book;
