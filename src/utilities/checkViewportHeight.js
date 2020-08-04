const getViewportHeight = () => {
  const vh = window.innerHeight

  console.log(vh)

  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

export default getViewportHeight
