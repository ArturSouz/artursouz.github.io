<div align="center">
  <h1>Currículo • Artur Alves Souza Silva</h1>
  <p>
    Site estático em <strong>HTML</strong> + <strong>CSS</strong> + <strong>JavaScript</strong> (sem frameworks),
    com conteúdo do currículo e alternância de idioma (PT/EN).
  </p>

  <p>
    <a href="#como-funciona"><strong>Como funciona</strong></a>
    ·
    <a href="#idiomas"><strong>Idiomas</strong></a>
    ·
    <a href="#conteudo"><strong>Conteúdo</strong></a>
    ·
    <a href="#estrutura-do-projeto"><strong>Estrutura</strong></a>
  </p>
</div>

---

## Visão Geral
Este repositório contém um site simples para apresentar seu currículo de forma legível e objetiva.

O conteúdo exibido é alinhado aos PDFs exportados do Pages (na pasta do projeto):
- `CV - Artur DEVELOPER 2025.pdf` (Português)
- `CV - Artur DEVELOPER 2025 - ENGLISH.pdf` (English)

Os arquivos `.pages` são a fonte editável no Apple Pages; o site segue o texto dos PDFs (export “congelado”).

O objetivo é manter o site leve, rápido e 100% estático, permitindo atualizar o currículo facilmente trocando as informações que alimentam o HTML/JS.

## Demonstração
Abra o arquivo `index.html` no navegador.

> Dica: se você hospedar em GitHub Pages, a página funciona diretamente como site estático.

---

## Idiomas
O site permite alternar entre:
- **PT-BR**
- **EN**

A troca de idioma ocorre no navegador via JavaScript (i18n):
- atualiza textos da página
- atualiza `document.title`
- atualiza a `meta description`
- reconfigura o bloco `JSON-LD` (SEO) com telefone/e-mail e `jobTitle`
- lista dinâmica para Skills/Highlights e Projetos

O idioma fica salvo em `localStorage`, então ao recarregar a página a seleção anterior é mantida.

## Como funciona
O comportamento principal fica em `script.js`:
- toggle do menu mobile (quando a tela é pequena)
- smooth scroll para âncoras internas
- sistema de traduções em memória (objeto `translations`)
- funções para renderizar:
  - lista de habilidades melhoradas
  - lista de destaques
  - lista de projetos

O SEO também é preservado:
- existe um `JSON-LD` do tipo `Person`
- na troca de idioma, o JS ajusta campos relevantes do JSON-LD

---

## Conteúdo do Currículo
As seções do site foram mapeadas a partir do currículo:
- **Perfil**
- **Experiência**
- **Aptidões / Skills**
  - habilidades melhoradas
  - destaques
- **Projetos**
- **Educação**
- **Contato**

Quando o idioma é alterado, o texto é atualizado para refletir a versão correspondente (PT ou EN).

---

## Estrutura do Projeto
Arquivos principais dentro de `artursouz.github.io/`:
- `index.html`  
  Estrutura do site + marcações `data-i18n` para suportar traduções.
- `styles.css`  
  Estilos (layout responsivo e UI do cabeçalho/seletores).
- `script.js`  
  Lógica do toggle de idioma, SEO (meta/JSON-LD) e renderização de listas.

---

## Tecnologias
- HTML5
- CSS3
- JavaScript (vanilla)
- JSON-LD (Schema.org/Person) para SEO

---

## Visualização Local
Como é um site estático, não há dependências de build.

Opções:

1. Abrir diretamente `index.html` no navegador.
2. Rodar um servidor simples (recomendado para evitar limitações de navegador):

```bash
python3 -m http.server 8000
```

Depois acesse:
`http://localhost:8000/artursouz.github.io/`

---

## Próximos Ajustes (se você quiser)
- Incluir um screenshot/preview do site no README.
- Colocar links externos para portfólio/projetos (quando existirem URLs).
- Ajustar microtextos (tom/voz) para ficar ainda mais natural em EN.

Se quiser, me diga qual estilo de escrita você prefere (mais direto, mais técnico ou mais “marketing”).
