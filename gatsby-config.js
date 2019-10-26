const path = require('path')

module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        start_url: `/`,
        icon: `src/images/psy.png`,
        pathToConfigModule: `src/utils/typography`,
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
}
