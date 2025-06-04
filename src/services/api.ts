import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

/* ========== Interfaces ========== */

// Rol
export interface Role {
  id: number;
  nombre: string;
  descripcion: string;
}

// Usuario
export interface User {
  id: number;
  nombres: string;
  apellidos: string;
  identificacion: string;
  correo: string;
  rol: Role;
}

/* ========== Métodos Roles ========== */

export const getRoles = () =>
  api.get<Role[]>('/roles').then(r => r.data);

export const createRole = (role: Omit<Role, 'id'>) =>
  api.post<Role>('/roles', role).then(r => r.data);

/* ========== Métodos Usuarios ========== */

export const getUsers = () =>
  api.get<User[]>('/users').then(r => r.data);

export const createUser = (user: {
  nombres: string;
  apellidos: string;
  identificacion: string;
  correo: string;
  rolId: string;
}) => api.post<User>('/users', user).then(r => r.data);
