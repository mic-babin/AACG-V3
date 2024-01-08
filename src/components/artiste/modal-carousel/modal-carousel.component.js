import React from "react";
import { ModalCard, Style } from "./modal-carousel.styles";
import Carousel from "react-multi-carousel";
import {
  customOptions,
  CustomDot,
  getCaptionString,
} from "../../home/hero/hero.utils";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ModalCarousel = ({ show, handleClose, imgArr }) => {
  return (
    <ModalCard
      show={show}
      onHide={handleClose}
      className="carousel-modal"
      centered
    >
      <Style>
        <div className="modal-carousel-wrapper">
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
              {imgArr.map((image, index) => (
                <div key={image.id + index} className="">
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
        </div>
      </Style>
    </ModalCard>
  );
};

export default ModalCarousel;
