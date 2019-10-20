import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FlexibleAcf from "../components/FlexibleAcf"

const PostTemplate = (props) => {

  // console.table(props)
  const post = props.data.wordpressPost;
  const siteTitle = props.data.site.siteMetadata.title;
  const meta = props.data.site.siteMetadata;
  const context = props.pageContext;
  const postPrefix = props.data.site.siteMetadata.postPrefix;
  let featuredImage = false;

  if (post.featured_media && post.featured_media.source_url ) {
    featuredImage = post.featured_media.localFile.childImageSharp.fluid;
  }

  if (post.slides_post){
    slidePost = post.slides_post
  }


  return (
    <Layout location={props.location} title={siteTitle}>
       <SEO
        title={post.title}
        description={post.excerpt}
      />
        <h1>{post.title} </h1>

        <FlexibleAcf
              post={post}
              meta={meta}
        />

        <div className="post__content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="post__meta">
          { context.prev && <AniLink
            paintDrip
            hex="#FFF700"
            direction="bottom"
            className="fx__cursor navlink navlink--prevt"
            to={`${postPrefix}/${context.prev.slug}`}
          >
            ←PREVIOUS
            </AniLink>
          }

          { context.next && <AniLink
            paintDrip
            hex="#FFF700"
            direction="bottom"
            className="fx__cursor navlink navlink--next"
            to={`${postPrefix}/${context.next.slug}`}
          >
            NEXT→
            </AniLink>
          }
        </div>

    </Layout>
  )

}

export default PostTemplate

export const pageQuery = graphql`
  query PostById($id: String!) {
    site {
      siteMetadata {
        title
        postPrefix
        author
        imagefull
        imagehalf
      }
    }
    wordpressPost(id: { eq: $id }) {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
      modified
      content
      excerpt
      id
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1800, quality: 90){
            ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
        source_url
      }
      categories {
        name
        slug
      }
      content
      acf {
        slides_post {
          ... on WordPressAcf_video {
            id
            video_url
            video_file
            image {
              id
              title
              alt_text
              caption
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1800, quality: 90){
                  ...GatsbyImageSharpFluid
                  }
                }
                relativePath
              }
            }
            internal {
              type
            }
          }
          ... on WordPressAcf_text {
            id
            text
            internal {
              type
            }
          }
          ... on WordPressAcf_double {
            id
            image {
              id
              title
              alt_text
              caption
              localFile {
                childImageSharp {
                  fluid(maxWidth: 900, quality: 90){
                  ...GatsbyImageSharpFluid
                  }
                }
                relativePath
              }
            }
            image_2 {
              id
              title
              alt_text
              caption
              localFile {
                childImageSharp {
                  fluid(maxWidth: 900, quality: 90){
                  ...GatsbyImageSharpFluid
                  }
                }
                relativePath
              }
            }
            internal {
              type
            }
          }
          ... on WordPressAcf_gallery {
            id
            images {
              id
              title
              alt_text
              caption
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1800, quality: 90){
                  ...GatsbyImageSharpFluid
                  }
                }
                relativePath
              }
            }
            internal {
              type
            }
          }
        }
      }
    }
  }
`
