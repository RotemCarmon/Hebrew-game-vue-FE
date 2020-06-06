<template>
  <section class=infinitive-quest-container v-if="question">
      <div class="question">{{question.inf}}</div>
      <div class="answers">
        <div class="answer answer1" @click="submitAnswer" :key="question.possibleAnswers[0]">{{question.possibleAnswers[0]}}</div>
        <div class="answer answer2" @click="submitAnswer" :key="question.possibleAnswers[1]">{{question.possibleAnswers[1]}}</div>
        <div class="answer answer3" @click="submitAnswer" :key="question.possibleAnswers[2]">{{question.possibleAnswers[2]}}</div>
        <div class="answer answer4" @click="submitAnswer" :key="question.possibleAnswers[3]">{{question.possibleAnswers[3]}}</div>
      </div>
    </section>
</template>

<script>
export default {
  props:{
    question : {
      type: Object
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    submitAnswer(e) {
      console.log('Ans', e);
      
      const selectedAns = e.target.innerText
      if(selectedAns === this.question.answer) {
        console.log('Yeyy');
         e.target.classList.add("correct");
         setTimeout(() => {
           this.$emit('correctAnswer')
         }, 2000)

      } else {
        console.log('Try again');
        e.target.classList.add("wrong");
        setTimeout(() => {
          e.target.classList.remove("wrong");
        },3000)
      }
      
    }
  }
}
</script>
