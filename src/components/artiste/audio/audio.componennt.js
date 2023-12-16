import React, { useState } from "react";
import ArrowSrc from "../../../assets/img/icons/arrow-down.svg";
import Player from "./player.component";
import { sortByTitle } from "../../../utils/sort-by-title";
import { Section } from "./audio.styles";
import { motion, useAnimation } from "framer-motion";
import { veryLittleFadeUpVariants } from "../../../assets/animations/animations";
import BlueSrc from "../../../assets/img/shapes/blue-1.svg";
import { Parallax } from "react-scroll-parallax";
import { littleFadeUpVariants } from "../../../assets/animations/animations";

const Audio = ({ audioArr }) => {
  audioArr = sortByTitle(audioArr);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const controls = useAnimation();

  const toggleCollapse = async () => {
    setIsCollapsed(!isCollapsed);
    // Use Framer Motion to animate the opening/closing of the collapsible content
    await controls.start({ height: !isCollapsed ? 0 : "auto" });
  };
  return (
    <>
      <div className="p-holder">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={littleFadeUpVariants}
          transition={{ duration: 0.75, delay: 0.75 }}
        >
          <div className="blue-1 z-0">
            <Parallax translateY={[100, 30]}>
              <img src={BlueSrc} alt="Forme" />
            </Parallax>
          </div>
        </motion.div>
      </div>
      <Section className="container pb-3">
        <div className="col-12 my-5">
          <div className="col-12 my-5 px-0">
            <div className="d-flex justify-content-center">
              <motion.button
                type="button"
                className={`artist-collapsible px-0 `}
                onClick={toggleCollapse}
                aria-expanded={!isCollapsed}
                aria-controls="collapseExample"
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.5 }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="fw-normal text-black">Audio</h2>
                  <div className={isCollapsed ? "" : "flipped"}>
                    <img className="arrow" src={ArrowSrc} alt="Flèche" />
                  </div>
                </div>
              </motion.button>
            </div>

            <motion.div
              initial={controls}
              animate={controls}
              transition={{ duration: 0.5 }}
              style={{
                overflow: "hidden",
              }}
            >
              {audioArr &&
                audioArr.map((audio) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={veryLittleFadeUpVariants}
                    transition={{ duration: 0.75, delay: 0.25 }}
                    viewport={{ once: true }}
                  >
                    <Player key={audio.id} audio={audio} />
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Audio;
