(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();function b(){const t=document.getElementById("header");t&&window.addEventListener("scroll",()=>{window.pageYOffset>10?t.classList.add("scrolled"):t.classList.remove("scrolled")})}function g(){const t={threshold:.1,rootMargin:"0px 0px -50px 0px"},n=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&(i.target.classList.add("animate-on-scroll"),n.unobserve(i.target))})},t);document.querySelectorAll(".concept-card, .value-card, .info-card, .work__row").forEach((s,i)=>{s.style.animationDelay=`${i*.08}s`,n.observe(s)}),document.querySelectorAll(".results__item").forEach((s,i)=>{s.style.animationDelay=`${i*.08}s`,n.observe(s)}),document.querySelectorAll(".contact-item").forEach((s,i)=>{s.style.animationDelay=`${i*.12}s`,n.observe(s)});const o=document.querySelector(".hero__bg");o&&window.addEventListener("scroll",()=>{const i=window.pageYOffset*.5;o.style.transform=`translate3d(0, ${i}px, 0)`})}function x(){const t=document.getElementById("backToTop");t&&(window.addEventListener("scroll",()=>{window.pageYOffset>300?t.classList.add("visible"):t.classList.remove("visible")}),t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))}function v(){const t=document.getElementById("contactForm");t&&t.addEventListener("submit",async n=>{n.preventDefault();const e=t.querySelector('button[type="submit"]'),r=e.textContent,a=new FormData(t),o=Object.fromEntries(a);if(!o.name||!o.phone){c("Пожалуйста, заполните обязательные поля","error");return}e.disabled=!0,e.textContent="Отправка...";try{if((await fetch("/form.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(o)})).ok)c("Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.","success"),t.reset();else throw new Error("Network response was not ok")}catch(s){console.error("Error:",s),c("Произошла ошибка при отправке. Пожалуйста, попробуйте позже или позвоните нам.","error")}finally{e.disabled=!1,e.textContent=r}})}function c(t,n="info"){const e=document.querySelector(".notification");e&&e.remove();const r=document.createElement("div");r.className=`notification notification--${n}`,r.textContent=t,Object.assign(r.style,{position:"fixed",top:"100px",right:"20px",padding:"16px 24px",borderRadius:"8px",backgroundColor:n==="success"?"#10B981":n==="error"?"#EF4444":"#3B82F6",color:"white",fontWeight:"500",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",zIndex:"9999",maxWidth:"400px",animation:"slideInRight 0.3s ease-out"}),document.body.appendChild(r),setTimeout(()=>{r.style.animation="slideOutRight 0.3s ease-out",setTimeout(()=>r.remove(),300)},5e3)}const p=document.createElement("style");p.textContent=`
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;document.head.appendChild(p);function w(){document.body.insertAdjacentHTML("beforeend",`
    <div class="modal" id="consultModal" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
      <div class="modal__overlay"></div>
      <div class="modal__content">
        <button class="modal__close" aria-label="Закрыть">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <h2 id="modalTitle">Запись на консультацию</h2>
        <p>Заполните форму, и мы свяжемся с вами в ближайшее время</p>
        <form class="modal__form" id="modalForm">
          <div class="form-group">
            <label for="modal-name">Ваше имя *</label>
            <input type="text" id="modal-name" name="name" required>
          </div>
          <div class="form-group">
            <label for="modal-phone">Телефон *</label>
            <input type="tel" id="modal-phone" name="phone" required>
          </div>
          <div class="form-group">
            <label for="modal-email">Email</label>
            <input type="email" id="modal-email" name="email">
          </div>
          <div class="form-group">
            <label for="modal-message">Комментарий</label>
            <textarea id="modal-message" name="message" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn--primary btn--large">Отправить заявку</button>
        </form>
      </div>
    </div>
  `);const n=document.createElement("style");n.textContent=`
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: var(--z-modal);
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .modal.active {
      display: flex;
    }

    .modal__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(4px);
      animation: fadeIn 0.3s ease-out;
    }

    .modal__content {
      position: relative;
      background: white;
      border-radius: 16px;
      padding: 40px;
      max-width: 500px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      animation: slideInUp 0.3s ease-out;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
    }

    .modal__close {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-text-secondary);
      transition: all 0.2s;
    }

    .modal__close:hover {
      background: var(--color-bg-secondary);
      color: var(--color-text-primary);
    }

    .modal__content h2 {
      font-size: var(--font-size-2xl);
      margin-bottom: var(--spacing-sm);
      color: var(--color-text-primary);
    }

    .modal__content > p {
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-xl);
    }

    .modal__form .btn {
      width: 100%;
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .modal__content {
        padding: 24px;
      }
    }
  `,document.head.appendChild(n);const e=document.getElementById("consultModal"),r=e.querySelector(".modal__overlay"),a=e.querySelector(".modal__close"),o=document.getElementById("modalForm");[document.getElementById("consultBtn"),document.getElementById("heroBtn")].forEach(l=>{l&&l.addEventListener("click",()=>{e.classList.add("active"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"})});function i(){e.classList.remove("active"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="",o.reset()}a.addEventListener("click",i),r.addEventListener("click",i),document.addEventListener("keydown",l=>{l.key==="Escape"&&e.classList.contains("active")&&i()}),o.addEventListener("submit",async l=>{l.preventDefault();const d=o.querySelector('button[type="submit"]'),f=d.textContent,h=new FormData(o),y=Object.fromEntries(h);d.disabled=!0,d.textContent="Отправка...";try{if((await fetch("/form.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(y)})).ok)u("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.","success"),setTimeout(i,2e3);else throw new Error("Network response was not ok")}catch(m){console.error("Error:",m),u("Произошла ошибка. Пожалуйста, попробуйте позже или позвоните нам.","error")}finally{d.disabled=!1,d.textContent=f}})}function u(t,n){const e=document.querySelector(".notification");e&&e.remove();const r=document.createElement("div");r.className=`notification notification--${n}`,r.textContent=t,Object.assign(r.style,{position:"fixed",top:"100px",right:"20px",padding:"16px 24px",borderRadius:"8px",backgroundColor:n==="success"?"#10B981":"#EF4444",color:"white",fontWeight:"500",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",zIndex:"10000",maxWidth:"400px"}),document.body.appendChild(r),setTimeout(()=>r.remove(),5e3)}document.addEventListener("DOMContentLoaded",()=>{b(),g(),x(),v(),w()});document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(n){const e=this.getAttribute("href");if(e==="#")return;n.preventDefault();const r=document.querySelector(e);if(r){const s=r.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:s,behavior:"smooth"})}})});
