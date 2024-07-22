import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Bio } from "../data/myData";
import hero from "../assets/Images/heroImg.png";

const Home = () => {
  const refContent = useRef(null);
  const inViewContent = useInView(refContent, { once: true });

  return (
    <section
      className="h-full w-full pb-8 pt-12 sm:px-6 sm:pb-10 md:pt-20"
      id="home"
    >
      <div className="flex flex-col items-center justify-evenly gap-4  lg:flex-row lg:items-start">
        {/* intro section */}
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={
            inViewContent
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: -100, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className="col-span-7 px-2"
        >
          <h1 className="text-white mb-4 text-4xl md:text-5xl font-[700] lg:leading-normal xl:text-6xl">
            Hi there, <br /> I'm {Bio.name}
          </h1>
          <TypeAnimation
            sequence={Bio.roles}
            speed={50}
            className="text-lg md:text-3xl font-[500]"
            repeat={Infinity}
          />

          <p className="text-textPara text-base sm:text-lg mb-6 mt-3 lg:text-xl">
            Stick around to see some of my work.
          </p>
          <div className="flex items-center gap-4 flex-col sm:flex-row ">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={1000}
              className="px-6 py-3 cursor-pointer w-full sm:w-fit rounded-full md:mr-4 bg-white hover:bg-gray-300 text-black text-lg font-[700] text-center hover:scale-[0.99] transition-all duration-400 ease-in-out"
            >
              Hire Me
            </ScrollLink>
            <a
              href={Bio.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-400 w-full rounded-full border-2 border-white bg-transparent px-6 py-3 text-center font-medium text-lg text-white transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-darkHover sm:w-fit md:mr-4 "
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Hero image section */}
        <motion.div
          ref={refContent}
          initial={{
            opacity: 0,
            x: 100,
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
              : { opacity: 0, x: 100, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className="relative mt-5  lg:-mt-14"
        >
          {/* <Suspense fallback={<Loading />}> */}
          <img
            src={hero}
            alt=""
            loading="lazy"
            className="size-[300px] cursor-pointer object-cover transition-all duration-300 ease-in-out hover:scale-[1.02] sm:size-[360px] md:size-[420px]"
          />
          {/* </Suspense> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
