import{d as g,u as h,a as o,o as s,c as a,b as l,t as m,e as d,F as y,g as u,s as _,f as k,h as f,G as C,i as w}from"./index-55e1811f.js";const G=g({__name:"LoginView",setup(b){const e=h(),n=k(),c=f(),i=async()=>{const t=new C,r=u();await w(r,t),n.push({path:c.query.redirect||"/"})},p=async()=>{const t=u();await _(t),n.push({path:"/"})};return(t,r)=>o(e)?(s(),a(y,{key:1},[l(m(o(e).displayName)+" ",1),o(e)?d("",!0):(s(),a("button",{key:0,onClick:p},"Logout"))],64)):(s(),a("button",{key:0,onClick:i},"Login"))}});export{G as default};