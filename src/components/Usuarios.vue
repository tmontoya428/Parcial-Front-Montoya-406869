<template>
  <div class="users-container">
    <h2>👤 Usuarios</h2>
    
    <form @submit.prevent="addUser" v-if="roles.length > 0">
      <div class="form-container">
        <input class="input" v-model="form.nombres" placeholder="Nombres" required />
        <input class="input" v-model="form.apellidos" placeholder="Apellidos" required />
        <input class="input" v-model="form.identificacion" placeholder="Identificación" required />
        <input class="input" v-model="form.correo" type="email" placeholder="Correo electrónico" required />
        
        <select class="input" v-model="form.rolId" required>
          <option disabled value="">Selecciona un rol</option>
          <option v-for="r in roles" :key="r.id" :value="r.id">{{ r.nombre }}</option>
        </select>
        
        <button type="submit">Agregar Usuario</button>
      </div>
    </form>

    <div v-else class="no-roles-message">
      ⚠️ Primero debes crear al menos un rol para agregar usuarios.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getUsers, createUser, getRoles, User, Role } from '../services/api';
import '../styles/Usuarios.css'; // Puedes cambiar el nombre del CSS si decides separar estilos

const users = ref<User[]>([]);
const roles = ref<Role[]>([]);
const form = ref({
  nombres: '',
  apellidos: '',
  identificacion: '',
  correo: '',
  rolId: ''
});

const fetchUsers = async () => {
  users.value = await getUsers();
};

const fetchRoles = async () => {
  roles.value = await getRoles();
};

const addUser = async () => {
  await createUser(form.value);
  form.value = {
    nombres: '',
    apellidos: '',
    identificacion: '',
    correo: '',
    rolId: ''
  };
  fetchUsers();
};

onMounted(() => {
  fetchUsers();
  fetchRoles();
});
</script>
