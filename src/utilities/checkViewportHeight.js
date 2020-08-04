const getViewportHeight = () => {
  const vh = window.innerHeight

  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

export default getViewportHeight
