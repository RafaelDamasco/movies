# Movies React App

Uma aplicação React moderna para explorar filmes populares usando a API do The Movie Database (TMDB).
Projeto: https://movies-dusky-two.vercel.app/

## 🚀 Tecnologias

- **React 19** - Biblioteca principal de UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e development server
- **Tailwind CSS** - Framework de estilização
- **TanStack Router** - Gerenciamento de rotas
- **TanStack Query** - Gerenciamento de estado e cache de dados
- **Axios** - Cliente HTTP
- **Zustand** - Gerenciamento de estado global
- **Vitest** - Framework de testes
- **ESLint & Prettier** - Ferramentas de linting e formatação

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn
- Token de acesso da API do TMDB

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone <repository-url>
cd movies
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env-example .env
```

4. Configure seu token de acesso da API TMDB no arquivo `.env`:

```
VITE_TMDB_API_BASE_URL='https://api.themoviedb.org/3'
VITE_TMDB_API_ACCESS_TOKEN='seu_token_aqui'
```

## 🎬 Funcionalidades

- Lista de filmes populares com paginação
- Detalhes de filmes individuais
- Busca de filmes
- Interface responsiva
- Carregamento otimizado com cache

## 🚀 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build de produção
- `npm run test` - Executa os testes
- `npm run test:watch` - Executa testes em modo watch
- `npm run lint` - Executa linting
- `npm run format` - Formata o código
- `npm run format:check` - Verifica formatação

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes UI reutilizáveis
│   ├── genre-badge.tsx
│   ├── header.tsx
│   └── logo.tsx
├── lib/                # Utilitários e configurações
│   ├── axios.ts        # Configuração do Axios
│   └── utils.ts        # Funções utilitárias
├── pages/              # Páginas da aplicação
├── services/           # Serviços e chamadas de API
│   ├── movies.ts       # Serviços de filmes
│   └── search.ts       # Serviços de busca
└── App.tsx             # Componente principal
```

## 🧪 Testes

O projeto utiliza Vitest para testes. Para executar os testes:

```bash
npm run test
```

Para executar em modo watch:

```bash
npm run test:watch
```

## 📝 Licença

Este projeto é para fins educacionais.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, faça um fork do projeto e envie um pull request.

## 🔗 Links Úteis

- [Documentação TMDB API](https://developers.themoviedb.org/3)
- [Documentação React](https://react.dev/)
- [Documentação TanStack Query](https://tanstack.com/query/latest)
- [Documentação TanStack Router](https://tanstack.com/router/latest)
