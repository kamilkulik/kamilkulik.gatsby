import React from "react"

const Side = ({ children, sideName }) => {
  return <div className={`cube--side ${sideName}`}>{children}</div>
}

export default Side
