<template>
  <div class="mostrar-container">
    <h3>Usuarios:</h3>
    <ul class="lista">
      <li v-for="u in users" :key="u.id">
        {{ u.nombres }} {{ u.apellidos }}, {{ u.rol.nombre }}
      </li>
    </ul>

    <h3>Roles disponibles:</h3>
    <ul class="lista">
      <li v-for="r in roles" :key="r.id">
        {{ r.nombre }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getUsers, getRoles, User, Role } from '../services/api';
import '../styles/Mostrar.css';

const users = ref<User[]>([]);
const roles = ref<Role[]>([]);

const fetchData = async () => {
  users.value = await getUsers();
  roles.value = await getRoles();
};

onMounted(() => {
  fetchData();
});
</script>
