<template>
  <div class="life-count-container flex justify-end" v-if="lifes">
    <i v-for="life in lifes" class="fa fa-heart" :key="life"></i>
  </div>
</template>

<script>
export default {
  name: "life-count",
  props: {
    lifes: {
      type: Number,
      default: 3
    }
  }
};
</script>

<style>
</style>