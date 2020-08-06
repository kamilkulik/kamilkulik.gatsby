import React from "react"
import getViewportHeight from "../utilities/checkViewportHeight"

const useCheckMobileViewport = () => {
  const adjustViewportHeight = () => {
    getViewportHeight()
  }

  React.useEffect(() => {
    adjustViewportHeight()
    window.addEventListener("resize", adjustViewportHeight)
    window.addEventListener("deviceorientation", adjustViewportHeight)

    return () => {
      window.removeEventListener("resize", adjustViewportHeight)
      window.addEventListener("deviceorientation", adjustViewportHeight)
    }
  }, [])
}

export default useCheckMobileViewport
