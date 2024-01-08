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
import { sortByDescription } from "../../../utils/sort-by-description";
import { fadeRightBioCarouselVariants } from "../../../assets/animations/animations";
import ModalCarousel from "../modal-carousel/modal-carousel.component";

const BioCarousel = (props) => {
  const imgArr = sortByDescription(props.imgArr);
  const wrapperRef = useRef(null);
  const [images, setImages] = useState(imgArr);
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
            autoPlay={false}
            autoPlaySpeed={false}
            showDots={imgArr.length > 1 ? true : false}
            customDot={<CustomDot />}
            ssr={true}
          >
            {images.map((image, index) => (
              <div
                key={image.id + index}
                className="custom-height-bio pb-5"
                onClick={() => handleOpen()}
              >
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
      <ModalCarousel
        show={showModal}
        handleClose={handleClose}
        imgArr={imgArr}
      />
    </Style>
  );
};

export default BioCarousel;
