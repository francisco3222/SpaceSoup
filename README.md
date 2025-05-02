# 🚀 Space Soup

**Space Soup** é um site interativo e educativo sobre **curiosidades espaciais**, incluindo informações sobre **planetas raros**, **estrelas exóticas**, **buracos negros**, e outros fenómenos do nosso universo. Com integração de múltiplas APIs — incluindo o poderoso **ChatGPT** — a aplicação oferece uma experiência dinâmica, informativa e envolvente.

---

## 🌌 Funcionalidades

- 🔭 Descobre curiosidades espaciais raras e incríveis
- 🪐 Explora dados sobre planetas, estrelas e buracos negros
- 💬 Interage com a API do ChatGPT para perguntas sobre o universo
- 📩 Sistema de feedback por email integrado
- 🔧 Estrutura modular com diversas APIs próprias

---

## 🛠️ Tecnologias Utilizadas

### Linguagens:
- ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
- ![EJS](https://img.shields.io/badge/EJS-FFB13B?style=flat&logo=javascript)

### Back-End:
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
- Express.js
- MongoDB com Mongoose

### APIs:
- ChatGPT (OpenAI)
- API de feedback por email (Nodemailer / serviço externo)

---

## 🧠 Como funciona?

1. O front-end é servido com **EJS templates**, estilizado com **CSS puro**.
2. O back-end utiliza **Node.js com Express.js**, criando rotas dinâmicas e endpoints para comunicação com a base de dados.
3. A **MongoDB** armazena informações relevantes e os feedbacks enviados pelos utilizadores.
4. A **API do ChatGPT** responde a perguntas feitas pelos utilizadores sobre o cosmos.
5. Um sistema de envio de **feedback por email** direciona comentários diretamente aos developers do projeto.

---

## 📦 Instalação local

```bash
git clone https://github.com/francisco3222/SpaceSoup.git
cd space-soup
npm install
