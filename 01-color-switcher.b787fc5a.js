let t=t=>document.querySelector(t);const e=t("[data-start]"),d=t("[data-stop]"),r=document.body;e.addEventListener("click",(function(){e.setAttribute("disabled",!0),d.removeAttribute("disabled"),a=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),d.addEventListener("click",(function(){e.removeAttribute("disabled"),d.setAttribute("disabled",!0),clearInterval(a)})),d.setAttribute("disabled",!0);let a=null;
//# sourceMappingURL=01-color-switcher.b787fc5a.js.map