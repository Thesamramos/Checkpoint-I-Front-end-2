const form = document.querySelector('#form');
const tituloInput = document.querySelector('#titulo');
const urlInput = document.querySelector('#url');
const descricaoInput = document.querySelector('#descricao');
const tituloMsg = document.querySelector('.msg-titulo');
const urlMsg = document.querySelector('.msg-url');
const descricaoMsg = document.querySelector('.msg-descrição');
const btn = document.querySelector('#btn');
const formFields = document.querySelectorAll('.input');

//habilitar e desabilitar o botão
let formIsValid = false;

  formFields.forEach(field => {
    field.addEventListener('input', () => {
      formIsValid = true;

      formFields.forEach(field => {
        if (field.value === '') {
          formIsValid = false;
        }
      });

      if (formIsValid) {
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
    });
  });

form.addEventListener('submit', function(event) {
  // Verificar se o campo de título está vazio
  if (tituloInput.value.trim() === '') {
    event.preventDefault(); 
    tituloMsg.innerText = 'Por favor, preencha o título.';
  }else if(tituloInput.value.length < 4){
    event.preventDefault(); 
    tituloMsg.innerText = 'O titulo deve conter pelo menos 4 caracteres.';
  } else {
    tituloMsg.innerText = '';
  }

  // Verificar se o campo de url está vazio ou não é uma URL válida
  if (urlInput.value.trim() === '' || !isValidUrl(urlInput.value)) {
    event.preventDefault();
    urlMsg.innerText = 'Por favor, forneça uma URL válida.';
  } else {
    urlMsg.innerText = '';
  }

  // Verificar se o campo de descrição está vazio
  if (descricaoInput.value.trim() === '') {
    event.preventDefault();
    descricaoMsg.innerText = 'Por favor, preencha a descrição.';
  }else if (descricaoInput.value.length < 4){
    event.preventDefault();
    descricaoMsg.innerText = 'A descrição deve conter pelo menos 4 caracteres.';
  } else {
    descricaoMsg.innerText = '';
  }
});

// Função auxiliar para verificar se uma string é uma URL válida
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}
