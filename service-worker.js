/* Qwik Service Worker */
const appBundles=[["q-0vG5sQfQ.js",[48],["0ReltMI3w50"]],["q-4fe2zV3V.js",[48]],["q-589xPlto.js",[41,48]],["q-6Ewc3l1S.js",[41,48],["E0D2OHN1rsw"]],["q-8qeCZ-8p.js",[18,41,48],["3o0sC3dcx3Y"]],["q-9BOll9ms.js",[48]],["q-_LPN7Aq3.js",[41,48],["wOIPfiQ04l4"]],["q-A1EAwx2o.js",[41,48],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-as_uWtOz.js",[48],["aEbSHik7hw4"]],["q-Av4t0c77.js",[48],["vutaNhFEjgw"]],["q-BcHrk7Ld.js",[],["jn0vB1n0Eyw"]],["q-CQIvcPWM.js",[41,48],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-DE1MxzdD.js",[48],["b4MyjhrwMxE"]],["q-DzkqbCxI.js",[48],["hkWBlzJSItY"]],["q-EcvgadtL.js",[48]],["q-EeUGz6ZG.js",[41,48],["02mdohNGg2E"]],["q-EoLAf2n0.js",[],["DyVc0YBIqQU"]],["q-F_hX7jKx.js",[1,48],["LcgdeaGSby0","oO8eDiRNWLI"]],["q-fQGnDXXj.js",[41,48]],["q-H6cvY7aG.js",[48],["BGwYN0TDDJg"]],["q-j4XFnlcP.js",[48]],["q-jCvlyTfu.js",[1,48],["PNvT2vlJxx0"]],["q-JVhaALrb.js",[48],["UT966TDw31E"]],["q-jxWA9kqB.js",[48],["G7xnuJT7jNA"]],["q-kgrOeXmL.js",[],["DqH9OzaMLmQ"]],["q-l1CKHxjv.js",[2,18,41,48],["aPGLbzcugag","U9BLSzwDWqs","wR3x0DSeq1I","WXp3VenH04I"]],["q-LY-jMD0C.js",[41,48],["8gdLBszqbaM","Osdg8FnYTw4","pIf0khHUxfY"]],["q-mTmDcxMw.js",[48],["s760ZT1A33E"]],["q-mZkZyYVk.js",[41,48],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-oEvoj1Ew.js",[48],["v0HdjU01a3w"]],["q-osCwBEF-.js",[48],["WNtBdMWIifo"]],["q-oXN3Aept.js",[48],["jNOd7uwD1Mc"]],["q-Q0nMZUwI.js",[48],["QhQuK0HY6ZA"]],["q-Q6jxjf1-.js",[18,41,48],["qmKnyqz75p4"]],["q-Qi1XHF_Y.js",[48],["A5bZC7WO00A"]],["q-S7128wTn.js",[48],["8vMT3TABZIQ"]],["q-S7VvUBKr.js",[18,41,48],["LcO2OGTEA00","vBVRkPF8kFE"]],["q-s_62OI84.js",[18,41,48],["0EFsQ07yXsM","fzfym1ErEFI","vNtVq2dMPhY","WQShqIriXzI"]],["q-sO-Cl6wA.js",[48],["392rGvSQR4s"]],["q-sYCb1MYr.js",[18,41,48],["g3iC2s54jgU"]],["q-tguG40uR.js",[48]],["q-THKgOFbi.js",[48]],["q-tliJYkAC.js",[48],["TD2dR9TvPOM"]],["q-vTq5evZ5.js",[]],["q-WIJPYIJq.js",[48],["xXv2fc1rQKg"]],["q-wMG5-TFd.js",[41,48],["e0ssiDXoeAM"]],["q-X6U2AFkm.js",[],["eTBCNsyXS74"]],["q-XYzbN5Oi.js",[48],["4Ad98cQ1Gyc"]],["q-zoI747Cb.js",[]],["q-zvOWyZ5_.js",[48],["T2TywIsANA0"]]];
const libraryBundleIds=[7];
const linkBundles=[[/^(?:\/(.*))?\/?$/,[5,17,20,2,9,25]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
