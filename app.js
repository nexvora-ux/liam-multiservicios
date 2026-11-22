const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const phone = '51953170013';
const whatsApp = (message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const assets = './assets/';
const catalog = [
  {id:'portones',name:'Portones',items:[
    {name:'Portones seccionales',image:'portones/porton-seccional.jpg'},
    {name:'Portones levadizos',image:'portones/porton-levadizo.png'},
    {name:'Portones corredizos',image:'portones/porton-corredizo.png'},
    {name:'Portones enrollables',image:'portones/porton-enrollable.png'},
    {name:'Portones batientes',image:'portones/porton-batiente.png'},
    {name:'Portones basculantes',image:'empresa/porton-basculante.webp'}
  ]},
  {id:'estructuras',name:'Estructuras metálicas',items:[
    {name:'Puertas enrollables',image:'estructuras/portones-enrollables.png'},
    {name:'Escaleras metálicas',image:'estructuras/escaleras.webp'},
    {name:'Estanterías metálicas',image:'empresa/estructura-marcos-metalicos.webp'},
    {name:'Techos parabólicos',image:'estructuras/techos-parabolicos.png'},
    {name:'Techos tijerales',image:'estructuras/techos-tijerales-metalicos.webp'}
  ]},
  {id:'acero',name:'Acero inoxidable',items:[
    {name:'Barandas',image:'acero/barandas.webp'},
    {name:'Pasamanos',image:'acero/pasamanos.png'},
    {name:'Mostradores',image:'acero/mostradores.webp'}
  ]}
];
let activeCategory = 'portones';
let projectImages = [{"title":"Baranda industrial pasillo","image":"assets/empresa/baranda-industrial-pasillo.webp"},{"title":"Dos portones fachada","image":"assets/empresa/dos-portones-fachada.webp"},{"title":"Escalera de acero exterior","image":"assets/empresa/escalera-de-acero-exterior.webp"},{"title":"Escalera flotante de metal con madera","image":"assets/empresa/escalera-flotante-de-metal-con-madera.webp"},{"title":"Escalera metalica","image":"assets/empresa/escalera-metalica.webp"},{"title":"Estructura arcos","image":"assets/empresa/estructura-arcos.webp"},{"title":"Estructura marcos metalicos","image":"assets/empresa/estructura-marcos-metalicos.webp"},{"title":"Estructura metalica en arco","image":"assets/empresa/estructura-metalica-en-arco.webp"},{"title":"Estructura metalica para puertos","image":"assets/empresa/estructura-metalica-para-puertos.webp"},{"title":"Fachada porton y puerta","image":"assets/empresa/fachada-porton-y-puerta.webp"},{"title":"Fachada rejas porton","image":"assets/empresa/fachada-rejas-porton.webp"},{"title":"G3","image":"assets/empresa/g3.jpg"},{"title":"Porton basculante","image":"assets/empresa/porton-basculante.webp"},{"title":"Porton caramelo tres lunas","image":"assets/empresa/porton-caramelo-tres-lunas.webp"},{"title":"Porton corredizo de madera","image":"assets/empresa/porton-corredizo-de-madera.webp"},{"title":"Porton cuatro hojas 2 ","image":"assets/empresa/porton-cuatro-hojas-2-.webp"},{"title":"Porton cuatro hojas","image":"assets/empresa/porton-cuatro-hojas.webp"},{"title":"Porton doble tipo madera","image":"assets/empresa/porton-doble-tipo-madera.webp"},{"title":"Porton gris","image":"assets/empresa/porton-gris.webp"},{"title":"Porton madera doble","image":"assets/empresa/porton-madera-doble.webp"},{"title":"Porton madera natural corredizo","image":"assets/empresa/porton-madera-natural-corredizo.webp"},{"title":"Porton madera puerta peatonal","image":"assets/empresa/porton-madera-puerta-peatonal.webp"},{"title":"Porton metalico blanco abierto","image":"assets/empresa/porton-metalico-blanco-abierto.webp"},{"title":"Porton metalico gris sin manchas","image":"assets/empresa/porton-metalico-gris-sin-manchas.png"},{"title":"Porton negro moderno","image":"assets/empresa/porton-negro-moderno.webp"},{"title":"Porton oscuro inox","image":"assets/empresa/porton-oscuro-inox.webp"},{"title":"Porton seccional acabado madera con puerta","image":"assets/empresa/porton-seccional-acabado-madera-con-puerta.webp"},{"title":"Porton seccional de madera","image":"assets/empresa/porton-seccional-de-madera.webp"},{"title":"Porton seccional tipo madera","image":"assets/empresa/porton-seccional-tipo-madera.webp"},{"title":"Porton seccional","image":"assets/empresa/porton-seccional.webp"},{"title":"Porton y puerta fachada","image":"assets/empresa/porton-y-puerta-fachada.webp"},{"title":"Porton y puerta metalico","image":"assets/empresa/porton-y-puerta-metalico.webp"},{"title":"Porton y puerta seccional importada","image":"assets/empresa/porton-y-puerta-seccional-importada.webp"},{"title":"Protector puerta metalica","image":"assets/empresa/protector-puerta-metalica.webp"},{"title":"Puerta blanca franjas horizontales","image":"assets/empresa/puerta-blanca-franjas-horizontales.webp"},{"title":"Puerta caoba ladrillo","image":"assets/empresa/puerta-caoba-ladrillo.webp"},{"title":"Puerta doble gris vidrios curvos","image":"assets/empresa/puerta-doble-gris-vidrios-curvos.webp"},{"title":"Puerta en alto relieve","image":"assets/empresa/puerta-en-alto-relieve.webp"},{"title":"Puerta madera 4 lunas","image":"assets/empresa/puerta-madera-4-lunas.webp"},{"title":"Puerta metalica gris","image":"assets/empresa/puerta-metalica-gris.webp"},{"title":"Puerta negra contraplacada","image":"assets/empresa/puerta-negra-contraplacada.webp"},{"title":"Puerta negra manija acero","image":"assets/empresa/puerta-negra-manija-acero.webp"},{"title":"Puerta negra marco acero","image":"assets/empresa/puerta-negra-marco-acero.webp"},{"title":"Puerta negra triple vidrio","image":"assets/empresa/puerta-negra-triple-vidrio.webp"},{"title":"Puerta peatonal y garaje tipo madera","image":"assets/empresa/puerta-peatonal-y-garaje-tipo-madera.png"},{"title":"Puerta reja blanca fachada","image":"assets/empresa/puerta-reja-blanca-fachada.webp"},{"title":"Puerta roja contraplacada","image":"assets/empresa/puerta-roja-contraplacada.webp"},{"title":"Puerta tipo madera contraplacada","image":"assets/empresa/puerta-tipo-madera-contraplacada.webp"},{"title":"Puerta tipo madera","image":"assets/empresa/puerta-tipo-madera.webp"},{"title":"Puertas 18 lineas","image":"assets/empresa/puertas-18-lineas.webp"},{"title":"Puertas 4 cuadros","image":"assets/empresa/puertas-4-cuadros.webp"},{"title":"Puertas clasicas y portones","image":"assets/empresa/puertas-clasicas-y-portones.webp"},{"title":"Puertas combinadas","image":"assets/empresa/puertas-combinadas.webp"},{"title":"Puertas ivy","image":"assets/empresa/puertas-ivy.webp"},{"title":"Puertas luna larga combinada","image":"assets/empresa/puertas-luna-larga-combinada.webp"},{"title":"Puertas luna larga","image":"assets/empresa/puertas-luna-larga.webp"},{"title":"Puertas modelo cuadrada","image":"assets/empresa/puertas-modelo-cuadrada.webp"},{"title":"Puertas modelo curvo","image":"assets/empresa/puertas-modelo-curvo.webp"},{"title":"Puertas modelo triangulo","image":"assets/empresa/puertas-modelo-triangulo.webp"},{"title":"Reja geometrica","image":"assets/empresa/reja-geometrica.webp"},{"title":"Seccionales en panel importado","image":"assets/empresa/seccionales-en-panel-importado.webp"},{"title":"Sistema porton levadizo","image":"assets/empresa/sistema-porton-levadizo.webp"},{"title":"Techo metalico azul","image":"assets/empresa/techo-metalico-azul.webp"},{"title":"Ventana reja acordeon","image":"assets/empresa/ventana-reja-acordeon.webp"}];
let visibleProjects = 12;
let lightboxItems = [];
let lightboxIndex = 0;
let previousFocus = null;
let deferredPrompt = null;
function safeText(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function renderCatalog(){
  $('#categoryTabs').innerHTML = catalog.map(c=>`<button class="tab ${c.id===activeCategory?'active':''}" role="tab" aria-selected="${c.id===activeCategory}" data-category="${c.id}">${c.name}</button>`).join('');
  const group = catalog.find(c=>c.id===activeCategory);
  $('#catalogGrid').innerHTML = group.items.map((item,i)=>`<article class="product-card"><img src="${assets+item.image}" class="product-image" alt="${safeText(item.name)}" loading="lazy" data-item="${i}" tabindex="0"><div class="product-body"><h3>${safeText(item.name)}</h3><a class="btn btn-yellow" target="_blank" rel="noopener" href="${whatsApp(`Hola LIAM, deseo cotizar: ${item.name}.`)}"><img src="./assets/brands/whatsapp.svg" alt="" width="18" height="18"> Cotizar</a></div></article>`).join('');
  $$('.tab').forEach(tab=>tab.addEventListener('click',()=>{activeCategory=tab.dataset.category;renderCatalog();}));
  $$('.product-image').forEach(img=>{const show=()=>openLightbox(group.items.map(x=>({title:x.name,image:assets+x.image})),Number(img.dataset.item));img.addEventListener('click',show);img.addEventListener('keydown',e=>{if(e.key==='Enter')show()})});
}
function renderProjects(){
  $('#projectGallery').innerHTML=projectImages.slice(0,visibleProjects).map((p,i)=>`<button class="project-tile" data-index="${i}" aria-label="Ver ${safeText(p.title)}"><img src="./${p.image}" loading="lazy" alt="${safeText(p.title)}"><span>${safeText(p.title)}</span></button>`).join('');
  $$('.project-tile').forEach(el=>el.addEventListener('click',()=>openLightbox(projectImages.map(p=>({title:p.title,image:'./'+p.image})),Number(el.dataset.index))));
  $('#loadMore').hidden=visibleProjects>=projectImages.length;
}
function openLightbox(items,index){previousFocus=document.activeElement;lightboxItems=items;lightboxIndex=index;updateLightbox();$('#lightbox').hidden=false;$('#closeLightbox').focus();}
function updateLightbox(){const item=lightboxItems[lightboxIndex];if(!item)return;$('#lightboxImage').src=item.image;$('#lightboxImage').alt=item.title;$('#lightboxCaption').textContent=item.title;$('#lightboxQuote').href=whatsApp(`Hola LIAM, quiero cotizar un trabajo similar a: ${item.title}.`)}
function stepLightbox(delta){lightboxIndex=(lightboxIndex+delta+lightboxItems.length)%lightboxItems.length;updateLightbox()}
function closeModal(modal){modal.hidden=true;previousFocus?.focus?.();}
function showModal(modal){previousFocus=document.activeElement;modal.hidden=false;modal.querySelector('button')?.focus()}
function setBrandIcons(){const names={whatsapp:'whatsapp',facebook:'facebook',instagram:'instagram',tiktok:'tiktok',maps:'googlemaps',mail:'gmail'};$('[data-brand="none"]');$$('[data-brand]').forEach(el=>{const brand=names[el.dataset.brand];if(brand)el.innerHTML=`<img src="./assets/brands/${brand}.svg" alt="" width="100%" height="100%">`})}
async function showQr(){showModal($('#qrModal'));const url=location.href.split('#')[0];const holder=$('#qrCanvas');holder.textContent='Preparando código QR...';const img=new Image();img.alt=`QR para ${url}`;img.onload=()=>{holder.replaceChildren(img)};img.onerror=()=>{holder.textContent='No se pudo generar el QR. Utiliza el botón Copiar enlace.'};img.src=`https://api.qrserver.com/v1/create-qr-code/?size=280x280&margin=12&data=${encodeURIComponent(url)}`;}
function triggerDownload(url,name){const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();}
document.addEventListener('DOMContentLoaded',async()=>{
  $('#year').textContent=new Date().getFullYear();setBrandIcons();renderCatalog();
  // Catálogo integrado para que la galería funcione también en instalaciones privadas y sin solicitudes JSON.
  renderProjects();
  $('#showProjects').addEventListener('click',()=>{visibleProjects=projectImages.length;$('#showProjects').hidden=true;renderProjects();$('#projectGallery').scrollIntoView({behavior:'smooth',block:'start'})});
  $('#loadMore').addEventListener('click',()=>{visibleProjects+=12;renderProjects()});
  $('#closeLightbox').addEventListener('click',()=>closeModal($('#lightbox')));
  $('#prevImage').addEventListener('click',()=>stepLightbox(-1));$('#nextImage').addEventListener('click',()=>stepLightbox(1));
  let touchX=0;$('#lightboxImage').addEventListener('touchstart',e=>touchX=e.touches[0].clientX,{passive:true});$('#lightboxImage').addEventListener('touchend',e=>{let d=e.changedTouches[0].clientX-touchX;if(Math.abs(d)>55)stepLightbox(d>0?-1:1)},{passive:true});
  $('#menuBtn').addEventListener('click',()=>{const open=$('#mobileMenu').classList.toggle('open');$('#menuBtn').setAttribute('aria-expanded',String(open))});$$('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>{$('#mobileMenu').classList.remove('open');$('#menuBtn').setAttribute('aria-expanded','false')}));
  $('#quoteForm').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const fields=[['Nombre','nombre'],['Servicio','categoria'],['Tipo de trabajo','producto'],['Distrito o ciudad','ubicacion'],['Medidas','medidas'],['Detalles','detalles']];const message='Hola LIAM, deseo solicitar una cotización:\n\n'+fields.filter(([,key])=>data.get(key)?.trim()).map(([name,key])=>`${name}: ${data.get(key).trim()}`).join('\n');window.open(whatsApp(message),'_blank','noopener,noreferrer')});
  $('#qrBtn').addEventListener('click',showQr);$('#closeQr').addEventListener('click',()=>closeModal($('#qrModal')));
  $('#copyLink').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href.split('#')[0]);$('#copyLink').textContent='¡Enlace copiado!';setTimeout(()=>$('#copyLink').textContent='Copiar enlace',1800)}catch{alert('Copia este enlace: '+location.href.split('#')[0])}});
  $('#downloadQr').addEventListener('click',async()=>{const image=$('#qrCanvas img');if(!image){alert('El QR todavía no está listo');return;}try{const response=await fetch(image.src);const blob=await response.blob();const blobUrl=URL.createObjectURL(blob);triggerDownload(blobUrl,'QR-LIAM.png');setTimeout(()=>URL.revokeObjectURL(blobUrl),2000)}catch{window.open(image.src,'_blank','noopener')}});
  $('#shareBtn').addEventListener('click',async()=>{const data={title:'LIAM Multiservicios',text:'Conoce nuestros portones, estructuras metálicas y proyectos realizados',url:location.href.split('#')[0]};if(navigator.share){try{await navigator.share(data)}catch(e){if(e.name!=='AbortError')console.error(e)}}else{showQr()}});
  $('#installBtn').addEventListener('click',async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null}else showModal($('#installHelp'))});
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e});
  $('#closeInstallHelp').addEventListener('click',()=>closeModal($('#installHelp')));$('#dismissHelp').addEventListener('click',()=>closeModal($('#installHelp')));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')$$('.modal:not([hidden])').forEach(closeModal);if(!$('#lightbox').hidden){if(e.key==='ArrowLeft')stepLightbox(-1);if(e.key==='ArrowRight')stepLightbox(1)}});
  $$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m)}));
  const nav=$$('.bottom-nav a');const observer=new IntersectionObserver(entries=>{entries.filter(e=>e.isIntersecting).forEach(entry=>{nav.forEach(a=>a.classList.toggle('active',a.dataset.nav===entry.target.id))})},{rootMargin:'-30% 0px -60% 0px'});['inicio','catalogo','proyectos','servicios','cotizar'].forEach(id=>observer.observe($('#'+id)));
  if('serviceWorker' in navigator && location.protocol==='https:')navigator.serviceWorker.register('./sw.js').catch(console.warn);
});
