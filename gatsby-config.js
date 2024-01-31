/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Agence Artistique Corinne Giguère`,
    description: `Offrir à nos artistes des services professionnels et compétitifs, dans un climat d'écoute et d'ouverture.`,
    twitterUsername: `@agencecorinnegiguere`,
    image: ``,
    siteUrl: `https://agencecg.com/`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://corinne-giguere.a2hosted.com/graphql/`,
      },
    },
  ],
};
