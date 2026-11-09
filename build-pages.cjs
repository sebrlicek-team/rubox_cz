const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, 'dist');

const pages = [
  {
    file:'vyskove-prace.html', title:'Výškové práce', number:'01', tag:'PRÁCE VE VÝŠKÁCH',
    headline:'Tam, kam se běžně <em>nedostanete.</em>',
    lead:'Práce na fasádách, střechách a dalších obtížně přístupných místech. Podle podmínek na místě volíme lanovou techniku nebo jiný vhodný způsob přístupu.',
    image:'vyskove_prace_hradec_kralove.jpg', imageAlt:'Pracovníci zajištění na lanech u prosklené fasády',
    introTitle:'Přístup je součást řešení.',
    intro:'Každý objekt klade jiné nároky na přístup i provedení. Ve výšce řešíme údržbu, opravy a montáže s ohledem na podobu stavby a konkrétní zadání.',
    items:[
      ['01','Lanová technika','Umožňuje práci na vysokých budovách, střechách a místech, kam se běžná technika dostává obtížně.'],
      ['02','Údržba a opravy','Práce na fasádách, střechách a konstrukcích, jejichž stav vyžaduje zásah ve výšce.'],
      ['03','Montáže ve výšce','Instalace prvků na objektech, včetně reklamních plachet a dalších montážních úkolů.'],
      ['04','Ochrana proti ptákům','Montáž zábran na parapety, římsy nebo hřebeny střech podle typu objektu.']
    ],
    featureTitle:'Zábrany proti ptákům i na členitých stavbách.',
    featureText:'Historické budovy, věže a vysoké fasády často vyžadují práci z lana. Umístění zábran se přizpůsobuje místům, která je potřeba chránit.',
    featureImage:'zabrany-proti-ptakum-ukazka.jpg', featureAlt:'Montáž ochrany proti ptákům na věži',
    gallery:true,
  },
  {
    file:'stavebni-prace.html', title:'Stavební práce', number:'02', tag:'PRÁCE NA OBJEKTECH',
    headline:'Pro stavbu, která se <em>posouvá dál.</em>',
    lead:'Stavební práce pro opravy, úpravy i nové záměry. Rozsah vždy vychází z konkrétního objektu a toho, co potřebujete vyřešit.',
    image:'stavebni_prace_hradec_kralove.jpg', imageAlt:'Stavební práce na rodinném domě s lešením',
    introTitle:'Každá zakázka začíná zadáním.',
    intro:'Při plánování stavebních prací je důležité znát stav objektu, rozsah zásahu a požadovaný termín. Tyto informace nám pomohou domluvit vhodný postup.',
    items:[
      ['01','Úpravy a opravy','Práce na stávajících objektech podle potřeb jejich vlastníků a správců.'],
      ['02','Práce na střechách','Stavební zásahy ve střešní části objektu podle konkrétního zadání.'],
      ['03','Práce na fasádách','Úpravy a opravy vnějších částí budov.'],
      ['04','Návazné činnosti','Stavební práce, které mohou navázat na přípravu terénu nebo práce ve výšce.']
    ],
    featureTitle:'Řešení pro konkrétní objekt.',
    featureText:'Jiný postup vyžaduje rodinný dům, jiný složitější stavební zásah. Pošlete základní informace a fotografie místa; další postup se domluví podle rozsahu prací.',
    featureImage:'stavebni_prace_hradec_kralove.jpg', featureAlt:'Oprava rodinného domu s lešením'
  },
  {
    file:'kominicke-prace.html', title:'Kominické práce', number:'03', tag:'KOMÍNY A SPALINOVÉ CESTY',
    headline:'Komín v dobrých <em>rukou.</em>',
    lead:'Od pravidelného čištění a kontroly spalinové cesty po úpravu stávajícího komína nebo stavbu nového. Rozsah práce vychází ze stavu komína a typu spotřebiče.',
    image:'kominy_hradec_kralove.jpg', imageAlt:'Práce na střeše rodinného domu u komína',
    introTitle:'Péče o komín od kontroly po realizaci.',
    intro:'Spalinová cesta potřebuje pravidelnou péči. Při změně spotřebiče nebo nevyhovujícím stavu komína může být nutná také technická úprava průduchu či nové řešení.',
    items:[
      ['01','Čištění a kontrola','Pravidelná kontrola a čištění spalinové cesty od vyústění komína po napojení spotřebiče.'],
      ['02','Frézování komínů','Rozšíření průduchu na potřebný průměr, například jako příprava před vložkováním.'],
      ['03','Vložkování komínů','Úprava stávajícího komína při změně spotřebiče nebo nevyhovujícím stavu spalinové cesty.'],
      ['04','Stavba nových komínů','Realizace nových zděných i nerezových komínových řešení podle potřeb stavby.']
    ],
    featureTitle:'Když stávající komín nestačí.',
    featureText:'Vložkování a frézování se navrhuje podle skutečného stavu komína, požadovaného průměru a připojeného spotřebiče. Nový komín je další možností, pokud to zadání vyžaduje.',
    featureImage:'komin-ukazka-belecko.jpg', featureAlt:'Nerezový kouřovod na rozestavěné střeše'
  },
  {
    file:'zemni-prace.html', title:'Zemní práce', number:'04', tag:'PŘÍPRAVA TERÉNU',
    headline:'Začínáme od <em>základů.</em>',
    lead:'Zemní a výkopové práce pro přípravu stavby i úpravy okolí objektu. Vhodný postup určuje terén, prostor a rozsah plánovaného zásahu.',
    image:'zemni_prace_hradec_kralove.jpg', imageAlt:'Malý pásový bagr při zemních pracích u domu',
    introTitle:'Připravíme prostor pro další krok.',
    intro:'Zemní práce vytvářejí podmínky pro navazující stavební činnosti. Před zahájením je užitečné znát požadované rozměry, přístup na pozemek a charakter terénu.',
    items:[
      ['01','Výkopové práce','Výkopy podle zadání a podmínek konkrétního pozemku.'],
      ['02','Příprava terénu','Úprava ploch před dalšími stavebními pracemi.'],
      ['03','Práce kolem objektů','Zemní zásahy v okolí domů a dalších staveb.'],
      ['04','Terénní úpravy','Srovnání a úpravy terénu podle požadovaného výsledku.']
    ],
    featureTitle:'Podmínky místa rozhodují.',
    featureText:'U zemních prací záleží na přístupu pro techniku, prostoru k manipulaci a podobě terénu. Pošlete místo realizace a stručný popis zamýšlené práce.',
    featureImage:'zemni_prace_hradec_kralove.jpg', featureAlt:'Zemní práce s bagrem u objektu'
  }
];

