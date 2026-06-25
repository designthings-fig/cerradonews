/* ===========================================================
   CerradoNews — app.js
   Renderização da home + busca + APIs (tempo e câmbio) ao vivo
   =========================================================== */

/* ---------- util ---------- */
const $ = (s, e = document) => e.querySelector(s);
const byId = id => ARTICLES.find(a => a.id === id);
const link = a => `noticia.html?id=${a.id}`;

function fmtDate(d){
  const dias=["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"];
  const meses=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
  const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
  return `${cap(dias[d.getDay()])}, ${String(d.getDate()).padStart(2,"0")} de ${meses[d.getMonth()]}. de ${d.getFullYear()}`;
}

/* ---------- DATE ---------- */
const td = $("#topDate"); if (td) td.textContent = fmtDate(new Date());

/* =========================================================
   HOME RENDERING
   ========================================================= */
function renderHome(){
  if(!$("#heroSlot")) return; // not the home page

  // HERO (featured)
  const hero = ARTICLES.find(a=>a.slot==="hero");
  $("#heroSlot").innerHTML = `
    <a class="feature" href="${link(hero)}">
      <div class="ph"><span class="cat">${hero.category}</span><img src="${hero.img}" alt=""></div>
      <div class="body">
        <h2>${hero.title}</h2>
        <p>${hero.lead}</p>
        <div class="meta"><b>${hero.author}</b> · ${hero.date} · ${hero.read}</div>
      </div>
    </a>`;

  // HERO SIDE (3 secundárias)
  $("#heroSide").innerHTML = ARTICLES.filter(a=>a.slot==="sub").map(a=>`
    <a class="mini" href="${link(a)}">
      <div class="ph"><img src="${a.img}" alt=""></div>
      <div class="body">
        <span class="cat">${a.category}</span>
        <h3>${a.title}</h3>
        <div class="meta"><b>${a.author}</b> · ${a.date}</div>
      </div>
    </a>`).join("");

  // ÚLTIMAS (3 cards)
  $("#ultimasSlot").innerHTML = ARTICLES.filter(a=>a.slot==="ultimas").map(a=>`
    <a class="card" href="${link(a)}">
      <div class="ph"><img src="${a.img}" alt=""></div>
      <div class="body">
        <span class="cat">${a.category}</span>
        <h3>${a.title}</h3>
        <p>${a.lead}</p>
        <div class="meta"><b>${a.author}</b> · ${a.date}</div>
      </div>
    </a>`).join("");

  // DESTAQUES (lista)
  $("#destaquesSlot").innerHTML = ARTICLES.filter(a=>a.slot==="destaque").map(a=>`
    <a class="list-row" href="${link(a)}">
      <div class="ph"><img src="${a.img}" alt=""></div>
      <div class="body">
        <span class="cat">${a.category}</span>
        <h3>${a.title}</h3>
        <p>${a.lead}</p>
        <div class="meta"><b>${a.author}</b> · ${a.date} · ${a.read}</div>
      </div>
    </a>`).join("");

  // MAIS LIDAS (ranked)
  $("#maisLidasSlot").innerHTML = MOST_READ.map(id=>{const a=byId(id);return `
    <a class="item" href="${link(a)}">
      <div class="num"></div>
      <div><span class="cat">${a.category}</span><h3>${a.title}</h3>
      <div class="meta"><b>${a.author}</b> · ${a.date}</div></div>
    </a>`;}).join("");

  // OPINIÃO
  $("#opiniaoSlot").innerHTML = ARTICLES.filter(a=>a.slot==="opiniao").map(a=>`
    <a class="op" href="${link(a)}">
      <div class="who"><div class="av">${a.author.split(" ").map(w=>w[0]).slice(0,2).join("")}</div>
        <div><b>${a.author}</b><span>${a.role||""}</span></div></div>
      <h3>${a.title}</h3>
      <p>${a.lead}</p>
    </a>`).join("");
}

/* =========================================================
   BUSCA
   ========================================================= */
function setupSearch(){
  const input=$("#searchInput"); if(!input) return;
  const panel=$("#searchPanel"), results=$("#searchResults"), title=$("#searchTitle");
  input.addEventListener("input",()=>{
    const q=input.value.trim().toLowerCase();
    if(q.length<2){panel.classList.remove("open");return;}
    const hits=ARTICLES.filter(a=>(a.title+" "+a.lead+" "+a.category+" "+a.author).toLowerCase().includes(q));
    title.textContent=`${hits.length} resultado(s) para "${input.value}"`;
    results.innerHTML=hits.length?hits.map(a=>`
      <a class="sr" href="${link(a)}">
        <img src="${a.img}" alt="">
        <div><span>${a.category} · ${a.date}</span><h4>${a.title}</h4></div>
      </a>`).join(""):`<p style="color:#777">Nenhuma notícia encontrada.</p>`;
    panel.classList.add("open");
  });
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){panel.classList.remove("open");input.blur();}});
}

/* =========================================================
   API 1 — PREVISÃO DO TEMPO (Open-Meteo · grátis, sem chave)
   ========================================================= */
