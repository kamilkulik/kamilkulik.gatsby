import React, { useContext, useState, useEffect } from "react"
import Container from "../Container/Container"
import Cube from "../Cube/Cube"
import Side from "../Side/Side"
import AppContext from "../../App-context"
import Home from "../Home/Home"
import Portfolio from "../Portfolio/PortfolioContainer"
import useIgnoreMountEffect from "../../Hooks/useIgnoreMountEffect"
import { CSSTransition } from "react-transition-group"

const CubeWrapper = () => {
  const { face, transitionOut } = useContext(AppContext)
  const [shrink, setShrink] = useState(false)
  const [content, setContent] = useState(true)

  const toggleShrink = () => {
    setShrink(true)
    setTimeout(() => setShrink(false), 3000)
  }

  const toggleContent = () => {
    setContent(!content)
  }

  const enableContent = () => {
    setTimeout(() => setContent(!content), 3000)
  }

  console.log(`shrink: ${shrink}`)
  console.log(`content: ${content}`)

  useIgnoreMountEffect(toggleContent, transitionOut)

  useIgnoreMountEffect(toggleShrink, face)

  return (
    <Container>
      <Cube>
        <Side sideName={shrink ? `front shrink-front` : `front`}>
          <CSSTransition
            in={content}
            timeout={{
              enter: 1000,
              exit: 1000,
            }}
            classNames="appearEffect"
            unmountOnExit
            exit={true}
            // onEnter={() => setShowButton(false)}
            onExited={enableContent}
          >
            <Home />
          </CSSTransition>

          {/**!shrink ? <Home /> : <p>Home</p>**/}
        </Side>
        <Side sideName={shrink ? `back shrink-back` : `back`}>
          <p>About</p>
        </Side>
        <Side sideName={shrink ? `right shrink-right` : `right`}>
          {!shrink ? <Portfolio /> : <p>Portfolio</p>}
        </Side>
        <Side sideName={shrink ? `left shrink-left` : `left`}>
          <p>Contact</p>
        </Side>
        <Side sideName={shrink ? `top shrink-top` : `top`}>
          <p>5</p>
        </Side>
        <Side sideName={shrink ? `bottom shrink-bottom` : `bottom`}>
          <p>6</p>
        </Side>
      </Cube>
    </Container>
  )
}

export default CubeWrapper
