import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="py-5 flex  justify-around items-center">
        <div className="">
          <Image src={"/images/logo.png"} alt="logo" height={150} width={150} />
        </div>
        <div className="flex gap-10">
          <ul className="flex gap-7 text-neutral-700 justify-center items-center">
            <li>
              <Link
                href="/"
                className="hover:border-b   hover:border-neutral-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:border-b   hover:border-neutral-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:border-b   hover:border-neutral-700"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button className="bg-yellow-500 text-white rounded-full px-6 py-3 cursor-pointer hover:bg-gray-500 font-semibold">
            Book An Appointment
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
