const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(o){o.preventDefault(),t.disabled=!0,e.disabled=!1,n=setInterval(a,1e3)})),e.addEventListener("click",(function(t){t.preventDefault(),clearInterval(n),o()}));let n=null;function o(){t.disabled=!1,e.disabled=!0}function a(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}o();
//# sourceMappingURL=01-color-switcher.f09127a4.js.map
