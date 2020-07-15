<template>
  <div class="conjugation-input-container flex align-center justify-center">
    <input type="text" v-model="answer" />
    <button @click="submitAnswer" class="submit-btn">הגש</button>
  </div>
</template>

<script>
export default {
  name: 'conjugation-input',
  data(){
    return {
      answer: ''
    }
  },
  methods: {
    submitAnswer() {
      if(this.answer) {
        this.$emit('checkAnswer', this.answer);
        this.answer = '';
      }
    }
  }
}
</script>