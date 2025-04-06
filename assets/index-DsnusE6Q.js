var Ec=Object.defineProperty;var Ac=(e,t,r)=>t in e?Ec(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Pc=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var it=(e,t,r)=>Ac(e,typeof t!="symbol"?t+"":t,r);import{r as V,a as Rc,g as bo,R as z,p as Lc,f as Nc,o as Ic,d as g,l as $e,L as es,u as _o,O as Fc,m as Yc,b as di,c as zc,e as Mt,B as Vc}from"./vendor-DnqNwPge.js";import{c as ui,a as wo,b as Uc,d as Hc,e as Wc,u as on,f as Qe,P as ko}from"./redux-BDvUgTDq.js";var ub=Pc((_b,An)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var So={exports:{}},ts={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc=V,Bc=Symbol.for("react.element"),Gc=Symbol.for("react.fragment"),Kc=Object.prototype.hasOwnProperty,qc=Zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jc={key:!0,ref:!0,__self:!0,__source:!0};function $o(e,t,r){var n,s={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Kc.call(t,n)&&!Jc.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:Bc,type:e,key:i,ref:a,props:s,_owner:qc.current}}ts.Fragment=Gc;ts.jsx=$o;ts.jsxs=$o;So.exports=ts;var d=So.exports,Ns={},fa=Rc;Ns.createRoot=fa.createRoot,Ns.hydrateRoot=fa.hydrateRoot;var Qc=typeof Element<"u",Xc=typeof Map=="function",ed=typeof Set=="function",td=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function wn(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,s;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!wn(e[n],t[n]))return!1;return!0}var i;if(Xc&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;for(i=e.entries();!(n=i.next()).done;)if(!wn(n.value[1],t.get(n.value[0])))return!1;return!0}if(ed&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(td&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(s=Object.keys(e),r=s.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[n]))return!1;if(Qc&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((s[n]==="_owner"||s[n]==="__v"||s[n]==="__o")&&e.$$typeof)&&!wn(e[s[n]],t[s[n]]))return!1;return!0}return e!==e&&t!==t}var rd=function(t,r){try{return wn(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const nd=bo(rd);var sd=function(e,t,r,n,s,i,a,o){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,s,i,a,o],u=0;l=new Error(t.replace(/%s/g,function(){return c[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},id=sd;const ha=bo(id);var To=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(To||{}),ws={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},pa=Object.values(To),fi={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ad=Object.entries(fi).reduce((e,[t,r])=>(e[r]=t,e),{}),Ke="data-rh",dr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},ur=(e,t)=>{for(let r=e.length-1;r>=0;r-=1){const n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},od=e=>{let t=ur(e,"title");const r=ur(e,dr.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,()=>t);const n=ur(e,dr.DEFAULT_TITLE);return t||n||void 0},ld=e=>ur(e,dr.ON_CHANGE_CLIENT_STATE)||(()=>{}),ks=(e,t)=>t.filter(r=>typeof r[e]<"u").map(r=>r[e]).reduce((r,n)=>({...r,...n}),{}),cd=(e,t)=>t.filter(r=>typeof r.base<"u").map(r=>r.base).reverse().reduce((r,n)=>{if(!r.length){const s=Object.keys(n);for(let i=0;i<s.length;i+=1){const o=s[i].toLowerCase();if(e.indexOf(o)!==-1&&n[o])return r.concat(n)}}return r},[]),dd=e=>console&&typeof console.warn=="function"&&console.warn(e),kr=(e,t,r)=>{const n={};return r.filter(s=>Array.isArray(s[e])?!0:(typeof s[e]<"u"&&dd(`Helmet: ${e} should be of type "Array". Instead found type "${typeof s[e]}"`),!1)).map(s=>s[e]).reverse().reduce((s,i)=>{const a={};i.filter(l=>{let c;const u=Object.keys(l);for(let f=0;f<u.length;f+=1){const x=u[f],v=x.toLowerCase();t.indexOf(v)!==-1&&!(c==="rel"&&l[c].toLowerCase()==="canonical")&&!(v==="rel"&&l[v].toLowerCase()==="stylesheet")&&(c=v),t.indexOf(x)!==-1&&(x==="innerHTML"||x==="cssText"||x==="itemprop")&&(c=x)}if(!c||!l[c])return!1;const h=l[c].toLowerCase();return n[c]||(n[c]={}),a[c]||(a[c]={}),n[c][h]?!1:(a[c][h]=!0,!0)}).reverse().forEach(l=>s.push(l));const o=Object.keys(a);for(let l=0;l<o.length;l+=1){const c=o[l],u={...n[c],...a[c]};n[c]=u}return s},[]).reverse()},ud=(e,t)=>{if(Array.isArray(e)&&e.length){for(let r=0;r<e.length;r+=1)if(e[r][t])return!0}return!1},fd=e=>({baseTag:cd(["href"],e),bodyAttributes:ks("bodyAttributes",e),defer:ur(e,dr.DEFER),encode:ur(e,dr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ks("htmlAttributes",e),linkTags:kr("link",["rel","href"],e),metaTags:kr("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:kr("noscript",["innerHTML"],e),onChangeClientState:ld(e),scriptTags:kr("script",["src","innerHTML"],e),styleTags:kr("style",["cssText"],e),title:od(e),titleAttributes:ks("titleAttributes",e),prioritizeSeoTags:ud(e,dr.PRIORITIZE_SEO_TAGS)}),Oo=e=>Array.isArray(e)?e.join(""):e,hd=(e,t)=>{const r=Object.keys(e);for(let n=0;n<r.length;n+=1)if(t[r[n]]&&t[r[n]].includes(e[r[n]]))return!0;return!1},Ss=(e,t)=>Array.isArray(e)?e.reduce((r,n)=>(hd(n,t)?r.priority.push(n):r.default.push(n),r),{priority:[],default:[]}):{default:e,priority:[]},ma=(e,t)=>({...e,[t]:void 0}),pd=["noscript","script","style"],Is=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Co=e=>Object.keys(e).reduce((t,r)=>{const n=typeof e[r]<"u"?`${r}="${e[r]}"`:`${r}`;return t?`${t} ${n}`:n},""),md=(e,t,r,n)=>{const s=Co(r),i=Oo(t);return s?`<${e} ${Ke}="true" ${s}>${Is(i,n)}</${e}>`:`<${e} ${Ke}="true">${Is(i,n)}</${e}>`},gd=(e,t,r=!0)=>t.reduce((n,s)=>{const i=s,a=Object.keys(i).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,u)=>{const h=typeof i[u]>"u"?u:`${u}="${Is(i[u],r)}"`;return c?`${c} ${h}`:h},""),o=i.innerHTML||i.cssText||"",l=pd.indexOf(e)===-1;return`${n}<${e} ${Ke}="true" ${a}${l?"/>":`>${o}</${e}>`}`},""),Mo=(e,t={})=>Object.keys(e).reduce((r,n)=>{const s=fi[n];return r[s||n]=e[n],r},t),yd=(e,t,r)=>{const n={key:t,[Ke]:!0},s=Mo(r,n);return[z.createElement("title",s,t)]},kn=(e,t)=>t.map((r,n)=>{const s={key:n,[Ke]:!0};return Object.keys(r).forEach(i=>{const o=fi[i]||i;if(o==="innerHTML"||o==="cssText"){const l=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:l}}else s[o]=r[i]}),z.createElement(e,s)}),ze=(e,t,r=!0)=>{switch(e){case"title":return{toComponent:()=>yd(e,t.title,t.titleAttributes),toString:()=>md(e,t.title,t.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Mo(t),toString:()=>Co(t)};default:return{toComponent:()=>kn(e,t),toString:()=>gd(e,t,r)}}},vd=({metaTags:e,linkTags:t,scriptTags:r,encode:n})=>{const s=Ss(e,ws.meta),i=Ss(t,ws.link),a=Ss(r,ws.script);return{priorityMethods:{toComponent:()=>[...kn("meta",s.priority),...kn("link",i.priority),...kn("script",a.priority)],toString:()=>`${ze("meta",s.priority,n)} ${ze("link",i.priority,n)} ${ze("script",a.priority,n)}`},metaTags:s.default,linkTags:i.default,scriptTags:a.default}},xd=e=>{const{baseTag:t,bodyAttributes:r,encode:n=!0,htmlAttributes:s,noscriptTags:i,styleTags:a,title:o="",titleAttributes:l,prioritizeSeoTags:c}=e;let{linkTags:u,metaTags:h,scriptTags:f}=e,x={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:x,linkTags:u,metaTags:h,scriptTags:f}=vd(e)),{priority:x,base:ze("base",t,n),bodyAttributes:ze("bodyAttributes",r,n),htmlAttributes:ze("htmlAttributes",s,n),link:ze("link",u,n),meta:ze("meta",h,n),noscript:ze("noscript",i,n),script:ze("script",f,n),style:ze("style",a,n),title:ze("title",{title:o,titleAttributes:l},n)}},Fs=xd,pn=[],Do=!!(typeof window<"u"&&window.document&&window.document.createElement),Ys=class{constructor(e,t){it(this,"instances",[]);it(this,"canUseDOM",Do);it(this,"context");it(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?pn:this.instances,add:e=>{(this.canUseDOM?pn:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?pn:this.instances).indexOf(e);(this.canUseDOM?pn:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Fs({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},bd={},jo=z.createContext(bd),Zt,hi=(Zt=class extends V.Component{constructor(r){super(r);it(this,"helmetData");this.helmetData=new Ys(this.props.context||{},Zt.canUseDOM)}render(){return z.createElement(jo.Provider,{value:this.helmetData.value},this.props.children)}},it(Zt,"canUseDOM",Do),Zt),tr=(e,t)=>{const r=document.head||document.querySelector("head"),n=r.querySelectorAll(`${e}[${Ke}]`),s=[].slice.call(n),i=[];let a;return t&&t.length&&t.forEach(o=>{const l=document.createElement(e);for(const c in o)if(Object.prototype.hasOwnProperty.call(o,c))if(c==="innerHTML")l.innerHTML=o.innerHTML;else if(c==="cssText")l.styleSheet?l.styleSheet.cssText=o.cssText:l.appendChild(document.createTextNode(o.cssText));else{const u=c,h=typeof o[u]>"u"?"":o[u];l.setAttribute(c,h)}l.setAttribute(Ke,"true"),s.some((c,u)=>(a=u,l.isEqualNode(c)))?s.splice(a,1):i.push(l)}),s.forEach(o=>{var l;return(l=o.parentNode)==null?void 0:l.removeChild(o)}),i.forEach(o=>r.appendChild(o)),{oldTags:s,newTags:i}},zs=(e,t)=>{const r=document.getElementsByTagName(e)[0];if(!r)return;const n=r.getAttribute(Ke),s=n?n.split(","):[],i=[...s],a=Object.keys(t);for(const o of a){const l=t[o]||"";r.getAttribute(o)!==l&&r.setAttribute(o,l),s.indexOf(o)===-1&&s.push(o);const c=i.indexOf(o);c!==-1&&i.splice(c,1)}for(let o=i.length-1;o>=0;o-=1)r.removeAttribute(i[o]);s.length===i.length?r.removeAttribute(Ke):r.getAttribute(Ke)!==a.join(",")&&r.setAttribute(Ke,a.join(","))},_d=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Oo(e)),zs("title",t)},ga=(e,t)=>{const{baseTag:r,bodyAttributes:n,htmlAttributes:s,linkTags:i,metaTags:a,noscriptTags:o,onChangeClientState:l,scriptTags:c,styleTags:u,title:h,titleAttributes:f}=e;zs("body",n),zs("html",s),_d(h,f);const x={baseTag:tr("base",r),linkTags:tr("link",i),metaTags:tr("meta",a),noscriptTags:tr("noscript",o),scriptTags:tr("script",c),styleTags:tr("style",u)},v={},y={};Object.keys(x).forEach(w=>{const{newTags:j,oldTags:$}=x[w];j.length&&(v[w]=j),$.length&&(y[w]=x[w].oldTags)}),t&&t(),l(e,v,y)},Sr=null,wd=e=>{Sr&&cancelAnimationFrame(Sr),e.defer?Sr=requestAnimationFrame(()=>{ga(e,()=>{Sr=null})}):(ga(e),Sr=null)},kd=wd,ya=class extends V.Component{constructor(){super(...arguments);it(this,"rendered",!1)}shouldComponentUpdate(t){return!Lc(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:r}=this.props.context;let n=null;const s=fd(t.get().map(i=>{const a={...i.props};return delete a.context,a}));hi.canUseDOM?kd(s):Fs&&(n=Fs(s)),r(n)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Ls,pi=(Ls=class extends V.Component{shouldComponentUpdate(e){return!nd(ma(this.props,"helmetData"),ma(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,r,n){return{...t,[e.type]:[...t[e.type]||[],{...r,...this.mapNestedChildrenToProps(e,n)}]}}mapObjectTypeChildren(e,t,r,n){switch(e.type){case"title":return{...t,[e.type]:n,titleAttributes:{...r}};case"body":return{...t,bodyAttributes:{...r}};case"html":return{...t,htmlAttributes:{...r}};default:return{...t,[e.type]:{...r}}}}mapArrayTypeChildrenToProps(e,t){let r={...t};return Object.keys(e).forEach(n=>{r={...r,[n]:e[n]}}),r}warnOnInvalidChildren(e,t){return ha(pa.some(r=>e.type===r),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${pa.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),ha(!t||typeof t=="string"||Array.isArray(t)&&!t.some(r=>typeof r!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let r={};return z.Children.forEach(e,n=>{if(!n||!n.props)return;const{children:s,...i}=n.props,a=Object.keys(i).reduce((l,c)=>(l[ad[c]||c]=i[c],l),{});let{type:o}=n;switch(typeof o=="symbol"?o=o.toString():this.warnOnInvalidChildren(n,s),o){case"Symbol(react.fragment)":t=this.mapChildrenToProps(s,t);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(n,r,a,s);break;default:t=this.mapObjectTypeChildren(n,t,a,s);break}}),this.mapArrayTypeChildrenToProps(r,t)}render(){const{children:e,...t}=this.props;let r={...t},{helmetData:n}=t;if(e&&(r=this.mapChildrenToProps(e,r)),n&&!(n instanceof Ys)){const s=n;n=new Ys(s.context,!0),delete r.helmetData}return n?z.createElement(ya,{...r,context:n.value}):z.createElement(jo.Consumer,null,s=>z.createElement(ya,{...r,context:s}))}},it(Ls,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Ls);const Eo={spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem"},typography:{fontFamily:{primary:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif",secondary:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif",mono:"ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace"},fontSize:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem",xxl:"1.5rem"},fontWeight:{light:300,regular:400,medium:500,semibold:600,bold:700},lineHeight:{xs:1.25,sm:1.375,md:1.5,lg:1.625,xl:1.75}},breakpoints:{xs:"320px",sm:"576px",md:"768px",lg:"992px",xl:"1200px"},animation:{duration:{faster:"100ms",fast:"200ms",normal:"300ms",slow:"400ms",slower:"500ms"},easing:{easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",linear:"linear"}},borderRadius:{xs:"2px",sm:"6px",md:"8px",lg:"12px",xl:"16px",round:"50%"},shadows:{xs:"0 1px 2px rgba(31, 35, 40, 0.15)",sm:"0 1px 3px rgba(31, 35, 40, 0.12)",md:"0 3px 6px rgba(31, 35, 40, 0.15)",lg:"0 8px 24px rgba(31, 35, 40, 0.12)",xl:"0 12px 28px rgba(31, 35, 40, 0.12)"},zIndex:{dropdown:1e3,sticky:1020,fixed:1030,modal:1040,popover:1050,tooltip:1060}},Ze={blue:"#0969da",purple:"#8250df",pink:"#bf3989",red:"#cf222e",orange:"#bc4c00",green:"#2da44e",teal:"#1b7c83"},Sd={mode:"light",colors:{primary:Ze.blue,secondary:"#57606a",surface:"#fffdf7",backgroundHover:"#f0ece0",error:Ze.red,warning:Ze.orange,success:Ze.green,info:Ze.blue,background:{primary:"#fcf9f2",secondary:"#f8f6f1",highlight:"#f5f2e8"},accent:{primary:Ze.blue,secondary:"#0550ae"},gradients:{start:Ze.blue,end:"#1f78d1"},text:{primary:"#24292f",secondary:"#57606a",disabled:"#a1a1aa",hint:"#6e7781",link:Ze.blue,muted:"#8b949e"},border:{default:"#d0d7de",input:"#d8dee4",divider:"#d8dee4",primary:Ze.blue,light:"#eaeef2",muted:"#eaeef2"},components:{navbar:"#fcf9f2",sidebar:"#f8f6f1",card:"#fffdf7",input:{background:"#fcf9f2",placeholder:"#6e7781"},button:{primary:{background:Ze.blue,text:"#ffffff",hover:"#0550ae"},secondary:{background:"#f6f8fa",text:"#24292f",hover:"#eaeef2"},ghost:{background:"transparent",text:"#24292f",hover:"rgba(0, 0, 0, 0.05)"}}}},...Eo},$d={mode:"dark",colors:{primary:"#2f81f7",secondary:"#768390",surface:"#21262d",backgroundHover:"#2d333b",error:"#fa4549",warning:"#cc6b2c",success:"#57ab5a",info:"#2f81f7",background:{primary:"#0d1117",secondary:"#161b22",highlight:"#2d333b"},accent:{primary:"#2f81f7",secondary:"#409eff"},gradients:{start:"#2f81f7",end:"#58a6ff"},text:{primary:"#e6edf3",secondary:"#adbac7",disabled:"#545d68",hint:"#768390",link:"#58a6ff",muted:"#636e7b"},border:{default:"#30363d",input:"#30363d",divider:"#21262d",primary:"#388bfd",light:"#21262d",muted:"#21262d"},components:{navbar:"#21262d",sidebar:"#161b22",card:"#22272e",input:{background:"#21262d",placeholder:"#768390"},button:{primary:{background:"#238636",text:"#ffffff",hover:"#2ea043"},secondary:{background:"#21262d",text:"#c9d1d9",hover:"#30363d"},ghost:{background:"transparent",text:"#c9d1d9",hover:"rgba(255, 255, 255, 0.08)"}}}},...Eo},Td=(e,t)=>{const r=Ze[t],n=e.mode==="light"?Ft(r,-10):Ft(r,10);Ft(r,30);const s={...e.colors,primary:r,accent:{primary:r,secondary:n},gradients:{start:r,end:n},text:{...e.colors.text,link:e.mode==="light"?r:Ft(r,20)},border:{...e.colors.border,primary:r},components:{...e.colors.components,button:{...e.colors.components.button,primary:{...e.colors.components.button.primary,background:r,hover:e.mode==="light"?n:Ft(r,-10)},secondary:{...e.colors.components.button.secondary,text:e.mode==="light"?r:Ft(r,10)},ghost:{...e.colors.components.button.ghost,text:e.mode==="light"?r:Ft(r,10)}}}};return{...e,colors:s}};function Ft(e,t){let r=parseInt(e.substring(1,3),16),n=parseInt(e.substring(3,5),16),s=parseInt(e.substring(5,7),16);return r=Math.min(255,Math.max(0,r+t*2.55)),n=Math.min(255,Math.max(0,n+t*2.55)),s=Math.min(255,Math.max(0,s+t*2.55)),`#${Math.round(r).toString(16).padStart(2,"0")}${Math.round(n).toString(16).padStart(2,"0")}${Math.round(s).toString(16).padStart(2,"0")}`}const Od=Nc`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: 16px;
    --primary-color: ${({theme:e})=>e.colors.primary};
    --accent-color: ${({theme:e})=>e.colors.accent.primary};
    --background-color: ${({theme:e})=>e.colors.background.primary};
    --surface-color: ${({theme:e})=>e.colors.surface};
    --text-color: ${({theme:e})=>e.colors.text.primary};
    --text-secondary-color: ${({theme:e})=>e.colors.text.secondary};
    --border-color: ${({theme:e})=>e.colors.border.default};
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: ${({theme:e})=>e.typography.fontFamily.primary};
    background-color: ${({theme:e})=>e.colors.background.primary};
    color: ${({theme:e})=>e.colors.text.primary};
    line-height: ${({theme:e})=>e.typography.lineHeight.md};
    font-size: ${({theme:e})=>e.typography.fontSize.md};
    transition: background-color 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
    margin-bottom: ${({theme:e})=>e.spacing.md};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    line-height: ${({theme:e})=>e.typography.lineHeight.sm};
    color: ${({theme:e})=>e.colors.text.primary};
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-bottom: ${({theme:e})=>e.spacing.md};
  }

  a {
    color: ${({theme:e})=>e.colors.text.link};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Remove Chrome's default focus outline and implement custom one */
  *:focus {
    outline: none;
  }

  *:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary};
    outline-offset: 2px;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.mode==="light"?"#f1f1f1":"#2c2c2c"};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.mode==="light"?"#c1c1c1":"#5c5c5c"};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.mode==="light"?"#a1a1a1":"#7c7c7c"};
  }

  /* Selection styles */
  ::selection {
    background-color: ${({theme:e})=>e.colors.primary}33; /* 20% opacity */
    color: ${({theme:e})=>e.colors.text.primary};
  }

  /* Remove arrows from number inputs */
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
  input[type=number] {
    -moz-appearance: textfield;
  }

  /* Code blocks */
  code {
    font-family: ${({theme:e})=>e.typography.fontFamily.mono};
    background-color: ${({theme:e})=>e.mode==="light"?"#f5f5f5":"#2d2d2d"};
    color: ${({theme:e})=>e.mode==="light"?"#24292e":"#e1e4e8"};
    padding: 0.2em 0.4em;
    border-radius: ${({theme:e})=>e.borderRadius.sm};
    font-size: 0.9em;
  }

  pre {
    background-color: ${({theme:e})=>e.mode==="light"?"#f6f8fa":"#1f2428"};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    padding: ${({theme:e})=>e.spacing.md};
    overflow-x: auto;
    margin-bottom: ${({theme:e})=>e.spacing.md};

    code {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
      font-size: 0.9em;
    }
  }
`,Ao=V.createContext(void 0),Po=()=>{const e=V.useContext(Ao);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e},Ro=({children:e})=>{const t=localStorage.getItem("theme-mode"),r=localStorage.getItem("accent-color"),[n,s]=V.useState(t||"light"),[i,a]=V.useState(r||"blue"),l=Td(n==="light"?Sd:$d,i),c=()=>{const f=n==="light"?"dark":"light";s(f),localStorage.setItem("theme-mode",f)},u=f=>{a(f),localStorage.setItem("accent-color",f)};V.useEffect(()=>{document.documentElement.setAttribute("data-theme",n)},[n]);const h={themeMode:n,toggleTheme:c,accentColor:i,setAccentColor:u,theme:l};return d.jsx(Ao.Provider,{value:h,children:d.jsxs(Ic,{theme:l,children:[d.jsx(Od,{theme:l}),e]})})};function Sn(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Sn=function(r){return typeof r}:Sn=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Sn(e)}function Cd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Md(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Dd(e,t,r){return t&&Md(e.prototype,t),e}function jd(e,t){return t&&(Sn(t)==="object"||typeof t=="function")?t:$n(e)}function Vs(e){return Vs=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Vs(e)}function $n(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ed(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Us(e,t)}function Us(e,t){return Us=Object.setPrototypeOf||function(n,s){return n.__proto__=s,n},Us(e,t)}function Tn(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Lo=function(e){Ed(t,e);function t(){var r,n;Cd(this,t);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return n=jd(this,(r=Vs(t)).call.apply(r,[this].concat(i))),Tn($n(n),"state",{bootstrapped:!1}),Tn($n(n),"_unsubscribe",void 0),Tn($n(n),"handlePersistorState",function(){var o=n.props.persistor,l=o.getState(),c=l.bootstrapped;c&&(n.props.onBeforeLift?Promise.resolve(n.props.onBeforeLift()).finally(function(){return n.setState({bootstrapped:!0})}):n.setState({bootstrapped:!0}),n._unsubscribe&&n._unsubscribe())}),n}return Dd(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(V.PureComponent);Tn(Lo,"defaultProps",{children:null,loading:null});const Ad=()=>localStorage.getItem("theme-mode")||"light",Pd=()=>localStorage.getItem("accent-color")||"blue",Rd={mode:Ad(),accentColor:Pd(),isPanelOpen:!1},No=ui({name:"theme",initialState:Rd,reducers:{setThemeMode:(e,t)=>{e.mode=t.payload,localStorage.setItem("theme-mode",t.payload)},toggleThemeMode:e=>{const t=e.mode==="light"?"dark":"light";e.mode=t,localStorage.setItem("theme-mode",t)},setAccentColor:(e,t)=>{e.accentColor=t.payload,localStorage.setItem("accent-color",t.payload)},toggleThemePanel:e=>{e.isPanelOpen=!e.isPanelOpen}}}),{setThemeMode:gb,toggleThemeMode:yb,setAccentColor:vb,toggleThemePanel:xb}=No.actions,Ld=No.reducer,Nd={currentUser:null,isAuthenticated:!1,loading:!1,error:null},$s=wo("user/login",async({username:e,password:t},{rejectWithValue:r})=>{try{return await new Promise(s=>setTimeout(s,1e3)),e==="demo"&&t==="password"?{id:"1",username:e,email:`${e}@example.com`,avatarUrl:"https://via.placeholder.com/150"}:r("Invalid credentials")}catch{return r("Login failed")}}),va=wo("user/logout",async()=>(await new Promise(e=>setTimeout(e,500)),!0)),Io=ui({name:"user",initialState:Nd,reducers:{clearError:e=>{e.error=null}},extraReducers:e=>{e.addCase($s.pending,t=>{t.loading=!0,t.error=null}).addCase($s.fulfilled,(t,r)=>{t.currentUser=r.payload,t.isAuthenticated=!0,t.loading=!1,t.error=null}).addCase($s.rejected,(t,r)=>{t.loading=!1,t.error=r.payload}).addCase(va.pending,t=>{t.loading=!0}).addCase(va.fulfilled,t=>{t.currentUser=null,t.isAuthenticated=!1,t.loading=!1,t.error=null})}}),{clearError:bb}=Io.actions,Id=Io.reducer;//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Fo;function _(){return Fo.apply(null,arguments)}function Fd(e){Fo=e}function et(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Bt(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function te(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function mi(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(te(e,t))return!1;return!0}function Ae(e){return e===void 0}function $t(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function ln(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Yo(e,t){var r=[],n,s=e.length;for(n=0;n<s;++n)r.push(t(e[n],n));return r}function jt(e,t){for(var r in t)te(t,r)&&(e[r]=t[r]);return te(t,"toString")&&(e.toString=t.toString),te(t,"valueOf")&&(e.valueOf=t.valueOf),e}function ht(e,t,r,n){return cl(e,t,r,n,!0).utc()}function Yd(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function G(e){return e._pf==null&&(e._pf=Yd()),e._pf}var Hs;Array.prototype.some?Hs=Array.prototype.some:Hs=function(e){var t=Object(this),r=t.length>>>0,n;for(n=0;n<r;n++)if(n in t&&e.call(this,t[n],n,t))return!0;return!1};function gi(e){var t=null,r=!1,n=e._d&&!isNaN(e._d.getTime());if(n&&(t=G(e),r=Hs.call(t.parsedDateParts,function(s){return s!=null}),n=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(n=n&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=n;else return n;return e._isValid}function rs(e){var t=ht(NaN);return e!=null?jt(G(t),e):G(t).userInvalidated=!0,t}var xa=_.momentProperties=[],Ts=!1;function yi(e,t){var r,n,s,i=xa.length;if(Ae(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Ae(t._i)||(e._i=t._i),Ae(t._f)||(e._f=t._f),Ae(t._l)||(e._l=t._l),Ae(t._strict)||(e._strict=t._strict),Ae(t._tzm)||(e._tzm=t._tzm),Ae(t._isUTC)||(e._isUTC=t._isUTC),Ae(t._offset)||(e._offset=t._offset),Ae(t._pf)||(e._pf=G(t)),Ae(t._locale)||(e._locale=t._locale),i>0)for(r=0;r<i;r++)n=xa[r],s=t[n],Ae(s)||(e[n]=s);return e}function cn(e){yi(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Ts===!1&&(Ts=!0,_.updateOffset(this),Ts=!1)}function tt(e){return e instanceof cn||e!=null&&e._isAMomentObject!=null}function zo(e){_.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function Ue(e,t){var r=!0;return jt(function(){if(_.deprecationHandler!=null&&_.deprecationHandler(null,e),r){var n=[],s,i,a,o=arguments.length;for(i=0;i<o;i++){if(s="",typeof arguments[i]=="object"){s+=`
[`+i+"] ";for(a in arguments[0])te(arguments[0],a)&&(s+=a+": "+arguments[0][a]+", ");s=s.slice(0,-2)}else s=arguments[i];n.push(s)}zo(e+`
Arguments: `+Array.prototype.slice.call(n).join("")+`
`+new Error().stack),r=!1}return t.apply(this,arguments)},t)}var ba={};function Vo(e,t){_.deprecationHandler!=null&&_.deprecationHandler(e,t),ba[e]||(zo(t),ba[e]=!0)}_.suppressDeprecationWarnings=!1;_.deprecationHandler=null;function pt(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function zd(e){var t,r;for(r in e)te(e,r)&&(t=e[r],pt(t)?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Ws(e,t){var r=jt({},e),n;for(n in t)te(t,n)&&(Bt(e[n])&&Bt(t[n])?(r[n]={},jt(r[n],e[n]),jt(r[n],t[n])):t[n]!=null?r[n]=t[n]:delete r[n]);for(n in e)te(e,n)&&!te(t,n)&&Bt(e[n])&&(r[n]=jt({},r[n]));return r}function vi(e){e!=null&&this.set(e)}var Zs;Object.keys?Zs=Object.keys:Zs=function(e){var t,r=[];for(t in e)te(e,t)&&r.push(t);return r};var Vd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Ud(e,t,r){var n=this._calendar[e]||this._calendar.sameElse;return pt(n)?n.call(t,r):n}function dt(e,t,r){var n=""+Math.abs(e),s=t-n.length,i=e>=0;return(i?r?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+n}var xi=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,mn=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Os={},fr={};function Y(e,t,r,n){var s=n;typeof n=="string"&&(s=function(){return this[n]()}),e&&(fr[e]=s),t&&(fr[t[0]]=function(){return dt(s.apply(this,arguments),t[1],t[2])}),r&&(fr[r]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function Hd(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Wd(e){var t=e.match(xi),r,n;for(r=0,n=t.length;r<n;r++)fr[t[r]]?t[r]=fr[t[r]]:t[r]=Hd(t[r]);return function(s){var i="",a;for(a=0;a<n;a++)i+=pt(t[a])?t[a].call(s,e):t[a];return i}}function On(e,t){return e.isValid()?(t=Uo(t,e.localeData()),Os[t]=Os[t]||Wd(t),Os[t](e)):e.localeData().invalidDate()}function Uo(e,t){var r=5;function n(s){return t.longDateFormat(s)||s}for(mn.lastIndex=0;r>=0&&mn.test(e);)e=e.replace(mn,n),mn.lastIndex=0,r-=1;return e}var Zd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Bd(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(xi).map(function(n){return n==="MMMM"||n==="MM"||n==="DD"||n==="dddd"?n.slice(1):n}).join(""),this._longDateFormat[e])}var Gd="Invalid date";function Kd(){return this._invalidDate}var qd="%d",Jd=/\d{1,2}/;function Qd(e){return this._ordinal.replace("%d",e)}var Xd={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function eu(e,t,r,n){var s=this._relativeTime[r];return pt(s)?s(e,t,r,n):s.replace(/%d/i,e)}function tu(e,t){var r=this._relativeTime[e>0?"future":"past"];return pt(r)?r(t):r.replace(/%s/i,t)}var _a={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function He(e){return typeof e=="string"?_a[e]||_a[e.toLowerCase()]:void 0}function bi(e){var t={},r,n;for(n in e)te(e,n)&&(r=He(n),r&&(t[r]=e[n]));return t}var ru={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function nu(e){var t=[],r;for(r in e)te(e,r)&&t.push({unit:r,priority:ru[r]});return t.sort(function(n,s){return n.priority-s.priority}),t}var Ho=/\d/,Ye=/\d\d/,Wo=/\d{3}/,_i=/\d{4}/,ns=/[+-]?\d{6}/,ce=/\d\d?/,Zo=/\d\d\d\d?/,Bo=/\d\d\d\d\d\d?/,ss=/\d{1,3}/,wi=/\d{1,4}/,is=/[+-]?\d{1,6}/,br=/\d+/,as=/[+-]?\d+/,su=/Z|[+-]\d\d:?\d\d/gi,os=/Z|[+-]\d\d(?::?\d\d)?/gi,iu=/[+-]?\d+(\.\d{1,3})?/,dn=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,_r=/^[1-9]\d?/,ki=/^([1-9]\d|\d)/,Pn;Pn={};function R(e,t,r){Pn[e]=pt(t)?t:function(n,s){return n&&r?r:t}}function au(e,t){return te(Pn,e)?Pn[e](t._strict,t._locale):new RegExp(ou(e))}function ou(e){return kt(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,r,n,s,i){return r||n||s||i}))}function kt(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Ve(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function J(e){var t=+e,r=0;return t!==0&&isFinite(t)&&(r=Ve(t)),r}var Bs={};function ie(e,t){var r,n=t,s;for(typeof e=="string"&&(e=[e]),$t(t)&&(n=function(i,a){a[t]=J(i)}),s=e.length,r=0;r<s;r++)Bs[e[r]]=n}function un(e,t){ie(e,function(r,n,s,i){s._w=s._w||{},t(r,s._w,s,i)})}function lu(e,t,r){t!=null&&te(Bs,e)&&Bs[e](t,r._a,r,e)}function ls(e){return e%4===0&&e%100!==0||e%400===0}var Te=0,_t=1,at=2,xe=3,qe=4,wt=5,Ht=6,cu=7,du=8;Y("Y",0,0,function(){var e=this.year();return e<=9999?dt(e,4):"+"+e});Y(0,["YY",2],0,function(){return this.year()%100});Y(0,["YYYY",4],0,"year");Y(0,["YYYYY",5],0,"year");Y(0,["YYYYYY",6,!0],0,"year");R("Y",as);R("YY",ce,Ye);R("YYYY",wi,_i);R("YYYYY",is,ns);R("YYYYYY",is,ns);ie(["YYYYY","YYYYYY"],Te);ie("YYYY",function(e,t){t[Te]=e.length===2?_.parseTwoDigitYear(e):J(e)});ie("YY",function(e,t){t[Te]=_.parseTwoDigitYear(e)});ie("Y",function(e,t){t[Te]=parseInt(e,10)});function Nr(e){return ls(e)?366:365}_.parseTwoDigitYear=function(e){return J(e)+(J(e)>68?1900:2e3)};var Go=wr("FullYear",!0);function uu(){return ls(this.year())}function wr(e,t){return function(r){return r!=null?(Ko(this,e,r),_.updateOffset(this,t),this):zr(this,e)}}function zr(e,t){if(!e.isValid())return NaN;var r=e._d,n=e._isUTC;switch(t){case"Milliseconds":return n?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return n?r.getUTCSeconds():r.getSeconds();case"Minutes":return n?r.getUTCMinutes():r.getMinutes();case"Hours":return n?r.getUTCHours():r.getHours();case"Date":return n?r.getUTCDate():r.getDate();case"Day":return n?r.getUTCDay():r.getDay();case"Month":return n?r.getUTCMonth():r.getMonth();case"FullYear":return n?r.getUTCFullYear():r.getFullYear();default:return NaN}}function Ko(e,t,r){var n,s,i,a,o;if(!(!e.isValid()||isNaN(r))){switch(n=e._d,s=e._isUTC,t){case"Milliseconds":return void(s?n.setUTCMilliseconds(r):n.setMilliseconds(r));case"Seconds":return void(s?n.setUTCSeconds(r):n.setSeconds(r));case"Minutes":return void(s?n.setUTCMinutes(r):n.setMinutes(r));case"Hours":return void(s?n.setUTCHours(r):n.setHours(r));case"Date":return void(s?n.setUTCDate(r):n.setDate(r));case"FullYear":break;default:return}i=r,a=e.month(),o=e.date(),o=o===29&&a===1&&!ls(i)?28:o,s?n.setUTCFullYear(i,a,o):n.setFullYear(i,a,o)}}function fu(e){return e=He(e),pt(this[e])?this[e]():this}function hu(e,t){if(typeof e=="object"){e=bi(e);var r=nu(e),n,s=r.length;for(n=0;n<s;n++)this[r[n].unit](e[r[n].unit])}else if(e=He(e),pt(this[e]))return this[e](t);return this}function pu(e,t){return(e%t+t)%t}var he;Array.prototype.indexOf?he=Array.prototype.indexOf:he=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Si(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=pu(t,12);return e+=(t-r)/12,r===1?ls(e)?29:28:31-r%7%2}Y("M",["MM",2],"Mo",function(){return this.month()+1});Y("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});Y("MMMM",0,0,function(e){return this.localeData().months(this,e)});R("M",ce,_r);R("MM",ce,Ye);R("MMM",function(e,t){return t.monthsShortRegex(e)});R("MMMM",function(e,t){return t.monthsRegex(e)});ie(["M","MM"],function(e,t){t[_t]=J(e)-1});ie(["MMM","MMMM"],function(e,t,r,n){var s=r._locale.monthsParse(e,n,r._strict);s!=null?t[_t]=s:G(r).invalidMonth=e});var mu="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qo="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Jo=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,gu=dn,yu=dn;function vu(e,t){return e?et(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Jo).test(t)?"format":"standalone"][e.month()]:et(this._months)?this._months:this._months.standalone}function xu(e,t){return e?et(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Jo.test(t)?"format":"standalone"][e.month()]:et(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function bu(e,t,r){var n,s,i,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;n<12;++n)i=ht([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(i,"").toLocaleLowerCase();return r?t==="MMM"?(s=he.call(this._shortMonthsParse,a),s!==-1?s:null):(s=he.call(this._longMonthsParse,a),s!==-1?s:null):t==="MMM"?(s=he.call(this._shortMonthsParse,a),s!==-1?s:(s=he.call(this._longMonthsParse,a),s!==-1?s:null)):(s=he.call(this._longMonthsParse,a),s!==-1?s:(s=he.call(this._shortMonthsParse,a),s!==-1?s:null))}function _u(e,t,r){var n,s,i;if(this._monthsParseExact)return bu.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++){if(s=ht([2e3,n]),r&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),!r&&!this._monthsParse[n]&&(i="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[n]=new RegExp(i.replace(".",""),"i")),r&&t==="MMMM"&&this._longMonthsParse[n].test(e))return n;if(r&&t==="MMM"&&this._shortMonthsParse[n].test(e))return n;if(!r&&this._monthsParse[n].test(e))return n}}function Qo(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=J(t);else if(t=e.localeData().monthsParse(t),!$t(t))return e}var r=t,n=e.date();return n=n<29?n:Math.min(n,Si(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,n):e._d.setMonth(r,n),e}function Xo(e){return e!=null?(Qo(this,e),_.updateOffset(this,!0),this):zr(this,"Month")}function wu(){return Si(this.year(),this.month())}function ku(e){return this._monthsParseExact?(te(this,"_monthsRegex")||el.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(te(this,"_monthsShortRegex")||(this._monthsShortRegex=gu),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Su(e){return this._monthsParseExact?(te(this,"_monthsRegex")||el.call(this),e?this._monthsStrictRegex:this._monthsRegex):(te(this,"_monthsRegex")||(this._monthsRegex=yu),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function el(){function e(l,c){return c.length-l.length}var t=[],r=[],n=[],s,i,a,o;for(s=0;s<12;s++)i=ht([2e3,s]),a=kt(this.monthsShort(i,"")),o=kt(this.months(i,"")),t.push(a),r.push(o),n.push(o),n.push(a);t.sort(e),r.sort(e),n.sort(e),this._monthsRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function $u(e,t,r,n,s,i,a){var o;return e<100&&e>=0?(o=new Date(e+400,t,r,n,s,i,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,r,n,s,i,a),o}function Vr(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Rn(e,t,r){var n=7+t-r,s=(7+Vr(e,0,n).getUTCDay()-t)%7;return-s+n-1}function tl(e,t,r,n,s){var i=(7+r-n)%7,a=Rn(e,n,s),o=1+7*(t-1)+i+a,l,c;return o<=0?(l=e-1,c=Nr(l)+o):o>Nr(e)?(l=e+1,c=o-Nr(e)):(l=e,c=o),{year:l,dayOfYear:c}}function Ur(e,t,r){var n=Rn(e.year(),t,r),s=Math.floor((e.dayOfYear()-n-1)/7)+1,i,a;return s<1?(a=e.year()-1,i=s+St(a,t,r)):s>St(e.year(),t,r)?(i=s-St(e.year(),t,r),a=e.year()+1):(a=e.year(),i=s),{week:i,year:a}}function St(e,t,r){var n=Rn(e,t,r),s=Rn(e+1,t,r);return(Nr(e)-n+s)/7}Y("w",["ww",2],"wo","week");Y("W",["WW",2],"Wo","isoWeek");R("w",ce,_r);R("ww",ce,Ye);R("W",ce,_r);R("WW",ce,Ye);un(["w","ww","W","WW"],function(e,t,r,n){t[n.substr(0,1)]=J(e)});function Tu(e){return Ur(e,this._week.dow,this._week.doy).week}var Ou={dow:0,doy:6};function Cu(){return this._week.dow}function Mu(){return this._week.doy}function Du(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function ju(e){var t=Ur(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}Y("d",0,"do","day");Y("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});Y("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});Y("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});Y("e",0,0,"weekday");Y("E",0,0,"isoWeekday");R("d",ce);R("e",ce);R("E",ce);R("dd",function(e,t){return t.weekdaysMinRegex(e)});R("ddd",function(e,t){return t.weekdaysShortRegex(e)});R("dddd",function(e,t){return t.weekdaysRegex(e)});un(["dd","ddd","dddd"],function(e,t,r,n){var s=r._locale.weekdaysParse(e,n,r._strict);s!=null?t.d=s:G(r).invalidWeekday=e});un(["d","e","E"],function(e,t,r,n){t[n]=J(e)});function Eu(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function Au(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function $i(e,t){return e.slice(t,7).concat(e.slice(0,t))}var Pu="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),rl="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ru="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Lu=dn,Nu=dn,Iu=dn;function Fu(e,t){var r=et(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?$i(r,this._week.dow):e?r[e.day()]:r}function Yu(e){return e===!0?$i(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function zu(e){return e===!0?$i(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Vu(e,t,r){var n,s,i,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;n<7;++n)i=ht([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(i,"").toLocaleLowerCase();return r?t==="dddd"?(s=he.call(this._weekdaysParse,a),s!==-1?s:null):t==="ddd"?(s=he.call(this._shortWeekdaysParse,a),s!==-1?s:null):(s=he.call(this._minWeekdaysParse,a),s!==-1?s:null):t==="dddd"?(s=he.call(this._weekdaysParse,a),s!==-1||(s=he.call(this._shortWeekdaysParse,a),s!==-1)?s:(s=he.call(this._minWeekdaysParse,a),s!==-1?s:null)):t==="ddd"?(s=he.call(this._shortWeekdaysParse,a),s!==-1||(s=he.call(this._weekdaysParse,a),s!==-1)?s:(s=he.call(this._minWeekdaysParse,a),s!==-1?s:null)):(s=he.call(this._minWeekdaysParse,a),s!==-1||(s=he.call(this._weekdaysParse,a),s!==-1)?s:(s=he.call(this._shortWeekdaysParse,a),s!==-1?s:null))}function Uu(e,t,r){var n,s,i;if(this._weekdaysParseExact)return Vu.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(s=ht([2e3,1]).day(n),r&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[n]||(i="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[n]=new RegExp(i.replace(".",""),"i")),r&&t==="dddd"&&this._fullWeekdaysParse[n].test(e))return n;if(r&&t==="ddd"&&this._shortWeekdaysParse[n].test(e))return n;if(r&&t==="dd"&&this._minWeekdaysParse[n].test(e))return n;if(!r&&this._weekdaysParse[n].test(e))return n}}function Hu(e){if(!this.isValid())return e!=null?this:NaN;var t=zr(this,"Day");return e!=null?(e=Eu(e,this.localeData()),this.add(e-t,"d")):t}function Wu(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Zu(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=Au(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Bu(e){return this._weekdaysParseExact?(te(this,"_weekdaysRegex")||Ti.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(te(this,"_weekdaysRegex")||(this._weekdaysRegex=Lu),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Gu(e){return this._weekdaysParseExact?(te(this,"_weekdaysRegex")||Ti.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(te(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Nu),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ku(e){return this._weekdaysParseExact?(te(this,"_weekdaysRegex")||Ti.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(te(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Iu),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ti(){function e(u,h){return h.length-u.length}var t=[],r=[],n=[],s=[],i,a,o,l,c;for(i=0;i<7;i++)a=ht([2e3,1]).day(i),o=kt(this.weekdaysMin(a,"")),l=kt(this.weekdaysShort(a,"")),c=kt(this.weekdays(a,"")),t.push(o),r.push(l),n.push(c),s.push(o),s.push(l),s.push(c);t.sort(e),r.sort(e),n.sort(e),s.sort(e),this._weekdaysRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Oi(){return this.hours()%12||12}function qu(){return this.hours()||24}Y("H",["HH",2],0,"hour");Y("h",["hh",2],0,Oi);Y("k",["kk",2],0,qu);Y("hmm",0,0,function(){return""+Oi.apply(this)+dt(this.minutes(),2)});Y("hmmss",0,0,function(){return""+Oi.apply(this)+dt(this.minutes(),2)+dt(this.seconds(),2)});Y("Hmm",0,0,function(){return""+this.hours()+dt(this.minutes(),2)});Y("Hmmss",0,0,function(){return""+this.hours()+dt(this.minutes(),2)+dt(this.seconds(),2)});function nl(e,t){Y(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}nl("a",!0);nl("A",!1);function sl(e,t){return t._meridiemParse}R("a",sl);R("A",sl);R("H",ce,ki);R("h",ce,_r);R("k",ce,_r);R("HH",ce,Ye);R("hh",ce,Ye);R("kk",ce,Ye);R("hmm",Zo);R("hmmss",Bo);R("Hmm",Zo);R("Hmmss",Bo);ie(["H","HH"],xe);ie(["k","kk"],function(e,t,r){var n=J(e);t[xe]=n===24?0:n});ie(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e});ie(["h","hh"],function(e,t,r){t[xe]=J(e),G(r).bigHour=!0});ie("hmm",function(e,t,r){var n=e.length-2;t[xe]=J(e.substr(0,n)),t[qe]=J(e.substr(n)),G(r).bigHour=!0});ie("hmmss",function(e,t,r){var n=e.length-4,s=e.length-2;t[xe]=J(e.substr(0,n)),t[qe]=J(e.substr(n,2)),t[wt]=J(e.substr(s)),G(r).bigHour=!0});ie("Hmm",function(e,t,r){var n=e.length-2;t[xe]=J(e.substr(0,n)),t[qe]=J(e.substr(n))});ie("Hmmss",function(e,t,r){var n=e.length-4,s=e.length-2;t[xe]=J(e.substr(0,n)),t[qe]=J(e.substr(n,2)),t[wt]=J(e.substr(s))});function Ju(e){return(e+"").toLowerCase().charAt(0)==="p"}var Qu=/[ap]\.?m?\.?/i,Xu=wr("Hours",!0);function ef(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var il={calendar:Vd,longDateFormat:Zd,invalidDate:Gd,ordinal:qd,dayOfMonthOrdinalParse:Jd,relativeTime:Xd,months:mu,monthsShort:qo,week:Ou,weekdays:Pu,weekdaysMin:Ru,weekdaysShort:rl,meridiemParse:Qu},de={},$r={},Hr;function tf(e,t){var r,n=Math.min(e.length,t.length);for(r=0;r<n;r+=1)if(e[r]!==t[r])return r;return n}function wa(e){return e&&e.toLowerCase().replace("_","-")}function rf(e){for(var t=0,r,n,s,i;t<e.length;){for(i=wa(e[t]).split("-"),r=i.length,n=wa(e[t+1]),n=n?n.split("-"):null;r>0;){if(s=cs(i.slice(0,r).join("-")),s)return s;if(n&&n.length>=r&&tf(i,n)>=r-1)break;r--}t++}return Hr}function nf(e){return!!(e&&e.match("^[^/\\\\]*$"))}function cs(e){var t=null,r;if(de[e]===void 0&&typeof An<"u"&&An&&An.exports&&nf(e))try{t=Hr._abbr,r=require,r("./locale/"+e),At(t)}catch{de[e]=null}return de[e]}function At(e,t){var r;return e&&(Ae(t)?r=Ot(e):r=Ci(e,t),r?Hr=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Hr._abbr}function Ci(e,t){if(t!==null){var r,n=il;if(t.abbr=e,de[e]!=null)Vo("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=de[e]._config;else if(t.parentLocale!=null)if(de[t.parentLocale]!=null)n=de[t.parentLocale]._config;else if(r=cs(t.parentLocale),r!=null)n=r._config;else return $r[t.parentLocale]||($r[t.parentLocale]=[]),$r[t.parentLocale].push({name:e,config:t}),null;return de[e]=new vi(Ws(n,t)),$r[e]&&$r[e].forEach(function(s){Ci(s.name,s.config)}),At(e),de[e]}else return delete de[e],null}function sf(e,t){if(t!=null){var r,n,s=il;de[e]!=null&&de[e].parentLocale!=null?de[e].set(Ws(de[e]._config,t)):(n=cs(e),n!=null&&(s=n._config),t=Ws(s,t),n==null&&(t.abbr=e),r=new vi(t),r.parentLocale=de[e],de[e]=r),At(e)}else de[e]!=null&&(de[e].parentLocale!=null?(de[e]=de[e].parentLocale,e===At()&&At(e)):de[e]!=null&&delete de[e]);return de[e]}function Ot(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Hr;if(!et(e)){if(t=cs(e),t)return t;e=[e]}return rf(e)}function af(){return Zs(de)}function Mi(e){var t,r=e._a;return r&&G(e).overflow===-2&&(t=r[_t]<0||r[_t]>11?_t:r[at]<1||r[at]>Si(r[Te],r[_t])?at:r[xe]<0||r[xe]>24||r[xe]===24&&(r[qe]!==0||r[wt]!==0||r[Ht]!==0)?xe:r[qe]<0||r[qe]>59?qe:r[wt]<0||r[wt]>59?wt:r[Ht]<0||r[Ht]>999?Ht:-1,G(e)._overflowDayOfYear&&(t<Te||t>at)&&(t=at),G(e)._overflowWeeks&&t===-1&&(t=cu),G(e)._overflowWeekday&&t===-1&&(t=du),G(e).overflow=t),e}var of=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,lf=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,cf=/Z|[+-]\d\d(?::?\d\d)?/,gn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Cs=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],df=/^\/?Date\((-?\d+)/i,uf=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,ff={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function al(e){var t,r,n=e._i,s=of.exec(n)||lf.exec(n),i,a,o,l,c=gn.length,u=Cs.length;if(s){for(G(e).iso=!0,t=0,r=c;t<r;t++)if(gn[t][1].exec(s[1])){a=gn[t][0],i=gn[t][2]!==!1;break}if(a==null){e._isValid=!1;return}if(s[3]){for(t=0,r=u;t<r;t++)if(Cs[t][1].exec(s[3])){o=(s[2]||" ")+Cs[t][0];break}if(o==null){e._isValid=!1;return}}if(!i&&o!=null){e._isValid=!1;return}if(s[4])if(cf.exec(s[4]))l="Z";else{e._isValid=!1;return}e._f=a+(o||"")+(l||""),ji(e)}else e._isValid=!1}function hf(e,t,r,n,s,i){var a=[pf(e),qo.indexOf(t),parseInt(r,10),parseInt(n,10),parseInt(s,10)];return i&&a.push(parseInt(i,10)),a}function pf(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function mf(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function gf(e,t,r){if(e){var n=rl.indexOf(e),s=new Date(t[0],t[1],t[2]).getDay();if(n!==s)return G(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function yf(e,t,r){if(e)return ff[e];if(t)return 0;var n=parseInt(r,10),s=n%100,i=(n-s)/100;return i*60+s}function ol(e){var t=uf.exec(mf(e._i)),r;if(t){if(r=hf(t[4],t[3],t[2],t[5],t[6],t[7]),!gf(t[1],r,e))return;e._a=r,e._tzm=yf(t[8],t[9],t[10]),e._d=Vr.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),G(e).rfc2822=!0}else e._isValid=!1}function vf(e){var t=df.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(al(e),e._isValid===!1)delete e._isValid;else return;if(ol(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:_.createFromInputFallback(e)}_.createFromInputFallback=Ue("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function ar(e,t,r){return e??t??r}function xf(e){var t=new Date(_.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Di(e){var t,r,n=[],s,i,a;if(!e._d){for(s=xf(e),e._w&&e._a[at]==null&&e._a[_t]==null&&bf(e),e._dayOfYear!=null&&(a=ar(e._a[Te],s[Te]),(e._dayOfYear>Nr(a)||e._dayOfYear===0)&&(G(e)._overflowDayOfYear=!0),r=Vr(a,0,e._dayOfYear),e._a[_t]=r.getUTCMonth(),e._a[at]=r.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=n[t]=s[t];for(;t<7;t++)e._a[t]=n[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[xe]===24&&e._a[qe]===0&&e._a[wt]===0&&e._a[Ht]===0&&(e._nextDay=!0,e._a[xe]=0),e._d=(e._useUTC?Vr:$u).apply(null,n),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[xe]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==i&&(G(e).weekdayMismatch=!0)}}function bf(e){var t,r,n,s,i,a,o,l,c;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(i=1,a=4,r=ar(t.GG,e._a[Te],Ur(le(),1,4).year),n=ar(t.W,1),s=ar(t.E,1),(s<1||s>7)&&(l=!0)):(i=e._locale._week.dow,a=e._locale._week.doy,c=Ur(le(),i,a),r=ar(t.gg,e._a[Te],c.year),n=ar(t.w,c.week),t.d!=null?(s=t.d,(s<0||s>6)&&(l=!0)):t.e!=null?(s=t.e+i,(t.e<0||t.e>6)&&(l=!0)):s=i),n<1||n>St(r,i,a)?G(e)._overflowWeeks=!0:l!=null?G(e)._overflowWeekday=!0:(o=tl(r,n,s,i,a),e._a[Te]=o.year,e._dayOfYear=o.dayOfYear)}_.ISO_8601=function(){};_.RFC_2822=function(){};function ji(e){if(e._f===_.ISO_8601){al(e);return}if(e._f===_.RFC_2822){ol(e);return}e._a=[],G(e).empty=!0;var t=""+e._i,r,n,s,i,a,o=t.length,l=0,c,u;for(s=Uo(e._f,e._locale).match(xi)||[],u=s.length,r=0;r<u;r++)i=s[r],n=(t.match(au(i,e))||[])[0],n&&(a=t.substr(0,t.indexOf(n)),a.length>0&&G(e).unusedInput.push(a),t=t.slice(t.indexOf(n)+n.length),l+=n.length),fr[i]?(n?G(e).empty=!1:G(e).unusedTokens.push(i),lu(i,n,e)):e._strict&&!n&&G(e).unusedTokens.push(i);G(e).charsLeftOver=o-l,t.length>0&&G(e).unusedInput.push(t),e._a[xe]<=12&&G(e).bigHour===!0&&e._a[xe]>0&&(G(e).bigHour=void 0),G(e).parsedDateParts=e._a.slice(0),G(e).meridiem=e._meridiem,e._a[xe]=_f(e._locale,e._a[xe],e._meridiem),c=G(e).era,c!==null&&(e._a[Te]=e._locale.erasConvertYear(c,e._a[Te])),Di(e),Mi(e)}function _f(e,t,r){var n;return r==null?t:e.meridiemHour!=null?e.meridiemHour(t,r):(e.isPM!=null&&(n=e.isPM(r),n&&t<12&&(t+=12),!n&&t===12&&(t=0)),t)}function wf(e){var t,r,n,s,i,a,o=!1,l=e._f.length;if(l===0){G(e).invalidFormat=!0,e._d=new Date(NaN);return}for(s=0;s<l;s++)i=0,a=!1,t=yi({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[s],ji(t),gi(t)&&(a=!0),i+=G(t).charsLeftOver,i+=G(t).unusedTokens.length*10,G(t).score=i,o?i<n&&(n=i,r=t):(n==null||i<n||a)&&(n=i,r=t,a&&(o=!0));jt(e,r||t)}function kf(e){if(!e._d){var t=bi(e._i),r=t.day===void 0?t.date:t.day;e._a=Yo([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(n){return n&&parseInt(n,10)}),Di(e)}}function Sf(e){var t=new cn(Mi(ll(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function ll(e){var t=e._i,r=e._f;return e._locale=e._locale||Ot(e._l),t===null||r===void 0&&t===""?rs({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),tt(t)?new cn(Mi(t)):(ln(t)?e._d=t:et(r)?wf(e):r?ji(e):$f(e),gi(e)||(e._d=null),e))}function $f(e){var t=e._i;Ae(t)?e._d=new Date(_.now()):ln(t)?e._d=new Date(t.valueOf()):typeof t=="string"?vf(e):et(t)?(e._a=Yo(t.slice(0),function(r){return parseInt(r,10)}),Di(e)):Bt(t)?kf(e):$t(t)?e._d=new Date(t):_.createFromInputFallback(e)}function cl(e,t,r,n,s){var i={};return(t===!0||t===!1)&&(n=t,t=void 0),(r===!0||r===!1)&&(n=r,r=void 0),(Bt(e)&&mi(e)||et(e)&&e.length===0)&&(e=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=s,i._l=r,i._i=e,i._f=t,i._strict=n,Sf(i)}function le(e,t,r,n){return cl(e,t,r,n,!1)}var Tf=Ue("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=le.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:rs()}),Of=Ue("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=le.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:rs()});function dl(e,t){var r,n;if(t.length===1&&et(t[0])&&(t=t[0]),!t.length)return le();for(r=t[0],n=1;n<t.length;++n)(!t[n].isValid()||t[n][e](r))&&(r=t[n]);return r}function Cf(){var e=[].slice.call(arguments,0);return dl("isBefore",e)}function Mf(){var e=[].slice.call(arguments,0);return dl("isAfter",e)}var Df=function(){return Date.now?Date.now():+new Date},Tr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function jf(e){var t,r=!1,n,s=Tr.length;for(t in e)if(te(e,t)&&!(he.call(Tr,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(n=0;n<s;++n)if(e[Tr[n]]){if(r)return!1;parseFloat(e[Tr[n]])!==J(e[Tr[n]])&&(r=!0)}return!0}function Ef(){return this._isValid}function Af(){return nt(NaN)}function ds(e){var t=bi(e),r=t.year||0,n=t.quarter||0,s=t.month||0,i=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,l=t.minute||0,c=t.second||0,u=t.millisecond||0;this._isValid=jf(t),this._milliseconds=+u+c*1e3+l*6e4+o*1e3*60*60,this._days=+a+i*7,this._months=+s+n*3+r*12,this._data={},this._locale=Ot(),this._bubble()}function Cn(e){return e instanceof ds}function Gs(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Pf(e,t,r){var n=Math.min(e.length,t.length),s=Math.abs(e.length-t.length),i=0,a;for(a=0;a<n;a++)J(e[a])!==J(t[a])&&i++;return i+s}function ul(e,t){Y(e,0,0,function(){var r=this.utcOffset(),n="+";return r<0&&(r=-r,n="-"),n+dt(~~(r/60),2)+t+dt(~~r%60,2)})}ul("Z",":");ul("ZZ","");R("Z",os);R("ZZ",os);ie(["Z","ZZ"],function(e,t,r){r._useUTC=!0,r._tzm=Ei(os,e)});var Rf=/([\+\-]|\d\d)/gi;function Ei(e,t){var r=(t||"").match(e),n,s,i;return r===null?null:(n=r[r.length-1]||[],s=(n+"").match(Rf)||["-",0,0],i=+(s[1]*60)+J(s[2]),i===0?0:s[0]==="+"?i:-i)}function Ai(e,t){var r,n;return t._isUTC?(r=t.clone(),n=(tt(e)||ln(e)?e.valueOf():le(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+n),_.updateOffset(r,!1),r):le(e).local()}function Ks(e){return-Math.round(e._d.getTimezoneOffset())}_.updateOffset=function(){};function Lf(e,t,r){var n=this._offset||0,s;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Ei(os,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&t&&(s=Ks(this)),this._offset=e,this._isUTC=!0,s!=null&&this.add(s,"m"),n!==e&&(!t||this._changeInProgress?pl(this,nt(e-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,_.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?n:Ks(this)}function Nf(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function If(e){return this.utcOffset(0,e)}function Ff(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ks(this),"m")),this}function Yf(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Ei(su,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function zf(e){return this.isValid()?(e=e?le(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Vf(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Uf(){if(!Ae(this._isDSTShifted))return this._isDSTShifted;var e={},t;return yi(e,this),e=ll(e),e._a?(t=e._isUTC?ht(e._a):le(e._a),this._isDSTShifted=this.isValid()&&Pf(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Hf(){return this.isValid()?!this._isUTC:!1}function Wf(){return this.isValid()?this._isUTC:!1}function fl(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Zf=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Bf=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function nt(e,t){var r=e,n=null,s,i,a;return Cn(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:$t(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(n=Zf.exec(e))?(s=n[1]==="-"?-1:1,r={y:0,d:J(n[at])*s,h:J(n[xe])*s,m:J(n[qe])*s,s:J(n[wt])*s,ms:J(Gs(n[Ht]*1e3))*s}):(n=Bf.exec(e))?(s=n[1]==="-"?-1:1,r={y:Yt(n[2],s),M:Yt(n[3],s),w:Yt(n[4],s),d:Yt(n[5],s),h:Yt(n[6],s),m:Yt(n[7],s),s:Yt(n[8],s)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(a=Gf(le(r.from),le(r.to)),r={},r.ms=a.milliseconds,r.M=a.months),i=new ds(r),Cn(e)&&te(e,"_locale")&&(i._locale=e._locale),Cn(e)&&te(e,"_isValid")&&(i._isValid=e._isValid),i}nt.fn=ds.prototype;nt.invalid=Af;function Yt(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function ka(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function Gf(e,t){var r;return e.isValid()&&t.isValid()?(t=Ai(t,e),e.isBefore(t)?r=ka(e,t):(r=ka(t,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function hl(e,t){return function(r,n){var s,i;return n!==null&&!isNaN(+n)&&(Vo(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=r,r=n,n=i),s=nt(r,n),pl(this,s,e),this}}function pl(e,t,r,n){var s=t._milliseconds,i=Gs(t._days),a=Gs(t._months);e.isValid()&&(n=n??!0,a&&Qo(e,zr(e,"Month")+a*r),i&&Ko(e,"Date",zr(e,"Date")+i*r),s&&e._d.setTime(e._d.valueOf()+s*r),n&&_.updateOffset(e,i||a))}var Kf=hl(1,"add"),qf=hl(-1,"subtract");function ml(e){return typeof e=="string"||e instanceof String}function Jf(e){return tt(e)||ln(e)||ml(e)||$t(e)||Xf(e)||Qf(e)||e===null||e===void 0}function Qf(e){var t=Bt(e)&&!mi(e),r=!1,n=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],s,i,a=n.length;for(s=0;s<a;s+=1)i=n[s],r=r||te(e,i);return t&&r}function Xf(e){var t=et(e),r=!1;return t&&(r=e.filter(function(n){return!$t(n)&&ml(e)}).length===0),t&&r}function eh(e){var t=Bt(e)&&!mi(e),r=!1,n=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],s,i;for(s=0;s<n.length;s+=1)i=n[s],r=r||te(e,i);return t&&r}function th(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function rh(e,t){arguments.length===1&&(arguments[0]?Jf(arguments[0])?(e=arguments[0],t=void 0):eh(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||le(),n=Ai(r,this).startOf("day"),s=_.calendarFormat(this,n)||"sameElse",i=t&&(pt(t[s])?t[s].call(this,r):t[s]);return this.format(i||this.localeData().calendar(s,this,le(r)))}function nh(){return new cn(this)}function sh(e,t){var r=tt(e)?e:le(e);return this.isValid()&&r.isValid()?(t=He(t)||"millisecond",t==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf()):!1}function ih(e,t){var r=tt(e)?e:le(e);return this.isValid()&&r.isValid()?(t=He(t)||"millisecond",t==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf()):!1}function ah(e,t,r,n){var s=tt(e)?e:le(e),i=tt(t)?t:le(t);return this.isValid()&&s.isValid()&&i.isValid()?(n=n||"()",(n[0]==="("?this.isAfter(s,r):!this.isBefore(s,r))&&(n[1]===")"?this.isBefore(i,r):!this.isAfter(i,r))):!1}function oh(e,t){var r=tt(e)?e:le(e),n;return this.isValid()&&r.isValid()?(t=He(t)||"millisecond",t==="millisecond"?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf())):!1}function lh(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function ch(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function dh(e,t,r){var n,s,i;if(!this.isValid())return NaN;if(n=Ai(e,this),!n.isValid())return NaN;switch(s=(n.utcOffset()-this.utcOffset())*6e4,t=He(t),t){case"year":i=Mn(this,n)/12;break;case"month":i=Mn(this,n);break;case"quarter":i=Mn(this,n)/3;break;case"second":i=(this-n)/1e3;break;case"minute":i=(this-n)/6e4;break;case"hour":i=(this-n)/36e5;break;case"day":i=(this-n-s)/864e5;break;case"week":i=(this-n-s)/6048e5;break;default:i=this-n}return r?i:Ve(i)}function Mn(e,t){if(e.date()<t.date())return-Mn(t,e);var r=(t.year()-e.year())*12+(t.month()-e.month()),n=e.clone().add(r,"months"),s,i;return t-n<0?(s=e.clone().add(r-1,"months"),i=(t-n)/(n-s)):(s=e.clone().add(r+1,"months"),i=(t-n)/(s-n)),-(r+i)||0}_.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";_.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function uh(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function fh(e){if(!this.isValid())return null;var t=e!==!0,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?On(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):pt(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",On(r,"Z")):On(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function hh(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",r,n,s,i;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),r="["+e+'("]',n=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s="-MM-DD[T]HH:mm:ss.SSS",i=t+'[")]',this.format(r+n+s+i)}function ph(e){e||(e=this.isUtc()?_.defaultFormatUtc:_.defaultFormat);var t=On(this,e);return this.localeData().postformat(t)}function mh(e,t){return this.isValid()&&(tt(e)&&e.isValid()||le(e).isValid())?nt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function gh(e){return this.from(le(),e)}function yh(e,t){return this.isValid()&&(tt(e)&&e.isValid()||le(e).isValid())?nt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function vh(e){return this.to(le(),e)}function gl(e){var t;return e===void 0?this._locale._abbr:(t=Ot(e),t!=null&&(this._locale=t),this)}var yl=Ue("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function vl(){return this._locale}var Ln=1e3,hr=60*Ln,Nn=60*hr,xl=(365*400+97)*24*Nn;function pr(e,t){return(e%t+t)%t}function bl(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-xl:new Date(e,t,r).valueOf()}function _l(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-xl:Date.UTC(e,t,r)}function xh(e){var t,r;if(e=He(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?_l:bl,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=pr(t+(this._isUTC?0:this.utcOffset()*hr),Nn);break;case"minute":t=this._d.valueOf(),t-=pr(t,hr);break;case"second":t=this._d.valueOf(),t-=pr(t,Ln);break}return this._d.setTime(t),_.updateOffset(this,!0),this}function bh(e){var t,r;if(e=He(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?_l:bl,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Nn-pr(t+(this._isUTC?0:this.utcOffset()*hr),Nn)-1;break;case"minute":t=this._d.valueOf(),t+=hr-pr(t,hr)-1;break;case"second":t=this._d.valueOf(),t+=Ln-pr(t,Ln)-1;break}return this._d.setTime(t),_.updateOffset(this,!0),this}function _h(){return this._d.valueOf()-(this._offset||0)*6e4}function wh(){return Math.floor(this.valueOf()/1e3)}function kh(){return new Date(this.valueOf())}function Sh(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function $h(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Th(){return this.isValid()?this.toISOString():null}function Oh(){return gi(this)}function Ch(){return jt({},G(this))}function Mh(){return G(this).overflow}function Dh(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}Y("N",0,0,"eraAbbr");Y("NN",0,0,"eraAbbr");Y("NNN",0,0,"eraAbbr");Y("NNNN",0,0,"eraName");Y("NNNNN",0,0,"eraNarrow");Y("y",["y",1],"yo","eraYear");Y("y",["yy",2],0,"eraYear");Y("y",["yyy",3],0,"eraYear");Y("y",["yyyy",4],0,"eraYear");R("N",Pi);R("NN",Pi);R("NNN",Pi);R("NNNN",zh);R("NNNNN",Vh);ie(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,n){var s=r._locale.erasParse(e,n,r._strict);s?G(r).era=s:G(r).invalidEra=e});R("y",br);R("yy",br);R("yyy",br);R("yyyy",br);R("yo",Uh);ie(["y","yy","yyy","yyyy"],Te);ie(["yo"],function(e,t,r,n){var s;r._locale._eraYearOrdinalRegex&&(s=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[Te]=r._locale.eraYearOrdinalParse(e,s):t[Te]=parseInt(e,10)});function jh(e,t){var r,n,s,i=this._eras||Ot("en")._eras;for(r=0,n=i.length;r<n;++r){switch(typeof i[r].since){case"string":s=_(i[r].since).startOf("day"),i[r].since=s.valueOf();break}switch(typeof i[r].until){case"undefined":i[r].until=1/0;break;case"string":s=_(i[r].until).startOf("day").valueOf(),i[r].until=s.valueOf();break}}return i}function Eh(e,t,r){var n,s,i=this.eras(),a,o,l;for(e=e.toUpperCase(),n=0,s=i.length;n<s;++n)if(a=i[n].name.toUpperCase(),o=i[n].abbr.toUpperCase(),l=i[n].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(o===e)return i[n];break;case"NNNN":if(a===e)return i[n];break;case"NNNNN":if(l===e)return i[n];break}else if([a,o,l].indexOf(e)>=0)return i[n]}function Ah(e,t){var r=e.since<=e.until?1:-1;return t===void 0?_(e.since).year():_(e.since).year()+(t-e.offset)*r}function Ph(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].name;return""}function Rh(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].narrow;return""}function Lh(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].abbr;return""}function Nh(){var e,t,r,n,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(r=s[e].since<=s[e].until?1:-1,n=this.clone().startOf("day").valueOf(),s[e].since<=n&&n<=s[e].until||s[e].until<=n&&n<=s[e].since)return(this.year()-_(s[e].since).year())*r+s[e].offset;return this.year()}function Ih(e){return te(this,"_erasNameRegex")||Ri.call(this),e?this._erasNameRegex:this._erasRegex}function Fh(e){return te(this,"_erasAbbrRegex")||Ri.call(this),e?this._erasAbbrRegex:this._erasRegex}function Yh(e){return te(this,"_erasNarrowRegex")||Ri.call(this),e?this._erasNarrowRegex:this._erasRegex}function Pi(e,t){return t.erasAbbrRegex(e)}function zh(e,t){return t.erasNameRegex(e)}function Vh(e,t){return t.erasNarrowRegex(e)}function Uh(e,t){return t._eraYearOrdinalRegex||br}function Ri(){var e=[],t=[],r=[],n=[],s,i,a,o,l,c=this.eras();for(s=0,i=c.length;s<i;++s)a=kt(c[s].name),o=kt(c[s].abbr),l=kt(c[s].narrow),t.push(a),e.push(o),r.push(l),n.push(a),n.push(o),n.push(l);this._erasRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}Y(0,["gg",2],0,function(){return this.weekYear()%100});Y(0,["GG",2],0,function(){return this.isoWeekYear()%100});function us(e,t){Y(0,[e,e.length],0,t)}us("gggg","weekYear");us("ggggg","weekYear");us("GGGG","isoWeekYear");us("GGGGG","isoWeekYear");R("G",as);R("g",as);R("GG",ce,Ye);R("gg",ce,Ye);R("GGGG",wi,_i);R("gggg",wi,_i);R("GGGGG",is,ns);R("ggggg",is,ns);un(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,n){t[n.substr(0,2)]=J(e)});un(["gg","GG"],function(e,t,r,n){t[n]=_.parseTwoDigitYear(e)});function Hh(e){return wl.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Wh(e){return wl.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Zh(){return St(this.year(),1,4)}function Bh(){return St(this.isoWeekYear(),1,4)}function Gh(){var e=this.localeData()._week;return St(this.year(),e.dow,e.doy)}function Kh(){var e=this.localeData()._week;return St(this.weekYear(),e.dow,e.doy)}function wl(e,t,r,n,s){var i;return e==null?Ur(this,n,s).year:(i=St(e,n,s),t>i&&(t=i),qh.call(this,e,t,r,n,s))}function qh(e,t,r,n,s){var i=tl(e,t,r,n,s),a=Vr(i.year,0,i.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}Y("Q",0,"Qo","quarter");R("Q",Ho);ie("Q",function(e,t){t[_t]=(J(e)-1)*3});function Jh(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}Y("D",["DD",2],"Do","date");R("D",ce,_r);R("DD",ce,Ye);R("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});ie(["D","DD"],at);ie("Do",function(e,t){t[at]=J(e.match(ce)[0])});var kl=wr("Date",!0);Y("DDD",["DDDD",3],"DDDo","dayOfYear");R("DDD",ss);R("DDDD",Wo);ie(["DDD","DDDD"],function(e,t,r){r._dayOfYear=J(e)});function Qh(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}Y("m",["mm",2],0,"minute");R("m",ce,ki);R("mm",ce,Ye);ie(["m","mm"],qe);var Xh=wr("Minutes",!1);Y("s",["ss",2],0,"second");R("s",ce,ki);R("ss",ce,Ye);ie(["s","ss"],wt);var ep=wr("Seconds",!1);Y("S",0,0,function(){return~~(this.millisecond()/100)});Y(0,["SS",2],0,function(){return~~(this.millisecond()/10)});Y(0,["SSS",3],0,"millisecond");Y(0,["SSSS",4],0,function(){return this.millisecond()*10});Y(0,["SSSSS",5],0,function(){return this.millisecond()*100});Y(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});Y(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});Y(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});Y(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});R("S",ss,Ho);R("SS",ss,Ye);R("SSS",ss,Wo);var Et,Sl;for(Et="SSSS";Et.length<=9;Et+="S")R(Et,br);function tp(e,t){t[Ht]=J(("0."+e)*1e3)}for(Et="S";Et.length<=9;Et+="S")ie(Et,tp);Sl=wr("Milliseconds",!1);Y("z",0,0,"zoneAbbr");Y("zz",0,0,"zoneName");function rp(){return this._isUTC?"UTC":""}function np(){return this._isUTC?"Coordinated Universal Time":""}var S=cn.prototype;S.add=Kf;S.calendar=rh;S.clone=nh;S.diff=dh;S.endOf=bh;S.format=ph;S.from=mh;S.fromNow=gh;S.to=yh;S.toNow=vh;S.get=fu;S.invalidAt=Mh;S.isAfter=sh;S.isBefore=ih;S.isBetween=ah;S.isSame=oh;S.isSameOrAfter=lh;S.isSameOrBefore=ch;S.isValid=Oh;S.lang=yl;S.locale=gl;S.localeData=vl;S.max=Of;S.min=Tf;S.parsingFlags=Ch;S.set=hu;S.startOf=xh;S.subtract=qf;S.toArray=Sh;S.toObject=$h;S.toDate=kh;S.toISOString=fh;S.inspect=hh;typeof Symbol<"u"&&Symbol.for!=null&&(S[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});S.toJSON=Th;S.toString=uh;S.unix=wh;S.valueOf=_h;S.creationData=Dh;S.eraName=Ph;S.eraNarrow=Rh;S.eraAbbr=Lh;S.eraYear=Nh;S.year=Go;S.isLeapYear=uu;S.weekYear=Hh;S.isoWeekYear=Wh;S.quarter=S.quarters=Jh;S.month=Xo;S.daysInMonth=wu;S.week=S.weeks=Du;S.isoWeek=S.isoWeeks=ju;S.weeksInYear=Gh;S.weeksInWeekYear=Kh;S.isoWeeksInYear=Zh;S.isoWeeksInISOWeekYear=Bh;S.date=kl;S.day=S.days=Hu;S.weekday=Wu;S.isoWeekday=Zu;S.dayOfYear=Qh;S.hour=S.hours=Xu;S.minute=S.minutes=Xh;S.second=S.seconds=ep;S.millisecond=S.milliseconds=Sl;S.utcOffset=Lf;S.utc=If;S.local=Ff;S.parseZone=Yf;S.hasAlignedHourOffset=zf;S.isDST=Vf;S.isLocal=Hf;S.isUtcOffset=Wf;S.isUtc=fl;S.isUTC=fl;S.zoneAbbr=rp;S.zoneName=np;S.dates=Ue("dates accessor is deprecated. Use date instead.",kl);S.months=Ue("months accessor is deprecated. Use month instead",Xo);S.years=Ue("years accessor is deprecated. Use year instead",Go);S.zone=Ue("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Nf);S.isDSTShifted=Ue("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Uf);function sp(e){return le(e*1e3)}function ip(){return le.apply(null,arguments).parseZone()}function $l(e){return e}var re=vi.prototype;re.calendar=Ud;re.longDateFormat=Bd;re.invalidDate=Kd;re.ordinal=Qd;re.preparse=$l;re.postformat=$l;re.relativeTime=eu;re.pastFuture=tu;re.set=zd;re.eras=jh;re.erasParse=Eh;re.erasConvertYear=Ah;re.erasAbbrRegex=Fh;re.erasNameRegex=Ih;re.erasNarrowRegex=Yh;re.months=vu;re.monthsShort=xu;re.monthsParse=_u;re.monthsRegex=Su;re.monthsShortRegex=ku;re.week=Tu;re.firstDayOfYear=Mu;re.firstDayOfWeek=Cu;re.weekdays=Fu;re.weekdaysMin=zu;re.weekdaysShort=Yu;re.weekdaysParse=Uu;re.weekdaysRegex=Bu;re.weekdaysShortRegex=Gu;re.weekdaysMinRegex=Ku;re.isPM=Ju;re.meridiem=ef;function In(e,t,r,n){var s=Ot(),i=ht().set(n,t);return s[r](i,e)}function Tl(e,t,r){if($t(e)&&(t=e,e=void 0),e=e||"",t!=null)return In(e,t,r,"month");var n,s=[];for(n=0;n<12;n++)s[n]=In(e,n,r,"month");return s}function Li(e,t,r,n){typeof e=="boolean"?($t(t)&&(r=t,t=void 0),t=t||""):(t=e,r=t,e=!1,$t(t)&&(r=t,t=void 0),t=t||"");var s=Ot(),i=e?s._week.dow:0,a,o=[];if(r!=null)return In(t,(r+i)%7,n,"day");for(a=0;a<7;a++)o[a]=In(t,(a+i)%7,n,"day");return o}function ap(e,t){return Tl(e,t,"months")}function op(e,t){return Tl(e,t,"monthsShort")}function lp(e,t,r){return Li(e,t,r,"weekdays")}function cp(e,t,r){return Li(e,t,r,"weekdaysShort")}function dp(e,t,r){return Li(e,t,r,"weekdaysMin")}At("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=J(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+r}});_.lang=Ue("moment.lang is deprecated. Use moment.locale instead.",At);_.langData=Ue("moment.langData is deprecated. Use moment.localeData instead.",Ot);var mt=Math.abs;function up(){var e=this._data;return this._milliseconds=mt(this._milliseconds),this._days=mt(this._days),this._months=mt(this._months),e.milliseconds=mt(e.milliseconds),e.seconds=mt(e.seconds),e.minutes=mt(e.minutes),e.hours=mt(e.hours),e.months=mt(e.months),e.years=mt(e.years),this}function Ol(e,t,r,n){var s=nt(t,r);return e._milliseconds+=n*s._milliseconds,e._days+=n*s._days,e._months+=n*s._months,e._bubble()}function fp(e,t){return Ol(this,e,t,1)}function hp(e,t){return Ol(this,e,t,-1)}function Sa(e){return e<0?Math.floor(e):Math.ceil(e)}function pp(){var e=this._milliseconds,t=this._days,r=this._months,n=this._data,s,i,a,o,l;return e>=0&&t>=0&&r>=0||e<=0&&t<=0&&r<=0||(e+=Sa(qs(r)+t)*864e5,t=0,r=0),n.milliseconds=e%1e3,s=Ve(e/1e3),n.seconds=s%60,i=Ve(s/60),n.minutes=i%60,a=Ve(i/60),n.hours=a%24,t+=Ve(a/24),l=Ve(Cl(t)),r+=l,t-=Sa(qs(l)),o=Ve(r/12),r%=12,n.days=t,n.months=r,n.years=o,this}function Cl(e){return e*4800/146097}function qs(e){return e*146097/4800}function mp(e){if(!this.isValid())return NaN;var t,r,n=this._milliseconds;if(e=He(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+n/864e5,r=this._months+Cl(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(qs(this._months)),e){case"week":return t/7+n/6048e5;case"day":return t+n/864e5;case"hour":return t*24+n/36e5;case"minute":return t*1440+n/6e4;case"second":return t*86400+n/1e3;case"millisecond":return Math.floor(t*864e5)+n;default:throw new Error("Unknown unit "+e)}}function Ct(e){return function(){return this.as(e)}}var Ml=Ct("ms"),gp=Ct("s"),yp=Ct("m"),vp=Ct("h"),xp=Ct("d"),bp=Ct("w"),_p=Ct("M"),wp=Ct("Q"),kp=Ct("y"),Sp=Ml;function $p(){return nt(this)}function Tp(e){return e=He(e),this.isValid()?this[e+"s"]():NaN}function Xt(e){return function(){return this.isValid()?this._data[e]:NaN}}var Op=Xt("milliseconds"),Cp=Xt("seconds"),Mp=Xt("minutes"),Dp=Xt("hours"),jp=Xt("days"),Ep=Xt("months"),Ap=Xt("years");function Pp(){return Ve(this.days()/7)}var xt=Math.round,lr={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Rp(e,t,r,n,s){return s.relativeTime(t||1,!!r,e,n)}function Lp(e,t,r,n){var s=nt(e).abs(),i=xt(s.as("s")),a=xt(s.as("m")),o=xt(s.as("h")),l=xt(s.as("d")),c=xt(s.as("M")),u=xt(s.as("w")),h=xt(s.as("y")),f=i<=r.ss&&["s",i]||i<r.s&&["ss",i]||a<=1&&["m"]||a<r.m&&["mm",a]||o<=1&&["h"]||o<r.h&&["hh",o]||l<=1&&["d"]||l<r.d&&["dd",l];return r.w!=null&&(f=f||u<=1&&["w"]||u<r.w&&["ww",u]),f=f||c<=1&&["M"]||c<r.M&&["MM",c]||h<=1&&["y"]||["yy",h],f[2]=t,f[3]=+e>0,f[4]=n,Rp.apply(null,f)}function Np(e){return e===void 0?xt:typeof e=="function"?(xt=e,!0):!1}function Ip(e,t){return lr[e]===void 0?!1:t===void 0?lr[e]:(lr[e]=t,e==="s"&&(lr.ss=t-1),!0)}function Fp(e,t){if(!this.isValid())return this.localeData().invalidDate();var r=!1,n=lr,s,i;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(r=e),typeof t=="object"&&(n=Object.assign({},lr,t),t.s!=null&&t.ss==null&&(n.ss=t.s-1)),s=this.localeData(),i=Lp(this,!r,n,s),r&&(i=s.pastFuture(+this,i)),s.postformat(i)}var Ms=Math.abs;function rr(e){return(e>0)-(e<0)||+e}function fs(){if(!this.isValid())return this.localeData().invalidDate();var e=Ms(this._milliseconds)/1e3,t=Ms(this._days),r=Ms(this._months),n,s,i,a,o=this.asSeconds(),l,c,u,h;return o?(n=Ve(e/60),s=Ve(n/60),e%=60,n%=60,i=Ve(r/12),r%=12,a=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",c=rr(this._months)!==rr(o)?"-":"",u=rr(this._days)!==rr(o)?"-":"",h=rr(this._milliseconds)!==rr(o)?"-":"",l+"P"+(i?c+i+"Y":"")+(r?c+r+"M":"")+(t?u+t+"D":"")+(s||n||e?"T":"")+(s?h+s+"H":"")+(n?h+n+"M":"")+(e?h+a+"S":"")):"P0D"}var X=ds.prototype;X.isValid=Ef;X.abs=up;X.add=fp;X.subtract=hp;X.as=mp;X.asMilliseconds=Ml;X.asSeconds=gp;X.asMinutes=yp;X.asHours=vp;X.asDays=xp;X.asWeeks=bp;X.asMonths=_p;X.asQuarters=wp;X.asYears=kp;X.valueOf=Sp;X._bubble=pp;X.clone=$p;X.get=Tp;X.milliseconds=Op;X.seconds=Cp;X.minutes=Mp;X.hours=Dp;X.days=jp;X.weeks=Pp;X.months=Ep;X.years=Ap;X.humanize=Fp;X.toISOString=fs;X.toString=fs;X.toJSON=fs;X.locale=gl;X.localeData=vl;X.toIsoString=Ue("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",fs);X.lang=yl;Y("X",0,0,"unix");Y("x",0,0,"valueOf");R("x",as);R("X",iu);ie("X",function(e,t,r){r._d=new Date(parseFloat(e)*1e3)});ie("x",function(e,t,r){r._d=new Date(J(e))});//! moment.js
_.version="2.30.1";Fd(le);_.fn=S;_.min=Cf;_.max=Mf;_.now=Df;_.utc=ht;_.unix=sp;_.months=ap;_.isDate=ln;_.locale=At;_.invalid=rs;_.duration=nt;_.isMoment=tt;_.weekdays=lp;_.parseZone=ip;_.localeData=Ot;_.isDuration=Cn;_.monthsShort=op;_.weekdaysMin=dp;_.defineLocale=Ci;_.updateLocale=sf;_.locales=af;_.weekdaysShort=cp;_.normalizeUnits=He;_.relativeTimeRounding=Np;_.relativeTimeThreshold=Ip;_.calendarFormat=th;_.prototype=S;_.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Yp={events:[],currentDate:_().format(),currentView:"week",timeScale:30},Dl=ui({name:"calendar",initialState:Yp,reducers:{addEvent:(e,t)=>{const r={...t.payload,id:Date.now().toString()};e.events.push(r)},updateEvent:(e,t)=>{const r=e.events.findIndex(n=>n.id===t.payload.id);r!==-1&&(e.events[r]=t.payload)},deleteEvent:(e,t)=>{e.events=e.events.filter(r=>r.id!==t.payload)},setCurrentDate:(e,t)=>{e.currentDate=t.payload},setCurrentView:(e,t)=>{e.currentView=t.payload},setTimeScale:(e,t)=>{e.timeScale=t.payload},importEvents:(e,t)=>{e.events=t.payload},clearEvents:e=>{e.events=[]}}}),{addEvent:zp,updateEvent:Vp,deleteEvent:Up,setCurrentDate:zt,setCurrentView:Hp,setTimeScale:Wp,importEvents:Zp,clearEvents:Bp}=Dl.actions,hs=e=>e.calendar.events,jl=e=>e.calendar.currentDate,El=e=>e.calendar.currentView,Ni=e=>e.calendar.timeScale,Gp=Dl.reducer;var Ii="persist:",Fi="persist/FLUSH",ps="persist/REHYDRATE",Yi="persist/PAUSE",zi="persist/PERSIST",Vi="persist/PURGE",Ui="persist/REGISTER",Kp=-1;function Dn(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Dn=function(r){return typeof r}:Dn=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Dn(e)}function $a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,n)}return r}function qp(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?$a(r,!0).forEach(function(n){Jp(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$a(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Jp(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Qp(e,t,r,n){n.debug;var s=qp({},r);return e&&Dn(e)==="object"&&Object.keys(e).forEach(function(i){i!=="_persist"&&t[i]===r[i]&&(s[i]=e[i])}),s}function Xp(e){var t=e.blacklist||null,r=e.whitelist||null,n=e.transforms||[],s=e.throttle||0,i="".concat(e.keyPrefix!==void 0?e.keyPrefix:Ii).concat(e.key),a=e.storage,o;e.serialize===!1?o=function(P){return P}:typeof e.serialize=="function"?o=e.serialize:o=em;var l=e.writeFailHandler||null,c={},u={},h=[],f=null,x=null,v=function(P){Object.keys(P).forEach(function(F){j(F)&&c[F]!==P[F]&&h.indexOf(F)===-1&&h.push(F)}),Object.keys(c).forEach(function(F){P[F]===void 0&&j(F)&&h.indexOf(F)===-1&&c[F]!==void 0&&h.push(F)}),f===null&&(f=setInterval(y,s)),c=P};function y(){if(h.length===0){f&&clearInterval(f),f=null;return}var T=h.shift(),P=n.reduce(function(F,W){return W.in(F,T,c)},c[T]);if(P!==void 0)try{u[T]=o(P)}catch(F){console.error("redux-persist/createPersistoid: error serializing state",F)}else delete u[T];h.length===0&&w()}function w(){Object.keys(u).forEach(function(T){c[T]===void 0&&delete u[T]}),x=a.setItem(i,o(u)).catch($)}function j(T){return!(r&&r.indexOf(T)===-1&&T!=="_persist"||t&&t.indexOf(T)!==-1)}function $(T){l&&l(T)}var I=function(){for(;h.length!==0;)y();return x||Promise.resolve()};return{update:v,flush:I}}function em(e){return JSON.stringify(e)}function tm(e){var t=e.transforms||[],r="".concat(e.keyPrefix!==void 0?e.keyPrefix:Ii).concat(e.key),n=e.storage;e.debug;var s;return e.deserialize===!1?s=function(a){return a}:typeof e.deserialize=="function"?s=e.deserialize:s=rm,n.getItem(r).then(function(i){if(i)try{var a={},o=s(i);return Object.keys(o).forEach(function(l){a[l]=t.reduceRight(function(c,u){return u.out(c,l,o)},s(o[l]))}),a}catch(l){throw l}else return})}function rm(e){return JSON.parse(e)}function nm(e){var t=e.storage,r="".concat(e.keyPrefix!==void 0?e.keyPrefix:Ii).concat(e.key);return t.removeItem(r,sm)}function sm(e){}function Ta(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,n)}return r}function gt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ta(r,!0).forEach(function(n){im(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ta(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function im(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function am(e,t){if(e==null)return{};var r=om(e,t),n,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function om(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,i;for(i=0;i<n.length;i++)s=n[i],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}var lm=5e3;function cm(e,t){var r=e.version!==void 0?e.version:Kp;e.debug;var n=e.stateReconciler===void 0?Qp:e.stateReconciler,s=e.getStoredState||tm,i=e.timeout!==void 0?e.timeout:lm,a=null,o=!1,l=!0,c=function(h){return h._persist.rehydrated&&a&&!l&&a.update(h),h};return function(u,h){var f=u||{},x=f._persist,v=am(f,["_persist"]),y=v;if(h.type===zi){var w=!1,j=function(be,oe){w||(h.rehydrate(e.key,be,oe),w=!0)};if(i&&setTimeout(function(){!w&&j(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},i),l=!1,a||(a=Xp(e)),x)return gt({},t(y,h),{_persist:x});if(typeof h.rehydrate!="function"||typeof h.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return h.register(e.key),s(e).then(function(W){var be=e.migrate||function(oe,Pe){return Promise.resolve(oe)};be(W,r).then(function(oe){j(oe)},function(oe){j(void 0,oe)})},function(W){j(void 0,W)}),gt({},t(y,h),{_persist:{version:r,rehydrated:!1}})}else{if(h.type===Vi)return o=!0,h.result(nm(e)),gt({},t(y,h),{_persist:x});if(h.type===Fi)return h.result(a&&a.flush()),gt({},t(y,h),{_persist:x});if(h.type===Yi)l=!0;else if(h.type===ps){if(o)return gt({},y,{_persist:gt({},x,{rehydrated:!0})});if(h.key===e.key){var $=t(y,h),I=h.payload,T=n!==!1&&I!==void 0?n(I,u,$,e):$,P=gt({},T,{_persist:gt({},x,{rehydrated:!0})});return c(P)}}}if(!x)return t(u,h);var F=t(y,h);return F===y?u:c(gt({},F,{_persist:x}))}}function Oa(e){return fm(e)||um(e)||dm()}function dm(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function um(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function fm(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function Ca(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,n)}return r}function Js(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ca(r,!0).forEach(function(n){hm(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ca(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function hm(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Al={registry:[],bootstrapped:!1},pm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Al,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case Ui:return Js({},t,{registry:[].concat(Oa(t.registry),[r.key])});case ps:var n=t.registry.indexOf(r.key),s=Oa(t.registry);return s.splice(n,1),Js({},t,{registry:s,bootstrapped:s.length===0});default:return t}};function mm(e,t,r){var n=Uc(pm,Al,void 0),s=function(l){n.dispatch({type:Ui,key:l})},i=function(l,c,u){var h={type:ps,payload:c,err:u,key:l};e.dispatch(h),n.dispatch(h)},a=Js({},n,{purge:function(){var l=[];return e.dispatch({type:Vi,result:function(u){l.push(u)}}),Promise.all(l)},flush:function(){var l=[];return e.dispatch({type:Fi,result:function(u){l.push(u)}}),Promise.all(l)},pause:function(){e.dispatch({type:Yi})},persist:function(){e.dispatch({type:zi,register:s,rehydrate:i})}});return a.persist(),a}var Hi={},Wi={};Wi.__esModule=!0;Wi.default=vm;function jn(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?jn=function(r){return typeof r}:jn=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},jn(e)}function Ds(){}var gm={getItem:Ds,setItem:Ds,removeItem:Ds};function ym(e){if((typeof self>"u"?"undefined":jn(self))!=="object"||!(e in self))return!1;try{var t=self[e],r="redux-persist ".concat(e," test");t.setItem(r,"test"),t.getItem(r),t.removeItem(r)}catch{return!1}return!0}function vm(e){var t="".concat(e,"Storage");return ym(t)?self[t]:gm}Hi.__esModule=!0;Hi.default=_m;var xm=bm(Wi);function bm(e){return e&&e.__esModule?e:{default:e}}function _m(e){var t=(0,xm.default)(e);return{getItem:function(n){return new Promise(function(s,i){s(t.getItem(n))})},setItem:function(n,s){return new Promise(function(i,a){i(t.setItem(n,s))})},removeItem:function(n){return new Promise(function(s,i){s(t.removeItem(n))})}}}var Pl=void 0,wm=km(Hi);function km(e){return e&&e.__esModule?e:{default:e}}var Sm=(0,wm.default)("local");Pl=Sm;const $m={key:"root",storage:Pl,whitelist:["calendar","theme"]},Tm=Hc({theme:Ld,user:Id,calendar:Gp}),Om=cm($m,Tm),Zi=Wc({reducer:Om,middleware:e=>e({serializableCheck:{ignoredActions:[Fi,ps,Yi,zi,Vi,Ui]}}),devTools:!1}),Cm=mm(Zi);function Mm(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];Gt(t[0])&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const Ma={};function Qs(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];Gt(t[0])&&Ma[t[0]]||(Gt(t[0])&&(Ma[t[0]]=new Date),Mm(...t))}const Rl=(e,t)=>()=>{if(e.isInitialized)t();else{const r=()=>{setTimeout(()=>{e.off("initialized",r)},0),t()};e.on("initialized",r)}},Da=(e,t,r)=>{e.loadNamespaces(t,Rl(e,r))},ja=(e,t,r,n)=>{Gt(r)&&(r=[r]),r.forEach(s=>{e.options.ns.indexOf(s)<0&&e.options.ns.push(s)}),e.loadLanguages(t,Rl(e,n))},Dm=function(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=t.languages[0],s=t.options?t.options.fallbackLng:!1,i=t.languages[t.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const c=t.services.backendConnector.state[`${o}|${l}`];return c===-1||c===2};return r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(n,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(n,e)&&(!s||a(i,e)))},jm=function(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(Qs("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:r.lng,precheck:(s,i)=>{if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&s.services.backendConnector.backend&&s.isLanguageChangingTo&&!i(s.isLanguageChangingTo,e))return!1}}):Dm(e,t,r)},Gt=e=>typeof e=="string",Em=e=>typeof e=="object"&&e!==null,Am=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Pm={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Rm=e=>Pm[e],Lm=e=>e.replace(Am,Rm);let Xs={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Lm};const Nm=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Xs={...Xs,...e}},Im=()=>Xs;let Ll;const Fm=e=>{Ll=e},Ym=()=>Ll,zm={type:"3rdParty",init(e){Nm(e.options.react),Fm(e)}},Vm=V.createContext();class Um{constructor(){it(this,"getUsedNamespaces",()=>Object.keys(this.usedNamespaces));this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(r=>{this.usedNamespaces[r]||(this.usedNamespaces[r]=!0)})}}const Hm=(e,t)=>{const r=V.useRef();return V.useEffect(()=>{r.current=e},[e,t]),r.current},Nl=(e,t,r,n)=>e.getFixedT(t,r,n),Wm=(e,t,r,n)=>V.useCallback(Nl(e,t,r,n),[e,t,r,n]),We=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:r}=t,{i18n:n,defaultNS:s}=V.useContext(Vm)||{},i=r||n||Ym();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new Um),!i){Qs("You will need to pass in an i18next instance by using initReactI18next");const T=(F,W)=>Gt(W)?W:Em(W)&&Gt(W.defaultValue)?W.defaultValue:Array.isArray(F)?F[F.length-1]:F,P=[T,{},!1];return P.t=T,P.i18n={},P.ready=!1,P}i.options.react&&i.options.react.wait!==void 0&&Qs("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...Im(),...i.options.react,...t},{useSuspense:o,keyPrefix:l}=a;let c=s||i.options&&i.options.defaultNS;c=Gt(c)?[c]:c||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(c);const u=(i.isInitialized||i.initializedStoreOnce)&&c.every(T=>jm(T,i,a)),h=Wm(i,t.lng||null,a.nsMode==="fallback"?c:c[0],l),f=()=>h,x=()=>Nl(i,t.lng||null,a.nsMode==="fallback"?c:c[0],l),[v,y]=V.useState(f);let w=c.join();t.lng&&(w=`${t.lng}${w}`);const j=Hm(w),$=V.useRef(!0);V.useEffect(()=>{const{bindI18n:T,bindI18nStore:P}=a;$.current=!0,!u&&!o&&(t.lng?ja(i,t.lng,c,()=>{$.current&&y(x)}):Da(i,c,()=>{$.current&&y(x)})),u&&j&&j!==w&&$.current&&y(x);const F=()=>{$.current&&y(x)};return T&&i&&i.on(T,F),P&&i&&i.store.on(P,F),()=>{$.current=!1,T&&i&&T.split(" ").forEach(W=>i.off(W,F)),P&&i&&P.split(" ").forEach(W=>i.store.off(W,F))}},[i,w]),V.useEffect(()=>{$.current&&u&&y(f)},[i,l,u]);const I=[v,i,u];if(I.t=v,I.i18n=i,I.ready=u,u||!u&&!o)return I;throw new Promise(T=>{t.lng?ja(i,t.lng,c,()=>T()):Da(i,c,()=>T())})},Zm=g.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  display: inline-block;
`,Bm=g.div`
  width: 56px;
  height: 28px;
  background-color: ${({theme:e,$isDark:t})=>t?e.colors.surface:e.colors.background.secondary};
  border-radius: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  transition: all 0.3s ease;
`,Gm=g.div`
  position: absolute;
  left: ${({$isDark:e})=>e?"30px":"4px"};
  width: 20px;
  height: 20px;
  background-color: ${({theme:e,$isDark:t})=>t?e.colors.text.primary:e.colors.accent.primary};
  border-radius: 50%;
  transition: left 0.3s, background-color 0.3s;
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Ea=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e,$position:t})=>t==="left"?e.colors.accent.primary:e.mode==="dark"?e.colors.text.primary:e.colors.text.secondary};
  z-index: 1;
  transition: color 0.3s ease;
`,Il=()=>{const{themeMode:e,toggleTheme:t}=Po(),r=e==="dark";return d.jsx(Zm,{onClick:t,children:d.jsxs(Bm,{$isDark:r,children:[d.jsx(Ea,{$position:"left",children:d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"5"}),d.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),d.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),d.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),d.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),d.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),d.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),d.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),d.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})}),d.jsx(Gm,{$isDark:r}),d.jsx(Ea,{$position:"right",children:d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})})]})})},Km=g.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,qm=g.h4`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,Jm=g.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: ${({theme:e})=>e.borderRadius.round};
  border: 2px solid ${({theme:e,selected:t})=>t?e.colors.primary:"transparent"};
  background: transparent;
  padding: 2px;
  margin-right: ${({theme:e})=>e.spacing.xs};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary}33;
  }
`,Qm=g.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({color:e})=>e};
`,Bi=({title:e="Accent Color"})=>{const{accentColor:t,setAccentColor:r}=Po(),n=[{value:"blue",label:"Blue",color:"#1677ff"},{value:"purple",label:"Purple",color:"#722ED1"},{value:"pink",label:"Pink",color:"#EB2F96"},{value:"red",label:"Red",color:"#F5222D"},{value:"orange",label:"Orange",color:"#FA8C16"},{value:"green",label:"Green",color:"#52C41A"},{value:"teal",label:"Teal",color:"#13C2C2"}];return d.jsxs(Km,{children:[e&&d.jsx(qm,{children:e}),d.jsx("div",{children:n.map(s=>d.jsx(Jm,{selected:t===s.value,onClick:()=>r(s.value),title:s.label,children:d.jsx(Qm,{color:s.color})},s.value))})]})};var Fl={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Aa=z.createContext&&z.createContext(Fl),Pt=function(){return Pt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Pt.apply(this,arguments)},Xm=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};function Yl(e){return e&&e.map(function(t,r){return z.createElement(t.tag,Pt({key:r},t.attr),Yl(t.child))})}function Ce(e){return function(t){return z.createElement(eg,Pt({attr:Pt({},e.attr)},t),Yl(e.child))}}function eg(e){var t=function(r){var n=e.attr,s=e.size,i=e.title,a=Xm(e,["attr","size","title"]),o=s||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),z.createElement("svg",Pt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,a,{className:l,style:Pt(Pt({color:e.color||r.color},r.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),i&&z.createElement("title",null,i),e.children)};return Aa!==void 0?z.createElement(Aa.Consumer,null,function(r){return t(r)}):t(Fl)}function tg(e){return Ce({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}}]})(e)}function rg(e){return Ce({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"}}]})(e)}const ng=g.div`
  position: relative;
  display: flex;
  align-items: center;
`,sg=g.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text.primary}; /* Riferimento corretto al colore del testo primario */
  cursor: pointer;
  padding: 8px;
  font-size: 1rem;
  gap: 6px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.backgroundHover};
  }

  svg {
    font-size: 1.2rem;
    color: ${({theme:e})=>e.colors.text.primary}; /* Colore dell'icona che segue il tema */
  }
`,ig=g.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  box-shadow: ${({theme:e})=>e.shadows.md};
  min-width: 150px;
  z-index: ${({theme:e})=>e.zIndex.dropdown};
  display: ${({isOpen:e})=>e?"block":"none"};
  margin-top: 8px;
`,ag=g.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 15px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:e,isActive:t})=>t?e.colors.primary:e.colors.text.primary};
  font-weight: ${({theme:e,isActive:t})=>t?e.typography.fontWeight.semibold:e.typography.fontWeight.regular};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.backgroundHover};
  }
`,Pa=[{code:"en",name:"English"},{code:"it",name:"Italiano"}],zl=()=>{const{i18n:e,t}=We(),[r,n]=V.useState(!1),s=V.useRef(null),i=()=>{n(!r)},a=c=>{e.changeLanguage(c),n(!1)},o=V.useCallback(c=>{s.current&&!s.current.contains(c.target)&&n(!1)},[]);V.useEffect(()=>(r?document.addEventListener("mousedown",o):document.removeEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}),[r,o]);const l=()=>{const c=Pa.find(u=>u.code===e.language);return c?c.name:"English"};return d.jsxs(ng,{ref:s,children:[d.jsxs(sg,{onClick:i,"aria-label":t("common.language"),children:[d.jsx(rg,{}),d.jsx("span",{children:l()}),d.jsx(tg,{style:{fontSize:"0.8rem"}})]}),d.jsx(ig,{isOpen:r,children:Pa.map(c=>d.jsx(ag,{isActive:e.language===c.code,onClick:()=>a(c.code),children:c.name},c.code))})]})},og=g.nav`
  background-color: ${({theme:e})=>e.colors.components.navbar};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndex.sticky};
  transition: all 0.3s ease;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
`,lg=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0 ${({theme:e})=>e.spacing.sm};
  }
