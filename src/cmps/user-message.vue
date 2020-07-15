<template>
  <div class="user-mesaage-container ui-card" :style="msg.style" v-if="msg.txt">
    <div class="user-message">{{msg.txt}}</div>
    <button @click="closeMessage" class="close-btn">x</button>
    <button v-if="msg.isRestartBtn" class="restart-btn btn" @click="restart">התחל מחדש</button>
  </div>
</template>

<script>
// TODO: pass in an object with properties
// txt, duriation, isRestartBtn, color, size

import { eventBus } from "../services/eventBus.service";
export default {
  name: "user-message",

  data() {
    return {
      msg: {
       duriation: 15000
      }
    };
  },
  created() {
    eventBus.$on("sendMsg", msg => {
      this.msg = {...msg};
      console.log('MSG', this.msg);
      
      const timeOut =  setTimeout(() => {
        this.closeMessage();
        clearTimeout(timeOut)
      }, msg.duriation);
    });
  },
  methods: {
    closeMessage() {
      this.msg.txt = "";
      // clearTimeout(timeOut)
    },
    restart() {
      console.log('restarting')
    }
  }
};
</script>