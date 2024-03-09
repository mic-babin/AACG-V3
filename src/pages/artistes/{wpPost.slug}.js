import React from "react";
import { graphql } from "gatsby";
import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "../../components/layout";
import Bio from "../../components/artiste/bio/bio.component";
import Seo from "../../components/seo";
import Photo from "../../components/artiste/photo/photo.component";
import Video from "../../components/artiste/video/video.component";
import Audio from "../../components/artiste/audio/audio.componennt";

const Artiste = ({ data }) => {
  const title = data.wpPost.title;
  const artistes = data.artistes.nodes;
  const tags = data.allWpTag.nodes;

  const content = data.wpPost.content
    ? data.wpPost.content.includes("\n\n\n\n")
      ? data.wpPost.content.split("\n\n\n\n")
      : data.wpPost.content.split("\n")
    : [];
  const slug = data.wpPost.slug;
  const artistTags = data.wpPost.tags.nodes.map((tag) => tag.name);

  const artistMedia = data.allWpMediaItem.nodes.filter((item) =>
    item.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        slug
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      )
  );

  const bioImageArr = artistMedia.filter((item) =>
    item.title.includes("featured")
  );

  const photoArr = artistMedia.filter((item) => item.title.includes("photo"));
  const audioArr = artistMedia.filter((item) => item.title.includes("audio"));

  const videoArr = content.filter((item) => item.includes("#video"));

  return (
    <Layout location={""} title={title} artistes={artistes} tags={tags}>
      <ParallaxProvider>
        <Bio
          content={content}
          title={title}
          slug={slug}
          tags={artistTags}
          bioImageArr={bioImageArr}
        />
        {(audioArr.length > 0 ||
          videoArr.length > 0 ||
          photoArr.length > 0) && (
          <div className="p-header pb-3">
            {audioArr.length > 0 && <Audio audioArr={audioArr} />}
            {videoArr.length > 0 && <Video videoArr={videoArr} />}
            {photoArr.length > 0 && <Photo photoArr={photoArr} />}
          </div>
        )}
        <Seo title={title} />
      </ParallaxProvider>
    </Layout>
  );
};

export default Artiste;

export const pageQuery = graphql`
  query GetSArtist($slug: String) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      slug
      tags {
        nodes {
          name
        }
      }
    }
    allWpMediaItem {
      nodes {
        id
        description
        title
        caption
        gatsbyImage(width: 800)
        mediaItemUrl
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
