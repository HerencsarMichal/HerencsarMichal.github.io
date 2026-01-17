<template>
  <button 
    class="app-button" 
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <span v-if="iconLeft" class="icon-left">{{ iconLeft }}</span>
    <slot></slot>
    <span v-if="iconRight" class="icon-right">{{ iconRight }}</span>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'ghost', 'danger'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    iconLeft: String,
    iconRight: String,
    disabled: Boolean,
    block: Boolean
  },
  computed: {
    buttonClasses() {
      return [
        this.variant,
        this.size,
        { 'block': this.block }
      ]
    }
  },
  emits: ['click']
}
</script>