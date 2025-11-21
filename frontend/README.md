# 📇 Sistema de Contatos

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Sistema fullstack para gerenciamento de contatos, desenvolvido com foco em simplicidade e boas práticas.

[Sobre](#-sobre-o-projeto) • [Tecnologias](#-tecnologias) • [Instalação](#-instalação) • [Como Usar](#-como-usar) • [Estrutura](#-estrutura-do-projeto) • [API](#-api-endpoints) • [Contato](#-contato)

</div>

---

## 📋 Sobre o Projeto

Sistema completo de gerenciamento de contatos que permite cadastrar, listar e deletar contatos de forma simples e intuitiva. Projeto desenvolvido para demonstrar habilidades fullstack com tecnologias modernas.

### ✨ Funcionalidades

- ✅ Cadastro de contatos (nome e telefone)
- ✅ Listagem de todos os contatos em tempo real
- ✅ Exclusão de contatos
- ✅ Interface responsiva e moderna
- ✅ API RESTful
- ✅ Validação de dados

---

## 🚀 Tecnologias

### Backend
- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework web minimalista
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **Cors** - Middleware para habilitar CORS
- **Dotenv** - Gerenciamento de variáveis de ambiente

### Frontend
- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização e layout responsivo
- **JavaScript (Vanilla)** - Lógica e interação com API

---

## 💻 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [MongoDB](https://www.mongodb.com/) (local) ou conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (gratuito)
- [Git](https://git-scm.com/)
- Editor de código (recomendo [VS Code](https://code.visualstudio.com/))

---

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/riquelme.dev/sistema-contatos.git
cd sistema-contatos
```

### 2. Configure o Backend

```bash
# Entre na pasta do backend
cd backend

# Instale as dependências
npm install
```

### 3. Configure as Variáveis de Ambiente

Crie um arquivo `.env` dentro da pasta `backend/`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/contatos
```

**Para MongoDB Atlas (Cloud):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/contatos?retryWrites=true&w=majority
```

> ⚠️ **Importante:** Substitua `usuario` e `senha` pelas suas credenciais do MongoDB Atlas

### 4. Inicie o MongoDB

**MongoDB Local:**
```bash
mongod
```

**MongoDB Atlas:** Não é necessário, já está na nuvem!

---

## ▶️ Como Usar

### Iniciar o Backend

```bash
# Na pasta backend/
npm start
```

Ou para desenvolvimento com auto-reload:
```bash
npm run dev
```

O servidor estará rodando em: `http://localhost:5000`

### Abrir o Frontend

Abra o arquivo `frontend/index.html` diretamente no navegador ou use o Live Server do VS Code.

**Pronto!** O sistema já está funcionando! 🎉

---

## 📁 Estrutura do Projeto

```
sistema-contatos/
├── backend/
│   ├── node_modules/       # Dependências do Node.js
│   ├── .env                # Variáveis de ambiente (não versionar!)
│   ├── .env.example        # Exemplo de variáveis de ambiente
│   ├── server.js           # Servidor Express e rotas da API
│   └── package.json        # Dependências e scripts
│
├── frontend/
│   ├── index.html          # Estrutura HTML da aplicação
│   ├── style.css           # Estilos CSS personalizados
│   └── script.js           # Lógica JavaScript e requisições à API
│
├── .gitignore              # Arquivos ignorados pelo Git
└── README.md               # Documentação do projeto
```

---

## 🔌 API Endpoints

Base URL: `http://localhost:5000/api`

### Listar todos os contatos
```http
GET /contatos
```

**Resposta de Sucesso (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "nome": "João Silva",
    "telefone": "(11) 98765-4321",
    "createdAt": "2024-11-20T10:30:00.000Z",
    "updatedAt": "2024-11-20T10:30:00.000Z"
  }
]
```

### Criar novo contato
```http
POST /contatos
Content-Type: application/json

{
  "nome": "Maria Santos",
  "telefone": "(21) 99999-8888"
}
```

**Resposta de Sucesso (201):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "nome": "Maria Santos",
  "telefone": "(21) 99999-8888",
  "createdAt": "2024-11-20T10:35:00.000Z",
  "updatedAt": "2024-11-20T10:35:00.000Z"
}
```

### Deletar contato
```http
DELETE /contatos/:id
```

**Resposta de Sucesso (200):**
```json
{
  "message": "Contato deletado com sucesso"
}
```

---

## 🎨 Preview do Sistema

### Interface Principal
![Sistema de Contatos](/frontend/src/image.png)

> 💡 **Dica:** Adicione screenshots reais do seu projeto aqui

---

## 🛠️ Funcionalidades Futuras

- [ ] Edição de contatos
- [ ] Busca/filtro de contatos
- [ ] Paginação da lista
- [ ] Categorização de contatos
- [ ] Exportar contatos (CSV/PDF)
- [ ] Autenticação de usuários
- [ ] Dark mode

---

## 🐛 Problemas Conhecidos

Nenhum problema conhecido no momento. Se encontrar algum bug, por favor [abra uma issue](https://github.com/riquelme.dev/sistema-contatos/issues).

---

## 📚 Aprendizados

Este projeto foi desenvolvido para praticar e demonstrar conhecimentos em:

- ✅ Desenvolvimento de APIs RESTful
- ✅ Integração Frontend-Backend
- ✅ Manipulação de banco de dados NoSQL
- ✅ Operações CRUD completas
- ✅ Async/Await e Promises
- ✅ Tratamento de erros
- ✅ Organização de código

---

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Se você quer contribuir com o projeto:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova feature incrível'`)
4. Push para a Branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Contato

**Riquelme** - [@riquelme.dev](https://github.com/riquelme.dev)

Link do Projeto: [https://github.com/riquelme.dev/sistema-contatos](https://github.com/riquelme.dev/sistema-contatos)

---

<div align="center">

### 💙 Se este projeto te ajudou, deixe uma ⭐

**Desenvolvido com 💜 por [Riquelme](https://github.com/riquelme.dev)**

</div>