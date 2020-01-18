module.exports = {
  siteMetadata: {
    title: `ejer.ga`,
    description: `My website.`,
    author: `@datejer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ejer.ga`,
        short_name: `ejer`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
