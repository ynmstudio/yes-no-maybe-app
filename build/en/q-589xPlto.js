import{V as L,y as k,S as R,_ as j}from"./q-zoI747Cb.js";import{J as O}from"./q-THKgOFbi.js";function A(e){return typeof e=="function"?e():e}function I(e,t,r,c,a){return{issues:[{validation:e,message:A(t),input:r,requirement:c,path:a}]}}function z(e){return{output:e}}function v(e,t){return Array.isArray(e)?[void 0,e]:[e,t]}function q(e,t,r){return{typed:e,output:t,issues:r}}function V(e,t,r){if(!e||typeof e=="object"&&!Array.isArray(e)){const[l,i]=v(t,r);return[e,l,i]}const[c,a]=v(e,t);return[void 0,c,a]}function $(e,t){return{reason:e==null?void 0:e.reason,validation:t.validation,origin:(e==null?void 0:e.origin)||"value",message:t.message,input:t.input,requirement:t==null?void 0:t.requirement,path:t.path,abortEarly:e==null?void 0:e.abortEarly,abortPipeEarly:e==null?void 0:e.abortPipeEarly,skipPipe:e==null?void 0:e.skipPipe}}function x(e,t){return{reason:t,origin:e==null?void 0:e.origin,abortEarly:e==null?void 0:e.abortEarly,abortPipeEarly:e==null?void 0:e.abortPipeEarly,skipPipe:e==null?void 0:e.skipPipe}}function S(e,t,r,c,a){let l,i=e;if(t!=null&&t.length&&!(r!=null&&r.skipPipe))for(const d of t){const u=d._parse(i);if(u.issues){l=l||x(r,c);for(const s of u.issues){const y=$(l,s);a?a.push(y):a=[y]}if(l.abortEarly||l.abortPipeEarly)break}else i=u.output}return q(!0,i,a)}function w(e,t,r,c,a,l,i){return{typed:!1,output:a,issues:[{reason:t,validation:r,origin:(e==null?void 0:e.origin)||"value",message:A(c),input:a,path:l,issues:i,abortEarly:e==null?void 0:e.abortEarly,abortPipeEarly:e==null?void 0:e.abortPipeEarly,skipPipe:e==null?void 0:e.skipPipe}]}}function D(e,t,r,c){const[a,l="Invalid type",i]=V(t,r,c);let d;return{type:"object",async:!1,entries:e,rest:a,message:l,pipe:i,_parse(u,s){if(!u||typeof u!="object")return w(s,"type","object",this.message,u);d=d||Object.entries(this.entries);let y=!0,p;const b={};for(const[o,g]of d){const m=u[o],n=g._parse(m,s);if(n.issues){const h={type:"object",input:u,key:o,value:m};for(const E of n.issues)E.path?E.path.unshift(h):E.path=[h],p==null||p.push(E);if(p||(p=n.issues),s!=null&&s.abortEarly){y=!1;break}}n.typed||(y=!1),(n.output!==void 0||o in u)&&(b[o]=n.output)}if(this.rest&&!(s!=null&&s.abortEarly&&p)){for(const o in u)if(!(o in this.entries)){const g=u[o],m=this.rest._parse(g,s);if(m.issues){const n={type:"object",input:u,key:o,value:g};for(const h of m.issues)h.path?h.path.unshift(n):h.path=[n],p==null||p.push(h);if(p||(p=m.issues),s!=null&&s.abortEarly){y=!1;break}}m.typed||(y=!1),b[o]=m.output}}return y?S(b,this.pipe,s,"object",p):q(!1,b,p)}}}function _(e,t){const[r="Invalid type",c]=v(e,t);return{type:"string",async:!1,message:r,pipe:c,_parse(a,l){return typeof a!="string"?w(l,"type","string",this.message,a):S(a,this.pipe,l,"string")}}}var M=/^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu;function T(e="Invalid email"){return{type:"email",async:!1,message:e,requirement:M,_parse(t){return this.requirement.test(t)?z(t):I(this.type,this.message,t,this.requirement)}}}function P(e,t="Invalid length"){return{type:"min_length",async:!1,message:t,requirement:e,_parse(r){return r.length<this.requirement?I(this.type,this.message,r,this.requirement):z(r)}}}const G=D({name:_([P(1,"Please enter your name.")]),email:_([P(1,"Please enter your email."),T("The email address is badly formatted.")]),message:_()}),N=O(R("s_b6bffRgEStA")),Q=k(()=>j(()=>import("./q-Av4t0c77.js"),__vite__mapDeps([])),"s_vutaNhFEjgw"),X=L(k(()=>j(()=>import("./q-l1CKHxjv.js"),__vite__mapDeps([])),"s_WXp3VenH04I")),H=()=>({title:"[Yes][No][Maybe].App",meta:[{key:"description",content:"Effortlessly manage complex, multimedia portfolios, encourage collaborative discussions among jury members with an elegant, integrated chat feature, and ensure impartial and transparent art evaluations."},{property:"og:image",content:"~/media/ynm-app-on-ipad.jpg"}]}),J=()=>{throw"Symbol removed by Qwik Optimizer, it can not be called from current platform"};export{G as _auto_ContactSchema,X as default,H as head,J as onStaticGenerate,Q as sendEmail,N as useFormLoader};function __vite__mapDeps(indexes){if(!__vite__mapDeps.viteFileDeps){__vite__mapDeps.viteFileDeps=[]}return indexes.map(i=>__vite__mapDeps.viteFileDeps[i])}