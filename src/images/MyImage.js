import React, { useContext } from "react"
import AppContext from "../App-context"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const desktopStyling = {
  height: "100%",
  width: "100%",
}

const mobileStyling = {
  position: "relative",
  width: "100%",
}

const mobileStylingLand = {
  gridArea: "img",
}

const RenderImage = file => {
  const { mobile, mobileLand } = useContext(AppContext)

  return (
    <Img
      fluid={file.node.childImageSharp.fluid}
      imgStyle={{
        objectFit: "contain",
        // objectPosition: "top",
        padding: "5% 5% 0% 5%",
      }}
      style={
        mobile ? mobileStyling : mobileLand ? mobileStylingLand : desktopStyling
      }
    />
  )
}

const MyImg = ({ src }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { extension: { regex: "/(png)/" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data =>
      RenderImage(
        data.allFile.edges.find(image => image.node.relativePath === src)
      )
    }
  />
)

export default MyImg
