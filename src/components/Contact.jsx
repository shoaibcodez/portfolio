import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading);
  const refContent = useRef(null);
  const inViewContent = useInView(refContent);

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="sm:px-6 sm:pt-[80px]" id="contact">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-white sm:text-5xl">
          Get In Touch
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </motion.div>
      <div className="relative mt-10 flex flex-col items-center gap-4 py-6 md:flex-row md:flex-start ">
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: -50 }}
          animate={
            inViewContent ? { opacity: 1, y: 0 } : { opacity: 1, y: -50 }
          }
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <p className="max-w-3xl text-lg text-textWhite">
            Thanks for visiting my portfolio! I'm always excited to connect with
            new people. Please feel free to connect with me via email or social
            media.
          </p>
          <h5 className="mt-6 mb-3 text-2xl font-bold text-heading md:text-3xl">
            Contact Info
          </h5>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <IoPerson />
              <h3 className="font-medium ">Shoaib Raja Molla</h3>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <h3 className="font-medium ">Kolkata, West Bengal, India</h3>
            </div>
            <div className="flex items-center gap-2">
              <IoMail />{" "}
              <h3 className="font-semibold ">shoaibrajamolla@gmail.com</h3>
            </div>
          </div>

          <div className="mt-16 flex flex-row gap-5">
            <a
              href="https://www.linkedin.com/in/shoaib-raja-molla/"
              className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px] "
              target="_blank"
            >
              <BsLinkedin className="size-7" />
              <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Linkedin
              </span>
            </a>
            <a
              href="https://github.com/shoaibcodez"
              className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px] "
              target="_blank"
            >
              <BsGithub className="size-7" />
              <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Github
              </span>
            </a>

            <a
              href="mailto:shoaibrajamolla@gmail.com"
              target="_blank"
              className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px] "
            >
              <HiMailOpen className="size-7 " />
              <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Email
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* footer */}
      <footer className="flex mt-4 items-center text-center pb-6">
        <span className="mx-auto text-textPara">
          © {new Date().getFullYear()} - shoaibcodez
        </span>
      </footer>
    </section>
  );
};

export default Contact;
