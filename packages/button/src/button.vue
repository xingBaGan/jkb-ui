<template>
  <span class="jkb-button"
  @click="handleClick"
  :disabled="disabled"
  :class="[type?'jkb-button--'+type:'',
  buttonSize?'jkb-button--'+buttonSize:'',{
    'is-disabled':disabled,
    'is-plain':plain,
    'is-round':round,
    'is-circle':circle,
    'is-loading':loading,
  }]"
    >
    <i class="jkb-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
   <span v-if="$slots.default"><slot></slot></span>
  </span>
</template>
/**先定义三种状态 */
<script>
export default {
  name: 'JkbButton',
  props: {
    type:{
      type:String
    },
    size: String,
    round: Boolean,
    plain: Boolean,
    disabled: Boolean,
    loading: Boolean,
    circle: Boolean,
    icon: {
        type: String,
        default: ''
      },
  },
   methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
};
</script>