`,cg=g.div`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
  
  a {
    color: ${({theme:e})=>e.colors.text.primary};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({theme:e})=>e.colors.accent.primary};
      text-decoration: none;
    }
  }
`,dg=g.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: ${({$mobileMenuOpen:e})=>e?"flex":"none"};
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background-color: ${({theme:e})=>e.colors.components.navbar};
    flex-direction: column;
    align-items: flex-start;
    padding: ${({theme:e})=>e.spacing.md};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`,Ra=g(es)`
  color: ${({$isActive:e,theme:t})=>e?t.colors.accent.primary:t.colors.text.primary};
  text-decoration: none;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  font-weight: ${({$isActive:e,theme:t})=>e?t.typography.fontWeight.semibold:t.typography.fontWeight.medium};
  position: relative;
  transition: all 0.2s ease;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  
  &:hover {
    color: ${({theme:e})=>e.colors.accent.primary};
    text-decoration: none;
    background-color: ${({theme:e})=>e.colors.backgroundHover};
  }
  
  ${({$isActive:e,theme:t})=>e&&$e`
      &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: ${t.spacing.md};
        right: ${t.spacing.md};
        height: 2px;
        background-color: ${t.colors.accent};
      }
    `}
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing.sm} 0;
    width: 100%;
    
    ${({$isActive:e,theme:t})=>e&&$e`
        &::after {
          left: 0;
          right: 0;
          bottom: 0;
        }
      `}
  }
`,ug=g.div`
  display: flex;
  align-items: center;
`,fg=g.button`
  display: none;
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text.primary};
  cursor: pointer;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: block;
  }
`,hg=g.div`
  display: none;
  padding: ${({theme:e})=>e.spacing.md};
  background-color: ${({theme:e})=>e.colors.components.navbar};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: block;
  }
`,pg=g.div`
  padding-top: ${({theme:e})=>e.spacing.sm};
  border-top: 1px solid ${({theme:e})=>e.colors.border.default};
`,mg=()=>{const[e,t]=V.useState(!1),r=_o(),{t:n}=We(),s=()=>{t(!e)},i=()=>{t(!1)};return d.jsxs(og,{children:[d.jsxs(lg,{children:[d.jsx(cg,{children:d.jsx(es,{to:"/",children:n("common.appName")})}),d.jsx(fg,{onClick:s,"aria-label":"Toggle menu",children:d.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{d:"M3 12H21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M3 6H21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M3 18H21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),d.jsxs(dg,{$mobileMenuOpen:e,children:[d.jsx(Ra,{onClick:i,to:"/",$isActive:r.pathname==="/",children:n("navigation.home")}),d.jsx(Ra,{onClick:i,to:"/about",$isActive:r.pathname==="/about",children:n("navigation.about")})]}),d.jsxs(ug,{children:[d.jsx(zl,{}),d.jsx(Il,{})]})]}),e&&d.jsx(hg,{children:d.jsx(pg,{children:d.jsx(Bi,{title:"Choose accent color"})})})]})},gg=g.footer`
  background-color: ${({theme:e})=>e.mode==="light"?"#f8f6f1":e.colors.surface};
  border-top: 1px solid ${({theme:e})=>e.colors.border.default};
  padding: ${({theme:e})=>e.spacing.xl} 0 ${({theme:e})=>e.spacing.md};
  transition: all 0.3s ease;
  margin-top: auto; /* Push footer to bottom */
  box-shadow: ${({theme:e})=>e.mode==="light"?"0 -1px 5px rgba(149, 157, 165, 0.1)":"none"};
`,yg=g.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0 ${({theme:e})=>e.spacing.sm};
    flex-direction: column;
  }
`,ei=g.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  
  p {
    color: ${({theme:e})=>e.colors.text.secondary};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    max-width: 300px;
  }
`,vg=g.div`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  
  a {
    color: ${({theme:e})=>e.colors.accent.primary};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({theme:e})=>e.mode==="light"?e.colors.accent.secondary:e.colors.accent.primary+"90"};
      text-decoration: none;
    }
  }
`,La=g.h4`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.text.primary};
`,xg=g.div`
  display: flex;
  flex-direction: column;
`,Na=g(es)`
  color: ${({theme:e})=>e.colors.text.secondary};
  text-decoration: none;
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  transition: color 0.2s;
  
  &:hover {
    color: ${({theme:e})=>e.colors.accent};
    text-decoration: none;
  }
`,bg=g(ei)`
  min-width: 280px;
`,_g=g.div`
  text-align: center;
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border.default};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  max-width: 1200px;
  margin: 0 auto;
  padding-left: ${({theme:e})=>e.spacing.md};
  padding-right: ${({theme:e})=>e.spacing.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding-left: ${({theme:e})=>e.spacing.sm};
    padding-right: ${({theme:e})=>e.spacing.sm};
  }
`,wg=()=>{const e=new Date().getFullYear();return d.jsxs(gg,{children:[d.jsxs(yg,{children:[d.jsxs(ei,{children:[d.jsx(vg,{children:d.jsx(es,{to:"/",children:"bl-custom-fe-react"})}),d.jsx("p",{children:"A scalable and modular React boilerplate with styled-components and modern design principles"})]}),d.jsxs(ei,{children:[d.jsx(La,{children:"Links"}),d.jsxs(xg,{children:[d.jsx(Na,{to:"/",children:"Home"}),d.jsx(Na,{to:"/about",children:"About"})]})]}),d.jsxs(bg,{children:[d.jsx(La,{children:"Customize Theme"}),d.jsx(Bi,{title:"Accent Color"})]})]}),d.jsxs(_g,{children:["© ",e," bl-custom-fe-react. All rights reserved."]})]})},kg=g.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`,Sg=g.main`
  flex: 1 0 auto;
  width: 100%;
  background-color: ${({theme:e})=>e.colors.background};
  transition: background-color 0.3s ease;
`,$g=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.spacing.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.sm};
  }
`,Tg=()=>d.jsxs(kg,{children:[d.jsx(mg,{}),d.jsx(Sg,{children:d.jsx($g,{children:d.jsx(Fc,{})})}),d.jsx(wg,{})]}),Og=g.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:e})=>e.colors.background.primary};
`,Cg=g.div`
  flex: 1;
  overflow: hidden;
`,Mg=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({theme:e})=>e.colors.text.secondary};
  
  svg {
    animation: spin 1s linear infinite;
    margin-right: 0.5rem;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;function gr(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}function Dg(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(e)}function jg(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(e)}function Eg(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}function Ag(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}function Or(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"}},{tag:"polyline",attr:{points:"8 6 2 12 8 18"}}]})(e)}function Pg(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"7 10 12 15 17 10"}},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"}}]})(e)}function Rg(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(e)}function Lg(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"6"}},{tag:"line",attr:{x1:"12",y1:"18",x2:"12",y2:"22"}},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}},{tag:"line",attr:{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}},{tag:"line",attr:{x1:"2",y1:"12",x2:"6",y2:"12"}},{tag:"line",attr:{x1:"18",y1:"12",x2:"22",y2:"12"}},{tag:"line",attr:{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}},{tag:"line",attr:{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"}}]})(e)}function ti(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(e)}function Ng(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"}}]})(e)}function Vl(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}function Ig(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"17 8 12 3 7 8"}},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"}}]})(e)}function Fg(e){return Ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}const Ul=()=>{_.locale("it",{months:"Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),monthsShort:"Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),weekdays:"Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:"[Lo scorso] dddd [alle] LT",sameElse:"L"},relativeTime:{future:"tra %s",past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:e=>`${e}º`,week:{dow:1,doy:4}})},Yg=e=>{const t=e.clone().startOf("month"),r=e.daysInMonth(),n=t.day()===0?6:t.day()-1,s=[],i=t.clone().subtract(1,"month"),a=i.daysInMonth();for(let u=n-1;u>=0;u--)s.push({date:i.clone().date(a-u),isCurrentMonth:!1,isToday:!1});const o=_();for(let u=1;u<=r;u++){const h=t.clone().date(u);s.push({date:h,isCurrentMonth:!0,isToday:h.format("YYYY-MM-DD")===o.format("YYYY-MM-DD")})}const l=t.clone().add(1,"month");let c=42-s.length;for(let u=1;u<=c;u++)s.push({date:l.clone().date(u),isCurrentMonth:!1,isToday:!1});return s},ri=e=>{const t=e.clone().startOf("week"),r=[];for(let n=0;n<7;n++){const s=t.clone().add(n,"days");r.push({date:s,isToday:s.format("YYYY-MM-DD")===_().format("YYYY-MM-DD")})}return r},Hl=e=>{const t=[];for(let r=0;r<24;r++)if(e===60)t.push(_().hour(r).minute(0).format("HH:mm"));else if(e===30)t.push(_().hour(r).minute(0).format("HH:mm")),t.push(_().hour(r).minute(30).format("HH:mm"));else if(e===10)for(let n=0;n<60;n+=10)t.push(_().hour(r).minute(n).format("HH:mm"));return t},Wl=(e,t)=>{const r=_(e.date),n=r.hours()*60+r.minutes(),s=e.duration||30,i=24*60;return{top:`${n/i*100}%`,height:`${s/i*100}%`}},zg=g.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background-color: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  margin: 0.5rem 0.5rem 0;
