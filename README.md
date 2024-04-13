[![CI-CD](https://github.com/diogocastros1/C214-TodoList/actions/workflows/cicd.yml/badge.svg)](https://github.com/diogocastros1/C214-TodoList/actions/workflows/cicd.yml)

# C214-Lab | Engenharia de Software

## 🛠️ Ferramentas utilizadas

- Node
- ESLint
- Husky

---

### Instalação das dependencias

- TypeScript.
~~~bash
npm install -D typescript
~~~

- Ferramenta para auxiliar nas sugestões de auto complete.
~~~bash
npm install -D @types/node
~~~

- Ferramenta que permite a utilização do TypeScript em ambiente de desenvolvimento.
~~~bash
npm install -D ts-node-dev
~~~

- Ferramenta que auxilia na qualidade do código.
~~~bash
npm i -D husky
~~~

- Instalação do ESLint
~~~bash
npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-standard
~~~

- Jest - Framework de teste 
~~~bash
npm install -D jest ts-jest @types/jest
~~~

### Scriptis adicionados
~~~bash
"scripts": {
    "start": "ts-node src/index.js",
    "start:prod": "npm run build && node dist/index.js",
    "build": "tsc"
  }
~~~


---
## Testes Mock

### Injeção de dependências

Fazer o teste dependa de uma interface controlada e nao externa.
