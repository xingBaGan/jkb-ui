<template>
  <div class="jkb-input">
    <input
    class="el-input__inner"
    :disabled="inputDisabled"
    :readonly="readonly"
    v-bind="$attrs"
    v-model="modelValue"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
    />
  </div>
</template>

<script>
export default {
  name: "JkbInput",
  props: {
    modelValue: "",
    disabled: Boolean,
    readonly: Boolean
  },
  methods: {
    handleInput() {
      this.$emit("input", event.target.value);
    },
    handleFocus() {
      this.$emit("focus", event.target.value);
    },
    handleChange() {
      this.$emit("change", event.target.value);
    },
    handleBlur() {
      this.$emit("blur", event.target.value);
    }
  }
};
</script>
