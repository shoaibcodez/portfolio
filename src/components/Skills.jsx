import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/myData";
import SkillCard from "./SkillCard";

const Skills = () => {
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent, { once: true });
  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <section className="sm:py-[80px] sm:px-8" id="skills">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-white text-3xl font-[800] sm:text-5xl">Skills</h3>
        <div className="bg-white mt-2 h-[4px] min-w-0 flex-grow"></div>
      </motion.div>
      {/* My Skills */}
      <div className="flex flex-col items-center justify-between gap-6 py-6 mt-20">
        {skills?.map((skill, key) => (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="w-full"
            key={key}
          >
            <SkillCard title={skill.title} skills={skill.skills} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