const galleryAlt = [
  'Pracovník jištěný lanem u prosklené fasády',
  'Zajištěný pracovník při montáži ve výšce',
  'Montáž u stropní konstrukce v hale',
  'Pracovník na laně u výškové budovy',
  'Práce z pracovní plošiny na městské budově',
  'Pracovní plošina a ořez stromu',
  'Práce na stromě nad střechou domu',
  'Zajištěný pracovník při ořezu stromu',
  'Ořez stromu pomocí plošiny a lana',
  'Pohled z pracovní plošiny při práci ve výšce'
];
const galleryOrder = [1,4,2,3,5,10,6,7,8,9];

function renderGallery(){
  return `<section class="detail-gallery section wrap" id="galerie" aria-labelledby="gallery-title">
    <div class="section-top"><div class="eyebrow"><span class="eyebrow-line"></span> FOTOGALERIE</div><div class="tiny-id">10 SNÍMKŮ</div></div>
    <div class="detail-section-head"><h2 id="gallery-title">Práce v <span>obrazech.</span></h2><p>Ukázky prací a přístupu ve výšce.</p></div>
    <div class="gallery-grid">${galleryOrder.map((n,i)=>`<button class="gallery-item${i===0?' gallery-featured':''}" type="button" data-gallery="assets/vyskove-galerie/vyskove_prace_Hradec_kralove_${n}.jpg" data-caption="${galleryAlt[n-1]}" aria-label="Zobrazit fotografii ${i+1} z 10: ${galleryAlt[n-1]}"><img src="assets/vyskove-galerie/vyskove_prace_Hradec_kralove_${n}.jpg" alt="${galleryAlt[n-1]}" loading="lazy" decoding="async"><span aria-hidden="true">↗</span></button>`).join('')}</div>
  </section><dialog class="lightbox" id="lightbox" aria-label="Fotogalerie výškových prací"><button class="lightbox-close" type="button" aria-label="Zavřít fotografii">×</button><button class="lightbox-prev" type="button" aria-label="Předchozí fotografie">‹</button><figure><img alt=""><figcaption></figcaption></figure><button class="lightbox-next" type="button" aria-label="Další fotografie">›</button></dialog>`;
}

