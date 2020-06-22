import React from "react"

const StaticTile = ({ text }) => {
  return (
    <div className="tile__side static-tile">
      <h3 className="static-tile__heading">{text}</h3>
    </div>
  )
}

export default StaticTile
