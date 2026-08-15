# AGENTS.md — Regras para Landing Pages

Este arquivo define as regras obrigatórias para qualquer agente de código que trabalhe neste projeto.

O objetivo é desenvolver Landing Pages profissionais, rápidas, responsivas, visualmente premium, otimizadas para SEO e principalmente focadas em conversão.

---

## 1. AUTONOMIA PARA CRIAÇÃO

O agente está autorizado a criar, editar, mover e organizar arquivos **dentro da pasta atual deste projeto** sempre que isso for necessário para executar a tarefa solicitada.

Se a pasta estiver vazia, crie toda a estrutura necessária.

Exemplo:

```text
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo/
├── robots.txt
├── sitemap.xml
└── favicon.ico
```

A estrutura pode ser adaptada quando houver uma justificativa técnica.

Nunca altere arquivos fora da pasta/workspace autorizado.

---

## 2. ANALISE ANTES DE ALTERAR

Antes de implementar qualquer solicitação:

1. Analise os arquivos existentes.
2. Entenda a estrutura atual.
3. Identifique HTML, CSS, JavaScript e assets existentes.
4. Preserve funcionalidades que já estejam funcionando.
5. Reutilize componentes quando fizer sentido.
6. Só depois realize as alterações.

Não recrie o projeto inteiro quando uma alteração localizada for suficiente.

---

## 3. NÃO APAGAR SEM NECESSIDADE

Não remova:

* arquivos;
* seções;
* scripts;
* estilos;
* imagens;
* integrações;
* configurações;
* funcionalidades existentes

sem que isso seja necessário para cumprir a solicitação.

Quando houver código existente, prefira modificar e melhorar em vez de substituir indiscriminadamente.

---

## 4. STACK PADRÃO

Para Landing Pages simples, utilizar preferencialmente:

* HTML5;
* CSS3;
* JavaScript puro.

Não adicionar frameworks ou bibliotecas sem necessidade real.

Evitar utilizar apenas por conveniência:

* React;
* Vue;
* Angular;
* Bootstrap;
* Tailwind;
* jQuery;
* bibliotecas pesadas de animação.

Se o projeto já utilizar determinada tecnologia, respeite a stack existente.

---

## 5. DESIGN

Toda Landing Page deve ter aparência profissional e personalizada.

O resultado NÃO deve parecer:

* template genérico;
* projeto escolar;
* site montado rapidamente;
* página SaaS reaproveitada;
* interface excessivamente artificial;
* site claramente gerado por IA.

Evitar padrões visuais repetitivos como:

* excesso de cards;
* excesso de gradientes;
* bordas arredondadas em todos os elementos;
* sombras exageradas;
* ícones aleatórios;
* seções visualmente iguais;
* textos excessivamente centralizados;
* excesso de elementos decorativos;
* animações em tudo.

Criar variedade visual entre as seções.

Usar:

* boa hierarquia;
* espaçamento consistente;
* tipografia forte;
* composição equilibrada;
* fotografias;
* contraste;
* elementos gráficos discretos;
* áreas de respiro;
* microinterações.

A identidade visual deve respeitar o segmento e a marca de cada cliente.

---

## 6. MOBILE FIRST

Toda Landing Page deve ser desenvolvida pensando primeiro na experiência mobile.

Testar especialmente:

* 360px;
* 375px;
* 390px;
* 430px;
* tablet;
* notebook;
* desktop;
* telas grandes.

Não simplesmente reduzir o desktop.

No mobile:

* CTAs devem ser fáceis de tocar;
* fontes devem permanecer legíveis;
* menus precisam funcionar corretamente;
* imagens não podem deformar;
* não pode existir overflow horizontal;
* elementos fixos não podem esconder conteúdo;
* espaçamentos precisam ser adequados;
* seções devem manter boa hierarquia.

---

## 7. SEO

Toda Landing Page deve possuir SEO técnico básico bem implementado.

Implementar quando aplicável:

* `<title>`;
* meta description;
* canonical;
* Open Graph;
* Twitter Card;
* favicon;
* `theme-color`;
* robots.txt;
* sitemap.xml;
* JSON-LD;
* HTML semântico;
* URLs e anchors adequados;
* textos alternativos em imagens.

Utilizar somente um `h1`.

Manter hierarquia correta:

```text
H1
 ├── H2
 │    └── H3
 └── H2
      └── H3
```

Não utilizar headings apenas para alterar tamanho visual.

---

## 8. SEO LOCAL

Quando o projeto representar uma empresa local, trabalhar SEO Local naturalmente.

Utilizar informações reais fornecidas no projeto, como:

* cidade;
* estado;
* bairros;
* regiões atendidas;
* serviços;
* telefone;
* nome da empresa.

Criar textos naturais combinando serviço + localização quando fizer sentido.

Exemplo:

```text
Instalação de ar-condicionado em Brasília
```

Evitar keyword stuffing.

Nunca repetir palavras-chave artificialmente apenas para tentar melhorar posicionamento.

---

## 9. COPYWRITING

O conteúdo deve parecer escrito para uma empresa real.