`,Vg=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ug=g.h2`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  letter-spacing: -0.5px; /* Tipico stile GitHub per i titoli */
`,Ia=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Hg=g.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.5rem 0 0.75rem;
  position: relative;
`,Wg=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;

  select {
    border: 1px solid ${({theme:e})=>e.colors.border.default};
    border-radius: ${({theme:e})=>e.borderRadius.sm};
    padding: 0.25rem 0.5rem;
    background-color: ${({theme:e})=>e.colors.surface};
    color: ${({theme:e})=>e.colors.text.primary};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    transition: all 0.2s ease;
    
    &:hover {
      border-color: ${({theme:e})=>e.colors.border.primary};
    }
    
    &:focus {
      border-color: ${({theme:e})=>e.colors.accent.primary};
      outline: none;
      box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.accent.primary}30`};
    }
  }

  label {
    color: ${({theme:e})=>e.colors.text.secondary};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }
`,Zg=g.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-top: 1rem;
  padding: 0 0.25rem;
`,Bg=g.div`
  padding: 0.75rem 0.5rem;
  text-align: center;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background-color: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  box-shadow: ${({theme:e})=>e.shadows.xs};
  transition: all 0.2s ease;
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  
  ${({isToday:e,theme:t})=>e&&`
    background-color: ${t.colors.accent.primary}15;
    border-color: ${t.colors.accent.primary};
    font-weight: ${t.typography.fontWeight.semibold};
    color: ${t.colors.accent.primary};
  `}

  &:hover {
    border-color: ${({theme:e})=>e.colors.border.primary};
    background-color: ${({theme:e})=>e.colors.backgroundHover};
  }

  .day-name {
    font-size: 0.85rem;
    color: ${({theme:e})=>e.colors.text.secondary};
    margin-bottom: 4px;
    font-weight: 500;
  }

  .day-number {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 6px 0;
    color: ${({theme:e,isToday:t})=>t?e.colors.primary:e.colors.text.primary};
  }

  .add-event-btn {
    margin-top: 0.5rem;
    background: transparent;
    border: none;
    color: ${({theme:e})=>e.colors.primary};
    cursor: pointer;
    font-size: 1.2rem;
    padding: 4px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: ${({theme:e})=>`${e.colors.primary}15`};
      transform: scale(1.1);
    }
  }
