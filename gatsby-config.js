const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Kamil Kulik - Front End developer & PM",
    titleTemplate: "%s · Kamil Kulik - Front End developer & PM",
    description:
      "Kamil Kulik is a detail-oriented Front End developer and effective project manager, using technical know-how and soft skills to plan and deliver every time.",
    url: "http://www.kamilkulik.com",
    author: "Kamil Kulik",
    image: "/images/kamilkulik.com.png",
    lang: "en",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-svgr-loader",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kamil-Kulik-FE-Dev`,
        short_name: `K`,
        start_url: `/`,
        background_color: `#9f26b5`,
        theme_color: `#9f26b5`,
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
