!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(a){a.preventDefault(),t.disabled=!0,e.disabled=!1,n=setInterval(o,1e3)})),e.addEventListener("click",(function(t){t.preventDefault(),clearInterval(n),a()}));var n=null;function a(){t.disabled=!1,e.disabled=!0}function o(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}a()}();
//# sourceMappingURL=01-color-switcher.47130efd.js.map
