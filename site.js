(function(){
"use strict";
var PRODUCTS = {
  tie:{name:"The Merchant's Tie", price:4000, membership:true},
  square:{name:"The Ensign Pocket Square", price:2500},
  pin:{name:"The Company Pin", price:1200},
  cufflinks:{name:"The Comprador's Cufflinks", price:4000}
};
var OPT = {number:1500, cert:3000};
var gbp = function(p){ return "£" + (p/100).toFixed(2); };
var $ = function(id){ return document.getElementById(id); };
var pad = function(n){ return String(n).padStart(6,"0"); };

var uid = 0;
var ART = {
  tie: function(){
    var G="#041E42", R="#B42630", Y="#D9A92A";
    return '<svg viewBox="0 0 200 680" width="100%" height="100%" role="img" aria-label="The Merchant\'s Tie: red Chinese junks and gold British tea clippers on navy blue silk"><defs>'+
      '<g id="junk"><path d="M3 27 L8 28.5 Q24 30 38 27 L45 21 L47.5 21.5 L44.5 29.5 Q40 35 30 35.5 L14 35.5 Q8 35 5 31 Z"/><path d="M5 12 L14 8 Q18 18 15 27 L7 27 Z"/><path d="M18 8 L30 3 Q35 15 31 27 L18 27 Z"/><path d="M34 14 L41 10 Q44.5 17 41 24.5 L34 26 Z"/><rect x="19" y="1" width="1" height="8"/><path d="M20 1 L25.5 2.2 L20 3.4 Z"/>'+
      '<polygon points="18,11.8 33.5,7.8 33.5,8.5 18,12.5" fill="'+G+'"/><polygon points="18,15.6 33.5,12.6 33.5,13.3 18,16.3" fill="'+G+'"/><polygon points="18,19.4 33.5,17.4 33.5,18.1 18,20.1" fill="'+G+'"/><polygon points="18,23.2 33.5,22.2 33.5,22.9 18,23.9" fill="'+G+'"/>'+
      '<polygon points="4,15.75 17.5,12.75 17.5,13.45 4,16.45" fill="'+G+'"/><polygon points="4,19.5 17.5,17.5 17.5,18.2 4,20.2" fill="'+G+'"/><polygon points="4,23.25 17.5,22.25 17.5,22.95 4,23.95" fill="'+G+'"/>'+
      '<polygon points="34,18 45.5,14.8 45.5,15.5 34,18.7" fill="'+G+'"/><polygon points="34,22 45.5,19.6 45.5,20.3 34,22.7" fill="'+G+'"/>'+
      '<polygon points="12,31.6 24,32.2 38,30.6 44.6,25.2 44.9,26.1 38.4,31.4 24,33 12,32.4" fill="'+G+'"/><circle cx="8" cy="29.6" r="1.2" fill="'+G+'"/></g>'+
      '<g id="clipper"><path d="M5 26 L44 26 L47.5 23 L48.4 23.6 L44.5 29.5 Q42 33 36 33 L12 33 Q7 33 6 30 L4.5 26 Z"/><polygon points="6.5,28.4 44.6,28.4 44,29.2 6.9,29.2" fill="'+G+'"/><polygon points="45,23 49.8,20.4 50,21 45.4,23.8"/>'+
      '<rect x="23.6" y="1" width="0.8" height="25"/><path d="M24.4 1 L28 1.8 L24.4 2.6 Z"/><polygon points="21.8,4.5 26.2,4.5 26.6,7.5 21.4,7.5"/><polygon points="21.2,8.3 26.8,8.3 27.6,12.3 20.4,12.3"/><polygon points="20.2,13.1 27.8,13.1 28.8,18.3 19.2,18.3"/><polygon points="19,19.1 29,19.1 29.6,24.4 18.4,24.4"/>'+
      '<rect x="35.6" y="2.5" width="0.8" height="23.5"/><polygon points="34,6 38,6 38.4,8.8 33.6,8.8"/><polygon points="33.4,9.6 38.6,9.6 39.3,13.4 32.7,13.4"/><polygon points="32.5,14.2 39.5,14.2 40.4,19 31.6,19"/><polygon points="31.4,19.8 40.6,19.8 41.2,24.6 30.8,24.6"/><polygon points="39,9 48.5,22.5 43.5,22.5"/>'+
      '<rect x="11.6" y="4" width="0.8" height="22"/><polygon points="9.8,7 14.2,7 14.8,11 9.2,11"/><polygon points="9,11.8 15,11.8 15.8,17 8.2,17"/><polygon points="8,17.8 16,17.8 16.6,24.4 7.4,24.4"/></g>'+
      '<pattern id="halfdrop" x="69.85" y="0" width="60" height="56" patternUnits="userSpaceOnUse"><rect width="60" height="56" fill="'+G+'"/>'+
      '<use href="#junk" fill="'+R+'" transform="translate(6.35 7.35) scale(0.36)"/><use href="#clipper" fill="'+Y+'" transform="translate(35.5 36.5) scale(0.36)"/></pattern></defs>'+
      '<path d="M78 2 L122 2 L114 52 L86 52 Z" fill="url(#halfdrop)"/><path d="M78 2 L122 2 L114 52 L86 52 Z" fill="#000" opacity=".18"/>'+
      '<path d="M86 54 L114 54 L172 600 L100 676 L28 600 Z" fill="url(#halfdrop)"/><path d="M86 54 L100 54 L100 676 L28 600 Z" fill="#000" opacity=".06"/></svg>';
  },
  // The Company Pocket Square, as drawn in the tie-design canvas: the ensign as a lattice,
  // Oxford blue border, gold rule and hand-rolled gold edge.
  square: function(){
    var id = "psq"+(++uid), N="#041E42", C="#7A1A33", Y="#D9A92A";
    return '<svg viewBox="0 0 330 330" width="100%" height="100%" role="img" aria-label="Silk pocket square: gold saltire lattice over claret and Oxford blue, with an Oxford blue border, gold rule and gold rolled edge"><defs>'+
      '<pattern id="'+id+'" x="18.6667" y="18.6667" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="scale(1.125)">'+
      '<rect width="32" height="32" fill="'+N+'"/><polygon points="16,-1.4 33.4,16 16,33.4 -1.4,16" fill="'+Y+'"/><polygon points="16,1.4 30.6,16 16,30.6 1.4,16" fill="'+C+'"/>'+
      '<polygon points="16,-2.6 18.6,0 16,2.6 13.4,0" fill="'+N+'"/><polygon points="16,29.4 18.6,32 16,34.6 13.4,32" fill="'+N+'"/>'+
      '<polygon points="0,13.4 2.6,16 0,18.6 -2.6,16" fill="'+N+'"/><polygon points="32,13.4 34.6,16 32,18.6 29.4,16" fill="'+N+'"/></pattern></defs>'+
      '<rect width="330" height="330" fill="'+Y+'"/><rect x="1.6" y="1.6" width="326.8" height="326.8" fill="'+N+'"/>'+
      '<rect x="19" y="19" width="292" height="292" fill="'+Y+'"/><rect x="21" y="21" width="288" height="288" fill="url(#'+id+')"/></svg>';
  },
  pin: function(){ return '<img src="assets/insignia.webp" alt="The Company insignia lapel pin" width="160" height="147" style="width:80%">'; },
  // Placeholder until the cufflinks are photographed: two faces joined by a short chain, in outline.
  cufflinks: function(){
    var L="#B08A2E";
    return '<svg viewBox="0 0 240 160" width="100%" height="100%" role="img" aria-label="Chain cufflinks (illustration to be replaced by a photograph)">'+
      '<g fill="none" stroke="'+L+'" stroke-width="3">'+
      '<ellipse cx="62" cy="80" rx="46" ry="38"/><ellipse cx="62" cy="80" rx="34" ry="27" stroke-width="1.5" opacity=".6"/>'+
      '<ellipse cx="178" cy="80" rx="46" ry="38"/><ellipse cx="178" cy="80" rx="34" ry="27" stroke-width="1.5" opacity=".6"/>'+
      '<ellipse cx="116" cy="80" rx="7" ry="4.5"/><ellipse cx="124" cy="80" rx="4.5" ry="7"/></g></svg>';
  }
};
try { document.fonts.load('40px "Pinyon Script"').then(function(f){ if(f.length) document.documentElement.classList.add("script-ready"); }); } catch(e){}
document.querySelectorAll("[data-art]").forEach(function(el){ el.innerHTML = ART[el.getAttribute("data-art")](); });

var KEY = "rhc-basket-v3", basket = [];
try { basket = JSON.parse(localStorage.getItem(KEY) || "[]") || []; } catch(e){ basket = []; }
// Drop anything no longer sold (e.g. cufflinks or prints left in an earlier test basket).
basket = Array.isArray(basket) ? basket.filter(function(l){ return l && PRODUCTS[l.id]; }) : [];
function save(){ try { localStorage.setItem(KEY, JSON.stringify(basket)); } catch(e){} }
function lineTotal(l){ return PRODUCTS[l.id].price * l.qty + (l.number ? OPT.number : 0) + (l.cert ? OPT.cert * l.qty : 0); }

var drawer = $("drawer"), scrim = $("scrim"), lastFocus = null;
function draw(){
  $("count").textContent = basket.reduce(function(a,l){ return a + l.qty; }, 0);
  var box = $("lines"); box.innerHTML = "";
  if(!basket.length) box.innerHTML = '<p class="empty">Your basket is empty.</p>';
  basket.forEach(function(l, i){
    var p = PRODUCTS[l.id], el = document.createElement("div"), items = [];
    if(l.qty > 1) items.push(l.qty + " × " + gbp(p.price));
    if(p.membership) items.push(l.qty === 1 ? "Includes membership" : "Includes " + l.qty + " memberships");
    if(l.number) items.push("Membership No. " + pad(l.number));
    if(l.cert) items.push("Paper certificate");
    el.className = "ln";
    el.innerHTML = '<div class="t"><b></b><span></span></div><ul></ul><button class="rm" type="button">Remove</button>';
    el.querySelector("b").textContent = p.name;
    el.querySelector(".t span").textContent = gbp(lineTotal(l));
    items.forEach(function(t){ var li = document.createElement("li"); li.textContent = t; el.querySelector("ul").appendChild(li); });
    el.querySelector(".rm").addEventListener("click", function(){ basket.splice(i,1); save(); draw(); });
    box.appendChild(el);
  });
  $("bTotal").textContent = gbp(basket.reduce(function(a,l){ return a + lineTotal(l); }, 0));
  $("checkoutMsg").hidden = true;
}
function open(){ lastFocus = document.activeElement; scrim.hidden = false; drawer.hidden = false; $("closeBasket").focus(); }
function close(){ scrim.hidden = true; drawer.hidden = true; if(lastFocus) lastFocus.focus(); }
function add(line){ basket.push(line); save(); draw(); open(); }
$("openBasket").addEventListener("click", open);
$("closeBasket").addEventListener("click", close);
scrim.addEventListener("click", close);
document.addEventListener("keydown", function(e){ if(e.key === "Escape" && !drawer.hidden) close(); });
$("checkout").addEventListener("click", function(){ $("checkoutMsg").hidden = basket.length === 0; });
document.querySelectorAll("[data-add]").forEach(function(b){ b.addEventListener("click", function(){ add({id:b.getAttribute("data-add"), qty:1}); }); });
draw();

var form = $("tieForm"), qty = 1;
function st(){
  var n = Number($("num").value);
  return {num:$("optNum").checked, cert:$("optCert").checked, n:n, ok:Number.isInteger(n) && n >= 100 && n <= 1000000};
}
function render(){
  var s = st();
  if(s.num) qty = 1;
  $("qty").textContent = qty;
  $("qtyDown").disabled = qty <= 1;
  $("qtyUp").disabled = s.num;
  $("qtyHint").hidden = !s.num;
  $("numBox").hidden = !s.num;
  $("numErr").hidden = !s.num || s.ok;
  $("tieTotal").textContent = gbp(PRODUCTS.tie.price * qty + (s.num ? OPT.number : 0) + (s.cert ? OPT.cert * qty : 0));
  $("cNum").textContent = s.num && s.ok ? pad(s.n) : "001888";
}
$("qtyDown").addEventListener("click", function(){ qty = Math.max(1, qty-1); render(); });
$("qtyUp").addEventListener("click", function(){ qty = Math.min(20, qty+1); render(); });
form.addEventListener("input", render);
form.addEventListener("change", render);
form.addEventListener("submit", function(e){
  e.preventDefault();
  var s = st();
  if(s.num && !s.ok){ $("num").focus(); return; }
  add({id:"tie", qty:qty, number:s.num ? s.n : null, cert:s.cert});
});
render();
})();
