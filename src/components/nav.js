import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import navStyles from "./nav.module.css"
import useWindowWidth from "../utils/windowsize"

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

export default function Nav() {
  const landscape = useWindowWidth();
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
            fixed(width: 60, height: 51) {
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
        { // if (landscape == true) -> (render full title) Else -> (render short title)
          landscape
            ? <p>Assetto Corsa Competizione Car Specs</p>
            : <p>ACC Car Specs</p>
        }
      </Link>
      {
        landscape
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

