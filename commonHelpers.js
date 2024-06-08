import{a as f,S as g,i as d}from"./assets/vendor-ee72e1a4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))y(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&y(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function y(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const p=15,u=async(r,e)=>(await f.get("https://pixabay.com/api/",{params:{key:"43654443-0aa2ac279d0400a8e119738dd",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:p,page:e}})).data,h=document.querySelector(".gallery");let L=new g(".gallery a",{captionsData:"alt",captionDelay:250});const m=r=>{const e=r.hits.map(s=>`<li class="gallery-item">
            <a class="gallery-link" href=${s.largeImageURL}>
                <img
                    src=${s.webformatURL}
                    alt=${s.tags}
                />
            </a>
                 <div>
                <p>Likes ${s.likes}</p>
                <p>Views ${s.views}</p>
                <p>Comments ${s.comments}</p>
                <p>Downloads ${s.downloads}</p>
            </div>
                </li>`).join("");h.insertAdjacentHTML("beforeend",e),L.refresh()},w=document.querySelector("form"),b=document.querySelector(".gallery"),n=document.querySelector(".loader"),l=document.querySelector(".load");l.style.display="none";let a=1,c;w.addEventListener("submit",async r=>{r.preventDefault(),c=r.target.elements.search.value.trim(),n.style.display="flex",l.style.display="none",b.innerHTML="";try{a=1;const e=await u(c,a);e.hits.length===0?(l.style.display="none",d.show({message:"Sorry, there are no images matching your search query. Please try again!"})):(m(e),l.style.display="flex",e.totalHits<=15&&(l.style.display="none"))}catch(e){console.error(e)}finally{n.style.display="none"}});const S=()=>{const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})};l.addEventListener("click",async()=>{a+=1;try{const r=await u(c,a),e=Math.ceil(r.totalHits/p);if(n.style.display="flex",m(r),S(),a>=e)return l.style.display="none",d.error({position:"topRight",message:"We're sorry, there are no more posts to load"})}catch(r){console.error(r)}finally{n.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
