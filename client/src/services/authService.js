import api from './api';

export async function login(email, password) {
  const { data } = await api.post('/api/auth/login', { email, password });
  return data.data.user;
}

export async function logout() {
  await api.post('/api/auth/logout');
}

export async function getMe() {
  const { data } = await api.get('/api/auth/me');
  return data.data.user;
}
