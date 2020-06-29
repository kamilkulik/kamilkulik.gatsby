import React from "react"
import Side from "../Side/Side"
import Transition from "./Transition"

const CompleteSide = ({ content, shrink, enableContent, side }) => {
  return (
    <Side
      // sideName={shrink ? `${side.class} shrink-${side.class}` : `${side.class}`}
      sideName={`${side.class}`}
    >
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
