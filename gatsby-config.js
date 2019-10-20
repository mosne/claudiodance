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
          "/wp/v2/tags",
          // "/wp/v2/taxonomies",
          "/wp/v2/menu",
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/style.scss'],
      },
    }, // must be after other CSS plugins
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 800,
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            height: 400, // Optional: Overrides optional.ratio
            related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true // Optional: Disable insertion of <style> border: 0
          }
        }
        ]
      }
    },
  ],
}
