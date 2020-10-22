import React, { useContext, useState } from "react"
import Container from "../Container/Container"
import Cube from "../Cube/Cube"
import AppContext from "../../App-context"
import useIgnoreMountEffect from "../../Hooks/useIgnoreMountEffect"
import { pages } from "./Content"
import CompleteSide from "./CompleteSide"
import usePageMapper from "../../Hooks/usePageMapper"

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

  const mappedContent = usePageMapper()

  const activeIndex = pages.find(page => page.name === face).index

  return (
    <Container>
      <Cube>
        {mappedContent.map((side, index) => {
          const component = (
            <CompleteSide
              side={side}
              shrink={shrink}
              enableContent={enableContent}
              content={content}
              key={side.number}
            />
          )
          return shrink
            ? component
            : index === activeIndex && side.name === face
            ? component
            : null
        })}
      </Cube>
    </Container>
  )
}

export default CubeWrapper

// the double transition happens because there are two walls - each of which triggers its own Transition by the content prop
