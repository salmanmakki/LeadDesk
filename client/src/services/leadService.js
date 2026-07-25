import api from './api';

export async function createLead({ name, email, budget, message }) {
  const { data } = await api.post('/api/leads', { name, email, budget, message });
  return data.data.lead;
}

export async function getLeads({ search, status, page, limit } = {}) {
  const params = {};
  if (search) params.search = search;
  if (status) params.status = status;
  if (page) params.page = page;
  if (limit) params.limit = limit;
  const { data } = await api.get('/api/leads', { params });
  return data.data;
}

export async function updateLeadStatus(id, status) {
  const { data } = await api.patch(`/api/leads/${id}/status`, { status });
  return data.data.lead;
}

export async function getLeadStats() {
  const { data } = await api.get('/api/leads/stats');
  return data.data;
}
