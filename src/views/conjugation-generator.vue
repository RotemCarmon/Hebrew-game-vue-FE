<template>
  <section class="conjugation-generator-container flex column align-center main-layout-container">
    <conjugation-topbar
      @toggleFuture="toggleFuture"
      @giveHelp="giveHelp"
      :lifes="lifes"
      :rightAnswers="rightAnswers"
    />
    <conjugation-table :prompt="this.prompt" :help="help" />
    <conjugation-input @checkAnswer="checkAnswer" v-if="isPlaying" />
    <grid-board />
    <button v-if="!isPlaying" class="generate-btn btn" @click="initGame">התחל לשחק</button>
  </section>
</template>

<script>
import verbService from "@/services/verbService.js";
import conjugationTable from "@/cmps/conjugation-table.vue";
import conjugationTopbar from "@/cmps/conjugation-topbar.vue";
import conjugationTableVue from "@/cmps/conjugation-table.vue";
import conjugationInput from "@/cmps/conjugation-input.vue";
import gridBoard from "@/cmps/grid-board.vue";
import { eventBus } from "@/services/eventBus.service";
export default {
  name: "conjugation-generator",
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
      this.lifes = 3;
      this.rightAnswers = 0;

      this.generate();
    },
    generate() {
      this.help = null;
      const exercise = verbService.generateExercise();

      this.prompt = {
        inf: exercise.verb.hebrewInf,
        conjugation: exercise.conjugation.heb,
        tense: exercise.tense.heb
      };
      this.getAnswer(exercise);
    },
    async getAnswer(exercise) {
      const query = {
        id: exercise.verb.id,
        conjugation: exercise.conjugation.eng,
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
      if (!this.isPlaying) return;
      if (submittedAnswer === this.answer) {
        const msg = {
          txt: "כל הכבוד! 👏",
          duriation: 1500
        };
        eventBus.$emit("sendMsg", msg);

        this.rightAnswers++;
        this.generate();
      } else {
        const lifes = this.lifes;
        const msg = {
          txt: "טעות! נסה שנית 😓",
          duriation: 1500
        };
        eventBus.$emit("sendMsg", msg);

        if (lifes > 1) {
          console.log("lost one!");
          this.lifes--;
          // TODO: prompt message notifing that the answer is wrong
          // TODO: ask if to show right answer
        } else {
          //## if last life
          this.lifes--;

          const msg = {
            txt: "המשחק נגמר ☠️☠️☠️",
            isRestartBtn: true,
            duriation: 15000
          };
          eventBus.$emit("sendMsg", msg);
          this.isPlaying = false;
          console.log("GAME OVER!");
          // TODO: promt GAME OVER message with restart button
        }
      }
    }
  },
  components: {
    conjugationTable,
    conjugationTopbar,
    conjugationInput,
    gridBoard
  }
};
</script>
