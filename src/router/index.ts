import { createRouter, createWebHistory } from 'vue-router';
import Rol from '../components/Rol.vue';
import Usuarios from '../components/Usuarios.vue';
import Mostrar from '../components/Mostrar.vue';
const routes = [
{ path: '/', component: Usuarios },
{ path: '/users', component: Usuarios },
{ path: '/roles', component: Rol },
{ path: '/mostrar', component: Mostrar }

];
const router = createRouter({
history: createWebHistory(),
routes
});
export default router;