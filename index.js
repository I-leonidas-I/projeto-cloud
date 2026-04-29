const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Página Inicial</h1><p>Bem-vindo ao meu projeto!</p><a href="/sobre">Sobre</a> | <a href="/contato">Contato</a>');
});

app.get('/sobre', (req, res) => {
  res.send('<h1>Sobre</h1><p>Este é meu projeto de Cloud Computing.</p><a href="/">Voltar</a>');
});

app.get('/contato', (req, res) => {
  res.send('<h1>Contato</h1><p>Email: aluno@email.com</p><a href="/">Voltar</a>');
});

app.listen(PORT, () => {
  console.log('Servidor rodando na porta ' + PORT);
});