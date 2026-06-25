# CerradoNews — O Jornal do Coração do Brasil

Jornal regional online da **região Centro-Oeste** (Goiás, Mato Grosso, Mato Grosso do Sul e Distrito Federal), desenvolvido para a atividade *Jornal Regional: Wireframe e Site*.

**Site no ar:** (https://github.com/designthings-fig/cerradonews)
**Wireframe (Figma):** https://www.figma.com/design/GzYepyFtFGH3Z9e3D5CtyD/Jornal?node-id=0-1

---

## Integrantes do grupo

Lavínia Manzan, Mirella Ferreira, Sophia , Rihanna Ferreira e Vicente Cristian


---

## Representação regional

O **CerradoNews** representa o Centro-Oeste em todos os seus elementos:

- **Identidade:** o nome e o slogan — *"O Jornal do Coração do Brasil"* — remetem ao Cerrado, bioma que ocupa quase toda a região e dá nome ao jornal.
- **Notícias por estado:** as editorias cobrem Mato Grosso (soja, Pantanal, Chapada dos Guimarães), Mato Grosso do Sul (pecuária, Festa Junina de Campo Grande), Goiás (infraestrutura, irrigação, café do Cerrado) e Distrito Federal (Eixo Monumental, Brasília).
- **Natureza e cultura:** seções sobre Pantanal, Cerrado, agronegócio, festas juninas e povos originários (cultura Bororo) — temas centrais da identidade centro-oestina.
- **Tirinha original "O Segredo do Cerrado":** personagens (Cadu e a Vó Ipê) explicam, com humor, por que o Cerrado é a *"caixa d'água do Brasil"* — beleza e resistência.
- **Tempo regional:** previsão ao vivo para as quatro capitais da região (Cuiabá, Campo Grande, Goiânia e Brasília).

---

## Paleta de cores (justificativa)

| Cor | Hex | Onde é usada | Por quê |
|---|---|---|---|
| 🟧 Laranja Cerrado | `#e38b26` | Marca, destaques, botões, links | O laranja-terra do pôr do sol no Cerrado e da terra do agronegócio; cor quente que transmite energia e identidade regional. |
| ⬛ Grafite | `#252525` | Cabeçalho, widgets de tempo/câmbio, rodapé | Dá seriedade jornalística e contraste, valorizando as fotos e os números das APIs. |
| ⬜ Off-white | `#f9f9f9` | Fundo do site | Leitura confortável, lembra o papel jornal, sem o cansaço do branco puro. |
| 🟨 Laranja claro | `#fbe6cf` | Tags de editoria, fundos suaves | Versão clara do laranja para etiquetas e realces sem pesar. |
| 🟩 (apoio) Verde Cerrado | nas fotos | Imagens de natureza | Reforça a vegetação e o verde do bioma. |

As fontes seguem o Figma: **Newsreader** (títulos, ar de jornal clássico), **Inter** (texto e navegação) e **Spectral** (cotações de moedas).

---

## O que o site entrega

- **Estrutura de portal de notícias:** manchete, últimas, destaques, mais lidas, opinião e rodapé completo.
- **Notícias regionais** com conteúdo escrito (sem *lorem ipsum*) e páginas de leitura individuais.
- **Tirinha original** sobre a cultura do Cerrado.
- **Consumo de APIs (ao vivo, gratuitas e sem chave):**
  - **Previsão do tempo** — [Open-Meteo](https://open-meteo.com/) (temperatura, umidade, índice UV, vento e 4 dias) para Cuiabá, Campo Grande, Goiânia e Brasília.
  - **Cotação de moedas** — [AwesomeAPI](https://docs.awesomeapi.com.br/) (Dólar, Bitcoin, Libra Esterlina e Peso Argentino em tempo real).
- **Funcionalidades interativas (nível MB):** busca de notícias, troca de cidade na previsão do tempo, atualização automática das cotações.
- **Podcast** *Voz do Cerrado* (página com player de áudio funcional + roteiro do episódio).
- **Vídeo no formato de entrevista** (página dedicada + transcrição).

---

## Estrutura de arquivos

```
cerradonews/
├── index.html          Capa do jornal
├── noticia.html        Leitor de notícia (?id=…)
├── tirinhas.html       Tirinhas originais
├── podcast.html        Podcast Voz do Cerrado
├── entrevista.html     Vídeo em formato de entrevista
├── css/style.css       Estilo (tema CerradoNews)
├── js/data.js          Base de notícias (conteúdo)
├── js/app.js           Render da home, busca e APIs
├── audio/vinheta.mp3   Vinheta de abertura do podcast
└── img/                Imagens do jornal
```

---

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub e envie todos os arquivos desta pasta.
2. Vá em **Settings → Pages**.
3. Em *Source*, escolha a branch `main` e a pasta `/root`.
4. Salve. Em alguns minutos o site estará em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.
5. Cole esse endereço no campo **"Site no ar"** no topo deste README.

> Como o site usa apenas HTML, CSS e JavaScript puro, ele funciona direto no GitHub Pages, sem build.

---

## APIs utilizadas — detalhes

**Open-Meteo** (tempo): `https://api.open-meteo.com/v1/forecast` — gratuita, sem cadastro, com CORS liberado.

**AwesomeAPI** (câmbio): `https://economia.awesomeapi.com.br/json/last/USD-BRL,BTC-BRL,GBP-BRL,ARS-BRL` — gratuita, sem chave, com CORS liberado.

Ambas são chamadas direto do navegador (`fetch`), então funcionam no GitHub Pages sem servidor.
