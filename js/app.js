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
  if (tituloInput.value.trim() === '' || tituloInput == null) {
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
  if (descricaoInput.value.trim() === '' || descricaoInput == null) {
    event.preventDefault();
    descricaoMsg.innerText = 'Por favor, preencha a descrição.';
  }else if (descricaoInput.value.length < 4){
    event.preventDefault();
    descricaoMsg.innerText = 'A descrição deve conter pelo menos 4 caracteres.';
  } else if(descricaoInput.value.length > 350){
    event.preventDefault();
    descricaoMsg.innerText = 'A descrição deve ter no maximo 350 caracteres.';
  } else {
    descricaoMsg.innerText = '';
  } 
});

btn.addEventListener('click', (event) => {
  
  if(descricaoInput.value.trim() !== '' && descricaoInput !== null && descricaoInput.value.length <= 350&& tituloInput.value.trim() !== '' && tituloInput !== null && descricaoInput.value.length >= 4 && tituloInput.value.length >= 4 && urlInput.value.trim() !== ''){
  event.preventDefault();
    // cria a div do novo card
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  // adiciona os elementos do cabeçalho do card
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  const cardImage = document.createElement('img');
  cardImage.classList.add('card-image');
  cardHeader.appendChild(cardImage);
  newCard.appendChild(cardHeader);

  // adiciona os elementos do corpo do card
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const cardName = document.createElement('h2');
  cardName.classList.add('card-name');
  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardBody.appendChild(cardName);
  cardBody.appendChild(cardText);
  newCard.appendChild(cardBody);

  // adiciona a seta para cima
  const arrow = document.createElement('div');
  arrow.classList.add('arrow');
  const arrowSpan = document.createElement('span');
  arrowSpan.innerHTML = '&#8673;';
  arrow.appendChild(arrowSpan);
  newCard.appendChild(arrow);

  // adiciona as informações do formulário ao novo card
  cardImage.setAttribute('src', urlInput.value);
  cardName.innerHTML = tituloInput.value;
  cardText.innerHTML = descricaoInput.value;

  // adiciona o novo card ao container
  container.appendChild(newCard);

  // limpa o formulário
  form.reset();
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
