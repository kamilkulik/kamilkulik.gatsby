import React from "react"

const Side = ({ children, sideNumber }) => {
  return (
    <div className={`cube--side cube--side__${sideNumber}`}>{children}</div>
  )
}

export default Side
