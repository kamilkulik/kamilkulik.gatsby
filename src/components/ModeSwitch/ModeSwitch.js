import React, { useState, useEffect } from "react"

const ModeSwitch = () => {
  //Just like functions expressions, arrow functions aren't hoisted — only function declarations are
  const [darkMode, setDarkMode] = useState(getInitialState())

  useEffect(() => {
    setMode()
  }, [darkMode])

  function getInitialState() {
    if (typeof localStorage !== `undefined`) {
      const isReturningUser = "darkMode" in localStorage
      const savedMode = JSON.parse(localStorage.getItem("darkMode"))
      const userPrefersDarkMode = getPreferredColourScheme()
      // check for returning user
      if (isReturningUser) return savedMode
      // check if the user has a preference saved on window object
      else if (userPrefersDarkMode) return true
      // return light
      else return false
    }
  }

  function setMode() {
    const themeAttribute = document.documentElement
    if (darkMode) {
      themeAttribute.setAttribute("data-theme", "dark")
    } else {
      themeAttribute.setAttribute("data-theme", "light")
    }
    saveModePreference()
  }

  function getPreferredColourScheme() {
    if (!window.matchMedia) return
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  }

  function saveModePreference() {
    if (typeof localStorage !== `undefined`) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode))
    }
  }

  const handleClick = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="switch-container">
      <label className="switch" htmlFor="checkbox" title="Toggle colour scheme">
        <input
          type="checkbox"
          id="checkbox"
          onClick={handleClick}
          defaultChecked={darkMode}
        />
        <div className="slider round"></div>
        <div className="toggle-moon">🌙</div>
        <div className="toggle-sun">☀️</div>
      </label>
    </div>
  )
}

export default ModeSwitch
