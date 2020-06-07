<template>
  <section class="preposition-generator-container flex column align-center main-layout-container">
    <preposition-topbar @toggleFuture="toggleFuture" @giveHelp="giveHelp" />
    <preposition-table :prompt="this.prompt" :help="help" />
    <button class="generate-btn btn" @click="generate">שחק</button>
  </section>
</template>

<script>
import verbService from "@/services/verbService.js";
import prepositionTable from "@/cmps/preposition-table.vue";
import prepositionTopbar from "@/cmps/preposition-topbar.vue";
import prepositionTableVue from '../cmps/preposition-table.vue';
export default {
  name: "preposition-generator",
  data() {
    return {
      prompt: null,
      clue: null,
      answer: '',
      help: null
    };
  },
  created() {
    this.getVerbs();
  },
  methods: {
    async getVerbs() {
      const verbs = await verbService.getVerbs();
      
    },
    generate() {
      this.help = null;
      const exercise = verbService.generateExercise();
      
      this.prompt = {
        inf: exercise.verb.hebrewInf,
        preposition: exercise.preposition.heb,
        tense: exercise.tense.heb
      };
      this.getAnswer(exercise)
    },
    async getAnswer(exercise){
      const query = {
        id: exercise.verb.id,
        preposition: exercise.preposition.eng,
        tense: exercise.tense.eng
      }
      const answer = await verbService.getAnswer(query)
      this.answer = answer;
      
    },
    toggleFuture() {
      verbService.toggleFuture();
    },
    giveHelp() {
      this.help = this.answer
    }
  },
  components: {
    prepositionTable,
    prepositionTopbar
  }
};
</script>
