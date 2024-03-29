import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import SlideUp from "./SlideUp";
const projects = [
  {
    name: "MyWebClass",
    description:
      "Marketing Site for a new A.I driven learning platform, meant to help all those interested in software development.",
    image: "/mywebclass.png",
    github: "https://github.com/Jad229/mywebclass",
    link: "https://mywebclass.tejpatel.live/en",
  },
  {
    name: "Pretty Queen",
    description:
      "Pretty Queen is a salon website built with Next.js and Tailwind that offers a wide range of beauty services.",
    image: "/prettyqueen.png",
    github: "https://github.com/Jad229/web-salon",
    link: "https://web-salon.vercel.app/",
  },
  {
    name: "Pretty Queen Ver. 1 Design Mockup",
    description:
      "Pretty Queen is a salon website built with Vue.js and bootstrap that offers a wide range of beauty services to help clients look and feel their best.",
    image: "/pretty-queen.png",
    github: "https://github.com/Jad229/pretty-queen-v2",
    link: "https://pretty-queen.vercel.app/",
  },
  {
    name: "Keeper App",
    description: "The Keeper app is a clone of google keep built with React",
    image: "/keeper-app-thumbnail.png",
    github: "https://github.com/Jad229/keeper-app",
    link: "https://jad229.github.io/keeper-app/",
  },
  {
    name: "Ideal Car Corp",
    description:
      "Ideal Car Corp is a car dealership website meant to  provides an easy-to-use platform for customers to browse our inventory, compare models, and get in contact. ",
    image: "/ideal-car-corp-thumbnail.png",
    github: "https://github.com/Jad229/nextjs-car-dealer",
    link: "https://nextjs-car-dealer-hkxj.vercel.app/",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-cyan-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-12 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};
