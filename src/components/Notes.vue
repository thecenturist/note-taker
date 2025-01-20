<template>
    <div class="actions">
        <button class="create-btn" v-on:click="toggleVisibility">
            <i :class="isVisible ? 'pi-trash' : 'pi-plus-circle'" class="pi"></i>
            {{ btnText }}
        </button>
        <CreateNote @CreateNewNote="CreateNoteEvent" v-if="isVisible" />
        
        
    </div>
    <div class="notes-section">
        <div class="notes-list">
            <ul>
                <li v-for="note in notesdb" :key="note.id" class="note">
                    <p class="note-title">{{ note.note_title }}</p>
                    <p class="note-snippet">{{ note.note_text.length > 200 ? note.note_text.substring(0, 200) + ' ...' : note.note_text }}</p>
                    <p class="note-metadata"><span><i class="pi pi-calendar-clock"></i></span>{{ note.note_timestamp }}</p>
                    <router-link class="note-link" :to="{ name: 'Note', params: { id: note.id } }">View More</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import notes from '../../notes.js'
import { ref, onMounted } from 'vue'
import CreateNote from './CreateNote.vue'
import { useToast } from 'vue-toastification'

const isVisible = ref(false)
let notesdb = ref([])
const btnText = ref('Create New Note')
const toast = useToast()

onMounted(() => {
    
    const savedNotes = JSON.parse(localStorage.getItem('notes'))
    if (savedNotes){
        notesdb.value = savedNotes
    }
})

const toggleVisibility = () => {
    isVisible.value = !isVisible.value
    if (isVisible.value) {
        btnText.value = "Discard note"
    } else {
        btnText.value = "Create New Note"
    }
}

const CreateNoteEvent = (title, text) => {
    let newNote = {
        id: notesdb.value.length + 1,
        note_title: title,
        note_text: text,
        note_timestamp: new Date().toLocaleString('en-US', {
            weekday: 'short', // Mon
            month: 'short',   // Jan
            day: '2-digit',   // 20
            year: 'numeric',  // 2025
            hour: '2-digit',  // 12
            minute: '2-digit',// 33
            second: '2-digit',// 34
            hour12: true      // AM/PM
        })
    }
    notesdb.value.unshift(newNote)
    localStorage.setItem('notes', JSON.stringify(notesdb.value))
    toast.success("Note created")
}

</script>

<style scoped>
@import "primeicons/primeicons.css";

.actions {
    margin: 10px 10px;
}
.notes-section {
    margin: 10px 10px;
}
.notes-list ul li {
    margin-bottom: 10px;
    list-style: none;
    background: #F8F8F8;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px 10px;
}
.notes-list ul li p {
    margin-bottom: 10px;
}

.note-title {
    font-size: 20px;
    font-weight: 500;
}
.note-link {
    text-decoration: underline;
    cursor: pointer;
    color: #9D00FF;
}
.note-metadata {
    font-size: 13px;
}
.create-btn {
    margin: 10px 10px;
    /* width: 100%; */
    border: 1px solid;
    border-radius: 50px;
    padding: 10px 10px;
    background: white;
    transition: 0.3s ease;
}

.create-btn:hover {
    background: black;
    color: white;
}
.pi-calendar-clock {
    margin-right: 5px;
}
</style>