import{Z as at,u as st,c as x,e as it,o as M,d as p,L as lt,j as ct,y as N,_ as g,a as ut,l as Y,f as dt,q as G,g as _t,i as mt,h as ft}from"./q-zoI747Cb.js";import{j as pt,c as vt,C as yt,d as ht,D as St,R as Ct,e as Et,f as qt,h as wt,i as bt,k as W,l as K,m as gt,r as Lt,n as $,o as H,q as tt,t as Rt,v as et,w as D,x as b,y as At,z as Pt,A as Dt,B as It}from"./q-DiDzv3gl.js";const kt=v=>{at(N(()=>g(()=>Promise.resolve().then(()=>z),void 0),"s_RPDJAz33WLA"));const n=pt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const y=st("url");if(!y)throw new Error("Missing Qwik URL Env Data");const S=new URL(y),a=x({url:S,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},i=it(x(n.response.loaders,{deep:!1})),_=M({type:"initial",dest:S,forceReload:!1,replaceState:!1,scroll:!0}),m=x(vt),E=x({headings:void 0,menu:void 0}),l=M(),o=n.response.action,q=o?n.response.loaders[o]:void 0,u=M(q?{id:o,data:n.response.formData,output:{result:q,status:n.response.status}}:void 0),L=N(()=>g(()=>Promise.resolve().then(()=>z),void 0),"s_fX0bDjeJa0E",[u,C,_,a]);return p(yt,E),p(ht,l),p(St,m),p(Ct,a),p(Et,L),p(qt,i),p(wt,u),p(bt,_),lt(N(()=>g(()=>Promise.resolve().then(()=>z),void 0),"s_02wMImzEAbk",[u,E,l,m,n,L,i,C,v,_,a])),ct(ut,null,3,"qY_0")};const Tt=()=>g(()=>import("./q-uKInc_cO.js"),__vite__mapDeps([])),Ot=()=>g(()=>import("./q-7DJN1UIk.js"),__vite__mapDeps([])),Q=[["[...locale]",[Tt,Ot,()=>g(()=>import("./q-rv-B-zdu.js"),__vite__mapDeps([]))]]],J=[];const B=!0;const Ut=({track:v})=>{const[n,y,S,a,C,i,_,m,E,l,o]=Y();async function q(){var X;const[u,L]=v(()=>[l.value,n.value]),ot=dt(""),R=o.url,d=L?"form":u.type,nt=u.replaceState;let r,A,j=null,I;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let k=W(Q,J,B,r.pathname);I=G();const T=A=await K(r,I,{action:L,clearCache:!0});if(!T){l.untrackedValue={type:d,dest:r};return}const O=T.href,U=new URL(O,r);gt(U,r)||(r=U,k=W(Q,J,B,r.pathname));try{j=await k}catch{window.location.href=O;return}}if(j){const[k,T,O,U]=j,P=O,rt=P[P.length-1];o.prevUrl=R,o.url=r,o.params={...T},l.untrackedValue={type:d,dest:r};const w=Lt(A,o,P,ot);y.headings=rt.headings,y.menu=U,S.value=_t(P),a.links=w.links,a.meta=w.meta,a.styles=w.styles,a.scripts=w.scripts,a.title=w.title,a.frontmatter=w.frontmatter;{E.viewTransition!==!1&&(document.__q_view_transition__=!0);let Z;d==="popstate"&&(Z=$()),(u.scroll&&(!u.forceReload||!H(r,R))&&(d==="link"||d==="popstate")||d==="form"&&!H(r,R))&&(document.__q_scroll_restore__=()=>tt(d,r,R,Z));const F=A==null?void 0:A.loaders,t=window;if(F&&Object.assign(_,F),Rt.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),i(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,f=history.replaceState,h=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||b(document.documentElement),e);history.pushState=(e,c,V)=>(e=h(e),s.call(history,e,c,V)),history.replaceState=(e,c,V)=>(e=h(e),f.call(history,e,c,V))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const f=s.target.closest("a[href]");if(f&&!f.hasAttribute("preventdefault:click")){const h=f.getAttribute("href"),e=new URL(location.href),c=new URL(h,e);if(et(c,e)&&H(c,e)){if(s.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),D({...b(document.documentElement),x:0,y:0}),location.reload();return}i(f.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=b(document.documentElement);D(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=b(document.documentElement);D(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(X=t._qCityBootstrap)==null||X.remove(),t._qCityBootstrap=void 0,At.resolve()}if(d!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=b(document.documentElement);D(s)}Pt(window,d,R,r,nt),mt(I).then(()=>{var h;Dt(I).setAttribute("q:route",k);const f=b(document.documentElement);D(f),t._qCityScrollEnabled=!0,o.isNavigating=!1,(h=m.r)==null||h.call(m)})}}}q()},xt=async(v,n)=>{const[y,S,a,C]=Y(),{type:i="link",forceReload:_=v===void 0,replaceState:m=!1,scroll:E=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=v===void 0?l:It(v,C.url);if(!et(o,l)){location.href=o.href;return}if(!_&&H(o,l)){i==="link"&&o.href!==location.href&&history.pushState(null,"",o),tt(i,o,new URL(location.href),$()),i==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:i,dest:o,forceReload:_,replaceState:m,scroll:E},K(o,G()),W(Q,J,B,o.pathname),y.value=void 0,C.isNavigating=!0,new Promise(q=>{S.r=q})},Ht=":root{view-transition-name:none}",z=Object.freeze(Object.defineProperty({__proto__:null,_hW:ft,s_02wMImzEAbk:Ut,s_RPDJAz33WLA:Ht,s_TxCFOy819ag:kt,s_fX0bDjeJa0E:xt},Symbol.toStringTag,{value:"Module"}));export{ft as _hW,Ut as s_02wMImzEAbk,Ht as s_RPDJAz33WLA,kt as s_TxCFOy819ag,xt as s_fX0bDjeJa0E};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
