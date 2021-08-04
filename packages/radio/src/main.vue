// TODO : 受控组件，使用 v-model 将表单或者父组件的值传递给子组件,组件的modelValue由父组件控制state
// done :
/** 因为 radio 默认的特性是：一组的需要相同的name, 当一个被点击(event.target.value = 'on')，其他为false */
/** 而该组件的实现的思路：使用相同bind value , 通过change 触发绑定的事件 */
/** 使用vue3 v-model 为 bind 与事件监听的缩写 https://v3.vuejs.org/guide/migration/v-model.html*/
<template>
    <label class="jkb-radio"
          :class="[
            {'is-disabled':isDisabled},
            {'is-checked':modelValue === label},
          ]"
    >
    <!-- 隐藏元素页添加上 checked ,disabled -->
    <span class="jkb-radio__input" :class="[]">
        <span class="jkb-radio__inner"
        ></span>
      <input 
      class="jkb-radio__original"
      :value="label"  ref="radio" type="radio" :name="name" v-model="modelValue" @change="handleChange" :disabled="isDisabled">
    </span>
      <span class="jkb-radio__label">
           <slot></slot>
           <template v-if="!$slots.default">{{label}}</template>
      </span>
    </label>
</template>

<script>
 import Emitter from '../../../src/mixins/emitter';
export default {
  name: 'JkbRadio',
  mixins:[Emitter],
  componentName: 'JkbRadio',//自定义选项
  props:{
    modelValue:{
      type:[Number,String,Boolean],
      required:true
    },//默认绑定为
    label:String,
    disabled:Boolean,
    name:String
  },
  computed:{
    isDisabled(){
      return this.disabled?true:false;
    }
  },
  methods:{
    handleChange(event){
       this.$nextTick(()=>{
          this.$emit('update:modelValue',event.target.value);
      })
    }
  }
};
</script>
