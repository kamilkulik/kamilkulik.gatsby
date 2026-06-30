const path = require("path")

const ICONS_PATH = path.resolve(__dirname, "src/images/icons")

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()

  config.module.rules.forEach(rule => {
    if (!rule.oneOf) return
    rule.oneOf.forEach(one => {
      if (one.test && one.test.toString().includes("svg")) {
        one.exclude = one.exclude
          ? [].concat(one.exclude, ICONS_PATH)
          : ICONS_PATH
      }
    })
  })

  actions.replaceWebpackConfig(config)

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: ICONS_PATH,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgo: true,
                titleProp: true,
              },
            },
          ],
        },
      ],
    },
  })
}
