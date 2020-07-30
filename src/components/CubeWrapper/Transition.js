import React from "react"
import { CSSTransition } from "react-transition-group"

const Transition = ({
  trigger,
  shrink,
  enableContent,
  placeholder,
  children,
}) => (
  <React.Fragment>
    <CSSTransition
      in={trigger}
      timeout={{
        enter: 500,
        exit: 500,
      }}
      classNames="appearEffect"
      unmountOnExit
      onExited={enableContent}
    >
      {children}
    </CSSTransition>
    {shrink ? placeholder : null}
  </React.Fragment>
)

export default Transition
