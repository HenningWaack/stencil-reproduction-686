<script setup>
import { ref } from "vue";

const show = ref(true);
const toggle = () => {
  show.value = !show.value;
};
</script>

<template>
  <div>
    Hallo
    <my-component class="base" :class="{ show: show }"></my-component>
    <button @click="toggle">Toggle</button>
  </div>
</template>

<style>
.base {
  opacity: 0;
}
.show {
  opacity: 1;
}
</style>
