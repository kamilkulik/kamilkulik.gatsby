import React, { useState } from "react"
import "../Styles/main.scss"
import useCheckIfMobile from "../Hooks/useCheckIfMobile"
import useInMotion from "../Hooks/useInMotion"
import useCheckMobileViewport from "../Hooks/useCheckMobileViewport"

import SEO from "../components/seo"

import CubeWrapper from "../components/CubeWrapper/CubeWrapper"
import Navigation from "../components/Navigation/Navigation"
import MobileNavigation from "../components/MobileNavigation/MobileNavigation"
import AppContext from "../App-context"
import Transition from "../components/CubeWrapper/Transition"

function App() {
  const [face, setFace] = useState("home")
  const [transitionOut, setTransitionOut] = useState(false)
  const [inMotion, setInMotion] = useState(false)

  useCheckMobileViewport()

  const { mobile, tablet } = useCheckIfMobile()

  const spinTimeout = 2700

  useInMotion(setInMotion, spinTimeout, face)

  const spinCube = value => () => {
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

  return (
    <AppContext.Provider value={{ face, transitionOut, mobile }}>
      <SEO title="Home" />
      {mobile || tablet ? (
        <React.Fragment>
          <CubeWrapper />
          <Transition
            trigger={!transitionOut}
            shrink={false}
            placeholder={null}
          >
            <MobileNavigation spinCube={spinCube} />
          </Transition>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <CubeWrapper />
          <Navigation spinCube={spinCube} />
        </React.Fragment>
      )}
    </AppContext.Provider>
  )
}

export default App
