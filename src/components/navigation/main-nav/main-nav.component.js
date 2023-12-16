import React, { useEffect, useState } from "react";
import { Link, navigate } from "gatsby";
import LogoSrc from "../../../assets/img/logo/logo-horizontal.svg";
import {
  Wrapper,
  Logo,
  LinkList,
  Button,
  SearchInput,
} from "./main-nav.styles";
import { useIsMedium } from "../../../utils/media-query.hook";
import Burger from "../burger/burger.component";
import { menu } from "../data/menu";
import SearchSrc from "../../../assets/img/icons/search-white.svg";
import CloseSrc from "../../../assets/img/icons/close.svg";
import { veryLittleFadeUpVariants } from "../../../assets/animations/animations";
import { motion } from "framer-motion";
import { getArtistTags } from "../../../utils/artist-tags";

const MainNav = ({ artistes, tags }) => {
  const isMedium = useIsMedium();
  const links = menu;

  const [top, setTop] = useState(true);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [filteredLength, setFilteredLength] = useState(0);
  const [tagsArrayLength, setTagsArrayLength] = useState(0);
  // const [tags, setTags] = useState([]);

  const animation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: veryLittleFadeUpVariants,
  };

  const toggleTop = () => {
    if (window.pageYOffset > 50) {
      setTop(false);
    } else {
      setTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => toggleTop());

    return () => window.removeEventListener("scroll", () => toggleTop());
  }, []);

  const toggleSearchInput = (bool) => {
    setShowSearchInput(!bool);
    setSearchInput("");
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

  const goToArtist = (artist) => {
    navigate(`/artistes/${artist?.slug}`);
    setSearchInput("");
    setShowSearchInput(false);
  };

  useEffect(() => {
    onSearchChange();
  }, [searchInput]);

  return (
    <Wrapper
      className={`navbar navbar-expand-lg fixed-top ${top ? "" : "diminished"}`}
    >
      <div className="container-lg container-fluid">
        <Link to="/">
          <Logo
            src={LogoSrc}
            alt="Logo"
            {...animation}
            transition={{ duration: 0.25, delay: 0.5 }}
          />
        </Link>
        <LinkList>
          {!isMedium &&
            links.map((link, index) => (
              <React.Fragment key={index}>
                {!link.cta && (
                  <Button
                    {...animation}
                    transition={{ duration: 0.25, delay: 0.5 + index / 10 }}
                  >
                    <Link to={link.link} className={`link`}>
                      {link.title}
                    </Link>
                  </Button>
                )}
              </React.Fragment>
            ))}
          {!isMedium && (
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
                className="ms-2 d-flex justify-content-center "
                onClick={() => toggleSearchInput(showSearchInput)}
              >
                <motion.img
                  src={SearchSrc}
                  alt="Search Icon"
                  className="search-icon"
                  {...animation}
                  transition={{ duration: 0.25, delay: 0.9 }}
                />
              </div>
              <Button {...animation} transition={{ duration: 0.25, delay: 1 }}>
                <Link to={links[links.length - 1].link} className={`link cta`}>
                  {links[links.length - 1].title}
                </Link>
              </Button>
            </>
          )}
          {isMedium && (
            <Button>
              <Burger artistes={artistes} />
            </Button>
          )}
        </LinkList>
      </div>
    </Wrapper>
  );
};

export default MainNav;
