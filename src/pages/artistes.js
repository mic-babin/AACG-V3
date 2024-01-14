import { graphql } from "gatsby";
import React, { useState, useEffect } from "react";
import { Section } from "../components/artitstes/artistes.styles";
import ArtistesHero from "../components/artitstes/artistes-hero/artistes-hero.component";
import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { sortByDescription } from "../utils/sort-by-description";
import { sortArtists } from "../utils/sort-artists";
import ArtistesGrid from "../components/artitstes/artistes-grid/artistes-grid.component";

const Artists = ({ path, data }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const siteTitle = data.site.siteMetadata.title;
  const location = path;
  const tags = sortByDescription(data.allWpTag.edges.map((tag) => tag.node));
  const artists = sortArtists(data.allWpPost.nodes);
  const artistes = data.artistes.nodes;
  const isBrowser = typeof window !== "undefined";
  const previousPath =
    isBrowser && JSON.parse(sessionStorage.getItem("previousPath"));

  useEffect(() => {
    if (previousPath) console.log(previousPath);
  }, [previousPath]);
  return (
    <Layout
      location={location}
      title={siteTitle}
      artistes={artistes}
      tags={tags}
    >
      <ParallaxProvider>
        <Seo title="Agence Artistique Corinne Giguère" />
        <Section id="wrapper">
          <ArtistesHero
            location={location}
            tags={tags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
          <ArtistesGrid
            artists={artists}
            location={location}
            selectedTags={selectedTags}
          />
        </Section>
      </ParallaxProvider>
    </Layout>
  );
};

export default Artists;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpTag {
      edges {
        node {
          id
          name
          description
          databaseId
        }
      }
    }
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { in: "artistes" } } } }
      }
    ) {
      nodes {
        id
        title
        slug
        content
        tags {
          nodes {
            id
            name
          }
        }
        featuredImage {
          node {
            gatsbyImage(height: 400)
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
    artistes: allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { in: "artistes" } } } }
      }
    ) {
      nodes {
        id
        title
        slug
        content
        tags {
          nodes {
            id
            name
          }
        }
        featuredImage {
          node {
            gatsbyImage(height: 400)
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;
