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
        enter: 1000,
        exit: 1000,
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
