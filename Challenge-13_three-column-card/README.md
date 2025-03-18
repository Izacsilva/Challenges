# Frontend Mentor - Componente de cartão de 3 colunas

![Visualização do design do componente de cartão de 3 colunas](./design/desktop-preview.jpg)

## Sobre o projeto

Esta é minha solução para o desafio do [Componente de cartão de 3 colunas no Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-).

O objetivo foi criar um componente de cartão de visualização responsivo com 3 colunas, seguindo fielmente o design fornecido.

## O desafio

Os usuários devem ser capazes de:

- Visualizar o layout ideal dependendo do tamanho da tela do dispositivo
- Ver estados de hover para elementos interativos (botões)

## Captura de tela

![Screenshot do projeto](./design/desktop-preview.jpg)

## Links

- URL da solução: [GitHub](https://github.com/Izacsilva/Challenge-13_three-column-card)
- URL do site ao vivo: [Adicionar live site URL aqui quando disponível]

## Construído com

- HTML5 semântico
- Propriedades CSS customizadas (variáveis)
- Flexbox
- Mobile-first workflow
- Design responsivo

## O que aprendi

Neste projeto, pude aprimorar minhas habilidades em:

- Uso de variáveis CSS para manter consistência visual
- Aplicação de estados hover com transições suaves
- Criação de layouts responsivos usando flexbox
- Utilização de seletores CSS mais avançados como `:first-child`, `:nth-child` e `:last-child`
- Implementação de design com bordas arredondadas adaptativas para diferentes tamanhos de tela

Exemplo de código CSS que demonstra o uso de variáveis e seletores avançados:

```css
:root {
  --bright-orange: hsl(31, 77%, 52%);
  --dark-cyan: hsl(184, 100%, 22%);
  --very-dark-cyan: hsl(179, 100%, 13%);
  --ligth-gray: hsl(0, 0%, 95%);
  --transparent-white: hsla(0, 0%, 100%, 0.75);
}

.card:first-child {
  background: var(--bright-orange);
  border-radius: 1.6rem 0 0 1.6rem;
}
```

## Autor

- GitHub - [Izacsilva](https://github.com/Izacsilva)
- Frontend Mentor - [@Izacsilva](https://www.frontendmentor.io/profile/Izacsilva)
