<template>
  <div class="home-page flex justify-center">
    <router-link to="infinitive"> 
      <img src="@/assets/infinitive.png" alt="">
      <label>שם הפועל</label>
    </router-link>
    <router-link to="preposition">
      <img src="@/assets/preposition.png" alt="">
      <label>הטיות</label>
    </router-link>
  </div>
</template>

<script>
// import infinitiveImg from '../assets/infinitive.png';
// import prepositionImg from '../assets/preposition.png';

export default {
  name: 'home-page',
  data(){
    return {
      
    }
  },
  components: {
  }
}
</script>
