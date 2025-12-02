import{a as b,S as w,i as a}from"./assets/vendor-LvtvrCkc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&d(f)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const v="53393653-1acdc9704f6308d207f4a2045",B="https://pixabay.com/api/";async function P(e,t=1){const s={key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await b.get(B,{params:s})).data}const y=document.querySelector(".gallery"),i=document.getElementById("loader-overlay"),c=document.getElementById("load-button");function S(e){return`
        <li class="gallery-item">
            <a href="${e.largeImageURL}" class="gallery-link"> 
                <img src="${e.webformatURL}" 
                     alt="${e.tags}" 
                     class="gallery-image">
            </a>
        <div class="info">
            <p class="info-item"><b>Likes</b>${e.likes}</p>
            <p class="info-item"><b>Views</b>${e.views}</p>
            <p class="info-item"><b>Comments</b>${e.comments}</p>
            <p class="info-item"><b>Downloads</b>${e.downloads}</p>
        </div>
    </li>
    `}const q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function E(e){const t=e.map(S).join("");y.insertAdjacentHTML("beforeend",t),q.refresh()}function I(){y.innerHTML=""}function g(){i&&i.classList.remove("hidden")}function m(){i&&i.classList.add("hidden")}function $(){c&&c.classList.remove("hidden")}function u(){c&&c.classList.add("hidden")}let l=1,h="",p=0;const R=15,n=document.querySelector(".form"),M=n.elements.query,O=document.getElementById("load-button"),H=document.querySelector(".gallery");m();u();n.addEventListener("submit",async e=>{e.preventDefault();const t=M.value.trim();if(!t){a.warning({message:"Please enter a search term!",position:"topRight"});return}l=1,h=t,u(),I(),g();const s=await L();if(s&&s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(),n.reset();return}n.reset()});O.addEventListener("click",async()=>{l+=1,u(),g(),await L(),x()});async function L(){try{const e=await P(h,l),t=e.hits,s=e.totalHits;return p=Math.ceil(s/R),t.length===0||(E(t),l>p?(u(),s>0&&a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):$()),e}catch(e){a.error({message:"Error",position:"topRight"}),console.error(e)}finally{m()}}function x(){const e=H.querySelector(".gallery-item");if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
