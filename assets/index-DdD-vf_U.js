import{o as or,f as Qt,j as ft,n as ir,B as sr,x as lr,i as ut,C as fr,g as ur,a as cr}from"./chunk-3HKZRFKK-_b-nzSfE.js";import{r as E,c as ct,R as Je,N as dr}from"./index-C185ll5y.js";var mr=new Set(["id","type","style","title","role","tabIndex","htmlFor","width","height","abbr","accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","challenge","charset","checked","cite","class","className","cols","colSpan","command","content","contentEditable","contextMenu","controls","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","dropzone","encType","enterKeyHint","for","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","hidden","high","href","hrefLang","httpEquiv","icon","inputMode","isMap","itemId","itemProp","itemRef","itemScope","itemType","kind","label","lang","list","loop","manifest","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","open","optimum","pattern","ping","placeholder","poster","preload","radioGroup","referrerPolicy","readOnly","rel","required","rows","rowSpan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","slot","sortable","span","spellCheck","src","srcDoc","srcSet","start","step","target","translate","typeMustMatch","useMap","value","wmode","wrap"]),vr=new Set(["onCopy","onCut","onPaste","onLoad","onError","onWheel","onScroll","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerEnter","onPointerLeave","onPointerUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd"]),dt=/^(data-.*)$/,pr=/^(aria-.*)$/,oe=/^(on[A-Z].*)$/;function ss(e,t={}){let{labelable:a=!0,enabled:r=!0,propNames:n,omitPropNames:i,omitEventNames:o,omitDataProps:s,omitEventProps:l}=t,f={};if(!r)return e;for(const u in e)i?.has(u)||o?.has(u)&&oe.test(u)||oe.test(u)&&!vr.has(u)||s&&dt.test(u)||l&&oe.test(u)||(Object.prototype.hasOwnProperty.call(e,u)&&(mr.has(u)||a&&pr.test(u)||n?.has(u)||dt.test(u))||oe.test(u))&&(f[u]=e[u]);return f}const hr=new Set(["id"]),gr=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),br=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),yr=/^(data-.*)$/;function ls(e,t={}){let{labelable:a,isLink:r,propNames:n}=t,i={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(hr.has(o)||a&&gr.has(o)||r&&br.has(o)||n?.has(o)||yr.test(o))&&(i[o]=e[o]);return i}function fs(e,t){let{id:a,"aria-label":r,"aria-labelledby":n}=e;return a=or(a),n&&r?n=[...new Set([a,...n.trim().split(/\s+/)])].join(" "):n&&(n=n.trim().split(/\s+/).join(" ")),!r&&!n&&t&&(r=t),{id:a,"aria-label":r,"aria-labelledby":n}}function us(e,t,a){let[r,n]=E.useState(e||t),i=E.useRef(e!==void 0),o=e!==void 0;E.useEffect(()=>{i.current,i.current=o},[o]);let s=o?e:r,l=E.useCallback((f,...u)=>{let d=(m,...v)=>{a&&(Object.is(s,m)||a(m,...v)),o||(s=m)};typeof f=="function"?n((v,...x)=>{let h=f(o?s:v,...x);return d(h,...u),o?v:h}):(o||n(f),d(f,...u))},[o,s,a]);return[s,l]}function xr(e){const t=Qt(e),a=ft(t);if(ir()==="virtual"){let r=a;sr(()=>{ft(t)===r&&e.isConnected&&ct(e)})}else ct(e)}function mt(e){if(!e)return;let t=!0;return a=>{let r={...a,preventDefault(){a.preventDefault()},isDefaultPrevented(){return a.isDefaultPrevented()},stopPropagation(){t=!0},continuePropagation(){t=!1},isPropagationStopped(){return t}};e(r),t&&a.stopPropagation()}}function Sr(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:mt(e.onKeyDown),onKeyUp:mt(e.onKeyUp)}}}let wr=Je.createContext(null);function Ar(e){let t=E.useContext(wr)||{};fr(t,e);let{ref:a,...r}=t;return r}function cs(e,t){let{focusProps:a}=lr(e),{keyboardProps:r}=Sr(e),n=ut(a,r),i=Ar(t),o=e.isDisabled?{}:i,s=E.useRef(e.autoFocus);E.useEffect(()=>{s.current&&t.current&&xr(t.current),s.current=!1},[t]);let l=e.excludeFromTabOrder?-1:0;return e.isDisabled&&(l=void 0),{focusableProps:ut({...n,tabIndex:l},o)}}let Fe=!1,xe=0;function Pr(){Fe=!0,setTimeout(()=>{Fe=!1},50)}function vt(e){e.pointerType==="touch"&&Pr()}function kr(){if(!(typeof document>"u"))return typeof PointerEvent<"u"&&document.addEventListener("pointerup",vt),xe++,()=>{xe--,!(xe>0)&&typeof PointerEvent<"u"&&document.removeEventListener("pointerup",vt)}}function ds(e){let{onHoverStart:t,onHoverChange:a,onHoverEnd:r,isDisabled:n}=e,[i,o]=E.useState(!1),s=E.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;E.useEffect(kr,[]);let{addGlobalListener:l,removeAllGlobalListeners:f}=ur(),{hoverProps:u,triggerHoverEnd:d}=E.useMemo(()=>{let m=(h,S)=>{if(s.pointerType=S,n||S==="touch"||s.isHovered||!h.currentTarget.contains(h.target))return;s.isHovered=!0;let b=h.currentTarget;s.target=b,l(Qt(h.target),"pointerover",w=>{s.isHovered&&s.target&&!cr(s.target,w.target)&&v(w,w.pointerType)},{capture:!0}),t&&t({type:"hoverstart",target:b,pointerType:S}),a&&a(!0),o(!0)},v=(h,S)=>{let b=s.target;s.pointerType="",s.target=null,!(S==="touch"||!s.isHovered||!b)&&(s.isHovered=!1,f(),r&&r({type:"hoverend",target:b,pointerType:S}),a&&a(!1),o(!1))},x={};return typeof PointerEvent<"u"&&(x.onPointerEnter=h=>{Fe&&h.pointerType==="mouse"||m(h,h.pointerType)},x.onPointerLeave=h=>{!n&&h.currentTarget.contains(h.target)&&v(h,h.pointerType)}),{hoverProps:x,triggerHoverEnd:v}},[t,a,r,n,s,l,f]);return E.useEffect(()=>{n&&d({currentTarget:s.target},s.pointerType)},[n]),{hoverProps:u,isHovered:i}}var ms=globalThis?.document?E.useLayoutEffect:E.useEffect;/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Ne(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function Er(e){if(Array.isArray(e))return e}function Or(e){if(Array.isArray(e))return Ne(e)}function Ir(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Zt(r.key),r)}}function Tr(e,t,a){return t&&$r(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Qe(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function y(e,t,a){return(t=Zt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Cr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,f=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(u){f=!0,n=u}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(f)throw n}}return s}}function Nr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?pt(Object(a),!0).forEach(function(r){y(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function pe(e,t){return Er(e)||Fr(e,t)||Qe(e,t)||Nr()}function T(e){return Or(e)||Cr(e)||Qe(e)||jr()}function _r(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Zt(e){var t=_r(e,"string");return typeof t=="symbol"?t:t+""}function ce(e){"@babel/helpers - typeof";return ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ce(e)}function Qe(e,t){if(e){if(typeof e=="string")return Ne(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ne(e,t):void 0}}var ht=function(){},Ze={},ea={},ta=null,aa={mark:ht,measure:ht};try{typeof window<"u"&&(Ze=window),typeof document<"u"&&(ea=document),typeof MutationObserver<"u"&&(ta=MutationObserver),typeof performance<"u"&&(aa=performance)}catch{}var Mr=Ze.navigator||{},gt=Mr.userAgent,bt=gt===void 0?"":gt,R=Ze,A=ea,yt=ta,ie=aa;R.document;var _=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",ra=~bt.indexOf("MSIE")||~bt.indexOf("Trident/"),Se,Lr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Dr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,na={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},Rr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},oa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],k="classic",te="duotone",ia="sharp",sa="sharp-duotone",la="chisel",fa="etch",ua="jelly",ca="jelly-duo",da="jelly-fill",ma="notdog",va="notdog-duo",pa="slab",ha="slab-press",ga="thumbprint",ba="whiteboard",zr="Classic",Wr="Duotone",Hr="Sharp",Ur="Sharp Duotone",Yr="Chisel",Gr="Etch",Br="Jelly",Vr="Jelly Duo",Kr="Jelly Fill",Xr="Notdog",qr="Notdog Duo",Jr="Slab",Qr="Slab Press",Zr="Thumbprint",en="Whiteboard",ya=[k,te,ia,sa,la,fa,ua,ca,da,ma,va,pa,ha,ga,ba];Se={},y(y(y(y(y(y(y(y(y(y(Se,k,zr),te,Wr),ia,Hr),sa,Ur),la,Yr),fa,Gr),ua,Br),ca,Vr),da,Kr),ma,Xr),y(y(y(y(y(Se,va,qr),pa,Jr),ha,Qr),ga,Zr),ba,en);var tn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},an={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},rn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),nn={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},xa=["fak","fa-kit","fakd","fa-kit-duotone"],xt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},on=["kit"],sn="kit",ln="kit-duotone",fn="Kit",un="Kit Duotone";y(y({},sn,fn),ln,un);var cn={kit:{"fa-kit":"fak"}},dn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},mn={kit:{fak:"fa-kit"}},St={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},we,se={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],pn="classic",hn="duotone",gn="sharp",bn="sharp-duotone",yn="chisel",xn="etch",Sn="jelly",wn="jelly-duo",An="jelly-fill",Pn="notdog",kn="notdog-duo",En="slab",On="slab-press",In="thumbprint",$n="whiteboard",Tn="Classic",Cn="Duotone",Fn="Sharp",Nn="Sharp Duotone",jn="Chisel",_n="Etch",Mn="Jelly",Ln="Jelly Duo",Dn="Jelly Fill",Rn="Notdog",zn="Notdog Duo",Wn="Slab",Hn="Slab Press",Un="Thumbprint",Yn="Whiteboard";we={},y(y(y(y(y(y(y(y(y(y(we,pn,Tn),hn,Cn),gn,Fn),bn,Nn),yn,jn),xn,_n),Sn,Mn),wn,Ln),An,Dn),Pn,Rn),y(y(y(y(y(we,kn,zn),En,Wn),On,Hn),In,Un),$n,Yn);var Gn="kit",Bn="kit-duotone",Vn="Kit",Kn="Kit Duotone";y(y({},Gn,Vn),Bn,Kn);var Xn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},qn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},je={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},Jn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Sa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(vn,Jn),Qn=["solid","regular","light","thin","duotone","brands","semibold"],wa=[1,2,3,4,5,6,7,8,9,10],Zn=wa.concat([11,12,13,14,15,16,17,18,19,20]),eo=["aw","fw","pull-left","pull-right"],to=[].concat(T(Object.keys(qn)),Qn,eo,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",se.GROUP,se.SWAP_OPACITY,se.PRIMARY,se.SECONDARY]).concat(wa.map(function(e){return"".concat(e,"x")})).concat(Zn.map(function(e){return"w-".concat(e)})),ao={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},N="___FONT_AWESOME___",_e=16,Aa="fa",Pa="svg-inline--fa",U="data-fa-i2svg",Me="data-fa-pseudo-element",ro="data-fa-pseudo-element-pending",et="data-prefix",tt="data-icon",wt="fontawesome-i2svg",no="async",oo=["HTML","HEAD","STYLE","SCRIPT"],ka=["::before","::after",":before",":after"],Ea=function(){try{return!0}catch{return!1}}();function ae(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[k]}})}var Oa=c({},na);Oa[k]=c(c(c(c({},{"fa-duotone":"duotone"}),na[k]),xt.kit),xt["kit-duotone"]);var io=ae(Oa),Le=c({},nn);Le[k]=c(c(c(c({},{duotone:"fad"}),Le[k]),St.kit),St["kit-duotone"]);var At=ae(Le),De=c({},je);De[k]=c(c({},De[k]),mn.kit);var Ia=ae(De),Re=c({},Xn);Re[k]=c(c({},Re[k]),cn.kit);ae(Re);var so=Lr,$a="fa-layers-text",lo=Dr,fo=c({},tn);ae(fo);var uo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ae=Rr,co=[].concat(T(on),T(to)),Q=R.FontAwesomeConfig||{};function mo(e){var t=A.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vo(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(A&&typeof A.querySelector=="function"){var po=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];po.forEach(function(e){var t=pe(e,2),a=t[0],r=t[1],n=vo(mo(a));n!=null&&(Q[r]=n)})}var Ta={styleDefault:"solid",familyDefault:k,cssPrefix:Aa,replacementClass:Pa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);var X=c(c({},Ta),Q);X.autoReplaceSvg||(X.observeMutations=!1);var p={};Object.keys(Ta).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(a){X[e]=a,Z.forEach(function(r){return r(p)})},get:function(){return X[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){X.cssPrefix=t,Z.forEach(function(a){return a(p)})},get:function(){return X.cssPrefix}});R.FontAwesomeConfig=p;var Z=[];function ho(e){return Z.push(e),function(){Z.splice(Z.indexOf(e),1)}}var B=_e,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function go(e){if(!(!e||!_)){var t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=A.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return A.head.insertBefore(t,r),e}}var bo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pt(){for(var e=12,t="";e-- >0;)t+=bo[Math.random()*62|0];return t}function q(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function at(e){return e.classList?q(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ca(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yo(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Ca(e[a]),'" ')},"").trim()}function he(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function rt(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function xo(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:f}}function So(e){var t=e.transform,a=e.width,r=a===void 0?_e:a,n=e.height,i=n===void 0?_e:n,o="";return ra?o+="translate(".concat(t.x/B-r/2,"em, ").concat(t.y/B-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/B,"em), calc(-50% + ").concat(t.y/B,"em)) "),o+="scale(".concat(t.size/B*(t.flipX?-1:1),", ").concat(t.size/B*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var wo=`:root, :host {
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
}`;function Fa(){var e=Aa,t=Pa,a=p.cssPrefix,r=p.replacementClass,n=wo;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var kt=!1;function Pe(){p.autoAddCss&&!kt&&(go(Fa()),kt=!0)}var Ao={mixout:function(){return{dom:{css:Fa,insertCss:Pe}}},hooks:function(){return{beforeDOMElementCreation:function(){Pe()},beforeI2svg:function(){Pe()}}}},j=R||{};j[N]||(j[N]={});j[N].styles||(j[N].styles={});j[N].hooks||(j[N].hooks={});j[N].shims||(j[N].shims=[]);var $=j[N],Na=[],ja=function(){A.removeEventListener("DOMContentLoaded",ja),de=1,Na.map(function(t){return t()})},de=!1;_&&(de=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),de||A.addEventListener("DOMContentLoaded",ja));function Po(e){_&&(de?setTimeout(e,0):Na.push(e))}function re(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?Ca(e):"<".concat(t," ").concat(yo(r),">").concat(i.map(re).join(""),"</").concat(t,">")}function Et(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var ke=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=a,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function _a(e){return T(e).length!==1?null:e.codePointAt(0).toString(16)}function Ot(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Ma(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=Ot(t);typeof $.hooks.addPack=="function"&&!n?$.hooks.addPack(e,Ot(t)):$.styles[e]=c(c({},$.styles[e]||{}),i),e==="fas"&&Ma("fa",t)}var ee=$.styles,ko=$.shims,La=Object.keys(Ia),Eo=La.reduce(function(e,t){return e[t]=Object.keys(Ia[t]),e},{}),nt=null,Da={},Ra={},za={},Wa={},Ha={};function Oo(e){return~co.indexOf(e)}function Io(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!Oo(n)?n:null}var Ua=function(){var t=function(i){return ke(ee,function(o,s,l){return o[l]=ke(s,i,{}),o},{})};Da=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),Ra=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),Ha=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var a="far"in ee||p.autoFetchSvg,r=ke(ko,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});za=r.names,Wa=r.unicodes,nt=ge(p.styleDefault,{family:p.familyDefault})};ho(function(e){nt=ge(e.styleDefault,{family:p.familyDefault})});Ua();function ot(e,t){return(Da[e]||{})[t]}function $o(e,t){return(Ra[e]||{})[t]}function H(e,t){return(Ha[e]||{})[t]}function Ya(e){return za[e]||{prefix:null,iconName:null}}function To(e){var t=Wa[e],a=ot("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function z(){return nt}var Ga=function(){return{prefix:null,iconName:null,rest:[]}};function Co(e){var t=k,a=La.reduce(function(r,n){return r[n]="".concat(p.cssPrefix,"-").concat(n),r},{});return ya.forEach(function(r){(e.includes(a[r])||e.some(function(n){return Eo[r].includes(n)}))&&(t=r)}),t}function ge(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?k:a,n=io[r][e];if(r===te&&!e)return"fad";var i=At[r][e]||At[r][n],o=e in $.styles?e:null,s=i||o||null;return s}function Fo(e){var t=[],a=null;return e.forEach(function(r){var n=Io(p.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function It(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var $t=Sa.concat(xa);function be(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=It(e.filter(function(v){return $t.includes(v)})),o=It(e.filter(function(v){return!$t.includes(v)})),s=i.filter(function(v){return n=v,!oa.includes(v)}),l=pe(s,1),f=l[0],u=f===void 0?null:f,d=Co(i),m=c(c({},Fo(o)),{},{prefix:ge(u,{family:d})});return c(c(c({},m),Mo({values:e,family:d,styles:ee,config:p,canonical:m,givenPrefix:n})),No(r,n,m))}function No(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?Ya(n):{},o=H(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!ee.far&&ee.fas&&!p.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var jo=ya.filter(function(e){return e!==k||e!==te}),_o=Object.keys(je).filter(function(e){return e!==k}).map(function(e){return Object.keys(je[e])}).flat();function Mo(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,f=l===void 0?{}:l,u=a===te,d=t.includes("fa-duotone")||t.includes("fad"),m=f.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!u&&(d||m||v)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&jo.includes(a)){var x=Object.keys(s).find(function(S){return _o.includes(S)});if(x||f.autoFetchSvg){var h=rn.get(a).defaultShortPrefixId;r.prefix=h,r.iconName=H(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=z()||"fas"),r}var Lo=function(){function e(){Ir(this,e),this.definitions={}}return Tr(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=c(c({},a.definitions[s]||{}),o[s]),Ma(s,o[s]),Ua()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];a[s]||(a[s]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(a[s][d]=f)}),a[s][l]=f}),a}}])}(),Tt=[],V={},K={},Do=Object.keys(K);function Ro(e,t){var a=t.mixoutsTo;return Tt=e,V={},Object.keys(K).forEach(function(r){Do.indexOf(r)===-1&&delete K[r]}),Tt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),ce(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){V[o]||(V[o]=[]),V[o].push(i[o])})}r.provides&&r.provides(K)}),a}function ze(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=V[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Y(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=V[e]||[];n.forEach(function(i){i.apply(null,a)})}function W(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return K[e]?K[e].apply(null,t):void 0}function We(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||z();if(t)return t=H(a,t)||t,Et(Ba.definitions,a,t)||Et($.styles,a,t)}var Ba=new Lo,zo=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,Y("noAuto")},Wo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(Y("beforeI2svg",t),W("pseudoElements2svg",t),W("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Po(function(){Uo({autoReplaceSvgRoot:a}),Y("watch",t)})}},Ho={icon:function(t){if(t===null)return null;if(ce(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:H(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ge(t[0]);return{prefix:r,iconName:H(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(so))){var n=be(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||z(),iconName:H(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=z();return{prefix:i,iconName:H(i,t)||t}}}},O={noAuto:zo,config:p,dom:Wo,parse:Ho,library:Ba,findIconDefinition:We,toHtml:re},Uo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?A:a;(Object.keys($.styles).length>0||p.autoFetchSvg)&&_&&p.autoReplaceSvg&&O.dom.i2svg({node:r})};function ye(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return re(r)})}}),Object.defineProperty(e,"node",{get:function(){if(_){var r=A.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Yo(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(rt(o)&&a.found&&!r.found){var s=a.width,l=a.height,f={x:s/l/2,y:.5};n.style=he(c(c({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function Go(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},n),{},{id:o}),children:r}]}]}function Bo(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function it(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,f=e.extra,u=e.watchable,d=u===void 0?!1:u,m=r.found?r:a,v=m.width,x=m.height,h=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(I){return f.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(f.classes).join(" "),S={children:[],attributes:c(c({},f.attributes),{},{"data-prefix":n,"data-icon":i,class:h,role:f.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(x)})};!Bo(f.attributes)&&!f.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),d&&(S.attributes[U]="");var b=c(c({},S),{},{prefix:n,iconName:i,main:a,mask:r,maskId:l,transform:o,symbol:s,styles:c({},f.styles)}),w=r.found&&a.found?W("generateAbstractMask",b)||{children:[],attributes:{}}:W("generateAbstractIcon",b)||{children:[],attributes:{}},P=w.children,M=w.attributes;return b.children=P,b.attributes=M,s?Go(b):Yo(b)}function Ct(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=c(c({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[U]="");var f=c({},i.styles);rt(n)&&(f.transform=So({transform:n,width:a,height:r}),f["-webkit-transform"]=f.transform);var u=he(f);u.length>0&&(l.style=u);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),d}function Vo(e){var t=e.content,a=e.extra,r=c(c({},a.attributes),{},{class:a.classes.join(" ")}),n=he(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Ee=$.styles;function He(e){var t=e[0],a=e[1],r=e.slice(4),n=pe(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ae.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ae.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ae.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Ko={found:!1,width:512,height:512};function Xo(e,t){!Ea&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ue(e,t){var a=t;return t==="fa"&&p.styleDefault!==null&&(t=z()),new Promise(function(r,n){if(a==="fa"){var i=Ya(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ee[t]&&Ee[t][e]){var o=Ee[t][e];return r(He(o))}Xo(e,t),r(c(c({},Ko),{},{icon:p.showMissingIcons&&e?W("missingIconAbstract")||{}:{}}))})}var Ft=function(){},Ye=p.measurePerformance&&ie&&ie.mark&&ie.measure?ie:{mark:Ft,measure:Ft},J='FA "7.0.0"',qo=function(t){return Ye.mark("".concat(J," ").concat(t," begins")),function(){return Va(t)}},Va=function(t){Ye.mark("".concat(J," ").concat(t," ends")),Ye.measure("".concat(J," ").concat(t),"".concat(J," ").concat(t," begins"),"".concat(J," ").concat(t," ends"))},st={begin:qo,end:Va},fe=function(){};function Nt(e){var t=e.getAttribute?e.getAttribute(U):null;return typeof t=="string"}function Jo(e){var t=e.getAttribute?e.getAttribute(et):null,a=e.getAttribute?e.getAttribute(tt):null;return t&&a}function Qo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function Zo(){if(p.autoReplaceSvg===!0)return ue.replace;var e=ue[p.autoReplaceSvg];return e||ue.replace}function ei(e){return A.createElementNS("http://www.w3.org/2000/svg",e)}function ti(e){return A.createElement(e)}function Ka(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?ei:ti:a;if(typeof e=="string")return A.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Ka(o,{ceFn:r}))}),n}function ai(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ue={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Ka(n),a)}),a.getAttribute(U)===null&&p.keepOriginalSource){var r=A.createComment(ai(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~at(a).indexOf(p.replacementClass))return ue.replace(t);var n=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===p.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return re(s)}).join(`
`);a.setAttribute(U,""),a.innerHTML=o}};function jt(e){e()}function Xa(e,t){var a=typeof t=="function"?t:fe;if(e.length===0)a();else{var r=jt;p.mutateApproach===no&&(r=R.requestAnimationFrame||jt),r(function(){var n=Zo(),i=st.begin("mutate");e.map(n),i(),a()})}}var lt=!1;function qa(){lt=!0}function Ge(){lt=!1}var me=null;function _t(e){if(yt&&p.observeMutations){var t=e.treeCallback,a=t===void 0?fe:t,r=e.nodeCallback,n=r===void 0?fe:r,i=e.pseudoElementsCallback,o=i===void 0?fe:i,s=e.observeMutationsRoot,l=s===void 0?A:s;me=new yt(function(f){if(!lt){var u=z();q(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Nt(d.addedNodes[0])&&(p.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&p.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&Nt(d.target)&&~uo.indexOf(d.attributeName))if(d.attributeName==="class"&&Jo(d.target)){var m=be(at(d.target)),v=m.prefix,x=m.iconName;d.target.setAttribute(et,v||u),x&&d.target.setAttribute(tt,x)}else Qo(d.target)&&n(d.target)})}}),_&&me.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ri(){me&&me.disconnect()}function ni(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function oi(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=be(at(e));return n.prefix||(n.prefix=z()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=$o(n.prefix,e.innerText)||ot(n.prefix,_a(e.innerText))),!n.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function ii(e){var t=q(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function si(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=oi(e),r=a.iconName,n=a.prefix,i=a.rest,o=ii(e),s=ze("parseNodeAttributes",{},e),l=t.styleParser?ni(e):[];return c({iconName:r,prefix:n,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var li=$.styles;function Ja(e){var t=p.autoReplaceSvg==="nest"?Mt(e,{styleParser:!1}):Mt(e);return~t.extra.classes.indexOf($a)?W("generateLayersText",e,t):W("generateSvgReplacementMutation",e,t)}function fi(){return[].concat(T(xa),T(Sa))}function Lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();var a=A.documentElement.classList,r=function(d){return a.add("".concat(wt,"-").concat(d))},n=function(d){return a.remove("".concat(wt,"-").concat(d))},i=p.autoFetchSvg?fi():oa.concat(Object.keys(li));i.includes("fa")||i.push("fa");var o=[".".concat($a,":not([").concat(U,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(U,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=q(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=st.begin("onTree"),f=s.reduce(function(u,d){try{var m=Ja(d);m&&u.push(m)}catch(v){Ea||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise(function(u,d){Promise.all(f).then(function(m){Xa(m,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(m){l(),d(m)})})}function ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ja(e).then(function(a){a&&Xa([a],t)})}function ci(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:We(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:We(n||{})),e(r,c(c({},a),{},{mask:n}))}}var di=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?F:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,f=a.maskId,u=f===void 0?null:f,d=a.classes,m=d===void 0?[]:d,v=a.attributes,x=v===void 0?{}:v,h=a.styles,S=h===void 0?{}:h;if(t){var b=t.prefix,w=t.iconName,P=t.icon;return ye(c({type:"icon"},t),function(){return Y("beforeDOMElementCreation",{iconDefinition:t,params:a}),it({icons:{main:He(P),mask:l?He(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:w,transform:c(c({},F),n),symbol:o,maskId:u,extra:{attributes:x,styles:S,classes:m}})})}},mi={mixout:function(){return{icon:ci(di)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Lt,a.nodeCallback=ui,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?A:r,i=a.callback,o=i===void 0?function(){}:i;return Lt(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,f=r.maskId,u=r.extra;return new Promise(function(d,m){Promise.all([Ue(n,i),l.iconName?Ue(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=pe(v,2),h=x[0],S=x[1];d([a,it({icons:{main:h,mask:S},prefix:i,iconName:n,transform:o,symbol:s,maskId:f,extra:u,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,l=he(s);l.length>0&&(n.style=l);var f;return rt(o)&&(f=W("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:n}}}},vi={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return ye({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(T(i)).join(" ")},children:o}]})}}}},pi={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,f=l===void 0?{}:l;return ye({type:"counter",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:r}),Vo({content:a.toString(),extra:{attributes:s,styles:f,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(T(i))}})})}}}},hi={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?F:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,d=u===void 0?{}:u;return ye({type:"text",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:r}),Ct({content:a,transform:c(c({},F),i),extra:{attributes:f,styles:d,classes:["".concat(p.cssPrefix,"-layers-text")].concat(T(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,s=null;if(ra){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();o=f.width/l,s=f.height/l}return Promise.resolve([a,Ct({content:a.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Qa=new RegExp('"',"ug"),Dt=[1105920,1112319],Rt=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),an),ao),dn),Be=Object.keys(Rt).reduce(function(e,t){return e[t.toLowerCase()]=Rt[t],e},{}),gi=Object.keys(Be).reduce(function(e,t){var a=Be[t];return e[t]=a[900]||T(Object.entries(a))[0][1],e},{});function bi(e){var t=e.replace(Qa,"");return _a(T(t)[0]||"")}function yi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Qa,""),n=r.codePointAt(0),i=n>=Dt[0]&&n<=Dt[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function xi(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Be[a]||{})[n]||gi[a]}function zt(e,t){var a="".concat(ro).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=q(e.children),o=i.filter(function(G){return G.getAttribute(Me)===t})[0],s=R.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),f=l.match(lo),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),r();if(f&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=xi(l,u),x=bi(m),h=f[0].startsWith("FontAwesome"),S=yi(s),b=ot(v,x),w=b;if(h){var P=To(x);P.iconName&&P.prefix&&(b=P.iconName,v=P.prefix)}if(b&&!S&&(!o||o.getAttribute(et)!==v||o.getAttribute(tt)!==w)){e.setAttribute(a,w),o&&e.removeChild(o);var M=si(),I=M.extra;I.attributes[Me]=t,Ue(b,v).then(function(G){var ne=it(c(c({},M),{},{icons:{main:G,mask:Ga()},prefix:v,iconName:w,extra:I,watchable:!0})),L=A.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(L,e.firstChild):e.appendChild(L),L.outerHTML=ne.map(function(nr){return re(nr)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function Si(e){return Promise.all([zt(e,"::before"),zt(e,"::after")])}function wi(e){return e.parentNode!==document.head&&!~oo.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Me)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Ai=function(t){return!!t&&ka.some(function(a){return t.includes(a)})},Pi=function(t){if(!t)return[];for(var a=new Set,r=[t],n=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var v=s[o];r=r.flatMap(function(x){return x.split(v).map(function(h){return h.replace(/,\s*$/,"").trim()})})},o=0,s=n;o<s.length;o++)i();r=r.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(v){return v.trim()})});var l=le(r),f;try{for(l.s();!(f=l.n()).done;){var u=f.value;if(Ai(u)){var d=ka.reduce(function(m,v){return m.replace(v,"")},u);d!==""&&d!=="*"&&a.add(d)}}}catch(m){l.e(m)}finally{l.f()}return a};function Wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(_){var a;if(t)a=e;else if(p.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=le(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=le(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var f=l.value,u=Pi(f.selectorText),d=le(u),m;try{for(d.s();!(m=d.n()).done;){var v=m.value;r.add(v)}}catch(h){d.e(h)}finally{d.f()}}}catch(h){s.e(h)}finally{s.f()}}catch(h){p.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(h.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(h){n.e(h)}finally{n.f()}if(!r.size)return;var x=Array.from(r).join(", ");try{a=e.querySelectorAll(x)}catch{}}return new Promise(function(h,S){var b=q(a).filter(wi).map(Si),w=st.begin("searchPseudoElements");qa(),Promise.all(b).then(function(){w(),Ge(),h()}).catch(function(){w(),Ge(),S()})})}}var ki={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Wt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?A:r;p.searchPseudoElements&&Wt(n)}}},Ht=!1,Ei={mixout:function(){return{dom:{unwatch:function(){qa(),Ht=!0}}}},hooks:function(){return{bootstrap:function(){_t(ze("mutationObserverCallbacks",{}))},noAuto:function(){ri()},watch:function(a){var r=a.observeMutationsRoot;Ht?Ge():_t(ze("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ut=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},Oi={mixout:function(){return{parse:{transform:function(a){return Ut(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Ut(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),f="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),u="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(u)},m={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:m};return{tag:"g",attributes:c({},v.outer),children:[{tag:"g",attributes:c({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:c(c({},r.icon.attributes),v.path)}]}]}}}},Oe={x:0,y:0,width:"100%",height:"100%"};function Yt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ii(e){return e.tag==="g"?e.children:[e]}var $i={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?be(n.split(" ").map(function(o){return o.trim()})):Ga();return i.prefix||(i.prefix=z()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,f=i.width,u=i.icon,d=o.width,m=o.icon,v=xo({transform:l,containerWidth:d,iconWidth:f}),x={tag:"rect",attributes:c(c({},Oe),{},{fill:"white"})},h=u.children?{children:u.children.map(Yt)}:{},S={tag:"g",attributes:c({},v.inner),children:[Yt(c({tag:u.tag,attributes:c(c({},u.attributes),v.path)},h))]},b={tag:"g",attributes:c({},v.outer),children:[S]},w="mask-".concat(s||Pt()),P="clip-".concat(s||Pt()),M={tag:"mask",attributes:c(c({},Oe),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,b]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Ii(m)},M]};return r.push(I,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(w,")")},Oe)}),{children:r,attributes:n}}}},Ti={provides:function(t){var a=!1;R.matchMedia&&(a=R.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:c(c({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:c(c({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:c(c({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ci={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},Fi=[Ao,mi,vi,pi,hi,ki,Ei,Oi,$i,Ti,Ci];Ro(Fi,{mixoutsTo:O});O.noAuto;O.config;O.library;O.dom;var Ve=O.parse;O.findIconDefinition;O.toHtml;var Ni=O.icon;O.layer;O.text;O.counter;var Ie={exports:{}},$e,Gt;function ji(){if(Gt)return $e;Gt=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return $e=e,$e}var Te,Bt;function _i(){if(Bt)return Te;Bt=1;var e=ji();function t(){}function a(){}return a.resetWarningCache=t,Te=function(){function r(o,s,l,f,u,d){if(d!==e){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function n(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:n,element:r,elementType:r,instanceOf:n,node:r,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:t};return i.PropTypes=i,i},Te}var Vt;function Mi(){return Vt||(Vt=1,Ie.exports=_i()()),Ie.exports}var Li=Mi();const g=dr(Li);var Di={};function Ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function Ri(e){if(Array.isArray(e))return e}function zi(e){if(Array.isArray(e))return Ke(e)}function D(e,t,a){return(t=Ki(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Wi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hi(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,f=!1;try{if(i=(a=a.call(e)).next,t!==0)for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(u){f=!0,n=u}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(f)throw n}}return s}}function Ui(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Kt(Object(a),!0).forEach(function(r){D(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Kt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function Gi(e,t){if(e==null)return{};var a,r,n=Bi(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Bi(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function Xt(e,t){return Ri(e)||Hi(e,t)||Za(e,t)||Ui()}function Xe(e){return zi(e)||Wi(e)||Za(e)||Yi()}function Vi(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ki(e){var t=Vi(e,"string");return typeof t=="symbol"?t:t+""}function ve(e){"@babel/helpers - typeof";return ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ve(e)}function Za(e,t){if(e){if(typeof e=="string")return Ke(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ke(e,t):void 0}}var Xi="7.0.0-alpha1",qe;try{var qi=require("@fortawesome/fontawesome-svg-core/package.json");qe=qi.version}catch{qe=Di.FA_VERSION||"7.0.0-alpha8"}function Ji(e){var t=e.beat,a=e.fade,r=e.beatFade,n=e.bounce,i=e.shake,o=e.flash,s=e.spin,l=e.spinPulse,f=e.spinReverse,u=e.pulse,d=e.fixedWidth,m=e.inverse,v=e.border,x=e.listItem,h=e.flip,S=e.size,b=e.rotation,w=e.pull,P=e.swapOpacity,M=e.rotateBy,I=e.widthAuto,G=Qi(qe,Xi),ne=D(D(D(D(D(D({"fa-beat":t,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":n,"fa-shake":i,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":u,"fa-fw":d,"fa-inverse":m,"fa-border":v,"fa-li":x,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},"fa-".concat(S),typeof S<"u"&&S!==null),"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),"fa-pull-".concat(w),typeof w<"u"&&w!==null),"fa-swap-opacity",P),"fa-rotate-by",G&&M),"fa-width-auto",G&&I);return Object.keys(ne).map(function(L){return ne[L]?L:null}).filter(function(L){return L})}function Qi(e,t){for(var a=e.split("-"),r=Xt(a,2),n=r[0],i=r[1],o=t.split("-"),s=Xt(o,2),l=s[0],f=s[1],u=n.split("."),d=l.split("."),m=0;m<Math.max(u.length,d.length);m++){var v=u[m]||"0",x=d[m]||"0",h=parseInt(v,10),S=parseInt(x,10);if(h!==S)return h>S}for(var b=0;b<Math.max(u.length,d.length);b++){var w=u[b]||"0",P=d[b]||"0";if(w!==P&&w.length!==P.length)return w.length<P.length}return!(i&&!f)}function Zi(e){return e=e-0,e===e}function er(e){return Zi(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var es=["style"];function ts(e){return e.charAt(0).toUpperCase()+e.slice(1)}function as(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var r=a.indexOf(":"),n=er(a.slice(0,r)),i=a.slice(r+1).trim();return n.startsWith("webkit")?t[ts(n)]=i:t[n]=i,t},{})}function tr(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return tr(e,l)}),n=Object.keys(t.attributes||{}).reduce(function(l,f){var u=t.attributes[f];switch(f){case"class":l.attrs.className=u,delete t.attributes.class;break;case"style":l.attrs.style=as(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=u:l.attrs[er(f)]=u}return l},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=Gi(a,es);return n.attrs.style=C(C({},n.attrs.style),o),e.apply(void 0,[t.tag,C(C({},n.attrs),s)].concat(Xe(r)))}var ar=!1;try{ar=!0}catch{}function rs(){if(!ar&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qt(e){if(e&&ve(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ve.icon)return Ve.icon(e);if(e===null)return null;if(e&&ve(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ce(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?D({},e,t):{}}var Jt={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},rr=Je.forwardRef(function(e,t){var a=C(C({},Jt),e),r=a.icon,n=a.mask,i=a.symbol,o=a.className,s=a.title,l=a.titleId,f=a.maskId,u=qt(r),d=Ce("classes",[].concat(Xe(Ji(a)),Xe((o||"").split(" ")))),m=Ce("transform",typeof a.transform=="string"?Ve.transform(a.transform):a.transform),v=Ce("mask",qt(n)),x=Ni(u,C(C(C(C({},d),m),v),{},{symbol:i,title:s,titleId:l,maskId:f}));if(!x)return rs("Could not find icon",u),null;var h=x.abstract,S={ref:t};return Object.keys(a).forEach(function(b){Jt.hasOwnProperty(b)||(S[b]=a[b])}),ns(h[0],S)});rr.displayName="FontAwesomeIcon";rr.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),rotateBy:g.bool,shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool,widthAuto:g.bool};var ns=tr.bind(null,Je.createElement);/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var vs={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},ps={prefix:"fas",iconName:"laptop-code",icon:[640,512,[],"f5fc","M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 240-64 0 0-240-384 0 0 240-64 0 0-240zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},hs={prefix:"fas",iconName:"cubes",icon:[512,512,[],"f1b3","M284-1.3c-17.3-10-38.7-10-56 0L143.8 47.3c-17.3 10-28 28.5-28 48.5l0 101.9-88.3 51c-17.3 10-28 28.5-28 48.5l0 97.3c0 20 10.7 38.5 28 48.5l84.3 48.6c17.3 10 38.7 10 56 0l88.3-51 88.3 51c17.3 10 38.7 10 56 0L484.5 443c17.3-10 28-28.5 28-48.5l0-97.3c0-20-10.7-38.5-28-48.5l-88.3-51 0-101.9c0-20-10.7-38.5-28-48.5L284-1.3zM232 292.6l0 106.5-88.3 51c-1.2 .7-2.6 1.1-4 1.1l0-105.3 92.3-53.3zm231.4 .6c.7 1.2 1.1 2.6 1.1 4l0 97.3c0 2.9-1.5 5.5-4 6.9l-84.3 48.6c-1.2 .7-2.6 1.1-4 1.1l0-105.3 91.2-52.6zM348.3 95.8l0 101.9-92.3 53.3 0-106.5 91.2-52.6c.7 1.2 1.1 2.6 1.1 4z"]},gs={prefix:"fas",iconName:"comment-nodes",icon:[640,512,[],"e696","M480 208C503.7 208 525.6 215.3 543.7 227.9 536.9 100.9 425 0 288 0 146.6 0 32 107.5 32 240 32 294.3 51.2 344.3 83.6 384.5L34.8 476.8c-4.8 9-3.3 20 3.6 27.5s17.8 9.8 27.1 5.8l118.4-50.7c27.2 11.4 56.9 18.4 88.1 20.2 .1-18.9 4.9-38 15-55.5 17.1-29.7 45.8-48.5 77-54.2l9.2-16c-3.4-10.7-5.2-22-5.2-33.8 0-61.9 50.1-112 112-112zM328.6 448c-17.7 30.6-7.2 69.7 23.4 87.4s69.7 7.2 87.4-23.4c1.5-2.6 2.8-5.3 3.9-8l73.3 0c1.1 2.7 2.4 5.4 3.9 8 17.7 30.6 56.8 41.1 87.4 23.4s41.1-56.8 23.4-87.4c-13.4-23.2-39.1-34.8-64-31.4l-17.6-30.7c-11 11.7-25 20.6-40.6 25.6l16.5 28.9c-3.8 4.8-6.8 10-9 15.6l-73.4 0c-2.2-5.6-5.3-10.8-9-15.6l33-57.7c4.1 .8 8.4 1.3 12.8 1.3 35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64c0 13.4 4.1 25.8 11.2 36.1l-34.6 60.5c-25-3.4-50.6 8.3-64 31.4z"]};export{xr as $,rr as F,fs as a,cs as b,ls as c,us as d,ds as e,ss as f,Sr as g,hs as h,ps as i,gs as j,vs as k,ms as u};
