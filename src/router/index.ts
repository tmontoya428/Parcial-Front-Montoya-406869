import { createRouter, createWebHistory } from 'vue-router';
import Rol from '../components/Rol.vue';
import Usuarios from '../components/Usuarios.vue';
const routes = [
{ path: '/', component: Usuarios },
{ path: '/users', component: Usuarios },
{ path: '/roles', component: Rol }
];
const router = createRouter({
history: createWebHistory(),
routes
});
export default router;