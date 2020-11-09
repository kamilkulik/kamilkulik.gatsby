import React, { useContext } from "react"
import AppContext from "../../App-context"
import Transition from "../CubeWrapper/Transition"
import Navigation from "../Navigation/Navigation"
import MobileNavigation from "../MobileNavigation/MobileNavigation"

const Layout = ({ children }) => {
  const { transitionOut, mobile, mobileLand, tablet, spinCube } = useContext(
    AppContext
  )

  return (
    <React.Fragment>
      {mobile || mobileLand || tablet ? (
        <Transition trigger={!transitionOut} shrink={false} placeholder={null}>
          <MobileNavigation spinCube={spinCube} />
        </Transition>
      ) : (
        <Navigation spinCube={spinCube} />
      )}
      {children}
    </React.Fragment>
  )
}

export default Layout
