(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l="feedback-form-state",s=document.querySelector(".feedback-form");function c(r){const t=localStorage.getItem(r);try{return JSON.parse(t)}catch{return t}}function u(r,t){const n=JSON.stringify(t);localStorage.setItem(r,n)}s.addEventListener("input",()=>{const r=s.elements.email.value.trim(),t=s.elements.message.value.trim();u(l,{email:r,message:t})});s.addEventListener("submit",r=>{r.preventDefault();const t=s.elements.email.value.trim(),n=s.elements.message.value.trim();if(!t||!n){alert("Будь ласка, заповніть усі поля форми.");return}console.log({email:t,message:n}),c(l),localStorage.removeItem(l),s.reset()});function m(){const r=c(l)||{};s.elements.email.value=r.email||"",s.elements.message.value=r.message||""}m();
//# sourceMappingURL=commonHelpers2.js.map
