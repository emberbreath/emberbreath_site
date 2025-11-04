async function loadGallery() {
  const res = await fetch('gallery.json', { cache: 'no-cache' });
  const data = await res.json();

  // Photos: Breath
  const pBreath = document.getElementById('photo-breath');
  if (pBreath && data.photos?.breath) {
    data.photos.breath.forEach(item => {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || '';
      img.loading = 'lazy';
      img.addEventListener('click', () => openLightbox(item.src));
      pBreath.appendChild(img);
    });
  }

  // Photos: Fire
  const pFire = document.getElementById('photo-fire');
  if (pFire && data.photos?.fire) {
    data.photos.fire.forEach(item => {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || '';
      img.loading = 'lazy';
      img.addEventListener('click', () => openLightbox(item.src));
      pFire.appendChild(img);
    });
  }

  // Videos: Breath
  const vBreath = document.getElementById('video-breath');
  if (vBreath && data.videos?.breath) {
    data.videos.breath.forEach(v => {
      const el = document.createElement('video');
      el.setAttribute('controls', '');
      el.setAttribute('playsinline', '');
      el.setAttribute('preload', 'metadata');
      if (v.poster) el.setAttribute('poster', v.poster);
      if (v.webm) { const s1 = document.createElement('source'); s1.src = v.webm; s1.type = 'video/webm'; el.appendChild(s1); }
      if (v.mp4) { const s2 = document.createElement('source'); s2.src = v.mp4; s2.type = 'video/mp4'; el.appendChild(s2); }
      vBreath.appendChild(el);
    });
  }

  // Videos: Fire
  const vFire = document.getElementById('video-fire');
  if (vFire && data.videos?.fire) {
    data.videos.fire.forEach(v => {
      const el = document.createElement('video');
      el.setAttribute('controls', '');
      el.setAttribute('playsinline', '');
      el.setAttribute('preload', 'metadata');
      if (v.poster) el.setAttribute('poster', v.poster);
      if (v.webm) { const s1 = document.createElement('source'); s1.src = v.webm; s1.type = 'video/webm'; el.appendChild(s1); }
      if (v.mp4) { const s2 = document.createElement('source'); s2.src = v.mp4; s2.type = 'video/mp4'; el.appendChild(s2); }
      vFire.appendChild(el);
    });
  }

  setupLightbox();
}

function setupLightbox() {
  const lb = document.querySelector('.lightbox');
  lb.querySelector('.close').addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
}

function openLightbox(src) {
  const lb = document.querySelector('.lightbox');
  lb.querySelector('img').src = src;
  lb.classList.add('open');
}

document.addEventListener('DOMContentLoaded', loadGallery);
