<template>
<nav>
<router-link to="/users" class="home"> 👤 Usuarios</router-link> |
<router-link to="/roles" class="home">📙 Roles</router-link>
</nav>
<router-view />
</template>
<script setup lang="ts">
// No hay lógica adicional
</script>

<style>
.home {
  font-size: 1.5rem;
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
}
nav a {
margin-right: 1rem;
color: #333;
text-decoration: none;
}
nav a.router-link-active {
font-weight: bold;
}
</style>