import React, { useContext } from "react"
import AppContext from "../../App-context"
import { pages } from "../CubeWrapper/Content"

const Navigation = ({ spinCube }) => {
  const { face } = useContext(AppContext)
  const activeIndex = pages.find(page => page.name === face).index

  return (
    <nav className="navigation">
      <ul className="ph-line-nav nav">
        {pages.map((page, index) => (
          <li
            className={`item${activeIndex === index ? " active" : ""}`}
            id={page.name}
            key={page.name}
            onClick={spinCube(page.name)}
          >
            <span className="number">{`0${index + 1}`}</span>
            <span className="description">
              {page.name.slice(0, 1).toUpperCase() +
                page.name.slice(1).replace("_", " ")}
            </span>
          </li>
        ))}
        <div className="effect"></div>
      </ul>
    </nav>
  )
}

export default Navigation
