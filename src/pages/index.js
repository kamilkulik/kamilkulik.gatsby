import React, { useState } from "react"
import "../Styles/main.scss"
import useCheckIfMobile from "../Hooks/useCheckIfMobile"
import useInMotion from "../Hooks/useInMotion"
import useCheckMobileViewport from "../Hooks/useCheckMobileViewport"
import "normalize.css"

import SEO from "../components/seo"

import CubeWrapper from "../components/CubeWrapper/CubeWrapper"
import AppContext from "../App-context"
import NavigationController from "../components/NavigationController/NavigationController"

export function Provider({ children }) {
  const [face, setFace] = useState("home")
  const [transitionOut, setTransitionOut] = useState(false)
  const [inMotion, setInMotion] = useState(false)

  const { width, height, mobile, mobileLand, tablet } = useCheckIfMobile()

  useCheckMobileViewport()

  const spinTimeout = 2700

  useInMotion(setInMotion, spinTimeout, face)

  const spinCube = value => () => {
    if (value !== face) {
      if (!inMotion) {
        setTransitionOut(true)
        setTimeout(() => {
          setFace(value)
        }, 500)
        setTimeout(() => {
          setTransitionOut(false)
        }, spinTimeout)
      }
    }
  }

  return (
    <AppContext.Provider
      value={{
        face,
        transitionOut,
        mobile,
        mobileLand,
        tablet,
        width,
        height,
        spinCube,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

function App() {
  return (
    <Provider>
      <SEO title="Home" />
      <CubeWrapper />
      <NavigationController />
    </Provider>
  )
}

export default App
