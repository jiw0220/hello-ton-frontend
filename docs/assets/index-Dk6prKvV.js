var Je=Object.defineProperty;var Ke=(_,o,f)=>o in _?Je(_,o,{enumerable:!0,configurable:!0,writable:!0,value:f}):_[o]=f;var fe=(_,o,f)=>(Ke(_,typeof o!="symbol"?o+"":o,f),f);import{i as Xe,t as Ye,m as Ze,d as et,r as tt,o as rt,c as nt,a as ot,b as it,e as V,w as $,u as z,f as st,g as at,h as Q,B as G,_ as lt}from"./index-DCVLsAej.js";function ct(){const _=Xe(Ze,null);return _===null&&Ye("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),_}var Pe={},oe={};(function(){var _={},o="";try{o=location.hash.toString()}catch{}var f=w(o),T=D("initParams");if(T)for(var i in T)typeof f[i]>"u"&&(f[i]=T[i]);U("initParams",f);var I=!1,k;try{if(I=window.parent!=null&&window!=window.parent,I){window.addEventListener("message",function(a){if(a.source===window.parent){try{var p=JSON.parse(a.data)}catch{return}if(!(!p||!p.eventType))if(p.eventType=="set_custom_style")a.origin==="https://web.telegram.org"&&(k.innerHTML=p.eventData);else if(p.eventType=="reload_iframe"){try{window.parent.postMessage(JSON.stringify({eventType:"iframe_will_reload"}),"*")}catch{}location.reload()}else W(p.eventType,p.eventData)}}),k=document.createElement("style"),document.head.appendChild(k);try{window.parent.postMessage(JSON.stringify({eventType:"iframe_ready",eventData:{reload_supported:!0}}),"*")}catch{}}}catch{}function u(a){try{return a=a.replace(/\+/g,"%20"),decodeURIComponent(a)}catch{return a}}function w(a){a=a.replace(/^#/,"");var p={};if(!a.length)return p;if(a.indexOf("=")<0&&a.indexOf("?")<0)return p._path=u(a),p;var d=a.indexOf("?");if(d>=0){var h=a.substr(0,d);p._path=u(h),a=a.substr(d+1)}var x=b(a);for(var B in x)p[B]=x[B];return p}function b(a){var p={};if(!a.length)return p;var d=a.split("&"),h,x,B,L;for(h=0;h<d.length;h++)x=d[h].split("="),B=u(x[0]),L=x[1]==null?null:u(x[1]),p[B]=L;return p}function y(a,p){var d=a.indexOf("#");if(d<0)return a+"#"+p;var h=a.substr(d+1);return h.indexOf("=")>=0||h.indexOf("?")>=0?a+"&"+p:h.length>0?a+"?"+p:a+p}function A(a,p,d){if(p||(p=function(){}),d===void 0&&(d=""),console.log("[Telegram.WebView] > postEvent",a,d),window.TelegramWebviewProxy!==void 0)TelegramWebviewProxy.postEvent(a,JSON.stringify(d)),p();else if(window.external&&"notify"in window.external)window.external.notify(JSON.stringify({eventType:a,eventData:d})),p();else if(I)try{var h="https://web.telegram.org";h="*",window.parent.postMessage(JSON.stringify({eventType:a,eventData:d}),h),p()}catch(x){p(x)}else p({notAvailable:!0})}function W(a,p){console.log("[Telegram.WebView] < receiveEvent",a,p),S(a,function(d){d(a,p)})}function S(a,p){var d=_[a];if(!(d===void 0||!d.length))for(var h=0;h<d.length;h++)try{p(d[h])}catch{}}function O(a,p){_[a]===void 0&&(_[a]=[]);var d=_[a].indexOf(p);d===-1&&_[a].push(p)}function N(a,p){if(_[a]!==void 0){var d=_[a].indexOf(p);d!==-1&&_[a].splice(d,1)}}function U(a,p){try{return window.sessionStorage.setItem("__telegram__"+a,JSON.stringify(p)),!0}catch{}return!1}function D(a){try{return JSON.parse(window.sessionStorage.getItem("__telegram__"+a))}catch{}return null}window.Telegram||(window.Telegram={}),window.Telegram.WebView={initParams:f,isIframe:I,onEvent:O,offEvent:N,postEvent:A,receiveEvent:W,callEventCallbacks:S},window.Telegram.Utils={urlSafeDecode:u,urlParseQueryString:b,urlParseHashParams:w,urlAppendHashParams:y,sessionStorageSet:U,sessionStorageGet:D},window.TelegramGameProxy_receiveEvent=W,window.TelegramGameProxy={receiveEvent:W}})();(function(){var _=window.Telegram.Utils,o=window.Telegram.WebView,f=o.initParams,T=o.isIframe,i={},I="",k={},u={},w="light",b="6.0",y="unknown";if(f.tgWebAppData&&f.tgWebAppData.length){I=f.tgWebAppData,k=_.urlParseQueryString(I);for(var A in k){var W=k[A];try{(W.substr(0,1)=="{"&&W.substr(-1)=="}"||W.substr(0,1)=="["&&W.substr(-1)=="]")&&(k[A]=JSON.parse(W))}catch{}}}if(f.tgWebAppThemeParams&&f.tgWebAppThemeParams.length){var S=f.tgWebAppThemeParams;try{var O=JSON.parse(S);O&&ie(O)}catch{}}var O=_.sessionStorageGet("themeParams");O&&ie(O),f.tgWebAppVersion&&(b=f.tgWebAppVersion),f.tgWebAppPlatform&&(y=f.tgWebAppPlatform);function N(e,t){t.theme_params&&(ie(t.theme_params),window.Telegram.WebApp.MainButton.setParams({}),ce(),h("themeChanged"))}var U=window.innerHeight;function D(e,t){t.height&&(window.removeEventListener("resize",a),se(t))}function a(e){U!=window.innerHeight&&(U=window.innerHeight,h("viewportChanged",{isStateStable:!0}))}function p(e){if(!(e.metaKey||e.ctrlKey)){for(var t=e.target;t.tagName!="A"&&t.parentNode;)t=t.parentNode;t.tagName=="A"&&t.target!="_blank"&&(t.protocol=="http:"||t.protocol=="https:")&&t.hostname=="t.me"&&(i.openTgLink(t.href),e.preventDefault())}}function d(e){return e.toString().replace(/^\s+|\s+$/g,"")}function h(e){var t=Array.prototype.slice.call(arguments);e=t.shift(),o.callEventCallbacks("webview:"+e,function(r){r.apply(i,t)})}function x(e,t){o.onEvent("webview:"+e,t)}function B(e,t){o.offEvent("webview:"+e,t)}function L(e,t){var r=document.documentElement;r&&r.style&&r.style.setProperty&&r.style.setProperty("--tg-"+e,t)}function ie(e){e.bg_color=="#1c1c1d"&&e.bg_color==e.secondary_bg_color&&(e.secondary_bg_color="#2c2c2e");var t;for(var r in e)(t=Y(e[r]))&&(u[r]=t,r=="bg_color"&&(w=xe(t)?"dark":"light",L("color-scheme",w)),r="theme-"+r.split("_").join("-"),L(r,t));_.sessionStorageSet("themeParams",u)}var R={};function de(e){for(var t=100;--t;){for(var r="",n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",s=n.length,v=0;v<e;v++)r+=n[Math.floor(Math.random()*s)];if(!R[r])return R[r]={},r}throw Error("WebAppCallbackIdGenerateFailed")}var J=!1,K=!1,ge=!0;function se(e){typeof e<"u"&&(ge=!!e.is_expanded,J=e.height,e.is_state_stable&&(K=e.height),h("viewportChanged",{isStateStable:!!e.is_state_stable}));var t,r;J!==!1?t=J-M+"px":t=M?"calc(100vh - "+M+"px)":"100vh",K!==!1?r=K-M+"px":r=M?"calc(100vh - "+M+"px)":"100vh",L("viewport-height",t),L("viewport-stable-height",r)}var ae=!1;function Ce(e){if(!E("6.2")){console.warn("[Telegram.WebApp] Closing confirmation is not supported in version "+b);return}ae=!!e,o.postEvent("web_app_setup_closing_behavior",!1,{need_confirmation:ae})}var j="bg_color",X=null;function Te(){return j=="secondary_bg_color"?u.secondary_bg_color:j=="bg_color"?u.bg_color:X}function ke(e){if(!E("6.1")){console.warn("[Telegram.WebApp] Header color is not supported in version "+b);return}E("6.9")||(u.bg_color&&u.bg_color==e?e="bg_color":u.secondary_bg_color&&u.secondary_bg_color==e&&(e="secondary_bg_color"));var t=null,r=null;if(e=="bg_color"||e=="secondary_bg_color")r=e;else if(E("6.9")&&(t=Y(e),!t))throw console.error("[Telegram.WebApp] Header color format is invalid",e),Error("WebAppHeaderColorInvalid");if(!E("6.9")&&r!="bg_color"&&r!="secondary_bg_color")throw console.error("[Telegram.WebApp] Header color key should be one of Telegram.WebApp.themeParams.bg_color, Telegram.WebApp.themeParams.secondary_bg_color, 'bg_color', 'secondary_bg_color'",e),Error("WebAppHeaderColorKeyInvalid");j=r,X=t,ve()}var be=null,le=null;function ve(){(be!=j||le!=X)&&(be=j,le=X,le?o.postEvent("web_app_set_header_color",!1,{color:X}):o.postEvent("web_app_set_header_color",!1,{color_key:j}))}var ne="bg_color";function he(){return ne=="secondary_bg_color"?u.secondary_bg_color:ne=="bg_color"?u.bg_color:ne}function Ie(e){if(!E("6.1")){console.warn("[Telegram.WebApp] Background color is not supported in version "+b);return}var t;if(e=="bg_color"||e=="secondary_bg_color")t=e;else if(t=Y(e),!t)throw console.error("[Telegram.WebApp] Background color format is invalid",e),Error("WebAppBackgroundColorInvalid");ne=t,ce()}var me=null;function ce(){var e=he();me!=e&&(me=e,o.postEvent("web_app_set_background_color",!1,{color:e}))}function Y(e){e+="";var t;if(t=/^\s*#([0-9a-f]{6})\s*$/i.exec(e))return"#"+t[1].toLowerCase();if(t=/^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(e))return("#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]).toLowerCase();if(t=/^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(e)){var r=parseInt(t[1]),n=parseInt(t[2]),s=parseInt(t[3]);return r=(r<16?"0":"")+r.toString(16),n=(n<16?"0":"")+n.toString(16),s=(s<16?"0":"")+s.toString(16),"#"+r+n+s}return!1}function xe(e){e=e.replace(/[\s#]/g,""),e.length==3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e.substr(0,2),16),r=parseInt(e.substr(2,2),16),n=parseInt(e.substr(4,2),16),s=Math.sqrt(.299*(t*t)+.587*(r*r)+.114*(n*n));return s<120}function Se(e,t){typeof e!="string"&&(e=""),typeof t!="string"&&(t=""),e=e.replace(/^\s+|\s+$/g,"").split("."),t=t.replace(/^\s+|\s+$/g,"").split(".");var r=Math.max(e.length,t.length),n,s,v;for(n=0;n<r;n++)if(s=parseInt(e[n])||0,v=parseInt(t[n])||0,s!=v)return s>v?1:-1;return 0}function E(e){return Se(b,e)>=0}function Oe(e){if(window.Blob)try{return new Blob([e]).size}catch{}for(var t=e.length,r=e.length-1;r>=0;r--){var n=e.charCodeAt(r);n>127&&n<=2047?t++:n>2047&&n<=65535&&(t+=2),n>=56320&&n<=57343&&r--}return t}var Me=function(){var e=!1,t={};Object.defineProperty(t,"isVisible",{set:function(g){m({is_visible:g})},get:function(){return e},enumerable:!0});var r=null;o.onEvent("back_button_pressed",n);function n(){h("backButtonClicked")}function s(){return{is_visible:e}}function v(g){return typeof g>"u"&&(g=s()),JSON.stringify(g)}function c(){return E("6.1")?!0:(console.warn("[Telegram.WebApp] BackButton is not supported in version "+b),!1)}function P(){var g=s(),C=v(g);r!==C&&(r=C,o.postEvent("web_app_setup_back_button",!1,g))}function m(g){return c()&&(typeof g.is_visible<"u"&&(e=!!g.is_visible),P()),t}return t.onClick=function(g){return c()&&x("backButtonClicked",g),t},t.offClick=function(g){return c()&&B("backButtonClicked",g),t},t.show=function(){return m({is_visible:!0})},t.hide=function(){return m({is_visible:!1})},t}(),M=0,Be=function(){var e=!1,t=!0,r=!1,n="CONTINUE",s=!1,v=!1,c={};Object.defineProperty(c,"text",{set:function(l){c.setParams({text:l})},get:function(){return n},enumerable:!0}),Object.defineProperty(c,"color",{set:function(l){c.setParams({color:l})},get:function(){return s||u.button_color||"#2481cc"},enumerable:!0}),Object.defineProperty(c,"textColor",{set:function(l){c.setParams({text_color:l})},get:function(){return v||u.button_text_color||"#ffffff"},enumerable:!0}),Object.defineProperty(c,"isVisible",{set:function(l){c.setParams({is_visible:l})},get:function(){return e},enumerable:!0}),Object.defineProperty(c,"isProgressVisible",{get:function(){return r},enumerable:!0}),Object.defineProperty(c,"isActive",{set:function(l){c.setParams({is_active:l})},get:function(){return t},enumerable:!0});var P=null;o.onEvent("main_button_pressed",q);var m=null,g={};if(f.tgWebAppDebug){m=document.createElement("tg-main-button"),g={font:"600 14px/18px sans-serif",display:"none",width:"100%",height:"48px",borderRadius:"0",background:"no-repeat right center",position:"fixed",left:"0",right:"0",bottom:"0",margin:"0",padding:"15px 20px",textAlign:"center",boxSizing:"border-box",zIndex:"10000"};for(var C in g)m.style[C]=g[C];document.addEventListener("DOMContentLoaded",function l(H){document.removeEventListener("DOMContentLoaded",l),document.body.appendChild(m),m.addEventListener("click",q,!1)})}function q(){t&&h("mainButtonClicked")}function we(){var l=c.color,H=c.textColor;return e?{is_visible:!0,is_active:t,is_progress_visible:r,text:n,color:l,text_color:H}:{is_visible:!1}}function ze(l){return typeof l>"u"&&(l=we()),JSON.stringify(l)}function pe(){var l=we(),H=ze(l);P!==H&&(P=H,o.postEvent("web_app_setup_main_button",!1,l),f.tgWebAppDebug&&Qe(l))}function Qe(l){l.is_visible?(m.style.display="block",M=48,m.style.opacity=l.is_active?"1":"0.8",m.style.cursor=l.is_active?"pointer":"auto",m.disabled=!l.is_active,m.innerText=l.text,m.style.backgroundImage=l.is_progress_visible?"url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewport%3D%220%200%2048%2048%22%20width%3D%2248px%22%20height%3D%2248px%22%3E%3Ccircle%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222.25%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22%20stroke-dashoffset%3D%22106%22%20r%3D%229%22%20stroke-dasharray%3D%2256.52%22%20rotate%3D%22-90%22%3E%3Canimate%20attributeName%3D%22stroke-dashoffset%22%20attributeType%3D%22XML%22%20dur%3D%22360s%22%20from%3D%220%22%20to%3D%2212500%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%3CanimateTransform%20attributeName%3D%22transform%22%20attributeType%3D%22XML%22%20type%3D%22rotate%22%20dur%3D%221s%22%20from%3D%22-90%2024%2024%22%20to%3D%22630%2024%2024%22%20repeatCount%3D%22indefinite%22%3E%3C%2FanimateTransform%3E%3C%2Fcircle%3E%3C%2Fsvg%3E')":"none",m.style.backgroundColor=l.color,m.style.color=l.text_color):(m.style.display="none",M=0),document.documentElement&&(document.documentElement.style.boxSizing="border-box",document.documentElement.style.paddingBottom=M+"px"),se()}function Ge(l){if(typeof l.text<"u"){var H=d(l.text);if(!H.length)throw console.error("[Telegram.WebApp] Main button text is required",l.text),Error("WebAppMainButtonParamInvalid");if(H.length>64)throw console.error("[Telegram.WebApp] Main button text is too long",H),Error("WebAppMainButtonParamInvalid");n=H}if(typeof l.color<"u")if(l.color===!1||l.color===null)s=!1;else{var ye=Y(l.color);if(!ye)throw console.error("[Telegram.WebApp] Main button color format is invalid",l.color),Error("WebAppMainButtonParamInvalid");s=ye}if(typeof l.text_color<"u")if(l.text_color===!1||l.text_color===null)v=!1;else{var Ee=Y(l.text_color);if(!Ee)throw console.error("[Telegram.WebApp] Main button text color format is invalid",l.text_color),Error("WebAppMainButtonParamInvalid");v=Ee}if(typeof l.is_visible<"u"){if(l.is_visible&&!c.text.length)throw console.error("[Telegram.WebApp] Main button text is required"),Error("WebAppMainButtonParamInvalid");e=!!l.is_visible}return typeof l.is_active<"u"&&(t=!!l.is_active),pe(),c}return c.setText=function(l){return c.setParams({text:l})},c.onClick=function(l){return x("mainButtonClicked",l),c},c.offClick=function(l){return B("mainButtonClicked",l),c},c.show=function(){return c.setParams({is_visible:!0})},c.hide=function(){return c.setParams({is_visible:!1})},c.enable=function(){return c.setParams({is_active:!0})},c.disable=function(){return c.setParams({is_active:!1})},c.showProgress=function(l){return t=!!l,r=!0,pe(),c},c.hideProgress=function(){return c.isActive||(t=!0),r=!1,pe(),c},c.setParams=Ge,c}(),_e=function(){var e=!1,t={};Object.defineProperty(t,"isVisible",{set:function(g){m({is_visible:g})},get:function(){return e},enumerable:!0});var r=null;o.onEvent("settings_button_pressed",n);function n(){h("settingsButtonClicked")}function s(){return{is_visible:e}}function v(g){return typeof g>"u"&&(g=s()),JSON.stringify(g)}function c(){return E("6.10")?!0:(console.warn("[Telegram.WebApp] SettingsButton is not supported in version "+b),!1)}function P(){var g=s(),C=v(g);r!==C&&(r=C,o.postEvent("web_app_setup_settings_button",!1,g))}function m(g){return c()&&(typeof g.is_visible<"u"&&(e=!!g.is_visible),P()),t}return t.onClick=function(g){return c()&&x("settingsButtonClicked",g),t},t.offClick=function(g){return c()&&B("settingsButtonClicked",g),t},t.show=function(){return m({is_visible:!0})},t.hide=function(){return m({is_visible:!1})},t}(),Re=function(){var e={};function t(r){if(!E("6.1"))return console.warn("[Telegram.WebApp] HapticFeedback is not supported in version "+b),e;if(r.type=="impact"){if(r.impact_style!="light"&&r.impact_style!="medium"&&r.impact_style!="heavy"&&r.impact_style!="rigid"&&r.impact_style!="soft")throw console.error("[Telegram.WebApp] Haptic impact style is invalid",r.impact_style),Error("WebAppHapticImpactStyleInvalid")}else if(r.type=="notification"){if(r.notification_type!="error"&&r.notification_type!="success"&&r.notification_type!="warning")throw console.error("[Telegram.WebApp] Haptic notification type is invalid",r.notification_type),Error("WebAppHapticNotificationTypeInvalid")}else if(r.type!="selection_change")throw console.error("[Telegram.WebApp] Haptic feedback type is invalid",r.type),Error("WebAppHapticFeedbackTypeInvalid");return o.postEvent("web_app_trigger_haptic_feedback",!1,r),e}return e.impactOccurred=function(r){return t({type:"impact",impact_style:r})},e.notificationOccurred=function(r){return t({type:"notification",notification_type:r})},e.selectionChanged=function(){return t({type:"selection_change"})},e}(),He=function(){var e={};function t(r,n,s){if(!E("6.9"))throw console.error("[Telegram.WebApp] CloudStorage is not supported in version "+b),Error("WebAppMethodUnsupported");return ue(r,n,s),e}return e.setItem=function(r,n,s){return t("saveStorageValue",{key:r,value:n},s)},e.getItem=function(r,n){return e.getItems([r],n?function(s,v){s?n(s):n(null,v[r])}:null)},e.getItems=function(r,n){return t("getStorageValues",{keys:r},n)},e.removeItem=function(r,n){return e.removeItems([r],n)},e.removeItems=function(r,n){return t("deleteStorageValues",{keys:r},n)},e.getKeys=function(r){return t("getStorageKeys",{},r)},e}(),Z={};function Ue(e,t){if(t.slug&&Z[t.slug]){var r=Z[t.slug];delete Z[t.slug],r.callback&&r.callback(t.status),h("invoiceClosed",{url:r.url,status:t.status})}}var ee=!1;function qe(e,t){if(ee){var r=ee;ee=!1;var n=null;typeof t.button_id<"u"&&(n=t.button_id),r.callback&&r.callback(n),h("popupClosed",{button_id:n})}}var F=!1;function Ne(e,t){if(F){var r=F,n=null;typeof t.data<"u"&&(n=t.data),r.callback&&r.callback(n)&&(F=!1,o.postEvent("web_app_close_scan_qr_popup",!1)),h("qrTextReceived",{data:n})}}function Le(e,t){F=!1}function Fe(e,t){if(t.req_id&&R[t.req_id]){var r=R[t.req_id];delete R[t.req_id];var n=null;typeof t.data<"u"&&(n=t.data),r.callback&&r.callback(n),h("clipboardTextReceived",{data:n})}}var te=!1;function De(e,t){if(te){var r=te;te=!1,r.callback&&r.callback(t.status=="allowed"),h("writeAccessRequested",{status:t.status})}}function je(e,t){var r,n,s=0,v=function(){ue("getRequestedContact",{},function(P,m){m&&m.length?(clearTimeout(n),e(m)):(s+=50,r=setTimeout(v,s))})},c=function(){clearTimeout(r),e("")};n=setTimeout(c,t),v()}var re=!1;function Ve(e,t){if(re){var r=re;re=!1;var n=t.status=="sent",s={status:t.status};n?je(function(v){if(v&&v.length){s.response=v,s.responseUnsafe=_.urlParseQueryString(v);for(var c in s.responseUnsafe){var P=s.responseUnsafe[c];try{(P.substr(0,1)=="{"&&P.substr(-1)=="}"||P.substr(0,1)=="["&&P.substr(-1)=="]")&&(s.responseUnsafe[c]=JSON.parse(P))}catch{}}}r.callback&&r.callback(n,s),h("contactRequested",s)},3e3):(r.callback&&r.callback(n,s),h("contactRequested",s))}}function $e(e,t){if(t.req_id&&R[t.req_id]){var r=R[t.req_id];delete R[t.req_id];var n=null,s=null;typeof t.result<"u"&&(n=t.result),typeof t.error<"u"&&(s=t.error),r.callback&&r.callback(s,n)}}function ue(e,t,r){if(!E("6.9"))throw console.error("[Telegram.WebApp] Method invokeCustomMethod is not supported in version "+b),Error("WebAppMethodUnsupported");var n=de(16),s={req_id:n,method:e,params:t||{}};R[n]={callback:r},o.postEvent("web_app_invoke_custom_method",!1,s)}window.Telegram||(window.Telegram={}),Object.defineProperty(i,"initData",{get:function(){return I},enumerable:!0}),Object.defineProperty(i,"initDataUnsafe",{get:function(){return k},enumerable:!0}),Object.defineProperty(i,"version",{get:function(){return b},enumerable:!0}),Object.defineProperty(i,"platform",{get:function(){return y},enumerable:!0}),Object.defineProperty(i,"colorScheme",{get:function(){return w},enumerable:!0}),Object.defineProperty(i,"themeParams",{get:function(){return u},enumerable:!0}),Object.defineProperty(i,"isExpanded",{get:function(){return ge},enumerable:!0}),Object.defineProperty(i,"viewportHeight",{get:function(){return(J===!1?window.innerHeight:J)-M},enumerable:!0}),Object.defineProperty(i,"viewportStableHeight",{get:function(){return(K===!1?window.innerHeight:K)-M},enumerable:!0}),Object.defineProperty(i,"isClosingConfirmationEnabled",{set:function(e){Ce(e)},get:function(){return ae},enumerable:!0}),Object.defineProperty(i,"headerColor",{set:function(e){ke(e)},get:function(){return Te()},enumerable:!0}),Object.defineProperty(i,"backgroundColor",{set:function(e){Ie(e)},get:function(){return he()},enumerable:!0}),Object.defineProperty(i,"BackButton",{value:Me,enumerable:!0}),Object.defineProperty(i,"MainButton",{value:Be,enumerable:!0}),Object.defineProperty(i,"SettingsButton",{value:_e,enumerable:!0}),Object.defineProperty(i,"HapticFeedback",{value:Re,enumerable:!0}),Object.defineProperty(i,"CloudStorage",{value:He,enumerable:!0}),i.setHeaderColor=function(e){i.headerColor=e},i.setBackgroundColor=function(e){i.backgroundColor=e},i.enableClosingConfirmation=function(){i.isClosingConfirmationEnabled=!0},i.disableClosingConfirmation=function(){i.isClosingConfirmationEnabled=!1},i.isVersionAtLeast=function(e){return E(e)},i.onEvent=function(e,t){x(e,t)},i.offEvent=function(e,t){B(e,t)},i.sendData=function(e){if(!e||!e.length)throw console.error("[Telegram.WebApp] Data is required",e),Error("WebAppDataInvalid");if(Oe(e)>4096)throw console.error("[Telegram.WebApp] Data is too long",e),Error("WebAppDataInvalid");o.postEvent("web_app_data_send",!1,{data:e})},i.switchInlineQuery=function(e,t){if(!E("6.6"))throw console.error("[Telegram.WebApp] Method switchInlineQuery is not supported in version "+b),Error("WebAppMethodUnsupported");if(!f.tgWebAppBotInline)throw console.error("[Telegram.WebApp] Inline mode is disabled for this bot. Read more about inline mode: https://core.telegram.org/bots/inline"),Error("WebAppInlineModeDisabled");if(e=e||"",e.length>256)throw console.error("[Telegram.WebApp] Inline query is too long",e),Error("WebAppInlineQueryInvalid");var r=[];if(t){if(!Array.isArray(t))throw console.error("[Telegram.WebApp] Choose chat types should be an array",t),Error("WebAppInlineChooseChatTypesInvalid");for(var n={users:1,bots:1,groups:1,channels:1},s=0;s<t.length;s++){var v=t[s];if(!n[v])throw console.error("[Telegram.WebApp] Choose chat type is invalid",v),Error("WebAppInlineChooseChatTypeInvalid");n[v]!=2&&(n[v]=2,r.push(v))}}o.postEvent("web_app_switch_inline_query",!1,{query:e,chat_types:r})},i.openLink=function(n,t){var r=document.createElement("A");if(r.href=n,r.protocol!="http:"&&r.protocol!="https:")throw console.error("[Telegram.WebApp] Url protocol is not supported",n),Error("WebAppTgUrlInvalid");var n=r.href;t=t||{},E("6.1")?o.postEvent("web_app_open_link",!1,{url:n,try_instant_view:E("6.4")&&!!t.try_instant_view}):window.open(n,"_blank")},i.openTelegramLink=function(e){var t=document.createElement("A");if(t.href=e,t.protocol!="http:"&&t.protocol!="https:")throw console.error("[Telegram.WebApp] Url protocol is not supported",e),Error("WebAppTgUrlInvalid");if(t.hostname!="t.me")throw console.error("[Telegram.WebApp] Url host is not supported",e),Error("WebAppTgUrlInvalid");var r=t.pathname+t.search;T||E("6.1")?o.postEvent("web_app_open_tg_link",!1,{path_full:r}):location.href="https://t.me"+r},i.openInvoice=function(e,t){var r=document.createElement("A"),n,s;if(r.href=e,r.protocol!="http:"&&r.protocol!="https:"||r.hostname!="t.me"||!(n=r.pathname.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/))||!(s=n[2]))throw console.error("[Telegram.WebApp] Invoice url is invalid",e),Error("WebAppInvoiceUrlInvalid");if(!E("6.1"))throw console.error("[Telegram.WebApp] Method openInvoice is not supported in version "+b),Error("WebAppMethodUnsupported");if(Z[s])throw console.error("[Telegram.WebApp] Invoice is already opened"),Error("WebAppInvoiceOpened");Z[s]={url:e,callback:t},o.postEvent("web_app_open_invoice",!1,{slug:s})},i.showPopup=function(e,t){if(!E("6.2"))throw console.error("[Telegram.WebApp] Method showPopup is not supported in version "+b),Error("WebAppMethodUnsupported");if(ee)throw console.error("[Telegram.WebApp] Popup is already opened"),Error("WebAppPopupOpened");var r="",n="",s=[],v={};if(typeof e.title<"u"){if(r=d(e.title),r.length>64)throw console.error("[Telegram.WebApp] Popup title is too long",r),Error("WebAppPopupParamInvalid");r.length>0&&(v.title=r)}if(typeof e.message<"u"&&(n=d(e.message)),!n.length)throw console.error("[Telegram.WebApp] Popup message is required",e.message),Error("WebAppPopupParamInvalid");if(n.length>256)throw console.error("[Telegram.WebApp] Popup message is too long",n),Error("WebAppPopupParamInvalid");if(v.message=n,typeof e.buttons<"u"){if(!Array.isArray(e.buttons))throw console.error("[Telegram.WebApp] Popup buttons should be an array",e.buttons),Error("WebAppPopupParamInvalid");for(var c=0;c<e.buttons.length;c++){var P=e.buttons[c],m={},g="";if(typeof P.id<"u"&&(g=P.id.toString(),g.length>64))throw console.error("[Telegram.WebApp] Popup button id is too long",g),Error("WebAppPopupParamInvalid");m.id=g;var C=P.type;if(typeof C>"u"&&(C="default"),m.type=C,!(C=="ok"||C=="close"||C=="cancel"))if(C=="default"||C=="destructive"){var q="";if(typeof P.text<"u"&&(q=d(P.text)),!q.length)throw console.error("[Telegram.WebApp] Popup button text is required for type "+C,P.text),Error("WebAppPopupParamInvalid");if(q.length>64)throw console.error("[Telegram.WebApp] Popup button text is too long",q),Error("WebAppPopupParamInvalid");m.text=q}else throw console.error("[Telegram.WebApp] Popup button type is invalid",C),Error("WebAppPopupParamInvalid");s.push(m)}}else s.push({id:"",type:"close"});if(s.length<1)throw console.error("[Telegram.WebApp] Popup should have at least one button"),Error("WebAppPopupParamInvalid");if(s.length>3)throw console.error("[Telegram.WebApp] Popup should not have more than 3 buttons"),Error("WebAppPopupParamInvalid");v.buttons=s,ee={callback:t},o.postEvent("web_app_open_popup",!1,v)},i.showAlert=function(e,t){i.showPopup({message:e},t?function(){t()}:null)},i.showConfirm=function(e,t){i.showPopup({message:e,buttons:[{type:"ok",id:"ok"},{type:"cancel"}]},t?function(r){t(r=="ok")}:null)},i.showScanQrPopup=function(e,t){if(!E("6.4"))throw console.error("[Telegram.WebApp] Method showScanQrPopup is not supported in version "+b),Error("WebAppMethodUnsupported");if(F)throw console.error("[Telegram.WebApp] Popup is already opened"),Error("WebAppScanQrPopupOpened");var r="",n={};if(typeof e.text<"u"){if(r=d(e.text),r.length>64)throw console.error("[Telegram.WebApp] Scan QR popup text is too long",r),Error("WebAppScanQrPopupParamInvalid");r.length>0&&(n.text=r)}F={callback:t},o.postEvent("web_app_open_scan_qr_popup",!1,n)},i.closeScanQrPopup=function(){if(!E("6.4"))throw console.error("[Telegram.WebApp] Method closeScanQrPopup is not supported in version "+b),Error("WebAppMethodUnsupported");F=!1,o.postEvent("web_app_close_scan_qr_popup",!1)},i.readTextFromClipboard=function(e){if(!E("6.4"))throw console.error("[Telegram.WebApp] Method readTextFromClipboard is not supported in version "+b),Error("WebAppMethodUnsupported");var t=de(16),r={req_id:t};R[t]={callback:e},o.postEvent("web_app_read_text_from_clipboard",!1,r)},i.requestWriteAccess=function(e){if(!E("6.9"))throw console.error("[Telegram.WebApp] Method requestWriteAccess is not supported in version "+b),Error("WebAppMethodUnsupported");if(te)throw console.error("[Telegram.WebApp] Write access is already requested"),Error("WebAppWriteAccessRequested");te={callback:e},o.postEvent("web_app_request_write_access")},i.requestContact=function(e){if(!E("6.9"))throw console.error("[Telegram.WebApp] Method requestContact is not supported in version "+b),Error("WebAppMethodUnsupported");if(re)throw console.error("[Telegram.WebApp] Contact is already requested"),Error("WebAppContactRequested");re={callback:e},o.postEvent("web_app_request_phone")},i.invokeCustomMethod=function(e,t,r){ue(e,t,r)},i.ready=function(){o.postEvent("web_app_ready")},i.expand=function(){o.postEvent("web_app_expand")},i.close=function(){o.postEvent("web_app_close")},window.Telegram.WebApp=i,ve(),ce(),se(),f.tgWebAppShowSettings&&_e.show(),window.addEventListener("resize",a),T&&document.addEventListener("click",p),o.onEvent("theme_changed",N),o.onEvent("viewport_changed",D),o.onEvent("invoice_closed",Ue),o.onEvent("popup_closed",qe),o.onEvent("qr_text_received",Ne),o.onEvent("scan_qr_popup_closed",Le),o.onEvent("clipboard_text_received",Fe),o.onEvent("write_access_requested",De),o.onEvent("phone_requested",Ve),o.onEvent("custom_method_invoked",$e),o.postEvent("web_app_request_theme"),o.postEvent("web_app_request_viewport")})();Object.defineProperty(oe,"__esModule",{value:!0});oe.WebApp=void 0;var ut=window;oe.WebApp=ut.Telegram.WebApp;Object.defineProperty(Pe,"__esModule",{value:!0});var pt=oe,Ae=Pe.default=pt.WebApp;const ft="https://dashboard.edgematrix.pro/",dt="#auth",gt=500,bt="authorize-ready",vt="authorize-setup",ht="authorize-success",mt="authorize-failure",_t="user-interrupt";class wt{constructor(){fe(this,"_emcWindow");fe(this,"_eventHandler")}_removeEventListener(){this._eventHandler&&window.removeEventListener("message",this._eventHandler),this._eventHandler=void 0}_getEventHandler(o,f){return async T=>{var I;if(T.origin!==o.origin){console.warn(`expected origin '${o.origin}', got '${T.origin}'`);return}const i=T.data;switch(i.type){case bt:{const k={type:vt};(I=this._emcWindow)==null||I.postMessage(k,o.origin);break}case ht:try{await this._handleSuccess(i,f.onSuccess)}catch(k){this._handleFailure(k.message,f.onError)}break;case mt:this._handleFailure(i.data,f.onError);break;default:console.info(`unknow message type '${i.type}'`);break}}}async _handleSuccess(o,f){this._emcWindow&&this._emcWindow.close(),this._removeEventListener(),delete this._emcWindow,typeof f=="function"&&f(o)}_handleFailure(o,f){this._emcWindow&&!this._emcWindow.closed&&this._emcWindow.close(),typeof f=="function"&&f(o),this._removeEventListener(),delete this._emcWindow}signIn(o){const f=new URL(o.provider||ft);f.hash=o.endpoint||dt,this._emcWindow&&this._emcWindow.close(),this._removeEventListener(),this._eventHandler=this._getEventHandler(f,o),window.addEventListener("message",this._eventHandler),this._emcWindow=window.open(f.toString(),"emcWindow",o.windowOpenerFeatures);const T=()=>{this._emcWindow&&(this._emcWindow.closed?this._handleFailure(_t,o.onError):setTimeout(T,gt))};T()}}const yt=new wt,We="https://emchub.ai/";function Et(){function _(u){const w=new URLSearchParams;return Object.entries(u).forEach(([b,y])=>{w.append(b,y)}),w.toString()}function o(u){return typeof u!="string"?"":typeof decodeURIComponent!="function"||typeof encodeURIComponent!="function"||decodeURIComponent(u)!==u?u:encodeURIComponent(u)}function f(u){return new Promise(w=>{const b=u.provider||We,y=u.endpoint||"#/auth",A=u.windowOpenerFeatures||"popup,width=480,height=720",W=u.client,S=o(u.redirect||"0"),O=u.scope||"read",N=_({launch:"popup",client:W,redirect:S,scope:O}),U=y.indexOf("?")>-1?"&":"?",D=`${y}${U}${N}`,a=d=>w(["",d.data]),p=d=>w([d,null]);if(!W)throw new Error("Invalid 'client'");yt.signIn({provider:b,endpoint:D,windowOpenerFeatures:A,onSuccess:a,onError:p})})}async function T(u){if(typeof window>"u")return["Not found window",null];if(!window.location)return["Not found window.location",null];try{const w=u.provider||We,b=u.endpoint||"#/auth",y=u.client,A=o(u.redirect),W=u.scope||"read",S=u.state||"",O=new URL(w),N=_({launch:"redirect",client:y,redirect:A,scope:W,state:S}),U=b.indexOf("?")>-1?"&":"?";if(O.hash=`${b}${U}${N}`,!y)throw new Error("Invalid 'client'");if(!A)throw new Error("Invalid 'redirect'");return["",{url:O.toString()}]}catch(w){return console.error("Error sign in redirect",w),[w.message,null]}}function i(u,w){let b=new RegExp(`[?&]${u}=([^&?#/]+)`,"g"),y=null,A=[];for(;(y=b.exec(w))!==null;)A.push(y[1]);return A}function I(u,w){const b=i(u,w);return b[b.length-1]}async function k(){const u=I("code",location.href);return u?["",{code:u}]:["Not found 'code' value",null]}return{signInWithPopup:f,signInWithRedirect:T,getRedirectResult:k}}const{signInWithPopup:At,signInWithRedirect:Wt,getRedirectResult:Pt}=Et(),Ct={class:"page"},Tt=et({__name:"index",setup(_){async function o(){const y={client:"1234"},[A,W]=await At(y);if(A)return window.alert(A);const S=W.code;window.alert(`code: ${S}`)}const f=tt(Ae.platform);async function T(){const y={client:"1234",redirect:location.href};sessionStorage.setItem("redrect","1");const[A,W]=await Wt(y);if(A)return window.alert(A);location.href=W.url}rt(async()=>{if(sessionStorage.getItem("redrect")){sessionStorage.removeItem("redrect");const[A,W]=await Pt();if(A)return window.alert(A);const S=W.code;window.alert(`code: ${S}`)}});const i=st(),I=ct();function k(){i.push({name:"test"})}function u(){Ae.showAlert("Hey there!")}function w(){sessionStorage.setItem("kk","hello?")}function b(){const y=sessionStorage.getItem("kk");I.info(y||"none")}return(y,A)=>(at(),nt("div",Ct,[ot("div",null,"platform: "+it(f.value),1),V(z(G),{type:"primary",size:"large",strong:"",onClick:k},{default:$(()=>[Q("Go Next Page")]),_:1}),V(z(G),{type:"primary",size:"large",strong:"",onClick:o},{default:$(()=>[Q("Go EMC Hub Popup")]),_:1}),V(z(G),{type:"primary",size:"large",strong:"",onClick:T},{default:$(()=>[Q("Go EMC Hub Redirect")]),_:1}),V(z(G),{type:"primary",size:"large",strong:"",onClick:u},{default:$(()=>[Q("MiniAppAlert")]),_:1}),V(z(G),{type:"primary",size:"large",strong:"",onClick:w},{default:$(()=>[Q("Set Session Storage")]),_:1}),V(z(G),{type:"primary",size:"large",strong:"",onClick:b},{default:$(()=>[Q("Get Session Storage")]),_:1})]))}}),xt=lt(Tt,[["__scopeId","data-v-7fad7104"]]);export{xt as default};