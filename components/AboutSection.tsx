import Image from "next/image";
import React from "react";
const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "TailwindCSS" },
  { skill: "Bootstrap" },
  { skill: "Git" },
  { skill: "Docker" },
];

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-cyan-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Justin and I am a{" "}
              <span className="font-bold">tenacious</span> ,{" "}
              <span className="font-bold">highly ambitious</span>,{" "}
              <span className="font-bold">adaptable</span>, and{" "}
              <span className="font-bold">passionate</span> software engineer
              graduate based in New York, NY.
            </p>
            <br />
            <p>
              I will be graduating from New Jersey Institute of Technology in
              May 2023 with a BS in Engineering Technology
            </p>
            <br />
            <p>
              I have always been a dedicated gamer with a passion for all types
              of video games. From the latest first-person shooters to classic
              arcade games, I loves immersing myself in different virtual worlds
              and experiencing new challenges.
            </p>
            <br />
            <p>
              When I am not gaming, I enjoy reading up on my favorite mangas and
              comic, coding, as well as gaining new experiences. I believe we
              are all little universes with limitless potential the world has
              much to offer and I want to soak it all up!
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold "
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
              src="/about-image.jpg"
              alt="justin stanced"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
