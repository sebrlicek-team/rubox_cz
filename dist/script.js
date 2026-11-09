const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Zavřít menu' : 'Otevřít menu');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Otevřít menu');
}));

const form = document.querySelector('#inquiry-form');
const result = document.querySelector('#form-result');
const message = document.querySelector('#message');
if (form) {
  const selectedService = new URLSearchParams(location.search).get('sluzba');
  const typeSelect = document.querySelector('#type');
  if (selectedService && [...typeSelect.options].some(option => option.value === selectedService)) typeSelect.value = selectedService;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const type = typeSelect.value;
    const location = document.querySelector('#location').value.trim();
    const details = document.querySelector('#details').value.trim();
    message.value = `Dobrý den,\n\nmám zájem o ${type.toLowerCase()}.\nMísto realizace: ${location || 'doplním'}\n\nPopis zakázky:\n${details || 'Doplním podrobnosti.'}\n\nProsím o informaci k dalšímu postupu.\n\nDěkuji.`;
    result.hidden = false;
    result.scrollIntoView({behavior:'smooth', block:'nearest'});
  });
  document.querySelector('#copy-message').addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try { await navigator.clipboard.writeText(message.value); status.textContent = 'Text zkopírován.'; }
    catch { message.select(); status.textContent = 'Označený text zkopírujte klávesami Ctrl+C.'; }
  });
}

const galleryItems = [...document.querySelectorAll('[data-gallery]')];
const lightbox = document.querySelector('#lightbox');
if (galleryItems.length && lightbox) {
  let active = 0;
  const image = lightbox.querySelector('img');
  const caption = lightbox.querySelector('figcaption');
  function show(index) {
    active = (index + galleryItems.length) % galleryItems.length;
    image.src = galleryItems[active].dataset.gallery;
    image.alt = galleryItems[active].dataset.caption;
    caption.textContent = `${active + 1} / ${galleryItems.length} — ${image.alt}`;
  }
  galleryItems.forEach((item,index) => item.addEventListener('click', () => { show(index); lightbox.showModal(); }));
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.querySelector('.lightbox-prev').addEventListener('click', () => show(active - 1));
  lightbox.querySelector('.lightbox-next').addEventListener('click', () => show(active + 1));
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') show(active - 1);
    if (event.key === 'ArrowRight') show(active + 1);
  });
}