Evitar clichês genéricos como:

* "Transformamos sonhos em realidade";
* "Excelência que você merece";
* "Inovação que transforma";
* "Soluções que fazem a diferença";
* "Somos apaixonados pelo que fazemos".

Prefira textos:

* objetivos;
* específicos;
* humanos;
* comerciais;
* fáceis de entender;
* relacionados ao problema real do cliente.

Headlines precisam comunicar valor rapidamente.

---

## 10. CONVERSÃO

Landing Pages devem possuir um objetivo principal claramente identificado.

Quando o objetivo for WhatsApp, telefone, formulário ou outro CTA, conduzir o visitante naturalmente até essa ação.

Distribuir CTAs estrategicamente, especialmente em:

* Hero;
* serviços;
* prova social;
* meio da página quando necessário;
* CTA final.

Não exagerar na quantidade de CTAs.

Todos os botões precisam funcionar.

---

## 11. WHATSAPP

Quando houver WhatsApp informado pelo cliente, utilizar o padrão:

```text
https://wa.me/55DDDNUMERO
```

Sem:

* espaços;
* parênteses;
* hífens.

Sempre que apropriado, utilizar mensagem pré-preenchida.

Exemplo:

```text
Olá! Encontrei vocês pelo site e gostaria de solicitar um orçamento.
```

Utilizar `encodeURIComponent` quando a URL for construída via JavaScript.

CTAs podem possuir atributos preparados para tracking:

```html
data-cta="whatsapp"
data-location="hero"
```

Não instalar Google Analytics, Google Ads ou Meta Pixel com IDs fictícios.

---

## 12. IMAGENS

O agente está autorizado a utilizar imagens provenientes de bibliotecas gratuitas quando o cliente ainda não possuir fotografias suficientes.

Priorizar:

* Unsplash;
* Pexels;
* Pixabay;
* outras fontes gratuitas e legalmente apropriadas.

Escolher imagens coerentes com:

* segmento;
* serviço;
* público;
* identidade visual;
* contexto brasileiro quando possível.

Evitar:

* imagens obviamente artificiais;
* fotografias muito genéricas;
* renders desnecessários;
* imagens claramente geradas por IA;
* imagens que não tenham relação com o serviço.

Quando o ambiente permitir, baixar os assets para o projeto.

Preferir:

```text
assets/images/
```

Usar nomes semânticos.

Exemplo:

```text
hero-servico.webp
servico-instalacao.webp
servico-manutencao.webp
sobre-empresa.webp
```

Não utilizar nomes como:

```text
img1.jpg
foto2.png
image-final-3.jpg
```

---

## 13. OTIMIZAÇÃO DE IMAGENS

Quando possível:

* converter para WebP ou AVIF;
* redimensionar para dimensões adequadas;
* comprimir sem perda visual significativa;
* definir `width` e `height`;
* utilizar `loading="lazy"` abaixo da dobra;
* utilizar `decoding="async"` quando apropriado.

Não aplicar lazy loading à principal imagem LCP do Hero quando isso prejudicar a performance.

Toda imagem relevante deve possuir `alt`.

---

## 14. ANTES E DEPOIS

Quando solicitado um comparador Antes × Depois, não utilizar apenas duas imagens lado a lado.

Criar comparação interativa real.

As imagens devem ficar sobrepostas e uma divisória deve permitir revelar Antes/Depois.

Suportar:

* mouse;
* touch;
* dispositivos móveis;
* teclado quando aplicável.

O componente deve ser responsivo e acessível.

Preferir implementação nativa em HTML, CSS e JavaScript.

Não adicionar uma biblioteca pesada apenas para essa funcionalidade.

Se forem utilizadas imagens ilustrativas de banco de imagens, não apresentar o conteúdo como trabalho real executado pelo cliente.

---

## 15. ANIMAÇÕES

Animações devem melhorar a percepção de qualidade, não distrair.

Permitido:

* fade;
* translate;
* reveal;
* stagger;
* microinterações;
* hover;
* transições;
* pequenas transformações em imagens;
* efeitos relacionados ao scroll.

Utilizar `IntersectionObserver` quando apropriado.

Evitar animações contínuas sem necessidade.

Sempre respeitar:

```css
@media (prefers-reduced-motion: reduce)
```

A página deve continuar funcionando normalmente sem animações.

---

## 16. PERFORMANCE

Priorizar Core Web Vitals.

Prestar atenção especialmente a:

* LCP;
* CLS;
* INP.

Evitar:

* JavaScript desnecessário;
* CSS excessivo;
* bibliotecas pesadas;
* imagens enormes;
* fontes em excesso;
* recursos bloqueando renderização.

Objetivo recomendado:

**Lighthouse 90+ quando os assets e o ambiente permitirem.**

Performance não deve destruir a qualidade visual, e qualidade visual não deve destruir a performance.

---

## 17. ACESSIBILIDADE

Implementar:

* HTML semântico;
* contraste adequado;
* `alt`;
* labels;
* ARIA somente quando necessário;
* navegação por teclado;
* `:focus-visible`;
* touch targets adequados;
* estados hover/focus;
* `prefers-reduced-motion`.