`,Gg=Yc`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Kg=e=>{switch(e){case"small":return $e`
        height: 32px;
        padding: 0 ${({theme:t})=>t.spacing.sm};
        font-size: ${({theme:t})=>t.typography.fontSize.sm};
      `;case"large":return $e`
        height: 48px;
        padding: 0 ${({theme:t})=>t.spacing.lg};
        font-size: ${({theme:t})=>t.typography.fontSize.lg};
      `;case"medium":default:return $e`
        height: 40px;
        padding: 0 ${({theme:t})=>t.spacing.md};
        font-size: ${({theme:t})=>t.typography.fontSize.md};
      `}},qg=e=>{switch(e){case"secondary":return $e`
        background-color: ${({theme:t})=>t.colors.components.button.secondary.background};
        color: ${({theme:t})=>t.colors.components.button.secondary.text};
        border: 1px solid ${({theme:t})=>t.colors.border.default};
        box-shadow: ${({theme:t})=>t.mode==="dark"?"none":"0 1px 0 rgba(31,35,40,0.04)"};
        
        &:hover:not(:disabled) {
          background-color: ${({theme:t})=>t.colors.components.button.secondary.hover};
          border-color: ${({theme:t})=>t.mode==="dark"?t.colors.border.default:"rgba(31,35,40,0.15)"};
        }
        
        &:active:not(:disabled) {
          background-color: ${({theme:t})=>t.colors.components.button.secondary.hover};
          box-shadow: ${({theme:t})=>t.mode==="dark"?"none":"inset 0 1px 0 rgba(0,0,0,0.2)"};
        }
      `;case"ghost":return $e`
        background-color: ${({theme:t})=>t.colors.components.button.ghost.background};
        color: ${({theme:t})=>t.colors.components.button.ghost.text};
        border: 1px solid transparent;
        
        &:hover:not(:disabled) {
          background-color: ${({theme:t})=>t.colors.components.button.ghost.hover};
          border-color: ${({theme:t})=>t.mode==="dark"?"rgba(240,246,252,0.1)":"rgba(31,35,40,0.15)"};
        }
        
        &:active:not(:disabled) {
          background-color: ${({theme:t})=>t.colors.components.button.ghost.hover};
          border-color: ${({theme:t})=>t.mode==="dark"?"rgba(240,246,252,0.1)":"rgba(31,35,40,0.15)"};
        }
      `;case"link":return $e`
        background-color: transparent;
        color: ${({theme:t})=>t.colors.primary};
        border: none;
        padding: 0;
        height: auto;
        
        &:hover:not(:disabled) {
          text-decoration: underline;
        }
        
        &:active:not(:disabled) {
          color: ${({theme:t})=>t.colors.text.primary};
        }
      `;case"primary":default:return $e`
        background-color: ${({theme:t})=>t.colors.components.button.primary.background};
        color: ${({theme:t})=>t.colors.components.button.primary.text};
        border: 1px solid ${({theme:t})=>t.mode==="dark"?"rgba(240,246,252,0.1)":"rgba(31,35,40,0.15)"};
        box-shadow: ${({theme:t})=>t.mode==="dark"?"none":"0 1px 0 rgba(31,35,40,0.04), inset 0 1px 0 rgba(255,255,255,0.25)"};
        
        &:hover:not(:disabled) {
          background-color: ${({theme:t})=>t.colors.components.button.primary.hover};
        }
        
        &:active:not(:disabled) {
          background-color: ${({theme:t})=>t.colors.components.button.primary.hover};
          box-shadow: ${({theme:t})=>t.mode==="dark"?"none":"inset 0 1px 0 rgba(0,0,0,0.2)"};
        }
      `}},Jg=g.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme:e})=>e.borderRadius.sm}; /* GitHub usa bordi più arrotondati */
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ${({theme:e})=>e.animation.easing.easeOut};
  outline: none;
  position: relative;
  white-space: nowrap;
  
  ${({$size:e})=>Kg(e)}
  ${({$variant:e})=>qg(e)}
  
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  
  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  /* Focus state (stile GitHub) */
  &:focus-visible {
    box-shadow: ${({theme:e})=>e.mode==="dark"?`0 0 0 2px ${e.colors.background.primary}, 0 0 0 4px ${e.colors.accent.primary}80`:"0 0 0 3px rgba(9, 105, 218, 0.3)"};
    outline: none;
  }
`,Qg=g.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({$iconPosition:e})=>e==="left"?"row":"row-reverse"};
`,Xg=g.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-${({$iconPosition:e})=>e==="left"?"right":"left"}: ${({theme:e})=>e.spacing.xs};
  
  ${({$isLoading:e})=>e&&$e`
    .loading-icon {
      animation: ${Gg} 1.2s infinite linear;
      display: inline-flex;
    }
  `}
`,Ie=({children:e,variant:t="primary",size:r="medium",icon:n,iconPosition:s="left",fullWidth:i=!1,disabled:a=!1,loading:o=!1,onClick:l,type:c="button",...u})=>{const h=f=>{!a&&!o&&l&&l(f)};return d.jsx(Jg,{$variant:t,$size:r,$fullWidth:i,disabled:a||o,onClick:h,type:c,$hasIcon:!!n,...u,children:d.jsxs(Qg,{$iconPosition:s,children:[n&&d.jsx(Xg,{$iconPosition:s,$isLoading:o,children:o?d.jsx("span",{className:"loading-icon",children:d.jsx("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"loading",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",children:d.jsx("path",{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"})})}):n}),e]})})},ey=g.div`
  background-color: ${({theme:e})=>`${e.colors.background.secondary}40`};
  padding: 4px;
  border-radius: 28px;
  display: flex;
  position: relative;
  width: 300px;
  margin: 0 auto;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);
`,js=g.button`
  border: none;
  background: ${({isActive:e,theme:t})=>e?t.colors.primary:"transparent"};
  color: ${({isActive:e})=>e?"white":"inherit"};
  border-radius: 24px;
  padding: 8px 16px;
  font-size: 0.95rem;
  font-weight: 500;
  flex: 1;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: all 0.2s ease;
  text-align: center;
  box-shadow: ${({isActive:e})=>e?"0 2px 8px rgba(0, 0, 0, 0.15)":"none"};
  
  &:focus {
    outline: none;
  }
  
  &:hover:not(:disabled) {
    background: ${({isActive:e,theme:t})=>e?t.colors.primary:`${t.colors.background.secondary}80`};
  }
`,ty=({currentView:e})=>{const{t}=We(),r=on(),n=di(),s=i=>{r(Hp(i)),n(`/${i}`)};return d.jsxs(ey,{children:[d.jsx(js,{isActive:e==="day",onClick:()=>s("day"),children:t("calendar.day")}),d.jsx(js,{isActive:e==="week",onClick:()=>s("week"),children:t("calendar.week")}),d.jsx(js,{isActive:e==="month",onClick:()=>s("month"),children:t("calendar.month")})]})},ry=({onAddEvent:e})=>{const{t}=We(),r=on(),n=Qe(jl),s=Qe(El),i=Qe(Ni),a=_(n);V.useEffect(()=>{Ul()},[]);const o=()=>{s==="month"?r(zt(_(a).subtract(1,"month").format())):s==="week"?r(zt(_(a).subtract(1,"week").format())):s==="day"&&r(zt(_(a).subtract(1,"day").format()))},l=()=>{s==="month"?r(zt(_(a).add(1,"month").format())):s==="week"?r(zt(_(a).add(1,"week").format())):s==="day"&&r(zt(_(a).add(1,"day").format()))},c=()=>{r(zt(_().format()))},u=x=>{r(Wp(Number(x.target.value)))},h=()=>{if(s==="month")return a.format("MMMM YYYY");if(s==="week"){const x=ri(a),v=x[0].date,y=x[6].date;return v.month()===y.month()?`${v.format("D")} - ${y.format("D")} ${v.format("MMMM YYYY")}`:v.year()===y.year()?`${v.format("D MMM")} - ${y.format("D MMM YYYY")}`:`${v.format("D MMM YYYY")} - ${y.format("D MMM YYYY")}`}else return a.format("dddd, D MMMM YYYY")},f=()=>{if(s!=="week")return null;const x=ri(a);return d.jsx(Zg,{children:x.map(v=>d.jsxs(Bg,{isToday:v.isToday,children:[d.jsx("div",{className:"day-name",children:v.date.format("ddd")}),d.jsx("div",{className:"day-number",children:v.date.format("D")}),d.jsx("button",{className:"add-event-btn",onClick:()=>e(v.date),"aria-label":t("calendar.addEvent"),children:d.jsx(ti,{})})]},v.date.format("YYYY-MM-DD")))})};return d.jsxs(zg,{children:[d.jsxs(Vg,{children:[d.jsxs(Ia,{children:[d.jsx(Ie,{onClick:o,variant:"secondary",size:"small","aria-label":t("calendar.previous"),icon:d.jsx(jg,{})}),d.jsx(Ie,{onClick:l,variant:"secondary",size:"small","aria-label":t("calendar.next"),icon:d.jsx(Eg,{})}),d.jsx(Ie,{onClick:c,variant:"primary",size:"small",icon:d.jsx(gr,{}),children:t("calendar.today")})]}),d.jsx(Ug,{children:h()}),d.jsxs(Ia,{children:[s==="week"&&d.jsxs(Wg,{children:[d.jsxs("label",{htmlFor:"time-scale",children:[t("calendar.timeScale"),":"]}),d.jsxs("select",{id:"time-scale",value:i,onChange:u,children:[d.jsxs("option",{value:60,children:["60 ",t("calendar.minutes")]}),d.jsxs("option",{value:30,children:["30 ",t("calendar.minutes")]}),d.jsxs("option",{value:10,children:["10 ",t("calendar.minutes")]})]})]}),d.jsx(Ie,{onClick:()=>e(a),variant:"primary",size:"small",icon:d.jsx(ti,{}),children:t("calendar.addEvent")})]})]}),d.jsx(Hg,{children:d.jsx(ty,{currentView:s})}),f()]})},ny=g.div`
  display: flex;
  height: calc(100vh - 200px);
  min-height: 600px;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background-color: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  margin: 0.5rem;
  padding: 0.75rem;
`,sy=g.div`
  width: 70px;
  overflow-y: auto;
  background-color: ${({theme:e})=>e.mode==="light"?"transparent":e.colors.background.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.xs};
  margin-right: 12px;
  padding: 4px 0;
  scrollbar-width: thin;
  border-right: 1px solid ${({theme:e})=>e.colors.border.default};
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.colors.border.default};
    border-radius: ${({theme:e})=>e.borderRadius.xs};
  }
  
  transition: all 0.2s ease;
`,iy=g.div`
  height: 60px;
  padding: 4px 10px;
  text-align: right;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20%;
    right: 0;
    height: 1px;
    background-color: ${({theme:e})=>`${e.colors.border.primary}15`};
  }
`,ay=g.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
  background-color: ${({theme:e})=>e.mode==="light"?"#fffdf7":e.colors.background.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  box-shadow: ${({theme:e})=>e.mode==="light"?"rgba(149, 157, 165, 0.1) 0px 1px 3px 0px":"none"};
  transition: all 0.3s ease;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.colors.border.default};
    border-radius: ${({theme:e})=>e.borderRadius.xs};
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.mode==="light"?"rgba(149, 157, 165, 0.15) 0px 3px 6px 0px":"rgba(0, 0, 0, 0.2) 0px 2px 5px 0px"};
  }
`,oy=g.div`
  height: 60px;
  border-bottom: 1px dashed ${({theme:e})=>e.mode==="light"?e.colors.border.primary+"30":e.colors.border.default+"70"};
  position: relative;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.mode==="light"?"rgba(245, 242, 232, 0.5)":"rgba(22, 27, 34, 0.3)"};
  }
  
  ${({isCurrentTime:e,theme:t})=>e&&`
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: ${t.colors.primary};
      z-index: 1;
    }
  `}
`,ly=g.div`
  position: absolute;
  top: ${({$top:e})=>e};
  height: ${({$height:e})=>e};
  left: 16px;
  right: 16px;
  background-color: ${({$color:e})=>`${e}CC`};
  color: white;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  padding: 10px 14px;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  overflow: hidden;
  cursor: pointer;
  z-index: 2;
  box-shadow: ${({$color:e,theme:t})=>t.mode==="light"?`0 2px 8px ${e}40`:`0 3px 10px ${e}60`};
  border-left: 3px solid ${({$color:e})=>e};
  backdrop-filter: blur(4px);
  transition: all 0.25s ease;
  
  &:hover {
    box-shadow: 0 4px 12px ${({$color:e})=>`${e}60`};
    transform: translateY(-2px) scale(1.01);
  }
  
  .event-time {
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.95;
    margin-bottom: 6px;
  }
  
  .event-title {
    font-weight: 500;
    margin-bottom: 6px;
    letter-spacing: 0.01em;
  }
  
  .event-description {
    font-size: 0.8rem;
    opacity: 0.9;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.4;
  }
`,cy=g.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${({theme:e})=>e.colors.primary};
  z-index: 3;
  box-shadow: 0 0 8px ${({theme:e})=>`${e.colors.primary}80`};
  
  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: -4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 6px ${({theme:e})=>`${e.colors.primary}CC`};
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${({theme:e})=>`${e.colors.primary}80`};
    }
    70% {
      box-shadow: 0 0 0 6px ${({theme:e})=>`${e.colors.primary}00`};
    }
    100% {
      box-shadow: 0 0 0 0 ${({theme:e})=>`${e.colors.primary}00`};
    }
  }
`,dy=g.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme:e})=>e.colors.text.muted};
  text-align: center;
  
  svg {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    opacity: 0.5;
  }
  
  p {
    margin: 0;
    font-size: 0.875rem;
  }
`,uy=g.div`
  padding: 16px 20px;
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
  border-bottom: 1px solid ${({theme:e})=>`${e.colors.border.primary}30`};
  background-color: ${({theme:e})=>`${e.colors.background.primary}`};
  backdrop-filter: blur(4px);
  letter-spacing: 0.01em;
  position: sticky;
  top: 0;
  z-index: 4;
`,fy=({currentDate:e,onEventClick:t})=>{const{t:r}=We(),n=Qe(hs),s=Qe(Ni),i=V.useRef(null),a=V.useRef(null),[o,l]=V.useState("0"),[c,u]=V.useState(0),h=Hl(s),f=n.filter(v=>_(v.date).format("YYYY-MM-DD")===e.format("YYYY-MM-DD")).sort((v,y)=>_(v.date).valueOf()-_(y.date).valueOf());V.useEffect(()=>{const v=i.current,y=a.current;if(!v||!y)return;const w=()=>{y&&(y.scrollTop=v.scrollTop)},j=()=>{v&&(v.scrollTop=y.scrollTop)};return v.addEventListener("scroll",w),y.addEventListener("scroll",j),()=>{v.removeEventListener("scroll",w),y.removeEventListener("scroll",j)}},[]),V.useEffect(()=>{const v=()=>{const w=_(),j=w.clone().startOf("day"),$=w.diff(j,"minutes"),I=24*60,T=$/I*100;l(`${T}%`);const P=60,F=60,W=w.hours(),be=w.minutes(),oe=W*P+be/F*P;u(oe)};v();const y=setInterval(v,6e4);return()=>clearInterval(y)},[]),V.useEffect(()=>{(()=>{if(i.current&&c>0){const y=c-200;i.current.scrollTop=Math.max(0,y)}})()},[c]);const x=e.format("YYYY-MM-DD")===_().format("YYYY-MM-DD");return d.jsxs(ny,{children:[d.jsx(sy,{ref:i,children:h.map((v,y)=>d.jsx(iy,{children:v},`time-${y}`))}),d.jsxs(ay,{ref:a,children:[d.jsx(uy,{children:e.format("dddd, D MMMM YYYY")}),h.map((v,y)=>d.jsx(oy,{isCurrentTime:x&&v===_().format("HH:mm")},`cell-${y}`)),f.map(v=>{const{top:y,height:w}=Wl(v),j=_(v.date).format("HH:mm");return d.jsxs(ly,{$top:y,$height:w,$color:v.color||"#1890ff",onClick:()=>t(v),children:[d.jsx("div",{className:"event-time",children:j}),d.jsx("div",{className:"event-title",children:v.title}),v.description&&d.jsx("div",{className:"event-description",children:v.description})]},v.id)}),x&&d.jsx(cy,{style:{top:o}}),f.length===0&&d.jsxs(dy,{children:[d.jsx(gr,{}),d.jsx("p",{children:r("calendar.noEventsForDay")})]})]})]})},hy=g.div`
  display: flex;
  height: calc(100vh - 200px);
  min-height: 600px;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background-color: ${({theme:e})=>e.mode==="light"?"#fffdf7":e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  margin: 0.5rem;
  padding: 0.5rem;
  transition: all 0.3s ease;
`,py=g.div`
  width: 70px;
  overflow-y: auto;
  background-color: ${({theme:e})=>e.mode==="light"?"#f8f6f1":e.colors.background.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.xs};
  margin-right: 10px;
  padding: 4px 0;
  scrollbar-width: thin;
  border-right: 1px solid ${({theme:e})=>e.colors.border.default};
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.colors.border.default};
    border-radius: ${({theme:e})=>e.borderRadius.xs};
  }
  
  transition: all 0.2s ease;
`,my=g.div`
  height: 60px;
  padding: 4px 10px;
  text-align: right;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  position: relative;
  display: ${({visible:e=!0})=>e?"flex":"none"};
  align-items: flex-start;
  justify-content: flex-end;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20%;
    right: 0;
    height: 1px;
    background-color: ${({theme:e})=>`${e.colors.border.primary}15`};
  }
`,gy=g.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 8px;
  padding-right: 6px;
  background-color: ${({theme:e})=>e.mode==="light"?"#fcf9f2":e.colors.background.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.xs};
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.colors.border.default};
    border-radius: ${({theme:e})=>e.borderRadius.xs};
  }
  
  transition: all 0.2s ease;
`,yy=g.div`
  flex: 1;
  min-width: 120px;
  background-color: ${({isToday:e,theme:t})=>e?t.mode==="light"?"#f5f2e8":t.colors.background.primary+"60":"transparent"};
  border-radius: ${({theme:e})=>e.borderRadius.xs};
  border: ${({isToday:e,theme:t})=>e?`1px solid ${t.colors.accent.primary}30`:"none"};
  position: relative;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({isToday:e,theme:t})=>e?t.mode==="light"?"#f0ece0":t.colors.background.primary+"80":t.mode==="light"?"#f8f5eb":t.colors.background.primary+"20"};
  }
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.mode==="light"?"rgba(149, 157, 165, 0.1) 0px 1px 3px 0px":"none"};
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:last-child {
    margin-right: 0;
  }
`,vy=g.div`
  height: 60px;
  border-bottom: 1px dashed ${({theme:e})=>e.mode==="light"?"rgba(149, 157, 165, 0.2)":"rgba(110, 118, 129, 0.4)"};
  position: relative;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.mode==="light"?"rgba(245, 242, 232, 0.5)":"rgba(22, 27, 34, 0.3)"};
  }
  
  ${({isCurrentTime:e,theme:t})=>e&&`
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: ${t.colors.primary};
      z-index: 1;
    }
  `}
`,xy=g.div`
  position: absolute;
  top: ${({$top:e})=>e};
  height: ${({$height:e})=>e};
  left: ${({$left:e})=>e||"10%"};
  width: ${({$width:e})=>e||"80%"};
  background-color: ${({$color:e})=>e};
  color: white;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 0.875rem;
  overflow: hidden;
  cursor: pointer;
  z-index: 5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  display: block;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px) scale(1.02);
  }
  
  .event-time {
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.95;
    margin-bottom: 2px;
  }
  
  .event-title {
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 0.01em;
  }
`,by=g.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${({theme:e})=>e.colors.primary};
  z-index: 3;
  box-shadow: 0 0 8px ${({theme:e})=>`${e.colors.primary}80`};
  
  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: -4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 6px ${({theme:e})=>`${e.colors.primary}CC`};
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${({theme:e})=>`${e.colors.primary}80`};
    }
    70% {
      box-shadow: 0 0 0 6px ${({theme:e})=>`${e.colors.primary}00`};
    }
    100% {
      box-shadow: 0 0 0 0 ${({theme:e})=>`${e.colors.primary}00`};
    }
  }
`,_y=g.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme:e})=>e.colors.text.muted};
  text-align: center;
  
  svg {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    opacity: 0.5;
  }
  
  p {
    margin: 0;
    font-size: 0.875rem;
  }
`,Fa=({currentDate:e,onEventClick:t})=>{const{t:r}=We(),n=Qe(hs),s=Qe(Ni),i=V.useRef(null),a=V.useRef(null),[o,l]=V.useState("0"),[c,u]=V.useState(0),h=ri(e),f=Hl(s);V.useEffect(()=>{const v=i.current,y=a.current;if(!v||!y)return;const w=()=>{y&&(y.scrollTop=v.scrollTop)},j=()=>{v&&(v.scrollTop=y.scrollTop)};return v.addEventListener("scroll",w),y.addEventListener("scroll",j),()=>{v.removeEventListener("scroll",w),y.removeEventListener("scroll",j)}},[]),V.useEffect(()=>{const v=()=>{const w=_(),j=w.clone().startOf("day"),$=w.diff(j,"minutes"),I=24*60,T=$/I*100;l(`${T}%`);const P=60,F=60,W=w.hours(),be=w.minutes(),oe=W*P+be/F*P;u(oe)};v();const y=setInterval(v,6e4);return()=>clearInterval(y)},[]),V.useEffect(()=>{(()=>{if(i.current&&c>0){const y=c-200;i.current.scrollTop=Math.max(0,y)}})()},[c]);const x=(v,y)=>{if(!v.length)return[];const w=[...v].sort((I,T)=>_(I.date).valueOf()-_(T.date).valueOf()),j=[];let $=[w[0]];for(let I=1;I<w.length;I++){const T=w[I],P=w[I-1],F=_(T.date),W=_(P.date).add(P.duration,"minutes");F.isBefore(W)?$.push(T):(j.push([...$]),$=[T])}return $.length>0&&j.push($),w.map(I=>{const T=j.find(_e=>_e.includes(I));if(!T)return null;const P=T.indexOf(I),F=T.length,W=`${100/F}%`,be=`${P*(100/F)}%`,{top:oe,height:Pe}=Wl(I);return{$top:oe,$height:Pe,$left:be,$width:W,$color:I.color||"#1890ff",event:I}}).filter(Boolean)};return d.jsxs(hy,{children:[d.jsx(py,{ref:i,children:f.map((v,y)=>d.jsx(my,{children:v},`time-${y}`))}),d.jsx(gy,{ref:a,children:h.map(v=>{const y=v.date,w=n.filter(I=>_(I.date).format("YYYY-MM-DD")===y.format("YYYY-MM-DD")),j=x(w),$=v.isToday;return d.jsxs(yy,{isToday:$,children:[f.map((I,T)=>d.jsx(vy,{isCurrentTime:$&&I===_().format("HH:mm")},`cell-${T}`)),j&&j.map(I=>{if(!I)return null;const{event:T,...P}=I,F=_(T.date).format("HH:mm");return d.jsxs(xy,{...P,onClick:()=>t(T),children:[d.jsx("div",{className:"event-time",children:F}),d.jsx("div",{className:"event-title",children:T.title})]},T.id)}),$&&d.jsx(by,{style:{top:o}}),w.length===0&&d.jsxs(_y,{children:[d.jsx(gr,{}),d.jsx("p",{children:r("calendar.noEvents")})]})]},y.format("YYYY-MM-DD"))})})]})},wy=g.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  min-height: 600px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  background: ${({theme:e})=>e.colors.surface};
  margin: 0.5rem;
  transition: all 0.3s ease;
`,ky=g.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  flex: 1;
  overflow: hidden;
  border-top: 1px solid ${({theme:e})=>e.colors.border.default};
  background: ${({theme:e})=>e.mode==="light"?"#f8f6f1":e.colors.background.secondary}; /* Toni panna per light mode come richiesto */
  gap: 1px; /* Spazio sottile tra le celle, stile Ant Design */
`;g.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: ${({theme:e})=>e.mode==="light"?"#fffdf7":e.colors.surface};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
  border-top-left-radius: ${({theme:e})=>e.borderRadius.sm};
  border-top-right-radius: ${({theme:e})=>e.borderRadius.sm};
  padding: 8px 0; /* Spaziatura in stile Ant Design */
`;g.div`
  padding: 8px 0;
  text-align: center;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({isWeekend:e,theme:t})=>e?t.colors.accent.primary:t.colors.text.primary}; /* Accento colorato per i weekend, stile Ant Design */
  transition: all 0.3s ease;
  
  &:last-child {
    border-right: none;
  }
  
  /* Effetto hover in stile Ant Design */
  &:hover {
    color: ${({theme:e})=>e.colors.accent.primary};
  }
`;const Sy=g.div`
  position: relative;
  border-right: 1px solid ${({theme:e})=>e.colors.border.default};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
  padding: 8px 10px;
  overflow: hidden;
  height: 100%;
  transition: all 0.2s ease;
  background-color: ${({isCurrentMonth:e,isToday:t,isWeekend:r,theme:n})=>t?n.mode==="light"?`${n.colors.accent.primary}15`:`${n.colors.accent.primary}20`:e?r?n.mode==="light"?"#f8f5eb":"#141619":n.mode==="light"?"#fffdf7":"#161b22":n.mode==="light"?"#f5f2e8":"#121418"};
  
  &:hover {
    background-color: ${({theme:e,isCurrentMonth:t})=>t?e.mode==="light"?"#f0ece0":"#1d2128":e.mode==="light"?"#f0ece080":"#1a1e2480"};
    box-shadow: ${({theme:e})=>e.mode==="light"?"rgba(149, 157, 165, 0.1) 0px 1px 3px 0px":"none"};
  }
  
  &:last-child {
    border-right: none;
  }
`,$y=g.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({isToday:e,theme:t})=>e?t.typography.fontWeight.semibold:t.typography.fontWeight.regular};
  color: ${({isToday:e,isCurrentMonth:t,theme:r})=>e?r.colors.accent.primary:t?r.colors.text.primary:r.colors.text.muted};
  border-radius: 50%;
  margin-bottom: 4px;
  transition: all 0.2s ease;
  
  /* Stile Ant Design per il numero del giorno corrente */
  ${({isToday:e,theme:t})=>e&&`
    background-color: ${t.mode==="light"?t.colors.accent.primary+"15":t.colors.accent.primary+"25"};
    border: 1px solid ${t.colors.accent.primary};
    transform: scale(1.05);
  `}
  
  /* Hover in stile Ant Design */
  &:hover {
    background-color: ${({theme:e,isToday:t})=>t?"transparent":e.mode==="light"?e.colors.accent.primary+"10":e.colors.accent.primary+"15"};
  }
`,Ty=g.button`
  background: transparent;
  border: 1px solid transparent;
  color: ${({theme:e})=>e.colors.accent.primary};
  cursor: pointer;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  opacity: 0.8;
  transition: all 0.2s ease;
  position: absolute;
  top: 5px;
  right: 5px;
  
  &:hover {
    background-color: ${({theme:e})=>e.mode==="light"?e.colors.accent.primary+"15":e.colors.accent.primary+"25"};
    border-color: ${({theme:e})=>e.colors.accent.primary+"50"};
    opacity: 1;
    transform: rotate(90deg); /* Effetto di rotazione in stile Ant Design */
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.accent.primary+"30"};
  }
`,Oy=g.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: all 0.2s ease;
`,Cy=g.div`
  background-color: ${({$color:e,theme:t})=>e||t.colors.accent.primary};
  color: white;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  padding: 4px 10px;
  margin-bottom: 3px;
  border-radius: ${({theme:e})=>e.borderRadius.xs};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  box-shadow: ${({theme:e})=>e.mode==="light"?"0 1px 3px rgba(0, 0, 0, 0.12)":"none"};
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  width: calc(100% - 4px);
  z-index: 1;
  position: relative;
  border-left: 3px solid ${({$color:e,theme:t})=>e||t.colors.accent.primary};
  opacity: 0.92;
  
  /* Stile GitHub con tocco Ant Design */
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: white;
    margin-right: 5px;
    display: inline-block;
    opacity: 0.8;
  }
  
  &:hover {
    transform: translateY(-1px) scale(1.01);
    box-shadow: ${({theme:e})=>e.mode==="light"?"0 3px 6px rgba(0, 0, 0, 0.16)":"0 2px 5px rgba(0, 0, 0, 0.25)"};
    opacity: 1;
  }
  
  &:active {
    transform: translateY(0) scale(0.99);
  }
`,My=g.button`
  background-color: ${({theme:e})=>e.colors.background.secondary};
  border: 1px solid ${({theme:e})=>e.colors.border.light};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 0.7rem;
  padding: 2px 4px;
  border-radius: 4px;
  margin-top: 2px;
  cursor: pointer;
  text-align: center;
  
  &:hover {
    background-color: ${({theme:e})=>`${e.colors.primary}08`};
  }
`,Dy=({currentDate:e,onEventClick:t,onAddEvent:r})=>{const{t:n}=We(),s=Qe(hs),[i,a]=V.useState(null),o=Yg(e),l=h=>s.filter(f=>_(f.date).format("YYYY-MM-DD")===h.format("YYYY-MM-DD")).sort((f,x)=>_(f.date).diff(_(x.date))),c=(h,f)=>{const v=i===f?1/0:3;return h.slice(0,v)},u=h=>{a(i===h?null:h)};return d.jsx(wy,{children:d.jsx(ky,{children:o.map((h,f)=>{const x=h.date.format("YYYY-MM-DD"),v=l(h.date),y=c(v,x),w=v.length>y.length,j=h.date.day(),$=j===0||j===6;return d.jsxs(Sy,{isCurrentMonth:h.isCurrentMonth,isToday:h.isToday,isWeekend:$,children:[d.jsxs("div",{className:"day-header",style:{opacity:h.isCurrentMonth?1:.5},children:[d.jsx($y,{isToday:h.isToday,isCurrentMonth:h.isCurrentMonth,children:h.date.format("D")}),h.isCurrentMonth&&d.jsx(Ty,{onClick:()=>r(h.date),"aria-label":n("calendar.addEvent"),children:d.jsx(ti,{})})]}),h.isCurrentMonth&&d.jsxs(Oy,{children:[y.map(I=>d.jsxs(Cy,{$color:I.color||"#1890ff",onClick:()=>t(I),children:[_(I.date).format("HH:mm")," ",I.title]},I.id)),w&&d.jsx(My,{onClick:()=>u(x),children:i===x?n("calendar.showLess"):n("calendar.showMore",{count:v.length-y.length})})]})]},x)})})})},jy=g.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme:e})=>e.mode==="dark"?"rgba(0, 0, 0, 0.85)":"rgba(0, 0, 0, 0.7)"};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  padding: 0 1rem;
  isolation: isolate;
  contain: layout;
  will-change: transform;
  -webkit-transform: translate3d(0, 0, 0);
`,Ey=g.div`
  background-color: ${({theme:e})=>e.mode==="light"?"#fffdf7":e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>e.mode==="dark"?"0 12px 40px rgba(0, 0, 0, 0.5)":"0 12px 40px rgba(0, 0, 0, 0.25)"};
  width: 100%;
  max-width: 550px;
  overflow: hidden;
  animation: modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  isolation: isolate;
  backface-visibility: hidden;
  transform: translateZ(0);
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  opacity: 1 !important;
  -webkit-transform: translate3d(0, 0, 0);
  will-change: transform;
  contain: content;
  
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`,Ay=g.div`
  padding: 1.5rem 1.75rem;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.background.primary};
  position: relative;
  z-index: 10;
  contain: content;
  -webkit-transform: translate3d(0, 0, 0);
  opacity: 1 !important;
  
  h2 {
    margin: 0;
    font-size: 1.375rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.text.primary};
    letter-spacing: -0.01em;
  }
  
  button {
    background: transparent;
    border: none;
    color: ${({theme:e})=>e.colors.text.secondary};
    cursor: pointer;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    transition: all 0.2s ease;
    
    &:hover {
      color: ${({theme:e})=>e.colors.text.primary};
      background-color: ${({theme:e})=>e.colors.background.secondary};
    }
  }
`,Py=g.div`
  padding: 1.75rem;
  background-color: ${({theme:e})=>e.colors.background.primary};
  max-height: calc(85vh - 180px);
  overflow-y: auto;
  position: relative;
  z-index: 5;
  contain: content;
  -webkit-transform: translate3d(0, 0, 0);
  opacity: 1 !important;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.colors.border.primary};
    border-radius: 6px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`,yn=g.span`
  color: #f5222d;
  font-size: 0.75rem;
  margin-top: 0.375rem;
  display: block;
  font-weight: 500;
`,Ut=g.div`
  margin-bottom: 0;
  position: relative;
  
  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text.primary};
    
    svg {
      color: ${({theme:e})=>e.colors.primary};
    }
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 1px solid ${({theme:e})=>e.colors.border.primary};
    border-radius: 8px;
    background-color: ${({theme:e})=>e.colors.background.primary};
    color: ${({theme:e})=>e.colors.text.primary};
    font-size: 1rem;
    transition: all 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: ${({theme:e})=>e.colors.primary};
      box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.1);
    }
    
    &::placeholder {
      color: ${({theme:e})=>e.colors.text.secondary};
      opacity: 0.7;
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
    line-height: 1.5;
  }
`,Ry=g.div`
  display: flex;
  gap: 1rem;
  
  ${Ut} {
    flex: 1;
  }
`,Ly=g.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,Ny=g.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({$color:e})=>e};
  border: 2px solid ${({$selected:e,$color:t,theme:r})=>e?r.colors.text.primary:"transparent"};
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    box-shadow: ${({$selected:e})=>e?"0 0 0 2px white inset":"none"};
    opacity: ${({$selected:e})=>e?1:0};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.15);
  }
`,Iy=g.div`
  padding: 1.25rem 1.75rem;
  border-top: 1px solid ${({theme:e})=>e.colors.border.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.background.primary};
  position: relative;
  z-index: 10;
  contain: content;
  -webkit-transform: translate3d(0, 0, 0);
  opacity: 1 !important;
`,Fy=g.div`
  display: flex;
  gap: 1rem;
`,Yy=g.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  input {
    width: 80px;
  }
  
  span {
    color: ${({theme:e})=>e.colors.text.secondary};
    font-size: 0.9rem;
    font-weight: 500;
  }
