"use client";
import { Quotes_1 } from "@/content/text/qoutes";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Banner() {
  const content = Quotes_1();
  const ref = useRef(null);
  const controls = useAnimationControls();

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { delay: 0.5, duration: 1 },
      });
    } else
      controls.start({
        y: 40,
        opacity: 0,
        transition: { duration: 1 },
      });
  }, [isInView]);
  return (
    <section className="h-full w-full bg-[#616161] relative ">
      <div className="pt-48 pl-[8%] pr-[8%] z-30 relative sectionResponsive-0 sectionAbout-div-2">
        <div className="grid grid-cols-2 border-[#bdbdbd] rounded-3xl border-2 overflow-hidden relative sectionAbout-div-1">
          <div className="h-full w-full bg-gray-800 p-7 display flex justify-center items-center indent-4 cursor-default textResponsive-0">
            <motion.h4 ref={ref} animate={controls} className="z-30">
              {content.TechQuote}
            </motion.h4>
          </div>
          <div className=" bg-gray-800 sectionAbout-div-0">
            <div className="bg-black sectionAbout-div-4 opacity-0 h-full w-full z-20 absolute top-0"></div>
            <img
              className="h-full w-full rounded-3xl"
              src="/img/MagicBook.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
