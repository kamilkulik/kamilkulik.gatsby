import React, { useContext, useState } from "react"
import Container from "../Container/Container"
import Cube from "../Cube/Cube"
import Side from "../Side/Side"
import AppContext from "../../App-context"
import Home from "../Home/Home"
import Portfolio from "../Portfolio/PortfolioContainer"
import useIgnoreMountEffect from "../../Hooks/useIgnoreMountEffect"

const CubeWrapper = () => {
  const { face } = useContext(AppContext)
  const [shrink, setShrink] = useState(false)

  const toggleShrink = () => {
    setShrink(true)
    window.setTimeout(() => setShrink(false), 3000)
  }

  useIgnoreMountEffect(toggleShrink, face)

  return (
    <Container>
      <Cube>
        <Side sideName={shrink ? `front shrink-front` : `front`}>
          {!shrink ? <Home /> : <p>Home</p>}
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
