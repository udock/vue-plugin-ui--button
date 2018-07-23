module.exports = {
  externals: [
    /lodash\/.*/,
    '@udock/vue-plugin-ui',
    '@udock/vue-plugin-ui--icon'
  ],
  globals: {
    'lodash/extend': '_.extend',
    'lodash/get': '_.get',
    '@udock/vue-plugin-ui': 'vue-plugin-ui',
    '@udock/vue-plugin-ui--icon': 'vue-plugin-ui--icon'
  }
}
