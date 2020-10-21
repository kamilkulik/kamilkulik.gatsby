import React, { useContext, useState } from "react"
import Container from "../Container/Container"
import Cube from "../Cube/Cube"
import AppContext from "../../App-context"
import useIgnoreMountEffect from "../../Hooks/useIgnoreMountEffect"
import Content, { pages } from "./Content"
import CompleteSide from "./CompleteSide"

const CubeWrapper = () => {
  const { face, transitionOut } = useContext(AppContext)
  const [shrink, setShrink] = useState(false)
  const [content, setContent] = useState(true)

  const toggleShrink = () => {
    setShrink(true)
    setTimeout(() => setShrink(false), 2000)
  }

  const toggleContent = () => {
    setContent(!content)
  }

  const enableContent = () => {
    setTimeout(() => setContent(!content), 2000)
  }

  useIgnoreMountEffect(toggleContent, transitionOut)

  useIgnoreMountEffect(toggleShrink, face)

  const activeIndex = pages.indexOf(face)

  return (
    <Container>
      <Cube>
        {Content.map((side, index) => {
          const component = (
            <CompleteSide
              side={side}
              shrink={shrink}
              enableContent={enableContent}
              content={content}
              key={side.number}
            />
          )
          return shrink ? component : index === activeIndex ? component : null
        })}
      </Cube>
    </Container>
  )
}

export default CubeWrapper
