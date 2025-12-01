# 🛒 Loja Virtual

Uma aplicação web completa de e-commerce desenvolvida com Node.js, Express, MySQL e frontend em HTML/CSS/JavaScript puro. Sistema totalmente funcional com carrinho de compras, gestão de pedidos e interface moderna.

![Status](https://img.shields.io/badge/status-ativo-success.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![MySQL](https://img.shields.io/badge/mysql-%3E%3D8.0-blue.svg)

## 📋 Índice

- [Características](#características)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando o Projeto](#executando-o-projeto)
- [API Endpoints](#api-endpoints)
- [Banco de Dados](#banco-de-dados)
- [Funcionalidades](#funcionalidades)
- [Capturas de Tela](#capturas-de-tela)
- [Deploy](#deploy)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## ✨ Características

- 🛍️ Catálogo de produtos com imagens e descrições
- 🛒 Carrinho de compras com localStorage
- 💳 Sistema de checkout e criação de pedidos
- 📦 Gestão de estoque automática
- 📊 Painel de pedidos realizados
- 🎨 Interface moderna e responsiva
- 🔄 API RESTful completa
- 💾 Transações seguras no banco de dados
- 📱 Design mobile-first

## 🚀 Tecnologias

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web minimalista
- **MySQL2** - Driver MySQL com suporte a Promises
- **CORS** - Middleware para requisições cross-origin

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com variáveis CSS
- **JavaScript (ES6+)** - Lógica client-side
- **LocalStorage API** - Persistência do carrinho

### Banco de Dados
- **MySQL** - Sistema de gerenciamento de banco de dados relacional

## 📁 Estrutura do Projeto

```
loja-virtual/
├── backend/
│   ├── config/
│   │   └── database.js          # Configuração do pool MySQL
│   ├── controllers/
│   │   ├── productController.js # Lógica de produtos
│   │   ├── orderController.js   # Lógica de pedidos
│   │   └── categoryController.js # Lógica de categorias
│   ├── models/
│   │   ├── Product.js           # Model de produto
│   │   └── Order.js             # Model de pedido
│   ├── routes/
│   │   ├── products.js          # Rotas de produtos
│   │   ├── orders.js            # Rotas de pedidos
│   │   └── categories.js        # Rotas de categorias
│   ├── scripts/
│   │   ├── initDatabase.js      # Criação das tabelas
│   │   └── seedDatabase.js      # População inicial
│   ├── server.js                # Servidor Express
│   └── package.json             # Dependências do backend
├── frontend/
│   ├── css/
│   │   ├── style.css            # Estilos globais
│   │   ├── home.css             # Estilos da home
│   │   ├── produto.css          # Estilos de produto
│   │   ├── carrinho.css         # Estilos do carrinho
│   │   ├── checkout.css         # Estilos do checkout
│   │   └── pedidos.css          # Estilos de pedidos
│   ├── js/
│   │   ├── api.js               # Comunicação com API
│   │   ├── app.js               # Lógica da home
│   │   ├── utils.js             # Funções do carrinho
│   │   ├── carrinho.js          # Lógica do carrinho
│   │   └── pedidos.js           # Lógica de pedidos
│   ├── assets/
│   │   ├── images/              # Imagens locais
│   │   └── icons/               # Ícones
│   ├── index.html               # Página inicial
│   ├── produto.html             # Detalhes do produto
│   ├── carrinho.html            # Página do carrinho
│   ├── checkout.html            # Finalização da compra
│   └── pedidos.html             # Histórico de pedidos
├── db/
│   └── schema.sql               # Schema SQL do banco
├── .env.example                 # Exemplo de variáveis de ambiente
└── README.md                    # Documentação
```

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v14 ou superior) - [Download](https://nodejs.org/)
- **MySQL** (v8.0 ou superior) - [Download](https://dev.mysql.com/downloads/)
- **npm** (vem com Node.js)

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd loja-virtual
```

### 2. Instale as dependências do backend

```bash
cd backend
npm install
```

### 3. Configure o MySQL

Inicie o MySQL e crie o banco de dados (o script `init-db` faz isso automaticamente):

```sql
-- Opcional: criar manualmente
CREATE DATABASE loja_virtual CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## ⚙️ Configuração

### Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` (ou defina as variáveis no terminal):

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_mysql
DB_NAME=loja_virtual
PORT=3000
```

**Windows PowerShell:**

```powershell
$env:DB_HOST="localhost"
$env:DB_USER="root"
$env:DB_PASSWORD="sua_senha"
$env:DB_NAME="loja_virtual"
$env:PORT="3000"
```

## 🎯 Executando o Projeto

### 1. Inicializar o Banco de Dados

Cria as tabelas necessárias:

```bash
cd backend
npm run init-db
```

### 2. Popular com Dados de Exemplo

Insere categorias e produtos de exemplo:

```bash
npm run seed
```

### 3. Iniciar o Servidor

**Modo desenvolvimento (com nodemon):**

```bash
npm run dev
```

**Modo produção:**

```bash
npm start
```

O servidor estará disponível em: **http://localhost:3000**

## 📡 API Endpoints

### Produtos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/produtos` | Lista todos os produtos ativos |
| GET | `/api/produtos/:id` | Busca produto por ID |
| GET | `/api/produtos/categoria/:categoriaId` | Produtos por categoria |

### Pedidos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/pedidos` | Cria novo pedido |
| GET | `/api/pedidos` | Lista todos os pedidos |
| GET | `/api/pedidos/:id/itens` | Lista itens de um pedido |

**Exemplo de requisição POST `/api/pedidos`:**

```json
{
  "cliente_nome": "João Silva",
  "cliente_email": "joao@email.com",
  "itens": [
    {
      "produto_id": 1,
      "quantidade": 2
    },
    {
      "produto_id": 3,
      "quantidade": 1
    }
  ]
}
```

### Categorias

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/categorias` | Lista todas as categorias |

## 🗄️ Banco de Dados

### Schema

O banco possui 4 tabelas principais:

#### `categorias`
- `id` (PK)
- `nome`
- `descricao`

#### `produtos`
- `id` (PK)
- `nome`
- `preco`
- `descricao`
- `imagem`
- `categoria_id` (FK)
- `estoque`
- `ativo`
- `data_criacao`

#### `pedidos`
- `id` (PK)
- `cliente_nome`
- `cliente_email`
- `total`
- `status` (pendente, pago, enviado, entregue)
- `data_criacao`

#### `itens_pedido`
- `id` (PK)
- `pedido_id` (FK)
- `produto_id` (FK)
- `quantidade`
- `preco_unitario`

### Relacionamentos

- `produtos.categoria_id` → `categorias.id`
- `itens_pedido.pedido_id` → `pedidos.id`
- `itens_pedido.produto_id` → `produtos.id`

## 🎨 Funcionalidades

### Frontend

- **Home (`index.html`)**
  - Grid responsivo de produtos
  - Botão "Adicionar ao Carrinho"
  - Link para detalhes do produto
  - Contador de itens no carrinho

- **Produto (`produto.html`)**
  - Imagem em destaque
  - Informações detalhadas
  - Seletor de quantidade
  - Verificação de estoque
  - Botão de compra

- **Carrinho (`carrinho.html`)**
  - Lista de produtos adicionados
  - Edição de quantidades
  - Remoção de itens
  - Cálculo de total
  - Botão finalizar compra

- **Checkout (`checkout.html`)**
  - Formulário de dados do cliente
  - Validação de campos
  - Criação do pedido
  - Atualização de estoque

- **Pedidos (`pedidos.html`)**
  - Histórico completo
  - Status visual (badges)
  - Detalhes dos itens
  - Valores e datas

### Backend

- ✅ Validação de estoque
- ✅ Transações de banco de dados
- ✅ Tratamento de erros
- ✅ Atualização automática de estoque
- ✅ Cálculo de totais
- ✅ CORS habilitado

## 📸 Capturas de Tela

*Adicione aqui prints da aplicação rodando*

## 🚢 Deploy

### Backend (VPS/Cloud)

1. Configure as variáveis de ambiente no servidor
2. Instale Node.js e MySQL
3. Clone o repositório
4. Execute `npm install` e `npm run init-db`
5. Inicie com `npm start` ou use PM2:

```bash
npm install -g pm2
pm2 start backend/server.js --name loja-virtual
pm2 startup
pm2 save
```

### Frontend

O frontend é servido automaticamente pelo Express. Para hospedar separadamente:

1. Faça upload da pasta `frontend/` para hospedagem estática
2. Atualize `API_BASE` em `js/api.js` com a URL da API

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Scripts Disponíveis

```bash
npm start        # Inicia o servidor em produção
npm run dev      # Inicia com nodemon (auto-reload)
npm run init-db  # Cria as tabelas do banco
npm run seed     # Popula o banco com dados de exemplo
```

## 🔐 Segurança

- ⚠️ Este é um projeto de demonstração
- ⚠️ Em produção, adicione autenticação e autorização
- ⚠️ Use HTTPS
- ⚠️ Sanitize inputs do usuário
- ⚠️ Implemente rate limiting
- ⚠️ Use prepared statements (já implementado com mysql2)

## 🐛 Solução de Problemas

**Erro: "Unknown database 'loja_virtual'"**
```bash
npm run init-db  # Cria o banco automaticamente
```

**Erro: "ECONNREFUSED"**
- Verifique se o MySQL está rodando
- Confirme as credenciais em `.env`

**Imagens não carregam**
- Verifique a conexão com internet (usamos Unsplash CDN)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ usando Node.js e MySQL**