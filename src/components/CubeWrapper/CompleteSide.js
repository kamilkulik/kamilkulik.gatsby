import React from "react"
import Side from "../Side/Side"
import Transition from "./Transition"

const CompleteSide = ({ content, shrink, enableContent, side }) => {
  console.log(content)
  return (
    <Side sideNumber={side.number}>
      <Transition
        trigger={content}
        shrink={shrink}
        enableContent={enableContent}
        placeholder={
          <p className="cube--side-placeholder">{side.placeholder}</p>
        }
      >
        {side.content}
      </Transition>
    </Side>
  )
}

export default CompleteSide