`;var fn=e=>e.type==="checkbox",Wt=e=>e instanceof Date,je=e=>e==null;const Zl=e=>typeof e=="object";var me=e=>!je(e)&&!Array.isArray(e)&&Zl(e)&&!Wt(e),Bl=e=>me(e)&&e.target?fn(e.target)?e.target.checked:e.target.value:e,zy=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Gl=(e,t)=>e.has(zy(t)),Vy=e=>{const t=e.constructor&&e.constructor.prototype;return me(t)&&t.hasOwnProperty("isPrototypeOf")},Gi=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ke(e){let t;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Gi&&(e instanceof Blob||n))&&(r||me(e)))if(t=r?[]:{},!r&&!Vy(e))t=e;else for(const s in e)e.hasOwnProperty(s)&&(t[s]=ke(e[s]));else return e;return t}var ms=e=>Array.isArray(e)?e.filter(Boolean):[],pe=e=>e===void 0,M=(e,t,r)=>{if(!t||!me(e))return r;const n=ms(t.split(/[,[\].]+?/)).reduce((s,i)=>je(s)?s:s[i],e);return pe(n)||n===e?pe(e[t])?r:e[t]:n},Ne=e=>typeof e=="boolean",Ki=e=>/^\w*$/.test(e),Kl=e=>ms(e.replace(/["|']|\]/g,"").split(/\.|\[/)),se=(e,t,r)=>{let n=-1;const s=Ki(t)?[t]:Kl(t),i=s.length,a=i-1;for(;++n<i;){const o=s[n];let l=r;if(n!==a){const c=e[o];l=me(c)||Array.isArray(c)?c:isNaN(+s[n+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=l,e=e[o]}};const Fn={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Be={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},yt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Uy=z.createContext(null),qi=()=>z.useContext(Uy);var ql=(e,t,r,n=!0)=>{const s={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(s,i,{get:()=>{const a=i;return t._proxyFormState[a]!==Be.all&&(t._proxyFormState[a]=!n||Be.all),r&&(r[a]=!0),e[a]}});return s};function Hy(e){const t=qi(),{control:r=t.control,disabled:n,name:s,exact:i}=e||{},[a,o]=z.useState(r._formState),l=z.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=z.useRef(s);return c.current=s,z.useEffect(()=>r._subscribe({name:c.current,formState:l.current,exact:i,callback:u=>{!n&&o({...r._formState,...u})}}),[r,n,i]),z.useEffect(()=>{l.current.isValid&&r._setValid(!0)},[r]),z.useMemo(()=>ql(a,r,l.current,!1),[a,r])}var ot=e=>typeof e=="string",Jl=(e,t,r,n,s)=>ot(e)?(n&&t.watch.add(e),M(r,e,s)):Array.isArray(e)?e.map(i=>(n&&t.watch.add(i),M(r,i))):(n&&(t.watchAll=!0),r);function Wy(e){const t=qi(),{control:r=t.control,name:n,defaultValue:s,disabled:i,exact:a}=e||{},o=z.useRef(n),l=z.useRef(s);o.current=n,z.useEffect(()=>r._subscribe({name:o.current,formState:{values:!0},exact:a,callback:h=>!i&&u(Jl(o.current,r._names,h.values||r._formValues,!1,l.current))}),[r,i,a]);const[c,u]=z.useState(r._getWatch(n,s));return z.useEffect(()=>r._removeUnmounted()),c}function Zy(e){const t=qi(),{name:r,disabled:n,control:s=t.control,shouldUnregister:i}=e,a=Gl(s._names.array,r),o=Wy({control:s,name:r,defaultValue:M(s._formValues,r,M(s._defaultValues,r,e.defaultValue)),exact:!0}),l=Hy({control:s,name:r,exact:!0}),c=z.useRef(e),u=z.useRef(s.register(r,{...e.rules,value:o,...Ne(e.disabled)?{disabled:e.disabled}:{}})),h=z.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!M(l.errors,r)},isDirty:{enumerable:!0,get:()=>!!M(l.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!M(l.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!M(l.validatingFields,r)},error:{enumerable:!0,get:()=>M(l.errors,r)}}),[l,r]),f=z.useCallback(w=>u.current.onChange({target:{value:Bl(w),name:r},type:Fn.CHANGE}),[r]),x=z.useCallback(()=>u.current.onBlur({target:{value:M(s._formValues,r),name:r},type:Fn.BLUR}),[r,s._formValues]),v=z.useCallback(w=>{const j=M(s._fields,r);j&&w&&(j._f.ref={focus:()=>w.focus(),select:()=>w.select(),setCustomValidity:$=>w.setCustomValidity($),reportValidity:()=>w.reportValidity()})},[s._fields,r]),y=z.useMemo(()=>({name:r,value:o,...Ne(n)||l.disabled?{disabled:l.disabled||n}:{},onChange:f,onBlur:x,ref:v}),[r,n,l.disabled,f,x,v,o]);return z.useEffect(()=>{const w=s._options.shouldUnregister||i;s.register(r,{...c.current.rules,...Ne(c.current.disabled)?{disabled:c.current.disabled}:{}});const j=($,I)=>{const T=M(s._fields,$);T&&T._f&&(T._f.mount=I)};if(j(r,!0),w){const $=ke(M(s._options.defaultValues,r));se(s._defaultValues,r,$),pe(M(s._formValues,r))&&se(s._formValues,r,$)}return!a&&s.register(r),()=>{(a?w&&!s._state.action:w)?s.unregister(r):j(r,!1)}},[r,s,a,i]),z.useEffect(()=>{s._setDisabledField({disabled:n,name:r})},[n,r,s]),z.useMemo(()=>({field:y,formState:l,fieldState:h}),[y,l,h])}const By=e=>e.render(Zy(e));var Ql=(e,t,r,n,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:s||!0}}:{},Ir=e=>Array.isArray(e)?e:[e],Ya=()=>{let e=[];return{get observers(){return e},next:s=>{for(const i of e)i.next&&i.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(i=>i!==s)}}),unsubscribe:()=>{e=[]}}},ni=e=>je(e)||!Zl(e);function Dt(e,t){if(ni(e)||ni(t))return e===t;if(Wt(e)&&Wt(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const s of r){const i=e[s];if(!n.includes(s))return!1;if(s!=="ref"){const a=t[s];if(Wt(i)&&Wt(a)||me(i)&&me(a)||Array.isArray(i)&&Array.isArray(a)?!Dt(i,a):i!==a)return!1}}return!0}var De=e=>me(e)&&!Object.keys(e).length,Ji=e=>e.type==="file",Ge=e=>typeof e=="function",Yn=e=>{if(!Gi)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Xl=e=>e.type==="select-multiple",Qi=e=>e.type==="radio",Gy=e=>Qi(e)||fn(e),Es=e=>Yn(e)&&e.isConnected;function Ky(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=pe(e)?n++:e[t[n++]];return e}function qy(e){for(const t in e)if(e.hasOwnProperty(t)&&!pe(e[t]))return!1;return!0}function ve(e,t){const r=Array.isArray(t)?t:Ki(t)?[t]:Kl(t),n=r.length===1?e:Ky(e,r),s=r.length-1,i=r[s];return n&&delete n[i],s!==0&&(me(n)&&De(n)||Array.isArray(n)&&qy(n))&&ve(e,r.slice(0,-1)),e}var ec=e=>{for(const t in e)if(Ge(e[t]))return!0;return!1};function zn(e,t={}){const r=Array.isArray(e);if(me(e)||r)for(const n in e)Array.isArray(e[n])||me(e[n])&&!ec(e[n])?(t[n]=Array.isArray(e[n])?[]:{},zn(e[n],t[n])):je(e[n])||(t[n]=!0);return t}function tc(e,t,r){const n=Array.isArray(e);if(me(e)||n)for(const s in e)Array.isArray(e[s])||me(e[s])&&!ec(e[s])?pe(t)||ni(r[s])?r[s]=Array.isArray(e[s])?zn(e[s],[]):{...zn(e[s])}:tc(e[s],je(t)?{}:t[s],r[s]):r[s]=!Dt(e[s],t[s]);return r}var Cr=(e,t)=>tc(e,t,zn(t));const za={value:!1,isValid:!1},Va={value:!0,isValid:!0};var rc=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!pe(e[0].attributes.value)?pe(e[0].value)||e[0].value===""?Va:{value:e[0].value,isValid:!0}:Va:za}return za},nc=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>pe(e)?e:t?e===""?NaN:e&&+e:r&&ot(e)?new Date(e):n?n(e):e;const Ua={isValid:!1,value:null};var sc=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,Ua):Ua;function Ha(e){const t=e.ref;return Ji(t)?t.files:Qi(t)?sc(e.refs).value:Xl(t)?[...t.selectedOptions].map(({value:r})=>r):fn(t)?rc(e.refs).value:nc(pe(t.value)?e.ref.value:t.value,e)}var Jy=(e,t,r,n)=>{const s={};for(const i of e){const a=M(t,i);a&&se(s,i,a._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:n}},Vn=e=>e instanceof RegExp,Mr=e=>pe(e)?e:Vn(e)?e.source:me(e)?Vn(e.value)?e.value.source:e.value:e,Wa=e=>({isOnSubmit:!e||e===Be.onSubmit,isOnBlur:e===Be.onBlur,isOnChange:e===Be.onChange,isOnAll:e===Be.all,isOnTouch:e===Be.onTouched});const Za="AsyncFunction";var Qy=e=>!!e&&!!e.validate&&!!(Ge(e.validate)&&e.validate.constructor.name===Za||me(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Za)),Xy=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Ba=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const Fr=(e,t,r,n)=>{for(const s of r||Object.keys(e)){const i=M(e,s);if(i){const{_f:a,...o}=i;if(a){if(a.refs&&a.refs[0]&&t(a.refs[0],s)&&!n)return!0;if(a.ref&&t(a.ref,a.name)&&!n)return!0;if(Fr(o,t))break}else if(me(o)&&Fr(o,t))break}}};function Ga(e,t,r){const n=M(e,r);if(n||Ki(r))return{error:n,name:r};const s=r.split(".");for(;s.length;){const i=s.join("."),a=M(t,i),o=M(e,i);if(a&&!Array.isArray(a)&&r!==i)return{name:r};if(o&&o.type)return{name:i,error:o};s.pop()}return{name:r}}var e0=(e,t,r,n)=>{r(e);const{name:s,...i}=e;return De(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(a=>t[a]===(!n||Be.all))},t0=(e,t,r)=>!e||!t||e===t||Ir(e).some(n=>n&&(r?n===t:n.startsWith(t)||t.startsWith(n))),r0=(e,t,r,n,s)=>s.isOnAll?!1:!r&&s.isOnTouch?!(t||e):(r?n.isOnBlur:s.isOnBlur)?!e:(r?n.isOnChange:s.isOnChange)?e:!0,n0=(e,t)=>!ms(M(e,t)).length&&ve(e,t),s0=(e,t,r)=>{const n=Ir(M(e,r));return se(n,"root",t[r]),se(e,r,n),e},En=e=>ot(e);function Ka(e,t,r="validate"){if(En(e)||Array.isArray(e)&&e.every(En)||Ne(e)&&!e)return{type:r,message:En(e)?e:"",ref:t}}var nr=e=>me(e)&&!Vn(e)?e:{value:e,message:""},qa=async(e,t,r,n,s,i)=>{const{ref:a,refs:o,required:l,maxLength:c,minLength:u,min:h,max:f,pattern:x,validate:v,name:y,valueAsNumber:w,mount:j}=e._f,$=M(r,y);if(!j||t.has(y))return{};const I=o?o[0]:a,T=ne=>{s&&I.reportValidity&&(I.setCustomValidity(Ne(ne)?"":ne||""),I.reportValidity())},P={},F=Qi(a),W=fn(a),be=F||W,oe=(w||Ji(a))&&pe(a.value)&&pe($)||Yn(a)&&a.value===""||$===""||Array.isArray($)&&!$.length,Pe=Ql.bind(null,y,n,P),_e=(ne,q,ae,ge=yt.maxLength,we=yt.minLength)=>{const Re=ne?q:ae;P[y]={type:ne?ge:we,message:Re,ref:a,...Pe(ne?ge:we,Re)}};if(i?!Array.isArray($)||!$.length:l&&(!be&&(oe||je($))||Ne($)&&!$||W&&!rc(o).isValid||F&&!sc(o).isValid)){const{value:ne,message:q}=En(l)?{value:!!l,message:l}:nr(l);if(ne&&(P[y]={type:yt.required,message:q,ref:I,...Pe(yt.required,q)},!n))return T(q),P}if(!oe&&(!je(h)||!je(f))){let ne,q;const ae=nr(f),ge=nr(h);if(!je($)&&!isNaN($)){const we=a.valueAsNumber||$&&+$;je(ae.value)||(ne=we>ae.value),je(ge.value)||(q=we<ge.value)}else{const we=a.valueAsDate||new Date($),Re=st=>new Date(new Date().toDateString()+" "+st),fe=a.type=="time",Le=a.type=="week";ot(ae.value)&&$&&(ne=fe?Re($)>Re(ae.value):Le?$>ae.value:we>new Date(ae.value)),ot(ge.value)&&$&&(q=fe?Re($)<Re(ge.value):Le?$<ge.value:we<new Date(ge.value))}if((ne||q)&&(_e(!!ne,ae.message,ge.message,yt.max,yt.min),!n))return T(P[y].message),P}if((c||u)&&!oe&&(ot($)||i&&Array.isArray($))){const ne=nr(c),q=nr(u),ae=!je(ne.value)&&$.length>+ne.value,ge=!je(q.value)&&$.length<+q.value;if((ae||ge)&&(_e(ae,ne.message,q.message),!n))return T(P[y].message),P}if(x&&!oe&&ot($)){const{value:ne,message:q}=nr(x);if(Vn(ne)&&!$.match(ne)&&(P[y]={type:yt.pattern,message:q,ref:a,...Pe(yt.pattern,q)},!n))return T(q),P}if(v){if(Ge(v)){const ne=await v($,r),q=Ka(ne,I);if(q&&(P[y]={...q,...Pe(yt.validate,q.message)},!n))return T(q.message),P}else if(me(v)){let ne={};for(const q in v){if(!De(ne)&&!n)break;const ae=Ka(await v[q]($,r),I,q);ae&&(ne={...ae,...Pe(q,ae.message)},T(ae.message),n&&(P[y]=ne))}if(!De(ne)&&(P[y]={ref:I,...ne},!n))return P}}return T(!0),P};const i0={mode:Be.onSubmit,reValidateMode:Be.onChange,shouldFocusError:!0};function a0(e={}){let t={...i0,...e},r={submitCount:0,isDirty:!1,isLoading:Ge(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const n={};let s=me(t.defaultValues)||me(t.values)?ke(t.values||t.defaultValues)||{}:{},i=t.shouldUnregister?{}:ke(s),a={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},l,c=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let h={...u};const f={array:Ya(),state:Ya()},x=Wa(t.mode),v=Wa(t.reValidateMode),y=t.criteriaMode===Be.all,w=p=>m=>{clearTimeout(c),c=setTimeout(p,m)},j=async p=>{if(!t.disabled&&(u.isValid||h.isValid||p)){const m=t.resolver?De((await oe()).errors):await _e(n,!0);m!==r.isValid&&f.state.next({isValid:m})}},$=(p,m)=>{!t.disabled&&(u.isValidating||u.validatingFields||h.isValidating||h.validatingFields)&&((p||Array.from(o.mount)).forEach(b=>{b&&(m?se(r.validatingFields,b,m):ve(r.validatingFields,b))}),f.state.next({validatingFields:r.validatingFields,isValidating:!De(r.validatingFields)}))},I=(p,m=[],b,A,C=!0,O=!0)=>{if(A&&b&&!t.disabled){if(a.action=!0,O&&Array.isArray(M(n,p))){const L=b(M(n,p),A.argA,A.argB);C&&se(n,p,L)}if(O&&Array.isArray(M(r.errors,p))){const L=b(M(r.errors,p),A.argA,A.argB);C&&se(r.errors,p,L),n0(r.errors,p)}if((u.touchedFields||h.touchedFields)&&O&&Array.isArray(M(r.touchedFields,p))){const L=b(M(r.touchedFields,p),A.argA,A.argB);C&&se(r.touchedFields,p,L)}(u.dirtyFields||h.dirtyFields)&&(r.dirtyFields=Cr(s,i)),f.state.next({name:p,isDirty:q(p,m),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else se(i,p,m)},T=(p,m)=>{se(r.errors,p,m),f.state.next({errors:r.errors})},P=p=>{r.errors=p,f.state.next({errors:r.errors,isValid:!1})},F=(p,m,b,A)=>{const C=M(n,p);if(C){const O=M(i,p,pe(b)?M(s,p):b);pe(O)||A&&A.defaultChecked||m?se(i,p,m?O:Ha(C._f)):we(p,O),a.mount&&j()}},W=(p,m,b,A,C)=>{let O=!1,L=!1;const ee={name:p};if(!t.disabled){if(!b||A){(u.isDirty||h.isDirty)&&(L=r.isDirty,r.isDirty=ee.isDirty=q(),O=L!==ee.isDirty);const ye=Dt(M(s,p),m);L=!!M(r.dirtyFields,p),ye?ve(r.dirtyFields,p):se(r.dirtyFields,p,!0),ee.dirtyFields=r.dirtyFields,O=O||(u.dirtyFields||h.dirtyFields)&&L!==!ye}if(b){const ye=M(r.touchedFields,p);ye||(se(r.touchedFields,p,b),ee.touchedFields=r.touchedFields,O=O||(u.touchedFields||h.touchedFields)&&ye!==b)}O&&C&&f.state.next(ee)}return O?ee:{}},be=(p,m,b,A)=>{const C=M(r.errors,p),O=(u.isValid||h.isValid)&&Ne(m)&&r.isValid!==m;if(t.delayError&&b?(l=w(()=>T(p,b)),l(t.delayError)):(clearTimeout(c),l=null,b?se(r.errors,p,b):ve(r.errors,p)),(b?!Dt(C,b):C)||!De(A)||O){const L={...A,...O&&Ne(m)?{isValid:m}:{},errors:r.errors,name:p};r={...r,...L},f.state.next(L)}},oe=async p=>{$(p,!0);const m=await t.resolver(i,t.context,Jy(p||o.mount,n,t.criteriaMode,t.shouldUseNativeValidation));return $(p),m},Pe=async p=>{const{errors:m}=await oe(p);if(p)for(const b of p){const A=M(m,b);A?se(r.errors,b,A):ve(r.errors,b)}else r.errors=m;return m},_e=async(p,m,b={valid:!0})=>{for(const A in p){const C=p[A];if(C){const{_f:O,...L}=C;if(O){const ee=o.array.has(O.name),ye=C._f&&Qy(C._f);ye&&u.validatingFields&&$([A],!0);const Se=await qa(C,o.disabled,i,y,t.shouldUseNativeValidation&&!m,ee);if(ye&&u.validatingFields&&$([A]),Se[O.name]&&(b.valid=!1,m))break;!m&&(M(Se,O.name)?ee?s0(r.errors,Se,O.name):se(r.errors,O.name,Se[O.name]):ve(r.errors,O.name))}!De(L)&&await _e(L,m,b)}}return b.valid},ne=()=>{for(const p of o.unMount){const m=M(n,p);m&&(m._f.refs?m._f.refs.every(b=>!Es(b)):!Es(m._f.ref))&&vs(p)}o.unMount=new Set},q=(p,m)=>!t.disabled&&(p&&m&&se(i,p,m),!Dt(ea(),s)),ae=(p,m,b)=>Jl(p,o,{...a.mount?i:pe(m)?s:ot(p)?{[p]:m}:m},b,m),ge=p=>ms(M(a.mount?i:s,p,t.shouldUnregister?M(s,p,[]):[])),we=(p,m,b={})=>{const A=M(n,p);let C=m;if(A){const O=A._f;O&&(!O.disabled&&se(i,p,nc(m,O)),C=Yn(O.ref)&&je(m)?"":m,Xl(O.ref)?[...O.ref.options].forEach(L=>L.selected=C.includes(L.value)):O.refs?fn(O.ref)?O.refs.length>1?O.refs.forEach(L=>(!L.defaultChecked||!L.disabled)&&(L.checked=Array.isArray(C)?!!C.find(ee=>ee===L.value):C===L.value)):O.refs[0]&&(O.refs[0].checked=!!C):O.refs.forEach(L=>L.checked=L.value===C):Ji(O.ref)?O.ref.value="":(O.ref.value=C,O.ref.type||f.state.next({name:p,values:ke(i)})))}(b.shouldDirty||b.shouldTouch)&&W(p,C,b.shouldTouch,b.shouldDirty,!0),b.shouldValidate&&er(p)},Re=(p,m,b)=>{for(const A in m){const C=m[A],O=`${p}.${A}`,L=M(n,O);(o.array.has(p)||me(C)||L&&!L._f)&&!Wt(C)?Re(O,C,b):we(O,C,b)}},fe=(p,m,b={})=>{const A=M(n,p),C=o.array.has(p),O=ke(m);se(i,p,O),C?(f.array.next({name:p,values:ke(i)}),(u.isDirty||u.dirtyFields||h.isDirty||h.dirtyFields)&&b.shouldDirty&&f.state.next({name:p,dirtyFields:Cr(s,i),isDirty:q(p,O)})):A&&!A._f&&!je(O)?Re(p,O,b):we(p,O,b),Ba(p,o)&&f.state.next({...r}),f.state.next({name:a.mount?p:void 0,values:ke(i)})},Le=async p=>{a.mount=!0;const m=p.target;let b=m.name,A=!0;const C=M(n,b),O=L=>{A=Number.isNaN(L)||Wt(L)&&isNaN(L.getTime())||Dt(L,M(i,b,L))};if(C){let L,ee;const ye=m.type?Ha(C._f):Bl(p),Se=p.type===Fn.BLUR||p.type===Fn.FOCUS_OUT,Mc=!Xy(C._f)&&!t.resolver&&!M(r.errors,b)&&!C._f.deps||r0(Se,M(r.touchedFields,b),r.isSubmitted,v,x),bs=Ba(b,o,Se);se(i,b,ye),Se?(C._f.onBlur&&C._f.onBlur(p),l&&l(0)):C._f.onChange&&C._f.onChange(p);const _s=W(b,ye,Se),Dc=!De(_s)||bs;if(!Se&&f.state.next({name:b,type:p.type,values:ke(i)}),Mc)return(u.isValid||h.isValid)&&(t.mode==="onBlur"?Se&&j():Se||j()),Dc&&f.state.next({name:b,...bs?{}:_s});if(!Se&&bs&&f.state.next({...r}),t.resolver){const{errors:da}=await oe([b]);if(O(ye),A){const jc=Ga(r.errors,n,b),ua=Ga(da,n,jc.name||b);L=ua.error,b=ua.name,ee=De(da)}}else $([b],!0),L=(await qa(C,o.disabled,i,y,t.shouldUseNativeValidation))[b],$([b]),O(ye),A&&(L?ee=!1:(u.isValid||h.isValid)&&(ee=await _e(n,!0)));A&&(C._f.deps&&er(C._f.deps),be(b,ee,L,_s))}},st=(p,m)=>{if(M(r.errors,m)&&p.focus)return p.focus(),1},er=async(p,m={})=>{let b,A;const C=Ir(p);if(t.resolver){const O=await Pe(pe(p)?p:C);b=De(O),A=p?!C.some(L=>M(O,L)):b}else p?(A=(await Promise.all(C.map(async O=>{const L=M(n,O);return await _e(L&&L._f?{[O]:L}:L)}))).every(Boolean),!(!A&&!r.isValid)&&j()):A=b=await _e(n);return f.state.next({...!ot(p)||(u.isValid||h.isValid)&&b!==r.isValid?{}:{name:p},...t.resolver||!p?{isValid:b}:{},errors:r.errors}),m.shouldFocus&&!A&&Fr(n,st,p?C:o.mount),A},ea=p=>{const m={...a.mount?i:s};return pe(p)?m:ot(p)?M(m,p):p.map(b=>M(m,b))},ta=(p,m)=>({invalid:!!M((m||r).errors,p),isDirty:!!M((m||r).dirtyFields,p),error:M((m||r).errors,p),isValidating:!!M(r.validatingFields,p),isTouched:!!M((m||r).touchedFields,p)}),wc=p=>{p&&Ir(p).forEach(m=>ve(r.errors,m)),f.state.next({errors:p?r.errors:{}})},ra=(p,m,b)=>{const A=(M(n,p,{_f:{}})._f||{}).ref,C=M(r.errors,p)||{},{ref:O,message:L,type:ee,...ye}=C;se(r.errors,p,{...ye,...m,ref:A}),f.state.next({name:p,errors:r.errors,isValid:!1}),b&&b.shouldFocus&&A&&A.focus&&A.focus()},kc=(p,m)=>Ge(p)?f.state.subscribe({next:b=>p(ae(void 0,m),b)}):ae(p,m,!0),na=p=>f.state.subscribe({next:m=>{t0(p.name,m.name,p.exact)&&e0(m,p.formState||u,Cc,p.reRenderRoot)&&p.callback({values:{...i},...r,...m})}}).unsubscribe,Sc=p=>(a.mount=!0,h={...h,...p.formState},na({...p,formState:h})),vs=(p,m={})=>{for(const b of p?Ir(p):o.mount)o.mount.delete(b),o.array.delete(b),m.keepValue||(ve(n,b),ve(i,b)),!m.keepError&&ve(r.errors,b),!m.keepDirty&&ve(r.dirtyFields,b),!m.keepTouched&&ve(r.touchedFields,b),!m.keepIsValidating&&ve(r.validatingFields,b),!t.shouldUnregister&&!m.keepDefaultValue&&ve(s,b);f.state.next({values:ke(i)}),f.state.next({...r,...m.keepDirty?{isDirty:q()}:{}}),!m.keepIsValid&&j()},sa=({disabled:p,name:m})=>{(Ne(p)&&a.mount||p||o.disabled.has(m))&&(p?o.disabled.add(m):o.disabled.delete(m))},xs=(p,m={})=>{let b=M(n,p);const A=Ne(m.disabled)||Ne(t.disabled);return se(n,p,{...b||{},_f:{...b&&b._f?b._f:{ref:{name:p}},name:p,mount:!0,...m}}),o.mount.add(p),b?sa({disabled:Ne(m.disabled)?m.disabled:t.disabled,name:p}):F(p,!0,m.value),{...A?{disabled:m.disabled||t.disabled}:{},...t.progressive?{required:!!m.required,min:Mr(m.min),max:Mr(m.max),minLength:Mr(m.minLength),maxLength:Mr(m.maxLength),pattern:Mr(m.pattern)}:{},name:p,onChange:Le,onBlur:Le,ref:C=>{if(C){xs(p,m),b=M(n,p);const O=pe(C.value)&&C.querySelectorAll&&C.querySelectorAll("input,select,textarea")[0]||C,L=Gy(O),ee=b._f.refs||[];if(L?ee.find(ye=>ye===O):O===b._f.ref)return;se(n,p,{_f:{...b._f,...L?{refs:[...ee.filter(Es),O,...Array.isArray(M(s,p))?[{}]:[]],ref:{type:O.type,name:p}}:{ref:O}}}),F(p,!1,void 0,O)}else b=M(n,p,{}),b._f&&(b._f.mount=!1),(t.shouldUnregister||m.shouldUnregister)&&!(Gl(o.array,p)&&a.action)&&o.unMount.add(p)}}},ia=()=>t.shouldFocusError&&Fr(n,st,o.mount),$c=p=>{Ne(p)&&(f.state.next({disabled:p}),Fr(n,(m,b)=>{const A=M(n,b);A&&(m.disabled=A._f.disabled||p,Array.isArray(A._f.refs)&&A._f.refs.forEach(C=>{C.disabled=A._f.disabled||p}))},0,!1))},aa=(p,m)=>async b=>{let A;b&&(b.preventDefault&&b.preventDefault(),b.persist&&b.persist());let C=ke(i);if(f.state.next({isSubmitting:!0}),t.resolver){const{errors:O,values:L}=await oe();r.errors=O,C=L}else await _e(n);if(o.disabled.size)for(const O of o.disabled)se(C,O,void 0);if(ve(r.errors,"root"),De(r.errors)){f.state.next({errors:{}});try{await p(C,b)}catch(O){A=O}}else m&&await m({...r.errors},b),ia(),setTimeout(ia);if(f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:De(r.errors)&&!A,submitCount:r.submitCount+1,errors:r.errors}),A)throw A},Tc=(p,m={})=>{M(n,p)&&(pe(m.defaultValue)?fe(p,ke(M(s,p))):(fe(p,m.defaultValue),se(s,p,ke(m.defaultValue))),m.keepTouched||ve(r.touchedFields,p),m.keepDirty||(ve(r.dirtyFields,p),r.isDirty=m.defaultValue?q(p,ke(M(s,p))):q()),m.keepError||(ve(r.errors,p),u.isValid&&j()),f.state.next({...r}))},oa=(p,m={})=>{const b=p?ke(p):s,A=ke(b),C=De(p),O=C?s:A;if(m.keepDefaultValues||(s=b),!m.keepValues){if(m.keepDirtyValues){const L=new Set([...o.mount,...Object.keys(Cr(s,i))]);for(const ee of Array.from(L))M(r.dirtyFields,ee)?se(O,ee,M(i,ee)):fe(ee,M(O,ee))}else{if(Gi&&pe(p))for(const L of o.mount){const ee=M(n,L);if(ee&&ee._f){const ye=Array.isArray(ee._f.refs)?ee._f.refs[0]:ee._f.ref;if(Yn(ye)){const Se=ye.closest("form");if(Se){Se.reset();break}}}}for(const L of o.mount)fe(L,M(O,L))}i=ke(O),f.array.next({values:{...O}}),f.state.next({values:{...O}})}o={mount:m.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},a.mount=!u.isValid||!!m.keepIsValid||!!m.keepDirtyValues,a.watch=!!t.shouldUnregister,f.state.next({submitCount:m.keepSubmitCount?r.submitCount:0,isDirty:C?!1:m.keepDirty?r.isDirty:!!(m.keepDefaultValues&&!Dt(p,s)),isSubmitted:m.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:C?{}:m.keepDirtyValues?m.keepDefaultValues&&i?Cr(s,i):r.dirtyFields:m.keepDefaultValues&&p?Cr(s,p):m.keepDirty?r.dirtyFields:{},touchedFields:m.keepTouched?r.touchedFields:{},errors:m.keepErrors?r.errors:{},isSubmitSuccessful:m.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},la=(p,m)=>oa(Ge(p)?p(i):p,m),Oc=(p,m={})=>{const b=M(n,p),A=b&&b._f;if(A){const C=A.refs?A.refs[0]:A.ref;C.focus&&(C.focus(),m.shouldSelect&&Ge(C.select)&&C.select())}},Cc=p=>{r={...r,...p}},ca={control:{register:xs,unregister:vs,getFieldState:ta,handleSubmit:aa,setError:ra,_subscribe:na,_runSchema:oe,_getWatch:ae,_getDirty:q,_setValid:j,_setFieldArray:I,_setDisabledField:sa,_setErrors:P,_getFieldArray:ge,_reset:oa,_resetDefaultValues:()=>Ge(t.defaultValues)&&t.defaultValues().then(p=>{la(p,t.resetOptions),f.state.next({isLoading:!1})}),_removeUnmounted:ne,_disableForm:$c,_subjects:f,_proxyFormState:u,get _fields(){return n},get _formValues(){return i},get _state(){return a},set _state(p){a=p},get _defaultValues(){return s},get _names(){return o},set _names(p){o=p},get _formState(){return r},get _options(){return t},set _options(p){t={...t,...p}}},subscribe:Sc,trigger:er,register:xs,handleSubmit:aa,watch:kc,setValue:fe,getValues:ea,reset:la,resetField:Tc,clearErrors:wc,unregister:vs,setError:ra,setFocus:Oc,getFieldState:ta};return{...ca,formControl:ca}}function o0(e={}){const t=z.useRef(void 0),r=z.useRef(void 0),[n,s]=z.useState({isDirty:!1,isValidating:!1,isLoading:Ge(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Ge(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...e.formControl?e.formControl:a0(e),formState:n},e.formControl&&e.defaultValues&&!Ge(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const i=t.current.control;return i._options=e,z.useLayoutEffect(()=>i._subscribe({formState:i._proxyFormState,callback:()=>s({...i._formState}),reRenderRoot:!0}),[i]),z.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),z.useEffect(()=>{if(i._proxyFormState.isDirty){const a=i._getDirty();a!==n.isDirty&&i._subjects.state.next({isDirty:a})}},[i,n.isDirty]),z.useEffect(()=>{e.values&&!Dt(e.values,r.current)?(i._reset(e.values,i._options.resetOptions),r.current=e.values,s(a=>({...a}))):i._resetDefaultValues()},[e.values,i]),z.useEffect(()=>{e.errors&&!De(e.errors)&&i._setErrors(e.errors)},[e.errors,i]),z.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),z.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[e.shouldUnregister,i]),t.current.formState=ql(n,i),t.current}const Ja=(e,t,r)=>{if(e&&"reportValidity"in e){const n=M(r,t);e.setCustomValidity(n&&n.message||""),e.reportValidity()}},ic=(e,t)=>{for(const r in t.fields){const n=t.fields[r];n&&n.ref&&"reportValidity"in n.ref?Ja(n.ref,r,e):n&&n.refs&&n.refs.forEach(s=>Ja(s,r,e))}},l0=(e,t)=>{t.shouldUseNativeValidation&&ic(e,t);const r={};for(const n in e){const s=M(t.fields,n),i=Object.assign(e[n]||{},{ref:s&&s.ref});if(c0(t.names||Object.keys(e),n)){const a=Object.assign({},M(r,n));se(a,"root",i),se(r,n,a)}else se(r,n,i)}return r},c0=(e,t)=>{const r=Qa(t);return e.some(n=>Qa(n).match(`^${r}\\.\\d+`))};function Qa(e){return e.replace(/\]|\[/g,"")}function d0(e,t){for(var r={};e.length;){var n=e[0],s=n.code,i=n.message,a=n.path.join(".");if(!r[a])if("unionErrors"in n){var o=n.unionErrors[0].errors[0];r[a]={message:o.message,type:o.code}}else r[a]={message:i,type:s};if("unionErrors"in n&&n.unionErrors.forEach(function(u){return u.errors.forEach(function(h){return e.push(h)})}),t){var l=r[a].types,c=l&&l[n.code];r[a]=Ql(a,t,r,s,c?[].concat(c,n.message):n.message)}e.shift()}return r}function u0(e,t,r){return r===void 0&&(r={}),function(n,s,i){try{return Promise.resolve(function(a,o){try{var l=Promise.resolve(e[r.mode==="sync"?"parse":"parseAsync"](n,t)).then(function(c){return i.shouldUseNativeValidation&&ic({},i),{errors:{},values:r.raw?Object.assign({},n):c}})}catch(c){return o(c)}return l&&l.then?l.then(void 0,o):l}(0,function(a){if(function(o){return Array.isArray(o==null?void 0:o.errors)}(a))return{values:{},errors:l0(d0(a.errors,!i.shouldUseNativeValidation&&i.criteriaMode==="all"),i)};throw a}))}catch(a){return Promise.reject(a)}}}var Q;(function(e){e.assertEqual=s=>s;function t(s){}e.assertIs=t;function r(s){throw new Error}e.assertNever=r,e.arrayToEnum=s=>{const i={};for(const a of s)i[a]=a;return i},e.getValidEnumValues=s=>{const i=e.objectKeys(s).filter(o=>typeof s[s[o]]!="number"),a={};for(const o of i)a[o]=s[o];return e.objectValues(a)},e.objectValues=s=>e.objectKeys(s).map(function(i){return s[i]}),e.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const i=[];for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&i.push(a);return i},e.find=(s,i)=>{for(const a of s)if(i(a))return a},e.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function n(s,i=" | "){return s.map(a=>typeof a=="string"?`'${a}'`:a).join(i)}e.joinValues=n,e.jsonStringifyReplacer=(s,i)=>typeof i=="bigint"?i.toString():i})(Q||(Q={}));var si;(function(e){e.mergeShapes=(t,r)=>({...t,...r})})(si||(si={}));const E=Q.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),bt=e=>{switch(typeof e){case"undefined":return E.undefined;case"string":return E.string;case"number":return isNaN(e)?E.nan:E.number;case"boolean":return E.boolean;case"function":return E.function;case"bigint":return E.bigint;case"symbol":return E.symbol;case"object":return Array.isArray(e)?E.array:e===null?E.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?E.promise:typeof Map<"u"&&e instanceof Map?E.map:typeof Set<"u"&&e instanceof Set?E.set:typeof Date<"u"&&e instanceof Date?E.date:E.object;default:return E.unknown}},k=Q.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),f0=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Fe extends Error{get errors(){return this.issues}constructor(t){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=t}format(t){const r=t||function(i){return i.message},n={_errors:[]},s=i=>{for(const a of i.issues)if(a.code==="invalid_union")a.unionErrors.map(s);else if(a.code==="invalid_return_type")s(a.returnTypeError);else if(a.code==="invalid_arguments")s(a.argumentsError);else if(a.path.length===0)n._errors.push(r(a));else{let o=n,l=0;for(;l<a.path.length;){const c=a.path[l];l===a.path.length-1?(o[c]=o[c]||{_errors:[]},o[c]._errors.push(r(a))):o[c]=o[c]||{_errors:[]},o=o[c],l++}}};return s(this),n}static assert(t){if(!(t instanceof Fe))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,Q.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=r=>r.message){const r={},n=[];for(const s of this.issues)s.path.length>0?(r[s.path[0]]=r[s.path[0]]||[],r[s.path[0]].push(t(s))):n.push(t(s));return{formErrors:n,fieldErrors:r}}get formErrors(){return this.flatten()}}Fe.create=e=>new Fe(e);const yr=(e,t)=>{let r;switch(e.code){case k.invalid_type:e.received===E.undefined?r="Required":r=`Expected ${e.expected}, received ${e.received}`;break;case k.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,Q.jsonStringifyReplacer)}`;break;case k.unrecognized_keys:r=`Unrecognized key(s) in object: ${Q.joinValues(e.keys,", ")}`;break;case k.invalid_union:r="Invalid input";break;case k.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${Q.joinValues(e.options)}`;break;case k.invalid_enum_value:r=`Invalid enum value. Expected ${Q.joinValues(e.options)}, received '${e.received}'`;break;case k.invalid_arguments:r="Invalid function arguments";break;case k.invalid_return_type:r="Invalid function return type";break;case k.invalid_date:r="Invalid date";break;case k.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:Q.assertNever(e.validation):e.validation!=="regex"?r=`Invalid ${e.validation}`:r="Invalid";break;case k.too_small:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:r="Invalid input";break;case k.too_big:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?r=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:r="Invalid input";break;case k.custom:r="Invalid input";break;case k.invalid_intersection_types:r="Intersection results could not be merged";break;case k.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case k.not_finite:r="Number must be finite";break;default:r=t.defaultError,Q.assertNever(e)}return{message:r}};let ac=yr;function h0(e){ac=e}function Un(){return ac}const Hn=e=>{const{data:t,path:r,errorMaps:n,issueData:s}=e,i=[...r,...s.path||[]],a={...s,path:i};if(s.message!==void 0)return{...s,path:i,message:s.message};let o="";const l=n.filter(c=>!!c).slice().reverse();for(const c of l)o=c(a,{data:t,defaultError:o}).message;return{...s,path:i,message:o}},p0=[];function D(e,t){const r=Un(),n=Hn({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,r,r===yr?void 0:yr].filter(s=>!!s)});e.common.issues.push(n)}class Oe{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,r){const n=[];for(const s of r){if(s.status==="aborted")return H;s.status==="dirty"&&t.dirty(),n.push(s.value)}return{status:t.value,value:n}}static async mergeObjectAsync(t,r){const n=[];for(const s of r){const i=await s.key,a=await s.value;n.push({key:i,value:a})}return Oe.mergeObjectSync(t,n)}static mergeObjectSync(t,r){const n={};for(const s of r){const{key:i,value:a}=s;if(i.status==="aborted"||a.status==="aborted")return H;i.status==="dirty"&&t.dirty(),a.status==="dirty"&&t.dirty(),i.value!=="__proto__"&&(typeof a.value<"u"||s.alwaysSet)&&(n[i.value]=a.value)}return{status:t.value,value:n}}}const H=Object.freeze({status:"aborted"}),cr=e=>({status:"dirty",value:e}),Ee=e=>({status:"valid",value:e}),ii=e=>e.status==="aborted",ai=e=>e.status==="dirty",qt=e=>e.status==="valid",Wr=e=>typeof Promise<"u"&&e instanceof Promise;function Wn(e,t,r,n){if(typeof t=="function"?e!==t||!0:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t.get(e)}function oc(e,t,r,n,s){if(typeof t=="function"?e!==t||!0:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(e,r),r}var N;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(N||(N={}));var Pr,Rr;class ut{constructor(t,r,n,s){this._cachedPath=[],this.parent=t,this.data=r,this._path=n,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Xa=(e,t)=>{if(qt(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const r=new Fe(e.common.issues);return this._error=r,this._error}}};function B(e){if(!e)return{};const{errorMap:t,invalid_type_error:r,required_error:n,description:s}=e;if(t&&(r||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:s}:{errorMap:(a,o)=>{var l,c;const{message:u}=e;return a.code==="invalid_enum_value"?{message:u??o.defaultError}:typeof o.data>"u"?{message:(l=u??n)!==null&&l!==void 0?l:o.defaultError}:a.code!=="invalid_type"?{message:o.defaultError}:{message:(c=u??r)!==null&&c!==void 0?c:o.defaultError}},description:s}}class K{get description(){return this._def.description}_getType(t){return bt(t.data)}_getOrReturnCtx(t,r){return r||{common:t.parent.common,data:t.data,parsedType:bt(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Oe,ctx:{common:t.parent.common,data:t.data,parsedType:bt(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const r=this._parse(t);if(Wr(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(t){const r=this._parse(t);return Promise.resolve(r)}parse(t,r){const n=this.safeParse(t,r);if(n.success)return n.data;throw n.error}safeParse(t,r){var n;const s={common:{issues:[],async:(n=r==null?void 0:r.async)!==null&&n!==void 0?n:!1,contextualErrorMap:r==null?void 0:r.errorMap},path:(r==null?void 0:r.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:bt(t)},i=this._parseSync({data:t,path:s.path,parent:s});return Xa(s,i)}"~validate"(t){var r,n;const s={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:bt(t)};if(!this["~standard"].async)try{const i=this._parseSync({data:t,path:[],parent:s});return qt(i)?{value:i.value}:{issues:s.common.issues}}catch(i){!((n=(r=i==null?void 0:i.message)===null||r===void 0?void 0:r.toLowerCase())===null||n===void 0)&&n.includes("encountered")&&(this["~standard"].async=!0),s.common={issues:[],async:!0}}return this._parseAsync({data:t,path:[],parent:s}).then(i=>qt(i)?{value:i.value}:{issues:s.common.issues})}async parseAsync(t,r){const n=await this.safeParseAsync(t,r);if(n.success)return n.data;throw n.error}async safeParseAsync(t,r){const n={common:{issues:[],contextualErrorMap:r==null?void 0:r.errorMap,async:!0},path:(r==null?void 0:r.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:bt(t)},s=this._parse({data:t,path:n.path,parent:n}),i=await(Wr(s)?s:Promise.resolve(s));return Xa(n,i)}refine(t,r){const n=s=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(s):r;return this._refinement((s,i)=>{const a=t(s),o=()=>i.addIssue({code:k.custom,...n(s)});return typeof Promise<"u"&&a instanceof Promise?a.then(l=>l?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(t,r){return this._refinement((n,s)=>t(n)?!0:(s.addIssue(typeof r=="function"?r(n,s):r),!1))}_refinement(t){return new rt({schema:this,typeName:U.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:r=>this["~validate"](r)}}optional(){return ct.create(this,this._def)}nullable(){return It.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Xe.create(this)}promise(){return xr.create(this,this._def)}or(t){return Kr.create([this,t],this._def)}and(t){return qr.create(this,t,this._def)}transform(t){return new rt({...B(this._def),schema:this,typeName:U.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const r=typeof t=="function"?t:()=>t;return new tn({...B(this._def),innerType:this,defaultValue:r,typeName:U.ZodDefault})}brand(){return new Xi({typeName:U.ZodBranded,type:this,...B(this._def)})}catch(t){const r=typeof t=="function"?t:()=>t;return new rn({...B(this._def),innerType:this,catchValue:r,typeName:U.ZodCatch})}describe(t){const r=this.constructor;return new r({...this._def,description:t})}pipe(t){return hn.create(this,t)}readonly(){return nn.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const m0=/^c[^\s-]{8,}$/i,g0=/^[0-9a-z]+$/,y0=/^[0-9A-HJKMNP-TV-Z]{26}$/i,v0=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,x0=/^[a-z0-9_-]{21}$/i,b0=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,_0=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,w0=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,k0="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let As;const S0=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,$0=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,T0=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,O0=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,C0=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,M0=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,lc="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",D0=new RegExp(`^${lc}$`);function cc(e){let t="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`),t}function j0(e){return new RegExp(`^${cc(e)}$`)}function dc(e){let t=`${lc}T${cc(e)}`;const r=[];return r.push(e.local?"Z?":"Z"),e.offset&&r.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${r.join("|")})`,new RegExp(`^${t}$`)}function E0(e,t){return!!((t==="v4"||!t)&&S0.test(e)||(t==="v6"||!t)&&T0.test(e))}function A0(e,t){if(!b0.test(e))return!1;try{const[r]=e.split("."),n=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),s=JSON.parse(atob(n));return!(typeof s!="object"||s===null||!s.typ||!s.alg||t&&s.alg!==t)}catch{return!1}}function P0(e,t){return!!((t==="v4"||!t)&&$0.test(e)||(t==="v6"||!t)&&O0.test(e))}class Je extends K{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==E.string){const i=this._getOrReturnCtx(t);return D(i,{code:k.invalid_type,expected:E.string,received:i.parsedType}),H}const n=new Oe;let s;for(const i of this._def.checks)if(i.kind==="min")t.data.length<i.value&&(s=this._getOrReturnCtx(t,s),D(s,{code:k.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),n.dirty());else if(i.kind==="max")t.data.length>i.value&&(s=this._getOrReturnCtx(t,s),D(s,{code:k.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),n.dirty());else if(i.kind==="length"){const a=t.data.length>i.value,o=t.data.length<i.value;(a||o)&&(s=this._getOrReturnCtx(t,s),a?D(s,{code:k.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):o&&D(s,{code:k.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),n.dirty())}else if(i.kind==="email")w0.test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"email",code:k.invalid_string,message:i.message}),n.dirty());else if(i.kind==="emoji")As||(As=new RegExp(k0,"u")),As.test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"emoji",code:k.invalid_string,message:i.message}),n.dirty());else if(i.kind==="uuid")v0.test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"uuid",code:k.invalid_string,message:i.message}),n.dirty());else if(i.kind==="nanoid")x0.test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"nanoid",code:k.invalid_string,message:i.message}),n.dirty());else if(i.kind==="cuid")m0.test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"cuid",code:k.invalid_string,message:i.message}),n.dirty());else if(i.kind==="cuid2")g0.test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"cuid2",code:k.invalid_string,message:i.message}),n.dirty());else if(i.kind==="ulid")y0.test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"ulid",code:k.invalid_string,message:i.message}),n.dirty());else if(i.kind==="url")try{new URL(t.data)}catch{s=this._getOrReturnCtx(t,s),D(s,{validation:"url",code:k.invalid_string,message:i.message}),n.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"regex",code:k.invalid_string,message:i.message}),n.dirty())):i.kind==="trim"?t.data=t.data.trim():i.kind==="includes"?t.data.includes(i.value,i.position)||(s=this._getOrReturnCtx(t,s),D(s,{code:k.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),n.dirty()):i.kind==="toLowerCase"?t.data=t.data.toLowerCase():i.kind==="toUpperCase"?t.data=t.data.toUpperCase():i.kind==="startsWith"?t.data.startsWith(i.value)||(s=this._getOrReturnCtx(t,s),D(s,{code:k.invalid_string,validation:{startsWith:i.value},message:i.message}),n.dirty()):i.kind==="endsWith"?t.data.endsWith(i.value)||(s=this._getOrReturnCtx(t,s),D(s,{code:k.invalid_string,validation:{endsWith:i.value},message:i.message}),n.dirty()):i.kind==="datetime"?dc(i).test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{code:k.invalid_string,validation:"datetime",message:i.message}),n.dirty()):i.kind==="date"?D0.test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{code:k.invalid_string,validation:"date",message:i.message}),n.dirty()):i.kind==="time"?j0(i).test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{code:k.invalid_string,validation:"time",message:i.message}),n.dirty()):i.kind==="duration"?_0.test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"duration",code:k.invalid_string,message:i.message}),n.dirty()):i.kind==="ip"?E0(t.data,i.version)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"ip",code:k.invalid_string,message:i.message}),n.dirty()):i.kind==="jwt"?A0(t.data,i.alg)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"jwt",code:k.invalid_string,message:i.message}),n.dirty()):i.kind==="cidr"?P0(t.data,i.version)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"cidr",code:k.invalid_string,message:i.message}),n.dirty()):i.kind==="base64"?C0.test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"base64",code:k.invalid_string,message:i.message}),n.dirty()):i.kind==="base64url"?M0.test(t.data)||(s=this._getOrReturnCtx(t,s),D(s,{validation:"base64url",code:k.invalid_string,message:i.message}),n.dirty()):Q.assertNever(i);return{status:n.value,value:t.data}}_regex(t,r,n){return this.refinement(s=>t.test(s),{validation:r,code:k.invalid_string,...N.errToObj(n)})}_addCheck(t){return new Je({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...N.errToObj(t)})}url(t){return this._addCheck({kind:"url",...N.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...N.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...N.errToObj(t)})}nanoid(t){return this._addCheck({kind:"nanoid",...N.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...N.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...N.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...N.errToObj(t)})}base64(t){return this._addCheck({kind:"base64",...N.errToObj(t)})}base64url(t){return this._addCheck({kind:"base64url",...N.errToObj(t)})}jwt(t){return this._addCheck({kind:"jwt",...N.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...N.errToObj(t)})}cidr(t){return this._addCheck({kind:"cidr",...N.errToObj(t)})}datetime(t){var r,n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(r=t==null?void 0:t.offset)!==null&&r!==void 0?r:!1,local:(n=t==null?void 0:t.local)!==null&&n!==void 0?n:!1,...N.errToObj(t==null?void 0:t.message)})}date(t){return this._addCheck({kind:"date",message:t})}time(t){return typeof t=="string"?this._addCheck({kind:"time",precision:null,message:t}):this._addCheck({kind:"time",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,...N.errToObj(t==null?void 0:t.message)})}duration(t){return this._addCheck({kind:"duration",...N.errToObj(t)})}regex(t,r){return this._addCheck({kind:"regex",regex:t,...N.errToObj(r)})}includes(t,r){return this._addCheck({kind:"includes",value:t,position:r==null?void 0:r.position,...N.errToObj(r==null?void 0:r.message)})}startsWith(t,r){return this._addCheck({kind:"startsWith",value:t,...N.errToObj(r)})}endsWith(t,r){return this._addCheck({kind:"endsWith",value:t,...N.errToObj(r)})}min(t,r){return this._addCheck({kind:"min",value:t,...N.errToObj(r)})}max(t,r){return this._addCheck({kind:"max",value:t,...N.errToObj(r)})}length(t,r){return this._addCheck({kind:"length",value:t,...N.errToObj(r)})}nonempty(t){return this.min(1,N.errToObj(t))}trim(){return new Je({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Je({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Je({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isDate(){return!!this._def.checks.find(t=>t.kind==="date")}get isTime(){return!!this._def.checks.find(t=>t.kind==="time")}get isDuration(){return!!this._def.checks.find(t=>t.kind==="duration")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(t=>t.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get isCIDR(){return!!this._def.checks.find(t=>t.kind==="cidr")}get isBase64(){return!!this._def.checks.find(t=>t.kind==="base64")}get isBase64url(){return!!this._def.checks.find(t=>t.kind==="base64url")}get minLength(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxLength(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}}Je.create=e=>{var t;return new Je({checks:[],typeName:U.ZodString,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...B(e)})};function R0(e,t){const r=(e.toString().split(".")[1]||"").length,n=(t.toString().split(".")[1]||"").length,s=r>n?r:n,i=parseInt(e.toFixed(s).replace(".","")),a=parseInt(t.toFixed(s).replace(".",""));return i%a/Math.pow(10,s)}class Rt extends K{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==E.number){const i=this._getOrReturnCtx(t);return D(i,{code:k.invalid_type,expected:E.number,received:i.parsedType}),H}let n;const s=new Oe;for(const i of this._def.checks)i.kind==="int"?Q.isInteger(t.data)||(n=this._getOrReturnCtx(t,n),D(n,{code:k.invalid_type,expected:"integer",received:"float",message:i.message}),s.dirty()):i.kind==="min"?(i.inclusive?t.data<i.value:t.data<=i.value)&&(n=this._getOrReturnCtx(t,n),D(n,{code:k.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?t.data>i.value:t.data>=i.value)&&(n=this._getOrReturnCtx(t,n),D(n,{code:k.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="multipleOf"?R0(t.data,i.value)!==0&&(n=this._getOrReturnCtx(t,n),D(n,{code:k.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):i.kind==="finite"?Number.isFinite(t.data)||(n=this._getOrReturnCtx(t,n),D(n,{code:k.not_finite,message:i.message}),s.dirty()):Q.assertNever(i);return{status:s.value,value:t.data}}gte(t,r){return this.setLimit("min",t,!0,N.toString(r))}gt(t,r){return this.setLimit("min",t,!1,N.toString(r))}lte(t,r){return this.setLimit("max",t,!0,N.toString(r))}lt(t,r){return this.setLimit("max",t,!1,N.toString(r))}setLimit(t,r,n,s){return new Rt({...this._def,checks:[...this._def.checks,{kind:t,value:r,inclusive:n,message:N.toString(s)}]})}_addCheck(t){return new Rt({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:N.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:N.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:N.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:N.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:N.toString(t)})}multipleOf(t,r){return this._addCheck({kind:"multipleOf",value:t,message:N.toString(r)})}finite(t){return this._addCheck({kind:"finite",message:N.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:N.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:N.toString(t)})}get minValue(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxValue(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&Q.isInteger(t.value))}get isFinite(){let t=null,r=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(r===null||n.value>r)&&(r=n.value):n.kind==="max"&&(t===null||n.value<t)&&(t=n.value)}return Number.isFinite(r)&&Number.isFinite(t)}}Rt.create=e=>new Rt({checks:[],typeName:U.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...B(e)});class Lt extends K{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce)try{t.data=BigInt(t.data)}catch{return this._getInvalidInput(t)}if(this._getType(t)!==E.bigint)return this._getInvalidInput(t);let n;const s=new Oe;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?t.data<i.value:t.data<=i.value)&&(n=this._getOrReturnCtx(t,n),D(n,{code:k.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?t.data>i.value:t.data>=i.value)&&(n=this._getOrReturnCtx(t,n),D(n,{code:k.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="multipleOf"?t.data%i.value!==BigInt(0)&&(n=this._getOrReturnCtx(t,n),D(n,{code:k.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):Q.assertNever(i);return{status:s.value,value:t.data}}_getInvalidInput(t){const r=this._getOrReturnCtx(t);return D(r,{code:k.invalid_type,expected:E.bigint,received:r.parsedType}),H}gte(t,r){return this.setLimit("min",t,!0,N.toString(r))}gt(t,r){return this.setLimit("min",t,!1,N.toString(r))}lte(t,r){return this.setLimit("max",t,!0,N.toString(r))}lt(t,r){return this.setLimit("max",t,!1,N.toString(r))}setLimit(t,r,n,s){return new Lt({...this._def,checks:[...this._def.checks,{kind:t,value:r,inclusive:n,message:N.toString(s)}]})}_addCheck(t){return new Lt({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:N.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:N.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:N.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:N.toString(t)})}multipleOf(t,r){return this._addCheck({kind:"multipleOf",value:t,message:N.toString(r)})}get minValue(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxValue(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}}Lt.create=e=>{var t;return new Lt({checks:[],typeName:U.ZodBigInt,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...B(e)})};class Zr extends K{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==E.boolean){const n=this._getOrReturnCtx(t);return D(n,{code:k.invalid_type,expected:E.boolean,received:n.parsedType}),H}return Ee(t.data)}}Zr.create=e=>new Zr({typeName:U.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...B(e)});class Jt extends K{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==E.date){const i=this._getOrReturnCtx(t);return D(i,{code:k.invalid_type,expected:E.date,received:i.parsedType}),H}if(isNaN(t.data.getTime())){const i=this._getOrReturnCtx(t);return D(i,{code:k.invalid_date}),H}const n=new Oe;let s;for(const i of this._def.checks)i.kind==="min"?t.data.getTime()<i.value&&(s=this._getOrReturnCtx(t,s),D(s,{code:k.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),n.dirty()):i.kind==="max"?t.data.getTime()>i.value&&(s=this._getOrReturnCtx(t,s),D(s,{code:k.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),n.dirty()):Q.assertNever(i);return{status:n.value,value:new Date(t.data.getTime())}}_addCheck(t){return new Jt({...this._def,checks:[...this._def.checks,t]})}min(t,r){return this._addCheck({kind:"min",value:t.getTime(),message:N.toString(r)})}max(t,r){return this._addCheck({kind:"max",value:t.getTime(),message:N.toString(r)})}get minDate(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t!=null?new Date(t):null}}Jt.create=e=>new Jt({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:U.ZodDate,...B(e)});class Zn extends K{_parse(t){if(this._getType(t)!==E.symbol){const n=this._getOrReturnCtx(t);return D(n,{code:k.invalid_type,expected:E.symbol,received:n.parsedType}),H}return Ee(t.data)}}Zn.create=e=>new Zn({typeName:U.ZodSymbol,...B(e)});class Br extends K{_parse(t){if(this._getType(t)!==E.undefined){const n=this._getOrReturnCtx(t);return D(n,{code:k.invalid_type,expected:E.undefined,received:n.parsedType}),H}return Ee(t.data)}}Br.create=e=>new Br({typeName:U.ZodUndefined,...B(e)});class Gr extends K{_parse(t){if(this._getType(t)!==E.null){const n=this._getOrReturnCtx(t);return D(n,{code:k.invalid_type,expected:E.null,received:n.parsedType}),H}return Ee(t.data)}}Gr.create=e=>new Gr({typeName:U.ZodNull,...B(e)});class vr extends K{constructor(){super(...arguments),this._any=!0}_parse(t){return Ee(t.data)}}vr.create=e=>new vr({typeName:U.ZodAny,...B(e)});class Kt extends K{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Ee(t.data)}}Kt.create=e=>new Kt({typeName:U.ZodUnknown,...B(e)});class Tt extends K{_parse(t){const r=this._getOrReturnCtx(t);return D(r,{code:k.invalid_type,expected:E.never,received:r.parsedType}),H}}Tt.create=e=>new Tt({typeName:U.ZodNever,...B(e)});class Bn extends K{_parse(t){if(this._getType(t)!==E.undefined){const n=this._getOrReturnCtx(t);return D(n,{code:k.invalid_type,expected:E.void,received:n.parsedType}),H}return Ee(t.data)}}Bn.create=e=>new Bn({typeName:U.ZodVoid,...B(e)});class Xe extends K{_parse(t){const{ctx:r,status:n}=this._processInputParams(t),s=this._def;if(r.parsedType!==E.array)return D(r,{code:k.invalid_type,expected:E.array,received:r.parsedType}),H;if(s.exactLength!==null){const a=r.data.length>s.exactLength.value,o=r.data.length<s.exactLength.value;(a||o)&&(D(r,{code:a?k.too_big:k.too_small,minimum:o?s.exactLength.value:void 0,maximum:a?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),n.dirty())}if(s.minLength!==null&&r.data.length<s.minLength.value&&(D(r,{code:k.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),n.dirty()),s.maxLength!==null&&r.data.length>s.maxLength.value&&(D(r,{code:k.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),n.dirty()),r.common.async)return Promise.all([...r.data].map((a,o)=>s.type._parseAsync(new ut(r,a,r.path,o)))).then(a=>Oe.mergeArray(n,a));const i=[...r.data].map((a,o)=>s.type._parseSync(new ut(r,a,r.path,o)));return Oe.mergeArray(n,i)}get element(){return this._def.type}min(t,r){return new Xe({...this._def,minLength:{value:t,message:N.toString(r)}})}max(t,r){return new Xe({...this._def,maxLength:{value:t,message:N.toString(r)}})}length(t,r){return new Xe({...this._def,exactLength:{value:t,message:N.toString(r)}})}nonempty(t){return this.min(1,t)}}Xe.create=(e,t)=>new Xe({type:e,minLength:null,maxLength:null,exactLength:null,typeName:U.ZodArray,...B(t)});function or(e){if(e instanceof ue){const t={};for(const r in e.shape){const n=e.shape[r];t[r]=ct.create(or(n))}return new ue({...e._def,shape:()=>t})}else return e instanceof Xe?new Xe({...e._def,type:or(e.element)}):e instanceof ct?ct.create(or(e.unwrap())):e instanceof It?It.create(or(e.unwrap())):e instanceof ft?ft.create(e.items.map(t=>or(t))):e}class ue extends K{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),r=Q.objectKeys(t);return this._cached={shape:t,keys:r}}_parse(t){if(this._getType(t)!==E.object){const c=this._getOrReturnCtx(t);return D(c,{code:k.invalid_type,expected:E.object,received:c.parsedType}),H}const{status:n,ctx:s}=this._processInputParams(t),{shape:i,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof Tt&&this._def.unknownKeys==="strip"))for(const c in s.data)a.includes(c)||o.push(c);const l=[];for(const c of a){const u=i[c],h=s.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new ut(s,h,s.path,c)),alwaysSet:c in s.data})}if(this._def.catchall instanceof Tt){const c=this._def.unknownKeys;if(c==="passthrough")for(const u of o)l.push({key:{status:"valid",value:u},value:{status:"valid",value:s.data[u]}});else if(c==="strict")o.length>0&&(D(s,{code:k.unrecognized_keys,keys:o}),n.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const u of o){const h=s.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new ut(s,h,s.path,u)),alwaysSet:u in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const c=[];for(const u of l){const h=await u.key,f=await u.value;c.push({key:h,value:f,alwaysSet:u.alwaysSet})}return c}).then(c=>Oe.mergeObjectSync(n,c)):Oe.mergeObjectSync(n,l)}get shape(){return this._def.shape()}strict(t){return N.errToObj,new ue({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(r,n)=>{var s,i,a,o;const l=(a=(i=(s=this._def).errorMap)===null||i===void 0?void 0:i.call(s,r,n).message)!==null&&a!==void 0?a:n.defaultError;return r.code==="unrecognized_keys"?{message:(o=N.errToObj(t).message)!==null&&o!==void 0?o:l}:{message:l}}}:{}})}strip(){return new ue({...this._def,unknownKeys:"strip"})}passthrough(){return new ue({...this._def,unknownKeys:"passthrough"})}extend(t){return new ue({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new ue({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:U.ZodObject})}setKey(t,r){return this.augment({[t]:r})}catchall(t){return new ue({...this._def,catchall:t})}pick(t){const r={};return Q.objectKeys(t).forEach(n=>{t[n]&&this.shape[n]&&(r[n]=this.shape[n])}),new ue({...this._def,shape:()=>r})}omit(t){const r={};return Q.objectKeys(this.shape).forEach(n=>{t[n]||(r[n]=this.shape[n])}),new ue({...this._def,shape:()=>r})}deepPartial(){return or(this)}partial(t){const r={};return Q.objectKeys(this.shape).forEach(n=>{const s=this.shape[n];t&&!t[n]?r[n]=s:r[n]=s.optional()}),new ue({...this._def,shape:()=>r})}required(t){const r={};return Q.objectKeys(this.shape).forEach(n=>{if(t&&!t[n])r[n]=this.shape[n];else{let i=this.shape[n];for(;i instanceof ct;)i=i._def.innerType;r[n]=i}}),new ue({...this._def,shape:()=>r})}keyof(){return uc(Q.objectKeys(this.shape))}}ue.create=(e,t)=>new ue({shape:()=>e,unknownKeys:"strip",catchall:Tt.create(),typeName:U.ZodObject,...B(t)});ue.strictCreate=(e,t)=>new ue({shape:()=>e,unknownKeys:"strict",catchall:Tt.create(),typeName:U.ZodObject,...B(t)});ue.lazycreate=(e,t)=>new ue({shape:e,unknownKeys:"strip",catchall:Tt.create(),typeName:U.ZodObject,...B(t)});class Kr extends K{_parse(t){const{ctx:r}=this._processInputParams(t),n=this._def.options;function s(i){for(const o of i)if(o.result.status==="valid")return o.result;for(const o of i)if(o.result.status==="dirty")return r.common.issues.push(...o.ctx.common.issues),o.result;const a=i.map(o=>new Fe(o.ctx.common.issues));return D(r,{code:k.invalid_union,unionErrors:a}),H}if(r.common.async)return Promise.all(n.map(async i=>{const a={...r,common:{...r.common,issues:[]},parent:null};return{result:await i._parseAsync({data:r.data,path:r.path,parent:a}),ctx:a}})).then(s);{let i;const a=[];for(const l of n){const c={...r,common:{...r.common,issues:[]},parent:null},u=l._parseSync({data:r.data,path:r.path,parent:c});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:c}),c.common.issues.length&&a.push(c.common.issues)}if(i)return r.common.issues.push(...i.ctx.common.issues),i.result;const o=a.map(l=>new Fe(l));return D(r,{code:k.invalid_union,unionErrors:o}),H}}get options(){return this._def.options}}Kr.create=(e,t)=>new Kr({options:e,typeName:U.ZodUnion,...B(t)});const vt=e=>e instanceof Qr?vt(e.schema):e instanceof rt?vt(e.innerType()):e instanceof Xr?[e.value]:e instanceof Nt?e.options:e instanceof en?Q.objectValues(e.enum):e instanceof tn?vt(e._def.innerType):e instanceof Br?[void 0]:e instanceof Gr?[null]:e instanceof ct?[void 0,...vt(e.unwrap())]:e instanceof It?[null,...vt(e.unwrap())]:e instanceof Xi||e instanceof nn?vt(e.unwrap()):e instanceof rn?vt(e._def.innerType):[];class gs extends K{_parse(t){const{ctx:r}=this._processInputParams(t);if(r.parsedType!==E.object)return D(r,{code:k.invalid_type,expected:E.object,received:r.parsedType}),H;const n=this.discriminator,s=r.data[n],i=this.optionsMap.get(s);return i?r.common.async?i._parseAsync({data:r.data,path:r.path,parent:r}):i._parseSync({data:r.data,path:r.path,parent:r}):(D(r,{code:k.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),H)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,r,n){const s=new Map;for(const i of r){const a=vt(i.shape[t]);if(!a.length)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const o of a){if(s.has(o))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);s.set(o,i)}}return new gs({typeName:U.ZodDiscriminatedUnion,discriminator:t,options:r,optionsMap:s,...B(n)})}}function oi(e,t){const r=bt(e),n=bt(t);if(e===t)return{valid:!0,data:e};if(r===E.object&&n===E.object){const s=Q.objectKeys(t),i=Q.objectKeys(e).filter(o=>s.indexOf(o)!==-1),a={...e,...t};for(const o of i){const l=oi(e[o],t[o]);if(!l.valid)return{valid:!1};a[o]=l.data}return{valid:!0,data:a}}else if(r===E.array&&n===E.array){if(e.length!==t.length)return{valid:!1};const s=[];for(let i=0;i<e.length;i++){const a=e[i],o=t[i],l=oi(a,o);if(!l.valid)return{valid:!1};s.push(l.data)}return{valid:!0,data:s}}else return r===E.date&&n===E.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class qr extends K{_parse(t){const{status:r,ctx:n}=this._processInputParams(t),s=(i,a)=>{if(ii(i)||ii(a))return H;const o=oi(i.value,a.value);return o.valid?((ai(i)||ai(a))&&r.dirty(),{status:r.value,value:o.data}):(D(n,{code:k.invalid_intersection_types}),H)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([i,a])=>s(i,a)):s(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}qr.create=(e,t,r)=>new qr({left:e,right:t,typeName:U.ZodIntersection,...B(r)});class ft extends K{_parse(t){const{status:r,ctx:n}=this._processInputParams(t);if(n.parsedType!==E.array)return D(n,{code:k.invalid_type,expected:E.array,received:n.parsedType}),H;if(n.data.length<this._def.items.length)return D(n,{code:k.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),H;!this._def.rest&&n.data.length>this._def.items.length&&(D(n,{code:k.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const i=[...n.data].map((a,o)=>{const l=this._def.items[o]||this._def.rest;return l?l._parse(new ut(n,a,n.path,o)):null}).filter(a=>!!a);return n.common.async?Promise.all(i).then(a=>Oe.mergeArray(r,a)):Oe.mergeArray(r,i)}get items(){return this._def.items}rest(t){return new ft({...this._def,rest:t})}}ft.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new ft({items:e,typeName:U.ZodTuple,rest:null,...B(t)})};class Jr extends K{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:r,ctx:n}=this._processInputParams(t);if(n.parsedType!==E.object)return D(n,{code:k.invalid_type,expected:E.object,received:n.parsedType}),H;const s=[],i=this._def.keyType,a=this._def.valueType;for(const o in n.data)s.push({key:i._parse(new ut(n,o,n.path,o)),value:a._parse(new ut(n,n.data[o],n.path,o)),alwaysSet:o in n.data});return n.common.async?Oe.mergeObjectAsync(r,s):Oe.mergeObjectSync(r,s)}get element(){return this._def.valueType}static create(t,r,n){return r instanceof K?new Jr({keyType:t,valueType:r,typeName:U.ZodRecord,...B(n)}):new Jr({keyType:Je.create(),valueType:t,typeName:U.ZodRecord,...B(r)})}}class Gn extends K{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:r,ctx:n}=this._processInputParams(t);if(n.parsedType!==E.map)return D(n,{code:k.invalid_type,expected:E.map,received:n.parsedType}),H;const s=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([o,l],c)=>({key:s._parse(new ut(n,o,n.path,[c,"key"])),value:i._parse(new ut(n,l,n.path,[c,"value"]))}));if(n.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const l of a){const c=await l.key,u=await l.value;if(c.status==="aborted"||u.status==="aborted")return H;(c.status==="dirty"||u.status==="dirty")&&r.dirty(),o.set(c.value,u.value)}return{status:r.value,value:o}})}else{const o=new Map;for(const l of a){const c=l.key,u=l.value;if(c.status==="aborted"||u.status==="aborted")return H;(c.status==="dirty"||u.status==="dirty")&&r.dirty(),o.set(c.value,u.value)}return{status:r.value,value:o}}}}Gn.create=(e,t,r)=>new Gn({valueType:t,keyType:e,typeName:U.ZodMap,...B(r)});class Qt extends K{_parse(t){const{status:r,ctx:n}=this._processInputParams(t);if(n.parsedType!==E.set)return D(n,{code:k.invalid_type,expected:E.set,received:n.parsedType}),H;const s=this._def;s.minSize!==null&&n.data.size<s.minSize.value&&(D(n,{code:k.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),r.dirty()),s.maxSize!==null&&n.data.size>s.maxSize.value&&(D(n,{code:k.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),r.dirty());const i=this._def.valueType;function a(l){const c=new Set;for(const u of l){if(u.status==="aborted")return H;u.status==="dirty"&&r.dirty(),c.add(u.value)}return{status:r.value,value:c}}const o=[...n.data.values()].map((l,c)=>i._parse(new ut(n,l,n.path,c)));return n.common.async?Promise.all(o).then(l=>a(l)):a(o)}min(t,r){return new Qt({...this._def,minSize:{value:t,message:N.toString(r)}})}max(t,r){return new Qt({...this._def,maxSize:{value:t,message:N.toString(r)}})}size(t,r){return this.min(t,r).max(t,r)}nonempty(t){return this.min(1,t)}}Qt.create=(e,t)=>new Qt({valueType:e,minSize:null,maxSize:null,typeName:U.ZodSet,...B(t)});class mr extends K{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:r}=this._processInputParams(t);if(r.parsedType!==E.function)return D(r,{code:k.invalid_type,expected:E.function,received:r.parsedType}),H;function n(o,l){return Hn({data:o,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Un(),yr].filter(c=>!!c),issueData:{code:k.invalid_arguments,argumentsError:l}})}function s(o,l){return Hn({data:o,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Un(),yr].filter(c=>!!c),issueData:{code:k.invalid_return_type,returnTypeError:l}})}const i={errorMap:r.common.contextualErrorMap},a=r.data;if(this._def.returns instanceof xr){const o=this;return Ee(async function(...l){const c=new Fe([]),u=await o._def.args.parseAsync(l,i).catch(x=>{throw c.addIssue(n(l,x)),c}),h=await Reflect.apply(a,this,u);return await o._def.returns._def.type.parseAsync(h,i).catch(x=>{throw c.addIssue(s(h,x)),c})})}else{const o=this;return Ee(function(...l){const c=o._def.args.safeParse(l,i);if(!c.success)throw new Fe([n(l,c.error)]);const u=Reflect.apply(a,this,c.data),h=o._def.returns.safeParse(u,i);if(!h.success)throw new Fe([s(u,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new mr({...this._def,args:ft.create(t).rest(Kt.create())})}returns(t){return new mr({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,r,n){return new mr({args:t||ft.create([]).rest(Kt.create()),returns:r||Kt.create(),typeName:U.ZodFunction,...B(n)})}}class Qr extends K{get schema(){return this._def.getter()}_parse(t){const{ctx:r}=this._processInputParams(t);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}}Qr.create=(e,t)=>new Qr({getter:e,typeName:U.ZodLazy,...B(t)});class Xr extends K{_parse(t){if(t.data!==this._def.value){const r=this._getOrReturnCtx(t);return D(r,{received:r.data,code:k.invalid_literal,expected:this._def.value}),H}return{status:"valid",value:t.data}}get value(){return this._def.value}}Xr.create=(e,t)=>new Xr({value:e,typeName:U.ZodLiteral,...B(t)});function uc(e,t){return new Nt({values:e,typeName:U.ZodEnum,...B(t)})}class Nt extends K{constructor(){super(...arguments),Pr.set(this,void 0)}_parse(t){if(typeof t.data!="string"){const r=this._getOrReturnCtx(t),n=this._def.values;return D(r,{expected:Q.joinValues(n),received:r.parsedType,code:k.invalid_type}),H}if(Wn(this,Pr)||oc(this,Pr,new Set(this._def.values)),!Wn(this,Pr).has(t.data)){const r=this._getOrReturnCtx(t),n=this._def.values;return D(r,{received:r.data,code:k.invalid_enum_value,options:n}),H}return Ee(t.data)}get options(){return this._def.values}get enum(){const t={};for(const r of this._def.values)t[r]=r;return t}get Values(){const t={};for(const r of this._def.values)t[r]=r;return t}get Enum(){const t={};for(const r of this._def.values)t[r]=r;return t}extract(t,r=this._def){return Nt.create(t,{...this._def,...r})}exclude(t,r=this._def){return Nt.create(this.options.filter(n=>!t.includes(n)),{...this._def,...r})}}Pr=new WeakMap;Nt.create=uc;class en extends K{constructor(){super(...arguments),Rr.set(this,void 0)}_parse(t){const r=Q.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(t);if(n.parsedType!==E.string&&n.parsedType!==E.number){const s=Q.objectValues(r);return D(n,{expected:Q.joinValues(s),received:n.parsedType,code:k.invalid_type}),H}if(Wn(this,Rr)||oc(this,Rr,new Set(Q.getValidEnumValues(this._def.values))),!Wn(this,Rr).has(t.data)){const s=Q.objectValues(r);return D(n,{received:n.data,code:k.invalid_enum_value,options:s}),H}return Ee(t.data)}get enum(){return this._def.values}}Rr=new WeakMap;en.create=(e,t)=>new en({values:e,typeName:U.ZodNativeEnum,...B(t)});class xr extends K{unwrap(){return this._def.type}_parse(t){const{ctx:r}=this._processInputParams(t);if(r.parsedType!==E.promise&&r.common.async===!1)return D(r,{code:k.invalid_type,expected:E.promise,received:r.parsedType}),H;const n=r.parsedType===E.promise?r.data:Promise.resolve(r.data);return Ee(n.then(s=>this._def.type.parseAsync(s,{path:r.path,errorMap:r.common.contextualErrorMap})))}}xr.create=(e,t)=>new xr({type:e,typeName:U.ZodPromise,...B(t)});class rt extends K{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===U.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:r,ctx:n}=this._processInputParams(t),s=this._def.effect||null,i={addIssue:a=>{D(n,a),a.fatal?r.abort():r.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),s.type==="preprocess"){const a=s.transform(n.data,i);if(n.common.async)return Promise.resolve(a).then(async o=>{if(r.value==="aborted")return H;const l=await this._def.schema._parseAsync({data:o,path:n.path,parent:n});return l.status==="aborted"?H:l.status==="dirty"||r.value==="dirty"?cr(l.value):l});{if(r.value==="aborted")return H;const o=this._def.schema._parseSync({data:a,path:n.path,parent:n});return o.status==="aborted"?H:o.status==="dirty"||r.value==="dirty"?cr(o.value):o}}if(s.type==="refinement"){const a=o=>{const l=s.refinement(o,i);if(n.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return o.status==="aborted"?H:(o.status==="dirty"&&r.dirty(),a(o.value),{status:r.value,value:o.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>o.status==="aborted"?H:(o.status==="dirty"&&r.dirty(),a(o.value).then(()=>({status:r.value,value:o.value}))))}if(s.type==="transform")if(n.common.async===!1){const a=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!qt(a))return a;const o=s.transform(a.value,i);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:o}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(a=>qt(a)?Promise.resolve(s.transform(a.value,i)).then(o=>({status:r.value,value:o})):a);Q.assertNever(s)}}rt.create=(e,t,r)=>new rt({schema:e,typeName:U.ZodEffects,effect:t,...B(r)});rt.createWithPreprocess=(e,t,r)=>new rt({schema:t,effect:{type:"preprocess",transform:e},typeName:U.ZodEffects,...B(r)});class ct extends K{_parse(t){return this._getType(t)===E.undefined?Ee(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}ct.create=(e,t)=>new ct({innerType:e,typeName:U.ZodOptional,...B(t)});class It extends K{_parse(t){return this._getType(t)===E.null?Ee(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}It.create=(e,t)=>new It({innerType:e,typeName:U.ZodNullable,...B(t)});class tn extends K{_parse(t){const{ctx:r}=this._processInputParams(t);let n=r.data;return r.parsedType===E.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:r.path,parent:r})}removeDefault(){return this._def.innerType}}tn.create=(e,t)=>new tn({innerType:e,typeName:U.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...B(t)});class rn extends K{_parse(t){const{ctx:r}=this._processInputParams(t),n={...r,common:{...r.common,issues:[]}},s=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return Wr(s)?s.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new Fe(n.common.issues)},input:n.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Fe(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}rn.create=(e,t)=>new rn({innerType:e,typeName:U.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...B(t)});class Kn extends K{_parse(t){if(this._getType(t)!==E.nan){const n=this._getOrReturnCtx(t);return D(n,{code:k.invalid_type,expected:E.nan,received:n.parsedType}),H}return{status:"valid",value:t.data}}}Kn.create=e=>new Kn({typeName:U.ZodNaN,...B(e)});const L0=Symbol("zod_brand");class Xi extends K{_parse(t){const{ctx:r}=this._processInputParams(t),n=r.data;return this._def.type._parse({data:n,path:r.path,parent:r})}unwrap(){return this._def.type}}class hn extends K{_parse(t){const{status:r,ctx:n}=this._processInputParams(t);if(n.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return i.status==="aborted"?H:i.status==="dirty"?(r.dirty(),cr(i.value)):this._def.out._parseAsync({data:i.value,path:n.path,parent:n})})();{const s=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return s.status==="aborted"?H:s.status==="dirty"?(r.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:n.path,parent:n})}}static create(t,r){return new hn({in:t,out:r,typeName:U.ZodPipeline})}}class nn extends K{_parse(t){const r=this._def.innerType._parse(t),n=s=>(qt(s)&&(s.value=Object.freeze(s.value)),s);return Wr(r)?r.then(s=>n(s)):n(r)}unwrap(){return this._def.innerType}}nn.create=(e,t)=>new nn({innerType:e,typeName:U.ZodReadonly,...B(t)});function eo(e,t){const r=typeof e=="function"?e(t):typeof e=="string"?{message:e}:e;return typeof r=="string"?{message:r}:r}function fc(e,t={},r){return e?vr.create().superRefine((n,s)=>{var i,a;const o=e(n);if(o instanceof Promise)return o.then(l=>{var c,u;if(!l){const h=eo(t,n),f=(u=(c=h.fatal)!==null&&c!==void 0?c:r)!==null&&u!==void 0?u:!0;s.addIssue({code:"custom",...h,fatal:f})}});if(!o){const l=eo(t,n),c=(a=(i=l.fatal)!==null&&i!==void 0?i:r)!==null&&a!==void 0?a:!0;s.addIssue({code:"custom",...l,fatal:c})}}):vr.create()}const N0={object:ue.lazycreate};var U;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(U||(U={}));const I0=(e,t={message:`Input not instance of ${e.name}`})=>fc(r=>r instanceof e,t),hc=Je.create,pc=Rt.create,F0=Kn.create,Y0=Lt.create,mc=Zr.create,z0=Jt.create,V0=Zn.create,U0=Br.create,H0=Gr.create,W0=vr.create,Z0=Kt.create,B0=Tt.create,G0=Bn.create,K0=Xe.create,q0=ue.create,J0=ue.strictCreate,Q0=Kr.create,X0=gs.create,ev=qr.create,tv=ft.create,rv=Jr.create,nv=Gn.create,sv=Qt.create,iv=mr.create,av=Qr.create,ov=Xr.create,lv=Nt.create,cv=en.create,dv=xr.create,to=rt.create,uv=ct.create,fv=It.create,hv=rt.createWithPreprocess,pv=hn.create,mv=()=>hc().optional(),gv=()=>pc().optional(),yv=()=>mc().optional(),vv={string:e=>Je.create({...e,coerce:!0}),number:e=>Rt.create({...e,coerce:!0}),boolean:e=>Zr.create({...e,coerce:!0}),bigint:e=>Lt.create({...e,coerce:!0}),date:e=>Jt.create({...e,coerce:!0})},xv=H;var Vt=Object.freeze({__proto__:null,defaultErrorMap:yr,setErrorMap:h0,getErrorMap:Un,makeIssue:Hn,EMPTY_PATH:p0,addIssueToContext:D,ParseStatus:Oe,INVALID:H,DIRTY:cr,OK:Ee,isAborted:ii,isDirty:ai,isValid:qt,isAsync:Wr,get util(){return Q},get objectUtil(){return si},ZodParsedType:E,getParsedType:bt,ZodType:K,datetimeRegex:dc,ZodString:Je,ZodNumber:Rt,ZodBigInt:Lt,ZodBoolean:Zr,ZodDate:Jt,ZodSymbol:Zn,ZodUndefined:Br,ZodNull:Gr,ZodAny:vr,ZodUnknown:Kt,ZodNever:Tt,ZodVoid:Bn,ZodArray:Xe,ZodObject:ue,ZodUnion:Kr,ZodDiscriminatedUnion:gs,ZodIntersection:qr,ZodTuple:ft,ZodRecord:Jr,ZodMap:Gn,ZodSet:Qt,ZodFunction:mr,ZodLazy:Qr,ZodLiteral:Xr,ZodEnum:Nt,ZodNativeEnum:en,ZodPromise:xr,ZodEffects:rt,ZodTransformer:rt,ZodOptional:ct,ZodNullable:It,ZodDefault:tn,ZodCatch:rn,ZodNaN:Kn,BRAND:L0,ZodBranded:Xi,ZodPipeline:hn,ZodReadonly:nn,custom:fc,Schema:K,ZodSchema:K,late:N0,get ZodFirstPartyTypeKind(){return U},coerce:vv,any:W0,array:K0,bigint:Y0,boolean:mc,date:z0,discriminatedUnion:X0,effect:to,enum:lv,function:iv,instanceof:I0,intersection:ev,lazy:av,literal:ov,map:nv,nan:F0,nativeEnum:cv,never:B0,null:H0,nullable:fv,number:pc,object:q0,oboolean:yv,onumber:gv,optional:uv,ostring:mv,pipeline:pv,preprocess:hv,promise:dv,record:rv,set:sv,strictObject:J0,string:hc,symbol:V0,transformer:to,tuple:tv,undefined:U0,union:Q0,unknown:Z0,void:G0,NEVER:xv,ZodIssueCode:k,quotelessJson:f0,ZodError:Fe});const li=["#1890ff","#52c41a","#fa8c16","#f5222d","#722ed1","#eb2f96","#faad14"],bv=Vt.object({title:Vt.string().min(1,{message:"Il titolo è obbligatorio"}),description:Vt.string().optional(),date:Vt.string().refine(e=>_(e,"YYYY-MM-DD",!0).isValid(),{message:"Data non valida"}),time:Vt.string().refine(e=>_(e,"HH:mm",!0).isValid(),{message:"Orario non valido"}),duration:Vt.number().min(5,{message:"La durata minima è di 5 minuti"}),color:Vt.string().refine(e=>li.includes(e),{message:"Colore non valido"})}),_v=({event:e,initialDate:t,onClose:r})=>{const{t:n}=We(),s=on(),{control:i,register:a,handleSubmit:o,setValue:l,watch:c,formState:{errors:u}}=o0({resolver:u0(bv),defaultValues:{title:(e==null?void 0:e.title)||"",description:(e==null?void 0:e.description)||"",date:e?_(e.date).format("YYYY-MM-DD"):t?t.format("YYYY-MM-DD"):_().format("YYYY-MM-DD"),time:e?_(e.date).format("HH:mm"):t?t.format("HH:mm"):_().format("HH:mm"),duration:(e==null?void 0:e.duration)||30,color:(e==null?void 0:e.color)||li[0]}}),h=c("color"),f=y=>{const w={title:y.title,description:y.description||"",date:_(`${y.date} ${y.time}`).format(),duration:y.duration,color:y.color};s(e?Vp({...w,id:e.id}):zp(w)),r()},x=()=>{e&&window.confirm(n("calendar.confirmDelete"))&&(s(Up(e.id)),r())},v=y=>{l("color",y)};return V.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]),d.jsx(jy,{onClick:y=>y.target===y.currentTarget&&r(),children:d.jsxs(Ey,{children:[d.jsxs(Ay,{children:[d.jsx("h2",{children:n(e?"calendar.editEvent":"calendar.addEvent")}),d.jsx("button",{onClick:r,"aria-label":n("common.close"),children:d.jsx(Fg,{})})]}),d.jsx(Py,{children:d.jsxs("form",{onSubmit:o(f),id:"event-form",children:[d.jsxs(Ut,{children:[d.jsxs("label",{htmlFor:"title",children:[d.jsx(Ng,{})," ",n("calendar.title")]}),d.jsx("input",{id:"title",...a("title"),placeholder:n("calendar.titlePlaceholder"),autoFocus:!0}),u.title&&d.jsx(yn,{children:u.title.message})]}),d.jsxs(Ut,{children:[d.jsx("label",{htmlFor:"description",children:n("calendar.description")}),d.jsx("textarea",{id:"description",...a("description"),placeholder:n("calendar.descriptionPlaceholder")})]}),d.jsxs(Ry,{children:[d.jsxs(Ut,{children:[d.jsxs("label",{htmlFor:"date",children:[d.jsx(gr,{})," ",n("calendar.date")]}),d.jsx("input",{id:"date",type:"date",...a("date")}),u.date&&d.jsx(yn,{children:u.date.message})]}),d.jsxs(Ut,{children:[d.jsxs("label",{htmlFor:"time",children:[d.jsx(Ag,{})," ",n("calendar.time")]}),d.jsx("input",{id:"time",type:"time",...a("time")}),u.time&&d.jsx(yn,{children:u.time.message})]})]}),d.jsxs(Ut,{children:[d.jsx("label",{htmlFor:"duration",children:n("calendar.duration")}),d.jsxs(Yy,{children:[d.jsx(By,{name:"duration",control:i,render:({field:y})=>d.jsx("input",{id:"duration",type:"number",min:"5",step:"5",...y,onChange:w=>{const j=parseInt(w.target.value,10);!isNaN(j)&&j>0&&y.onChange(j)}})}),d.jsx("span",{children:n("calendar.minutes")})]}),u.duration&&d.jsx(yn,{children:u.duration.message})]}),d.jsxs(Ut,{children:[d.jsx("label",{children:n("calendar.color")}),d.jsx(Ly,{children:li.map(y=>d.jsx(Ny,{$color:y,$selected:h===y,onClick:()=>v(y),"aria-label":`${n("calendar.selectColor")} ${y}`,type:"button"},y))})]})]})}),d.jsxs(Iy,{children:[e&&d.jsx(Ie,{onClick:x,variant:"primary",icon:d.jsx(Vl,{}),children:n("calendar.delete")}),d.jsxs(Fy,{children:[d.jsx(Ie,{onClick:r,variant:"secondary",children:n("common.cancel")}),d.jsx(Ie,{type:"submit",form:"event-form",variant:"primary",icon:d.jsx(Dg,{}),children:n("common.save")})]})]})]})})},vn=({view:e})=>{const{t}=We();on(),di(),_o();const r=Qe(jl),n=Qe(El),[s,i]=V.useState(!0),[a,o]=V.useState(!1),[l,c]=V.useState(void 0),[u,h]=V.useState(void 0);V.useEffect(()=>{Ul(),i(!1)},[]);const f=w=>{c(w),h(void 0),o(!0)},x=w=>{c(void 0),h(w),o(!0)},v=()=>{o(!1),c(void 0),h(void 0)},y=()=>{const w=_(r);if(s)return d.jsxs(Mg,{children:[d.jsx(Lg,{}),d.jsx("span",{children:t("common.loading")})]});switch(n){case"day":return d.jsx(fy,{currentDate:w,onEventClick:f});case"week":return d.jsx(Fa,{currentDate:w,onEventClick:f});case"month":return d.jsx(Dy,{currentDate:w,onEventClick:f,onAddEvent:x});default:return d.jsx(Fa,{currentDate:w,onEventClick:f})}};return d.jsxs(Og,{children:[d.jsx(ry,{onAddEvent:x}),d.jsx(Cg,{children:y()}),a&&d.jsx(_v,{event:l,initialDate:u,onClose:v})]})},wv=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,kv=g.div`
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${({theme:e})=>e.colors.text.primary};
  }
  
  p {
    color: ${({theme:e})=>e.colors.text.secondary};
    font-size: 1rem;
  }
