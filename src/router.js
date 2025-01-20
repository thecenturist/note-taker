import { createRouter, createWebHistory } from "vue-router";
import Notes from './components/Notes.vue'
import Note from "./components/Note.vue";

const routes = [
    {
        path: '/',
        name: 'Notes',
        component: Notes
    },
    {
        path: '/note/:id',
        name: 'Note',
        component: Note
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router