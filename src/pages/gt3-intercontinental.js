import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import CarList from "../components/carlist"
import carStyles from "../components/car.module.css"
import layoutStyles from "../components/layout.module.css"
import Nav from "../components/nav"
import Ad from "../components/ad"

const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

export default function Gt3I({ data }) {
  console.log(data)
  console.log(data.allMarkdownRemark.edges.length)
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
    allMarkdownRemark(sort: { fields: [frontmatter___manufacturer], order: ASC } filter: {frontmatter: {intercontinental: {eq: true}}}) {
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