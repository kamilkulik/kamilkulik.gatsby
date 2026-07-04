const path = require("path")

const ICONS_PATH = path.resolve(__dirname, "src/images/icons")

const excludeIconsPath = rule => {
  if (rule.test && rule.test.toString().includes("svg")) {
    rule.exclude = rule.exclude
      ? [].concat(rule.exclude, ICONS_PATH)
      : ICONS_PATH
  }
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()

  config.module.rules.forEach(rule => {
    if (rule.oneOf) {
      rule.oneOf.forEach(excludeIconsPath)
    } else {
      excludeIconsPath(rule)
    }
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
