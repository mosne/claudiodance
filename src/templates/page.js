import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageTemplate = (props) => {

  const post = props.data.wordpressPage;
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Layout location={props.location} title={siteTitle} aclass="page">
      <SEO
        title={post.title}
        description={post.excerpt}
      />
      <h1 className="visuallyhidden">{post.title} </h1>
      <div className="page__content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageByID($id: String!) {
    site {
      siteMetadata {
        title
        author
        imagefull
        imagehalf
      }
    }
    wordpressPage(id: { eq: $id }) {
      slug
      title
      id
      # featured_media {
      #   source_url
      # }
      content
    }
  }
`
