/* Injeta o CSS direto na página — garante o estilo mesmo em visualizadores
   que ignoram <link rel="stylesheet">. O arquivo css/style.css continua válido
   para edição e para o GitHub Pages. */
(function(){
var css = `
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,700;0,6..72,800;1,6..72,400;1,6..72,500&family=Inter:wght@400;500;600;700;800&family=Archivo:wght@400;500;600&family=Spectral:wght@400;500;600&display=swap');
:root{--orange:#e38b26;--orange-dark:#c9761a;--orange-tint:#fbe6cf;--ink:#1e1e1e;--dark:#252525;--dark-2:#323232;--bg:#f9f9f9;--card:#ffffff;--muted:#6f6f6f;--line:#e7e7e7;--live:#e02424;--maxw:1200px;--radius:10px;--shadow:0 1px 3px rgba(0,0,0,.06),0 6px 22px rgba(0,0,0,.05)}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:140px}
body{font-family:"Inter",system-ui,Arial,sans-serif;background:var(--bg);color:var(--ink);line-height:1.55;-webkit-font-smoothing:antialiased}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 20px}
h1,h2,h3,h4,.serif{font-family:"Newsreader","Georgia",serif}
.topbar{background:var(--dark);color:#dcdcdc;font-size:13px}
.topbar .wrap{display:flex;align-items:center;justify-content:space-between;height:38px}
.topbar a:hover{color:#fff}
.live{display:inline-flex;align-items:center;gap:7px;color:#fff;font-weight:600;letter-spacing:.02em}
.live .dot{width:8px;height:8px;border-radius:50%;background:var(--live);box-shadow:0 0 0 0 rgba(224,36,36,.6);animation:pulse 1.6s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(224,36,36,.55)}70%{box-shadow:0 0 0 8px rgba(224,36,36,0)}100%{box-shadow:0 0 0 0 rgba(224,36,36,0)}}
.topbar .date{opacity:.85}
.topbar .social{display:flex;gap:16px}
.masthead{background:var(--card);border-bottom:1px solid var(--line)}
.masthead .wrap{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:18px 20px}
.brand{display:flex;flex-direction:column;line-height:1}
.brand .logo{font-family:"Newsreader",serif;font-weight:800;font-size:34px;letter-spacing:-.01em;color:var(--ink)}
.brand .logo b{color:var(--orange)}
.brand .tagline{font-family:"Archivo",Inter,sans-serif;font-size:12.5px;color:var(--muted);margin-top:4px;letter-spacing:.04em;text-transform:uppercase}
.search{display:flex;align-items:center;gap:8px;background:#f1f1f1;border:1px solid var(--line);border-radius:999px;padding:9px 16px;min-width:300px}
.search input{border:0;background:transparent;outline:0;font-size:14px;width:100%;color:var(--ink)}
.search svg{flex:0 0 auto;opacity:.55}
.nav{background:var(--card);border-bottom:2px solid var(--orange);position:sticky;top:0;z-index:50}
.nav .wrap{display:flex;align-items:center;gap:6px;height:50px;overflow-x:auto}
.nav a{font-size:14px;font-weight:600;color:#333;padding:8px 13px;border-radius:7px;white-space:nowrap;transition:.15s}
.nav a:hover{background:var(--orange-tint);color:var(--orange-dark)}
.nav a.active{color:var(--orange-dark)}
.sec{padding:38px 0}
.sec-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.sec-title{font-size:26px;font-weight:800;position:relative;padding-left:16px}
.sec-title::before{content:"";position:absolute;left:0;top:6px;bottom:6px;width:5px;background:var(--orange);border-radius:3px}
.see-all{font-family:"Inter";font-size:13.5px;font-weight:700;color:var(--orange-dark)}
.see-all:hover{text-decoration:underline}
.cat{display:inline-block;font-family:"Inter";font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--orange-dark);background:var(--orange-tint);padding:4px 9px;border-radius:5px}
.meta{font-family:"Inter";font-size:12.5px;color:var(--muted);display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.meta b{color:#333;font-weight:600}
.hero{padding-top:30px}
.hero-grid{display:grid;grid-template-columns:1.55fr 1fr;gap:26px}
.feature{background:var(--card);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow)}
.feature .ph{position:relative;aspect-ratio:16/9;overflow:hidden}
.feature .ph img{width:100%;height:100%;object-fit:cover;transition:.4s}
.feature:hover .ph img{transform:scale(1.04)}
.feature .body{padding:22px 24px 26px}
.feature h2{font-size:34px;line-height:1.14;margin:12px 0 12px;font-weight:800}
.feature p{color:#444;font-size:16px;margin-bottom:14px}
.feature .cat{position:absolute;top:14px;left:14px;background:var(--orange);color:#fff}
.side{display:flex;flex-direction:column;gap:18px}
.mini{display:grid;grid-template-columns:104px 1fr;gap:14px;background:var(--card);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);padding:0}
.mini .ph{width:104px;height:100%;min-height:104px;overflow:hidden}
.mini .ph img{width:100%;height:100%;object-fit:cover}
.mini .body{padding:12px 14px 12px 0;display:flex;flex-direction:column;gap:7px;justify-content:center}
.mini h3{font-size:17px;line-height:1.2;font-weight:700}
.mini:hover h3{color:var(--orange-dark)}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.card{background:var(--card);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);display:flex;flex-direction:column}
.card .ph{aspect-ratio:16/10;overflow:hidden}
.card .ph img{width:100%;height:100%;object-fit:cover;transition:.4s}
.card:hover .ph img{transform:scale(1.05)}
.card .body{padding:16px 18px 20px;display:flex;flex-direction:column;gap:9px;flex:1}
.card h3{font-size:20px;line-height:1.2;font-weight:700}
.card:hover h3{color:var(--orange-dark)}
.card p{color:#555;font-size:14px;flex:1}
.list-row{display:grid;grid-template-columns:240px 1fr;gap:20px;padding:20px 0;border-bottom:1px solid var(--line)}
.list-row:first-child{padding-top:0}
.list-row .ph{aspect-ratio:16/10;border-radius:8px;overflow:hidden}
.list-row .ph img{width:100%;height:100%;object-fit:cover;transition:.4s}
.list-row:hover .ph img{transform:scale(1.05)}
.list-row .body{display:flex;flex-direction:column;gap:9px}
.list-row h3{font-size:22px;line-height:1.2;font-weight:700}
.list-row:hover h3{color:var(--orange-dark)}
.list-row p{color:#555;font-size:14.5px}
.lower{display:grid;grid-template-columns:1.4fr 1fr;gap:30px;align-items:start}
.ranked{counter-reset:rk}
.ranked .item{display:grid;grid-template-columns:46px 1fr;gap:14px;padding:16px 0;border-bottom:1px solid var(--line)}
.ranked .item:first-child{padding-top:0}
.ranked .num{counter-increment:rk;font-family:"Newsreader",serif;font-size:40px;font-weight:800;color:var(--orange);line-height:1}
.ranked .num::before{content:counter(rk)}
.ranked h3{font-size:18px;line-height:1.22;font-weight:700;margin-bottom:5px}
.ranked .item:hover h3{color:var(--orange-dark)}
.widget{background:var(--dark);color:#f3f3f3;border-radius:14px;padding:22px;margin-bottom:24px;box-shadow:var(--shadow)}
.widget h3{font-size:20px;font-weight:800;color:#fff;margin-bottom:4px}
.widget .sub{font-size:12.5px;color:#b9b9b9;margin-bottom:16px}
.wx-tabs{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:18px}
.wx-tabs button{font-family:"Inter";font-size:12.5px;font-weight:600;color:#dcdcdc;background:var(--dark-2);border:1px solid #444;border-radius:999px;padding:6px 13px;cursor:pointer;transition:.15s}
.wx-tabs button.active,.wx-tabs button:hover{background:var(--orange);border-color:var(--orange);color:#fff}
.wx-now{display:flex;align-items:center;gap:18px;margin-bottom:18px}
.wx-now .ico{font-size:46px;line-height:1}
.wx-temp{font-family:"Newsreader",serif;font-size:58px;font-weight:800;line-height:.9}
.wx-temp span{font-size:24px;vertical-align:top}
.wx-desc{font-size:14px;color:#cfcfcf}
.wx-desc .city{font-weight:700;color:#fff}
.wx-stats{display:flex;gap:26px;margin-bottom:18px}
.wx-stats div{font-size:13px;color:#bdbdbd}
.wx-stats b{display:block;font-family:"Newsreader",serif;font-size:22px;color:#fff;font-weight:700}
.wx-forecast{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;border-top:1px solid #3a3a3a;padding-top:14px}
.wx-forecast .d{text-align:center;font-size:12px;color:#bdbdbd}
.wx-forecast .d .e{font-size:22px;margin:3px 0}
.wx-forecast .d b{color:#fff;font-size:13px}
.fx-row{display:flex;align-items:center;justify-content:space-between;padding:13px 0;border-bottom:1px solid #3a3a3a}
.fx-row:last-child{border-bottom:0}
.fx-name{display:flex;align-items:center;gap:11px;font-size:14px}
.fx-name .sym{width:34px;height:34px;border-radius:50%;background:var(--dark-2);display:grid;place-items:center;font-size:16px;font-weight:700;color:var(--orange)}
.fx-val{text-align:right;font-family:"Spectral",serif}
.fx-val .price{font-size:18px;font-weight:600;color:#fff}
.fx-val .chg{font-size:12px;font-family:"Inter"}
.up{color:#4ade80}.down{color:#f87171}
.fx-foot{font-size:11px;color:#9a9a9a;margin-top:14px;text-align:right}
.strip{background:var(--card);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden;display:grid;grid-template-columns:1.4fr 1fr}
.strip .ph{background:#f3ead9}
.strip .ph img{width:100%;height:100%;object-fit:contain}
.strip .body{padding:30px 32px;display:flex;flex-direction:column;justify-content:center;gap:12px}
.strip .body h3{font-size:28px;font-weight:800}
.strip .body p{color:#555;font-size:15px}
.op-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.op{background:var(--card);border-radius:var(--radius);box-shadow:var(--shadow);padding:24px;border-top:4px solid var(--orange)}
.op .who{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.op .av{width:46px;height:46px;border-radius:50%;background:var(--orange-tint);color:var(--orange-dark);display:grid;place-items:center;font-weight:800;font-family:"Newsreader",serif;font-size:20px}
.op .who b{font-size:15px;display:block}
.op .who span{font-size:12px;color:var(--muted)}
.op h3{font-size:21px;line-height:1.25;font-weight:700;margin-bottom:10px}
.op:hover h3{color:var(--orange-dark)}
.op p{font-size:14px;color:#555}
footer{background:var(--dark);color:#cfcfcf;margin-top:50px;padding:50px 0 26px}
.foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1.4fr;gap:34px}
footer .logo{font-family:"Newsreader",serif;font-weight:800;font-size:28px;color:#fff}
footer .logo b{color:var(--orange)}
footer .tagline{font-family:"Archivo",Inter;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:var(--orange);margin:6px 0 14px}
footer p.desc{font-size:13.5px;line-height:1.65;color:#aeaeae;max-width:380px}
footer h4{color:#fff;font-size:15px;margin-bottom:14px;font-family:"Inter";font-weight:700}
footer ul{list-style:none}
footer li{margin-bottom:9px}
footer li a{font-size:13.5px;color:#bdbdbd}
footer li a:hover{color:var(--orange)}
.news-form{display:flex;gap:8px;margin-top:12px}
.news-form input{flex:1;border:0;border-radius:7px;padding:11px 13px;font-size:13px}
.news-form button{background:var(--orange);color:#fff;border:0;border-radius:7px;padding:0 16px;font-weight:700;cursor:pointer;font-size:13px}
.foot-bottom{border-top:1px solid #3a3a3a;margin-top:36px;padding-top:20px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:12.5px;color:#9a9a9a}
#searchPanel{display:none;background:var(--card);border-bottom:1px solid var(--line)}
#searchPanel.open{display:block}
#searchPanel .wrap{padding:20px}
#searchResults{display:grid;gap:10px;margin-top:8px}
.sr{display:grid;grid-template-columns:90px 1fr;gap:14px;padding:10px;border:1px solid var(--line);border-radius:8px}
.sr img{width:90px;height:60px;object-fit:cover;border-radius:6px}
.sr h4{font-size:16px}
.sr span{font-size:12px;color:var(--muted)}
.article{max-width:760px;margin:40px auto;padding:0 20px}
.article .cat{margin-bottom:14px}
.article h1{font-size:40px;line-height:1.12;font-weight:800;margin-bottom:16px}
.article .lead{font-size:20px;color:#444;line-height:1.5;margin-bottom:18px;font-family:"Newsreader",serif;font-style:italic}
.article .byline{display:flex;gap:10px;align-items:center;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:14px 0;margin-bottom:22px}
.article .byline .av{width:42px;height:42px;border-radius:50%;background:var(--orange-tint);color:var(--orange-dark);display:grid;place-items:center;font-weight:800;font-family:"Newsreader",serif}
.article .hero-img{border-radius:var(--radius);overflow:hidden;margin-bottom:8px}
.article .hero-img img{width:100%}
.article figcaption{font-size:12.5px;color:var(--muted);margin-bottom:24px}
.article .content p{font-size:17.5px;line-height:1.8;margin-bottom:20px;color:#2a2a2a}
.article .content h2{font-size:26px;margin:30px 0 12px}
.article .content blockquote{border-left:4px solid var(--orange);padding:6px 0 6px 20px;margin:24px 0;font-family:"Newsreader",serif;font-size:21px;font-style:italic;color:#333}
.back{display:inline-flex;gap:8px;align-items:center;color:var(--orange-dark);font-weight:700;font-size:14px;margin-bottom:24px}
.page-hero{background:var(--dark);color:#fff;padding:46px 0}
.page-hero h1{font-size:38px;font-weight:800}
.page-hero p{color:#c9c9c9;margin-top:8px;max-width:620px}
.media-card{background:var(--card);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden;max-width:860px;margin:0 auto}
.media-card .head{padding:26px 30px;border-bottom:1px solid var(--line)}
.media-card .head h2{font-size:26px;font-weight:800}
.media-card .head p{color:#555;margin-top:6px}
.media-card .pad{padding:26px 30px}
.video-frame{aspect-ratio:16/9;background:#000}
.video-frame iframe{width:100%;height:100%;border:0}
.audio-player{display:flex;align-items:center;gap:16px;background:var(--dark);color:#fff;border-radius:12px;padding:18px 22px}
.audio-player button{width:54px;height:54px;border-radius:50%;border:0;background:var(--orange);color:#fff;font-size:22px;cursor:pointer;flex:0 0 auto}
.episode{display:flex;gap:14px;padding:14px 0;border-bottom:1px solid var(--line)}
.episode .n{width:34px;height:34px;border-radius:8px;background:var(--orange-tint);color:var(--orange-dark);display:grid;place-items:center;font-weight:800}
.tirinha-full{background:#f3ead9;border-radius:var(--radius);padding:18px;box-shadow:var(--shadow);margin-bottom:26px}
.tirinha-full img{margin:0 auto;border-radius:6px}
.tirinha-full .cap{text-align:center;font-family:"Newsreader",serif;font-style:italic;color:#555;margin-top:12px}
@media(max-width:920px){.hero-grid,.lower,.strip{grid-template-columns:1fr}.cards,.op-grid{grid-template-columns:1fr 1fr}.foot-grid{grid-template-columns:1fr 1fr}.feature h2{font-size:28px}}
@media(max-width:620px){.masthead .wrap{flex-direction:column;align-items:flex-start;gap:12px}.search{min-width:0;width:100%}.cards,.op-grid,.foot-grid{grid-template-columns:1fr}.list-row{grid-template-columns:1fr}.feature h2{font-size:24px}.article h1{font-size:30px}.topbar .social{display:none}.sec-title{font-size:22px}}
`;
var s=document.createElement('style');s.textContent=css;
(document.head||document.documentElement).appendChild(s);
})();
