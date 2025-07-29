const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BdAht-0Y.js","assets/index-DqPchBCe.js","assets/index-DeOUJHT4.css","assets/chunk-3HKZRFKK-BzTGcjhq.js","assets/chunk-GQT3YUX3-FQ1U8E7v.js","assets/useFocusable-CiycRAGc.js"])))=>i.map(i=>d[i]);
import{o as $n,g as Nn,f as Rn,a as _n,A as te,r as Ln,h as Dn,i as na,u as zn,s as Wn}from"./chunk-3HKZRFKK-BzTGcjhq.js";import{r as h,M as Et,p as M,G as Ot,H as Vn,t as Ja,y as Hn,I as Gn,_ as Bn,J as Un,u as Yn,F as Xn,q as Kn,w as ae,o as qn,K as Jn,L as Zn,R as Za}from"./index-DqPchBCe.js";import{c as S}from"./chunk-GQT3YUX3-FQ1U8E7v.js";import{a as Qn,b as eo}from"./useFocusable-CiycRAGc.js";var to=new Set(["id","type","style","title","role","tabIndex","htmlFor","width","height","abbr","accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","challenge","charset","checked","cite","class","className","cols","colSpan","command","content","contentEditable","contextMenu","controls","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","dropzone","encType","enterKeyHint","for","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","hidden","high","href","hrefLang","httpEquiv","icon","inputMode","isMap","itemId","itemProp","itemRef","itemScope","itemType","kind","label","lang","list","loop","manifest","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","open","optimum","pattern","ping","placeholder","poster","preload","radioGroup","referrerPolicy","readOnly","rel","required","rows","rowSpan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","slot","sortable","span","spellCheck","src","srcDoc","srcSet","start","step","target","translate","typeMustMatch","useMap","value","wmode","wrap"]),ao=new Set(["onCopy","onCut","onPaste","onLoad","onError","onWheel","onScroll","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerEnter","onPointerLeave","onPointerUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd"]),oa=/^(data-.*)$/,ro=/^(aria-.*)$/,xe=/^(on[A-Z].*)$/;function ia(e,t={}){let{labelable:a=!0,enabled:r=!0,propNames:n,omitPropNames:o,omitEventNames:i,omitDataProps:s,omitEventProps:l}=t,u={};if(!r)return e;for(const f in e)o?.has(f)||i?.has(f)&&xe.test(f)||xe.test(f)&&!ao.has(f)||s&&oa.test(f)||l&&xe.test(f)||(Object.prototype.hasOwnProperty.call(e,f)&&(to.has(f)||a&&ro.test(f)||n?.has(f)||oa.test(f))||xe.test(f))&&(u[f]=e[f]);return u}function Jf(e,t){let{id:a,"aria-label":r,"aria-labelledby":n}=e;return a=$n(a),n&&r?n=[...new Set([a,...n.trim().split(/\s+/)])].join(" "):n&&(n=n.trim().split(/\s+/).join(" ")),!r&&!n&&t&&(r=t),{id:a,"aria-label":r,"aria-labelledby":n}}function Zf(e,t,a){let[r,n]=h.useState(e||t),o=h.useRef(e!==void 0),i=e!==void 0;h.useEffect(()=>{o.current,o.current=i},[i]);let s=i?e:r,l=h.useCallback((u,...f)=>{let c=(d,...p)=>{a&&(Object.is(s,d)||a(d,...p)),i||(s=d)};typeof u=="function"?n((p,...g)=>{let v=u(i?s:p,...g);return c(v,...f),i?p:v}):(i||n(u),c(u,...f))},[i,s,a]);return[s,l]}const Qa=h.createContext({}),er=typeof window<"u",tr=er?h.useLayoutEffect:h.useEffect,Me=h.createContext(null),no=(e,t,a)=>a>t?t:a<e?e:a;function oo(e){return typeof e=="object"&&e!==null}const ar=e=>t=>typeof t=="string"&&t.startsWith(e),io=ar("--"),so=ar("var(--"),Qf=e=>so(e)?lo.test(e.split("/*")[0].trim()):!1,lo=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Tt={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},it={...Tt,transform:e=>no(0,1,e)},we={...Tt,default:1},pe=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),q=pe("deg"),Be=pe("%"),w=pe("px"),eu=pe("vh"),tu=pe("vw"),sa={...Be,parse:e=>Be.parse(e)/100,transform:e=>Be.transform(e*100)},$e=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],rr=new Set($e),la={...Tt,transform:Math.round},fo={rotate:q,rotateX:q,rotateY:q,rotateZ:q,scale:we,scaleX:we,scaleY:we,scaleZ:we,skew:q,skewX:q,skewY:q,distance:w,translateX:w,translateY:w,translateZ:w,x:w,y:w,z:w,perspective:w,transformPerspective:w,opacity:it,originX:sa,originY:sa,originZ:w},nr={borderWidth:w,borderTopWidth:w,borderRightWidth:w,borderBottomWidth:w,borderLeftWidth:w,borderRadius:w,radius:w,borderTopLeftRadius:w,borderTopRightRadius:w,borderBottomRightRadius:w,borderBottomLeftRadius:w,width:w,maxWidth:w,height:w,maxHeight:w,top:w,right:w,bottom:w,left:w,padding:w,paddingTop:w,paddingRight:w,paddingBottom:w,paddingLeft:w,margin:w,marginTop:w,marginRight:w,marginBottom:w,marginLeft:w,backgroundPositionX:w,backgroundPositionY:w,...fo,zIndex:la,fillOpacity:it,strokeOpacity:it,numOctaves:la},or=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function uo(e){return oo(e)&&"offsetHeight"in e}const Z=e=>!!(e&&e.getVelocity);class co extends h.Component{getSnapshotBeforeUpdate(t){const a=this.props.childRef.current;if(a&&t.isPresent&&!this.props.isPresent){const r=a.offsetParent,n=uo(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=a.offsetHeight||0,o.width=a.offsetWidth||0,o.top=a.offsetTop,o.left=a.offsetLeft,o.right=n-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function mo({children:e,isPresent:t,anchorX:a,root:r}){const n=h.useId(),o=h.useRef(null),i=h.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:s}=h.useContext(Et);return h.useInsertionEffect(()=>{const{width:l,height:u,top:f,left:c,right:d}=i.current;if(t||!o.current||!l||!u)return;const p=a==="left"?`left: ${c}`:`right: ${d}`;o.current.dataset.motionPopId=n;const g=document.createElement("style");s&&(g.nonce=s);const v=r??document.head;return v.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${u}px !important;
            ${p}px !important;
            top: ${f}px !important;
          }
        `),()=>{v.removeChild(g),v.contains(g)&&v.removeChild(g)}},[t]),M.jsx(co,{isPresent:t,childRef:o,sizeRef:i,children:h.cloneElement(e,{ref:o})})}const po=({children:e,initial:t,isPresent:a,onExitComplete:r,custom:n,presenceAffectsLayout:o,mode:i,anchorX:s,root:l})=>{const u=Ot(ho),f=h.useId();let c=!0,d=h.useMemo(()=>(c=!1,{id:f,initial:t,isPresent:a,custom:n,onExitComplete:p=>{u.set(p,!0);for(const g of u.values())if(!g)return;r&&r()},register:p=>(u.set(p,!1),()=>u.delete(p))}),[a,u,r]);return o&&c&&(d={...d}),h.useMemo(()=>{u.forEach((p,g)=>u.set(g,!1))},[a]),h.useEffect(()=>{!a&&!u.size&&r&&r()},[a]),i==="popLayout"&&(e=M.jsx(mo,{isPresent:a,anchorX:s,root:l,children:e})),M.jsx(Me.Provider,{value:d,children:e})};function ho(){return new Map}function vo(e=!0){const t=h.useContext(Me);if(t===null)return[!0,null];const{isPresent:a,onExitComplete:r,register:n}=t,o=h.useId();h.useEffect(()=>{if(e)return n(o)},[e]);const i=h.useCallback(()=>e&&r&&r(o),[o,r,e]);return!a&&r?[!1,i]:[!0]}const Se=e=>e.key||"";function fa(e){const t=[];return h.Children.forEach(e,a=>{h.isValidElement(a)&&t.push(a)}),t}const go=({children:e,custom:t,initial:a=!0,onExitComplete:r,presenceAffectsLayout:n=!0,mode:o="sync",propagate:i=!1,anchorX:s="left",root:l})=>{const[u,f]=vo(i),c=h.useMemo(()=>fa(e),[e]),d=i&&!u?[]:c.map(Se),p=h.useRef(!0),g=h.useRef(c),v=Ot(()=>new Map),[P,b]=h.useState(c),[x,C]=h.useState(c);tr(()=>{p.current=!1,g.current=c;for(let j=0;j<x.length;j++){const E=Se(x[j]);d.includes(E)?v.delete(E):v.get(E)!==!0&&v.set(E,!1)}},[x,d.length,d.join("-")]);const O=[];if(c!==P){let j=[...c];for(let E=0;E<x.length;E++){const F=x[E],L=Se(F);d.includes(L)||(j.splice(E,0,F),O.push(F))}return o==="wait"&&O.length&&(j=O),C(fa(j)),b(c),null}const{forceRender:T}=h.useContext(Qa);return M.jsx(M.Fragment,{children:x.map(j=>{const E=Se(j),F=i&&!u?!1:c===x||d.includes(E),L=()=>{if(v.has(E))v.set(E,!0);else return;let le=!0;v.forEach(ye=>{ye||(le=!1)}),le&&(T?.(),C(g.current),i&&f?.(),r&&r())};return M.jsx(po,{isPresent:F,initial:!p.current||a?void 0:!1,custom:t,presenceAffectsLayout:n,mode:o,root:l,onExitComplete:F?void 0:L,anchorX:s,children:j},E)})})},jt=h.createContext({strict:!1}),ua={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ee={};for(const e in ua)Ee[e]={isEnabled:t=>ua[e].some(a=>!!t[a])};function st(e){for(const t in e)Ee[t]={...Ee[t],...e[t]}}function yo({children:e,features:t,strict:a=!1}){const[,r]=h.useState(!Ue(t)),n=h.useRef(void 0);if(!Ue(t)){const{renderer:o,...i}=t;n.current=o,st(i)}return h.useEffect(()=>{Ue(t)&&t().then(({renderer:o,...i})=>{st(i),n.current=o,r(!0)})},[]),M.jsx(jt.Provider,{value:{renderer:n.current,strict:a},children:e})}function Ue(e){return typeof e=="function"}const Ne=h.createContext({});function ir(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function lt(e){return typeof e=="string"||Array.isArray(e)}const bo=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],xo=["initial",...bo];function Ft(e){return ir(e.animate)||xo.some(t=>lt(e[t]))}function wo(e){return!!(Ft(e)||e.variants)}function So(e,t){if(Ft(e)){const{initial:a,animate:r}=e;return{initial:a===!1||lt(a)?a:void 0,animate:lt(r)?r:void 0}}return e.inherit!==!1?t:{}}function Po(e){const{initial:t,animate:a}=So(e,h.useContext(Ne));return h.useMemo(()=>({initial:t,animate:a}),[ca(t),ca(a)])}function ca(e){return Array.isArray(e)?e.join(" "):e}const Ao={};function sr(e,{layout:t,layoutId:a}){return rr.has(e)||e.startsWith("origin")||(t||a!==void 0)&&(!!Ao[e]||e==="opacity")}const ko={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Co=$e.length;function Io(e,t,a){let r="",n=!0;for(let o=0;o<Co;o++){const i=$e[o],s=e[i];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(i.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||a){const u=or(s,nr[i]);if(!l){n=!1;const f=ko[i]||i;r+=`${f}(${u}) `}a&&(t[i]=u)}}return r=r.trim(),a?r=a(t,n?"":r):n&&(r="none"),r}function lr(e,t,a){const{style:r,vars:n,transformOrigin:o}=e;let i=!1,s=!1;for(const l in t){const u=t[l];if(rr.has(l)){i=!0;continue}else if(io(l)){n[l]=u;continue}else{const f=or(u,nr[l]);l.startsWith("origin")?(s=!0,o[l]=f):r[l]=f}}if(t.transform||(i||a?r.transform=Io(t,e.transform,a):r.transform&&(r.transform="none")),s){const{originX:l="50%",originY:u="50%",originZ:f=0}=o;r.transformOrigin=`${l} ${u} ${f}`}}const Mt=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function fr(e,t,a){for(const r in t)!Z(t[r])&&!sr(r,a)&&(e[r]=t[r])}function Eo({transformTemplate:e},t){return h.useMemo(()=>{const a=Mt();return lr(a,t,e),Object.assign({},a.vars,a.style)},[t])}function Oo(e,t){const a=e.style||{},r={};return fr(r,a,e),Object.assign(r,Eo(e,t)),r}function To(e,t){const a={},r=Oo(e,t);return e.drag&&e.dragListener!==!1&&(a.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(a.tabIndex=0),a.style=r,a}const jo={offset:"stroke-dashoffset",array:"stroke-dasharray"},Fo={offset:"strokeDashoffset",array:"strokeDasharray"};function Mo(e,t,a=1,r=0,n=!0){e.pathLength=1;const o=n?jo:Fo;e[o.offset]=w.transform(-r);const i=w.transform(t),s=w.transform(a);e[o.array]=`${i} ${s}`}function $o(e,{attrX:t,attrY:a,attrScale:r,pathLength:n,pathSpacing:o=1,pathOffset:i=0,...s},l,u,f){if(lr(e,s,u),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:c,style:d}=e;c.transform&&(d.transform=c.transform,delete c.transform),(d.transform||c.transformOrigin)&&(d.transformOrigin=c.transformOrigin??"50% 50%",delete c.transformOrigin),d.transform&&(d.transformBox=f?.transformBox??"fill-box",delete c.transformBox),t!==void 0&&(c.x=t),a!==void 0&&(c.y=a),r!==void 0&&(c.scale=r),n!==void 0&&Mo(c,n,o,i,!1)}const ur=()=>({...Mt(),attrs:{}}),No=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Ro(e,t,a,r){const n=h.useMemo(()=>{const o=ur();return $o(o,t,No(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};fr(o,e.style,e),n.style={...o,...n.style}}return n}const _o=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function cr(e){return typeof e!="string"||e.includes("-")?!1:!!(_o.indexOf(e)>-1||/[A-Z]/u.test(e))}function Lo(e,t,a,{latestValues:r},n,o=!1){const s=(cr(e)?Ro:To)(t,r,n,e),l=Vn(t,typeof e=="string",o),u=e!==h.Fragment?{...l,...s,ref:a}:{},{children:f}=t,c=h.useMemo(()=>Z(f)?f.get():f,[f]);return h.createElement(e,{...u,children:c})}function da(e){const t=[{},{}];return e?.values.forEach((a,r)=>{t[0][r]=a.get(),t[1][r]=a.getVelocity()}),t}function Do(e,t,a,r){if(typeof t=="function"){const[n,o]=da(r);t=t(a!==void 0?a:e.custom,n,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[n,o]=da(r);t=t(a!==void 0?a:e.custom,n,o)}return t}function zo(e){return Z(e)?e.get():e}function Wo({scrapeMotionValuesFromProps:e,createRenderState:t},a,r,n){return{latestValues:Vo(a,r,n,e),renderState:t()}}function Vo(e,t,a,r){const n={},o=r(e,{});for(const d in o)n[d]=zo(o[d]);let{initial:i,animate:s}=e;const l=Ft(e),u=wo(e);t&&u&&!l&&e.inherit!==!1&&(i===void 0&&(i=t.initial),s===void 0&&(s=t.animate));let f=a?a.initial===!1:!1;f=f||i===!1;const c=f?s:i;if(c&&typeof c!="boolean"&&!ir(c)){const d=Array.isArray(c)?c:[c];for(let p=0;p<d.length;p++){const g=Do(e,d[p]);if(g){const{transitionEnd:v,transition:P,...b}=g;for(const x in b){let C=b[x];if(Array.isArray(C)){const O=f?C.length-1:0;C=C[O]}C!==null&&(n[x]=C)}for(const x in v)n[x]=v[x]}}}return n}const dr=e=>(t,a)=>{const r=h.useContext(Ne),n=h.useContext(Me),o=()=>Wo(e,t,r,n);return a?o():Ot(o)};function mr(e,t,a){const{style:r}=e,n={};for(const o in r)(Z(r[o])||t.style&&Z(t.style[o])||sr(o,e)||a?.getValue(o)?.liveStyle!==void 0)&&(n[o]=r[o]);return n}const Ho=dr({scrapeMotionValuesFromProps:mr,createRenderState:Mt});function Go(e,t,a){const r=mr(e,t,a);for(const n in e)if(Z(e[n])||Z(t[n])){const o=$e.indexOf(n)!==-1?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;r[o]=e[n]}return r}const Bo=dr({scrapeMotionValuesFromProps:Go,createRenderState:ur}),Uo=Symbol.for("motionComponentSymbol");function pr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Yo(e,t,a){return h.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),a&&(typeof a=="function"?a(r):pr(a)&&(a.current=r))},[t])}const Xo=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Ko="framerAppearId",qo="data-"+Xo(Ko),Jo=h.createContext({});function Zo(e,t,a,r,n){const{visualElement:o}=h.useContext(Ne),i=h.useContext(jt),s=h.useContext(Me),l=h.useContext(Et).reducedMotion,u=h.useRef(null);r=r||i.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:a,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:l}));const f=u.current,c=h.useContext(Jo);f&&!f.projection&&n&&(f.type==="html"||f.type==="svg")&&Qo(u.current,a,n,c);const d=h.useRef(!1);h.useInsertionEffect(()=>{f&&d.current&&f.update(a,s)});const p=a[qo],g=h.useRef(!!p&&!window.MotionHandoffIsComplete?.(p)&&window.MotionHasOptimisedAnimation?.(p));return tr(()=>{f&&(d.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),h.useEffect(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(p)}),g.current=!1))}),f}function Qo(e,t,a,r){const{layoutId:n,layout:o,drag:i,dragConstraints:s,layoutScroll:l,layoutRoot:u,layoutCrossfade:f}=t;e.projection=new a(e.latestValues,t["data-framer-portal-id"]?void 0:hr(e.parent)),e.projection.setOptions({layoutId:n,layout:o,alwaysMeasureLayout:!!i||s&&pr(s),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:f,layoutScroll:l,layoutRoot:u})}function hr(e){if(e)return e.options.allowProjection!==!1?e.projection:hr(e.parent)}function Ye(e,{forwardMotionProps:t=!1}={},a,r){a&&st(a);const n=cr(e)?Bo:Ho;function o(s,l){let u;const f={...h.useContext(Et),...s,layoutId:ei(s)},{isStatic:c}=f,d=Po(s),p=n(s,c);if(!c&&er){ti();const g=ai(f);u=g.MeasureLayout,d.visualElement=Zo(e,p,f,r,g.ProjectionNode)}return M.jsxs(Ne.Provider,{value:d,children:[u&&d.visualElement?M.jsx(u,{visualElement:d.visualElement,...f}):null,Lo(e,s,Yo(p,d.visualElement,l),p,c,t)]})}o.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const i=h.forwardRef(o);return i[Uo]=e,i}function ei({layoutId:e}){const t=h.useContext(Qa).id;return t&&e!==void 0?t+"-"+e:e}function ti(e,t){h.useContext(jt).strict}function ai(e){const{drag:t,layout:a}=Ee;if(!t&&!a)return{};const r={...t,...a};return{MeasureLayout:t?.isEnabled(e)||a?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function ri(e,t){if(typeof Proxy>"u")return Ye;const a=new Map,r=(o,i)=>Ye(o,i,e,t),n=(o,i)=>r(o,i);return new Proxy(n,{get:(o,i)=>i==="create"?r:(a.has(i)||a.set(i,Ye(i,void 0,e,t)),a.get(i))})}const ni=ri();let ft=!1,Xe=0;function oi(){ft=!0,setTimeout(()=>{ft=!1},50)}function ma(e){e.pointerType==="touch"&&oi()}function ii(){if(!(typeof document>"u"))return typeof PointerEvent<"u"&&document.addEventListener("pointerup",ma),Xe++,()=>{Xe--,!(Xe>0)&&typeof PointerEvent<"u"&&document.removeEventListener("pointerup",ma)}}function si(e){let{onHoverStart:t,onHoverChange:a,onHoverEnd:r,isDisabled:n}=e,[o,i]=h.useState(!1),s=h.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;h.useEffect(ii,[]);let{addGlobalListener:l,removeAllGlobalListeners:u}=Nn(),{hoverProps:f,triggerHoverEnd:c}=h.useMemo(()=>{let d=(v,P)=>{if(s.pointerType=P,n||P==="touch"||s.isHovered||!v.currentTarget.contains(v.target))return;s.isHovered=!0;let b=v.currentTarget;s.target=b,l(Rn(v.target),"pointerover",x=>{s.isHovered&&s.target&&!_n(s.target,x.target)&&p(x,x.pointerType)},{capture:!0}),t&&t({type:"hoverstart",target:b,pointerType:P}),a&&a(!0),i(!0)},p=(v,P)=>{let b=s.target;s.pointerType="",s.target=null,!(P==="touch"||!s.isHovered||!b)&&(s.isHovered=!1,u(),r&&r({type:"hoverend",target:b,pointerType:P}),a&&a(!1),i(!1))},g={};return typeof PointerEvent<"u"&&(g.onPointerEnter=v=>{ft&&v.pointerType==="mouse"||d(v,v.pointerType)},g.onPointerLeave=v=>{!n&&v.currentTarget.contains(v.target)&&p(v,v.pointerType)}),{hoverProps:g,triggerHoverEnd:p}},[t,a,r,n,s,l,u]);return h.useEffect(()=>{n&&c({currentTarget:s.target},s.pointerType)},[n]),{hoverProps:f,isHovered:o}}var li=Ja({base:["z-0","group","relative","inline-flex","items-center","justify-center","box-border","appearance-none","outline-hidden","select-none","whitespace-nowrap","min-w-max","font-normal","subpixel-antialiased","overflow-hidden","tap-highlight-transparent","transform-gpu data-[pressed=true]:scale-[0.97]","cursor-pointer",...Ln],variants:{variant:{solid:"",bordered:"border-medium bg-transparent",light:"bg-transparent",flat:"",faded:"border-medium",shadow:"",ghost:"border-medium bg-transparent"},size:{sm:"px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",md:"px-4 min-w-20 h-10 text-small gap-2 rounded-medium",lg:"px-6 min-w-24 h-12 text-medium gap-3 rounded-large"},color:{default:"",primary:"",secondary:"",success:"",warning:"",danger:""},radius:{none:"rounded-none",sm:"rounded-small",md:"rounded-medium",lg:"rounded-large",full:"rounded-full"},fullWidth:{true:"w-full"},isDisabled:{true:"opacity-disabled pointer-events-none"},isInGroup:{true:"[&:not(:first-child):not(:last-child)]:rounded-none"},isIconOnly:{true:"px-0 !gap-0",false:"[&>svg]:max-w-[theme(spacing.8)]"},disableAnimation:{true:"!transition-none data-[pressed=true]:scale-100",false:"transition-transform-colors-opacity motion-reduce:transition-none"}},defaultVariants:{size:"md",variant:"solid",color:"default",fullWidth:!1,isDisabled:!1,isInGroup:!1},compoundVariants:[{variant:"solid",color:"default",class:S.solid.default},{variant:"solid",color:"primary",class:S.solid.primary},{variant:"solid",color:"secondary",class:S.solid.secondary},{variant:"solid",color:"success",class:S.solid.success},{variant:"solid",color:"warning",class:S.solid.warning},{variant:"solid",color:"danger",class:S.solid.danger},{variant:"shadow",color:"default",class:S.shadow.default},{variant:"shadow",color:"primary",class:S.shadow.primary},{variant:"shadow",color:"secondary",class:S.shadow.secondary},{variant:"shadow",color:"success",class:S.shadow.success},{variant:"shadow",color:"warning",class:S.shadow.warning},{variant:"shadow",color:"danger",class:S.shadow.danger},{variant:"bordered",color:"default",class:S.bordered.default},{variant:"bordered",color:"primary",class:S.bordered.primary},{variant:"bordered",color:"secondary",class:S.bordered.secondary},{variant:"bordered",color:"success",class:S.bordered.success},{variant:"bordered",color:"warning",class:S.bordered.warning},{variant:"bordered",color:"danger",class:S.bordered.danger},{variant:"flat",color:"default",class:S.flat.default},{variant:"flat",color:"primary",class:S.flat.primary},{variant:"flat",color:"secondary",class:S.flat.secondary},{variant:"flat",color:"success",class:S.flat.success},{variant:"flat",color:"warning",class:S.flat.warning},{variant:"flat",color:"danger",class:S.flat.danger},{variant:"faded",color:"default",class:S.faded.default},{variant:"faded",color:"primary",class:S.faded.primary},{variant:"faded",color:"secondary",class:S.faded.secondary},{variant:"faded",color:"success",class:S.faded.success},{variant:"faded",color:"warning",class:S.faded.warning},{variant:"faded",color:"danger",class:S.faded.danger},{variant:"light",color:"default",class:[S.light.default,"data-[hover=true]:bg-default/40"]},{variant:"light",color:"primary",class:[S.light.primary,"data-[hover=true]:bg-primary/20"]},{variant:"light",color:"secondary",class:[S.light.secondary,"data-[hover=true]:bg-secondary/20"]},{variant:"light",color:"success",class:[S.light.success,"data-[hover=true]:bg-success/20"]},{variant:"light",color:"warning",class:[S.light.warning,"data-[hover=true]:bg-warning/20"]},{variant:"light",color:"danger",class:[S.light.danger,"data-[hover=true]:bg-danger/20"]},{variant:"ghost",color:"default",class:[S.ghost.default,"data-[hover=true]:!bg-default"]},{variant:"ghost",color:"primary",class:[S.ghost.primary,"data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"]},{variant:"ghost",color:"secondary",class:[S.ghost.secondary,"data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground"]},{variant:"ghost",color:"success",class:[S.ghost.success,"data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground"]},{variant:"ghost",color:"warning",class:[S.ghost.warning,"data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground"]},{variant:"ghost",color:"danger",class:[S.ghost.danger,"data-[hover=true]:!bg-danger data-[hover=true]:!text-danger-foreground"]},{isInGroup:!0,class:"rounded-none first:rounded-s-medium last:rounded-e-medium"},{isInGroup:!0,size:"sm",class:"rounded-none first:rounded-s-small last:rounded-e-small"},{isInGroup:!0,size:"md",class:"rounded-none first:rounded-s-medium last:rounded-e-medium"},{isInGroup:!0,size:"lg",class:"rounded-none first:rounded-s-large last:rounded-e-large"},{isInGroup:!0,isRounded:!0,class:"rounded-none first:rounded-s-full last:rounded-e-full"},{isInGroup:!0,radius:"none",class:"rounded-none first:rounded-s-none last:rounded-e-none"},{isInGroup:!0,radius:"sm",class:"rounded-none first:rounded-s-small last:rounded-e-small"},{isInGroup:!0,radius:"md",class:"rounded-none first:rounded-s-medium last:rounded-e-medium"},{isInGroup:!0,radius:"lg",class:"rounded-none first:rounded-s-large last:rounded-e-large"},{isInGroup:!0,radius:"full",class:"rounded-none first:rounded-s-full last:rounded-e-full"},{isInGroup:!0,variant:["ghost","bordered"],color:"default",className:te.default},{isInGroup:!0,variant:["ghost","bordered"],color:"primary",className:te.primary},{isInGroup:!0,variant:["ghost","bordered"],color:"secondary",className:te.secondary},{isInGroup:!0,variant:["ghost","bordered"],color:"success",className:te.success},{isInGroup:!0,variant:["ghost","bordered"],color:"warning",className:te.warning},{isInGroup:!0,variant:["ghost","bordered"],color:"danger",className:te.danger},{isIconOnly:!0,size:"sm",class:"min-w-8 w-8 h-8"},{isIconOnly:!0,size:"md",class:"min-w-10 w-10 h-10"},{isIconOnly:!0,size:"lg",class:"min-w-12 w-12 h-12"},{variant:["solid","faded","flat","bordered","shadow"],class:"data-[hover=true]:opacity-hover"}]});Ja({base:"inline-flex items-center justify-center h-auto",variants:{fullWidth:{true:"w-full"}},defaultVariants:{fullWidth:!1}});var au=globalThis?.document?h.useLayoutEffect:h.useEffect,[ru,fi]=Hn({name:"ButtonGroupContext",strict:!1});function ui(e,t){let{elementType:a="button",isDisabled:r,onPress:n,onPressStart:o,onPressEnd:i,onPressUp:s,onPressChange:l,preventFocusOnPress:u,allowFocusWhenDisabled:f,onClick:c,href:d,target:p,rel:g,type:v="button",allowTextSelectionOnPress:P}=e,b;a==="button"?b={type:v,disabled:r}:b={role:"button",href:a==="a"&&!r?d:void 0,target:a==="a"?p:void 0,type:a==="input"?v:void 0,disabled:a==="input"?r:void 0,"aria-disabled":!r||a==="input"?void 0:r,rel:a==="a"?g:void 0};let{pressProps:x,isPressed:C}=Dn({onClick:c,onPressStart:o,onPressEnd:i,onPressUp:s,onPressChange:l,onPress:n,isDisabled:r,preventFocusOnPress:u,allowTextSelectionOnPress:P,ref:t}),{focusableProps:O}=Qn(e,t);f&&(O.tabIndex=r?-1:O.tabIndex);let T=na(O,x,eo(e,{labelable:!0}));return{isPressed:C,buttonProps:na(b,T,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],"aria-current":e["aria-current"]})}}var ci=()=>Bn(()=>import("./index-BdAht-0Y.js"),__vite__mapDeps([0,1,2,3,4,5])).then(e=>e.default),vr=e=>{const{ripples:t=[],motionProps:a,color:r="currentColor",style:n,onClear:o}=e;return M.jsx(M.Fragment,{children:t.map(i=>{const s=Gn(.01*i.size,.2,i.size>100?.75:.5);return M.jsx(yo,{features:ci,children:M.jsx(go,{mode:"popLayout",children:M.jsx(ni.span,{animate:{transform:"scale(2)",opacity:0},className:"heroui-ripple",exit:{opacity:0},initial:{transform:"scale(0)",opacity:.35},style:{position:"absolute",backgroundColor:r,borderRadius:"100%",transformOrigin:"center",pointerEvents:"none",overflow:"hidden",inset:0,zIndex:0,top:i.y,left:i.x,width:`${i.size}px`,height:`${i.size}px`,...n},transition:{duration:s},onAnimationComplete:()=>{o(i.key)},...a})})},i.key)})})};vr.displayName="HeroUI.Ripple";var di=vr;function mi(e={}){const[t,a]=h.useState([]),r=h.useCallback(o=>{const i=o.target,s=Math.max(i.clientWidth,i.clientHeight);a(l=>[...l,{key:Un(l.length.toString()),size:s,x:o.x-s/2,y:o.y-s/2}])},[]),n=h.useCallback(o=>{a(i=>i.filter(s=>s.key!==o))},[]);return{ripples:t,onClear:n,onPress:r,...e}}function pi(e){var t,a,r,n,o,i,s,l,u;const f=fi(),c=Yn(),d=!!f,{ref:p,as:g,children:v,startContent:P,endContent:b,autoFocus:x,className:C,spinner:O,isLoading:T=!1,disableRipple:j=!1,fullWidth:E=(t=f?.fullWidth)!=null?t:!1,radius:F=f?.radius,size:L=(a=f?.size)!=null?a:"md",color:le=(r=f?.color)!=null?r:"default",variant:ye=(n=f?.variant)!=null?n:"solid",disableAnimation:fe=(i=(o=f?.disableAnimation)!=null?o:c?.disableAnimation)!=null?i:!1,isDisabled:An=(s=f?.isDisabled)!=null?s:!1,isIconOnly:We=(l=f?.isIconOnly)!=null?l:!1,spinnerPlacement:kn="start",onPress:Cn,onClick:In,...Ve}=e,Bt=g||"button",Ut=typeof Bt=="string",be=zn(p),He=(u=j||c?.disableRipple)!=null?u:fe,{isFocusVisible:Yt,isFocused:Xt,focusProps:Kt}=Wn({autoFocus:x}),G=An||T,Ge=h.useMemo(()=>li({size:L,color:le,variant:ye,radius:F,fullWidth:E,isDisabled:G,isInGroup:d,disableAnimation:fe,isIconOnly:We,className:C}),[L,le,ye,F,E,G,d,We,fe,C]),{onPress:qt,onClear:Jt,ripples:Zt}=mi(),En=h.useCallback(K=>{He||G||fe||be.current&&qt(K)},[He,G,fe,be,qt]),{buttonProps:Qt,isPressed:ea}=ui({elementType:g,isDisabled:G,onPress:Xn(Cn,En),onClick:In,...Ve},be),{isHovered:ta,hoverProps:aa}=si({isDisabled:G}),On=h.useCallback((K={})=>({"data-disabled":ae(G),"data-focus":ae(Xt),"data-pressed":ae(ea),"data-focus-visible":ae(Yt),"data-hover":ae(ta),"data-loading":ae(T),...Kn(Qt,Kt,aa,ia(Ve,{enabled:Ut}),ia(K)),className:Ge}),[T,G,Xt,ea,Ut,Yt,ta,Qt,Kt,aa,Ve,Ge]),ra=K=>h.isValidElement(K)?h.cloneElement(K,{"aria-hidden":!0,focusable:!1}):null,Tn=ra(P),jn=ra(b),Fn=h.useMemo(()=>({sm:"sm",md:"sm",lg:"md"})[L],[L]),Mn=h.useCallback(()=>({ripples:Zt,onClear:Jt}),[Zt,Jt]);return{Component:Bt,children:v,domRef:be,spinner:O,styles:Ge,startContent:Tn,endContent:jn,isLoading:T,spinnerPlacement:kn,spinnerSize:Fn,disableRipple:He,getButtonProps:On,getRippleProps:Mn,isIconOnly:We}}var gr=qn((e,t)=>{const{Component:a,domRef:r,children:n,spinnerSize:o,spinner:i=M.jsx(Jn,{color:"current",size:o}),spinnerPlacement:s,startContent:l,endContent:u,isLoading:f,disableRipple:c,getButtonProps:d,getRippleProps:p,isIconOnly:g}=pi({...e,ref:t});return M.jsxs(a,{ref:r,...d(),children:[l,f&&s==="start"&&i,f&&g?null:n,f&&s==="end"&&i,u,!c&&M.jsx(di,{...p()})]})});gr.displayName="HeroUI.Button";var nu=gr;/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function ut(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function hi(e){if(Array.isArray(e))return e}function vi(e){if(Array.isArray(e))return ut(e)}function gi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yi(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,yr(r.key),r)}}function bi(e,t,a){return t&&yi(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ke(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=$t(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||a.return==null||a.return()}finally{if(s)throw o}}}}function k(e,t,a){return(t=yr(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function xi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wi(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,o,i,s=[],l=!0,u=!1;try{if(o=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=o.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(f){u=!0,n=f}finally{try{if(!l&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(u)throw n}}return s}}function Si(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pa(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?pa(Object(a),!0).forEach(function(r){k(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pa(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function Re(e,t){return hi(e)||wi(e,t)||$t(e,t)||Si()}function _(e){return vi(e)||xi(e)||$t(e)||Pi()}function Ai(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function yr(e){var t=Ai(e,"string");return typeof t=="symbol"?t:t+""}function Oe(e){"@babel/helpers - typeof";return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oe(e)}function $t(e,t){if(e){if(typeof e=="string")return ut(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ut(e,t):void 0}}var ha=function(){},Nt={},br={},xr=null,wr={mark:ha,measure:ha};try{typeof window<"u"&&(Nt=window),typeof document<"u"&&(br=document),typeof MutationObserver<"u"&&(xr=MutationObserver),typeof performance<"u"&&(wr=performance)}catch{}var ki=Nt.navigator||{},va=ki.userAgent,ga=va===void 0?"":va,U=Nt,I=br,ya=xr,Pe=wr;U.document;var H=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",Sr=~ga.indexOf("MSIE")||~ga.indexOf("Trident/"),Ke,Ci=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ii=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Pr={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},Ei={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ar=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],$="classic",he="duotone",kr="sharp",Cr="sharp-duotone",Ir="chisel",Er="etch",Or="jelly",Tr="jelly-duo",jr="jelly-fill",Fr="notdog",Mr="notdog-duo",$r="slab",Nr="slab-press",Rr="thumbprint",_r="whiteboard",Oi="Classic",Ti="Duotone",ji="Sharp",Fi="Sharp Duotone",Mi="Chisel",$i="Etch",Ni="Jelly",Ri="Jelly Duo",_i="Jelly Fill",Li="Notdog",Di="Notdog Duo",zi="Slab",Wi="Slab Press",Vi="Thumbprint",Hi="Whiteboard",Lr=[$,he,kr,Cr,Ir,Er,Or,Tr,jr,Fr,Mr,$r,Nr,Rr,_r];Ke={},k(k(k(k(k(k(k(k(k(k(Ke,$,Oi),he,Ti),kr,ji),Cr,Fi),Ir,Mi),Er,$i),Or,Ni),Tr,Ri),jr,_i),Fr,Li),k(k(k(k(k(Ke,Mr,Di),$r,zi),Nr,Wi),Rr,Vi),_r,Hi);var Gi={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Bi={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},Ui=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Yi={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},Dr=["fak","fa-kit","fakd","fa-kit-duotone"],ba={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Xi=["kit"],Ki="kit",qi="kit-duotone",Ji="Kit",Zi="Kit Duotone";k(k({},Ki,Ji),qi,Zi);var Qi={kit:{"fa-kit":"fak"}},es={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ts={kit:{fak:"fa-kit"}},xa={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},qe,Ae={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},as=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],rs="classic",ns="duotone",os="sharp",is="sharp-duotone",ss="chisel",ls="etch",fs="jelly",us="jelly-duo",cs="jelly-fill",ds="notdog",ms="notdog-duo",ps="slab",hs="slab-press",vs="thumbprint",gs="whiteboard",ys="Classic",bs="Duotone",xs="Sharp",ws="Sharp Duotone",Ss="Chisel",Ps="Etch",As="Jelly",ks="Jelly Duo",Cs="Jelly Fill",Is="Notdog",Es="Notdog Duo",Os="Slab",Ts="Slab Press",js="Thumbprint",Fs="Whiteboard";qe={},k(k(k(k(k(k(k(k(k(k(qe,rs,ys),ns,bs),os,xs),is,ws),ss,Ss),ls,Ps),fs,As),us,ks),cs,Cs),ds,Is),k(k(k(k(k(qe,ms,Es),ps,Os),hs,Ts),vs,js),gs,Fs);var Ms="kit",$s="kit-duotone",Ns="Kit",Rs="Kit Duotone";k(k({},Ms,Ns),$s,Rs);var _s={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},Ls={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},ct={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},Ds=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],zr=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(as,Ds),zs=["solid","regular","light","thin","duotone","brands","semibold"],Wr=[1,2,3,4,5,6,7,8,9,10],Ws=Wr.concat([11,12,13,14,15,16,17,18,19,20]),Vs=["aw","fw","pull-left","pull-right"],Hs=[].concat(_(Object.keys(Ls)),zs,Vs,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ae.GROUP,Ae.SWAP_OPACITY,Ae.PRIMARY,Ae.SECONDARY]).concat(Wr.map(function(e){return"".concat(e,"x")})).concat(Ws.map(function(e){return"w-".concat(e)})),Gs={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},W="___FONT_AWESOME___",dt=16,Vr="fa",Hr="svg-inline--fa",Q="data-fa-i2svg",mt="data-fa-pseudo-element",Bs="data-fa-pseudo-element-pending",Rt="data-prefix",_t="data-icon",wa="fontawesome-i2svg",Us="async",Ys=["HTML","HEAD","STYLE","SCRIPT"],Gr=["::before","::after",":before",":after"],Br=function(){try{return!0}catch{return!1}}();function ve(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[$]}})}var Ur=m({},Pr);Ur[$]=m(m(m(m({},{"fa-duotone":"duotone"}),Pr[$]),ba.kit),ba["kit-duotone"]);var Xs=ve(Ur),pt=m({},Yi);pt[$]=m(m(m(m({},{duotone:"fad"}),pt[$]),xa.kit),xa["kit-duotone"]);var Sa=ve(pt),ht=m({},ct);ht[$]=m(m({},ht[$]),ts.kit);var Yr=ve(ht),vt=m({},_s);vt[$]=m(m({},vt[$]),Qi.kit);ve(vt);var Ks=Ci,Xr="fa-layers-text",qs=Ii,Js=m({},Gi);ve(Js);var Zs=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Je=Ei,Qs=[].concat(_(Xi),_(Hs)),ce=U.FontAwesomeConfig||{};function el(e){var t=I.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function tl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(I&&typeof I.querySelector=="function"){var al=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];al.forEach(function(e){var t=Re(e,2),a=t[0],r=t[1],n=tl(el(a));n!=null&&(ce[r]=n)})}var Kr={styleDefault:"solid",familyDefault:$,cssPrefix:Vr,replacementClass:Hr,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ce.familyPrefix&&(ce.cssPrefix=ce.familyPrefix);var ie=m(m({},Kr),ce);ie.autoReplaceSvg||(ie.observeMutations=!1);var y={};Object.keys(Kr).forEach(function(e){Object.defineProperty(y,e,{enumerable:!0,set:function(a){ie[e]=a,de.forEach(function(r){return r(y)})},get:function(){return ie[e]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(t){ie.cssPrefix=t,de.forEach(function(a){return a(y)})},get:function(){return ie.cssPrefix}});U.FontAwesomeConfig=y;var de=[];function rl(e){return de.push(e),function(){de.splice(de.indexOf(e),1)}}var re=dt,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nl(e){if(!(!e||!H)){var t=I.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=I.head.childNodes,r=null,n=a.length-1;n>-1;n--){var o=a[n],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return I.head.insertBefore(t,r),e}}var ol="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pa(){for(var e=12,t="";e-- >0;)t+=ol[Math.random()*62|0];return t}function se(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Lt(e){return e.classList?se(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function qr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function il(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(qr(e[a]),'" ')},"").trim()}function _e(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Dt(e){return e.size!==z.size||e.x!==z.x||e.y!==z.y||e.rotate!==z.rotate||e.flipX||e.flipY}function sl(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function ll(e){var t=e.transform,a=e.width,r=a===void 0?dt:a,n=e.height,o=n===void 0?dt:n,i="";return Sr?i+="translate(".concat(t.x/re-r/2,"em, ").concat(t.y/re-o/2,"em) "):i+="translate(calc(-50% + ".concat(t.x/re,"em), calc(-50% + ").concat(t.y/re,"em)) "),i+="scale(".concat(t.size/re*(t.flipX?-1:1),", ").concat(t.size/re*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var fl=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}`;function Jr(){var e=Vr,t=Hr,a=y.cssPrefix,r=y.replacementClass,n=fl;if(a!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(o,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var Aa=!1;function Ze(){y.autoAddCss&&!Aa&&(nl(Jr()),Aa=!0)}var ul={mixout:function(){return{dom:{css:Jr,insertCss:Ze}}},hooks:function(){return{beforeDOMElementCreation:function(){Ze()},beforeI2svg:function(){Ze()}}}},V=U||{};V[W]||(V[W]={});V[W].styles||(V[W].styles={});V[W].hooks||(V[W].hooks={});V[W].shims||(V[W].shims=[]);var R=V[W],Zr=[],Qr=function(){I.removeEventListener("DOMContentLoaded",Qr),Te=1,Zr.map(function(t){return t()})},Te=!1;H&&(Te=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),Te||I.addEventListener("DOMContentLoaded",Qr));function cl(e){H&&(Te?setTimeout(e,0):Zr.push(e))}function ge(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,o=n===void 0?[]:n;return typeof e=="string"?qr(e):"<".concat(t," ").concat(il(r),">").concat(o.map(ge).join(""),"</").concat(t,">")}function ka(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Qe=function(t,a,r,n){var o=Object.keys(t),i=o.length,s=a,l,u,f;for(r===void 0?(l=1,f=t[o[0]]):(l=0,f=r);l<i;l++)u=o[l],f=s(f,t[u],u,t);return f};function en(e){return _(e).length!==1?null:e.codePointAt(0).toString(16)}function Ca(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function tn(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,o=Ca(t);typeof R.hooks.addPack=="function"&&!n?R.hooks.addPack(e,Ca(t)):R.styles[e]=m(m({},R.styles[e]||{}),o),e==="fas"&&tn("fa",t)}var me=R.styles,dl=R.shims,an=Object.keys(Yr),ml=an.reduce(function(e,t){return e[t]=Object.keys(Yr[t]),e},{}),zt=null,rn={},nn={},on={},sn={},ln={};function pl(e){return~Qs.indexOf(e)}function hl(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!pl(n)?n:null}var fn=function(){var t=function(o){return Qe(me,function(i,s,l){return i[l]=Qe(s,o,{}),i},{})};rn=t(function(n,o,i){if(o[3]&&(n[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=i})}return n}),nn=t(function(n,o,i){if(n[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=i})}return n}),ln=t(function(n,o,i){var s=o[2];return n[i]=i,s.forEach(function(l){n[l]=i}),n});var a="far"in me||y.autoFetchSvg,r=Qe(dl,function(n,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(n.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});on=r.names,sn=r.unicodes,zt=Le(y.styleDefault,{family:y.familyDefault})};rl(function(e){zt=Le(e.styleDefault,{family:y.familyDefault})});fn();function Wt(e,t){return(rn[e]||{})[t]}function vl(e,t){return(nn[e]||{})[t]}function J(e,t){return(ln[e]||{})[t]}function un(e){return on[e]||{prefix:null,iconName:null}}function gl(e){var t=sn[e],a=Wt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function Y(){return zt}var cn=function(){return{prefix:null,iconName:null,rest:[]}};function yl(e){var t=$,a=an.reduce(function(r,n){return r[n]="".concat(y.cssPrefix,"-").concat(n),r},{});return Lr.forEach(function(r){(e.includes(a[r])||e.some(function(n){return ml[r].includes(n)}))&&(t=r)}),t}function Le(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?$:a,n=Xs[r][e];if(r===he&&!e)return"fad";var o=Sa[r][e]||Sa[r][n],i=e in R.styles?e:null,s=o||i||null;return s}function bl(e){var t=[],a=null;return e.forEach(function(r){var n=hl(y.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function Ia(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var Ea=zr.concat(Dr);function De(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,o=Ia(e.filter(function(p){return Ea.includes(p)})),i=Ia(e.filter(function(p){return!Ea.includes(p)})),s=o.filter(function(p){return n=p,!Ar.includes(p)}),l=Re(s,1),u=l[0],f=u===void 0?null:u,c=yl(o),d=m(m({},bl(i)),{},{prefix:Le(f,{family:c})});return m(m(m({},d),Pl({values:e,family:c,styles:me,config:y,canonical:d,givenPrefix:n})),xl(r,n,d))}function xl(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var o=t==="fa"?un(n):{},i=J(r,n);return n=o.iconName||i||n,r=o.prefix||r,r==="far"&&!me.far&&me.fas&&!y.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var wl=Lr.filter(function(e){return e!==$||e!==he}),Sl=Object.keys(ct).filter(function(e){return e!==$}).map(function(e){return Object.keys(ct[e])}).flat();function Pl(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,o=n===void 0?"":n,i=e.styles,s=i===void 0?{}:i,l=e.config,u=l===void 0?{}:l,f=a===he,c=t.includes("fa-duotone")||t.includes("fad"),d=u.familyDefault==="duotone",p=r.prefix==="fad"||r.prefix==="fa-duotone";if(!f&&(c||d||p)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&wl.includes(a)){var g=Object.keys(s).find(function(P){return Sl.includes(P)});if(g||u.autoFetchSvg){var v=Ui.get(a).defaultShortPrefixId;r.prefix=v,r.iconName=J(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||o==="fa")&&(r.prefix=Y()||"fas"),r}var Al=function(){function e(){gi(this,e),this.definitions={}}return bi(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=m(m({},a.definitions[s]||{}),i[s]),tn(s,i[s]),fn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(o){var i=n[o],s=i.prefix,l=i.iconName,u=i.icon,f=u[2];a[s]||(a[s]={}),f.length>0&&f.forEach(function(c){typeof c=="string"&&(a[s][c]=u)}),a[s][l]=u}),a}}])}(),Oa=[],ne={},oe={},kl=Object.keys(oe);function Cl(e,t){var a=t.mixoutsTo;return Oa=e,ne={},Object.keys(oe).forEach(function(r){kl.indexOf(r)===-1&&delete oe[r]}),Oa.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(a[i]=n[i]),Oe(n[i])==="object"&&Object.keys(n[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=n[i][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(i){ne[i]||(ne[i]=[]),ne[i].push(o[i])})}r.provides&&r.provides(oe)}),a}function gt(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var o=ne[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(r))}),t}function ee(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=ne[e]||[];n.forEach(function(o){o.apply(null,a)})}function X(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return oe[e]?oe[e].apply(null,t):void 0}function yt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||Y();if(t)return t=J(a,t)||t,ka(dn.definitions,a,t)||ka(R.styles,a,t)}var dn=new Al,Il=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,ee("noAuto")},El={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return H?(ee("beforeI2svg",t),X("pseudoElements2svg",t),X("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,cl(function(){Tl({autoReplaceSvgRoot:a}),ee("watch",t)})}},Ol={icon:function(t){if(t===null)return null;if(Oe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:J(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Le(t[0]);return{prefix:r,iconName:J(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(y.cssPrefix,"-"))>-1||t.match(Ks))){var n=De(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||Y(),iconName:J(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var o=Y();return{prefix:o,iconName:J(o,t)||t}}}},N={noAuto:Il,config:y,dom:El,parse:Ol,library:dn,findIconDefinition:yt,toHtml:ge},Tl=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?I:a;(Object.keys(R.styles).length>0||y.autoFetchSvg)&&H&&y.autoReplaceSvg&&N.dom.i2svg({node:r})};function ze(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ge(r)})}}),Object.defineProperty(e,"node",{get:function(){if(H){var r=I.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function jl(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,o=e.styles,i=e.transform;if(Dt(i)&&a.found&&!r.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};n.style=_e(m(m({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function Fl(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(y.cssPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},n),{},{id:i}),children:r}]}]}function Ml(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function Vt(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.maskId,u=e.extra,f=e.watchable,c=f===void 0?!1:f,d=r.found?r:a,p=d.width,g=d.height,v=[y.replacementClass,o?"".concat(y.cssPrefix,"-").concat(o):""].filter(function(T){return u.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(u.classes).join(" "),P={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":n,"data-icon":o,class:v,role:u.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(g)})};!Ml(u.attributes)&&!u.attributes["aria-hidden"]&&(P.attributes["aria-hidden"]="true"),c&&(P.attributes[Q]="");var b=m(m({},P),{},{prefix:n,iconName:o,main:a,mask:r,maskId:l,transform:i,symbol:s,styles:m({},u.styles)}),x=r.found&&a.found?X("generateAbstractMask",b)||{children:[],attributes:{}}:X("generateAbstractIcon",b)||{children:[],attributes:{}},C=x.children,O=x.attributes;return b.children=C,b.attributes=O,s?Fl(b):jl(b)}function Ta(e){var t=e.content,a=e.width,r=e.height,n=e.transform,o=e.extra,i=e.watchable,s=i===void 0?!1:i,l=m(m({},o.attributes),{},{class:o.classes.join(" ")});s&&(l[Q]="");var u=m({},o.styles);Dt(n)&&(u.transform=ll({transform:n,width:a,height:r}),u["-webkit-transform"]=u.transform);var f=_e(u);f.length>0&&(l.style=f);var c=[];return c.push({tag:"span",attributes:l,children:[t]}),c}function $l(e){var t=e.content,a=e.extra,r=m(m({},a.attributes),{},{class:a.classes.join(" ")}),n=_e(a.styles);n.length>0&&(r.style=n);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),o}var et=R.styles;function bt(e){var t=e[0],a=e[1],r=e.slice(4),n=Re(r,1),o=n[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(Je.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Je.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Je.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:a,icon:i}}var Nl={found:!1,width:512,height:512};function Rl(e,t){!Br&&!y.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function xt(e,t){var a=t;return t==="fa"&&y.styleDefault!==null&&(t=Y()),new Promise(function(r,n){if(a==="fa"){var o=un(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&et[t]&&et[t][e]){var i=et[t][e];return r(bt(i))}Rl(e,t),r(m(m({},Nl),{},{icon:y.showMissingIcons&&e?X("missingIconAbstract")||{}:{}}))})}var ja=function(){},wt=y.measurePerformance&&Pe&&Pe.mark&&Pe.measure?Pe:{mark:ja,measure:ja},ue='FA "7.0.0"',_l=function(t){return wt.mark("".concat(ue," ").concat(t," begins")),function(){return mn(t)}},mn=function(t){wt.mark("".concat(ue," ").concat(t," ends")),wt.measure("".concat(ue," ").concat(t),"".concat(ue," ").concat(t," begins"),"".concat(ue," ").concat(t," ends"))},Ht={begin:_l,end:mn},Ce=function(){};function Fa(e){var t=e.getAttribute?e.getAttribute(Q):null;return typeof t=="string"}function Ll(e){var t=e.getAttribute?e.getAttribute(Rt):null,a=e.getAttribute?e.getAttribute(_t):null;return t&&a}function Dl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(y.replacementClass)}function zl(){if(y.autoReplaceSvg===!0)return Ie.replace;var e=Ie[y.autoReplaceSvg];return e||Ie.replace}function Wl(e){return I.createElementNS("http://www.w3.org/2000/svg",e)}function Vl(e){return I.createElement(e)}function pn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?Wl:Vl:a;if(typeof e=="string")return I.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(i){n.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){n.appendChild(pn(i,{ceFn:r}))}),n}function Hl(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ie={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(pn(n),a)}),a.getAttribute(Q)===null&&y.keepOriginalSource){var r=I.createComment(Hl(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~Lt(a).indexOf(y.replacementClass))return Ie.replace(t);var n=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===y.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var i=r.map(function(s){return ge(s)}).join(`
`);a.setAttribute(Q,""),a.innerHTML=i}};function Ma(e){e()}function hn(e,t){var a=typeof t=="function"?t:Ce;if(e.length===0)a();else{var r=Ma;y.mutateApproach===Us&&(r=U.requestAnimationFrame||Ma),r(function(){var n=zl(),o=Ht.begin("mutate");e.map(n),o(),a()})}}var Gt=!1;function vn(){Gt=!0}function St(){Gt=!1}var je=null;function $a(e){if(ya&&y.observeMutations){var t=e.treeCallback,a=t===void 0?Ce:t,r=e.nodeCallback,n=r===void 0?Ce:r,o=e.pseudoElementsCallback,i=o===void 0?Ce:o,s=e.observeMutationsRoot,l=s===void 0?I:s;je=new ya(function(u){if(!Gt){var f=Y();se(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Fa(c.addedNodes[0])&&(y.searchPseudoElements&&i(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&y.searchPseudoElements&&i([c.target],!0),c.type==="attributes"&&Fa(c.target)&&~Zs.indexOf(c.attributeName))if(c.attributeName==="class"&&Ll(c.target)){var d=De(Lt(c.target)),p=d.prefix,g=d.iconName;c.target.setAttribute(Rt,p||f),g&&c.target.setAttribute(_t,g)}else Dl(c.target)&&n(c.target)})}}),H&&je.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gl(){je&&je.disconnect()}function Bl(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var o=n.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),a}function Ul(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=De(Lt(e));return n.prefix||(n.prefix=Y()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=vl(n.prefix,e.innerText)||Wt(n.prefix,en(e.innerText))),!n.iconName&&y.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Yl(e){var t=se(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function Xl(){return{iconName:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Na(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Ul(e),r=a.iconName,n=a.prefix,o=a.rest,i=Yl(e),s=gt("parseNodeAttributes",{},e),l=t.styleParser?Bl(e):[];return m({iconName:r,prefix:n,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var Kl=R.styles;function gn(e){var t=y.autoReplaceSvg==="nest"?Na(e,{styleParser:!1}):Na(e);return~t.extra.classes.indexOf(Xr)?X("generateLayersText",e,t):X("generateSvgReplacementMutation",e,t)}function ql(){return[].concat(_(Dr),_(zr))}function Ra(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!H)return Promise.resolve();var a=I.documentElement.classList,r=function(c){return a.add("".concat(wa,"-").concat(c))},n=function(c){return a.remove("".concat(wa,"-").concat(c))},o=y.autoFetchSvg?ql():Ar.concat(Object.keys(Kl));o.includes("fa")||o.push("fa");var i=[".".concat(Xr,":not([").concat(Q,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(Q,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=se(e.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=Ht.begin("onTree"),u=s.reduce(function(f,c){try{var d=gn(c);d&&f.push(d)}catch(p){Br||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise(function(f,c){Promise.all(u).then(function(d){hn(d,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(d){l(),c(d)})})}function Jl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;gn(e).then(function(a){a&&hn([a],t)})}function Zl(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:yt(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:yt(n||{})),e(r,m(m({},a),{},{mask:n}))}}var Ql=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?z:r,o=a.symbol,i=o===void 0?!1:o,s=a.mask,l=s===void 0?null:s,u=a.maskId,f=u===void 0?null:u,c=a.classes,d=c===void 0?[]:c,p=a.attributes,g=p===void 0?{}:p,v=a.styles,P=v===void 0?{}:v;if(t){var b=t.prefix,x=t.iconName,C=t.icon;return ze(m({type:"icon"},t),function(){return ee("beforeDOMElementCreation",{iconDefinition:t,params:a}),Vt({icons:{main:bt(C),mask:l?bt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:x,transform:m(m({},z),n),symbol:i,maskId:f,extra:{attributes:g,styles:P,classes:d}})})}},ef={mixout:function(){return{icon:Zl(Ql)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Ra,a.nodeCallback=Jl,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?I:r,o=a.callback,i=o===void 0?function(){}:o;return Ra(n,i)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,o=r.prefix,i=r.transform,s=r.symbol,l=r.mask,u=r.maskId,f=r.extra;return new Promise(function(c,d){Promise.all([xt(n,o),l.iconName?xt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var g=Re(p,2),v=g[0],P=g[1];c([a,Vt({icons:{main:v,mask:P},prefix:o,iconName:n,transform:i,symbol:s,maskId:u,extra:f,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,o=a.main,i=a.transform,s=a.styles,l=_e(s);l.length>0&&(n.style=l);var u;return Dt(i)&&(u=X("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:n}}}},tf={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,o=n===void 0?[]:n;return ze({type:"layer"},function(){ee("beforeDOMElementCreation",{assembler:a,params:r});var i=[];return a(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(_(o)).join(" ")},children:i}]})}}}},af={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,o=n===void 0?[]:n,i=r.attributes,s=i===void 0?{}:i,l=r.styles,u=l===void 0?{}:l;return ze({type:"counter",content:a},function(){return ee("beforeDOMElementCreation",{content:a,params:r}),$l({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(_(o))}})})}}}},rf={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,o=n===void 0?z:n,i=r.classes,s=i===void 0?[]:i,l=r.attributes,u=l===void 0?{}:l,f=r.styles,c=f===void 0?{}:f;return ze({type:"text",content:a},function(){return ee("beforeDOMElementCreation",{content:a,params:r}),Ta({content:a,transform:m(m({},z),o),extra:{attributes:u,styles:c,classes:["".concat(y.cssPrefix,"-layers-text")].concat(_(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,o=r.extra,i=null,s=null;if(Sr){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();i=u.width/l,s=u.height/l}return Promise.resolve([a,Ta({content:a.innerHTML,width:i,height:s,transform:n,extra:o,watchable:!0})])}}},yn=new RegExp('"',"ug"),_a=[1105920,1112319],La=m(m(m(m({},{FontAwesome:{normal:"fas",400:"fas"}}),Bi),Gs),es),Pt=Object.keys(La).reduce(function(e,t){return e[t.toLowerCase()]=La[t],e},{}),nf=Object.keys(Pt).reduce(function(e,t){var a=Pt[t];return e[t]=a[900]||_(Object.entries(a))[0][1],e},{});function of(e){var t=e.replace(yn,"");return en(_(t)[0]||"")}function sf(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(yn,""),n=r.codePointAt(0),o=n>=_a[0]&&n<=_a[1],i=r.length===2?r[0]===r[1]:!1;return o||i||t}function lf(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Pt[a]||{})[n]||nf[a]}function Da(e,t){var a="".concat(Bs).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var o=se(e.children),i=o.filter(function(j){return j.getAttribute(mt)===t})[0],s=U.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(qs),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!u)return e.removeChild(i),r();if(u&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=lf(l,f),g=of(d),v=u[0].startsWith("FontAwesome"),P=sf(s),b=Wt(p,g),x=b;if(v){var C=gl(g);C.iconName&&C.prefix&&(b=C.iconName,p=C.prefix)}if(b&&!P&&(!i||i.getAttribute(Rt)!==p||i.getAttribute(_t)!==x)){e.setAttribute(a,x),i&&e.removeChild(i);var O=Xl(),T=O.extra;T.attributes[mt]=t,xt(b,p).then(function(j){var E=Vt(m(m({},O),{},{icons:{main:j,mask:cn()},prefix:p,iconName:x,extra:T,watchable:!0})),F=I.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=E.map(function(L){return ge(L)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function ff(e){return Promise.all([Da(e,"::before"),Da(e,"::after")])}function uf(e){return e.parentNode!==document.head&&!~Ys.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(mt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var cf=function(t){return!!t&&Gr.some(function(a){return t.includes(a)})},df=function(t){if(!t)return[];for(var a=new Set,r=[t],n=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],o=function(){var p=s[i];r=r.flatMap(function(g){return g.split(p).map(function(v){return v.replace(/,\s*$/,"").trim()})})},i=0,s=n;i<s.length;i++)o();r=r.flatMap(function(d){return d.includes("(")?d:d.split(",").map(function(p){return p.trim()})});var l=ke(r),u;try{for(l.s();!(u=l.n()).done;){var f=u.value;if(cf(f)){var c=Gr.reduce(function(d,p){return d.replace(p,"")},f);c!==""&&c!=="*"&&a.add(c)}}}catch(d){l.e(d)}finally{l.f()}return a};function za(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(H){var a;if(t)a=e;else if(y.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=ke(document.styleSheets),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;try{var s=ke(i.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,f=df(u.selectorText),c=ke(f),d;try{for(c.s();!(d=c.n()).done;){var p=d.value;r.add(p)}}catch(v){c.e(v)}finally{c.f()}}}catch(v){s.e(v)}finally{s.f()}}catch(v){y.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){n.e(v)}finally{n.f()}if(!r.size)return;var g=Array.from(r).join(", ");try{a=e.querySelectorAll(g)}catch{}}return new Promise(function(v,P){var b=se(a).filter(uf).map(ff),x=Ht.begin("searchPseudoElements");vn(),Promise.all(b).then(function(){x(),St(),v()}).catch(function(){x(),St(),P()})})}}var mf={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=za,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?I:r;y.searchPseudoElements&&za(n)}}},Wa=!1,pf={mixout:function(){return{dom:{unwatch:function(){vn(),Wa=!0}}}},hooks:function(){return{bootstrap:function(){$a(gt("mutationObserverCallbacks",{}))},noAuto:function(){Gl()},watch:function(a){var r=a.observeMutationsRoot;Wa?St():$a(gt("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Va=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var o=n.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return r.flipX=!0,r;if(i&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(i){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},hf={mixout:function(){return{parse:{transform:function(a){return Va(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Va(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,o=a.containerWidth,i=a.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),f="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(f)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:c,path:d};return{tag:"g",attributes:m({},p.outer),children:[{tag:"g",attributes:m({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:m(m({},r.icon.attributes),p.path)}]}]}}}},tt={x:0,y:0,width:"100%",height:"100%"};function Ha(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function vf(e){return e.tag==="g"?e.children:[e]}var gf={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),o=n?De(n.split(" ").map(function(i){return i.trim()})):cn();return o.prefix||(o.prefix=Y()),a.mask=o,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,o=a.main,i=a.mask,s=a.maskId,l=a.transform,u=o.width,f=o.icon,c=i.width,d=i.icon,p=sl({transform:l,containerWidth:c,iconWidth:u}),g={tag:"rect",attributes:m(m({},tt),{},{fill:"white"})},v=f.children?{children:f.children.map(Ha)}:{},P={tag:"g",attributes:m({},p.inner),children:[Ha(m({tag:f.tag,attributes:m(m({},f.attributes),p.path)},v))]},b={tag:"g",attributes:m({},p.outer),children:[P]},x="mask-".concat(s||Pa()),C="clip-".concat(s||Pa()),O={tag:"mask",attributes:m(m({},tt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,b]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:vf(d)},O]};return r.push(T,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(x,")")},tt)}),{children:r,attributes:n}}}},yf={provides:function(t){var a=!1;U.matchMedia&&(a=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:m(m({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=m(m({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:m(m({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},i),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:m(m({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:m(m({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:m(m({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},bf={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),o=n===null?!1:n===""?!0:n;return a.symbol=o,a}}}},xf=[ul,ef,tf,af,rf,mf,pf,hf,gf,yf,bf];Cl(xf,{mixoutsTo:N});N.noAuto;N.config;N.library;N.dom;var At=N.parse;N.findIconDefinition;N.toHtml;var wf=N.icon;N.layer;N.text;N.counter;var at={exports:{}},rt,Ga;function Sf(){if(Ga)return rt;Ga=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return rt=e,rt}var nt,Ba;function Pf(){if(Ba)return nt;Ba=1;var e=Sf();function t(){}function a(){}return a.resetWarningCache=t,nt=function(){function r(i,s,l,u,f,c){if(c!==e){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}r.isRequired=r;function n(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:n,element:r,elementType:r,instanceOf:n,node:r,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:t};return o.PropTypes=o,o},nt}var Ua;function Af(){return Ua||(Ua=1,at.exports=Pf()()),at.exports}var kf=Af();const A=Zn(kf);var Cf={};function kt(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function If(e){if(Array.isArray(e))return e}function Ef(e){if(Array.isArray(e))return kt(e)}function B(e,t,a){return(t=Rf(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Of(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Tf(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,o,i,s=[],l=!0,u=!1;try{if(o=(a=a.call(e)).next,t!==0)for(;!(l=(r=o.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(f){u=!0,n=f}finally{try{if(!l&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(u)throw n}}return s}}function jf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ff(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ya(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Ya(Object(a),!0).forEach(function(r){B(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ya(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function Mf(e,t){if(e==null)return{};var a,r,n=$f(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function $f(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function Xa(e,t){return If(e)||Tf(e,t)||bn(e,t)||jf()}function Ct(e){return Ef(e)||Of(e)||bn(e)||Ff()}function Nf(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rf(e){var t=Nf(e,"string");return typeof t=="symbol"?t:t+""}function Fe(e){"@babel/helpers - typeof";return Fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fe(e)}function bn(e,t){if(e){if(typeof e=="string")return kt(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?kt(e,t):void 0}}var _f="7.0.0-alpha1",It;try{var Lf=require("@fortawesome/fontawesome-svg-core/package.json");It=Lf.version}catch{It=Cf.FA_VERSION||"7.0.0-alpha8"}function Df(e){var t=e.beat,a=e.fade,r=e.beatFade,n=e.bounce,o=e.shake,i=e.flash,s=e.spin,l=e.spinPulse,u=e.spinReverse,f=e.pulse,c=e.fixedWidth,d=e.inverse,p=e.border,g=e.listItem,v=e.flip,P=e.size,b=e.rotation,x=e.pull,C=e.swapOpacity,O=e.rotateBy,T=e.widthAuto,j=zf(It,_f),E=B(B(B(B(B(B({"fa-beat":t,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":n,"fa-shake":o,"fa-flash":i,"fa-spin":s,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":f,"fa-fw":c,"fa-inverse":d,"fa-border":p,"fa-li":g,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},"fa-".concat(P),typeof P<"u"&&P!==null),"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),"fa-pull-".concat(x),typeof x<"u"&&x!==null),"fa-swap-opacity",C),"fa-rotate-by",j&&O),"fa-width-auto",j&&T);return Object.keys(E).map(function(F){return E[F]?F:null}).filter(function(F){return F})}function zf(e,t){for(var a=e.split("-"),r=Xa(a,2),n=r[0],o=r[1],i=t.split("-"),s=Xa(i,2),l=s[0],u=s[1],f=n.split("."),c=l.split("."),d=0;d<Math.max(f.length,c.length);d++){var p=f[d]||"0",g=c[d]||"0",v=parseInt(p,10),P=parseInt(g,10);if(v!==P)return v>P}for(var b=0;b<Math.max(f.length,c.length);b++){var x=f[b]||"0",C=c[b]||"0";if(x!==C&&x.length!==C.length)return x.length<C.length}return!(o&&!u)}function Wf(e){return e=e-0,e===e}function xn(e){return Wf(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Vf=["style"];function Hf(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Gf(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var r=a.indexOf(":"),n=xn(a.slice(0,r)),o=a.slice(r+1).trim();return n.startsWith("webkit")?t[Hf(n)]=o:t[n]=o,t},{})}function wn(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return wn(e,l)}),n=Object.keys(t.attributes||{}).reduce(function(l,u){var f=t.attributes[u];switch(u){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=Gf(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=f:l.attrs[xn(u)]=f}return l},{attrs:{}}),o=a.style,i=o===void 0?{}:o,s=Mf(a,Vf);return n.attrs.style=D(D({},n.attrs.style),i),e.apply(void 0,[t.tag,D(D({},n.attrs),s)].concat(Ct(r)))}var Sn=!1;try{Sn=!0}catch{}function Bf(){if(!Sn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ka(e){if(e&&Fe(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(At.icon)return At.icon(e);if(e===null)return null;if(e&&Fe(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ot(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?B({},e,t):{}}var qa={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Pn=Za.forwardRef(function(e,t){var a=D(D({},qa),e),r=a.icon,n=a.mask,o=a.symbol,i=a.className,s=a.title,l=a.titleId,u=a.maskId,f=Ka(r),c=ot("classes",[].concat(Ct(Df(a)),Ct((i||"").split(" ")))),d=ot("transform",typeof a.transform=="string"?At.transform(a.transform):a.transform),p=ot("mask",Ka(n)),g=wf(f,D(D(D(D({},c),d),p),{},{symbol:o,title:s,titleId:l,maskId:u}));if(!g)return Bf("Could not find icon",f),null;var v=g.abstract,P={ref:t};return Object.keys(a).forEach(function(b){qa.hasOwnProperty(b)||(P[b]=a[b])}),Uf(v[0],P)});Pn.displayName="FontAwesomeIcon";Pn.propTypes={beat:A.bool,border:A.bool,beatFade:A.bool,bounce:A.bool,className:A.string,fade:A.bool,flash:A.bool,mask:A.oneOfType([A.object,A.array,A.string]),maskId:A.string,fixedWidth:A.bool,inverse:A.bool,flip:A.oneOf([!0,!1,"horizontal","vertical","both"]),icon:A.oneOfType([A.object,A.array,A.string]),listItem:A.bool,pull:A.oneOf(["right","left"]),pulse:A.bool,rotation:A.oneOf([0,90,180,270]),rotateBy:A.bool,shake:A.bool,size:A.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:A.bool,spinPulse:A.bool,spinReverse:A.bool,symbol:A.oneOfType([A.bool,A.string]),title:A.string,titleId:A.string,transform:A.oneOfType([A.string,A.object]),swapOpacity:A.bool,widthAuto:A.bool};var Uf=wn.bind(null,Za.createElement);/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var ou={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},iu={prefix:"fas",iconName:"laptop-code",icon:[640,512,[],"f5fc","M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 240-64 0 0-240-384 0 0 240-64 0 0-240zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},su={prefix:"fas",iconName:"cubes",icon:[512,512,[],"f1b3","M284-1.3c-17.3-10-38.7-10-56 0L143.8 47.3c-17.3 10-28 28.5-28 48.5l0 101.9-88.3 51c-17.3 10-28 28.5-28 48.5l0 97.3c0 20 10.7 38.5 28 48.5l84.3 48.6c17.3 10 38.7 10 56 0l88.3-51 88.3 51c17.3 10 38.7 10 56 0L484.5 443c17.3-10 28-28.5 28-48.5l0-97.3c0-20-10.7-38.5-28-48.5l-88.3-51 0-101.9c0-20-10.7-38.5-28-48.5L284-1.3zM232 292.6l0 106.5-88.3 51c-1.2 .7-2.6 1.1-4 1.1l0-105.3 92.3-53.3zm231.4 .6c.7 1.2 1.1 2.6 1.1 4l0 97.3c0 2.9-1.5 5.5-4 6.9l-84.3 48.6c-1.2 .7-2.6 1.1-4 1.1l0-105.3 91.2-52.6zM348.3 95.8l0 101.9-92.3 53.3 0-106.5 91.2-52.6c.7 1.2 1.1 2.6 1.1 4z"]},lu={prefix:"fas",iconName:"comment-nodes",icon:[640,512,[],"e696","M480 208C503.7 208 525.6 215.3 543.7 227.9 536.9 100.9 425 0 288 0 146.6 0 32 107.5 32 240 32 294.3 51.2 344.3 83.6 384.5L34.8 476.8c-4.8 9-3.3 20 3.6 27.5s17.8 9.8 27.1 5.8l118.4-50.7c27.2 11.4 56.9 18.4 88.1 20.2 .1-18.9 4.9-38 15-55.5 17.1-29.7 45.8-48.5 77-54.2l9.2-16c-3.4-10.7-5.2-22-5.2-33.8 0-61.9 50.1-112 112-112zM328.6 448c-17.7 30.6-7.2 69.7 23.4 87.4s69.7 7.2 87.4-23.4c1.5-2.6 2.8-5.3 3.9-8l73.3 0c1.1 2.7 2.4 5.4 3.9 8 17.7 30.6 56.8 41.1 87.4 23.4s41.1-56.8 23.4-87.4c-13.4-23.2-39.1-34.8-64-31.4l-17.6-30.7c-11 11.7-25 20.6-40.6 25.6l16.5 28.9c-3.8 4.8-6.8 10-9 15.6l-73.4 0c-2.2-5.6-5.3-10.8-9-15.6l33-57.7c4.1 .8 8.4 1.3 12.8 1.3 35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64c0 13.4 4.1 25.8 11.2 36.1l-34.6 60.5c-25-3.4-50.6 8.3-64 31.4z"]};export{Jf as $,go as A,wo as B,rr as C,Ee as D,Do as E,Pn as F,io as G,lr as H,mr as I,Xo as J,Go as K,yo as L,$o as M,No as N,cr as O,qo as P,lt as Q,xo as R,ir as S,bo as T,Zf as a,ui as b,nu as c,si as d,su as e,ia as f,iu as g,lu as h,ou as i,it as j,no as k,Qf as l,ni as m,Tt as n,w as o,Be as p,q,eu as r,nr as s,$e as t,au as u,tu as v,uo as w,er as x,Z as y,Ft as z};
