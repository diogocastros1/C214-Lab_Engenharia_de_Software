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

### Scriptis adicionados
~~~bash
"scripts": {
    "start": "ts-node src/index.js",
    "start:prod": "npm run build && node dist/index.js",
    "build": "tsc"
  },
~~~
