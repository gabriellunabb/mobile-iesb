import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

function getTasks() {
  return axios.get(`${API_URL}/`).then((res) => res.data);
}

function addTask(task) {
  return axios.post(`${API_URL}/`, task).then((res) => res.data);
}

function updateTask(taskId, task) {
  return axios.put(`${API_URL}/${taskId}`, task).then((res) => res.data);
}

function deleteTask(taskId) {
  return axios.delete(`${API_URL}/${taskId}`).then((res) => res.data);
}

export { getTasks, addTask , updateTask, deleteTask };
