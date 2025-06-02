import Image from "next/image";
import React from "react";

const Work = () => {
  const List=[
    {
      id:"01",
      title:"Your Body’s Natural Healing",
      path:"/images/happy-woman.jpg"
    },
        {
      id:"02",
      title:"Biochemical balance",
      path:"/images/veg.jpg"
    },
    {
      id:"03",
      title:"The Power of Mindset",
      path:"/images/woman-smiling.jpg"
    }
  ]
  return (
    <div className="bg-gray-900 text-white w-full p-20" data-aos="fade-up">
    <div className="w-[50%] mx-auto">  <h2 className="text-5xl font-bold text-center">The core of my work</h2>
      <p className="text-lg text-center pt-5 tracking-wider">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat
      </p></div>
      <div className="flex  justify-center items-center gap-10 py-20">
        {List.map((el,i)=>{ 
       return<div className="bg-white text-black relative h-96 w-96 rounded-tl-4xl rounded-br-4xl py-10" key={i}>
          <p className="text-xl font-extrabold text-center">{el.id}</p>
          <h2 className="text-4xl font-extrabold text-center ">{el.title}</h2>
         <div className="absolute bottom-0 right-0 ">
           <Image
            src={el.path}
            alt="logo"
            height={150}
            width={150}
            className="rounded-tl-4xl rounded-br-4xl bg-contain"
          />
         </div>
        </div>
        })}
      </div>
    </div>
  );
};

export default Work;
