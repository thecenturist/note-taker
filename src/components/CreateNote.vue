<template>
    <form @submit.prevent="handleSubmission">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" v-model="note_title"><br>

        <label for="body">Enter your note:</label><br>
        <textarea id="body" name="body" rows="6" cols="50" v-model="note_text">

        </textarea><br>

        <button type="submit">Create</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
const note_title = ref('')
const note_text = ref('')
const emit = defineEmits(['CreateNewNote'])

const handleSubmission = () => {
    emit('CreateNewNote', note_title.value, note_text.value.replace(/\n/g, '<br/>'))

    note_title.value = ''
    note_text.value = ''
}
</script>

<style scoped>
form {
    margin: 10px 10px;
}

button {
    margin-top: 10px;
}

#title {
    margin-left: 15px;
    width: 50%;
}

#body {
    padding: 5px;
}

button {
    border: 1px solid;
    border-radius: 50px;
    background: black;
    color: white;
    padding: 10px 10px;
    transition: 0.3s ease;
}

button:hover {
    background: white;
    color: black
}

</style>