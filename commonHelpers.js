import{S as c,i}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const u=(o,r)=>fetch(o,r).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()}),p=(o,r)=>{r.innerHTML="";const a=o.map(t=>`
      <li class="gallery-item"><a href="${t.largeImageURL}" class="gallery-link"><img src="${t.webformatURL}"
            alt="${t.tags}" class="gallery-img"></a>
        <div class="card-content">
          <div class="label-cont"><span class="label">Likes</span><span class="value">${t.likes}</span></div>
          <div class="label-cont"><span class="label">Views</span><span class="value">${t.views}</span></div>
          <div class="label-cont"><span class="label">Comments</span><span class="value">${t.comments}</span>
          </div>
          <div class="label-cont"><span class="label">Downloads</span><span class="value">${t.downloads}</span></div>
        </div>
      </li>
      `).join("");r.insertAdjacentHTML("beforeend",a)},l={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),searchButton:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},d={iziToast:{error(){i.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ff3333",position:"topRight"})}}},m={simpleLightBox:{captionsData:"alt",captionDelay:250}},h=new c(".gallery a",m.simpleLightBox),f=o=>{o.preventDefault();const a={key:"43212506-95870309335e8ebf3ea9c8656",q:o.srcElement.elements.search_input.value,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9},e=`https://pixabay.com/api/?${new URLSearchParams(a).toString()}`;u(e,a).then(n=>{if(n.hits.length===0){d.iziToast.error();return}p(n.hits,l.gallery),h.refresh()})};l.searchForm.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
