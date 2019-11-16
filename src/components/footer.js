/**
 * Footer component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"

function Footer() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <StaticQuery
      // eslint-disable-next-line no-use-before-define
      query={footerQuery}
      render={data => {
        // eslint-disable-next-line camelcase
        const { footer_1, footer_2, footer_3 } = data.wordpressAcfOptions.options
        const footerMenu = data.allWordpressWpApiMenusMenusItems.edges[0].node.items

        return (
          <footer className="footer">
            <div className="footer__content" dangerouslySetInnerHTML={{ __html: footer_1 }} />
            <div className="footer__content" dangerouslySetInnerHTML={{ __html: footer_2 }} />
            <div className="footer__content">
              <nav>
                <ul className="menu">
                  {footerMenu.map((item) =>
                    (<li key={item.object_slug}>
                      <AniLink
                        paintDrip
                        hex="#FFF700"
                        direction="bottom"
                        className="fx__cursor"
                        to={item.url}
                        dangerouslySetInnerHTML={{
                        __html: item.title,
                      }}
                      />
                    </li>)
                        )}
                </ul>
              </nav>
            </div>
            <div className="footer__content" dangerouslySetInnerHTML={{ __html: footer_3 }} />
          </footer>
        )
      }}
    />
  )
}

const footerQuery = graphql`
  query footerQuery {
    allWordpressWpApiMenusMenusItems(filter: {slug: {eq: "legal"}}){
      edges{
          node{
              id
              name
              items{
                  title
                  url
                  object_slug
              }
          }
      }
    }
    wordpressAcfOptions {
      options {
        footer_1
        footer_2
        footer_3
      }
    }
  }
`

export default Footer
