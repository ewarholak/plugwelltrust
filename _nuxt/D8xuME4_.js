import{_ as N,a as O}from"./DSjhiX6b.js";import{_ as F}from"./BzpcGkdB.js";import{_ as I}from"./DYEglXA6.js";import{c as L,t as h,r as V,f as q,a as P,d as R,u as U,w as G,b as M,o as z,e as H,g as t,h as s,i as A,j as r,k as i,l as T}from"./CHLybBhA.js";import{h as S}from"./DvDH6DOc.js";import{u as K}from"./HjR1pUCk.js";function X(c,a,_){const[e={},p]=[{},a],o=L(()=>h(c)),l=e.key||S([p,typeof o.value=="string"?o.value:"",...J(e)]);if(!l||typeof l!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+l);if(!c)throw new Error("[nuxt] [useFetch] request is missing.");const m=l===p?"$f"+l:l;if(!e.baseURL&&typeof o.value=="string"&&o.value[0]==="/"&&o.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:x,lazy:y,default:g,transform:w,pick:b,watch:u,immediate:D,getCachedData:$,deep:v,dedupe:k,...n}=e,f=V({...q,...n,cache:typeof e.cache=="boolean"?void 0:e.cache}),E={server:x,lazy:y,default:g,transform:w,pick:b,immediate:D,getCachedData:$,deep:v,dedupe:k,watch:u===!1?[]:[f,o,...u||[]]};let d;return K(m,()=>{var B;(B=d==null?void 0:d.abort)==null||B.call(d),d=typeof AbortController<"u"?new AbortController:{};const C=h(e.timeout);let j;return C&&(j=setTimeout(()=>d.abort(),C),d.signal.onabort=()=>clearTimeout(j)),(e.$fetch||globalThis.$fetch)(o.value,{signal:d.signal,...f}).finally(()=>{clearTimeout(j)})},E)}function J(c){var _;const a=[((_=h(c.method))==null?void 0:_.toUpperCase())||"GET",h(c.baseURL)];for(const e of[c.params||c.query]){const p=h(e);if(!p)continue;const o={};for(const[l,m]of Object.entries(p))o[h(l)]=h(m);a.push(o)}return a}const Q=async c=>{const{data:a,error:_}=await X(`/api/adopt/local-data/${c}`,"$7CmfmXjsn9");if(_.value)throw P({..._.value,statusMessage:`Couldn't fetch pet profile for id ${c}.`});return{pet:a,fetchPet:()=>a.value}},W={class:"py-12"},Y={class:"container mx-auto px-4 relative"},Z={class:"container mx-auto pl-12 pr-8 pt-4 relative"},tt={class:"px-8"},et={class:"flex flex-wrap lg:justify-between"},st={class:"py-4 text-center w-full lg:w-fit"},at=t("span",null,"<- Go Back",-1),ot={class:"text-center w-full lg:w-fit"},nt={class:"capitalize"},it={class:"uppercase"},ct={class:"flex items-center justify-center py-4 space-x-4 text-center w-full lg:w-fit"},lt={class:"flex flex-wrap pt-8 w-full lg:flex-nowrap"},rt={class:"flex flex-wrap justify-center text-center w-full lg:flex-nowrap lg:text-left"},_t={class:"w-full"},dt={class:"py-8 w-full sm:px-16"},mt={class:"mb-4"},pt=t("span",{class:"font-semibold"},"Breed:",-1),ht={class:"ml-2"},ut={class:"mb-4"},ft=t("span",{class:"font-semibold"},"Age:",-1),xt={class:"ml-2"},yt={class:"mb-4"},gt=t("span",{class:"font-semibold"},"Gender:",-1),wt={class:"ml-2"},bt={class:"mb-4"},vt=t("span",{class:"font-semibold"},"Microchip No:",-1),kt={class:"ml-2"},jt={class:"flex items-center justify-center mb-4 lg:justify-start"},Dt={class:"ml-2"},$t=t("li",{class:"mb-4"},[t("span",{class:"font-semibold"},"Includes:"),t("span",{class:"ml-2"},"Vaccination")],-1),Ct={class:"max-w-xs py-8 rounded-xl w-full sm:px-8 bg-primary-600 dark:bg-primary-200 text-white dark:text-primary-800"},Bt={class:"flex items-center justify-center lg:justify-start"},At=t("span",{class:"inline-block ml-2"},"Done",-1),Tt={class:"flex items-center justify-center mt-4 lg:justify-start"},Et=t("span",{class:"ml-2"},"Health Check",-1),Nt={class:"flex items-center justify-center mt-4 lg:justify-start"},Ot=t("span",{class:"ml-2"},"Microchipped",-1),Ft={class:"flex items-center justify-center mt-4 lg:justify-start"},It=t("span",{class:"ml-2"},"De-wormed",-1),Lt={class:"flex items-center justify-center mt-4 lg:justify-start"},Vt=t("span",{class:"ml-2"},"De-sexed",-1),qt={class:"mt-8 px-8 text-center lg:text-left"},Pt={class:"mx-1 text-primary-600 dark:text-primary-200"},Rt=t("span",null,"or learn more, please visit our adoption centre at ",-1),Ut={class:"mx-1 text-primary-600 dark:text-primary-200"},Gt=t("span",null,"Appointments are not required and walk-ins are welcome.",-1),Mt={class:"mt-2"},zt=t("span",{class:"text-primary-600 dark:text-primary-200"},"03 2394 3284",-1),Zt=R({__name:"[id]",async setup(c){let a,_;const e=U(),{id:p}=e.params,{fetchPet:o}=([a,_]=G(()=>Q(+p)),a=await a,_(),a),{id:l,name:m,breed:x,sex:y,dateOfBirth:g,image:w,microchip:b,location:u}=o();return M({title:()=>m||""}),(D,$)=>{const v=N,k=F,n=O,f=I;return z(),H("div",W,[t("div",Y,[t("div",Z,[t("div",tt,[t("div",et,[t("div",st,[s(k,{to:"/adopt"},{default:A(()=>[s(v,null,{default:A(()=>[at]),_:1})]),_:1})]),t("div",ot,[t("h3",nt,r(i(m)),1),t("h6",it,"Animal ID: "+r(i(l)),1)]),t("div",ct,[s(n,{name:"i-material-symbols-mark-email-unread-outline",height:"28px"}),s(n,{name:"i-logos-whatsapp-icon",height:"28px"}),s(n,{name:"i-logos-facebook",height:"28px"}),s(n,{name:"i-logos-twitter",height:"28px"})])]),t("div",lt,[t("div",rt,[t("div",_t,[s(f,{src:i(w),class:"rounded-xl w-full",alt:i(m)},null,8,["src","alt"])]),t("div",dt,[t("ul",null,[t("li",mt,[pt,t("span",ht,r(i(x)),1)]),t("li",ut,[ft,t("span",xt,r(i(g)),1)]),t("li",yt,[gt,t("span",wt,r(i(y)),1)]),t("li",bt,[vt,t("span",kt,r(i(b)),1)]),t("li",jt,[s(n,{name:"i-material-symbols-add-location-alt-outline-rounded",height:"28px",class:"-ml-1 font-semibold"}),t("span",Dt,r(i(u)),1)]),$t])]),t("div",Ct,[t("ul",null,[t("li",Bt,[s(n,{name:"i-material-symbols-check-box-outline",height:"28px"}),At]),t("li",Tt,[s(n,{name:"i-twemoji-sparkling-heart",height:"24px"}),Et]),t("li",Nt,[s(n,{name:"i-bx-bxs-microchip",height:"24px",class:"text-tertiary-600 dark:text-tertiary-200"}),Ot]),t("li",Ft,[s(n,{name:"i-twemoji-worm",height:"24px"}),It]),t("li",Lt,[s(n,{name:"i-healthicons-sexual-reproductive-health-outline",height:"24px",class:"text-indigo-600"}),Vt])])])])]),t("div",qt,[t("p",null,[T(" To adopt "),t("span",Pt,r(i(m)),1),Rt,t("span",Ut,r(i(u))+".",1),Gt]),t("p",Mt,[T(" Alternatively, please contact our "+r(i(u))+" team directly on ",1),zt])])])])])])}}});export{Zt as default};
