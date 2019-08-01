import React from 'react'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import '../scss/style.scss'
import Mosnecursor from './cursor';

const Layout = (props) => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <>
        <h1 className="header__logo">
          <AniLink 
            paintDrip
            hex="#F1E25B"
            direction="bottom"
            to={`/`}
          >
            {title}
          </AniLink>
        </h1>
      </>
    )
  } else {
    header = (
      <>
        <div className="header__logo">
          <AniLink
            paintDrip
            hex="#F1E25B"
            direction="bottom"
            to={`/`}
          >
          {title}
          </AniLink>
        </div>
      </>
    )
  }
  return (
    <div className="main">
      <header className="header">{header}</header>
      <main className="main__content">{children}</main>
      <footer>
        footer
      </footer>
      <Mosnecursor></Mosnecursor>
    </div>
  )
}

export default Layout
