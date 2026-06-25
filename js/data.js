/* ===========================================================
   CerradoNews — base de notícias (conteúdo do jornal)
   Fonte única usada pela home, busca e páginas de notícia.
   =========================================================== */

const ARTICLES = [
{
  id:"pantanal-florescimento",
  slot:"hero", category:"Meio ambiente",
  title:"Pantanal registra maior florescimento em duas décadas após chuvas históricas do trimestre",
  lead:"Pesquisadores da UFMT documentaram o retorno de espécies que não eram vistas desde 2004 na região noroeste do bioma, em sinal de recuperação ambiental sem precedentes na última geração.",
  img:"img/hero-pantanal.jpg",
  author:"Lavínia Harumi", date:"02 jun 2026", read:"6 min",
  body:[
    "O Pantanal mato-grossense vive o mais intenso período de florescimento das últimas duas décadas. Levantamento de campo conduzido por pesquisadores da Universidade Federal de Mato Grosso (UFMT) identificou, entre março e maio, a floração simultânea de dezenas de espécies do bioma — fenômeno associado ao volume de chuvas acima da média histórica registrado no primeiro trimestre.",
    "Segundo o estudo, a planície inundável recebeu, no acumulado do trimestre, índices pluviométricos cerca de 35% superiores à média dos últimos trinta anos. A cheia mais generosa reabasteceu corixos e baías que vinham secando desde os incêndios de 2020, criando as condições ideais para a germinação e a floração de plantas que dependem do pulso de inundação.",
    "\"Estamos vendo o bioma responder com uma força que não víamos há uma geração. Algumas espécies de ipês e de plantas aquáticas reapareceram em áreas onde haviam praticamente desaparecido\", afirma a coordenação da pesquisa, que monitora 14 pontos fixos na região noroeste do Pantanal.",
    "O florescimento tem efeito direto sobre a fauna. Com mais flores, aumenta a oferta de néctar e de frutos, beneficiando abelhas nativas, aves e pequenos mamíferos. O equilíbrio também favorece os jacarés e as aves aquáticas, que voltaram a ocupar áreas alagadas restauradas pela cheia.",
    "Apesar do quadro positivo, os pesquisadores alertam que a recuperação é frágil. A regularidade das chuvas e o controle do desmatamento no entorno são determinantes para que o ciclo se mantenha nos próximos anos. O grupo defende a ampliação das áreas de proteção e o fortalecimento das brigadas de combate a incêndios antes do período de estiagem.",
    "O Pantanal é a maior planície alagável contínua do planeta e abriga uma das maiores concentrações de vida silvestre das Américas. Reconhecido como Patrimônio Natural da Humanidade pela Unesco, o bioma se estende por Mato Grosso e Mato Grosso do Sul e é considerado um dos termômetros mais sensíveis das mudanças climáticas no Brasil."
  ]
},
{
  id:"soja-mt-recorde",
  slot:"sub", category:"Agronegócio",
  title:"Soja do MT bate recorde histórico de produtividade com nova técnica de plantio direto",
  lead:"Cooperativas do Vale do Teles Pires relatam ganho de 18% na produção em relação à safra anterior.",
  img:"img/soja-mt.jpg",
  author:"Redação", date:"02 jun 2026", read:"4 min",
  body:[
    "Produtores do Vale do Teles Pires, no norte de Mato Grosso, comemoram o melhor desempenho da soja em mais de uma década. As cooperativas da região relatam um ganho médio de 18% na produtividade em relação à safra passada, impulsionado pela adoção de uma nova técnica de plantio direto combinada com plantas de cobertura.",
    "O método mantém o solo permanentemente coberto por palhada, o que reduz a perda de água por evaporação, melhora a infiltração das chuvas e aumenta a matéria orgânica disponível para a cultura seguinte. O resultado é um sistema mais resistente aos veranicos — aqueles períodos de estiagem que costumam castigar a lavoura em pleno ciclo de desenvolvimento.",
    "Técnicos das cooperativas destacam que o avanço não veio apenas do clima favorável, mas de um pacote tecnológico que une manejo do solo, sementes adaptadas e monitoramento por sensores. A expectativa é de que a técnica seja replicada em outras regiões produtoras do estado já na próxima safra.",
    "Mato Grosso é o maior produtor de soja do Brasil e responde sozinho por uma fatia expressiva da produção nacional. O desempenho da região tem peso direto sobre as exportações do país e sobre a formação de preços da commodity no mercado internacional."
  ]
},
{
  id:"goias-infraestrutura",
  slot:"sub", category:"Política",
  title:"Governo de Goiás anuncia pacote de R$ 2,4 bi para infraestrutura do interior",
  lead:"Obras contemplam 48 municípios com saneamento, estradas vicinais e pontes.",
  img:"img/goias-infra.jpg",
  author:"Correspondente Goiânia", date:"02 jun 2026", read:"3 min",
  body:[
    "O Governo de Goiás anunciou um pacote de investimentos de R$ 2,4 bilhões voltado à infraestrutura do interior do estado. O programa prevê obras em 48 municípios e tem como eixos principais o saneamento básico, a recuperação de estradas vicinais e a construção de novas pontes em regiões de produção agrícola.",
    "De acordo com o cronograma apresentado, a primeira fase prioriza municípios com déficit histórico de abastecimento de água e tratamento de esgoto. A pasta de infraestrutura estima que as obras de saneamento beneficiem diretamente centenas de milhares de moradores e ajudem a reduzir doenças associadas à falta de tratamento.",
    "As estradas vicinais — vias rurais que ligam as propriedades às rodovias principais — também recebem atenção especial. O escoamento da safra depende dessas ligações, e o mau estado de conservação encarece o frete e provoca perdas no transporte de grãos e de produtos da agricultura familiar.",
    "O pacote será executado em etapas ao longo dos próximos anos, com recursos do tesouro estadual e financiamentos. A oposição cobra transparência na escolha dos municípios atendidos e na divulgação dos cronogramas de cada obra."
  ]
},
{
  id:"festa-junina-cg",
  slot:"sub", category:"Cultura",
  title:"Festa Junina de Campo Grande reúne 400 mil visitantes e consolida tradição regional",
  lead:"Evento destaca danças, comidas típicas do Cerrado e quadrilhas com temática pantaneira.",
  img:"img/festa-cultura.jpg",
  author:"Milena Adalberta", date:"01 jun 2026", read:"4 min",
  body:[
    "Campo Grande viveu uma das maiores edições de sua festa junina. Ao longo de duas semanas, o arraial central reuniu cerca de 400 mil visitantes, consolidando o evento como um dos principais do calendário cultural do Centro-Oeste e movimentando a economia local com geração de renda para artesãos, cozinheiros e grupos de dança.",
    "A programação misturou tradição e identidade regional. As quadrilhas trouxeram temática pantaneira, com figurinos inspirados na fauna e na flora do bioma, enquanto as barracas serviram comidas típicas com ingredientes do Cerrado — da pamonha ao licor de pequi, passando por doces de frutas nativas como o cajá e o jatobá.",
    "Para além do entretenimento, a festa cumpre papel de preservação cultural. As danças juninas, herdadas das festividades de São João, ganham no Centro-Oeste um sotaque próprio, que dialoga com as comitivas, a viola caipira e os ritmos de fronteira que marcam Mato Grosso do Sul.",
    "Organizadores e poder público avaliam ampliar a estrutura do evento nos próximos anos, com foco em turismo cultural. A aposta é transformar a festa em um polo de atração de visitantes de outros estados, valorizando a cozinha e as tradições do interior."
  ]
},
{
  id:"jacares-ia",
  slot:"ultimas", category:"Tecnologia",
  title:"Projeto de monitoramento de jacarés usa IA para rastrear 1.200 animais no Pantanal",
  lead:"Sistema de reconhecimento de padrões para répteis foi desenvolvido em parceria com universidades europeias.",
  img:"img/jacare-ia.jpg",
  author:"Carlos Meireles", date:"01 jun 2026", read:"5 min",
  body:[
    "Um projeto de pesquisa inédito no Pantanal está usando inteligência artificial para identificar e acompanhar individualmente jacarés-do-pantanal. O sistema, desenvolvido em parceria com universidades europeias, já catalogou cerca de 1.200 animais a partir de imagens captadas por câmeras instaladas em pontos estratégicos da planície.",
    "A tecnologia funciona de forma semelhante ao reconhecimento facial humano, mas adaptada para répteis: o algoritmo analisa o padrão das placas ósseas, das cicatrizes e da disposição das escamas de cada animal, criando uma espécie de \"impressão digital\" que permite reencontrá-lo em registros futuros.",
    "Com isso, os pesquisadores conseguem estimar com mais precisão o tamanho da população, os deslocamentos e a expectativa de vida dos jacarés. Esses dados são fundamentais para avaliar a saúde do ecossistema, já que o jacaré ocupa o topo da cadeia alimentar e funciona como indicador da qualidade ambiental do bioma.",
    "A iniciativa também tem potencial de aplicação no combate à caça ilegal e no manejo sustentável. Ao identificar indivíduos, é possível rastrear rotas e identificar áreas críticas que precisam de maior fiscalização, sem a necessidade de captura ou marcação física dos animais."
  ]
},
{
  id:"cafe-rondonopolis",
  slot:"ultimas", category:"Economia",
  title:"Cooperativa de Rondonópolis exporta primeiro lote de café do Cerrado com certificação orgânica",
  lead:"Produto alcança mercados na Alemanha e no Japão com preço 40% acima da commodity tradicional.",
  img:"img/cafe-cerrado.jpg",
  author:"Fernanda Lopes", date:"01 jun 2026", read:"4 min",
  body:[
    "Uma cooperativa de Rondonópolis embarcou o primeiro lote de café do Cerrado com certificação orgânica destinado à exportação. O produto seguiu para compradores na Alemanha e no Japão, dois dos mercados mais exigentes do mundo em qualidade e rastreabilidade, e foi vendido com preço cerca de 40% superior ao da commodity tradicional.",
    "A certificação orgânica exige que toda a produção seja conduzida sem agrotóxicos e fertilizantes sintéticos, com manejo do solo baseado em compostagem e controle biológico de pragas. O processo levou anos de adaptação e auditorias, mas abriu as portas para um nicho de mercado disposto a pagar mais por origem e sustentabilidade.",
    "Para os produtores familiares ligados à cooperativa, o resultado representa uma mudança de patamar. O café especial agrega valor à produção e reduz a dependência das oscilações bruscas de preço que costumam afetar os grãos vendidos em larga escala.",
    "A expectativa é ampliar a área certificada nos próximos ciclos e diversificar os destinos de exportação. O café do Cerrado já tem indicação geográfica reconhecida e vem ganhando espaço entre os apreciadores de cafés especiais no Brasil e no exterior."
  ]
},
{
  id:"eixo-monumental",
  slot:"ultimas", category:"Brasília",
  title:"Obras de modernização do Eixo Monumental têm prazo e orçamento revisados pelo GDF",
  lead:"Secretaria de Obras prevê conclusão antes das comemorações dos próximos aniversários da capital federal.",
  img:"img/brasilia-eixo.jpg",
  author:"Paulo Drummond", date:"31 mai 2026", read:"3 min",
  body:[
    "O Governo do Distrito Federal revisou o prazo e o orçamento das obras de modernização do Eixo Monumental, principal avenida de Brasília e cartão-postal do projeto urbanístico de Lúcio Costa. A intervenção prevê recuperação do pavimento, modernização da iluminação e requalificação dos espaços de convivência ao longo do gramado central.",
    "Segundo a Secretaria de Obras, o ajuste no cronograma busca compatibilizar as frentes de trabalho com o intenso fluxo de veículos e com a agenda de eventos cívicos que ocupam a esplanada ao longo do ano. A pasta afirma que a conclusão está prevista para antes das próximas grandes comemorações da capital.",
    "O Eixo Monumental concentra alguns dos principais marcos arquitetônicos da cidade, tombada como Patrimônio Cultural da Humanidade. Qualquer intervenção na área precisa respeitar diretrizes rígidas de preservação, o que torna o planejamento mais complexo e demorado.",
    "Entidades de mobilidade urbana acompanham o projeto e pedem que as obras incluam melhorias para pedestres e ciclistas, além da arborização com espécies do Cerrado, adaptadas ao clima seco característico do Planalto Central."
  ]
},
{
  id:"chapada-guimaraes",
  slot:"destaque", category:"Meio ambiente",
  title:"Chapada dos Guimarães bate recorde de visitantes e exige novo plano de gestão sustentável",
  lead:"O parque nacional recebeu mais de 380 mil turistas no primeiro semestre, pressionando os serviços locais e os ecossistemas sensíveis da região.",
  img:"img/chapada.jpg",
  author:"Lavínia Harumi", date:"31 mai 2026", read:"6 min",
  body:[
    "A Chapada dos Guimarães, em Mato Grosso, registrou um recorde de visitação no primeiro semestre, com mais de 380 mil turistas atraídos por cachoeiras, mirantes e formações rochosas avermelhadas que estão entre as paisagens mais espetaculares do Cerrado. O aumento expressivo, porém, acende um alerta sobre a capacidade de suporte da região.",
    "O crescimento do turismo aquece a economia local — pousadas, restaurantes e guias vivem alta temporada —, mas também pressiona serviços de saneamento, abastecimento de água e coleta de lixo de uma cidade de pequeno porte. Trilhas e poços naturais sofrem com o pisoteio e o descarte irregular de resíduos.",
    "Especialistas defendem um novo plano de gestão sustentável, com controle do número de visitantes em áreas sensíveis, agendamento prévio de acesso a atrativos e investimento em educação ambiental. A ideia é equilibrar a geração de renda com a conservação do parque nacional.",
    "A Chapada abriga nascentes que alimentam importantes bacias hidrográficas e uma rica biodiversidade de aves e plantas endêmicas. Para pesquisadores, proteger esse patrimônio é também garantir a continuidade do próprio turismo, que depende diretamente da paisagem preservada.",
    "Gestores públicos e a iniciativa privada discutem fontes de financiamento para a estrutura, incluindo a cobrança de ingressos revertida para conservação. O desafio é transformar o boom de visitantes em desenvolvimento duradouro, sem comprometer aquilo que torna a Chapada única."
  ]
},
{
  id:"safra-conab",
  slot:"destaque", category:"Agronegócio",
  title:"Safra 2025/26 do Centro-Oeste deve superar 180 milhões de toneladas, projeta Conab",
  lead:"Mato Grosso lidera os números somando soja e milho. Clima favorável no segundo semestre sustenta a expectativa de produtores e corretoras.",
  img:"img/safra-conab.jpg",
  author:"Letícia Duarte", date:"31 mai 2026", read:"5 min",
  body:[
    "A safra 2025/26 de grãos do Centro-Oeste deve superar a marca de 180 milhões de toneladas, segundo projeções acompanhadas pelo setor com base nos levantamentos da Companhia Nacional de Abastecimento (Conab). A região consolida sua posição como o principal celeiro do país, puxada pela soja e pelo milho.",
    "Mato Grosso aparece na liderança, somando dezenas de milhões de toneladas entre as duas culturas. Goiás e Mato Grosso do Sul completam o trio que sustenta os números regionais, com participação crescente também na produção de algodão e sorgo.",
    "O clima favorável no segundo semestre é apontado como fator decisivo para a expectativa positiva. A boa distribuição das chuvas no plantio e o investimento em tecnologia de manejo ajudam a explicar os ganhos de produtividade observados nas principais zonas produtoras.",
    "O desempenho da região tem reflexos diretos na balança comercial brasileira, já que parte expressiva da produção é destinada à exportação. Corretoras e cooperativas acompanham de perto a logística de escoamento, ainda um dos principais gargalos do agronegócio regional."
  ]
},
{
  id:"gado-ms",
  slot:"destaque", category:"Pecuária",
  title:"MS exporta 1,2 milhão de cabeças de gado para o Oriente Médio no primeiro trimestre",
  lead:"Frigoríficos de Campo Grande e Dourados ampliam capacidade para atender à demanda externa crescente.",
  img:"img/gado-ms.jpg",
  author:"Roberto Campos", date:"30 mai 2026", read:"4 min",
  body:[
    "Mato Grosso do Sul exportou cerca de 1,2 milhão de cabeças de gado para o Oriente Médio no primeiro trimestre, em um movimento que reforça o protagonismo do estado na pecuária de corte. A demanda crescente de países da região levou frigoríficos de Campo Grande e Dourados a ampliarem sua capacidade de abate e processamento.",
    "O mercado do Oriente Médio é estratégico para a carne brasileira por exigir padrões específicos de abate e certificação. Atender a essas exigências abre portas para contratos de maior valor e diversifica os compradores, reduzindo a dependência de poucos mercados.",
    "A expansão dos frigoríficos gera empregos diretos e indiretos e movimenta toda a cadeia, do produtor rural aos serviços de transporte e logística. O setor, porém, enfrenta o desafio de conciliar o crescimento com práticas sustentáveis e rastreabilidade do rebanho.",
    "Entidades do setor defendem o avanço de programas de pecuária de baixo carbono, que integram lavoura, pecuária e floresta. A aposta é agregar valor à carne sul-mato-grossense em um mercado internacional cada vez mais atento à origem e à pegada ambiental dos produtos."
  ]
},
{
  id:"drones-sorriso",
  slot:"destaque", category:"Tecnologia Rural",
  title:"Drones com IA mapeiam plantações em Sorriso e reduzem uso de defensivos em 30%",
  lead:"Startup goiana expande projeto piloto para 12 municípios de Mato Grosso após resultados expressivos.",
  img:"img/drones-sorriso.jpg",
  author:"Ana Prestes", date:"30 mai 2026", read:"4 min",
  body:[
    "Em Sorriso, um dos maiores polos de produção de grãos de Mato Grosso, drones equipados com inteligência artificial estão mudando a forma de cuidar das lavouras. A tecnologia, desenvolvida por uma startup goiana, mapeia as plantações e identifica com precisão os pontos que realmente precisam de defensivos, reduzindo o uso de produtos em até 30%.",
    "Os equipamentos sobrevoam as áreas captando imagens em diferentes faixas de luz. O algoritmo cruza esses dados e detecta sinais de pragas, doenças ou estresse hídrico antes mesmo que o problema seja visível a olho nu, permitindo a chamada aplicação localizada — em vez de pulverizar toda a área, trata-se apenas o que está afetado.",
    "Além da economia financeira, a aplicação dirigida traz benefícios ambientais: menos defensivos significam menor contaminação do solo e da água e menor impacto sobre polinizadores. A precisão também melhora a produtividade, ao garantir que o problema seja combatido no momento certo.",
    "Após os resultados expressivos do projeto piloto, a startup anunciou a expansão para 12 municípios mato-grossenses. A meta é tornar a agricultura de precisão acessível também a médios produtores, que nem sempre dispõem de recursos para grandes investimentos em tecnologia."
  ]
},
{
  id:"irrigacao-goias",
  slot:"destaque", category:"Irrigação",
  title:"Goiás lidera investimento em irrigação e deve triplicar área plantada no Cerrado até 2030",
  lead:"Projeto estadual financia pivôs centrais em regiões com déficit hídrico histórico e aposta na fruticultura irrigada.",
  img:"img/irrigacao-goias.jpg",
  author:"Marcela Reis", date:"29 mai 2026", read:"5 min",
  body:[
    "Goiás se firma como referência nacional em agricultura irrigada e projeta triplicar a área plantada sob irrigação no Cerrado até o fim da década. Um programa estadual financia a instalação de pivôs centrais e sistemas modernos em regiões marcadas por déficit hídrico histórico, com foco na diversificação da produção.",
    "A irrigação permite mais de uma safra por ano e reduz a dependência da irregularidade das chuvas, característica do Cerrado. Com água disponível na hora certa, o produtor ganha previsibilidade e abre espaço para culturas de maior valor agregado, como a fruticultura.",
    "O programa prevê contrapartidas ambientais, como o uso eficiente da água, o monitoramento dos níveis dos rios e a recomposição de matas ciliares. A gestão dos recursos hídricos é o ponto mais sensível: a expansão precisa respeitar a capacidade das bacias para não comprometer o abastecimento e os ecossistemas.",
    "Para especialistas, o desafio é crescer de forma sustentável, conciliando produtividade e conservação. Bem manejada, a irrigação pode aumentar a renda no campo e reduzir a pressão por abertura de novas áreas, ajudando a preservar o segundo maior bioma do Brasil."
  ]
},
/* ---------- OPINIÃO ---------- */
{
  id:"op-agro-sustentavel",
  slot:"opiniao", category:"Opinião",
  title:"O agronegócio do Centro-Oeste pode ser sustentável sem perder competitividade",
  lead:"A dicotomia entre preservação e produção é falsa quando se analisam os dados dos últimos dez anos.",
  img:"img/safra-conab.jpg",
  author:"Marcos Figueiredo", role:"Economista e professor da UnB", date:"02 jun 2026", read:"5 min",
  body:[
    "Por anos, o debate público insistiu em opor produção e meio ambiente como se fossem forças irreconciliáveis. Os dados da última década, porém, contam uma história mais complexa — e mais promissora — para o Centro-Oeste.",
    "Ganhos de produtividade, integração lavoura-pecuária-floresta e agricultura de precisão mostraram que é possível produzir mais na mesma área, poupando o território que ainda precisa ser conservado. A competitividade não está em desmatar, mas em fazer render cada hectare já aberto.",
    "O mercado internacional, cada vez mais exigente, recompensa origem e rastreabilidade. Quem entender que sustentabilidade é vantagem comercial, e não custo, sairá na frente. O Centro-Oeste tem clima, tecnologia e capital humano para liderar essa transição.",
    "Cabe ao poder público criar os incentivos certos — crédito verde, assistência técnica e fiscalização eficiente — para que o produtor que faz a coisa certa seja premiado. O futuro do agro brasileiro passa por essa equação."
  ]
},
{
  id:"op-bororo",
  slot:"opiniao", category:"Opinião",
  title:"O que a cultura Bororo nos ensina sobre viver em comunidade no século XXI",
  lead:"Há saberes ancestrais nos povos do Cerrado que deveriam guiar nossas políticas urbanas contemporâneas.",
  img:"img/festa-cultura.jpg",
  author:"Juliana Ramos", role:"Jornalista e escritora", date:"01 jun 2026", read:"5 min",
  body:[
    "Os Bororo, povo originário do Centro-Oeste, organizam suas aldeias em círculos que traduzem uma visão de mundo: cada casa, cada clã, cada papel social tem seu lugar em relação ao todo. Não é apenas geometria — é filosofia de convivência.",
    "Enquanto nossas cidades crescem de costas umas para as outras, esses saberes ancestrais lembram que comunidade não se decreta, se constrói no cotidiano da reciprocidade. O cuidado coletivo com o território, com os mais velhos e com as crianças não é nostalgia: é tecnologia social.",
    "Políticas urbanas contemporâneas, obcecadas por eficiência, raramente perguntam como as pessoas querem viver juntas. Os povos do Cerrado oferecem respostas que a modernidade insiste em ignorar.",
    "Valorizar essas culturas não é gesto decorativo. É reconhecer que existem outras formas de habitar o mundo — e que talvez precisemos delas mais do que imaginamos."
  ]
},
{
  id:"op-cerrado-amazonia",
  slot:"opiniao", category:"Opinião",
  title:"Por que o Cerrado merece a mesma atenção que a Amazônia nas políticas públicas",
  lead:"O segundo maior bioma do Brasil segue sendo o mais ameaçado e o menos protegido do território nacional.",
  img:"img/chapada.jpg",
  author:"Tiago Cerqueira", role:"Biólogo e pesquisador do IB-USP", date:"31 mai 2026", read:"6 min",
  body:[
    "Chamado de \"berço das águas\", o Cerrado abastece as principais bacias hidrográficas do Brasil. Suas plantas guardam, nas raízes profundas, a memória de milhões de anos de adaptação à seca e ao fogo. E, ainda assim, é o bioma que mais perde cobertura nativa no país.",
    "Enquanto a Amazônia ocupa, com razão, o centro do debate ambiental, o Cerrado segue invisível para boa parte das políticas públicas. Tem menos áreas protegidas, menos fiscalização e menos investimento em ciência, apesar de sua importância estratégica para a água e o clima.",
    "Proteger o Cerrado é proteger a segurança hídrica de boa parte do território nacional. Cada nascente perdida aqui se sente lá na frente, nas torneiras das cidades e nas turbinas das hidrelétricas.",
    "Não se trata de competir por atenção, mas de reconhecer que a conservação do Brasil é incompleta sem o seu segundo maior bioma. O Cerrado precisa sair da sombra — antes que seja tarde."
  ]
}
];

/* Ordem de "Mais lidas" (por id) */
const MOST_READ = ["soja-mt-recorde","goias-infraestrutura","festa-junina-cg"];

if(typeof module!=="undefined"){module.exports={ARTICLES,MOST_READ};}
