(self.webpackChunk=self.webpackChunk||[]).push([[8315,7519],{57705:function(e,n,t){"use strict";t.d(n,{F:function(){return i}});const i=async()=>{const e=document.querySelector(".ad-zone");return!window.adsEnabled||!document.getElementById("NWlMCIrkYBFj")||e&&0===e.offsetHeight}},78846:function(e,n,t){("undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self?self:{}).SENTRY_RELEASE={id:"8bde4a7ad822f352f79a7f4ae6e313b20fcbd269"}},10574:function(e,n,t){"use strict";t.d(n,{Kz:function(){return a}});var i,o=t(8117),d=t(47664),r=t(22372);const s={queue:[],timeout:null,visibilityListener:null,userId:null,docId:null},u=()=>{const e=window.eventsToSend||[],n=[...s.queue,...e];0!==n.length&&(s.queue=[],window.eventsToSend=[],async function(e){var n,t,i,r,u,a,l;const c=await d.Z,w=document.querySelector("meta[name=x-web-analytics]");let f=s.docId||(null==w||null===(n=w.dataset)||void 0===n?void 0:n.docId)||(null===(t=window.slideshare_object)||void 0===t||null===(i=t.slideshow)||void 0===i?void 0:i.id)||null;f&&(f=parseInt(f,10));let h=s.userId||(null==w||null===(r=w.dataset)||void 0===r?void 0:r.userId)||(null===(u=window.slideshare_object)||void 0===u||null===(a=u.user)||void 0===a?void 0:a.id)||null;h&&(h=parseInt(h,10));const v={events:e,location:location.href,product:"slideshare",page_view_id:c,referrer:document.referrer||null,browser_id:(0,o.ej)("browser_id"),doc_id:f,user_id:h};let b;b=null!==(l=window.slideshare_object)&&void 0!==l&&l.web_analytics_url?`${window.slideshare_object.web_analytics_url}/api/v1/events`:"https://wa.slideshare.net/api/v1/events";let p=!1;if(navigator.sendBeacon)try{p=navigator.sendBeacon(b,JSON.stringify(v))}catch{console.warn(`Failed to send tracking event to ${b}`)}p||(await fetch(b,{method:"POST",body:JSON.stringify(v),credentials:"include"})).ok||console.warn("cannot send events")}(n))},a=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("undefined"==typeof window)return;"string"!=typeof e&&null!==e&&(e=JSON.stringify(e)),"string"!=typeof n&&null!==n&&(n=JSON.stringify(n));const i=(new Date).toISOString();s.queue.push({name:e,value:n,timestamp:i}),(s.queue.length>=10||t)&&u(),s.timeout||(s.timeout=setTimeout((()=>{s.timeout=null,u()}),1e3)),s.visibilityListener||(s.visibilityListener=window.addEventListener("visibilitychange",(()=>{"hidden"===document.visibilityState&&u()})))};n.ZP=a,a("page_loaded",{platform:(0,r.tq)()?"mobile_web":"desktop_web",time:null===(i=performance)||void 0===i?void 0:i.now()})},8117:function(e,n,t){"use strict";t.d(n,{T2:function(){return d},ej:function(){return i},oe:function(){return o}});const i=e=>{if(document.cookie){const n=document.cookie.split("; ").find((n=>n.startsWith(`${e}=`)));return n?n.split("=")[1]:""}return""},o=()=>window.slideshare_object&&window.slideshare_object.page_key||null,d=()=>window.slideshare_object&&window.slideshare_object.slideshow&&window.slideshare_object.slideshow.id||"-1"},47664:function(e,n){"use strict";const t=new Promise((e=>{try{e(([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))))}catch(n){console.log(`failed to generate uuid: ${n}`),fetch("/api/internal/uuid").then((e=>e.json())).then((n=>e(n[0]))).catch((()=>{e(null)}))}}));n.Z=t},95593:function(e,n,t){"use strict";var i=t(8117),o=t(57705),d=t(10574);window.addEventListener("load",(()=>{(async()=>{const e=await(0,o.F)();console.log("adblockEnabled",e),(0,d.ZP)("page_view",{path:window.location.pathname,page_key:(0,i.oe)(),referrer:document.referrer,adblock_enabled:e})})()}))},22372:function(e,n,t){"use strict";t.d(n,{b1:function(){return d},nI:function(){return o},tq:function(){return i},uj:function(){return r}});const i=()=>"undefined"!=typeof document&&document.body.offsetWidth<=928,o=()=>document.body.offsetWidth>928,d=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,r=()=>{let e;return e=window.orientation?0===window.orientation?"portrait":"landscape":(window.innerWidth||screen.width)>(window.innerHeight||screen.height)?"landscape":"portrait",e}}},function(e){var n=function(n){return e(e.s=n)};n(78846),n(95593)}]);
//# sourceMappingURL=page-view.01975cb891a54fec633a.js.map