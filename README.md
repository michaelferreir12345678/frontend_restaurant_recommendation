# M&L - Frontend

Este é o repositório do frontend do projeto **M&L**, uma aplicação web para avaliação e gerenciamento de restaurantes. O frontend foi desenvolvido utilizando tecnologias modernas e segue boas práticas de desenvolvimento.

## 🚀 Tecnologias Utilizadas

Aqui estão as principais tecnologias e bibliotecas utilizadas no desenvolvimento do frontend:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Material-UI (MUI)**: Biblioteca de componentes UI para React, seguindo o design system do Material Design.
- **React Router**: Para gerenciamento de rotas na aplicação.
- **Context API**: Para gerenciamento de estado global (como a lista de restaurantes).
- **Axios**: Para requisições HTTP à API backend.
- **Date-fns**: Para manipulação de datas.
- **Google Maps API**: Para integração com a API do Google Places e autocomplete de endereços.
- **React Places Autocomplete**: Para facilitar a integração com a API do Google Places.
- **ESLint e Prettier**: Para padronização e linting do código.
- **GitHub Actions**: Para CI/CD (Integração Contínua e Entrega Contínua).

## 📦 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

src/
├── components/ # Componentes reutilizáveis
│ ├── Header.js # Cabeçalho da aplicação
│ ├── Footer.js # Rodapé da aplicação
│ ├── RestaurantCard.js # Card de exibição de restaurantes
│ └── RestaurantForm.js # Formulário de adição/edição de restaurantes
├── pages/ # Páginas da aplicação
│ └── HomePage.js # Página inicial
├── services/ # Serviços de API
│ └── apiService.js # Funções para chamadas à API
├── context/ # Contextos globais
│ └── RestaurantContext.js # Contexto para gerenciar restaurantes
├── App.js # Componente principal da aplicação
├── index.js # Ponto de entrada da aplicação
└── styles/ # Estilos globais (se necessário)


## 🛠️ Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado (versão 16 ou superior).
- **Git**: Para clonar o repositório.

### Passos

1. **Clone o repositório**:
   ```
   git clone https://github.com/seu-usuario/mel-frontend.git
   cd mel-frontend

   Instale as dependências:



npm install
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

env

REACT_APP_GOOGLE_MAPS_API_KEY=sua_chave_da_api_google_maps
Inicie o servidor de desenvolvimento:

npm start
Acesse a aplicação:
Abra o navegador e acesse:


http://localhost:3000
🧪 Testes
Para executar os testes automatizados, utilize o comando:



npm test
🚀 CI/CD
O projeto utiliza GitHub Actions para integração contínua. Toda vez que um push é feito na branch main, os testes são executados automaticamente.

📝 Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

🤝 Contribuição
Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

Faça um fork do projeto.

Crie uma nova branch (git checkout -b feature/nova-feature).

Commit suas alterações (git commit -m 'Adiciona nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

👨‍💻 Autor
Seu Nome - GitHub | LinkedIn

📌 Exemplo de Uso
Adicionar um Restaurante
Clique no botão "+" no canto inferior direito.

Preencha o formulário com os detalhes do restaurante.

Clique em "Salvar".

Pesquisar Restaurantes
Clique no ícone de lupa no cabeçalho.

Digite o nome do restaurante na barra de pesquisa.

A lista de restaurantes será filtrada automaticamente.

Editar ou Excluir um Restaurante
Clique no ícone de três pontos no card do restaurante.

Escolha "Editar" para atualizar as informações ou "Excluir" para remover o restaurante.

📸 Capturas de Tela
Adicione aqui algumas capturas de tela da aplicação em funcionamento.

🔗 Links Úteis
Documentação do React

Documentação do Material-UI

Documentação do Google Maps API