# Página EBAC Tech Talks

Página que apresenta uma contagem regressiva para um evento. Foi desenvolvida em **HTML**, **CSS** e **JavaScript** e **Bootstrap Icons**.
Desenvolvimento do projeto focado em performance com uso do pré-processador de CSS **SASS** e também do **Parcel** como empacotador da aplicação.

Este projeto foi realizado com a aplicação da **Metodologia BEM** em toda sua estrutura, buscando aplicar as melhores práticas de programação para desenvolvimento web.

Projeto desenvolvido no curso de Full Stack Python da EBAC - Escola Britânica de Artes Criativas e Tecnologia.

## 🚀 Começando

Estas instruções permitirão que você obtenha uma cópia do projeto em execução em sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js**
- **npm (geralmente vem com o Node.js)**

### Instalação

Siga estas etapas a seguir para configurar o ambiente de desenvolvimento:

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório clonado.
3. Execute o seguinte comando para instalar as dependências:

  **``npm install``**

* Caso encontre algum erro no momento da execução do projeto, experimente excluir a pasta node_modules assim como o arquivo package-lock.json,
e então rodar o comando **npm install** novamente.

### Executar o projeto

Para executar o projeto, execute o comando:

  **``npm start``**

No arquivo package.json, em scripts, é possível designar os comandos desejados para execução do projeto em ambiente de desenvolvimento e produção.

    "scripts": {
        "dev": "parcel src/index.html src/styles/main.scss src/scripts/main.js",
        "build": "parcel build src/index.html",
    }

Para ambiente de desenvolvimento, utilizamos o comando dev, que vai subir nossos arquivos no servidor http://localhost:1234:
 
  **``npm run dev``**

Para ambiente de produção, utilizamos o comando build, porém, devemos nos atentar ao arquivo package.json, onde a linha **"main": "index.js",** deve ser removida.

  **``npm run build``**

## 🛠️Ferramentas utilizadas para construção do projeto

* **HTML** - Linguagem de marcação utilizada na construção de páginas na Web.
* **CSS** - Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web.
* **NPM** - Gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.JS.
* **JavaScript** - Linguagem de programação interpretada estruturada, de alto nível com tipagem dinâmica fraca e multiparadigma.
* **SASS** - Pré-processador CSS, "Syntactically Awesome Style Sheets" é uma linguagem de folhas de estilo.
* **Metodologia BEM** - Block Element Modifier, é uma forma de organizar o código CSS para solucionar problemas frequentes no desenvolvimento web.
* **Parcel** - Empacotador de aplicações web, focado na experiência do desenvolvedor, de performance rápida utilizando processamento multicore, sem a necessidade de configuração.

## ✒️ Autor

Guilherme Ferreira Camargo
