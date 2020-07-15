<template>
  <div id="app" class="main-app-container">
    <app-header />
    <router-view class="main-view-container"/>
    
    <user-message />

  </div>
</template>

<script>
import appHeader from '@/cmps/app-header.vue';
import userMessage from "@/cmps/user-message.vue";

export default {
  name: 'App',

  components: {
    appHeader,
    userMessage

  }
}
</script>


