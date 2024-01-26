import{u as s,r as o,d as n}from"./q-wLKrUmEp.js";import{l as i,W as l,j as c,y as f,_ as m,a as u,h as _}from"./q-zoI747Cb.js";import"./q-Q0cxwV_s.js";const v=({cleanup:t})=>{const[e]=i();e.store.internal.validate=e.validate?Array.isArray(e.validate)?e.validate:[e.validate]:[],"value"in e.store&&(e.store.internal.transform=e.transform?Array.isArray(e.transform)?e.transform:[e.transform]:[]);const r=n();e.store.internal.consumers.push(r),e.store.active||(e.store.active=!0,s(e.of)),t(()=>setTimeout(()=>{e.store.internal.consumers.splice(e.store.internal.consumers.indexOf(r),1),!(e.keepActive??!1)&&!e.store.internal.consumers.length&&(e.store.active=!1,e.keepState??!0?s(e.of):o(e.of,e.store.name)),"value"in e.store&&(e.store.internal.elements=e.store.internal.elements.filter(a=>a.isConnected))},15))},d=t=>(l(f(()=>m(()=>Promise.resolve().then(()=>p),void 0),"s_LcO2OGTEA00",[t])),c(u,null,3,"Pr_0")),p=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_LcO2OGTEA00:v,s_vBVRkPF8kFE:d},Symbol.toStringTag,{value:"Module"}));export{_ as _hW,v as s_LcO2OGTEA00,d as s_vBVRkPF8kFE};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
