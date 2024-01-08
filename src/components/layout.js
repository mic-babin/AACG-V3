import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./navigation/footer/footer.component";
import Header from "./navigation/header/header.component";
// normalize CSS across browsers
import "../assets/styles/normalize.css";

// custom CSS styles
import "../assets/styles/style.css";
import Loader from "./navigation/loader/loader.component";

const Layout = ({ isHomePage, children, artistes, tags, location }) => {
  const [loading, setloading] = useState(true);
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `);
  console.log(location);

  useEffect(() => {
    setTimeout(() => setloading(false), 300);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {((!loading && location == "/") || location != "/") && (
        <>
          <Header artistes={artistes} tags={tags} />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
