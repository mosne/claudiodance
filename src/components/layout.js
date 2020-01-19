import React from 'react'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import MainMenu from '../components/MainMenu'
import Footer from "../components/footer"
import CookieConsent from 'react-cookie-consent'


const Layout = (props) => {
  const { location, title, children, aclass } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

// cursors effects

  if (typeof window !== 'undefined') {
    const mCurr = window.document.getElementsByClassName(`custom-cursor`)

    const aLinks = window.document.querySelectorAll('.fx__cursor, .footer a, .page__content a')
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
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <h1 className="header__logo visuallyhidden">
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
        <div className="header__logo visuallyhidden">
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
    <div className={aclass}>
      <div className="main">
        <header className="header">{header}
          <MainMenu />
        </header>
        <main className="main__content">{children}</main>
        <Footer />
        <CookieConsent
          enableDeclineButton
          location="bottom"
          buttonText="I understand"
          declineButtonText="I decline"
          cookieName="gatsby-gdpr-google-analytics"
          style={{ background: "#000", color:"#FFF700", borderTop:"1px solid #FFF700",lineHeight:"1.15em",fontSize: "20px", textTransform:"uppercase"}}
          buttonStyle={{ color: "#000",background:"#FFF700", fontSize: "20px",textTransform:"uppercase" }}
          declineButtonStyle={{ color: "#FFF700",background:"#000", border:"1px solid #FFF700", fontSize: "20px", textTransform:"uppercase"}}
          expires={120}
        >This website collects web traffic statistics anonymously. If you continue to browse this website, you are allowing all third-party services {" "}
      </CookieConsent>
      </div>
    </div>
  )
}

export default Layout