import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const car = data.markdownRemark
  return (
    <Layout>
      <div>
        <Img fluid={car.frontmatter.image.childImageSharp.fluid}></Img>
        <h1>{car.frontmatter.manufacturer}</h1>
        <h2>{car.frontmatter.make}</h2>
        <h4>{car.frontmatter.year}</h4>
        <h4>{car.frontmatter.engine}</h4>
        <h4>{car.frontmatter.layout}</h4>
        <h4>{car.frontmatter.hp}</h4>
        <h4>{car.frontmatter.weight}</h4>
        <div dangerouslySetInnerHTML={{ __html: car.html }} />
      </div>
    </Layout>
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
          weight
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