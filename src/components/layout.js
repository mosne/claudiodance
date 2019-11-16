import React from 'react'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
// import Mosnecursor from './cursor';
import Footer from "../components/footer"


const Layout = (props) => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header


// cursors effects 

  if (typeof window !== 'undefined') {
    const mCurr = window.document.getElementsByClassName(`custom-cursor`)

    const aLinks = window.document.querySelectorAll('.fx__cursor, .footer a')
    aLinks.forEach(element => {

      element.addEventListener(`mouseenter`, () => {
        mCurr[0].classList.add("custom-cursor-active")
        mCurr[1].classList.add("custom-cursor-active")
      })

      element.addEventListener(`mouseleave`, () => {
        mCurr[0].classList.remove("custom-cursor-active")
        mCurr[1].classList.remove("custom-cursor-active")
        // console.log('out')
      })

    })

  }

  if (location.pathname === rootPath) {
    header = (
      <>
        <h1 className="header__logo">
          <AniLink 
            className="fx__cursor"
            paintDrip
            hex="#FFF700"
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
            hex="#FFF700"
            className="fx__cursor"
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
      <Footer/>
    </div>
  )
}

export default Layout
