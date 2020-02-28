const postCssPlugins = require('./postcss-config.js');

module.exports = {
  siteMetadata: {
    title: `Dance Claudio Dance`,
    author: `Claudio Fabbro Graphic design and more`,
    description: `Claudio is a Milan based graphic designer and dancer. He embraces an editorial approach that is characterized by rationality and attention to details. During his free time you can find him on the dance floor.`,
    siteUrl: `https://claudio.dance`,
    social: {
      twitter: `claudiodance`,
    },
    postPrefix : '/projects',
    pagePrefix: '',
    imagefull: 1024,
    imagehalf: 512,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'admin.claudio.dance',
        hostingWPCOM: false,
        protocol: 'http',
        useACF: true,
        auth: {},
        verboseOutput: true,
        perPage : 100,
        concurrentRequests: 20,
        includedRoutes: [
          "/wp/v2/categories",
          "/wp/v2/posts",
          "/wp/v2/pages",
          "/wp/v2/media",
          "/wp-api-menus/v2/menus",
          "/acf/v3/options/",
          "/wp-rest-yoast-meta/v1"
          // "/wp/v2/tags",
          // "/wp/v2/taxonomies",
        ],
        normalizer({ entities }) {
          return entities
        },
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /*
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-XXXX-XXXXX-XXX',
          // Setting this parameter is optional
          anonymize: true
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production']
      },
    },
    */
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
  ],
}
