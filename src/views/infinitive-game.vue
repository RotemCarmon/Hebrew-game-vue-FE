<template>
  <section class="infinative-game container main-layout-container flex column align-center">
    <template v-if="questions">
      <infinitive-quest
        v-if="!isGameOver"
        :question="question"
        @correctAnswer="handleCurrectAnswer"
      />
      <div class="game-over-container flex column align-center justify-center" v-else>
        <div class="game-over">המשחק נגמר!</div>
        <button class="btn" @click="generateQuestions">התחל מחדש</button>
      </div>
    </template>
  </section>
</template>

<script>
import infinitiveService from "@/services/infinitiveService.js";
import infinitiveQuest from "@/cmps/infinitive-quest.vue";
export default {
  data() {
    return {
      questions: null,
      currQuestion: 0,
      isGameOver: false
    };
  },
  computed: {
    question() {
      return this.questions[this.currQuestion];
    }
  },
  created() {
    this.generateQuestions();
  },
  methods: {
    generateQuestions() {
      this.isGameOver = false;
      this.currQuestion = 0
      const questions = infinitiveService.generateQuestions();
      console.log("QUESTIONS", questions);
      this.questions = questions.slice(0,10);
      // this.questions = questions;
    },
    handleCurrectAnswer() {
      if (this.currQuestion === this.questions.length - 1) {
        console.log("Finished Game!!!");
        this.isGameOver = true;
      } else {
        this.currQuestion++;
      }
    }
  },
  components: {
    infinitiveQuest
  }
};
</script>