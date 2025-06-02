import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const quickLinks = [
    { label: "About Me", href: "/" },
    { label: "My Blog", href: "/" },
    { label: "Consultation", href: "/" },
    { label: "Books", href: "/" },
  ];

  const services = [
    { label: "Support & Motivation", href: "/" },
    { label: "Weight Loss Programs", href: "/" },
    { label: "Personalized Nutrition", href: "/" },
    { label: "Healthy Daily Life", href: "/" },
    { label: "Balance Body & Mind", href: "/" },
  ];
  return (
    <main className="bg-gray-900 text-white  py-30 px-20 flex justify-around items-start  w-full ">
      <section className="py-2">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          height={200}
          width={200}
          className="filter  invert brightness-50 "
        />
        <ul className="flex gap-2 my-5 text-white">
          <li>
            <Facebook />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Instagram />
          </li>
        </ul>
      </section>
      <FooterLink title={"quickLinks"} link={quickLinks} />
      <FooterLink title={"Our Services"} link={services} />

      <section>
        <h2 className="text-2xl font-bold">NewsLetter</h2>
        <form action="" className="flex flex-col gap-4 py-4">
          <input
            type="text"
            placeholder="Enter a valid email address"
            className="outline-none rounded-full p-3 w-72 bg-white text-neutral-900"
            aria-label="Email"
          />
          <button className="bg-yellow-500 text-white px-10 py-3 rounded-full">
            SUBMIT
          </button>
        </form>
      </section>
    </main>
  );
};

export default Footer;

export function FooterLink({
  title,
  link,
}: {
  title: string;
  link: { href: string, label: string }[];
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="flex flex-col py-4 text-yellow-500">
        {link.map((el, i) => {
          return (
            <li key={i} className="py-1">
              <Link
                href={el.href}
                className=" text-lg hover:border-b hover:border-yellow-500"
              >
                {el.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
