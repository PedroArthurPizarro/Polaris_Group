const express = require('express');
const path = require('path');  // Necessário para manipulação de caminhos
const app = express();
const port = 3000; // Porta em que o servidor será executado


// Rota para exibir a página index.html
app.get('/', (req, res) => {
res.sendFile(__dirname + '/view/index.html');
});

// Rota para exibir a página login.html
app.get('/login.html', (req, res) => {
res.sendFile(__dirname + '/view/login.html');
});

// Rota para exibir a página cadastro.html
app.get('/cadastro.html', (req, res) => {
res.sendFile(__dirname + '/view/cadastro.html');
});

// Rota para exibir a página consulta.html
app.get('/consulta.html', (req, res) => {
res.sendFile(__dirname + '/view/consulta.html');
});

// Rota para exibir a página sobre.html
app.get('/sobre.html', (req, res) => {
res.sendFile(__dirname + '/view/sobre.html');
});


// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});
