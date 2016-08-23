# Consolidação

 - Cachemento inconsistente
 > Verificar de usar cacheamento apenas quando realmente necessário.
 > Usar aerospike?

 - Imagens pesadas
 > Pesquisar libs responsáveis a fazer isso (seja backend ou frontend)

- JSP/JS/CSS zoneado
- HTML misturado com muita logica
- Manipulação de várias linguagens (JSTL + JS + JAVA)
- Hibernate + JDBC
- Manutenação demorada
> React trás o CDD (Component Driven Development). Isso suprirá problemas
> de organização de código, desde que bem implementado.

- i18n em input hidden (extra) / i18n em message.properties no b.e. (site)
> Yahoo tem o [react-intl](https://github.com/yahoo/react-intl).

- ”Refazer a roda” pela falta de frameworks
> Exatamente por isso estamos nesta reunião. Definição de frameworks/ferramentas
- Controle de autorização por ‘paginas’ html
> Arquitetar uma forma ideal de permissionamento.

- Falta padronização (identação, nomenclatura)
> Adotar padrões de documentação

- Documentação dos endpoints inexistentes
> Swagger? Documentação essencial.

- Não tem testes automatizados e consistentes
	-Layout inconsistente, com falhas e bugs
> Jasmine, Jest parecem ser boas ferramentas de teste unitário.

- Má implementação de funcionalidades para comunicação com restaurantes:
> Implementação de um blog e/ou chat vai ser incrível.

React vs Angular 2 vs Whatever
==============
Algumas frases que encontrei no caminho da pesquisa...
> *"Angular 2 continues to put “JS” into HTML. React puts “HTML” into JS."*

> *"To read Angular: Learn a long list of Angular-specific syntax. To read React: Learn JavaScript."*

Size
========

* Angular 2: 566k (766k with RxJS)
* Ember: 435k
* Angular 1: 143k
* React + Redux: 139k

Performance
===========

Segue um link para o site do [auth0](https://auth0.com/blog/more-benchmarks-virtual-dom-vs-angular-12-vs-mithril-js-vs-the-rest/), com detalhes da comparação.

Stack
==============

* [React](https://facebook.github.io/react/) (Interface Builder)
* [React-router](https://github.com/reactjs/react-router) (Router)
* [Flux](http://facebook.github.io/flux/) (Architecture Pattern)
* [Babel](https://babeljs.io/) (ES6)
* HTML5
* [Webpack](https://webpack.github.io/) (Module Bundler)
* [Lodash](https://lodash.com/) (Library modularity, iterating arrays/object without jQuery)
* Bootstrap
* [Axios](https://github.com/mzabriskie/axios) (HTTP Client)
