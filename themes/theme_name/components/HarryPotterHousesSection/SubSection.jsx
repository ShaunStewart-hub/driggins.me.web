"use client";
import HouseOfCards from "./HouseOfCards";
import BgVector from "@/components/BgVector/BgVector";
import { PollQuestionText_1 } from "@/content/Polls/PollQuestion";
import { useAnimationControls, useInView, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function Section(props) {
  const PollQuestion = PollQuestionText_1();
  const ref = useRef(null);
  const controls = useAnimationControls();

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start({
        height: "100%",
        x: "0%",
        opacity: 1,
        transition: { delay: 0.3, duration: 1 },
      });
    } else
      controls.start({
        height: "0%",
        x: "100%",
        opacity: 0,
        transition: { duration: 0 },
      });
  }, [isInView]);

  return (
    <section className="bg-[#616161] text-white relative h-full w-full pt-7">
      <BgVector></BgVector>
      <div
        ref={ref}
        className="grid grid-cols-4 gap-[3%] pr-[2%] pl-[2%] w-full top-0 mediaCard-0 "
      >
        {PollQuestion.choices.map((choice, x = -1) => (
          <motion.div
            key={choice}
            animate={controls}
            className="z-40 h-full w-full"
          >
            <HouseOfCards
              text_h3={choice}
              text_p={PollQuestion.summary[x]}
            ></HouseOfCards>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
