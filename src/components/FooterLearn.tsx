import Link from "next/link";
import React from "react";
import { Youtube } from "./icons";

export default function FooterLearn() {
  return (
    <section className="bg-gradient-to-br from-lime-700 via-lime-900 to-lime-400 px-6 sm:px-8 md:px-12 py-6 flex flex-col items-center justify-between gap-y-4  w-full md:w-1/2 ">
      <h4 className="text-2xl xs:text-4xl sm:text-4xl lg:text-5xl font-semibold text-light uppercase ">
        <span className="text-dark font-bold">See Highlights of Pak Vs SA </span>
        &nbsp;<br /> 1st Test Day 4
      </h4>
      <Link
        href={"https://youtu.be/qvPcHXV5QqQ?si=OxPkmuQWjhv4iwlu"}
        target="_blank"
        className=" bg-dark text-light px-6 py-3 text-xl shadow-md shadow-accentDarkPrimary/30  rounded-lg  hover:bg-light hover:text-dark font-semibold w-auto text-center uppercase flex items-center gap-x-2 "
      >
        PAK VS SA <Youtube className={"w-8 h-8 inline"} />
      </Link>
    </section>
  );
}