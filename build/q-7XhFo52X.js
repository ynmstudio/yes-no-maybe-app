import{v as b,a as v,s as l,b as m,c as y,F as u}from"./q-Uk-BpBs3.js";import{l as F}from"./q-zoI747Cb.js";import"./q-BmJQp6ML.js";const E=async(c,f)=>{const[t,p,s,d,a,o,g]=F();d||(s.response={}),s.submitCount++,s.submitted=!0,s.submitting=!0;try{if(await b(s,o)){const e=v(s,o),[r]=await Promise.all([g||t==null?void 0:t.submit(p?new FormData(f):e),a==null?void 0:a(e,c)]);if(r!=null&&r.value){const{errors:n,response:i}=r.value;l(s,n,{...o,shouldFocus:!1}),Object.keys(i).length?m(s,i,o):y(s,n,o)}}}catch(e){e instanceof u&&l(s,e.errors,{...o,shouldFocus:!1}),(!(e instanceof u)||e.message)&&m(s,{status:"error",message:(e==null?void 0:e.message)||"An unknown error has occurred."},o)}finally{s.submitting=!1}};export{E as s_qmKnyqz75p4};