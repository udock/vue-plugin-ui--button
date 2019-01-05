<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
import { utils } from '@udock/vue-plugin-ui'
const { oneOf } = utils
const prefixCls = 'u-btn-group'

export default {
  name: 'UButtonGroup',
  props: {
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large'])
      }
    },
    shape: {
      validator (value) {
        return oneOf(value, ['circle', 'circle-outline'])
      }
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      const style = {}
      style[`${prefixCls}-${this.size}`] = !!this.size
      style[`${prefixCls}-${this.shape}`] = !!this.shape
      style[`${prefixCls}-vertical`] = this.vertical
      return [
        `${prefixCls}`, style
      ]
    }
  }
}
</script>
