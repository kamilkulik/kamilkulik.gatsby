import React from "react"
import checkIfMobile from "../utilities/checkIfMobile"

const useCheckIfMobile = () => {
  const [mobile, setMobile] = React.useState(checkIfMobile())

  const reportWindowSize = () => {
    setMobile(checkIfMobile())
  }

  React.useEffect(() => {
    window.addEventListener("resize", reportWindowSize)
    return () => {
      window.removeEventListener("resize", reportWindowSize)
    }
  }, [])

  return mobile
}

export default useCheckIfMobile