const CITIES=[
  {nome:"Cuiabá",      lat:-15.601, lon:-56.097, tz:"America/Cuiaba"},
  {nome:"Campo Grande",lat:-20.469, lon:-54.620, tz:"America/Campo_Grande"},
  {nome:"Goiânia",     lat:-16.686, lon:-49.264, tz:"America/Sao_Paulo"},
  {nome:"Brasília",    lat:-15.793, lon:-47.882, tz:"America/Sao_Paulo"}
];
// código WMO -> {emoji, texto}
const WMO={
  0:["☀️","Céu limpo"],1:["🌤️","Predomínio de sol"],2:["⛅","Parcialmente nublado"],3:["☁️","Nublado"],
  45:["🌫️","Névoa"],48:["🌫️","Névoa com geada"],51:["🌦️","Garoa leve"],53:["🌦️","Garoa"],55:["🌧️","Garoa intensa"],
  61:["🌦️","Chuva fraca"],63:["🌧️","Chuva"],65:["🌧️","Chuva forte"],66:["🌧️","Chuva congelante"],67:["🌧️","Chuva congelante"],
  71:["🌨️","Neve fraca"],73:["🌨️","Neve"],75:["❄️","Neve forte"],80:["🌦️","Pancadas de chuva"],81:["🌧️","Pancadas fortes"],
  82:["⛈️","Temporais"],95:["⛈️","Trovoadas"],96:["⛈️","Trovoada com granizo"],99:["⛈️","Trovoada com granizo"]
};
const wmo=c=>WMO[c]||["🌡️","—"];
let wxCurrent=0;

async function loadWeather(i){
  wxCurrent=i;
  const c=CITIES[i];
  // marca aba ativa
  document.querySelectorAll("#wxTabs button").forEach((b,idx)=>b.classList.toggle("active",idx===i));
  $("#wxDesc").textContent="Carregando…"; $("#wxIco").textContent="⏳";
  const url=`https://api.open-meteo.com/v1/forecast?latitude=${c.lat}&longitude=${c.lon}`
    +`&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`
    +`&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max`
    +`&timezone=${encodeURIComponent(c.tz)}&forecast_days=4`;
  try{
    const r=await fetch(url); if(!r.ok) throw 0;
    const d=await r.json();
    const cur=d.current, day=d.daily;
    const [ico,txt]=wmo(cur.weather_code);
    $("#wxIco").textContent=ico;
    $("#wxTemp").innerHTML=`${Math.round(cur.temperature_2m)}<span>°C</span>`;
    $("#wxDesc").textContent=txt;
    $("#wxCity").textContent=c.nome;
    $("#wxHum").textContent=`${cur.relative_humidity_2m}%`;
    $("#wxUv").textContent=Math.round(day.uv_index_max[0]);
    $("#wxWind").textContent=`${Math.round(cur.wind_speed_10m)} km/h`;
    const wd=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
    $("#wxForecast").innerHTML=day.time.map((t,k)=>{
      const dt=new Date(t+"T12:00"); const [e]=wmo(day.weather_code[k]);
      return `<div class="d">${k===0?"Hoje":wd[dt.getDay()]}<div class="e">${e}</div>
        <b>${Math.round(day.temperature_2m_max[k])}°</b> <span style="opacity:.6">${Math.round(day.temperature_2m_min[k])}°</span></div>`;
    }).join("");
  }catch(e){
    $("#wxIco").textContent="⚠️";
    $("#wxDesc").textContent="Não foi possível carregar agora.";
    $("#wxCity").textContent=c.nome;
  }
}
function setupWeather(){
  if(!$("#wxTabs")) return;
  $("#wxTabs").innerHTML=CITIES.map((c,i)=>`<button onclick="loadWeather(${i})">${c.nome}</button>`).join("");
  loadWeather(0);
}

/* =========================================================
   API 2 — COTAÇÃO DE MOEDAS (AwesomeAPI · grátis, sem chave)
   ========================================================= */
const FX=[
  {key:"USDBRL", nome:"Dólar americano", sym:"$"},
  {key:"BTCBRL", nome:"Bitcoin",         sym:"₿"},
  {key:"GBPBRL", nome:"Libra Esterlina", sym:"£"},
  {key:"ARSBRL", nome:"Peso Argentino",  sym:"$"}
];
async function loadCurrency(){
  const slot=$("#fxSlot"); if(!slot) return;
  try{
    const r=await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,BTC-BRL,GBP-BRL,ARS-BRL");
    if(!r.ok) throw 0;
    const d=await r.json();
    slot.innerHTML=FX.map(f=>{
      const o=d[f.key]; if(!o) return "";
      const price=Number(o.bid);
      const fmt=price>=1?price.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})
                        :price.toLocaleString("pt-BR",{minimumFractionDigits:4,maximumFractionDigits:4});
      const pct=Number(o.pctChange);
      const cls=pct>=0?"up":"down"; const arrow=pct>=0?"▲":"▼";
      return `<div class="fx-row">
        <div class="fx-name"><span class="sym">${f.sym}</span><div>${f.nome}<br><span style="font-size:12px;color:#9a9a9a">${o.code}/BRL</span></div></div>
        <div class="fx-val"><div class="price">R$ ${fmt}</div><div class="chg ${cls}">${arrow} ${Math.abs(pct).toFixed(2)}%</div></div>
      </div>`;
    }).join("");
    const upd=new Date(d.USDBRL.create_date.replace(" ","T"));
    $("#fxFoot").textContent="Atualizado às "+upd.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});
  }catch(e){
    slot.innerHTML=`<div class="sub" style="color:#f0a">⚠️ Não foi possível carregar as cotações agora.</div>`;
  }
}

/* =========================================================
   NEWSLETTER (feedback simples, sem backend)
   ========================================================= */
function cerradoNewsletter(e){
  e.preventDefault();
  const msg=$("#newsMsg");
  if(msg) msg.textContent="✓ Inscrição confirmada! Em breve você receberá o boletim do Cerrado.";
  e.target.reset();
  return false;
}

/* ---------- INIT ---------- */
renderHome();
setupSearch();
setupWeather();
loadCurrency();
