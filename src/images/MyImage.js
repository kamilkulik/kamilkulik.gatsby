import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RenderImage = (file, style, imgStyle) => {
  return (
    <Img
      fluid={file.node.childImageSharp.fluid}
      imgStyle={imgStyle}
      style={style}
    />
  )
}

const MyImg = ({ src, style, imgStyle }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { extension: { regex: "/(png)|(jpg)|(jpeg)/" } }) {
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
        data.allFile.edges.find(image => image.node.relativePath === src),
        style,
        imgStyle
      )
    }
  />
)

export default MyImg
