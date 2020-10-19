import React from "react"

const ModeSwitch = () => {
  const handleClick = () => {
    const themeAttribute = document.documentElement
    const theme = themeAttribute.getAttribute("data-theme")
    if (theme === "dark") themeAttribute.setAttribute("data-theme", "light")
    else themeAttribute.setAttribute("data-theme", "dark")
  }
  return <button onClick={handleClick}>Switch modes</button>
}

export default ModeSwitch
