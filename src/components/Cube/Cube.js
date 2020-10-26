import React, { useContext, useEffect } from "react"
import AppContext from "../../App-context"

const Cube = ({ children }) => {
  const cube = React.createRef()
  const { face } = useContext(AppContext)
  const cubeRotation = {
    home: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
    project_management: "rotateX(0deg) rotateY(-90deg) rotateZ(0deg)",
    portfolio: "rotateX(180deg) rotateY(0deg) rotateZ(180deg)",
    blog: "rotateX(540deg) rotateY(0deg) rotateZ(180deg)",
    contact: "rotateX(0deg) rotateY(90deg) rotateZ(0deg)",
  }

  const rotateCube = () => {
    cube.current.style.transform = cubeRotation[face]
  }

  useEffect(() => {
    rotateCube()
  }, [face])

  return (
    <div className="cube" ref={cube}>
      {children}
    </div>
  )
}

export default Cube
