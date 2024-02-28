import{W as o,j as n,y as i,_ as l,a as c,l as f,h as m}from"./q-8an7--bk.js";import{u as s,r as u,d as _}from"./q-zYo2kzoa.js";import"./q-vibaL3AQ.js";const v=t=>(o(i(()=>l(()=>Promise.resolve().then(()=>p),void 0),"s_LcO2OGTEA00",[t])),n(c,null,3,"Pr_0")),d=({cleanup:t})=>{const[e]=f();e.store.internal.validate=e.validate?Array.isArray(e.validate)?e.validate:[e.validate]:[],"value"in e.store&&(e.store.internal.transform=e.transform?Array.isArray(e.transform)?e.transform:[e.transform]:[]);const r=_();e.store.internal.consumers.push(r),e.store.active||(e.store.active=!0,s(e.of)),t(()=>setTimeout(()=>{e.store.internal.consumers.splice(e.store.internal.consumers.indexOf(r),1),!(e.keepActive??!1)&&!e.store.internal.consumers.length&&(e.store.active=!1,e.keepState??!0?s(e.of):u(e.of,e.store.name)),"value"in e.store&&(e.store.internal.elements=e.store.internal.elements.filter(a=>a.isConnected))},15))},p=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_LcO2OGTEA00:d,s_vBVRkPF8kFE:v},Symbol.toStringTag,{value:"Module"}));export{m as _hW,d as s_LcO2OGTEA00,v as s_vBVRkPF8kFE};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
