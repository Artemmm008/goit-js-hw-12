import{a as d,S as m,i as l}from"./assets/vendor-LvtvrCkc.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="53393653-1acdc9704f6308d207f4a2045",y="https://pixabay.com/api/";function h(t){const o={key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(y,{params:o}).then(s=>s.data)}const f=document.querySelector(".gallery"),a=document.getElementById("loader-overlay");function g(t){return`
        <li class="gallery-item">
            <a href="${t.largeImageURL}" class="gallery-link"> 
                <img src="${t.webformatURL}" 
                     alt="${t.tags}" 
                     class="gallery-image">
            </a>
        <div class="info">
            <p class="info-item"><b>Likes</b>${t.likes}</p>
            <p class="info-item"><b>Views</b>${t.views}</p>
            <p class="info-item"><b>Comments</b>${t.comments}</p>
            <p class="info-item"><b>Downloads</b>${t.downloads}</p>
        </div>
    </li>
    `}const b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(t){const o=t.map(g).join("");f.insertAdjacentHTML("beforeend",o),b.refresh()}function v(){f.innerHTML=""}function w(){a&&a.classList.remove("hidden")}function u(){a&&a.classList.add("hidden")}const i=document.querySelector(".form"),q=i.elements.query;u();i.addEventListener("submit",t=>{t.preventDefault();const o=q.value.trim();if(!o){l.warning({message:"Please enter a search term!",position:"topRight"});return}w(),v(),h(o).then(s=>{const n=s.hits;n.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(n),u(),i.reset()}).catch(s=>{l.error({message:"Error",position:"topRight"}),console.error(s),u(),i.reset()})});
//# sourceMappingURL=index.js.map
