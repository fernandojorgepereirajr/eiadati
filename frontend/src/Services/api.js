import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://localhost:8081/',
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("auth_token")
  },
  withCredentials: true
});

Api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 && error.response.data.error !== "Senha inválida" && error.response.data !== "Usuário já em uso em outro dispositivo") {
      localStorage.setItem("isAuthenticated", false);
      window.location.href = "/login";
    }
    console.warn(error.response);
    return Promise.reject(error);
  }
)

export default Api;