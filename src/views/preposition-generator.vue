<template>
  <section class="preposition-generator-container flex column align-center main-layout-container">
    <preposition-topbar @toggleFuture="toggleFuture" @giveHelp="giveHelp" :lifes="lifes" :rightAnswers="rightAnswers" />
    <preposition-table :prompt="this.prompt" :help="help" />
    <preposition-input @checkAnswer="checkAnswer"  />
    <grid-board />
    <button v-if="!isPlaying" class="generate-btn btn" @click="initGame">התחל לשחק</button>
  </section>
</template>

<script>
import verbService from "@/services/verbService.js";
import prepositionTable from "@/cmps/preposition-table.vue";
import prepositionTopbar from "@/cmps/preposition-topbar.vue";
import prepositionTableVue from "@/cmps/preposition-table.vue";
import prepositionInput from "@/cmps/preposition-input.vue";
import gridBoard from "@/cmps/grid-board.vue";
export default {
  name: "preposition-generator",
  data() {
    return {
      prompt: null,
      clue: null,
      answer: "",
      help: null,
      lifes: 3,
      rightAnswers: 0,
      isPlaying: false
    };
  },
  created() {
    this.getVerbs();
  },
  methods: {
    async getVerbs() {
      const verbs = await verbService.getVerbs();
    },
    initGame() {
      this.help = null;
      this.isPlaying = true;
      this.generate();  
    },
    generate() {
      const exercise = verbService.generateExercise();

      this.prompt = {
        inf: exercise.verb.hebrewInf,
        preposition: exercise.preposition.heb,
        tense: exercise.tense.heb
      };
      this.getAnswer(exercise);
    },
    async getAnswer(exercise) {
      const query = {
        id: exercise.verb.id,
        preposition: exercise.preposition.eng,
        tense: exercise.tense.eng
      };
      const answer = await verbService.getAnswer(query);
      this.answer = answer;
    },
    toggleFuture() {
      verbService.toggleFuture();
    },
    giveHelp() {
      this.help = this.answer;
    },
    checkAnswer(submittedAnswer) {
      if(submittedAnswer === this.answer) {
        console.log('You are right!');
        this.rightAnswers++
        this.generate()
      } else {
        console.log('try again...');
        const lifes = this.lifes;
        if(lifes > 1 ) {
          console.log('lost one!');
          this.lifes--
          // TODO: prompt message notifing that the answer is wrong
          // TODO: ask if to show right answer
        } else {
          this.lifes--
          this.isPlaying = false
          console.log('GAME OVER!');

          // TODO: promt GAME OVER message with restart button

          
        }
        
      }
    }
  },
  components: {
    prepositionTable,
    prepositionTopbar,
    prepositionInput,
    gridBoard
  }
};
</script>
