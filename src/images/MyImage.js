import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RenderImage = (file, style, imgStyle) => {
  if (!file) return null
  const image = getImage(file.node.childImageSharp)
  if (!image) return null
  return (
    <GatsbyImage image={image} alt="" style={style} imgStyle={imgStyle} />
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
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
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
