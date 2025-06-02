"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Message = () => {
  const quesAns = [
    "What is a Naturopath?",
    "What is a Holistic Nutritionist?",
    "How can a Naturopath help me?",
    "How do online Nutrition consultations work?",
    "What is a healthy diet?",
    "How can I get nutrition advice about a medical condition?",
  ];

  const commonAnswer = `Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis
  elementum. Phasellus sed efficitur dolor, et ultricies sapien.
  Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem
  odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.`

  const [openIndex, setOpenIndex] = useState<number|null>(null);
  const toggleButton=(index:number)=>{
    setOpenIndex(openIndex===index?null:index)
  }
  return (
    <div className="bg-gray-900 text-white flex justify-center items-start pt-20 w-full min-h-screen">
      <div className="w-[45%] py-10 px-20">
        <h2 className="font-bold text-white text-3xl text-center">
          Frequently Asked Questions
        </h2>
        {quesAns.map((el, i) => (
          <div
            className=" w-full  border-b border-gray-700 cursor-pointer my-5"
            key={i}
          >
            <div
              className="font-semibold text-lg flex justify-between items-center hover:bg-gray-500 py-4 px-6"
              onClick={() => toggleButton(i)}
            >
              <span>{el}</span>
              <ChevronDown
                className={`transform transition-transform duration-200 ${
                  openIndex===i ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex===i && <p className="text-lg py-6">{commonAnswer}</p>}
          </div>
        ))}
      </div>
      <div className="rounded-4xl bg-white p-14 w-[35%] text-black">
        <h2 className=" text-4xl py-4 font-bold text-center">
          How can I help you?
        </h2>
        <p className="text-lg pb-4 text-center">
          Please take a few moments to let me know about yourself and your
          health goals before we start working together:
        </p>
        <form action="" className="w-full">
          <div className="py-4 ">
            <input
              type="text"
              placeholder="Enter your name"
              className="border-b w-full py-2 outline-none "
            />
          </div>
          <div className="py-4">
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="border-b w-full py-2 outline-none"
            />
          </div>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="border-b  py-2 w-full outline-none"
            placeholder="Tell me about your health goals"
          ></textarea>
          <button
            className="bg-yellow-500 text-white py-5 px-10 w-full rounded-full my-4 cursor-pointer font-semibold text-base"
            type="submit"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
