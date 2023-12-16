import styled from "styled-components";
import { Link } from "gatsby";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 999;
  height: 100svh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: end;

  .search-input {
    position: absolute;
    top: -12px;
    right: -140px;
    width: 300px;
    height: 50px;
    background-color: var(--teal);
    color: #ffffff;
    border-color: #ffffff;
  }

  ::placeholder {
    color: #ffffff;
    opacity: 1; /* Firefox */
  }

  .hide {
    padding: 0;
    margin: 0;
    width: 0;
  }

  .search-results-wrapper {
    position: absolute;
    top: 38px;
    right: -136px;
    display: block;
    width: 300px;
    margin: 0;
    padding: 0.75rem 1.5rem 0.5rem 0.75rem;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    color: black;
    border: 1.5px solid black;
    border-radius: 4px;
    outline: 0;
    background-color: #ffffff;
    // font-family: "Poppins", sans-serif !important;
    font-weight: 500;
    font-size: 13px !important;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);

    ul {
      list-style: none !important;
      padding: 0 15px;

      li {
        margin: 0;
        cursor: pointer;
        padding: 15px;
      }
    }
  }

  .close-icon {
    position: absolute;
    height: 25px;
    width: 25px;
    top: 0px;
    right: -130px;
  }
  .small-text {
    font-size: 12px !important;
    font-weight: 400 !important;
  }
`;

export const MenuLinks = styled(motion.div)`
  padding-top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;
  background-color: var(--teal);

  @media (max-width: 576px) {
    padding-top: 50px;
  }
`;

export const MenuLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  padding: 0 0;
  font-size: 1.66667rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin: 1rem 2.5rem;

  &:hover {
    color: var(--blue);
  }
`;

export const SearchInput = styled(motion.div)`
  width: 0;
`;
export const SearchWrapper = styled.span``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--teal);

  .p-holder {
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    transition-delay: 0.1s;
  }
`;
