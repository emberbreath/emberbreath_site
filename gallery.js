
async function loadGallery(){
  const res = await fetch('gallery.json', {cache:'no-cache'});
  const data = await res.json();
  const pgrid = document.getElementById('photo-grid'); pgrid.innerHTML='';
  (data.photos||[]).forEach(item=>{ const fig=document.createElement('figure'); const img=document.createElement('img'); img.src=item.src; img.alt=item.alt||''; img.loading='lazy'; img.addEventListener('click',()=>openLightbox(item.src)); fig.appendChild(img); pgrid.appendChild(fig); });
  const vgrid = document.getElementById('video-grid'); vgrid.innerHTML='';
  (data.videos||[]).forEach(v=>{ const el=document.createElement('video'); el.setAttribute('controls',''); el.setAttribute('playsinline',''); el.setAttribute('preload','metadata'); if(v.poster) el.setAttribute('poster',v.poster); if(v.webm){ const s1=document.createElement('source'); s1.src=v.webm; s1.type='video/webm'; el.appendChild(s1);} if(v.mp4){ const s2=document.createElement('source'); s2.src=v.mp4; s2.type='video/mp4'; el.appendChild(s2);} vgrid.appendChild(el);});
}
function openLightbox(src){ const lb=document.querySelector('.lightbox'); lb.querySelector('img').src=src; lb.classList.add('open'); }
document.addEventListener('DOMContentLoaded', ()=>{ const lb=document.querySelector('.lightbox'); lb.querySelector('.close').addEventListener('click',()=>lb.classList.remove('open')); lb.addEventListener('click',e=>{ if(e.target===lb) lb.classList.remove('open');}); loadGallery(); });
