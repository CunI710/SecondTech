import axios from 'axios';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // Очистить localStorage
      localStorage.removeItem('token');
      // Перенаправить на страницу входа
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