`,ro=g.section`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background-color: ${({theme:e})=>e.colors.background.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,no=g.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.colors.text.primary};
`,xn=g.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,bn=g.div`
  margin-bottom: 0.5rem;
  
  h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
    color: ${({theme:e})=>e.colors.text.primary};
  }
  
  p {
    font-size: 0.875rem;
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,Sv=g.div`
  display: flex;
  gap: 1rem;
`,$v=g.input`
  display: none;
`;g.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.colors.accent.primary};
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.accent.primary};
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;const Tv=g.div`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  
  &.success {
    background-color: rgba(82, 196, 26, 0.1);
    color: #52c41a;
    border: 1px solid rgba(82, 196, 26, 0.2);
  }
  
  &.error {
    background-color: rgba(245, 34, 45, 0.1);
    color: #f5222d;
    border: 1px solid rgba(245, 34, 45, 0.2);
  }
`,Ov=(e,t="calendar-events.json")=>{try{const r={exportDate:new Date().toISOString(),version:"1.0.0",events:e},n=JSON.stringify(r,null,2),s=new Blob([n],{type:"application/json"}),i=URL.createObjectURL(s),a=document.createElement("a");a.href=i,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)}catch(r){throw console.error("Errore durante l'esportazione degli eventi:",r),new Error("Impossibile esportare gli eventi del calendario")}},Cv=e=>new Promise((t,r)=>{const n=new FileReader;n.onload=s=>{try{if(!s.target||!s.target.result)throw new Error("Errore nella lettura del file");const i=s.target.result,a=JSON.parse(i);if(!a.events||!Array.isArray(a.events))throw new Error("Il file non contiene eventi del calendario validi");const o=a.events.filter(l=>l.id&&l.title&&l.date&&typeof l.duration=="number");t(o)}catch(i){r(i)}},n.onerror=()=>{r(new Error("Errore nella lettura del file"))},n.readAsText(e)}),Mv=()=>{const{t:e}=We(),t=on(),r=Qe(hs),n=V.useRef(null),[s,i]=V.useState({type:null,message:""}),a=()=>{try{Ov(r),i({type:"success",message:e("settings.exportSuccess")}),setTimeout(()=>{i({type:null,message:""})},5e3)}catch{i({type:"error",message:e("settings.exportError")})}},o=()=>{n.current&&n.current.click()},l=async u=>{var f;const h=(f=u.target.files)==null?void 0:f[0];if(h)try{const x=await Cv(h);t(Zp(x)),i({type:"success",message:e("settings.importSuccess",{count:x.length})}),n.current&&(n.current.value=""),setTimeout(()=>{i({type:null,message:""})},5e3)}catch{i({type:"error",message:e("settings.importError")})}},c=()=>{window.confirm(e("settings.confirmClear"))&&(t(Bp()),i({type:"success",message:e("settings.clearSuccess")}),setTimeout(()=>{i({type:null,message:""})},5e3))};return d.jsxs(wv,{children:[d.jsxs(kv,{children:[d.jsx("h1",{children:e("settings.title")}),d.jsx("p",{children:e("settings.description")})]}),d.jsxs(ro,{children:[d.jsx(no,{children:e("settings.appearance")}),d.jsxs(xn,{children:[d.jsxs(bn,{children:[d.jsx("h3",{children:e("settings.theme")}),d.jsx("p",{children:e("settings.themeDescription")})]}),d.jsx(Il,{})]}),d.jsxs(xn,{children:[d.jsxs(bn,{children:[d.jsx("h3",{children:e("settings.colorPalette")}),d.jsx("p",{children:e("settings.colorPaletteDescription")})]}),d.jsx(Bi,{})]}),d.jsxs(xn,{children:[d.jsxs(bn,{children:[d.jsx("h3",{children:e("settings.language")}),d.jsx("p",{children:e("settings.languageDescription")})]}),d.jsx(zl,{})]})]}),d.jsxs(ro,{children:[d.jsx(no,{children:e("settings.dataManagement")}),d.jsxs(xn,{children:[d.jsxs(bn,{children:[d.jsx("h3",{children:e("settings.importExport")}),d.jsx("p",{children:e("settings.importExportDescription")})]}),d.jsxs(Sv,{children:[d.jsx(Ie,{onClick:a,icon:d.jsx(Pg,{}),disabled:r.length===0,children:e("settings.exportData")}),d.jsx(Ie,{onClick:o,icon:d.jsx(Ig,{}),variant:"secondary",children:e("settings.importData")}),d.jsx($v,{ref:n,type:"file",accept:".json",onChange:l}),d.jsx(Ie,{onClick:c,icon:d.jsx(Vl,{}),variant:"primary",disabled:r.length===0,children:e("settings.clearData")})]}),s.type&&d.jsx(Tv,{className:s.type,children:s.message})]})]})]})},Dv=g.div`
  background-color: ${({theme:e})=>e.mode==="light"?"#fffdf7":e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.sm}; /* GitHub usa bordi più arrotondati */
  overflow: hidden;
  transition: all 0.2s ease;
  
  ${({$bordered:e,theme:t})=>e&&$e`
    border: 1px solid ${t.colors.border.default};
  `}
  
  ${({$shadow:e,theme:t})=>{switch(e){case"sm":return $e`box-shadow: ${t.shadows.sm};`;case"md":return $e`box-shadow: ${t.shadows.md};`;case"lg":return $e`box-shadow: ${t.shadows.lg};`;case"none":default:return $e``}}}
  
  ${({$hoverable:e})=>e&&$e`
    &:hover {
      box-shadow: ${({theme:t})=>t.shadows.md};
      border-color: ${({theme:t})=>t.mode==="dark"?"rgba(255,255,255,0.1)":t.colors.accent.primary+"30"};
      transform: translateY(-2px); /* Movimento più sottile come in GitHub */
      background-color: ${({theme:t})=>t.mode==="light"?"#f8f6f1":t.colors.background.secondary};
    }
  `}
`,jv=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
`,Ev=g.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  margin: 0;
`,Av=g.div`
  display: flex;
  align-items: center;
`,Pv=g.div`
  padding: ${({theme:e})=>e.spacing.md};
`,Rv=g.div`
  padding: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border.default};
`,Dr=({children:e,title:t,extra:r,footer:n,hoverable:s=!1,bordered:i=!0,shadow:a="none",...o})=>d.jsxs(Dv,{$hoverable:s,$bordered:i,$shadow:a,...o,children:[(t||r)&&d.jsxs(jv,{children:[t&&d.jsx(Ev,{children:t}),r&&d.jsx(Av,{children:r})]}),d.jsx(Pv,{children:e}),n&&d.jsx(Rv,{children:n})]}),Lv=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.spacing.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.sm};
  }
