/* ============================================================
   JUFF MANDA — SHARED JS
   ============================================================ */

/* Mobile menu toggle */
function toggleMenu(){
  var menu=document.getElementById('mob-menu');
  var ham=document.getElementById('ham');
  if(!menu||!ham)return;
  var open=menu.classList.toggle('open');
  ham.classList.toggle('open',open);
  ham.setAttribute('aria-expanded',open?'true':'false');
}
function closeMenu(){
  var menu=document.getElementById('mob-menu');
  var ham=document.getElementById('ham');
  if(!menu||!ham)return;
  menu.classList.remove('open');
  ham.classList.remove('open');
  ham.setAttribute('aria-expanded','false');
}

/* Email link assembled at runtime to deter scrapers */
function openMail(e){
  e.preventDefault();
  var u='juffmanda',d='gmail.com';
  var s='Let%27s%20Work%20Together';
  var b='Hi%20Juff%2C%0A%0AI%27d%20like%20to%20discuss%20a%20potential%20engagement.%20Here%27s%20what%20I%27m%20working%20on%3A%0A%0A';
  window.location.href='mailto:'+u+'@'+d+'?subject='+s+'&body='+b;
}

/* Close mobile menu on link click */
document.addEventListener('DOMContentLoaded',function(){
  var mobLinks=document.querySelectorAll('.mob-link');
  mobLinks.forEach(function(l){
    l.addEventListener('click',closeMenu);
  });
});
