var t=[],e=document.querySelector(".average-population"),n=document.querySelector(".total-population");document.querySelectorAll(".population").forEach(function(e){t.push(e.textContent)});var o=t.map(function(t){return Number(t.replaceAll(",",""))}),r=o.reduce(function(t,e){return t+e},0),u=Math.round(r/o.length);e.textContent=u.toLocaleString("en-US"),n.textContent=r.toLocaleString("en-US");
//# sourceMappingURL=index.4220d189.js.map