`,Nv=g.header`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  
  h1 {
    font-size: ${({theme:e})=>e.typography.fontSize.xxl};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    margin-bottom: ${({theme:e})=>e.spacing.sm};
  }
  
  p {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,Iv=g.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xl};
`,Lr=g.section`
  h2 {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    margin-bottom: ${({theme:e})=>e.spacing.md};
  }
  
  p {
    margin-bottom: ${({theme:e})=>e.spacing.md};
    line-height: 1.6;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,Fv=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,Yv=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.background.secondary};
  }
`,zv=g.div`
  font-size: 2.5rem;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,Vv=g.div`
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,Uv=g(Lr)`
  margin-top: ${({theme:e})=>e.spacing.lg};
`,Hv=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
`,Wv=g.div`
  height: 100%;
`,Zv=g.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${({theme:e})=>e.borderRadius.md} ${({theme:e})=>e.borderRadius.md} 0 0;
`,Bv=g.div`
  padding: ${({theme:e})=>e.spacing.md};
  text-align: center;
`,Gv=g.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,Kv=g.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,qv=g.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.primary};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  text-align: left;
`,Jv=g.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing.sm};
`,Qv=g.a`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background-color: ${({theme:e})=>e.colors.primary};
  color: white;
  text-decoration: none;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primary};
    opacity: 0.9;
    transform: translateY(-2px);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`,Xv=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,ex=g.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>`${e.colors.background.secondary}40`};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: ${({theme:e})=>e.colors.primary};
  }
  
  span {
    font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  }
`,tx=()=>{const{t:e}=We(),t=[{name:"React 18",icon:"⚛️"},{name:"TypeScript",icon:"📝"},{name:"Redux Toolkit",icon:"🔄"},{name:"styled-components",icon:"💅"},{name:"React Router DOM",icon:"🛣️"},{name:"Vite",icon:"⚡"},{name:"React Hook Form",icon:"📋"},{name:"Zod",icon:"✓"},{name:"Moment.js",icon:"🕒"},{name:"Redux Persist",icon:"💾"}],r=[{name:"Viste multiple (giorno, settimana, mese)",icon:d.jsx(gr,{})},{name:"Tema chiaro e scuro personalizzabile",icon:d.jsx(Or,{})},{name:"Persistenza dati",icon:d.jsx(Or,{})},{name:"Import/Export eventi",icon:d.jsx(Or,{})},{name:"UI moderna e responsive",icon:d.jsx(Or,{})},{name:"Supporto multilingua",icon:d.jsx(Or,{})}],n=[{name:"5h1ngy",role:"Autore Principale",bio:"Sviluppatore frontend con particolare attenzione all'architettura, performance e UX avanzata. Specializzato nell'ecosistema React e nell'implementazione di design system scalabili.",github:"https://github.com/5h1ngy",avatar:"/avatar_5h1ngy.png"},{name:"Davide1786",role:"Collaboratore & Fork Maintainer",bio:"Frontend developer con focus su UI/UX e architettura moderna delle applicazioni web. Passione per le applicazioni React ottimizzate e responsive che offrono esperienze utente eccellenti.",github:"https://github.com/Davide1786",avatar:"/avatar_davide.jpg"}];return d.jsxs(d.Fragment,{children:[d.jsxs(pi,{children:[d.jsxs("title",{children:[e("pages.about.title")," | ",e("common.appName")]}),d.jsx("meta",{name:"description",content:e("meta.description")})]}),d.jsxs(Lv,{children:[d.jsxs(Nv,{children:[d.jsx("h1",{children:e("common.appName")}),d.jsx("p",{children:e("pages.about.subtitle")})]}),d.jsxs(Iv,{children:[d.jsxs(Lr,{children:[d.jsx("h2",{children:e("pages.about.projectOverview")}),d.jsxs(Dr,{shadow:"md",children:[d.jsxs("p",{children:[e("common.appName")," ",e("pages.about.description","è un'applicazione moderna per la gestione degli eventi e degli appuntamenti con un'interfaccia utente ispirata agli standard UI/UX del 2025.")]}),d.jsx("p",{children:e("pages.about.projectHistory",`Questo progetto è un refactoring profondo del progetto originale "Calendar", ricostruito completamente utilizzando il boilerplate bl-custom-fe-react come base, ma con significativi miglioramenti nell'architettura, UI/UX e funzionalità.`)}),d.jsx("p",{children:e("pages.about.projectCapabilities","L'applicazione offre multiple viste calendario (giorno, settimana, mese), gestione completa degli eventi, persistenza dei dati e funzionalità di import/export per il backup dei dati.")})]})]}),d.jsxs(Lr,{children:[d.jsx("h2",{children:e("pages.about.techStack")}),d.jsx(Dr,{shadow:"sm",children:d.jsx(Fv,{children:t.map((s,i)=>d.jsxs(Yv,{children:[d.jsx(zv,{children:s.icon}),d.jsx(Vv,{children:s.name})]},i))})})]}),d.jsxs(Uv,{children:[d.jsx("h2",{children:e("pages.about.meetTheTeam")}),d.jsx(Hv,{children:n.map((s,i)=>d.jsx(Wv,{children:d.jsxs(Dr,{hoverable:!0,shadow:"md",children:[d.jsx(Zv,{src:s.avatar||`https://ui-avatars.com/api/?name=${s.name}&background=random`,alt:s.name}),d.jsxs(Bv,{children:[d.jsx(Gv,{children:s.name}),d.jsx(Kv,{children:s.role}),d.jsx(qv,{children:s.bio}),d.jsx(Jv,{children:d.jsxs(Qv,{href:s.github,target:"_blank",rel:"noopener noreferrer",children:[d.jsx(Rg,{})," GitHub"]})})]})]})},i))})]}),d.jsxs(Lr,{children:[d.jsx("h2",{children:e("pages.about.features")}),d.jsx(Dr,{shadow:"md",children:d.jsx(Xv,{children:r.map((s,i)=>d.jsxs(ex,{children:[s.icon,d.jsx("span",{children:s.name})]},i))})})]}),d.jsxs(Lr,{children:[d.jsx("h2",{children:e("pages.about.gettingStarted")}),d.jsxs(Dr,{shadow:"md",children:[d.jsx("p",{children:e("pages.about.readyToUse","Pronto a utilizzare questa applicazione? Esplora le varie visualizzazioni (giorno, settimana, mese) e inizia ad aggiungere i tuoi eventi!")}),d.jsx("p",{children:e("pages.about.customizeInterface","Puoi personalizzare l'interfaccia nelle impostazioni, scegliendo tra tema chiaro e scuro, e selezionando la tua palette di colori preferita.")}),d.jsx(Ie,{variant:"primary",icon:d.jsx(gr,{}),onClick:()=>window.location.href="/",children:e("pages.notFound.backToHome")})]})]})]})]})]})},rx=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
`,nx=g.div`
  text-align: center;
  max-width: 600px;
  padding: ${({theme:e})=>e.spacing.xl};
`,sx=g.h1`
  font-size: 8rem;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  line-height: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: 6rem;
  }
`,ix=g.p`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
  }
