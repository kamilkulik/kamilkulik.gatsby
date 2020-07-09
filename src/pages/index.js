import React, { useState } from "react"
import "../Styles/main.scss"

import SEO from "../components/seo"

import CubeWrapper from "../components/CubeWrapper/CubeWrapper"
import Navigation from "../components/Navigation/Navigation"
import AppContext from "../App-context"
import useInMotion from "../Hooks/useInMotion"

function App() {
  const [face, setFace] = useState("home")
  const [transitionOut, setTransitionOut] = useState(false)
  const [inMotion, setInMotion] = useState(false)

  const spinTimeout = 4000

  useInMotion(setInMotion, spinTimeout, face)

  const spinCube = value => () => {
    if (!inMotion) {
      setTransitionOut(true)
      setTimeout(() => {
        setFace(value)
      }, 1000)
      setTimeout(() => {
        setTransitionOut(false)
      }, spinTimeout)
    }
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
