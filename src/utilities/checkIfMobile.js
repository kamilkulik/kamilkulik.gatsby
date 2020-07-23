const checkIfMobile = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  const pr = window.devicePixelRatio // resolution in physical pixels to the resolution in CSS pixels

  const mobileAspectRatio = 4 / 3 // iPad Mini, iPad Pro
  const mobilePixelDensity = 2

  const mobile =
    height / width >= mobileAspectRatio && pr >= mobilePixelDensity
      ? true
      : false

  return {
    mobile,
    height,
    width,
  }
}

export default checkIfMobile
