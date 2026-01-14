<template>

    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-brand">
            <router-link to="/" class="brand-link">Temporary1</router-link>
        </div>
        <!-- Navlinks-->
         <div class="nav-links">
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/services" class="nav-link">Services</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/services" class="nav-link">Services</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
            <router-link to="/profile" class="nav-link">Profil</router-link>
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
    background-color: #333;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    height: 60px;
}

.navbar-container {
    display: flex;
    align-items: top;
}
</style>