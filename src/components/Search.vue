<template>
    <div class="search-container">
        <p>Search:</p>
        <input type="search" ><br>
        <button>Search</button>
    </div>
    
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.search-container {
    margin: 10px 10px;
    font-family: 'Poppins', sans-serif;
}

input {
    width: 100%;
    padding: 5px 0;
    font-size: 15px;
}

button {
    width: 100%;
    margin-top: 10px;
    font-family: 'Poppins', sans-serif;
    padding: 5px;
    border: 1px solid;
    border-radius: 5px;
    background: white;
    transition: 0.3s ease;
}

button:hover {
    background: black;
    color: white;
}
</style>