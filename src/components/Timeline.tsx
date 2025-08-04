import React from "react";
import "../styles/global.css";
import LinkButton from "./LinkButton";

type Course = {
  id: number;
  text: string;
  url: string;
};

const course: Course[] = [
  {
    id: 1,
    text: "Course ”JavaScript from MMC School”",
    url: "https://mmcschool.pl/kursy/kurs-javascript/",
  },
  {
    id: 2,
    text: "Course ”Understand React”",
    url: "https://zrozumreact.pl/",
  },
  {
    id: 3,
    text: "Course ”Next.js from Scratch - Complete Guide”",
    url: "https://www.udemy.com/course/nextjs-14-od-podstaw/?kw=next&src=sac&couponCode=MT40825",
  },
  {
    id: 4,
    text: "Course ”Master TypeScript - Core Pro & React Pro”",
    url: "https://opanujtypescript.pl/",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="max-md:hidden relative w-full max-w-[800px] mx-auto mt-14">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[var(--accent-color)]" />
      <ul className="flex flex-col mx-8 list-none">
        {course.map((e, index) => (
          <li
            key={e.id}
            className={`relative mb-8 p-4 w-1/2 border border-[var(--accent-color)] rounded-lg ${
              index % 2 !== 0
                ? "self-end translate-x-[20px]"
                : "self-start -translate-x-[20px]"
            }`}
          >
            <div
              className={`absolute top-[calc(50%-10px)] w-5 h-5 bg-[var(--accent-color)] rounded-full ${
                index % 2 !== 0 ? "left-[-31px]" : "right-[-31px]"
              }`}
            />
            <div className="flex flex-col gap-2">
              <p className="text-[var(--second-color)] w-fit text-xl transition-colors duration-300 hover:text-[var(--accent-color)]">
                {e.text}
              </p>
            </div>
            <div className="mt-5">
              <LinkButton href={e.url} label="Show course" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
