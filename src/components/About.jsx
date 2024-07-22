import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import about from "../assets/Images/about.png";
import { Bio } from "../data/myData";
import {
  SiCodeforces,
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";
import { MdArrowRight } from "react-icons/md";

const About = () => {
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent, { once: true });

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[80px] sm:px-8" id="about">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800]  sm:text-5xl">About Me</h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </motion.div>

      <div className="mt-16 flex flex-col items-center justify-between gap-10 py-6 lg:flex-row">
        <motion.div
          ref={refContent}
          initial={{
            opacity: 0,
            x: -100,
            scale: 0.8,
            filter: "blur(6px)",
          }}
          animate={
            inViewContent
              ? {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }
              : { opacity: 1, x: -100, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={about}
            alt="About"
            className="w-[300px] h-[300px] rotate-[2.5deg] cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] sm:size-[350px]"
            priority
          />
        </motion.div>

        <motion.div
          ref={refContent}
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={
            inViewContent
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 100, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className="flex-1 xl:px-4"
        >
          <p>{Bio.description}</p>
          <div className="mt-6 w-full sm:mt-0">
            {/* Education */}
            <div className="w-full">
              <h5 className="mt-4 text-xl font-bold text-textWhite">
                Education
              </h5>
              <div className="graduation">
                <h5 className="text-lg font-medium">
                  Netaji Subhash Engineering College, Kolkata
                </h5>
                <div className=" flex w-full items-start gap-1 sm:gap-2">
                  <MdArrowRight className={" h-5 w-4 flex-none"} />
                  <div
                    className="flex w-full items-start justify-between gap-5 text-sm font-bold text-heading
                  "
                  >
                    <p>
                      Bachelor of Technology - BTech, Information Technology{" "}
                      <br />
                      <small>2021 - 2025</small>
                    </p>
                    <span>GPA: 8.91/10.00</span>
                  </div>
                </div>
              </div>
              <div className="higher-secondary">
                <h5 className="text-lg font-medium">
                  Delhi Public School Ruby Park, Kolkata
                </h5>
                <div className=" flex w-full items-start gap-1 sm:gap-2">
                  <MdArrowRight className={" h-5 w-4 flex-none"} />
                  <div
                    className="flex w-full items-start justify-between gap-5 text-sm font-bold text-heading
                  "
                  >
                    <p>
                      CBSE(XII), Science with Computer <br />
                      <small>2020 - 2021</small>
                    </p>
                    <span>PCT: 83%</span>
                  </div>
                </div>
              </div>
              <div className="secondary">
                <h5 className="text-lg font-medium">
                  St. Francis Xavier School, Kolkata
                </h5>
                <div className=" flex w-full items-start gap-1 sm:gap-2">
                  <MdArrowRight className={" h-5 w-4 flex-none"} />
                  <div
                    className="flex w-full items-start justify-between gap-5 text-sm font-bold text-heading
                  "
                  >
                    <p>
                      ICSE(X), Science with Computer <br />
                      <small>2018 - 2019</small>
                    </p>
                    <span>PCT: 89%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Achievement */}
            <div className="mt-4 w-full">
              <h5 className="mb-0.5 mt-2 text-xl font-bold text-textWhite">
                Achievements
              </h5>
              <div className="space-y-1.5">
                <div className="flex items-start gap-1 sm:gap-2">
                  <MdArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Solved{" "}
                    <span className="font-bold text-heading">
                      1600+ coding questions{" "}
                    </span>
                    on various coding platforms.
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <MdArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Secured{" "}
                    <span className="font-bold text-heading">
                      Global Rank 1322{" "}
                    </span>
                    out of 40000+ participants in Codeforces Round 954 (Div.3).
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <MdArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Achieved{" "}
                    <span className="font-bold text-heading">
                      Global Rank 2111{" "}
                    </span>
                    out of 25000 participants in Codeforces Round 860 (Div.2).
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <MdArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Secured{" "}
                    <span className="font-bold text-heading">
                      Global Rank 687{" "}
                    </span>
                    out of 3300 participants in Codechef Starters 83 (Div.2).
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <MdArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Pupil on Codeforces,{" "}
                    <span className="font-bold text-heading">
                      max rating – 1395
                    </span>
                    .
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <MdArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    3 Star on Codechef,{" "}
                    <span className="font-bold text-heading">
                      max rating – 1678.
                    </span>
                    .
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <MdArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Solved over 600+ DSA Problems on Leetcode,{" "}
                    <span className="font-bold text-heading">
                      max rating – 1645.
                    </span>
                    .
                  </div>
                </div>
              </div>
            </div>
            {/* Coding profiles */}
            <div className="mt-6 w-full">
              <h5 className="text-xl font-bold text-textWhite">
                Coding Profiles
              </h5>

              <div className="mt-2 flex items-center gap-3">
                <a
                  href={Bio.links.leetcode}
                  target="_blank"
                  title="Leetcode"
                  className="flex items-center gap-1 rounded-md bg-slate-800 px-3 py-2 text-sm font-medium text-[#FFA116] transition-all duration-500 ease-in-out hover:scale-[1.05] hover:text-[#000000] hover:bg-[#FFA116]"
                >
                  <SiLeetcode className="size-6" />
                </a>
                <a
                  href={Bio.links.codeforces}
                  target="_blank"
                  title="Codeforces"
                  className="flex items-center gap-1 rounded-md bg-slate-800 px-3 py-2 text-sm font-medium text-[#1990ce] transition-all duration-500 ease-in-out hover:scale-[1.05] hover:text-[#000000] hover:bg-[#1990ce] "
                >
                  <SiCodeforces className="size-6" />
                </a>
                <a
                  href={Bio.links.codechef}
                  target="_blank"
                  title="Codechef"
                  className="flex items-center gap-1 rounded-md bg-slate-800 text-[#905424] px-3 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-[1.05] hover:text-[#000000] hover:bg-[#905424] "
                >
                  <SiCodechef className="size-6" />
                </a>
                <a
                  href={Bio.links.gfg}
                  target="_blank"
                  title="GeeksForGeeks"
                  className="flex items-center gap-1 rounded-md bg-slate-800 px-3 py-2 text-sm font-medium transition-all duration-500 ease-in-out text-[#2F8D46] hover:scale-[1.05] hover:text-[#000000] hover:bg-[#2F8D46]"
                >
                  <SiGeeksforgeeks className="size-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
