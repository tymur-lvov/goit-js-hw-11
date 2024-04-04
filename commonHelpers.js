import{S as l,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const i={captionsData:"alt",captionDelay:250},u=new l(".gallery a",i),p=a=>{const r=document.querySelector(".gallery");r.innerHTML="";const o=a.hits.map(s=>`
      <li class="gallery-item"><a href="${s.largeImageURL}" class="gallery-link"><img     src="${s.webformatURL}"
      alt="${s.tags}" class="gallery-img"></a>
        <div class="card-content">
         <div class="label-cont"><span class="label">Likes</span><span class="value">${s.likes}</span></div>
         <div class="label-cont"><span class="label">Views</span><span class="value">${s.views}</span></div>
         <div class="label-cont"><span class="label">Comments</span><span class="value">${s.comments}</span>
         </div>
         <div class="label-cont"><span class="label">Downloads</span><span
          class="value">${s.downloads}</span></div>
        </div>
      </li>`).join("");r.insertAdjacentHTML("beforeend",o),u.refresh()},d=a=>{a.preventDefault();const o={key:"43212506-95870309335e8ebf3ea9c8656",q:a.srcElement.elements.search_input.value,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9},t=`https://pixabay.com/api/?${new URLSearchParams(o).toString()}`;fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ff3333",position:"topRight"});return}p(e)}).catch(e=>e)},m={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),searchButton:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),test:document.querySelector(".test")};m.searchForm.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
