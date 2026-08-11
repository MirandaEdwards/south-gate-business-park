
const MICROSOFT_FORMS_EMBED_URL = ""; // Paste Microsoft Forms embed URL between the quotes.
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');
  if(btn && nav){btn.addEventListener('click', function(){const open = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', open ? 'true':'false');});}
  const holder = document.getElementById('forms-placeholder');
  if(holder && MICROSOFT_FORMS_EMBED_URL){holder.innerHTML = `<iframe src="${MICROSOFT_FORMS_EMBED_URL}" width="100%" height="720" frameborder="0" marginwidth="0" marginheight="0" style="border:none;max-width:100%;">Loading...</iframe>`;}
});
