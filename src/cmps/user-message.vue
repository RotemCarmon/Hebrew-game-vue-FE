<template>
  <div class="user-mesaage-container ui-card" v-if="msg">
    <div class="user-message">{{msg}}</div>
    <button @click="closeMessage" class="close-btn">x</button>
  </div>
</template>

<script>
// TODO: pass in an object with properties 
// txt, duriation, action-button, color, size

import { eventBus } from "../services/eventBus.service";
export default {
  name: "user-message",
  data() {
    return {
      msg: ""
    };
  },
  created() {
    eventBus.$on("sendMsg", msg => {
      this.msg = msg;
      setTimeout(() => {
        this.msg = "";
      }, 3000);
    });
  },
  methods: {
    closeMessage() {
      this.msg = ""
    }
  }
};
</script>