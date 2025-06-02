import Image from "next/image";
import React from "react";

const Consultant = () => {
    return (
        <div className="h-screen w-full flex justify-center items-start p-20 gap-20">
            <div className="w-[25%]">
                <Image
                    src={"/images/happy-woman.jpg"}
                    alt="logo"
                    height={200}
                    width={200}
                    className="bg-contain rounded-full"
                />
                <h2 className="font-extrabold text-4xl py-5">I’m ​Saundra Miers,
                    a nutrition consultant</h2>
            </div>
            <div className="w-[40%]">
                <p className="text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button className="cursor-pointer bg-yellow-500 rounded-tr-4xl rounded-bl-4xl px-12 py-5 text-white font-semibold mt-6">LEARN MORE</button>
                <div className="flex justify-center items-center gap-10 mt-10">
                    <Image
                    src={"/images/diet-concept.jpg"}
                    alt="logo"
                    height={200}
                    width={200}
                    className="bg-contain rounded-l-full"
                />
                   <Image
                    src={"/images/veg.jpg"}
                    alt="logo"
                    height={200}
                    width={200}
                    className="bg-contain"
                />
                </div>
            </div>
        </div>
    );
};

export default Consultant;
