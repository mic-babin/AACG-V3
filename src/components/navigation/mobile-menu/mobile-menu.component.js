import React, { useEffect, useState } from "react";
import {
  Overlay,
  MenuLinks,
  MenuLink,
  SearchInput,
} from "./mobile-menu.styles";
import { AnimatePresence } from "framer-motion";
import { veryLittleFadeUpVariants } from "../../../assets/animations/animations";
import { ModalAnimation } from "./mobile-menu.animation";
import { menu } from "../data/menu";
import SearchSrc from "../../../assets/img/icons/search-white.svg";
import CloseSrc from "../../../assets/img/icons/close.svg";
import { getArtistTags } from "../../../utils/artist-tags";
import { motion } from "framer-motion";
import { navigate } from "gatsby";

const MobileMenu = ({ modalIsOpen, setIsOpen, artistes }) => {
  const navLinks = menu;
  const [searchInput, setSearchInput] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [filteredLength, setFilteredLength] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const animation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: veryLittleFadeUpVariants,
  };

  const toggleSearchInput = (bool) => {
    setShowSearchInput(!bool);
    setSearchInput("");
  };

  const goToArtist = (artist) => {
    navigate(`/artistes/${artist?.slug}`);
    setSearchInput("");
    setShowSearchInput(false);
  };

  const close = () => {
    document.querySelector(".menu-icon__cheeckbox").click();
    setIsOpen(false);
  };

  const onSearchChange = () => {
    const filtered = artistes.filter((artist) =>
      artist.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          searchInput
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        )
    );
    setFilteredArtists(filtered.slice(0, 4));
    setFilteredLength(filtered.length);
  };

  useEffect(() => {
    if (modalIsOpen) setTimeout(() => setShowMenu(true), 250);
    onSearchChange();
  }, [modalIsOpen, searchInput]);

  return (
    <Overlay>
      <AnimatePresence initial={false} custom={ModalAnimation}>
        {showMenu && (
          <MenuLinks
            variants={ModalAnimation}
            animate="visible"
            initial="hidden"
            exit="hidden"
          >
            <>
              <div className="position-relative">
                <SearchInput className="mx-1 px-2 p-holder position-relative">
                  <input
                    className={`search-input  ${showSearchInput ? "" : "hide"}`}
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Nom ou prénom d'artistes..."
                  />
                  <div className={`p-holder ${showSearchInput ? "" : "hide"}`}>
                    <img
                      src={CloseSrc}
                      alt=""
                      className="close-icon"
                      onClick={() => toggleSearchInput(showSearchInput)}
                    />
                  </div>
                </SearchInput>
                {searchInput !== "" && showSearchInput ? (
                  <div className="search-results-wrapper">
                    <ul>
                      {filteredArtists.map((artist, index) => {
                        let artistTags = getArtistTags(
                          artist.tags.nodes.map((tag) => tag.name),
                          artist.title
                        );
                        return (
                          <li key={index}>
                            <div onClick={() => goToArtist(artist)}>
                              <div>{artist.title}</div>
                            </div>
                            <div className="small-text">
                              {artistTags.map((tag, i) => (
                                <span
                                  key={i}
                                  className={`${
                                    i === 0 ? "first-letter-capital" : ""
                                  }`}
                                >
                                  {i > 0 && <span>&nbsp;</span>}
                                  {tag}
                                  {i < artistTags.length - 2 && ", "}

                                  {i === artistTags.length - 2 &&
                                    tag !== artistTags[i - 1] &&
                                    " et "}
                                </span>
                              ))}
                            </div>
                          </li>
                        );
                      })}
                      {filteredLength === 0 && (
                        <li>Aucun résultat ne correspond à votre recherche</li>
                      )}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div
                className="d-flex justify-content-center "
                onClick={() => toggleSearchInput(showSearchInput)}
              >
                <motion.img
                  onClick={() => toggleSearchInput(showSearchInput)}
                  src={SearchSrc}
                  alt="Search Icon"
                  className="search-icon"
                  transition={{ duration: 0.25, delay: 0.9 }}
                />
              </div>
            </>
            {navLinks &&
              navLinks.map((link, index) => (
                <MenuLink
                  key={index}
                  to={link.link}
                  onClick={() => {
                    close();
                  }}
                >
                  {link.title}
                </MenuLink>
              ))}
          </MenuLinks>
        )}
      </AnimatePresence>
    </Overlay>
  );
};

export default MobileMenu;
