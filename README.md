<<<<<<< HEAD
# 📡 Streaming Server

Este projeto é um servidor de streaming de lives e câmeras, desenvolvido com **Node.js**, utilizando **Express** para a API REST, **PostgreSQL** com **Prisma ORM** para gerenciamento do banco de dados e **FFMpeg** para manipulação e transmissão dos vídeos. O frontend foi desenvolvido em **Next.js** para fornecer uma interface moderna e responsiva.

## 🚀 Tecnologias Utilizadas

### Backend:

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework para criação da API REST
- **PostgreSQL** - Banco de dados relacional
- **Prisma ORM** - ORM para facilitar a interação com o banco de dados
- **FFMpeg** - Biblioteca para manipulação de vídeo e streaming

### Frontend:

- **Next.js** - Framework para aplicações React

## 📂 Estrutura do Projeto

```
project-root/
│── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── prisma/
│   │   ├── utils/
│   │   ├── index.js
│   ├── package.json
│   ├── .env
│── frontend/
│   ├── pages/
│   ├── components/
│   ├── styles/
│   ├── package.json
│── README.md
```

## ⚙️ Configuração e Instalação

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Configuração do Backend

#### Instale as dependências

```bash
cd backend
npm install
```

#### Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do backend e adicione as configurações necessárias:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
PORT=5000
```

#### Execute as migrações do banco de dados

```bash
npx prisma migrate dev
```

#### Inicie o servidor

```bash
npm start
```

O servidor será iniciado em `http://localhost:5000`

### 3️⃣ Configuração do Frontend

#### Instale as dependências

```bash
cd ../frontend
npm install
```

#### Inicie o frontend

```bash
npm run dev
```

O frontend será iniciado em `http://localhost:3000`

## 🎯 Funcionalidades

- 📹 Transmissão de vídeo em tempo real
- 📡 Streaming de câmeras via FFMpeg
- 🔄 Gerenciamento de usuários e permissões
- ⚡ API REST para interação com os dados

## 🔧 Endpoints Principais

### 🎥 Streams

- `GET /streams` - Lista todas as transmissões ativas
- `POST /streams` - Cria uma nova transmissão
- `DELETE /streams/:id` - Encerra uma transmissão

### 👤 Usuários

- `POST /users` - Criação de usuário
- `POST /auth/login` - Autenticação de usuário
- `GET /users/:id` - Detalhes do usuário

## 📜 Licença

Este projeto está licenciado sob a licença **MIT**.

🚀 Desenvolvido com 💙 e código!