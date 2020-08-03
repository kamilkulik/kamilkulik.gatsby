const setScale = () => {
  let root = document.documentElement
  const scale = 0.2

  let viewportHeight, viewportHeight
  if (typeof window !== `undefined`) {
    viewportWidth = window.innerHeight
    viewportHeight = window.innerWidth
  }
  const scaleX = +((viewportWidth / viewportHeight) * scale).toFixed(3)
  const scaleY = +((viewportHeight / viewportWidth) * scale).toFixed(3)

  root.style.setProperty("--scaleX", scaleX)
  root.style.setProperty("--scaleY", scaleY)
}

export default setScale
