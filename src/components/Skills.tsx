import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="flip-down">
          <h2 className="text-4xl md:text-5xl">Technologies I Work With</h2>
          <p className="text-gray-500 pt-2">
            I am proficient in a range of tools and technologies supporting full-stack development, including React.js, Next.js, Node.js, Tailwind CSS, and more.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-accent text-3xl sm:text-4xl">
          <div className="space-y-2">
            <h2 data-aos="flip-down">React.js</h2>
            <h2 data-aos="flip-down">TypeScript</h2>
            <h2 data-aos="flip-down">Next.js</h2>
          </div>
          <div className="space-y-2">
            <h2 data-aos="flip-down">Tailwind</h2>
            <h2 data-aos="flip-down">CSS</h2>
            <h2 data-aos="flip-down">Node.js</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
