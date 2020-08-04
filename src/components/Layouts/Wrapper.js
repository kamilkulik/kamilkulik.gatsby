import React, { useContext } from "react"
import AppContext from "../../App-context"

const Wrapper = ({ children }) => {
  const { mobile, tablet } = useContext(AppContext)

  return (
    <div className="wrapper">
      {mobile ? (
        <div className="wrapper--mobile">{children}</div>
      ) : (
        <div className={tablet ? "wrapper--tablet" : "wrapper--desktop"}>
          {children}
        </div>
      )}
    </div>
  )
}

export default Wrapper
