import React, { useState } from "react"
import "../Styles/main.scss"

import SEO from "../components/seo"

import CubeWrapper from "../components/CubeWrapper/CubeWrapper"
import Navigation from "../components/Navigation/Navigation"
import AppContext from "../App-context"

function App() {
  const [face, setFace] = useState("home")
  const [transitionOut, setTransitionOut] = useState(false)

  const spinCube = value => () => {
    setTransitionOut(true)
    setTimeout(() => {
      setFace(value)
    }, 1000)
    setTimeout(() => {
      setTransitionOut(false)
    }, 4000)
  }

  return (
    <AppContext.Provider value={{ face, transitionOut }}>
      <SEO title="Home" />
      <CubeWrapper />
      <Navigation spinCube={spinCube} />
    </AppContext.Provider>
  )
}

export default App
