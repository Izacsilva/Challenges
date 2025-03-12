const desafios = [
    { nome: "Desafio 1: Google Page", caminho: "./Challenge-01_Google page/index.html" },
    { nome: "Desafio 3: Resultados", caminho: "./Challenge-03_results-summary/index.html" },
    { nome: "Desafio 4: Landing Page", caminho: "./Challenge-04_landing-page/index.html" },
    { nome: "Desafio 5: NFT Card", caminho: "./Challenge-05_nft-card/index.html" },
    { nome: "Desafio 6: Preview de Produtos", caminho: "./Challenge-06_card-product-preview/index.html" },
    { nome: "Desafio 7: Landing page completa", caminho: "./Challenge-07_huddle-landing-page-full/index.html" },
    { nome: "Desafio 8: Card de preço", caminho: "./Challenge-08_single-price-grid/index.html" },
    { nome: "Desafio 9: Social Proof", caminho: "./Challenge-09_social-proof/index.html" },
    { nome: "Desafio 10: Profile Component", caminho: "./Challenge-10_profile-component/index.html" },
    { nome: "Desafio 11: Componentes com Form", caminho: "./Challenge-11_component-with-form/index.html" },
    { nome: "Desafio 12: Fotoblog", caminho: "./Challenge-12_Fotoblog/index.html" },
    { nome: "Desafio 13: Fotoblog", caminho: "./Challenge-13_three-column-card/index.html" }
];

// Função para gerar links dinâmicos
function gerarLinksDesafios(elementoId) {
    const listaDesafios = document.getElementById(elementoId);
    
    if (listaDesafios) {
        desafios.forEach(desafio => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${desafio.caminho}">${desafio.nome}</a>`;
            listaDesafios.appendChild(li);
        });
    }
}

// Função para obter o caminho atual
function obterCaminhoAtual() {
    return window.location.pathname;
}

// Função para filtrar o desafio atual da lista
function gerarLinksDesafiosSemAtual(elementoId) {
    const caminhoAtual = obterCaminhoAtual();
    const listaDesafios = document.getElementById(elementoId);
    
    if (listaDesafios) {
        desafios.forEach(desafio => {
            // Verifica se o caminho do desafio não está contido no caminho atual
            if (!caminhoAtual.includes(desafio.caminho.replace('.', ''))) {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${desafio.caminho}">${desafio.nome}</a>`;
                listaDesafios.appendChild(li);
            }
        });
    }
}