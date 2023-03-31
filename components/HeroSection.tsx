"use client";
import Image from "next/image";
import React from "react";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

export const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/JustinWhiteCap_resized.jpg"
            alt="profile picture"
            width={350}
            height={350}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi there 👋, My name is Justin!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            <span>
              I&#39;m a{" "}
              <span className="font-semibold text-cyan-600">
                Software Engineer
              </span>{" "}
              and student. I love learning new technologies and I&#39;m on the
              path to master my coding skills.
            </span>
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-cyan-400 rounded shadow hover:bg-cyan-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown className="animate-bounce" size={35} />
        </Link>
      </div>
    </section>
  );
};