Elementos interativos devem ser utilizáveis sem mouse quando tecnicamente aplicável.

---

## 18. HTML

Utilizar HTML5 semântico.

Preferir:

```html
<header>
<nav>
<main>
<section>
<article>
<figure>
<footer>
```

Evitar `div` para tudo quando existir um elemento semântico apropriado.

Manter código organizado e legível.

---

## 19. CSS

Organizar o CSS de forma previsível.

Utilizar Custom Properties para valores globais.

Exemplo:

```css
:root {
  --color-primary: ...;
  --color-secondary: ...;
  --color-background: ...;
  --color-text: ...;

  --font-primary: ...;

  --container: ...;
  --radius: ...;
}
```

Evitar:

* valores mágicos espalhados;
* `!important` sem necessidade;
* estilos inline;
* duplicação excessiva;
* seletores desnecessariamente específicos.

---

## 20. JAVASCRIPT

JavaScript deve ser:

* simples;
* modular;
* legível;
* defensivo;
* performático.

Não criar dependências para funcionalidades que podem ser implementadas facilmente com JavaScript nativo.

Evitar variáveis globais desnecessárias.

Verificar se os elementos existem antes de adicionar listeners quando o script puder ser reutilizado.

Não deixar `console.log` de desenvolvimento na versão final.

---

## 21. INFORMAÇÕES DO CLIENTE

Nunca inventar informações factuais sobre o cliente.

Não inventar:

* anos de mercado;
* número de clientes;
* quantidade de serviços realizados;
* avaliações;
* depoimentos;
* certificados;
* preços;
* promoções;
* endereços;
* telefones;
* garantias;
* marcas atendidas;
* regiões atendidas.

Utilizar apenas informações fornecidas pelo usuário ou existentes nos arquivos do projeto.

---

## 22. CONTEÚDO ILUSTRATIVO

É permitido utilizar conteúdo visual ilustrativo para completar o design:

* fotografias de banco de imagens;
* ícones;
* elementos decorativos;
* mockups;
* imagens temporárias.

Esse conteúdo deve ser fácil de substituir posteriormente.

Não apresentar uma fotografia de banco de imagens como prova de um serviço real realizado pela empresa.

---

## 23. NÃO ALTERAR O ESCOPO

Quando o usuário solicitar uma alteração específica, execute essa alteração sem redesenhar outras partes da Landing Page desnecessariamente.

Exemplo:

Se a solicitação for:

> "Troque a imagem do Hero."

Não:

* refaça o Hero inteiro;
* altere a paleta;
* modifique o menu;
* reescreva a página inteira.

Faça somente as alterações necessárias e dependências diretamente relacionadas.

---

## 24. PRESERVAR FUNCIONALIDADES

Antes de editar componentes existentes, identifique:

* eventos JavaScript;
* links;
* IDs;
* anchors;
* classes utilizadas por scripts;
* formulários;
* tracking;
* integrações.

Não quebrar funcionalidades existentes ao realizar alterações visuais.

---

## 25. RESPONSABILIDADE SOBRE O RESULTADO

Não considere uma tarefa concluída apenas porque o código foi escrito.

Quando possível, valide o resultado.

Procure por:

* erros;
* caminhos quebrados;
* imagens inexistentes;
* links incorretos;
* overflow;
* problemas de responsividade;
* problemas de contraste;
* erros JavaScript;
* inconsistências visuais.

Corrija os problemas encontrados antes de finalizar.

---

## 26. QUANDO CRIAR UMA LP DO ZERO

Quando receber um prompt solicitando uma Landing Page completa e a pasta estiver vazia:

1. Criar a estrutura do projeto.
2. Criar o HTML.
3. Criar o CSS.
4. Criar o JavaScript.
5. Criar diretórios de assets.
6. Adicionar imagens necessárias.
7. Implementar todas as seções.
8. Implementar responsividade.
9. Implementar animações.
10. Implementar CTAs.
11. Implementar SEO.
12. Implementar acessibilidade.
13. Criar robots.txt quando aplicável.
14. Criar sitemap.xml quando o domínio estiver definido.
15. Revisar o projeto.
16. Corrigir erros encontrados.

Não parar apenas na criação da estrutura.

---

## 27. QUANDO FINALIZAR

Depois de executar uma tarefa, informar de forma objetiva:

* o que foi criado ou alterado;
* quais arquivos principais foram modificados;
* funcionalidades relevantes implementadas;
* qualquer informação que ainda precise ser fornecida pelo usuário.

Não apresentar explicações enormes se não forem necessárias.

---

# REGRA PRINCIPAL

O objetivo não é apenas produzir código que funcione.

Cada Landing Page deve buscar equilíbrio entre:

**Design + Conversão + SEO + Performance + Responsividade + Acessibilidade + Manutenibilidade.**

Antes de considerar qualquer implementação concluída, pergunte internamente:

**"Isso parece uma Landing Page profissional feita especificamente para este cliente ou parece apenas mais um template?"**

Se parecer genérica, refine o resultado antes de finalizar.
