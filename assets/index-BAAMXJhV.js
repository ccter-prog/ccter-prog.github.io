(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`LeftGhost1.png`,`LeftGhost2.png`,`LeftGhost3.png`],t=[`RightGhost1.png`,`RightGhost2.png`,`RightGhost3.png`],n=[`LeftCat.png`,`RightCat.png`];document.querySelector(`#app`).innerHTML=`
<section id="center">
  <div class="hero">
    <img src="/images/EscapeMomentsFont.png" alt="Escape Moments Logo" class="site-logo" />
    <p class="site-subtitle">我的密室逃脱通关记录</p>
  </div>
</section>

<div class="ticks"></div>

<!-- 图片展示区域 -->
<section id="image-gallery">
  <h2>通关照片</h2>
  <div class="gallery-grid">
    <div class="gallery-item">
      <img src="/images/01.webp" alt="插班生" loading="lazy" onerror="this.src='/images/ErrorPicture.png'" />
      <p>插班生</p>
    </div>
    <div class="gallery-item">
      <img src="/images/03.webp" alt="插班生二刷" loading="lazy" onerror="this.src='/images/ErrorPicture.png'" />
      <p>插班生二刷</p>
    </div>
    <div class="gallery-item">
      <img src="/images/04.webp" alt="诈尸" loading="lazy" onerror="this.src='/images/ErrorPicture.png'" />
      <p>诈尸</p>
    </div>
  </div>
</section>

<!-- 幽灵容器 -->
<div id="ghost-container"></div>

<div class="ticks"></div>
<section id="spacer"></section>
`;var r=document.getElementById(`ghost-container`);[...e,...t,...n].forEach(e=>{let t=new Image;t.src=`/images/${e}`}),document.querySelectorAll(`.gallery-item img`).forEach(e=>{e.complete?e.setAttribute(`loaded`,``):e.addEventListener(`load`,()=>e.setAttribute(`loaded`,``))});function i(){let n=Math.random()>.5,a=n?e:t,o=a[Math.floor(Math.random()*a.length)],s=document.createElement(`img`);s.src=`/images/${o}`,s.className=`floating-ghost ${n?`move-right`:`move-left`}`;let c=Math.random()*60+15;s.style.top=`${c}%`,n?s.style.left=`-150px`:s.style.right=`-150px`,r.appendChild(s),setTimeout(()=>{s.remove(),setTimeout(i,Math.random()*3e3+2e3)},1e4)}i(),document.addEventListener(`click`,e=>{if(e.target.tagName===`IMG`||e.target.tagName===`A`)return;let t=n[Math.floor(Math.random()*n.length)],i=document.createElement(`img`);i.src=`/images/${t}`,i.className=`click-cat`;let a=document.body.getBoundingClientRect();i.style.left=`${e.clientX-a.left-50}px`,i.style.top=`${e.clientY-a.top-50}px`,r.appendChild(i),setTimeout(()=>{i.remove()},2e3)});