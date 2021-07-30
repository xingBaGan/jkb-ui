<template>
  <i :class="'jkb-icon-' + name"></i>
</template>

<script>
export default {
  name: 'JkbIcon',
  props:{
    name:String
  }
};
</script>
