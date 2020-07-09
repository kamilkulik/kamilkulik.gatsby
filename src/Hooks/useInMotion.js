import React from "react"

const useInMotion = (setHook, timeout, deps) => {
  React.useEffect(() => {
    setHook(true)
    const motionTimer = setTimeout(() => setHook(false), timeout)
    return () => clearTimeout(motionTimer)
  }, [deps])
}

export default useInMotion
