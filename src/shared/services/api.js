// src/shared/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // 后端地址
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器（后续用于注入 JWT Token）
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
