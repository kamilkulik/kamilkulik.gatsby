const checkIfMobile = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  const pr = window.devicePixelRatio // resolution in physical pixels to the resolution in CSS pixels

  const mobileAspectRatio = 4 / 3
  const mobilePixelDensity = 2

  const mobile = width <= 600 ? true : false

  const tablet = height > width && height >= 1024 ? true : false

  return {
    mobile,
    tablet,
    height,
    width,
  }
}

export default checkIfMobile
