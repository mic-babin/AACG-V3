import React, { useEffect, useRef } from "react";
import Red5Src from "../../../assets/img/shapes/red-5.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Style } from "./instagram.style";
import { useStaticQuery, graphql } from "gatsby";
import { sortByDescription } from "../../../utils/sort-by-description";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  fadeInVariants,
} from "../../../assets/animations/animations";

const Instagram = ({ followTitle, followText }) => {
  const wrapperRef = useRef(null);

  const data = useStaticQuery(graphql`
    query {
      allWpMediaItem(filter: { title: { regex: "/^suivez.*$/" } }) {
        nodes {
          description
          title
          caption
          gatsbyImage(width: 300, placeholder: BLURRED)
        }
      }
    }
  `);

  const imagesArr = data.allWpMediaItem.nodes;
  const images = sortByDescription(imagesArr);

  const animateIn = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
  };

  const textAnimation = {
    ...animateIn,
    variants: fadeUpVariants,
    transition: { duration: 0.5, delay: 0.5 },
  };

  useEffect(() => {
    const handleScroll = () => {
      images.forEach((_, i) => {
        const img = wrapperRef.current?.querySelector(`.img-${i}`);
        let rateImg =
          -window.pageYOffset * getImgRate(i) + getImgInitialOffset(i);
        if (img) {
          img.style.transform = `translateY(${rateImg}px)`;
        }
      });
    };

    const getImgRate = (index) => {
      switch (index) {
        case 0:
          return 0.02;
        case 1:
          return 0.05;
        case 2:
          return 0.08;
        case 3:
          return 0.03;
        case 4:
          return 0.06;
        case 5:
          return 0.06;
      }
    };

    const getImgInitialOffset = (index) => {
      switch (index) {
        case 0:
          return 60;
        case 1:
          return 200;
        case 2:
          return 280;
        case 3:
          return 230;
        case 4:
          return 270;
        case 5:
          return 270;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images]);

  return (
    <Style className="bg-pink pb-5 pb-sm-0" ref={wrapperRef}>
      <div className="p-holder">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="img-position"
            {...animateIn}
            variants={fadeInVariants}
            transition={{ duration: 0.5, delay: 0.25 + i / 10 }}
          >
            <a
              href="https://www.instagram.com/agencecorinnegiguere/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GatsbyImage
                image={getImage(img)}
                className={`img img-${i}`}
                alt={img.title}
              />
            </a>
          </motion.div>
        ))}
      </div>
      <div className="container py-150 mb-5 mb-sm-0">
        <div className="d-flex flex-column justify-content-center align-items-center position-relative">
          <motion.h1 className="mt-5 pt-5 text-black z-1 " {...textAnimation}>
            {followTitle}
          </motion.h1>
          <div className="p-holder">
            <div className="red-5">
              <Parallax translateY={[-30, -100]}>
                <img src={Red5Src} alt="Red Shape" />
              </Parallax>
            </div>
          </div>
          <motion.p
            {...textAnimation}
            className="text-center z-1 "
            dangerouslySetInnerHTML={{ __html: followText }}
          ></motion.p>
          <a
            href="https://www.instagram.com/agencecorinnegiguere/"
            target="_blank"
            rel="noreferrer noopener"
            style={{ zIndex: 1 }}
          >
            <motion.button
              className="button-black mt-3 px-4 z-1 "
              {...textAnimation}
            >
              <div className="px-3 z-1">Nous suivre</div>
            </motion.button>
          </a>
        </div>
      </div>
    </Style>
  );
};

export default Instagram;
