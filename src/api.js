import axios from 'axios';
const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000/api';
export const getSummary = () => axios.get(`${BASE}/summary`).then(r=>r.data);
export const getDetails = () => axios.get(`${BASE}/details`).then(r=>r.data);
export const getHistory = (days=14) => axios.get(`${BASE}/history?days=${days}`).then(r=>r.data);
export const simulateScan = (teacher) => axios.post(`${BASE}/simulate-scan?teacher=${teacher}`).then(r=>r.data);
