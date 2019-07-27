import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = (props) => {
  const {
    title,
    postPrefix,
  } = props.data.site.siteMetadata;
  const posts = props.data.allWordpressPost.edges;

  return (
    <Layout location={props.location} title={title}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        return (
          <div key={node.slug}>
            <h2>
              <Link style={{ boxShadow: `none` }} to={`${postPrefix}/${node.slug}`}>
                {node.title}
              </Link>
            </h2>
            <small>{node.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.excerpt,
              }}
            />
          </div>
        )
      })}
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
