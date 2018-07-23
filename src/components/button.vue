<template>
  <button :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick">
    <UIcon :class="animLoading || anim.loading" type="load-c" v-if="loading"></UIcon>
    <UIcon :type="icon" v-if="icon && !loading"></UIcon>
    <span v-if="showSlot" ref="slot"><slot></slot></span>
  </button>
</template>
<script>
  import UIcon from '@udock/vue-plugin-ui--icon'
  import { utils } from '@udock/vue-plugin-ui'
  import componentsOptions from '../config/components-options'
  const { oneOf } = utils
  const prefixCls = 'u-btn'

  export default {
    name: 'UButton',
    components: {
      UIcon
    },
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error'])
        }
      },
      shape: {
        validator (value) {
          return oneOf(value, ['circle', 'circle-outline'])
        }
      },
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large'])
        }
      },
      loading: Boolean,
      disabled: Boolean,
      htmlType: {
        default: 'button',
        validator (value) {
          return oneOf(value, ['button', 'submit', 'reset'])
        }
      },
      icon: String,
      long: {
        type: Boolean,
        default: false
      },
      anim: {
        type: Object,
        default: () => componentsOptions.anim
      },
      animLoading: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        showSlot: true
      }
    },
    computed: {
      classes () {
        const style = {}
        style[`${prefixCls}-${this.type}`] = !!this.type
        style[`${prefixCls}-long`] = this.long
        style[`${prefixCls}-${this.shape}`] = !!this.shape
        style[`${prefixCls}-${this.size}`] = !!this.size
        style[`${prefixCls}-loading`] = this.loading != null && this.loading
        style[`${prefixCls}-icon-only`] = !this.showSlot && (!!this.icon || this.loading)
        return [
          `${prefixCls}`, style
        ]
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    },
    mounted () {
      this.showSlot = this.$slots.default !== undefined
    }
  }
</script>
