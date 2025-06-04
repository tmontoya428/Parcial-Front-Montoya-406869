<template>
  <div class="roles-container">
    <h2>🎭 Roles</h2>
    <form @submit.prevent="addRole">
      <div class="form-container">
        <input class="input" v-model="form.nombre" placeholder="Nombre del rol" required />
        <input class="input" v-model="form.descripcion" placeholder="Descripción del rol"/>
        <button type="submit">Agregar Rol</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
// Suponiendo que tienes estos métodos definidos en tu archivo api.ts
import { getRoles, createRole, Role } from '../services/api';
import '../styles/Rol.css'; // puedes cambiar el nombre del CSS si decides separar estilos

const roles = ref<Role[]>([]);
const form = ref({ nombre: '', descripcion: '' });

const fetchRoles = async () => {
  roles.value = await getRoles();
};

const addRole = async () => {
  await createRole(form.value);
  form.value = { nombre: '', descripcion: '' };
  fetchRoles();
};

onMounted(() => {
  fetchRoles();
});
</script>
