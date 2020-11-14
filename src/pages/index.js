import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import CarList from "../components/carlist"
import Nav from "../components/nav"
import Ad from "../components/ad"
import carStyles from "../components/car.module.css"
import layoutStyles from "../components/layout.module.css"

const width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
const height = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;

export default function Home({ data }) {
  return (
    <div className={layoutStyles.layout}>
      <Nav></Nav>
      <div className={ width > height ? layoutStyles.landscape : layoutStyles.portrait }>
        <CarList>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link key={node.id} to={node.fields.slug} className={carStyles.car}>
                <Img fluid={node.frontmatter.image.childImageSharp.fluid}></Img>
                <span className={carStyles.manufacturer}>{node.frontmatter.manufacturer}</span>
                <span className={carStyles.make}>{node.frontmatter.make}</span>
                <span className={carStyles.engine}>{node.frontmatter.engine}</span>
                <span className={carStyles.class}>{node.frontmatter.class}</span>
            </Link>
          ))}
        </CarList>
        <Ad></Ad>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___manufacturer], order: ASC }) {
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