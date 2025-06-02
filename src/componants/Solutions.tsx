import { ArrowRight, Clock, NotebookPen, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Solutions = () => {
  return (
    <section className="bg-yellow-500 text-white p-20 rounded-t-4xl">
      <h1 className="font-bold text-5xl text-center py-4" data-aos="zoom-in">
        Solution In Easy Steps Successful life
      </h1>
      <div className="flex justify-around items-center pb-20 pt-10" data-aos="fade-up">
        <div>
          <User className="w-12 h-12" />
          <span className="font-bold text-5xl">3.5k</span>
          <p className="font-semibold text-xl py-3">HAPPY CUSTOMERES</p>
        </div>

        <div>
          <Clock className="w-12 h-12" />
          <span className="font-bold text-5xl">32k</span>
          <p className="font-semibold text-xl py-3">WORKING HOURS</p>
        </div>

        <div>
          <NotebookPen className="w-12 h-12" />
          <span className="font-bold text-5xl">12</span>
          <p className="font-semibold text-xl py-3">PROFESSIONAL COURSES </p>
        </div>

        <div>
          <User className="w-12 h-12" />
          <span className="font-bold text-5xl">100%</span>
          <p className="font-semibold text-xl py-3">RESULT</p>
        </div>
      </div>

      <h1 className="font-bold text-5xl text-center py-6">How It Works</h1>
      <div className=" flex justify-center items-start gap-10">
        <div className="w-[40%]" data-aos="zoom-in">
          <Image
            src={"/images/happy-woman.jpg"}
            alt="logo"
            height={400}
            width={500}
            className="rounded-t-full bg-contain"
          />
        </div>

        <div className="w-[40%] p-10" data-aos="zoom-in">
          <div>
            <h2 className="font-semibold text-3xl py-3">
              Image from What will I eat?
            </h2>
            <p className="py-3">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <button className="flex py-3">
              SEE OUR RANGE OF MEALS
              <ArrowRight />
            </button>
            <hr className="p-4" />
          </div>

          <div>
            <h2 className="font-semibold text-3xl py-3">
              What will it be like?
            </h2>
            <p className="py-3">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <button className="flex py-3">
              YOUR PLAN EXPLAINED
              <ArrowRight />
            </button>
            <hr className="p-4" />
          </div>

          <div>
            <h2 className="font-semibold text-3xl py-3">
              How much will it cost?
            </h2>
            <p className="py-3">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <button className="flex py-3">
              VIEW ALL PACKAGES
              <ArrowRight />
            </button>
            <hr className="px-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
