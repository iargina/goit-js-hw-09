function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let n;e.addEventListener("click",(function(){const o=t();document.body.style.backgroundColor=o,n=setInterval((()=>{const e=t();document.body.style.backgroundColor=e}),1e3),e.setAttribute("disabled","disabled")})),o.addEventListener("click",(function(){document.body.removeAttribute("style"),e.removeAttribute("disabled"),clearInterval(n)})),console.log(document.body);
//# sourceMappingURL=01-color-switcher.4ccceba6.js.map