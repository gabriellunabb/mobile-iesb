const url = "http://localhost:3000/tarefas";

tratarFetch(fetch(url));

tratarFetch(fetch(`${url}/1a2b`));

// tratarFetch(
//   fetch(url, {
//     method: "POST",
//     body: JSON.stringify({ nome: "Praticar React Native", concluida: false }),
//   })
// );

tratarFetch(
  fetch(`${url}/c142`, {
    method: "PUT",
    body: JSON.stringify({ nome: "Revisar React", concluida: true }),
  })
);

tratarFetch(
  fetch(`${url}/c142`, {
    method: "PATCH",
    body: JSON.stringify({ concluida: false }),
  })
);

function tratarFetch(entrada) {
  entrada
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Errou!", error.message));
}
