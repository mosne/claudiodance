import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = (props) => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <>
        <h1 className="logo">
          <Link to={`/`}>
            {title}
          </Link>
        </h1>
      </>
    )
  } else {
    header = (
      <>
        <div className="logo">
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
          {title}
          </Link>
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
