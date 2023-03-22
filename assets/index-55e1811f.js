(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function aa(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function ca(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=be(s)?F_(s):ca(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(be(t))return t;if(ge(t))return t}}const x_=/;(?![^(]*\))/g,M_=/:([^]+)/,L_=/\/\*.*?\*\//gs;function F_(t){const e={};return t.replace(L_,"").split(x_).forEach(n=>{if(n){const s=n.split(M_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ua(t){let e="";if(be(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=ua(t[n]);s&&(e+=s+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const U_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",B_=aa(U_);function af(t){return!!t||t===""}const zS=t=>be(t)?t:t==null?"":W(t)||ge(t)&&(t.toString===ff||!V(t.toString))?JSON.stringify(t,cf,2):String(t),cf=(t,e)=>e&&e.__v_isRef?cf(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:uf(e)?{[`Set(${e.size})`]:[...e.values()]}:ge(e)&&!W(e)&&!df(e)?String(e):e,fe={},ss=[],pt=()=>{},H_=()=>!1,$_=/^on[^a-z]/,Vr=t=>$_.test(t),ha=t=>t.startsWith("onUpdate:"),$e=Object.assign,fa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},j_=Object.prototype.hasOwnProperty,Q=(t,e)=>j_.call(t,e),W=Array.isArray,is=t=>Kr(t)==="[object Map]",uf=t=>Kr(t)==="[object Set]",V=t=>typeof t=="function",be=t=>typeof t=="string",da=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",hf=t=>ge(t)&&V(t.then)&&V(t.catch),ff=Object.prototype.toString,Kr=t=>ff.call(t),W_=t=>Kr(t).slice(8,-1),df=t=>Kr(t)==="[object Object]",pa=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,nr=aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},V_=/-(\w)/g,Ot=zr(t=>t.replace(V_,(e,n)=>n?n.toUpperCase():"")),K_=/\B([A-Z])/g,Is=zr(t=>t.replace(K_,"-$1").toLowerCase()),qr=zr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oo=zr(t=>t?`on${qr(t)}`:""),ti=(t,e)=>!Object.is(t,e),Po=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},hr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},z_=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hc;const q_=()=>Hc||(Hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let at;class pf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=at,!e&&at&&(this.index=(at.scopes||(at.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=at;try{return at=this,e()}finally{at=n}}}on(){at=this}off(){at=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function gf(t){return new pf(t)}function G_(t,e=at){e&&e.active&&e.effects.push(t)}function Y_(){return at}const ga=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_f=t=>(t.w&dn)>0,mf=t=>(t.n&dn)>0,X_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=dn},J_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];_f(i)&&!mf(i)?i.delete(t):e[n++]=i,i.w&=~dn,i.n&=~dn}e.length=n}},hl=new WeakMap;let js=0,dn=1;const fl=30;let ct;const On=Symbol(""),dl=Symbol("");class _a{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,G_(this,s)}run(){if(!this.active)return this.fn();let e=ct,n=an;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ct,ct=this,an=!0,dn=1<<++js,js<=fl?X_(this):$c(this),this.fn()}finally{js<=fl&&J_(this),dn=1<<--js,ct=this.parent,an=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ct===this?this.deferStop=!0:this.active&&($c(this),this.onStop&&this.onStop(),this.active=!1)}}function $c(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let an=!0;const yf=[];function ws(){yf.push(an),an=!1}function Ts(){const t=yf.pop();an=t===void 0?!0:t}function ze(t,e,n){if(an&&ct){let s=hl.get(t);s||hl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ga()),vf(i)}}function vf(t,e){let n=!1;js<=fl?mf(t)||(t.n|=dn,n=!_f(t)):n=!t.has(ct),n&&(t.add(ct),ct.deps.push(t))}function zt(t,e,n,s,i,r){const o=hl.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&W(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":W(t)?pa(n)&&l.push(o.get("length")):(l.push(o.get(On)),is(t)&&l.push(o.get(dl)));break;case"delete":W(t)||(l.push(o.get(On)),is(t)&&l.push(o.get(dl)));break;case"set":is(t)&&l.push(o.get(On));break}if(l.length===1)l[0]&&pl(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);pl(ga(a))}}function pl(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&jc(s);for(const s of n)s.computed||jc(s)}function jc(t,e){(t!==ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Q_=aa("__proto__,__v_isRef,__isVue"),Ef=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(da)),Z_=ma(),em=ma(!1,!0),tm=ma(!0),Wc=nm();function nm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let r=0,o=this.length;r<o;r++)ze(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ws();const s=Z(this)[e].apply(this,n);return Ts(),s}}),t}function sm(t){const e=Z(this);return ze(e,"has",t),e.hasOwnProperty(t)}function ma(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?vm:Cf:e?bf:Tf).get(s))return s;const o=W(s);if(!t){if(o&&Q(Wc,i))return Reflect.get(Wc,i,r);if(i==="hasOwnProperty")return sm}const l=Reflect.get(s,i,r);return(da(i)?Ef.has(i):Q_(i))||(t||ze(s,"get",i),e)?l:Pe(l)?o&&pa(i)?l:l.value:ge(l)?t?Rf(l):Ii(l):l}}const im=If(),rm=If(!0);function If(t=!1){return function(n,s,i,r){let o=n[s];if(fs(o)&&Pe(o)&&!Pe(i))return!1;if(!t&&(!fr(i)&&!fs(i)&&(o=Z(o),i=Z(i)),!W(n)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const l=W(n)&&pa(s)?Number(s)<n.length:Q(n,s),a=Reflect.set(n,s,i,r);return n===Z(r)&&(l?ti(i,o)&&zt(n,"set",s,i):zt(n,"add",s,i)),a}}function om(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&zt(t,"delete",e,void 0),s}function lm(t,e){const n=Reflect.has(t,e);return(!da(e)||!Ef.has(e))&&ze(t,"has",e),n}function am(t){return ze(t,"iterate",W(t)?"length":On),Reflect.ownKeys(t)}const wf={get:Z_,set:im,deleteProperty:om,has:lm,ownKeys:am},cm={get:tm,set(t,e){return!0},deleteProperty(t,e){return!0}},um=$e({},wf,{get:em,set:rm}),ya=t=>t,Gr=t=>Reflect.getPrototypeOf(t);function Hi(t,e,n=!1,s=!1){t=t.__v_raw;const i=Z(t),r=Z(e);n||(e!==r&&ze(i,"get",e),ze(i,"get",r));const{has:o}=Gr(i),l=s?ya:n?wa:ni;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function $i(t,e=!1){const n=this.__v_raw,s=Z(n),i=Z(t);return e||(t!==i&&ze(s,"has",t),ze(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ji(t,e=!1){return t=t.__v_raw,!e&&ze(Z(t),"iterate",On),Reflect.get(t,"size",t)}function Vc(t){t=Z(t);const e=Z(this);return Gr(e).has.call(e,t)||(e.add(t),zt(e,"add",t,t)),this}function Kc(t,e){e=Z(e);const n=Z(this),{has:s,get:i}=Gr(n);let r=s.call(n,t);r||(t=Z(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ti(e,o)&&zt(n,"set",t,e):zt(n,"add",t,e),this}function zc(t){const e=Z(this),{has:n,get:s}=Gr(e);let i=n.call(e,t);i||(t=Z(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&zt(e,"delete",t,void 0),r}function qc(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&zt(t,"clear",void 0,void 0),n}function Wi(t,e){return function(s,i){const r=this,o=r.__v_raw,l=Z(o),a=e?ya:t?wa:ni;return!t&&ze(l,"iterate",On),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Vi(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=is(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?ya:e?wa:ni;return!e&&ze(r,"iterate",a?dl:On),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Qt(t){return function(...e){return t==="delete"?!1:this}}function hm(){const t={get(r){return Hi(this,r)},get size(){return ji(this)},has:$i,add:Vc,set:Kc,delete:zc,clear:qc,forEach:Wi(!1,!1)},e={get(r){return Hi(this,r,!1,!0)},get size(){return ji(this)},has:$i,add:Vc,set:Kc,delete:zc,clear:qc,forEach:Wi(!1,!0)},n={get(r){return Hi(this,r,!0)},get size(){return ji(this,!0)},has(r){return $i.call(this,r,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:Wi(!0,!1)},s={get(r){return Hi(this,r,!0,!0)},get size(){return ji(this,!0)},has(r){return $i.call(this,r,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:Wi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Vi(r,!1,!1),n[r]=Vi(r,!0,!1),e[r]=Vi(r,!1,!0),s[r]=Vi(r,!0,!0)}),[t,n,e,s]}const[fm,dm,pm,gm]=hm();function va(t,e){const n=e?t?gm:pm:t?dm:fm;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const _m={get:va(!1,!1)},mm={get:va(!1,!0)},ym={get:va(!0,!1)},Tf=new WeakMap,bf=new WeakMap,Cf=new WeakMap,vm=new WeakMap;function Em(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Im(t){return t.__v_skip||!Object.isExtensible(t)?0:Em(W_(t))}function Ii(t){return fs(t)?t:Ea(t,!1,wf,_m,Tf)}function wm(t){return Ea(t,!1,um,mm,bf)}function Rf(t){return Ea(t,!0,cm,ym,Cf)}function Ea(t,e,n,s,i){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Im(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function rs(t){return fs(t)?rs(t.__v_raw):!!(t&&t.__v_isReactive)}function fs(t){return!!(t&&t.__v_isReadonly)}function fr(t){return!!(t&&t.__v_isShallow)}function Sf(t){return rs(t)||fs(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Ia(t){return hr(t,"__v_skip",!0),t}const ni=t=>ge(t)?Ii(t):t,wa=t=>ge(t)?Rf(t):t;function Af(t){an&&ct&&(t=Z(t),vf(t.dep||(t.dep=ga())))}function kf(t,e){t=Z(t);const n=t.dep;n&&pl(n)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function Ta(t){return Nf(t,!1)}function Tm(t){return Nf(t,!0)}function Nf(t,e){return Pe(t)?t:new bm(t,e)}class bm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:ni(e)}get value(){return Af(this),this._value}set value(e){const n=this.__v_isShallow||fr(e)||fs(e);e=n?e:Z(e),ti(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ni(e),kf(this))}}function Pn(t){return Pe(t)?t.value:t}const Cm={get:(t,e,n)=>Pn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Of(t){return rs(t)?t:new Proxy(t,Cm)}var Pf;class Rm{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Pf]=!1,this._dirty=!0,this.effect=new _a(e,()=>{this._dirty||(this._dirty=!0,kf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Z(this);return Af(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Pf="__v_isReadonly";function Sm(t,e,n=!1){let s,i;const r=V(t);return r?(s=t,i=pt):(s=t.get,i=t.set),new Rm(s,i,r||!i,n)}function cn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Yr(r,e,n)}return i}function gt(t,e,n,s){if(V(t)){const r=cn(t,e,n,s);return r&&hf(r)&&r.catch(o=>{Yr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(gt(t[r],e,n,s));return i}function Yr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){cn(a,null,10,[t,o,l]);return}}Am(t,n,i,s)}function Am(t,e,n,s=!0){console.error(t)}let si=!1,gl=!1;const Oe=[];let bt=0;const os=[];let Bt=null,Cn=0;const Df=Promise.resolve();let ba=null;function xf(t){const e=ba||Df;return t?e.then(this?t.bind(this):t):e}function km(t){let e=bt+1,n=Oe.length;for(;e<n;){const s=e+n>>>1;ii(Oe[s])<t?e=s+1:n=s}return e}function Ca(t){(!Oe.length||!Oe.includes(t,si&&t.allowRecurse?bt+1:bt))&&(t.id==null?Oe.push(t):Oe.splice(km(t.id),0,t),Mf())}function Mf(){!si&&!gl&&(gl=!0,ba=Df.then(Ff))}function Nm(t){const e=Oe.indexOf(t);e>bt&&Oe.splice(e,1)}function Om(t){W(t)?os.push(...t):(!Bt||!Bt.includes(t,t.allowRecurse?Cn+1:Cn))&&os.push(t),Mf()}function Gc(t,e=si?bt+1:0){for(;e<Oe.length;e++){const n=Oe[e];n&&n.pre&&(Oe.splice(e,1),e--,n())}}function Lf(t){if(os.length){const e=[...new Set(os)];if(os.length=0,Bt){Bt.push(...e);return}for(Bt=e,Bt.sort((n,s)=>ii(n)-ii(s)),Cn=0;Cn<Bt.length;Cn++)Bt[Cn]();Bt=null,Cn=0}}const ii=t=>t.id==null?1/0:t.id,Pm=(t,e)=>{const n=ii(t)-ii(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ff(t){gl=!1,si=!0,Oe.sort(Pm);const e=pt;try{for(bt=0;bt<Oe.length;bt++){const n=Oe[bt];n&&n.active!==!1&&cn(n,null,14)}}finally{bt=0,Oe.length=0,Lf(),si=!1,ba=null,(Oe.length||os.length)&&Ff()}}function Dm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||fe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||fe;d&&(i=n.map(g=>be(g)?g.trim():g)),h&&(i=n.map(z_))}let l,a=s[l=Oo(e)]||s[l=Oo(Ot(e))];!a&&r&&(a=s[l=Oo(Is(e))]),a&&gt(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,gt(c,t,6,i)}}function Uf(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!V(t)){const a=c=>{const u=Uf(c,e,!0);u&&(l=!0,$e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ge(t)&&s.set(t,null),null):(W(r)?r.forEach(a=>o[a]=null):$e(o,r),ge(t)&&s.set(t,o),o)}function Xr(t,e){return!t||!Vr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Is(e))||Q(t,e))}let et=null,Bf=null;function dr(t){const e=et;return et=t,Bf=t&&t.type.__scopeId||null,e}function xm(t,e=et,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&su(-1);const r=dr(e);let o;try{o=t(...i)}finally{dr(r),s._d&&su(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Do(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:m,inheritAttrs:T}=t;let k,N;const U=dr(t);try{if(n.shapeFlag&4){const B=i||s;k=Tt(u.call(B,B,h,r,g,d,m)),N=a}else{const B=e;k=Tt(B.length>1?B(r,{attrs:a,slots:l,emit:c}):B(r,null)),N=e.props?a:Mm(a)}}catch(B){qs.length=0,Yr(B,t,1),k=Ge(Fn)}let P=k;if(N&&T!==!1){const B=Object.keys(N),{shapeFlag:he}=P;B.length&&he&7&&(o&&B.some(ha)&&(N=Lm(N,o)),P=ds(P,N))}return n.dirs&&(P=ds(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),k=P,dr(U),k}const Mm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vr(n))&&((e||(e={}))[n]=t[n]);return e},Lm=(t,e)=>{const n={};for(const s in t)(!ha(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Fm(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Yc(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Xr(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Yc(s,o,c):!0:!!o;return!1}function Yc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Xr(n,r))return!0}return!1}function Um({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Bm=t=>t.__isSuspense;function Hm(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Om(t)}function sr(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function nt(t,e,n=!1){const s=me||et;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&V(e)?e.call(s.proxy):e}}const Ki={};function ir(t,e,n){return Hf(t,e,n)}function Hf(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=fe){const l=Y_()===(me==null?void 0:me.scope)?me:null;let a,c=!1,u=!1;if(Pe(t)?(a=()=>t.value,c=fr(t)):rs(t)?(a=()=>t,s=!0):W(t)?(u=!0,c=t.some(P=>rs(P)||fr(P)),a=()=>t.map(P=>{if(Pe(P))return P.value;if(rs(P))return Zn(P);if(V(P))return cn(P,l,2)})):V(t)?e?a=()=>cn(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),gt(t,l,3,[d])}:a=pt,e&&s){const P=a;a=()=>Zn(P())}let h,d=P=>{h=N.onStop=()=>{cn(P,l,4)}},g;if(oi)if(d=pt,e?n&&gt(e,l,3,[a(),u?[]:void 0,d]):a(),i==="sync"){const P=Ly();g=P.__watcherHandles||(P.__watcherHandles=[])}else return pt;let m=u?new Array(t.length).fill(Ki):Ki;const T=()=>{if(N.active)if(e){const P=N.run();(s||c||(u?P.some((B,he)=>ti(B,m[he])):ti(P,m)))&&(h&&h(),gt(e,l,3,[P,m===Ki?void 0:u&&m[0]===Ki?[]:m,d]),m=P)}else N.run()};T.allowRecurse=!!e;let k;i==="sync"?k=T:i==="post"?k=()=>We(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),k=()=>Ca(T));const N=new _a(a,k);e?n?T():m=N.run():i==="post"?We(N.run.bind(N),l&&l.suspense):N.run();const U=()=>{N.stop(),l&&l.scope&&fa(l.scope.effects,N)};return g&&g.push(U),U}function $m(t,e,n){const s=this.proxy,i=be(t)?t.includes(".")?$f(s,t):()=>s[t]:t.bind(s,s);let r;V(e)?r=e:(r=e.handler,n=e);const o=me;ps(this);const l=Hf(i,r.bind(s),n);return o?ps(o):Dn(),l}function $f(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Zn(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))Zn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)Zn(t[n],e);else if(uf(t)||is(t))t.forEach(n=>{Zn(n,e)});else if(df(t))for(const n in t)Zn(t[n],e);return t}function Ra(t){return V(t)?{setup:t,name:t.name}:t}const rr=t=>!!t.type.__asyncLoader,jf=t=>t.type.__isKeepAlive;function jm(t,e){Wf(t,"a",e)}function Wm(t,e){Wf(t,"da",e)}function Wf(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Jr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)jf(i.parent.vnode)&&Vm(s,e,n,i),i=i.parent}}function Vm(t,e,n,s){const i=Jr(e,t,s,!0);Vf(()=>{fa(s[e],i)},n)}function Jr(t,e,n=me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ws(),ps(n);const l=gt(e,n,t,o);return Dn(),Ts(),l});return s?i.unshift(r):i.push(r),r}}const Yt=t=>(e,n=me)=>(!oi||t==="sp")&&Jr(t,(...s)=>e(...s),n),Km=Yt("bm"),zm=Yt("m"),qm=Yt("bu"),Gm=Yt("u"),Ym=Yt("bum"),Vf=Yt("um"),Xm=Yt("sp"),Jm=Yt("rtg"),Qm=Yt("rtc");function Zm(t,e=me){Jr("ec",t,e)}function En(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(ws(),gt(a,n,8,[t.el,l,t,e]),Ts())}}const Kf="components";function qS(t,e){return ty(Kf,t,!0,e)||t}const ey=Symbol();function ty(t,e,n=!0,s=!1){const i=et||me;if(i){const r=i.type;if(t===Kf){const l=Dy(r,!1);if(l&&(l===e||l===Ot(e)||l===qr(Ot(e))))return r}const o=Xc(i[t]||r[t],e)||Xc(i.appContext[t],e);return!o&&s?r:o}}function Xc(t,e){return t&&(t[e]||t[Ot(e)]||t[qr(Ot(e))])}const _l=t=>t?id(t)?Oa(t)||t.proxy:_l(t.parent):null,zs=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_l(t.parent),$root:t=>_l(t.root),$emit:t=>t.emit,$options:t=>Sa(t),$forceUpdate:t=>t.f||(t.f=()=>Ca(t.update)),$nextTick:t=>t.n||(t.n=xf.bind(t.proxy)),$watch:t=>$m.bind(t)}),xo=(t,e)=>t!==fe&&!t.__isScriptSetup&&Q(t,e),ny={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(xo(s,e))return o[e]=1,s[e];if(i!==fe&&Q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,r[e];if(n!==fe&&Q(n,e))return o[e]=4,n[e];ml&&(o[e]=0)}}const u=zs[e];let h,d;if(u)return e==="$attrs"&&ze(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==fe&&Q(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,Q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return xo(i,e)?(i[e]=n,!0):s!==fe&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==fe&&Q(t,o)||xo(e,o)||(l=r[0])&&Q(l,o)||Q(s,o)||Q(zs,o)||Q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ml=!0;function sy(t){const e=Sa(t),n=t.proxy,s=t.ctx;ml=!1,e.beforeCreate&&Jc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:m,activated:T,deactivated:k,beforeDestroy:N,beforeUnmount:U,destroyed:P,unmounted:B,render:he,renderTracked:_e,renderTriggered:Fe,errorCaptured:Ue,serverPrefetch:vt,expose:Qe,inheritAttrs:Jt,components:Et,directives:qn,filters:yn}=e;if(c&&iy(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const oe in o){const se=o[oe];V(se)&&(s[oe]=se.bind(n))}if(i){const oe=i.call(n,n);ge(oe)&&(t.data=Ii(oe))}if(ml=!0,r)for(const oe in r){const se=r[oe],rt=V(se)?se.bind(n,n):V(se.get)?se.get.bind(n,n):pt,vn=!V(se)&&V(se.set)?se.set.bind(n):pt,ot=Ze({get:rt,set:vn});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>ot.value,set:je=>ot.value=je})}if(l)for(const oe in l)zf(l[oe],s,n,oe);if(a){const oe=V(a)?a.call(n):a;Reflect.ownKeys(oe).forEach(se=>{sr(se,oe[se])})}u&&Jc(u,t,"c");function ve(oe,se){W(se)?se.forEach(rt=>oe(rt.bind(n))):se&&oe(se.bind(n))}if(ve(Km,h),ve(zm,d),ve(qm,g),ve(Gm,m),ve(jm,T),ve(Wm,k),ve(Zm,Ue),ve(Qm,_e),ve(Jm,Fe),ve(Ym,U),ve(Vf,B),ve(Xm,vt),W(Qe))if(Qe.length){const oe=t.exposed||(t.exposed={});Qe.forEach(se=>{Object.defineProperty(oe,se,{get:()=>n[se],set:rt=>n[se]=rt})})}else t.exposed||(t.exposed={});he&&t.render===pt&&(t.render=he),Jt!=null&&(t.inheritAttrs=Jt),Et&&(t.components=Et),qn&&(t.directives=qn)}function iy(t,e,n=pt,s=!1){W(t)&&(t=yl(t));for(const i in t){const r=t[i];let o;ge(r)?"default"in r?o=nt(r.from||i,r.default,!0):o=nt(r.from||i):o=nt(r),Pe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Jc(t,e,n){gt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function zf(t,e,n,s){const i=s.includes(".")?$f(n,s):()=>n[s];if(be(t)){const r=e[t];V(r)&&ir(i,r)}else if(V(t))ir(i,t.bind(n));else if(ge(t))if(W(t))t.forEach(r=>zf(r,e,n,s));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&ir(i,r,t)}}function Sa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>pr(a,c,o,!0)),pr(a,e,o)),ge(e)&&r.set(e,a),a}function pr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&pr(t,r,n,!0),i&&i.forEach(o=>pr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=ry[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const ry={data:Qc,props:wn,emits:wn,methods:wn,computed:wn,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:wn,directives:wn,watch:ly,provide:Qc,inject:oy};function Qc(t,e){return e?t?function(){return $e(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function oy(t,e){return wn(yl(t),yl(e))}function yl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Be(t,e){return t?[...new Set([].concat(t,e))]:e}function wn(t,e){return t?$e($e(Object.create(null),t),e):e}function ly(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const s in e)n[s]=Be(t[s],e[s]);return n}function ay(t,e,n,s=!1){const i={},r={};hr(r,Zr,1),t.propsDefaults=Object.create(null),qf(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:wm(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function cy(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Z(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Xr(t.emitsOptions,d))continue;const g=e[d];if(a)if(Q(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const m=Ot(d);i[m]=vl(a,l,m,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{qf(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!Q(e,h)&&((u=Is(h))===h||!Q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=vl(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!Q(e,h))&&(delete r[h],c=!0)}c&&zt(t,"set","$attrs")}function qf(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(nr(a))continue;const c=e[a];let u;i&&Q(i,u=Ot(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Xr(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=Z(n),c=l||fe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=vl(i,a,h,c[h],t,!Q(c,h))}}return o}function vl(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Q(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&V(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(ps(i),s=c[n]=a.call(null,e),Dn())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Is(n))&&(s=!0))}return s}function Gf(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!V(t)){const u=h=>{a=!0;const[d,g]=Gf(h,e,!0);$e(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ge(t)&&s.set(t,ss),ss;if(W(r))for(let u=0;u<r.length;u++){const h=Ot(r[u]);Zc(h)&&(o[h]=fe)}else if(r)for(const u in r){const h=Ot(u);if(Zc(h)){const d=r[u],g=o[h]=W(d)||V(d)?{type:d}:Object.assign({},d);if(g){const m=nu(Boolean,g.type),T=nu(String,g.type);g[0]=m>-1,g[1]=T<0||m<T,(m>-1||Q(g,"default"))&&l.push(h)}}}const c=[o,l];return ge(t)&&s.set(t,c),c}function Zc(t){return t[0]!=="$"}function eu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function tu(t,e){return eu(t)===eu(e)}function nu(t,e){return W(e)?e.findIndex(n=>tu(n,t)):V(e)&&tu(e,t)?0:-1}const Yf=t=>t[0]==="_"||t==="$stable",Aa=t=>W(t)?t.map(Tt):[Tt(t)],uy=(t,e,n)=>{if(e._n)return e;const s=xm((...i)=>Aa(e(...i)),n);return s._c=!1,s},Xf=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Yf(i))continue;const r=t[i];if(V(r))e[i]=uy(i,r,s);else if(r!=null){const o=Aa(r);e[i]=()=>o}}},Jf=(t,e)=>{const n=Aa(e);t.slots.default=()=>n},hy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),hr(e,"_",n)):Xf(e,t.slots={})}else t.slots={},e&&Jf(t,e);hr(t.slots,Zr,1)},fy=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=fe;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:($e(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Xf(e,i)),o=e}else e&&(Jf(t,e),o={default:1});if(r)for(const l in i)!Yf(l)&&!(l in o)&&delete i[l]};function Qf(){return{app:null,config:{isNativeTag:H_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dy=0;function py(t,e){return function(s,i=null){V(s)||(s=Object.assign({},s)),i!=null&&!ge(i)&&(i=null);const r=Qf(),o=new Set;let l=!1;const a=r.app={_uid:dy++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Fy,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(a,...u)):V(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=Ge(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Oa(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function El(t,e,n,s,i=!1){if(W(t)){t.forEach((d,g)=>El(d,e&&(W(e)?e[g]:e),n,s,i));return}if(rr(s)&&!i)return;const r=s.shapeFlag&4?Oa(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===fe?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(be(c)?(u[c]=null,Q(h,c)&&(h[c]=null)):Pe(c)&&(c.value=null)),V(a))cn(a,l,12,[o,u]);else{const d=be(a),g=Pe(a);if(d||g){const m=()=>{if(t.f){const T=d?Q(h,a)?h[a]:u[a]:a.value;i?W(T)&&fa(T,r):W(T)?T.includes(r)||T.push(r):d?(u[a]=[r],Q(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,Q(h,a)&&(h[a]=o)):g&&(a.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,We(m,n)):m()}}}const We=Hm;function gy(t){return _y(t)}function _y(t,e){const n=q_();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=pt,insertStaticContent:m}=t,T=(f,p,_,y=null,E=null,b=null,A=!1,w=null,C=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ms(f,p)&&(y=S(f),je(f,E,b,!0),f=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:I,ref:L,shapeFlag:D}=p;switch(I){case Qr:k(f,p,_,y);break;case Fn:N(f,p,_,y);break;case Mo:f==null&&U(p,_,y,A);break;case Ht:Et(f,p,_,y,E,b,A,w,C);break;default:D&1?he(f,p,_,y,E,b,A,w,C):D&6?qn(f,p,_,y,E,b,A,w,C):(D&64||D&128)&&I.process(f,p,_,y,E,b,A,w,C,J)}L!=null&&E&&El(L,f&&f.ref,b,p||f,!p)},k=(f,p,_,y)=>{if(f==null)s(p.el=l(p.children),_,y);else{const E=p.el=f.el;p.children!==f.children&&c(E,p.children)}},N=(f,p,_,y)=>{f==null?s(p.el=a(p.children||""),_,y):p.el=f.el},U=(f,p,_,y)=>{[f.el,f.anchor]=m(f.children,p,_,y,f.el,f.anchor)},P=({el:f,anchor:p},_,y)=>{let E;for(;f&&f!==p;)E=d(f),s(f,_,y),f=E;s(p,_,y)},B=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},he=(f,p,_,y,E,b,A,w,C)=>{A=A||p.type==="svg",f==null?_e(p,_,y,E,b,A,w,C):vt(f,p,E,b,A,w,C)},_e=(f,p,_,y,E,b,A,w)=>{let C,I;const{type:L,props:D,shapeFlag:F,transition:j,dirs:z}=f;if(C=f.el=o(f.type,b,D&&D.is,D),F&8?u(C,f.children):F&16&&Ue(f.children,C,null,y,E,b&&L!=="foreignObject",A,w),z&&En(f,null,y,"created"),Fe(C,f,f.scopeId,A,y),D){for(const ie in D)ie!=="value"&&!nr(ie)&&r(C,ie,null,D[ie],b,f.children,y,E,O);"value"in D&&r(C,"value",null,D.value),(I=D.onVnodeBeforeMount)&&wt(I,y,f)}z&&En(f,null,y,"beforeMount");const le=(!E||E&&!E.pendingBranch)&&j&&!j.persisted;le&&j.beforeEnter(C),s(C,p,_),((I=D&&D.onVnodeMounted)||le||z)&&We(()=>{I&&wt(I,y,f),le&&j.enter(C),z&&En(f,null,y,"mounted")},E)},Fe=(f,p,_,y,E)=>{if(_&&g(f,_),y)for(let b=0;b<y.length;b++)g(f,y[b]);if(E){let b=E.subTree;if(p===b){const A=E.vnode;Fe(f,A,A.scopeId,A.slotScopeIds,E.parent)}}},Ue=(f,p,_,y,E,b,A,w,C=0)=>{for(let I=C;I<f.length;I++){const L=f[I]=w?tn(f[I]):Tt(f[I]);T(null,L,p,_,y,E,b,A,w)}},vt=(f,p,_,y,E,b,A)=>{const w=p.el=f.el;let{patchFlag:C,dynamicChildren:I,dirs:L}=p;C|=f.patchFlag&16;const D=f.props||fe,F=p.props||fe;let j;_&&In(_,!1),(j=F.onVnodeBeforeUpdate)&&wt(j,_,p,f),L&&En(p,f,_,"beforeUpdate"),_&&In(_,!0);const z=E&&p.type!=="foreignObject";if(I?Qe(f.dynamicChildren,I,w,_,y,z,b):A||se(f,p,w,null,_,y,z,b,!1),C>0){if(C&16)Jt(w,p,D,F,_,y,E);else if(C&2&&D.class!==F.class&&r(w,"class",null,F.class,E),C&4&&r(w,"style",D.style,F.style,E),C&8){const le=p.dynamicProps;for(let ie=0;ie<le.length;ie++){const Ee=le[ie],lt=D[Ee],Yn=F[Ee];(Yn!==lt||Ee==="value")&&r(w,Ee,lt,Yn,E,f.children,_,y,O)}}C&1&&f.children!==p.children&&u(w,p.children)}else!A&&I==null&&Jt(w,p,D,F,_,y,E);((j=F.onVnodeUpdated)||L)&&We(()=>{j&&wt(j,_,p,f),L&&En(p,f,_,"updated")},y)},Qe=(f,p,_,y,E,b,A)=>{for(let w=0;w<p.length;w++){const C=f[w],I=p[w],L=C.el&&(C.type===Ht||!Ms(C,I)||C.shapeFlag&70)?h(C.el):_;T(C,I,L,null,y,E,b,A,!0)}},Jt=(f,p,_,y,E,b,A)=>{if(_!==y){if(_!==fe)for(const w in _)!nr(w)&&!(w in y)&&r(f,w,_[w],null,A,p.children,E,b,O);for(const w in y){if(nr(w))continue;const C=y[w],I=_[w];C!==I&&w!=="value"&&r(f,w,I,C,A,p.children,E,b,O)}"value"in y&&r(f,"value",_.value,y.value)}},Et=(f,p,_,y,E,b,A,w,C)=>{const I=p.el=f?f.el:l(""),L=p.anchor=f?f.anchor:l("");let{patchFlag:D,dynamicChildren:F,slotScopeIds:j}=p;j&&(w=w?w.concat(j):j),f==null?(s(I,_,y),s(L,_,y),Ue(p.children,_,L,E,b,A,w,C)):D>0&&D&64&&F&&f.dynamicChildren?(Qe(f.dynamicChildren,F,_,E,b,A,w),(p.key!=null||E&&p===E.subTree)&&Zf(f,p,!0)):se(f,p,_,L,E,b,A,w,C)},qn=(f,p,_,y,E,b,A,w,C)=>{p.slotScopeIds=w,f==null?p.shapeFlag&512?E.ctx.activate(p,_,y,A,C):yn(p,_,y,E,b,A,C):Ds(f,p,C)},yn=(f,p,_,y,E,b,A)=>{const w=f.component=Sy(f,y,E);if(jf(f)&&(w.ctx.renderer=J),ky(w),w.asyncDep){if(E&&E.registerDep(w,ve),!f.el){const C=w.subTree=Ge(Fn);N(null,C,p,_)}return}ve(w,f,p,_,E,b,A)},Ds=(f,p,_)=>{const y=p.component=f.component;if(Fm(f,p,_))if(y.asyncDep&&!y.asyncResolved){oe(y,p,_);return}else y.next=p,Nm(y.update),y.update();else p.el=f.el,y.vnode=p},ve=(f,p,_,y,E,b,A)=>{const w=()=>{if(f.isMounted){let{next:L,bu:D,u:F,parent:j,vnode:z}=f,le=L,ie;In(f,!1),L?(L.el=z.el,oe(f,L,A)):L=z,D&&Po(D),(ie=L.props&&L.props.onVnodeBeforeUpdate)&&wt(ie,j,L,z),In(f,!0);const Ee=Do(f),lt=f.subTree;f.subTree=Ee,T(lt,Ee,h(lt.el),S(lt),f,E,b),L.el=Ee.el,le===null&&Um(f,Ee.el),F&&We(F,E),(ie=L.props&&L.props.onVnodeUpdated)&&We(()=>wt(ie,j,L,z),E)}else{let L;const{el:D,props:F}=p,{bm:j,m:z,parent:le}=f,ie=rr(p);if(In(f,!1),j&&Po(j),!ie&&(L=F&&F.onVnodeBeforeMount)&&wt(L,le,p),In(f,!0),D&&K){const Ee=()=>{f.subTree=Do(f),K(D,f.subTree,f,E,null)};ie?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ee()):Ee()}else{const Ee=f.subTree=Do(f);T(null,Ee,_,y,f,E,b),p.el=Ee.el}if(z&&We(z,E),!ie&&(L=F&&F.onVnodeMounted)){const Ee=p;We(()=>wt(L,le,Ee),E)}(p.shapeFlag&256||le&&rr(le.vnode)&&le.vnode.shapeFlag&256)&&f.a&&We(f.a,E),f.isMounted=!0,p=_=y=null}},C=f.effect=new _a(w,()=>Ca(I),f.scope),I=f.update=()=>C.run();I.id=f.uid,In(f,!0),I()},oe=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,cy(f,p.props,y,_),fy(f,p.children,_),ws(),Gc(),Ts()},se=(f,p,_,y,E,b,A,w,C=!1)=>{const I=f&&f.children,L=f?f.shapeFlag:0,D=p.children,{patchFlag:F,shapeFlag:j}=p;if(F>0){if(F&128){vn(I,D,_,y,E,b,A,w,C);return}else if(F&256){rt(I,D,_,y,E,b,A,w,C);return}}j&8?(L&16&&O(I,E,b),D!==I&&u(_,D)):L&16?j&16?vn(I,D,_,y,E,b,A,w,C):O(I,E,b,!0):(L&8&&u(_,""),j&16&&Ue(D,_,y,E,b,A,w,C))},rt=(f,p,_,y,E,b,A,w,C)=>{f=f||ss,p=p||ss;const I=f.length,L=p.length,D=Math.min(I,L);let F;for(F=0;F<D;F++){const j=p[F]=C?tn(p[F]):Tt(p[F]);T(f[F],j,_,null,E,b,A,w,C)}I>L?O(f,E,b,!0,!1,D):Ue(p,_,y,E,b,A,w,C,D)},vn=(f,p,_,y,E,b,A,w,C)=>{let I=0;const L=p.length;let D=f.length-1,F=L-1;for(;I<=D&&I<=F;){const j=f[I],z=p[I]=C?tn(p[I]):Tt(p[I]);if(Ms(j,z))T(j,z,_,null,E,b,A,w,C);else break;I++}for(;I<=D&&I<=F;){const j=f[D],z=p[F]=C?tn(p[F]):Tt(p[F]);if(Ms(j,z))T(j,z,_,null,E,b,A,w,C);else break;D--,F--}if(I>D){if(I<=F){const j=F+1,z=j<L?p[j].el:y;for(;I<=F;)T(null,p[I]=C?tn(p[I]):Tt(p[I]),_,z,E,b,A,w,C),I++}}else if(I>F)for(;I<=D;)je(f[I],E,b,!0),I++;else{const j=I,z=I,le=new Map;for(I=z;I<=F;I++){const qe=p[I]=C?tn(p[I]):Tt(p[I]);qe.key!=null&&le.set(qe.key,I)}let ie,Ee=0;const lt=F-z+1;let Yn=!1,Fc=0;const xs=new Array(lt);for(I=0;I<lt;I++)xs[I]=0;for(I=j;I<=D;I++){const qe=f[I];if(Ee>=lt){je(qe,E,b,!0);continue}let It;if(qe.key!=null)It=le.get(qe.key);else for(ie=z;ie<=F;ie++)if(xs[ie-z]===0&&Ms(qe,p[ie])){It=ie;break}It===void 0?je(qe,E,b,!0):(xs[It-z]=I+1,It>=Fc?Fc=It:Yn=!0,T(qe,p[It],_,null,E,b,A,w,C),Ee++)}const Uc=Yn?my(xs):ss;for(ie=Uc.length-1,I=lt-1;I>=0;I--){const qe=z+I,It=p[qe],Bc=qe+1<L?p[qe+1].el:y;xs[I]===0?T(null,It,_,Bc,E,b,A,w,C):Yn&&(ie<0||I!==Uc[ie]?ot(It,_,Bc,2):ie--)}}},ot=(f,p,_,y,E=null)=>{const{el:b,type:A,transition:w,children:C,shapeFlag:I}=f;if(I&6){ot(f.component.subTree,p,_,y);return}if(I&128){f.suspense.move(p,_,y);return}if(I&64){A.move(f,p,_,J);return}if(A===Ht){s(b,p,_);for(let D=0;D<C.length;D++)ot(C[D],p,_,y);s(f.anchor,p,_);return}if(A===Mo){P(f,p,_);return}if(y!==2&&I&1&&w)if(y===0)w.beforeEnter(b),s(b,p,_),We(()=>w.enter(b),E);else{const{leave:D,delayLeave:F,afterLeave:j}=w,z=()=>s(b,p,_),le=()=>{D(b,()=>{z(),j&&j()})};F?F(b,z,le):le()}else s(b,p,_)},je=(f,p,_,y=!1,E=!1)=>{const{type:b,props:A,ref:w,children:C,dynamicChildren:I,shapeFlag:L,patchFlag:D,dirs:F}=f;if(w!=null&&El(w,null,_,f,!0),L&256){p.ctx.deactivate(f);return}const j=L&1&&F,z=!rr(f);let le;if(z&&(le=A&&A.onVnodeBeforeUnmount)&&wt(le,p,f),L&6)v(f.component,_,y);else{if(L&128){f.suspense.unmount(_,y);return}j&&En(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,_,E,J,y):I&&(b!==Ht||D>0&&D&64)?O(I,p,_,!1,!0):(b===Ht&&D&384||!E&&L&16)&&O(C,p,_),y&&Gn(f)}(z&&(le=A&&A.onVnodeUnmounted)||j)&&We(()=>{le&&wt(le,p,f),j&&En(f,null,p,"unmounted")},_)},Gn=f=>{const{type:p,el:_,anchor:y,transition:E}=f;if(p===Ht){Bi(_,y);return}if(p===Mo){B(f);return}const b=()=>{i(_),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:A,delayLeave:w}=E,C=()=>A(_,b);w?w(f.el,b,C):C()}else b()},Bi=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},v=(f,p,_)=>{const{bum:y,scope:E,update:b,subTree:A,um:w}=f;y&&Po(y),E.stop(),b&&(b.active=!1,je(A,f,p,_)),w&&We(w,p),We(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(f,p,_,y=!1,E=!1,b=0)=>{for(let A=b;A<f.length;A++)je(f[A],p,_,y,E)},S=f=>f.shapeFlag&6?S(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),M=(f,p,_)=>{f==null?p._vnode&&je(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,_),Gc(),Lf(),p._vnode=f},J={p:T,um:je,m:ot,r:Gn,mt:yn,mc:Ue,pc:se,pbc:Qe,n:S,o:t};let pe,K;return e&&([pe,K]=e(J)),{render:M,hydrate:pe,createApp:py(M,pe)}}function In({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Zf(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=tn(i[r]),l.el=o.el),n||Zf(o,l)),l.type===Qr&&(l.el=o.el)}}function my(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const yy=t=>t.__isTeleport,Ht=Symbol(void 0),Qr=Symbol(void 0),Fn=Symbol(void 0),Mo=Symbol(void 0),qs=[];let ht=null;function ka(t=!1){qs.push(ht=t?null:[])}function vy(){qs.pop(),ht=qs[qs.length-1]||null}let ri=1;function su(t){ri+=t}function ed(t){return t.dynamicChildren=ri>0?ht||ss:null,vy(),ri>0&&ht&&ht.push(t),t}function Ey(t,e,n,s,i,r){return ed(sd(t,e,n,s,i,r,!0))}function td(t,e,n,s,i){return ed(Ge(t,e,n,s,i,!0))}function Il(t){return t?t.__v_isVNode===!0:!1}function Ms(t,e){return t.type===e.type&&t.key===e.key}const Zr="__vInternal",nd=({key:t})=>t??null,or=({ref:t,ref_key:e,ref_for:n})=>t!=null?be(t)||Pe(t)||V(t)?{i:et,r:t,k:e,f:!!n}:t:null;function sd(t,e=null,n=null,s=0,i=null,r=t===Ht?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nd(e),ref:e&&or(e),scopeId:Bf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:et};return l?(Na(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=be(n)?8:16),ri>0&&!o&&ht&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&ht.push(a),a}const Ge=Iy;function Iy(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ey)&&(t=Fn),Il(t)){const l=ds(t,e,!0);return n&&Na(l,n),ri>0&&!r&&ht&&(l.shapeFlag&6?ht[ht.indexOf(t)]=l:ht.push(l)),l.patchFlag|=-2,l}if(xy(t)&&(t=t.__vccOpts),e){e=wy(e);let{class:l,style:a}=e;l&&!be(l)&&(e.class=ua(l)),ge(a)&&(Sf(a)&&!W(a)&&(a=$e({},a)),e.style=ca(a))}const o=be(t)?1:Bm(t)?128:yy(t)?64:ge(t)?4:V(t)?2:0;return sd(t,e,n,s,i,o,r,!0)}function wy(t){return t?Sf(t)||Zr in t?$e({},t):t:null}function ds(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?by(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&nd(l),ref:e&&e.ref?n&&i?W(i)?i.concat(or(e)):[i,or(e)]:or(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ht?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ds(t.ssContent),ssFallback:t.ssFallback&&ds(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ty(t=" ",e=0){return Ge(Qr,null,t,e)}function GS(t="",e=!1){return e?(ka(),td(Fn,null,t)):Ge(Fn,null,t)}function Tt(t){return t==null||typeof t=="boolean"?Ge(Fn):W(t)?Ge(Ht,null,t.slice()):typeof t=="object"?tn(t):Ge(Qr,null,String(t))}function tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ds(t)}function Na(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Na(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Zr in e)?e._ctx=et:i===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:et},n=32):(e=String(e),s&64?(n=16,e=[Ty(e)]):n=8);t.children=e,t.shapeFlag|=n}function by(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ua([e.class,s.class]));else if(i==="style")e.style=ca([e.style,s.style]);else if(Vr(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function wt(t,e,n,s=null){gt(t,e,7,[n,s])}const Cy=Qf();let Ry=0;function Sy(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Cy,r={uid:Ry++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new pf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gf(s,i),emitsOptions:Uf(s,i),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:s.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Dm.bind(null,r),t.ce&&t.ce(r),r}let me=null;const Ay=()=>me||et,ps=t=>{me=t,t.scope.on()},Dn=()=>{me&&me.scope.off(),me=null};function id(t){return t.vnode.shapeFlag&4}let oi=!1;function ky(t,e=!1){oi=e;const{props:n,children:s}=t.vnode,i=id(t);ay(t,n,i,e),hy(t,s);const r=i?Ny(t,e):void 0;return oi=!1,r}function Ny(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ia(new Proxy(t.ctx,ny));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Py(t):null;ps(t),ws();const r=cn(s,t,0,[t.props,i]);if(Ts(),Dn(),hf(r)){if(r.then(Dn,Dn),e)return r.then(o=>{iu(t,o,e)}).catch(o=>{Yr(o,t,0)});t.asyncDep=r}else iu(t,r,e)}else rd(t,e)}function iu(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=Of(e)),rd(t,n)}let ru;function rd(t,e,n){const s=t.type;if(!t.render){if(!e&&ru&&!s.render){const i=s.template||Sa(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=$e($e({isCustomElement:r,delimiters:l},o),a);s.render=ru(i,c)}}t.render=s.render||pt}ps(t),ws(),sy(t),Ts(),Dn()}function Oy(t){return new Proxy(t.attrs,{get(e,n){return ze(t,"get","$attrs"),e[n]}})}function Py(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Oy(t))},slots:t.slots,emit:t.emit,expose:e}}function Oa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Of(Ia(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zs)return zs[n](t)},has(e,n){return n in e||n in zs}}))}function Dy(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function xy(t){return V(t)&&"__vccOpts"in t}const Ze=(t,e)=>Sm(t,e,oi);function od(t,e,n){const s=arguments.length;return s===2?ge(e)&&!W(e)?Il(e)?Ge(t,null,[e]):Ge(t,e):Ge(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Il(n)&&(n=[n]),Ge(t,e,n))}const My=Symbol(""),Ly=()=>nt(My),Fy="3.2.47",Uy="http://www.w3.org/2000/svg",Rn=typeof document<"u"?document:null,ou=Rn&&Rn.createElement("template"),By={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Rn.createElementNS(Uy,t):Rn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ou.innerHTML=s?`<svg>${t}</svg>`:t;const l=ou.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Hy(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function $y(t,e,n){const s=t.style,i=be(n);if(n&&!i){if(e&&!be(e))for(const r in e)n[r]==null&&wl(s,r,"");for(const r in n)wl(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const lu=/\s*!important$/;function wl(t,e,n){if(W(n))n.forEach(s=>wl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=jy(t,e);lu.test(n)?t.setProperty(Is(s),n.replace(lu,""),"important"):t[s]=n}}const au=["Webkit","Moz","ms"],Lo={};function jy(t,e){const n=Lo[e];if(n)return n;let s=Ot(e);if(s!=="filter"&&s in t)return Lo[e]=s;s=qr(s);for(let i=0;i<au.length;i++){const r=au[i]+s;if(r in t)return Lo[e]=r}return e}const cu="http://www.w3.org/1999/xlink";function Wy(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(cu,e.slice(6,e.length)):t.setAttributeNS(cu,e,n);else{const r=B_(e);n==null||r&&!af(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Vy(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n??"";(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=af(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ky(t,e,n,s){t.addEventListener(e,n,s)}function zy(t,e,n,s){t.removeEventListener(e,n,s)}function qy(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Gy(e);if(s){const c=r[e]=Jy(s,i);Ky(t,l,c,a)}else o&&(zy(t,l,o,a),r[e]=void 0)}}const uu=/(?:Once|Passive|Capture)$/;function Gy(t){let e;if(uu.test(t)){e={};let s;for(;s=t.match(uu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Is(t.slice(2)),e]}let Fo=0;const Yy=Promise.resolve(),Xy=()=>Fo||(Yy.then(()=>Fo=0),Fo=Date.now());function Jy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;gt(Qy(s,n.value),e,5,[s])};return n.value=t,n.attached=Xy(),n}function Qy(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const hu=/^on[a-z]/,Zy=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Hy(t,s,i):e==="style"?$y(t,n,s):Vr(e)?ha(e)||qy(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ev(t,e,s,i))?Vy(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Wy(t,e,s,i))};function ev(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&hu.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||hu.test(e)&&be(n)?!1:e in t}const tv=$e({patchProp:Zy},By);let fu;function nv(){return fu||(fu=gy(tv))}const sv=(...t)=>{const e=nv().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=iv(s);if(!i)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function iv(t){return be(t)?document.querySelector(t):t}var rv=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ov=Symbol();var du;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(du||(du={}));function lv(){const t=gf(!0),e=t.run(()=>Ta({}));let n=[],s=[];const i=Ia({install(r){i._a=r,r.provide(ov,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!rv?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Qn=typeof window<"u";function av(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function Uo(t,e){const n={};for(const s in e){const i=e[s];n[s]=mt(i)?i.map(t):t(i)}return n}const Gs=()=>{},mt=Array.isArray,cv=/\/$/,uv=t=>t.replace(cv,"");function Bo(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=pv(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function hv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fv(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&gs(e.matched[s],n.matched[i])&&ld(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ld(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!dv(t[n],e[n]))return!1;return!0}function dv(t,e){return mt(t)?gu(t,e):mt(e)?gu(e,t):t===e}function gu(t,e){return mt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function pv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var li;(function(t){t.pop="pop",t.push="push"})(li||(li={}));var Ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ys||(Ys={}));function gv(t){if(!t)if(Qn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uv(t)}const _v=/^[^#]+#/;function mv(t,e){return t.replace(_v,"#")+e}function yv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const eo=()=>({left:window.pageXOffset,top:window.pageYOffset});function vv(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=yv(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _u(t,e){return(history.state?history.state.position-e:-1)+t}const Tl=new Map;function Ev(t,e){Tl.set(t,e)}function Iv(t){const e=Tl.get(t);return Tl.delete(t),e}let wv=()=>location.protocol+"//"+location.host;function ad(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),pu(a,"")}return pu(n,t)+s+i}function Tv(t,e,n,s){let i=[],r=[],o=null;const l=({state:d})=>{const g=ad(t,location),m=n.value,T=e.value;let k=0;if(d){if(n.value=g,e.value=d,o&&o===m){o=null;return}k=T?d.position-T.position:0}else s(g);i.forEach(N=>{N(n.value,m,{delta:k,type:li.pop,direction:k?k>0?Ys.forward:Ys.back:Ys.unknown})})};function a(){o=n.value}function c(d){i.push(d);const g=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(te({},d.state,{scroll:eo()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:c,destroy:h}}function mu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?eo():null}}function bv(t){const{history:e,location:n}=window,s={value:ad(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:wv()+t+a;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(a,c){const u=te({},e.state,mu(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=te({},i.value,e.state,{forward:a,scroll:eo()});r(u.current,u,!0);const h=te({},mu(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function Cv(t){t=gv(t);const e=bv(t),n=Tv(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=te({location:"",base:t,go:s,createHref:mv.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Rv(t){return typeof t=="string"||t&&typeof t=="object"}function cd(t){return typeof t=="string"||typeof t=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ud=Symbol("");var yu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yu||(yu={}));function _s(t,e){return te(new Error,{type:t,[ud]:!0},e)}function Ut(t,e){return t instanceof Error&&ud in t&&(e==null||!!(t.type&e))}const vu="[^/]+?",Sv={sensitive:!1,strict:!1,start:!0,end:!0},Av=/[.+*?^${}()[\]/\\]/g;function kv(t,e){const n=te({},Sv,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(Av,"\\$&"),g+=40;else if(d.type===1){const{value:m,repeatable:T,optional:k,regexp:N}=d;r.push({name:m,repeatable:T,optional:k});const U=N||vu;if(U!==vu){g+=10;try{new RegExp(`(${U})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${m}" (${U}): `+B.message)}}let P=T?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(P=k&&c.length<2?`(?:/${P})`:"/"+P),k&&(P+="?"),i+=P,g+=20,k&&(g+=-8),T&&(g+=-20),U===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",m=r[d-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function a(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:T,optional:k}=g,N=m in c?c[m]:"";if(mt(N)&&!T)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const U=mt(N)?N.join("/"):N;if(!U)if(k)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=U}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function Nv(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ov(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Nv(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Eu(s))return 1;if(Eu(i))return-1}return i.length-s.length}function Eu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pv={type:0,value:""},Dv=/[a-zA-Z0-9_]/;function xv(t){if(!t)return[[]];if(t==="/")return[[Pv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:a==="("?n=2:Dv.test(a)?d():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function Mv(t,e,n){const s=kv(xv(t.path),n),i=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Lv(t,e){const n=[],s=new Map;e=Tu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const g=!d,m=Fv(u);m.aliasOf=d&&d.record;const T=Tu(e,u),k=[m];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of P)k.push(te({},m,{components:d?d.record.components:m.components,path:B,aliasOf:d?d.record:m}))}let N,U;for(const P of k){const{path:B}=P;if(h&&B[0]!=="/"){const he=h.record.path,_e=he[he.length-1]==="/"?"":"/";P.path=h.record.path+(B&&_e+B)}if(N=Mv(P,h,T),d?d.alias.push(N):(U=U||N,U!==N&&U.alias.push(N),g&&u.name&&!wu(N)&&o(u.name)),m.children){const he=m.children;for(let _e=0;_e<he.length;_e++)r(he[_e],N,d&&d.children[_e])}d=d||N,(N.record.components&&Object.keys(N.record.components).length||N.record.name||N.record.redirect)&&a(N)}return U?()=>{o(U)}:Gs}function o(u){if(cd(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&Ov(u,n[h])>=0&&(u.record.path!==n[h].record.path||!hd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!wu(u)&&s.set(u.record.name,u)}function c(u,h){let d,g={},m,T;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw _s(1,{location:u});T=d.record.name,g=te(Iu(h.params,d.keys.filter(U=>!U.optional).map(U=>U.name)),u.params&&Iu(u.params,d.keys.map(U=>U.name))),m=d.stringify(g)}else if("path"in u)m=u.path,d=n.find(U=>U.re.test(m)),d&&(g=d.parse(m),T=d.record.name);else{if(d=h.name?s.get(h.name):n.find(U=>U.re.test(h.path)),!d)throw _s(1,{location:u,currentLocation:h});T=d.record.name,g=te({},h.params,u.params),m=d.stringify(g)}const k=[];let N=d;for(;N;)k.unshift(N.record),N=N.parent;return{name:T,path:m,params:g,matched:k,meta:Bv(k)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function Iu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Fv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Uv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Uv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function wu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Bv(t){return t.reduce((e,n)=>te(e,n.meta),{})}function Tu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function hd(t,e){return e.children.some(n=>n===t||hd(t,n))}const fd=/#/g,Hv=/&/g,$v=/\//g,jv=/=/g,Wv=/\?/g,dd=/\+/g,Vv=/%5B/g,Kv=/%5D/g,pd=/%5E/g,zv=/%60/g,gd=/%7B/g,qv=/%7C/g,_d=/%7D/g,Gv=/%20/g;function Pa(t){return encodeURI(""+t).replace(qv,"|").replace(Vv,"[").replace(Kv,"]")}function Yv(t){return Pa(t).replace(gd,"{").replace(_d,"}").replace(pd,"^")}function bl(t){return Pa(t).replace(dd,"%2B").replace(Gv,"+").replace(fd,"%23").replace(Hv,"%26").replace(zv,"`").replace(gd,"{").replace(_d,"}").replace(pd,"^")}function Xv(t){return bl(t).replace(jv,"%3D")}function Jv(t){return Pa(t).replace(fd,"%23").replace(Wv,"%3F")}function Qv(t){return t==null?"":Jv(t).replace($v,"%2F")}function gr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Zv(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(dd," "),o=r.indexOf("="),l=gr(o<0?r:r.slice(0,o)),a=o<0?null:gr(r.slice(o+1));if(l in e){let c=e[l];mt(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function bu(t){let e="";for(let n in t){const s=t[n];if(n=Xv(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(mt(s)?s.map(r=>r&&bl(r)):[s&&bl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function eE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=mt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const tE=Symbol(""),Cu=Symbol(""),to=Symbol(""),Da=Symbol(""),Cl=Symbol("");function Ls(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function nn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(_s(4,{from:n,to:e})):h instanceof Error?l(h):Rv(h)?l(_s(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function Ho(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(nE(l)){const c=(l.__vccOpts||l)[e];c&&i.push(nn(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=av(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&nn(d,n,s,r,o)()}))}}return i}function nE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ru(t){const e=nt(to),n=nt(Da),s=Ze(()=>e.resolve(Pn(t.to))),i=Ze(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(gs.bind(null,u));if(d>-1)return d;const g=Su(a[c-2]);return c>1&&Su(u)===g&&h[h.length-1].path!==g?h.findIndex(gs.bind(null,a[c-2])):d}),r=Ze(()=>i.value>-1&&oE(n.params,s.value.params)),o=Ze(()=>i.value>-1&&i.value===n.matched.length-1&&ld(n.params,s.value.params));function l(a={}){return rE(a)?e[Pn(t.replace)?"replace":"push"](Pn(t.to)).catch(Gs):Promise.resolve()}return{route:s,href:Ze(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const sE=Ra({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ru,setup(t,{slots:e}){const n=Ii(Ru(t)),{options:s}=nt(to),i=Ze(()=>({[Au(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Au(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:od("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),iE=sE;function rE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oE(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!mt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Su(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Au=(t,e,n)=>t??e??n,lE=Ra({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=nt(Cl),i=Ze(()=>t.route||s.value),r=nt(Cu,0),o=Ze(()=>{let c=Pn(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=Ze(()=>i.value.matched[o.value]);sr(Cu,Ze(()=>o.value+1)),sr(tE,l),sr(Cl,i);const a=Ta();return ir(()=>[a.value,l.value,t.name],([c,u,h],[d,g,m])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!gs(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,d=h&&h.components[u];if(!d)return ku(n.default,{Component:d,route:c});const g=h.props[u],m=g?g===!0?c.params:typeof g=="function"?g(c):g:null,k=od(d,te({},m,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return ku(n.default,{Component:k,route:c})||k}}});function ku(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const md=lE;function aE(t){const e=Lv(t.routes,t),n=t.parseQuery||Zv,s=t.stringifyQuery||bu,i=t.history,r=Ls(),o=Ls(),l=Ls(),a=Tm(Zt);let c=Zt;Qn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Uo.bind(null,v=>""+v),h=Uo.bind(null,Qv),d=Uo.bind(null,gr);function g(v,O){let S,M;return cd(v)?(S=e.getRecordMatcher(v),M=O):M=v,e.addRoute(M,S)}function m(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function T(){return e.getRoutes().map(v=>v.record)}function k(v){return!!e.getRecordMatcher(v)}function N(v,O){if(O=te({},O||a.value),typeof v=="string"){const f=Bo(n,v,O.path),p=e.resolve({path:f.path},O),_=i.createHref(f.fullPath);return te(f,p,{params:d(p.params),hash:gr(f.hash),redirectedFrom:void 0,href:_})}let S;if("path"in v)S=te({},v,{path:Bo(n,v.path,O.path).path});else{const f=te({},v.params);for(const p in f)f[p]==null&&delete f[p];S=te({},v,{params:h(v.params)}),O.params=h(O.params)}const M=e.resolve(S,O),J=v.hash||"";M.params=u(d(M.params));const pe=hv(s,te({},v,{hash:Yv(J),path:M.path})),K=i.createHref(pe);return te({fullPath:pe,hash:J,query:s===bu?eE(v.query):v.query||{}},M,{redirectedFrom:void 0,href:K})}function U(v){return typeof v=="string"?Bo(n,v,a.value.path):te({},v)}function P(v,O){if(c!==v)return _s(8,{from:O,to:v})}function B(v){return Fe(v)}function he(v){return B(te(U(v),{replace:!0}))}function _e(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:S}=O;let M=typeof S=="function"?S(v):S;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=U(M):{path:M},M.params={}),te({query:v.query,hash:v.hash,params:"path"in M?{}:v.params},M)}}function Fe(v,O){const S=c=N(v),M=a.value,J=v.state,pe=v.force,K=v.replace===!0,f=_e(S);if(f)return Fe(te(U(f),{state:typeof f=="object"?te({},J,f.state):J,force:pe,replace:K}),O||S);const p=S;p.redirectedFrom=O;let _;return!pe&&fv(s,M,S)&&(_=_s(16,{to:p,from:M}),vn(M,M,!0,!1)),(_?Promise.resolve(_):vt(p,M)).catch(y=>Ut(y)?Ut(y,2)?y:rt(y):oe(y,p,M)).then(y=>{if(y){if(Ut(y,2))return Fe(te({replace:K},U(y.to),{state:typeof y.to=="object"?te({},J,y.to.state):J,force:pe}),O||p)}else y=Jt(p,M,!0,K,J);return Qe(p,M,y),y})}function Ue(v,O){const S=P(v,O);return S?Promise.reject(S):Promise.resolve()}function vt(v,O){let S;const[M,J,pe]=cE(v,O);S=Ho(M.reverse(),"beforeRouteLeave",v,O);for(const f of M)f.leaveGuards.forEach(p=>{S.push(nn(p,v,O))});const K=Ue.bind(null,v,O);return S.push(K),Xn(S).then(()=>{S=[];for(const f of r.list())S.push(nn(f,v,O));return S.push(K),Xn(S)}).then(()=>{S=Ho(J,"beforeRouteUpdate",v,O);for(const f of J)f.updateGuards.forEach(p=>{S.push(nn(p,v,O))});return S.push(K),Xn(S)}).then(()=>{S=[];for(const f of v.matched)if(f.beforeEnter&&!O.matched.includes(f))if(mt(f.beforeEnter))for(const p of f.beforeEnter)S.push(nn(p,v,O));else S.push(nn(f.beforeEnter,v,O));return S.push(K),Xn(S)}).then(()=>(v.matched.forEach(f=>f.enterCallbacks={}),S=Ho(pe,"beforeRouteEnter",v,O),S.push(K),Xn(S))).then(()=>{S=[];for(const f of o.list())S.push(nn(f,v,O));return S.push(K),Xn(S)}).catch(f=>Ut(f,8)?f:Promise.reject(f))}function Qe(v,O,S){for(const M of l.list())M(v,O,S)}function Jt(v,O,S,M,J){const pe=P(v,O);if(pe)return pe;const K=O===Zt,f=Qn?history.state:{};S&&(M||K?i.replace(v.fullPath,te({scroll:K&&f&&f.scroll},J)):i.push(v.fullPath,J)),a.value=v,vn(v,O,S,K),rt()}let Et;function qn(){Et||(Et=i.listen((v,O,S)=>{if(!Bi.listening)return;const M=N(v),J=_e(M);if(J){Fe(te(J,{replace:!0}),M).catch(Gs);return}c=M;const pe=a.value;Qn&&Ev(_u(pe.fullPath,S.delta),eo()),vt(M,pe).catch(K=>Ut(K,12)?K:Ut(K,2)?(Fe(K.to,M).then(f=>{Ut(f,20)&&!S.delta&&S.type===li.pop&&i.go(-1,!1)}).catch(Gs),Promise.reject()):(S.delta&&i.go(-S.delta,!1),oe(K,M,pe))).then(K=>{K=K||Jt(M,pe,!1),K&&(S.delta&&!Ut(K,8)?i.go(-S.delta,!1):S.type===li.pop&&Ut(K,20)&&i.go(-1,!1)),Qe(M,pe,K)}).catch(Gs)}))}let yn=Ls(),Ds=Ls(),ve;function oe(v,O,S){rt(v);const M=Ds.list();return M.length?M.forEach(J=>J(v,O,S)):console.error(v),Promise.reject(v)}function se(){return ve&&a.value!==Zt?Promise.resolve():new Promise((v,O)=>{yn.add([v,O])})}function rt(v){return ve||(ve=!v,qn(),yn.list().forEach(([O,S])=>v?S(v):O()),yn.reset()),v}function vn(v,O,S,M){const{scrollBehavior:J}=t;if(!Qn||!J)return Promise.resolve();const pe=!S&&Iv(_u(v.fullPath,0))||(M||!S)&&history.state&&history.state.scroll||null;return xf().then(()=>J(v,O,pe)).then(K=>K&&vv(K)).catch(K=>oe(K,v,O))}const ot=v=>i.go(v);let je;const Gn=new Set,Bi={currentRoute:a,listening:!0,addRoute:g,removeRoute:m,hasRoute:k,getRoutes:T,resolve:N,options:t,push:B,replace:he,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Ds.add,isReady:se,install(v){const O=this;v.component("RouterLink",iE),v.component("RouterView",md),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Pn(a)}),Qn&&!je&&a.value===Zt&&(je=!0,B(i.location).catch(J=>{}));const S={};for(const J in Zt)S[J]=Ze(()=>a.value[J]);v.provide(to,O),v.provide(Da,Ii(S)),v.provide(Cl,a);const M=v.unmount;Gn.add(v),v.unmount=function(){Gn.delete(v),Gn.size<1&&(c=Zt,Et&&Et(),Et=null,a.value=Zt,je=!1,ve=!1),M()}}};return Bi}function Xn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function cE(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>gs(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>gs(c,a))||i.push(a))}return[n,s,i]}function YS(){return nt(to)}function XS(){return nt(Da)}const uE=Ra({__name:"App",setup(t){return(e,n)=>(ka(),td(Pn(md)))}}),hE="modulepreload",fE=function(t){return"/"+t},Nu={},$o=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=fE(r),r in Nu)return;Nu[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":hE,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw bs(e)},bs=function(t){return new Error("Firebase Database ("+yd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},no={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new pE;const d=r<<2|l>>4;if(s.push(d),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ed=function(t){const e=vd(t);return no.encodeByteArray(e,!0)},Id=function(t){return Ed(t).replace(/\./g,"")},_r=function(t){try{return no.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){return wd(void 0,t)}function wd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_E(n)||(t[n]=wd(t[n],e[n]));return t}function _E(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=()=>mE().__FIREBASE_DEFAULTS__,vE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_r(t[1]);return e&&JSON.parse(e)},xa=()=>{try{return yE()||vE()||EE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},IE=t=>{var e,n;return(n=(e=xa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wE=()=>{var t;return(t=xa())===null||t===void 0?void 0:t.config},Td=t=>{var e;return(e=xa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ma(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function TE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bE(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cd(){return yd.NODE_ADMIN===!0}function Rd(){try{return typeof indexedDB=="object"}catch{return!1}}function CE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="FirebaseError";class Lt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=RE,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?SE(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Lt(i,l,s)}}function SE(t,e){return t.replace(AE,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const AE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){return JSON.parse(t)}function Re(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ci(_r(r[0])||""),n=ci(_r(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},kE=function(t){const e=Sd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},NE=function(t){const e=Sd(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ms(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function yr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ou(r)&&Ou(o)){if(!yr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ou(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function PE(t,e){const n=new DE(t,e);return n.subscribe.bind(n)}class DE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");xE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=jo),i.error===void 0&&(i.error=jo),i.complete===void 0&&(i.complete=jo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jo(){}function ME(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,R(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},so=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t){return t&&t._delegate?t._delegate:t}class yt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ai;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BE(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:UE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UE(t){return t===Tn?void 0:t}function BE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const $E={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},jE=ne.INFO,WE={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},VE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=WE[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wi{constructor(e){this.name=e,this._logLevel=jE,this._logHandler=VE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$E[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const KE=(t,e)=>e.some(n=>t instanceof n);let Pu,Du;function zE(){return Pu||(Pu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qE(){return Du||(Du=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ad=new WeakMap,Sl=new WeakMap,kd=new WeakMap,Wo=new WeakMap,La=new WeakMap;function GE(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(un(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ad.set(n,t)}).catch(()=>{}),La.set(e,t),e}function YE(t){if(Sl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Sl.set(t,e)}let Al={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XE(t){Al=t(Al)}function JE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Vo(this),e,...n);return kd.set(s,e.sort?e.sort():[e]),un(s)}:qE().includes(t)?function(...e){return t.apply(Vo(this),e),un(Ad.get(this))}:function(...e){return un(t.apply(Vo(this),e))}}function QE(t){return typeof t=="function"?JE(t):(t instanceof IDBTransaction&&YE(t),KE(t,zE())?new Proxy(t,Al):t)}function un(t){if(t instanceof IDBRequest)return GE(t);if(Wo.has(t))return Wo.get(t);const e=QE(t);return e!==t&&(Wo.set(t,e),La.set(e,t)),e}const Vo=t=>La.get(t);function ZE(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=un(o);return s&&o.addEventListener("upgradeneeded",a=>{s(un(o.result),a.oldVersion,a.newVersion,un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const eI=["get","getKey","getAll","getAllKeys","count"],tI=["put","add","delete","clear"],Ko=new Map;function xu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ko.get(e))return Ko.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=tI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||eI.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ko.set(e,r),r}XE(t=>({...t,get:(e,n,s)=>xu(e,n)||t.get(e,n,s),has:(e,n)=>!!xu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function sI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kl="@firebase/app",Mu="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new wi("@firebase/app"),iI="@firebase/app-compat",rI="@firebase/analytics-compat",oI="@firebase/analytics",lI="@firebase/app-check-compat",aI="@firebase/app-check",cI="@firebase/auth",uI="@firebase/auth-compat",hI="@firebase/database",fI="@firebase/database-compat",dI="@firebase/functions",pI="@firebase/functions-compat",gI="@firebase/installations",_I="@firebase/installations-compat",mI="@firebase/messaging",yI="@firebase/messaging-compat",vI="@firebase/performance",EI="@firebase/performance-compat",II="@firebase/remote-config",wI="@firebase/remote-config-compat",TI="@firebase/storage",bI="@firebase/storage-compat",CI="@firebase/firestore",RI="@firebase/firestore-compat",SI="firebase",AI="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="[DEFAULT]",kI={[kl]:"fire-core",[iI]:"fire-core-compat",[oI]:"fire-analytics",[rI]:"fire-analytics-compat",[aI]:"fire-app-check",[lI]:"fire-app-check-compat",[cI]:"fire-auth",[uI]:"fire-auth-compat",[hI]:"fire-rtdb",[fI]:"fire-rtdb-compat",[dI]:"fire-fn",[pI]:"fire-fn-compat",[gI]:"fire-iid",[_I]:"fire-iid-compat",[mI]:"fire-fcm",[yI]:"fire-fcm-compat",[vI]:"fire-perf",[EI]:"fire-perf-compat",[II]:"fire-rc",[wI]:"fire-rc-compat",[TI]:"fire-gcs",[bI]:"fire-gcs-compat",[CI]:"fire-fst",[RI]:"fire-fst-compat","fire-js":"fire-js",[SI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Map,Ol=new Map;function NI(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pt(t){const e=t.name;if(Ol.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;Ol.set(e,t);for(const n of vr.values())NI(n,t);return!0}function Nd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hn=new Cs("app","Firebase",OI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=AI;function Od(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Nl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw hn.create("bad-app-name",{appName:String(i)});if(n||(n=wE()),!n)throw hn.create("no-options");const r=vr.get(i);if(r){if(yr(n,r.options)&&yr(s,r.config))return r;throw hn.create("duplicate-app",{appName:i})}const o=new HE(i);for(const a of Ol.values())o.addComponent(a);const l=new PI(n,s,o);return vr.set(i,l),l}function Pd(t=Nl){const e=vr.get(t);if(!e&&t===Nl)return Od();if(!e)throw hn.create("no-app",{appName:t});return e}function Xe(t,e,n){var s;let i=(s=kI[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(l.join(" "));return}Pt(new yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="firebase-heartbeat-database",xI=1,ui="firebase-heartbeat-store";let zo=null;function Dd(){return zo||(zo=ZE(DI,xI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ui)}}}).catch(t=>{throw hn.create("idb-open",{originalErrorMessage:t.message})})),zo}async function MI(t){try{return(await Dd()).transaction(ui).objectStore(ui).get(xd(t))}catch(e){if(e instanceof Lt)Un.warn(e.message);else{const n=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function Lu(t,e){try{const s=(await Dd()).transaction(ui,"readwrite");return await s.objectStore(ui).put(e,xd(t)),s.done}catch(n){if(n instanceof Lt)Un.warn(n.message);else{const s=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(s.message)}}}function xd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=1024,FI=30*24*60*60*1e3;class UI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=FI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fu(),{heartbeatsToSend:n,unsentEntries:s}=BI(this._heartbeatsCache.heartbeats),i=Id(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fu(){return new Date().toISOString().substring(0,10)}function BI(t,e=LI){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Uu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class HI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rd()?CE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await MI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uu(t){return Id(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t){Pt(new yt("platform-logger",e=>new nI(e),"PRIVATE")),Pt(new yt("heartbeat",e=>new UI(e),"PRIVATE")),Xe(kl,Mu,t),Xe(kl,Mu,"esm2017"),Xe("fire-js","")}$I("");function Fa(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Md(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jI=Md,Ld=new Cs("auth","Firebase",Md());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new wi("@firebase/auth");function lr(t,...e){Bu.logLevel<=ne.ERROR&&Bu.error(`Auth (${Vn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,...e){throw Ua(t,...e)}function St(t,...e){return Ua(t,...e)}function Fd(t,e,n){const s=Object.assign(Object.assign({},jI()),{[e]:n});return new Cs("auth","Firebase",s).create(e,{appName:t.name})}function WI(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Dt(t,"argument-error"),Fd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ua(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ld.create(t,...e)}function H(t,e,...n){if(!t)throw Ua(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lr(e),new Error(e)}function qt(t,e){t||$t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new Map;function jt(t){qt(t instanceof Function,"Expected a class definition");let e=Hu.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hu.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t,e){const n=Nd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(yr(r,e??{}))return i;Dt(i,"already-initialized")}return n.initialize({options:e})}function KI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zI(){return $u()==="http:"||$u()==="https:"}function $u(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zI()||TE()||"connection"in navigator)?navigator.onLine:!0}function GI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ma()||bd()}get(){return qI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=new Ti(3e4,6e4);function JI(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function io(t,e,n,s,i={}){return Bd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=Rs(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Ud.fetch()(Hd(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))})}async function Bd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},YI),e);try{const i=new ZI(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw zi(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw zi(t,"user-disabled",o);const u=s[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fd(t,u,c);Dt(t,u)}}catch(i){if(i instanceof Lt)throw i;Dt(t,"internal-error",{message:String(i)})}}async function QI(t,e,n,s,i={}){const r=await io(t,e,n,s,i);return"mfaPendingCredential"in r&&Dt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Hd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ba(t.config,i):`${t.config.apiScheme}://${i}`}class ZI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(St(this.auth,"network-request-failed")),XI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=St(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(t,e){return io(t,"POST","/v1/accounts:delete",e)}async function tw(t,e){return io(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nw(t,e=!1){const n=gn(t),s=await n.getIdToken(e),i=Ha(s);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Xs(qo(i.auth_time)),issuedAtTime:Xs(qo(i.iat)),expirationTime:Xs(qo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function qo(t){return Number(t)*1e3}function Ha(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return lr("JWT malformed, contained fewer than 3 sections"),null;try{const i=_r(n);return i?JSON.parse(i):(lr("Failed to decode base64 JWT payload"),null)}catch(i){return lr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sw(t){const e=Ha(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Lt&&iw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function iw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(t){var e;const n=t.auth,s=await t.getIdToken(),i=await hi(t,tw(n,{idToken:s}));H(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?aw(r.providerUserInfo):[],l=lw(t.providerData,o),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new $d(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ow(t){const e=gn(t);await Er(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lw(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function aw(t){return t.map(e=>{var{providerId:n}=e,s=Fa(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(t,e){const n=await Bd(t,{},async()=>{const s=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Hd(t,i,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ud.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await cw(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new fi;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Fa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new $d(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await hi(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nw(this,e)}reload(){return ow(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Er(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hi(this,ew(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,l,a,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,N=(c=n.createdAt)!==null&&c!==void 0?c:void 0,U=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:B,isAnonymous:he,providerData:_e,stsTokenManager:Fe}=n;H(P&&Fe,e,"internal-error");const Ue=fi.fromJSON(this.name,Fe);H(typeof P=="string",e,"internal-error"),en(h,e.name),en(d,e.name),H(typeof B=="boolean",e,"internal-error"),H(typeof he=="boolean",e,"internal-error"),en(g,e.name),en(m,e.name),en(T,e.name),en(k,e.name),en(N,e.name),en(U,e.name);const vt=new xn({uid:P,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:he,photoURL:m,phoneNumber:g,tenantId:T,stsTokenManager:Ue,createdAt:N,lastLoginAt:U});return _e&&Array.isArray(_e)&&(vt.providerData=_e.map(Qe=>Object.assign({},Qe))),k&&(vt._redirectEventId=k),vt}static async _fromIdTokenResponse(e,n,s=!1){const i=new fi;i.updateFromServerResponse(n);const r=new xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Er(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jd.type="NONE";const ju=jd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e,n){return`firebase:${t}:${e}:${n}`}class ls{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ar(this.userKey,i.apiKey,r),this.fullPersistenceKey=ar("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ls(jt(ju),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||jt(ju);const o=ar(s,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const h=xn._fromJSON(e,u);c!==r&&(l=h),r=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new ls(r,e,s):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ls(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qd(e))return"Blackberry";if(Gd(e))return"Webos";if($a(e))return"Safari";if((e.includes("chrome/")||Vd(e))&&!e.includes("edge/"))return"Chrome";if(zd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wd(t=Le()){return/firefox\//i.test(t)}function $a(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vd(t=Le()){return/crios\//i.test(t)}function Kd(t=Le()){return/iemobile/i.test(t)}function zd(t=Le()){return/android/i.test(t)}function qd(t=Le()){return/blackberry/i.test(t)}function Gd(t=Le()){return/webos/i.test(t)}function ro(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uw(t=Le()){var e;return ro(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hw(){return bE()&&document.documentMode===10}function Yd(t=Le()){return ro(t)||zd(t)||Gd(t)||qd(t)||/windows phone/i.test(t)||Kd(t)}function fw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t,e=[]){let n;switch(t){case"Browser":n=Wu(Le());break;case"Worker":n=`${Wu(Le())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,l)=>{try{const a=e(r);o(a)}catch(a){l(a)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vu(this),this.idTokenSubscription=new Vu(this),this.beforeStateQueue=new dw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ld,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ls.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Er(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?gn(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ls.create(this,[jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function oo(t){return gn(t)}class Vu{constructor(e){this.auth=e,this.observer=null,this.addObserver=PE(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function gw(t,e,n){const s=oo(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Jd(e),{host:o,port:l}=_w(e),a=l===null?"":`:${l}`;s.config.emulator={url:`${r}//${o}${a}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||mw()}function Jd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _w(t){const e=Jd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Ku(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Ku(o)}}}function Ku(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return QI(t,"POST","/v1/accounts:signInWithIdp",JI(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="http://localhost";class Bn extends Qd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Fa(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Bn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,as(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:yw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends ja{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends bi{constructor(){super("facebook.com")}static credential(e){return Bn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return rn.credential(n,s)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends bi{constructor(){super("github.com")}static credential(e){return Bn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends bi{constructor(){super("twitter.com")}static credential(e,n){return Bn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await xn._fromIdTokenResponse(e,s,i),o=zu(s);return new ys({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=zu(s);return new ys({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function zu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Lt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ir.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ir(e,n,s,i)}}function Zd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ir._fromErrorAndOperation(t,r,e,s):r})}async function vw(t,e,n=!1){const s=await hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ys._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await hi(t,Zd(s,i,e,t),n);H(r.idToken,s,"internal-error");const o=Ha(r.idToken);H(o,s,"internal-error");const{sub:l}=o;return H(t.uid===l,s,"user-mismatch"),ys._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Dt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(t,e,n=!1){const s="signIn",i=await Zd(t,s,e),r=await ys._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function ep(t,e,n,s){return gn(t).onIdTokenChanged(e,n,s)}function ww(t,e,n){return gn(t).beforeAuthStateChanged(e,n)}function JS(t){return gn(t).signOut()}const wr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wr,"1"),this.storage.removeItem(wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(){const t=Le();return $a(t)||ro(t)}const bw=1e3,Cw=10;class np extends tp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tw()&&fw(),this.fallbackToPolling=Yd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);hw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Cw):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}np.type="LOCAL";const Rw=np;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp extends tp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sp.type="SESSION";const ip=sp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new lo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,r)),a=await Sw(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,a)=>{const c=Wa("",20);i.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(d.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return window}function kw(t){At().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function Nw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ow(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Pw(){return rp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="firebaseLocalStorageDb",Dw=1,Tr="firebaseLocalStorage",lp="fbase_key";class Ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ao(t,e){return t.transaction([Tr],e?"readwrite":"readonly").objectStore(Tr)}function xw(){const t=indexedDB.deleteDatabase(op);return new Ci(t).toPromise()}function Dl(){const t=indexedDB.open(op,Dw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Tr,{keyPath:lp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Tr)?e(s):(s.close(),await xw(),e(await Dl()))})})}async function qu(t,e,n){const s=ao(t,!0).put({[lp]:e,value:n});return new Ci(s).toPromise()}async function Mw(t,e){const n=ao(t,!1).get(e),s=await new Ci(n).toPromise();return s===void 0?null:s.value}function Gu(t,e){const n=ao(t,!0).delete(e);return new Ci(n).toPromise()}const Lw=800,Fw=3;class ap{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Fw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lo._getInstance(Pw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Nw(),!this.activeServiceWorker)return;this.sender=new Aw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ow()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dl();return await qu(e,wr,"1"),await Gu(e,wr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>qu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Mw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ao(i,!1).getAll();return new Ci(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ap.type="LOCAL";const Uw=ap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Hw(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=St("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Bw().appendChild(s)})}function $w(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ti(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t,e){return e?jt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Qd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jw(t){return Iw(t.auth,new Va(t),t.bypassAuthState)}function Ww(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Ew(n,new Va(t),t.bypassAuthState)}async function Vw(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),vw(n,new Va(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jw;case"linkViaPopup":case"linkViaRedirect":return Vw;case"reauthViaPopup":case"reauthViaRedirect":return Ww;default:Dt(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=new Ti(2e3,1e4);async function QS(t,e,n){const s=oo(t);WI(t,e,ja);const i=cp(s,n);return new Sn(s,"signInViaPopup",e,i).executeNotNull()}class Sn extends up{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Wa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Kw.get())};e()}}Sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="pendingRedirect",cr=new Map;class qw extends up{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=cr.get(this.auth._key());if(!e){try{const s=await Gw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}cr.set(this.auth._key(),e)}return this.bypassAuthState||cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gw(t,e){const n=Jw(e),s=Xw(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Yw(t,e){cr.set(t._key(),e)}function Xw(t){return jt(t._redirectPersistence)}function Jw(t){return ar(zw,t.config.apiKey,t.name)}async function Qw(t,e,n=!1){const s=oo(t),i=cp(s,e),o=await new qw(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=10*60*1e3;class eT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!hp(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yu(e))}saveEventToCache(e){this.cachedEventUids.add(Yu(e)),this.lastProcessedEventTime=Date.now()}}function Yu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(t,e={}){return io(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iT=/^https?/;async function rT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nT(t);for(const n of e)try{if(oT(n))return}catch{}Dt(t,"unauthorized-domain")}function oT(t){const e=Pl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!iT.test(n))return!1;if(sT.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new Ti(3e4,6e4);function Xu(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aT(t){return new Promise((e,n)=>{var s,i,r;function o(){Xu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xu(),n(St(t,"network-request-failed"))},timeout:lT.get()})}if(!((i=(s=At().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=At().gapi)===null||r===void 0)&&r.load)o();else{const l=$w("iframefcb");return At()[l]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},Hw(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw ur=null,e})}let ur=null;function cT(t){return ur=ur||aT(t),ur}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=new Ti(5e3,15e3),hT="__/auth/iframe",fT="emulator/auth/iframe",dT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gT(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ba(e,fT):`https://${t.config.authDomain}/${hT}`,s={apiKey:e.apiKey,appName:t.name,v:Vn},i=pT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Rs(s).slice(1)}`}async function _T(t){const e=await cT(t),n=At().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:gT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),l=At().setTimeout(()=>{r(o)},uT.get());function a(){At().clearTimeout(l),i(s)}s.ping(a).then(a,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yT=500,vT=600,ET="_blank",IT="http://localhost";class Ju{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wT(t,e,n,s=yT,i=vT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const a=Object.assign(Object.assign({},mT),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Le().toLowerCase();n&&(l=Vd(c)?ET:n),Wd(c)&&(e=e||IT,a.scrollbars="yes");const u=Object.entries(a).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(uw(c)&&l!=="_self")return TT(e||"",l),new Ju(null);const h=window.open(e||"",l,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Ju(h)}function TT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="__/auth/handler",CT="emulator/auth/handler";function Qu(t,e,n,s,i,r){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Vn,eventId:i};if(e instanceof ja){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,c]of Object.entries(r||{}))o[a]=c}if(e instanceof bi){const a=e.getScopes().filter(c=>c!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${RT(t)}?${Rs(l).slice(1)}`}function RT({config:t}){return t.emulator?Ba(t,CT):`https://${t.authDomain}/${bT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="webStorageSupport";class ST{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ip,this._completeRedirectFn=Qw,this._overrideRedirectResult=Yw}async _openPopup(e,n,s,i){var r;qt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Qu(e,n,s,Pl(),i);return wT(e,o,Wa())}async _openRedirect(e,n,s,i){return await this._originValidation(e),kw(Qu(e,n,s,Pl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(qt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await _T(e),s=new eT(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Go,{type:Go},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Go];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yd()||$a()||ro()}}const AT=ST;var Zu="@firebase/auth",eh="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function OT(t){Pt(new yt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((l,a)=>{H(r&&!r.includes(":"),"invalid-api-key",{appName:l.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xd(t)},u=new pw(l,a,c);return KI(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Pt(new yt("auth-internal",e=>{const n=oo(e.getProvider("auth").getImmediate());return(s=>new kT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(Zu,eh,NT(t)),Xe(Zu,eh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=5*60,DT=Td("authIdTokenMaxAge")||PT;let th=null;const xT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>DT)return;const i=n==null?void 0:n.token;th!==i&&(th=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function MT(t=Pd()){const e=Nd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VI(t,{popupRedirectResolver:AT,persistence:[Uw,Rw,ip]}),s=Td("authTokenSyncURL");if(s){const r=xT(s);ww(n,r,()=>r(n.currentUser)),ep(n,o=>r(o))}const i=IE("auth");return i&&gw(n,`http://${i}`),n}OT("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new Map,FT={activated:!1,tokenObservers:[]};function xt(t){return LT.get(t)||Object.assign({},FT)}const nh={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ai,await BT(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ai,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function BT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},br=new Cs("appCheck","AppCheck",HT);function $T(t){if(!xt(t).activated)throw br.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="firebase-app-check-database",WT=1,xl="firebase-app-check-store";let qi=null;function VT(){return qi||(qi=new Promise((t,e)=>{try{const n=indexedDB.open(jT,WT);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(br.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(xl,{keyPath:"compositeKey"})}}}catch(n){e(br.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),qi)}function KT(t,e){return zT(qT(t),e)}async function zT(t,e){const s=(await VT()).transaction(xl,"readwrite"),r=s.objectStore(xl).put({compositeKey:t,value:e});return new Promise((o,l)=>{r.onsuccess=a=>{o()},s.onerror=a=>{var c;l(br.create("storage-set",{originalErrorMessage:(c=a.target.error)===null||c===void 0?void 0:c.message}))}})}function qT(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new wi("@firebase/app-check");function sh(t,e){return Rd()?KT(t,e).catch(n=>{Ml.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT={error:"UNKNOWN_ERROR"};function YT(t){return no.encodeString(JSON.stringify(t),!1)}async function Ll(t,e=!1){const n=t.app;$T(n);const s=xt(n);let i=s.token,r;if(i&&!Ws(i)&&(s.token=void 0,i=void 0),!i){const a=await s.cachedTokenPromise;a&&(Ws(a)?i=a:await sh(n,void 0))}if(!e&&i&&Ws(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await xt(n).exchangeTokenPromise}catch(a){a.code==="appCheck/throttled"?Ml.warn(a.message):Ml.error(a),r=a}let l;return i?r?Ws(i)?l={token:i.token,internalError:r}:l=rh(r):(l={token:i.token},s.token=i,await sh(n,i)):l=rh(r),o&&QT(n,l),l}function XT(t,e,n,s){const{app:i}=t,r=xt(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Ws(r.token)){const l=r.token;Promise.resolve().then(()=>{n({token:l.token}),ih(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>ih(t))}function fp(t,e){const n=xt(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function ih(t){const{app:e}=t,n=xt(e);let s=n.tokenRefresher;s||(s=JT(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function JT(t){const{app:e}=t;return new UT(async()=>{const n=xt(e);let s;if(n.token?s=await Ll(t,!0):s=await Ll(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=xt(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},nh.RETRIAL_MIN_WAIT,nh.RETRIAL_MAX_WAIT)}function QT(t,e){const n=xt(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Ws(t){return t.expireTimeMillis-Date.now()>0}function rh(t){return{token:YT(GT),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=xt(this.app);for(const n of e)fp(this.app,n.next);return Promise.resolve()}}function e0(t,e){return new ZT(t,e)}function t0(t){return{getToken:e=>Ll(t,e),addTokenListener:e=>XT(t,"INTERNAL",e),removeTokenListener:e=>fp(t.app,e)}}const n0="@firebase/app-check",s0="0.6.4",i0="app-check",oh="app-check-internal";function r0(){Pt(new yt(i0,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return e0(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(oh).initialize()})),Pt(new yt(oh,t=>{const e=t.getProvider("app-check").getImmediate();return t0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Xe(n0,s0)}r0();var o0="firebase",l0="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe(o0,l0,"app");const dp=Symbol("firebaseApp");function pp(t){return Ay()&&nt(dp,null)||Pd(t)}const Gi=new WeakMap;function a0(t,e){if(!Gi.has(t)){const n=gf(!0);Gi.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Gi.delete(t)}}return Gi.get(t)}const gp=new WeakMap;function ZS(t){return gp.get(pp(t))}const Yi=new WeakMap;function _p(t){const e=pp(t);if(!Yi.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{Yi.set(e,r),n(r.value)}];Yi.set(e,i)}return Yi.get(e)}function c0(t){const e=_p(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function u0(t,e){const n=MT(e);ep(n,s=>{const i=_p();t.value=s,Array.isArray(i)&&i[1](t)})}const lh="@firebase/database",ah="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mp="";function h0(t){mp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ci(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new f0(e)}}catch{}return new d0},An=yp("localStorage"),Fl=yp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new wi("@firebase/database"),p0=function(){let t=1;return function(){return t++}}(),vp=function(t){const e=LE(t),n=new OE;n.update(e);const s=n.digest();return no.encodeByteArray(s)},Ri=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ri.apply(null,s):typeof s=="object"?e+=Re(s):e+=s,e+=" "}return e};let Mn=null,ch=!0;const g0=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(cs.logLevel=ne.VERBOSE,Mn=cs.log.bind(cs),e&&Fl.set("logging_enabled",!0)):typeof t=="function"?Mn=t:(Mn=null,Fl.remove("logging_enabled"))},ke=function(...t){if(ch===!0&&(ch=!1,Mn===null&&Fl.get("logging_enabled")===!0&&g0(!0)),Mn){const e=Ri.apply(null,t);Mn(e)}},Si=function(t){return function(...e){ke(t,...e)}},Ul=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ri(...t);cs.error(e)},Hn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ri(...t)}`;throw cs.error(e),new Error(e)},Je=function(...t){const e="FIREBASE WARNING: "+Ri(...t);cs.warn(e)},_0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ep=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},m0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vs="[MIN_NAME]",$n="[MAX_NAME]",Ss=function(t,e){if(t===e)return 0;if(t===vs||e===$n)return-1;if(e===vs||t===$n)return 1;{const n=uh(t),s=uh(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},y0=function(t,e){return t===e?0:t<e?-1:1},Fs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Re(e))},Ka=function(t){if(typeof t!="object"||t===null)return Re(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Re(e[s]),n+=":",n+=Ka(t[e[s]]);return n+="}",n},Ip=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function st(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wp=function(t){R(!Ep(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},v0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},E0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},I0=new RegExp("^-?(0*)\\d{1,10}$"),w0=-2147483648,T0=2147483647,uh=function(t){if(I0.test(t)){const e=Number(t);if(e>=w0&&e<=T0)return e}return null},Ai=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Je("Exception was thrown by user callback.",n),e},Math.floor(0))}},b0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Js=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Je(e)}}class Bl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="5",Tp="v",bp="s",Cp="r",Rp="f",Sp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ap="ls",kp="p",Hl="ac",Np="websocket",Op="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=An.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&An.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function A0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Pp(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let s;if(e===Np)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Op)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);A0(t)&&(n.ns=t.namespace);const i=[];return st(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(){this.counters_={}}incrementCounter(e,n=1){Xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return gE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo={},Xo={};function qa(t){const e=t.toString();return Yo[e]||(Yo[e]=new k0),Yo[e]}function N0(t,e){const n=t.toString();return Xo[n]||(Xo[n]=e()),Xo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ai(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="start",P0="close",D0="pLPCommand",x0="pRTLPCB",Dp="id",xp="pw",Mp="ser",M0="cb",L0="seg",F0="ts",U0="d",B0="dframe",Lp=1870,Fp=30,H0=Lp-Fp,$0=25e3,j0=3e4;class es{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Si(e),this.stats_=qa(n),this.urlFn=a=>(this.appCheckToken&&(a[Hl]=this.appCheckToken),Pp(n,Op,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new O0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(j0)),m0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ga((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hh)this.id=l,this.password=a;else if(o===P0)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[hh]="t",s[Mp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[M0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Tp]=za,this.transportSessionId&&(s[bp]=this.transportSessionId),this.lastSessionId&&(s[Ap]=this.lastSessionId),this.applicationId&&(s[kp]=this.applicationId),this.appCheckToken&&(s[Hl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sp.test(location.hostname)&&(s[Cp]=Rp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){es.forceAllow_=!0}static forceDisallow(){es.forceDisallow_=!0}static isAvailable(){return es.forceAllow_?!0:!es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!v0()&&!E0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ed(n),i=Ip(s,H0);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[B0]="t",s[Dp]=e,s[xp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ga{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=p0(),window[D0+this.uniqueCallbackIdentifier]=e,window[x0+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ga.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ke("frame writing exception"),l.stack&&ke(l.stack),ke(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Dp]=this.myID,e[xp]=this.myPW,e[Mp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fp+s.length<=Lp;){const o=this.pendingSegs.shift();s=s+"&"+L0+i+"="+o.seg+"&"+F0+i+"="+o.ts+"&"+U0+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor($0)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=16384,V0=45e3;let Cr=null;typeof MozWebSocket<"u"?Cr=MozWebSocket:typeof WebSocket<"u"&&(Cr=WebSocket);class ut{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Si(this.connId),this.stats_=qa(n),this.connURL=ut.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Tp]=za,typeof location<"u"&&location.hostname&&Sp.test(location.hostname)&&(o[Cp]=Rp),n&&(o[bp]=n),s&&(o[Ap]=s),i&&(o[Hl]=i),r&&(o[kp]=r),Pp(e,Np,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,An.set("previous_websocket_failure",!0);try{let s;Cd(),this.mySock=new Cr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ut.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Cr!==null&&!ut.forceDisallow_}static previouslyFailed(){return An.isInMemoryStorage||An.get("previous_websocket_failure")===!0}markConnectionHealthy(){An.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ci(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ip(n,W0);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(V0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ut.responsesRequiredToBeHealthy=2;ut.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[es,ut]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ut&&ut.isAvailable();let s=n&&!ut.previouslyFailed();if(e.webSocketOnly&&(n||Je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ut];else{const i=this.transports_=[];for(const r of di.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);di.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}di.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=6e4,z0=5e3,q0=10*1024,G0=100*1024,Jo="t",fh="d",Y0="s",dh="r",X0="e",ph="o",gh="a",_h="n",mh="p",J0="h";class Q0{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Si("c:"+this.id+":"),this.transportManager_=new di(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Js(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>G0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>q0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jo in e){const n=e[Jo];n===gh?this.upgradeIfSecondaryHealthy_():n===dh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ph&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fs("t",e),s=Fs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_h,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fs("t",e),s=Fs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fs(Jo,e);if(fh in e){const s=e[fh];if(n===J0){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===_h){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Y0?this.onConnectionShutdown_(s):n===dh?this.onReset_(s):n===X0?Ul("Server Error: "+s):n===ph?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ul("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),za!==s&&Je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Js(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(K0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Js(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(z0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(An.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Bp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ma()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Rr}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=32,vh=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function re(){return new ue("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pn(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function Hp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Z0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $p(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function Te(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ue(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function tt(t,e){const n=Y(t),s=Y(e);if(n===null)return e;if(n===s)return tt(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Wp(t,e){if(pn(t)!==pn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ft(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(pn(t)>pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class eb{constructor(e,n){this.errorPrefix_=n,this.parts_=$p(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=so(this.parts_[s]);Vp(this)}}function tb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=so(e),Vp(t)}function nb(t){const e=t.parts_.pop();t.byteLength_-=so(e),t.parts_.length>0&&(t.byteLength_-=1)}function Vp(t){if(t.byteLength_>vh)throw new Error(t.errorPrefix_+"has a key path longer than "+vh+" bytes ("+t.byteLength_+").");if(t.parts_.length>yh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yh+") or object contains a cycle "+bn(t))}function bn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends Bp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ya}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=1e3,sb=60*5*1e3,Eh=30*1e3,ib=1.3,rb=3e4,ob="server_kill",Ih=3;class Kt extends Up{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Kt.nextPersistentConnectionId_++,this.log_=Si("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Us,this.maxReconnectDelay_=sb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Cd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ya.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Rr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Re(r)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ai,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Kt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xt(e,"w")){const s=ms(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||NE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Eh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=kE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Re(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ul("Unrecognized action received from server: "+Re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rb&&(this.reconnectDelay_=Us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ib)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Kt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Q0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Je(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(ob)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Je(h),a())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rl(this.interruptReasons_)&&(this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ka(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ue(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ih&&(this.reconnectDelay_=Eh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ih&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+mp.replace(/\./g,"-")]=1,Ma()?e["framework.cordova"]=1:bd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Rr.getInstance().currentlyOnline();return Rl(this.interruptReasons_)&&e}}Kt.nextPersistentConnectionId_=0;Kt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new X(vs,e),i=new X(vs,n);return this.compare(s,i)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi;class Kp extends co{static get __EMPTY_NODE(){return Xi}static set __EMPTY_NODE(e){Xi=e}compare(e,n){return Ss(e.name,n.name)}isDefinedOn(e){throw bs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X($n,Xi)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,Xi)}toString(){return".key"}}const us=new Kp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??we.RED,this.left=i??Ke.EMPTY_NODE,this.right=r??Ke.EMPTY_NODE}copy(e,n,s,i,r){return new we(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class lb{copy(e,n,s,i,r){return this}insert(e,n,s){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ji(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ji(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ji(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ji(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new lb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(t,e){return Ss(t.name,e.name)}function Xa(t,e){return Ss(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l;function cb(t){$l=t}const zp=function(t){return typeof t=="number"?"number:"+wp(t):"string:"+t},qp=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xt(e,".sv"),"Priority must be a string or number.")}else R(t===$l||t.isEmpty(),"priority of unexpected type.");R(t===$l||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wh;class Ie{constructor(e,n=Ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qp(this.priorityNode_)}static set __childrenNodeConstructor(e){wh=e}static get __childrenNodeConstructor(){return wh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:Y(e)===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Y(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(R(s!==".priority"||pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wp(this.value_):e+=this.value_,this.lazyHash_=vp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ie.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ie.VALUE_TYPE_ORDER.indexOf(n),r=Ie.VALUE_TYPE_ORDER.indexOf(s);return R(i>=0,"Unknown leaf type: "+n),R(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gp,Yp;function ub(t){Gp=t}function hb(t){Yp=t}class fb extends co{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ss(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X($n,new Ie("[PRIORITY-POST]",Yp))}makePost(e,n){const s=Gp(e);return new X(n,new Ie("[PRIORITY-POST]",s))}toString(){return".priority"}}const De=new fb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=Math.log(2);class pb{constructor(e){const n=r=>parseInt(Math.log(r)/db,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sr=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new we(d,h.node,we.BLACK,null,null);{const g=parseInt(u/2,10)+a,m=i(a,g),T=i(g+1,c);return h=t[g],d=n?n(h):h,new we(d,h.node,we.BLACK,m,T)}},r=function(a){let c=null,u=null,h=t.length;const d=function(m,T){const k=h-m,N=h;h-=m;const U=i(k+1,N),P=t[k],B=n?n(P):P;g(new we(B,P.node,T,null,U))},g=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const T=a.nextBitIsOne(),k=Math.pow(2,a.count-(m+1));T?d(k,we.BLACK):(d(k,we.BLACK),d(k,we.RED))}return u},o=new pb(t.length),l=r(o);return new Ke(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo;const Jn={};class Wt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Jn&&De,"ChildrenNode.ts has not been loaded"),Qo=Qo||new Wt({".priority":Jn},{".priority":De}),Qo}get(e){const n=ms(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return Xt(this.indexSet_,e.toString())}addIndex(e,n){R(e!==us,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(X.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Sr(s,e.getCompare()):l=Jn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Wt(u,c)}addToIndexes(e,n){const s=mr(this.indexes_,(i,r)=>{const o=ms(this.indexSet_,r);if(R(o,"Missing index implementation for "+r),i===Jn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(X.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Sr(l,o.getCompare())}else return Jn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new X(e.name,l))),a.insert(e,e.node)}});return new Wt(s,this.indexSet_)}removeFromIndexes(e,n){const s=mr(this.indexes_,i=>{if(i===Jn)return i;{const r=n.get(e.name);return r?i.remove(new X(e.name,r)):i}});return new Wt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs;class ee{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&qp(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bs||(Bs=new ee(new Ke(Xa),null,Wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bs}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bs:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new X(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Bs:this.priorityNode_;return new ee(i,o,r)}}updateChild(e,n){const s=Y(e);if(s===null)return n;{R(Y(e)!==".priority"||pn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(De,(o,l)=>{n[o]=l.val(e),s++,r&&ee.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zp(this.getPriority().val())+":"),this.forEachChild(De,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":vp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new X(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ki?-1:0}withIndex(e){if(e===us||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===us||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(De),i=n.getIterator(De);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===us?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gb extends ee{constructor(){super(new Ke(Xa),ee.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const ki=new gb;Object.defineProperties(X,{MIN:{value:new X(vs,ee.EMPTY_NODE)},MAX:{value:new X($n,ki)}});Kp.__EMPTY_NODE=ee.EMPTY_NODE;Ie.__childrenNodeConstructor=ee;cb(ki);hb(ki);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=!0;function Ne(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ie(n,Ne(e))}if(!(t instanceof Array)&&_b){const n=[];let s=!1;if(st(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ne(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new X(o,a)))}}),n.length===0)return ee.EMPTY_NODE;const r=Sr(n,ab,o=>o.name,Xa);if(s){const o=Sr(n,De.getCompare());return new ee(r,Ne(e),new Wt({".priority":o},{".priority":De}))}else return new ee(r,Ne(e),Wt.Default)}else{let n=ee.EMPTY_NODE;return st(t,(s,i)=>{if(Xt(t,s)&&s.substring(0,1)!=="."){const r=Ne(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ne(e))}}ub(Ne);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb extends co{constructor(e){super(),this.indexPath_=e,R(!q(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ss(e.name,n.name):r}makePost(e,n){const s=Ne(e),i=ee.EMPTY_NODE.updateChild(this.indexPath_,s);return new X(n,i)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,ki);return new X($n,e)}toString(){return $p(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb extends co{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ss(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const s=Ne(e);return new X(n,s)}toString(){return".value"}}const vb=new yb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t){return{type:"value",snapshotNode:t}}function Ib(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function wb(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Th(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Tb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vs}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$n}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new Ja;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===vb?n="$value":t.index_===us?n="$key":(R(t.index_ instanceof mb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Re(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Re(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Re(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Re(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ch(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Up{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Si("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ar.getListenId_(e,s),l={};this.listens_[o]=l;const a=bh(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ms(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ar.getListenId_(e,n);delete this.listens_[s]}get(e){const n=bh(e._queryParams),s=e._path.toString(),i=new ai;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rs(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ci(l.responseText)}catch{Je("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Je("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){return{value:null,children:new Map}}function Xp(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Y(e);t.children.has(s)||t.children.set(s,kr());const i=t.children.get(s);e=ce(e),Xp(i,e,n)}}function jl(t,e,n){t.value!==null?n(e,t.value):Cb(t,(s,i)=>{const r=new ue(e.toString()+"/"+s);jl(i,r,n)})}function Cb(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&st(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=10*1e3,Sb=30*1e3,Ab=5*60*1e3;class kb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Rb(e);const s=Rh+(Sb-Rh)*Math.random();Js(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;st(e,(i,r)=>{r>0&&Xt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Js(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ab))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rt||(Rt={}));function Jp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Rt.ACK_USER_WRITE,this.source=Jp()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new Nr(re(),n,this.revert)}}else return R(Y(this.path)===e,"operationForChild called for unrelated child."),new Nr(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Rt.OVERWRITE}operationForChild(e){return q(this.path)?new jn(this.source,re(),this.snap.getImmediateChild(e)):new jn(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Rt.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new jn(this.source,re(),n.value):new pi(this.source,re(),n)}else return R(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pi(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Nb(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Tb(o.childName,o.snapshotNode))}),Hs(t,i,"child_removed",e,s,n),Hs(t,i,"child_added",e,s,n),Hs(t,i,"child_moved",r,s,n),Hs(t,i,"child_changed",e,s,n),Hs(t,i,"value",e,s,n),i}function Hs(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Pb(t,l,a)),o.forEach(l=>{const a=Ob(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Ob(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Pb(t,e,n){if(e.childName==null||n.childName==null)throw bs("Should only compare child_ events.");const s=new X(e.childName,e.snapshotNode),i=new X(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t,e){return{eventCache:t,serverCache:e}}function Qs(t,e,n,s){return eg(new Qa(e,n,s),t.serverCache)}function tg(t,e,n,s){return eg(t.eventCache,new Qa(e,n,s))}function Wl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Wn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;const Db=()=>(Zo||(Zo=new Ke(y0)),Zo);class ae{constructor(e,n=Db()){this.value=e,this.children=n}static fromObject(e){let n=new ae(null);return st(e,(s,i)=>{n=n.set(new ue(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:re(),value:this.value};if(q(e))return null;{const s=Y(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:Te(new ue(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=Y(e),s=this.children.get(n);return s!==null?s.subtree(ce(e)):new ae(null)}}set(e,n){if(q(e))return new ae(n,this.children);{const s=Y(e),r=(this.children.get(s)||new ae(null)).set(ce(e),n),o=this.children.insert(s,r);return new ae(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=Y(e),s=this.children.get(n);if(s){const i=s.remove(ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ae(null):new ae(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=Y(e),s=this.children.get(n);return s?s.get(ce(e)):null}}setTree(e,n){if(q(e))return n;{const s=Y(e),r=(this.children.get(s)||new ae(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ae(this.value,o)}}fold(e){return this.fold_(re(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Te(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,re(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=Y(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),Te(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,re(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=Y(e),r=this.children.get(i);return r?r.foreachOnPath_(ce(e),Te(n,i),s):new ae(null)}}foreach(e){this.foreach_(re(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Te(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new ae(null))}}function Zs(t,e,n){if(q(e))return new _t(new ae(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=tt(i,e);return r=r.updateChild(o,n),new _t(t.writeTree_.set(i,r))}else{const i=new ae(n),r=t.writeTree_.setTree(e,i);return new _t(r)}}}function Sh(t,e,n){let s=t;return st(n,(i,r)=>{s=Zs(s,Te(e,i),r)}),s}function Ah(t,e){if(q(e))return _t.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new _t(n)}}function Vl(t,e){return Kn(t,e)!=null}function Kn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tt(n.path,e)):null}function kh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(s,i)=>{e.push(new X(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new X(s,i.value))}),e}function fn(t,e){if(q(e))return t;{const n=Kn(t,e);return n!=null?new _t(new ae(n)):new _t(t.writeTree_.subtree(e))}}function Kl(t){return t.writeTree_.isEmpty()}function Es(t,e){return ng(re(),t.writeTree_,e)}function ng(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(R(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ng(Te(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Te(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e){return ag(e,t)}function xb(t,e,n,s,i){R(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zs(t.visibleWrites,e,n)),t.lastWriteId=s}function Mb(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Lb(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Fb(l,s.path)?i=!1:ft(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Ub(t),!0;if(s.snap)t.visibleWrites=Ah(t.visibleWrites,s.path);else{const l=s.children;st(l,a=>{t.visibleWrites=Ah(t.visibleWrites,Te(s.path,a))})}return!0}else return!1}function Fb(t,e){if(t.snap)return ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ft(Te(t.path,n),e))return!0;return!1}function Ub(t){t.visibleWrites=ig(t.allWrites,Bb,re()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Bb(t){return t.visible}function ig(t,e,n){let s=_t.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ft(n,o)?(l=tt(n,o),s=Zs(s,l,r.snap)):ft(o,n)&&(l=tt(o,n),s=Zs(s,re(),r.snap.getChild(l)));else if(r.children){if(ft(n,o))l=tt(n,o),s=Sh(s,l,r.children);else if(ft(o,n))if(l=tt(o,n),q(l))s=Sh(s,re(),r.children);else{const a=ms(r.children,Y(l));if(a){const c=a.getChild(ce(l));s=Zs(s,re(),c)}}}else throw bs("WriteRecord should have .snap or .children")}}return s}function rg(t,e,n,s,i){if(!s&&!i){const r=Kn(t.visibleWrites,e);if(r!=null)return r;{const o=fn(t.visibleWrites,e);if(Kl(o))return n;if(n==null&&!Vl(o,re()))return null;{const l=n||ee.EMPTY_NODE;return Es(o,l)}}}else{const r=fn(t.visibleWrites,e);if(!i&&Kl(r))return n;if(!i&&n==null&&!Vl(r,re()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ft(c.path,e)||ft(e,c.path))},l=ig(t.allWrites,o,e),a=n||ee.EMPTY_NODE;return Es(l,a)}}}function Hb(t,e,n){let s=ee.EMPTY_NODE;const i=Kn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(De,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=fn(t.visibleWrites,e);return n.forEachChild(De,(o,l)=>{const a=Es(fn(r,new ue(o)),l);s=s.updateImmediateChild(o,a)}),kh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=fn(t.visibleWrites,e);return kh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function $b(t,e,n,s,i){R(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Te(e,n);if(Vl(t.visibleWrites,r))return null;{const o=fn(t.visibleWrites,r);return Kl(o)?i.getChild(n):Es(o,i.getChild(n))}}function jb(t,e,n,s){const i=Te(e,n),r=Kn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=fn(t.visibleWrites,i);return Es(o,s.getNode().getImmediateChild(n))}else return null}function Wb(t,e){return Kn(t.visibleWrites,e)}function Vb(t,e,n,s,i,r,o){let l;const a=fn(t.visibleWrites,e),c=Kn(a,re());if(c!=null)l=c;else if(n!=null)l=Es(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function Kb(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function zl(t,e,n,s){return rg(t.writeTree,t.treePath,e,n,s)}function og(t,e){return Hb(t.writeTree,t.treePath,e)}function Nh(t,e,n,s){return $b(t.writeTree,t.treePath,e,n,s)}function Or(t,e){return Wb(t.writeTree,Te(t.treePath,e))}function zb(t,e,n,s,i,r){return Vb(t.writeTree,t.treePath,e,n,s,i,r)}function Za(t,e,n){return jb(t.writeTree,t.treePath,e,n)}function lg(t,e){return ag(Te(t.treePath,e),t.writeTree)}function ag(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Th(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,wb(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ib(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Th(s,e.snapshotNode,i.oldSnap));else throw bs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const cg=new Gb;class ec{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Qa(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Za(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wn(this.viewCache_),r=zb(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function Yb(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Xb(t,e,n,s,i){const r=new qb;let o,l;if(n.type===Rt.OVERWRITE){const c=n;c.source.fromUser?o=ql(t,e,c.path,c.snap,s,i,r):(R(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=Pr(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Rt.MERGE){const c=n;c.source.fromUser?o=Qb(t,e,c.path,c.children,s,i,r):(R(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Gl(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Rt.ACK_USER_WRITE){const c=n;c.revert?o=tC(t,e,c.path,s,i,r):o=Zb(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Rt.LISTEN_COMPLETE)o=eC(t,e,n.path,s,r);else throw bs("Unknown operation type: "+n.type);const a=r.getChanges();return Jb(e,o,a),{viewCache:o,changes:a}}function Jb(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Wl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Eb(Wl(e)))}}function ug(t,e,n,s,i,r){const o=e.eventCache;if(Or(s,n)!=null)return e;{let l,a;if(q(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Wn(e),u=c instanceof ee?c:ee.EMPTY_NODE,h=og(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=zl(s,Wn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Y(n);if(c===".priority"){R(pn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Nh(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ce(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Nh(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Za(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Qs(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function Pr(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=Y(n);if(!a.isCompleteForPath(n)&&pn(n)>1)return e;const m=ce(n),k=a.getNode().getImmediateChild(g).updateChild(m,s);g===".priority"?c=u.updatePriority(a.getNode(),k):c=u.updateChild(a.getNode(),g,k,m,cg,null)}const h=tg(e,c,a.isFullyInitialized()||q(n),u.filtersNodes()),d=new ec(i,h,r);return ug(t,h,n,i,d,l)}function ql(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new ec(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Qs(e,c,!0,t.filter.filtersNodes());else{const h=Y(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Qs(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ce(n),g=l.getNode().getImmediateChild(h);let m;if(q(d))m=s;else{const T=u.getCompleteChild(h);T!=null?Hp(d)===".priority"&&T.getChild(jp(d)).isEmpty()?m=T:m=T.updateChild(d,s):m=ee.EMPTY_NODE}if(g.equals(m))a=e;else{const T=t.filter.updateChild(l.getNode(),h,m,d,u,o);a=Qs(e,T,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Oh(t,e){return t.eventCache.isCompleteForChild(e)}function Qb(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=Te(n,a);Oh(e,Y(u))&&(l=ql(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=Te(n,a);Oh(e,Y(u))||(l=ql(t,l,u,c,i,r,o))}),l}function Ph(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Gl(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;q(n)?c=s:c=new ae(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),m=Ph(t,g,d);a=Pr(t,a,new ue(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const m=e.serverCache.getNode().getImmediateChild(h),T=Ph(t,m,d);a=Pr(t,a,new ue(h),T,i,r,o,l)}}),a}function Zb(t,e,n,s,i,r,o){if(Or(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Pr(t,e,n,a.getNode().getChild(n),i,r,l,o);if(q(n)){let c=new ae(null);return a.getNode().forEachChild(us,(u,h)=>{c=c.set(new ue(u),h)}),Gl(t,e,n,c,i,r,l,o)}else return e}else{let c=new ae(null);return s.foreach((u,h)=>{const d=Te(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Gl(t,e,n,c,i,r,l,o)}}function eC(t,e,n,s,i){const r=e.serverCache,o=tg(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return ug(t,o,n,s,cg,i)}function tC(t,e,n,s,i,r){let o;if(Or(s,n)!=null)return e;{const l=new ec(s,e,i),a=e.eventCache.getNode();let c;if(q(n)||Y(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=zl(s,Wn(e));else{const h=e.serverCache.getNode();R(h instanceof ee,"serverChildren would be complete if leaf node"),u=og(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=Y(n);let h=Za(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ce(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,ee.EMPTY_NODE,ce(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zl(s,Wn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Or(s,re())!=null,Qs(e,c,o,t.filter.filtersNodes())}}function nC(t,e){const n=Wn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function Dh(t,e,n,s){e.type===Rt.MERGE&&e.source.queryId!==null&&(R(Wn(t.viewCache_),"We should always have a full cache before handling merges"),R(Wl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Xb(t.processor_,i,e,n,s);return Yb(t.processor_,r.viewCache),R(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,sC(t,r.changes,r.viewCache.eventCache.getNode(),null)}function sC(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Nb(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xh;function iC(t){R(!xh,"__referenceConstructor has already been defined"),xh=t}function tc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return R(r!=null,"SyncTree gave us an op for an invalid query."),Dh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Dh(o,e,n,s));return r}}function nc(t,e){let n=null;for(const s of t.views.values())n=n||nC(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mh;function rC(t){R(!Mh,"__referenceConstructor has already been defined"),Mh=t}class Lh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=Kb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oC(t,e,n,s,i){return xb(t.pendingWriteTree_,e,n,s,i),i?ho(t,new jn(Jp(),e,n)):[]}function ts(t,e,n=!1){const s=Mb(t.pendingWriteTree_,e);if(Lb(t.pendingWriteTree_,e)){let r=new ae(null);return s.snap!=null?r=r.set(re(),!0):st(s.children,o=>{r=r.set(new ue(o),!0)}),ho(t,new Nr(s.path,r,n))}else return[]}function uo(t,e,n){return ho(t,new jn(Qp(),e,n))}function lC(t,e,n){const s=ae.fromObject(n);return ho(t,new pi(Qp(),e,s))}function aC(t,e,n,s){const i=pg(t,s);if(i!=null){const r=gg(i),o=r.path,l=r.queryId,a=tt(o,e),c=new jn(Zp(l),a,n);return _g(t,o,c)}else return[]}function cC(t,e,n,s){const i=pg(t,s);if(i){const r=gg(i),o=r.path,l=r.queryId,a=tt(o,e),c=ae.fromObject(n),u=new pi(Zp(l),a,c);return _g(t,o,u)}else return[]}function hg(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=tt(o,e),c=nc(l,a);if(c)return c});return rg(i,e,r,n,!0)}function ho(t,e){return fg(e,t.syncPointTree_,null,sg(t.pendingWriteTree_,re()))}function fg(t,e,n,s){if(q(t.path))return dg(t,e,n,s);{const i=e.get(re());n==null&&i!=null&&(n=nc(i,re()));let r=[];const o=Y(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=lg(s,o);r=r.concat(fg(l,a,c,u))}return i&&(r=r.concat(tc(i,t,s,n))),r}}function dg(t,e,n,s){const i=e.get(re());n==null&&i!=null&&(n=nc(i,re()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=lg(s,o),u=t.operationForChild(o);u&&(r=r.concat(dg(u,l,a,c)))}),i&&(r=r.concat(tc(i,t,s,n))),r}function pg(t,e){return t.tagToQueryMap.get(e)}function gg(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function _g(t,e,n){const s=t.syncPointTree_.get(e);R(s,"Missing sync point for query tag that we're tracking");const i=sg(t.pendingWriteTree_,e);return tc(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new sc(n)}node(){return this.node_}}class ic{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Te(this.path_,e);return new ic(this.syncTree_,n)}node(){return hg(this.syncTree_,this.path_)}}const uC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fh=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return hC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return fC(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},hC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},fC=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&R(!1,"Unexpected increment value: "+s);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},dC=function(t,e,n,s){return rc(e,new ic(n,t),s)},pC=function(t,e,n){return rc(t,new sc(e),n)};function rc(t,e,n){const s=t.getPriority().val(),i=Fh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Fh(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ie(l,Ne(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ie(i))),o.forEachChild(De,(l,a)=>{const c=rc(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function lc(t,e){let n=e instanceof ue?e:new ue(e),s=t,i=Y(n);for(;i!==null;){const r=ms(s.node.children,i)||{children:{},childCount:0};s=new oc(i,s,r),n=ce(n),i=Y(n)}return s}function As(t){return t.node.value}function mg(t,e){t.node.value=e,Yl(t)}function yg(t){return t.node.childCount>0}function gC(t){return As(t)===void 0&&!yg(t)}function fo(t,e){st(t.node.children,(n,s)=>{e(new oc(n,t,s))})}function vg(t,e,n,s){n&&!s&&e(t),fo(t,i=>{vg(i,e,!0,s)}),n&&s&&e(t)}function _C(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ni(t){return new ue(t.parent===null?t.name:Ni(t.parent)+"/"+t.name)}function Yl(t){t.parent!==null&&mC(t.parent,t.name,t)}function mC(t,e,n){const s=gC(n),i=Xt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Yl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Yl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=/[\[\].#$\/\u0000-\u001F\u007F]/,vC=/[\[\].#$\u0000-\u001F\u007F]/,el=10*1024*1024,Eg=function(t){return typeof t=="string"&&t.length!==0&&!yC.test(t)},EC=function(t){return typeof t=="string"&&t.length!==0&&!vC.test(t)},IC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),EC(t)},Ig=function(t,e,n){const s=n instanceof ue?new eb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+bn(s));if(typeof e=="function")throw new Error(t+"contains a function "+bn(s)+" with contents = "+e.toString());if(Ep(e))throw new Error(t+"contains "+e.toString()+" "+bn(s));if(typeof e=="string"&&e.length>el/3&&so(e)>el)throw new Error(t+"contains a string greater than "+el+" utf8 bytes "+bn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(st(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Eg(o)))throw new Error(t+" contains an invalid key ("+o+") "+bn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tb(s,o),Ig(t,l,s),nb(s)}),i&&r)throw new Error(t+' contains ".value" child '+bn(s)+" in addition to actual children.")}},wC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Eg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!IC(n))throw new Error(ME(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bC(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Wp(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function zn(t,e,n){bC(t,n),CC(t,s=>ft(s,e)||ft(e,s))}function CC(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(RC(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function RC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Mn&&ke("event: "+n.toString()),Ai(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="repo_interrupt",AC=25;class kC{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kr(),this.transactionQueueTree_=new oc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function NC(t,e,n){if(t.stats_=qa(t.repoInfo_),t.forceRestClient_||b0())t.server_=new Ar(t.repoInfo_,(s,i,r,o)=>{Uh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Bh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Re(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Kt(t.repoInfo_,e,(s,i,r,o)=>{Uh(t,s,i,r,o)},s=>{Bh(t,s)},s=>{PC(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=N0(t.repoInfo_,()=>new kb(t.stats_,t.server_)),t.infoData_=new bb,t.infoSyncTree_=new Lh({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=uo(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ac(t,"connected",!1),t.serverSyncTree_=new Lh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);zn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function OC(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function wg(t){return uC({timestamp:OC(t)})}function Uh(t,e,n,s,i){t.dataUpdateCount++;const r=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=mr(n,c=>Ne(c));o=cC(t.serverSyncTree_,r,a,i)}else{const a=Ne(n);o=aC(t.serverSyncTree_,r,a,i)}else if(s){const a=mr(n,c=>Ne(c));o=lC(t.serverSyncTree_,r,a)}else{const a=Ne(n);o=uo(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=uc(t,r)),zn(t.eventQueue_,l,o)}function Bh(t,e){ac(t,"connected",e),e===!1&&xC(t)}function PC(t,e){st(e,(n,s)=>{ac(t,n,s)})}function ac(t,e,n){const s=new ue("/.info/"+e),i=Ne(n);t.infoData_.updateSnapshot(s,i);const r=uo(t.infoSyncTree_,s,i);zn(t.eventQueue_,s,r)}function DC(t){return t.nextWriteId_++}function xC(t){Tg(t,"onDisconnectEvents");const e=wg(t),n=kr();jl(t.onDisconnect_,re(),(i,r)=>{const o=dC(i,r,t.serverSyncTree_,e);Xp(n,i,o)});let s=[];jl(n,re(),(i,r)=>{s=s.concat(uo(t.serverSyncTree_,i,r));const o=UC(t,i);uc(t,o)}),t.onDisconnect_=kr(),zn(t.eventQueue_,re(),s)}function MC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(SC)}function Tg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function bg(t,e,n){return hg(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function cc(t,e=t.transactionQueueTree_){if(e||po(t,e),As(e)){const n=Rg(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&LC(t,Ni(e),n)}else yg(e)&&fo(e,n=>{cc(t,n)})}function LC(t,e,n){const s=n.map(c=>c.currentWriteId),i=bg(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];R(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=tt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Tg(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ts(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();po(t,lc(t.transactionQueueTree_,e)),cc(t,t.transactionQueueTree_),zn(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ai(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Je("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}uc(t,e)}},o)}function uc(t,e){const n=Cg(t,e),s=Ni(n),i=Rg(t,n);return FC(t,i,s),s}function FC(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=tt(n,a.path);let u=!1,h;if(R(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(ts(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=AC)u=!0,h="maxretry",i=i.concat(ts(t.serverSyncTree_,a.currentWriteId,!0));else{const d=bg(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){Ig("transaction failed: Data returned ",g,a.path);let m=Ne(g);typeof g=="object"&&g!=null&&Xt(g,".priority")||(m=m.updatePriority(d.getPriority()));const k=a.currentWriteId,N=wg(t),U=pC(m,d,N);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=U,a.currentWriteId=DC(t),o.splice(o.indexOf(k),1),i=i.concat(oC(t.serverSyncTree_,a.path,U,a.currentWriteId,a.applyLocally)),i=i.concat(ts(t.serverSyncTree_,k,!0))}else u=!0,h="nodata",i=i.concat(ts(t.serverSyncTree_,a.currentWriteId,!0))}zn(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}po(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Ai(s[l]);cc(t,t.transactionQueueTree_)}function Cg(t,e){let n,s=t.transactionQueueTree_;for(n=Y(e);n!==null&&As(s)===void 0;)s=lc(s,n),e=ce(e),n=Y(e);return s}function Rg(t,e){const n=[];return Sg(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Sg(t,e,n){const s=As(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);fo(e,i=>{Sg(t,i,n)})}function po(t,e){const n=As(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,mg(e,n.length>0?n:void 0)}fo(e,s=>{po(t,s)})}function UC(t,e){const n=Ni(Cg(t,e)),s=lc(t.transactionQueueTree_,e);return _C(s,i=>{tl(t,i)}),tl(t,s),vg(s,i=>{tl(t,i)}),n}function tl(t,e){const n=As(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ts(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?mg(e,void 0):n.length=r+1,zn(t.eventQueue_,Ni(e),i);for(let o=0;o<s.length;o++)Ai(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function HC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Hh=function(t,e){const n=$C(t),s=n.namespace;n.domain==="firebase.com"&&Hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new S0(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ue(n.pathString)}},$C=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=BC(t.substring(u,h)));const d=HC(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:Hp(this._path)}get ref(){return new ks(this._repo,this._path)}get _queryIdentifier(){const e=Ch(this._queryParams),n=Ka(e);return n==="{}"?"default":n}get _queryObject(){return Ch(this._queryParams)}isEqual(e){if(e=gn(e),!(e instanceof hc))return!1;const n=this._repo===e._repo,s=Wp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Z0(this._path)}}class ks extends hc{constructor(e,n){super(e,n,new Ja,!1)}get parent(){const e=jp(this._path);return e===null?null:new ks(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}iC(ks);rC(ks);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC="FIREBASE_DATABASE_EMULATOR_HOST",Xl={};let WC=!1;function VC(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Hh(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[jC]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Hh(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Bl(Bl.OWNER):new R0(t.name,t.options,e);wC("Invalid Firebase Database URL",o),q(o.path)||Hn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=zC(l,t,u,new C0(t.name,n));return new qC(h,t)}function KC(t,e){const n=Xl[e];(!n||n[t.key]!==t)&&Hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),MC(t),delete n[t.key]}function zC(t,e,n,s){let i=Xl[e.name];i||(i={},Xl[e.name]=i);let r=i[t.toURLString()];return r&&Hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new kC(t,WC,n,s),i[t.toURLString()]=r,r}class qC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(NC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ks(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Hn("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){h0(Vn),Pt(new yt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return VC(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Xe(lh,ah,t),Xe(lh,ah,"esm2017")}Kt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};GC();var YC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,fc=fc||{},$=YC||self;function Dr(){}function go(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Oi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function XC(t){return Object.prototype.hasOwnProperty.call(t,nl)&&t[nl]||(t[nl]=++JC)}var nl="closure_uid_"+(1e9*Math.random()>>>0),JC=0;function QC(t,e,n){return t.call.apply(t.bind,arguments)}function ZC(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xe=QC:xe=ZC,xe.apply(null,arguments)}function Qi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ae(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[i].apply(s,o)}}function _n(){this.s=this.s,this.o=this.o}var eR=0;_n.prototype.s=!1;_n.prototype.na=function(){!this.s&&(this.s=!0,this.M(),eR!=0)&&XC(this)};_n.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ag=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function $h(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(go(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Me(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var tR=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",Dr,e),$.removeEventListener("test",Dr,e)}catch{}return t}();function xr(t){return/^[\s\xa0]*$/.test(t)}var jh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function sl(t,e){return t<e?-1:t>e?1:0}function _o(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function Ct(t){return _o().indexOf(t)!=-1}function pc(t){return pc[" "](t),t}pc[" "]=Dr;function nR(t){var e=rR;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var sR=Ct("Opera"),gi=Ct("Trident")||Ct("MSIE"),kg=Ct("Edge"),Jl=kg||gi,Ng=Ct("Gecko")&&!(_o().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge"))&&!(Ct("Trident")||Ct("MSIE"))&&!Ct("Edge"),iR=_o().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge");function Og(){var t=$.document;return t?t.documentMode:void 0}var Ql;e:{var il="",rl=function(){var t=_o();if(Ng)return/rv:([^\);]+)(\)|;)/.exec(t);if(kg)return/Edge\/([\d\.]+)/.exec(t);if(gi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(iR)return/WebKit\/(\S+)/.exec(t);if(sR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(rl&&(il=rl?rl[1]:""),gi){var ol=Og();if(ol!=null&&ol>parseFloat(il)){Ql=String(ol);break e}}Ql=il}var rR={};function oR(){return nR(function(){let t=0;const e=jh(String(Ql)).split("."),n=jh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=sl(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||sl(i[2].length==0,r[2].length==0)||sl(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}$.document&&gi&&Og();function _i(t,e){if(Me.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ng){e:{try{pc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:lR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_i.X.h.call(this)}}Ae(_i,Me);var lR={2:"touch",3:"pen",4:"mouse"};_i.prototype.h=function(){_i.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pi="closure_listenable_"+(1e6*Math.random()|0),aR=0;function cR(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++aR,this.ba=this.ea=!1}function mo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function gc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Pg(t){const e={};for(const n in t)e[n]=t[n];return e}const Wh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dg(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Wh.length;r++)n=Wh[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function yo(t){this.src=t,this.g={},this.h=0}yo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ea(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new cR(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Zl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Ag(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(mo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ea(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var _c="closure_lm_"+(1e6*Math.random()|0),ll={};function xg(t,e,n,s,i){if(s&&s.once)return Lg(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)xg(t,e[r],n,s,i);return null}return n=vc(n),t&&t[Pi]?t.N(e,n,Oi(s)?!!s.capture:!!s,i):Mg(t,e,n,!1,s,i)}function Mg(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Oi(i)?!!i.capture:!!i,l=yc(t);if(l||(t[_c]=l=new yo(t)),n=l.add(e,n,s,o,r),n.proxy)return n;if(s=uR(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)tR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ug(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uR(){function t(n){return e.call(t.src,t.listener,n)}const e=hR;return t}function Lg(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Lg(t,e[r],n,s,i);return null}return n=vc(n),t&&t[Pi]?t.O(e,n,Oi(s)?!!s.capture:!!s,i):Mg(t,e,n,!0,s,i)}function Fg(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Fg(t,e[r],n,s,i);else s=Oi(s)?!!s.capture:!!s,n=vc(n),t&&t[Pi]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ea(r,n,s,i),-1<n&&(mo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=yc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ea(e,n,s,i)),(n=-1<t?e[t]:null)&&mc(n))}function mc(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Pi])Zl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ug(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=yc(e))?(Zl(n,t),n.h==0&&(n.src=null,e[_c]=null)):mo(t)}}}function Ug(t){return t in ll?ll[t]:ll[t]="on"+t}function hR(t,e){if(t.ba)t=!0;else{e=new _i(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&mc(t),t=n.call(s,e)}return t}function yc(t){return t=t[_c],t instanceof yo?t:null}var al="__closure_events_fn_"+(1e9*Math.random()>>>0);function vc(t){return typeof t=="function"?t:(t[al]||(t[al]=function(e){return t.handleEvent(e)}),t[al])}function Ce(){_n.call(this),this.i=new yo(this),this.P=this,this.I=null}Ae(Ce,_n);Ce.prototype[Pi]=!0;Ce.prototype.removeEventListener=function(t,e,n,s){Fg(this,t,e,n,s)};function Se(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Me(e,t);else if(e instanceof Me)e.target=e.target||t;else{var i=e;e=new Me(s,t),Dg(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Zi(o,s,!0,e)&&i}if(o=e.g=t,i=Zi(o,s,!0,e)&&i,i=Zi(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Zi(o,s,!1,e)&&i}Ce.prototype.M=function(){if(Ce.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)mo(n[s]);delete t.g[e],t.h--}}this.I=null};Ce.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ce.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Zi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var l=o.listener,a=o.ha||o.src;o.ea&&Zl(t.i,o),i=l.call(a,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ec=$.JSON.stringify;function fR(){var t=$g;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class dR{constructor(){this.h=this.g=null}add(e,n){const s=Bg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Bg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new pR,t=>t.reset());class pR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function gR(t){$.setTimeout(()=>{throw t},0)}function Hg(t,e){ta||_R(),na||(ta(),na=!0),$g.add(t,e)}var ta;function _R(){var t=$.Promise.resolve(void 0);ta=function(){t.then(mR)}}var na=!1,$g=new dR;function mR(){for(var t;t=fR();){try{t.h.call(t.g)}catch(n){gR(n)}var e=Bg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}na=!1}function vo(t,e){Ce.call(this),this.h=t||1,this.g=e||$,this.j=xe(this.lb,this),this.l=Date.now()}Ae(vo,Ce);x=vo.prototype;x.ca=!1;x.R=null;x.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(Ic(this),this.start()))}};x.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ic(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}x.M=function(){vo.X.M.call(this),Ic(this),delete this.g};function wc(t,e,n){if(typeof t=="function")n&&(t=xe(t,n));else if(t&&typeof t.handleEvent=="function")t=xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function jg(t){t.g=wc(()=>{t.g=null,t.i&&(t.i=!1,jg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class yR extends _n{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:jg(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(t){_n.call(this),this.h=t,this.g={}}Ae(mi,_n);var Vh=[];function Wg(t,e,n,s){Array.isArray(n)||(n&&(Vh[0]=n.toString()),n=Vh);for(var i=0;i<n.length;i++){var r=xg(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Vg(t){gc(t.g,function(e,n){this.g.hasOwnProperty(n)&&mc(e)},t),t.g={}}mi.prototype.M=function(){mi.X.M.call(this),Vg(this)};mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Eo(){this.g=!0}Eo.prototype.Aa=function(){this.g=!1};function vR(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",l=r.split("&"),a=0;a<l.length;a++){var c=l[a].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ER(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ns(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+wR(t,n)+(s?" "+s:"")})}function IR(t,e){t.info(function(){return"TIMEOUT: "+e})}Eo.prototype.info=function(){};function wR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ec(n)}catch{return e}}var Ns={},Kh=null;function Tc(){return Kh=Kh||new Ce}Ns.Pa="serverreachability";function Kg(t){Me.call(this,Ns.Pa,t)}Ae(Kg,Me);function yi(t){const e=Tc();Se(e,new Kg(e))}Ns.STAT_EVENT="statevent";function zg(t,e){Me.call(this,Ns.STAT_EVENT,t),this.stat=e}Ae(zg,Me);function He(t){const e=Tc();Se(e,new zg(e,t))}Ns.Qa="timingevent";function qg(t,e){Me.call(this,Ns.Qa,t),this.size=e}Ae(qg,Me);function Di(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var bc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},TR={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Cc(){}Cc.prototype.h=null;function zh(t){return t.h||(t.h=t.i())}function bR(){}var xi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Rc(){Me.call(this,"d")}Ae(Rc,Me);function Sc(){Me.call(this,"c")}Ae(Sc,Me);var sa;function Io(){}Ae(Io,Cc);Io.prototype.g=function(){return new XMLHttpRequest};Io.prototype.i=function(){return{}};sa=new Io;function Mi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new mi(this),this.O=CR,t=Jl?125:void 0,this.T=new vo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Gg}function Gg(){this.i=null,this.g="",this.h=!1}var CR=45e3,ia={},Mr={};x=Mi.prototype;x.setTimeout=function(t){this.O=t};function ra(t,e,n){t.K=1,t.v=To(Gt(e)),t.s=n,t.P=!0,Yg(t,null)}function Yg(t,e){t.F=Date.now(),Li(t),t.A=Gt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),s_(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Gg,t.g=b_(t.l,n?e:null,!t.s),0<t.N&&(t.L=new yR(xe(t.La,t,t.g),t.N)),Wg(t.S,t.g,"readystatechange",t.ib),e=t.H?Pg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),yi(),vR(t.j,t.u,t.A,t.m,t.U,t.s)}x.ib=function(t){t=t.target;const e=this.L;e&&Vt(t)==3?e.l():this.La(t)};x.La=function(t){try{if(t==this.g)e:{const u=Vt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Jl||this.g&&(this.h.h||this.g.fa()||Xh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?yi(3):yi(2)),wo(this);var n=this.g.aa();this.Y=n;t:if(Xg(this)){var s=Xh(this.g);t="";var i=s.length,r=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kn(this),ei(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ER(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xr(l)){var c=l;break t}}c=null}if(n=c)ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,oa(this,n);else{this.i=!1,this.o=3,He(12),kn(this),ei(this);break e}}this.P?(Jg(this,u,o),Jl&&this.i&&u==3&&(Wg(this.S,this.T,"tick",this.hb),this.T.start())):(ns(this.j,this.m,o,null),oa(this,o)),u==4&&kn(this),this.i&&!this.I&&(u==4?E_(this.l,this):(this.i=!1,Li(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,He(12)):(this.o=0,He(13)),kn(this),ei(this)}}}catch{}finally{}};function Xg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Jg(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=RR(t,n),i==Mr){e==4&&(t.o=4,He(14),s=!1),ns(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ia){t.o=4,He(15),ns(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ns(t.j,t.m,i,null),oa(t,i);Xg(t)&&i!=Mr&&i!=ia&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,He(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),xc(e),e.K=!0,He(11))):(ns(t.j,t.m,n,"[Invalid Chunked Response]"),kn(t),ei(t))}x.hb=function(){if(this.g){var t=Vt(this.g),e=this.g.fa();this.C<e.length&&(wo(this),Jg(this,t,e),this.i&&t!=4&&Li(this))}};function RR(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Mr:(n=Number(e.substring(n,s)),isNaN(n)?ia:(s+=1,s+n>e.length?Mr:(e=e.substr(s,n),t.C=s+n,e)))}x.cancel=function(){this.I=!0,kn(this)};function Li(t){t.V=Date.now()+t.O,Qg(t,t.O)}function Qg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Di(xe(t.gb,t),e)}function wo(t){t.B&&($.clearTimeout(t.B),t.B=null)}x.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(IR(this.j,this.A),this.K!=2&&(yi(),He(17)),kn(this),this.o=2,ei(this)):Qg(this,this.V-t)};function ei(t){t.l.G==0||t.I||E_(t.l,t)}function kn(t){wo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ic(t.T),Vg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function oa(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||la(n.h,t))){if(!t.J&&la(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ur(n),So(n);else break e;Dc(n),He(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Di(xe(n.cb,n),6e3));if(1>=o_(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Nn(n,11)}else if((t.J||n.g==t)&&Ur(n),!xr(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ac(r,r.h),r.h=null))}if(s.D){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.za=T,de(s.F,s.D,T))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=T_(s,s.H?s.ka:null,s.V),o.J){l_(s.h,o);var l=o,a=s.J;a&&l.setTimeout(a),l.B&&(wo(l),Li(l)),s.g=o}else y_(s);0<n.i.length&&Ao(n)}else c[0]!="stop"&&c[0]!="close"||Nn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Nn(n,7):Pc(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}yi(4)}catch{}}function SR(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(go(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function AR(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(go(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Zg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(go(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=AR(t),s=SR(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var e_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ln(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ln){this.h=e!==void 0?e:t.h,Lr(this,t.j),this.s=t.s,this.g=t.g,Fr(this,t.m),this.l=t.l,e=t.i;var n=new vi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qh(this,n),this.o=t.o}else t&&(n=String(t).match(e_))?(this.h=!!e,Lr(this,n[1]||"",!0),this.s=Vs(n[2]||""),this.g=Vs(n[3]||"",!0),Fr(this,n[4]),this.l=Vs(n[5]||"",!0),qh(this,n[6]||"",!0),this.o=Vs(n[7]||"")):(this.h=!!e,this.i=new vi(null,this.h))}Ln.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ks(e,Gh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ks(e,Gh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ks(n,n.charAt(0)=="/"?PR:OR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ks(n,xR)),t.join("")};function Gt(t){return new Ln(t)}function Lr(t,e,n){t.j=n?Vs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qh(t,e,n){e instanceof vi?(t.i=e,MR(t.i,t.h)):(n||(e=Ks(e,DR)),t.i=new vi(e,t.h))}function de(t,e,n){t.i.set(e,n)}function To(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,NR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function NR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gh=/[#\/\?@]/g,OR=/[#\?:]/g,PR=/[#\?]/g,DR=/[#\?@]/g,xR=/#/g;function vi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function mn(t){t.g||(t.g=new Map,t.h=0,t.i&&kR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=vi.prototype;x.add=function(t,e){mn(this),this.i=null,t=Os(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function t_(t,e){mn(t),e=Os(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function n_(t,e){return mn(t),e=Os(t,e),t.g.has(e)}x.forEach=function(t,e){mn(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};x.oa=function(){mn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};x.W=function(t){mn(this);let e=[];if(typeof t=="string")n_(this,t)&&(e=e.concat(this.g.get(Os(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return mn(this),this.i=null,t=Os(this,t),n_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function s_(t,e,n){t_(t,e),0<n.length&&(t.i=null,t.g.set(Os(t,e),dc(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Os(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function MR(t,e){e&&!t.j&&(mn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(t_(this,s),s_(this,i,n))},t)),t.j=e}var LR=class{constructor(t,e){this.h=t,this.g=e}};function i_(t){this.l=t||FR,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ga&&$.g.Ga()&&$.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var FR=10;function r_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function o_(t){return t.h?1:t.g?t.g.size:0}function la(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ac(t,e){t.g?t.g.add(e):t.h=e}function l_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}i_.prototype.cancel=function(){if(this.i=a_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function a_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return dc(t.i)}function kc(){}kc.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};kc.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function UR(){this.g=new kc}function BR(t,e,n){const s=n||"";try{Zg(t,function(i,r){let o=i;Oi(i)&&(o=Ec(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function HR(t,e){const n=new Eo;if($.Image){const s=new Image;s.onload=Qi(er,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Qi(er,n,s,"TestLoadImage: error",!1,e),s.onabort=Qi(er,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Qi(er,n,s,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function er(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function bo(t){this.l=t.ac||null,this.j=t.jb||!1}Ae(bo,Cc);bo.prototype.g=function(){return new Co(this.l,this.j)};bo.prototype.i=function(t){return function(){return t}}({});function Co(t,e){Ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(Co,Ce);var Nc=0;x=Co.prototype;x.open=function(t,e){if(this.readyState!=Nc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ei(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fi(this)),this.readyState=Nc};x.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;c_(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function c_(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}x.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fi(this):Ei(this),this.readyState==3&&c_(this)}};x.Va=function(t){this.g&&(this.response=this.responseText=t,Fi(this))};x.Ua=function(t){this.g&&(this.response=t,Fi(this))};x.ga=function(){this.g&&Fi(this)};function Fi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ei(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ei(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $R=$.JSON.parse;function ye(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=u_,this.K=this.L=!1}Ae(ye,Ce);var u_="",jR=/^https?$/i,WR=["POST","PUT"];x=ye.prototype;x.Ka=function(t){this.L=t};x.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():sa.g(),this.C=this.u?zh(this.u):zh(sa),this.g.onreadystatechange=xe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Yh(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=Ag(WR,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{d_(this),0<this.B&&((this.K=VR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xe(this.qa,this)):this.A=wc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Yh(this,r)}};function VR(t){return gi&&oR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.qa=function(){typeof fc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))};function Yh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,h_(t),Ro(t)}function h_(t){t.D||(t.D=!0,Se(t,"complete"),Se(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Se(this,"complete"),Se(this,"abort"),Ro(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ro(this,!0)),ye.X.M.call(this)};x.Ha=function(){this.s||(this.F||this.v||this.l?f_(this):this.fb())};x.fb=function(){f_(this)};function f_(t){if(t.h&&typeof fc<"u"&&(!t.C[1]||Vt(t)!=4||t.aa()!=2)){if(t.v&&Vt(t)==4)wc(t.Ha,0,t);else if(Se(t,"readystatechange"),Vt(t)==4){t.h=!1;try{const l=t.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=l===0){var i=String(t.H).match(e_)[1]||null;if(!i&&$.self&&$.self.location){var r=$.self.location.protocol;i=r.substr(0,r.length-1)}s=!jR.test(i?i.toLowerCase():"")}n=s}if(n)Se(t,"complete"),Se(t,"success");else{t.m=6;try{var o=2<Vt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",h_(t)}}finally{Ro(t)}}}}function Ro(t,e){if(t.g){d_(t);const n=t.g,s=t.C[0]?Dr:null;t.g=null,t.C=null,e||Se(t,"ready");try{n.onreadystatechange=s}catch{}}}function d_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function Vt(t){return t.g?t.g.readyState:0}x.aa=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}};x.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$R(e)}};function Xh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case u_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Ea=function(){return this.m};x.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function p_(t){let e="";return gc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Oc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=p_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function $s(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function g_(t){this.Ca=0,this.i=[],this.j=new Eo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=$s("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=$s("baseRetryDelayMs",5e3,t),this.bb=$s("retryDelaySeedMs",1e4,t),this.$a=$s("forwardChannelMaxRetries",2,t),this.ta=$s("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new i_(t&&t.concurrentRequestLimit),this.Fa=new UR,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}x=g_.prototype;x.ma=8;x.G=1;function Pc(t){if(__(t),t.G==3){var e=t.U++,n=Gt(t.F);de(n,"SID",t.I),de(n,"RID",e),de(n,"TYPE","terminate"),Ui(t,n),e=new Mi(t,t.j,e,void 0),e.K=2,e.v=To(Gt(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=b_(e.l,null),e.g.da(e.v)),e.F=Date.now(),Li(e)}w_(t)}function So(t){t.g&&(xc(t),t.g.cancel(),t.g=null)}function __(t){So(t),t.u&&($.clearTimeout(t.u),t.u=null),Ur(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Ao(t){r_(t.h)||t.m||(t.m=!0,Hg(t.Ja,t),t.C=0)}function KR(t,e){return o_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Di(xe(t.Ja,t,e),I_(t,t.C)),t.C++,!0)}x.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Mi(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Pg(r),Dg(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=m_(this,i,e),n=Gt(this.F),de(n,"RID",t),de(n,"CVER",22),this.D&&de(n,"X-HTTP-Session-Id",this.D),Ui(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(p_(r)))+"&"+e:this.o&&Oc(n,this.o,r)),Ac(this.h,i),this.Ya&&de(n,"TYPE","init"),this.O?(de(n,"$req",e),de(n,"SID","null"),i.Z=!0,ra(i,n,null)):ra(i,n,e),this.G=2}}else this.G==3&&(t?Jh(this,t):this.i.length==0||r_(this.h)||Jh(this))};function Jh(t,e){var n;e?n=e.m:n=t.U++;const s=Gt(t.F);de(s,"SID",t.I),de(s,"RID",n),de(s,"AID",t.T),Ui(t,s),t.o&&t.s&&Oc(s,t.o,t.s),n=new Mi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=m_(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ac(t.h,n),ra(n,s,e)}function Ui(t,e){t.ia&&gc(t.ia,function(n,s){de(e,s,n)}),t.l&&Zg({},function(n,s){de(e,s,n)})}function m_(t,e,n){n=Math.min(t.i.length,n);var s=t.l?xe(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let l=!0;for(let a=0;a<n;a++){let c=i[a].h;const u=i[a].g;if(c-=r,0>c)r=Math.max(0,i[a].h-100),l=!1;else try{BR(u,o,"req"+c+"_")}catch{s&&s(u)}}if(l){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function y_(t){t.g||t.u||(t.Z=1,Hg(t.Ia,t),t.A=0)}function Dc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Di(xe(t.Ia,t),I_(t,t.A)),t.A++,!0)}x.Ia=function(){if(this.u=null,v_(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Di(xe(this.eb,this),t)}};x.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,He(10),So(this),v_(this))};function xc(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function v_(t){t.g=new Mi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Gt(t.sa);de(e,"RID","rpc"),de(e,"SID",t.I),de(e,"CI",t.L?"0":"1"),de(e,"AID",t.T),de(e,"TYPE","xmlhttp"),Ui(t,e),t.o&&t.s&&Oc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=To(Gt(e)),n.s=null,n.P=!0,Yg(n,t)}x.cb=function(){this.v!=null&&(this.v=null,So(this),Dc(this),He(19))};function Ur(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function E_(t,e){var n=null;if(t.g==e){Ur(t),xc(t),t.g=null;var s=2}else if(la(t.h,e))n=e.D,l_(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Tc(),Se(s,new qg(s,n)),Ao(t)}else y_(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&KR(t,e)||s==2&&Dc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Nn(t,5);break;case 4:Nn(t,10);break;case 3:Nn(t,6);break;default:Nn(t,2)}}}function I_(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Nn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=xe(t.kb,t);n||(n=new Ln("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Lr(n,"https"),To(n)),HR(n.toString(),s)}else He(2);t.G=0,t.l&&t.l.va(e),w_(t),__(t)}x.kb=function(t){t?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function w_(t){if(t.G=0,t.la=[],t.l){const e=a_(t.h);(e.length!=0||t.i.length!=0)&&($h(t.la,e),$h(t.la,t.i),t.h.i.length=0,dc(t.i),t.i.length=0),t.l.ua()}}function T_(t,e,n){var s=n instanceof Ln?Gt(n):new Ln(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Fr(s,s.m);else{var i=$.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ln(null,void 0);s&&Lr(r,s),e&&(r.g=e),i&&Fr(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&de(s,n,e),de(s,"VER",t.ma),Ui(t,s),s}function b_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ye(new bo({jb:!0})):new ye(t.ra),e.Ka(t.H),e}function C_(){}x=C_.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Ra=function(){};function it(t,e){Ce.call(this),this.g=new g_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!xr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ps(this)}Ae(it,Ce);it.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;He(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=T_(t,null,t.V),Ao(t)};it.prototype.close=function(){Pc(this.g)};it.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ec(t),t=n);e.i.push(new LR(e.ab++,t)),e.G==3&&Ao(e)};it.prototype.M=function(){this.g.l=null,delete this.j,Pc(this.g),delete this.g,it.X.M.call(this)};function R_(t){Rc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ae(R_,Rc);function S_(){Sc.call(this),this.status=1}Ae(S_,Sc);function Ps(t){this.g=t}Ae(Ps,C_);Ps.prototype.xa=function(){Se(this.g,"a")};Ps.prototype.wa=function(t){Se(this.g,new R_(t))};Ps.prototype.va=function(t){Se(this.g,new S_)};Ps.prototype.ua=function(){Se(this.g,"b")};it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;bc.NO_ERROR=0;bc.TIMEOUT=8;bc.HTTP_ERROR=6;TR.COMPLETE="complete";bR.EventType=xi;xi.OPEN="a";xi.CLOSE="b";xi.ERROR="c";xi.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;ye.prototype.listenOnce=ye.prototype.O;ye.prototype.getLastError=ye.prototype.Oa;ye.prototype.getLastErrorCode=ye.prototype.Ea;ye.prototype.getStatus=ye.prototype.aa;ye.prototype.getResponseJson=ye.prototype.Sa;ye.prototype.getResponseText=ye.prototype.fa;ye.prototype.send=ye.prototype.da;ye.prototype.setWithCredentials=ye.prototype.Ka;const Qh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new wi("@firebase/firestore");function Ye(t,...e){if(Br.logLevel<=ne.DEBUG){const n=e.map(A_);Br.debug(`Firestore (${ko}): ${t}`,...n)}}function Mc(t,...e){if(Br.logLevel<=ne.ERROR){const n=e.map(A_);Br.error(`Firestore (${ko}): ${t}`,...n)}}function A_(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t="Unexpected state"){const e=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: `+t;throw Mc(e),new Error(e)}function Hr(t,e){t||k_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Nt extends Lt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ve.UNAUTHENTICATED))}shutdown(){}}class GR{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=a=>this.i!==s?(s=this.i,n(a)):Promise.resolve();let r=new hs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new hs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=r;e.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{Ye("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(Ye("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new hs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Ye("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Hr(typeof s.accessToken=="string"),new zR(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Hr(e===null||typeof e=="string"),new Ve(e)}}class YR{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Hr(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class XR{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new YR(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QR{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&Ye("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,Ye("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{Ye("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):Ye("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Hr(typeof n.token=="string"),this.A=n.token,new JR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=ZR(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function N_(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n,s,i,r,o,l,a){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.useFetchStreams=a}}class $r{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $r&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zh,G;(G=Zh||(Zh={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";function cl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&Ye("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new hs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,l=new Lc(e,n,o,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Nt(kt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sS(t,e){if(Mc("AsyncQueue",`${e}: ${t}`),N_(t))return new Nt(kt.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ve.UNAUTHENTICATED,this.clientId=eS.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{Ye("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(Ye("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Nt(kt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=sS(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}const ef=new Map;function rS(t,e,n,s){if(e===!0&&s===!0)throw new Nt(kt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Nt(kt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Nt(kt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Nt(kt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Nt(kt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qR;switch(n.type){case"gapi":const s=n.client;return new XR(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Nt(kt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ef.get(e);n&&(Ye("ComponentProvider","Removing Datastore"),ef.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new nS(this,"async_queue_retry"),this.Hc=()=>{const n=cl();n&&Ye("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=cl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=cl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new hs;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!N_(e))throw e;Ye("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Mc("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=Lc.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&k_()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class aS extends oS{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new lS,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cS(this),this._firestoreClient.terminate()}}function cS(t){var e;const n=t._freezeSettings(),s=function(i,r,o,l){return new tS(i,r,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new iS(t._authCredentials,t._appCheckCredentials,t._queue,s)}(function(t,e=!0){(function(n){ko=n})(Vn),Pt(new yt("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new aS(new GR(n.getProvider("auth-internal")),new QR(n.getProvider("app-check-internal")),function(l,a){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new Nt(kt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(l.options.projectId,a)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Xe(Qh,"3.9.0",t),Xe(Qh,"3.9.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="firebasestorage.googleapis.com",uS="storageBucket",hS=2*60*1e3,fS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Lt{constructor(e,n,s=0){super(ul(e),`Firebase Storage: ${n} (${ul(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ft.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ul(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Mt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Mt||(Mt={}));function ul(t){return"storage/"+t}function dS(){const t="An unknown error occurred, please check the error payload for server response.";return new Ft(Mt.UNKNOWN,t)}function pS(){return new Ft(Mt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gS(){return new Ft(Mt.CANCELED,"User canceled the upload/download.")}function _S(t){return new Ft(Mt.INVALID_URL,"Invalid URL '"+t+"'.")}function mS(t){return new Ft(Mt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function nf(t){return new Ft(Mt.INVALID_ARGUMENT,t)}function P_(){return new Ft(Mt.APP_DELETED,"The Firebase app was deleted.")}function yS(t){return new Ft(Mt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=dt.makeFromUrl(e,n)}catch{return new dt(e,"")}if(s.path==="")return s;throw mS(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function c(B){B.path_=decodeURIComponent(B.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},T=n===O_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",N=new RegExp(`^https?://${T}/${i}/${k}`,"i"),P=[{regex:l,indices:a,postModify:r},{regex:g,indices:m,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let B=0;B<P.length;B++){const he=P[B],_e=he.regex.exec(e);if(_e){const Fe=_e[he.indices.bucket];let Ue=_e[he.indices.path];Ue||(Ue=""),s=new dt(Fe,Ue),he.postModify(s);break}}if(s==null)throw _S(e);return s}}class vS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t,e,n){let s=1,i=null,r=null,o=!1,l=0;function a(){return l===2}let c=!1;function u(...k){c||(c=!0,e.apply(null,k))}function h(k){i=setTimeout(()=>{i=null,t(g,a())},k)}function d(){r&&clearTimeout(r)}function g(k,...N){if(c){d();return}if(k){d(),u.call(null,k,...N);return}if(a()||o){d(),u.call(null,k,...N);return}s<64&&(s*=2);let P;l===1?(l=2,P=0):P=(s+Math.random())*1e3,h(P)}let m=!1;function T(k){m||(m=!0,d(),!c&&(i!==null?(k||(l=2),clearTimeout(i),h(0)):k||(l=1)))}return h(0),r=setTimeout(()=>{o=!0,T(!0)},n),T}function IS(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t){return t!==void 0}function sf(t,e,n,s){if(s<e)throw nf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw nf(`Invalid value for '${t}'. Expected ${n} or less.`)}function TS(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(jr||(jr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n,s,i,r,o,l,a,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new tr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===jr.NO_ERROR,a=r.getStatus();if(!l||bS(a,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===jr.ABORT;s(!1,new tr(!1,null,u));return}const c=this.successCodes_.indexOf(a)!==-1;s(!0,new tr(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());wS(a)?r(a):r()}catch(a){o(a)}else if(l!==null){const a=dS();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?P_():gS();o(a)}else{const a=pS();o(a)}};this.canceled_?n(!1,new tr(!1,null,!0)):this.backoffId_=ES(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&IS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tr{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function RS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function SS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function AS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function NS(t,e,n,s,i,r,o=!0){const l=TS(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return AS(c,e),RS(c,n),SS(c,r),kS(c,s),new CS(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function PS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){this._service=e,n instanceof dt?this._location=n:this._location=dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Wr(e,n)}get root(){const e=new dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return PS(this._location.path)}get storage(){return this._service}get parent(){const e=OS(this._location.path);if(e===null)return null;const n=new dt(this._location.bucket,e);return new Wr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw yS(e)}}function rf(t,e){const n=e==null?void 0:e[uS];return n==null?null:dt.makeFromBucketSpec(n,t)}class DS{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=O_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hS,this._maxUploadRetryTime=fS,this._requests=new Set,i!=null?this._bucket=dt.makeFromBucketSpec(i,this._host):this._bucket=rf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,e):this._bucket=rf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){sf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){sf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wr(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new vS(P_());{const o=NS(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const of="@firebase/storage",lf="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="storage";function MS(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new DS(n,s,i,e,Vn)}function LS(){Pt(new yt(xS,MS,"PUBLIC").setMultipleInstances(!0)),Xe(of,lf,""),Xe(of,lf,"esm2017")}LS();function FS(t){return(e,n)=>{const s=a0(e,n).run(()=>Ta(t));gp.set(e,s),u0(s,e)}}function US(t,{firebaseApp:e,modules:n=[]}){t.provide(dp,e);for(const s of n)t.use(s.bind(null,e))}const BS=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},HS={},$S={class:"flex justify-center items-center h-full"};function jS(t,e){return ka(),Ey("main",$S,"I like rain.")}const WS=BS(HS,[["render",jS]]),D_=aE({history:Cv("/"),routes:[{path:"/",name:"home",component:WS},{path:"/login",component:()=>$o(()=>import("./LoginView-a5842874.js"),[])},{path:"/me",name:"me",component:()=>$o(()=>import("./MainLayout-bfc13ed0.js"),[]),meta:{title:"Private",requiresAuth:!0},children:[{path:"activity",component:()=>$o(()=>import("./ActivityLog-f3ba87ee.js"),[]),meta:{title:"Activity"}}]}]});D_.beforeEach(async t=>{if(t.meta.requiresAuth&&!await c0())return{path:"/login",query:{redirect:t.fullPath}}});const VS={apiKey:{}.FIREBASE_API_KEY,authDomain:"prettywebthings.firebaseapp.com",projectId:"prettywebthings",storageBucket:"prettywebthings.appspot.com",messagingSenderId:"352201092690",appId:"1:352201092690:web:cd0118e9f3a4c8e5fdb98b"},KS=Od(VS),No=sv(uE);No.use(US,{firebaseApp:KS,modules:[FS()]});No.use(lv());No.use(D_);No.mount("#app");export{Ht as F,rn as G,BS as _,Pn as a,Ty as b,Ey as c,Ra as d,GS as e,YS as f,MT as g,XS as h,QS as i,sd as j,Ge as k,ka as o,qS as r,JS as s,zS as t,ZS as u,xm as w};
