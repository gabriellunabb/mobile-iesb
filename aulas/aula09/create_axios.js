import axios from "axios";

const url = "http://localhost:3000/tarefas";

axios
  .get(url)
  .then((res) => console.log(res.data))
  .catch((err) => console.log("Errou!", err.message));

axios
  .post(url, { nome: "Dormir", concluida: false })
  .then((res) => console.log(res.data))
  .catch((err) => console.log("Errou!", err.message));

axios
  .put(`${url}/1a2b`, { nome: "Estudar API REST", concluida: false })
  .then((res) => console.log(res.data))
  .catch((err) => console.log("Errou!", err.message));

axios
  .patch(`${url}/1a2b`, { concluida: false })
  .then((res) => console.log(res.data))
  .catch((err) => console.log("Errou!", err.message));

axios
  .delete(`${url}/1a2b`)
  .then((res) => console.log(res.data))
  .catch((err) => console.log("Errou!", err.message));