function render(page){
  const others = pages.filter(p=>p.file!==page.file);
  return `<!doctype html>
<html lang="cs"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#091b2a"><meta name="robots" content="noindex, nofollow, noarchive"><meta name="description" content="${page.title} – Rubox servis s.r.o. ${page.lead}"><title>${page.title} | Rubox servis s.r.o.</title><link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="detail.css"></head>
<body class="detail-page"><a class="skip" href="#main">Přejít na obsah</a>
  <header class="site-header" id="top"><a class="brand" href="index.html" aria-label="Rubox servis – úvod"><img src="assets/logo_rubox_white_2026.png" alt="Rubox servis s.r.o."></a><button class="menu-toggle" type="button" aria-label="Otevřít menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button><nav id="nav" aria-label="Hlavní navigace"><a href="index.html#pristup">O nás</a><a href="index.html#sluzby">Služby</a><a href="index.html#postup">Jak pracujeme</a><a href="index.html#kontakt">Kontakt</a><a class="nav-cta" href="index.html?sluzba=${encodeURIComponent(page.title)}#kontakt">Poptat práce <span aria-hidden="true">↗</span></a></nav></header>
  <main id="main">
    <section class="detail-hero" aria-labelledby="detail-title"><img class="detail-hero-image" src="assets/${page.image}" alt=""><div class="detail-hero-shade"></div><div class="wrap detail-hero-inner"><a class="back-link" href="index.html#sluzby">← Všechny služby</a><div class="eyebrow light"><span class="eyebrow-line"></span> ${page.tag}</div><h1 id="detail-title">${page.title}<small>${page.headline}</small></h1><p>${page.lead}</p><a class="button primary" href="index.html?sluzba=${encodeURIComponent(page.title)}#kontakt">Poptat ${page.title.toLowerCase()} <span aria-hidden="true">↗</span></a></div><span class="detail-hero-number">${page.number} / 04</span></section>
    <section class="detail-intro section wrap"><div class="section-top"><div class="eyebrow"><span class="eyebrow-line"></span> ${page.tag}</div><div class="tiny-id">${page.number} — RUBOX SERVIS</div></div><div class="detail-section-head"><h2>${page.introTitle}</h2><p>${page.intro}</p></div></section>
    <section class="detail-offer"><div class="wrap"><div class="section-top"><div class="eyebrow light"><span class="eyebrow-line"></span> CO PRO VÁS MŮŽEME UDĚLAT</div><div class="tiny-id">PŘEHLED ČINNOSTÍ</div></div><div class="offer-grid">${page.items.map(item=>`<article class="offer-item"><span>${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p></article>`).join('')}</div></div></section>
    <section class="detail-feature section wrap"><div class="feature-image${page.file==='vyskove-prace.html'?' enhanced-photo':''}"><img src="assets/${page.featureImage}" alt="${page.featureAlt}" loading="lazy" decoding="async"></div><div class="feature-copy"><div class="eyebrow"><span class="eyebrow-line"></span> V PRAXI</div><h2>${page.featureTitle}</h2><p>${page.featureText}</p><a class="text-link dark" href="index.html?sluzba=${encodeURIComponent(page.title)}#kontakt">Popsat své zadání <span aria-hidden="true">↗</span></a></div></section>
    ${page.gallery?renderGallery():''}
    <section class="detail-next"><div class="wrap"><div class="section-top"><div class="eyebrow"><span class="eyebrow-line"></span> DALŠÍ SLUŽBY</div><div class="tiny-id">RUBOX SERVIS</div></div><div class="next-grid">${others.map(p=>`<a href="${p.file}"><span>${p.number} / 04</span><strong>${p.title}</strong><b aria-hidden="true">↗</b></a>`).join('')}</div></div></section>
    <section class="detail-cta"><div class="wrap"><div><div class="eyebrow light"><span class="eyebrow-line"></span> MÁTE ZADÁNÍ?</div><h2>Řekněte nám o <em>svém projektu.</em></h2><p>Pošlete místo, přibližný rozsah a termín. Společně upřesníme další postup.</p></div><a class="button primary" href="index.html?sluzba=${encodeURIComponent(page.title)}#kontakt">Připravit poptávku <span aria-hidden="true">↗</span></a></div></section>
  </main><footer class="site-footer"><div class="wrap footer-inner"><a href="index.html"><img src="assets/logo_rubox_white_2026.png" alt="Rubox servis s.r.o."></a><span>Výškové · stavební · kominické · zemní práce</span><a href="#top">Zpět nahoru ↑</a></div></footer>${page.file==='vyskove-prace.html'?'<svg class="photo-filters" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><filter id="photo-enhance" color-interpolation-filters="sRGB"><feComponentTransfer in="SourceGraphic" result="lift"><feFuncR type="gamma" amplitude="1" exponent="0.50" offset="0"/><feFuncG type="gamma" amplitude="1" exponent="0.50" offset="0"/><feFuncB type="gamma" amplitude="1" exponent="0.50" offset="0"/></feComponentTransfer><feColorMatrix in="lift" type="saturate" values="1.08" result="color"/><feConvolveMatrix in="color" order="3" kernelMatrix="0 -0.18 0 -0.18 1.72 -0.18 0 -0.18 0" divisor="1" preserveAlpha="true"/></filter></svg>':''}<script src="script.js"></script></body></html>`;
}

for (const page of pages) fs.writeFileSync(path.join(out,page.file),render(page),'utf8');
console.log(`Vygenerovány ${pages.length} podstránky.`);
