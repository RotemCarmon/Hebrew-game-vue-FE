<template>
  <section class="grid-board-container" v-if="gameObj">
    <div v-if="gameObj.question" class="grid-header">{{gameObj.question}}</div>

    <div class="grid-board">
      <div
        class="grid-cell cell1"
        @click="submitAnswer"
      >{{gameObj.gameItems[0]}}</div>
      <div
        class="grid-cell cell2"
        @click="submitAnswer"
      >{{gameObj.gameItems[1]}}</div>
      <div
        class="grid-cell cell3"
        @click="submitAnswer"
      >{{gameObj.gameItems[2]}}</div>
      <div
        class="grid-cell cell4"
        @click="submitAnswer"
      >{{gameObj.gameItems[3]}}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "grid-board",
  props:{
    gameObj: {
      type: Object
    }
  },
  methods : {
    submitAnswer(e) {
      const selectedAns = e.target.innerText

      if(selectedAns === this.gameObj.answer) {
         e.target.classList.add("correct");
         setTimeout(() => {
           this.$emit('correctAnswer')
           e.target.classList.remove("correct");
         }, 1500)

      } else {
        e.target.classList.add("wrong");
        setTimeout(() => {
          e.target.classList.remove("wrong");
        },3000)
      }
      
    }
  }
};
</script>

<style lang="scss" scoped>
$pop: #654062;
// $pop: #ee6c4d;
$ui-bg: #F1FAEE;
$border: #457b9d;

  .grid-board-container {
    margin: 20px;
  box-shadow:  0 0  8px $border;
  font-weight: 700;
  font-size: 2em;
    background-color: $ui-bg;
  .grid-header {
    padding: 30px;
  }
  .grid-board {
    padding: 15px;
    display:  grid;
    gap: 10px;
    grid-template-columns: 300px 300px;
    grid-template-rows: 100px 100px;
  
    .grid-cell {
      color: #e8ead3;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $pop;
      transition: box-shadow .4s ease-in-out;
      &:hover {
        cursor: pointer;
        box-shadow: 0 0 6px 0px #1d3557;
      }
    }
  }
  .grid-cell.wrong {
    animation-name: wrong-animation;
    animation-duration: 1.5s;
    // animation-iteration-count: 3;
  }
  .grid-cell.correct {
    background-color: green;
    animation-name: right-ainmation;
    animation-duration: 0.7s;
  }
}

@keyframes wrong-animation {
  0%    {
    transform: scale(1.05);
    background-color: red;}
  20%   {
    // transform: scale(1.02);
    background-color: #E50B10;}
  35%   {
    // transform: scale(1);
    background-color: red;}
  50%   {
    transform: scale(1);
    background-color: #E50B10;}
  75%   {
    // transform: scale(1);
    background-color: red;}
  80%   {
    // transform: scale(1);
    background-color: #E50B10;}
  90%   {
    transform: scale(1.05);
    background-color: #B22031;}
  100%   {
    // transform: scale(1);
    background-color: #7F3552;}

}

@keyframes right-ainmation {
  0% {
    transform: scale(1.05);
  }
}
</style>