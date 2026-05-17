function renderGallery(filter) {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  galleryItems.forEach((item) => {
    if(filter !== 'all' && item.cat !== filter) return;
    const aspect = item.h === 'tall' ? '2/3' : '4/3';
    const src = item.img || generateSVG(item.label, '#1a1208');
    const el = document.createElement('div');
    el.className = 'masonry-item visible';
    el.innerHTML = `<img src="${src}" alt="${item.label}" style="aspect-ratio:${aspect}"><div class="masonry-hover"><span>⊕</span></div>`;
    el.onclick = () => openLightbox(src);
    grid.appendChild(el);
  });
}

// ── Render Products ──
function renderProducts(filter) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  products.forEach(p => {
    if(filter !== 'all' && p.category !== filter) return;
    const el = document.createElement('div');
    el.className = 'product-card visible';
    el.innerHTML = `
      <div class="product-img-wrap">
        <img class="product-img" src="${p.img}" alt="${p.name}">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <div class="product-quick-view">
          <button class="quick-view-btn" onclick="openLightbox('${p.img}')">View Details</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-type">${p.type}</div>
        <div class="product-footer">
          <span class="product-price">${p.price}</span>
          <button class="product-btn" onclick="enquire('${p.name}')">Enquire</button>
        </div>
      </div>`;
    grid.appendChild(el);
  });
}

function filterProducts(cat) {
  document.getElementById('featured').scrollIntoView({behavior:'smooth'});
  setTimeout(() => {
    document.querySelectorAll('.filter-tab').forEach(t => {
      t.classList.toggle('active', t.textContent.toLowerCase().includes(cat) || (cat==='all' && t.textContent==='All'));
    });
    renderProducts(cat);
  }, 400);
}

function setTab(btn, cat) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(cat);
}

function setGalleryTab(btn, cat) {
  document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderGallery(cat);
}

function enquire(name) {
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
}

// ── Lightbox ──
function openLightbox(src) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

// ── Nav scroll ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ── Intersection Observer ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) { e.target.classList.add('in-view'); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up, .step, .testimonial').forEach(el => observer.observe(el));

// ── Cursor ──
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top = e.clientY + 'px';
});

// ── Mobile menu ──
function openMobileMenu() { document.getElementById('mobileMenu').classList.add('open'); }
function closeMobileMenu() { document.getElementById('mobileMenu').classList.remove('open'); }

// ── Form ──
function handleForm(e) {
  e.preventDefault();
  document.getElementById('formMsg').style.display = 'block';
  e.target.reset();
  setTimeout(() => document.getElementById('formMsg').style.display = 'none', 5000);
}

// ── Init ──
renderProducts('all');
renderGallery('all');

// Re-observe dynamically added elements
setTimeout(() => {
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}, 100);
