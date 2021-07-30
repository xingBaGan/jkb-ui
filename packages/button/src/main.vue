<template>
  <span class="jkb-button"
  @click="handleClick"
  :disabled="disabled"
  :class="[type?'el-button--'+type:'',
  buttonSize?'el-button--'+buttonSize:'',{
    'is-disabled':disabled,
    'is-plain':plain,
    'is-round':round,
  }]"
    >
    按钮
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
    disabled: Boolean
  },
   methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
};
</script>
