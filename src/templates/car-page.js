import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Ad from "../components/ad"
import backStyles from "../components/back.module.css"
import layoutStyles from "../components/layout.module.css"
import useWindowWidth from "../utils/windowsize"

export default function CarPage({ data }) {
  const car = data.markdownRemark;
  const landscape = useWindowWidth();
  return (
    <div className={ landscape ? layoutStyles.carPageBodyLandscape : layoutStyles.carPageBodyPortrait }>
      <Nav></Nav>
      <Link to='/' className={ landscape ? backStyles.backLandscape : backStyles.backPortrait }>&larr; <span></span></Link>
      { landscape 
        ? <div className={layoutStyles.carPageLandscape}>
            <Img fluid={car.frontmatter.image.childImageSharp.fluid}  className={layoutStyles.carImage}></Img>
            <div className={layoutStyles.infoContainerLandscape}>
              <div className={layoutStyles.specsContainerLandscape}>
                <div>
                  <h2 className={layoutStyles.label}>manufacturer</h2>
                  <h2 className={layoutStyles.infoTextLandscape}>{car.frontmatter.manufacturer}</h2>
                </div>
                <div>
                  <h2 className={layoutStyles.label}>make</h2>
                  <h2 className={layoutStyles.infoTextLandscape}>{car.frontmatter.make}</h2>
                </div>
                <div>
                  <h2 className={layoutStyles.label}>in-game design year</h2>
                  <h2 className={layoutStyles.infoTextLandscape}>{car.frontmatter.year}</h2>
                </div>
                <div>
                  <h2 className={layoutStyles.label}>dry curb weight</h2>
                  <h2 className={layoutStyles.infoTextLandscape}>{car.frontmatter.weight}</h2>
                </div>
                <div>
                  <h2 className={layoutStyles.label}>layout</h2>
                  <h2 className={layoutStyles.infoTextLandscape}>{car.frontmatter.layout}</h2>
                </div>
                <div>
                  <h2 className={layoutStyles.label}>engine</h2>
                  <h2 className={layoutStyles.infoTextLandscape}>{car.frontmatter.intake}</h2>
                  <h2 className={layoutStyles.infoTextLandscape}>{car.frontmatter.displacement} {car.frontmatter.engine}</h2>
                </div>
                { car.frontmatter.hp !== '' 
                  ? <div>
                      <h2 className={layoutStyles.label}>HP</h2>
                      <h2 className={layoutStyles.infoTextLandscape}>{car.frontmatter.hp}</h2>
                    </div>
                  : <div></div>
                }
                { car.frontmatter.torque != null 
                  ? <div>
                      <h2 className={layoutStyles.label}>torque</h2>
                      <h2 className={layoutStyles.infoTextLandscape}>{car.frontmatter.torque}</h2>
                    </div>
                  : <div></div>
                }
              </div>
              <div className={layoutStyles.descriptionLandscape} dangerouslySetInnerHTML={{ __html: car.html }} />
            </div>       
          </div>
        : <div className={layoutStyles.carPagePortrait}>
            <Img fluid={car.frontmatter.image.childImageSharp.fluid}  className={layoutStyles.carImage}></Img>
            <div className={layoutStyles.infoContainerPortrait}>
              <div className={layoutStyles.specsContainerPortrait}>
                <div>
                  <h2 className={layoutStyles.label}>manufacturer</h2>
                  <h2 className={layoutStyles.infoTextPortrait}>{car.frontmatter.manufacturer}</h2>
                </div>
                <div>
                  <h2 className={layoutStyles.label}>make</h2>
                  <h2 className={layoutStyles.infoTextPortrait}>{car.frontmatter.make}</h2>
                </div>
                <div>
                  <h2 className={layoutStyles.label}>in-game design year</h2>
                  <h2 className={layoutStyles.infoTextPortrait}>{car.frontmatter.year}</h2>
                </div>
                <div>
                  <h2 className={layoutStyles.label}>dry curb weight</h2>
                  <h2 className={layoutStyles.infoTextPortrait}>{car.frontmatter.weight}</h2>
                </div>
                <div>
                  <h2 className={layoutStyles.label}>layout</h2>
                  <h2 className={layoutStyles.infoTextPortrait}>{car.frontmatter.layout}</h2>
                </div>
                <div>
                  <h2 className={layoutStyles.label}>engine</h2>
                  <h2 className={layoutStyles.infoTextPortrait}>{car.frontmatter.intake}</h2>
                  <h2 className={layoutStyles.infoTextPortrait}>{car.frontmatter.displacement} {car.frontmatter.engine}</h2>
                </div>
                { car.frontmatter.hp !== '' 
                  ? <div>
                      <h2 className={layoutStyles.label}>HP</h2>
                      <h2 className={layoutStyles.infoTextPortrait}>{car.frontmatter.hp}</h2>
                    </div>
                  : <div></div>
                }
                { car.frontmatter.torque != null 
                  ? <div>
                      <h2 className={layoutStyles.label}>torque</h2>
                      <h2 className={layoutStyles.infoTextPortrait}>{car.frontmatter.torque}</h2>
                    </div>
                  : <div></div>
                }
              </div>
              <div className={layoutStyles.descriptionPortrait} dangerouslySetInnerHTML={{ __html: car.html }} />
            </div>       
          </div>
      }
      <Ad></Ad>
      <Footer></Footer>
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
          intake
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