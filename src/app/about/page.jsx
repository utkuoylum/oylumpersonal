"use client";
import React, { useState } from "react";
import styles from "./About.module.css";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  about data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

// counter
import CountUp from "react-countup";
import Image from "next/image";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.aboutContainer}>
      {/* avatar img */}

      <div className={styles.contentContainer}>
        {/* text */}
        <div className={styles.blankStart}></div>
        <div className={styles.textContainer}>
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={styles.heading}
          >
            Captivating <span className={styles.headingAccent}>stories</span>{" "}
            birth magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={styles.paragraph}
          >
            10 years ago, I began freelancing as a developer. Since then, I've
            done remote work for agencies, counsulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={styles.counters}
          >
            <div className={styles.experience}>
              {/* experience */}
              <div className={styles.counterItem}>
                <div className={styles.counterText}>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className={styles.counterLabel}>Years of experience</div>
              </div>
              {/* clients */}
              <div className={styles.counterItem}>
                <div className={styles.counterText}>
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className={styles.counterLabel}>Satisfied clients</div>
              </div>
              {/* projects */}
              <div className={styles.counterItem}>
                <div className={styles.counterText}>
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className={styles.counterLabel}>Finished projects</div>
              </div>
              {/* awards */}
              <div className={styles.counterItem}>
                <div className={styles.counterText}>
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className={styles.counterLabel}>Winning awards</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className={styles.infoContainer}
        >
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={styles.avatarContainer}
          >
            <Image src={"/nobgpp.png"} alt="" fill className={styles.image} />
          </motion.div>
          <div className={styles.detailsContainer}>
            {" "}
            <div className={styles.infoTabs}>
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${styles.infoTab} ${
                      index === itemIndex ? styles.infoTabActive : ""
                    }`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className={styles.infoContent}>
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div key={itemIndex} className={styles.infoItem}>
                    {/* title */}
                    <div className={styles.infoItemTitle}>{item.title}</div>
                    <div className={styles.stage}>-</div>
                    <div>{item.stage}</div>
                    <div className={styles.infoIcons}>
                      {/* icons */}
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div key={itemIndex} className={styles.infoIcon}>
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
