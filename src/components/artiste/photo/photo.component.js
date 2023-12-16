import React from "react";
import { sortByDescription } from "../../../utils/sort-by-description";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Section } from "./photo.styles";
import PinkSrc from "../../../assets/img/shapes/pink-3.svg";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import {
  fadeLeftVariants,
  fadeRightVariants,
  littleFadeUpVariants,
} from "../../../assets/animations/animations";

const Photo = ({ photoArr }) => {
  photoArr = sortByDescription(photoArr);

  const getCaptionString = (image) => {
    if (image.caption.slice(3, image?.caption?.length - 5).length > 4) {
      return image.caption.slice(3, image?.caption?.length - 5);
    } else {
      return " ";
    }
  };

  return (
    <Section className="wrapper">
      <div className="p-holder">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={littleFadeUpVariants}
          transition={{ duration: 0.75, delay: 0.75 }}
        >
          <div className="pink-3">
            <Parallax translateY={[-10, 20]}>
              <img src={PinkSrc} alt="Forme" />
            </Parallax>
          </div>
        </motion.div>
      </div>
      <div className="container mb-5 pb-5">
        <div className="row">
          {photoArr.map((image, index) => (
            <motion.div
              key={index}
              className={`col-lg-4 px-3 px-lg-4 mb-5 mb-lg-0 ${
                (index - 1) / 3 == 0 ? "push-down" : ""
              } `}
              initial="hidden"
              whileInView="visible"
              variants={fadeRightVariants}
              transition={{ duration: 0.75, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <GatsbyImage
                image={getImage(image.gatsbyImage)}
                alt={image.caption}
                className={`w-100 ${(index - 1) % 3 == 0 ? "push-down" : ""} `}
              />
              <div
                className={`caption ${
                  (index - 1) % 3 == 0 ? "push-down" : ""
                } `}
              >
                <span
                  dangerouslySetInnerHTML={{ __html: getCaptionString(image) }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Photo;
