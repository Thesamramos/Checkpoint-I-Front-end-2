const btn = document.getElementById('btn')

btn.addEventListener('click', validar)

function validar(){
    var titulo = document.getElementById('titulo');
    var url = document.getElementById('url');
    var descrição = document.getElementById('descrição');

    // validar nome
    let msgTitulo = document.getElementById('msg-titulo');
    if (titulo.value == ''){
        msgTitulo.textContent = 'Insira o titulo';
        msgTitulo.style.display = 'block';
    }else if(titulo.value.length < 4){
        msgTitulo.textContent = 'O titulo deve conter no minimo 4 caracteres';
        msgTitulo.style.display = 'block'
    }else{
        msgTitulo.style.display = 'none'
    }

    // validar url
    let msgUrl = document.getElementById('msg-url');
    if (url.value == ''){
        msgUrl.textContent = 'Insira a url da imagem';
        msgUrl.style.display = 'block';
    } else {
        msgUrl.style.display = 'none';
    }

    // validar descrição

    let msgDescrição = document.getElementById('msg-descrição');
    if (descrição.value == ''){
        msgDescrição.textContent = 'Insira a descrição';
        msgDescrição.style.display = 'block';
    } else if(descrição.value.length < 4){
        msgDescrição.textContent = 'A descrição deve conter no minimo 4 caracteres';
        msgDescrição.style.display = 'block';
    }else {
        msgDescrição.style.display = 'none';
    }


}