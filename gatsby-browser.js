const React = require("react")
const { Provider } = require("./src/pages/index")

exports.wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>
}
