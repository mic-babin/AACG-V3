import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const artistes = data.artistes.nodes;
  const tags = data.allWpTag.nodes;

  return (
    <Layout
      location={location}
      title={siteTitle}
      artistes={artistes}
      tags={tags}
    >
      <Seo title="404: Non trouvé" />
      <Wrapper>
        <h1>404: Non trouvé</h1>
        <p>Cette page n'existe pas...</p>
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 112px;
  h1 {
    color: var(--teal);
  }
`;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpTag {
      nodes {
        id
        name
        description
        databaseId
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
