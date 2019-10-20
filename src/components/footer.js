/**
 * Footer component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react"
import { StaticQuery, graphql } from "gatsby"

function Footer() {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        const { footer_1, footer_2, footer_3, footer_4 } = data.wordpressAcfOptions.options
        return (
        <footer className="footer">
            <div className="footer__content" dangerouslySetInnerHTML={{ __html: footer_1 }} />
            <div className="footer__content" dangerouslySetInnerHTML={{ __html: footer_2 }} />
            <div className="footer__content" dangerouslySetInnerHTML={{ __html: footer_3 }} />
            <div className="footer__content" dangerouslySetInnerHTML={{ __html: footer_4 }} />
        </footer>
        )
      }}
    />
  )
}

const footerQuery = graphql`
  query footerQuery {
    wordpressAcfOptions {
      options {
        footer_1
        footer_2
        footer_3
        footer_4
      }
    }
  }
`

export default Footer
