# Note Taking App

A simple note-taking application built with Vue.js. This app allows users to create, view, and delete notes, storing them temporarily in the browser's local storage. Since the app relies on local storage, the notes are not persistent across browser sessions and will be cleared after the browser is relaunched.

## Features
* Create Notes: Users can create ntoes by entering a title and content.
* View Notes: Notes are displayed in a list with titles, content snippets, and timestamps.
* Delete Notes: Users can remove notes from the list.
* Local Storage: Notes are temporarily stored in the browser's local storage. The notes will be cleared after a page refresh or browser restart.

## Screenshots

## Installation
1. Clone the repository.
`git clone https://github.com/thecenturist/note-taker.git`
2. Navigate to the project directory:
`cd note-taker`
3. Install dependencies:
`npm install`
4. Run the application:
`npm run dev`
5. Open your browser and visit `http://localhost:3000`.

## How It Works
* **Vue.js**: The application is built using Vue 3 and its Composition API, which makes it reactive and easy to manage state.
* **Local Storage**: The application uses the browser's local storage to temporarily store the user's notes. It retrieves and saves the notes whenever the app is loaded or updated.
* **Reactivity**: Vue’s reactivity system ensures that the UI is automatically updated when the state changes (e.g., adding, removing, or editing notes).
* **Conditional Rendering**: Notes are dynamically rendered based on their content and length, showcasing Vue’s templating system.

## Skills & Technologies Used
* **Vue.js (Vue 3)**: The core framework used to build the application with the Composition API for state management.
* **HTML/CSS**: Basic markup and styling to create a user-friendly interface.
* **JavaScript (ES6)**: Modern JavaScript syntax and features such as arrow functions, destructuring, and template literals.
* **Vue Router (if used)**: For managing different pages (e.g., if you plan to expand the app).
* **Local Storage**: For temporarily saving and loading notes in the browser.
* **Event Handling**: Using Vue's event handling system (@click, @input) to manage user interactions.
* **Conditional Rendering**: Using Vue's directives like v-if and v-for to conditionally render elements based on app state.
* **Vue Directives**: Familiarity with directives like v-model, v-bind, v-for, v-if for dynamic rendering.
