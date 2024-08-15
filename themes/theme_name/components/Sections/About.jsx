"use client";
import { About } from "@/content/Text/About";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";

export default function About_0() {
  const about = About();
  const ref = useRef(null);
  const controls = useAnimationControls();

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: "0",
        rotate: "0deg",
        opacity: 1,
        transition: { delay: 0.5, duration: 1 },
      });
      controls.start({
        x: "0",
        rotate: "0deg",
        transition: { duration: 1 },
      });
    } else
      controls.start({
        x: "200%",
        rotate: "180deg",
        transition: { duration: 1 },
      });
  }, [isInView]);
  return (
    <section
      id="About"
      ref={ref}
      className="h-full w-full bg-[#616161] relative pt-20 mt-28 font-griffy"
    >
      <div className=" z-30 relative grid grid-cols-3 aboutResponsiveGrid-2">
        <motion.div
          animate={controls}
          className=" aboutResponsiveDiv-0  border-[#bdbdbd] rounded-full border-2 m-auto overflow-hidden"
        >
          <div className="h-full w-full bg-gray-800 aboutResponsiveFont-1 cursor-default text-center absolute top-0 flex justify-center items-center flex-col">
            <h4 className="aboutResponsiveFont-2 ">
              About me <hr />
            </h4>

            <p className="">
              From a young age, I have always harbored a keen interest in
              computers and circuits. As I grew older I furthered my knowledge
              and expertise, by enrolling in a tech school where I gained an
              in-depth understanding of engineering. My academic pursuits
              continued at Cameron University, where I delved into computer
              science and acquired proficiencies in programming, networking,
              security, and much more.
            </p>
          </div>
        </motion.div>
        <motion.div
          animate={controls}
          className="aboutResponsiveDiv-0  border-[#bdbdbd] rounded-full border-2 overflow-hidden m-auto"
        >
          <div className="h-full w-full bg-gray-800 aboutResponsiveFont-1 cursor-default text-center flex justify-center items-center flex-col">
            <h3 className="aboutResponsiveFont-2  ">
              Experience <hr />
            </h3>
            <p>
              Postman, AWS, Node.js, Django, FastAPI, Next.js, linux, Sql
              Postgres, Dynamodb, Git & GitHub, Tailwind, Postman, AWS, Node.js,
              Django, FastAPI, Next.js, linux, Sql Postgres, Dynamodb, Git &
              GitHub, Tailwind, Active Directory, VM&apos;s, Parrot
            </p>
            {/* <p className="pt-4 text-base text-red-400">[Click Me & Hold Me]</p> */}
          </div>
        </motion.div>

        <motion.div
          animate={controls}
          className="aboutResponsiveDiv-0 border-[#bdbdbd] rounded-full border-2 overflow-hidden m-auto"
        >
          <div className="h-full w-full bg-gray-800 aboutResponsiveFont-1 cursor-default text-center flex justify-center items-center flex-col">
            <h3 className="aboutResponsiveFont-2  ">
              Education <hr />
            </h3>

            <ul>
              <h4 className="underline">
                Cameron University & The University of Central Oklahoma
              </h4>
              <li>Computer Science & Information Technology</li>
              <li>degree Expected</li>
              <h4 className="underline">Great Plains Technology Center</h4>
              <li>Engineering I</li>
              <h4 className="underline">Cisco Training</h4>
              <li>Python Essentials II</li>
              <li>Network Defense</li>
              <li>Ethical Hacker</li>
            </ul>
            {/* <p className="pt-4 text-base text-red-400">[Click Me & Hold Me]</p> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
