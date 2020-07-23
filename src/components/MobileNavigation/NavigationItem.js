import React from "react"

const NavigationItem = ({ page, title, handleClick, active, children }) => {
  return (
    <div className={`mobile-nav__item ${active}`} onClick={handleClick(page)}>
      {children}
      <p className={`mobile-nav__item__label ${active}`}>{title}</p>
    </div>
  )
}

export default NavigationItem
