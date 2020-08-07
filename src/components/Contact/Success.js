import React from "react"
import Transition from "../CubeWrapper/Transition"

const SuccessMessage = ({ formSent }) => {
  return (
    <Transition trigger={formSent} shrink={false} placeholder={null}>
      <div className="success-message">
        <h1>Thanks for your message!</h1>
        <h4>Will get back to you in a jiffy 🚀</h4>
      </div>
    </Transition>
  )
}

export default SuccessMessage
