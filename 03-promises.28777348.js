function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");const u=document.querySelector('[name="delay"]'),i=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');document.querySelector(".form");function d(t,n){new Promise(((e,t)=>{setTimeout((()=>{Math.random()>.3?e():t()}),n)})).then((o=>{e(l).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((o=>{e(l).Notify.failure(`Rejected  promise ${t} in ${n}ms`)}))}document.querySelector('button[type="submit"]').addEventListener("click",(function(t){if(t.preventDefault(),0==+u.value||0==+i.value||0==+a.value)return void e(l).Notify.warning("Please enter a number in all 3 fields");let n=+u.value;const o=+i.value,r=+a.value;for(let e=1;e<=r;e++)d(e,n),n+=o}));
//# sourceMappingURL=03-promises.28777348.js.map