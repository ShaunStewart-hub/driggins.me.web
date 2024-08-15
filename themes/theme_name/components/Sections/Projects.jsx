"use client";
import Image from "next/image";
import { GalleryImg } from "@/content/Images/GalleryImg";
import BgVector from "@/components/BgVector/BgVector";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Section() {
  const Gallery = GalleryImg();
  const ref = useRef(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start({
        rotateY: "0deg",
        opacity: 1,
        transition: { duration: 1 },
      });
    } else
      controls.start({
        rotateY: "180deg",
        opacity: 0,
        transition: { duration: 1 },
      });
  }, [isInView]);

  return (
    <section
      id="Projects"
      className="pb-24 aboutResponsivePadding-rl pt-20  mt-36 bg-[#616161] relative h-full w-full"
    >
      <motion.div animate={controls} className="grid gap-4 z-20 relative">
        <div className="relative border-2 rounded-lg">
          <a
            href="https://django0-production.up.railway.app/login"
            target="_blank"
          >
            <Image
              className=" rounded-lg h-full w-full"
              height={1000}
              width={1000}
              src={Gallery.Image1}
              alt=""
            />

            <div className="OverlayBox-Shadow absolute w-full h-full top-0 rounded-lg ">
              <div className="Overlay-text">
                <h4 ref={ref} className="text-4xl">
                  Django & SQL
                </h4>
              </div>
            </div>
          </a>
        </div>
        <div className="grid grid-cols-10 gap-4 aboutResponsiveGrid-0">
          <div className="relative border-2 rounded-lg col-span-2">
            <a
              href="https://fastapi-production-9684.up.railway.app/redoc#tag/Posts/operation/create_posts_posts__post"
              target="_blank"
            >
              <Image
                className=" rounded-lg h-full w-full"
                height={100}
                width={100}
                src={Gallery.Image2}
                alt=""
              />

              <div className="OverlayBox-Shadow absolute w-full h-full top-0 rounded-lg OverlayBox-Shadow-purple">
                <div className="Overlay-text">
                  <h4 className="projectResponsive-0">FastAPI & SQL</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="relative border-2 rounded-lg col-span-2">
            <a
              href="https://stellular-faun-3a68e8.netlify.app/"
              target="_blank"
            >
              <Image
                className=" rounded-lg h-full w-full"
                height={100}
                width={100}
                src={Gallery.Image3}
                alt=""
              />

              <div className="OverlayBox-Shadow absolute w-full h-full top-0 rounded-lg OverlayBox-Shadow-blue">
                <div className="Overlay-text">
                  <h4 className="projectResponsive-0">Next.js & three-js</h4>
                </div>
              </div>
            </a>
          </div>
          <div
            className="relative border-2 rounded-lg col-span-2"
            title="Downloadable link"
          >
            <a href="./chrome_tab_tracker.zip" download="extension">
              <Image
                className=" rounded-lg h-full w-full"
                height={100}
                width={100}
                src={Gallery.Image4}
                alt=""
              />

              <div className="OverlayBox-Shadow absolute w-full h-full top-0 rounded-lg OverlayBox-Shadow-red">
                <div className="Overlay-text">
                  <h4 className="projectResponsive-0">Browser Extension</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="relative border-2 rounded-lg projectGridSpan-0 col-span-2">
            <a href="#" target="_blank">
              <Image
                className=" rounded-lg h-full w-full"
                height={100}
                width={100}
                src={Gallery.Image5}
                alt=""
              />

              <div className="OverlayBox-Shadow absolute w-full h-full top-0 rounded-lg OverlayBox-Shadow-green">
                <div className="Overlay-text">
                  <h4 className="projectResponsive-0">TensorFlow</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="relative border-2 rounded-lg col-span-2">
            <a
              href="https://guileless-paletas-1f13d6.netlify.app/"
              target="_blank"
            >
              <Image
                className=" rounded-lg h-full w-full"
                height={100}
                width={100}
                src={Gallery.Image6}
                alt=""
              />

              <div className="OverlayBox-Shadow absolute w-full h-full top-0 rounded-lg OverlayBox-Shadow-yellow">
                <div className="Overlay-text">
                  <h4 className="projectResponsive-0">Simple JavaScript</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
