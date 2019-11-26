const postCssPlugins = require('./postcss-config.js');

module.exports = {
  siteMetadata: {
    title: `Claudio Dance`,
    author: `Claudio Fabbro Graphic design and more`,
    description: `A Gatsby WordPress Starter with special love for Netlify`,
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
        // The base url to your WP site.
        baseUrl: 'admin.claudio.dance',
        // baseUrl: 'data.justinwhall.com',
        // baseUrl: 'wpgatsby.wtf',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: true,
        perPage : 100,
        concurrentRequests: 20,
        includedRoutes: [
          "/wp/v2/categories",
          "/wp/v2/posts",
          "/wp/v2/pages",
          "/wp/v2/media",
          // "/wp/v2/tags",
          // "/wp/v2/taxonomies",
          "/wp-api-menus/v2/menus",
          "/acf/v3/options/",
        ],
        normalizer({ entities }) {
          return entities
        },
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        environments: ['production', 'development']
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    /*
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: { families: ['Favorit','Favorit_l'], urls: ['/webfonts/fonts.css']}
      }
    },
    */
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
