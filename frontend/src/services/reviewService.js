import api from './api';

export const submitCode = (data) => api.post('/submit', data);