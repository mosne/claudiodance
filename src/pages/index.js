import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// eslint-disable-next-line import/first
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogIndex = (props) => {
  const {
    title,
    postPrefix,
  } = props.data.site.siteMetadata
  const posts = props.data.allWordpressPost.edges
  const { intro } = props.data.wordpressAcfOptions.options

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Layout location={props.location} title={title} aclass="home">
      <SEO title={props.data.site.siteMetadata.title} />
      <div className="intro" key="intro">
        <div className="intro__text" dangerouslySetInnerHTML={{ __html: intro }} />
        <svg className="intro__svg"  viewBox="0 0 1400 1080" dangerouslySetInnerHTML={{ __html: '<circle cx="0" cy="0" r="118" fill="#fff700"><animateMotion path="M276.44 640.836c31.414 155.247 342.637 221.735 486.847 245.122s442.577 56.908 419.598-69.623-968.86-422.834-994.483-530.037c-36.783-153.888 247.646-132.736 468.291-99.904 116.687 17.363 531.747 97.79 562.462 253.506S245.027 485.585 276.44 640.836z" dur="14s" repeatCount="indefinite"/></circle><circle cx="0" cy="0" r="118" fill="#fff700"><animateMotion path="M543.832 269.11C337.01 174.242 243.43 268 209.923 316.656S126.857 476.43 295.38 554.927s578.16-140.261 721.042-76.532c205.106 91.49 172.214 204.998 124.872 281.515-25.035 40.466-138.887 171.297-346.319 75.786S750.66 363.981 543.832 269.11z" dur="12s" repeatCount="indefinite"/></circle><circle cx="0" cy="0" r="118" fill="#fff700"><animateMotion path="M1075.812 571.38c212.984-100.98 160.06-211.718 124.623-258.547s-130.587-134.726-305.443-53.02-152.51 475.247-297.677 545.866c-208.386 101.374-314.976 24.113-373.524-45.75C192.83 722.98 110.136 580.27 324.14 479.168s538.684 193.192 751.673 92.21z" dur="10s" repeatCount="indefinite"/></circle>' }} />
      </div>
      {posts.map(({ node }) => (
        <div key={node.slug} className="project__list">
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
    wordpressAcfOptions {
      options {
        intro
      }
    }
  }
`
