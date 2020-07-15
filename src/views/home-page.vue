<template>
  <div class="home-page flex justify-center">
    <router-link to="infinitive"> 
      <img src="@/assets/infinitive.png" alt="">
      <label>שם הפועל</label>
    </router-link>
    <router-link to="conjugation">
      <img src="@/assets/conjugation.png" alt="">
      <label>הטיות</label>
    </router-link>
  </div>
</template>

<script>

import {eventBus} from '../services/eventBus.service';
export default {
  name: 'home-page',
  methods: {
    sendMsg() {
      const msg = {
        txt: 'Hello!!!',
        duriation: 150000,
        isRestartBtn: true,
        style: {
          color: 'red',
          height: '200px'
        }
      }
      eventBus.$emit('sendMsg',msg)
    }
  }
}
</script>
