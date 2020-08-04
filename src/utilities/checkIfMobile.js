const checkIfMobile = () => {
  let width, height, pr

  if (typeof window !== `undefined`) {
    width = window.innerWidth
    height = window.innerHeight
    pr = window.devicePixelRatio // resolution in physical pixels to the resolution in CSS pixels
  }

  // const mobileAspectRatio = 4 / 3
  // const mobilePixelDensity = 2

  const mobile = width <= 600 ? true : false

  const tablet = height > width && width >= 600 ? true : false

  return {
    mobile,
    tablet,
    height,
    width,
  }
}

export default checkIfMobile
