import React, { useEffect, useState } from "react";
import ArrowDownSrc from "../../../assets/img/icons/small-white-arrow-down.svg";
import ArrowUpSrc from "../../../assets/img/icons/small-white-arrow-up.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import BlueSrc from "../../../assets/img/shapes/blue-2.svg";
import BeigeSrc from "../../../assets/img/shapes/beige-4.svg";
import {
  littleFadeUpVariants,
  fadeUpVariants,
} from "../../../assets/animations/animations";

const ArtistesHero = ({ location, tags, selectedTags, setSelectedTags }) => {
  const title = ["Nos ", "artistes"];
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [filterTags, setFilterTags] = useState([]);
  const [kicker, setKicker] = useState("");

  const animateIn = {
    initial: "hidden",
    animate: "visible",
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      let tagsArr = [selectedTags, tag];
      setSelectedTags(tagsArr.flat());
    }
  };

  useEffect(() => {
    if (location.includes("artistes")) {
      setFilterTags(
        tags.filter((tag) => tag.description?.includes("artistes"))
      );
      setKicker(
        "Nous choisissons chaque collaboration avec soin. Notre agence représente des artistes œuvrant à la télévision, au cinéma et sur scène, que ce soit comme auteurs, comédiens, animateurs, humoristes, metteurs en scène ou réalisateurs."
      );
    } else {
      setFilterTags(tags.filter((tag) => tag.description?.includes("voix")));
      setKicker(
        "Que ce soit pour de la voix publicitaire, de la narration, du doublage ou de la surimpression vocale, vous trouverez ici de nombreux talents pouvant répondre à vos besoins."
      );
    }
  }, [kicker, location]);

  return (
    <div>
      {" "}
      <div className="bg-teal pb-5 position-relative z-2">
        <div className="container p-nav mb-4">
          <div className="p-holder">
            <motion.div
              className="blue-2 z-minus"
              {...animateIn}
              variants={fadeUpVariants}
              transition={{ duration: 0.75, delay: 0.75 }}
            >
              <Parallax translateY={[-10, 20]}>
                <img src={BlueSrc} alt="Forme" />
              </Parallax>
            </motion.div>

            <motion.div
              className="beige-4 z-minus"
              {...animateIn}
              variants={fadeUpVariants}
              transition={{ duration: 0.75, delay: 0.75 }}
            >
              <Parallax translateY={[-10, 20]}>
                <img src={BeigeSrc} alt="Forme" />
              </Parallax>
            </motion.div>

            <div className=""></div>
          </div>
          <div className="row p-header ps-7">
            <div className="col-12">
              <h1 className="pb-4">
                <span className="overflow-hidden h-100 d-inline-block">
                  {title &&
                    title.map((word, i) => (
                      <span className="overflow-hidden d-block me-3">
                        <motion.span
                          key={i}
                          className={`overflow-hidden d-inline-block me-3`}
                          dangerouslySetInnerHTML={{ __html: word }}
                          initial="hidden"
                          animate="visible"
                          variants={littleFadeUpVariants}
                          transition={{ duration: 0.75, delay: 0.75 + i / 10 }}
                        ></motion.span>
                      </span>
                    ))}
                </span>
              </h1>
            </div>
            <motion.div
              className="col-lg-6"
              initial="hidden"
              animate="visible"
              variants={littleFadeUpVariants}
              transition={{ duration: 0.75, delay: 0.95 }}
            >
              <p className="ps-lg-5 ms-lg-3 pe-5 me-xl-5 text-white fw-normal">
                {kicker}
              </p>
            </motion.div>
            <div className="col-lg-6 d-flex justify-content-center pt-lg-0 pt-3">
              <motion.div
                className=""
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.5 }}
              >
                <div className="line"></div>
                <button
                  type="button"
                  className="w-100 btn-filter"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="fw-normal">Filtres</h2>
                    <img
                      className="arrow pe-1"
                      src={isCollapsed ? ArrowDownSrc : ArrowUpSrc}
                      alt=""
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul style={{ marginBottom: "10.5px" }}>
                        {filterTags
                          .filter((tag) => !tag.name.includes("English"))
                          .map((tag) => (
                            <li
                              key={tag.id}
                              style={{
                                fontWeight: selectedTags.includes(tag.name)
                                  ? "bold"
                                  : "normal",
                                paddingBottom: "7px",
                              }}
                              onClick={() => toggleTag(tag.name)}
                            >
                              {selectedTags.includes(tag.name) && "- "}
                              {tag.name}
                            </li>
                          ))}
                        {filterTags
                          .filter((tag) => tag.name.includes("English"))
                          .map((tag) => (
                            <li
                              key={tag.id}
                              style={{
                                fontWeight: selectedTags.includes(tag.name)
                                  ? "bold"
                                  : "normal",
                                paddingBottom: "0px",
                              }}
                              onClick={() => toggleTag(tag.name)}
                            >
                              {selectedTags.includes(tag.name) && "- "}
                              {tag.name.toUpperCase()}
                            </li>
                          ))}{" "}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="line"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistesHero;
