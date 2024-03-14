const chaveAcesso = 'QbfL0xORtS2WRXzDKq_imw6xMpMiKp-o2bPlVchQi80';

const requisicao = async () => {
  const resposta = await fetch('https://api.unsplash.com/photos/random', { // O valor é retornado para a variável response
    headers: {
      Authorization: `Client-ID ${chaveAcesso}`
    }
  });

  const dados = await resposta.json();

  const imagem = dados.urls.regular;
  const titulo = dados.description;
  const autor = dados.user.name;

  document.getElementById('imagem').innerHTML = `<img src="${imagem}" alt="${titulo}">`;
  document.getElementById('titulo').textContent = titulo;
  document.getElementById('autor').textContent = `Foto por ${autor}`;
};

requisicao();

// const numeroImagens = 9;
// const chaveAcesso = 'QbfL0xORtS2WRXzDKq_imw6xMpMiKp-o2bPlVchQi80';

// const requisicao = async () => {
//   const imagens = [];

//   for (let i = 0; i < numeroImagens; i++) {
//     const resposta = await fetch('https://api.unsplash.com/photos/random', {
//       headers: {
//         Authorization: `Client-ID ${chaveAcesso}`
//       }
//     });

//     const dados = await resposta.json();

//     imagens.push({
//       url: dados.urls.regular,
//       titulo: dados.description,
//       autor: dados.user.name
//     });
//   }

//   // Criação do grid de imagens
//   const containerImagens = document.getElementById('imagens');
//   for (const imagem of imagens) {
//     const elementoImagem = document.createElement('div');
//     elementoImagem.classList.add('imagem');
//     elementoImagem.innerHTML = `
//       <img src="${imagem.url}" alt="${imagem.titulo}">
//       <div class="legenda">
//         ${imagem.titulo}
//         <br>
//         Foto por ${imagem.autor}
//       </div>
//     `;

//     containerImagens.appendChild(elementoImagem);
//   }
// };

// requisicao();