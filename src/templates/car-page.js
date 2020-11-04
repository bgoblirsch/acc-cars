import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Nav from "../components/nav"
import Ad from "../components/ad"
import layoutStyles from "../components/layout.module.css"


export default function BlogPost({ data }) {
  const car = data.markdownRemark
  return (
    <div className={layoutStyles.layout}>
      <Nav></Nav>
      <div className={layoutStyles.carPage}>
        <Img fluid={car.frontmatter.image.childImageSharp.fluid}  className={layoutStyles.ci}></Img>
        <div className={layoutStyles.infoContainer}>
          <div>
            <h2 className={layoutStyles.label}>manufacturer</h2>
            <h2 className={layoutStyles.infoText}>{car.frontmatter.manufacturer}</h2>
          </div>
          <div>
            <h2 className={layoutStyles.label}>make</h2>
            <h2 className={layoutStyles.infoText}>{car.frontmatter.make}</h2>
          </div>
          <div>
            <h2 className={layoutStyles.label}>layout</h2>
            <h2 className={layoutStyles.infoText}>{car.frontmatter.layout}</h2>
          </div>
          <div>
            <h2 className={layoutStyles.label}>engine</h2>
            <h2 className={layoutStyles.infoText}>{car.frontmatter.displacement} {car.frontmatter.engine}</h2>
          </div>
        </div>
        <div className={layoutStyles.infoContainer2}>
          <div>
            <h2 className={layoutStyles.label}>production year</h2>
            <h2 className={layoutStyles.infoText}>{car.frontmatter.year}</h2>
          </div>
          { car.frontmatter.hp !== '' 
            ? <div>
                <h2 className={layoutStyles.label}>HP</h2>
                <h2 className={layoutStyles.infoText}>{car.frontmatter.hp}</h2>
              </div>
            : <div></div>
          }
          { car.frontmatter.torque != null 
            ? <div>
                <h2 className={layoutStyles.label}>torque</h2>
                <h2 className={layoutStyles.infoText}>{car.frontmatter.torque}</h2>
              </div>
            : <div></div>
          }
        </div>
        <div className={layoutStyles.description} dangerouslySetInnerHTML={{ __html: car.html }} />
      </div>
      <Ad></Ad>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
          manufacturer
          make
          year
          engine
          layout
          hp
          torque
          weight
          displacement
          image {
              childImageSharp {
                  fluid(maxWidth: 1920, quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
    }
  }
`