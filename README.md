# Paw House

Site demonstrativo de um pet shop, desenvolvido como projeto de aprendizado e portfólio.

O projeto utiliza HTML, CSS e JavaScript puros e será ampliado gradualmente até se tornar uma aplicação web completa, com carrinho, backend e banco de dados.

## Versão atual

**V0.3 — Menu mobile e interações com JavaScript**

Nesta versão, o site recebeu suas primeiras funcionalidades com JavaScript: menu mobile acessível, indicação da seção ativa, busca, filtros e detalhes expansíveis de produtos. Os produtos ainda estão escritos diretamente no HTML e não existem carrinho, autenticação, banco de dados ou envio real de formulários.

## Funcionalidades

- Header com navegação interna;
- Hero com chamadas para ação;
- Grade responsiva de produtos;
- Cards de serviços e benefícios;
- Seção institucional Sobre nós;
- Informações de contato;
- Footer com navegação secundária;
- Link para voltar ao topo;
- Estados de hover e foco;
- Layout adaptado para desktop, tablet e celular;
- Imagens próprias na hero e nos produtos;
- Cards de produtos com interação visual;
- Cards de serviços com destaque por mouse e teclado;
- Valores institucionais com composição escalonada;
- Dados de contato organizados com CSS Grid;
- Suporte à preferência por movimento reduzido;
- Menu mobile controlado por JavaScript e acessível por teclado;
- Fechamento do menu com a tecla `Escape`;
- Destaque automático da seção ativa na navegação;
- Busca de produtos em tempo real, sem distinção entre acentos ou maiúsculas;
- Filtros de produtos por categoria;
- Contagem de resultados da busca;
- Detalhes expansíveis nos cards de produtos;
- Estados acessíveis com `aria-expanded`, `aria-pressed` e `aria-live`.

## Tecnologias

- HTML5;
- CSS3;
- JavaScript puro para eventos e manipulação do DOM;
- Git e GitHub para controle de versão.

O projeto não utiliza frameworks, bibliotecas ou dependências externas nesta etapa.

## Estrutura do projeto

```text
petshop/
├── index.html
├── README.md
├── assets/
│   ├── icons/
│   └── images/
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Como executar

Não é necessário instalar dependências.

1. Baixe ou copie a pasta do projeto.
2. Abra a pasta `petshop` no VS Code.
3. Abra o arquivo `index.html` no Chrome, Edge ou outro navegador moderno.

Também é possível abrir o arquivo diretamente pelo terminal do VS Code:

```powershell
start index.html
```

O caminho do arquivo aberto deve terminar em:

```text
petshop/index.html
```

## Conceitos praticados

- HTML semântico;
- Hierarquia de títulos;
- Links internos e IDs;
- Variáveis CSS;
- Box model;
- Flexbox;
- CSS Grid;
- `calc()`, `clamp()` e `minmax()`;
- Media queries;
- Design responsivo;
- Pseudoclasses e pseudoelementos;
- Estados de hover e foco;
- Noções iniciais de acessibilidade;
- `aspect-ratio` e `object-fit`;
- Carregamento adiado de imagens com `loading="lazy"`;
- Propriedades lógicas do CSS;
- Áreas nomeadas do CSS Grid;
- `:nth-child()` e `:focus-within`;
- `prefers-reduced-motion`;
- Variáveis, constantes e funções em JavaScript;
- Arrays e métodos `forEach()` e `filter()`;
- Seleção de elementos com `querySelector()` e `querySelectorAll()`;
- Eventos com `addEventListener()`;
- Manipulação de classes, atributos e conteúdo do DOM;
- Atributos personalizados com `data-*` e acesso por `dataset`;
- Delegação de eventos com `closest()`;
- Observação de seções com `IntersectionObserver`;
- Normalização de texto para busca;
- Estados ARIA e melhoria progressiva.

## Identidade visual

A Paw House utiliza tons de verde, branco e laranja para transmitir confiança, cuidado, limpeza e proximidade. O design busca uma aparência profissional sem utilizar elementos excessivamente infantis.

## Dados demonstrativos

A Paw House é uma empresa fictícia criada para este projeto. E-mail, telefone, endereço, preços, produtos e serviços são apenas exemplos.

O endereço de e-mail usa o domínio reservado `.example` e não recebe mensagens reais.

## Roadmap

- [x] V0.1 — Estrutura institucional e conteúdo estático;
- [x] V0.2 — Refinamento visual, tipografia, imagens e responsividade avançada;
- [x] V0.3 — Menu mobile e interações com JavaScript;
- [ ] V0.4 — Produtos renderizados dinamicamente;
- [ ] V0.5 — Carrinho no frontend;
- [ ] V0.6 — Persistência com `localStorage`;
- [ ] V0.7 — Página ou modal de produto;
- [ ] V0.8 — API com Node.js e Express;
- [ ] V0.9 — Banco de dados;
- [ ] V1.0 — Cadastro e autenticação de usuários;
- [ ] V1.1 — Painel administrativo;
- [ ] V1.2 — Sistema de pedidos.

## Próximos passos

1. Iniciar a V0.4;
2. Representar os produtos com um array de objetos;
3. Renderizar os cards dinamicamente com JavaScript;
4. Adaptar busca, filtros e detalhes à nova fonte de dados.

## Status

V0.3 concluída. Projeto em desenvolvimento para fins educacionais e de portfólio.
