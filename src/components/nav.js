import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import navStyles from "./nav.module.css"

const activeLandscapeStyles = {
  border: "1px solid white",
  borderRadius: "5px",
  padding: "5px 10px",
  color: "white",
  boxShadow: "0 0 10px rgba(255, 255, 255)"
}

const activePortraitStyles = {
  backgroundColor: "white",
  borderRadius: "5px",
  padding: "5px 10px",
  color: "black",
  fontWeight: "bold",
  boxShadow: "0 0 10px rgba(255, 255, 255)"
}

const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

export default function Nav() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { eq: "acc-logo3.png" }) {
          childImageSharp {
            fixed(width: 103, height: 87) {
            ...GatsbyImageSharpFixed
          }
      }
    }
      }
    `
  )
  return (
    <div className={navStyles.nav}>
      <Link to='/' className={navStyles.title}>
        <Img fixed={data.file.childImageSharp.fixed}></Img>
        { // If (landscape) -> (render full title) Else -> (render short title)
          width > height 
            ? <p>Assetto Corsa Competizione Car Specs</p>
            : <p>ACC Car Specs</p>
        }
      </Link>
      {
        width > height
          ? <div className={navStyles.landscapeLinks}>
              <Link className={navStyles.navlink} activeStyle={activeLandscapeStyles} to='/'>All Cars</Link>
              <Link className={navStyles.navlink} activeStyle={activeLandscapeStyles} to="/gt3-2018/">GT3 2018</Link>
              <Link className={navStyles.navlink} activeStyle={activeLandscapeStyles} to="/gt3-2019/">GT3 2019</Link>
              <Link className={navStyles.navlink} activeStyle={activeLandscapeStyles} to="/gt3-intercontinental/">GT3 Intercontinental</Link>
            </div>
          : <details>
              <summary className={navStyles.filterSummary}>
                Filter &#9660;
              </summary>
              <div className={navStyles.dropdown}>
                <Link className={navStyles.navlink} activeStyle={activePortraitStyles} to='/'>All Cars</Link>
                <Link className={navStyles.navlink} activeStyle={activePortraitStyles} to="/gt3-2018/">GT3 2018</Link>
                <Link className={navStyles.navlink} activeStyle={activePortraitStyles} to="/gt3-2019/">GT3 2019</Link>
                <Link className={navStyles.navlink} activeStyle={activePortraitStyles} to="/gt3-intercontinental/">GT3 Intercontinental</Link>
              </div>
            </details>
      }
    </div>
  )
}
