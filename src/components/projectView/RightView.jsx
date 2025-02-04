import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";

const RightView = ({ id, name, description, img, tech, source, demo }) => {
  const refContent = useRef(null);
  const inViewContent = useInView(refContent);

  return (
    <div className="mt-[80px] grid grid-cols-1 md:px-10 lg:mt-[120px] xl:grid-cols-12">
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, filter: "blur(6px) brightness(50%)" }}
        animate={
          inViewContent
            ? { opacity: 1, filter: "blur(0px) brightness(100%)" }
            : { opacity: 1, filter: "blur(6px) brightness(50%)" }
        }
        transition={{ duration: 1 }}
        className="col-span-7 w-full lg:w-fit brightness-50 transition-all duration-700 ease-in-out hover:z-20 hover:scale-[1.05] hover:brightness-100"
      >
        <a
          href={demo}
          target="_blank"
          className="mx-auto flex w-fit items-center justify-center lg:mx-0 lg:justify-start"
        >
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="h-[300px] w-[500px] rounded-md object-cover cursor-pointer"
          />
        </a>
      </motion.div>
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, x: 50 }}
        animate={inViewContent && { opacity: 1, x: 0 }}
        viewport={{
          once: true,
          amount: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative col-span-5 flex w-full flex-col items-end"
      >
        {/* project tagline */}
        <div
          className={`w-full px-3 py-2 text-right text-3xl font-[600] transition-all duration-300 ease-in-out lg:py-0`}
        >
          <h3 className="text-heading font-bold">{name}</h3>
        </div>
        {/* description absolute */}
        <div className="group right-0 top-[40px] z-10 mt-1 w-full rounded-lg bg-bgDark shadow-sm shadow-slate-800 p-2 lg:absolute lg:w-[500px]">
          {description?.map((item, i) => (
            <div key={i} className="flex items-start gap-1 sm:gap-2">
              <MdArrowRight className={" h-5 w-4 flex-none"} />
              <div className="text-sm text-textWhite">
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
        {/* tech stack */}
        <div className="mt-4 flex items-center gap-2 text-xs text-heading font-medium md:gap-3 md:text-sm lg:mt-[220px] ">
          {tech?.map((item, i) => {
            return <span key={i}>{item}</span>;
          })}
        </div>
        {/* links */}
        <div className="mt-5 flex w-full items-center justify-end gap-8 text-sm font-[500]">
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="group relative flex animate-bounce cursor-pointer items-center gap-1"
            >
              <FaGithub size={22} />
              <span className="absolute -left-[135%] top-7 w-[90px] whitespace-nowrap px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Source Code
              </span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="group relative flex animate-bounce cursor-pointer items-center gap-2"
            >
              <MdLaunch size={22} />
              <span className="absolute -left-[60%] top-7 w-fit px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Demo
              </span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RightView;
