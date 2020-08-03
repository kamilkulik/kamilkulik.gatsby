import React, { useState, useContext } from "react"
import AppContext from "../../App-context"
import useIgnoreMountEffect from "../../Hooks/useIgnoreMountEffect"

const Container = ({ children }) => {
  const { face } = useContext(AppContext)
  const [shrink, setShrink] = useState(false)

  const toggleShrink = () => {
    setShrink(true)
    setTimeout(() => setShrink(false), 3000)
  }

  useIgnoreMountEffect(toggleShrink, face)

  return (
    <div className="magic">
      <div className={`container${shrink ? " shrink-container" : ""}`}>
        {children}
      </div>
    </div>
  )
}

export default Container
