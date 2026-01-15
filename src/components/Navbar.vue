<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="logo">📚</div>
        <!-- Navlinks-->
         <div class="nav-links">
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/services" class="nav-link">Services</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
            <router-link to="/profile" class="nav-link">Profil</router-link>
         <!-- </div> -->
         </div>
    </div>
    </nav>

    </template>

    <script>
export default {
    name: 'Navbar',
};
    </script>
    <style scoped>

.navbar {
    background-color: gray;
    color: white;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    padding: 0;
    margin: 0;
    height: 60px;
    background: black;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-container {
    align-items: center;
    display: flex;
    padding: 0 30px; /* Odsadenie od ľava pre nabar komponenty*/
    height: 100%;
}
.nav-links {
    padding: 0 30px;
    display: flex;
    gap:20px;
}
</style>