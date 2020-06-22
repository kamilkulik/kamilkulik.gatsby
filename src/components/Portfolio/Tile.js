import React from "react"

const Tile = ({ tileNumber, children }) => {
  return <div className={`tile tile--${tileNumber}`}>{children}</div>
}

export default Tile
