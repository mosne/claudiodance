import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { rhythm, scale } from "../utils/typography"
import("../scss/style.scss")

const Layout = (props) => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <>
        <h1 className="logo">
          <AniLink paintDrip to={`/`}>
            {title}
          </AniLink>
        </h1>
      </>
    )
  } else {
    header = (
      <>
        <div className="logo">
          <AniLink paintDrip
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
          {title}
          </AniLink>
        </div>
      </>
    )
  }
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        footer
      </footer>
    </div>
  )
}

export default Layout
