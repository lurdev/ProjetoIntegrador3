// Login
const formLogin = document.getElementById("loginForm");

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  // Faça o que quiser com os valores (por exemplo, exiba no console)
  console.log("E-mail:", email);
  console.log("Senha:", senha);

  const jsonLogin = { email: email, tipo: senha };
});
