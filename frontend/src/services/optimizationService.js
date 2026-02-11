import api from './api';

export const analyzeAndOptimize = (data) => api.post('/analyze-and-optimize', data);