var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "phpmyadmin",
  database: "polarisdb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT nome, senha FROM user", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


var usuariosDB = [
    { usuario: "32493282000", senha: "1234" },
    { usuario: "27948535039", senha: "4321" },
    { usuario: "30632214066", senha: "5678" },
    { usuario: "29715601049", senha: "8675" },
];

var usuarioValidar;
var senhaValidar;

function validarLogin(event) {
    event.preventDefault();

    usuarioValidar = document.getElementById("usuarioInput").value;
    senhaValidar = document.getElementById("senhaInput").value;

    let usuarioAchado = usuariosDB.find(user => user.usuario === usuarioValidar)
    let senhaAchada = usuariosDB.find(password => password.senha === senhaValidar)

    console.log(usuarioAchado)

    if (usuarioAchado == undefined && senhaAchada == undefined) {
        console.log("usuario ou senha deu ruim")
        window.alert("Usuário ou senha incorretos.")
    } else if (usuarioAchado == undefined) {
        console.log("usuario deu ruim")
        window.alert("Usuário ou senha incorretos.")
    } else if (senhaAchada == undefined) {
        console.log("senha deu ruim")
        window.alert("Usuário ou senha incorretos.")
    } else {
        console.log("deu bom")
        window.alert("Login correto. Redirecionando para a página inicial.")
        window.location.assign("./index.html")
    }
}