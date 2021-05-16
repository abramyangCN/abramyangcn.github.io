const React = require("react")

// Adds a class name to the body element
exports.onPreRenderHTML = ({ getHeadComponents }, pluginOptions) => {
  const headComponents = getHeadComponents()
  console.log(headComponents)
}
