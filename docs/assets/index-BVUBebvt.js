var W=Object.defineProperty;var H=(r,t,n)=>t in r?W(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var E=(r,t,n)=>H(r,typeof t!="symbol"?t+"":t,n);import{d as N,R as T,a2 as L,a8 as g,a6 as R,a7 as I,a9 as O,aa as P,a3 as b,ac as x,ad as v,ae as S,af as $}from"./index-BKUlZVzQ.js";import{u as D}from"./use-notification-BT-ho6Q0.js";const F="https://dashboard.edgematrix.pro/",M="#auth",k=500,V="authorize-ready",z="authorize-setup",K="authorize-success",B="authorize-failure",G="user-interrupt";class j{constructor(){E(this,"_emcWindow");E(this,"_eventHandler")}_removeEventListener(){this._eventHandler&&window.removeEventListener("message",this._eventHandler),this._eventHandler=void 0}_getEventHandler(t,n){return async d=>{var i;if(d.origin!==t.origin){console.warn(`expected origin '${t.origin}', got '${d.origin}'`);return}const c=d.data;switch(c.type){case V:{const a={type:z};(i=this._emcWindow)==null||i.postMessage(a,t.origin);break}case K:try{await this._handleSuccess(c,n.onSuccess)}catch(a){this._handleFailure(a.message,n.onError)}break;case B:this._handleFailure(c.data,n.onError);break;default:console.info(`unknow message type '${c.type}'`);break}}}async _handleSuccess(t,n){this._emcWindow&&this._emcWindow.close(),this._removeEventListener(),delete this._emcWindow,typeof n=="function"&&n(t)}_handleFailure(t,n){this._emcWindow&&!this._emcWindow.closed&&this._emcWindow.close(),typeof n=="function"&&n(t),this._removeEventListener(),delete this._emcWindow}signIn(t){const n=new URL(t.provider||F);n.hash=t.endpoint||M,this._emcWindow&&this._emcWindow.close(),this._removeEventListener(),this._eventHandler=this._getEventHandler(n,t),window.addEventListener("message",this._eventHandler),this._emcWindow=window.open(n.toString(),"emcWindow",t.windowOpenerFeatures);const d=()=>{this._emcWindow&&(this._emcWindow.closed?this._handleFailure(G,t.onError):setTimeout(d,k))};d()}}const q=new j,y="https://emchub.ai/";function Y(){function r(e){const o=new URLSearchParams;return Object.entries(e).forEach(([s,u])=>{o.append(s,u)}),o.toString()}function t(e){return typeof e!="string"?"":typeof decodeURIComponent!="function"||typeof encodeURIComponent!="function"||decodeURIComponent(e)!==e?e:encodeURIComponent(e)}function n(e){return new Promise(o=>{const s=e.provider||y,u=e.endpoint||"#/auth",l=e.windowOpenerFeatures||"popup,width=480,height=720",h=e.client,p=t(e.redirect||"0"),_=e.scope||"read",f=r({launch:"popup",client:h,redirect:p,scope:_}),w=u.indexOf("?")>-1?"&":"?",C=`${u}${w}${f}`,U=m=>o(["",m.data]),A=m=>o([m,null]);if(!h)throw new Error("Invalid 'client'");q.signIn({provider:s,endpoint:C,windowOpenerFeatures:l,onSuccess:U,onError:A})})}async function d(e){if(typeof window>"u")return["Not found window",null];if(!window.location)return["Not found window.location",null];try{const o=e.provider||y,s=e.endpoint||"#/auth",u=e.client,l=t(e.redirect),h=e.scope||"read",p=e.state||"",_=new URL(o),f=r({launch:"redirect",client:u,redirect:l,scope:h,state:p}),w=s.indexOf("?")>-1?"&":"?";if(_.hash=`${s}${w}${f}`,!u)throw new Error("Invalid 'client'");if(!l)throw new Error("Invalid 'redirect'");return["",{url:_.toString()}]}catch(o){return console.error("Error sign in redirect",o),[o.message,null]}}function c(e,o){let s=new RegExp(`[?&]${e}=([^&?#/]+)`,"g"),u=null,l=[];for(;(u=s.exec(o))!==null;)l.push(u[1]);return l}function i(e,o){const s=c(e,o);return s[s.length-1]}async function a(){const e=i("code",location.href);return e?["",{code:e}]:["Not found 'code' value",null]}return{signInWithPopup:n,signInWithRedirect:d,getRedirectResult:a}}const{signInWithPopup:J,signInWithRedirect:Q,getRedirectResult:X}=Y(),Z=r=>(O("data-v-db231ba5"),r=r(),P(),r),ee={class:"page"},te=Z(()=>b("h3",null,"EMCHub OAuth",-1)),ne=N({__name:"index",setup(r){const t=D();async function n(){const c={client:"1234"},[i,a]=await J(c);if(i)return window.alert(i);const e=a.code;window.alert(`code: ${e}`)}async function d(){const c={client:"1234",redirect:location.href};sessionStorage.setItem("redrect","1");const[i,a]=await Q(c);if(i)return window.alert(i);location.href=a.url}return T(async()=>{if(sessionStorage.getItem("redrect")){sessionStorage.removeItem("redrect");const[i,a]=await X();if(i)return window.alert(i);const e=a.code;t.success({title:"OAuth Success",content:`code: ${e}`})}}),(c,i)=>(x(),L("div",ee,[te,g(I(S),{type:"primary",size:"large",strong:"",onClick:n},{default:R(()=>[v("OAuth Popup")]),_:1}),g(I(S),{type:"primary",size:"large",strong:"",onClick:d},{default:R(()=>[v("OAuth Redirect")]),_:1})]))}}),ce=$(ne,[["__scopeId","data-v-db231ba5"]]);export{ce as default};