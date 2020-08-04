import React from "react"
import getViewportHeight from "../utilities/checkViewportHeight"

const useCheckMobileViewport = () => {
  const adjustViewportHeight = () => {
    getViewportHeight()
  }

  React.useEffect(() => {
    if (typeof window !== undefined) {
      adjustViewportHeight()
      window.addEventListener("resize", adjustViewportHeight)
      window.addEventListener("orientationchange", adjustViewportHeight)
    }
    return () => {
      window.removeEventListener("resize", adjustViewportHeight)
      window.addEventListener("orientationchange", adjustViewportHeight)
    }
  }, [])
}

export default useCheckMobileViewport
