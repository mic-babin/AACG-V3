import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import { Style } from "./bio-carousel.styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  customOptions,
  pickRandomItems,
  CustomDot,
  getCaptionString,
} from "../../home/hero/hero.utils";
import { motion } from "framer-motion";
import { fadeRightBioCarouselVariants } from "../../../assets/animations/animations";

const BioCarousel = (props) => {
  const imgArr = props.imgArr;
  const wrapperRef = useRef(null);
  const [images, setImages] = useState(imgArr);

  useEffect(() => {
    return () => {};
  }, [imgArr]);

  return (
    <Style ref={wrapperRef}>
      <motion.div
        className="bio-carousel-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeRightBioCarouselVariants}
        transition={{ duration: 0.75, delay: 1 }}
      >
        {imgArr && (
          <Carousel
            responsive={customOptions.responsive}
            infinite={customOptions.infinite}
            arrows={customOptions.arrows}
            autoPlay={customOptions.autoPlay}
            autoPlaySpeed={customOptions.autoPlaySpeed}
            showDots={true}
            customDot={<CustomDot />}
            ssr={true}
          >
            {images.map((image, index) => (
              <div key={image.id + index} className="custom-height-bio pb-5">
                <GatsbyImage
                  style={{
                    objectFit: "cover",
                  }}
                  image={getImage(image)}
                  alt={getCaptionString(image)}
                  loading="eager"
                />
                <div className="caption">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: getCaptionString(image),
                    }}
                  ></span>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </motion.div>
    </Style>
  );
};

export default BioCarousel;
