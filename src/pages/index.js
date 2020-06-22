import React, { useState } from "react"
import "../Styles/main.scss"

import SEO from "../components/seo"

import CubeWrapper from "../components/CubeWrapper/CubeWrapper"
import Navigation from "../components/Navigation/Navigation"
import AppContext from "../App-context"

function App() {
  const [face, setFace] = useState("home")

  const spinCube = value => () => {
    setFace(value)
  }

  return (
    <AppContext.Provider value={{ face }}>
      <SEO title="Home" />
      <CubeWrapper />
      <Navigation spinCube={spinCube} />
    </AppContext.Provider>
  )
}

export default App
