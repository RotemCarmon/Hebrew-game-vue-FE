<template>
  <section class="preposition-generator-container flex column align-center main-layout-container">
    <preposition-topbar @toggleFuture="toggleFuture" @giveClue="giveClue" />
    <preposition-table :prompt="this.prompt" :clue="clue" />
    <button class="generate-btn btn" @click="generate">שחק</button>
  </section>
</template>

<script>
import verbService from "@/services/verbService.js";
import prepositionTable from "@/cmps/preposition-table.vue";
import prepositionTopbar from "@/cmps/preposition-topbar.vue";
export default {
  name: "preposition-generator",
  data() {
    return {
      prompt: null,
      clue: null
    };
  },
  created() {
    this.getVerbs();
  },
  methods: {
    async getVerbs() {
      const verbs = await verbService.getVerbs();
      console.log("VERBBB: ", verbs);
    },
    generate() {
      this.clue = null;
      const prompt = verbService.generateExercise();
      this.prompt = prompt;
    },
    toggleFuture() {
      verbService.toggleFuture();
    },
    giveClue() {
      console.log("CLUE", this.prompt);
      this.clue = this.prompt.verb.englishInf;
    }
  },
  components: {
    prepositionTable,
    prepositionTopbar
  }
};
</script>
