Consolidação:


-Performance:
-Não escalável
-Sticky session
-Memory leaks
-Loops infinitos
	-Cachemento inconsistente
	-Imagens pesadas

-Mantenabilidade/Padronização/Componentização/Produtividade:
-JSP/JS/CSS zoneado
-HTML misturado com muita logica
-Manipulação de várias linguagens (JSTL + JS + JAVA)
-Hibernate + JDBC
-Manutenação demorada
-i18n em input hidden (extra) / i18n em message.properties no b.e. (site)
	-”Refazer a roda” pela falta de frameworks
	-Controle de autorização por ‘paginas’ html
	-Falta padronização (identação, nomenclatura)
	-Backend com metodos replicados e confuso
	-Má utilização dos verbos HTTP
	-Gde acoplamento entre os modulos do site
	-Dificil implementação de Analytics (site / extra nem tem)
	-Modelo de persistencia mto verboso
		-Mto código para manipular model
	-Timezone no backend: java calendar (site)
	-White-labeling (site)
	-Documentação dos endpoints inexistentes
	-SEO e URLs com parametros de busca (ex cidades/estado) (site)

-Qualidade:
-Não tem testes automatizados e consistentes
	-Layout inconsistente, com falhas e bugs

-Produto:
-Má implementação de funcionalidades para comunicação com restaurantes:
-resultados / kpis
-iteraçao/comunicação (realtime ou nao)
-informativos
-pesquisas/questionarios inexistentes
	-Restaurante + Operação (com necessidades diferentes) utilizando as mesma telas







Poshika:
-Não escalável
-Sticky session
-Memories leak
-Loops infinitos
-Sem padroes bem definidos
-Hibernate + JDBC
-JSP/JS/CSS zoneado
-Manutenção demorada
-Não tem testes automatizados
-Má implementação de funcionalidades para comunicação com restaurantes:
-resultados / kpis
-iteraçao/comunicação (realtime ou nao)
-informativos
-pesquisas/questionarios inexistentes


Igor:
.Manutenção
.Internacionalização usando input hidden
.Inconsistência de Layout (ex popups quebrados)
.Em alguns lugares, o 'cacheamento' de informações traziam inconsistências por não ser atualizado corretamente quando deveria
.A falta de ferramentas e frameworks traziam à tona a necessidade de 'refazer a roda' (as vezes errado) diversas vezes
.Imagens muito pesadas (algo poderia ser feito para suprir esse problema)
.Ter restaurante + operação num mesmo sistema não tem sentido
.Arquitetura de permissionamento ruim (paginas.containsKey('paginaTeste') faz a verificação da permissão do meu perfil para entrar... tipo...)
.Falta de padronização de código. Desde identação até nomenclatura/linguagem de nome de método e variáveis.
.Backend com muito método replicado e muitas vezes confuso. Falta de boas práticas muitas vezes
 .Inexistência de alguma ferramenta de teste para validação automatizada e consistente (isso é sim, importante)
.Uso incorreto dos verbos http nas chamadas de endpoint (um restful de verdade supre)
.Tem mais coisa... mas não lembro agora...

Medina:
* Difícil manutenção de código para desenvolvedores
* Difícil entendimento do layout para designers/leigos (HTML misturado com muita lógica)
* Grande acoplamento entre os "módulos" do site > Muito "amarrado"
* Implementação de tracking dificultada
* Modelo de persistência de dados entre páginas verboso/muito complicado
* Muito código para manipular model
* Necessidade de manipulação de várias linguagens, JSTL, JS, JAVA




Guto:
- Como tratar problemas de timezone. Tratamos no Java (Calendar)
- Internaciolização i18n.  Se vamos conseguir utilizar da forma que utilizamos hj (message.properties), ou vamos manter tudo via json e se temos um plugin (resource buddle) para ajudar na organização e agilidade do processo.
- Segurança/Autenticação. Segurança, trafegar os dados, se temos como criptografar isso no client.
- Mesmo código funcionando em domínios diferentes, caso do comeya, vamos utilizar os "IFs" no client mesmo?
- Documentação dos serviços (endpoints) do V3.
- Solução para SEO sem gambiarras, caso isso se consolide como estrutura para o site em algum momento. Não existe um suporte muito bem elaborado para sites com frameworks JS, é um dos grandes problemas atuais, o Google ainda não resolveu muito bem essa questão, mas valem pesquisas se temos como manter um padrão alto sem prejudicar o SEO.
- Me preocupo com as rotas, precisamos de um plugin bem simples de rotas e redirects, pois atualmente no site temos city/state, que é algo bem flexível.
- URL com parametros para buscas e compartilhamento de links. Vamos sempre utilizar URL para chegar em diversos conteúdos. Minha dúvida é se vamos conseguir tratar essas entradas (parametros de busca) por exemplo. Essa parte é mais uma dúvida de como funciona mesmo.
- Testes unitários faremos? (Jasmine)
- Qual forma vamos utilizar para esconder as configs de chamada para o V3?
- Como vamos limitar os usuários a ter acesso a nossa base de restaurantes e cardapio de forma mt simples? (segurança das informações)
