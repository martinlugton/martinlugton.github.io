(self.webpackChunk=self.webpackChunk||[]).push([[2468],{28710:function(){!function(e){let n="slideshare_object",t=n+"._modules.",r=n+"._i18n.",i=!1,o=/[^a-zA-Z\d\-_]/g,u=Object.prototype.toString,c={},s={en:"en_US",fr:"fr_FR",es:"es_ES",pt:"pt_BR",de:"de_DE"};function l(e,n){return u.call(e)===n}function f(n,t){let r,i=n.split("."),o=i.length,u=e,c=0;for(;c<o;c++){if(r=i[c],!u[r]){if(!t)return null;u[r]=c+1===o?t:{}}u=u[r]}return u}c.i18n_locale=function(){if(!i){let e=document.documentElement.lang||"en";i=s[e]||s.en}return i},c.isString=function(e){return l(e,"[object String]")},c.isNumber=function(e){return l(e,"[object Number]")},c.isArray=function(e){return l(e,"[object Array]")},c.isPlainObject=function(e){return l(e,"[object Object]")},c.addClass=function(e,n){return(e=e&&1===e.nodeType?e:document.querySelector(e))?(e.className?new RegExp("\\b"+n+"\\b").test(e.className)||(e.className+=" "+n):e.className=n,e):null},c.sanitizeForCSS=function(e){return e.replace(o,"-")},c.isUserAuthenticated=function(){let t=e[n].user;return"non-member"!==t.member_type&&!1!==t.loggedin&&"guest"!==t.login},c.isResponsive=function(){return window.innerWidth<928},c.i18n=function(n,t){if(f(r)||function(){let n=e.document.querySelectorAll('meta[name="ss-i18n-translations"]');c.i18n_locale(),Array.prototype.slice.call(n).forEach((function(e){let n=JSON.parse(e.content);Object.keys(n).forEach((function(e){f(r+e,n[e])}))}))}(),n){let e=f(r+n);if(e&&t&&window.xmessage){let n=window.xmessage.fromString(e,i);Array.isArray(t)||(t=[t]),e=n(t)}return e}return f(r.slice(0,-1))},c.exports=function(e,n){f(t+e,n)},c.imports=function(e){return f(t+e)},f(n+".utils",c)}(window)},78846:function(e,n,t){("undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self?self:{}).SENTRY_RELEASE={id:"8bde4a7ad822f352f79a7f4ae6e313b20fcbd269"}}},function(e){var n=function(n){return e(e.s=n)};n(78846),n(28710)}]);
//# sourceMappingURL=core-utils.40891c5c9f9b42b34d1c.js.map