
import get from 'lodash/get'
import extend from 'lodash/extend'
import UButton from './components/button.vue'
import UButtonGroup from './components/button-group.vue'
import componentsOptions from './config/components-options'

UButton.install = function (Vue, options = {}) {
  extend(componentsOptions, options)
  if (!options.scoped) {
    Vue.component(options.name || UButton.name, UButton)
    Vue.component(get(options, 'children.Group.name') || UButtonGroup.name, UButtonGroup)
  }
}

UButton.Group = UButtonGroup

export default UButton
