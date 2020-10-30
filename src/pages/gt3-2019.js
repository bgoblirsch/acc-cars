import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import CarList from "../components/carlist"
import carStyles from "../components/car.module.css"
import Manufacturer from "../components/manufacturer"
import Make from "../components/make"
import Engine from "../components/engine"
import Class from "../components/class"

export default function Home({ data }) {
  console.log(data)
  console.log(data.allMarkdownRemark.edges.length)
  return (
    <Layout>
      <CarList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link key={node.id} to={node.fields.slug} className={carStyles.car}>
              <Img fluid={node.frontmatter.image.childImageSharp.fluid}></Img>
              <Manufacturer>{node.frontmatter.manufacturer}</Manufacturer>
              <Make>{node.frontmatter.make}</Make>
              <Engine>{node.frontmatter.engine}</Engine>
              <Class>{node.frontmatter.class}</Class>
          </Link>
        ))}
      </CarList>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___manufacturer], order: ASC } filter: {frontmatter: {gt319: {eq: true}}}) {
      edges {
        node {
          id
          frontmatter {
            manufacturer
            make
            engine
            class
            image {
              childImageSharp {
                  fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`