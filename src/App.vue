<script setup>
import Search from './components/Search.vue'
import NewNote from './components/NewNote.vue'
import Notes from './components/Notes.vue'

</script>

<template>
  <div class="header-section">
    <p>Notes App</p>
  </div>
  <Search />
  <Notes />
  <!-- <NewNote /> -->
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.header-section {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 28px;
  margin: 10px 10px;
  text-align: center;
}
</style>
