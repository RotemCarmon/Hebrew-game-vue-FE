<template>
  <div id="app" class="main-app-container">
    <app-header />
    <router-view class="main-view-container"/>
  </div>
</template>

<script>
import appHeader from '@/cmps/app-header.vue';
export default {
  components: {
    appHeader
  }
}
</script>


