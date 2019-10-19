
const path = require(`path`);

/**
 * Create WordPress Posts
 */
module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/post.js`);

  return graphql(
    `
    {
      site {
        siteMetadata {
          postPrefix
        }
      }
      allWordpressPost(
        sort: {
          fields: date,
          order: DESC
        }
        filter: {
          fields: {
            deploy: {eq: true}
          }
        }) {
        edges {
          node {
            id
            slug
            modified
            categories {
              name
            }
            fields {
              deploy
            }
          }
          next {
            slug
            title
          }
          previous {
            slug
            title
          }
        }
      }
    }
  `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const { postPrefix } = result.data.site.siteMetadata;
    const  { edges } = result.data.allWordpressPost;

    edges.forEach( edge => {
      if (edge.node.fields.deploy) {
        createPage({
          path: `${postPrefix}/${edge.node.slug}`,
          component: postTemplate,
          context: {
            id: edge.node.id,
            prev: edge.previous,
            next: edge.next,
          }
        })
      }
    })
    // ==== END POSTS ====
    return null;
  })
}