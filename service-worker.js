/* Qwik Service Worker */
const appBundles=[["q--9TO5KUX.js",[47]],["q-0vG5sQfQ.js",[47],["0ReltMI3w50"]],["q-87z7kJhB.js",[22,34,36,47],["aPGLbzcugag","U9BLSzwDWqs","wR3x0DSeq1I","WXp3VenH04I"]],["q-as_uWtOz.js",[47],["aEbSHik7hw4"]],["q-Av4t0c77.js",[47],["vutaNhFEjgw"]],["q-BcHrk7Ld.js",[],["jn0vB1n0Eyw"]],["q-CH2a5y_q.js",[34,47],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-DE1MxzdD.js",[47],["b4MyjhrwMxE"]],["q-DzkqbCxI.js",[47],["hkWBlzJSItY"]],["q-EcvgadtL.js",[47]],["q-EoLAf2n0.js",[],["DyVc0YBIqQU"]],["q-FHtdPiZk.js",[34,47],["wOIPfiQ04l4"]],["q-GkjTwLPW.js",[34,47],["8gdLBszqbaM","Osdg8FnYTw4","pIf0khHUxfY"]],["q-gsuMDFK3.js",[22,34,47],["0EFsQ07yXsM","fzfym1ErEFI","vNtVq2dMPhY","WQShqIriXzI"]],["q-gxK9Cuz_.js",[34,47],["E0D2OHN1rsw"]],["q-H6cvY7aG.js",[47],["BGwYN0TDDJg"]],["q-HM8dn_Cl.js",[34,47],["e0ssiDXoeAM"]],["q-Hw_ujtgi.js",[34,47],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-JVhaALrb.js",[47],["UT966TDw31E"]],["q-JX_P5HBO.js",[22,34,47],["3o0sC3dcx3Y"]],["q-jxWA9kqB.js",[47],["G7xnuJT7jNA"]],["q-kgrOeXmL.js",[],["DqH9OzaMLmQ"]],["q-mJ0b6zAO.js",[34,47]],["q-MlFm1Ck2.js",[47]],["q-mTmDcxMw.js",[47],["s760ZT1A33E"]],["q-oEvoj1Ew.js",[47],["v0HdjU01a3w"]],["q-osCwBEF-.js",[47],["WNtBdMWIifo"]],["q-oXN3Aept.js",[47],["jNOd7uwD1Mc"]],["q-pAb83_Jl.js",[47]],["q-Q0nMZUwI.js",[47],["QhQuK0HY6ZA"]],["q-Qi1XHF_Y.js",[47],["A5bZC7WO00A"]],["q-S7128wTn.js",[47],["8vMT3TABZIQ"]],["q-sO-Cl6wA.js",[47],["392rGvSQR4s"]],["q-tliJYkAC.js",[47],["TD2dR9TvPOM"]],["q-ULiaTpEv.js",[47]],["q-UTozNGGJ.js",[22,34,47],["LcO2OGTEA00","vBVRkPF8kFE"]],["q-V31wKwrt.js",[34,47]],["q-vTq5evZ5.js",[]],["q-W6Qpp-_W.js",[47]],["q-WIJPYIJq.js",[47],["xXv2fc1rQKg"]],["q-WO_bGPtE.js",[28,47],["LcgdeaGSby0","oO8eDiRNWLI"]],["q-WouZkIx_.js",[22,34,47],["qmKnyqz75p4"]],["q-X6U2AFkm.js",[],["eTBCNsyXS74"]],["q-xT2HHQk_.js",[28,47],["PNvT2vlJxx0"]],["q-XYzbN5Oi.js",[47],["4Ad98cQ1Gyc"]],["q-YoDsgE2G.js",[22,34,47],["g3iC2s54jgU"]],["q-ZflSl3Pc.js",[34,47],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-zoI747Cb.js",[]],["q-zsX2g1pj.js",[34,47],["02mdohNGg2E"]],["q-zvOWyZ5_.js",[47],["T2TywIsANA0"]]];
const libraryBundleIds=[6];
const linkBundles=[[/^(?:\/(.*))?\/?$/,[38,40,0,36,2,4]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
