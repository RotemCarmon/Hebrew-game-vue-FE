<template>
  <div class="conjugation-table-container ui-card">
    <table>
      <thead>
        <tr>
          <th>מילת יחס</th>
          <th>פועל</th>
          <th>זמן</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="prompt">
          <td class="conjugation">{{prompt.conjugation}}</td>
          <td class="verb">{{prompt.inf}}</td>
          <td class="tense">{{prompt.tense}}</td>
        </tr>
        <tr v-else>
          <td class="conjugation"></td>
          <td class="verb"></td>
          <td class="tense"></td>
        </tr>
      </tbody>
    </table>
    <div class="clue-container">
      <div class="clue" v-if="help">{{help}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'conjugation-table',
  props: {
    prompt: {
      type: Object,
      require: true
    },
    help: {
      type: String
    }
  }

};
</script>