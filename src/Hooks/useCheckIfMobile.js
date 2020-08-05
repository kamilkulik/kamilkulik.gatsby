import React from "react"
import checkIfMobile from "../utilities/checkIfMobile"

const useCheckIfMobile = () => {
  const [mobile, setMobile] = React.useState(checkIfMobile())

  const reportWindowSize = () => {
    setMobile(checkIfMobile())
  }

  React.useEffect(() => {
    window.addEventListener("resize", reportWindowSize)
    window.addEventListener("orientationchange", reportWindowSize)
    return () => {
      window.removeEventListener("resize", reportWindowSize)
      window.addEventListener("orientationchange", reportWindowSize)
    }
  }, [])

  return mobile
}

export default useCheckIfMobile

/*

//////////  DOCUMENTATION  //////////

RETURNS:
On object that includes properties:
- height -  of inner screen
- width - of inner screen
- mobile - Boolean whether a device is mobile or not
- tablet - Boolean whether a device is a tablet or not

*/
