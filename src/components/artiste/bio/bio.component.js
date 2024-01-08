import React from "react";
import { Section } from "./bio.styles";
import PinkSrc from "../../../assets/img/shapes/pink-2.svg";
import RedSrc from "../../../assets/img/shapes/red-2.svg";
import { getArtistTags } from "../../../utils/artist-tags";
import FbSrc from "../../../assets/img/icons/socials/Facebook.svg";
import FbBlueSrc from "../../../assets/img/icons/socials/facebook-blue.svg";
import InSrc from "../../../assets/img/icons/socials/Instagram.svg";
import InBlueSrc from "../../../assets/img/icons/socials/instagram-blue.svg";
import VimeoSrc from "../../../assets/img/icons/socials/Vimeo.svg";
import VimeoBlueSrc from "../../../assets/img/icons/socials/vimeo-blue.svg";
import BioCarousel from "../bio-carousel/bio-carousel.component";
import { motion } from "framer-motion";
import {
  littleFadeUpVariants,
  veryLittleFadeUpVariants,
} from "../../../assets/animations/animations";
import { Parallax } from "react-scroll-parallax";
import { useIsXSmall } from "../../../utils/media-query.hook";

const Bio = ({ content, title, slug, tags, bioImageArr }) => {
  let artistTags = getArtistTags(tags, title);
  const isXSmall = useIsXSmall();

  const socialIcons = {
    facebook: {
      src: FbSrc,
      blueSrc: FbBlueSrc,
    },
    instagram: {
      src: InSrc,
      blueSrc: InBlueSrc,
    },
    vimeo: {
      src: VimeoSrc,
      blueSrc: VimeoBlueSrc,
    },
  };

  const taille = content
    .filter((element) => element.includes("#taille"))[0]
    ?.split("=")
    .filter((item) => !item.includes("FR-CA"))[1]
    .split("</p")[0];
  const poids = content
    .filter((element) => element.includes("#poids"))[0]
    ?.split("=")
    .filter((item) => !item.includes("FR-CA"))[1]
    .split("</")[0];
  const cheveux = content
    .filter((element) => element.includes("#cheveux"))[0]
    ?.split("=")
    .filter((item) => !item.includes("FR-CA"))[1]
    .split("</")[0];
  const langues = content
    .filter((element) => element.includes("#langue"))[0]
    ?.split("=")
    .filter((item) => !item.includes("FR-CA"))[1]
    .split("</")[0];
  const uda = content
    .filter((element) => element.includes("UDA"))[0]
    ?.split("=")
    .filter((item) => !item.includes("FR-CA"))[1]
    .split("</")[0];
  const sartec = content
    .filter((element) => element.includes("#SARTEC"))[0]
    ?.split("=")
    .filter((item) => !item.includes("FR-CA"))[1]
    .split("</")[0];
  const actra = content
    .filter((element) => element.includes("#ACTRA"))[0]
    ?.split("=")
    .filter((item) => !item.includes("FR-CA"))[1]
    .split("</")[0];
  const yeux = content
    .filter((element) => element.includes("#yeux"))[0]
    ?.split("=")
    .filter((item) => !item.includes("FR-CA"))[1]
    .split("</")[0];
  const bio = content
    .filter((element) => element.includes("#bio"))[0]
    ?.split("=")
    .filter((item) => !item.includes("FR-CA"))[1]
    .split("</")[0];
  const cv = content
    .filter((element) => element.includes("#cv"))[0]
    ?.split("=")
    .filter((item) => !item.includes("FR-CA"))[1]
    .split("</")[0];
  const instagram = content
    .filter((element) => element.includes("#instagram"))[0]
    ?.split("=")
    .filter((item) => !item.includes("FR-CA"))[1]
    .split("</")[0];
  const facebook = content
    .filter((element) => element.includes("#facebook"))[0]
    ?.split("=")
    .filter((item) => !item.includes("FR-CA"))[1]
    .split("</")[0];
  const vimeo = content
    .filter((element) => element.includes("#vimeo"))[0]
    ?.split("=")
    .filter((item) => !item.includes("FR-CA"))[1]
    .split("</")[0];

  const getLastNameLength = (fullname) => {
    return fullname?.split(" ").slice(1, 5).join(" ").length;
  };

  return (
    <Section>
      <div className="bio-wrapper bg-teal z-minus-2">
        <div className="container px-3 px-md-0 px-xxl-3">
          <div className="p-holder">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={littleFadeUpVariants}
              transition={{ duration: 0.75, delay: 0.75 }}
            >
              <div className="pink-2 z-0">
                <Parallax translateY={[-10, 20]}>
                  <img src={PinkSrc} alt="Forme" />
                </Parallax>
              </div>
            </motion.div>
          </div>
          <div className="z-2">
            <div className="p-holder z-2">
              <div className="red-2">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={littleFadeUpVariants}
                  transition={{ duration: 0.75, delay: 0.75 }}
                >
                  <Parallax translateY={[-0, 20]}>
                    <img src={RedSrc} alt="Forme" />
                  </Parallax>
                </motion.div>
              </div>
              <h1
                className="ps-7 z-2"
                style={
                  getLastNameLength(title) >= 15 ? { lineHeight: "1.1" } : null
                }
              >
                <span className="overflow-hidden h-100">
                  {title &&
                    title.split(" ").map((word, i) => (
                      <span className="overflow-hidden d-inline-lock">
                        <motion.span
                          key={i}
                          className={`overflow-hidden me-3 ${
                            i === 0 && getLastNameLength(title) <= 15
                              ? "d-block"
                              : "d-inline-block"
                          }`}
                          dangerouslySetInnerHTML={{ __html: word }}
                          initial="hidden"
                          animate="visible"
                          variants={littleFadeUpVariants}
                          transition={{ duration: 0.75, delay: 0.75 + i / 10 }}
                          style={
                            getLastNameLength(title) >= 15 && !isXSmall
                              ? { fontSize: "57px", letterSpacing: "0" }
                              : getLastNameLength(title) >= 15 && isXSmall
                              ? { fontSize: "36px", letterSpacing: "0" }
                              : null
                          }
                        ></motion.span>
                      </span>
                    ))}
                </span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 ps-7">
              <motion.h2
                className="p-title ms-xl-3 mt-5"
                initial="hidden"
                animate="visible"
                variants={veryLittleFadeUpVariants}
                transition={{ duration: 0.75, delay: 0.95 }}
              >
                {artistTags.map((tag, i) => (
                  <span
                    key={i}
                    className={`${i === 0 ? "first-letter-capital" : ""}`}
                  >
                    {i > 0 && <span>&nbsp;</span>}
                    {tag}
                    {i < artistTags.length - 2 && ", "}

                    {i === artistTags.length - 2 &&
                      tag !== artistTags[i - 1] &&
                      " et "}
                  </span>
                ))}
              </motion.h2>
              <div className="row ps-7 my-4 pt-2 pe-xl-3 pe-xxl-5">
                {taille && taille.length > 2 && (
                  <motion.div
                    className="col-4 text-white b-line"
                    initial="hidden"
                    animate="visible"
                    variants={veryLittleFadeUpVariants}
                    transition={{ duration: 0.75, delay: 1 }}
                  >
                    <strong>Taille</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: taille }} />
                  </motion.div>
                )}
                {poids && poids.length > 2 && (
                  <motion.div
                    className="col-4 text-white b-line"
                    initial="hidden"
                    animate="visible"
                    variants={veryLittleFadeUpVariants}
                    transition={{ duration: 0.75, delay: 1.05 }}
                  >
                    <strong>Poids</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: poids }} />
                  </motion.div>
                )}
                {cheveux && cheveux.length > 2 && (
                  <motion.div
                    className="col-4 text-white b-line"
                    initial="hidden"
                    animate="visible"
                    variants={veryLittleFadeUpVariants}
                    transition={{ duration: 0.75, delay: 1.1 }}
                  >
                    <strong>Cheveux</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: cheveux }} />
                  </motion.div>
                )}
                {yeux && yeux.length > 2 && (
                  <motion.div
                    className="col-4 text-white b-line"
                    initial="hidden"
                    animate="visible"
                    variants={veryLittleFadeUpVariants}
                    transition={{ duration: 0.75, delay: 1.15 }}
                  >
                    <strong>Yeux</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: yeux }} />
                  </motion.div>
                )}
                {langues && langues.length > 2 && (
                  <motion.div
                    className="col-8 text-white b-line"
                    initial="hidden"
                    animate="visible"
                    variants={veryLittleFadeUpVariants}
                    transition={{ duration: 0.75, delay: 1.2 }}
                  >
                    <strong>Langue(s)</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: langues }} />
                  </motion.div>
                )}
                {uda && uda.length > 2 && (
                  <motion.div
                    className={`col-4 text-white  ${
                      title === "Anaïs Favron" ? "b-line" : ""
                    }`}
                    initial="hidden"
                    animate="visible"
                    variants={veryLittleFadeUpVariants}
                    transition={{ duration: 0.75, delay: 1.25 }}
                  >
                    <strong>UDA</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: uda }} />
                  </motion.div>
                )}
                {sartec && sartec.length > 2 && (
                  <motion.div
                    className="col-4 text-white "
                    initial="hidden"
                    animate="visible"
                    variants={veryLittleFadeUpVariants}
                    transition={{ duration: 0.75, delay: 1.3 }}
                  >
                    <strong>SARTEC</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: sartec }} />
                  </motion.div>
                )}
                {actra && actra.length > 2 && (
                  <motion.div
                    className="col-8 text-white "
                    initial="hidden"
                    animate="visible"
                    variants={veryLittleFadeUpVariants}
                    transition={{ duration: 0.75, delay: 1.35 }}
                  >
                    <strong>ACTRA</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: actra }} />
                  </motion.div>
                )}
              </div>
              <div className="ps-6 mt-5 pt-5 d-flex">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={veryLittleFadeUpVariants}
                  transition={{ duration: 0.75, delay: 1.4 }}
                >
                  <a target="_blank" href={bio} download={`${slug}-bio.pdf`}>
                    <button className="me-4 mb-4 ">Ouvrir la bio</button>
                  </a>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={veryLittleFadeUpVariants}
                  transition={{ duration: 0.75, delay: 1.45 }}
                >
                  <a target="_blank" href={cv} download={`${slug}-cv.pdf`}>
                    <button className="">Ouvrir le CV</button>
                  </a>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-6 ps-0 px-md-2 mt-5 mt-lg-0">
              {bioImageArr.length > 0 && <BioCarousel imgArr={bioImageArr} />}
            </div>
          </div>
          <div className="row">
            <div className="w-100">
              <div className="float-end">
                <div className="d-flex mb-5 pb-5">
                  {facebook && (
                    <a
                      href={facebook}
                      className="social-icons pe-3 envelope delay-13"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src={FbSrc || socialIcons["facebook"].src}
                        onMouseOver={(e) => {
                          e.currentTarget.src = socialIcons["facebook"].blueSrc;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.src = socialIcons["facebook"].src;
                        }}
                        alt={"facebook"}
                      />
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={instagram}
                      className="social-icons pe-3 envelope delay-14"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src={InSrc || socialIcons["instagram"].src}
                        onMouseOver={(e) => {
                          e.currentTarget.src =
                            socialIcons["instagram"].blueSrc;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.src = socialIcons["instagram"].src;
                        }}
                        alt={"instagram"}
                      />
                    </a>
                  )}
                  {vimeo && (
                    <a
                      href={vimeo}
                      className="social-icons pe-3 envelope delay-15"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src={VimeoSrc || socialIcons["vimeo"].src}
                        onMouseOver={(e) => {
                          e.currentTarget.src = socialIcons["vimeo"].blueSrc;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.src = socialIcons["vimeo"].src;
                        }}
                        alt={"vimeo"}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Bio;
