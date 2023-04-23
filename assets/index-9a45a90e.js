(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Il(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Tl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=be(i)?c_(i):Tl(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(be(t))return t;if(ge(t))return t}}const o_=/;(?![^(]*\))/g,a_=/:([^]+)/,l_=/\/\*.*?\*\//gs;function c_(t){const e={};return t.replace(l_,"").split(o_).forEach(n=>{if(n){const i=n.split(a_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Os(t){let e="";if(be(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const i=Os(t[n]);i&&(e+=i+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const u_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",h_=Il(u_);function Sf(t){return!!t||t===""}const Dn=t=>be(t)?t:t==null?"":W(t)||ge(t)&&(t.toString===Nf||!V(t.toString))?JSON.stringify(t,Af,2):String(t),Af=(t,e)=>e&&e.__v_isRef?Af(t,e.value):fi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:kf(e)?{[`Set(${e.size})`]:[...e.values()]}:ge(e)&&!W(e)&&!Pf(e)?String(e):e,fe={},hi=[],Et=()=>{},f_=()=>!1,d_=/^on[^a-z]/,to=t=>d_.test(t),bl=t=>t.startsWith("onUpdate:"),Ge=Object.assign,Cl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},p_=Object.prototype.hasOwnProperty,J=(t,e)=>p_.call(t,e),W=Array.isArray,fi=t=>no(t)==="[object Map]",kf=t=>no(t)==="[object Set]",V=t=>typeof t=="function",be=t=>typeof t=="string",Rl=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",Of=t=>ge(t)&&V(t.then)&&V(t.catch),Nf=Object.prototype.toString,no=t=>Nf.call(t),g_=t=>no(t).slice(8,-1),Pf=t=>no(t)==="[object Object]",Sl=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fr=Il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),io=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},m_=/-(\w)/g,Ft=io(t=>t.replace(m_,(e,n)=>n?n.toUpperCase():"")),__=/\B([A-Z])/g,ki=io(t=>t.replace(__,"-$1").toLowerCase()),so=io(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vo=io(t=>t?`on${so(t)}`:""),us=(t,e)=>!Object.is(t,e),zo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},y_=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xc;const v_=()=>Xc||(Xc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let tt;class xf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=tt,!e&&tt&&(this.index=(tt.scopes||(tt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=tt;try{return tt=this,e()}finally{tt=n}}}on(){tt=this}off(){tt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Df(t){return new xf(t)}function E_(t,e=tt){e&&e.active&&e.effects.push(t)}function Mf(){return tt}function w_(t){tt&&tt.cleanups.push(t)}const Al=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Lf=t=>(t.w&vn)>0,Ff=t=>(t.n&vn)>0,I_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=vn},T_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Lf(s)&&!Ff(s)?s.delete(t):e[n++]=s,s.w&=~vn,s.n&=~vn}e.length=n}},ba=new WeakMap;let Xi=0,vn=1;const Ca=30;let gt;const Bn=Symbol(""),Ra=Symbol("");class kl{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,E_(this,i)}run(){if(!this.active)return this.fn();let e=gt,n=dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=gt,gt=this,dn=!0,vn=1<<++Xi,Xi<=Ca?I_(this):Qc(this),this.fn()}finally{Xi<=Ca&&T_(this),vn=1<<--Xi,gt=this.parent,dn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gt===this?this.deferStop=!0:this.active&&(Qc(this),this.onStop&&this.onStop(),this.active=!1)}}function Qc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let dn=!0;const Uf=[];function Oi(){Uf.push(dn),dn=!1}function Ni(){const t=Uf.pop();dn=t===void 0?!0:t}function Ze(t,e,n){if(dn&&gt){let i=ba.get(t);i||ba.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Al()),Bf(s)}}function Bf(t,e){let n=!1;Xi<=Ca?Ff(t)||(t.n|=vn,n=!Lf(t)):n=!t.has(gt),n&&(t.add(gt),gt.deps.push(t))}function Qt(t,e,n,i,s,r){const o=ba.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Sl(n)&&a.push(o.get("length")):(a.push(o.get(Bn)),fi(t)&&a.push(o.get(Ra)));break;case"delete":W(t)||(a.push(o.get(Bn)),fi(t)&&a.push(o.get(Ra)));break;case"set":fi(t)&&a.push(o.get(Bn));break}if(a.length===1)a[0]&&Sa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Sa(Al(l))}}function Sa(t,e){const n=W(t)?t:[...t];for(const i of n)i.computed&&Jc(i);for(const i of n)i.computed||Jc(i)}function Jc(t,e){(t!==gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const b_=Il("__proto__,__v_isRef,__isVue"),$f=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rl)),C_=Ol(),R_=Ol(!1,!0),S_=Ol(!0),Zc=A_();function A_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Z(this);for(let r=0,o=this.length;r<o;r++)Ze(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Z)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Oi();const i=Z(this)[e].apply(this,n);return Ni(),i}}),t}function k_(t){const e=Z(this);return Ze(e,"has",t),e.hasOwnProperty(t)}function Ol(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?z_:zf:e?Vf:Wf).get(i))return i;const o=W(i);if(!t){if(o&&J(Zc,s))return Reflect.get(Zc,s,r);if(s==="hasOwnProperty")return k_}const a=Reflect.get(i,s,r);return(Rl(s)?$f.has(s):b_(s))||(t||Ze(i,"get",s),e)?a:Fe(a)?o&&Sl(s)?a:a.value:ge(a)?t?Kf(a):Ns(a):a}}const O_=Hf(),N_=Hf(!0);function Hf(t=!1){return function(n,i,s,r){let o=n[i];if(Ei(o)&&Fe(o)&&!Fe(s))return!1;if(!t&&(!Ir(s)&&!Ei(s)&&(o=Z(o),s=Z(s)),!W(n)&&Fe(o)&&!Fe(s)))return o.value=s,!0;const a=W(n)&&Sl(i)?Number(i)<n.length:J(n,i),l=Reflect.set(n,i,s,r);return n===Z(r)&&(a?us(s,o)&&Qt(n,"set",i,s):Qt(n,"add",i,s)),l}}function P_(t,e){const n=J(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Qt(t,"delete",e,void 0),i}function x_(t,e){const n=Reflect.has(t,e);return(!Rl(e)||!$f.has(e))&&Ze(t,"has",e),n}function D_(t){return Ze(t,"iterate",W(t)?"length":Bn),Reflect.ownKeys(t)}const jf={get:C_,set:O_,deleteProperty:P_,has:x_,ownKeys:D_},M_={get:S_,set(t,e){return!0},deleteProperty(t,e){return!0}},L_=Ge({},jf,{get:R_,set:N_}),Nl=t=>t,ro=t=>Reflect.getPrototypeOf(t);function Xs(t,e,n=!1,i=!1){t=t.__v_raw;const s=Z(t),r=Z(e);n||(e!==r&&Ze(s,"get",e),Ze(s,"get",r));const{has:o}=ro(s),a=i?Nl:n?Ml:hs;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Qs(t,e=!1){const n=this.__v_raw,i=Z(n),s=Z(t);return e||(t!==s&&Ze(i,"has",t),Ze(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Js(t,e=!1){return t=t.__v_raw,!e&&Ze(Z(t),"iterate",Bn),Reflect.get(t,"size",t)}function eu(t){t=Z(t);const e=Z(this);return ro(e).has.call(e,t)||(e.add(t),Qt(e,"add",t,t)),this}function tu(t,e){e=Z(e);const n=Z(this),{has:i,get:s}=ro(n);let r=i.call(n,t);r||(t=Z(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?us(e,o)&&Qt(n,"set",t,e):Qt(n,"add",t,e),this}function nu(t){const e=Z(this),{has:n,get:i}=ro(e);let s=n.call(e,t);s||(t=Z(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Qt(e,"delete",t,void 0),r}function iu(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&Qt(t,"clear",void 0,void 0),n}function Zs(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Z(o),l=e?Nl:t?Ml:hs;return!t&&Ze(a,"iterate",Bn),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function er(t,e,n){return function(...i){const s=this.__v_raw,r=Z(s),o=fi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Nl:e?Ml:hs;return!e&&Ze(r,"iterate",l?Ra:Bn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function sn(t){return function(...e){return t==="delete"?!1:this}}function F_(){const t={get(r){return Xs(this,r)},get size(){return Js(this)},has:Qs,add:eu,set:tu,delete:nu,clear:iu,forEach:Zs(!1,!1)},e={get(r){return Xs(this,r,!1,!0)},get size(){return Js(this)},has:Qs,add:eu,set:tu,delete:nu,clear:iu,forEach:Zs(!1,!0)},n={get(r){return Xs(this,r,!0)},get size(){return Js(this,!0)},has(r){return Qs.call(this,r,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Zs(!0,!1)},i={get(r){return Xs(this,r,!0,!0)},get size(){return Js(this,!0)},has(r){return Qs.call(this,r,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Zs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=er(r,!1,!1),n[r]=er(r,!0,!1),e[r]=er(r,!1,!0),i[r]=er(r,!0,!0)}),[t,n,e,i]}const[U_,B_,$_,H_]=F_();function Pl(t,e){const n=e?t?H_:$_:t?B_:U_;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(J(n,s)&&s in i?n:i,s,r)}const j_={get:Pl(!1,!1)},W_={get:Pl(!1,!0)},V_={get:Pl(!0,!1)},Wf=new WeakMap,Vf=new WeakMap,zf=new WeakMap,z_=new WeakMap;function K_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function q_(t){return t.__v_skip||!Object.isExtensible(t)?0:K_(g_(t))}function Ns(t){return Ei(t)?t:xl(t,!1,jf,j_,Wf)}function G_(t){return xl(t,!1,L_,W_,Vf)}function Kf(t){return xl(t,!0,M_,V_,zf)}function xl(t,e,n,i,s){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=q_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function di(t){return Ei(t)?di(t.__v_raw):!!(t&&t.__v_isReactive)}function Ei(t){return!!(t&&t.__v_isReadonly)}function Ir(t){return!!(t&&t.__v_isShallow)}function qf(t){return di(t)||Ei(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Dl(t){return wr(t,"__v_skip",!0),t}const hs=t=>ge(t)?Ns(t):t,Ml=t=>ge(t)?Kf(t):t;function Gf(t){dn&&gt&&(t=Z(t),Bf(t.dep||(t.dep=Al())))}function Yf(t,e){t=Z(t);const n=t.dep;n&&Sa(n)}function Fe(t){return!!(t&&t.__v_isRef===!0)}function xe(t){return Xf(t,!1)}function Y_(t){return Xf(t,!0)}function Xf(t,e){return Fe(t)?t:new X_(t,e)}class X_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:hs(e)}get value(){return Gf(this),this._value}set value(e){const n=this.__v_isShallow||Ir(e)||Ei(e);e=n?e:Z(e),us(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:hs(e),Yf(this))}}function Be(t){return Fe(t)?t.value:t}const Q_={get:(t,e,n)=>Be(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Fe(s)&&!Fe(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Qf(t){return di(t)?t:new Proxy(t,Q_)}var Jf;class J_{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Jf]=!1,this._dirty=!0,this.effect=new kl(e,()=>{this._dirty||(this._dirty=!0,Yf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Z(this);return Gf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Jf="__v_isReadonly";function Z_(t,e,n=!1){let i,s;const r=V(t);return r?(i=t,s=Et):(i=t.get,s=t.set),new J_(i,s,r||!s,n)}function pn(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){oo(r,e,n)}return s}function wt(t,e,n,i){if(V(t)){const r=pn(t,e,n,i);return r&&Of(r)&&r.catch(o=>{oo(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(wt(t[r],e,n,i));return s}function oo(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){pn(l,null,10,[t,o,a]);return}}ey(t,n,s,i)}function ey(t,e,n,i=!0){console.error(t)}let fs=!1,Aa=!1;const Le=[];let Ot=0;const pi=[];let zt=null,Pn=0;const Zf=Promise.resolve();let Ll=null;function ao(t){const e=Ll||Zf;return t?e.then(this?t.bind(this):t):e}function ty(t){let e=Ot+1,n=Le.length;for(;e<n;){const i=e+n>>>1;ds(Le[i])<t?e=i+1:n=i}return e}function Fl(t){(!Le.length||!Le.includes(t,fs&&t.allowRecurse?Ot+1:Ot))&&(t.id==null?Le.push(t):Le.splice(ty(t.id),0,t),ed())}function ed(){!fs&&!Aa&&(Aa=!0,Ll=Zf.then(nd))}function ny(t){const e=Le.indexOf(t);e>Ot&&Le.splice(e,1)}function iy(t){W(t)?pi.push(...t):(!zt||!zt.includes(t,t.allowRecurse?Pn+1:Pn))&&pi.push(t),ed()}function su(t,e=fs?Ot+1:0){for(;e<Le.length;e++){const n=Le[e];n&&n.pre&&(Le.splice(e,1),e--,n())}}function td(t){if(pi.length){const e=[...new Set(pi)];if(pi.length=0,zt){zt.push(...e);return}for(zt=e,zt.sort((n,i)=>ds(n)-ds(i)),Pn=0;Pn<zt.length;Pn++)zt[Pn]();zt=null,Pn=0}}const ds=t=>t.id==null?1/0:t.id,sy=(t,e)=>{const n=ds(t)-ds(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function nd(t){Aa=!1,fs=!0,Le.sort(sy);const e=Et;try{for(Ot=0;Ot<Le.length;Ot++){const n=Le[Ot];n&&n.active!==!1&&pn(n,null,14)}}finally{Ot=0,Le.length=0,td(),fs=!1,Ll=null,(Le.length||pi.length)&&nd()}}function ry(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||fe;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||fe;d&&(s=n.map(g=>be(g)?g.trim():g)),h&&(s=n.map(y_))}let a,l=i[a=Vo(e)]||i[a=Vo(Ft(e))];!l&&r&&(l=i[a=Vo(ki(e))]),l&&wt(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wt(c,t,6,s)}}function id(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!V(t)){const l=c=>{const u=id(c,e,!0);u&&(a=!0,Ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ge(t)&&i.set(t,null),null):(W(r)?r.forEach(l=>o[l]=null):Ge(o,r),ge(t)&&i.set(t,o),o)}function lo(t,e){return!t||!to(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,ki(e))||J(t,e))}let at=null,sd=null;function Tr(t){const e=at;return at=t,sd=t&&t.type.__scopeId||null,e}function oy(t,e=at,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&du(-1);const r=Tr(e);let o;try{o=t(...s)}finally{Tr(r),i._d&&du(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ko(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:_,inheritAttrs:I}=t;let C,O;const U=Tr(t);try{if(n.shapeFlag&4){const B=s||i;C=kt(u.call(B,B,h,r,g,d,_)),O=l}else{const B=e;C=kt(B.length>1?B(r,{attrs:l,slots:a,emit:c}):B(r,null)),O=e.props?l:ay(l)}}catch(B){ts.length=0,oo(B,t,1),C=Te(zn)}let P=C;if(O&&I!==!1){const B=Object.keys(O),{shapeFlag:he}=P;B.length&&he&7&&(o&&B.some(bl)&&(O=ly(O,o)),P=wi(P,O))}return n.dirs&&(P=wi(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),C=P,Tr(U),C}const ay=t=>{let e;for(const n in t)(n==="class"||n==="style"||to(n))&&((e||(e={}))[n]=t[n]);return e},ly=(t,e)=>{const n={};for(const i in t)(!bl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function cy(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?ru(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!lo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ru(i,o,c):!0:!!o;return!1}function ru(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!lo(n,r))return!0}return!1}function uy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const hy=t=>t.__isSuspense;function fy(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):iy(t)}function dr(t,e){if(ve){let n=ve.provides;const i=ve.parent&&ve.parent.provides;i===n&&(n=ve.provides=Object.create(i)),n[t]=e}}function ct(t,e,n=!1){const i=ve||at;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(i.proxy):e}}const tr={};function gn(t,e,n){return rd(t,e,n)}function rd(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=fe){const a=Mf()===(ve==null?void 0:ve.scope)?ve:null;let l,c=!1,u=!1;if(Fe(t)?(l=()=>t.value,c=Ir(t)):di(t)?(l=()=>t,i=!0):W(t)?(u=!0,c=t.some(P=>di(P)||Ir(P)),l=()=>t.map(P=>{if(Fe(P))return P.value;if(di(P))return ai(P);if(V(P))return pn(P,a,2)})):V(t)?e?l=()=>pn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),wt(t,a,3,[d])}:l=Et,e&&i){const P=l;l=()=>ai(P())}let h,d=P=>{h=O.onStop=()=>{pn(P,a,4)}},g;if(gs)if(d=Et,e?n&&wt(e,a,3,[l(),u?[]:void 0,d]):l(),s==="sync"){const P=rv();g=P.__watcherHandles||(P.__watcherHandles=[])}else return Et;let _=u?new Array(t.length).fill(tr):tr;const I=()=>{if(O.active)if(e){const P=O.run();(i||c||(u?P.some((B,he)=>us(B,_[he])):us(P,_)))&&(h&&h(),wt(e,a,3,[P,_===tr?void 0:u&&_[0]===tr?[]:_,d]),_=P)}else O.run()};I.allowRecurse=!!e;let C;s==="sync"?C=I:s==="post"?C=()=>Xe(I,a&&a.suspense):(I.pre=!0,a&&(I.id=a.uid),C=()=>Fl(I));const O=new kl(l,C);e?n?I():_=O.run():s==="post"?Xe(O.run.bind(O),a&&a.suspense):O.run();const U=()=>{O.stop(),a&&a.scope&&Cl(a.scope.effects,O)};return g&&g.push(U),U}function dy(t,e,n){const i=this.proxy,s=be(t)?t.includes(".")?od(i,t):()=>i[t]:t.bind(i,i);let r;V(e)?r=e:(r=e.handler,n=e);const o=ve;Ii(this);const a=rd(s,r.bind(i),n);return o?Ii(o):Hn(),a}function od(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function ai(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Fe(t))ai(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)ai(t[n],e);else if(kf(t)||fi(t))t.forEach(n=>{ai(n,e)});else if(Pf(t))for(const n in t)ai(t[n],e);return t}function wn(t){return V(t)?{setup:t,name:t.name}:t}const pr=t=>!!t.type.__asyncLoader,ad=t=>t.type.__isKeepAlive;function py(t,e){ld(t,"a",e)}function gy(t,e){ld(t,"da",e)}function ld(t,e,n=ve){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(co(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ad(s.parent.vnode)&&my(i,e,n,s),s=s.parent}}function my(t,e,n,i){const s=co(e,t,i,!0);ud(()=>{Cl(i[e],s)},n)}function co(t,e,n=ve,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Oi(),Ii(n);const a=wt(e,n,t,o);return Hn(),Ni(),a});return i?s.unshift(r):s.push(r),r}}const en=t=>(e,n=ve)=>(!gs||t==="sp")&&co(t,(...i)=>e(...i),n),_y=en("bm"),cd=en("m"),yy=en("bu"),vy=en("u"),Ey=en("bum"),ud=en("um"),wy=en("sp"),Iy=en("rtg"),Ty=en("rtc");function by(t,e=ve){co("ec",t,e)}function Sn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Oi(),wt(l,n,8,[t.el,a,t,e]),Ni())}}const hd="components";function _k(t,e){return Ry(hd,t,!0,e)||t}const Cy=Symbol();function Ry(t,e,n=!0,i=!1){const s=at||ve;if(s){const r=s.type;if(t===hd){const a=nv(r,!1);if(a&&(a===e||a===Ft(e)||a===so(Ft(e))))return r}const o=ou(s[t]||r[t],e)||ou(s.appContext[t],e);return!o&&i?r:o}}function ou(t,e){return t&&(t[e]||t[Ft(e)]||t[so(Ft(e))])}function ka(t,e,n,i){let s;const r=n&&n[i];if(W(t)||be(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(ge(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const Oa=t=>t?bd(t)?Hl(t)||t.proxy:Oa(t.parent):null,es=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Oa(t.parent),$root:t=>Oa(t.root),$emit:t=>t.emit,$options:t=>Ul(t),$forceUpdate:t=>t.f||(t.f=()=>Fl(t.update)),$nextTick:t=>t.n||(t.n=ao.bind(t.proxy)),$watch:t=>dy.bind(t)}),qo=(t,e)=>t!==fe&&!t.__isScriptSetup&&J(t,e),Sy={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(qo(i,e))return o[e]=1,i[e];if(s!==fe&&J(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&J(c,e))return o[e]=3,r[e];if(n!==fe&&J(n,e))return o[e]=4,n[e];Na&&(o[e]=0)}}const u=es[e];let h,d;if(u)return e==="$attrs"&&Ze(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==fe&&J(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,J(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return qo(s,e)?(s[e]=n,!0):i!==fe&&J(i,e)?(i[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==fe&&J(t,o)||qo(e,o)||(a=r[0])&&J(a,o)||J(i,o)||J(es,o)||J(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Na=!0;function Ay(t){const e=Ul(t),n=t.proxy,i=t.ctx;Na=!1,e.beforeCreate&&au(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:_,activated:I,deactivated:C,beforeDestroy:O,beforeUnmount:U,destroyed:P,unmounted:B,render:he,renderTracked:_e,renderTriggered:We,errorCaptured:Ve,serverPrefetch:Ct,expose:rt,inheritAttrs:nn,components:Rt,directives:ti,filters:Cn}=e;if(c&&ky(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const oe in o){const ie=o[oe];V(ie)&&(i[oe]=ie.bind(n))}if(s){const oe=s.call(n,n);ge(oe)&&(t.data=Ns(oe))}if(Na=!0,r)for(const oe in r){const ie=r[oe],ft=V(ie)?ie.bind(n,n):V(ie.get)?ie.get.bind(n,n):Et,Rn=!V(ie)&&V(ie.set)?ie.set.bind(n):Et,dt=Ke({get:ft,set:Rn});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>dt.value,set:Ye=>dt.value=Ye})}if(a)for(const oe in a)fd(a[oe],i,n,oe);if(l){const oe=V(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(ie=>{dr(ie,oe[ie])})}u&&au(u,t,"c");function we(oe,ie){W(ie)?ie.forEach(ft=>oe(ft.bind(n))):ie&&oe(ie.bind(n))}if(we(_y,h),we(cd,d),we(yy,g),we(vy,_),we(py,I),we(gy,C),we(by,Ve),we(Ty,_e),we(Iy,We),we(Ey,U),we(ud,B),we(wy,Ct),W(rt))if(rt.length){const oe=t.exposed||(t.exposed={});rt.forEach(ie=>{Object.defineProperty(oe,ie,{get:()=>n[ie],set:ft=>n[ie]=ft})})}else t.exposed||(t.exposed={});he&&t.render===Et&&(t.render=he),nn!=null&&(t.inheritAttrs=nn),Rt&&(t.components=Rt),ti&&(t.directives=ti)}function ky(t,e,n=Et,i=!1){W(t)&&(t=Pa(t));for(const s in t){const r=t[s];let o;ge(r)?"default"in r?o=ct(r.from||s,r.default,!0):o=ct(r.from||s):o=ct(r),Fe(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function au(t,e,n){wt(W(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function fd(t,e,n,i){const s=i.includes(".")?od(n,i):()=>n[i];if(be(t)){const r=e[t];V(r)&&gn(s,r)}else if(V(t))gn(s,t.bind(n));else if(ge(t))if(W(t))t.forEach(r=>fd(r,e,n,i));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&gn(s,r,t)}}function Ul(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>br(l,c,o,!0)),br(l,e,o)),ge(e)&&r.set(e,l),l}function br(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&br(t,r,n,!0),s&&s.forEach(o=>br(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Oy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Oy={data:lu,props:kn,emits:kn,methods:kn,computed:kn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:kn,directives:kn,watch:Py,provide:lu,inject:Ny};function lu(t,e){return e?t?function(){return Ge(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Ny(t,e){return kn(Pa(t),Pa(e))}function Pa(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function kn(t,e){return t?Ge(Ge(Object.create(null),t),e):e}function Py(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const i in e)n[i]=ze(t[i],e[i]);return n}function xy(t,e,n,i=!1){const s={},r={};wr(r,fo,1),t.propsDefaults=Object.create(null),dd(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:G_(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Dy(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Z(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(lo(t.emitsOptions,d))continue;const g=e[d];if(l)if(J(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const _=Ft(d);s[_]=xa(l,a,_,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{dd(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!J(e,h)&&((u=ki(h))===h||!J(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=xa(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!J(e,h))&&(delete r[h],c=!0)}c&&Qt(t,"set","$attrs")}function dd(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(fr(l))continue;const c=e[l];let u;s&&J(s,u=Ft(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:lo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Z(n),c=a||fe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=xa(s,l,h,c[h],t,!J(c,h))}}return o}function xa(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=J(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&V(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Ii(s),i=c[n]=l.call(null,e),Hn())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ki(n))&&(i=!0))}return i}function pd(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!V(t)){const u=h=>{l=!0;const[d,g]=pd(h,e,!0);Ge(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ge(t)&&i.set(t,hi),hi;if(W(r))for(let u=0;u<r.length;u++){const h=Ft(r[u]);cu(h)&&(o[h]=fe)}else if(r)for(const u in r){const h=Ft(u);if(cu(h)){const d=r[u],g=o[h]=W(d)||V(d)?{type:d}:Object.assign({},d);if(g){const _=fu(Boolean,g.type),I=fu(String,g.type);g[0]=_>-1,g[1]=I<0||_<I,(_>-1||J(g,"default"))&&a.push(h)}}}const c=[o,a];return ge(t)&&i.set(t,c),c}function cu(t){return t[0]!=="$"}function uu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function hu(t,e){return uu(t)===uu(e)}function fu(t,e){return W(e)?e.findIndex(n=>hu(n,t)):V(e)&&hu(e,t)?0:-1}const gd=t=>t[0]==="_"||t==="$stable",Bl=t=>W(t)?t.map(kt):[kt(t)],My=(t,e,n)=>{if(e._n)return e;const i=oy((...s)=>Bl(e(...s)),n);return i._c=!1,i},md=(t,e,n)=>{const i=t._ctx;for(const s in t){if(gd(s))continue;const r=t[s];if(V(r))e[s]=My(s,r,i);else if(r!=null){const o=Bl(r);e[s]=()=>o}}},_d=(t,e)=>{const n=Bl(e);t.slots.default=()=>n},Ly=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),wr(e,"_",n)):md(e,t.slots={})}else t.slots={},e&&_d(t,e);wr(t.slots,fo,1)},Fy=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=fe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ge(s,e),!n&&a===1&&delete s._):(r=!e.$stable,md(e,s)),o=e}else e&&(_d(t,e),o={default:1});if(r)for(const a in s)!gd(a)&&!(a in o)&&delete s[a]};function yd(){return{app:null,config:{isNativeTag:f_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uy=0;function By(t,e){return function(i,s=null){V(i)||(i=Object.assign({},i)),s!=null&&!ge(s)&&(s=null);const r=yd(),o=new Set;let a=!1;const l=r.app={_uid:Uy++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ov,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(l,...u)):V(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Te(i,s);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Hl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Da(t,e,n,i,s=!1){if(W(t)){t.forEach((d,g)=>Da(d,e&&(W(e)?e[g]:e),n,i,s));return}if(pr(i)&&!s)return;const r=i.shapeFlag&4?Hl(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===fe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(be(c)?(u[c]=null,J(h,c)&&(h[c]=null)):Fe(c)&&(c.value=null)),V(l))pn(l,a,12,[o,u]);else{const d=be(l),g=Fe(l);if(d||g){const _=()=>{if(t.f){const I=d?J(h,l)?h[l]:u[l]:l.value;s?W(I)&&Cl(I,r):W(I)?I.includes(r)||I.push(r):d?(u[l]=[r],J(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,J(h,l)&&(h[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Xe(_,n)):_()}}}const Xe=fy;function $y(t){return Hy(t)}function Hy(t,e){const n=v_();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Et,insertStaticContent:_}=t,I=(f,p,m,y=null,E=null,b=null,k=!1,T=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!Wi(f,p)&&(y=A(f),Ye(f,E,b,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:w,ref:L,shapeFlag:x}=p;switch(w){case uo:C(f,p,m,y);break;case zn:O(f,p,m,y);break;case gr:f==null&&U(p,m,y,k);break;case ot:Rt(f,p,m,y,E,b,k,T,R);break;default:x&1?he(f,p,m,y,E,b,k,T,R):x&6?ti(f,p,m,y,E,b,k,T,R):(x&64||x&128)&&w.process(f,p,m,y,E,b,k,T,R,Q)}L!=null&&E&&Da(L,f&&f.ref,b,p||f,!p)},C=(f,p,m,y)=>{if(f==null)i(p.el=a(p.children),m,y);else{const E=p.el=f.el;p.children!==f.children&&c(E,p.children)}},O=(f,p,m,y)=>{f==null?i(p.el=l(p.children||""),m,y):p.el=f.el},U=(f,p,m,y)=>{[f.el,f.anchor]=_(f.children,p,m,y,f.el,f.anchor)},P=({el:f,anchor:p},m,y)=>{let E;for(;f&&f!==p;)E=d(f),i(f,m,y),f=E;i(p,m,y)},B=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),s(f),f=m;s(p)},he=(f,p,m,y,E,b,k,T,R)=>{k=k||p.type==="svg",f==null?_e(p,m,y,E,b,k,T,R):Ct(f,p,E,b,k,T,R)},_e=(f,p,m,y,E,b,k,T)=>{let R,w;const{type:L,props:x,shapeFlag:F,transition:j,dirs:K}=f;if(R=f.el=o(f.type,b,x&&x.is,x),F&8?u(R,f.children):F&16&&Ve(f.children,R,null,y,E,b&&L!=="foreignObject",k,T),K&&Sn(f,null,y,"created"),We(R,f,f.scopeId,k,y),x){for(const se in x)se!=="value"&&!fr(se)&&r(R,se,null,x[se],b,f.children,y,E,N);"value"in x&&r(R,"value",null,x.value),(w=x.onVnodeBeforeMount)&&At(w,y,f)}K&&Sn(f,null,y,"beforeMount");const ae=(!E||E&&!E.pendingBranch)&&j&&!j.persisted;ae&&j.beforeEnter(R),i(R,p,m),((w=x&&x.onVnodeMounted)||ae||K)&&Xe(()=>{w&&At(w,y,f),ae&&j.enter(R),K&&Sn(f,null,y,"mounted")},E)},We=(f,p,m,y,E)=>{if(m&&g(f,m),y)for(let b=0;b<y.length;b++)g(f,y[b]);if(E){let b=E.subTree;if(p===b){const k=E.vnode;We(f,k,k.scopeId,k.slotScopeIds,E.parent)}}},Ve=(f,p,m,y,E,b,k,T,R=0)=>{for(let w=R;w<f.length;w++){const L=f[w]=T?an(f[w]):kt(f[w]);I(null,L,p,m,y,E,b,k,T)}},Ct=(f,p,m,y,E,b,k)=>{const T=p.el=f.el;let{patchFlag:R,dynamicChildren:w,dirs:L}=p;R|=f.patchFlag&16;const x=f.props||fe,F=p.props||fe;let j;m&&An(m,!1),(j=F.onVnodeBeforeUpdate)&&At(j,m,p,f),L&&Sn(p,f,m,"beforeUpdate"),m&&An(m,!0);const K=E&&p.type!=="foreignObject";if(w?rt(f.dynamicChildren,w,T,m,y,K,b):k||ie(f,p,T,null,m,y,K,b,!1),R>0){if(R&16)nn(T,p,x,F,m,y,E);else if(R&2&&x.class!==F.class&&r(T,"class",null,F.class,E),R&4&&r(T,"style",x.style,F.style,E),R&8){const ae=p.dynamicProps;for(let se=0;se<ae.length;se++){const Ie=ae[se],pt=x[Ie],ii=F[Ie];(ii!==pt||Ie==="value")&&r(T,Ie,pt,ii,E,f.children,m,y,N)}}R&1&&f.children!==p.children&&u(T,p.children)}else!k&&w==null&&nn(T,p,x,F,m,y,E);((j=F.onVnodeUpdated)||L)&&Xe(()=>{j&&At(j,m,p,f),L&&Sn(p,f,m,"updated")},y)},rt=(f,p,m,y,E,b,k)=>{for(let T=0;T<p.length;T++){const R=f[T],w=p[T],L=R.el&&(R.type===ot||!Wi(R,w)||R.shapeFlag&70)?h(R.el):m;I(R,w,L,null,y,E,b,k,!0)}},nn=(f,p,m,y,E,b,k)=>{if(m!==y){if(m!==fe)for(const T in m)!fr(T)&&!(T in y)&&r(f,T,m[T],null,k,p.children,E,b,N);for(const T in y){if(fr(T))continue;const R=y[T],w=m[T];R!==w&&T!=="value"&&r(f,T,w,R,k,p.children,E,b,N)}"value"in y&&r(f,"value",m.value,y.value)}},Rt=(f,p,m,y,E,b,k,T,R)=>{const w=p.el=f?f.el:a(""),L=p.anchor=f?f.anchor:a("");let{patchFlag:x,dynamicChildren:F,slotScopeIds:j}=p;j&&(T=T?T.concat(j):j),f==null?(i(w,m,y),i(L,m,y),Ve(p.children,m,L,E,b,k,T,R)):x>0&&x&64&&F&&f.dynamicChildren?(rt(f.dynamicChildren,F,m,E,b,k,T),(p.key!=null||E&&p===E.subTree)&&vd(f,p,!0)):ie(f,p,m,L,E,b,k,T,R)},ti=(f,p,m,y,E,b,k,T,R)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?E.ctx.activate(p,m,y,k,R):Cn(p,m,y,E,b,k,R):Hi(f,p,R)},Cn=(f,p,m,y,E,b,k)=>{const T=f.component=Qy(f,y,E);if(ad(f)&&(T.ctx.renderer=Q),Jy(T),T.asyncDep){if(E&&E.registerDep(T,we),!f.el){const R=T.subTree=Te(zn);O(null,R,p,m)}return}we(T,f,p,m,E,b,k)},Hi=(f,p,m)=>{const y=p.component=f.component;if(cy(f,p,m))if(y.asyncDep&&!y.asyncResolved){oe(y,p,m);return}else y.next=p,ny(y.update),y.update();else p.el=f.el,y.vnode=p},we=(f,p,m,y,E,b,k)=>{const T=()=>{if(f.isMounted){let{next:L,bu:x,u:F,parent:j,vnode:K}=f,ae=L,se;An(f,!1),L?(L.el=K.el,oe(f,L,k)):L=K,x&&zo(x),(se=L.props&&L.props.onVnodeBeforeUpdate)&&At(se,j,L,K),An(f,!0);const Ie=Ko(f),pt=f.subTree;f.subTree=Ie,I(pt,Ie,h(pt.el),A(pt),f,E,b),L.el=Ie.el,ae===null&&uy(f,Ie.el),F&&Xe(F,E),(se=L.props&&L.props.onVnodeUpdated)&&Xe(()=>At(se,j,L,K),E)}else{let L;const{el:x,props:F}=p,{bm:j,m:K,parent:ae}=f,se=pr(p);if(An(f,!1),j&&zo(j),!se&&(L=F&&F.onVnodeBeforeMount)&&At(L,ae,p),An(f,!0),x&&z){const Ie=()=>{f.subTree=Ko(f),z(x,f.subTree,f,E,null)};se?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ie()):Ie()}else{const Ie=f.subTree=Ko(f);I(null,Ie,m,y,f,E,b),p.el=Ie.el}if(K&&Xe(K,E),!se&&(L=F&&F.onVnodeMounted)){const Ie=p;Xe(()=>At(L,ae,Ie),E)}(p.shapeFlag&256||ae&&pr(ae.vnode)&&ae.vnode.shapeFlag&256)&&f.a&&Xe(f.a,E),f.isMounted=!0,p=m=y=null}},R=f.effect=new kl(T,()=>Fl(w),f.scope),w=f.update=()=>R.run();w.id=f.uid,An(f,!0),w()},oe=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Dy(f,p.props,y,m),Fy(f,p.children,m),Oi(),su(),Ni()},ie=(f,p,m,y,E,b,k,T,R=!1)=>{const w=f&&f.children,L=f?f.shapeFlag:0,x=p.children,{patchFlag:F,shapeFlag:j}=p;if(F>0){if(F&128){Rn(w,x,m,y,E,b,k,T,R);return}else if(F&256){ft(w,x,m,y,E,b,k,T,R);return}}j&8?(L&16&&N(w,E,b),x!==w&&u(m,x)):L&16?j&16?Rn(w,x,m,y,E,b,k,T,R):N(w,E,b,!0):(L&8&&u(m,""),j&16&&Ve(x,m,y,E,b,k,T,R))},ft=(f,p,m,y,E,b,k,T,R)=>{f=f||hi,p=p||hi;const w=f.length,L=p.length,x=Math.min(w,L);let F;for(F=0;F<x;F++){const j=p[F]=R?an(p[F]):kt(p[F]);I(f[F],j,m,null,E,b,k,T,R)}w>L?N(f,E,b,!0,!1,x):Ve(p,m,y,E,b,k,T,R,x)},Rn=(f,p,m,y,E,b,k,T,R)=>{let w=0;const L=p.length;let x=f.length-1,F=L-1;for(;w<=x&&w<=F;){const j=f[w],K=p[w]=R?an(p[w]):kt(p[w]);if(Wi(j,K))I(j,K,m,null,E,b,k,T,R);else break;w++}for(;w<=x&&w<=F;){const j=f[x],K=p[F]=R?an(p[F]):kt(p[F]);if(Wi(j,K))I(j,K,m,null,E,b,k,T,R);else break;x--,F--}if(w>x){if(w<=F){const j=F+1,K=j<L?p[j].el:y;for(;w<=F;)I(null,p[w]=R?an(p[w]):kt(p[w]),m,K,E,b,k,T,R),w++}}else if(w>F)for(;w<=x;)Ye(f[w],E,b,!0),w++;else{const j=w,K=w,ae=new Map;for(w=K;w<=F;w++){const et=p[w]=R?an(p[w]):kt(p[w]);et.key!=null&&ae.set(et.key,w)}let se,Ie=0;const pt=F-K+1;let ii=!1,qc=0;const ji=new Array(pt);for(w=0;w<pt;w++)ji[w]=0;for(w=j;w<=x;w++){const et=f[w];if(Ie>=pt){Ye(et,E,b,!0);continue}let St;if(et.key!=null)St=ae.get(et.key);else for(se=K;se<=F;se++)if(ji[se-K]===0&&Wi(et,p[se])){St=se;break}St===void 0?Ye(et,E,b,!0):(ji[St-K]=w+1,St>=qc?qc=St:ii=!0,I(et,p[St],m,null,E,b,k,T,R),Ie++)}const Gc=ii?jy(ji):hi;for(se=Gc.length-1,w=pt-1;w>=0;w--){const et=K+w,St=p[et],Yc=et+1<L?p[et+1].el:y;ji[w]===0?I(null,St,m,Yc,E,b,k,T,R):ii&&(se<0||w!==Gc[se]?dt(St,m,Yc,2):se--)}}},dt=(f,p,m,y,E=null)=>{const{el:b,type:k,transition:T,children:R,shapeFlag:w}=f;if(w&6){dt(f.component.subTree,p,m,y);return}if(w&128){f.suspense.move(p,m,y);return}if(w&64){k.move(f,p,m,Q);return}if(k===ot){i(b,p,m);for(let x=0;x<R.length;x++)dt(R[x],p,m,y);i(f.anchor,p,m);return}if(k===gr){P(f,p,m);return}if(y!==2&&w&1&&T)if(y===0)T.beforeEnter(b),i(b,p,m),Xe(()=>T.enter(b),E);else{const{leave:x,delayLeave:F,afterLeave:j}=T,K=()=>i(b,p,m),ae=()=>{x(b,()=>{K(),j&&j()})};F?F(b,K,ae):ae()}else i(b,p,m)},Ye=(f,p,m,y=!1,E=!1)=>{const{type:b,props:k,ref:T,children:R,dynamicChildren:w,shapeFlag:L,patchFlag:x,dirs:F}=f;if(T!=null&&Da(T,null,m,f,!0),L&256){p.ctx.deactivate(f);return}const j=L&1&&F,K=!pr(f);let ae;if(K&&(ae=k&&k.onVnodeBeforeUnmount)&&At(ae,p,f),L&6)v(f.component,m,y);else{if(L&128){f.suspense.unmount(m,y);return}j&&Sn(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,m,E,Q,y):w&&(b!==ot||x>0&&x&64)?N(w,p,m,!1,!0):(b===ot&&x&384||!E&&L&16)&&N(R,p,m),y&&ni(f)}(K&&(ae=k&&k.onVnodeUnmounted)||j)&&Xe(()=>{ae&&At(ae,p,f),j&&Sn(f,null,p,"unmounted")},m)},ni=f=>{const{type:p,el:m,anchor:y,transition:E}=f;if(p===ot){Ys(m,y);return}if(p===gr){B(f);return}const b=()=>{s(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:k,delayLeave:T}=E,R=()=>k(m,b);T?T(f.el,b,R):R()}else b()},Ys=(f,p)=>{let m;for(;f!==p;)m=d(f),s(f),f=m;s(p)},v=(f,p,m)=>{const{bum:y,scope:E,update:b,subTree:k,um:T}=f;y&&zo(y),E.stop(),b&&(b.active=!1,Ye(k,f,p,m)),T&&Xe(T,p),Xe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(f,p,m,y=!1,E=!1,b=0)=>{for(let k=b;k<f.length;k++)Ye(f[k],p,m,y,E)},A=f=>f.shapeFlag&6?A(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),M=(f,p,m)=>{f==null?p._vnode&&Ye(p._vnode,null,null,!0):I(p._vnode||null,f,p,null,null,null,m),su(),td(),p._vnode=f},Q={p:I,um:Ye,m:dt,r:ni,mt:Cn,mc:Ve,pc:ie,pbc:rt,n:A,o:t};let me,z;return e&&([me,z]=e(Q)),{render:M,hydrate:me,createApp:By(M,me)}}function An({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function vd(t,e,n=!1){const i=t.children,s=e.children;if(W(i)&&W(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=an(s[r]),a.el=o.el),n||vd(o,a)),a.type===uo&&(a.el=o.el)}}function jy(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Wy=t=>t.__isTeleport,ot=Symbol(void 0),uo=Symbol(void 0),zn=Symbol(void 0),gr=Symbol(void 0),ts=[];let _t=null;function ye(t=!1){ts.push(_t=t?null:[])}function Vy(){ts.pop(),_t=ts[ts.length-1]||null}let ps=1;function du(t){ps+=t}function Ed(t){return t.dynamicChildren=ps>0?_t||hi:null,Vy(),ps>0&&_t&&_t.push(t),t}function Oe(t,e,n,i,s,r){return Ed(de(t,e,n,i,s,r,!0))}function ho(t,e,n,i,s){return Ed(Te(t,e,n,i,s,!0))}function Ma(t){return t?t.__v_isVNode===!0:!1}function Wi(t,e){return t.type===e.type&&t.key===e.key}const fo="__vInternal",wd=({key:t})=>t??null,mr=({ref:t,ref_key:e,ref_for:n})=>t!=null?be(t)||Fe(t)||V(t)?{i:at,r:t,k:e,f:!!n}:t:null;function de(t,e=null,n=null,i=0,s=null,r=t===ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wd(e),ref:e&&mr(e),scopeId:sd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:at};return a?($l(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=be(n)?8:16),ps>0&&!o&&_t&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&_t.push(l),l}const Te=zy;function zy(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Cy)&&(t=zn),Ma(t)){const a=wi(t,e,!0);return n&&$l(a,n),ps>0&&!r&&_t&&(a.shapeFlag&6?_t[_t.indexOf(t)]=a:_t.push(a)),a.patchFlag|=-2,a}if(iv(t)&&(t=t.__vccOpts),e){e=Ky(e);let{class:a,style:l}=e;a&&!be(a)&&(e.class=Os(a)),ge(l)&&(qf(l)&&!W(l)&&(l=Ge({},l)),e.style=Tl(l))}const o=be(t)?1:hy(t)?128:Wy(t)?64:ge(t)?4:V(t)?2:0;return de(t,e,n,i,s,o,r,!0)}function Ky(t){return t?qf(t)||fo in t?Ge({},t):t:null}function wi(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?Gy(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&wd(a),ref:e&&e.ref?n&&s?W(s)?s.concat(mr(e)):[s,mr(e)]:mr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ot?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wi(t.ssContent),ssFallback:t.ssFallback&&wi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Id(t=" ",e=0){return Te(uo,null,t,e)}function qy(t,e){const n=Te(gr,null,t);return n.staticCount=e,n}function $n(t="",e=!1){return e?(ye(),ho(zn,null,t)):Te(zn,null,t)}function kt(t){return t==null||typeof t=="boolean"?Te(zn):W(t)?Te(ot,null,t.slice()):typeof t=="object"?an(t):Te(uo,null,String(t))}function an(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wi(t)}function $l(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),$l(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(fo in e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:at},n=32):(e=String(e),i&64?(n=16,e=[Id(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gy(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Os([e.class,i.class]));else if(s==="style")e.style=Tl([e.style,i.style]);else if(to(s)){const r=e[s],o=i[s];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function At(t,e,n,i=null){wt(t,e,7,[n,i])}const Yy=yd();let Xy=0;function Qy(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Yy,r={uid:Xy++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pd(i,s),emitsOptions:id(i,s),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ry.bind(null,r),t.ce&&t.ce(r),r}let ve=null;const Td=()=>ve||at,Ii=t=>{ve=t,t.scope.on()},Hn=()=>{ve&&ve.scope.off(),ve=null};function bd(t){return t.vnode.shapeFlag&4}let gs=!1;function Jy(t,e=!1){gs=e;const{props:n,children:i}=t.vnode,s=bd(t);xy(t,n,s,e),Ly(t,i);const r=s?Zy(t,e):void 0;return gs=!1,r}function Zy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Dl(new Proxy(t.ctx,Sy));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?tv(t):null;Ii(t),Oi();const r=pn(i,t,0,[t.props,s]);if(Ni(),Hn(),Of(r)){if(r.then(Hn,Hn),e)return r.then(o=>{pu(t,o,e)}).catch(o=>{oo(o,t,0)});t.asyncDep=r}else pu(t,r,e)}else Cd(t,e)}function pu(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=Qf(e)),Cd(t,n)}let gu;function Cd(t,e,n){const i=t.type;if(!t.render){if(!e&&gu&&!i.render){const s=i.template||Ul(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ge(Ge({isCustomElement:r,delimiters:a},o),l);i.render=gu(s,c)}}t.render=i.render||Et}Ii(t),Oi(),Ay(t),Ni(),Hn()}function ev(t){return new Proxy(t.attrs,{get(e,n){return Ze(t,"get","$attrs"),e[n]}})}function tv(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=ev(t))},slots:t.slots,emit:t.emit,expose:e}}function Hl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qf(Dl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in es)return es[n](t)},has(e,n){return n in e||n in es}}))}function nv(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function iv(t){return V(t)&&"__vccOpts"in t}const Ke=(t,e)=>Z_(t,e,gs);function Rd(t,e,n){const i=arguments.length;return i===2?ge(e)&&!W(e)?Ma(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ma(n)&&(n=[n]),Te(t,e,n))}const sv=Symbol(""),rv=()=>ct(sv),ov="3.2.47",av="http://www.w3.org/2000/svg",xn=typeof document<"u"?document:null,mu=xn&&xn.createElement("template"),lv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?xn.createElementNS(av,t):xn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>xn.createTextNode(t),createComment:t=>xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{mu.innerHTML=i?`<svg>${t}</svg>`:t;const a=mu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function cv(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function uv(t,e,n){const i=t.style,s=be(n);if(n&&!s){if(e&&!be(e))for(const r in e)n[r]==null&&La(i,r,"");for(const r in n)La(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const _u=/\s*!important$/;function La(t,e,n){if(W(n))n.forEach(i=>La(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=hv(t,e);_u.test(n)?t.setProperty(ki(i),n.replace(_u,""),"important"):t[i]=n}}const yu=["Webkit","Moz","ms"],Go={};function hv(t,e){const n=Go[e];if(n)return n;let i=Ft(e);if(i!=="filter"&&i in t)return Go[e]=i;i=so(i);for(let s=0;s<yu.length;s++){const r=yu[s]+i;if(r in t)return Go[e]=r}return e}const vu="http://www.w3.org/1999/xlink";function fv(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vu,e.slice(6,e.length)):t.setAttributeNS(vu,e,n);else{const r=h_(e);n==null||r&&!Sf(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function dv(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Sf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function pv(t,e,n,i){t.addEventListener(e,n,i)}function gv(t,e,n,i){t.removeEventListener(e,n,i)}function mv(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=_v(e);if(i){const c=r[e]=Ev(i,s);pv(t,a,c,l)}else o&&(gv(t,a,o,l),r[e]=void 0)}}const Eu=/(?:Once|Passive|Capture)$/;function _v(t){let e;if(Eu.test(t)){e={};let i;for(;i=t.match(Eu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ki(t.slice(2)),e]}let Yo=0;const yv=Promise.resolve(),vv=()=>Yo||(yv.then(()=>Yo=0),Yo=Date.now());function Ev(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;wt(wv(i,n.value),e,5,[i])};return n.value=t,n.attached=vv(),n}function wv(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const wu=/^on[a-z]/,Iv=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?cv(t,i,s):e==="style"?uv(t,n,i):to(e)?bl(e)||mv(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tv(t,e,i,s))?dv(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),fv(t,e,i,s))};function Tv(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&wu.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wu.test(e)&&be(n)?!1:e in t}const bv=Ge({patchProp:Iv},lv);let Iu;function Cv(){return Iu||(Iu=$y(bv))}const Rv=(...t)=>{const e=Cv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Sv(i);if(!s)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Sv(t){return be(t)?document.querySelector(t):t}var Av=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const kv=Symbol();var Tu;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Tu||(Tu={}));function Ov(){const t=Df(!0),e=t.run(()=>xe({}));let n=[],i=[];const s=Dl({install(r){s._a=r,r.provide(kv,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!Av?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const oi=typeof window<"u";function Nv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function Xo(t,e){const n={};for(const i in e){const s=e[i];n[i]=Tt(s)?s.map(t):t(s)}return n}const ns=()=>{},Tt=Array.isArray,Pv=/\/$/,xv=t=>t.replace(Pv,"");function Qo(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Fv(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function Dv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Mv(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Ti(e.matched[i],n.matched[s])&&Sd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ti(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Lv(t[n],e[n]))return!1;return!0}function Lv(t,e){return Tt(t)?Cu(t,e):Tt(e)?Cu(e,t):t===e}function Cu(t,e){return Tt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Fv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var ms;(function(t){t.pop="pop",t.push="push"})(ms||(ms={}));var is;(function(t){t.back="back",t.forward="forward",t.unknown=""})(is||(is={}));function Uv(t){if(!t)if(oi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xv(t)}const Bv=/^[^#]+#/;function $v(t,e){return t.replace(Bv,"#")+e}function Hv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const po=()=>({left:window.pageXOffset,top:window.pageYOffset});function jv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Hv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ru(t,e){return(history.state?history.state.position-e:-1)+t}const Fa=new Map;function Wv(t,e){Fa.set(t,e)}function Vv(t){const e=Fa.get(t);return Fa.delete(t),e}let zv=()=>location.protocol+"//"+location.host;function Ad(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),bu(l,"")}return bu(n,t)+i+s}function Kv(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const g=Ad(t,location),_=n.value,I=e.value;let C=0;if(d){if(n.value=g,e.value=d,o&&o===_){o=null;return}C=I?d.position-I.position:0}else i(g);s.forEach(O=>{O(n.value,_,{delta:C,type:ms.pop,direction:C?C>0?is.forward:is.back:is.unknown})})};function l(){o=n.value}function c(d){s.push(d);const g=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return r.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(te({},d.state,{scroll:po()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Su(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?po():null}}function qv(t){const{history:e,location:n}=window,i={value:Ad(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:zv()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(l,c){const u=te({},e.state,Su(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=te({},s.value,e.state,{forward:l,scroll:po()});r(u.current,u,!0);const h=te({},Su(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Gv(t){t=Uv(t);const e=qv(t),n=Kv(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=te({location:"",base:t,go:i,createHref:$v.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Yv(t){return typeof t=="string"||t&&typeof t=="object"}function kd(t){return typeof t=="string"||typeof t=="symbol"}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Od=Symbol("");var Au;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Au||(Au={}));function bi(t,e){return te(new Error,{type:t,[Od]:!0},e)}function Vt(t,e){return t instanceof Error&&Od in t&&(e==null||!!(t.type&e))}const ku="[^/]+?",Xv={sensitive:!1,strict:!1,start:!0,end:!0},Qv=/[.+*?^${}()[\]/\\]/g;function Jv(t,e){const n=te({},Xv,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Qv,"\\$&"),g+=40;else if(d.type===1){const{value:_,repeatable:I,optional:C,regexp:O}=d;r.push({name:_,repeatable:I,optional:C});const U=O||ku;if(U!==ku){g+=10;try{new RegExp(`(${U})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${_}" (${U}): `+B.message)}}let P=I?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(P=C&&c.length<2?`(?:/${P})`:"/"+P),C&&(P+="?"),s+=P,g+=20,C&&(g+=-8),I&&(g+=-20),U===".*"&&(g+=-50)}u.push(g)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",_=r[d-1];h[_.name]=g&&_.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:I,optional:C}=g,O=_ in c?c[_]:"";if(Tt(O)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const U=Tt(O)?O.join("/"):O;if(!U)if(C)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=U}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Zv(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function eE(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Zv(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Ou(i))return 1;if(Ou(s))return-1}return s.length-i.length}function Ou(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tE={type:0,value:""},nE=/[a-zA-Z0-9_]/;function iE(t){if(!t)return[[]];if(t==="/")return[[tE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:nE.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function sE(t,e,n){const i=Jv(iE(t.path),n),s=te(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function rE(t,e){const n=[],i=new Map;e=xu({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const g=!d,_=oE(u);_.aliasOf=d&&d.record;const I=xu(e,u),C=[_];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of P)C.push(te({},_,{components:d?d.record.components:_.components,path:B,aliasOf:d?d.record:_}))}let O,U;for(const P of C){const{path:B}=P;if(h&&B[0]!=="/"){const he=h.record.path,_e=he[he.length-1]==="/"?"":"/";P.path=h.record.path+(B&&_e+B)}if(O=sE(P,h,I),d?d.alias.push(O):(U=U||O,U!==O&&U.alias.push(O),g&&u.name&&!Pu(O)&&o(u.name)),_.children){const he=_.children;for(let _e=0;_e<he.length;_e++)r(he[_e],O,d&&d.children[_e])}d=d||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&l(O)}return U?()=>{o(U)}:ns}function o(u){if(kd(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&eE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Nd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Pu(u)&&i.set(u.record.name,u)}function c(u,h){let d,g={},_,I;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw bi(1,{location:u});I=d.record.name,g=te(Nu(h.params,d.keys.filter(U=>!U.optional).map(U=>U.name)),u.params&&Nu(u.params,d.keys.map(U=>U.name))),_=d.stringify(g)}else if("path"in u)_=u.path,d=n.find(U=>U.re.test(_)),d&&(g=d.parse(_),I=d.record.name);else{if(d=h.name?i.get(h.name):n.find(U=>U.re.test(h.path)),!d)throw bi(1,{location:u,currentLocation:h});I=d.record.name,g=te({},h.params,u.params),_=d.stringify(g)}const C=[];let O=d;for(;O;)C.unshift(O.record),O=O.parent;return{name:I,path:_,params:g,matched:C,meta:lE(C)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Nu(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function oE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:aE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function aE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function Pu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lE(t){return t.reduce((e,n)=>te(e,n.meta),{})}function xu(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Nd(t,e){return e.children.some(n=>n===t||Nd(t,n))}const Pd=/#/g,cE=/&/g,uE=/\//g,hE=/=/g,fE=/\?/g,xd=/\+/g,dE=/%5B/g,pE=/%5D/g,Dd=/%5E/g,gE=/%60/g,Md=/%7B/g,mE=/%7C/g,Ld=/%7D/g,_E=/%20/g;function jl(t){return encodeURI(""+t).replace(mE,"|").replace(dE,"[").replace(pE,"]")}function yE(t){return jl(t).replace(Md,"{").replace(Ld,"}").replace(Dd,"^")}function Ua(t){return jl(t).replace(xd,"%2B").replace(_E,"+").replace(Pd,"%23").replace(cE,"%26").replace(gE,"`").replace(Md,"{").replace(Ld,"}").replace(Dd,"^")}function vE(t){return Ua(t).replace(hE,"%3D")}function EE(t){return jl(t).replace(Pd,"%23").replace(fE,"%3F")}function wE(t){return t==null?"":EE(t).replace(uE,"%2F")}function Cr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function IE(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(xd," "),o=r.indexOf("="),a=Cr(o<0?r:r.slice(0,o)),l=o<0?null:Cr(r.slice(o+1));if(a in e){let c=e[a];Tt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Du(t){let e="";for(let n in t){const i=t[n];if(n=vE(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tt(i)?i.map(r=>r&&Ua(r)):[i&&Ua(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function TE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Tt(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const bE=Symbol(""),Mu=Symbol(""),go=Symbol(""),Wl=Symbol(""),Ba=Symbol("");function Vi(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ln(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(bi(4,{from:n,to:e})):h instanceof Error?a(h):Yv(h)?a(bi(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Jo(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(CE(a)){const c=(a.__vccOpts||a)[e];c&&s.push(ln(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Nv(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&ln(d,n,i,r,o)()}))}}return s}function CE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Lu(t){const e=ct(go),n=ct(Wl),i=Ke(()=>e.resolve(Be(t.to))),s=Ke(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ti.bind(null,u));if(d>-1)return d;const g=Fu(l[c-2]);return c>1&&Fu(u)===g&&h[h.length-1].path!==g?h.findIndex(Ti.bind(null,l[c-2])):d}),r=Ke(()=>s.value>-1&&kE(n.params,i.value.params)),o=Ke(()=>s.value>-1&&s.value===n.matched.length-1&&Sd(n.params,i.value.params));function a(l={}){return AE(l)?e[Be(t.replace)?"replace":"push"](Be(t.to)).catch(ns):Promise.resolve()}return{route:i,href:Ke(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const RE=wn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Lu,setup(t,{slots:e}){const n=Ns(Lu(t)),{options:i}=ct(go),s=Ke(()=>({[Uu(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Uu(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Rd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),SE=RE;function AE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kE(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Tt(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Fu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Uu=(t,e,n)=>t??e??n,OE=wn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=ct(Ba),s=Ke(()=>t.route||i.value),r=ct(Mu,0),o=Ke(()=>{let c=Be(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ke(()=>s.value.matched[o.value]);dr(Mu,Ke(()=>o.value+1)),dr(bE,a),dr(Ba,s);const l=xe();return gn(()=>[l.value,a.value,t.name],([c,u,h],[d,g,_])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Ti(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Bu(n.default,{Component:d,route:c});const g=h.props[u],_=g?g===!0?c.params:typeof g=="function"?g(c):g:null,C=Rd(d,te({},_,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Bu(n.default,{Component:C,route:c})||C}}});function Bu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fd=OE;function NE(t){const e=rE(t.routes,t),n=t.parseQuery||IE,i=t.stringifyQuery||Du,s=t.history,r=Vi(),o=Vi(),a=Vi(),l=Y_(rn);let c=rn;oi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xo.bind(null,v=>""+v),h=Xo.bind(null,wE),d=Xo.bind(null,Cr);function g(v,N){let A,M;return kd(v)?(A=e.getRecordMatcher(v),M=N):M=v,e.addRoute(M,A)}function _(v){const N=e.getRecordMatcher(v);N&&e.removeRoute(N)}function I(){return e.getRoutes().map(v=>v.record)}function C(v){return!!e.getRecordMatcher(v)}function O(v,N){if(N=te({},N||l.value),typeof v=="string"){const f=Qo(n,v,N.path),p=e.resolve({path:f.path},N),m=s.createHref(f.fullPath);return te(f,p,{params:d(p.params),hash:Cr(f.hash),redirectedFrom:void 0,href:m})}let A;if("path"in v)A=te({},v,{path:Qo(n,v.path,N.path).path});else{const f=te({},v.params);for(const p in f)f[p]==null&&delete f[p];A=te({},v,{params:h(v.params)}),N.params=h(N.params)}const M=e.resolve(A,N),Q=v.hash||"";M.params=u(d(M.params));const me=Dv(i,te({},v,{hash:yE(Q),path:M.path})),z=s.createHref(me);return te({fullPath:me,hash:Q,query:i===Du?TE(v.query):v.query||{}},M,{redirectedFrom:void 0,href:z})}function U(v){return typeof v=="string"?Qo(n,v,l.value.path):te({},v)}function P(v,N){if(c!==v)return bi(8,{from:N,to:v})}function B(v){return We(v)}function he(v){return B(te(U(v),{replace:!0}))}function _e(v){const N=v.matched[v.matched.length-1];if(N&&N.redirect){const{redirect:A}=N;let M=typeof A=="function"?A(v):A;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=U(M):{path:M},M.params={}),te({query:v.query,hash:v.hash,params:"path"in M?{}:v.params},M)}}function We(v,N){const A=c=O(v),M=l.value,Q=v.state,me=v.force,z=v.replace===!0,f=_e(A);if(f)return We(te(U(f),{state:typeof f=="object"?te({},Q,f.state):Q,force:me,replace:z}),N||A);const p=A;p.redirectedFrom=N;let m;return!me&&Mv(i,M,A)&&(m=bi(16,{to:p,from:M}),Rn(M,M,!0,!1)),(m?Promise.resolve(m):Ct(p,M)).catch(y=>Vt(y)?Vt(y,2)?y:ft(y):oe(y,p,M)).then(y=>{if(y){if(Vt(y,2))return We(te({replace:z},U(y.to),{state:typeof y.to=="object"?te({},Q,y.to.state):Q,force:me}),N||p)}else y=nn(p,M,!0,z,Q);return rt(p,M,y),y})}function Ve(v,N){const A=P(v,N);return A?Promise.reject(A):Promise.resolve()}function Ct(v,N){let A;const[M,Q,me]=PE(v,N);A=Jo(M.reverse(),"beforeRouteLeave",v,N);for(const f of M)f.leaveGuards.forEach(p=>{A.push(ln(p,v,N))});const z=Ve.bind(null,v,N);return A.push(z),si(A).then(()=>{A=[];for(const f of r.list())A.push(ln(f,v,N));return A.push(z),si(A)}).then(()=>{A=Jo(Q,"beforeRouteUpdate",v,N);for(const f of Q)f.updateGuards.forEach(p=>{A.push(ln(p,v,N))});return A.push(z),si(A)}).then(()=>{A=[];for(const f of v.matched)if(f.beforeEnter&&!N.matched.includes(f))if(Tt(f.beforeEnter))for(const p of f.beforeEnter)A.push(ln(p,v,N));else A.push(ln(f.beforeEnter,v,N));return A.push(z),si(A)}).then(()=>(v.matched.forEach(f=>f.enterCallbacks={}),A=Jo(me,"beforeRouteEnter",v,N),A.push(z),si(A))).then(()=>{A=[];for(const f of o.list())A.push(ln(f,v,N));return A.push(z),si(A)}).catch(f=>Vt(f,8)?f:Promise.reject(f))}function rt(v,N,A){for(const M of a.list())M(v,N,A)}function nn(v,N,A,M,Q){const me=P(v,N);if(me)return me;const z=N===rn,f=oi?history.state:{};A&&(M||z?s.replace(v.fullPath,te({scroll:z&&f&&f.scroll},Q)):s.push(v.fullPath,Q)),l.value=v,Rn(v,N,A,z),ft()}let Rt;function ti(){Rt||(Rt=s.listen((v,N,A)=>{if(!Ys.listening)return;const M=O(v),Q=_e(M);if(Q){We(te(Q,{replace:!0}),M).catch(ns);return}c=M;const me=l.value;oi&&Wv(Ru(me.fullPath,A.delta),po()),Ct(M,me).catch(z=>Vt(z,12)?z:Vt(z,2)?(We(z.to,M).then(f=>{Vt(f,20)&&!A.delta&&A.type===ms.pop&&s.go(-1,!1)}).catch(ns),Promise.reject()):(A.delta&&s.go(-A.delta,!1),oe(z,M,me))).then(z=>{z=z||nn(M,me,!1),z&&(A.delta&&!Vt(z,8)?s.go(-A.delta,!1):A.type===ms.pop&&Vt(z,20)&&s.go(-1,!1)),rt(M,me,z)}).catch(ns)}))}let Cn=Vi(),Hi=Vi(),we;function oe(v,N,A){ft(v);const M=Hi.list();return M.length?M.forEach(Q=>Q(v,N,A)):console.error(v),Promise.reject(v)}function ie(){return we&&l.value!==rn?Promise.resolve():new Promise((v,N)=>{Cn.add([v,N])})}function ft(v){return we||(we=!v,ti(),Cn.list().forEach(([N,A])=>v?A(v):N()),Cn.reset()),v}function Rn(v,N,A,M){const{scrollBehavior:Q}=t;if(!oi||!Q)return Promise.resolve();const me=!A&&Vv(Ru(v.fullPath,0))||(M||!A)&&history.state&&history.state.scroll||null;return ao().then(()=>Q(v,N,me)).then(z=>z&&jv(z)).catch(z=>oe(z,v,N))}const dt=v=>s.go(v);let Ye;const ni=new Set,Ys={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,hasRoute:C,getRoutes:I,resolve:O,options:t,push:B,replace:he,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Hi.add,isReady:ie,install(v){const N=this;v.component("RouterLink",SE),v.component("RouterView",Fd),v.config.globalProperties.$router=N,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Be(l)}),oi&&!Ye&&l.value===rn&&(Ye=!0,B(s.location).catch(Q=>{}));const A={};for(const Q in rn)A[Q]=Ke(()=>l.value[Q]);v.provide(go,N),v.provide(Wl,Ns(A)),v.provide(Ba,l);const M=v.unmount;ni.add(v),v.unmount=function(){ni.delete(v),ni.size<1&&(c=rn,Rt&&Rt(),Rt=null,l.value=rn,Ye=!1,we=!1),M()}}};return Ys}function si(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function PE(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ti(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ti(c,l))||s.push(l))}return[n,i,s]}function yk(){return ct(go)}function vk(){return ct(Wl)}const xE=wn({__name:"App",setup(t){return(e,n)=>(ye(),ho(Be(Fd)))}}),DE="modulepreload",ME=function(t){return"/"+t},$u={},Zo=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=ME(r),r in $u)return;$u[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":DE,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
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
 */const Ud={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw Pi(e)},Pi=function(t){return new Error("Firebase Database ("+Ud.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Bd=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},LE=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),i.push(n[u],n[h],n[d],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new FE;const d=r<<2|a>>4;if(i.push(d),c!==64){const g=a<<4&240|c>>2;if(i.push(g),h!==64){const _=c<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $d=function(t){const e=Bd(t);return mo.encodeByteArray(e,!0)},Hd=function(t){return $d(t).replace(/\./g,"")},Rr=function(t){try{return mo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function UE(t){return jd(void 0,t)}function jd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!BE(n)||(t[n]=jd(t[n],e[n]));return t}function BE(t){return t!=="__proto__"}/**
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
 */function $E(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HE=()=>$E().__FIREBASE_DEFAULTS__,jE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rr(t[1]);return e&&JSON.parse(e)},Vl=()=>{try{return HE()||jE()||WE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},VE=t=>{var e,n;return(n=(e=Vl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zE=()=>{var t;return(t=Vl())===null||t===void 0?void 0:t.config},Wd=t=>{var e;return(e=Vl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function KE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qE(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zd(){return Ud.NODE_ADMIN===!0}function Kd(){try{return typeof indexedDB=="object"}catch{return!1}}function GE(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const YE="FirebaseError";class jt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=YE,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?XE(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new jt(s,a,i)}}function XE(t,e){return t.replace(QE,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const QE=/\{\$([^}]+)}/g;/**
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
 */function ys(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
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
 */const qd=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=ys(Rr(r[0])||""),n=ys(Rr(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},JE=function(t){const e=qd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ZE=function(t){const e=qd(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function tn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ci(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function $a(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sr(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Ar(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Hu(r)&&Hu(o)){if(!Ar(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Hu(t){return t!==null&&typeof t=="object"}/**
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
 */function Di(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class e0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function t0(t,e){const n=new n0(t,e);return n.subscribe.bind(n)}class n0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");i0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=ea),s.error===void 0&&(s.error=ea),s.complete===void 0&&(s.complete=ea);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ea(){}function s0(t,e){return`${t} failed: ${e} argument `}/**
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
 */const r0=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,S(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_o=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function In(t){return t&&t._delegate?t._delegate:t}class bt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const On="[DEFAULT]";/**
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
 */class o0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new _s;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l0(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:a0(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a0(t){return t===On?void 0:t}function l0(t){return t.instantiationMode==="EAGER"}/**
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
 */class c0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new o0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const u0={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},h0=ne.INFO,f0={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},d0=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=f0[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ps{constructor(e){this.name=e,this._logLevel=h0,this._logHandler=d0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const p0=(t,e)=>e.some(n=>t instanceof n);let ju,Wu;function g0(){return ju||(ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m0(){return Wu||(Wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gd=new WeakMap,Ha=new WeakMap,Yd=new WeakMap,ta=new WeakMap,Kl=new WeakMap;function _0(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(mn(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gd.set(n,t)}).catch(()=>{}),Kl.set(e,t),e}function y0(t){if(Ha.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ha.set(t,e)}let ja={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ha.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function v0(t){ja=t(ja)}function E0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(na(this),e,...n);return Yd.set(i,e.sort?e.sort():[e]),mn(i)}:m0().includes(t)?function(...e){return t.apply(na(this),e),mn(Gd.get(this))}:function(...e){return mn(t.apply(na(this),e))}}function w0(t){return typeof t=="function"?E0(t):(t instanceof IDBTransaction&&y0(t),p0(t,g0())?new Proxy(t,ja):t)}function mn(t){if(t instanceof IDBRequest)return _0(t);if(ta.has(t))return ta.get(t);const e=w0(t);return e!==t&&(ta.set(t,e),Kl.set(e,t)),e}const na=t=>Kl.get(t);function I0(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=mn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(mn(o.result),l.oldVersion,l.newVersion,mn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const T0=["get","getKey","getAll","getAllKeys","count"],b0=["put","add","delete","clear"],ia=new Map;function Vu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ia.get(e))return ia.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=b0.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||T0.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return ia.set(e,r),r}v0(t=>({...t,get:(e,n,i)=>Vu(e,n)||t.get(e,n,i),has:(e,n)=>!!Vu(e,n)||t.has(e,n)}));/**
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
 */class C0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(R0(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function R0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wa="@firebase/app",zu="0.9.5";/**
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
 */const Kn=new Ps("@firebase/app"),S0="@firebase/app-compat",A0="@firebase/analytics-compat",k0="@firebase/analytics",O0="@firebase/app-check-compat",N0="@firebase/app-check",P0="@firebase/auth",x0="@firebase/auth-compat",D0="@firebase/database",M0="@firebase/database-compat",L0="@firebase/functions",F0="@firebase/functions-compat",U0="@firebase/installations",B0="@firebase/installations-compat",$0="@firebase/messaging",H0="@firebase/messaging-compat",j0="@firebase/performance",W0="@firebase/performance-compat",V0="@firebase/remote-config",z0="@firebase/remote-config-compat",K0="@firebase/storage",q0="@firebase/storage-compat",G0="@firebase/firestore",Y0="@firebase/firestore-compat",X0="firebase",Q0="9.18.0";/**
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
 */const Va="[DEFAULT]",J0={[Wa]:"fire-core",[S0]:"fire-core-compat",[k0]:"fire-analytics",[A0]:"fire-analytics-compat",[N0]:"fire-app-check",[O0]:"fire-app-check-compat",[P0]:"fire-auth",[x0]:"fire-auth-compat",[D0]:"fire-rtdb",[M0]:"fire-rtdb-compat",[L0]:"fire-fn",[F0]:"fire-fn-compat",[U0]:"fire-iid",[B0]:"fire-iid-compat",[$0]:"fire-fcm",[H0]:"fire-fcm-compat",[j0]:"fire-perf",[W0]:"fire-perf-compat",[V0]:"fire-rc",[z0]:"fire-rc-compat",[K0]:"fire-gcs",[q0]:"fire-gcs-compat",[G0]:"fire-fst",[Y0]:"fire-fst-compat","fire-js":"fire-js",[X0]:"fire-js-all"};/**
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
 */const kr=new Map,za=new Map;function Z0(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ut(t){const e=t.name;if(za.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;za.set(e,t);for(const n of kr.values())Z0(n,t);return!0}function Xd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ew={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_n=new xi("app","Firebase",ew);/**
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
 */class tw{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const Jn=Q0;function Qd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Va,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw _n.create("bad-app-name",{appName:String(s)});if(n||(n=zE()),!n)throw _n.create("no-options");const r=kr.get(s);if(r){if(Ar(n,r.options)&&Ar(i,r.config))return r;throw _n.create("duplicate-app",{appName:s})}const o=new c0(s);for(const l of za.values())o.addComponent(l);const a=new tw(n,i,o);return kr.set(s,a),a}function Jd(t=Va){const e=kr.get(t);if(!e&&t===Va)return Qd();if(!e)throw _n.create("no-app",{appName:t});return e}function it(t,e,n){var i;let s=(i=J0[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}Ut(new bt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const nw="firebase-heartbeat-database",iw=1,vs="firebase-heartbeat-store";let sa=null;function Zd(){return sa||(sa=I0(nw,iw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vs)}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),sa}async function sw(t){try{return(await Zd()).transaction(vs).objectStore(vs).get(ep(t))}catch(e){if(e instanceof jt)Kn.warn(e.message);else{const n=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function Ku(t,e){try{const i=(await Zd()).transaction(vs,"readwrite");return await i.objectStore(vs).put(e,ep(t)),i.done}catch(n){if(n instanceof jt)Kn.warn(n.message);else{const i=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(i.message)}}}function ep(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rw=1024,ow=30*24*60*60*1e3;class aw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cw(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=ow}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qu(),{heartbeatsToSend:n,unsentEntries:i}=lw(this._heartbeatsCache.heartbeats),s=Hd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function qu(){return new Date().toISOString().substring(0,10)}function lw(t,e=rw){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Gu(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gu(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class cw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kd()?GE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ku(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ku(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gu(t){return Hd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uw(t){Ut(new bt("platform-logger",e=>new C0(e),"PRIVATE")),Ut(new bt("heartbeat",e=>new aw(e),"PRIVATE")),it(Wa,zu,t),it(Wa,zu,"esm2017"),it("fire-js","")}uw("");function ql(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function tp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hw=tp,np=new xi("auth","Firebase",tp());/**
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
 */const Yu=new Ps("@firebase/auth");function _r(t,...e){Yu.logLevel<=ne.ERROR&&Yu.error(`Auth (${Jn}): ${t}`,...e)}/**
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
 */function Bt(t,...e){throw Gl(t,...e)}function xt(t,...e){return Gl(t,...e)}function ip(t,e,n){const i=Object.assign(Object.assign({},hw()),{[e]:n});return new xi("auth","Firebase",i).create(e,{appName:t.name})}function fw(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Bt(t,"argument-error"),ip(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gl(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return np.create(t,...e)}function $(t,e,...n){if(!t)throw Gl(e,...n)}function Kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _r(e),new Error(e)}function Jt(t,e){t||Kt(e)}/**
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
 */const Xu=new Map;function qt(t){Jt(t instanceof Function,"Expected a class definition");let e=Xu.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xu.set(t,e),e)}/**
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
 */function dw(t,e){const n=Xd(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Ar(r,e??{}))return s;Bt(s,"already-initialized")}return n.initialize({options:e})}function pw(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ka(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gw(){return Qu()==="http:"||Qu()==="https:"}function Qu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function mw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gw()||KE()||"connection"in navigator)?navigator.onLine:!0}function _w(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=zl()||Vd()}get(){return mw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yl(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sp{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const vw=new xs(3e4,6e4);function Ew(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yo(t,e,n,i,s={}){return rp(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Di(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),sp.fetch()(op(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function rp(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},yw),e);try{const s=new Iw(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw nr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw nr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw nr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw nr(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ip(t,u,c);Bt(t,u)}}catch(s){if(s instanceof jt)throw s;Bt(t,"internal-error",{message:String(s)})}}async function ww(t,e,n,i,s={}){const r=await yo(t,e,n,i,s);return"mfaPendingCredential"in r&&Bt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function op(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Yl(t.config,s):`${t.config.apiScheme}://${s}`}class Iw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(xt(this.auth,"network-request-failed")),vw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=xt(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function Tw(t,e){return yo(t,"POST","/v1/accounts:delete",e)}async function bw(t,e){return yo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ss(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cw(t,e=!1){const n=In(t),i=await n.getIdToken(e),s=Xl(i);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ss(ra(s.auth_time)),issuedAtTime:ss(ra(s.iat)),expirationTime:ss(ra(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ra(t){return Number(t)*1e3}function Xl(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return _r("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rr(n);return s?JSON.parse(s):(_r("Failed to decode base64 JWT payload"),null)}catch(s){return _r("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rw(t){const e=Xl(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Es(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof jt&&Sw(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Sw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Aw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ap{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ss(this.lastLoginAt),this.creationTime=ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Or(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Es(t,bw(n,{idToken:i}));$(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Nw(r.providerUserInfo):[],a=Ow(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ap(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function kw(t){const e=In(t);await Or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ow(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Nw(t){return t.map(e=>{var{providerId:n}=e,i=ql(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Pw(t,e){const n=await rp(t,{},async()=>{const i=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=op(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sp.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Pw(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new ws;return i&&($(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&($(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
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
 */function on(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=ql(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Aw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ap(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Es(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Cw(this,e)}reload(){return kw(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Or(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Es(this,Tw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(c=n.createdAt)!==null&&c!==void 0?c:void 0,U=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:B,isAnonymous:he,providerData:_e,stsTokenManager:We}=n;$(P&&We,e,"internal-error");const Ve=ws.fromJSON(this.name,We);$(typeof P=="string",e,"internal-error"),on(h,e.name),on(d,e.name),$(typeof B=="boolean",e,"internal-error"),$(typeof he=="boolean",e,"internal-error"),on(g,e.name),on(_,e.name),on(I,e.name),on(C,e.name),on(O,e.name),on(U,e.name);const Ct=new jn({uid:P,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:he,photoURL:_,phoneNumber:g,tenantId:I,stsTokenManager:Ve,createdAt:O,lastLoginAt:U});return _e&&Array.isArray(_e)&&(Ct.providerData=_e.map(rt=>Object.assign({},rt))),C&&(Ct._redirectEventId=C),Ct}static async _fromIdTokenResponse(e,n,i=!1){const s=new ws;s.updateFromServerResponse(n);const r=new jn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Or(r),r}}/**
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
 */class lp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lp.type="NONE";const Ju=lp;/**
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
 */function yr(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=yr(this.userKey,s.apiKey,r),this.fullPersistenceKey=yr("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new gi(qt(Ju),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||qt(Ju);const o=yr(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=jn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new gi(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new gi(r,e,i))}}/**
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
 */function Zu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dp(e))return"Blackberry";if(pp(e))return"Webos";if(Ql(e))return"Safari";if((e.includes("chrome/")||up(e))&&!e.includes("edge/"))return"Chrome";if(fp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function cp(t=je()){return/firefox\//i.test(t)}function Ql(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function up(t=je()){return/crios\//i.test(t)}function hp(t=je()){return/iemobile/i.test(t)}function fp(t=je()){return/android/i.test(t)}function dp(t=je()){return/blackberry/i.test(t)}function pp(t=je()){return/webos/i.test(t)}function vo(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xw(t=je()){var e;return vo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Dw(){return qE()&&document.documentMode===10}function gp(t=je()){return vo(t)||fp(t)||pp(t)||dp(t)||/windows phone/i.test(t)||hp(t)}function Mw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function mp(t,e=[]){let n;switch(t){case"Browser":n=Zu(je());break;case"Worker":n=`${Zu(je())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jn}/${i}`}/**
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
 */class Lw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class Fw{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eh(this),this.idTokenSubscription=new eh(this),this.beforeStateQueue=new Lw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=np,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Or(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_w()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?In(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function Eo(t){return In(t)}class eh{constructor(e){this.auth=e,this.observer=null,this.addObserver=t0(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Uw(t,e,n){const i=Eo(t);$(i._canInitEmulator,i,"emulator-config-failed"),$(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=_p(e),{host:o,port:a}=Bw(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||$w()}function _p(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bw(t){const e=_p(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:th(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:th(o)}}}function th(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $w(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,n){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}/**
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
 */async function mi(t,e){return ww(t,"POST","/v1/accounts:signInWithIdp",Ew(t,e))}/**
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
 */const Hw="http://localhost";class qn extends yp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=ql(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new qn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,mi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mi(e,n)}buildRequest(){const e={requestUri:Hw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Di(n)}return e}}/**
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
 */class Jl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ds extends Jl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class cn extends Ds{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
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
 */class un extends Ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return un.credential(n,i)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
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
 */class hn extends Ds{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
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
 */class fn extends Ds{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return fn.credential(n,i)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
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
 */class Ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await jn._fromIdTokenResponse(e,i,s),o=nh(i);return new Ri({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=nh(i);return new Ri({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function nh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Nr extends jt{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Nr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Nr(e,n,i,s)}}function vp(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Nr._fromErrorAndOperation(t,r,e,i):r})}async function jw(t,e,n=!1){const i=await Es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ri._forOperation(t,"link",i)}/**
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
 */async function Ww(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Es(t,vp(i,s,e,t),n);$(r.idToken,i,"internal-error");const o=Xl(r.idToken);$(o,i,"internal-error");const{sub:a}=o;return $(t.uid===a,i,"user-mismatch"),Ri._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Bt(i,"user-mismatch"),r}}/**
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
 */async function Vw(t,e,n=!1){const i="signIn",s=await vp(t,i,e),r=await Ri._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function Ep(t,e,n,i){return In(t).onIdTokenChanged(e,n,i)}function zw(t,e,n){return In(t).beforeAuthStateChanged(e,n)}function Ek(t){return In(t).signOut()}const Pr="__sak";/**
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
 */class wp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pr,"1"),this.storage.removeItem(Pr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Kw(){const t=je();return Ql(t)||vo(t)}const qw=1e3,Gw=10;class Ip extends wp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Kw()&&Mw(),this.fallbackToPolling=gp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Dw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Gw):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},qw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ip.type="LOCAL";const Yw=Ip;/**
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
 */class Tp extends wp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tp.type="SESSION";const bp=Tp;/**
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
 */function Xw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new wo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Xw(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wo.receivers=[];/**
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
 */function Zl(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Qw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Zl("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Dt(){return window}function Jw(t){Dt().location.href=t}/**
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
 */function Cp(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function Zw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tI(){return Cp()?self:null}/**
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
 */const Rp="firebaseLocalStorageDb",nI=1,xr="firebaseLocalStorage",Sp="fbase_key";class Ms{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Io(t,e){return t.transaction([xr],e?"readwrite":"readonly").objectStore(xr)}function iI(){const t=indexedDB.deleteDatabase(Rp);return new Ms(t).toPromise()}function qa(){const t=indexedDB.open(Rp,nI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(xr,{keyPath:Sp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(xr)?e(i):(i.close(),await iI(),e(await qa()))})})}async function ih(t,e,n){const i=Io(t,!0).put({[Sp]:e,value:n});return new Ms(i).toPromise()}async function sI(t,e){const n=Io(t,!1).get(e),i=await new Ms(n).toPromise();return i===void 0?null:i.value}function sh(t,e){const n=Io(t,!0).delete(e);return new Ms(n).toPromise()}const rI=800,oI=3;class Ap{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>oI)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wo._getInstance(tI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Zw(),!this.activeServiceWorker)return;this.sender=new Qw(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qa();return await ih(e,Pr,"1"),await sh(e,Pr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ih(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>sI(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Io(s,!1).getAll();return new Ms(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ap.type="LOCAL";const aI=Ap;/**
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
 */function lI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function cI(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=xt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",lI().appendChild(i)})}function uI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new xs(3e4,6e4);/**
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
 */function kp(t,e){return e?qt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ec extends yp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hI(t){return Vw(t.auth,new ec(t),t.bypassAuthState)}function fI(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Ww(n,new ec(t),t.bypassAuthState)}async function dI(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),jw(n,new ec(t),t.bypassAuthState)}/**
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
 */class Op{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hI;case"linkViaPopup":case"linkViaRedirect":return dI;case"reauthViaPopup":case"reauthViaRedirect":return fI;default:Bt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pI=new xs(2e3,1e4);async function wk(t,e,n){const i=Eo(t);fw(t,e,Jl);const s=kp(i,n);return new Mn(i,"signInViaPopup",e,s).executeNotNull()}class Mn extends Op{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Zl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,pI.get())};e()}}Mn.currentPopupAction=null;/**
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
 */const gI="pendingRedirect",vr=new Map;class mI extends Op{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=vr.get(this.auth._key());if(!e){try{const i=await _I(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}vr.set(this.auth._key(),e)}return this.bypassAuthState||vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _I(t,e){const n=EI(e),i=vI(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function yI(t,e){vr.set(t._key(),e)}function vI(t){return qt(t._redirectPersistence)}function EI(t){return yr(gI,t.config.apiKey,t.name)}async function wI(t,e,n=!1){const i=Eo(t),s=kp(i,e),o=await new mI(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const II=10*60*1e3;class TI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Np(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=II&&this.cachedEventUids.clear(),this.cachedEventUids.has(rh(e))}saveEventToCache(e){this.cachedEventUids.add(rh(e)),this.lastProcessedEventTime=Date.now()}}function rh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Np({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Np(t);default:return!1}}/**
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
 */async function CI(t,e={}){return yo(t,"GET","/v1/projects",e)}/**
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
 */const RI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SI=/^https?/;async function AI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CI(t);for(const n of e)try{if(kI(n))return}catch{}Bt(t,"unauthorized-domain")}function kI(t){const e=Ka(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!SI.test(n))return!1;if(RI.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const OI=new xs(3e4,6e4);function oh(){const t=Dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NI(t){return new Promise((e,n)=>{var i,s,r;function o(){oh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oh(),n(xt(t,"network-request-failed"))},timeout:OI.get()})}if(!((s=(i=Dt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Dt().gapi)===null||r===void 0)&&r.load)o();else{const a=uI("iframefcb");return Dt()[a]=()=>{gapi.load?o():n(xt(t,"network-request-failed"))},cI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Er=null,e})}let Er=null;function PI(t){return Er=Er||NI(t),Er}/**
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
 */const xI=new xs(5e3,15e3),DI="__/auth/iframe",MI="emulator/auth/iframe",LI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UI(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yl(e,MI):`https://${t.config.authDomain}/${DI}`,i={apiKey:e.apiKey,appName:t.name,v:Jn},s=FI.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Di(i).slice(1)}`}async function BI(t){const e=await PI(t),n=Dt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:UI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LI,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),a=Dt().setTimeout(()=>{r(o)},xI.get());function l(){Dt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const $I={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HI=500,jI=600,WI="_blank",VI="http://localhost";class ah{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zI(t,e,n,i=HI,s=jI){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},$I),{width:i.toString(),height:s.toString(),top:r,left:o}),c=je().toLowerCase();n&&(a=up(c)?WI:n),cp(c)&&(e=e||VI,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(xw(c)&&a!=="_self")return KI(e||"",a),new ah(null);const h=window.open(e||"",a,u);$(h,t,"popup-blocked");try{h.focus()}catch{}return new ah(h)}function KI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const qI="__/auth/handler",GI="emulator/auth/handler";function lh(t,e,n,i,s,r){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Jn,eventId:s};if(e instanceof Jl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$a(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Ds){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${YI(t)}?${Di(a).slice(1)}`}function YI({config:t}){return t.emulator?Yl(t,GI):`https://${t.authDomain}/${qI}`}/**
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
 */const oa="webStorageSupport";class XI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bp,this._completeRedirectFn=wI,this._overrideRedirectResult=yI}async _openPopup(e,n,i,s){var r;Jt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=lh(e,n,i,Ka(),s);return zI(e,o,Zl())}async _openRedirect(e,n,i,s){return await this._originValidation(e),Jw(lh(e,n,i,Ka(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Jt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await BI(e),i=new TI(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oa,{type:oa},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[oa];o!==void 0&&n(!!o),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gp()||Ql()||vo()}}const QI=XI;var ch="@firebase/auth",uh="0.21.5";/**
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
 */class JI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eT(t){Ut(new bt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,l)=>{$(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mp(t)},u=new Fw(a,l,c);return pw(u,n),u})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ut(new bt("auth-internal",e=>{const n=Eo(e.getProvider("auth").getImmediate());return(i=>new JI(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(ch,uh,ZI(t)),it(ch,uh,"esm2017")}/**
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
 */const tT=5*60,nT=Wd("authIdTokenMaxAge")||tT;let hh=null;const iT=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>nT)return;const s=n==null?void 0:n.token;hh!==s&&(hh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sT(t=Jd()){const e=Xd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dw(t,{popupRedirectResolver:QI,persistence:[aI,Yw,bp]}),i=Wd("authTokenSyncURL");if(i){const r=iT(i);zw(n,r,()=>r(n.currentUser)),Ep(n,o=>r(o))}const s=VE("auth");return s&&Uw(n,`http://${s}`),n}eT("Browser");/**
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
 */const rT=new Map,oT={activated:!1,tokenObservers:[]};function $t(t){return rT.get(t)||Object.assign({},oT)}const fh={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class aT{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new _s,await lT(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new _s,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function lT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const cT={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Dr=new xi("appCheck","AppCheck",cT);function uT(t){if(!$t(t).activated)throw Dr.create("use-before-activation",{appName:t.name})}/**
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
 */const hT="firebase-app-check-database",fT=1,Ga="firebase-app-check-store";let ir=null;function dT(){return ir||(ir=new Promise((t,e)=>{try{const n=indexedDB.open(hT,fT);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Dr.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Ga,{keyPath:"compositeKey"})}}}catch(n){e(Dr.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ir)}function pT(t,e){return gT(mT(t),e)}async function gT(t,e){const i=(await dT()).transaction(Ga,"readwrite"),r=i.objectStore(Ga).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(Dr.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function mT(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Ya=new Ps("@firebase/app-check");function dh(t,e){return Kd()?pT(t,e).catch(n=>{Ya.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const _T={error:"UNKNOWN_ERROR"};function yT(t){return mo.encodeString(JSON.stringify(t),!1)}async function Xa(t,e=!1){const n=t.app;uT(n);const i=$t(n);let s=i.token,r;if(s&&!Qi(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(Qi(l)?s=l:await dh(n,void 0))}if(!e&&s&&Qi(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await $t(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Ya.warn(l.message):Ya.error(l),r=l}let a;return s?r?Qi(s)?a={token:s.token,internalError:r}:a=gh(r):(a={token:s.token},i.token=s,await dh(n,s)):a=gh(r),o&&wT(n,a),a}function vT(t,e,n,i){const{app:s}=t,r=$t(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Qi(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),ph(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>ph(t))}function Pp(t,e){const n=$t(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function ph(t){const{app:e}=t,n=$t(e);let i=n.tokenRefresher;i||(i=ET(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function ET(t){const{app:e}=t;return new aT(async()=>{const n=$t(e);let i;if(n.token?i=await Xa(t,!0):i=await Xa(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=$t(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},fh.RETRIAL_MIN_WAIT,fh.RETRIAL_MAX_WAIT)}function wT(t,e){const n=$t(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Qi(t){return t.expireTimeMillis-Date.now()>0}function gh(t){return{token:yT(_T),error:t}}/**
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
 */class IT{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=$t(this.app);for(const n of e)Pp(this.app,n.next);return Promise.resolve()}}function TT(t,e){return new IT(t,e)}function bT(t){return{getToken:e=>Xa(t,e),addTokenListener:e=>vT(t,"INTERNAL",e),removeTokenListener:e=>Pp(t.app,e)}}const CT="@firebase/app-check",RT="0.6.4",ST="app-check",mh="app-check-internal";function AT(){Ut(new bt(ST,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return TT(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(mh).initialize()})),Ut(new bt(mh,t=>{const e=t.getProvider("app-check").getImmediate();return bT(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),it(CT,RT)}AT();var kT="firebase",OT="9.18.0";/**
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
 */it(kT,OT,"app");const xp=Symbol("firebaseApp");function Dp(t){return Td()&&ct(xp,null)||Jd(t)}const sr=new WeakMap;function NT(t,e){if(!sr.has(t)){const n=Df(!0);sr.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),sr.delete(t)}}return sr.get(t)}const Mp=new WeakMap;function Ik(t){return Mp.get(Dp(t))}const rr=new WeakMap;function Lp(t){const e=Dp(t);if(!rr.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{rr.set(e,r),n(r.value)}];rr.set(e,s)}return rr.get(e)}function PT(t){const e=Lp(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function xT(t,e){const n=sT(e);Ep(n,i=>{const s=Lp();t.value=i,Array.isArray(s)&&s[1](t)})}const _h="@firebase/database",yh="0.14.4";/**
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
 */let Fp="";function DT(t){Fp=t}/**
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
 */class MT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ys(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class LT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Up=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new MT(e)}}catch{}return new LT},Ln=Up("localStorage"),Qa=Up("sessionStorage");/**
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
 */const _i=new Ps("@firebase/database"),FT=function(){let t=1;return function(){return t++}}(),Bp=function(t){const e=r0(t),n=new e0;n.update(e);const i=n.digest();return mo.encodeByteArray(i)},Ls=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ls.apply(null,i):typeof i=="object"?e+=ke(i):e+=i,e+=" "}return e};let Wn=null,vh=!0;const UT=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(_i.logLevel=ne.VERBOSE,Wn=_i.log.bind(_i),e&&Qa.set("logging_enabled",!0)):typeof t=="function"?Wn=t:(Wn=null,Qa.remove("logging_enabled"))},De=function(...t){if(vh===!0&&(vh=!1,Wn===null&&Qa.get("logging_enabled")===!0&&UT(!0)),Wn){const e=Ls.apply(null,t);Wn(e)}},Fs=function(t){return function(...e){De(t,...e)}},Ja=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ls(...t);_i.error(e)},Gn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ls(...t)}`;throw _i.error(e),new Error(e)},st=function(...t){const e="FIREBASE WARNING: "+Ls(...t);_i.warn(e)},BT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&st("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$p=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$T=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Si="[MIN_NAME]",Yn="[MAX_NAME]",Mi=function(t,e){if(t===e)return 0;if(t===Si||e===Yn)return-1;if(e===Si||t===Yn)return 1;{const n=Eh(t),i=Eh(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},HT=function(t,e){return t===e?0:t<e?-1:1},zi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},tc=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=ke(e[i]),n+=":",n+=tc(t[e[i]]);return n+="}",n},Hp=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function ut(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const jp=function(t){S(!$p(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},jT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},WT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},VT=new RegExp("^-?(0*)\\d{1,10}$"),zT=-2147483648,KT=2147483647,Eh=function(t){if(VT.test(t)){const e=Number(t);if(e>=zT&&e<=KT)return e}return null},Us=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw st("Exception was thrown by user callback.",n),e},Math.floor(0))}},qT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},rs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class GT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){st(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class YT{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(De("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',st(e)}}class Za{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Za.OWNER="owner";/**
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
 */const nc="5",Wp="v",Vp="s",zp="r",Kp="f",qp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gp="ls",Yp="p",el="ac",Xp="websocket",Qp="long_polling";/**
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
 */class XT{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ln.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ln.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function QT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Jp(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let i;if(e===Xp)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Qp)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);QT(t)&&(n.ns=t.namespace);const s=[];return ut(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class JT{constructor(){this.counters_={}}incrementCounter(e,n=1){tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return UE(this.counters_)}}/**
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
 */const aa={},la={};function ic(t){const e=t.toString();return aa[e]||(aa[e]=new JT),aa[e]}function ZT(t,e){const n=t.toString();return la[n]||(la[n]=e()),la[n]}/**
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
 */class eb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Us(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const wh="start",tb="close",nb="pLPCommand",ib="pRTLPCB",Zp="id",eg="pw",tg="ser",sb="cb",rb="seg",ob="ts",ab="d",lb="dframe",ng=1870,ig=30,cb=ng-ig,ub=25e3,hb=3e4;class li{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fs(e),this.stats_=ic(n),this.urlFn=l=>(this.appCheckToken&&(l[el]=this.appCheckToken),Jp(n,Qp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new eb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hb)),$T(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sc((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===wh)this.id=a,this.password=l;else if(o===tb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[wh]="t",i[tg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[sb]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Wp]=nc,this.transportSessionId&&(i[Vp]=this.transportSessionId),this.lastSessionId&&(i[Gp]=this.lastSessionId),this.applicationId&&(i[Yp]=this.applicationId),this.appCheckToken&&(i[el]=this.appCheckToken),typeof location<"u"&&location.hostname&&qp.test(location.hostname)&&(i[zp]=Kp);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){li.forceAllow_=!0}static forceDisallow(){li.forceDisallow_=!0}static isAvailable(){return li.forceAllow_?!0:!li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jT()&&!WT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=$d(n),s=Hp(i,cb);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[lb]="t",i[Zp]=e,i[eg]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sc{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=FT(),window[nb+this.uniqueCallbackIdentifier]=e,window[ib+this.uniqueCallbackIdentifier]=n,this.myIFrame=sc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){De("frame writing exception"),a.stack&&De(a.stack),De(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||De("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zp]=this.myID,e[eg]=this.myPW,e[tg]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ig+i.length<=ng;){const o=this.pendingSegs.shift();i=i+"&"+rb+s+"="+o.seg+"&"+ob+s+"="+o.ts+"&"+ab+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(ub)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{De("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const fb=16384,db=45e3;let Mr=null;typeof MozWebSocket<"u"?Mr=MozWebSocket:typeof WebSocket<"u"&&(Mr=WebSocket);class mt{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fs(this.connId),this.stats_=ic(n),this.connURL=mt.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Wp]=nc,typeof location<"u"&&location.hostname&&qp.test(location.hostname)&&(o[zp]=Kp),n&&(o[Vp]=n),i&&(o[Gp]=i),s&&(o[el]=s),r&&(o[Yp]=r),Jp(e,Xp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ln.set("previous_websocket_failure",!0);try{let i;zd(),this.mySock=new Mr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Mr!==null&&!mt.forceDisallow_}static previouslyFailed(){return Ln.isInMemoryStorage||Ln.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ln.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ys(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Hp(n,fb);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(db))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mt.responsesRequiredToBeHealthy=2;mt.healthyTimeout=3e4;/**
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
 */class Is{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[li,mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=mt&&mt.isAvailable();let i=n&&!mt.previouslyFailed();if(e.webSocketOnly&&(n||st("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[mt];else{const s=this.transports_=[];for(const r of Is.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Is.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Is.globalTransportInitialized_=!1;/**
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
 */const pb=6e4,gb=5e3,mb=10*1024,_b=100*1024,ca="t",Ih="d",yb="s",Th="r",vb="e",bh="o",Ch="a",Rh="n",Sh="p",Eb="h";class wb{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fs("c:"+this.id+":"),this.transportManager_=new Is(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=rs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_b?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ca in e){const n=e[ca];n===Ch?this.upgradeIfSecondaryHealthy_():n===Th?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===bh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zi("t",e),i=zi("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ch,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zi("t",e),i=zi("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zi(ca,e);if(Ih in e){const i=e[Ih];if(n===Eb){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Rh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yb?this.onConnectionShutdown_(i):n===Th?this.onReset_(i):n===vb?Ja("Server Error: "+i):n===bh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ja("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),nc!==i&&st("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),rs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ln.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class sg{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class rg{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Lr extends rg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Lr}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ah=32,kh=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function re(){return new ue("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function En(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function og(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ib(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ag(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function lg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function Se(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ue)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new ue(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function lt(t,e){const n=Y(t),i=Y(e);if(n===null)return e;if(n===i)return lt(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function cg(t,e){if(En(t)!==En(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function yt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(En(t)>En(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Tb{constructor(e,n){this.errorPrefix_=n,this.parts_=ag(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=_o(this.parts_[i]);ug(this)}}function bb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_o(e),ug(t)}function Cb(t){const e=t.parts_.pop();t.byteLength_-=_o(e),t.parts_.length>0&&(t.byteLength_-=1)}function ug(t){if(t.byteLength_>kh)throw new Error(t.errorPrefix_+"has a key path longer than "+kh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ah)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ah+") or object contains a cycle "+Nn(t))}function Nn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class rc extends rg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new rc}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ki=1e3,Rb=60*5*1e3,Oh=30*1e3,Sb=1.3,Ab=3e4,kb="server_kill",Nh=3;class Xt extends sg{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Xt.nextPersistentConnectionId_++,this.log_=Fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ki,this.maxReconnectDelay_=Rb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!zd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Lr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(ke(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new _s,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Xt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tn(e,"w")){const i=Ci(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();st(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ZE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Oh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=JE(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ja("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ki,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ki,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ab&&(this.reconnectDelay_=Ki),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Sb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Xt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?De("getToken() completed but was canceled"):(De("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new wb(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{st(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(kb)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&st(h),l())}}}interrupt(e){De("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){De("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$a(this.interruptReasons_)&&(this.reconnectDelay_=Ki,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>tc(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new ue(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){De("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nh&&(this.reconnectDelay_=Oh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){De("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fp.replace(/\./g,"-")]=1,zl()?e["framework.cordova"]=1:Vd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Lr.getInstance().currentlyOnline();return $a(this.interruptReasons_)&&e}}Xt.nextPersistentConnectionId_=0;Xt.nextConnectionId_=0;/**
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
 */class To{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new X(Si,e),s=new X(Si,n);return this.compare(i,s)!==0}minPost(){return X.MIN}}/**
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
 */let or;class hg extends To{static get __EMPTY_NODE(){return or}static set __EMPTY_NODE(e){or=e}compare(e,n){return Mi(e.name,n.name)}isDefinedOn(e){throw Pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(Yn,or)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,or)}toString(){return".key"}}const yi=new hg;/**
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
 */class ar{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Re{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Re.RED,this.left=s??Je.EMPTY_NODE,this.right=r??Je.EMPTY_NODE}copy(e,n,i,s,r){return new Re(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Re.RED=!0;Re.BLACK=!1;class Ob{copy(e,n,i,s,r){return this}insert(e,n,i){return new Re(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ar(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ar(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ar(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ar(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new Ob;/**
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
 */function Nb(t,e){return Mi(t.name,e.name)}function oc(t,e){return Mi(t,e)}/**
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
 */let tl;function Pb(t){tl=t}const fg=function(t){return typeof t=="number"?"number:"+jp(t):"string:"+t},dg=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tn(e,".sv"),"Priority must be a string or number.")}else S(t===tl||t.isEmpty(),"priority of unexpected type.");S(t===tl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ph;class Ce{constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dg(this.priorityNode_)}static set __childrenNodeConstructor(e){Ph=e}static get __childrenNodeConstructor(){return Ph}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:Y(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Y(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(S(i!==".priority"||En(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+fg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=jp(this.value_):e+=this.value_,this.lazyHash_=Bp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Ce.VALUE_TYPE_ORDER.indexOf(n),r=Ce.VALUE_TYPE_ORDER.indexOf(i);return S(s>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let pg,gg;function xb(t){pg=t}function Db(t){gg=t}class Mb extends To{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Mi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Yn,new Ce("[PRIORITY-POST]",gg))}makePost(e,n){const i=pg(e);return new X(n,new Ce("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ue=new Mb;/**
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
 */const Lb=Math.log(2);class Fb{constructor(e){const n=r=>parseInt(Math.log(r)/Lb,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fr=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Re(d,h.node,Re.BLACK,null,null);{const g=parseInt(u/2,10)+l,_=s(l,g),I=s(g+1,c);return h=t[g],d=n?n(h):h,new Re(d,h.node,Re.BLACK,_,I)}},r=function(l){let c=null,u=null,h=t.length;const d=function(_,I){const C=h-_,O=h;h-=_;const U=s(C+1,O),P=t[C],B=n?n(P):P;g(new Re(B,P.node,I,null,U))},g=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const I=l.nextBitIsOne(),C=Math.pow(2,l.count-(_+1));I?d(C,Re.BLACK):(d(C,Re.BLACK),d(C,Re.RED))}return u},o=new Fb(t.length),a=r(o);return new Je(i||e,a)};/**
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
 */let ua;const ri={};class Gt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(ri&&Ue,"ChildrenNode.ts has not been loaded"),ua=ua||new Gt({".priority":ri},{".priority":Ue}),ua}get(e){const n=Ci(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return tn(this.indexSet_,e.toString())}addIndex(e,n){S(e!==yi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(X.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Fr(i,e.getCompare()):a=ri;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Gt(u,c)}addToIndexes(e,n){const i=Sr(this.indexes_,(s,r)=>{const o=Ci(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),s===ri)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(X.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Fr(a,o.getCompare())}else return ri;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new Gt(i,this.indexSet_)}removeFromIndexes(e,n){const i=Sr(this.indexes_,s=>{if(s===ri)return s;{const r=n.get(e.name);return r?s.remove(new X(e.name,r)):s}});return new Gt(i,this.indexSet_)}}/**
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
 */let qi;class ee{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&dg(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return qi||(qi=new ee(new Je(oc),null,Gt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qi}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qi:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new X(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?qi:this.priorityNode_;return new ee(s,o,r)}}updateChild(e,n){const i=Y(e);if(i===null)return n;{S(Y(e)!==".priority"||En(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ce(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Ue,(o,a)=>{n[o]=a.val(e),i++,r&&ee.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+fg(this.getPriority().val())+":"),this.forEachChild(Ue,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Bp(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new X(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,X.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bs?-1:0}withIndex(e){if(e===yi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Ue),s=n.getIterator(Ue);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yi?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ub extends ee{constructor(){super(new Je(oc),ee.EMPTY_NODE,Gt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Bs=new Ub;Object.defineProperties(X,{MIN:{value:new X(Si,ee.EMPTY_NODE)},MAX:{value:new X(Yn,Bs)}});hg.__EMPTY_NODE=ee.EMPTY_NODE;Ce.__childrenNodeConstructor=ee;Pb(Bs);Db(Bs);/**
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
 */const Bb=!0;function Me(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,Me(e))}if(!(t instanceof Array)&&Bb){const n=[];let i=!1;if(ut(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Me(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new X(o,l)))}}),n.length===0)return ee.EMPTY_NODE;const r=Fr(n,Nb,o=>o.name,oc);if(i){const o=Fr(n,Ue.getCompare());return new ee(r,Me(e),new Gt({".priority":o},{".priority":Ue}))}else return new ee(r,Me(e),Gt.Default)}else{let n=ee.EMPTY_NODE;return ut(t,(i,s)=>{if(tn(t,i)&&i.substring(0,1)!=="."){const r=Me(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Me(e))}}xb(Me);/**
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
 */class $b extends To{constructor(e){super(),this.indexPath_=e,S(!q(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Mi(e.name,n.name):r}makePost(e,n){const i=Me(e),s=ee.EMPTY_NODE.updateChild(this.indexPath_,i);return new X(n,s)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Bs);return new X(Yn,e)}toString(){return ag(this.indexPath_,0).join("/")}}/**
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
 */class Hb extends To{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Mi(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const i=Me(e);return new X(n,i)}toString(){return".value"}}const jb=new Hb;/**
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
 */function Wb(t){return{type:"value",snapshotNode:t}}function Vb(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function zb(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xh(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Kb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ac{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Si}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const e=new ac;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ue?n="$priority":t.index_===jb?n="$value":t.index_===yi?n="$key":(S(t.index_ instanceof $b,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=ke(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+ke(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=ke(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Mh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ue&&(e.i=t.index_.toString()),e}/**
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
 */class Ur extends sg{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Fs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ur.getListenId_(e,i),a={};this.listens_[o]=a;const l=Dh(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Ci(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Ur.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Dh(e._queryParams),i=e._path.toString(),s=new _s;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Di(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ys(a.responseText)}catch{st("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&st("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class qb{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Br(){return{value:null,children:new Map}}function mg(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Y(e);t.children.has(i)||t.children.set(i,Br());const s=t.children.get(i);e=ce(e),mg(s,e,n)}}function nl(t,e,n){t.value!==null?n(e,t.value):Gb(t,(i,s)=>{const r=new ue(e.toString()+"/"+i);nl(s,r,n)})}function Gb(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Yb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ut(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const Lh=10*1e3,Xb=30*1e3,Qb=5*60*1e3;class Jb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Yb(e);const i=Lh+(Xb-Lh)*Math.random();rs(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ut(e,(s,r)=>{r>0&&tn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),rs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Qb))}}/**
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
 */var Pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function _g(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class $r{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Pt.ACK_USER_WRITE,this.source=_g()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new $r(re(),n,this.revert)}}else return S(Y(this.path)===e,"operationForChild called for unrelated child."),new $r(ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class Xn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Pt.OVERWRITE}operationForChild(e){return q(this.path)?new Xn(this.source,re(),this.snap.getImmediateChild(e)):new Xn(this.source,ce(this.path),this.snap)}}/**
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
 */class Ts{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Pt.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new Xn(this.source,re(),n.value):new Ts(this.source,re(),n)}else return S(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ts(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class lc{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Zb(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Kb(o.childName,o.snapshotNode))}),Gi(t,s,"child_removed",e,i,n),Gi(t,s,"child_added",e,i,n),Gi(t,s,"child_moved",r,i,n),Gi(t,s,"child_changed",e,i,n),Gi(t,s,"value",e,i,n),s}function Gi(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>tC(t,a,l)),o.forEach(a=>{const l=eC(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function eC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tC(t,e,n){if(e.childName==null||n.childName==null)throw Pi("Should only compare child_ events.");const i=new X(e.childName,e.snapshotNode),s=new X(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function Eg(t,e){return{eventCache:t,serverCache:e}}function os(t,e,n,i){return Eg(new lc(e,n,i),t.serverCache)}function wg(t,e,n,i){return Eg(t.eventCache,new lc(e,n,i))}function il(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ha;const nC=()=>(ha||(ha=new Je(HT)),ha);class le{constructor(e,n=nC()){this.value=e,this.children=n}static fromObject(e){let n=new le(null);return ut(e,(i,s)=>{n=n.set(new ue(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:re(),value:this.value};if(q(e))return null;{const i=Y(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:Se(new ue(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=Y(e),i=this.children.get(n);return i!==null?i.subtree(ce(e)):new le(null)}}set(e,n){if(q(e))return new le(n,this.children);{const i=Y(e),r=(this.children.get(i)||new le(null)).set(ce(e),n),o=this.children.insert(i,r);return new le(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=Y(e),i=this.children.get(n);if(i){const s=i.remove(ce(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new le(null):new le(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=Y(e),i=this.children.get(n);return i?i.get(ce(e)):null}}setTree(e,n){if(q(e))return n;{const i=Y(e),r=(this.children.get(i)||new le(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new le(this.value,o)}}fold(e){return this.fold_(re(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Se(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,re(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(q(e))return null;{const r=Y(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),Se(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,re(),n)}foreachOnPath_(e,n,i){if(q(e))return this;{this.value&&i(n,this.value);const s=Y(e),r=this.children.get(s);return r?r.foreachOnPath_(ce(e),Se(n,s),i):new le(null)}}foreach(e){this.foreach_(re(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Se(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class It{constructor(e){this.writeTree_=e}static empty(){return new It(new le(null))}}function as(t,e,n){if(q(e))return new It(new le(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=lt(s,e);return r=r.updateChild(o,n),new It(t.writeTree_.set(s,r))}else{const s=new le(n),r=t.writeTree_.setTree(e,s);return new It(r)}}}function Fh(t,e,n){let i=t;return ut(n,(s,r)=>{i=as(i,Se(e,s),r)}),i}function Uh(t,e){if(q(e))return It.empty();{const n=t.writeTree_.setTree(e,new le(null));return new It(n)}}function sl(t,e){return Zn(t,e)!=null}function Zn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function Bh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ue,(i,s)=>{e.push(new X(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new X(i,s.value))}),e}function yn(t,e){if(q(e))return t;{const n=Zn(t,e);return n!=null?new It(new le(n)):new It(t.writeTree_.subtree(e))}}function rl(t){return t.writeTree_.isEmpty()}function Ai(t,e){return Ig(re(),t.writeTree_,e)}function Ig(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Ig(Se(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Se(t,".priority"),i)),n}}/**
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
 */function Tg(t,e){return Ag(e,t)}function iC(t,e,n,i,s){S(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=as(t.visibleWrites,e,n)),t.lastWriteId=i}function sC(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function rC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&oC(a,i.path)?s=!1:yt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return aC(t),!0;if(i.snap)t.visibleWrites=Uh(t.visibleWrites,i.path);else{const a=i.children;ut(a,l=>{t.visibleWrites=Uh(t.visibleWrites,Se(i.path,l))})}return!0}else return!1}function oC(t,e){if(t.snap)return yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&yt(Se(t.path,n),e))return!0;return!1}function aC(t){t.visibleWrites=bg(t.allWrites,lC,re()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function lC(t){return t.visible}function bg(t,e,n){let i=It.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)yt(n,o)?(a=lt(n,o),i=as(i,a,r.snap)):yt(o,n)&&(a=lt(o,n),i=as(i,re(),r.snap.getChild(a)));else if(r.children){if(yt(n,o))a=lt(n,o),i=Fh(i,a,r.children);else if(yt(o,n))if(a=lt(o,n),q(a))i=Fh(i,re(),r.children);else{const l=Ci(r.children,Y(a));if(l){const c=l.getChild(ce(a));i=as(i,re(),c)}}}else throw Pi("WriteRecord should have .snap or .children")}}return i}function Cg(t,e,n,i,s){if(!i&&!s){const r=Zn(t.visibleWrites,e);if(r!=null)return r;{const o=yn(t.visibleWrites,e);if(rl(o))return n;if(n==null&&!sl(o,re()))return null;{const a=n||ee.EMPTY_NODE;return Ai(o,a)}}}else{const r=yn(t.visibleWrites,e);if(!s&&rl(r))return n;if(!s&&n==null&&!sl(r,re()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(yt(c.path,e)||yt(e,c.path))},a=bg(t.allWrites,o,e),l=n||ee.EMPTY_NODE;return Ai(a,l)}}}function cC(t,e,n){let i=ee.EMPTY_NODE;const s=Zn(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ue,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=yn(t.visibleWrites,e);return n.forEachChild(Ue,(o,a)=>{const l=Ai(yn(r,new ue(o)),a);i=i.updateImmediateChild(o,l)}),Bh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=yn(t.visibleWrites,e);return Bh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function uC(t,e,n,i,s){S(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Se(e,n);if(sl(t.visibleWrites,r))return null;{const o=yn(t.visibleWrites,r);return rl(o)?s.getChild(n):Ai(o,s.getChild(n))}}function hC(t,e,n,i){const s=Se(e,n),r=Zn(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=yn(t.visibleWrites,s);return Ai(o,i.getNode().getImmediateChild(n))}else return null}function fC(t,e){return Zn(t.visibleWrites,e)}function dC(t,e,n,i,s,r,o){let a;const l=yn(t.visibleWrites,e),c=Zn(l,re());if(c!=null)a=c;else if(n!=null)a=Ai(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let g=d.getNext();for(;g&&u.length<s;)h(g,i)!==0&&u.push(g),g=d.getNext();return u}else return[]}function pC(){return{visibleWrites:It.empty(),allWrites:[],lastWriteId:-1}}function ol(t,e,n,i){return Cg(t.writeTree,t.treePath,e,n,i)}function Rg(t,e){return cC(t.writeTree,t.treePath,e)}function $h(t,e,n,i){return uC(t.writeTree,t.treePath,e,n,i)}function Hr(t,e){return fC(t.writeTree,Se(t.treePath,e))}function gC(t,e,n,i,s,r){return dC(t.writeTree,t.treePath,e,n,i,s,r)}function cc(t,e,n){return hC(t.writeTree,t.treePath,e,n)}function Sg(t,e){return Ag(Se(t.treePath,e),t.writeTree)}function Ag(t,e){return{treePath:t,writeTree:e}}/**
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
 */class mC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,xh(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,zb(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Vb(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,xh(i,e.snapshotNode,s.oldSnap));else throw Pi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class _C{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const kg=new _C;class uc{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new lc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cc(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qn(this.viewCache_),r=gC(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function yC(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vC(t,e,n,i,s){const r=new mC;let o,a;if(n.type===Pt.OVERWRITE){const c=n;c.source.fromUser?o=al(t,e,c.path,c.snap,i,s,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=jr(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Pt.MERGE){const c=n;c.source.fromUser?o=wC(t,e,c.path,c.children,i,s,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ll(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Pt.ACK_USER_WRITE){const c=n;c.revert?o=bC(t,e,c.path,i,s,r):o=IC(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Pt.LISTEN_COMPLETE)o=TC(t,e,n.path,i,r);else throw Pi("Unknown operation type: "+n.type);const l=r.getChanges();return EC(e,o,l),{viewCache:o,changes:l}}function EC(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=il(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Wb(il(e)))}}function Og(t,e,n,i,s,r){const o=e.eventCache;if(Hr(i,n)!=null)return e;{let a,l;if(q(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Qn(e),u=c instanceof ee?c:ee.EMPTY_NODE,h=Rg(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ol(i,Qn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Y(n);if(c===".priority"){S(En(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=$h(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ce(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=$h(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=cc(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return os(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function jr(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),g,null)}else{const g=Y(n);if(!l.isCompleteForPath(n)&&En(n)>1)return e;const _=ce(n),C=l.getNode().getImmediateChild(g).updateChild(_,i);g===".priority"?c=u.updatePriority(l.getNode(),C):c=u.updateChild(l.getNode(),g,C,_,kg,null)}const h=wg(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),d=new uc(s,h,r);return Og(t,h,n,s,d,a)}function al(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new uc(s,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=os(e,c,!0,t.filter.filtersNodes());else{const h=Y(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=os(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ce(n),g=a.getNode().getImmediateChild(h);let _;if(q(d))_=i;else{const I=u.getCompleteChild(h);I!=null?og(d)===".priority"&&I.getChild(lg(d)).isEmpty()?_=I:_=I.updateChild(d,i):_=ee.EMPTY_NODE}if(g.equals(_))l=e;else{const I=t.filter.updateChild(a.getNode(),h,_,d,u,o);l=os(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Hh(t,e){return t.eventCache.isCompleteForChild(e)}function wC(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Se(n,l);Hh(e,Y(u))&&(a=al(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Se(n,l);Hh(e,Y(u))||(a=al(t,a,u,c,s,r,o))}),a}function jh(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ll(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=i:c=new le(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),_=jh(t,g,d);l=jr(t,l,new ue(h),_,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const _=e.serverCache.getNode().getImmediateChild(h),I=jh(t,_,d);l=jr(t,l,new ue(h),I,s,r,o,a)}}),l}function IC(t,e,n,i,s,r,o){if(Hr(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return jr(t,e,n,l.getNode().getChild(n),s,r,a,o);if(q(n)){let c=new le(null);return l.getNode().forEachChild(yi,(u,h)=>{c=c.set(new ue(u),h)}),ll(t,e,n,c,s,r,a,o)}else return e}else{let c=new le(null);return i.foreach((u,h)=>{const d=Se(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ll(t,e,n,c,s,r,a,o)}}function TC(t,e,n,i,s){const r=e.serverCache,o=wg(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return Og(t,o,n,i,kg,s)}function bC(t,e,n,i,s,r){let o;if(Hr(i,n)!=null)return e;{const a=new uc(i,e,s),l=e.eventCache.getNode();let c;if(q(n)||Y(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ol(i,Qn(e));else{const h=e.serverCache.getNode();S(h instanceof ee,"serverChildren would be complete if leaf node"),u=Rg(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Y(n);let h=cc(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ce(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ee.EMPTY_NODE,ce(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ol(i,Qn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Hr(i,re())!=null,os(e,c,o,t.filter.filtersNodes())}}function CC(t,e){const n=Qn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function Wh(t,e,n,i){e.type===Pt.MERGE&&e.source.queryId!==null&&(S(Qn(t.viewCache_),"We should always have a full cache before handling merges"),S(il(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=vC(t.processor_,s,e,n,i);return yC(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,RC(t,r.changes,r.viewCache.eventCache.getNode(),null)}function RC(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Zb(t.eventGenerator_,e,n,s)}/**
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
 */let Vh;function SC(t){S(!Vh,"__referenceConstructor has already been defined"),Vh=t}function hc(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return S(r!=null,"SyncTree gave us an op for an invalid query."),Wh(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Wh(o,e,n,i));return r}}function fc(t,e){let n=null;for(const i of t.views.values())n=n||CC(i,e);return n}/**
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
 */let zh;function AC(t){S(!zh,"__referenceConstructor has already been defined"),zh=t}class Kh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=pC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kC(t,e,n,i,s){return iC(t.pendingWriteTree_,e,n,i,s),s?Co(t,new Xn(_g(),e,n)):[]}function ci(t,e,n=!1){const i=sC(t.pendingWriteTree_,e);if(rC(t.pendingWriteTree_,e)){let r=new le(null);return i.snap!=null?r=r.set(re(),!0):ut(i.children,o=>{r=r.set(new ue(o),!0)}),Co(t,new $r(i.path,r,n))}else return[]}function bo(t,e,n){return Co(t,new Xn(yg(),e,n))}function OC(t,e,n){const i=le.fromObject(n);return Co(t,new Ts(yg(),e,i))}function NC(t,e,n,i){const s=Dg(t,i);if(s!=null){const r=Mg(s),o=r.path,a=r.queryId,l=lt(o,e),c=new Xn(vg(a),l,n);return Lg(t,o,c)}else return[]}function PC(t,e,n,i){const s=Dg(t,i);if(s){const r=Mg(s),o=r.path,a=r.queryId,l=lt(o,e),c=le.fromObject(n),u=new Ts(vg(a),l,c);return Lg(t,o,u)}else return[]}function Ng(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=lt(o,e),c=fc(a,l);if(c)return c});return Cg(s,e,r,n,!0)}function Co(t,e){return Pg(e,t.syncPointTree_,null,Tg(t.pendingWriteTree_,re()))}function Pg(t,e,n,i){if(q(t.path))return xg(t,e,n,i);{const s=e.get(re());n==null&&s!=null&&(n=fc(s,re()));let r=[];const o=Y(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Sg(i,o);r=r.concat(Pg(a,l,c,u))}return s&&(r=r.concat(hc(s,t,i,n))),r}}function xg(t,e,n,i){const s=e.get(re());n==null&&s!=null&&(n=fc(s,re()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Sg(i,o),u=t.operationForChild(o);u&&(r=r.concat(xg(u,a,l,c)))}),s&&(r=r.concat(hc(s,t,i,n))),r}function Dg(t,e){return t.tagToQueryMap.get(e)}function Mg(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function Lg(t,e,n){const i=t.syncPointTree_.get(e);S(i,"Missing sync point for query tag that we're tracking");const s=Tg(t.pendingWriteTree_,e);return hc(i,n,s,null)}/**
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
 */class dc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dc(n)}node(){return this.node_}}class pc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Se(this.path_,e);return new pc(this.syncTree_,n)}node(){return Ng(this.syncTree_,this.path_)}}const xC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},qh=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return DC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return MC(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},DC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},MC=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&S(!1,"Unexpected increment value: "+i);const s=e.node();if(S(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},LC=function(t,e,n,i){return gc(e,new pc(n,t),i)},FC=function(t,e,n){return gc(t,new dc(e),n)};function gc(t,e,n){const i=t.getPriority().val(),s=qh(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=qh(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ce(a,Me(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ce(s))),o.forEachChild(Ue,(a,l)=>{const c=gc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class mc{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function _c(t,e){let n=e instanceof ue?e:new ue(e),i=t,s=Y(n);for(;s!==null;){const r=Ci(i.node.children,s)||{children:{},childCount:0};i=new mc(s,i,r),n=ce(n),s=Y(n)}return i}function Li(t){return t.node.value}function Fg(t,e){t.node.value=e,cl(t)}function Ug(t){return t.node.childCount>0}function UC(t){return Li(t)===void 0&&!Ug(t)}function Ro(t,e){ut(t.node.children,(n,i)=>{e(new mc(n,t,i))})}function Bg(t,e,n,i){n&&!i&&e(t),Ro(t,s=>{Bg(s,e,!0,i)}),n&&i&&e(t)}function BC(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function $s(t){return new ue(t.parent===null?t.name:$s(t.parent)+"/"+t.name)}function cl(t){t.parent!==null&&$C(t.parent,t.name,t)}function $C(t,e,n){const i=UC(n),s=tn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,cl(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,cl(t))}/**
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
 */const HC=/[\[\].#$\/\u0000-\u001F\u007F]/,jC=/[\[\].#$\u0000-\u001F\u007F]/,fa=10*1024*1024,$g=function(t){return typeof t=="string"&&t.length!==0&&!HC.test(t)},WC=function(t){return typeof t=="string"&&t.length!==0&&!jC.test(t)},VC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),WC(t)},Hg=function(t,e,n){const i=n instanceof ue?new Tb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Nn(i));if(typeof e=="function")throw new Error(t+"contains a function "+Nn(i)+" with contents = "+e.toString());if($p(e))throw new Error(t+"contains "+e.toString()+" "+Nn(i));if(typeof e=="string"&&e.length>fa/3&&_o(e)>fa)throw new Error(t+"contains a string greater than "+fa+" utf8 bytes "+Nn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ut(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!$g(o)))throw new Error(t+" contains an invalid key ("+o+") "+Nn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bb(i,o),Hg(t,a,i),Cb(i)}),s&&r)throw new Error(t+' contains ".value" child '+Nn(i)+" in addition to actual children.")}},zC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$g(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!VC(n))throw new Error(s0(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class KC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qC(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!cg(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function ei(t,e,n){qC(t,n),GC(t,i=>yt(i,e)||yt(e,i))}function GC(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(YC(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function YC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Wn&&De("event: "+n.toString()),Us(i)}}}/**
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
 */const XC="repo_interrupt",QC=25;class JC{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Br(),this.transactionQueueTree_=new mc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ZC(t,e,n){if(t.stats_=ic(t.repoInfo_),t.forceRestClient_||qT())t.server_=new Ur(t.repoInfo_,(i,s,r,o)=>{Gh(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Yh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Xt(t.repoInfo_,e,(i,s,r,o)=>{Gh(t,i,s,r,o)},i=>{Yh(t,i)},i=>{tR(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=ZT(t.repoInfo_,()=>new Jb(t.stats_,t.server_)),t.infoData_=new qb,t.infoSyncTree_=new Kh({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=bo(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yc(t,"connected",!1),t.serverSyncTree_=new Kh({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ei(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function eR(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function jg(t){return xC({timestamp:eR(t)})}function Gh(t,e,n,i,s){t.dataUpdateCount++;const r=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Sr(n,c=>Me(c));o=PC(t.serverSyncTree_,r,l,s)}else{const l=Me(n);o=NC(t.serverSyncTree_,r,l,s)}else if(i){const l=Sr(n,c=>Me(c));o=OC(t.serverSyncTree_,r,l)}else{const l=Me(n);o=bo(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ec(t,r)),ei(t.eventQueue_,a,o)}function Yh(t,e){yc(t,"connected",e),e===!1&&iR(t)}function tR(t,e){ut(e,(n,i)=>{yc(t,n,i)})}function yc(t,e,n){const i=new ue("/.info/"+e),s=Me(n);t.infoData_.updateSnapshot(i,s);const r=bo(t.infoSyncTree_,i,s);ei(t.eventQueue_,i,r)}function nR(t){return t.nextWriteId_++}function iR(t){Wg(t,"onDisconnectEvents");const e=jg(t),n=Br();nl(t.onDisconnect_,re(),(s,r)=>{const o=LC(s,r,t.serverSyncTree_,e);mg(n,s,o)});let i=[];nl(n,re(),(s,r)=>{i=i.concat(bo(t.serverSyncTree_,s,r));const o=aR(t,s);Ec(t,o)}),t.onDisconnect_=Br(),ei(t.eventQueue_,re(),i)}function sR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(XC)}function Wg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),De(n,...e)}function Vg(t,e,n){return Ng(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function vc(t,e=t.transactionQueueTree_){if(e||So(t,e),Li(e)){const n=Kg(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&rR(t,$s(e),n)}else Ug(e)&&Ro(e,n=>{vc(t,n)})}function rR(t,e,n){const i=n.map(c=>c.currentWriteId),s=Vg(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=lt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Wg(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ci(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();So(t,_c(t.transactionQueueTree_,e)),vc(t,t.transactionQueueTree_),ei(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Us(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{st("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ec(t,e)}},o)}function Ec(t,e){const n=zg(t,e),i=$s(n),s=Kg(t,n);return oR(t,s,i),i}function oR(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=lt(n,l.path);let u=!1,h;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(ci(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=QC)u=!0,h="maxretry",s=s.concat(ci(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Vg(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){Hg("transaction failed: Data returned ",g,l.path);let _=Me(g);typeof g=="object"&&g!=null&&tn(g,".priority")||(_=_.updatePriority(d.getPriority()));const C=l.currentWriteId,O=jg(t),U=FC(_,d,O);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=U,l.currentWriteId=nR(t),o.splice(o.indexOf(C),1),s=s.concat(kC(t.serverSyncTree_,l.path,U,l.currentWriteId,l.applyLocally)),s=s.concat(ci(t.serverSyncTree_,C,!0))}else u=!0,h="nodata",s=s.concat(ci(t.serverSyncTree_,l.currentWriteId,!0))}ei(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}So(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Us(i[a]);vc(t,t.transactionQueueTree_)}function zg(t,e){let n,i=t.transactionQueueTree_;for(n=Y(e);n!==null&&Li(i)===void 0;)i=_c(i,n),e=ce(e),n=Y(e);return i}function Kg(t,e){const n=[];return qg(t,e,n),n.sort((i,s)=>i.order-s.order),n}function qg(t,e,n){const i=Li(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Ro(e,s=>{qg(t,s,n)})}function So(t,e){const n=Li(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Fg(e,n.length>0?n:void 0)}Ro(e,i=>{So(t,i)})}function aR(t,e){const n=$s(zg(t,e)),i=_c(t.transactionQueueTree_,e);return BC(i,s=>{da(t,s)}),da(t,i),Bg(i,s=>{da(t,s)}),n}function da(t,e){const n=Li(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ci(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Fg(e,void 0):n.length=r+1,ei(t.eventQueue_,$s(e),s);for(let o=0;o<i.length;o++)Us(i[o])}}/**
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
 */function lR(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function cR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):st(`Invalid query segment '${n}' in query '${t}'`)}return e}const Xh=function(t,e){const n=uR(t),i=n.namespace;n.domain==="firebase.com"&&Gn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||BT();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new XT(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new ue(n.pathString)}},uR=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=lR(t.substring(u,h)));const d=cR(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class wc{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return q(this._path)?null:og(this._path)}get ref(){return new Fi(this._repo,this._path)}get _queryIdentifier(){const e=Mh(this._queryParams),n=tc(e);return n==="{}"?"default":n}get _queryObject(){return Mh(this._queryParams)}isEqual(e){if(e=In(e),!(e instanceof wc))return!1;const n=this._repo===e._repo,i=cg(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ib(this._path)}}class Fi extends wc{constructor(e,n){super(e,n,new ac,!1)}get parent(){const e=lg(this._path);return e===null?null:new Fi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}SC(Fi);AC(Fi);/**
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
 */const hR="FIREBASE_DATABASE_EMULATOR_HOST",ul={};let fR=!1;function dR(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),De("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Xh(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[hR]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Xh(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Za(Za.OWNER):new YT(t.name,t.options,e);zC("Invalid Firebase Database URL",o),q(o.path)||Gn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=gR(a,t,u,new GT(t.name,n));return new mR(h,t)}function pR(t,e){const n=ul[e];(!n||n[t.key]!==t)&&Gn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sR(t),delete n[t.key]}function gR(t,e,n,i){let s=ul[e.name];s||(s={},ul[e.name]=s);let r=s[t.toURLString()];return r&&Gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new JC(t,fR,n,i),s[t.toURLString()]=r,r}class mR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ZC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fi(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gn("Cannot call "+e+" on a deleted database.")}}/**
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
 */function _R(t){DT(Jn),Ut(new bt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return dR(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),it(_h,yh,t),it(_h,yh,"esm2017")}Xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};_R();var yR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Ic=Ic||{},H=yR||self;function Wr(){}function Ao(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Hs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function vR(t){return Object.prototype.hasOwnProperty.call(t,pa)&&t[pa]||(t[pa]=++ER)}var pa="closure_uid_"+(1e9*Math.random()>>>0),ER=0;function wR(t,e,n){return t.call.apply(t.bind,arguments)}function IR(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function $e(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$e=wR:$e=IR,$e.apply(null,arguments)}function lr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Tn(){this.s=this.s,this.o=this.o}var TR=0;Tn.prototype.s=!1;Tn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),TR!=0)&&vR(this)};Tn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Tc(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Qh(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Ao(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function He(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var bR=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",Wr,e),H.removeEventListener("test",Wr,e)}catch{}return t}();function Vr(t){return/^[\s\xa0]*$/.test(t)}var Jh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ga(t,e){return t<e?-1:t>e?1:0}function ko(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function Nt(t){return ko().indexOf(t)!=-1}function bc(t){return bc[" "](t),t}bc[" "]=Wr;function CR(t){var e=AR;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var RR=Nt("Opera"),bs=Nt("Trident")||Nt("MSIE"),Yg=Nt("Edge"),hl=Yg||bs,Xg=Nt("Gecko")&&!(ko().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge"))&&!(Nt("Trident")||Nt("MSIE"))&&!Nt("Edge"),SR=ko().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge");function Qg(){var t=H.document;return t?t.documentMode:void 0}var fl;e:{var ma="",_a=function(){var t=ko();if(Xg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yg)return/Edge\/([\d\.]+)/.exec(t);if(bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SR)return/WebKit\/(\S+)/.exec(t);if(RR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_a&&(ma=_a?_a[1]:""),bs){var ya=Qg();if(ya!=null&&ya>parseFloat(ma)){fl=String(ya);break e}}fl=ma}var AR={};function kR(){return CR(function(){let t=0;const e=Jh(String(fl)).split("."),n=Jh("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=ga(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||ga(s[2].length==0,r[2].length==0)||ga(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}H.document&&bs&&Qg();function Cs(t,e){if(He.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xg){e:{try{bc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:OR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Cs.X.h.call(this)}}Pe(Cs,He);var OR={2:"touch",3:"pen",4:"mouse"};Cs.prototype.h=function(){Cs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var js="closure_listenable_"+(1e6*Math.random()|0),NR=0;function PR(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++NR,this.ba=this.ea=!1}function Oo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Cc(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Jg(t){const e={};for(const n in t)e[n]=t[n];return e}const Zh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zg(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Zh.length;r++)n=Zh[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function No(t){this.src=t,this.g={},this.h=0}No.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=pl(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new PR(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function dl(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Gg(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Oo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function pl(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Rc="closure_lm_"+(1e6*Math.random()|0),va={};function em(t,e,n,i,s){if(i&&i.once)return nm(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)em(t,e[r],n,i,s);return null}return n=kc(n),t&&t[js]?t.N(e,n,Hs(i)?!!i.capture:!!i,s):tm(t,e,n,!1,i,s)}function tm(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Hs(s)?!!s.capture:!!s,a=Ac(t);if(a||(t[Rc]=a=new No(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=xR(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)bR||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(sm(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xR(){function t(n){return e.call(t.src,t.listener,n)}const e=DR;return t}function nm(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)nm(t,e[r],n,i,s);return null}return n=kc(n),t&&t[js]?t.O(e,n,Hs(i)?!!i.capture:!!i,s):tm(t,e,n,!0,i,s)}function im(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)im(t,e[r],n,i,s);else i=Hs(i)?!!i.capture:!!i,n=kc(n),t&&t[js]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=pl(r,n,i,s),-1<n&&(Oo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ac(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pl(e,n,i,s)),(n=-1<t?e[t]:null)&&Sc(n))}function Sc(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[js])dl(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(sm(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ac(e))?(dl(n,t),n.h==0&&(n.src=null,e[Rc]=null)):Oo(t)}}}function sm(t){return t in va?va[t]:va[t]="on"+t}function DR(t,e){if(t.ba)t=!0;else{e=new Cs(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Sc(t),t=n.call(i,e)}return t}function Ac(t){return t=t[Rc],t instanceof No?t:null}var Ea="__closure_events_fn_"+(1e9*Math.random()>>>0);function kc(t){return typeof t=="function"?t:(t[Ea]||(t[Ea]=function(e){return t.handleEvent(e)}),t[Ea])}function Ae(){Tn.call(this),this.i=new No(this),this.P=this,this.I=null}Pe(Ae,Tn);Ae.prototype[js]=!0;Ae.prototype.removeEventListener=function(t,e,n,i){im(this,t,e,n,i)};function Ne(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new He(e,t);else if(e instanceof He)e.target=e.target||t;else{var s=e;e=new He(i,t),Zg(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=cr(o,i,!0,e)&&s}if(o=e.g=t,s=cr(o,i,!0,e)&&s,s=cr(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=cr(o,i,!1,e)&&s}Ae.prototype.M=function(){if(Ae.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Oo(n[i]);delete t.g[e],t.h--}}this.I=null};Ae.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ae.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function cr(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&dl(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Oc=H.JSON.stringify;function MR(){var t=am;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class LR{constructor(){this.h=this.g=null}add(e,n){const i=rm.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var rm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new FR,t=>t.reset());class FR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function UR(t){H.setTimeout(()=>{throw t},0)}function om(t,e){gl||BR(),ml||(gl(),ml=!0),am.add(t,e)}var gl;function BR(){var t=H.Promise.resolve(void 0);gl=function(){t.then($R)}}var ml=!1,am=new LR;function $R(){for(var t;t=MR();){try{t.h.call(t.g)}catch(n){UR(n)}var e=rm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ml=!1}function Po(t,e){Ae.call(this),this.h=t||1,this.g=e||H,this.j=$e(this.lb,this),this.l=Date.now()}Pe(Po,Ae);D=Po.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ne(this,"tick"),this.ca&&(Nc(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Nc(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){Po.X.M.call(this),Nc(this),delete this.g};function Pc(t,e,n){if(typeof t=="function")n&&(t=$e(t,n));else if(t&&typeof t.handleEvent=="function")t=$e(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function lm(t){t.g=Pc(()=>{t.g=null,t.i&&(t.i=!1,lm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class HR extends Tn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lm(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rs(t){Tn.call(this),this.h=t,this.g={}}Pe(Rs,Tn);var ef=[];function cm(t,e,n,i){Array.isArray(n)||(n&&(ef[0]=n.toString()),n=ef);for(var s=0;s<n.length;s++){var r=em(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function um(t){Cc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sc(e)},t),t.g={}}Rs.prototype.M=function(){Rs.X.M.call(this),um(this)};Rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xo(){this.g=!0}xo.prototype.Aa=function(){this.g=!1};function jR(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function WR(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function ui(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zR(t,n)+(i?" "+i:"")})}function VR(t,e){t.info(function(){return"TIMEOUT: "+e})}xo.prototype.info=function(){};function zR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Oc(n)}catch{return e}}var Ui={},tf=null;function xc(){return tf=tf||new Ae}Ui.Pa="serverreachability";function hm(t){He.call(this,Ui.Pa,t)}Pe(hm,He);function Ss(t){const e=xc();Ne(e,new hm(e))}Ui.STAT_EVENT="statevent";function fm(t,e){He.call(this,Ui.STAT_EVENT,t),this.stat=e}Pe(fm,He);function qe(t){const e=xc();Ne(e,new fm(e,t))}Ui.Qa="timingevent";function dm(t,e){He.call(this,Ui.Qa,t),this.size=e}Pe(dm,He);function Ws(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var Dc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},KR={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Mc(){}Mc.prototype.h=null;function nf(t){return t.h||(t.h=t.i())}function qR(){}var Vs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Lc(){He.call(this,"d")}Pe(Lc,He);function Fc(){He.call(this,"c")}Pe(Fc,He);var _l;function Do(){}Pe(Do,Mc);Do.prototype.g=function(){return new XMLHttpRequest};Do.prototype.i=function(){return{}};_l=new Do;function zs(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Rs(this),this.O=GR,t=hl?125:void 0,this.T=new Po(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new pm}function pm(){this.i=null,this.g="",this.h=!1}var GR=45e3,yl={},zr={};D=zs.prototype;D.setTimeout=function(t){this.O=t};function vl(t,e,n){t.K=1,t.v=Lo(Zt(e)),t.s=n,t.P=!0,gm(t,null)}function gm(t,e){t.F=Date.now(),Ks(t),t.A=Zt(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Tm(n.i,"t",i),t.C=0,n=t.l.H,t.h=new pm,t.g=Vm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new HR($e(t.La,t,t.g),t.N)),cm(t.S,t.g,"readystatechange",t.ib),e=t.H?Jg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ss(),jR(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&Yt(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const u=Yt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||hl||this.g&&(this.h.h||this.g.fa()||af(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ss(3):Ss(2)),Mo(this);var n=this.g.aa();this.Y=n;t:if(mm(this)){var i=af(this.g);t="";var s=i.length,r=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),ls(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,WR(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vr(a)){var c=a;break t}}c=null}if(n=c)ui(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,El(this,n);else{this.i=!1,this.o=3,qe(12),Fn(this),ls(this);break e}}this.P?(_m(this,u,o),hl&&this.i&&u==3&&(cm(this.S,this.T,"tick",this.hb),this.T.start())):(ui(this.j,this.m,o,null),El(this,o)),u==4&&Fn(this),this.i&&!this.I&&(u==4?$m(this.l,this):(this.i=!1,Ks(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,qe(12)):(this.o=0,qe(13)),Fn(this),ls(this)}}}catch{}finally{}};function mm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function _m(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=YR(t,n),s==zr){e==4&&(t.o=4,qe(14),i=!1),ui(t.j,t.m,null,"[Incomplete Response]");break}else if(s==yl){t.o=4,qe(15),ui(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ui(t.j,t.m,s,null),El(t,s);mm(t)&&s!=zr&&s!=yl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,qe(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vc(e),e.K=!0,qe(11))):(ui(t.j,t.m,n,"[Invalid Chunked Response]"),Fn(t),ls(t))}D.hb=function(){if(this.g){var t=Yt(this.g),e=this.g.fa();this.C<e.length&&(Mo(this),_m(this,t,e),this.i&&t!=4&&Ks(this))}};function YR(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?zr:(n=Number(e.substring(n,i)),isNaN(n)?yl:(i+=1,i+n>e.length?zr:(e=e.substr(i,n),t.C=i+n,e)))}D.cancel=function(){this.I=!0,Fn(this)};function Ks(t){t.V=Date.now()+t.O,ym(t,t.O)}function ym(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ws($e(t.gb,t),e)}function Mo(t){t.B&&(H.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(VR(this.j,this.A),this.K!=2&&(Ss(),qe(17)),Fn(this),this.o=2,ls(this)):ym(this,this.V-t)};function ls(t){t.l.G==0||t.I||$m(t.l,t)}function Fn(t){Mo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Nc(t.T),um(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function El(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||wl(n.h,t))){if(!t.J&&wl(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Gr(n),$o(n);else break e;Wc(n),qe(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ws($e(n.cb,n),6e3));if(1>=Rm(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Un(n,11)}else if((t.J||n.g==t)&&Gr(n),!Vr(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=i.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Uc(r,r.h),r.h=null))}if(i.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(i.za=I,pe(i.F,i.D,I))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Wm(i,i.H?i.ka:null,i.V),o.J){Sm(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(Mo(a),Ks(a)),i.g=o}else Um(i);0<n.i.length&&Ho(n)}else c[0]!="stop"&&c[0]!="close"||Un(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Un(n,7):jc(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Ss(4)}catch{}}function XR(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ao(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function QR(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ao(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function vm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ao(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=QR(t),i=XR(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var Em=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function JR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Vn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vn){this.h=e!==void 0?e:t.h,Kr(this,t.j),this.s=t.s,this.g=t.g,qr(this,t.m),this.l=t.l,e=t.i;var n=new As;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),sf(this,n),this.o=t.o}else t&&(n=String(t).match(Em))?(this.h=!!e,Kr(this,n[1]||"",!0),this.s=Ji(n[2]||""),this.g=Ji(n[3]||"",!0),qr(this,n[4]),this.l=Ji(n[5]||"",!0),sf(this,n[6]||"",!0),this.o=Ji(n[7]||"")):(this.h=!!e,this.i=new As(null,this.h))}Vn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zi(e,rf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zi(e,rf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zi(n,n.charAt(0)=="/"?tS:eS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zi(n,iS)),t.join("")};function Zt(t){return new Vn(t)}function Kr(t,e,n){t.j=n?Ji(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sf(t,e,n){e instanceof As?(t.i=e,sS(t.i,t.h)):(n||(e=Zi(e,nS)),t.i=new As(e,t.h))}function pe(t,e,n){t.i.set(e,n)}function Lo(t){return pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ji(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ZR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ZR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rf=/[#\/\?@]/g,eS=/[#\?:]/g,tS=/[#\?]/g,nS=/[#\?@]/g,iS=/#/g;function As(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function bn(t){t.g||(t.g=new Map,t.h=0,t.i&&JR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=As.prototype;D.add=function(t,e){bn(this),this.i=null,t=Bi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wm(t,e){bn(t),e=Bi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Im(t,e){return bn(t),e=Bi(t,e),t.g.has(e)}D.forEach=function(t,e){bn(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};D.oa=function(){bn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};D.W=function(t){bn(this);let e=[];if(typeof t=="string")Im(this,t)&&(e=e.concat(this.g.get(Bi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return bn(this),this.i=null,t=Bi(this,t),Im(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Tm(t,e,n){wm(t,e),0<n.length&&(t.i=null,t.g.set(Bi(t,e),Tc(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Bi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function sS(t,e){e&&!t.j&&(bn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(wm(this,i),Tm(this,s,n))},t)),t.j=e}var rS=class{constructor(t,e){this.h=t,this.g=e}};function bm(t){this.l=t||oS,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ga&&H.g.Ga()&&H.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oS=10;function Cm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Rm(t){return t.h?1:t.g?t.g.size:0}function wl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Uc(t,e){t.g?t.g.add(e):t.h=e}function Sm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bm.prototype.cancel=function(){if(this.i=Am(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Am(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Tc(t.i)}function Bc(){}Bc.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};Bc.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function aS(){this.g=new Bc}function lS(t,e,n){const i=n||"";try{vm(t,function(s,r){let o=s;Hs(s)&&(o=Oc(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function cS(t,e){const n=new xo;if(H.Image){const i=new Image;i.onload=lr(ur,n,i,"TestLoadImage: loaded",!0,e),i.onerror=lr(ur,n,i,"TestLoadImage: error",!1,e),i.onabort=lr(ur,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=lr(ur,n,i,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function ur(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Fo(t){this.l=t.ac||null,this.j=t.jb||!1}Pe(Fo,Mc);Fo.prototype.g=function(){return new Uo(this.l,this.j)};Fo.prototype.i=function(t){return function(){return t}}({});function Uo(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=$c,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(Uo,Ae);var $c=0;D=Uo.prototype;D.open=function(t,e){if(this.readyState!=$c)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ks(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=$c};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;km(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function km(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qs(this):ks(this),this.readyState==3&&km(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,qs(this))};D.Ua=function(t){this.g&&(this.response=t,qs(this))};D.ga=function(){this.g&&qs(this)};function qs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ks(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ks(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var uS=H.JSON.parse;function Ee(t){Ae.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Om,this.K=this.L=!1}Pe(Ee,Ae);var Om="",hS=/^https?$/i,fS=["POST","PUT"];D=Ee.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_l.g(),this.C=this.u?nf(this.u):nf(_l),this.g.onreadystatechange=$e(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){of(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=H.FormData&&t instanceof H.FormData,!(0<=Gg(fS,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xm(this),0<this.B&&((this.K=dS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$e(this.qa,this)):this.A=Pc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){of(this,r)}};function dS(t){return bs&&kR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof Ic<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ne(this,"timeout"),this.abort(8))};function of(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Nm(t),Bo(t)}function Nm(t){t.D||(t.D=!0,Ne(t,"complete"),Ne(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ne(this,"complete"),Ne(this,"abort"),Bo(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bo(this,!0)),Ee.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?Pm(this):this.fb())};D.fb=function(){Pm(this)};function Pm(t){if(t.h&&typeof Ic<"u"&&(!t.C[1]||Yt(t)!=4||t.aa()!=2)){if(t.v&&Yt(t)==4)Pc(t.Ha,0,t);else if(Ne(t,"readystatechange"),Yt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(Em)[1]||null;if(!s&&H.self&&H.self.location){var r=H.self.location.protocol;s=r.substr(0,r.length-1)}i=!hS.test(s?s.toLowerCase():"")}n=i}if(n)Ne(t,"complete"),Ne(t,"success");else{t.m=6;try{var o=2<Yt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Nm(t)}}finally{Bo(t)}}}}function Bo(t,e){if(t.g){xm(t);const n=t.g,i=t.C[0]?Wr:null;t.g=null,t.C=null,e||Ne(t,"ready");try{n.onreadystatechange=i}catch{}}}function xm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function Yt(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),uS(e)}};function af(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Om:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dm(t){let e="";return Cc(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Hc(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Dm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):pe(t,e,n))}function Yi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Mm(t){this.Ca=0,this.i=[],this.j=new xo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Yi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Yi("baseRetryDelayMs",5e3,t),this.bb=Yi("retryDelaySeedMs",1e4,t),this.$a=Yi("forwardChannelMaxRetries",2,t),this.ta=Yi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new bm(t&&t.concurrentRequestLimit),this.Fa=new aS,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=Mm.prototype;D.ma=8;D.G=1;function jc(t){if(Lm(t),t.G==3){var e=t.U++,n=Zt(t.F);pe(n,"SID",t.I),pe(n,"RID",e),pe(n,"TYPE","terminate"),Gs(t,n),e=new zs(t,t.j,e,void 0),e.K=2,e.v=Lo(Zt(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=Vm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ks(e)}jm(t)}function $o(t){t.g&&(Vc(t),t.g.cancel(),t.g=null)}function Lm(t){$o(t),t.u&&(H.clearTimeout(t.u),t.u=null),Gr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Ho(t){Cm(t.h)||t.m||(t.m=!0,om(t.Ja,t),t.C=0)}function pS(t,e){return Rm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ws($e(t.Ja,t,e),Hm(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new zs(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Jg(r),Zg(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Fm(this,s,e),n=Zt(this.F),pe(n,"RID",t),pe(n,"CVER",22),this.D&&pe(n,"X-HTTP-Session-Id",this.D),Gs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Dm(r)))+"&"+e:this.o&&Hc(n,this.o,r)),Uc(this.h,s),this.Ya&&pe(n,"TYPE","init"),this.O?(pe(n,"$req",e),pe(n,"SID","null"),s.Z=!0,vl(s,n,null)):vl(s,n,e),this.G=2}}else this.G==3&&(t?lf(this,t):this.i.length==0||Cm(this.h)||lf(this))};function lf(t,e){var n;e?n=e.m:n=t.U++;const i=Zt(t.F);pe(i,"SID",t.I),pe(i,"RID",n),pe(i,"AID",t.T),Gs(t,i),t.o&&t.s&&Hc(i,t.o,t.s),n=new zs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Fm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Uc(t.h,n),vl(n,i,e)}function Gs(t,e){t.ia&&Cc(t.ia,function(n,i){pe(e,i,n)}),t.l&&vm({},function(n,i){pe(e,i,n)})}function Fm(t,e,n){n=Math.min(t.i.length,n);var i=t.l?$e(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{lS(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function Um(t){t.g||t.u||(t.Z=1,om(t.Ia,t),t.A=0)}function Wc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ws($e(t.Ia,t),Hm(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,Bm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ws($e(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,qe(10),$o(this),Bm(this))};function Vc(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function Bm(t){t.g=new zs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Zt(t.sa);pe(e,"RID","rpc"),pe(e,"SID",t.I),pe(e,"CI",t.L?"0":"1"),pe(e,"AID",t.T),pe(e,"TYPE","xmlhttp"),Gs(t,e),t.o&&t.s&&Hc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Lo(Zt(e)),n.s=null,n.P=!0,gm(n,t)}D.cb=function(){this.v!=null&&(this.v=null,$o(this),Wc(this),qe(19))};function Gr(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function $m(t,e){var n=null;if(t.g==e){Gr(t),Vc(t),t.g=null;var i=2}else if(wl(t.h,e))n=e.D,Sm(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=xc(),Ne(i,new dm(i,n)),Ho(t)}else Um(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&pS(t,e)||i==2&&Wc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Un(t,5);break;case 4:Un(t,10);break;case 3:Un(t,6);break;default:Un(t,2)}}}function Hm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Un(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=$e(t.kb,t);n||(n=new Vn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Kr(n,"https"),Lo(n)),cS(n.toString(),i)}else qe(2);t.G=0,t.l&&t.l.va(e),jm(t),Lm(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function jm(t){if(t.G=0,t.la=[],t.l){const e=Am(t.h);(e.length!=0||t.i.length!=0)&&(Qh(t.la,e),Qh(t.la,t.i),t.h.i.length=0,Tc(t.i),t.i.length=0),t.l.ua()}}function Wm(t,e,n){var i=n instanceof Vn?Zt(n):new Vn(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),qr(i,i.m);else{var s=H.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Vn(null,void 0);i&&Kr(r,i),e&&(r.g=e),s&&qr(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&pe(i,n,e),pe(i,"VER",t.ma),Gs(t,i),i}function Vm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ee(new Fo({jb:!0})):new Ee(t.ra),e.Ka(t.H),e}function zm(){}D=zm.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function ht(t,e){Ae.call(this),this.g=new Mm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Vr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $i(this)}Pe(ht,Ae);ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;qe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Wm(t,null,t.V),Ho(t)};ht.prototype.close=function(){jc(this.g)};ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Oc(t),t=n);e.i.push(new rS(e.ab++,t)),e.G==3&&Ho(e)};ht.prototype.M=function(){this.g.l=null,delete this.j,jc(this.g),delete this.g,ht.X.M.call(this)};function Km(t){Lc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(Km,Lc);function qm(){Fc.call(this),this.status=1}Pe(qm,Fc);function $i(t){this.g=t}Pe($i,zm);$i.prototype.xa=function(){Ne(this.g,"a")};$i.prototype.wa=function(t){Ne(this.g,new Km(t))};$i.prototype.va=function(t){Ne(this.g,new qm)};$i.prototype.ua=function(){Ne(this.g,"b")};ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;Dc.NO_ERROR=0;Dc.TIMEOUT=8;Dc.HTTP_ERROR=6;KR.COMPLETE="complete";qR.EventType=Vs;Vs.OPEN="a";Vs.CLOSE="b";Vs.ERROR="c";Vs.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;Ee.prototype.listenOnce=Ee.prototype.O;Ee.prototype.getLastError=Ee.prototype.Oa;Ee.prototype.getLastErrorCode=Ee.prototype.Ea;Ee.prototype.getStatus=Ee.prototype.aa;Ee.prototype.getResponseJson=Ee.prototype.Sa;Ee.prototype.getResponseText=Ee.prototype.fa;Ee.prototype.send=Ee.prototype.da;Ee.prototype.setWithCredentials=Ee.prototype.Ka;const cf="@firebase/firestore";/**
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
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let jo="9.18.0";/**
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
 */const Yr=new Ps("@firebase/firestore");function nt(t,...e){if(Yr.logLevel<=ne.DEBUG){const n=e.map(Gm);Yr.debug(`Firestore (${jo}): ${t}`,...n)}}function zc(t,...e){if(Yr.logLevel<=ne.ERROR){const n=e.map(Gm);Yr.error(`Firestore (${jo}): ${t}`,...n)}}function Gm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Ym(t="Unexpected state"){const e=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: `+t;throw zc(e),new Error(e)}function Xr(t,e){t||Ym()}/**
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
 */const Mt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Lt extends jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class gS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class _S{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vi,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Xr(typeof i.accessToken=="string"),new gS(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Xr(e===null||typeof e=="string"),new Qe(e)}}class yS{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Xr(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class vS{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s}getToken(){return Promise.resolve(new yS(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ES{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wS{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const i=r=>{r.error!=null&&nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,nt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Xr(typeof n.token=="string"),this.A=n.token,new ES(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function IS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class TS{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=IS(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Xm(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bS{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var uf,G;(G=uf||(uf={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";function wa(){return typeof document<"u"?document:null}/**
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
 */class CS{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=i,this.Io=s,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),i=Math.max(0,Date.now()-this.Ro),s=Math.max(0,n-i);s>0&&nt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,s,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
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
 */class Kc{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Kc(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Lt(Mt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function RS(t,e){if(zc("AsyncQueue",`${e}: ${t}`),Xm(t))return new Lt(Mt.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class SS{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=TS.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{nt("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(nt("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Lt(Mt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=RS(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}const hf=new Map;function AS(t,e,n,i){if(e===!0&&i===!0)throw new Lt(Mt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class ff{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Lt(Mt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Lt(Mt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,AS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class kS{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ff({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Lt(Mt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Lt(Mt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ff(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mS;switch(n.type){case"gapi":const i=n.client;return new vS(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Lt(Mt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hf.get(e);n&&(nt("ComponentProvider","Removing Datastore"),hf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class OS{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new CS(this,"async_queue_retry"),this.Hc=()=>{const n=wa();n&&nt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=wa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=wa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new vi;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Xm(e))throw e;nt("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(i=>{this.Qc=i,this.jc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw zc("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.jc=!1,i))));return this.qc=n,n}enqueueAfterDelay(e,n,i){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const s=Kc.createAndSchedule(this,e,n,i,r=>this.Xc(r));return this.Gc.push(s),s}Jc(){this.Qc&&Ym()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class NS extends kS{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new OS,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||PS(this),this._firestoreClient.terminate()}}function PS(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new bS(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new SS(t._authCredentials,t._appCheckCredentials,t._queue,i)}(function(t,e=!0){(function(n){jo=n})(Jn),Ut(new bt("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new NS(new _S(n.getProvider("auth-internal")),new wS(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Lt(Mt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qr(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),it(cf,"3.9.0",t),it(cf,"3.9.0","esm2017")})();/**
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
 */const Qm="firebasestorage.googleapis.com",xS="storageBucket",DS=2*60*1e3,MS=10*60*1e3;/**
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
 */class Wt extends jt{constructor(e,n,i=0){super(Ia(e),`Firebase Storage: ${n} (${Ia(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ia(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ht;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ht||(Ht={}));function Ia(t){return"storage/"+t}function LS(){const t="An unknown error occurred, please check the error payload for server response.";return new Wt(Ht.UNKNOWN,t)}function FS(){return new Wt(Ht.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function US(){return new Wt(Ht.CANCELED,"User canceled the upload/download.")}function BS(t){return new Wt(Ht.INVALID_URL,"Invalid URL '"+t+"'.")}function $S(t){return new Wt(Ht.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function df(t){return new Wt(Ht.INVALID_ARGUMENT,t)}function Jm(){return new Wt(Ht.APP_DELETED,"The Firebase app was deleted.")}function HS(t){return new Wt(Ht.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class vt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=vt.makeFromUrl(e,n)}catch{return new vt(e,"")}if(i.path==="")return i;throw $S(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(B){B.path_=decodeURIComponent(B.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},I=n===Qm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",O=new RegExp(`^https?://${I}/${s}/${C}`,"i"),P=[{regex:a,indices:l,postModify:r},{regex:g,indices:_,postModify:c},{regex:O,indices:{bucket:1,path:2},postModify:c}];for(let B=0;B<P.length;B++){const he=P[B],_e=he.regex.exec(e);if(_e){const We=_e[he.indices.bucket];let Ve=_e[he.indices.path];Ve||(Ve=""),i=new vt(We,Ve),he.postModify(i);break}}if(i==null)throw BS(e);return i}}class jS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function WS(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...C){c||(c=!0,e.apply(null,C))}function h(C){s=setTimeout(()=>{s=null,t(g,l())},C)}function d(){r&&clearTimeout(r)}function g(C,...O){if(c){d();return}if(C){d(),u.call(null,C,...O);return}if(l()||o){d(),u.call(null,C,...O);return}i<64&&(i*=2);let P;a===1?(a=2,P=0):P=(i+Math.random())*1e3,h(P)}let _=!1;function I(C){_||(_=!0,d(),!c&&(s!==null?(C||(a=2),clearTimeout(s),h(0)):C||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,I(!0)},n),I}function VS(t){t(!1)}/**
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
 */function zS(t){return t!==void 0}function pf(t,e,n,i){if(i<e)throw df(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw df(`Invalid value for '${t}'. Expected ${n} or less.`)}function KS(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var Jr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Jr||(Jr={}));/**
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
 */function qS(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
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
 */class GS{constructor(e,n,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new hr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Jr.NO_ERROR,l=r.getStatus();if(!a||qS(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Jr.ABORT;i(!1,new hr(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new hr(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());zS(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=LS();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Jm():US();o(l)}else{const l=FS();o(l)}};this.canceled_?n(!1,new hr(!1,null,!0)):this.backoffId_=WS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class hr{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function YS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function XS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ZS(t,e,n,i,s,r,o=!0){const a=KS(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return QS(c,e),YS(c,n),XS(c,r),JS(c,i),new GS(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function eA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Zr{constructor(e,n){this._service=e,n instanceof vt?this._location=n:this._location=vt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zr(e,n)}get root(){const e=new vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tA(this._location.path)}get storage(){return this._service}get parent(){const e=eA(this._location.path);if(e===null)return null;const n=new vt(this._location.bucket,e);return new Zr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw HS(e)}}function gf(t,e){const n=e==null?void 0:e[xS];return n==null?null:vt.makeFromBucketSpec(n,t)}class nA{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Qm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DS,this._maxUploadRetryTime=MS,this._requests=new Set,s!=null?this._bucket=vt.makeFromBucketSpec(s,this._host):this._bucket=gf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vt.makeFromBucketSpec(this._url,e):this._bucket=gf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zr(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new jS(Jm());{const o=ZS(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const mf="@firebase/storage",_f="0.11.2";/**
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
 */const iA="storage";function sA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new nA(n,i,s,e,Jn)}function rA(){Ut(new bt(iA,sA,"PUBLIC").setMultipleInstances(!0)),it(mf,_f,""),it(mf,_f,"esm2017")}rA();function oA(t){return(e,n)=>{const i=NT(e,n).run(()=>xe(t));Mp.set(e,i),xT(i,e)}}function aA(t,{firebaseApp:e,modules:n=[]}){t.provide(xp,e);for(const i of n)t.use(i.bind(null,e))}const lA=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},cA={},uA={class:"flex justify-center items-center h-full"},hA=qy('<svg width="157.9" height="85.1" viewBox="0 0 157.9 85.1" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke-width="0" fill="#333333"><path d="M 7.4 85.1 L 0 85.1 L 0 14.6 L 7.3 14.6 L 7.3 20 Q 13.8 13.8 23.5 13.8 A 25.087 25.087 0 0 1 32.409 15.357 A 23.458 23.458 0 0 1 36.3 17.25 Q 42 20.7 45.35 26.5 A 25.168 25.168 0 0 1 48.634 37.577 A 30.512 30.512 0 0 1 48.7 39.6 A 27.337 27.337 0 0 1 47.391 48.159 A 24.658 24.658 0 0 1 45.35 52.75 Q 42 58.6 36.3 62.05 A 24.036 24.036 0 0 1 24.957 65.459 A 29.072 29.072 0 0 1 23.4 65.5 Q 19 65.5 14.9 64 Q 10.8 62.5 7.4 59.7 L 7.4 85.1 Z M 7.4 27.3 L 7.4 52.1 A 17.597 17.597 0 0 0 12.855 56.539 A 21.027 21.027 0 0 0 14.1 57.15 Q 18.2 59 22.8 59 A 18.846 18.846 0 0 0 28.986 58.007 A 17.131 17.131 0 0 0 32.3 56.45 Q 36.5 53.9 38.95 49.55 A 19.128 19.128 0 0 0 41.314 41.722 A 23.342 23.342 0 0 0 41.4 39.7 A 21.203 21.203 0 0 0 40.49 33.405 A 18.809 18.809 0 0 0 38.95 29.8 Q 36.5 25.4 32.3 22.85 A 17.691 17.691 0 0 0 23.825 20.324 A 21.389 21.389 0 0 0 22.8 20.3 A 20.94 20.94 0 0 0 14.819 21.818 A 20.205 20.205 0 0 0 14.05 22.15 A 17.964 17.964 0 0 0 8.607 25.926 A 17.095 17.095 0 0 0 7.4 27.3 Z" id="0" fill="#A44ABB"></path><path d="M 74.4 64.7 L 67.2 64.7 L 53.1 14.6 L 60.4 14.6 L 71.2 54.6 L 83.7 14.6 L 90.3 14.6 L 102.7 54.6 L 113.6 14.6 L 120.6 14.6 L 106.4 64.7 L 99.3 64.7 L 86.9 24.6 L 74.4 64.7 Z" id="1"></path><path d="M 135.5 53.6 L 135.5 20.9 L 124.7 20.9 L 124.7 14.6 L 135.5 14.6 L 135.5 1.9 L 142.8 0 L 142.8 14.6 L 157.9 14.6 L 157.9 20.9 L 142.8 20.9 L 142.8 51.7 Q 142.8 55.7 144.6 57.45 Q 146.333 59.135 150.197 59.198 A 18.614 18.614 0 0 0 150.5 59.2 A 25.228 25.228 0 0 0 152.37 59.134 Q 153.373 59.059 154.25 58.9 A 18.76 18.76 0 0 0 156.074 58.468 A 24.906 24.906 0 0 0 157.8 57.9 L 157.8 64.4 A 17.616 17.616 0 0 1 155.385 65.09 A 22.362 22.362 0 0 1 153.55 65.4 A 36.692 36.692 0 0 1 149.83 65.689 A 32.899 32.899 0 0 1 149 65.7 A 21.885 21.885 0 0 1 145.144 65.382 Q 143.026 65.002 141.347 64.17 A 10.664 10.664 0 0 1 139 62.6 Q 135.5 59.5 135.5 53.6 Z" id="2"></path></g></svg>',1),fA=[hA];function dA(t,e){return ye(),Oe("main",uA,fA)}const pA=lA(cA,[["render",dA]]),gA=["d"],cs=wn({__name:"PwtIcon",props:{icon:String,size:String},setup(t){const e=t;Ke(()=>(e.size==="sm","0 0 24 24"));const n=Ke(()=>{switch(e.size){case"sm":return"w-[24px] h-[24px]";default:return"w-[48px] h-[48px]"}});return(i,s)=>(ye(),Oe("svg",{class:Os(["inline-block",Be(n)]),viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},[de("g",null,[de("path",{d:t.icon,id:"0"},null,8,gA)])],2))}});var yf="M8,5.14V19.14L19,12.14L8,5.14Z",Ta="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";const Zm=[{day:"Saturday",date:"",title:"Day 1",activities:[{time:"9:30 AM",title:"Airport",description:"Mad dash to the bathroom for lipstick and outfits; then head to the taxi line ASAP!",images:["./images/plane.webp"]},{time:"~11:30 AM",title:"Arrive in Paris",description:"Sisters in Paris for realsies! Dreams are coming true in this moment. Drop luggage at the Airbnb",images:["./images/road-to-paris.jpeg"]},{time:"~12:00 PM",title:"Le Petit Poucet",description:"Sisters be thirsty. Time for brunch. Afterwards stop in for wine at Le rouge et le Verre. Impossible! Wine with espresso not allowed."},{time:"3:00 PM",description:"Our host gives us the low down on local restaurants and transportation",title:"Drop the bags at the bnb"},{time:"4:00 PM",title:"Sacré Cœur de Montmartrexs",description:'Montmartre Cheese, Wine & Pastry Guided Walking Tour. "I drink, I smoke, and I fuck" says the French Chef at the wine and cheese stop. Told us all about wine and cheese in France throwing in a "I say fuck you" every now and then',map:"https://www.google.com/maps/place/5+Pl.+Blanche,+75009+Paris,+France/@48.8835368,2.3299476,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e4ee4d322b5:0xc5b127792184bdb6!8m2!3d48.8835333!4d2.3321363!16s%2Fg%2F11cslpjlr9?hl=en",link:"https://www.getyourguide.com/paris-l16/paris-3-hour-montmartre-cheese-wine-and-pastry-tour-t139980/"},{time:"8:00 PM",title:"Evening",description:"Sushi at the local Naoko Biot - Restaurant Japonais for din din. Grab some groceries and head back the bnb for the night.",images:["/images/airbnb.webp"]}]},{day:"Sunday",date:"",title:"Day 2",activities:[{time:"Morning",title:"Bastille Market?",description:"",map:"map link",images:[]},{time:"Noonish",title:"Canal Saint-Martin walk/boat cruise?",description:"",map:"map link",images:[]},{time:"Later",title:"Whatever Charity wants",description:"",map:"map link",images:[]}]},{day:"Monday",date:"",title:"Day 3",activities:[{time:"10:15 AM",title:"Louvre",description:"",map:"map link",images:[]},{time:"1:30 PM",title:"Le Train Bleu",description:"",map:"map link",images:[]},{time:"Afternoon",title:"Notre Dame",description:"do we need tickets",map:"map link",images:[]},{time:"Evening",title:"River Cruise or Eiffel?",description:"",map:"map link",images:[]}]},{day:"Tuesday",date:"",title:"Day 4",activities:[{time:"Morning",title:"Whatever Charity wants",description:"",map:"map link",images:[]},{time:"12:00 PM",title:"Pink Mamma",description:"",map:"map link",images:[]}]},{day:"Wednessday",date:"",title:"Day 5",activities:[{time:"10:00 AM",title:"Musée d'Orsay",description:"",map:"map link",images:[]},{time:"Midday",timeConstraint:"by 3:30 PM",title:"Grand Palais",description:"",map:"map link",images:[]},{time:"Afternoon",title:"Opera Garnier",description:"",map:"map link",images:[]}]},{day:"Thursday",date:"",title:"Day 6",activities:[{time:"All Day",title:"Whatever Charity wants",description:"",map:"map link",images:[]}]}],mA=["id"],_A={class:"text-4xl uppercase text-purple tracking-widest grow text-center md:text-left group"},yA={class:"absolute -top-[.5rem] -left-[.5rem] bg-peach-light/75 rounded shadow p-2 pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 group-hover:pointer-events-auto"},vA=["onClick"],EA=wn({__name:"StickyHeader",props:{icon:String,title:String},setup(t){const e=xe(Zm.map(o=>o.day)),n=xe(e.value[0]),i=o=>{n.value=e.value[o],ao(()=>{var a;(a=document.getElementById(n.value))==null||a.scrollIntoView({behavior:"smooth"})})},s=new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(new Date),r=e.value.findIndex(o=>o===s);return i(r),(o,a)=>(ye(),Oe("div",{id:t.title,class:"flex items-center justify-center gap-4 mb-2 sticky top-0 bg-peach-light/75 z-10"},[Te(cs,{class:"text-purple opacity-40 hidden md:inline-block",icon:Be(yf)},null,8,["icon"]),de("div",_A,[Id(Dn(t.title)+" ",1),de("div",yA,[(ye(!0),Oe(ot,null,ka(e.value,(l,c)=>(ye(),Oe("div",{class:"flex gap-4 items-center",key:l,onClick:()=>i(c)},[l===t.title?(ye(),ho(cs,{key:0,class:"text-purple opacity-40 hidden md:inline-block",icon:Be(yf)},null,8,["icon"])):$n("",!0),de("div",{class:Os(["cursor-pointer","grow",{"px-4":l!==t.title}])},Dn(l),3)],8,vA))),128))])])],8,mA))}});var vf;const e_=typeof window<"u",wA=t=>typeof t=="string",IA=()=>{};e_&&((vf=window==null?void 0:window.navigator)!=null&&vf.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function t_(t){return typeof t=="function"?t():Be(t)}function TA(t){return t}function n_(t){return Mf()?(w_(t),!0):!1}function i_(t,e=!0){Td()?cd(t):e?t():ao(t)}function eo(t){var e;const n=t_(t);return(e=n==null?void 0:n.$el)!=null?e:n}const s_=e_?window:void 0;function Ef(...t){let e,n,i,s;if(wA(t[0])||Array.isArray(t[0])?([n,i,s]=t,e=s_):[e,n,i,s]=t,!e)return IA;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,h,d,g)=>(u.addEventListener(h,d,g),()=>u.removeEventListener(h,d,g)),l=gn(()=>[eo(e),t_(s)],([u,h])=>{o(),u&&r.push(...n.flatMap(d=>i.map(g=>a(u,d,g,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return n_(c),c}function bA(t,e=!1){const n=xe(),i=()=>n.value=!!t();return i(),i_(i,e),n}const wf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},If="__vueuse_ssr_handlers__";wf[If]=wf[If]||{};var Tf=Object.getOwnPropertySymbols,CA=Object.prototype.hasOwnProperty,RA=Object.prototype.propertyIsEnumerable,SA=(t,e)=>{var n={};for(var i in t)CA.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&Tf)for(var i of Tf(t))e.indexOf(i)<0&&RA.call(t,i)&&(n[i]=t[i]);return n};function AA(t,e,n={}){const i=n,{window:s=s_}=i,r=SA(i,["window"]);let o;const a=bA(()=>s&&"ResizeObserver"in s),l=()=>{o&&(o.disconnect(),o=void 0)},c=gn(()=>eo(t),h=>{l(),a.value&&s&&h&&(o=new ResizeObserver(e),o.observe(h,r))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return n_(u),{isSupported:a,stop:u}}function kA(t,e={}){const{reset:n=!0,windowResize:i=!0,windowScroll:s=!0,immediate:r=!0}=e,o=xe(0),a=xe(0),l=xe(0),c=xe(0),u=xe(0),h=xe(0),d=xe(0),g=xe(0);function _(){const I=eo(t);if(!I){n&&(o.value=0,a.value=0,l.value=0,c.value=0,u.value=0,h.value=0,d.value=0,g.value=0);return}const C=I.getBoundingClientRect();o.value=C.height,a.value=C.bottom,l.value=C.left,c.value=C.right,u.value=C.top,h.value=C.width,d.value=C.x,g.value=C.y}return AA(t,_),gn(()=>eo(t),I=>!I&&_()),s&&Ef("scroll",_,{capture:!0,passive:!0}),i&&Ef("resize",_,{passive:!0}),i_(()=>{r&&_()}),{height:o,bottom:a,left:l,right:c,top:u,width:h,x:d,y:g,update:_}}var bf;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(bf||(bf={}));var OA=Object.defineProperty,Cf=Object.getOwnPropertySymbols,NA=Object.prototype.hasOwnProperty,PA=Object.prototype.propertyIsEnumerable,Rf=(t,e,n)=>e in t?OA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,xA=(t,e)=>{for(var n in e||(e={}))NA.call(e,n)&&Rf(t,n,e[n]);if(Cf)for(var n of Cf(e))PA.call(e,n)&&Rf(t,n,e[n]);return t};const DA={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};xA({linear:TA},DA);const MA={class:"relative"},LA={class:"inline-block w-[188px] h-[141px] p-1 rounded absolute top-4 left-[calc(50%+16px)] -translate-x-1/2 rotate-[-0deg] bg-white"},FA={class:"text-white absolute top-1 left-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded bg-peach z-0 inline-flex justify-center items-center"},UA=["src"],BA={class:"inline-block w-[188px] h-[141px] p-1 rounded rotate-[-6deg] absolute top-4 left-[calc(50%+8px)] -translate-x-1/2 bg-white"},$A={class:"text-white absolute top-1 left-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded bg-peach z-0 inline-flex justify-center items-center"},HA=["src"],jA={class:"inline-block w-[188px] h-[141px] p-1 rounded -rotate-12 bg-white relative left-1/2 -translate-x-1/2"},WA={class:"text-white absolute top-1 left-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded bg-peach z-0 inline-flex justify-center items-center"},VA=["src"],zA=wn({__name:"PhotoPreview",props:{images:null},setup(t){return(e,n)=>(ye(),Oe("div",MA,[de("div",LA,[de("span",FA,[Te(cs,{icon:Be(Ta)},null,8,["icon"])]),t.images.length>2?(ye(),Oe("img",{key:0,class:"object-cover w-full h-full rounded relative z-10",src:t.images[2]},null,8,UA)):$n("",!0)]),de("div",BA,[de("span",$A,[Te(cs,{icon:Be(Ta)},null,8,["icon"])]),t.images.length>1?(ye(),Oe("img",{key:0,class:"object-cover w-full h-full rounded relative z-10",src:t.images[1]},null,8,HA)):$n("",!0)]),de("div",jA,[de("span",WA,[Te(cs,{icon:Be(Ta)},null,8,["icon"])]),t.images.length>0?(ye(),Oe("img",{key:0,class:"object-cover w-full h-full rounded relative z-10",src:t.images[0]},null,8,VA)):$n("",!0)])]))}}),KA={class:"p-8 md:py-4 md:px-8 flex flex-col md:!flex-row items-center"},qA={class:"tracking-widest md:order-last uppercase"},GA={class:"font-title text-4xl text-pink grow text-center md:text-left"},YA={class:"flex flex-col md:flex-row p-8 pt-0 gap-8 items-stretch"},XA={class:"text-xl grow md:order-first flex flex-col gap-8"},QA={class:"grow"},JA={class:"flex md:text-base justify-between"},ZA={class:"grow flex gap-8"},ek=["href"],tk=["href"],nk={key:0,class:"text-green-500"},ik=wn({__name:"ActivityItem",props:{activity:null},emits:["stuck"],setup(t,{emit:e}){const n=xe(null),{top:i,bottom:s}=kA(n),r=Ke(()=>i.value<-40&&s.value>60);return gn(r,o=>{e("stuck",o)}),(o,a)=>(ye(),Oe("div",{ref_key:"el",ref:n,class:"shadow-lg rounded-lg bg-white mb-4 md:mb-8 relative flex-col gap-8 overflow-hidden"},[de("div",KA,[de("div",qA,Dn(t.activity.time),1),de("div",GA,Dn(t.activity.title),1)]),de("div",YA,[Te(zA,{class:"p-3",images:t.activity.images||[]},null,8,["images"]),de("div",XA,[de("div",QA,Dn(t.activity.description),1),de("div",JA,[de("div",ZA,[t.activity.map?(ye(),Oe("a",{key:0,class:"uppercase tracking-widest",href:t.activity.map,target:"_blank"},"map",8,ek)):$n("",!0),t.activity.link?(ye(),Oe("a",{key:1,class:"uppercase tracking-widest",href:t.activity.link,target:"_blank"},"link",8,tk)):$n("",!0)]),t.activity.cost?(ye(),Oe("div",nk,"$ "+Dn(t.activity.cost),1)):$n("",!0)])])])],512))}}),sk={class:"p-4 md:p-8"},rk={class:"text-6xl italic font-medium font-title text-center text-pink"},ok=de("div",{class:"text-center text-xl tracking-widest font-extralight"},"2023",-1),ak={class:"p-2 md:p-8 max-w-[800px] m-auto flex-col space-y-16 mt-16"},lk=wn({__name:"ParisPage",setup(t){const e=xe(""),n=(s,r)=>{e.value=s?r:""},i={}.VITE_TEST;return(s,r)=>(ye(),Oe("div",sk,[de("div",rk," Sisters in Paris "+Dn(Be(i)),1),ok,de("div",ak,[(ye(!0),Oe(ot,null,ka(Be(Zm),o=>(ye(),Oe("div",{key:o.title,class:"relative md:before:opacity-10 md:before:border-t-2 md:before:border-r-2 md:before:border-purple md:before:border-dotted md:before:absolute md:before:h-full md:before:w-8 md:before:top-6 md:before:-right-8"},[Te(EA,{title:o.day,icon:o.icon,time:e.value},null,8,["title","icon","time"]),(ye(!0),Oe(ot,null,ka(o.activities,a=>(ye(),ho(ik,{key:a.time,activity:a,onStuck:l=>n(l,a.time)},null,8,["activity","onStuck"]))),128))]))),128))])]))}}),r_=NE({history:Gv("/"),routes:[{path:"/",name:"home",component:pA},{path:"/paris",component:lk,meta:{title:"Paris 2023"}},{path:"/login",component:()=>Zo(()=>import("./LoginPage-83a6a6da.js"),[]),meta:{title:"Login"}},{path:"/me",name:"me",component:()=>Zo(()=>import("./MainLayout-845678ae.js"),[]),meta:{title:"Private",requiresAuth:!0},children:[{path:"activity",component:()=>Zo(()=>import("./ActivityLog-dd7af114.js"),[]),meta:{title:"Activity"}}]}]});r_.beforeEach(async t=>{if(t.meta.requiresAuth&&!await PT())return{path:"/login",query:{redirect:t.fullPath}};document.title=typeof t.meta.title=="string"?`${t.meta.title} | pwt`:"pwt"});const ck="AIzaSyBp2MDQIakiuOUYe0UzJxUB63Z5quZ7Zng",uk="prettywebthings.firebaseapp.com",hk="prettywebthings",fk="prettywebthings.appspot.com",dk="352201092690",pk="1:352201092690:web:cd0118e9f3a4c8e5fdb98b",gk={apiKey:ck,authDomain:uk,projectId:hk,storageBucket:fk,messagingSenderId:dk,appId:pk},mk=Qd(gk),Wo=Rv(xE);Wo.use(aA,{firebaseApp:mk,modules:[oA()]});Wo.use(Ov());Wo.use(r_);Wo.mount("#app");export{ot as F,un as G,lA as _,Be as a,Id as b,Oe as c,wn as d,$n as e,yk as f,sT as g,wk as h,vk as i,de as j,Te as k,_k as l,Ke as m,Os as n,ye as o,xe as r,Ek as s,Dn as t,Ik as u,oy as w};
