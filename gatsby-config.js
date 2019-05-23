module.exports = {
  siteMetadata: {
    title: `Budhabare Space Cable Network`,
    description: `Your cable and internet solutions all at one place.`,
    author: `Naren`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Budhabare Space Cable`,
        short_name: `BSCN`,
        start_url: `/`,
        background_color: `#0054a4`,
        theme_color: `#0054a4`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