`,ax=g.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  justify-content: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,ox=()=>{const e=di(),{t}=We();return d.jsxs(d.Fragment,{children:[d.jsxs(pi,{children:[d.jsxs("title",{children:[t("pages.notFound.title")," | ",t("common.appName")]}),d.jsx("meta",{name:"description",content:t("pages.notFound.message")})]}),d.jsx(rx,{children:d.jsxs(nx,{children:[d.jsx(sx,{children:"404"}),d.jsx(ix,{children:t("pages.notFound.message")}),d.jsxs(ax,{children:[d.jsx(Ie,{variant:"primary",size:"large",onClick:()=>e("/"),children:t("pages.notFound.backToHome")}),d.jsx(Ie,{variant:"secondary",size:"large",onClick:()=>e(-1),children:t("common.goBack","Go Back")})]})]})})]})},lx=()=>{const e="fe-react-poc-calendar";return V.useEffect(()=>{},[]),d.jsx(ko,{store:Zi,children:d.jsx(Lo,{loading:null,persistor:Cm,children:d.jsx(Ro,{children:d.jsxs(hi,{children:[d.jsxs(pi,{children:[d.jsx("title",{children:e}),d.jsx("meta",{name:"description",content:"A modern React calendar application with multiple views and event management"})]}),d.jsx(zc,{children:d.jsxs(Mt,{path:"/",element:d.jsx(Tg,{}),children:[d.jsx(Mt,{index:!0,element:d.jsx(vn,{})}),d.jsx(Mt,{path:"month",element:d.jsx(vn,{view:"month"})}),d.jsx(Mt,{path:"week",element:d.jsx(vn,{view:"week"})}),d.jsx(Mt,{path:"day",element:d.jsx(vn,{view:"day"})}),d.jsx(Mt,{path:"settings",element:d.jsx(Mv,{})}),d.jsx(Mt,{path:"about",element:d.jsx(tx,{})}),d.jsx(Mt,{path:"*",element:d.jsx(ox,{})})]})})]})})})})},Z=e=>typeof e=="string",jr=()=>{let e,t;const r=new Promise((n,s)=>{e=n,t=s});return r.resolve=e,r.reject=t,r},so=e=>e==null?"":""+e,cx=(e,t,r)=>{e.forEach(n=>{t[n]&&(r[n]=t[n])})},dx=/###/g,io=e=>e&&e.indexOf("###")>-1?e.replace(dx,"."):e,ao=e=>!e||Z(e),Yr=(e,t,r)=>{const n=Z(t)?t.split("."):t;let s=0;for(;s<n.length-1;){if(ao(e))return{};const i=io(n[s]);!e[i]&&r&&(e[i]=new r),Object.prototype.hasOwnProperty.call(e,i)?e=e[i]:e={},++s}return ao(e)?{}:{obj:e,k:io(n[s])}},oo=(e,t,r)=>{const{obj:n,k:s}=Yr(e,t,Object);if(n!==void 0||t.length===1){n[s]=r;return}let i=t[t.length-1],a=t.slice(0,t.length-1),o=Yr(e,a,Object);for(;o.obj===void 0&&a.length;)i=`${a[a.length-1]}.${i}`,a=a.slice(0,a.length-1),o=Yr(e,a,Object),o&&o.obj&&typeof o.obj[`${o.k}.${i}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${i}`]=r},ux=(e,t,r,n)=>{const{obj:s,k:i}=Yr(e,t,Object);s[i]=s[i]||[],s[i].push(r)},qn=(e,t)=>{const{obj:r,k:n}=Yr(e,t);if(r)return r[n]},fx=(e,t,r)=>{const n=qn(e,r);return n!==void 0?n:qn(t,r)},gc=(e,t,r)=>{for(const n in t)n!=="__proto__"&&n!=="constructor"&&(n in e?Z(e[n])||e[n]instanceof String||Z(t[n])||t[n]instanceof String?r&&(e[n]=t[n]):gc(e[n],t[n],r):e[n]=t[n]);return e},sr=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var hx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const px=e=>Z(e)?e.replace(/[&<>"'\/]/g,t=>hx[t]):e;class mx{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const r=this.regExpMap.get(t);if(r!==void 0)return r;const n=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,n),this.regExpQueue.push(t),n}}const gx=[" ",",","?","!",";"],yx=new mx(20),vx=(e,t,r)=>{t=t||"",r=r||"";const n=gx.filter(a=>t.indexOf(a)<0&&r.indexOf(a)<0);if(n.length===0)return!0;const s=yx.getRegExp(`(${n.map(a=>a==="?"?"\\?":a).join("|")})`);let i=!s.test(e);if(!i){const a=e.indexOf(r);a>0&&!s.test(e.substring(0,a))&&(i=!0)}return i},ci=function(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const n=t.split(r);let s=e;for(let i=0;i<n.length;){if(!s||typeof s!="object")return;let a,o="";for(let l=i;l<n.length;++l)if(l!==i&&(o+=r),o+=n[l],a=s[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<n.length-1)continue;i+=l-i+1;break}s=a}return s},Jn=e=>e&&e.replace("_","-"),xx={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Qn{constructor(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,r)}init(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=t||xx,this.options=r,this.debug=r.debug}log(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return this.forward(r,"log","",!0)}warn(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return this.forward(r,"warn","",!0)}error(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return this.forward(r,"error","")}deprecate(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}forward(t,r,n,s){return s&&!this.debug?null:(Z(t[0])&&(t[0]=`${n}${this.prefix} ${t[0]}`),this.logger[r](t))}create(t){return new Qn(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Qn(this.logger,t)}}var lt=new Qn;class ys{constructor(){this.observers={}}on(t,r){return t.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const s=this.observers[n].get(r)||0;this.observers[n].set(r,s+1)}),this}off(t,r){if(this.observers[t]){if(!r){delete this.observers[t];return}this.observers[t].delete(r)}}emit(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),s=1;s<r;s++)n[s-1]=arguments[s];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(a=>{let[o,l]=a;for(let c=0;c<l;c++)o(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[o,l]=a;for(let c=0;c<l;c++)o.apply(o,[t,...n])})}}class lo extends ys{constructor(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const r=this.options.ns.indexOf(t);r>-1&&this.options.ns.splice(r,1)}getResource(t,r,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,a=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;t.indexOf(".")>-1?o=t.split("."):(o=[t,r],n&&(Array.isArray(n)?o.push(...n):Z(n)&&i?o.push(...n.split(i)):o.push(n)));const l=qn(this.data,o);return!l&&!r&&!n&&t.indexOf(".")>-1&&(t=o[0],r=o[1],n=o.slice(2).join(".")),l||!a||!Z(n)?l:ci(this.data&&this.data[t]&&this.data[t][r],n,i)}addResource(t,r,n,s){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let o=[t,r];n&&(o=o.concat(a?n.split(a):n)),t.indexOf(".")>-1&&(o=t.split("."),s=r,r=o[1]),this.addNamespaces(r),oo(this.data,o,s),i.silent||this.emit("added",t,r,n,s)}addResources(t,r,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const i in n)(Z(n[i])||Array.isArray(n[i]))&&this.addResource(t,r,i,n[i],{silent:!0});s.silent||this.emit("added",t,r,n)}addResourceBundle(t,r,n,s,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[t,r];t.indexOf(".")>-1&&(o=t.split("."),s=n,n=r,r=o[1]),this.addNamespaces(r);let l=qn(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),s?gc(l,n,i):l={...l,...n},oo(this.data,o,l),a.silent||this.emit("added",t,r,n)}removeResourceBundle(t,r){this.hasResourceBundle(t,r)&&delete this.data[t][r],this.removeNamespaces(r),this.emit("removed",t,r)}hasResourceBundle(t,r){return this.getResource(t,r)!==void 0}getResourceBundle(t,r){return r||(r=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,r)}:this.getResource(t,r)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const r=this.getDataByLanguage(t);return!!(r&&Object.keys(r)||[]).find(s=>r[s]&&Object.keys(r[s]).length>0)}toJSON(){return this.data}}var yc={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,r,n,s){return e.forEach(i=>{this.processors[i]&&(t=this.processors[i].process(t,r,n,s))}),t}};const co={};class Xn extends ys{constructor(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),cx(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=lt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const n=this.resolve(t,r);return n&&n.res!==void 0}extractFromKey(t,r){let n=r.nsSeparator!==void 0?r.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const s=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let i=r.ns||this.options.defaultNS||[];const a=n&&t.indexOf(n)>-1,o=!this.options.userDefinedKeySeparator&&!r.keySeparator&&!this.options.userDefinedNsSeparator&&!r.nsSeparator&&!vx(t,n,s);if(a&&!o){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:Z(i)?[i]:i};const c=t.split(n);(n!==s||n===s&&this.options.ns.indexOf(c[0])>-1)&&(i=c.shift()),t=c.join(s)}return{key:t,namespaces:Z(i)?[i]:i}}translate(t,r,n){if(typeof r!="object"&&this.options.overloadTranslationOptionHandler&&(r=this.options.overloadTranslationOptionHandler(arguments)),typeof r=="object"&&(r={...r}),r||(r={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const s=r.returnDetails!==void 0?r.returnDetails:this.options.returnDetails,i=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,{key:a,namespaces:o}=this.extractFromKey(t[t.length-1],r),l=o[o.length-1],c=r.lng||this.language,u=r.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const T=r.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${T}${a}`,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(r)}:`${l}${T}${a}`}return s?{res:a,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(r)}:a}const h=this.resolve(t,r);let f=h&&h.res;const x=h&&h.usedKey||a,v=h&&h.exactUsedKey||a,y=Object.prototype.toString.apply(f),w=["[object Number]","[object Function]","[object RegExp]"],j=r.joinArrays!==void 0?r.joinArrays:this.options.joinArrays,$=!this.i18nFormat||this.i18nFormat.handleAsObject,I=!Z(f)&&typeof f!="boolean"&&typeof f!="number";if($&&f&&I&&w.indexOf(y)<0&&!(Z(j)&&Array.isArray(f))){if(!r.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const T=this.options.returnedObjectHandler?this.options.returnedObjectHandler(x,f,{...r,ns:o}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(h.res=T,h.usedParams=this.getUsedParamsDetails(r),h):T}if(i){const T=Array.isArray(f),P=T?[]:{},F=T?v:x;for(const W in f)if(Object.prototype.hasOwnProperty.call(f,W)){const be=`${F}${i}${W}`;P[W]=this.translate(be,{...r,joinArrays:!1,ns:o}),P[W]===be&&(P[W]=f[W])}f=P}}else if($&&Z(j)&&Array.isArray(f))f=f.join(j),f&&(f=this.extendTranslation(f,t,r,n));else{let T=!1,P=!1;const F=r.count!==void 0&&!Z(r.count),W=Xn.hasDefaultValue(r),be=F?this.pluralResolver.getSuffix(c,r.count,r):"",oe=r.ordinal&&F?this.pluralResolver.getSuffix(c,r.count,{ordinal:!1}):"",Pe=F&&!r.ordinal&&r.count===0&&this.pluralResolver.shouldUseIntlApi(),_e=Pe&&r[`defaultValue${this.options.pluralSeparator}zero`]||r[`defaultValue${be}`]||r[`defaultValue${oe}`]||r.defaultValue;!this.isValidLookup(f)&&W&&(T=!0,f=_e),this.isValidLookup(f)||(P=!0,f=a);const q=(r.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&P?void 0:f,ae=W&&_e!==f&&this.options.updateMissing;if(P||T||ae){if(this.logger.log(ae?"updateKey":"missingKey",c,l,a,ae?_e:f),i){const fe=this.resolve(a,{...r,keySeparator:!1});fe&&fe.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ge=[];const we=this.languageUtils.getFallbackCodes(this.options.fallbackLng,r.lng||this.language);if(this.options.saveMissingTo==="fallback"&&we&&we[0])for(let fe=0;fe<we.length;fe++)ge.push(we[fe]);else this.options.saveMissingTo==="all"?ge=this.languageUtils.toResolveHierarchy(r.lng||this.language):ge.push(r.lng||this.language);const Re=(fe,Le,st)=>{const er=W&&st!==f?st:q;this.options.missingKeyHandler?this.options.missingKeyHandler(fe,l,Le,er,ae,r):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(fe,l,Le,er,ae,r),this.emit("missingKey",fe,l,Le,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&F?ge.forEach(fe=>{const Le=this.pluralResolver.getSuffixes(fe,r);Pe&&r[`defaultValue${this.options.pluralSeparator}zero`]&&Le.indexOf(`${this.options.pluralSeparator}zero`)<0&&Le.push(`${this.options.pluralSeparator}zero`),Le.forEach(st=>{Re([fe],a+st,r[`defaultValue${st}`]||_e)})}):Re(ge,a,_e))}f=this.extendTranslation(f,t,r,h,n),P&&f===a&&this.options.appendNamespaceToMissingKey&&(f=`${l}:${a}`),(P||T)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,T?f:void 0):f=this.options.parseMissingKeyHandler(f))}return s?(h.res=f,h.usedParams=this.getUsedParamsDetails(r),h):f}extendTranslation(t,r,n,s,i){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const c=Z(t)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const f=t.match(this.interpolator.nestingRegexp);u=f&&f.length}let h=n.replace&&!Z(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),t=this.interpolator.interpolate(t,h,n.lng||this.language||s.usedLng,n),c){const f=t.match(this.interpolator.nestingRegexp),x=f&&f.length;u<x&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&s&&s.res&&(n.lng=this.language||s.usedLng),n.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var f=arguments.length,x=new Array(f),v=0;v<f;v++)x[v]=arguments[v];return i&&i[0]===x[0]&&!n.context?(a.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${r[0]}`),null):a.translate(...x,r)},n)),n.interpolation&&this.interpolator.reset()}const o=n.postProcess||this.options.postProcess,l=Z(o)?[o]:o;return t!=null&&l&&l.length&&n.applyPostProcessor!==!1&&(t=yc.handle(l,t,r,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),t}resolve(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,s,i,a,o;return Z(t)&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,r),u=c.key;s=u;let h=c.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const f=r.count!==void 0&&!Z(r.count),x=f&&!r.ordinal&&r.count===0&&this.pluralResolver.shouldUseIntlApi(),v=r.context!==void 0&&(Z(r.context)||typeof r.context=="number")&&r.context!=="",y=r.lngs?r.lngs:this.languageUtils.toResolveHierarchy(r.lng||this.language,r.fallbackLng);h.forEach(w=>{this.isValidLookup(n)||(o=w,!co[`${y[0]}-${w}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(o)&&(co[`${y[0]}-${w}`]=!0,this.logger.warn(`key "${s}" for languages "${y.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),y.forEach(j=>{if(this.isValidLookup(n))return;a=j;const $=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys($,u,j,w,r);else{let T;f&&(T=this.pluralResolver.getSuffix(j,r.count,r));const P=`${this.options.pluralSeparator}zero`,F=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&($.push(u+T),r.ordinal&&T.indexOf(F)===0&&$.push(u+T.replace(F,this.options.pluralSeparator)),x&&$.push(u+P)),v){const W=`${u}${this.options.contextSeparator}${r.context}`;$.push(W),f&&($.push(W+T),r.ordinal&&T.indexOf(F)===0&&$.push(W+T.replace(F,this.options.pluralSeparator)),x&&$.push(W+P))}}let I;for(;I=$.pop();)this.isValidLookup(n)||(i=I,n=this.getResource(j,w,I,r))}))})}),{res:n,usedKey:s,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,r,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,r,n,s):this.resourceStore.getResource(t,r,n,s)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const r=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=t.replace&&!Z(t.replace);let s=n?t.replace:t;if(n&&typeof t.count<"u"&&(s.count=t.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!n){s={...s};for(const i of r)delete s[i]}return s}static hasDefaultValue(t){const r="defaultValue";for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&r===n.substring(0,r.length)&&t[n]!==void 0)return!0;return!1}}const Ps=e=>e.charAt(0).toUpperCase()+e.slice(1);class uo{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=lt.create("languageUtils")}getScriptPartFromCode(t){if(t=Jn(t),!t||t.indexOf("-")<0)return null;const r=t.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}getLanguagePartFromCode(t){if(t=Jn(t),!t||t.indexOf("-")<0)return t;const r=t.split("-");return this.formatLanguageCode(r[0])}formatLanguageCode(t){if(Z(t)&&t.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let s=Intl.getCanonicalLocales(t)[0];if(s&&this.options.lowerCaseLng&&(s=s.toLowerCase()),s)return s}catch{}const r=["hans","hant","latn","cyrl","cans","mong","arab"];let n=t.split("-");return this.options.lowerCaseLng?n=n.map(s=>s.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),r.indexOf(n[1].toLowerCase())>-1&&(n[1]=Ps(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),r.indexOf(n[1].toLowerCase())>-1&&(n[1]=Ps(n[1].toLowerCase())),r.indexOf(n[2].toLowerCase())>-1&&(n[2]=Ps(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let r;return t.forEach(n=>{if(r)return;const s=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(s))&&(r=s)}),!r&&this.options.supportedLngs&&t.forEach(n=>{if(r)return;const s=this.getLanguagePartFromCode(n);if(this.isSupportedCode(s))return r=s;r=this.options.supportedLngs.find(i=>{if(i===s)return i;if(!(i.indexOf("-")<0&&s.indexOf("-")<0)&&(i.indexOf("-")>0&&s.indexOf("-")<0&&i.substring(0,i.indexOf("-"))===s||i.indexOf(s)===0&&s.length>1))return i})}),r||(r=this.getFallbackCodes(this.options.fallbackLng)[0]),r}getFallbackCodes(t,r){if(!t)return[];if(typeof t=="function"&&(t=t(r)),Z(t)&&(t=[t]),Array.isArray(t))return t;if(!r)return t.default||[];let n=t[r];return n||(n=t[this.getScriptPartFromCode(r)]),n||(n=t[this.formatLanguageCode(r)]),n||(n=t[this.getLanguagePartFromCode(r)]),n||(n=t.default),n||[]}toResolveHierarchy(t,r){const n=this.getFallbackCodes(r||this.options.fallbackLng||[],t),s=[],i=a=>{a&&(this.isSupportedCode(a)?s.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return Z(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&i(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&i(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&i(this.getLanguagePartFromCode(t))):Z(t)&&i(this.formatLanguageCode(t)),n.forEach(a=>{s.indexOf(a)<0&&i(this.formatLanguageCode(a))}),s}}let bx=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],_x={1:e=>+(e>1),2:e=>+(e!=1),3:e=>0,4:e=>e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,5:e=>e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5,6:e=>e==1?0:e>=2&&e<=4?1:2,7:e=>e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,8:e=>e==1?0:e==2?1:e!=8&&e!=11?2:3,9:e=>+(e>=2),10:e=>e==1?0:e==2?1:e<7?2:e<11?3:4,11:e=>e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3,12:e=>+(e%10!=1||e%100==11),13:e=>+(e!==0),14:e=>e==1?0:e==2?1:e==3?2:3,15:e=>e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2,16:e=>e%10==1&&e%100!=11?0:e!==0?1:2,17:e=>e==1||e%10==1&&e%100!=11?0:1,18:e=>e==0?0:e==1?1:2,19:e=>e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3,20:e=>e==1?0:e==0||e%100>0&&e%100<20?1:2,21:e=>e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0,22:e=>e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3};const wx=["v1","v2","v3"],kx=["v4"],fo={zero:0,one:1,two:2,few:3,many:4,other:5},Sx=()=>{const e={};return bx.forEach(t=>{t.lngs.forEach(r=>{e[r]={numbers:t.nr,plurals:_x[t.fc]}})}),e};class $x{constructor(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=r,this.logger=lt.create("pluralResolver"),(!this.options.compatibilityJSON||kx.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Sx(),this.pluralRulesCache={}}addRule(t,r){this.rules[t]=r}clearCache(){this.pluralRulesCache={}}getRule(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const n=Jn(t==="dev"?"en":t),s=r.ordinal?"ordinal":"cardinal",i=JSON.stringify({cleanedCode:n,type:s});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:s})}catch{if(!t.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(t);a=this.getRule(l,r)}return this.pluralRulesCache[i]=a,a}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(t,r);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(t,r){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,n).map(s=>`${r}${s}`)}getSuffixes(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(t,r);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((s,i)=>fo[s]-fo[i]).map(s=>`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${s}`):n.numbers.map(s=>this.getSuffix(t,s,r)):[]}getSuffix(t,r){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(t,n);return s?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${s.select(r)}`:this.getSuffixRetroCompatible(s,r):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,r){const n=t.noAbs?t.plurals(r):t.plurals(Math.abs(r));let s=t.numbers[n];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(s===2?s="plural":s===1&&(s=""));const i=()=>this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString();return this.options.compatibilityJSON==="v1"?s===1?"":typeof s=="number"?`_plural_${s.toString()}`:i():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?i():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!wx.includes(this.options.compatibilityJSON)}}const ho=function(e,t,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,i=fx(e,t,r);return!i&&s&&Z(r)&&(i=ci(e,r,n),i===void 0&&(i=ci(t,r,n))),i},Rs=e=>e.replace(/\$/g,"$$$$");class Tx{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=lt.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(r=>r),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:r,escapeValue:n,useRawValueToEscape:s,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:h,nestingPrefix:f,nestingPrefixEscaped:x,nestingSuffix:v,nestingSuffixEscaped:y,nestingOptionsSeparator:w,maxReplaces:j,alwaysFormat:$}=t.interpolation;this.escape=r!==void 0?r:px,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=i?sr(i):a||"{{",this.suffix=o?sr(o):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=f?sr(f):x||sr("$t("),this.nestingSuffix=v?sr(v):y||sr(")"),this.nestingOptionsSeparator=w||",",this.maxReplaces=j||1e3,this.alwaysFormat=$!==void 0?$:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(r,n)=>r&&r.source===n?(r.lastIndex=0,r):new RegExp(n,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,r,n,s){let i,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=x=>{if(x.indexOf(this.formatSeparator)<0){const j=ho(r,l,x,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(j,void 0,n,{...s,...r,interpolationkey:x}):j}const v=x.split(this.formatSeparator),y=v.shift().trim(),w=v.join(this.formatSeparator).trim();return this.format(ho(r,l,y,this.options.keySeparator,this.options.ignoreJSONStructure),w,n,{...s,...r,interpolationkey:y})};this.resetRegExp();const u=s&&s.missingInterpolationHandler||this.options.missingInterpolationHandler,h=s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:x=>Rs(x)},{regex:this.regexp,safeValue:x=>this.escapeValue?Rs(this.escape(x)):Rs(x)}].forEach(x=>{for(o=0;i=x.regex.exec(t);){const v=i[1].trim();if(a=c(v),a===void 0)if(typeof u=="function"){const w=u(t,i,s);a=Z(w)?w:""}else if(s&&Object.prototype.hasOwnProperty.call(s,v))a="";else if(h){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${v} for interpolating ${t}`),a="";else!Z(a)&&!this.useRawValueToEscape&&(a=so(a));const y=x.safeValue(a);if(t=t.replace(i[0],y),h?(x.regex.lastIndex+=a.length,x.regex.lastIndex-=i[0].length):x.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),t}nest(t,r){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,i,a;const o=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const h=l.split(new RegExp(`${u}[ ]*{`));let f=`{${h[1]}`;l=h[0],f=this.interpolate(f,a);const x=f.match(/'/g),v=f.match(/"/g);(x&&x.length%2===0&&!v||v.length%2!==0)&&(f=f.replace(/'/g,'"'));try{a=JSON.parse(f),c&&(a={...c,...a})}catch(y){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,y),`${l}${u}${f}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;s=this.nestingRegexp.exec(t);){let l=[];a={...n},a=a.replace&&!Z(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const u=s[1].split(this.formatSeparator).map(h=>h.trim());s[1]=u.shift(),l=u,c=!0}if(i=r(o.call(this,s[1].trim(),a),a),i&&s[0]===t&&!Z(i))return i;Z(i)||(i=so(i)),i||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${t}`),i=""),c&&(i=l.reduce((u,h)=>this.format(u,h,n.lng,{...n,interpolationkey:s[1].trim()}),i.trim())),t=t.replace(s[0],i),this.regexp.lastIndex=0}return t}}const Ox=e=>{let t=e.toLowerCase().trim();const r={};if(e.indexOf("(")>-1){const n=e.split("(");t=n[0].toLowerCase().trim();const s=n[1].substring(0,n[1].length-1);t==="currency"&&s.indexOf(":")<0?r.currency||(r.currency=s.trim()):t==="relativetime"&&s.indexOf(":")<0?r.range||(r.range=s.trim()):s.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=o.trim();r[u]||(r[u]=c),c==="false"&&(r[u]=!1),c==="true"&&(r[u]=!0),isNaN(c)||(r[u]=parseInt(c,10))}})}return{formatName:t,formatOptions:r}},ir=e=>{const t={};return(r,n,s)=>{let i=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(i={...i,[s.interpolationkey]:void 0});const a=n+JSON.stringify(i);let o=t[a];return o||(o=e(Jn(n),s),t[a]=o),o(r)}};class Cx{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=lt.create("formatter"),this.options=t,this.formats={number:ir((r,n)=>{const s=new Intl.NumberFormat(r,{...n});return i=>s.format(i)}),currency:ir((r,n)=>{const s=new Intl.NumberFormat(r,{...n,style:"currency"});return i=>s.format(i)}),datetime:ir((r,n)=>{const s=new Intl.DateTimeFormat(r,{...n});return i=>s.format(i)}),relativetime:ir((r,n)=>{const s=new Intl.RelativeTimeFormat(r,{...n});return i=>s.format(i,n.range||"day")}),list:ir((r,n)=>{const s=new Intl.ListFormat(r,{...n});return i=>s.format(i)})},this.init(t)}init(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=r.interpolation.formatSeparator||","}add(t,r){this.formats[t.toLowerCase().trim()]=r}addCached(t,r){this.formats[t.toLowerCase().trim()]=ir(r)}format(t,r,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=r.split(this.formatSeparator);if(i.length>1&&i[0].indexOf("(")>1&&i[0].indexOf(")")<0&&i.find(o=>o.indexOf(")")>-1)){const o=i.findIndex(l=>l.indexOf(")")>-1);i[0]=[i[0],...i.splice(1,o)].join(this.formatSeparator)}return i.reduce((o,l)=>{const{formatName:c,formatOptions:u}=Ox(l);if(this.formats[c]){let h=o;try{const f=s&&s.formatParams&&s.formatParams[s.interpolationkey]||{},x=f.locale||f.lng||s.locale||s.lng||n;h=this.formats[c](o,x,{...u,...s,...f})}catch(f){this.logger.warn(f)}return h}else this.logger.warn(`there was no format function for ${c}`);return o},t)}}const Mx=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class Dx extends ys{constructor(t,r,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=r,this.services=n,this.languageUtils=n.languageUtils,this.options=s,this.logger=lt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,s.backend,s)}queueLoad(t,r,n,s){const i={},a={},o={},l={};return t.forEach(c=>{let u=!0;r.forEach(h=>{const f=`${c}|${h}`;!n.reload&&this.store.hasResourceBundle(c,h)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?a[f]===void 0&&(a[f]=!0):(this.state[f]=1,u=!1,a[f]===void 0&&(a[f]=!0),i[f]===void 0&&(i[f]=!0),l[h]===void 0&&(l[h]=!0)))}),u||(o[c]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(t,r,n){const s=t.split("|"),i=s[0],a=s[1];r&&this.emit("failedLoading",i,a,r),!r&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[t]=r?-1:2,r&&n&&(this.state[t]=0);const o={};this.queue.forEach(l=>{ux(l.loaded,[i],a),Mx(l,t),r&&l.errors.push(r),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{o[c]||(o[c]={});const u=l.loaded[c];u.length&&u.forEach(h=>{o[c][h]===void 0&&(o[c][h]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(t,r,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:r,fcName:n,tried:s,wait:i,callback:a});return}this.readingCalls++;const o=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(c&&u&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,t,r,n,s+1,i*2,a)},i);return}a(c,u)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(t,r);c&&typeof c.then=="function"?c.then(u=>o(null,u)).catch(o):o(null,c)}catch(c){o(c)}return}return l(t,r,o)}prepareLoading(t,r){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();Z(t)&&(t=this.languageUtils.toResolveHierarchy(t)),Z(r)&&(r=[r]);const i=this.queueLoad(t,r,n,s);if(!i.toLoad.length)return i.pending.length||s(),null;i.toLoad.forEach(a=>{this.loadOne(a)})}load(t,r,n){this.prepareLoading(t,r,{},n)}reload(t,r,n){this.prepareLoading(t,r,{reload:!0},n)}loadOne(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=t.split("|"),s=n[0],i=n[1];this.read(s,i,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${r}loading namespace ${i} for language ${s} failed`,a),!a&&o&&this.logger.log(`${r}loaded namespace ${i} for language ${s}`,o),this.loaded(t,a,o)})}saveMissing(t,r,n,s,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(r)){this.logger.warn(`did not save key "${n}" as the namespace "${r}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const l={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(t,r,n,s,l):u=c(t,r,n,s),u&&typeof u.then=="function"?u.then(h=>o(null,h)).catch(o):o(null,u)}catch(u){o(u)}else c(t,r,n,s,o,l)}!t||!t[0]||this.store.addResource(t[0],r,n,s)}}}const po=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),Z(e[1])&&(t.defaultValue=e[1]),Z(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const r=e[3]||e[2];Object.keys(r).forEach(n=>{t[n]=r[n]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),mo=e=>(Z(e.ns)&&(e.ns=[e.ns]),Z(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Z(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),_n=()=>{},jx=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(r=>{typeof e[r]=="function"&&(e[r]=e[r].bind(e))})};class sn extends ys{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(super(),this.options=mo(t),this.services={},this.logger=lt,this.modules={external:[]},jx(this),r&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,r),this;setTimeout(()=>{this.init(t,r)},0)}}init(){var t=this;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof r=="function"&&(n=r,r={}),!r.defaultNS&&r.defaultNS!==!1&&r.ns&&(Z(r.ns)?r.defaultNS=r.ns:r.ns.indexOf("translation")<0&&(r.defaultNS=r.ns[0]));const s=po();this.options={...s,...this.options,...mo(r)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...s.interpolation,...this.options.interpolation}),r.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=r.keySeparator),r.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=r.nsSeparator);const i=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?lt.init(i(this.modules.logger),this.options):lt.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=Cx);const h=new uo(this.options);this.store=new lo(this.options.resources,this.options);const f=this.services;f.logger=lt,f.resourceStore=this.store,f.languageUtils=h,f.pluralResolver=new $x(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(f.formatter=i(u),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new Tx(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new Dx(i(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(x){for(var v=arguments.length,y=new Array(v>1?v-1:0),w=1;w<v;w++)y[w-1]=arguments[w];t.emit(x,...y)}),this.modules.languageDetector&&(f.languageDetector=i(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=i(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new Xn(this.services,this.options),this.translator.on("*",function(x){for(var v=arguments.length,y=new Array(v>1?v-1:0),w=1;w<v;w++)y[w-1]=arguments[w];t.emit(x,...y)}),this.modules.external.forEach(x=>{x.init&&x.init(this)})}if(this.format=this.options.interpolation.format,n||(n=_n),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return t.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return t.store[u](...arguments),t}});const l=jr(),c=()=>{const u=(h,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(f),n(h,f)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_n;const s=Z(t)?t:this.language;if(typeof t=="function"&&(n=t),!this.options.resources||this.options.partialBundledLanguages){if(s&&s.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const i=[],a=o=>{if(!o||o==="cimode")return;this.services.languageUtils.toResolveHierarchy(o).forEach(c=>{c!=="cimode"&&i.indexOf(c)<0&&i.push(c)})};s?a(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>a(l)),this.options.preload&&this.options.preload.forEach(o=>a(o)),this.services.backendConnector.load(i,this.options.ns,o=>{!o&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(o)})}else n(null)}reloadResources(t,r,n){const s=jr();return typeof t=="function"&&(n=t,t=void 0),typeof r=="function"&&(n=r,r=void 0),t||(t=this.languages),r||(r=this.options.ns),n||(n=_n),this.services.backendConnector.reload(t,r,i=>{s.resolve(),n(i)}),s}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&yc.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let r=0;r<this.languages.length;r++){const n=this.languages[r];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(t,r){var n=this;this.isLanguageChangingTo=t;const s=jr();this.emit("languageChanging",t);const i=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,c)=>{c?(i(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,s.resolve(function(){return n.t(...arguments)}),r&&r(l,function(){return n.t(...arguments)})},o=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const c=Z(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||i(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{a(u,c)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(t),s}getFixedT(t,r,n){var s=this;const i=function(a,o){let l;if(typeof o!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),h=2;h<c;h++)u[h-2]=arguments[h];l=s.options.overloadTranslationOptionHandler([a,o].concat(u))}else l={...o};l.lng=l.lng||i.lng,l.lngs=l.lngs||i.lngs,l.ns=l.ns||i.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||n||i.keyPrefix);const f=s.options.keySeparator||".";let x;return l.keyPrefix&&Array.isArray(a)?x=a.map(v=>`${l.keyPrefix}${f}${v}`):x=l.keyPrefix?`${l.keyPrefix}${f}${a}`:a,s.t(x,l)};return Z(t)?i.lng=t:i.lngs=t,i.ns=r,i.keyPrefix=n,i}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=r.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const c=this.services.backendConnector.state[`${o}|${l}`];return c===-1||c===0||c===2};if(r.precheck){const o=r.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(n,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,t)&&(!s||a(i,t)))}loadNamespaces(t,r){const n=jr();return this.options.ns?(Z(t)&&(t=[t]),t.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{n.resolve(),r&&r(s)}),n):(r&&r(),Promise.resolve())}loadLanguages(t,r){const n=jr();Z(t)&&(t=[t]);const s=this.options.preload||[],i=t.filter(a=>s.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return i.length?(this.options.preload=s.concat(i),this.loadResources(a=>{n.resolve(),r&&r(a)}),n):(r&&r(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const r=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new uo(po());return r.indexOf(n.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return new sn(t,r)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_n;const n=t.forkResourceStore;n&&delete t.forkResourceStore;const s={...this.options,...t,isClone:!0},i=new sn(s);return(t.debug!==void 0||t.prefix!==void 0)&&(i.logger=i.logger.clone(t)),["store","services","language"].forEach(o=>{i[o]=this[o]}),i.services={...this.services},i.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},n&&(i.store=new lo(this.store.data,s),i.services.resourceStore=i.store),i.translator=new Xn(i.services,s),i.translator.on("*",function(o){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];i.emit(o,...c)}),i.init(s,r),i.translator.options=s,i.translator.backendConnector.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},i}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Me=sn.createInstance();Me.createInstance=sn.createInstance;Me.createInstance;Me.dir;Me.init;Me.loadResources;Me.reloadResources;Me.use;Me.changeLanguage;Me.getFixedT;Me.t;Me.exists;Me.setDefaultNamespace;Me.hasLoadedNamespace;Me.loadNamespaces;Me.loadLanguages;function Ex(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function an(e){"@babel/helpers - typeof";return an=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},an(e)}function Ax(e,t){if(an(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(an(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Px(e){var t=Ax(e,"string");return an(t)=="symbol"?t:t+""}function Rx(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Px(n.key),n)}}function Lx(e,t,r){return t&&Rx(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var vc=[],Nx=vc.forEach,Ix=vc.slice;function Fx(e){return Nx.call(Ix.call(arguments,1),function(t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r])}),e}var go=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Yx=function(t,r,n){var s=n||{};s.path=s.path||"/";var i=encodeURIComponent(r),a="".concat(t,"=").concat(i);if(s.maxAge>0){var o=s.maxAge-0;if(Number.isNaN(o))throw new Error("maxAge should be a Number");a+="; Max-Age=".concat(Math.floor(o))}if(s.domain){if(!go.test(s.domain))throw new TypeError("option domain is invalid");a+="; Domain=".concat(s.domain)}if(s.path){if(!go.test(s.path))throw new TypeError("option path is invalid");a+="; Path=".concat(s.path)}if(s.expires){if(typeof s.expires.toUTCString!="function")throw new TypeError("option expires is invalid");a+="; Expires=".concat(s.expires.toUTCString())}if(s.httpOnly&&(a+="; HttpOnly"),s.secure&&(a+="; Secure"),s.sameSite){var l=typeof s.sameSite=="string"?s.sameSite.toLowerCase():s.sameSite;switch(l){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return a},yo={create:function(t,r,n,s){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+n*60*1e3)),s&&(i.domain=s),document.cookie=Yx(t,encodeURIComponent(r),i)},read:function(t){for(var r="".concat(t,"="),n=document.cookie.split(";"),s=0;s<n.length;s++){for(var i=n[s];i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(r)===0)return i.substring(r.length,i.length)}return null},remove:function(t){this.create(t,"",-1)}},zx={name:"cookie",lookup:function(t){var r;if(t.lookupCookie&&typeof document<"u"){var n=yo.read(t.lookupCookie);n&&(r=n)}return r},cacheUserLanguage:function(t,r){r.lookupCookie&&typeof document<"u"&&yo.create(r.lookupCookie,t,r.cookieMinutes,r.cookieDomain,r.cookieOptions)}},Vx={name:"querystring",lookup:function(t){var r;if(typeof window<"u"){var n=window.location.search;!window.location.search&&window.location.hash&&window.location.hash.indexOf("?")>-1&&(n=window.location.hash.substring(window.location.hash.indexOf("?")));for(var s=n.substring(1),i=s.split("&"),a=0;a<i.length;a++){var o=i[a].indexOf("=");if(o>0){var l=i[a].substring(0,o);l===t.lookupQuerystring&&(r=i[a].substring(o+1))}}}return r}},Er=null,vo=function(){if(Er!==null)return Er;try{Er=window!=="undefined"&&window.localStorage!==null;var t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{Er=!1}return Er},Ux={name:"localStorage",lookup:function(t){var r;if(t.lookupLocalStorage&&vo()){var n=window.localStorage.getItem(t.lookupLocalStorage);n&&(r=n)}return r},cacheUserLanguage:function(t,r){r.lookupLocalStorage&&vo()&&window.localStorage.setItem(r.lookupLocalStorage,t)}},Ar=null,xo=function(){if(Ar!==null)return Ar;try{Ar=window!=="undefined"&&window.sessionStorage!==null;var t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{Ar=!1}return Ar},Hx={name:"sessionStorage",lookup:function(t){var r;if(t.lookupSessionStorage&&xo()){var n=window.sessionStorage.getItem(t.lookupSessionStorage);n&&(r=n)}return r},cacheUserLanguage:function(t,r){r.lookupSessionStorage&&xo()&&window.sessionStorage.setItem(r.lookupSessionStorage,t)}},Wx={name:"navigator",lookup:function(t){var r=[];if(typeof navigator<"u"){if(navigator.languages)for(var n=0;n<navigator.languages.length;n++)r.push(navigator.languages[n]);navigator.userLanguage&&r.push(navigator.userLanguage),navigator.language&&r.push(navigator.language)}return r.length>0?r:void 0}},Zx={name:"htmlTag",lookup:function(t){var r,n=t.htmlTag||(typeof document<"u"?document.documentElement:null);return n&&typeof n.getAttribute=="function"&&(r=n.getAttribute("lang")),r}},Bx={name:"path",lookup:function(t){var r;if(typeof window<"u"){var n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(n instanceof Array)if(typeof t.lookupFromPathIndex=="number"){if(typeof n[t.lookupFromPathIndex]!="string")return;r=n[t.lookupFromPathIndex].replace("/","")}else r=n[0].replace("/","")}return r}},Gx={name:"subdomain",lookup:function(t){var r=typeof t.lookupFromSubdomainIndex=="number"?t.lookupFromSubdomainIndex+1:1,n=typeof window<"u"&&window.location&&window.location.hostname&&window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(n)return n[r]}},xc=!1;try{document.cookie,xc=!0}catch{}var bc=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];xc||bc.splice(1,1);function Kx(){return{order:bc,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:function(t){return t}}}var _c=function(){function e(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ex(this,e),this.type="languageDetector",this.detectors={},this.init(t,r)}return Lx(e,[{key:"init",value:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=r||{languageUtils:{}},this.options=Fx(n,this.options||{},Kx()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=function(i){return i.replace("-","_")}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=s,this.addDetector(zx),this.addDetector(Vx),this.addDetector(Ux),this.addDetector(Hx),this.addDetector(Wx),this.addDetector(Zx),this.addDetector(Bx),this.addDetector(Gx)}},{key:"addDetector",value:function(r){return this.detectors[r.name]=r,this}},{key:"detect",value:function(r){var n=this;r||(r=this.options.order);var s=[];return r.forEach(function(i){if(n.detectors[i]){var a=n.detectors[i].lookup(n.options);a&&typeof a=="string"&&(a=[a]),a&&(s=s.concat(a))}}),s=s.map(function(i){return n.options.convertDetectedLanguage(i)}),this.services.languageUtils.getBestMatchFromCodes?s:s.length>0?s[0]:null}},{key:"cacheUserLanguage",value:function(r,n){var s=this;n||(n=this.options.caches),n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(r)>-1||n.forEach(function(i){s.detectors[i]&&s.detectors[i].cacheUserLanguage(r,s.options)}))}}])}();_c.type="languageDetector";const qx={appName:"fe-react-poc-calendar",loading:"Loading...",error:"Error",success:"Success",save:"Save",cancel:"Cancel",confirm:"Confirm",delete:"Delete",edit:"Edit",search:"Search",actions:"Actions",language:"Language",theme:"Theme",darkMode:"Dark Mode",lightMode:"Light Mode",close:"Close",contributors:"Contributors"},Jx={home:"Home",calendar:"Calendar",settings:"Settings",about:"About"},Qx={home:{title:"Home",welcome:"Welcome to Calendar",description:"A modern calendar application with event management features"},about:{title:"About",subtitle:"A modern calendar application with 2025 design",projectOverview:"Project Overview",techStack:"Tech Stack",meetTheTeam:"Contributors",features:"Features",gettingStarted:"Getting Started",description:"is a modern application for managing events and appointments with a user interface inspired by 2025 UI/UX standards.",projectHistory:"This project is a deep refactoring of the original 'Calendar' project, completely rebuilt using the bl-custom-fe-react boilerplate as a base, but with significant improvements in architecture, UI/UX and functionality.",projectCapabilities:"The application offers multiple calendar views (day, week, month), complete event management, data persistence, and import/export functionality for data backup.",readyToUse:"Ready to use this application? Explore the various views (day, week, month) and start adding your events!",customizeInterface:"You can customize the interface in the settings, choosing between light and dark theme, and selecting your favorite color palette."},notFound:{title:"Page Not Found",message:"The page you are looking for does not exist.",backToHome:"Back to Home"}},Xx={day:"Day",week:"Week",month:"Month",today:"Today",previous:"Previous",next:"Next",addEvent:"Add Event",editEvent:"Edit Event",deleteEvent:"Delete Event",title:"Title",titlePlaceholder:"Enter event title",titleRequired:"Title is required",description:"Description",descriptionPlaceholder:"Enter event description",date:"Date",time:"Time",duration:"Duration",minutes:"minutes",color:"Color",selectColor:"Select color",confirmDelete:"Are you sure you want to delete this event?",timeScale:"Time Scale",noEvents:"No events",noEventsForDay:"No events for this day",showMore:"Show {{count}} more",showLess:"Show less"},eb={title:"Settings",description:"Customize your calendar application settings",appearance:"Appearance",language:"Language",english:"English",italian:"Italian",theme:"Theme",themeDescription:"Choose between light and dark mode",colorPalette:"Color Palette",colorPaletteDescription:"Select the main interface colors",dataManagement:"Data Management",importExport:"Import/Export",importExportDescription:"Import or export your calendar events",importData:"Import Data",exportData:"Export Data",clearData:"Clear Data",importSuccess:"Successfully imported {{count}} events",importError:"Error importing events. Please check file format.",exportSuccess:"Events exported successfully",exportError:"Error exporting events",clearSuccess:"All events have been cleared",confirmClear:"Are you sure you want to clear all events? This action cannot be undone."},tb={description:"A modern calendar application with event management features"},rb={common:qx,navigation:Jx,pages:Qx,calendar:Xx,settings:eb,meta:tb},nb={appName:"fe-react-poc-calendar",loading:"Caricamento in corso...",error:"Errore",success:"Operazione completata",save:"Salva",cancel:"Annulla",confirm:"Conferma",delete:"Elimina",edit:"Modifica",search:"Cerca",actions:"Azioni",language:"Lingua",theme:"Tema",darkMode:"Modalità scura",lightMode:"Modalità chiara",close:"Chiudi",contributors:"Collaboratori"},sb={home:"Home",calendar:"Calendario",settings:"Impostazioni",about:"Chi siamo"},ib={home:{title:"Home",welcome:"Benvenuto nel Calendario",description:"Un'applicazione calendario moderna con funzionalità di gestione eventi"},about:{title:"Chi siamo",subtitle:"Un'applicazione calendario moderna con design 2025",projectOverview:"Panoramica del Progetto",techStack:"Stack Tecnologico",meetTheTeam:"Collaboratori",features:"Funzionalità",gettingStarted:"Come Iniziare",description:"è un'applicazione moderna per la gestione degli eventi e degli appuntamenti con un'interfaccia utente ispirata agli standard UI/UX del 2025.",projectHistory:"Questo progetto è un refactoring profondo del progetto originale 'Calendar', ricostruito completamente utilizzando il boilerplate bl-custom-fe-react come base, ma con significativi miglioramenti nell'architettura, UI/UX e funzionalità.",projectCapabilities:"L'applicazione offre multiple viste calendario (giorno, settimana, mese), gestione completa degli eventi, persistenza dei dati e funzionalità di import/export per il backup dei dati.",readyToUse:"Pronto a utilizzare questa applicazione? Esplora le varie visualizzazioni (giorno, settimana, mese) e inizia ad aggiungere i tuoi eventi!",customizeInterface:"Puoi personalizzare l'interfaccia nelle impostazioni, scegliendo tra tema chiaro e scuro, e selezionando la tua palette di colori preferita."},notFound:{title:"Pagina non trovata",message:"La pagina che stai cercando non esiste.",backToHome:"Torna alla Home"}},ab={day:"Giorno",week:"Settimana",month:"Mese",today:"Oggi",previous:"Precedente",next:"Successivo",addEvent:"Aggiungi evento",editEvent:"Modifica evento",deleteEvent:"Elimina evento",title:"Titolo",titlePlaceholder:"Inserisci un titolo per l'evento",titleRequired:"Il titolo è obbligatorio",description:"Descrizione",descriptionPlaceholder:"Inserisci una descrizione per l'evento",date:"Data",time:"Ora",duration:"Durata",minutes:"minuti",color:"Colore",selectColor:"Seleziona colore",confirmDelete:"Sei sicuro di voler eliminare questo evento?",timeScale:"Scala temporale",noEvents:"Nessun evento",noEventsForDay:"Nessun evento per questa giornata",showMore:"Mostra altri {{count}}",showLess:"Mostra meno"},ob={title:"Impostazioni",description:"Personalizza le impostazioni dell'applicazione calendario",appearance:"Aspetto",language:"Lingua",english:"Inglese",italian:"Italiano",theme:"Tema",themeDescription:"Scegli tra modalità chiara e scura",colorPalette:"Palette di colori",colorPaletteDescription:"Seleziona i colori principali dell'interfaccia",dataManagement:"Gestione dati",importExport:"Importa/Esporta",importExportDescription:"Importa o esporta i tuoi eventi del calendario",importData:"Importa dati",exportData:"Esporta dati",clearData:"Cancella dati",importSuccess:"Importati {{count}} eventi con successo",importError:"Errore durante l'importazione. Controlla il formato del file.",exportSuccess:"Eventi esportati con successo",exportError:"Errore durante l'esportazione",clearSuccess:"Tutti gli eventi sono stati cancellati",confirmClear:"Sei sicuro di voler cancellare tutti gli eventi? Questa azione non può essere annullata."},lb={description:"Un'applicazione calendario moderna con funzionalità di gestione eventi"},cb={common:nb,navigation:sb,pages:ib,calendar:ab,settings:ob,meta:lb},db={en:{translation:rb},it:{translation:cb}};Me.use(_c).use(zm).init({resources:db,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});Ns.createRoot(document.getElementById("root")).render(d.jsx(z.StrictMode,{children:d.jsx(ko,{store:Zi,children:d.jsx(Vc,{basename:"/fe-react-poc-calendar",children:d.jsx(hi,{children:d.jsx(Ro,{children:d.jsx(lx,{})})})})})}))});export default ub();
