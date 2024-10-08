"use client";
import HouseOfCards from "@/components/harryPotterHousesSection/houseOfCards";
import HouseOfImages from "@/components/harryPotterHousesSection/houseofImages";
import { PollQuestionText_1 } from "@/content/polls/pollQuestion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { motion } from "framer-motion";
import Votes from "@/components/votes";

export default function MainSection(props) {
  const PollQuestion = PollQuestionText_1();
  return (
    <section className="h-full min-h-[600px] w-full bg-slate-500 text-white cursor-default relative">
      <Image
        width={1800}
        height={1800}
        className="grayscale w-full min-h-[600px] absolute"
        src="/img/bg01.png"
        alt=""
      />
      <div className="h-full w-full text-white grid grid-rows-[auto, auto] top-0 z-10 relative">
        <div className=" h-full w-full text-center  text-3xl font-griffy paddingResponsive-0 fontResponsive-0 ">
          <p className="mb-[2.7vw]">{PollQuestion.Question}</p>
          {/* <h2 className="fontResponsive_0">Contact the number: *** *** ****</h2> */}
          <p className="fontResponsive_0">
            To cast your vote, please call the number
            <span className=" inline-block">&#8202; (361) 844-0698.</span>
          </p>
          {/* (361) 844-0698 */}
        </div>
        <div className="h-full w-full relative z-20 self-center">
          <motion.div
            animate={{ y: [0, 25, 0, 25, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 15, duration: 0.5 }}
            className="grid grid-cols-4 pt-12 pl-4 pr-4"
          >
            {PollQuestion.choices.map((choice, x = -1, y = 0) => (
              <HouseOfImages
                votes={<Votes house={x} vote></Votes>}
                key={choice}
                imgTag={
                  <Tilt
                    tiltAxis="y"
                    perspective={700}
                    scale={1.1}
                    className="h-full w-full"
                  >
                    {/* {y++} */}
                    <Image
                      src={PollQuestion.images[x++]}
                      width={150}
                      height={150}
                      alt=""
                      className="center-img pt-6"
                    />
                  </Tilt>
                }
              ></HouseOfImages>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1695459568 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
