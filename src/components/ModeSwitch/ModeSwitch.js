import React, { useState, useEffect } from "react"

const getInitialState = () => {
  const savedState = JSON.parse(localStorage.getItem("darkMode"))
  if (savedState !== null) return savedState
  return false
}

const ModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(getInitialState)

  const setMode = () => {
    const themeAttribute = document.documentElement
    if (darkMode) {
      themeAttribute.setAttribute("data-theme", "dark")
    } else {
      themeAttribute.setAttribute("data-theme", "light")
    }
    saveModePreference()
  }

  useEffect(() => {
    setMode()
  }, [darkMode])

  const saveModePreference = () => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }

  const handleClick = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div class="switch-container">
      <label
        class="switch"
        for="checkbox"
        title="Change color scheme to dark mode"
      >
        <input type="checkbox" id="checkbox" onClick={handleClick} />
        <div class="slider round"></div>
        <div class="toggle-moon">🌙</div>
        <div class="toggle-sun">☀️</div>
      </label>
    </div>
  )
}

export default ModeSwitch
