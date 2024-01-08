import React from "react";
import { Section } from "./loader.styles";

const Loader = () => {
  return (
    <Section>
      <div className="loading-overlay d-flex flex-column justify-content-center align-items-center">
        <div className="spinner mb-5"></div>
      </div>
    </Section>
  );
};

export default Loader;
