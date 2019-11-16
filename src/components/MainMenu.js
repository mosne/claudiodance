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

function MainMenu() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <StaticQuery
      // eslint-disable-next-line no-use-before-define
      query={headerQuery}
      render={data => {
        const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items

        return (
          <nav>
            <ul className="menu">
              {menuItems.map((item) =>
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
        )
      }}
    />
  )
}

const headerQuery = graphql`
  query headerQuery {
    allWordpressWpApiMenusMenusItems{
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
  }
`

export default MainMenu
