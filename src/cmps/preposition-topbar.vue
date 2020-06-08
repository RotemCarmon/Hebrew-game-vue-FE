<template>
  <section class="preposition-topbar-container align-center">
      <div class="toggleFuture">
        <label>עתיד</label>
        <input type="checkbox" @change="$emit('toggleFuture')" />
      </div>
      <div class="right-answers" v-if="rightAnswers" >{{rightAnswers}}</div>
      <life-count :lifes="lifes" />
      <button class="clue-btn btn" @click="$emit('giveHelp')" >עזרה</button>
    </section>
</template>

<script>
import lifeCount from './life-count';
export default {
props: {
  lifes: {
    type:Number
  },
  rightAnswers: {
    type: Number
  }
},
components: {
  lifeCount
}
}
</script>