module.exports = function (webpackEnv) {
  return merge(common(webpackEnv), {
    mode: 'production',
  })
}