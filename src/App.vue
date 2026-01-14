<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<template>
  <div id = "app">
    <!-- Navbar-->
     <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-brand"></div>
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
    </nav>
    </div>
</template>

<style>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
