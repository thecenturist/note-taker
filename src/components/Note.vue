<template>
    <div class="note-view">
        <h1>{{ note.note_title }}</h1>
        <p class="note-timestamp">{{ note.note_timestamp }}</p>
        <p class="note-text" v-html="note.note_text"></p>
        <button class="delete-btn" v-on:click="deleteNote">
            <i class="pi pi-trash"></i>
            Delete
        </button>
    </div>
    
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
const route = useRoute()
const router = useRouter()
const note = ref({
    id: 'NaN',
    note_title: 'Unable to Load',
    note_text: 'Unable to Load',
    note_timestamp: 'Sun Jan 19 1992 18:54:11 GMT-0800 (Pacific Standard Time)'
})
const toast = useToast()

onMounted(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'))
    if (savedNotes){
        const filteredNote = savedNotes.filter((post) => post.id === parseInt(route.params.id))[0]
        if (filteredNote) {
            note.value = filteredNote
        }
    }
})

watch(() => note.value, (newNote) => {
    if (newNote) {
        console.log(newNote)
    }
})

const deleteNote = () => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'))
    const updatedNotes = savedNotes.filter((post) => post.id !== parseInt(note.value.id))
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
    router.push({ name: 'Notes' })
    toast.success("Note deleted")
}
</script>

<style scoped>
@import "primeicons/primeicons.css";

.note-view {
    margin: 10px 10px;
}
.note-timestamp {
    color: #585858;
}
.note-text {
    margin: 20px 0;
}
.delete-btn {
    /* width: 100%; */
    border: 1px solid;
    border-radius: 50px;
    padding: 10px 10px;
    background: white;
    transition: 0.3s ease;
}

.delete-btn:hover {
    background: black;
    color: white;
}
</style>