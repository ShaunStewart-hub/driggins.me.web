"use client";

import { motion, useInView, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";

export default function About() {
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

            <p>
              IT professional with over 7 years of experience in
              troubleshooting, hardware support, and web development. Skilled in
              optimizing IT systems, managing projects, and solving complex
              technical issues. Adept at working in dynamic environments and
              committed to innovation and continuous improvement. Proficient in
              a wide range of technologies including cloud platforms, version
              control, and machine learning frameworks.
            </p>
          </div>
        </motion.div>
        <motion.div
          animate={controls}
          className="aboutResponsiveDiv-0  border-[#bdbdbd] rounded-full border-2 overflow-hidden m-auto"
        >
          <div className="h-full w-full bg-gray-800 aboutResponsiveFont-1 cursor-default text-center flex justify-center items-center flex-col">
            <h3 className="aboutResponsiveFont-2  ">
              Skills <hr />
            </h3>

            <p>Coding Languages: Python, C#, SQL, XAML</p>
            <p>Cloud & DevOps: AWS, Azure</p>

            <p>
              Networking: TCP/IP, DNS, DHCP, ARP, SSH, Routers, Switches,
              Firewalls, Access Points, VLANs, QoS
            </p>
            <p>
              Security: Active Directory, Encryption, Risk Assessment,
              Vulnerability Assessment, MFA, Network Security, Endpoint
              Protection
            </p>

            <p>
              Machine Learning: PyTorch, Pandas, Scikit-learn, Neural Networks,
              Matplotlib
            </p>
            <p>Databases: DynamoDB, PostgreSQL/SQLite, MongoDB</p>
            <p>Micro-Soldering, Coding Arduino</p>

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
              <h4 className="underline">University of Central Oklahoma</h4>
              <li>Computer Science & Information Technology</li>
              <li>- degree Expected -</li>
              <h4 className="underline">Great Plains Technology Center</h4>
              <li>Engineering I</li>
              <h4 className="underline">Cisco Training</h4>
              <li>
                <p>Python Essentials II, Network Defense, Ethical Hacker </p>
              </li>
              <h4 className="underline">HarvardX</h4>
              <li>Web Programming with Python & JavaScript</li>
              <li>Introduction to Cybersecurity</li>
            </ul>
            {/* <p className="pt-4 text-base text-red-400">[Click Me & Hold Me]</p> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
