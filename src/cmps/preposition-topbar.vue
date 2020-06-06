<template>
  <section class="preposition-topbar-container space-around flex align-center">
      <div class="toggleFuture">
        <label>עתיד</label>
        <input type="checkbox" @change="$emit('toggleFuture')" />
      </div>
      <button class="clue-btn btn" @click="$emit('giveClue')" >רמז</button>
    </section>
</template>

<script>
export default {

}
</script>