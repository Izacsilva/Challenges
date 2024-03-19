
const numeroImagens = 9;
const chaveAcesso = '';

const requisicao = async () => {
  const imagens = [];

  for (let i = 0; i < numeroImagens; i++) {
    const resposta = await fetch('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: `Client-ID ${chaveAcesso}`
      }
    });

    const dados = await resposta.json();

    imagens.push({
      url: dados.urls.regular,
      titulo: dados.description,
      autor: dados.user.name
    });
  }


  const containerImagens = document.getElementById('imagens');
  for (const imagem of imagens) {
    const elementoImagem = document.createElement('div');
    elementoImagem.classList.add('imagem');
    elementoImagem.innerHTML = `
      <img src="${imagem.url}" alt="${imagem.titulo}" class="photo">
      <div class="legenda">
        <h2>${imagem.titulo}</h2>
        <br>
        <span>Foto por ${imagem.autor}</span>
      </div>
    `;

    containerImagens.appendChild(elementoImagem);
  }
};

requisicao();