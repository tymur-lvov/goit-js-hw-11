import{S as l,i as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const i=r=>{const t=document.querySelector(".gallery");t.innerHTML="";const a=r.hits.map(e=>`
      <li class="gallery-item"><a href="${e.largeImageURL}" class="gallery-link"><img     src="${e.webformatURL}"
      alt="${e.tags}" class="gallery-img"></a>
        <div class="card-content">
         <div class="label-cont"><span class="label">Likes</span><span class="value">${e.likes}</span></div>
         <div class="label-cont"><span class="label">Views</span><span class="value">${e.views}</span></div>
         <div class="label-cont"><span class="label">Comments</span><span class="value">${e.comments}</span>
         </div>
         <div class="label-cont"><span class="label">Downloads</span><span
          class="value">${e.downloads}</span></div>
        </div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",a),new l(".gallery a").refresh()},u=r=>{r.preventDefault();const a={key:"43212506-95870309335e8ebf3ea9c8656",q:r.srcElement.elements.search_input.value,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9},e=`https://pixabay.com/api/?${new URLSearchParams(a).toString()}`;fetch(e).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{if(s.hits.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ff3333",position:"topRight"});return}i(s)}).catch(s=>s)},d={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),searchButton:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),test:document.querySelector(".test")};d.searchForm.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers.js.map
