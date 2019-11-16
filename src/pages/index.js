import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogIndex = (props) => {
  const {
    title,
    postPrefix,
  } = props.data.site.siteMetadata
  const posts = props.data.allWordpressPost.edges

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Layout location={props.location} title={title}>
      <SEO title="All posts" />
      {posts.map(({ node }) => (
          <div key={node.slug}>
            <h2>
              <AniLink
                paintDrip
                hex="#FFF700"
                direction="bottom"
                className="fx__cursor"
                to={`${postPrefix}/${node.slug}`}
                dangerouslySetInnerHTML={{
                  __html: node.title,
                }}
              />
            </h2>
          </div>
        ))}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
       }
        limit: 100
      ) {
      edges {
        node {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          excerpt
          id
          featured_media {
            source_url
          }
          categories {
            name
          }
        }
      }
    }
  }
`
