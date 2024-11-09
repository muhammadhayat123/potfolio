import React from "react";
import Card from "./Card";
import Heading from "./Heading";

const data = [
  {
    id: 0,
    title: "Advance Resume",
    desc: "A Next.js & Typescript based automated resume builder",
    img: "/Project_01.png",
    tags: ["HTML", "Node", "CSS", "Typescript"]
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A Next.js & Typescript powered website to track time",
    img: "/Project_02.png",
    tags: ["Next.js", "Node", "CSS", "Typescript"]
  },
  {
    id: 2,
    title: "Weather Widget",
    desc: "A Next.js & Typescript based tool to fetch weather conditions",
    img: "/Project_03.png",
    tags: ["Next.js", "Node", "CSS", "Typescript"]
  }
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
        {data.map((el) => (
          <Card key={el.id} title={el.title} desc={el.desc} img={el.img} tags={el.tags} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
