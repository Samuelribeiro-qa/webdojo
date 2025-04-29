
# 📘 Documentação de Testes Automatizados – Webdojo

Este projeto contém os testes automatizados da aplicação **Webdojo** utilizando o framework [Cypress](https://www.cypress.io/).

---

## 🗂 Estrutura do Projeto

```
cypress/
├── e2e/                # Testes de ponta a ponta
├── fixtures/           # Dados mockados e arquivos de apoio (ex: JSON, PDF)
│   ├── cep.json
│   ├── consultancy.json
│   └── document2.pdf
├── support/            # Suporte aos testes
│   ├── actions/
│   │   └── consultancy.actions.js
│   ├── commands.js
│   ├── e2e.js
│   └── utils.js
```

---

## 🚀 Como Executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar a aplicação Webdojo (frontend)

```bash
npm run dev
```

A aplicação será disponibilizada em: `http://localhost:3000`

### 3. Executar os testes

#### 🧪 Todos os testes
```bash
npm run test
```

#### 🔐 Testes de login (resolução desktop)
```bash
npm run test:login
```

#### 📱 Testes de login (resolução mobile)
```bash
npm run test:login:mobile
```

---

## 🛠 Scripts Disponíveis

```json
"scripts": {
  "dev": "serve -s dist -p 3000",
  "test": "npx cypress run --config viewportWidth=1440,viewportHeight=900",
  "test:login": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1440,viewportHeight=900",
  "test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896"
}
```

---

## 📄 Fixtures

A pasta `fixtures` contém dados simulados e documentos utilizados nos testes, como:
- `cep.json`: Dados relacionados a CEPs.
- `consultancy.json`: Dados relacionados a consultorias.
- `document2.pdf`: Documento PDF utilizado em testes específicos.

---

## 📁 Suporte e Ações

- `support/commands.js`: Comandos personalizados para Cypress.
- `support/utils.js`: Funções utilitárias.
- `support/actions/consultancy.actions.js`: Ações específicas reutilizáveis para testes da área de consultoria.
