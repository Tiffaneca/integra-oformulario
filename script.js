const form = document.getElementById('cadastroForm');
const msgSucesso = document.getElementById('mensagemSucesso');

function mostrarErro(idErro, texto) {
  document.getElementById(idErro).innerText = texto;
}

function limparErros() {
  const erros = document.getElementsByClassName('erro');
  for (let i = 0; i < erros.length; i++) {
    erros[i].innerText = '';
  }
}

form.addEventListener('submit', function(evento) {
  evento.preventDefault();

  limparErros();
  msgSucesso.hidden = true;

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;
  const confirma = document.getElementById('confirmaSenha').value;
  const perfil = document.getElementById('perfil').value;
  const termos = document.getElementById('termos').checked;

  let ok = true;

  if (nome === '') {
    mostrarErro('erroNome', 'Digite seu nome completo.');
    ok = false;
  }

  if (email === '') {
    mostrarErro('erroEmail', 'Digite seu e-mail.');
    ok = false;
  } else if (!email.includes('@') || !email.includes('.')) {
    mostrarErro('erroEmail', 'E-mail invalido.');
    ok = false;
  }

  if (senha.length < 6) {
    mostrarErro('erroSenha', 'A senha precisa ter pelo menos 6 caracteres.');
    ok = false;
  }

  if (senha !== confirma) {
    mostrarErro('erroConfirma', 'As senhas nao conferem.');
    ok = false;
  }

  if (perfil === '') {
    mostrarErro('erroPerfil', 'Escolha um perfil.');
    ok = false;
  }

  if (!termos) {
    mostrarErro('erroTermos', 'Voce precisa aceitar os termos.');
    ok = false;
  }

  if (!ok) {
    return;
  }

  document.getElementById('saidaNome').innerText = nome;
  document.getElementById('saidaEmail').innerText = email;
  document.getElementById('saidaPerfil').innerText = perfil;
  document.getElementById('saidaTermos').innerText = 'Aceitos';
  msgSucesso.hidden = false;

  form.reset();
});
