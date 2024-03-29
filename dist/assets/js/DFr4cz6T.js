(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const r="books",c="renderUI";let y=[];const O=document.querySelector("#add-book"),m=document.querySelector("#modal"),l=document.querySelector(".modal-container"),D=document.querySelector("#button-search"),S=document.getElementById("search-judul"),h=document.querySelector(".reading-books .books-list"),g=document.querySelector(".finished-read .books-list"),k=t=>{y=t},v=()=>y,T=()=>{typeof Storage<"u"&&localStorage.getItem(r)===null&&localStorage.setItem(r,JSON.stringify([]))},i=()=>{const t=localStorage.getItem(r);return t?JSON.parse(t):[]},d=(t,e,n=null)=>{let s;if(t==="add")return s=`
   <form action="#" method="post">
     <h1 class="form-title">${e}</h1>
     <div class="form-group">
       <label class="form-label" for="title">Title</label>
       <input class="form-input" type="text" id="title" name="title">
     </div>
     <div class="form-group">
       <label class="form-label" for="author">Author</label>
       <input class="form-input" type="text" id="author" name="author">
     </div>
     <div class="form-group">
       <label class="form-label" for="year">Year</label>
       <input class="form-input" type="number" pattern="[0-9]{4}" id="year" name="year">
     </div>
     <button type="button" class="button button-secondary" id="close">Tutup</button> 
     <button type="submit" class="button button-success">Simpan</button>
   </form>
   `,m.innerHTML=s;if(t==="delete")return s=`
      <h1>${e}</h1> 
      <p>Yakin ingin menghapus data tersebut</p>
      <button type="button" class="button button-secondary" id="close">Tutup</button> 
      <button class="button button-danger" id="button-delete-final">Hapus</button>
    `,m.innerHTML=s;if(t==="alert"&&n!==null)return s=`
        <h1>${e}</h1> 
        <p>${n}</p>
        <button class="modal-button close">Tutup</button>     
      `,m.innerHTML=s},u=t=>{t.hasAttribute("id")&&t.getAttribute("id")==="close"&&l.classList.remove("active")},A=()=>{O.addEventListener("click",function(){l.classList.add("active"),d("add","Tambah Data Baru")}),document.addEventListener("submit",function(t){const e=t.target;t.preventDefault();const n=new FormData(e),s=M(n.get("title"),n.get("author"),n.get("year"));C(s),document.dispatchEvent(new Event(c)),l.classList.remove("active"),u(e)})},M=(t,e,n)=>({id:+new Date,title:t,author:e,year:parseInt(n),isComplete:!1}),C=t=>{const e=i();e.push(t),localStorage.setItem(r,JSON.stringify(e))},b=(t,e)=>{const n=e.closest(t).parentNode.parentNode;let s="";return n instanceof HTMLElement&&(s=n.getAttribute("data-id")),s},L=(t,e)=>t.findIndex(n=>n.id===e.id),E=t=>{let e=null;return i().forEach(n=>{n.id.toString()==t&&(e=n)}),e},p=()=>{l.classList.add("active")},I=(t,e,n,s)=>{if(t){const o=E(t);if(o!==null){o.isComplete=s;const a=L(e,o);a===-1&&alert("gagal"),e[a]=o,localStorage.setItem(r,JSON.stringify(e)),document.dispatchEvent(new Event(c))}else p(),d("alert","Gagal","File tidak ditemukan"),setTimeout(()=>{u(n)},3e3)}},H=(t,e)=>{if(t.closest("#check")){let n=b("#check",t);I(n,e,t,!0)}},w=(t,e)=>{if(t.closest("#uncheck")){let n=b("#uncheck",t);I(n,e,t,!1)}},N=(t,e)=>{if(t.closest("#delete")){let n=b("#delete",t);if(n){const s=E(n);if(p(),d("delete","Hapus data"),s!==null){const o=document.querySelector("#button-delete-final");o==null||o.addEventListener("click",function(){x(s,e),document.dispatchEvent(new Event(c)),l.classList.remove("active")})}else p(),d("alert","Gagal","File tidak ditemukan"),setTimeout(()=>{u(t)},3e3)}}},x=(t,e)=>{const n=i(),s=L(e,t);n.splice(s,1),localStorage.setItem(r,JSON.stringify(n))},B=t=>{const e=document.createElement("div");return e.classList.add("card"),e.setAttribute("data-id",t.id.toString()),e.innerHTML=`
      <h1>${t.title}</h1>
      <p>Penulis : ${t.author}</p>
      <p>${t.year}</p>
      <div class="button-group">
        ${$(t.isComplete)}
        <button class="button-icon" id="delete">
          <i class="fa-solid fa-trash fa-xl"></i>
        </button>
      </div>
  `,e},$=t=>t?`
      <button class="button-icon" id="uncheck">
        <i class="fa-solid fa-rotate-left fa-xl"></i>
      </button>
    `:`
      <button class="button-icon" id="check">
        <i class="fa-solid fa-circle-check fa-xl"></i>
      </button>
    `,q=()=>{D.addEventListener("click",function(){const e=i().filter(n=>n.title==S.value);k(e),document.dispatchEvent(new Event(c))})};document.addEventListener("DOMContentLoaded",()=>{T(),document.dispatchEvent(new Event(c)),A(),q(),document.addEventListener("click",function(t){const e=t.target,n=i();u(e),H(e,n),w(e,n),N(e,n)})});document.addEventListener(c,function(){h.innerHTML="",g.innerHTML="";let t=[];S.value===""&&k(i()),t=v(),t.forEach(e=>{const n=B(e);e.isComplete?g.append(n):h.append(n)})});
