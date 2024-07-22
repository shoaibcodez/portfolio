import React from "react";
import { ProjectList } from "../data/ProjectList";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LeftView from "./projectView/LeftView";
import RightView from "./projectView/RightView";

const Projects = () => {
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading);

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className=" sm:px-8 py-[80px]" id="projects">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex gap-4 items-center"
      >
        <h3 className="text-white text-3xl font-[800] sm:text-5xl">Projects</h3>
        <div className="bg-white mt-2 h-[4px] min-w-0 flex-grow"></div>
      </motion.div>

      {/* Projects */}
      {ProjectList?.map((project, i) => {
        return project.id % 2 === 0 ? (
          <LeftView key={i} {...project} />
        ) : (
          <RightView key={i} {...project} />
        );
      })}
    </section>
  );
};

export default Projects;
