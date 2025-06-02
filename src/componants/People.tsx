import React from "react";

const People = () => {
  const peoples=[
            {
                name:"Stella Larson",
                desc:`Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. `,
                date:"Monday, May 2024"
            },
              {
                name:"Nick Jhonson",
                desc:`Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. `,
                date:"Monday, June 2024"
            },
              {
                name:"Olga Ivanova",
                desc:`Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. `,
                date:"Monday, May 2024"
            },
    ]
  return <div className="p-20">
        <h2 className="font-bold text-5xl text-center py-20" data-aos="zoom-in">What People Say?</h2>
        <div className="flex justify-center items-start gap-20 pb-20" data-aos="fade-up">
        {
            peoples.map((el,i)=>{
                return<PeopleList name={el.name} desc={el.desc} date={el.date} key={i}/>
            })
        }
        </div>
  </div>;
};

export default People;

export function PeopleList({
  name,
  desc,
  date,
}: {
  name: string;
  desc: string;
  date: string;
}) {
  return (
    <div className="w-72">
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="py-4 text-lg">{desc}</p>
      <hr  className="text-yellow-500 py-4"/>
      <p className="text-yellow-500">{date}</p>
    </div>
  );
}
