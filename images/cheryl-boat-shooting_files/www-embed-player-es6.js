(function(){'use strict';var r,aa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;
a[b]=c.value;return a},ca=globalThis;
function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
var ea=Object.setPrototypeOf;function fa(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;ea(a,b);a.Ea=b.prototype}
da("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
da("SuppressedError",function(a){function b(c,d,e){if(!(this instanceof b))return new b(c,d,e);e=Error(e);"stack"in e&&(this.stack=e.stack);this.message=e.message;this.error=c;this.suppressed=d}
if(a)return a;fa(b,Error);b.prototype.name="SuppressedError";return b});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ha=ha||{},t=this||self;function v(a,b,c){a=a.split(".");c=c||t;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ia(a,b){var c=w("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function w(a,b){a=a.split(".");b=b||t;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function ja(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function ka(a){var b=ja(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function la(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function ma(a){return Object.prototype.hasOwnProperty.call(a,na)&&a[na]||(a[na]=++oa)}
var na="closure_uid_"+(Math.random()*1E9>>>0),oa=0;function pa(a,b,c){return a.call.apply(a.bind,arguments)}
function qa(a,b,c){qa=pa;return qa.apply(null,arguments)}
function ra(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function sa(){return Date.now()}
function ta(a){return a}
function ua(a,b){function c(){}
c.prototype=b.prototype;a.Ea=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function va(a,...b){b=b.filter(Boolean).join("&");if(!b)return a;const c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")<0?"?":"&")+b}
function wa(a,b){return b?"&"+a+"="+encodeURIComponent(b):""}
function xa(a){a=a.o;if(!a)return"";let b=wa("uap",a.platform)+wa("uapv",a.platformVersion)+wa("uafv",a.uaFullVersion)+wa("uaa",a.architecture)+wa("uam",a.model)+wa("uab",a.bitness);a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(c=>encodeURIComponent(c.brand)+";"+encodeURIComponent(c.version)).join("|")));
a.wow64!=null&&(b+="&uaw="+Number(a.wow64));return b.slice(1)}
var ya=class{constructor({url:a,Li:b}){this.i=a;this.o=b;this.j=(new Date).getTime()-17040672E5;this.h={};const c=/[?&]([^&=]+)=([^&]*)/g;for(;b=c.exec(a);)this.h[b[1]]=b[2]}};function za(a,b){if(b!==null&&b!==void 0){if(typeof b!=="object"&&typeof b!=="function")throw new TypeError("Object expected.");if(c===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");var c=b[Symbol.dispose]}if(typeof c!=="function")throw new TypeError("Object not disposable.");a.stack.push({value:b,dispose:c,async:!1})}return b}
function Aa(a){function b(f){a.error=a.jb?new SuppressedError(f,a.error,"An error was suppressed during disposal."):f;a.jb=!0}
function c(){for(;d=a.stack.pop();)try{if(!d.async&&e===1)return e=0,a.stack.push(d),Promise.resolve().then(c);if(d.dispose){var f=d.dispose.call(d.value);if(d.async)return e|=2,Promise.resolve(f).then(c,function(g){b(g);return c()})}else e|=1}catch(g){b(g)}if(e===1)return a.jb?Promise.reject(a.error):Promise.resolve();
if(a.jb)throw a.error;}
var d,e=0;c()}
;function Ba(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ba);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
ua(Ba,Error);Ba.prototype.name="CustomError";/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
let Ca=globalThis.trustedTypes,Da;function Ea(){let a=null;if(!Ca)return a;try{const b=c=>c;
a=Ca.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(b){}return a}
function Fa(){Da===void 0&&(Da=Ea());return Da}
;var Ga=class{constructor(a){this.h=a}toString(){return this.h+""}};function Ha(a){const b=Fa();a=b?b.createScriptURL(a):a;return new Ga(a)}
function Ia(a){if(a instanceof Ga)return a.h;throw Error("");}
;function Ja(a){return a.toString().indexOf("`")===-1}
Ja(a=>a``)||Ja(a=>a`\0`)||Ja(a=>a`\n`)||Ja(a=>a`\u0000`);var Ka=class{constructor(a){this.h=a}toString(){return this.h}},La=new Ka("about:invalid#zClosurez");class Ma{constructor(a){this.Ze=a}}function Na(a){return new Ma(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}
const Oa=[Na("data"),Na("http"),Na("https"),Na("mailto"),Na("ftp"),new Ma(a=>/^[^:]*([/?#]|$)/.test(a))];
function Pa(a,b=Oa){if(a instanceof Ka)return a;for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof Ma&&d.Ze(a))return new Ka(a)}}
var Qa=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function Ra(a){if(a instanceof Ka)if(a instanceof Ka)a=a.h;else throw Error("");else a=Qa.test(a)?a:void 0;return a}
;function Sa(a,b){b=Ra(b);b!==void 0&&(a.href=b)}
;function Ta(a,b=`unexpected value ${a}!`){throw Error(b);}
;var Ua=class{constructor(a){this.h=a}toString(){return this.h+""}};function Va(a=document){a=a.querySelector?.("script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;var Wa=class{constructor(a){this.h=a}toString(){return this.h+""}};function Xa(a){const b=Fa();a=b?b.createScript(a):a;return new Wa(a)}
function Ya(a){if(a instanceof Wa)return a.h;throw Error("");}
;function Za(a){const b=Va(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function $a(a,b){a.src=Ia(b);Za(a)}
;var ab=class{constructor(a){this.h=a}toString(){return this.h}};function bb(a){var b="true".toString(),c=[cb`data-`];if(c.length===0)throw Error("");if(c.map(d=>{if(d instanceof ab)d=d.h;else throw Error("");return d}).every(d=>"data-loaded".indexOf(d)!==0))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;const db="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function eb(a,b){if(b instanceof Ga)a.href=Ia(b).toString(),a.rel="stylesheet";else{if(db.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Ra(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function fb(a,b){return Array.prototype.indexOf.call(a,b,void 0)}
function gb(a,b){Array.prototype.forEach.call(a,b,void 0)}
function hb(a,b){return Array.prototype.filter.call(a,b,void 0)}
function ib(a,b){return Array.prototype.map.call(a,b,void 0)}
function jb(a,b){return Array.prototype.reduce.call(a,b,{duration:0})}
function kb(a,b){a:{const c=a.length,d=typeof a==="string"?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function lb(a,b){b=fb(a,b);let c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a){const b=a.length;if(b>0){const c=Array(b);for(let d=0;d<b;d++)c[d]=a[d];return c}return[]}
function nb(a,b){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(ka(d)){const e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function ob(a,b){return a>b?1:a<b?-1:0}
;function pb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function qb(a){var b=w("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};let c,d;var e=!1;try{c=a.lineNumber||a.line||"Not available"}catch(f){c="Not available",e=!0}try{d=a.fileName||a.filename||a.sourceURL||t.$googDebugFname||b}catch(f){d="Not available",e=!0}b=rb(a);if(!(!e&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){e=a.message;if(e==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)e=a.constructor.name;else if(e=a.constructor,sb[e])e=sb[e];else{e=String(e);if(!sb[e]){const f=/function\s+([^\(]+)/m.exec(e);sb[e]=f?f[1]:"[Anonymous]"}e=sb[e]}e='Unknown Error of type "'+e+'"'}else e="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(e+=": "+a.toString())}return{message:e,name:a.name||"UnknownError",lineNumber:c,fileName:d,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function rb(a,b){b||(b={});b[tb(a)]=!0;let c=a.stack||"";var d=a.cause;d&&!b[tb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=rb(d,b));a=a.errors;if(Array.isArray(a)){d=1;let e;for(e=0;e<a.length&&!(d>4);e++)b[tb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=rb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function tb(a){let b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var sb={};function ub(a){return decodeURIComponent(a.replace(/\+/g," "))}
function vb(a){let b=0;for(let c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;const wb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xb(a){return a?decodeURI(a):a}
function yb(a){return xb(a.match(wb)[3]||null)}
function zb(a){return xb(a.match(wb)[5]||null)}
function Ab(a){var b=a.match(wb);a=b[5];var c=b[6];b=b[7];let d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Bb(a){const b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function Cb(a,b){if(a){a=a.split("&");for(let c=0;c<a.length;c++){const d=a[c].indexOf("=");let e,f=null;d>=0?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?ub(f):"")}}}
function Db(a,b,c){if(Array.isArray(b))for(let d=0;d<b.length;d++)Db(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Eb(a){const b=[];for(const c in a)Db(c,a[c],b);return b.join("&")}
function Fb(a,b){b=Eb(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);let d=a.indexOf("?"),e;d<0||d>c?(d=c,e=""):e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Gb(a,b,c,d){const e=c.length;for(;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
const Hb=/#|$/,Ib=/[?&]($|#)/;function Jb(a,b){const c=a.search(Hb);let d=0,e;const f=[];for(;(e=Gb(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Ib,"$1")}
;function Kb(){try{return!!window?.top?.location.href&&!1}catch(a){return!0}}
;var x=class extends Error{constructor(a,b,c=Error()){super();this.code=a;b+=":";c instanceof Error?(this.message=b+c.message,this.stack=c.stack||""):(this.message=b+String(c),this.stack="");Object.setPrototypeOf(this,new.target.prototype)}};function Lb(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function Mb(a){for(let b=0,c=arguments.length;b<c;++b){const d=arguments[b];ka(d)?Mb.apply(null,d):Lb(d)}}
;function y(){this.G=this.G;this.P=this.P}
y.prototype.G=!1;y.prototype.dispose=function(){this.G||(this.G=!0,this.aa())};
y.prototype[Symbol.dispose]=function(){this.dispose()};
function Nb(a,b){a.addOnDisposeCallback(ra(Lb,b))}
y.prototype.addOnDisposeCallback=function(a,b){this.G?b!==void 0?a.call(b):a():(this.P||(this.P=[]),b&&(a=a.bind(b)),this.P.push(a))};
y.prototype.aa=function(){if(this.P)for(;this.P.length;)this.P.shift()()};function Ob(a="bevasrsg"){return new Promise(b=>{const c=window===window.top?window:Kb()?window:window.top;let d=c[a];d?.bevasrs?b(new Pb(d.bevasrs)):(d||(d={nqfbel:[]},c[a]=d),d.nqfbel.push(e=>{b(new Pb(e))}))})}
function Qb(a){a.h!==void 0&&(a.i.forEach(b=>{a.h?.removeEventListener(b,a.j)}),a.h=void 0)}
class Pb extends y{constructor(a){super();this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Jb=this.vm.p;this.j=this.Wb.bind(this);this.addOnDisposeCallback(()=>void Qb(this))}snapshot(a){return this.vm.s({...(a.Ka&&{c:a.Ka}),
...(a.Hc&&{s:a.Hc}),...(a.ed!==void 0&&{p:a.ed})})}Wb(a){this.vm.e(a)}jc(a,b){return this.vm.c(a,b,!1)}bc(){return this.vm.l()}};function Rb(a){const b={Ka:a.c,Oc:a.e,jf:a.mc??!1,kf:a.me??!1};a.co&&(b.fc={nd:a.co.c,je:a.co.a,Df:a.co.s});return b}
function Sb(a){return async()=>{const b=await a();return{f:()=>b.Ib.promise,
c:c=>{if(c>150)var d=!1;else try{b.cache=new Tb(c,b.logger),d=!0}catch(e){Ub(b,new x(22,"GBJ:init",e)),d=!1}return d},
m:c=>b.eb(Rb(c)),
mws:c=>b.xc(Rb(c))}}}
function Vb(a,b,c="bevasrsg"){b={s:f=>a.snapshot({...(f.c&&{Ka:f.c}),...(f.s&&{Hc:f.s}),Ji:f.p??!0}),
e:f=>void a.Wb?.(f),
c:(f,g)=>a.jc(f,g),
p:a.Jb,l:()=>a.bc(),
wpc:b?Sb(b):void 0};const d=window===window.top?window:Kb()?window:window.top;let e=d[c];if(e){e.bevasrs=b;if(e.nqfbel!==void 0)for(const f of e.nqfbel)f(b);e.nqfbel=void 0}else e={bevasrs:b,nqfbel:void 0},d[c]=e}
;function Wb(a){const b=[];Xb(a,Yb,6).forEach(c=>{Zb(c,2)<=53&&b.push(Zb(c,1))});
return b}
function $b(a){const b=[];Xb(a,Yb,6).forEach(c=>{Zb(c,2)>53&&b.push(Zb(c,1))});
return b}
;function ac(a){a.then(()=>{},()=>{})}
var bc=class extends y{constructor(){super(...arguments);this.Y=1}share(){if(this.G)throw Error("E:AD");this.Y++;return this}dispose(){--this.Y||super.dispose()}};function cc(a){return{fieldType:2,fieldName:a}}
function A(a){return{fieldType:3,fieldName:a}}
;var ec=class{constructor(a){this.h=a;dc(a,"/client_streamz/bg/frs",A("mk"))}record(a,b){this.h.record("/client_streamz/bg/frs",a,b)}},fc=class{constructor(a){this.h=a;dc(a,"/client_streamz/bg/wrl",A("mn"),cc("ac"),cc("sc"),A("rk"),A("mk"))}record(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)}},jc=class{constructor(a){this.i=a;hc(a,"/client_streamz/bg/ec",A("en"),A("mk"))}h(a,b){ic(this.i,"/client_streamz/bg/ec",[a,b])}},kc=class{constructor(a){this.h=a;dc(a,"/client_streamz/bg/el",
A("en"),A("mk"))}record(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)}},lc=class{constructor(a){this.i=a;hc(a,"/client_streamz/bg/cec",cc("ec"),A("mk"))}h(a,b){ic(this.i,"/client_streamz/bg/cec",[a,b])}},mc=class{constructor(a){this.i=a;hc(a,"/client_streamz/bg/po/csc",cc("cs"),A("mk"))}h(a,b){ic(this.i,"/client_streamz/bg/po/csc",[a,b])}},nc=class{constructor(a){this.i=a;hc(a,"/client_streamz/bg/po/ctav",A("av"),A("mk"))}h(a,b){ic(this.i,"/client_streamz/bg/po/ctav",[a,b])}},oc=class{constructor(a){this.i=
a;hc(a,"/client_streamz/bg/po/cwsc",A("su"),A("mk"))}h(a,b){ic(this.i,"/client_streamz/bg/po/cwsc",[a,b])}},pc=class{constructor(a){this.h=a;dc(a,"/client_streamz/bg/od/p",A("mk"))}record(a,b){this.h.record("/client_streamz/bg/od/p",a,b)}},qc=class{constructor(a){this.h=a;dc(a,"/client_streamz/bg/od/n",A("et"),A("mk"))}record(a,b,c){this.h.record("/client_streamz/bg/od/n",a,b,c)}};let rc;function sc(a){return(rc||(rc=new TextEncoder)).encode(a)}
;function tc(a){t.setTimeout(()=>{throw a;},0)}
;function uc(a){const b=[];let c=0;for(let d=0;d<a.length;d++){let e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;var vc=ia(610401301,!1),wc=ia(748402147,!0),xc=ia(824656860,!0);function yc(){var a=t.navigator;return a&&(a=a.userAgent)?a:""}
var zc;const Ac=t.navigator;zc=Ac?Ac.userAgentData||null:null;function Bc(a){if(!vc||!zc)return!1;for(let b=0;b<zc.brands.length;b++){const {brand:c}=zc.brands[b];if(c&&c.indexOf(a)!=-1)return!0}return!1}
function C(a){return yc().indexOf(a)!=-1}
;function Cc(){return vc?!!zc&&zc.brands.length>0:!1}
function Dc(){return Cc()?!1:C("Opera")}
function Ec(){return C("Firefox")||C("FxiOS")}
function Fc(){return Cc()?Bc("Chromium"):(C("Chrome")||C("CriOS"))&&!(Cc()?0:C("Edge"))||C("Silk")}
;function Gc(){return vc?!!zc&&!!zc.platform:!1}
function Hc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
;function Ic(a){Ic[" "](a);return a}
Ic[" "]=function(){};var Jc=Dc(),Kc=Cc()?!1:C("Trident")||C("MSIE"),Lc=C("Edge"),Mc=C("Gecko")&&!(yc().toLowerCase().indexOf("webkit")!=-1&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Nc=yc().toLowerCase().indexOf("webkit")!=-1&&!C("Edge");Nc&&C("Mobile");Gc()||C("Macintosh");Gc()||C("Windows");(Gc()?zc.platform==="Linux":C("Linux"))||Gc()||C("CrOS");var Oc=Gc()?zc.platform==="Android":C("Android");Hc();C("iPad");C("iPod");Hc()||C("iPad")||C("iPod");yc().toLowerCase().indexOf("kaios");Ec();const Pc=Hc()||C("iPod"),Qc=C("iPad");!C("Android")||Fc()||Ec()||Dc()||C("Silk");Fc();const Rc=C("Safari")&&!(Fc()||(Cc()?0:C("Coast"))||Dc()||(Cc()?0:C("Edge"))||(Cc()?Bc("Microsoft Edge"):C("Edg/"))||(Cc()?Bc("Opera"):C("OPR"))||Ec()||C("Silk")||C("Android"))&&!(Hc()||C("iPad")||C("iPod"));const Sc={};let Tc=null;function Uc(a,b){ka(a);b===void 0&&(b=0);Vc();b=Sc[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Wc(a){const b=a.length;let c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);const d=new Uint8Array(c);let e=0;Xc(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Xc(a,b){function c(e){for(;d<a.length;){const f=a.charAt(d++),g=Tc[f];if(g!=null)return g;if(!/^[\s\xa0]*$/.test(f))throw Error("Unknown base64 encoding at char: "+f);}return e}
Vc();let d=0;for(;;){const e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Vc(){if(!Tc){Tc={};var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"];for(let c=0;c<5;c++){const d=a.concat(b[c].split(""));Sc[c]=d;for(let e=0;e<d.length;e++){const f=d[e];Tc[f]===void 0&&(Tc[f]=e)}}}}
;const Yc=/[-_.]/g,Zc={"-":"+",_:"/",".":"="};function $c(a){return Zc[a]||""}
var ad={};function bd(){return cd||(cd=new dd(null,ad))}
function ed(a){fd(ad);var b=a.h;if(!(b==null||b!=null&&b instanceof Uint8Array))if(typeof b==="string"){b=Yc.test(b)?b.replace(Yc,$c):b;b=atob(b);const c=new Uint8Array(b.length);for(let d=0;d<b.length;d++)c[d]=b.charCodeAt(d);b=c}else ja(b),b=null;return b==null?b:a.h=b}
function gd(a){return new Uint8Array(ed(a)||0)}
var dd=class{sizeBytes(){const a=ed(this);return a?a.length:0}constructor(a,b){fd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}};let cd;function fd(a){if(a!==ad)throw Error("illegal external caller");}
;let hd=void 0;function id(a){a=Error(a);pb(a,"warning");return a}
function jd(a,b){if(a!=null){var c=hd??(hd={});var d=c[a]||0;d>=b||(c[a]=d+1,a=Error(),pb(a,"incident"),tc(a))}}
;function kd(a,b=!1){return b&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol()}
var E=kd("jas",!0),ld=kd(),md=kd(),nd=kd(),od=kd(),pd=kd(),qd=kd(),rd=kd("m_m",!0),sd=kd(),td=kd();[...Object.values({Mh:1,Lh:2,Kh:4,Qh:8,Sh:16,Oh:32,Yf:64,Ih:128,eg:256,Rh:512,fg:1024,Jh:2048,Ph:4096,Nh:8192})];var ud;const vd=[];vd[E]=7;ud=Object.freeze(vd);var wd={};function xd(a,b){return b===void 0?a.h!==yd&&!!(2&(a.W[E]|0)):!!(2&b)&&a.h!==yd}
const yd={};function zd(a,b){if(a!=null)if(typeof a==="string")a=a?new dd(a,ad):bd();else if(a.constructor!==dd)if(a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new dd(new Uint8Array(a),ad):bd();else{if(!b)throw Error();a=void 0}return a}
var Ad=Object.freeze({});function Bd(a,b,c){const d=b&128?0:-1,e=a.length;var f;if(f=!!e)f=a[e-1],f=f!=null&&typeof f==="object"&&f.constructor===Object;const g=e+(f?-1:0);for(b=b&128?1:0;b<g;b++)c(b-d,a[b]);if(f){a=a[e-1];for(const h in a)!isNaN(h)&&c(+h,a[h])}}
var Cd={};function Dd(a){a.ji=!0;return a}
;var Ed=Dd(a=>typeof a==="number"),Fd=Dd(a=>typeof a==="string");
function Gd(){var a=Hd;return Dd(b=>{for(const c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var Id=Dd(a=>a!=null&&typeof a==="object"&&typeof a.then==="function"),Jd=Dd(a=>!!a&&(typeof a==="object"||typeof a==="function"));function Kd(a){if(Fd(a)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a))throw Error(String(a));}else if(Ed(a)&&!Number.isSafeInteger(a))throw Error(String(a));return BigInt(a)}
var Nd=Dd(a=>a>=Ld&&a<=Md);
const Ld=BigInt(Number.MIN_SAFE_INTEGER),Md=BigInt(Number.MAX_SAFE_INTEGER);let Od=0,Pd=0,Qd;function Rd(a){const b=a>>>0;Od=b;Pd=(a-b)/4294967296>>>0}
function Sd(a){if(a<0){Rd(0-a);a=Od;var b=Pd;b=~b;a?a=~a+1:b+=1;const [c,d]=[a,b];Od=c>>>0;Pd=d>>>0}else Rd(a)}
function Td(a,b){const c=b*4294967296+(a>>>0);return Number.isSafeInteger(c)?c:Ud(a,b)}
function Ud(a,b){b>>>=0;a>>>=0;var c;b<=2097151?c=""+(4294967296*b+a):c=""+(BigInt(b)<<BigInt(32)|BigInt(a));return c}
function Vd(){var a=Od,b=Pd,c;b&2147483648?c=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):c=Ud(a,b);return c}
function Wd(a){a.length<16?Sd(Number(a)):(a=BigInt(a),Od=Number(a&BigInt(4294967295))>>>0,Pd=Number(a>>BigInt(32)&BigInt(4294967295)))}
;const Xd=typeof BigInt==="function"?BigInt.asIntN:void 0,Yd=typeof BigInt==="function"?BigInt.asUintN:void 0,Zd=Number.isSafeInteger,$d=Number.isFinite,ae=Math.trunc;function be(a){return a.displayName||a.name||"unknown type name"}
function ce(a){if(a!=null&&typeof a!=="boolean")throw Error(`Expected boolean but got ${ja(a)}: ${a}`);return a}
const de=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ee(a){switch(typeof a){case "bigint":return!0;case "number":return $d(a);case "string":return de.test(a);default:return!1}}
function fe(a){if(typeof a!=="number")throw id("int32");if(!$d(a))throw id("int32");return a|0}
function ge(a){return a==null?a:fe(a)}
function he(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return $d(a)?a|0:void 0}
function ie(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return $d(a)?a>>>0:void 0}
function je(a){var b=xc?1024:0;if(!ee(a))throw id("int64");const c=typeof a;switch(b){case 512:switch(c){case "string":return ke(a);case "bigint":return String(Xd(64,a));default:return le(a)}case 1024:switch(c){case "string":return me(a);case "bigint":return Kd(Xd(64,a));default:return ne(a)}case 0:switch(c){case "string":return ke(a);case "bigint":return Kd(Xd(64,a));default:return oe(a)}default:return Ta(b,"Unknown format requested type for int64")}}
function pe(a){return a==null?a:je(a)}
function oe(a){ee(a);a=ae(a);if(!Zd(a)){Sd(a);var b=Od,c=Pd;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=Td(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function le(a){ee(a);a=ae(a);Zd(a)?a=String(a):(Sd(a),a=Vd());return a}
function ke(a){ee(a);var b=ae(Number(a));if(Zd(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));a.indexOf(".");b=a.length;(a[0]==="-"?b<20||b===20&&a<="-9223372036854775808":b<19||b===19&&a<="9223372036854775807")||(Wd(a),a=Vd());return a}
function me(a){var b=ae(Number(a));if(Zd(b))return Kd(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Kd(Xd(64,BigInt(a)))}
function ne(a){return Zd(a)?Kd(oe(a)):Kd(le(a))}
function qe(a){if(a==null)return a;if(typeof a==="bigint")return Nd(a)?a=Number(a):(a=Xd(64,a),a=Nd(a)?Number(a):String(a)),a;if(ee(a))return typeof a==="number"?oe(a):ke(a)}
function re(a){const b=typeof a;if(a==null)return a;if(b==="bigint")return Kd(Xd(64,a));if(ee(a))return b==="string"?me(a):ne(a)}
function se(a){if(a==null)return a;const b=typeof a;if(b==="bigint")return String(Xd(64,a));if(ee(a)){if(b==="string")return ke(a);if(b==="number")return oe(a)}}
function te(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String(Yd(64,a));if(ee(a)){if(b==="string")return ee(a),b=ae(Number(a)),Zd(b)&&b>=0?a=String(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a.indexOf("."),a[0]==="-"?b=!1:(b=a.length,b=b<20?!0:b===20&&a<="18446744073709551615"),b||(Wd(a),a=Ud(Od,Pd))),a;if(b==="number")return ee(a),a=ae(a),a>=0&&Zd(a)||(Sd(a),a=Td(Od,Pd)),a}}
function ue(a){if(typeof a!=="string")throw Error();return a}
function ve(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function we(a){return a==null||typeof a==="string"?a:void 0}
function xe(a,b){if(!(a instanceof b))throw Error(`Expected instanceof ${be(b)} but got ${a&&be(a.constructor)}`);}
function ye(a,b,c){if(a!=null&&a[rd]===wd)return a;if(Array.isArray(a)){var d=a[E]|0;c=d|c&32|c&2;c!==d&&(a[E]=c);return new b(a)}}
;const ze={};function Ae(a){return a}
;function Be(a){const b=ta(md);return b?a[b]:void 0}
const Ce={Ci:!0};function De(a,b){b<100||jd(od,1)}
;function Ee(a,b,c,d){const e=d!==void 0;d=!!d;var f=ta(md),g;!e&&f&&(g=a[f])&&g.Oe(De);f=[];var h=a.length;let k;g=4294967295;let l=!1;const m=!!(b&64),n=m?b&128?0:-1:void 0;b&1||(k=h&&a[h-1],k!=null&&typeof k==="object"&&k.constructor===Object?(h--,g=h):k=void 0,!m||b&128||e||(l=!0,g=(Fe??Ae)(g-n,n,a,k,void 0)+n));b=void 0;for(var u=0;u<h;u++){let p=a[u];if(p!=null&&(p=c(p,d))!=null)if(m&&u>=g){const z=u-n;(b??(b={}))[z]=p}else f[u]=p}if(k)for(let p in k){h=k[p];if(h==null||(h=c(h,d))==null)continue;
u=+p;let z;m&&!Number.isNaN(u)&&(z=u+n)<g?f[z]=h:(b??(b={}))[p]=h}b&&(l?f.push(b):f[g]=b);e&&ta(md)&&Be(a);return f}
function Ge(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return Nd(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[E]|0;return a.length===0&&b&1?void 0:Ee(a,b,Ge)}if(a!=null&&a[rd]===wd)return He(a);if(a instanceof dd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{let c="",d=0;const e=b.length-10240;for(;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):
b);a=a.h=btoa(c)}return a}return}return a}
let Fe;function Ie(a,b){if(b){Fe=b==null||b===Ae||b[sd]!==ze?Ae:b;try{return He(a)}finally{Fe=void 0}}return He(a)}
function He(a){a=a.W;return Ee(a,a[E]|0,Ge)}
;let Je,Ke;function Le(a){switch(typeof a){case "boolean":return Je||(Je=[0,void 0,!0]);case "number":return a>0?void 0:a===0?Ke||(Ke=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function Me(a,b,c,d=0){if(a==null){var e=32;c?(a=[c],e|=128):a=[];b&&(e=e&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");e=a[E]|0;if(wc&&1&e)throw Error("rfarr");2048&e&&!(2&e)&&Ne();if(e&256)throw Error("farr");if(e&64)return(e|d)!==e&&(a[E]=e|d),a;if(c&&(e|=128,c!==a[0]))throw Error("mid");a:{c=a;e|=64;var f=c.length;if(f){var g=f-1;const k=c[g];if(k!=null&&typeof k==="object"&&k.constructor===Object){b=e&128?0:-1;g-=b;if(g>=1024)throw Error("pvtlmt");for(var h in k)if(f=
+h,f<g)c[f+b]=k[h],delete k[h];else break;e=e&-16760833|(g&1023)<<14;break a}}if(b){h=Math.max(b,f-(e&128?0:-1));if(h>1024)throw Error("spvt");e=e&-16760833|(h&1023)<<14}}}a[E]=e|64|d;return a}
function Ne(){if(wc)throw Error("carr");jd(qd,5)}
;function Oe(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[E]|0;a.length===0&&c&1?a=void 0:c&2||(!b||4096&c||16&c?a=Pe(a,c,!1,b&&!(c&16)):(a[E]|=34,c&4&&Object.freeze(a)));return a}if(a!=null&&a[rd]===wd)return b=a.W,c=b[E]|0,xd(a,c)?a:Qe(a,b,c)?Re(a,b):Pe(b,c);if(a instanceof dd)return a}
function Re(a,b,c){a=new a.constructor(b);c&&(a.h=yd);a.i=yd;return a}
function Pe(a,b,c,d){d??(d=!!(34&b));a=Ee(a,b,Oe,d);d=32;c&&(d|=2);b=b&16769217|d;a[E]=b;return a}
function Se(a){const b=a.W,c=b[E]|0;return xd(a,c)?Qe(a,b,c)?Re(a,b,!0):new a.constructor(Pe(b,c,!1)):a}
function Te(a){if(a.h!==yd)return!1;var b=a.W;b=Pe(b,b[E]|0);b[E]|=2048;a.W=b;a.h=void 0;a.i=void 0;return!0}
function Ue(a){if(!Te(a)&&xd(a,a.W[E]|0))throw Error();}
function Ve(a,b){b===void 0&&(b=a[E]|0);b&32&&!(b&4096)&&(a[E]=b|4096)}
function Qe(a,b,c){return c&2?!0:c&32&&!(c&4096)?(b[E]=c|2,a.h=yd,!0):!1}
;const We=Kd(0),Xe={};function Ye(a,b,c,d,e){Object.isExtensible(a);b=Ze(a.W,b,c,e);if(b!==null||d&&a.i!==yd)return b}
function Ze(a,b,c,d){if(b===-1)return null;const e=b+(c?0:-1),f=a.length-1;let g,h;if(!(f<1+(c?0:-1))){if(e>=f)if(g=a[f],g!=null&&typeof g==="object"&&g.constructor===Object)c=g[b],h=!0;else if(e===f)c=g;else return;else c=a[e];if(d&&c!=null){d=d(c);if(d==null)return d;if(!Object.is(d,c))return h?g[b]=d:a[e]=d,d}return c}}
function F(a,b,c,d){Ue(a);const e=a.W;$e(e,e[E]|0,b,c,d);return a}
function $e(a,b,c,d,e){const f=c+(e?0:-1);var g=a.length-1;if(g>=1+(e?0:-1)&&f>=g){const h=a[g];if(h!=null&&typeof h==="object"&&h.constructor===Object)return h[c]=d,b}if(f<=g)return a[f]=d,b;d!==void 0&&(g=(b??(b=a[E]|0))>>14&1023||536870912,c>=g?d!=null&&(a[g+(e?0:-1)]={[c]:d}):a[f]=d);return b}
function af(a,b,c){a=Ze(a,b,c);return Array.isArray(a)?a:ud}
function bf(a,b){2&b&&(a|=2);return a|1}
function cf(a){return!!(2&a)&&!!(4&a)||!!(256&a)}
function df(a){return zd(a,!0)}
function ef(a){a=Ye(a,1,void 0,void 0,df);return a==null?bd():a}
function ff(a,b,c){Ue(a);const d=a.W;let e=d[E]|0;if(b==null)return $e(d,e,3),a;if(!Array.isArray(b))throw id();let f=b===ud?7:b[E]|0,g=f;var h=cf(f);let k=h||Object.isFrozen(b);h||(f=0);k||(b=[...b],g=0,f=gf(f,e),k=!1);f|=5;h=(4&f?512&f?512:1024&f?1024:0:void 0)??(xc?1024:0);f|=h;for(let l=0;l<b.length;l++){const m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=[...b],g=0,f=gf(f,e),k=!1),b[l]=n)}f!==g&&(k&&(b=[...b],f=gf(f,e)),b[E]=f);$e(d,e,3,b);return a}
function hf(a,b,c,d){Ue(a);const e=a.W;$e(e,e[E]|0,b,c===""?void 0:c,d);return a}
function jf(a,b,c,d){Ue(a);a=a.W;var e=a[E]|0;if(d==null){var f=a[ld]??(a[ld]=new Map);if(kf(f,a,e,c)===b)f.set(c,0);else return}else{b===0||c.includes(b);f=a[ld]??(a[ld]=new Map);const g=kf(f,a,e,c);g!==b&&(g&&(e=$e(a,e,g)),f.set(c,b))}$e(a,e,b,d)}
function kf(a,b,c,d){let e=a.get(d);if(e!=null)return e;e=0;for(let f=0;f<d.length;f++){const g=d[f];Ze(b,g)!=null&&(e!==0&&(c=$e(b,c,e)),e=g)}a.set(d,e);return e}
function lf(a,b,c,d,e){let f=!1;d=Ze(a,d,e,g=>{const h=ye(g,c,b);f=h!==g&&h!=null;return h});
if(d!=null)return f&&!xd(d)&&Ve(a,b),d}
function mf(a,b,c,d){let e=a.W,f=e[E]|0;b=lf(e,f,b,c,d);if(b==null)return b;f=e[E]|0;if(!xd(a,f)){const g=Se(b);g!==b&&(Te(a)&&(e=a.W,f=e[E]|0),b=g,f=$e(e,f,c,b,d),Ve(e,f))}return b}
function Xb(a,b,c){var d=void 0===Ad?2:4;var e=a.W,f=e,g=e[E]|0,h=xd(a,g);e=h?1:d;d=e===3;var k=!h;(e===2||k)&&Te(a)&&(f=a.W,g=f[E]|0);h=af(f,c);var l=h===ud?7:h[E]|0,m=bf(l,g);if(a=!(4&m)){var n=h,u=g;const p=!!(2&m);p&&(u|=2);let z=!p,D=!0,B=0,M=0;for(;B<n.length;B++){const K=ye(n[B],b,u);if(K instanceof b){if(!p){const Z=xd(K);z&&(z=!Z);D&&(D=Z)}n[M++]=K}}M<B&&(n.length=M);m|=4;m=D?m&-4097:m|4096;m=z?m|8:m&-9}m!==l&&(h[E]=m,2&m&&Object.freeze(h));if(k&&!(8&m||!h.length&&(e===1||(e!==4?0:2&m||!(16&
m)&&32&g)))){cf(m)&&(h=[...h],m=gf(m,g),g=$e(f,g,c,h));b=h;k=m;for(l=0;l<b.length;l++)n=b[l],m=Se(n),n!==m&&(b[l]=m);k|=8;m=k=b.length?k|4096:k&-4097;h[E]=m}k=b=m;e===1||(e!==4?0:2&b||!(16&b)&&32&g)?cf(b)||(b|=!h.length||a&&!(4096&b)||32&g&&!(4096&b||16&b)?2:256,b!==k&&(h[E]=b),Object.freeze(h)):(e===2&&cf(b)&&(h=[...h],k=0,b=gf(b,g),g=$e(f,g,c,h)),cf(b)||(d||(b|=16),b!==k&&(h[E]=b)));2&b||!(4096&b||16&b)||Ve(f,g);return h}
function nf(a,b){a!=null?xe(a,b):a=void 0;return a}
function of(a,b,c,d,e){d=nf(d,b);F(a,c,d,e);d&&!xd(d)&&Ve(a.W);return a}
function pf(a,b,c,d){Ue(a);const e=a.W;let f=e[E]|0;if(d==null)return $e(e,f,c),a;if(!Array.isArray(d))throw id();let g=d===ud?7:d[E]|0,h=g;const k=cf(g),l=k||Object.isFrozen(d);let m=!0,n=!0;for(let p=0;p<d.length;p++){var u=d[p];xe(u,b);k||(u=xd(u),m&&(m=!u),n&&(n=u))}k||(g=m?13:5,g=n?g&-4097:g|4096);l&&g===h||(d=[...d],h=0,g=gf(g,f));g!==h&&(d[E]=g);f=$e(e,f,c,d);2&g||!(4096&g||16&g)||Ve(e,f);return a}
function gf(a,b){return a=(2&b?a|2:a&-3)&-273}
function Zb(a,b,c=0){return he(Ye(a,b))??c}
function qf(a,b,c=We){return(xc?Ye(a,b,void 0,void 0,re):re(Ye(a,b)))??c}
function rf(a,b,c="",d){return we(Ye(a,b,d))??c}
function sf(a){a=Ye(a,1);return(a==null?a:$d(a)?a|0:void 0)??0}
function tf(a,b,c){return F(a,b,ve(c))}
function uf(a,b,c){if(c!=null){if(!$d(c))throw id("enum");c|=0}return F(a,b,c)}
;function vf(a){if(!a)return wf||(wf=new xf(0,0));if(!/^\d+$/.test(a))return null;Wd(a);return new xf(Od,Pd)}
var xf=class{constructor(a,b){this.i=a>>>0;this.h=b>>>0}};let wf;function yf(a){if(!a)return zf||(zf=new Af(0,0));if(!/^-?\d+$/.test(a))return null;Wd(a);return new Af(Od,Pd)}
var Af=class{constructor(a,b){this.i=a>>>0;this.h=b>>>0}};let zf;function Bf(a,b,c){for(;c>0||b>127;)a.h.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.h.push(b)}
function Cf(a,b){a.h.push(b>>>0&255);a.h.push(b>>>8&255);a.h.push(b>>>16&255);a.h.push(b>>>24&255)}
function Df(a,b){for(;b>127;)a.h.push(b&127|128),b>>>=7;a.h.push(b)}
var Ef=class{constructor(){this.h=[]}length(){return this.h.length}end(){const a=this.h;this.h=[];return a}writeUint8(a){this.h.push(a>>>0&255)}writeInt8(a){this.h.push(a>>>0&255)}};function Ff(a,b){b.length!==0&&(a.j.push(b),a.i+=b.length)}
function Gf(a,b){Df(a.h,b*8+2);b=a.h.end();Ff(a,b);b.push(a.i);return b}
function Hf(a,b){var c=b.pop();for(c=a.i+a.h.length()-c;c>127;)b.push(c&127|128),c>>>=7,a.i++;b.push(c);a.i++}
function If(a,b,c){if(c!=null){switch(typeof c){case "string":vf(c)}Df(a.h,b*8+1);switch(typeof c){case "number":a=a.h;Rd(c);Cf(a,Od);Cf(a,Pd);break;case "bigint":c=BigInt.asUintN(64,c);c=new xf(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));a=a.h;b=c.h;Cf(a,c.i);Cf(a,b);break;default:c=vf(c),a=a.h,b=c.h,Cf(a,c.i),Cf(a,b)}}}
var Jf=class{constructor(){this.j=[];this.i=0;this.h=new Ef}};function Kf(){const a=class{constructor(){throw Error();}};Object.setPrototypeOf(a,a.prototype);return a}
var Lf=Kf(),Mf=Kf(),Nf=Kf(),Of=Kf(),Pf=Kf(),Qf=Kf(),Rf=Kf();function Sf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");b[E]|=32;return new a(b)}
var G=class{constructor(a,b,c){this.W=Me(a,b,c,2048)}toJSON(){return Ie(this)}serialize(a){return JSON.stringify(Ie(this,a))}clone(){const a=this.W,b=a[E]|0;return Qe(this,a,b)?Re(this,a,!0):new this.constructor(Pe(a,b,!1))}};G.prototype[rd]=wd;G.prototype.toString=function(){return this.W.toString()};var H=class{constructor(a,b){this.Kc=a;a=ta(Lf);this.h=!!a&&b===a||!1}};function Tf(a,b,c,d,e){b=Uf(b,d);b!=null&&(c=Gf(a,c),e(b,a),Hf(a,c))}
const Vf=new H(Tf,Lf),Wf=new H(Tf,Lf);var Xf=Symbol(),Yf=Symbol();let Zf,$f;
function ag(a){var b=bg,c=cg,d=a[Xf];if(d)return d;d={};d.Vh=a;d.xd=Le(a[0]);var e=a[1];let f=1;e&&e.constructor===Object&&(d.extensions=e,e=a[++f],typeof e==="function"&&(d.Ye=!0,Zf??(Zf=e),$f??($f=a[f+1]),e=a[f+=2]));const g={};for(;e&&dg(e);){for(var h=0;h<e.length;h++)g[e[h]]=e;e=a[++f]}for(h=1;e!==void 0;){typeof e==="number"&&(h+=e,e=a[++f]);let m;var k=void 0;e instanceof H?m=e:(m=Vf,f--);if(m?.h){e=a[++f];k=a;var l=f;typeof e==="function"&&(e=e(),k[l]=e);k=e}e=a[++f];l=h+1;typeof e==="number"&&
e<0&&(l-=e,e=a[++f]);for(;h<l;h++){const n=g[h];k?c(d,h,m,k,n):b(d,h,m,n)}}return a[Xf]=d}
function dg(a){return Array.isArray(a)&&!!a.length&&typeof a[0]==="number"&&a[0]>0}
function Uf(a,b){if(a instanceof G)return a.W;if(Array.isArray(a))return Me(a,b[0],b[1])}
;function bg(a,b,c){a[b]=c.Kc}
function cg(a,b,c,d){let e,f;const g=c.Kc;a[b]=(h,k,l)=>g(h,k,l,f||(f=ag(d).xd),e||(e=eg(d)))}
function eg(a){let b=a[Yf];if(!b){const c=ag(a);b=(d,e)=>fg(d,e,c);
a[Yf]=b}return b}
function fg(a,b,c){Bd(a,a[E]|0,(d,e)=>{if(e!=null){var f=gg(c,d);f?f(b,e,d):d<500||jd(pd,3)}});
(a=Be(a))&&a.Oe((d,e,f)=>{Ff(b,b.h.end());for(d=0;d<f.length;d++)Ff(b,ed(f[d])||new Uint8Array(0))})}
function gg(a,b){var c=a[b];if(c)return c;if(c=a.extensions)if(c=c[b]){c=Array.isArray(c)?c[0]instanceof H?c:[Wf,c]:[c,void 0];var d=c[0].Kc;if(c=c[1]){const e=eg(c),f=ag(c).xd;c=a.Ye?$f(f,e):(g,h,k)=>d(g,h,k,f,e)}else c=d;
return a[b]=c}}
;function hg(a,b,c){if(Array.isArray(b)){var d=b[E]|0;if(d&4)return b;for(var e=0,f=0;e<b.length;e++){const g=a(b[e]);g!=null&&(b[f++]=g)}f<e&&(b.length=f);a=d|1;c&&(a=(a|4)&-1537);a!==d&&(b[E]=a);c&&a&2&&Object.freeze(b);return b}}
function ig(a,b,c){b=b==null||typeof b==="number"?b:b==="NaN"||b==="Infinity"||b==="-Infinity"?Number(b):void 0;b!=null&&(Df(a.h,c*8+1),a=a.h,c=Qd||(Qd=new DataView(new ArrayBuffer(8))),c.setFloat64(0,+b,!0),Od=c.getUint32(0,!0),Pd=c.getUint32(4,!0),Cf(a,Od),Cf(a,Pd))}
function jg(a,b,c){b=se(b);if(b!=null){switch(typeof b){case "string":yf(b)}if(b!=null)switch(Df(a.h,c*8),typeof b){case "number":a=a.h;Sd(b);Bf(a,Od,Pd);break;case "bigint":c=BigInt.asUintN(64,b);c=new Af(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));Bf(a.h,c.i,c.h);break;default:c=yf(b),Bf(a.h,c.i,c.h)}}}
function kg(a,b,c){b=he(b);if(b!=null&&b!=null)if(Df(a.h,c*8),a=a.h,c=b,c>=0)Df(a,c);else{for(b=0;b<9;b++)a.h.push(c&127|128),c>>=7;a.h.push(1)}}
function lg(a,b,c){b=b==null||typeof b==="boolean"?b:typeof b==="number"?!!b:void 0;b!=null&&(Df(a.h,c*8),a.h.h.push(b?1:0))}
function mg(a,b,c){b=we(b);b!=null&&(b=sc(b),Df(a.h,c*8+2),Df(a.h,b.length),Ff(a,a.h.end()),Ff(a,b))}
function ng(a,b,c,d,e){b=Uf(b,d);b!=null&&(c=Gf(a,c),e(b,a),Hf(a,c))}
var og=new H(lg,Mf),pg=new H(mg,Nf),qg=function(a,b,c=Lf){return new H(b,c)}(function(a,b,c,d,e){if(a.h()!==2)return!1;
var f=a.i;d=Me(void 0,d[0],d[1]);var g=b[E]|0;if(g&2)throw Error();const h=g&128?Cd:void 0;let k=af(b,c,h),l=k===ud?7:k[E]|0,m=bf(l,g);if(2&m||cf(m)||16&m)m===l||cf(m)||(k[E]=m),k=[...k],l=0,m=gf(m,g),$e(b,g,c,k,h);m&=-13;m!==l&&(k[E]=m);k.push(d);f.call(a,d,e);return!0},function(a,b,c,d,e){if(Array.isArray(b)){for(let f=0;f<b.length;f++)ng(a,b[f],c,d,e);
a=b[E]|0;a&1||(b[E]=a|1)}}),rg=new H(ng,Lf);class sg{constructor(a){var b=tg;this.ctor=a;this.isRepeated=0;this.h=mf;this.defaultValue=void 0;this.i=b.gf!=null?Cd:void 0}register(){Ic(this)}};function ug(a){return b=>Sf(a,b)}
;function vg(a,b){return ff(a,b,fe)}
var wg=class extends G{constructor(a){super(a)}};var xg=class extends G{constructor(a){super(a)}},yg=[1,2,3];var zg=class extends G{constructor(a){super(a)}},Ag=[1,2,3];var Bg=class extends G{constructor(a){super(a)}};var Cg=class extends G{constructor(a){super(a)}};var Dg=class extends G{constructor(a){super(a)}},Eg=[1,2,3];var Fg=class extends G{constructor(a){super(a)}};Fg.prototype.j=function(a){return function(){const b=new Jf;fg(this.W,b,ag(a));Ff(b,b.h.end());const c=new Uint8Array(b.i),d=b.j,e=d.length;let f=0;for(let g=0;g<e;g++){const h=d[g];c.set(h,f);f+=h.length}b.j=[c];return c}}([0,
pg,[0,Eg,rg,[0,pg,-1,og],rg,[0,pg,-1,new H(kg,Of),og],rg,[0,pg]],new H(function(a,b,c){b=hg(we,b,!0);if(b!=null)for(let g=0;g<b.length;g++){var d=a,e=c,f=b[g];f!=null&&(f=sc(f),Df(d.h,e*8+2),Df(d.h,f.length),Ff(d,d.h.end()),Ff(d,f))}},Nf),
qg,[0,qg,[0,yg,new H(mg,Nf),new H(kg,Of),new H(lg,Mf)],[0,Ag,new H(jg,Pf),new H(ig,Rf),rg,[0,qg,[0,new H(ig,Rf),new H(jg,Pf)]]]],new H(function(a,b,c){If(a,c,te(b))},Qf),
new H(function(a,b,c){b=hg(te,b,!1);if(b!=null)for(let d=0;d<b.length;d++)If(a,c,b[d])},Qf)]);var Gg=class extends G{constructor(a){super(a)}};function Hg(a){var b=new Fg;b=tf(b,1,a.i);var c=Ig(a);b=ff(b,c,ue);c=[];const d=[];for(var e of a.h.keys())d.push(e.split(","));for(e=0;e<d.length;e++){const u=d[e];var f=a.j,g=Jg(a,u)||[],h=[];for(var k=0;k<g.length;k++){var l=g[k],m=l&&l.h;l=new zg;switch(f){case 3:m=Number(m);Number.isFinite(m)&&jf(l,1,Ag,pe(m));break;case 2:m=Number(m);if(m!=null&&typeof m!=="number")throw Error(`Value of float/double field must be a number, found ${typeof m}: ${m}`);jf(l,2,Ag,m)}h.push(l)}f=h;for(g=0;g<f.length;g++){k=
f[g];h=new Bg;h=of(h,zg,2,k);k=[];l=Kg(a);for(m=0;m<l.length;m++){var n=l[m];const p=u[m],z=new xg;switch(n){case 3:jf(z,1,yg,ve(String(p)));break;case 2:n=Number(p);Number.isFinite(n)&&jf(z,2,yg,ge(n));break;case 1:jf(z,3,yg,ce(p==="true"))}k.push(z)}pf(h,xg,1,k);c.push(h)}}pf(b,Bg,4,c);return b}
;function Lg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Mg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var u=g,p=0;p<64;p+=4)u[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;p<80;p++)n=u[p-3]^u[p-8]^u[p-14]^u[p-16],u[p]=(n<<1|n>>>31)&4294967295;n=e[0];var z=e[1],D=e[2],B=e[3],M=e[4];for(p=0;p<80;p++){if(p<40)if(p<20){var K=B^z&(D^B);var Z=1518500249}else K=z^D^B,Z=1859775393;else p<60?(K=z&D|B&(z|D),Z=2400959708):(K=z^D^B,Z=3395469782);K=((n<<5|n>>>27)&4294967295)+K+M+Z+u[p]&4294967295;M=B;B=D;D=(z<<30|z>>>2)&4294967295;z=n;n=K}e[0]=e[0]+n&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+D&4294967295;e[3]=e[3]+B&4294967295;e[4]=e[4]+M&4294967295}
function c(n,u){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var p=[],z=0,D=n.length;z<D;++z)p.push(n.charCodeAt(z));n=p}u||(u=n.length);p=0;if(l==0)for(;p+64<u;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<u;)if(f[l++]=n[p++],m++,l==64)for(l=0,b(f);p+64<u;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],u=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var p=63;p>=56;p--)f[p]=u&255,u>>>=8;b(f);for(p=u=0;p<5;p++)for(var z=24;z>=0;z-=8)n[u++]=e[p]>>z&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,xe:function(){for(var n=d(),u="",p=0;p<n.length;p++)u+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return u}}}
;function Ng(a,b,c){var d=String(t.location.href);return d&&a&&b?[b,Og(Lg(d),a,c||null)].join(" "):null}
function Og(a,b,c){var d=[];let e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],gb(d,function(h){e.push(h)}),Pg(e.join(" "));
const f=[],g=[];gb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];gb(d,function(h){e.push(h)});
a=Pg(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Pg(a){const b=Mg();b.update(a);return b.xe().toLowerCase()}
;function Qg(a){this.h=a||{cookie:""}}
r=Qg.prototype;r.isEnabled=function(){if(!t.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{vc:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){let d;var e=!1;let f;if(typeof c==="object"){f=c.sameSite;e=c.secure||!1;d=c.domain||void 0;var g=c.path||void 0;var h=c.vc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=d?";domain="+d:"";g=g?";path="+g:"";e=e?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+e+(f!=null?
";samesite="+f:"")};
r.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=d[e].trim();if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){const d=this.get(a)!==void 0;this.set(a,"",{vc:0,path:b,domain:c});return d};
r.Ub=function(){return Rg(this).keys};
r.ab=function(){return Rg(this).values};
r.clear=function(){const a=Rg(this).keys;for(let b=a.length-1;b>=0;b--)this.remove(a[b])};
function Rg(a){a=(a.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=a[f].trim(),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Sg=new Qg(typeof document=="undefined"?null:document);function Tg(){var a=t.__SAPISID||t.__APISID||t.__3PSAPISID||t.__1PSAPISID||t.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new Qg(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function Ug(a,b,c,d){(a=t[a])||typeof document==="undefined"||(a=(new Qg(document)).get(b));return a?Ng(a,c,d):null}
function Vg(a){var b=Lg(t?.location.href);const c=[];if(Tg()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d,e=(d=b)?t.__SAPISID:t.__APISID;e||typeof document==="undefined"||(e=new Qg(document),e=e.get(d?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(d=e?Ng(e,d?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=Ug("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=Ug("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;var Wg=class{async compress(a){var b=new CompressionStream("gzip");const c=(new Response(b.readable)).arrayBuffer();b=b.writable.getWriter();await b.write((new TextEncoder).encode(a));await b.close();return new Uint8Array(await c)}isSupported(a){return a<1024?!1:typeof CompressionStream!=="undefined"}};var Xg=class extends G{constructor(a){super(a)}};var Yg=class{constructor(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=()=>sa();
this.i=this.h()}setInterval(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()}start(){this.enabled=!0;this.timer||(this.timer=setTimeout(()=>{this.tick()},this.intervalMs),this.i=this.h())}stop(){this.enabled=!1;
this.timer&&(clearTimeout(this.timer),this.timer=void 0)}tick(){if(this.enabled){const a=Math.max(this.h()-this.i,0);a<this.intervalMs*.8?this.timer=setTimeout(()=>{this.tick()},this.intervalMs-a):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0}};var Zg=class extends G{constructor(a){super(a)}};var $g=class extends G{constructor(a){super(a)}};function ah(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=ah.prototype;r.clone=function(){return new ah(this.x,this.y)};
r.equals=function(a){return a instanceof ah&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function bh(a,b){this.width=a;this.height=b}
r=bh.prototype;r.clone=function(){return new bh(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function ch(a,b){for(const c in a)b.call(void 0,a[c],c,a)}
function dh(a){const b=[];let c=0;for(const d in a)b[c++]=a[d];return b}
function eh(a){var b=fh;for(const c in b)if(a.call(void 0,b[c],c,b))return c}
function gh(a){for(const b in a)return!1;return!0}
function hh(a,b){if(a!==null&&b in a)throw Error(`The object already contains the key "${b}"`);a[b]=!0}
function ih(a){return a!==null&&"privembed"in a?a.privembed:!1}
function jh(a,b){for(const c in a)if(!(c in b)||a[c]!==b[c])return!1;for(const c in b)if(!(c in a))return!1;return!0}
function kh(a){const b={};for(const c in a)b[c]=a[c];return b}
function lh(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());const b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=lh(a[c]);return b}
const mh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nh(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<mh.length;f++)c=mh[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ph=class{constructor(a,b){this.h=a===oh&&b||""}toString(){return this.h}},oh={};new ph(oh,"");function cb(a){return new ab(a[0].toLowerCase())}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function qh(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function rh(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function sh(a){let b;for(;b=a.firstChild;)a.removeChild(b)}
function th(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function uh(a,b){let c=0;for(;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var vh=class extends G{constructor(a){super(a)}oc(){return sf(this)}};var wh=class extends G{constructor(a){super(a)}};function xh(a){pf(yh,wh,1,a)}
var zh=class extends G{constructor(a){super(a)}},Ah=ug(zh);var Bh=class extends G{constructor(a){super(a)}};var Ch=["platform","platformVersion","architecture","model","uaFullVersion"];const yh=new zh;let Dh=null;function Eh(a,b=Ch){if(!Dh){a=a.navigator?.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));xh((a.brands||[]).map(d=>{var e=new wh;e=tf(e,1,d.brand);return tf(e,2,d.version)}));
typeof a.mobile==="boolean"&&F(yh,2,ce(a.mobile));Dh=a.getHighEntropyValues(b)}const c=new Set(b);return Dh.then(d=>{const e=yh.clone();c.has("platform")&&tf(e,3,d.platform);c.has("platformVersion")&&tf(e,4,d.platformVersion);c.has("architecture")&&tf(e,5,d.architecture);c.has("model")&&tf(e,6,d.model);c.has("uaFullVersion")&&tf(e,7,d.uaFullVersion);return e.serialize()}).catch(()=>yh.serialize())}
;function Fh(a){return uf(a,1,1)}
var Gh=class extends G{constructor(a){super(a)}};var Hh=class extends G{constructor(a){super(a,4)}};var Ih=class extends G{constructor(a){super(a,37)}};var Jh=class extends G{constructor(a){super(a,19)}ac(a){return uf(this,2,a)}};function Kh(a,b){of(a.h,Gh,1,b);sf(b)||Fh(b);a.Sa||(b=Lh(a),rf(b,5)||tf(b,5,a.locale));a.j&&(b=Lh(a),mf(b,zh,9)||of(b,zh,9,a.j))}
function Lh(a){var b=mf(a.h,Gh,1);b||(b=new Gh,Kh(a,b));a=b;b=mf(a,Bh,11);b||(b=new Bh,of(a,Bh,11,b));return b}
function Mh(a,b){a.i=b}
function Nh(a){const b=a.Sa?void 0:window;b?Eh(b,Ch).then(c=>{a.j=Ah(c??"[]");c=Lh(a);of(c,zh,9,a.j);return!0}).catch(()=>!1):Promise.resolve(!1)}
function Oh(a,b,c=0,d=0,e=null,f=0,g=0){if(!a.Sa){var h=Lh(a);var k=new vh;k=uf(k,1,a.i);k=F(k,2,ce(a.isFinal));d=F(k,3,ge(d>0?d:void 0));f=F(d,4,ge(f>0?f:void 0));g=F(f,5,ge(g>0?g:void 0));f=g.W;d=f[E]|0;g=xd(g,d)?g:Qe(g,f,d)?Re(g,f):new g.constructor(Pe(f,d,!0));of(h,vh,10,g)}a=a.h.clone();h=Date.now().toString();a=F(a,4,pe(h));b=b.slice();b=pf(a,Ih,3,b);e&&(a=new Zg,e=F(a,13,ge(e)),a=new $g,e=of(a,Zg,2,e),a=new Hh,e=of(a,$g,1,e),e=uf(e,2,9),of(b,Hh,18,e));c&&F(b,14,pe(c));return b}
var Ph=class{constructor(a,b=!1){this.Sa=b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new Jh;Number.isInteger(a)&&this.h.ac(a);b||(this.locale=document.documentElement.getAttribute("lang"));Kh(this,new Gh)}ac(a){this.h.ac(a);return this}};function Qh(a,b,c,d){this.o=a;this.u=b;this.h=this.j=a;this.P=c||0;this.A=d||2}
Qh.prototype.i=0;Qh.prototype.reset=function(){this.h=this.j=this.o;this.i=0};
Qh.prototype.getValue=function(){return this.j};
function Rh(a){a.h=Math.min(a.u,a.h*a.A);a.j=Math.min(a.u,a.h+(a.P?Math.round(a.P*(Math.random()-.5)*2*a.h):0));a.i++}
;var tg=class extends G{constructor(a){super(a,8)}},Sh=ug(tg);var Th;Th=new sg(class extends G{constructor(a){super(a)}});function Uh(){return"https://play.google.com/log?format=json&hasfast=true"}
function Vh(a,b){if(!a.Ba)return()=>{};
const c=()=>{a.flush()};
return b?()=>{b().then(c)}:c}
function Wh(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function Xh(a){a.F||(a.F=Uh());try{return(new URL(a.F)).toString()}catch(b){return(new URL(a.F,window.location.origin)).toString()}}
function Yh(a){Zh(a,(b,c)=>{b=new URL(b);b.searchParams.set("format","json");let d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch{}d||(a.K=!1);return d})}
function $h(a,b,c=null,d=a.withCredentials){const e={},f=new URL(Xh(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,ne:1,Ec:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function Zh(a,b){if(a.h.length!==0){var c=new URL(Xh(a));c.searchParams.delete("format");var d=a.yb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){const e=a.h.slice(0,32),f=Oh(a.j,e,a.o,a.A,a.nb,a.Y,a.X);if(!b(c.toString(),f)){++a.A;break}a.o=0;a.A=0;a.Y=0;a.X=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
var ai=class extends y{constructor(a){super();this.componentId="";this.h=[];this.Fa="";this.pageId=null;this.Ja=this.fa=-1;this.D=this.experimentIds=null;this.X=this.Y=this.A=this.o=0;this.Wa=1;this.timeoutMillis=0;this.la=!1;this.logSource=a.logSource;this.yb=a.yb||(()=>{});
this.j=new Ph(a.logSource,a.Sa);this.network=a.network||null;this.nb=a.nb||null;this.bufferSize=1E3;this.F=a.Jf||null;this.sessionIndex=a.sessionIndex||null;this.Sb=a.Sb||!1;this.logger=null;this.withCredentials=!a.Nc;this.Sa=a.Sa||!1;this.K=!this.Sa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Ba=typeof URLSearchParams!=="undefined"&&!!(new URL(Uh())).searchParams&&!!(new URL(Uh())).searchParams.set;const b=Fh(new Gh);Kh(this.j,b);this.u=new Qh(1E4,3E5,.1);a=Vh(this,a.ld);
this.i=new Yg(this.u.getValue(),a);this.qa=new Yg(6E5,a);this.Sb||this.qa.start();this.Sa||(document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Wh(this)}),document.addEventListener("pagehide",()=>{Wh(this)}))}aa(){Wh(this);
this.i.stop();this.qa.stop();super.aa()}log(a){if(this.Ba){a=a.clone();var b=this.Wa++;a=F(a,21,pe(b));this.componentId&&tf(a,26,this.componentId);b=a;{var c=Ye(b,1);const d=typeof c;c=c==null?c:d==="bigint"?String(Xd(64,c)):ee(c)?d==="string"?ke(c):oe(c):void 0}c==null&&(c=Date.now(),c=Number.isFinite(c)?c.toString():"0",F(b,1,pe(c)));(xc?qe(Ye(b,15,void 0,void 0,re)):qe(Ye(b,15)))==null&&F(b,15,pe((new Date).getTimezoneOffset()*60));this.experimentIds&&(c=this.experimentIds.clone(),of(b,Xg,16,c));
b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b);this.h.push(a);this.Sb||this.i.enabled||this.i.start()}}flush(a,b){if(this.h.length===0)a&&a();else if(this.la&&this.K)this.j.i=3,Yh(this);else{var c=Date.now();if(this.Ja>c&&this.fa<c)b&&b("throttled");else{this.network&&(typeof this.network.oc==="function"?Mh(this.j,this.network.oc()):this.j.i=0);var d=Oh(this.j,this.h,this.o,this.A,this.nb,this.Y,this.X),e=this.yb();if(e&&this.Fa===e)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&
this.i.stop();this.o=0;c=d.serialize();let f;this.D&&this.D.isSupported(c.length)&&(f=this.D.compress(c));const g=$h(this,c,e),h=m=>{this.u.reset();this.i.setInterval(this.u.getValue());if(m){var n=null;try{var u=JSON.stringify(JSON.parse(m.replace(")]}'\n","")));n=Sh(u)}catch(p){}if(n){m=Number(qf(n,1,Kd("-1")));m>0&&(this.fa=Date.now(),this.Ja=this.fa+m);(m=ta(md))&&n.W[m]?.[175237375]!=null&&jd(nd,3);if(ta(td)&&ta(md)&&void 0===td&&(m=n.W,u=m[md])&&(u=u.Di))try{u(m,175237375,Ce)}catch(p){tc(p)}n=
Th.ctor?Th.h(n,Th.ctor,175237375,Th.i):Th.h(n,175237375,null,Th.i);if(n=n===null?void 0:n)n=Zb(n,1,-1),n!==-1&&(this.u=new Qh(n<1?1:n,3E5,.1),this.i.setInterval(this.u.getValue()))}}a&&a();this.A=0},k=(m,n)=>{var u=Xb(d,Ih,3);
var p=Number(qf(d,14));Rh(this.u);this.i.setInterval(this.u.getValue());m===401&&e&&(this.Fa=e);p&&(this.o+=p);n===void 0&&(n=this.isRetryable(m));n&&(this.h=u.concat(this.h),this.Sb||this.i.enabled||this.i.start());b&&b("net-send-failed",m);++this.A},l=()=>{this.network&&this.network.send(g,h,k)};
f?f.then(m=>{g.Ec["Content-Encoding"]="gzip";g.Ec["Content-Type"]="application/binary";g.body=m;g.ne=2;l()},()=>{l()}):l()}}}}isRetryable(a){return 500<=a&&a<600||a===401||a===0}};var bi=class{constructor(){this.ee=typeof AbortController!=="undefined"}async send(a,b,c){const d=this.ee?new AbortController:void 0,e=d?setTimeout(()=>{d.abort()},a.timeoutMillis):void 0;
try{const f=await fetch(a.url,{method:a.requestType,headers:{...a.Ec},...(a.body&&{body:a.body}),...(a.withCredentials&&{credentials:"include"}),signal:a.timeoutMillis&&d?d.signal:null});f.status===200?b?.(await f.text()):c?.(f.status)}catch(f){switch(f?.name){case "AbortError":c?.(408);break;default:c?.(400)}}finally{clearTimeout(e)}}oc(){return 4}};function ci(a,b){a.buildLabel=b;return a}
function di(a){a.network=new ei;return a}
function fi(a,b){a.h=b}
function gi(a){a.i=!0;return a}
function hi(a){a.network||(a.network=new bi);const b=new ai({logSource:a.logSource,yb:a.yb?a.yb:Vg,sessionIndex:a.sessionIndex,Jf:a.hb,Sa:!1,Sb:!1,Nc:a.j,ld:a.ld,network:a.network});Nb(a,b);if(a.buildLabel){var c=a.buildLabel,d=Lh(b.j);tf(d,7,c)}b.D=new Wg;a.componentId&&(b.componentId=a.componentId);a.nb&&(b.nb=a.nb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new Xg),c=b.experimentIds,d=d.serialize(),tf(c,4,d)):b.experimentIds&&F(b.experimentIds,4));a.i&&(b.la=
b.K);Nh(b.j);a.bufferSize&&(b.bufferSize=a.bufferSize);a.network.ac&&a.network.ac(a.logSource);a.network.xf&&a.network.xf(b);return b}
var ii=class extends y{constructor(){super();this.logSource=1828;this.sessionIndex="0";this.hb="https://play.google.com/log?format=json&hasfast=true";this.network=this.buildLabel=null;this.componentId="";this.h=this.nb=null;this.i=!1;this.pageId=null;this.bufferSize=void 0;this.logger=null}Nc(){this.j=!0;return this}};var ji=class extends y{constructor(a){super();this.logSource=1828;this.componentId="";a||(a=new ii,a.componentId="",Nb(this,a),a=hi(a));this.h=a}flush(a){a=a||[];if(a.length){var b=new Gg;const f=[];for(let g=0;g<a.length;g++){const h=a[g],k=Hg(h);f.push(k);h.clear()}pf(b,Fg,1,f);a=b;b=this.h;if(a instanceof Ih)b.log(a);else try{var c=new Ih,d=a.serialize();var e=tf(c,8,d);b.log(e)}catch{}this.h.flush()}}};var ki=class{constructor(a){this.h=a}};function Kg(a){return a.fields.map(b=>b.fieldType)}
function Jg(a,...b){b=li(b);return a.h.has(b)?a.h.get(b):void 0}
function Ig(a){return a.fields.map(b=>b.fieldName)}
function li(...a){return a?a.join(","):"key"}
var mi=class{constructor(a,b,c){this.i=a;this.j=b;this.fields=c||[];this.h=new Map}clear(){this.h.clear()}};var ni=class extends mi{constructor(a,b){super(a,3,b)}};var oi=class extends mi{constructor(a,b){super(a,2,b)}record(a,...b){b=[b];const c=Jg(this,b);c?c.push(new ki(a)):(b=li([b]),this.h.set(b,[new ki(a)]))}};function pi(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
pi.prototype.stopPropagation=function(){this.j=!0};
pi.prototype.preventDefault=function(){this.defaultPrevented=!0};function qi(a,b){pi.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
ua(qi,pi);
qi.prototype.init=function(a,b){const c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&qi.Ea.preventDefault.call(this)};
qi.prototype.stopPropagation=function(){qi.Ea.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
qi.prototype.preventDefault=function(){qi.Ea.preventDefault.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ri="closure_listenable_"+(Math.random()*1E6|0);var si=0;function ti(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.handler=e;this.key=++si;this.Zb=this.hc=!1}
function ui(a){a.Zb=!0;a.listener=null;a.proxy=null;a.src=null;a.handler=null}
;function vi(a){this.src=a;this.listeners={};this.h=0}
vi.prototype.add=function(a,b,c,d,e){const f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);const g=wi(a,b,d,e);g>-1?(b=a[g],c||(b.hc=!1)):(b=new ti(b,this.src,f,!!d,e),b.hc=c,a.push(b));return b};
vi.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;const e=this.listeners[a];b=wi(e,b,c,d);return b>-1?(ui(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function xi(a,b){const c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(ui(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function wi(a,b,c,d){for(let e=0;e<a.length;++e){const f=a[e];if(!f.Zb&&f.listener==b&&f.capture==!!c&&f.handler==d)return e}return-1}
;var yi="closure_lm_"+(Math.random()*1E6|0),zi={},Ai=0;function Bi(a,b,c,d,e){if(d&&d.once)Ci(a,b,c,d,e);else if(Array.isArray(b))for(let f=0;f<b.length;f++)Bi(a,b[f],c,d,e);else c=Di(c),a&&a[ri]?a.listen(b,c,la(d)?!!d.capture:!!d,e):Ei(a,b,c,!1,d,e)}
function Ei(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");const g=la(e)?!!e.capture:!!e;let h=Fi(a);h||(a[yi]=h=new vi(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Gi();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Hi(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ai++}}
function Gi(){function a(c){return b.call(a.src,a.listener,c)}
const b=Ii;return a}
function Ci(a,b,c,d,e){if(Array.isArray(b))for(let f=0;f<b.length;f++)Ci(a,b[f],c,d,e);else c=Di(c),a&&a[ri]?Ji(a,b,c,la(d)?!!d.capture:!!d,e):Ei(a,b,c,!0,d,e)}
function Ki(a,b,c,d,e){if(Array.isArray(b))for(let f=0;f<b.length;f++)Ki(a,b[f],c,d,e);else(d=la(d)?!!d.capture:!!d,c=Di(c),a&&a[ri])?a.i.remove(String(b),c,d,e):a&&(a=Fi(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=wi(b,c,d,e)),(c=a>-1?b[a]:null)&&Li(c))}
function Li(a){if(typeof a!=="number"&&a&&!a.Zb){var b=a.src;if(b&&b[ri])xi(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Hi(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ai--;(c=Fi(b))?(xi(c,a),c.h==0&&(c.src=null,b[yi]=null)):ui(a)}}}
function Hi(a){return a in zi?zi[a]:zi[a]="on"+a}
function Ii(a,b){if(a.Zb)a=!0;else{b=new qi(b,this);const c=a.listener,d=a.handler||a.src;a.hc&&Li(a);a=c.call(d,b)}return a}
function Fi(a){a=a[yi];return a instanceof vi?a:null}
var Mi="__closure_events_fn_"+(Math.random()*1E9>>>0);function Di(a){if(typeof a==="function")return a;a[Mi]||(a[Mi]=function(b){return a.handleEvent(b)});
return a[Mi]}
;function Ni(){y.call(this);this.i=new vi(this);this.qa=this;this.Y=null}
ua(Ni,y);Ni.prototype[ri]=!0;r=Ni.prototype;r.addEventListener=function(a,b,c,d){Bi(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Ki(this,a,b,c,d)};
function Oi(a,b){var c=a.Y;if(c){var d=[];for(var e=1;c;c=c.Y)d.push(c),++e}a=a.qa;c=b.type||b;typeof b==="string"?b=new pi(b,a):b instanceof pi?b.target=b.target||a:(e=b,b=new pi(c,a),nh(b,e));e=!0;let f,g;if(d)for(g=d.length-1;!b.j&&g>=0;g--)f=b.h=d[g],e=Pi(f,c,!0,b)&&e;b.j||(f=b.h=a,e=Pi(f,c,!0,b)&&e,b.j||(e=Pi(f,c,!1,b)&&e));if(d)for(g=0;!b.j&&g<d.length;g++)f=b.h=d[g],e=Pi(f,c,!1,b)&&e}
r.aa=function(){Ni.Ea.aa.call(this);this.removeAllListeners();this.Y=null};
r.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Ji(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
r.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();let c=0;for(const d in b.listeners)if(!a||d==a){const e=b.listeners[d];for(let f=0;f<e.length;f++)++c,ui(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Pi(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();let e=!0;for(let f=0;f<b.length;++f){const g=b[f];if(g&&!g.Zb&&g.capture==c){const h=g.listener,k=g.handler||g.src;g.hc&&xi(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var Qi=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function Ri(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
class Si{constructor(a,b){this.j=a;this.o=b;this.i=0;this.h=null}get(){let a;this.i>0?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}};class Ti{constructor(){this.i=this.h=null}add(a,b){const c=Ui.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var Ui=new Si(()=>new Vi,a=>a.reset());
class Vi{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};let Wi,Xi=!1,Yi=new Ti,$i=(a,b)=>{Wi||Zi();Xi||(Wi(),Xi=!0);Yi.add(a,b)},Zi=()=>{const a=Promise.resolve(void 0);
Wi=()=>{a.then(aj)}};
function aj(){let a;for(;a=Yi.remove();){try{a.h.call(a.scope)}catch(b){tc(b)}Ri(Ui,a)}Xi=!1}
;function bj(){}
function cj(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function dj(a){this.ka=0;this.Hd=void 0;this.tb=this.Ya=this.parent_=null;this.qc=this.Pc=!1;if(a!=bj)try{const b=this;a.call(void 0,function(c){ej(b,2,c)},function(c){ej(b,3,c)})}catch(b){ej(this,3,b)}}
function fj(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
fj.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var gj=new Si(function(){return new fj},function(a){a.reset()});
function hj(a,b,c){const d=gj.get();d.i=a;d.h=b;d.context=c;return d}
function ij(a){return new dj(function(b,c){c(a)})}
dj.prototype.then=function(a,b,c){return jj(this,Qi(typeof a==="function"?a:null),Qi(typeof b==="function"?b:null),c)};
dj.prototype.$goog_Thenable=!0;function kj(a,b,c,d){lj(a,hj(b||bj,c||null,d))}
r=dj.prototype;r.finally=function(a){a=Qi(a);return new dj((b,c)=>{kj(this,d=>{a();b(d)},d=>{a();
c(d)})})};
r.Ic=function(a,b){return jj(this,null,Qi(a),b)};
r.catch=dj.prototype.Ic;r.cancel=function(a){if(this.ka==0){const b=new mj(a);$i(function(){nj(this,b)},this)}};
function nj(a,b){if(a.ka==0)if(a.parent_){var c=a.parent_;if(c.Ya){var d=0,e=null,f=null;for(let g=c.Ya;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.ka==0&&d==1?nj(c,b):(f?(d=f,d.next==c.tb&&(c.tb=d),d.next=d.next.next):oj(c),pj(c,e,3,b)))}a.parent_=null}else ej(a,3,b)}
function lj(a,b){a.Ya||a.ka!=2&&a.ka!=3||qj(a);a.tb?a.tb.next=b:a.Ya=b;a.tb=b}
function jj(a,b,c,d){const e=hj(null,null,null);e.child=new dj(function(f,g){e.i=b?function(h){try{const k=b.call(d,h);f(k)}catch(k){g(k)}}:f;
e.h=c?function(h){try{const k=c.call(d,h);k===void 0&&h instanceof mj?g(h):f(k)}catch(k){g(k)}}:g});
e.child.parent_=a;lj(a,e);return e.child}
r.Hf=function(a){this.ka=0;ej(this,2,a)};
r.If=function(a){this.ka=0;ej(this,3,a)};
function ej(a,b,c){if(a.ka==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.ka=1;a:{var d=c,e=a.Hf,f=a.If;if(d instanceof dj){kj(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(la(d))try{const k=d.then;if(typeof k==="function"){rj(d,k,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.Hd=c,a.ka=b,a.parent_=null,qj(a),b!=3||c instanceof mj||sj(a,c))}}
function rj(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
let h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function qj(a){a.Pc||(a.Pc=!0,$i(a.He,a))}
function oj(a){let b=null;a.Ya&&(b=a.Ya,a.Ya=b.next,b.next=null);a.Ya||(a.tb=null);return b}
r.He=function(){let a;for(;a=oj(this);)pj(this,a,this.ka,this.Hd);this.Pc=!1};
function pj(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.qc;a=a.parent_)a.qc=!1;if(b.child)b.child.parent_=null,tj(b,c,d);else try{b.j?b.i.call(b.context):tj(b,c,d)}catch(e){uj.call(null,e)}Ri(gj,b)}
function tj(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function sj(a,b){a.qc=!0;$i(function(){a.qc&&uj.call(null,b)})}
var uj=tc;function mj(a){Ba.call(this,a)}
ua(mj,Ba);mj.prototype.name="cancel";function vj(a,b){Ni.call(this);this.j=a||1;this.h=b||t;this.o=qa(this.Ff,this);this.u=sa()}
ua(vj,Ni);r=vj.prototype;r.enabled=!1;r.Ia=null;r.setInterval=function(a){this.j=a;this.Ia&&this.enabled?(this.stop(),this.start()):this.Ia&&this.stop()};
r.Ff=function(){if(this.enabled){const a=sa()-this.u;a>0&&a<this.j*.8?this.Ia=this.h.setTimeout(this.o,this.j-a):(this.Ia&&(this.h.clearTimeout(this.Ia),this.Ia=null),Oi(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ia||(this.Ia=this.h.setTimeout(this.o,this.j),this.u=sa())};
r.stop=function(){this.enabled=!1;this.Ia&&(this.h.clearTimeout(this.Ia),this.Ia=null)};
r.aa=function(){vj.Ea.aa.call(this);this.stop();delete this.h};function dc(a,b,...c){a.i.has(b)||a.i.set(b,new oi(b,c))}
function hc(a,b,...c){a.i.has(b)||a.i.set(b,new ni(b,c))}
function wj(a){a.h.enabled||a.h.start();a.u++;a.u>=a.j&&a.o()}
function xj(a){for(let b=0;b<a.length;b++)a[b].clear()}
function yj(a,b){return a.D.has(b)?void 0:a.i.get(b)}
function ic(a,b,...c){if((b=yj(a,b))&&b instanceof ni){c=[c];var d=0,e;(e=(e=Jg(b,[c]))&&e.length?e[0]:void 0)&&(d=e.h);d+=1;c=li([c]);b.h.set(c,[new ki(d)]);wj(a)}}
var zj=class extends y{constructor(a){super();this.F=a;this.u=0;this.j=100;this.A=!1;this.i=new Map;this.D=new Set;this.flushInterval=3E4;this.h=new vj(this.flushInterval);this.h.listen("tick",this.o,!1,this);Nb(this,this.h)}sendIsolatedPayload(a){this.A=a;this.j=1}o(){const a=[...this.i.values()].filter(b=>b.h.size);
a.length&&this.F.flush(a,this.A);xj(a);this.u=0;this.h.enabled&&this.h.stop()}record(a,b,...c){(a=yj(this,a))&&a instanceof oi&&(a.record(b,c),wj(this))}};function Aj(a){switch(a){case 200:return 0;case 400:return 3;case 401:return 16;case 403:return 7;case 404:return 5;case 409:return 10;case 412:return 9;case 429:return 8;case 499:return 1;case 500:return 2;case 501:return 12;case 503:return 14;case 504:return 4;default:return 2}}
function Bj(a){switch(a){case 0:return"OK";case 1:return"CANCELLED";case 2:return"UNKNOWN";case 3:return"INVALID_ARGUMENT";case 4:return"DEADLINE_EXCEEDED";case 5:return"NOT_FOUND";case 6:return"ALREADY_EXISTS";case 7:return"PERMISSION_DENIED";case 16:return"UNAUTHENTICATED";case 8:return"RESOURCE_EXHAUSTED";case 9:return"FAILED_PRECONDITION";case 10:return"ABORTED";case 11:return"OUT_OF_RANGE";case 12:return"UNIMPLEMENTED";case 13:return"INTERNAL";case 14:return"UNAVAILABLE";case 15:return"DATA_LOSS";
default:return""}}
;var Cj=class extends Error{constructor(a,b){super(b);this.code=a;this.metadata={};this.name="RpcError";Object.setPrototypeOf(this,new.target.prototype)}toString(){let a=`RpcError(${Bj(this.code)||String(this.code)})`;this.message&&(a+=": "+this.message);return a}};function Dj(){}
Dj.prototype.serialize=function(a){const b=[];Ej(this,a,b);return b.join("")};
function Ej(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");var e="";for(var f=0;f<b;f++)c.push(e),Ej(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Fj(d,c),c.push(":"),Ej(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Fj(b,c);break;
case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Gj={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Hj=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Fj(a,b){b.push('"',a.replace(Hj,function(c){let d=Gj[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Gj[c]=d);return d}),'"')}
;function Ij(){Ni.call(this);this.headers=new Map;this.h=!1;this.J=null;this.o=this.X="";this.j=this.K=this.A=this.F=!1;this.D=0;this.u=null;this.la="";this.fa=!1}
ua(Ij,Ni);var Jj=/^https?$/i,Kj=["POST","PUT"],Lj=[];function Mj(a,b,c,d,e,f,g){const h=new Ij;Lj.push(h);b&&h.listen("complete",b);Ji(h,"ready",h.re);f&&(h.D=Math.max(0,f));g&&(h.fa=g);h.send(a,c,d,e)}
r=Ij.prototype;r.re=function(){this.dispose();lb(Lj,this)};
r.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.X+"; newUri="+a);b=b?b.toUpperCase():"GET";this.X=a;this.o="";this.F=!1;this.h=!0;this.J=new XMLHttpRequest;this.J.onreadystatechange=Qi(qa(this.zd,this));try{this.getStatus(),this.K=!0,this.J.open(b,String(a),!0),this.K=!1}catch(f){this.getStatus();Nj(this,f);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function")for(const f of d.keys())c.set(f,d.get(f));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(f=>"content-type"==f.toLowerCase());
e=t.FormData&&a instanceof t.FormData;!(fb(Kj,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const [f,g]of c)this.J.setRequestHeader(f,g);this.la&&(this.J.responseType=this.la);"withCredentials"in this.J&&this.J.withCredentials!==this.fa&&(this.J.withCredentials=this.fa);try{this.u&&(clearTimeout(this.u),this.u=null),this.D>0&&(this.getStatus(),this.u=setTimeout(this.Gf.bind(this),this.D)),this.getStatus(),this.A=!0,this.J.send(a),this.A=!1}catch(f){this.getStatus(),
Nj(this,f)}};
r.Gf=function(){typeof ha!="undefined"&&this.J&&(this.o="Timed out after "+this.D+"ms, aborting",this.getStatus(),Oi(this,"timeout"),this.abort(8))};
function Nj(a,b){a.h=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.o=b;Oj(a);Pj(a)}
function Oj(a){a.F||(a.F=!0,Oi(a,"complete"),Oi(a,"error"))}
r.abort=function(){this.J&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.J.abort(),this.j=!1,Oi(this,"complete"),Oi(this,"abort"),Pj(this))};
r.aa=function(){this.J&&(this.h&&(this.h=!1,this.j=!0,this.J.abort(),this.j=!1),Pj(this,!0));Ij.Ea.aa.call(this)};
r.zd=function(){this.G||(this.K||this.A||this.j?Qj(this):this.nf())};
r.nf=function(){Qj(this)};
function Qj(a){if(a.h&&typeof ha!="undefined")if(a.A&&(a.J?a.J.readyState:0)==4)setTimeout(a.zd.bind(a),0);else if(Oi(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(Rj(a))Oi(a,"complete"),Oi(a,"success");else{try{var b=(a.J?a.J.readyState:0)>2?a.J.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Oj(a)}}finally{Pj(a)}}}
function Pj(a,b){if(a.J){a.u&&(clearTimeout(a.u),a.u=null);const c=a.J;a.J=null;b||Oi(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.J};
r.isComplete=function(){return(this.J?this.J.readyState:0)==4};
function Rj(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=String(a.X).match(wb)[1]||null,!a&&t.self&&t.self.location&&(a=t.self.location.protocol.slice(0,-1)),b=!Jj.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.J?this.J.readyState:0)>2?this.J.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};var ei=class{send(a,b=()=>{},c=()=>{}){Mj(a.url,d=>{d=d.target;
if(Rj(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Ec,a.timeoutMillis,a.withCredentials)}oc(){return 1}};var Tj=class{constructor(a,b){this.logger=a;this.event=b;this.startTime=Sj()}done(){this.logger.j(this.event,Sj()-this.startTime)}};function Uj(a,b,c){const d=Sj();b=b();a.j(c,Sj()-d);return b}
var Vj=class extends bc{constructor(){super(...arguments)}},Wj=class extends Vj{o(){}h(){}j(){}ta(){}D(){}A(){}i(){}K(){}u(){}F(){}},Xj=class extends Vj{constructor(a){super();this.logger=a;this.addOnDisposeCallback(()=>void this.logger.dispose())}update(a){this.logger.dispose();
this.logger=a}h(a){this.logger.h(a)}j(a,b){this.logger.j(a,b)}ta(a){this.logger.ta(a)}D(a){this.logger.D(a)}A(a,b){this.logger.A(a,b)}i(){this.logger.i()}K(a){this.logger.K(a)}u(a){this.logger.u(a)}F(a){this.logger.F(a)}o(a){this.logger.o(a)}};function Yj(a,b,c,d){a=gi(di(ci(new ii,a))).Nc();b.length&&fi(a,vg(new wg,b));d!==void 0&&(a.hb=d);const e=new ji(hi(a));Nb(e,a);const f=new zj({flush(g){try{e.flush(g)}catch(h){c(h)}}});f.addOnDisposeCallback(()=>{setTimeout(()=>{try{f.o()}finally{e.dispose()}})});
f.j=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function Zj(a){if(a.timer===void 0){const b=Math.max(0,a.h+a.i-Sj());a.timer=setTimeout(()=>{try{a.callback()}finally{a.h=Sj(),a.timer=void 0}},b)}}
class ak extends y{constructor(a,b){super();this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(()=>void clearTimeout(this.timer))}}
class bk extends Vj{constructor(a,b){super();this.metrics=a;this.ja=b}o(a){this.metrics.Bf.record(a,this.ja)}h(a){this.metrics.eventCount.h(a,this.ja)}j(a,b){this.metrics.Ge.record(b,a,this.ja)}ta(a){this.metrics.errorCount.h(a,this.ja)}K(a){this.metrics.Mf.h(a,this.ja)}u(a){this.metrics.oe.h(a,this.ja)}F(a){this.metrics.Lf.h(a,this.ja)}D(a){this.metrics.payloadSize.record(a,this.ja)}A(a,b){this.metrics.mf.record(b,a,this.ja)}}function ck(a,b=[]){return new dk(a,b)}
var dk=class extends bk{constructor(a,b=[]){const c={ja:a.ja||"_",Qc:a.Qc||[],Uc:a.Uc|0,hb:a.hb,zc:a.zc||(()=>{}),
Lb:a.Lb||((e,f)=>Yj(e,f,c.zc,c.hb))},d=c.Lb("53",c.Qc.concat(b));
super({Bf:new ec(d),errorCount:new lc(d),eventCount:new jc(d),Ge:new kc(d),Mi:new fc(d),Mf:new mc(d),oe:new nc(d),Lf:new oc(d),payloadSize:new pc(d),mf:new qc(d)},c.ja);this.options=c;this.service=d;this.fa=!a.Lb;this.X=new ak(()=>void this.service.o(),c.Uc);
this.addOnDisposeCallback(()=>{this.X.dispose();this.fa&&this.service.dispose()});
b.slice().sort(ob)}i(){Zj(this.X)}};function Sj(){return globalThis.performance?.now?.()??Date.now()}
;var ek=class extends G{constructor(a){super(a)}};var fk=class extends G{constructor(a){super(a)}};var gk=class extends G{constructor(a){super(a,0,"bfkj")}},hk=function(a){return Dd(b=>b instanceof a&&!xd(b))}(gk);
gk.gf="bfkj";var Yb=class extends G{constructor(a){super(a)}};var ik=class extends G{constructor(a){super(a)}},jk=ug(ik);class kk{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a;this.reject=b})}}
;function lk(a,b){if(a.disable)return new Wj;b=b?Wb(b):[];return ck({ja:a.ja,Qc:a.Je,Uc:a.hf,hb:a.hb,zc:a.zc,Lb:a.Lb},b)}
class mk extends y{constructor(a){super();this.j=Math.floor(Math.random()*200);this.h=new ik;let b;if("challenge"in a&&hk(a.challenge)){b=rf(a.challenge,4,void 0,Cd);var c=rf(a.challenge,5,void 0,Cd);rf(a.challenge,7,void 0,Cd)&&(this.h=jk(rf(a.challenge,7,void 0,Cd)))}else({program:b,globalName:c}=a);this.addOnDisposeCallback(async()=>{const {Af:m}=await this.i;m?.()});
this.logger=lk(a.Fb||{},this.h);Nb(this,this.logger);const d=new kk;this.i=d.promise;this.logger.h("t");const e=this.logger.share(),f=new Tj(e,"t"),g=(m,n,u,p)=>{if(!this.logger.G){var z="k";n?z="h":u&&(z="u");z!=="k"?p!==0&&(this.logger.h(z),this.logger.j(z,m)):this.j<=0?(this.logger.h(z),this.logger.j(z,m),this.j=Math.floor(Math.random()*200)):this.j--}},h=(m,n,u,p)=>{Promise.resolve().then(()=>{f.done();
e.i();e.dispose();d.resolve({ge:m,Af:n,rf:u,pe:p})})},k=[(m,n)=>{this.logger.j(m,n)},
m=>{this.logger.ta(m)},
m=>{this.logger.D(m)},
(m,n)=>{this.logger.A(m,n)}];
if(!t[c])throw this.logger.ta(25),Error("EGOU");if(!t[c].a)throw this.logger.ta(26),Error("ELIU");try{const m=t[c].a;c=[];const n=[];var l=Wb(this.h);for(let z=0;z<l.length;z++)c.push(l[z]),n.push(1);const u=$b(this.h);for(l=0;l<u.length;l++)c.push(u[l]),n.push(2);const [p]=m(b,h,!0,a.Rd,g,[c,n],rf(this.h,5),!1,k);this.o=p;this.Jb=d.promise.then(()=>{})}catch(m){throw this.logger.ta(28),m;
}}snapshot(a){if(this.G)throw Error("Already disposed");this.logger.h("n");const b=this.logger.share();return this.i.then(({ge:c})=>new Promise(d=>{const e=new Tj(b,"n");c(f=>{e.done();b.o(f.length);b.i();b.dispose();d(f)},[a.Ka,
a.Hc,a.Ud,a.ed])}))}Kd(a){if(this.G)throw Error("Already disposed");
this.logger.h("n");const b=Uj(this.logger,()=>this.o([a.Ka,a.Hc,a.Ud,a.ed]),"n");
this.logger.o(b.length);this.logger.i();return b}Wb(a){this.i.then(({rf:b})=>{b?.(a)})}jc(a,b){return this.i.then(({pe:c})=>c?.(a,b,!1))}bc(){return this.logger.share()}}
;function nk(a){if(!a)return null;a=we(Ye(a,4,void 0,Xe));return a===null||a===void 0?null:Ha(a)}
;function ok(){pk.instance||(pk.instance=new pk);return pk.instance}
function qk(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return rk(b,c);let e;(e=a.promises)[d]||(e[d]=new Promise((f,g)=>{rk(b,c).then(()=>{a.h=d;f()},h=>{delete a.promises[d];
g(h)})}));
return a.promises[d]}
function sk(a,b){return qk(a,mf(b,ek,1,Cd),mf(b,fk,2,Cd),rf(b,3,void 0,Cd))}
var pk=class{constructor(){this.promises={};this.h=null}};function rk(a,b){return b?tk(b):a?uk(a):Promise.resolve()}
function tk(a){return new Promise((b,c)=>{const d=rh("SCRIPT"),e=nk(a);$a(d,e);d.onload=()=>{th(d);b()};
d.onerror=()=>{th(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function uk(a){return new Promise(b=>{const c=rh("SCRIPT");if(a){var d=we(Ye(a,6,void 0,Xe));d=d===null||d===void 0?null:Xa(d)}else d=null;c.textContent=Ya(d);Za(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);th(c);b()})}
;function vk(a,b){return hf(a,1,ve(b))}
function wk(a,b){return hf(a,2,ve(b))}
var xk=class extends G{constructor(a){super(a)}};async function yk(a,b,c,d=ok(),e=Promise.resolve(void 0),f){await 0;let g;for(;;){let h=null;if(g){zk(a,7);try{h=await Ak(g.snapshot({}),f.ue,()=>Promise.resolve("E:CTO"))}catch(m){h="E:UCE"}}let k;
const l=new Qh(g?f.Ce:f.De,f.Ee,f.Fe,f.Be);for(let m=1;m<=f.maxAttempts;m++){if(m!==1){zk(a,0);a.h=new Bk(l.getValue(),f.Jc,f.Od);const n=await a.h.promise;a.h=void 0;n===1?(m=1,l.reset()):Rh(l)}try{let n;c?n=c:(zk(a,5),n=await Ak(Ck(b,d.h,h),f.Me,()=>Promise.reject(Error("RGF:Fetch timed out"))));
zk(a,3);await Ak(sk(d,n),f.bf,()=>Promise.reject(Error("DTZ:Script timed out")));
zk(a,8);await e;const u=new mk({challenge:n,Fb:a.options.Fb,Rd:a.options.Rd});await Ak(u.Jb,f.zf,()=>Promise.reject(Error("QEG:Setup timed out")));
k=u;break}catch(n){a.handleError(n),Dk(a)}}if(a.G)break;k&&(c=void 0,Ek(a,g),g=k,Fk(a,k),Dk(a));zk(a,2);a.h=new Bk(f.Ed,f.Jc,f.Od);a.isPaused&&a.h.pause();await a.h.promise;a.h=void 0;if(a.G)break}g?.dispose()}
function Gk(a){a.D=Error("Cancelled by dispose");a.u.resolve();ac(a.A.promise);a.A.reject(Error("Cancelled by dispose"));a.logger.dispose();Promise.all(a.o).then(async()=>{a.i?.dispose();a.i=void 0});
a.o=[];a.h?.i();ac(a.j.promise);a.j.reject(Error("Cancelled by dispose"))}
function Hk(a,b){const c=a.Ac;a.Ac=()=>{c();b()}}
function Fk(a,b){a.G||(a.i=b,a.logger.update(b.bc()),a.u.resolve(),a.A.resolve(void 0),a.Ac())}
function Ek(a,b){b&&(Promise.all(a.o).then(()=>void b.dispose()),a.o=[])}
function zk(a,b){a.K=b;a.options.ti?.(b)}
function Dk(a){a.G||(a.j.resolve(),a.j=new kk)}
var Kk=class extends y{constructor(a){super();this.options=a;this.A=new kk;this.Jb=this.A.promise;this.u=new kk;this.K=1;this.j=new kk;this.o=[];this.isPaused=!1;this.Ac=a.Ac||(()=>{});
this.logger=new Xj(lk(a.Fb||{}));yk(this,a.Oa,a.Se,a.Ei,a.Gi,{...Ik,...(a.Mb||{})});this.addOnDisposeCallback(()=>void Gk(this))}async snapshot(a){if(this.G)throw Error("Already disposed");
this.i||this.D||await this.u.promise;if(this.i)return await this.i.snapshot(a);throw this.D;}pause(){this.G||this.isPaused||(this.isPaused=!0,this.h&&this.h.pause())}resume(){!this.G&&this.isPaused&&(this.isPaused=!1,this.h&&this.h.resume())}async checkForRefresh(){if(this.G)throw Error("Already disposed");if(this.h){var a=this.h;a.isExpired()?(Jk(a),a.Fc(0),a=!0):a=!1;a&&await this.j.promise}else await this.j.promise}async F(){if(this.G)throw Error("Already disposed");this.h?.i();await this.j.promise}Wb(a){this.i?.Wb?.(a)}jc(a,
b){return this.i?.jc?.(a,b)??Promise.resolve()}handleError(a){this.G||(this.D=a,this.u.resolve(),this.options.yc?.(a))}bc(){return this.logger.share()}},Ik={Ed:432E5,Jc:3E5,Od:10,ue:1E4,Me:3E4,bf:3E4,zf:6E4,De:1E3,Ce:6E4,Ee:6E5,Fe:.25,Be:2,maxAttempts:10};function Ak(a,b,c){let d;const e=new Promise(f=>{d=setTimeout(f,b)});
return Promise.race([a.finally(()=>void clearTimeout(d)),
e.then(c)])}
function Lk(a,b){a.endTimeMs=Date.now()+b;a.tick()}
function Jk(a){a.h&&(clearTimeout(a.h),a.h=null)}
class Bk{constructor(a,b,c){this.endTimeMs=0;this.h=null;this.isPaused=!1;this.tick=()=>{if(!this.isPaused){var d=this.endTimeMs-Date.now();d<=this.j?(this.h=null,this.Fc(0)):this.h=setTimeout(this.tick,Math.min(d,this.Jc))}};
this.Jc=b;this.j=c;this.promise=new Promise(d=>{this.Fc=d});
Lk(this,a)}pause(){this.isPaused||(this.isPaused=!0,Jk(this))}resume(){this.isPaused&&(this.isPaused=!1,this.tick())}i(){Jk(this);this.endTimeMs=0;this.isPaused=!1;this.Fc(1)}isExpired(){return Date.now()>this.endTimeMs}};function Mk(a,b){try{return globalThis.sessionStorage.setItem(a,b),!0}catch(c){return!1}}
const Nk=Math.imul??((a,b)=>a*b|0);
function Ok(a,b=0,c=a.length,d){let e=0;for(d&&(e=Ok(d));b<c;b++)e=Nk(31,e)+(typeof a==="string"?a.charCodeAt(b):a[b])|0;return e}
const Pk=[196,200,224,18];function Qk(a){const [b,c]=[Ok(a,0,a.length>>1,Pk),Ok(a,a.length>>1)];return b.toString(16)+c.toString(16)}
function Rk(a,b){var c=[Ok(b,0,b.length>>1,void 0),Ok(b,b.length>>1)];a=new Uint32Array(a.buffer);b=a[0];const [d,e]=c;for(c=1;c<a.length;c+=2){var f=b,g=c,h=d,k=e;for(let l=0;l<22;l++)g=g>>>8|g<<24,g+=f|0,g^=h+38293,f=f<<3|f>>>29,f^=g,k=k>>>8|k<<24,k+=h|0,k^=l+38293,h=h<<3|h>>>29,h^=k;f=[f,g];a[c]^=f[0];c+1<a.length&&(a[c+1]^=f[1])}}
function Sk(a,b,c,d,e){const f=(4-(Pk.length+c.length)%4)%4,g=new Uint8Array(4+f+Pk.length+4+c.length),h=new DataView(g.buffer);let k=0;h.setUint32(k,Math.random()*4294967295);k=k+4+f;g.set(Pk,k);k+=Pk.length;h.setUint32(k,e);g.set(c,k+4);Rk(g,d);return a.oa(b,l=>void globalThis.sessionStorage.removeItem(l))?Mk(b,Uc(g))?"s":"t":"i"}
function Tk(a,b){var c=globalThis.sessionStorage.getItem(a);if(!c)return["m"];let d;try{d=Wc(c),Rk(d,b)}catch(e){return globalThis.sessionStorage.removeItem(a),["c"]}for(b=4;b<7&&d[b]===0;)b++;for(c=0;c<Pk.length;c++)if(d[b++]!==Pk[c])return globalThis.sessionStorage.removeItem(a),["d"];c=(new DataView(d.buffer)).getUint32(b);return Math.floor(Date.now()/1E3)>=c?(globalThis.sessionStorage.removeItem(a),["e"]):["a",new Uint8Array(d.buffer,b+4)]}
function Uk(a){var b=globalThis.sessionStorage.getItem("iU5q-!O9@$");if(!b)return new Vk(a);var c=b.split(",");if(c.length<2)return globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new Vk(a);b=c.slice(1);b.length===1&&b[0]===""&&(b=[]);c=Number(c[0]);return isNaN(c)||c<0||c>b.length?(globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new Vk(a)):new Vk(a,c,b)}
class Vk{constructor(a,b=0,c=[]){this.maxItems=a;this.h=b;this.i=c}serialize(){return String(this.h)+","+this.i.join()}oa(a,b){let c=void 0;if(this.i[this.h]!==a){const d=this.i.indexOf(a);d!==-1?(this.i.splice(d,1),d<this.h&&this.h--,this.i.splice(this.h,0,a)):(c=this.i[this.h],this.i[this.h]=a)}this.h=(this.h+1)%this.maxItems;a=Mk("iU5q-!O9@$",this.serialize());c&&a&&b(c);return a}}
var Tb=class{constructor(a,b){this.logger=b;try{var c=globalThis.sessionStorage&&!!globalThis.sessionStorage.getItem&&!!globalThis.sessionStorage.setItem&&!!globalThis.sessionStorage.removeItem}catch(d){c=!1}c&&(this.index=Uk(a))}h(a,b,c,d){const e=this.index?Uj(this.logger,()=>Sk(this.index,Qk(a),b,c,d),"W"):"u";
this.logger.F(e)}i(a,b){const [c,d]=this.index?Uj(this.logger,()=>Tk(Qk(a),b),"R"):["u"];
this.logger.u(c);return d}};var Wk={toString:function(a){let b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);a>0;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Xk(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Yk(a);let c=2654435769,d=2654435769,e=314159265;const f=a.length;let g=f,h=0;for(;g>=12;g-=12,h+=12)c+=Zk(a,h),d+=Zk(a,h+4),e+=Zk(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Wk.toString(e)}
function Yk(a){const b=[];for(let c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Zk(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function $k(a,b){const c=setTimeout(()=>{a.j.resolve()},b);
a.addOnDisposeCallback(()=>void clearTimeout(c))}
var al=class extends y{constructor(a){super();this.logger=a;this.j=new kk}xc(a,b){const c=this.eb(a);b?.(c);return Uj(this.logger,()=>Uc(c,2),this.i)}Xc(a,b,c){return Uj(this.logger,()=>b?this.xc(a,c):this.eb(a,c),this.h)}},bl=class extends al{constructor(a,b,c,d){super(a);
this.o=b;this.A=c;this.h="m";this.i="x";this.u=0;$k(this,d)}eb(a,b){this.logger.h(this.h);++this.u>=this.A&&this.j.resolve();const c=a();a=Uj(this.logger,()=>this.o(c),"C");
if(a===void 0)throw new x(17,"YNJ:Undefined");if(!(a instanceof Uint8Array))throw new x(18,"ODM:Invalid");b?.(a);return a}},cl=class extends al{constructor(a,b,c){super(a);this.o=b;this.h="f";this.i="z";$k(this,c)}eb(){return this.o}},dl=class extends al{constructor(a,b,c){super(a);this.o=b;this.h="w";this.i="z";$k(this,c)}eb(){return Uj(this.logger,()=>Wc(this.o),"d")}xc(){return this.o}};
function el(a,b){var c=`${b(a.error.message)}:${b(a.error.stack)}`.substring(0,2048);b=c.length+1;c=fl(c);const d=new Uint8Array(4+c.length);d.set([42,b&127|128,b>>7,a.error.code]);d.set(c,4);return d}
var gl=class extends al{constructor(a,b){super(a);this.error=b;this.h="e";this.i="y"}eb(){if(this.o)return this.o;this.o=el(this,a=>"_"+Xk(a));
return el(this,a=>a)}},hl=class extends al{constructor(a,b){super(a);
this.clientState=b;this.h="S";this.i="q"}eb(){var a=Math.floor(Date.now()/1E3),b=[Math.random()*255,Math.random()*255],c=b.concat([0,this.clientState],[a>>24&255,a>>16&255,a>>8&255,a&255]);a=new Uint8Array(2+c.length);a[0]=34;a[1]=c.length;a.set(c,2);c=a.subarray(2);b=b.length;for(let d=b;d<c.length;++d)c[d]^=c[d%b];this.logger.K(this.clientState);return a}};function fl(a){return globalThis.TextEncoder?(new TextEncoder).encode(a):uc(a)}
;var il={Ne:3E4,Cf:2E4};function Ub(a,b){a.logger.ta(b.code);a.onError(b);return b}
async function jl(a){let b=void 0;a.j++;const c=new kk;a.vm instanceof Kk&&a.vm.o.push(c.promise);if(a.kd){const f=new kk;setTimeout(()=>void f.resolve());
await f.promise}const d=a.logger.share();try{a.state=5;const f=[],g=await Ak(a.vm.snapshot({Ka:{},Ud:f}),a.Mb.Cf,()=>Promise.reject(new x(15,"MDA:Timeout")));
if(a.G)throw new x(a.h?20:32,"MDA:Disposed");const h=f[0];a.state=6;const k=await Ak(kl(a.Oa,g),a.Mb.Ne,()=>Promise.reject(new x(10,"BWB:Timeout")));
if(a.G)throw new x(a.h?20:32,"BWB:Disposed");a.state=7;b=Uj(d,()=>{const l=ll(a,k,c,h);l.j.promise.then(()=>void a.o());
return l},"i")}catch(f){b?.dispose();
if(!a.i){const g=ml(a,f);c.resolve();var e;if(e=a.vm instanceof Kk&&a.j<2)a:if(f instanceof x)e=f.code!==32&&f.code!==20&&f.code!==10;else{if(f instanceof Cj)switch(f.code){case 2:case 13:case 14:case 4:break;default:e=!1;break a}e=!0}if(e){const h=setTimeout(()=>void a.o(),(1+Math.random()*.25)*(a.h?6E4:1E3));
a.addOnDisposeCallback(()=>void clearTimeout(h));
return}a.i=g}d.ta(a.h?13:14);a.Ib.reject(a.i);return}finally{d.dispose()}a.state=8;a.j=0;a.h?.dispose();a.h=b;a.Ib.resolve()}
function ml(a,b){if(!(b instanceof x))if(b instanceof Cj){const c=Error(b.toString());c.stack=b.stack;b=new x(11,"EBH:Error",c)}else b=new x(12,"BSO:Unknown",b);return Ub(a,b)}
function ll(a,b,c,d){const e=(ie(Ye(b,2))??0)*1E3;if(e<=0)throw new x(31,"TTM:Invalid");if(rf(b,4))return new dl(a.logger,rf(b,4),e);if(!(ie(Ye(b,3))??0))return new cl(a.logger,gd(ef(b)),e);if(!d)throw new x(4,"PMD:Undefined");d=d(gd(ef(b)));if(typeof d!=="function")throw new x(16,"APF:Failed");a.u=Math.floor((Date.now()+e)/1E3);a=new bl(a.logger,d,ie(Ye(b,3))??0,e);a.addOnDisposeCallback(()=>void c.resolve());
return a}
function nl(a,b,c){try{if(a.G)throw new x(21,"BNT:disposed");if(!a.h&&a.i)throw a.i;return ol(a,b,c)??pl(a,b,c)??ql(a,b,c)}catch(d){if(!b.kf)throw rl(a,d);return sl(a,c,d)}}
function rl(a,b){b=b instanceof x?b:new x(5,"TVD:error",b);return Ub(a,b)}
function ol(a,b,c){return a.h?.Xc(()=>tl(a,b),c,d=>{if(a.h instanceof bl&&b.fc?.Df)try{a.cache?.h(tl(a,b),d,b.fc.nd,a.u-120)}catch(e){Ub(a,new x(24,"ELX:write",e))}})}
function pl(a,b,c){if(b.fc?.je)try{const d=a.cache?.i(tl(a,b),b.fc.nd);return d?c?Uj(a.logger,()=>Uc(d,2),"a"):d:void 0}catch(d){Ub(a,new x(23,"RXO:read",d))}}
function ql(a,b,c){const d={stack:[],error:void 0,jb:!1};try{if(!b.jf)throw new x(29,"SDF:notready");return za(d,new hl(a.logger,a.state)).Xc(()=>tl(a,b),c)}catch(e){d.error=e,d.jb=!0}finally{Aa(d)}}
function sl(a,b,c){const d={stack:[],error:void 0,jb:!1};try{const e=rl(a,c);return za(d,new gl(a.logger,e)).Xc(()=>[],b)}catch(e){d.error=e,d.jb=!0}finally{Aa(d)}}
function tl(a,b){return b.Oc?b.Oc:b.Ka?Uj(a.logger,()=>b.Oc=fl(b.Ka),"c"):[]}
class ul extends y{constructor(a){super();this.Ib=new kk;this.j=0;this.i=void 0;this.state=2;this.vm=a.vm;this.Oa=a.Oa;this.Mb={...il,...(a.Mb||{})};this.logger=a.vm.bc();this.onError=a.onError??(()=>{});
this.kd=a.kd||!1;if(vl(a)){const d=this.vm;this.o=()=>d.F().catch(e=>{this.i=e=Ub(this,new x(this.h?20:32,"TRG:Disposed",e));this.h?.dispose();this.h=void 0;this.Ib.reject(e)});
Hk(d,()=>void jl(this));
d.K===2&&jl(this)}else this.o=a.si,jl(this);const b=this.logger.share();b.h("o");const c=new Tj(b,"o");this.Ib.promise.then(()=>{c.done();b.i();b.dispose()},()=>void b.dispose());
this.addOnDisposeCallback(()=>{this.h?(this.h.dispose(),this.h=void 0):this.i?this.logger.i():(this.i=Ub(this,new x(32,"TNP:Disposed")),this.logger.i(),this.Ib.reject(this.i))});
Nb(this,this.logger)}eb(a){return nl(this,{...a},!1)}xc(a){return nl(this,{...a},!0)}}const vl=function(a){return Dd(b=>{if(!Jd(b))return!1;for(const [c,d]of Object.entries(a)){const e=c,f=d;if(!(e in b)){if(f.ki===!0)continue;return!1}if(!f(b[e]))return!1}return!0})}({vm:function(a){return Dd(b=>b instanceof a)}(Kk)},"");var yl=class{constructor(){if(!wl){wl=new zj(new xl);var a=I("client_streamz_web_flush_count",-1);a!==-1&&(wl.j=a)}this.i=a=wl;hc(a,"/client_streamz/youtube/aba/gac",cc("type"),cc("sequence"))}h(a,b){ic(this.i,"/client_streamz/youtube/aba/gac",[a,b])}};var zl=window;function Al(a){var b=Bl;if(b)for(const c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Cl(){const a=[];Al(b=>{a.push(b)});
return a}
;var Bl={Nf:"allow-forms",Of:"allow-modals",Pf:"allow-orientation-lock",Qf:"allow-pointer-lock",Rf:"allow-popups",Sf:"allow-popups-to-escape-sandbox",Tf:"allow-presentation",Uf:"allow-same-origin",Vf:"allow-scripts",Wf:"allow-top-navigation",Xf:"allow-top-navigation-by-user-activation"};const Dl=cj(()=>Cl());
function El(){const a=document.createElement("iframe"),b={};gb(Dl(),c=>{a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Fl(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;let Gl=(new Date).getTime();var Hl=ug(class extends G{constructor(a){super(a)}});function Il(){var a=Jl;Kl.instance||(Kl.instance=new Kl(a));return Kl.instance}
function Ll(a,b){return a.u?a.u:a.u=new Promise(async c=>{const d=window.AbortController?new window.AbortController:void 0,e=d?.signal;let f=!1;try{d&&(a.j=a.Ha.va(()=>{d.abort()},b||2E4)),await fetch("/generate_204",{method:"HEAD",
signal:e}),f=!0}catch{f=!1}finally{a.u=void 0,a.j&&(a.Ha.wa(a.j),a.j=0),f!==a.h&&(a.h=f,a.h?Oi(a,"networkstatus-online"):Oi(a,"networkstatus-offline")),c(f)}})}
function Ml(a){a.A=a.Ha.va(async()=>{a.h?window.navigator?.onLine||await Ll(a):await Ll(a);Ml(a)},3E4)}
var Kl=class extends Ni{constructor(a){super();this.A=this.j=0;this.Ha=a??{va:(b,c)=>setTimeout(b,c),
wa:b=>{clearTimeout(b)}};
this.h=window.navigator?.onLine??!0;this.o=async()=>{await Ll(this)};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||Ml(this)}dispose(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ha.wa(this.A);delete Kl.instance}ya(){return this.h}};function Nl(a){a.h===-1&&(a.h=a.data.reduce((b,c,d)=>b+(c?2**d:0),0));
return a.h}
var Ol=class{constructor(){this.data=[];this.h=-1}set(a,b=!0){0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)}get(a){return!!this.data[a]}};function Pl(){this.blockSize=-1}
;function Ql(a,b,c){c||(c=0);const d=a.P;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];let f=a.h[3],g=a.h[4];let h;for(let l=0;l<80;l++){if(l<40)if(l<20){var k=f^c&(e^f);h=1518500249}else k=c^e^f,h=1859775393;else l<60?(k=c&e|f&(c|e),h=2400959708):
(k=c^e^f,h=3395469782);k=(b<<5|b>>>27)+k+g+h+d[l]&4294967295;g=f;f=e;e=(c<<30|c>>>2)&4294967295;c=b;b=k}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
class Rl extends Pl{constructor(){super();this.blockSize=64;this.h=[];this.u=[];this.P=[];this.j=[];this.j[0]=128;for(let a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}reset(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0}update(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Ql(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=
a.charCodeAt(d),++f,++d,f==this.blockSize){Ql(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ql(this,e);f=0;break}}this.i=f;this.o+=b}}digest(){const a=[];var b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Ql(this,this.u);b=0;for(c=0;c<5;c++)for(let d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a}};function Sl(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Tl(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ul(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Sl(a).match(/\S+/g)||[],b=fb(a,b)>=0);return b}
function Vl(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ul(a,"inverted-hdpi")&&Tl(a,Array.prototype.filter.call(a.classList?a.classList:Sl(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Wl(){}
Wl.prototype.next=function(){return Xl};
const Xl={done:!0,value:void 0};Wl.prototype.rb=function(){return this};function Yl(a){if(a instanceof Zl||a instanceof $l||a instanceof am)return a;if(typeof a.next=="function")return new Zl(()=>a);
if(typeof a[Symbol.iterator]=="function")return new Zl(()=>a[Symbol.iterator]());
if(typeof a.rb=="function")return new Zl(()=>a.rb());
throw Error("Not an iterator or iterable.");}
class Zl{constructor(a){this.h=a}rb(){return new $l(this.h())}[Symbol.iterator](){return new am(this.h())}i(){return new am(this.h())}}class $l extends Wl{constructor(a){super();this.h=a}next(){return this.h.next()}[Symbol.iterator](){return new am(this.h)}i(){return new am(this.h)}}class am extends Zl{constructor(a){super(()=>a);
this.j=a}next(){return this.j.next()}};function J(a){y.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.A=!!a}
ua(J,y);r=J.prototype;r.subscribe=function(a,b,c){let d=this.i[a];d||(d=this.i[a]=[]);const e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){const d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.dc(a)}return!1};
r.dc=function(a){const b=this.h[a];if(b){const c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=()=>{}):(c&&lb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.qb=function(a,b){var c=this.i[a];if(c){const e=Array(arguments.length-1);var d=arguments.length;let f;for(f=1;f<d;f++)e[f-1]=arguments[f];if(this.A)for(f=0;f<c.length;f++)d=c[f],bm(this.h[d+1],this.h[d+2],e);else{this.o++;try{for(f=0,d=c.length;f<d&&!this.G;f++){const g=c[f];this.h[g+1].apply(this.h[g+2],e)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.dc(c)}}return f!=0}return!1};
function bm(a,b,c){$i(function(){a.apply(b,c)})}
r.clear=function(a){if(a){const b=this.i[a];b&&(b.forEach(this.dc,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.aa=function(){J.Ea.aa.call(this);this.clear();this.j.length=0};function cm(a){this.h=a}
cm.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Dj).serialize(b))};
cm.prototype.get=function(a){let b;try{b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
cm.prototype.remove=function(a){this.h.remove(a)};function dm(a){this.h=a}
ua(dm,cm);function em(a){this.data=a}
function fm(a){return a===void 0||a instanceof em?a:new em(a)}
dm.prototype.set=function(a,b){dm.Ea.set.call(this,a,fm(b))};
dm.prototype.i=function(a){a=dm.Ea.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
dm.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function gm(a){this.h=a}
ua(gm,dm);gm.prototype.set=function(a,b,c){if(b=fm(b)){if(c){if(c<sa()){gm.prototype.remove.call(this,a);return}b.expiration=c}b.creation=sa()}gm.Ea.set.call(this,a,b)};
gm.prototype.i=function(a){const b=gm.Ea.i.call(this,a);if(b){const c=b.creation,d=b.expiration;if(d&&d<sa()||c&&c>sa())gm.prototype.remove.call(this,a);else return b}};function hm(){}
;function im(){}
ua(im,hm);im.prototype[Symbol.iterator]=function(){return Yl(this.rb(!0)).i()};
im.prototype.clear=function(){const a=Array.from(this);for(const b of a)this.remove(b)};function jm(a){this.h=a;this.i=null}
ua(jm,im);r=jm.prototype;r.isAvailable=function(){if(this.i===null){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
r.set=function(a,b){km(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){km(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){km(this);this.h.removeItem(a)};
r.rb=function(a){km(this);var b=0,c=this.h,d=new Wl;d.next=function(){if(b>=c.length)return Xl;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){km(this);this.h.clear()};
r.key=function(a){km(this);return this.h.key(a)};
function km(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");a.isAvailable()||tc(Error("Storage mechanism: Storage unavailable"))}
;function lm(){let a=null;try{a=t.localStorage||null}catch(b){}jm.call(this,a)}
ua(lm,jm);function mm(a,b){this.i=a;this.h=b+"::"}
ua(mm,im);mm.prototype.set=function(a,b){this.i.set(this.h+a,b)};
mm.prototype.get=function(a){return this.i.get(this.h+a)};
mm.prototype.remove=function(a){this.i.remove(this.h+a)};
mm.prototype.rb=function(a){const b=this.i[Symbol.iterator](),c=this,d=new Wl;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};function nm(a){if(a.ab&&typeof a.ab=="function")return a.ab();if(typeof Map!=="undefined"&&a instanceof Map||typeof Set!=="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a==="string")return a.split("");if(ka(a)){const b=[],c=a.length;for(let d=0;d<c;d++)b.push(a[d]);return b}return dh(a)}
function om(a){if(a.Ub&&typeof a.Ub=="function")return a.Ub();if(!a.ab||typeof a.ab!="function"){if(typeof Map!=="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!=="undefined"&&a instanceof Set)){if(ka(a)||typeof a==="string"){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(const d in a)b[c++]=d;return b}}}
function pm(a,b,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(b,c);else if(ka(a)||typeof a==="string")Array.prototype.forEach.call(a,b,c);else{const d=om(a),e=nm(a),f=e.length;for(let g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}}
;function qm(a){this.i=this.A=this.j="";this.D=null;this.u=this.h="";this.o=!1;let b;a instanceof qm?(this.o=a.o,rm(this,a.j),this.A=a.A,this.i=a.i,sm(this,a.D),this.h=a.h,tm(this,a.P.clone()),this.u=a.u):a&&(b=String(a).match(wb))?(this.o=!1,rm(this,b[1]||"",!0),this.A=um(b[2]||""),this.i=um(b[3]||"",!0),sm(this,b[4]),this.h=um(b[5]||"",!0),tm(this,b[6]||"",!0),this.u=um(b[7]||"")):(this.o=!1,this.P=new wm(null,this.o))}
qm.prototype.toString=function(){const a=[];var b=this.j;b&&a.push(xm(b,ym,!0),":");var c=this.i;if(c||b=="file")a.push("//"),(b=this.A)&&a.push(xm(b,ym,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.D,c!=null&&a.push(":",String(c));if(c=this.h)this.i&&c.charAt(0)!="/"&&a.push("/"),a.push(xm(c,c.charAt(0)=="/"?zm:Am,!0));(c=this.P.toString())&&a.push("?",c);(c=this.u)&&a.push("#",xm(c,Bm));return a.join("")};
qm.prototype.resolve=function(a){const b=this.clone();let c=!!a.j;c?rm(b,a.j):c=!!a.A;c?b.A=a.A:c=!!a.i;c?b.i=a.i:c=a.D!=null;var d=a.h;if(c)sm(b,a.D);else if(c=!!a.h){if(d.charAt(0)!="/")if(this.i&&!this.h)d="/"+d;else{var e=b.h.lastIndexOf("/");e!=-1&&(d=b.h.slice(0,e+1)+d)}e=d;if(e==".."||e==".")d="";else if(e.indexOf("./")!=-1||e.indexOf("/.")!=-1){d=e.lastIndexOf("/",0)==0;e=e.split("/");const f=[];for(let g=0;g<e.length;){const h=e[g++];h=="."?d&&g==e.length&&f.push(""):h==".."?((f.length>1||
f.length==1&&f[0]!="")&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.h=d:c=a.P.toString()!=="";c?tm(b,a.P.clone()):c=!!a.u;c&&(b.u=a.u);return b};
qm.prototype.clone=function(){return new qm(this)};
function rm(a,b,c){a.j=c?um(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function sm(a,b){if(b){b=Number(b);if(isNaN(b)||b<0)throw Error("Bad port number "+b);a.D=b}else a.D=null}
function tm(a,b,c){b instanceof wm?(a.P=b,Cm(a.P,a.o)):(c||(b=xm(b,Dm)),a.P=new wm(b,a.o))}
function um(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function xm(a,b,c){return typeof a==="string"?(a=encodeURI(a).replace(b,Em),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Em(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var ym=/[#\/\?@]/g,Am=/[#\?:]/g,zm=/[#\?]/g,Dm=/[#\?@]/g,Bm=/#/g;function wm(a,b){this.i=this.h=null;this.j=a||null;this.o=!!b}
function Fm(a){a.h||(a.h=new Map,a.i=0,a.j&&Cb(a.j,function(b,c){a.add(ub(b),c)}))}
r=wm.prototype;r.add=function(a,b){Fm(this);this.j=null;a=Gm(this,a);let c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i=this.i+1;return this};
r.remove=function(a){Fm(this);a=Gm(this,a);return this.h.has(a)?(this.j=null,this.i=this.i-this.h.get(a).length,this.h.delete(a)):!1};
r.clear=function(){this.h=this.j=null;this.i=0};
function Hm(a,b){Fm(a);b=Gm(a,b);return a.h.has(b)}
r.forEach=function(a,b){Fm(this);this.h.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};
r.Ub=function(){Fm(this);const a=Array.from(this.h.values()),b=Array.from(this.h.keys()),c=[];for(let d=0;d<b.length;d++){const e=a[d];for(let f=0;f<e.length;f++)c.push(b[d])}return c};
r.ab=function(a){Fm(this);let b=[];if(typeof a==="string")Hm(this,a)&&(b=b.concat(this.h.get(Gm(this,a))));else{a=Array.from(this.h.values());for(let c=0;c<a.length;c++)b=b.concat(a[c])}return b};
r.set=function(a,b){Fm(this);this.j=null;a=Gm(this,a);Hm(this,a)&&(this.i=this.i-this.h.get(a).length);this.h.set(a,[b]);this.i=this.i+1;return this};
r.get=function(a,b){if(!a)return b;a=this.ab(a);return a.length>0?String(a[0]):b};
r.toString=function(){if(this.j)return this.j;if(!this.h)return"";const a=[],b=Array.from(this.h.keys());for(let d=0;d<b.length;d++){var c=b[d];const e=encodeURIComponent(String(c));c=this.ab(c);for(let f=0;f<c.length;f++){let g=e;c[f]!==""&&(g+="="+encodeURIComponent(String(c[f])));a.push(g)}}return this.j=a.join("&")};
r.clone=function(){const a=new wm;a.j=this.j;this.h&&(a.h=new Map(this.h),a.i=this.i);return a};
function Gm(a,b){b=String(b);a.o&&(b=b.toLowerCase());return b}
function Cm(a,b){b&&!a.o&&(Fm(a),a.j=null,a.h.forEach(function(c,d){const e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),c.length>0&&(this.j=null,this.h.set(Gm(this,e),mb(c)),this.i=this.i+c.length))},a));
a.o=b}
r.extend=function(a){for(let b=0;b<arguments.length;b++)pm(arguments[b],function(c,d){this.add(d,c)},this)};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let L={};var Im=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";L.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
L.dd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Jm={sb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
qd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Km={sb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
qd:function(a){return[].concat.apply([],a)}};
L.yf=function(){Im?(L.pb=Uint8Array,L.Ma=Uint16Array,L.Yd=Int32Array,L.assign(L,Jm)):(L.pb=Array,L.Ma=Array,L.Yd=Array,L.assign(L,Km))};
L.yf();var Lm=!0;try{new Uint8Array(1)}catch(a){Lm=!1}
function Mm(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new L.pb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;let Nm={};Nm=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};let Om={};for(var Pm,Qm=[],Rm=0;Rm<256;Rm++){Pm=Rm;for(var Sm=0;Sm<8;Sm++)Pm=Pm&1?3988292384^Pm>>>1:Pm>>>1;Qm[Rm]=Pm}Om=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Qm[(a^b[d])&255];return a^-1};let Tm={};Tm={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Um(a){for(var b=a.length;--b>=0;)a[b]=0}
var Vm=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Wm=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Xm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ym=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Zm=Array(576);Um(Zm);var $m=Array(60);Um($m);var an=Array(512);Um(an);var bn=Array(256);Um(bn);var cn=Array(29);Um(cn);var dn=Array(30);Um(dn);function en(a,b,c,d,e){this.Ld=a;this.Le=b;this.Ke=c;this.ze=d;this.ff=e;this.td=a&&a.length}
var fn,gn,hn;function jn(a,b){this.pd=a;this.Eb=0;this.fb=b}
function kn(a,b){a.da[a.pending++]=b&255;a.da[a.pending++]=b>>>8&255}
function ln(a,b,c){a.ia>16-c?(a.sa|=b<<a.ia&65535,kn(a,a.sa),a.sa=b>>16-a.ia,a.ia+=c-16):(a.sa|=b<<a.ia&65535,a.ia+=c)}
function mn(a,b,c){ln(a,c[b*2],c[b*2+1])}
function nn(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function on(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=nn(d[e]++,e))}
function pn(a){var b;for(b=0;b<286;b++)a.xa[b*2]=0;for(b=0;b<30;b++)a.ib[b*2]=0;for(b=0;b<19;b++)a.ma[b*2]=0;a.xa[512]=1;a.Ta=a.Kb=0;a.Ca=a.matches=0}
function qn(a){a.ia>8?kn(a,a.sa):a.ia>0&&(a.da[a.pending++]=a.sa);a.sa=0;a.ia=0}
function rn(a,b,c){qn(a);kn(a,c);kn(a,~c);L.sb(a.da,a.window,b,c,a.pending);a.pending+=c}
function sn(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function tn(a,b,c){for(var d=a.ea[c],e=c<<1;e<=a.Ra;){e<a.Ra&&sn(b,a.ea[e+1],a.ea[e],a.depth)&&e++;if(sn(b,d,a.ea[e],a.depth))break;a.ea[c]=a.ea[e];c=e;e<<=1}a.ea[c]=d}
function un(a,b,c){var d=0;if(a.Ca!==0){do{var e=a.da[a.Rb+d*2]<<8|a.da[a.Rb+d*2+1];var f=a.da[a.Tc+d];d++;if(e===0)mn(a,f,b);else{var g=bn[f];mn(a,g+256+1,b);var h=Vm[g];h!==0&&(f-=cn[g],ln(a,f,h));e--;g=e<256?an[e]:an[256+(e>>>7)];mn(a,g,c);h=Wm[g];h!==0&&(e-=dn[g],ln(a,e,h))}}while(d<a.Ca)}mn(a,256,b)}
function vn(a,b){var c=b.pd,d=b.fb.Ld,e=b.fb.td,f=b.fb.ze,g,h=-1;a.Ra=0;a.Ab=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ea[++a.Ra]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Ra<2;){var k=a.ea[++a.Ra]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ta--;e&&(a.Kb-=d[k*2+1])}b.Eb=h;for(g=a.Ra>>1;g>=1;g--)tn(a,c,g);k=f;do g=a.ea[1],a.ea[1]=a.ea[a.Ra--],tn(a,c,1),d=a.ea[1],a.ea[--a.Ab]=g,a.ea[--a.Ab]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ea[1]=k++,tn(a,c,1);while(a.Ra>=
2);a.ea[--a.Ab]=a.ea[1];g=b.pd;k=b.Eb;d=b.fb.Ld;e=b.fb.td;f=b.fb.Le;var l=b.fb.Ke,m=b.fb.ff,n,u=0;for(n=0;n<=15;n++)a.Na[n]=0;g[a.ea[a.Ab]*2+1]=0;for(b=a.Ab+1;b<573;b++){var p=a.ea[b];n=g[g[p*2+1]*2+1]+1;n>m&&(n=m,u++);g[p*2+1]=n;if(!(p>k)){a.Na[n]++;var z=0;p>=l&&(z=f[p-l]);var D=g[p*2];a.Ta+=D*(n+z);e&&(a.Kb+=D*(d[p*2+1]+z))}}if(u!==0){do{for(n=m-1;a.Na[n]===0;)n--;a.Na[n]--;a.Na[n+1]+=2;a.Na[m]--;u-=2}while(u>0);for(n=m;n!==0;n--)for(p=a.Na[n];p!==0;)d=a.ea[--b],d>k||(g[d*2+1]!==n&&(a.Ta+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),p--)}on(c,h,a.Na)}
function wn(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ma[l*2]+=g:l!==0?(l!==e&&a.ma[l*2]++,a.ma[32]++):g<=10?a.ma[34]++:a.ma[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function xn(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do mn(a,l,a.ma);while(--g!==0)}else l!==0?(l!==e&&(mn(a,l,a.ma),g--),mn(a,16,a.ma),ln(a,g-3,2)):g<=10?(mn(a,17,a.ma),ln(a,g-3,3)):(mn(a,18,a.ma),ln(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function yn(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.xa[c*2]!==0)return 0;if(a.xa[18]!==0||a.xa[20]!==0||a.xa[26]!==0)return 1;for(c=32;c<256;c++)if(a.xa[c*2]!==0)return 1;return 0}
var zn=!1;function An(a,b,c){a.da[a.Rb+a.Ca*2]=b>>>8&255;a.da[a.Rb+a.Ca*2+1]=b&255;a.da[a.Tc+a.Ca]=c&255;a.Ca++;b===0?a.xa[c*2]++:(a.matches++,b--,a.xa[(bn[c]+256+1)*2]++,a.ib[(b<256?an[b]:an[256+(b>>>7)])*2]++);return a.Ca===a.Vb-1}
;function Bn(a,b){a.msg=Tm[b];return b}
function Cn(a){for(var b=a.length;--b>=0;)a[b]=0}
function Dn(a){var b=a.state,c=b.pending;c>a.U&&(c=a.U);c!==0&&(L.sb(a.output,b.da,b.Xb,c,a.Gb),a.Gb+=c,b.Xb+=c,a.gd+=c,a.U-=c,b.pending-=c,b.pending===0&&(b.Xb=0))}
function En(a,b){var c=a.za>=0?a.za:-1,d=a.v-a.za,e=0;if(a.level>0){a.M.Mc===2&&(a.M.Mc=yn(a));vn(a,a.uc);vn(a,a.lc);wn(a,a.xa,a.uc.Eb);wn(a,a.ib,a.lc.Eb);vn(a,a.md);for(e=18;e>=3&&a.ma[Ym[e]*2+1]===0;e--);a.Ta+=3*(e+1)+5+5+4;var f=a.Ta+3+7>>>3;var g=a.Kb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)ln(a,b?1:0,3),rn(a,c,d);else if(a.strategy===4||g===f)ln(a,2+(b?1:0),3),un(a,Zm,$m);else{ln(a,4+(b?1:0),3);c=a.uc.Eb+1;d=a.lc.Eb+1;e+=1;ln(a,c-257,5);ln(a,d-1,5);ln(a,e-4,4);for(f=0;f<e;f++)ln(a,
a.ma[Ym[f]*2+1],3);xn(a,a.xa,c-1);xn(a,a.ib,d-1);un(a,a.xa,a.ib)}pn(a);b&&qn(a);a.za=a.v;Dn(a.M)}
function N(a,b){a.da[a.pending++]=b}
function Fn(a,b){a.da[a.pending++]=b>>>8&255;a.da[a.pending++]=b&255}
function Gn(a,b){var c=a.wd,d=a.v,e=a.Aa,f=a.yd,g=a.v>a.pa-262?a.v-(a.pa-262):0,h=a.window,k=a.gb,l=a.La,m=a.v+258,n=h[d+e-1],u=h[d+e];a.Aa>=a.sd&&(c>>=2);f>a.B&&(f=a.B);do{var p=b;if(h[p+e]===u&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Db=b;e=p;if(p>=f)break;n=h[d+e-1];u=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function Hn(a){var b=a.pa,c;do{var d=a.Wd-a.B-a.v;if(a.v>=b+(b-262)){L.sb(a.window,a.window,b,b,0);a.Db-=b;a.v-=b;a.za-=b;var e=c=a.sc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.La[--e],a.La[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.ra===0)break;e=a.M;c=a.window;f=a.v+a.B;var g=e.ra;g>d&&(g=d);g===0?c=0:(e.ra-=g,L.sb(c,e.input,e.mb,g,f),e.state.wrap===1?e.I=Nm(e.I,c,g,f):e.state.wrap===2&&(e.I=Om(e.I,c,g,f)),e.mb+=g,e.ob+=g,c=g);a.B+=c;if(a.B+a.oa>=3)for(d=a.v-a.oa,a.S=a.window[d],
a.S=(a.S<<a.Qa^a.window[d+1])&a.Pa;a.oa&&!(a.S=(a.S<<a.Qa^a.window[d+3-1])&a.Pa,a.La[d&a.gb]=a.head[a.S],a.head[a.S]=d,d++,a.oa--,a.B+a.oa<3););}while(a.B<262&&a.M.ra!==0)}
function In(a,b){for(var c;;){if(a.B<262){Hn(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.S=(a.S<<a.Qa^a.window[a.v+3-1])&a.Pa,c=a.La[a.v&a.gb]=a.head[a.S],a.head[a.S]=a.v);c!==0&&a.v-c<=a.pa-262&&(a.V=Gn(a,c));if(a.V>=3)if(c=An(a,a.v-a.Db,a.V-3),a.B-=a.V,a.V<=a.Vc&&a.B>=3){a.V--;do a.v++,a.S=(a.S<<a.Qa^a.window[a.v+3-1])&a.Pa,a.La[a.v&a.gb]=a.head[a.S],a.head[a.S]=a.v;while(--a.V!==0);a.v++}else a.v+=a.V,a.V=0,a.S=a.window[a.v],a.S=(a.S<<a.Qa^a.window[a.v+1])&a.Pa;else c=An(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(En(a,!1),a.M.U===0))return 1}a.oa=a.v<2?a.v:2;return b===4?(En(a,!0),a.M.U===0?3:4):a.Ca&&(En(a,!1),a.M.U===0)?1:2}
function Jn(a,b){for(var c,d;;){if(a.B<262){Hn(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.S=(a.S<<a.Qa^a.window[a.v+3-1])&a.Pa,c=a.La[a.v&a.gb]=a.head[a.S],a.head[a.S]=a.v);a.Aa=a.V;a.Bd=a.Db;a.V=2;c!==0&&a.Aa<a.Vc&&a.v-c<=a.pa-262&&(a.V=Gn(a,c),a.V<=5&&(a.strategy===1||a.V===3&&a.v-a.Db>4096)&&(a.V=2));if(a.Aa>=3&&a.V<=a.Aa){d=a.v+a.B-3;c=An(a,a.v-1-a.Bd,a.Aa-3);a.B-=a.Aa-1;a.Aa-=2;do++a.v<=d&&(a.S=(a.S<<a.Qa^a.window[a.v+3-1])&a.Pa,a.La[a.v&a.gb]=a.head[a.S],a.head[a.S]=a.v);
while(--a.Aa!==0);a.kb=0;a.V=2;a.v++;if(c&&(En(a,!1),a.M.U===0))return 1}else if(a.kb){if((c=An(a,0,a.window[a.v-1]))&&En(a,!1),a.v++,a.B--,a.M.U===0)return 1}else a.kb=1,a.v++,a.B--}a.kb&&(An(a,0,a.window[a.v-1]),a.kb=0);a.oa=a.v<2?a.v:2;return b===4?(En(a,!0),a.M.U===0?3:4):a.Ca&&(En(a,!1),a.M.U===0)?1:2}
function Kn(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){Hn(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.V=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.V=258-(e-d);a.V>a.B&&(a.V=a.B)}a.V>=3?(c=An(a,1,a.V-3),a.B-=a.V,a.v+=a.V,a.V=0):(c=An(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(En(a,!1),a.M.U===0))return 1}a.oa=0;return b===4?(En(a,!0),a.M.U===0?3:4):
a.Ca&&(En(a,!1),a.M.U===0)?1:2}
function Ln(a,b){for(var c;;){if(a.B===0&&(Hn(a),a.B===0)){if(b===0)return 1;break}a.V=0;c=An(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(En(a,!1),a.M.U===0))return 1}a.oa=0;return b===4?(En(a,!0),a.M.U===0?3:4):a.Ca&&(En(a,!1),a.M.U===0)?1:2}
function Mn(a,b,c,d,e){this.Re=a;this.ef=b;this.lf=c;this.df=d;this.Pe=e}
var Nn;Nn=[new Mn(0,0,0,0,function(a,b){var c=65535;for(c>a.Da-5&&(c=a.Da-5);;){if(a.B<=1){Hn(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.za+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,En(a,!1),a.M.U===0)return 1;if(a.v-a.za>=a.pa-262&&(En(a,!1),a.M.U===0))return 1}a.oa=0;if(b===4)return En(a,!0),a.M.U===0?3:4;a.v>a.za&&En(a,!1);return 1}),
new Mn(4,4,8,4,In),new Mn(4,5,16,8,In),new Mn(4,6,32,32,In),new Mn(4,4,16,16,Jn),new Mn(8,16,32,32,Jn),new Mn(8,16,128,128,Jn),new Mn(8,32,128,256,Jn),new Mn(32,128,258,1024,Jn),new Mn(32,258,258,4096,Jn)];
function On(){this.M=null;this.status=0;this.da=null;this.wrap=this.pending=this.Xb=this.Da=0;this.H=null;this.Ga=0;this.method=8;this.Cb=-1;this.gb=this.jd=this.pa=0;this.window=null;this.Wd=0;this.head=this.La=null;this.yd=this.sd=this.strategy=this.level=this.Vc=this.wd=this.Aa=this.B=this.Db=this.v=this.kb=this.Bd=this.V=this.za=this.Qa=this.Pa=this.Rc=this.sc=this.S=0;this.xa=new L.Ma(1146);this.ib=new L.Ma(122);this.ma=new L.Ma(78);Cn(this.xa);Cn(this.ib);Cn(this.ma);this.md=this.lc=this.uc=
null;this.Na=new L.Ma(16);this.ea=new L.Ma(573);Cn(this.ea);this.Ab=this.Ra=0;this.depth=new L.Ma(573);Cn(this.depth);this.ia=this.sa=this.oa=this.matches=this.Kb=this.Ta=this.Rb=this.Ca=this.Vb=this.Tc=0}
function Pn(a,b){if(!a||!a.state||b>5||b<0)return a?Bn(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ra!==0||c.status===666&&b!==4)return Bn(a,a.U===0?-5:-2);c.M=a;var d=c.Cb;c.Cb=b;if(c.status===42)if(c.wrap===2)a.I=0,N(c,31),N(c,139),N(c,8),c.H?(N(c,(c.H.text?1:0)+(c.H.bb?2:0)+(c.H.extra?4:0)+(c.H.name?8:0)+(c.H.comment?16:0)),N(c,c.H.time&255),N(c,c.H.time>>8&255),N(c,c.H.time>>16&255),N(c,c.H.time>>24&255),N(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),N(c,c.H.os&255),c.H.extra&&c.H.extra.length&&
(N(c,c.H.extra.length&255),N(c,c.H.extra.length>>8&255)),c.H.bb&&(a.I=Om(a.I,c.da,c.pending,0)),c.Ga=0,c.status=69):(N(c,0),N(c,0),N(c,0),N(c,0),N(c,0),N(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),N(c,3),c.status=113);else{var e=8+(c.jd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;Fn(c,e+(31-e%31));c.v!==0&&(Fn(c,a.I>>>16),Fn(c,a.I&65535));a.I=1}if(c.status===69)if(c.H.extra){for(e=c.pending;c.Ga<(c.H.extra.length&65535)&&(c.pending!==c.Da||
(c.H.bb&&c.pending>e&&(a.I=Om(a.I,c.da,c.pending-e,e)),Dn(a),e=c.pending,c.pending!==c.Da));)N(c,c.H.extra[c.Ga]&255),c.Ga++;c.H.bb&&c.pending>e&&(a.I=Om(a.I,c.da,c.pending-e,e));c.Ga===c.H.extra.length&&(c.Ga=0,c.status=73)}else c.status=73;if(c.status===73)if(c.H.name){e=c.pending;do{if(c.pending===c.Da&&(c.H.bb&&c.pending>e&&(a.I=Om(a.I,c.da,c.pending-e,e)),Dn(a),e=c.pending,c.pending===c.Da)){var f=1;break}f=c.Ga<c.H.name.length?c.H.name.charCodeAt(c.Ga++)&255:0;N(c,f)}while(f!==0);c.H.bb&&c.pending>
e&&(a.I=Om(a.I,c.da,c.pending-e,e));f===0&&(c.Ga=0,c.status=91)}else c.status=91;if(c.status===91)if(c.H.comment){e=c.pending;do{if(c.pending===c.Da&&(c.H.bb&&c.pending>e&&(a.I=Om(a.I,c.da,c.pending-e,e)),Dn(a),e=c.pending,c.pending===c.Da)){f=1;break}f=c.Ga<c.H.comment.length?c.H.comment.charCodeAt(c.Ga++)&255:0;N(c,f)}while(f!==0);c.H.bb&&c.pending>e&&(a.I=Om(a.I,c.da,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.H.bb?(c.pending+2>c.Da&&Dn(a),c.pending+2<=c.Da&&(N(c,
a.I&255),N(c,a.I>>8&255),a.I=0,c.status=113)):c.status=113);if(c.pending!==0){if(Dn(a),a.U===0)return c.Cb=-1,0}else if(a.ra===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Bn(a,-5);if(c.status===666&&a.ra!==0)return Bn(a,-5);if(a.ra!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?Ln(c,b):c.strategy===3?Kn(c,b):Nn[c.level].Pe(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.U===0&&(c.Cb=-1),0;if(d===2&&(b===1?(ln(c,2,3),mn(c,256,Zm),c.ia===16?(kn(c,c.sa),c.sa=0,c.ia=0):c.ia>=
8&&(c.da[c.pending++]=c.sa&255,c.sa>>=8,c.ia-=8)):b!==5&&(ln(c,0,3),rn(c,0,0),b===3&&(Cn(c.head),c.B===0&&(c.v=0,c.za=0,c.oa=0))),Dn(a),a.U===0))return c.Cb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(N(c,a.I&255),N(c,a.I>>8&255),N(c,a.I>>16&255),N(c,a.I>>24&255),N(c,a.ob&255),N(c,a.ob>>8&255),N(c,a.ob>>16&255),N(c,a.ob>>24&255)):(Fn(c,a.I>>>16),Fn(c,a.I&65535));Dn(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;let Qn={};Qn=function(){this.input=null;this.ob=this.ra=this.mb=0;this.output=null;this.gd=this.U=this.Gb=0;this.msg="";this.state=null;this.Mc=2;this.I=0};var Rn=Object.prototype.toString;
function Sn(a){if(!(this instanceof Sn))return new Sn(a);a=this.options=L.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new Qn;this.M.U=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Bn(b,-2);else{e===8&&(e=9);var k=new On;b.state=k;k.M=b;k.wrap=h;k.H=null;k.jd=e;k.pa=1<<k.jd;k.gb=k.pa-1;k.Rc=f+7;k.sc=1<<k.Rc;k.Pa=k.sc-1;k.Qa=~~((k.Rc+3-1)/3);k.window=new L.pb(k.pa*2);k.head=new L.Ma(k.sc);k.La=new L.Ma(k.pa);k.Vb=1<<f+6;k.Da=k.Vb*4;k.da=new L.pb(k.Da);k.Rb=1*k.Vb;k.Tc=3*k.Vb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.ob=b.gd=0;b.Mc=2;c=b.state;c.pending=0;c.Xb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.I=c.wrap===2?
0:1;c.Cb=0;if(!zn){d=Array(16);for(f=g=0;f<28;f++)for(cn[f]=g,e=0;e<1<<Vm[f];e++)bn[g++]=f;bn[g-1]=f;for(f=g=0;f<16;f++)for(dn[f]=g,e=0;e<1<<Wm[f];e++)an[g++]=f;for(g>>=7;f<30;f++)for(dn[f]=g<<7,e=0;e<1<<Wm[f]-7;e++)an[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Zm[e*2+1]=8,e++,d[8]++;for(;e<=255;)Zm[e*2+1]=9,e++,d[9]++;for(;e<=279;)Zm[e*2+1]=7,e++,d[7]++;for(;e<=287;)Zm[e*2+1]=8,e++,d[8]++;on(Zm,287,d);for(e=0;e<30;e++)$m[e*2+1]=5,$m[e*2]=nn(e,5);fn=new en(Zm,Vm,257,286,15);gn=new en($m,
Wm,0,30,15);hn=new en([],Xm,0,19,7);zn=!0}c.uc=new jn(c.xa,fn);c.lc=new jn(c.ib,gn);c.md=new jn(c.ma,hn);c.sa=0;c.ia=0;pn(c);c=0}else c=Bn(b,-2);c===0&&(b=b.state,b.Wd=2*b.pa,Cn(b.head),b.Vc=Nn[b.level].ef,b.sd=Nn[b.level].Re,b.yd=Nn[b.level].lf,b.wd=Nn[b.level].df,b.v=0,b.za=0,b.B=0,b.oa=0,b.V=b.Aa=2,b.kb=0,b.S=0);b=c}}else b=-2;if(b!==0)throw Error(Tm[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.H=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=Mm(a.dictionary):
Rn.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.I=Nm(a.I,f,g,0));l.wrap=0;g>=l.pa&&(b===0&&(Cn(l.head),l.v=0,l.za=0,l.oa=0),c=new L.pb(l.pa),L.sb(c,f,g-l.pa,l.pa,0),f=c,g=l.pa);c=a.ra;d=a.mb;e=a.input;a.ra=g;a.mb=0;a.input=f;for(Hn(l);l.B>=3;){f=l.v;g=l.B-2;do l.S=(l.S<<l.Qa^l.window[f+3-1])&l.Pa,l.La[f&l.gb]=l.head[l.S],l.head[l.S]=f,f++;while(--g);
l.v=f;l.B=2;Hn(l)}l.v+=l.B;l.za=l.v;l.oa=l.B;l.B=0;l.V=l.Aa=2;l.kb=0;a.mb=d;a.input=e;a.ra=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Tm[b]);this.Th=!0}}
Sn.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=Mm(a):Rn.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.mb=0;c.ra=c.input.length;do{c.U===0&&(c.output=new L.pb(d),c.Gb=0,c.U=d);a=Pn(c,e);if(a!==1&&a!==0)return Tn(this,a),this.ended=!0,!1;if(c.U===0||c.ra===0&&(e===4||e===2))if(this.options.to==="string"){var f=L.dd(c.output,c.Gb);b=f;f=f.length;if(f<65537&&(b.subarray&&Lm||!b.subarray))b=
String.fromCharCode.apply(null,L.dd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=L.dd(c.output,c.Gb),this.chunks.push(b)}while((c.ra>0||c.U===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Bn(c,-2):(c.state=null,a=d===113?Bn(c,-3):0)):a=-2,Tn(this,a),this.ended=!0,a===0;e===2&&(Tn(this,0),c.U=0);return!0};
function Tn(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):L.qd(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function Un(a){var b=b||{};b.gzip=!0;b=new Sn(b);b.push(a,!0);if(b.err)throw b.msg||Tm[b.err];return b.result}
;function Vn(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Xa(a):null:null}
function Wn(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?Ha(a):null:null}
;function Xn(a){return Ha(a===null?"null":a===void 0?"undefined":a)}
;var Yn=class{constructor(a){this.name=a}};var Zn=new Yn("rawColdConfigGroup");var $n=new Yn("rawHotConfigGroup");var ao=class extends G{constructor(a){super(a)}};var bo=class extends G{constructor(a){super(a)}setTrackingParams(a){return F(this,1,zd(a,!1))}};var co=new Yn("continuationCommand");var eo=new Yn("webCommandMetadata");var fo=new Yn("signalServiceEndpoint");var go={dg:"EMBEDDED_PLAYER_MODE_UNKNOWN",Zf:"EMBEDDED_PLAYER_MODE_DEFAULT",cg:"EMBEDDED_PLAYER_MODE_PFP",ag:"EMBEDDED_PLAYER_MODE_PFL"};var ho=new Yn("feedbackEndpoint");var Hd={th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED",gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHORTS_NON_DEFAULT_ASPECT_RATIO",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PLAYER_IN_SQUEEZEBACK",Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_CREATOR_AR_GIFT_RECEIVED",Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RETURNED_TO_VIDEO_AFTER_FAILED_ATTEMPT_TO_BACKGROUND",Bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_ENTER_AUTO_ZOOM",
Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_CONTROL",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_TREATMENT",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DISABLE_PLAYER_OPEN_ON_FULLSCREEN",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_MDX_RECONNECT_WITH_RETRY",ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SINGLE_COLUMN_GRID_TRIGGERED",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_MDX_CONNECTION_TIMEOUT",Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_GHOST_LOADING_ELIGIBLE",kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_STREAMED_GET_WATCH_SUPPORTED",
xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WEBVIEW_CONTAINER",Ch:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_ENTER_PIP"};var io=new Yn("shareEndpoint"),jo=new Yn("shareEntityEndpoint"),ko=new Yn("shareEntityServiceEndpoint"),lo=new Yn("webPlayerShareEntityServiceEndpoint");var mo=new Yn("playlistEditEndpoint");var no=new Yn("modifyChannelNotificationPreferenceEndpoint");var oo=new Yn("undoFeedbackEndpoint");var po=new Yn("unsubscribeEndpoint");var qo=new Yn("subscribeEndpoint");function ro(){var a=so;w("yt.ads.biscotti.getId_")||v("yt.ads.biscotti.getId_",a)}
function to(a){v("yt.ads.biscotti.lastId_",a)}
;function uo(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;const vo=t.window,wo=vo?.yt?.config_||vo?.ytcfg?.data_||{};v("yt.config_",wo);function xo(...a){uo(wo,arguments)}
function O(a,b){return a in wo?wo[a]:b}
function yo(a){const b=wo.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;const zo=[];function Ao(a){zo.forEach(b=>b(a))}
function P(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Bo(b)}}:a}
function Bo(a){var b=w("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),xo("ERRORS",b));Ao(a)}
function Co(a,b,c,d,e){var f=w("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=O("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),xo("ERRORS",f))}
;const Do=/^[\w.]*$/,Eo={q:!0,search_query:!0};function Fo(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(h.length===1&&h[0]||h.length===2)try{const k=Go(h[0]||""),l=Go(h[1]||"");if(k in c){const m=c[k];Array.isArray(m)?nb(m,l):c[k]=[m,l]}else c[k]=l}catch(k){var d=k,e=h[0];const l=String(Fo);d.args=[{key:e,value:h[1],query:a,method:Ho===l?"unchanged":l}];Eo.hasOwnProperty(e)||Co(d)}}return c}
const Ho=String(Fo);function Io(a){const b=[];ch(a,(c,d)=>{const e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];gb(c,f=>{f==""?b.push(e):b.push(`${e}=${encodeURIComponent(String(f))}`)})});
return b.join("&")}
function Jo(a){a.charAt(0)==="?"&&(a=a.substring(1));return Fo(a,"&")}
function Ko(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),Jo(a.length>1?a[1]:a[0])):{}}
function Lo(a,b){return Mo(a,b||{},!0)}
function Mo(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Jo(e[1]||"");for(const f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return Fb(a,e)+d}
function No(a){if(!b)var b=window.location.href;const c=a.match(wb)[1]||null,d=yb(a);c&&d?(a=a.match(wb),b=b.match(wb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?yb(b)===d&&(Number(b.match(wb)[4]||null)||null)===(Number(a.match(wb)[4]||null)||null):!0;return a}
function Go(a){return a&&a.match(Do)?a:ub(a)}
;function Oo(a=w("yt.ads.biscotti.lastId_")||""){var b=Po,c=Object,d=c.assign;a:{try{var e=b.h.top.location.href}catch(Z){e=2;break a}e=e?e===b.i.location.href?0:1:2}e={dt:Gl,flash:"0",frm:e};try{e.u_tz=-(new Date).getTimezoneOffset();try{var f=zl.history.length}catch(Z){f=0}e.u_his=f;e.u_h=zl.screen?.height;e.u_w=zl.screen?.width;e.u_ah=zl.screen?.availHeight;e.u_aw=zl.screen?.availWidth;e.u_cd=zl.screen?.colorDepth}catch(Z){}f=b.h;let g,h,k,l,m,n,u,p,z;try{var D=f.screenX;g=f.screenY}catch(Z){}try{h=
f.outerWidth,k=f.outerHeight}catch(Z){}try{l=f.innerWidth,m=f.innerHeight}catch(Z){}try{n=f.screenLeft,u=f.screenTop}catch(Z){}try{l=f.innerWidth,m=f.innerHeight}catch(Z){}try{p=f.screen.availWidth,z=f.screen.availTop}catch(Z){}D=[n,u,D,g,p,z,h,k,l,m];try{var B=(b.h.top||window).document,M=B.compatMode=="CSS1Compat"?B.documentElement:B.body;var K=(new bh(M.clientWidth,M.clientHeight)).round()}catch(Z){K=new bh(-12245933,-12245933)}M=K;K=new Ol;"SVGElement"in t&&"createElementNS"in t.document&&K.set(0);
B=El();B["allow-top-navigation-by-user-activation"]&&K.set(1);B["allow-popups-to-escape-sandbox"]&&K.set(2);t.crypto&&t.crypto.subtle&&K.set(3);"TextDecoder"in t&&"TextEncoder"in t&&K.set(4);K=Nl(K);B=M.height;M=M.width;D=D.join();b=b.i;c=d.call(c,e,{bc:K,bih:B,biw:M,brdim:D,vis:b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]??0,wgl:!!zl.WebGLRenderingContext});c.ca_type="image";a&&(c.bid=a);return c}
const Po=new class{constructor(a,b){this.h=a;this.i=b}}(window,window.document);v("yt.ads_.signals_.getAdSignalsString",function(a){return Io(Oo(a))});sa();navigator.userAgent.indexOf(" (CrKey ");const Qo="XMLHttpRequest"in t?()=>new XMLHttpRequest:null;
function Ro(){if(!Qo)return null;const a=Qo();return"open"in a?a:null}
function So(a){switch(To(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
function To(a){return a&&"status"in a?a.status:-1}
;function Uo(a,b){typeof a==="function"&&(a=P(a));return window.setTimeout(a,b)}
;var Vo="absolute_experiments client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods theme".split(" ");[...Vo];function R(a){a=Wo(a);return typeof a==="string"&&a==="false"?!1:!!a}
function I(a,b){a=Wo(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Xo(){const a=Wo("html5_web_po_experiment_ids");return Array.isArray(a)?ib(a,b=>Number(b||0)):[Number(a||0)]}
function Yo(a){a=Wo(a);return a!==void 0?String(a):""}
function Wo(a){return O("EXPERIMENT_FLAGS",{})[a]}
function Zo(){const a=[],b=O("EXPERIMENTS_FORCED_FLAGS",{});for(var c of Object.keys(b))a.push({key:c,value:String(b[c])});c=O("EXPERIMENT_FLAGS",{});for(const d of Object.keys(c))d.startsWith("force_")&&b[d]===void 0&&a.push({key:d,value:String(c[d])});return a}
;const $o={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},ap=["app","debugcss","debugjs","expflag","force_ad_params","force_ad_encrypted","force_viral_ad_response_params","forced_experiments","innertube_snapshots","innertube_goldens","internalcountrycode","internalipoverride","absolute_experiments","conditional_experiments","sbb","sr_bns_address",...Vo];let bp=!1;
function cp(a,b,c="GET",d="",e,f,g,h=!1,k){const l=Ro();if(!l)return null;const m=()=>{(l&&"readyState"in l?l.readyState:0)===4&&b&&P(b)(l)};
"onloadend"in l?l.addEventListener("loadend",m,!1):l.onreadystatechange=m;R("debug_forward_web_query_parameters")&&(a=dp(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=ep(a,e))for(const n in e)l.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k&&"onprogress"in l&&(l.onprogress=()=>{k(l.responseText)});
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){Co(n)}}l.send(d);return l}
function ep(a,b={}){const c=No(a),d=O("INNERTUBE_CLIENT_NAME"),e=R("web_ajax_ignore_global_headers_if_set");for(const h in $o){let k=O($o[h]);const l=h==="X-Goog-AuthUser"||h==="X-Goog-PageId";h!=="X-Goog-Visitor-Id"||k||(k=O("VISITOR_DATA"));var f;if(!(f=!k)){if(!(f=c||(yb(a)?!1:!0))){f=a;var g;if(g=R("add_auth_headers_to_remarketing_google_dot_com_ping")&&h==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))g=yb(f),g=g!==null?g.split(".").reverse():null,g=g===null?
!1:g[1]==="google"?!0:g[2]==="google"?g[0]==="au"&&g[1]==="com"?!0:g[0]==="uk"&&g[1]==="co"?!0:!1:!1;g&&(f=zb(f)||"",f=f.split("/"),f="/"+(f.length>1?f[1]:""),g=f==="/pagead");f=g?!0:!1}f=!f}f||e&&b[h]!==void 0||d==="TVHTML5_UNPLUGGED"&&l||(b[h]=k)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!yb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!yb(a)){let h;try{h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch{}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&yb(a)||(b["X-YouTube-Ad-Signals"]=Io(Oo()));return b}
function fp(a,b){b.method="POST";b.postParams||(b.postParams={});return gp(a,b)}
function gp(a,b){const c=b.format||"JSON";a=hp(a,b);var d=ip(a,b);let e=!1,f;const g=jp(a,h=>{if(!e){e=!0;f&&window.clearTimeout(f);var k=So(h),l=null,m=400<=h.status&&h.status<500,n=500<=h.status&&h.status<600;if(k||m||n)l=kp(a,c,h,b.convertToSafeHtml);k&&(k=lp(c,h,l));l=l||{};m=b.context||t;k?b.onSuccess&&b.onSuccess.call(m,h,l):b.onError&&b.onError.call(m,h,l);b.onFinish&&b.onFinish.call(m,h,l)}},b.method,d,b.headers,b.responseType,b.withCredentials,!1,b.onProgress);
d=b.timeout||0;if(b.onTimeout&&d>0){const h=b.onTimeout;f=Uo(()=>{e||(e=!0,g.abort(),window.clearTimeout(f),h.call(b.context||t,g))},d)}return g}
function hp(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=O("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Lo(a,b);return a}
function ip(a,b){const c=O("XSRF_FIELD_NAME"),d=O("XSRF_TOKEN");var e=b.postBody||"",f=b.postParams;const g=O("XSRF_FIELD_NAME");let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||yb(a)&&!b.withCredentials&&yb(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Jo(e),nh(e,f),e=b.postBodyFormat&&
b.postBodyFormat==="JSON"?JSON.stringify(e):Eb(e));f=e||f&&!gh(f);!bp&&f&&b.method!=="POST"&&(bp=!0,Bo(Error("AJAX request with postData should use POST")));return e}
function kp(a,b,c,d){let e=null;switch(b){case "JSON":let f;try{f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Co(d),g;}a=c.getResponseHeader("Content-Type")||"";if(f&&a.indexOf("json")>=0){f.substring(0,5)===")]}'\n"&&(f=f.substring(5));try{e=JSON.parse(f)}catch(g){}}break;case "XML":if(a=(a=c.responseXML)?mp(a):null)e={},gb(a.getElementsByTagName("*"),g=>{e[g.tagName]=np(g)})}d&&op(e);
return e}
function op(a){if(la(a))for(const c in a){var b;(b=c==="html_content")||(b=c.length-5,b=b>=0&&c.indexOf("_html",b)==b);if(b){b=a[c];const d=Fa();b=d?d.createHTML(b):b;a[c]=new Ua(b)}else op(a[c])}}
function lp(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function mp(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function np(a){let b="";gb(a.childNodes,c=>{b+=c.nodeValue});
return b}
function dp(a){var b=window.location.search,c=yb(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&No(a)&&(c=document.location.hostname);var d=zb(a);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;const e=Jo(b),f={};gb(ap,g=>{e[g]&&(f[g]=e[g])});
return Mo(a,f||{},!1)}
var jp=cp;const pp=[{Wc:a=>`Cannot read property '${a.key}'`,
Bc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Wc:a=>`Cannot call '${a.key}'`,
Bc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Wc:a=>`${a.key} is not defined`,
Bc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var sp={cb:[],Za:[{callback:qp,weight:500},{callback:rp,weight:500}]};function qp(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("-extension://")||a.includes("webkit-masked-url://")}
function rp(a){if(!a.stack)return!0;const b=!a.stack.includes("\n");return b&&a.stack.includes("ErrorType: ")||b&&a.stack.includes("Anonymous function (Unknown script")||a.stack.toLowerCase()==="not available"||a.fileName==="user-script"||a.fileName.startsWith("user-script:")?!0:!1}
;function tp(){if(!up){var a=up=new vp;a.cb.length=0;a.Za.length=0;wp(a,sp)}return up}
function wp(a,b){b.cb&&a.cb.unshift.apply(a.cb,b.cb);b.Za&&a.Za.unshift.apply(a.Za,b.Za)}
var vp=class{constructor(){this.Za=[];this.cb=[]}},up;const xp=new J;function yp(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=zp(d);if(e===Infinity)break;const f=e>>3;switch(e&7){case 0:e=zp(d);if(f===2)return e;break;case 1:if(f===2)return;c+=8;break;case 2:e=zp(d);if(f===2)return a.substr(c,e);c+=e;break;case 5:if(f===2)return;c+=4;break;default:return}}while(c<b)}
function zp(a){let b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function Ap(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Bp(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){a:{var f=e;var g=a[e],h=b,k=c;if(typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"){f=0;break a}f=(g=yp(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Bp(`${f}.ve`,g,h,k):0}d+=f;d+=Bp(e,a[e],b,c);if(d>500)break}}else c[b]=Cp(a),d+=c[b].length;else c[b]=Cp(a),d+=c[b].length;return d}
function Bp(a,b,c,d){c+=`.${a}`;a=Cp(b);d[c]=a;return c.length+a.length}
function Cp(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;function Dp(){if(!t.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return t.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":t.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":t.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":t.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
var Ep=class{constructor(a){this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",b=>{b.preventDefault();this.i=b});
a.addEventListener("appinstalled",()=>{this.h=!0},{once:!0})}};function Fp(a){const b={};var c=[];"USER_SESSION_ID"in wo&&c.push({key:"u",value:O("USER_SESSION_ID")});if(c=Vg(c))b.Authorization=c,c=a=a?.sessionIndex,c===void 0&&(c=Number(O("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in wo||(b["X-Origin"]=window.location.origin),a===void 0&&"DELEGATED_SESSION_ID"in wo&&(b["X-Goog-PageId"]=O("DELEGATED_SESSION_ID"));return b}
var Gp=class{constructor(){this.Md=!0}};var Hp={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Ip(a,b,c,d="youtube.com",e=!1){Sg.set(""+a,b,{vc:c,path:"/",domain:d,secure:e})}
function Jp(a){return Sg.get(""+a,void 0)}
function Kp(a,b="/",c="youtube.com"){Sg.remove(""+a,b,c)}
function Lp(){if(!Sg.isEnabled())return!1;if(Sg.h.cookie)return!0;Sg.set("TESTCOOKIESENABLED","1",{vc:60});if(Sg.get("TESTCOOKIESENABLED")!=="1")return!1;Sg.remove("TESTCOOKIESENABLED");return!0}
;const Mp=w("ytglobal.prefsUserPrefsPrefs_")||{};v("ytglobal.prefsUserPrefsPrefs_",Mp);function Np(){Op||(Op=new Pp);return Op}
function Qp(a){return!!((Rp(`f${Math.floor(a/31)+1}`)||0)&1<<a%31)}
function Sp(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error(`ExpectedRegexMatch: ${a}`);}
function Tp(a){if(!/^\w+$/.test(a))throw Error(`ExpectedRegexMismatch: ${a}`);}
function Rp(a){a=Mp[a]!==void 0?Mp[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
var Pp=class{constructor(){this.h=O("ALT_PREF_COOKIE_NAME","PREF");this.i=O("ALT_PREF_COOKIE_DOMAIN","youtube.com");const a=Jp(this.h);a&&this.parse(a)}get(a,b){Tp(a);Sp(a);a=Mp[a]!==void 0?Mp[a].toString():null;return a!=null?a:b?b:""}set(a,b){Tp(a);Sp(a);if(b==null)throw Error("ExpectedNotNull");Mp[a]=b.toString()}remove(a){Tp(a);Sp(a);delete Mp[a]}clear(){for(const a in Mp)delete Mp[a]}parse(a){a=decodeURIComponent(a).split("&");for(let c=0;c<a.length;c++){var b=a[c].split("=");const d=b[0];(b=
b[1])&&(Mp[d]=b.toString())}}},Op;const Up={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Vp={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Wp(){const a=t.navigator;return a?a.connection:void 0}
function Xp(){var a=Wp();if(a){var b=Up[a.type||"unknown"]||"CONN_UNKNOWN";a=Up[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Yp(){var a=Wp();if(a?.effectiveType)return Vp.hasOwnProperty(a.effectiveType)?Vp[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;var S=class extends Error{constructor(a,...b){super(a);this.args=[...b];Object.setPrototypeOf(this,new.target.prototype)}};function Zp(){try{return $p(),!0}catch(a){return!1}}
function $p(a="unknown"){if(O("DATASYNC_ID")!==void 0)return O("DATASYNC_ID");throw new S("Datasync ID not set",a);}
;function aq(a,b){return Jl.Xa(a,0,b)}
var bq=class{va(a,b){return this.Xa(a,1,b)}F(a){const b=w("yt.scheduler.instance.addImmediateJob");b?b(a):a()}};var cq=I("web_emulated_idle_callback_delay",300);const dq=1E3/60-3,eq=[8,5,4,3,2,1,0];function fq(a,b){try{b()}catch(c){a.ta(c)}}
function gq(a){if(a.i[8].length){if(a.X)return 4;if(hq(a))return 3}for(let b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?hq(a)?3:2:1;return 0}
function iq(a){a.K.length=0;for(let b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
function hq(a){return!a.isHidden()&&a.qa}
function jq(a){for(const b of eq)if(a.i[b].length)return!0;return!1}
function kq(a,b,c){a.X&&a.A===4&&a.h||a.stop();a.u=!0;b=sa()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(g){e.ta(g)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&fq(a,f);d=a.la?0:1;d=a.o>d?a.o:d;if(!(sa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--){const g=c.i[e];for(;g.length;){const h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}}c=null}c&&fq(a,c)}while(c&&sa()<b)}a.u=!1;lq(a);a.D=dq;jq(a)&&a.start()}
function mq(a){a.stop();a.u=!0;var b=sa();const c=a.i[8];for(;c.length;){const d=c.shift(),e=a.j[d];delete a.j[d];e&&fq(a,e)}lq(a);a.u=!1;jq(a)&&a.start();b=sa()-b;a.D-=b}
function lq(a){for(let b=0,c=a.K.length;b<c;b++){const d=a.K[b];a.i[d.priority].push(d.id)}a.K.length=0}
var nq=class extends y{constructor(a={}){super();this.i=[];this.j={};this.fa=this.h=0;this.Y=this.u=!1;this.K=[];this.X=this.la=!1;for(const b of eq)this.i[b]=[];this.o=0;this.be=a.timeout||1;this.D=dq;this.A=0;this.Fa=this.de.bind(this);this.Zd=this.we.bind(this);this.Wa=this.Ja.bind(this);this.Nb=this.ce.bind(this);this.Lc=this.ke.bind(this);this.Ba=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.qa=a.useRaf!==!1&&!!window.requestAnimationFrame)&&
document.addEventListener("visibilitychange",this.Fa)}F(a){const b=sa();fq(this,a);a=sa()-b;this.u||(this.D-=a)}Xa(a,b,c){++this.fa;if(b===10)return this.F(a),this.fa;const d=this.fa;this.j[d]=a;this.u&&!c?this.K.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&gq(this)!==this.A&&this.stop(),this.start()));return d}wa(a){delete this.j[a]}isHidden(){return!!document.hidden||!1}ta(a){const b=w("yt.logging.errors.log");b&&b(a)}ce(a){let b=void 0;a&&(b=a.timeRemaining());this.la=
!0;kq(this,b);this.la=!1}we(){kq(this)}Ja(){mq(this)}ke(a){this.X=!0;const b=gq(this);b===4&&b!==this.A&&(this.stop(),this.start());kq(this,void 0,a);this.X=!1}de(){this.isHidden()||mq(this);this.h&&(this.stop(),this.start())}start(){this.Y=!1;if(this.h===0)switch(this.A=gq(this),this.A){case 1:var a=this.Nb;this.h=this.Ba?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,cq);break;case 2:this.h=window.setTimeout(this.Zd,this.be);break;case 3:this.h=window.requestAnimationFrame(this.Lc);
break;case 4:this.h=window.setTimeout(this.Wa,0)}}pause(){this.stop();this.Y=!0}stop(){if(this.h){switch(this.A){case 1:var a=this.h;this.Ba?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}}aa(){iq(this);this.stop();this.qa&&document.removeEventListener("visibilitychange",this.Fa);super.aa()}};const oq=w("yt.scheduler.instance.timerIdMap_")||{},pq=I("kevlar_tuner_scheduler_soft_state_timer_ms",800);let qq=0,rq=0;function sq(){let a=w("ytglobal.schedulerInstanceInstance_");if(!a||a.G)a=new nq(O("scheduler")||{}),v("ytglobal.schedulerInstanceInstance_",a);return a}
function tq(){uq();const a=w("ytglobal.schedulerInstanceInstance_");a&&(Lb(a),v("ytglobal.schedulerInstanceInstance_",null))}
function uq(){iq(sq());for(const a in oq)oq.hasOwnProperty(a)&&delete oq[Number(a)]}
function vq(a,b,c){if(!c)return c=c===void 0,-sq().Xa(a,b,c);const d=window.setTimeout(()=>{const e=sq().Xa(a,b);oq[d]=e},c);
return d}
function wq(a){sq().F(a)}
function xq(a){const b=sq();if(a<0)b.wa(-a);else{var c=oq[a];c?(b.wa(c),delete oq[a]):window.clearTimeout(a)}}
function yq(){zq()}
function zq(){window.clearTimeout(qq);sq().start()}
function Aq(){sq().pause();window.clearTimeout(qq);qq=window.setTimeout(yq,pq)}
function Bq(){window.clearTimeout(rq);rq=window.setTimeout(()=>{Cq(0)},pq)}
function Cq(a){Bq();var b=sq();b.o=a;b.start()}
function Dq(a){Bq();var b=sq();b.o>a&&(b.o=a,b.start())}
function Eq(){window.clearTimeout(rq);var a=sq();a.o=0;a.start()}
;function Fq(){Gq.instance||(Gq.instance=new Gq);return Gq.instance}
var Gq=class extends bq{Xa(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);const d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Uo(a,c||0)}wa(a){if(a===void 0||!Number.isNaN(Number(a))){var b=w("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}start(){const a=w("yt.scheduler.instance.start");a&&a()}pause(){const a=w("yt.scheduler.instance.pause");a&&a()}},Jl=Fq();
w("yt.scheduler.initialized")||(v("yt.scheduler.instance.dispose",tq),v("yt.scheduler.instance.addJob",vq),v("yt.scheduler.instance.addImmediateJob",wq),v("yt.scheduler.instance.cancelJob",xq),v("yt.scheduler.instance.cancelAllJobs",uq),v("yt.scheduler.instance.start",zq),v("yt.scheduler.instance.pause",Aq),v("yt.scheduler.instance.setPriorityThreshold",Cq),v("yt.scheduler.instance.enablePriorityThreshold",Dq),v("yt.scheduler.instance.clearPriorityThreshold",Eq),v("yt.scheduler.initialized",!0));const Hq=class{constructor(a){const b=new lm;this.h=(a=b.isAvailable()?a?new mm(b,a):b:null)?new gm(a):null;this.j=document.domain||window.location.hostname}i(){return!!this.h}set(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i())try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Dj).serialize(b))}catch(f){return}else e=escape(b);Ip(a,e,c,this.j)}get(a,b){var c=void 0,d=!this.i();if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Jp(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),
c=void 0}return c}remove(a){this.i()&&this.h.remove(a);Kp(a,"/",this.j)}};const Iq=(()=>{let a;return()=>{a||(a=new Hq("ytidb"));return a}})();
function Jq(){return Iq()?.get("LAST_RESULT_ENTRY_KEY",!0)}
;const Kq=[];let Lq,Mq=!1;function Nq(){({handleError:a=Oq,logEvent:b=Pq}={});var a;for(Lq=new Qq(a,b);Kq.length>0;){var b=Kq.shift();switch(b.type){case "ERROR":Lq.ta(b.payload);break;case "EVENT":Lq.logEvent(b.eventType,b.payload)}}}
function Rq(a){Mq||(Lq?Lq.ta(a):(Kq.push({type:"ERROR",payload:a}),Kq.length>10&&Kq.shift()))}
function Sq(a,b){Mq||(Lq?Lq.logEvent(a,b):(Kq.push({type:"EVENT",eventType:a,payload:b}),Kq.length>10&&Kq.shift()))}
;function Tq(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Uq(a){return a.substr(0,a.indexOf(":"))||a}
;var Vq=Pc||Qc;function Wq(a){const b=yc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;const Xq={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},Yq={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},Zq={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var T=class extends S{constructor(a,b={},c=Xq[a],d=Yq[a],e=Zq[a]){super(c,{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a,...b});this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,T.prototype)}},$q=class extends T{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Xq.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,$q.prototype)}},ar=class extends Error{constructor(a,b){super();this.index=a;this.objectStore=
b;Object.setPrototypeOf(this,ar.prototype)}};const br=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function cr(a,b,c,d){b=Uq(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new T("QUOTA_EXCEEDED",a);if(Rc&&e.name==="UnknownError")return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof ar)return new T("MISSING_INDEX",{...a,objectStore:e.objectStore,index:e.index});if(e.name==="InvalidStateError"&&br.some(f=>e.message.includes(f)))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new T("UNKNOWN_ABORT",a,e.message);e.args=[{...a,name:"IdbError",Ad:e.name}];e.level="WARNING";return e}
function dr(a,b,c){const d=Jq();return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d?.hasSucceededOnce}})}
;function er(a){if(!a)throw Error();throw a;}
function fr(a){return a}
var gr=class{constructor(a){this.h=a}};function hr(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof ir?jr(a,b,f,d,e):d(f)}catch(f){e(f)}}
function kr(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof ir?jr(a,b,f,d,e):d(f)}catch(f){e(f)}}
function jr(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof ir?jr(a,b,f,d,e):d(f)},f=>{e(f)})}
var ir=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;const b=d=>{if(this.state.status==="PENDING"){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if(this.state.status==="PENDING"){this.state={status:"REJECTED",
reason:d};for(const e of this.i)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new ir(new gr((b,c)=>{const d=[];let e=a.length;e===0&&b(d);for(let f=0;f<a.length;++f)ir.resolve(a[f]).then(g=>{d[f]=g;e--;e===0&&b(d)}).catch(g=>{c(g)})}))}static resolve(a){return new ir(new gr((b,c)=>{a instanceof ir?a.then(b,c):b(a)}))}static reject(a){return new ir(new gr((b,c)=>{c(a)}))}then(a,b){const c=a??fr,d=b??er;
return new ir(new gr((e,f)=>{this.state.status==="PENDING"?(this.h.push(()=>{hr(this,this,c,e,f)}),this.i.push(()=>{kr(this,this,d,e,f)})):this.state.status==="FULFILLED"?hr(this,this,c,e,f):this.state.status==="REJECTED"&&kr(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function lr(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch{}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function mr(a){return new Promise((b,c)=>{lr(a,b,c)})}
function nr(a){return new ir(new gr((b,c)=>{lr(a,b,c)}))}
;function or(a,b){return new ir(new gr((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;const pr=window;var U=pr.ytcsi&&pr.ytcsi.now?pr.ytcsi.now:pr.performance&&pr.performance.timing&&pr.performance.now&&pr.performance.timing.navigationStart?()=>pr.performance.timing.navigationStart+pr.performance.now():()=>(new Date).getTime();function qr(){return R("idb_immediate_commit")}
async function rr(a,b,c,d){const e={mode:"readonly",na:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?e.mode=c:Object.assign(e,c);a.transactionCount++;c=e.na?3:1;let f=0,g;for(;!g;){f++;const m=Math.round(U());try{var h=a.h.transaction(b,e.mode),k=d,l=!!e.commit;const n=new sr(h),u=await tr(n,k,l),p=Math.round(U());ur(a,m,p,f,void 0,b.join(),e);return u}catch(n){k=Math.round(U());const u=cr(n,a.h.name,b.join(),a.h.version);if(u instanceof T&&!u.h||f>=c)ur(a,m,k,f,u,b.join(),e),g=u}}return Promise.reject(g)}
function vr(a,b,c){a=a.h.createObjectStore(b,c);return new wr(a)}
function xr(a,b,c){return rr(a,[b],{mode:"readwrite",na:!0,commit:qr()},d=>{d=d.objectStore(b);return nr(d.h.put(c,void 0))})}
function ur(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Sq("QUOTA_EXCEEDED",{dbName:Uq(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Sq("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),yr(a,!1,d,f,b,g.tag),Rq(e)):yr(a,!0,d,f,b,g.tag)}
function yr(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){Sq("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var zr=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}add(a,b,c){return rr(this,[a],{mode:"readwrite",na:!0,commit:qr()},d=>d.objectStore(a).add(b,c))}clear(a){return rr(this,[a],{mode:"readwrite",
na:!0},b=>b.objectStore(a).clear())}close(){this.h.close();
this.options?.closed&&this.options.closed()}count(a,b){return rr(this,[a],{mode:"readonly",na:!0,commit:qr()},c=>c.objectStore(a).count(b))}delete(a,b){return rr(this,[a],{mode:"readwrite",
na:!0,commit:qr()&&!(b instanceof IDBKeyRange)},c=>c.objectStore(a).delete(b))}get(a,b){return rr(this,[a],{mode:"readonly",
na:!0,commit:qr()},c=>c.objectStore(a).get(b))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}getName(){return this.h.name}};
function Ar(a,b,c){a.h.createIndex(b,c,{unique:!1})}
function Br(a,b,c){a=a.h.openCursor(b.query,b.direction);return Cr(a).then(d=>or(d,c))}
function Dr(a,b){return Br(a,{query:b},c=>c.delete().then(()=>Er(c))).then(()=>{})}
var wr=class{constructor(a){this.h=a}add(a,b){return nr(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return nr(this.h.clear()).then(()=>{})}count(a){return nr(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?Dr(this,a):nr(this.h.delete(a))}get(a){return nr(this.h.get(a))}index(a){try{return new Fr(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new ar(a,this.h.name);
throw b;}}getName(){return this.h.name}keyPath(){return this.h.keyPath}};function tr(a,b,c){const d=new Promise((e,f)=>{try{const g=b(a);c&&a.commit();g.then(h=>{e(h)}).catch(f)}catch(g){f(g),a.abort()}});
return Promise.all([d,a.done]).then(([e])=>e)}
var sr=class{constructor(a){this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.aborted){d=T;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(h===null)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.aborted=!0;throw new T("EXPLICIT_ABORT");}commit(){this.aborted||this.h.commit?.()}objectStore(a){a=this.h.objectStore(a);let b=this.i.get(a);b||(b=new wr(a),this.i.set(a,b));return b}};function Gr(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return Cr(a).then(f=>or(f,c))}
var Fr=class{constructor(a){this.h=a}count(a){return nr(this.h.count(a))}delete(a){return Gr(this,{query:a},b=>b.delete().then(()=>Er(b)))}get(a){return nr(this.h.get(a))}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function Cr(a){return nr(a).then(b=>b?new Hr(a,b):null)}
function Er(a){a.cursor.continue(void 0);return Cr(a.request)}
var Hr=class{constructor(a,b){this.request=a;this.cursor=b}delete(){return nr(this.cursor.delete()).then(()=>{})}getValue(){return this.cursor.value}update(a){return nr(this.cursor.update(a))}};function Ir(a,b,c){return new Promise((d,e)=>{let f;f=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.le,h=c.blocking,k=c.Ef,l=c.upgrade,m=c.closed;let n;const u=()=>{n||(n=new zr(f.result,{closed:m}));return n};
f.addEventListener("upgradeneeded",p=>{try{if(p.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(f.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&p.dataLoss!=="none"&&Sq("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Uq(a)});const z=u(),D=new sr(f.transaction);l&&l(z,B=>p.oldVersion<B&&p.newVersion>=B,D);
D.done.catch(B=>{e(B)})}catch(z){e(z)}});
f.addEventListener("success",()=>{const p=f.result;h&&p.addEventListener("versionchange",()=>{h(u())});
p.addEventListener("close",()=>{Sq("IDB_UNEXPECTEDLY_CLOSED",{dbName:Uq(a),dbVersion:p.version});k&&k()});
d(u())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function Jr(a,b,c={}){return Ir(a,b,c)}
async function Kr(a,b={}){try{const c=self.indexedDB.deleteDatabase(a),d=b.le;d&&c.addEventListener("blocked",()=>{d()});
await mr(c)}catch(c){throw cr(c,a,"",-1);}}
;function Lr(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Mr(a,b){if(!b)throw dr("openWithToken",Uq(a.name));return a.open()}
var Nr=class{constructor(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}i(a,b,c={}){return Jr(a,b,c)}delete(a={}){return Kr(this.name,a)}open(){if(!this.j)throw Lr(this);if(this.h)return this.h;let a;const b=()=>{this.h===a&&(this.h=void 0)},c={blocking:e=>{e.close()},
closed:b,Ef:b,upgrade:this.options.upgrade},d=async()=>{var e=Error().stack??"";try{const h=await this.i(this.name,this.options.version,c);var f=h,g=this.options;const k=[];for(const l of Object.keys(g.Hb)){const {Ob:m,Bi:n=Number.MAX_VALUE}=g.Hb[l];!(f.h.version>=m)||f.h.version>=n||f.h.objectStoreNames.contains(l)||k.push(l)}if(k.length!==0){const l=Object.keys(this.options.Hb),m=h.objectStoreNames();if(this.u<I("ytidb_reopen_db_retries",0))return this.u++,h.close(),Rq(new T("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:this.name,expectedObjectStores:l,foundObjectStores:m})),d();if(this.o<I("ytidb_remake_db_retries",1))return this.o++,await this.delete(),Rq(new T("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:this.name,expectedObjectStores:l,foundObjectStores:m})),d();throw new $q(m,l);}return h}catch(h){if(h instanceof DOMException?h.name==="VersionError":"DOMError"in self&&h instanceof DOMError?h.name==="VersionError":h instanceof Object&&"message"in h&&h.message==="An attempt was made to open a database using a lower version than the existing version."){e=
await this.i(this.name,void 0,{...c,upgrade:void 0});f=e.h.version;if(this.options.version!==void 0&&f>this.options.version+1)throw e.close(),this.j=!1,Lr(this,f);return e}b();h instanceof Error&&!R("ytidb_async_stack_killswitch")&&(h.stack=`${h.stack}\n${e.substring(e.indexOf("\n")+1)}`);throw cr(h,this.name,"",this.options.version??-1);}};
return this.h=a=d()}};const Or=new Nr("YtIdbMeta",{Hb:{databases:{Ob:1}},upgrade(a,b){b(1)&&vr(a,"databases",{keyPath:"actualName"})}});async function Pr(a,b){return rr(await Mr(Or,b),["databases"],{na:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return nr(d.h.put(a,void 0)).then(()=>{})})})}
async function Qr(a,b){return a?(await Mr(Or,b)).delete("databases",a):void 0}
async function Rr(a,b){const c=[];b=await Mr(Or,b);await rr(b,["databases"],{na:!0,mode:"readonly"},d=>{c.length=0;return Br(d.objectStore("databases"),{},e=>{a(e.getValue())&&c.push(e.getValue());return Er(e)})});
return c}
function Sr(a){return Rr(b=>b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0,a)}
function Tr(a,b,c){return Rr(d=>c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier),b)}
async function Ur(a){const b=$p("YtIdbMeta hasAnyMeta other");return(await Rr(c=>c.userIdentifier!==void 0&&c.userIdentifier!==b,a)).length>0}
;let Vr;const Wr=new class{constructor(){}}(new class{constructor(){}});
async function Xr(){if(Jq()?.hasSucceededOnce)return!0;var a;if(a=Vq)a=/WebKit\/([0-9]+)/.exec(yc()),a=!!(a&&parseInt(a[1],10)>=600);a&&(a=/WebKit\/([0-9]+)/.exec(yc()),a=!(a&&parseInt(a[1],10)>=602));if(!(a=a||Lc)){try{a=self;var b=!!(a.indexedDB&&a.IDBIndex&&a.IDBKeyRange&&a.IDBObjectStore)}catch(c){b=!1}a=!b}if(a||!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return!1;try{return await Pr({actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0},
Wr),await Qr("yt-idb-test-do-not-use",Wr),!0}catch(c){return!1}}
function Yr(){if(Vr!==void 0)return Vr;Mq=!0;return Vr=Xr().then(a=>{Mq=!1;if(Iq()?.i()){var b={hasSucceededOnce:Jq()?.hasSucceededOnce||a};Iq()?.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Zr(){return w("ytglobal.idbToken_")||void 0}
function $r(){const a=Zr();return a?Promise.resolve(a):Yr().then(b=>{b?(v("ytglobal.idbToken_",Wr),b=Wr):b=void 0;return b})}
;let as=0;function bs(a,b){as||(as=Jl.va(async()=>{const c=await $r();if(c){var d=!0;try{const e=await Tr(a,c,b);if(e.length){const f=e[0];await Kr(f.actualName);await Qr(f.actualName,c)}else d=!1}catch(e){Rq(e),d=!1}Jl.wa(as);as=0;d&&bs(a,b)}}))}
async function cs(){const a=await $r();return a?Ur(a):!1}
new kk;function ds(a){if(!Zp())throw a=new T("AUTH_INVALID",{dbName:a}),Rq(a),a;const b=$p();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
async function es(a,b,c,d){var e=Error().stack??"";const f=await $r();if(!f)throw b=dr("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(b.stack=`${b.stack}\n${e.substring(e.indexOf("\n")+1)}`),Rq(b),b;Tq(a);e=c?{actualName:a,publicName:a,userIdentifier:void 0}:ds(a);try{return await Pr(e,f),await Jr(e.actualName,b,d)}catch(g){try{await Qr(e.actualName,f)}catch{}throw g;}}
function gs(a,b,c={}){return es(a,b,!1,c)}
function hs(a,b,c={}){return es(a,b,!0,c)}
async function is(a,b={}){const c=await $r();c&&(Tq(a),a=ds(a),await Kr(a.actualName,b),await Qr(a.actualName,c))}
function js(a,b,c){a=a.map(async d=>{await Kr(d.actualName,b);await Qr(d.actualName,c)});
return Promise.all(a).then(()=>{})}
async function ks(){var a={};const b=await $r();if(b){Tq("LogsDatabaseV2");var c=await Sr(b);await js(c,a,b)}}
async function ls(a,b={}){const c=await $r();c&&(Tq(a),await Kr(a,b),await Qr(a,c))}
;function ms(a,b){let c;return()=>{c||(c=new ns(a,b));return c}}
var ns=class extends Nr{constructor(a,b){super(a,b);this.options=b;Tq(a)}i(a,b,c={}){return(this.options.shared?hs:gs)(a,b,{...c})}delete(a={}){return(this.options.shared?ls:is)(this.name,a)}};function ps(a,b){return ms(a,b)}
;var qs=ps("ytGcfConfig",{Hb:{coldConfigStore:{Ob:1},hotConfigStore:{Ob:1}},shared:!1,upgrade(a,b){b(1)&&(Ar(vr(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Ar(vr(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},version:1});function rs(a){return Mr(qs(),a)}
async function ss(a,b,c){a={config:a,hashData:b,timestamp:U()};c=await rs(c);await c.clear("hotConfigStore");return await xr(c,"hotConfigStore",a)}
async function ts(a,b,c,d){a={config:a,hashData:b,configData:c,timestamp:U()};d=await rs(d);await d.clear("coldConfigStore");return await xr(d,"coldConfigStore",a)}
async function us(a){a=await rs(a);let b=void 0;await rr(a,["coldConfigStore"],{mode:"readwrite",na:!0},c=>Gr(c.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},d=>{b=d.getValue()}));
return b}
async function vs(a){a=await rs(a);let b=void 0;await rr(a,["hotConfigStore"],{mode:"readwrite",na:!0},c=>Gr(c.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},d=>{b=d.getValue()}));
return b}
;var ws=class extends y{constructor(){super();this.i=[];this.h=[];const a=w("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[...a],this.h=a):(this.h=[],v("yt.gcf.config.hotUpdateCallbacks",this.h))}aa(){for(const b of this.i){var a=this.h;const c=a.indexOf(b);c>=0&&a.splice(c,1)}this.i.length=0;super.aa()}};async function xs(a,b,c){if(R("start_client_gcf")){c&&(a.j=c,v("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);const d=Zr();d&&(c||(c=(await vs(d))?.config),await ss(c,b,d));if(c){a=a.i;for(const e of a.h)e(c)}}}
async function ys(a,b,c){R("start_client_gcf")&&(a.coldHashData=b,v("yt.gcf.config.coldHashData",a.coldHashData||null),a=Zr())&&(c||(c=(await us(a))?.config),c&&await ts(c,b,c.configData,a))}
function zs(){if(!As.instance){var a=new As;As.instance=a}a=As.instance;var b=U()-a.h;if(!(a.h!==0&&b<I("send_config_hash_timer"))){b=w("yt.gcf.config.coldConfigData");var c=w("yt.gcf.config.hotHashData"),d=w("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
var As=class{constructor(){this.h=0;this.i=new ws}wc(){return w("yt.gcf.config.hotConfigGroup")??O("RAW_HOT_CONFIG_GROUP")}o(a){this.hotHashData=a;v("yt.gcf.config.hotHashData",this.hotHashData||null)}};function Bs(){return"INNERTUBE_API_KEY"in wo&&"INNERTUBE_API_VERSION"in wo}
function Cs(){return{innertubeApiKey:O("INNERTUBE_API_KEY"),innertubeApiVersion:O("INNERTUBE_API_VERSION"),Te:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),vd:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),hi:O("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ve:O("INNERTUBE_CONTEXT_HL"),Ue:O("INNERTUBE_CONTEXT_GL"),We:O("INNERTUBE_HOST_OVERRIDE")||"",Xe:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ii:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Ds(a){const b={client:{hl:a.Ve,gl:a.Ue,clientName:a.vd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Te}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=t.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=O("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Zo();c.length>0&&(b.request={internalExperimentFlags:c});c=a.vd;c!=="WEB"&&c!=="MWEB"&&c!==1&&c!==2||!b||(b.client.mainAppWebInfo=b.client.mainAppWebInfo??{},b.client.mainAppWebInfo.webDisplayMode=
Dp());(c=w("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:c});R("web_log_memory_total_kbytes")&&t.navigator?.deviceMemory&&(c=t.navigator?.deviceMemory,b&&(b.client.memoryTotalKbytes=`${c*1E6}`));a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Xp())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&(a=Yp())&&b&&(b.client.effectiveConnectionType=a);if(R("start_client_gcf")){var d=zs();d&&(a=
d.coldConfigData,c=d.coldHashData,d=d.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),c&&(b.client.configInfo.coldHashData=c),d&&(b.client.configInfo.hotHashData=d)))}O("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=O("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user={...b.user,serializedDelegationContext:a});a=O("INNERTUBE_CONTEXT");
R("enable_persistent_device_token")&&a?.client?.rolloutToken&&(b.client.rolloutToken=a?.client?.rolloutToken);a=Object;c=a.assign;d=b.client;var e=O("DEVICE","");const f={};for(const [g,h]of Object.entries(Jo(e))){e=g;const k=h;e==="cbrand"?f.deviceMake=k:e==="cmodel"?f.deviceModel=k:e==="cbr"?f.browserName=k:e==="cbrver"?f.browserVersion=k:e==="cos"?f.osName=k:e==="cosver"?f.osVersion=k:e==="cplatform"&&(f.platform=k)}b.client=c.call(a,d,f);return b}
function Es(a,b,c={}){let d={};O("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":O("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||O("AUTHORIZATION");b||(a?b=`Bearer ${w("gapi.auth.getToken")().Uh}`:(Gp.instance||(Gp.instance=new Gp),a=Fp(),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d={...d,...a}));b&&(d.Authorization=b);return d}
;const Fs=typeof TextEncoder!=="undefined"?new TextEncoder:null,Gs=Fs?a=>Fs.encode(a):a=>{a=uc(a);
const b=new Uint8Array(a.length);for(let c=0;c<b.length;c++)b[c]=a[c];return b};var Hs={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},Is={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function Js(a){this.version=1;this.args=a}
Js.prototype.serialize=function(){return{version:this.version,args:this.args}};function Ks(a,b){this.topic=a;this.h=b}
Ks.prototype.toString=function(){return this.topic};const Ls=w("ytPubsub2Pubsub2Instance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.dc;J.prototype.publish=J.prototype.qb;J.prototype.clear=J.prototype.clear;v("ytPubsub2Pubsub2Instance",Ls);const Ms=w("ytPubsub2Pubsub2SubscribedKeys")||{};v("ytPubsub2Pubsub2SubscribedKeys",Ms);const Ns=w("ytPubsub2Pubsub2TopicToKeys")||{};v("ytPubsub2Pubsub2TopicToKeys",Ns);const Os=w("ytPubsub2Pubsub2IsAsync")||{};v("ytPubsub2Pubsub2IsAsync",Os);
v("ytPubsub2Pubsub2SkipSubKey",null);function Ps(a,b){const c=Qs();c&&c.publish.call(c,a.toString(),a,b)}
function Rs(a){var b=Ss;const c=Qs();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var g=w("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=()=>{if(Ms[d])try{if(f&&b instanceof Ks&&b!=e)try{{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");let l;try{if(!h.Sd){const m=new h;h.Sd=m.version}l=h.Sd}catch(m){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
mb(k.args))}catch(m){throw m.message="yt.pubsub2.Data.deserialize(): "+m.message,m;}}}catch(l){throw l.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+l.message,l;}a.call(window,f)}catch(l){Bo(l)}},Os[b.toString()]?w("yt.scheduler.instance")?Jl.va(g):Uo(g,0):g())});
Ms[d]=!0;Ns[b.toString()]||(Ns[b.toString()]=[]);Ns[b.toString()].push(d);return d}
function Ts(){var a=Us;const b=Rs(function(c){a.apply(void 0,arguments);Vs(b)});
return b}
function Vs(a){const b=Qs();b&&(typeof a==="number"&&(a=[a]),gb(a,c=>{b.unsubscribeByKey(c);delete Ms[c]}))}
function Qs(){return w("ytPubsub2Pubsub2Instance")}
;function Ws(a,b,c={sampleRate:.1}){Math.random()<Math.min(.02,c.sampleRate/100)&&Ps("meta_logging_csi_event",{timerName:a,Ki:b})}
;const Xs=I("max_body_size_to_compress",5E5),Ys=I("min_body_size_to_compress",500);let Zs=0;
function $s(a,b,c,d){const e={startTime:U(),ticks:{},infos:{}};try{const g=at(b);if(g==null||!(g>Xs||g<Ys)){var f=Un(Gs(b));const h=U();e.ticks.gelc=h;Zs++;R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||Ws("gel_compression",e,{sampleRate:.1});c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=f;c.postParams=void 0}d(a,c)}catch(g){Co(g),d(a,c)}}
function bt(a){U();if(!a.body)return a;try{const b=typeof a.body==="string"?a.body:JSON.stringify(a.body);let c=b;if(typeof b==="string"){const d=at(b);if(d!=null&&(d>Xs||d<Ys))return a;c=Un(Gs(b));U()}a.headers={"Content-Encoding":"gzip",...(a.headers||{})};a.body=c;return a}catch(b){return Co(b),a}}
function at(a){try{return(new Blob(a.split(""))).size}catch(b){return Co(b),null}}
;function ct(a){a=Object.assign({},a);delete a.Authorization;const b=Vg();if(b){const c=new Rl;c.update(O("INNERTUBE_API_KEY"));c.update(b);a.hash=Uc(c.digest(),3)}return a}
;let dt;function et(){dt||(dt=new Hq("yt.innertube"));return dt}
function ft(a,b,c,d){if(d)return null;d=et().get("nextId",!0)||1;const e=et().get("requests",!0)||{};e[d]={method:a,request:b,authState:ct(c),requestTime:Math.round(U())};et().set("nextId",d+1,86400,!0);et().set("requests",e,86400,!0);return d}
function gt(a){const b=et().get("requests",!0)||{};delete b[a];et().set("requests",b,86400,!0)}
function ht(a){const b=et().get("requests",!0);if(b){for(const d in b){const e=b[d];if(!(Math.round(U())-e.requestTime<6E4)){var c=e.authState;const f=ct(Es(!1));jh(c,f)&&(c=e.request,"requestTimeMs"in c&&(c.requestTimeMs=Math.round(U())),jt(a,e.method,c,{}));delete b[d]}}et().set("requests",b,86400,!0)}}
;function kt(a){return!!a.Z||a.ec}
function lt(a){kt(a)&&!a.Tb&&(a.h=!0,a.nc&&Math.random()<=a.kc&&a.ha.qe(a.Z),mt(a),a.ga.ya()&&a.j(),a.ga.listen(a.bd,a.j.bind(a)),a.ga.listen(a.Zc,a.o.bind(a)))}
function mt(a){if(!kt(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ha.rd("QUEUED",a.Z).then(b=>{b&&!nt(a,b,a.Cd)?a.Ha.va(async()=>{b.id!==void 0&&await a.ha.cd(b.id,a.Z);mt(a)}):a.ga.ya()&&a.j()})}
async function ot(a,b){if(!kt(a))throw Error("IndexedDB is not supported: immediateSend");b.id!==void 0&&(await a.ha.cf(b.id,a.Z)||a.zb(Error("The request cannot be found in the database.")));nt(a,b,a.Gd)?(b.skipRetry||(b=pt(a,b)),b&&(b.skipRetry&&b.id!==void 0&&await a.ha.wb(b.id,a.Z),a.Va(b.url,b.options,!!b.skipRetry))):(a.zb(Error("Networkless Logging: Stored logs request expired age limit")),b.id!==void 0&&await a.ha.wb(b.id,a.Z))}
function qt(a,b){a.Xd&&!a.ga.ya()?a.Xd(b):a.handleError(b)}
function nt(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function pt(a,b){if(!kt(a))throw Error("IndexedDB is not supported: updateRequestHandlers");const c=b.options.onError?b.options.onError:()=>{};
b.options.onError=async(e,f)=>{const g=rt(f),h=st(f);h&&a.ba&&a.ba("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(a.ba&&a.ba("nwl_consider_error_code")&&g||a.ba&&!a.ba("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Cc)if(a.ga.Gc&&await a.ga.Gc(),!a.ga.ya()){c(e,f);a.ba&&a.ba("nwl_consider_error_code")&&b?.id!==void 0&&await a.ha.cd(b.id,a.Z,!1);return}a.ba&&a.ba("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Cc||(a.potentialEsfErrorCounter++,
b?.id!==void 0&&(b.sendCount<a.Jd?(await a.ha.cd(b.id,a.Z,!0,h?!1:void 0),a.Ha.va(()=>{a.ga.ya()&&a.j()},a.Id)):await a.ha.wb(b.id,a.Z)),c(e,f))};
const d=b.options.onSuccess?b.options.onSuccess:()=>{};
b.options.onSuccess=async(e,f)=>{b?.id!==void 0&&await a.ha.wb(b.id,a.Z);a.ga.lb&&a.ba&&a.ba("vss_network_hint")&&a.ga.lb(!0);d(e,f)};
return b}
var tt=class{constructor(a){this.ec=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=()=>{};
this.zb=()=>{};
this.now=Date.now;this.Tb=!1;this.Nd=a.Nd??100;this.Jd=a.Jd??1;this.Gd=a.Gd??2592E6;this.Cd=a.Cd??12E4;this.Id=a.Id??5E3;this.Z=a.Z??void 0;this.nc=!!a.nc;this.kc=a.kc??.1;this.Cc=a.Cc??10;a.handleError&&(this.handleError=a.handleError);a.zb&&(this.zb=a.zb);a.Tb&&(this.Tb=a.Tb);a.ec&&(this.ec=a.ec);this.ba=a.ba;this.Ha=a.Ha;this.ha=a.ha;this.ga=a.ga;this.Va=a.Va;this.bd=a.bd;this.Zc=a.Zc;kt(this)&&(!this.ba||this.ba("networkless_logging"))&&lt(this)}writeThenSend(a,b={}){if(kt(this)&&this.h){const c=
{url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ha.set(c,this.Z).then(d=>{c.id=d;this.ga.ya()&&ot(this,c)}).catch(d=>{ot(this,c);
qt(this,d)})}else this.Va(a,b)}sendThenWrite(a,b={},c){if(kt(this)&&this.h){const d={url:a,
options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ba&&this.ba("nwl_skip_retry")&&(d.skipRetry=c);if(this.ga.ya()||this.ba&&this.ba("nwl_aggressive_send_then_write")&&!d.skipRetry){if(!d.skipRetry){const e=b.onError?b.onError:()=>{};
b.onError=async(f,g)=>{await this.ha.set(d,this.Z).catch(h=>{qt(this,h)});
e(f,g)}}this.Va(a,b,d.skipRetry)}else this.ha.set(d,this.Z).catch(e=>{this.Va(a,b,d.skipRetry);
qt(this,e)})}else this.Va(a,b,this.ba&&this.ba("nwl_skip_retry")&&c)}sendAndWrite(a,b={}){if(kt(this)&&this.h){const c={url:a,
options:b,timestamp:this.now(),status:"NEW",sendCount:0};let d=!1;const e=b.onSuccess?b.onSuccess:()=>{};
c.options.onSuccess=(f,g)=>{c.id!==void 0?this.ha.wb(c.id,this.Z):d=!0;this.ga.lb&&this.ba&&this.ba("vss_network_hint")&&this.ga.lb(!0);e(f,g)};
this.Va(c.url,c.options,void 0,!0);this.ha.set(c,this.Z).then(f=>{c.id=f;d&&this.ha.wb(c.id,this.Z)}).catch(f=>{qt(this,f)})}else this.Va(a,b,void 0,!0)}j(){if(!kt(this))throw Error("IndexedDB is not supported: throttleSend");
this.i||(this.i=this.Ha.va(async()=>{const a=await this.ha.rd("NEW",this.Z);a?(await ot(this,a),this.i&&(this.i=0,this.j())):this.o()},this.Nd))}o(){this.Ha.wa(this.i);
this.i=0}};function rt(a){return(a=a?.error?.code)&&a>=400&&a<=599?!1:!0}
function st(a){a=a?.error?.code;return!(a!==400&&a!==415)}
;let ut;
function vt(){if(ut)return ut();ut=ps("LogsDatabaseV2",{Hb:{LogsRequestsStore:{Ob:2}},shared:!1,upgrade(a,b,c){b(2)&&vr(a,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});b(3);b(5)&&(c=c.objectStore("LogsRequestsStore"),c.h.indexNames.contains("newRequest")&&c.h.deleteIndex("newRequest"),Ar(c,"newRequestV2",["status","interface","timestamp"]));b(7)&&a.h.objectStoreNames.contains("sapisid")&&a.h.deleteObjectStore("sapisid");b(9)&&a.h.objectStoreNames.contains("SWHealthLog")&&a.h.deleteObjectStore("SWHealthLog")},version:9});
return ut()}
;function wt(a){return Mr(vt(),a)}
async function xt(a,b){const c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}};b=await wt(b);a={...a,options:JSON.parse(JSON.stringify(a.options)),interface:O("INNERTUBE_CONTEXT_CLIENT_NAME",0)};a=await xr(b,"LogsRequestsStore",a);c.ticks.tc=U();zt(c);return a}
async function At(a,b){const c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}};b=await wt(b);var d=O("INNERTUBE_CONTEXT_CLIENT_NAME",0),e=[a,d,0];d=[a,d,U()];const f=IDBKeyRange.bound(e,d);let g="prev";R("use_fifo_for_networkless")&&(g="next");let h=void 0;e=a==="NEW"?"readwrite":"readonly";R("use_readonly_for_get_most_recent_by_status_killswitch")&&(e="readwrite");await rr(b,["LogsRequestsStore"],{mode:e,na:!0},k=>Gr(k.objectStore("LogsRequestsStore").index("newRequestV2"),
{query:f,direction:g},l=>{l.getValue()&&(h=l.getValue(),a==="NEW"&&(h.status="QUEUED",l.update(h)))}));
c.ticks.tc=U();zt(c);return h}
async function Bt(a,b){return rr(await wt(b),["LogsRequestsStore"],{mode:"readwrite",na:!0},c=>{const d=c.objectStore("LogsRequestsStore");return d.get(a).then(e=>{if(e)return e.status="QUEUED",nr(d.h.put(e,void 0)).then(()=>e)})})}
async function Ct(a,b,c=!0,d){return rr(await wt(b),["LogsRequestsStore"],{mode:"readwrite",na:!0},e=>{const f=e.objectStore("LogsRequestsStore");return f.get(a).then(g=>g?(g.status="NEW",c&&(g.sendCount+=1),d!==void 0&&(g.options.compress=d),nr(f.h.put(g,void 0)).then(()=>g)):ir.resolve(void 0))})}
async function Dt(a,b){return(await wt(b)).delete("LogsRequestsStore",a)}
async function Et(a){a=await wt(a);const b=U()-2592E6;await rr(a,["LogsRequestsStore"],{mode:"readwrite",na:!0},c=>Br(c.objectStore("LogsRequestsStore"),{},d=>{if(d.getValue().timestamp<=b)return d.delete().then(()=>Er(d))}))}
async function Ft(){await ks()}
function zt(a){R("nwl_csi_killswitch")||Ws("networkless_performance",a,{sampleRate:1})}
;var Gt={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationPlayablesMetrics:533,liveCreationStreamWebrtcStats:288,liveCreationWebrtcError:526,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,
visualElementShown:72,visualElementHidden:73,visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,
spacecastSummaryRequested:88,spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,
vrCopresencePartyStats:153,vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,
buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,
buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,
transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,
outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,
ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,
watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,
deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,
ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,
watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,
tvhtml5UnexpectedRestart:319,tvhtml5DeviceStorageStats:535,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,
appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,
webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,
parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,
prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,
sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,
parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,
biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,producerMediaServicesResetDetails:522,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,
youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,
crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,
embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515,adsSeenClientLogging:517,producerEvent:518,tvhtml5CleanStart:519,deviceAccountMetricsEvent:520,derpLogEvent:521,playablesPortalEvent:523,ipValidationStarted:524,ipValidationReceived:525,reelsSequenceMutationEvent:527,watchZoomStateChange:528,metadataEditorEvent:529,kidsPrismaDeeplinksEvent:530,creationOrchestrationEvent:531,coordinatedSamplingTriggered:532,dnaRecapScreenshotEvent:534,
mdxLocalNetworkPermissionRequestEvent:536,mdxLocalNetworkPermissionResponseEvent:537,sessionReplayEvent:538,sessionReplayStatusEvent:539,loggingReliabilityProbe:540,keyValueStoreStatsEvent:541,deviceLocationPermissionEvent:542,remoteControlStarted:543,remoteControlCompleted:544,reelsAdsEvents:545};var Ht=ps("ServiceWorkerLogsDatabase",{Hb:{SWHealthLog:{Ob:1}},shared:!0,upgrade:(a,b)=>{b(1)&&Ar(vr(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function It(a){return Mr(Ht(),a)}
async function Jt(a){a=await It(a);const b=U()-2592E6;await rr(a,["SWHealthLog"],{mode:"readwrite",na:!0},c=>Br(c.objectStore("SWHealthLog"),{},d=>{if(d.getValue().timestamp<=b)return d.delete().then(()=>Er(d))}))}
async function Kt(a){await (await It(a)).clear("SWHealthLog")}
;const Lt={};let Mt=0;function Nt(a){const b=new Image,c=""+Mt++;Lt[c]=b;b.onload=b.onerror=()=>{delete Lt[c]};
({}).Fi&&(b.referrerPolicy="no-referrer");b.src=a}
;let Ot;function Pt(){Ot||(Ot=new Hq("yt.offline"));return Ot}
function Qt(a){if(R("offline_error_handling")){var b=Pt().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Pt().set("errors",b,2592E3,!0)}}
;function Rt(){if(!St.instance){const a=w("yt.networkRequestMonitor.instance")||new St;v("yt.networkRequestMonitor.instance",a);St.instance=a}return St.instance}
var St=class{constructor(){this.h=new Map;this.i=!1}requestComplete(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)}isEndpointCFR(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null}removeParams(a){return a.split("?")[0]}};St.prototype.removeParams=St.prototype.removeParams;St.prototype.isEndpointCFR=St.prototype.isEndpointCFR;St.prototype.requestComplete=St.prototype.requestComplete;St.getInstance=Rt;function Tt(){if(!Ut.instance){const a=w("yt.networkStatusManager.instance")||new Ut;v("yt.networkStatusManager.instance",a);Ut.instance=a}return Ut.instance}
var Ut=class extends Ni{constructor(){super();this.j=!1;this.h=Il();this.h.listen("networkstatus-online",()=>{if(this.j&&R("offline_error_handling")){var a=Pt().get("errors",!0);if(a){for(const b in a)if(a[b]){const c=new S(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Bo(c)}Pt().set("errors",{},2592E3,!0)}}})}ya(){return this.h.ya()}lb(a){this.h.h=a}Qe(){const a=window.navigator.onLine;
return a===void 0?!0:a}Ae(){this.j=!0}listen(a,b){return this.h.listen(a,b)}Gc(a){return Ll(this.h,a)}};Ut.prototype.sendNetworkCheckRequest=Ut.prototype.Gc;Ut.prototype.listen=Ut.prototype.listen;Ut.prototype.enableErrorFlushing=Ut.prototype.Ae;Ut.prototype.getWindowStatus=Ut.prototype.Qe;Ut.prototype.networkStatusHint=Ut.prototype.lb;Ut.prototype.isNetworkAvailable=Ut.prototype.ya;Ut.getInstance=Tt;function Vt(a,b){a.rateLimit?a.h?(Jl.wa(a.u),a.u=Jl.va(()=>{a.o!==b&&(Oi(a,b),a.o=b,a.h=U())},a.rateLimit-(U()-a.h))):(Oi(a,b),a.o=b,a.h=U()):Oi(a,b)}
var Wt=class extends Ni{constructor(a={}){super();this.h=this.u=0;this.j=Tt();const b=w("yt.networkStatusManager.instance.listen").bind(this.j);b&&(a.rateLimit?(this.rateLimit=a.rateLimit,b("networkstatus-online",()=>{Vt(this,"publicytnetworkstatus-online")}),b("networkstatus-offline",()=>{Vt(this,"publicytnetworkstatus-offline")})):(b("networkstatus-online",()=>{Oi(this,"publicytnetworkstatus-online")}),b("networkstatus-offline",()=>{Oi(this,"publicytnetworkstatus-offline")})))}ya(){const a=w("yt.networkStatusManager.instance.isNetworkAvailable");
return a?a.bind(this.j)():!0}lb(a){const b=w("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)}async Gc(a){const b=w("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(this.j);return R("skip_network_check_if_cfr")&&Rt().isEndpointCFR("generate_204")?new Promise(c=>{this.lb(window.navigator?.onLine||!0);c(this.ya())}):b?b(a):!0}};let Xt;function Yt(){let a=w("yt.networklessRequestController.instance");a||(a=new Zt,v("yt.networklessRequestController.instance",a),R("networkless_logging")&&$r().then(b=>{a.Z=b;lt(a);a.u.resolve();a.nc&&Math.random()<=a.kc&&a.Z&&Jt(a.Z);R("networkless_immediately_drop_sw_health_store")&&$t(a)}));
return a}
async function $t(a){if(!a.Z)throw dr("clearSWHealthLogsDb");Kt(a.Z).catch(b=>{a.handleError(b)})}
var Zt=class extends tt{constructor(){Xt||(Xt=new Wt({mi:!0,bi:!0}));super({ha:{qe:Et,wb:Dt,rd:At,cf:Bt,cd:Ct,set:xt},ga:Xt,handleError:(a,b,c)=>{const d=c?.error?.code;d===400||d===415?(a=new S(a.message,b,c?.error?.code),Co(a,void 0,void 0,void 0,!0)):Bo(a)},
zb:Co,Va:au,now:U,Xd:Qt,Ha:Fq(),bd:"publicytnetworkstatus-online",Zc:"publicytnetworkstatus-offline",nc:!0,kc:.1,Cc:I("potential_esf_error_limit",10),ba:R,Tb:!(Zp()&&bu())});this.u=new kk;R("networkless_immediately_drop_all_requests")&&Ft();ls("LogsDatabaseV2")}writeThenSend(a,b){b||(b={});b=cu(a,b);Zp()||(this.h=!1);super.writeThenSend(a,b)}sendThenWrite(a,b,c){b||(b={});b=cu(a,b);Zp()||(this.h=!1);super.sendThenWrite(a,b,c)}sendAndWrite(a,b){b||(b={});b=cu(a,b);Zp()||(this.h=!1);super.sendAndWrite(a,
b)}awaitInitialization(){return this.u.promise}};
function au(a,b,c){b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_request_time_ms_header")?b.headers&&No(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U()))):b.postParams?.requestTimeMs&&(b.postParams.requestTimeMs=Math.round(U()));if(c&&Object.keys(b).length===0){if(a)if(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))cp(a,void 0,"GET","",void 0,void 0,!1,!1);else{b:{try{c:{var d=new ya({url:a});if(d.h.dsh==="1")var e=null;else{var f=d.h.ae;if(f==="1"){const n=d.h.adurl;if(n)try{e=
{version:3,ye:decodeURIComponent(n),he:va(d.i,"act=1","ri=1",xa(d))};break c}catch(u){}}e=f==="2"?{version:4,ye:va(d.i,"dct=1","suid="+d.j,"ri=1"),he:va(d.i,"act=1","ri=1","suid="+d.j)}:null}}if(e){const n=zb(a);var g;if(!(g=!n||!n.endsWith("/aclk"))){{const u=a.search(Hb);let p=Gb(a,0,"ri",u);if(p<0)var h=null;else{var k=a.indexOf("&",p);if(k<0||k>u)k=u;h=ub(a.slice(p+3,k!==-1?k:0))}}g=h!=="1"}var l=!g;break b}}catch(n){}l=!1}if(l){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,
"")){var m=!0;break b}}catch(n){}m=!1}c=m?!0:!1}else c=!1;c||Nt(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),$s(a,b.postBody,b,gp)):$s(a,JSON.stringify(b.postParams),b,fp):gp(a,b)}
function cu(a,b){R("use_event_time_ms_header")&&No(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(U())));return b}
function bu(){return yb(document.location.toString())!=="www.youtube-nocookie.com"}
;let du=!1;const eu=t.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:du};v("ytNetworklessLoggingInitializationOptions",eu);async function fu(){await $r()&&(Zp()||R("nwl_init_require_datasync_id_killswitch"))&&bu()&&(du=!0,eu.isNwlInitialized=du,await Yt().awaitInitialization())}
;function jt(a,b,c,d){!O("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Co(new S("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new S("innertube xhrclient not ready",b,c,d);Bo(e);throw e;}const f={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:()=>{d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:(n,u)=>{if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:n=>{if(d.onSuccess)d.onSuccess(n)},
onProgress:n=>{if(d.onProgress)d.onProgress(n)},
onError:(n,u)=>{if(d.onError)d.onError(u)},
onFetchError:n=>{if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};f.headers["Content-Type"]||(f.headers["Content-Type"]="application/json");let g="";(e=a.config_.We)&&(g=e);const h=a.config_.Xe||!1,k=Es(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&h&&(f.headers["x-origin"]=window.location.origin);const l=Lo(`${g}${`/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`}`,{alt:"json"}),m=(n=!1)=>{let u;if(d.retry&&g!="www.youtube-nocookie.com"&&(n||R("skip_ls_gel_retry")||f.headers["Content-Type"]!==
"application/json"||(u=ft(b,c,k,h)),u)){const p=f.onSuccess,z=f.onFetchSuccess;f.onSuccess=(D,B)=>{gt(u);p(D,B)};
c.onFetchSuccess=(D,B)=>{gt(u);z(D,B)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)f.method="POST",d.networklessOptions.writeThenSend?Yt().writeThenSend(l,f):Yt().sendAndWrite(l,f);
else if(d.compress)if(f.postBody){let p=f.postBody;typeof p!=="string"&&(p=JSON.stringify(f.postBody));$s(l,p,f,gp)}else $s(l,JSON.stringify(f.postParams),f,fp);else fp(l,f)}catch(p){if(p.name==="InvalidAccessError")u&&(gt(u),u=0),Co(Error("An extension is blocking network request."));else throw p;}u&&aq(()=>{ht(a)},5E3)};
(w("ytNetworklessLoggingInitializationOptions")?eu.isNwlInitialized:du)?Yr().then(n=>{m(n)}):m(!1)}
var gu=class{constructor(a){this.config_=null;a?this.config_=a:Bs()&&(this.config_=Cs());aq(()=>{ht(this)},5E3)}isReady(){!this.config_&&Bs()&&(this.config_=Cs());
return!!this.config_}};let hu=0;const iu=Nc?"webkit":Mc?"moz":Kc?"ms":Jc?"o":"";v("ytDomDomGetNextId",w("ytDomDomGetNextId")||(()=>++hu));const ju={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function ku(a){if(document.body&&document.documentElement){const b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
class lu{constructor(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(let d in a)d in ju||(this[d]=a[d]);this.scale=a.scale;this.rotation=a.rotation;var b=a.target||a.srcElement;b&&b.nodeType==3&&(b=b.parentNode);this.target=b;
var c=a.relatedTarget;if(c)try{c=c.nodeName?c:null}catch(d){c=null}else this.type=="mouseover"?c=a.fromElement:this.type=="mouseout"&&(c=a.toElement);this.relatedTarget=c;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(d){}}preventDefault(){this.event&&
(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())}stopPropagation(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())}stopImmediatePropagation(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())}};const fh=t.ytEventsEventsListeners||{};v("ytEventsEventsListeners",fh);const mu=t.ytEventsEventsCounter||{count:0};v("ytEventsEventsCounter",mu);
function nu(a,b,c,d={}){a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return eh(e=>{const f=typeof e[4]==="boolean"&&e[4]==!!d,g=la(e[4])&&la(d)&&jh(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ou(a,b,c,d={}){if(!a||!a.addEventListener&&!a.attachEvent)return"";let e=nu(a,b,c,d);if(e)return e;e=++mu.count+"";const f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);let g;g=f?h=>{h=new lu(h);if(!uh(h.relatedTarget,k=>k==a))return h.currentTarget=a,h.type=b,c.call(a,h)}:h=>{h=new lu(h);
h.currentTarget=a;return c.call(a,h)};
g=P(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),pu()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent(`on${b}`,g);fh[e]=[a,b,c,g,d];return e}
function qu(a){a&&(typeof a=="string"&&(a=[a]),gb(a,b=>{if(b in fh){var c=fh[b];const d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?pu()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent(`on${e}`,f);delete fh[b]}}))}
const pu=cj(function(){let a=!1;try{const b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(b){}return a});function ru(a){this.D=a;this.h=null;this.o=0;this.A=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.K=ou(window,"mousemove",qa(this.X,this));a=qa(this.F,this);typeof a==="function"&&(a=P(a));this.Y=window.setInterval(a,25)}
ua(ru,y);ru.prototype.X=function(a){a.h===void 0&&ku(a);var b=a.h;a.i===void 0&&ku(a);this.h=new ah(b,a.i)};
ru.prototype.F=function(){if(this.h){var a=U();if(this.o!=0){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;b=0;for(c=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.D();this.u=d}this.o=a;this.A=this.h;this.j=(this.j+1)%4}};
ru.prototype.aa=function(){window.clearInterval(this.Y);qu(this.K)};const su={};function tu({wi:a=!1,ci:b=!0}={}){if(w("_lact",window)==null){var c=parseInt(O("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;v("_lact",c,window);v("_fact",c,window);c==-1&&uu();vu(a,b);new ru(()=>{wu("mouse",100)})}}
function vu(a=!1,b=!0){var c=window;ou(c.document,"keydown",uu);ou(c.document,"keyup",uu);ou(c.document,"mousedown",uu);ou(c.document,"mouseup",uu);a?ou(c,"touchmove",()=>{wu("touchmove",200)},{passive:!0}):(ou(c,"resize",()=>{wu("resize",200)}),b&&ou(c,"scroll",()=>{wu("scroll",200)}));
ou(c.document,"touchstart",uu,{passive:!0});ou(c.document,"touchend",uu,{passive:!0})}
function wu(a,b){su[a]||(su[a]=!0,Jl.va(()=>{uu();su[a]=!1},b))}
function uu(){w("_lact",window)==null&&tu();var a=Date.now();v("_lact",a,window);w("_fact",window)==-1&&v("_fact",a,window);(a=w("ytglobal.ytUtilActivityCallback_"))&&a()}
function xu(){const a=w("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;const yu=t.ytPubsubPubsubInstance||new J,zu=t.ytPubsubPubsubSubscribedKeys||{},Au=t.ytPubsubPubsubTopicToKeys||{},Bu=t.ytPubsubPubsubIsSynchronous||{};function Cu(a,b){const c=Du();if(c&&b){const d=c.subscribe(a,function(){const e=arguments,f=()=>{zu[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,e)};
try{Bu[a]?f():Uo(f,0)}catch(g){Bo(g)}},void 0);
zu[d]=!0;Au[a]||(Au[a]=[]);Au[a].push(d);return d}return 0}
function Eu(a){const b=Du();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),gb(a,c=>{b.unsubscribeByKey(c);delete zu[c]}))}
function Fu(a,b){const c=Du();c&&c.publish.apply(c,arguments)}
function Gu(a){const b=Du();if(b)if(b.clear(a),a)Hu(a);else for(let c in Au)Hu(c)}
function Du(){return t.ytPubsubPubsubInstance}
function Hu(a){Au[a]&&(a=Au[a],gb(a,b=>{zu[b]&&delete zu[b]}),a.length=0)}
J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.dc;J.prototype.publish=J.prototype.qb;J.prototype.clear=J.prototype.clear;v("ytPubsubPubsubInstance",yu);v("ytPubsubPubsubTopicToKeys",Au);v("ytPubsubPubsubIsSynchronous",Bu);v("ytPubsubPubsubSubscribedKeys",zu);var Iu=Symbol("injectionDeps"),Ju=class{constructor(a){this.name=a}toString(){return`InjectionToken(${this.name})`}},Ku=class{constructor(a){this.key=a}};function Lu(a,b){a.i.set(b.Yb,b);const c=a.j.get(b.Yb);if(c)try{c.Fc(a.resolve(b.Yb))}catch(d){c.Ai(d)}}
function Mu(a,b,c,d=!1){if(c.indexOf(b)>-1)throw Error(`Deps cycle for: ${b}`);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error(`No provider for: ${b}`);}d=a.i.get(b);c.push(b);if(d.Qd!==void 0)var e=d.Qd;else if(d.Kf)e=d[Iu]?Nu(a,d[Iu],c):[],e=d.Kf(...e);else if(d.hd){e=d.hd;const f=e[Iu]?Nu(a,e[Iu],c):[];e=new e(...f)}else throw Error(`Could not resolve providers for: ${b}`);c.pop();d.Ii||a.h.set(b,e);return e}
function Nu(a,b,c){return b?b.map(d=>d instanceof Ku?Mu(a,d.key,c,!0):Mu(a,d,c)):[]}
var Ou=class{constructor(){this.i=new Map;this.j=new Map;this.h=new Map}resolve(a){return a instanceof Ku?Mu(this,a.key,[],!0):Mu(this,a,[])}};let Pu;function Qu(){Pu||(Pu=new Ou);return Pu}
;let Ru=window;function Su(){return"h5vcc"in Ru&&Ru.h5vcc.traceEvent?.traceBegin&&Ru.h5vcc.traceEvent?.traceEnd?1:"performance"in Ru&&Ru.performance.mark&&Ru.performance.measure?2:0}
function Tu(a){const b=Su();switch(b){case 1:Ru.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Ru.performance.mark(`${a}-start`);break;case 0:break;default:Ta(b,"unknown trace type")}}
function Uu(a){var b=Su();switch(b){case 1:Ru.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=`${a}-start`;const c=`${a}-end`;Ru.performance.mark(c);Ru.performance.measure(a,b,c);break;case 0:break;default:Ta(b,"unknown trace type")}}
;var Vu=R("web_enable_lifecycle_monitoring")&&Su()!==0,Wu=R("web_enable_lifecycle_monitoring");function Xu(a){var b=Array.from(a.h.keys()).sort((c,d)=>a.getPriority(a.h[d])-a.getPriority(a.h[c]));
for(const c of b)b=a.h[c],b.jobId===void 0||b.Dc||(a.scheduler.wa(b.jobId),a.scheduler.Xa(b.Sc,10))}
var Yu=class{constructor(a){this.scheduler=Fq();this.i=new kk;this.h=a;for(let c=0;c<this.h.length;c++){const d=this.h[c];a=()=>{d.Sc();this.h[c].Dc=!0;this.h.every(e=>e.Dc===!0)&&this.i.resolve()};
var b=this.getPriority(d);b=this.scheduler.Xa(a,b);this.h[c]={...d,Sc:a,jobId:b}}}cancel(){for(const a of this.h)a.jobId===void 0||a.Dc||this.scheduler.wa(a.jobId),a.Dc=!0;this.i.resolve()}getPriority(a){return a.priority??0}};function Zu(a,b,c){Wu&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`),console.log("with message: ",c),console.groupEnd())}
function $u(a,b){const c=b.filter(e=>(a.i??e.priority??0)===10),d=b.filter(e=>(a.i??e.priority??0)!==10);
return a.A.Hi?async(...e)=>{await av(c,...e);bv(a,d,...e)}:(...e)=>{cv(c,...e);
bv(a,d,...e)}}
async function av(a,...b){const c=Fq();for(const d of a){let e;c.F(()=>{dv(d.name);const f=ev(()=>d.callback(...b));
Id(f)?e=R("web_lifecycle_error_handling_killswitch")?f.then(()=>{fv(d.name)}):f.then(()=>{fv(d.name)},g=>{window.onerror?.(g.message,"",0,0,g);
fv(d.name)}):fv(d.name)});
e&&await e}}
function bv(a,b,...c){b=b.map(d=>({Sc:()=>{dv(d.name);ev(()=>d.callback(...c));
fv(d.name)},
priority:a.i??d.priority??0}));
b.length&&(a.o=new Yu(b))}
function cv(a,...b){const c=Fq();for(const d of a)c.F(()=>{dv(d.name);ev(()=>d.callback(...b));
fv(d.name)})}
function dv(a){Vu&&a&&Tu(a)}
function fv(a){Vu&&a&&Uu(a)}
var gv=class{constructor(a){this.state=a;this.plugins=[];this.i=void 0;this.A={};Vu&&Tu(this.state)}get currentState(){return this.state}install(a){this.plugins.push(a);return this}uninstall(...a){a.forEach(b=>{b=this.plugins.indexOf(b);b>-1&&this.plugins.splice(b,1)})}transition(a,b){Vu&&Uu(this.state);
var c=this.transitions.find(d=>Array.isArray(d.from)?d.from.find(e=>e===this.state&&d.to===a):d.from===this.state&&d.to===a);
if(c){this.o&&(Xu(this.o),this.o=void 0);Zu(this,a,b);this.state=a;Vu&&Tu(this.state);c=c.action.bind(this);const d=this.plugins.filter(e=>e[a]).map(e=>e[a]);
c($u(this,d),b)}else throw Error(`no transition specified from ${this.state} to ${a}`);}};function ev(a){if(R("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){window.onerror?.(b.message,"",0,0,b)}}
;function hv(){iv||(iv=new jv);return iv}
var jv=class extends gv{constructor(){super("none");this.h=null;this.i=10;this.transitions=[{from:"none",to:"application_navigating",action:this.j},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:()=>{}},
{from:"none",to:"none",action:()=>{}}]}j(a,b){this.h=aq(()=>{this.currentState==="application_navigating"&&this.transition("none")},5E3);
a(b?.event)}u(a,b){this.h&&(Jl.wa(this.h),this.h=null);a(b?.event)}},iv;let kv=[];v("yt.logging.transport.getScrapedGelPayloads",function(){return kv});function lv(a,b){const c=mv(b);if(a.h[c])return a.h[c];const d=Object.keys(a.store)||[];if(d.length<=1&&mv(b)===d[0])return d;const e=[];for(let g=0;g<d.length;g++){const h=d[g].split("/");if(nv(b.auth,h[0])){var f=b.isJspb;nv(f===void 0?"undefined":f?"true":"false",h[1])&&nv(b.cttAuthInfo,h[2])&&(f=b.tier,f=f===void 0?"undefined":JSON.stringify(f),nv(f,h[3])&&e.push(d[g]))}}return a.h[c]=e}
function nv(a,b){return a===void 0||a==="undefined"?!0:a===b}
var ov=class{constructor(){this.store={};this.h={}}storePayload(a,b){a=mv(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);R("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a}smartExtractMatchingEntries(a){if(!a.keys.length)return[];const b=lv(this,a.keys.splice(0,1)[0]),c=[];for(let d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push(...this.store[b[d]]),delete this.store[b[d]]):
c.push(...this.store[b[d]].splice(0,a.sizeLimit)));a?.sizeLimit&&c.length<a?.sizeLimit&&(a.sizeLimit-=c.length,c.push(...this.smartExtractMatchingEntries(a)));return c}extractMatchingEntries(a){a=lv(this,a);const b=[];for(let c=0;c<a.length;c++)this.store[a[c]]&&(b.push(...this.store[a[c]]),delete this.store[a[c]]);return b}getSequenceCount(a){a=lv(this,a);let b=0;for(let c=0;c<a.length;c++)b+=this.store[a[c]]?.length||0;return b}};ov.prototype.getSequenceCount=ov.prototype.getSequenceCount;
ov.prototype.extractMatchingEntries=ov.prototype.extractMatchingEntries;ov.prototype.smartExtractMatchingEntries=ov.prototype.smartExtractMatchingEntries;ov.prototype.storePayload=ov.prototype.storePayload;function mv(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function pv(a,b){if(a)return a[b.name]}
;var qv=new Ju("FinchConfigManagerService");const rv=I("initial_gel_batch_timeout",2E3),sv=I("gel_queue_timeout_max_ms",6E4),tv=I("gel_min_batch_size",5);let uv=void 0;class vv{constructor(){this.o=this.h=this.i=0;this.j=!1}}const wv=new vv,xv=new vv,yv=new vv,zv=new vv;let Av,Bv=!0;const Cv=t.ytLoggingTransportTokensToCttTargetIds_||{};v("ytLoggingTransportTokensToCttTargetIds_",Cv);let Dv={};function Ev(){let a=w("yt.logging.ims");a||(a=new ov,v("yt.logging.ims",a));return a}
function Fv(a,b){if(a.endpoint==="log_event"){Gv(a);var c=Hv(a),d=Iv(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=Gt[d||""];var f=Qu().resolve(new Ku(As))?.wc()?.loggingHotConfig?.eventLoggingConfig?.payloadPolicies;if(f)for(let g=0;g<f.length;g++)if(f[g].payloadNumber===e){e=f[g];break a}}e=void 0}f=200;if(e){if(e.enabled===!1&&!R("web_payload_policy_disabled_killswitch"))return;f=Jv(e.tier);if(f===400){Kv(a,b);return}}Dv[c]=!0;c={cttAuthInfo:c,isJspb:!1,tier:f};Ev().storePayload(c,a.payload);
Lv(b,c,d==="gelDebuggingEvent")}}
function Lv(a,b,c=!1){a&&(uv=new a);a=I("tvhtml5_logging_max_batch_ads_fork")||I("tvhtml5_logging_max_batch")||I("web_logging_max_batch")||100;const d=U(),e=Mv(!1,b.tier),f=e.o;c&&(e.j=!0);c=0;b&&(c=Ev().getSequenceCount(b));const g=()=>{Nv({writeThenSend:!0},void 0,!1,b.tier)};
c>=1E3?g():c>=a?Av||(Av=Ov(()=>{g();Av=void 0},0)):d-f>=10&&(Pv(!1,b.tier),e.o=d)}
function Kv(a,b){if(a.endpoint==="log_event"){R("more_accurate_gel_parser")&&Ev().storePayload({isJspb:!1},a.payload);Gv(a);var c=Hv(a),d=new Map;d.set(c,[a.payload]);var e=Iv(a.payload)||"";b&&(uv=new b);return new dj((f,g)=>{uv&&uv.isReady()?Qv(d,uv,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Hv(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;const c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Cv[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Nv(a={},b,c=!1,d){new dj((e,f)=>{const g=Mv(c,d),h=g.j;g.j=!1;Rv(g.i);Rv(g.h);g.h=0;uv&&uv.isReady()?d===void 0&&R("enable_web_tiered_gel")?Sv(e,f,a,b,c,300,h):Sv(e,f,a,b,c,d,h):(Pv(c,d),e())})}
function Sv(a,b,c={},d,e=!1,f=200,g=!1){var h=uv;const k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=R("enable_web_tiered_gel")?Ev().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Ev().extractMatchingEntries(e),k.set(d,f);else for(const m of Object.keys(Dv))d=R("enable_web_tiered_gel")?Ev().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Ev().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),
d.length>0&&k.set(m,d),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete Dv[m];Qv(k,h,a,b,c,!1,g)}
function Pv(a=!1,b=200){const c=()=>{Nv({writeThenSend:!0},void 0,a,b)},d=Mv(a,b);
var e=d===zv||d===yv?5E3:sv;R("web_gel_timeout_cap")&&!d.h&&(e=Ov(()=>{c()},e),d.h=e);
Rv(d.i);e=O("LOGGING_BATCH_TIMEOUT",I("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Bv&&(e=rv);e=Ov(()=>{I("gel_min_batch_size")>0?Ev().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=tv&&c():c()},e);
d.i=e}
function Qv(a,b,c,d,e={},f,g){const h=Math.round(U());let k=a.size;const l=Tv(g);for(const [m,n]of a){a=m;g=n;const u=lh({context:Ds(b.config_||Cs())});if(!ka(g)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}u.events=g;(g=Cv[a])&&Uv(u,a,g);delete Cv[a];const p=a==="visitorOnlyApprovedKey";Vv(u,h,p);R("always_send_and_write")&&(e.writeThenSend=!1);const z=M=>{R("start_client_gcf")&&Jl.va(async()=>{await Wv(M)});
k--;k||c()};
let D=0;const B=()=>{D++;if(e.bypassNetworkless&&D===1)try{jt(b,l,u,Xv({writeThenSend:!0},p,z,B,f)),Bv=!1}catch(M){Bo(M),d()}k--;k||c()};
try{jt(b,l,u,Xv(e,p,z,B,f)),Bv=!1}catch(M){Bo(M),d()}}}
function Xv(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Wh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};Yv()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function Vv(a,b,c){Yv()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=O("EVENT_ID"))&&((c=O("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),xo("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Uv(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Gv(a){var b=Yo("il_payload_scraping")==="enable_il_payload_scraping";if(!w("yt.logging.transport.enableScrapingForTest"))if(b)kv=[],v("yt.logging.transport.enableScrapingForTest",!0),v("yt.logging.transport.scrapedPayloadsForTesting",kv),v("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),v("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),v("yt.logging.transport.scrapeClientEvent",
!0);else return;b=w("yt.logging.transport.scrapedPayloadsForTesting");const c=w("yt.logging.transport.payloadToScrape"),d=w("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(let e=0;e<c.length;e++)a&&a.payload[c[e]]&&(d?b.push(a.payload):b.push((a?.payload)[c[e]]));v("yt.logging.transport.scrapedPayloadsForTesting",b)}
function Yv(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Ov(a,b){return R("transport_use_scheduler")===!1?Uo(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?aq(()=>{hv().currentState==="none"?a():hv().install({none:{callback:a}})},b):aq(a,b)}
function Rv(a){R("transport_use_scheduler")?Jl.wa(a):window.clearTimeout(a)}
async function Wv(a){a=a?.responseContext?.globalConfigGroup;var b=pv(a,$n),c=a?.hotHashData;const d=pv(a,Zn),e=a?.coldHashData,f=Qu().resolve(new Ku(As));f&&(c&&(b?await xs(f,c,b):await xs(f,c)),e&&(d?await ys(f,e,d):await ys(f,e)));b=a?.rawFinchStaticConfigGroup;(a=a?.finchStaticHashData)?(c=Qu().resolve(new Ku(qv)))?await c.xi({config:b||{},Xh:a||""}):(b||a)&&Co(new S("FinchConfigManagerService is not present, but Finch config data is present.")):b&&Co(new S("Finch config data is present, but hash is missing."))}
function Mv(a,b=200){return a?b===300?zv:xv:b===300?yv:wv}
function Iv(a){a=Object.keys(a);for(const b of a)if(Gt[b])return b}
function Jv(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Tv(a=!1){return a&&R("vss_through_gel_video_stats")?"video_stats":"log_event"}
;const Zv=t.ytLoggingGelSequenceIdObj_||{};v("ytLoggingGelSequenceIdObj_",Zv);
function $v(a,b,c,d={}){const e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=xu();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Zv[b]=b in Zv?Zv[b]+1:0,a.sequence={index:Zv[b],groupKey:b},d.endOfSequence&&delete Zv[d.sequenceGroup]);R("web_tag_automated_log_events")&&(e.context.automatedLogEventSource=d.automatedLogEventSource);(d.sendIsolatedPayload?
Kv:Fv)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
;function Pq(a,b,c={}){let d=gu;O("ytLoggingEventsDefaultDisabled",!1)&&gu===gu&&(d=null);$v(a,b,d,c)}
;var aw=new Set,bw=0,cw=0,dw=0,ew=[];const fw=[],gw=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Oq(a){hw(a)}
function V(a){hw(a,"WARNING")}
function iw(a){a instanceof Error?hw(a):(a=la(a)?JSON.stringify(a):String(a),a=new S(a),a.name="RejectedPromiseError",V(a))}
function hw(a,b="ERROR",c,d,e,f={},g=!1,h){f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION");jw(a,f,b,g,h)}
function jw(a,b,c="ERROR",d=!1,e){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(R("console_log_js_exceptions")||["test","dev","autopush","staging"].includes(O("SERVER_VERSION"))){var f=[];f.push(`Name: ${a.name}`);f.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&f.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&f.push(`Error args: ${JSON.stringify(a.args)}`);f.push(`File name: ${a.fileName}`);f.push(`Stacktrace: ${a.stack}`);f=f.join("\n");window.console.log(f,
a)}if(!(bw>=5)){f=[];for(g of fw)try{g()&&f.push(g())}catch(B){}var g=f;g=[...ew,...g];var h=qb(a);f=h.message||"Unknown Error";const z=h.name||"UnknownError";var k=h.stack||a.i||"Not available";if(k.startsWith(`${z}: ${f}`)){var l=k.split("\n");l.shift();k=l.join("\n")}l=h.lineNumber||"Not available";h=h.fileName||"Not available";let D=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var m=0;m<a.args.length&&!(D=Ap(a.args[m],`params.${m}`,b,D),D>=500);m++);else if(a.hasOwnProperty("params")&&
a.params){const B=a.params;if(typeof a.params==="object")for(m in B){if(!B[m])continue;const M=`params.${m}`,K=Cp(B[m]);b[M]=K;D+=M.length+K.length;if(D>500)break}else b.params=Cp(B)}if(g.length)for(m=0;m<g.length&&!(D=Ap(g[m],`params.context.${m}`,b,D),D>=500);m++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:f,name:z,lineNumber:l,fileName:h,stack:k,params:b,sampleWeight:1};m=Number(a.columnNumber);isNaN(m)||(b.lineNumber=`${b.lineNumber}:${m}`);
if(a.level==="IGNORED")var n=0;else a:{a=tp();for(n of a.cb)if(b.message&&b.message.match(n.oi)){n=n.weight;break a}for(var u of a.Za)if(u.callback(b)){n=u.weight;break a}n=1}b.sampleWeight=n;n=b;for(var p of pp){if(!p.Bc[n.name])continue;u=p.Bc[n.name];for(const B of u){u=n.message.match(B.regexp);if(!u)continue;n.params["params.error.original"]=u[0];a=B.groups;b={};for(m=0;m<a.length;m++)b[a[m]]=u[m+1],n.params[`params.error.${a[m]}`]=u[m+1];n.message=p.Wc(b);break}}n.params||(n.params={});p=tp();
n.params["params.errorServiceSignature"]=`msg=${p.cb.length}&cb=${p.Za.length}`;n.params["params.serviceWorker"]="false";t.document&&t.document.querySelectorAll&&(n.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new ph(oh,"sample")).constructor!==ph&&(n.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(n);n.sampleWeight===0||aw.has(n.message)||(d?kw(n,c):lw(n,c,e))}}}
function kw(a,b="ERROR"){mw(b,a);nw(a)}
function lw(a,b="ERROR",c){if(b==="ERROR"){xp.qb("handleError",a);if(R("record_app_crashed_web")&&dw===0&&a.sampleWeight===1){dw++;const d={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};R("report_client_error_with_app_crash_ks")||(d.systemHealth={crashData:{clientError:{logMessage:{message:a.message}}}});Pq("appCrashed",d)}cw++}else b==="WARNING"&&xp.qb("handleWarning",a);R("kevlar_gel_error_routing")&&(c=ow(b,a,c))&&(Pq("clientError",c),(b==="ERROR"||R("errors_flush_gel_always_killswitch"))&&Nv(void 0,
void 0,!1));R("suppress_error_204_logging")||mw(b,a);nw(a)}
function nw(a){try{aw.add(a.message)}catch(b){}bw++}
function ow(a,b,c={}){a:{for(d of gw)if(Wq(d.toLowerCase())){var d=!0;break a}d=!1}if(!d){var e={stackTrace:b.stack};b.fileName&&(e.filename=b.fileName);d=b.lineNumber&&b.lineNumber.split?b.lineNumber.split(":"):[];d.length!==0&&(d.length!==1||isNaN(Number(d[0]))?d.length!==2||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(e.lineNumber=Number(d[0]),e.columnNumber=Number(d[1])):e.lineNumber=Number(d[0]));d={level:"ERROR_LEVEL_UNKNOWN",message:b.message,errorClassName:b.name,sampleWeight:b.sampleWeight};
a==="ERROR"?d.level="ERROR_LEVEL_ERROR":a==="WARNING"&&(d.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:e};c.pageUrl=window.location.href;c.kvPairs=[];O("FEXP_EXPERIMENTS")&&(c.experimentIds=O("FEXP_EXPERIMENTS"));e=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!yo("web_disable_gel_stp_ecatcher_killswitch")&&e)for(const g of Object.keys(e))c.kvPairs.push({key:g,value:String(e[g])});if(b=b.params)for(var f of Object.keys(b))c.kvPairs.push({key:`client.${f}`,value:String(b[f])});
f=O("SERVER_NAME");b=O("SERVER_VERSION");f&&b&&(c.kvPairs.push({key:"server.name",value:f}),c.kvPairs.push({key:"server.version",value:b}));(f=O("PLAYER_CLIENT_VERSION"))&&c.kvPairs.push({key:"client.player.version",value:f});return{errorMetadata:c,stackTrace:a,logMessage:d}}}
function mw(a,b){const c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:O("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);for(const e of Object.keys(c))a.postParams[`client.${e}`]=c[e];if(b=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(var d of Object.keys(b))a.postParams[d]=
b[d];(d=O("LAVA_VERSION"))&&(a.postParams["lava.version"]=d);d=O("SERVER_NAME");b=O("SERVER_VERSION");d&&b&&(a.postParams["server.name"]=d,a.postParams["server.version"]=b);(d=O("PLAYER_CLIENT_VERSION"))&&(a.postParams["client.player.version"]=d)}gp(`${O("ECATCHER_REPORT_HOST","")}/error_204`,a)}
function pw(a,...b){a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push(...b)}
;function qw(a){for(const b of a.register.values())b.Dd("ABORTED")}
class rw{constructor(){this.register=new Map}clear(){qw(this);this.register.clear()}}var sw=new rw;let tw=Date.now().toString();
function uw(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(tw)for(a=1,b=0;b<tw.length;b++)d[a%16]^=d[(a-1)%16]/4^tw.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var vw;let ww=t.ytLoggingDocDocumentNonce_;ww||(ww=uw(),v("ytLoggingDocDocumentNonce_",ww));vw=ww;var xw=class{constructor(a){this.h=a}getAsJson(){const a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a}getAsJspb(){const a=new bo;
this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&F(a,2,ge(this.h.veType)),this.h.veCounter!==void 0&&F(a,6,ge(this.h.veCounter)),this.h.elementIndex!==void 0&&F(a,3,ge(this.h.elementIndex)),this.h.isCounterfactual&&F(a,5,ce(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();of(a,bo,7,b)}this.h.youtubeData!==void 0&&of(a,ao,8,this.h.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.h.trackingParams&&
!!this.h.veType}getLoggingDirectives(){return this.h.loggingDirectives}};function yw(a=0){return O("client-screen-nonce-store",{})[a]}
function zw(a,b=0){let c=O("client-screen-nonce-store");c||(c={},xo("client-screen-nonce-store",c));c[b]=a}
function Aw(a=0){return a===0?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function Bw(a=0){return O(Aw(a))}
v("yt_logging_screen.getRootVeType",Bw);function Cw(a=0){a=Bw(a);var b;a?b=new xw({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):b=null;return b}
function Dw(){let a=O("csn-to-ctt-auth-info");a||(a={},xo("csn-to-ctt-auth-info",a));return a}
function Ew(){return Object.values(O("client-screen-nonce-store",{})).filter(a=>a!==void 0)}
function Fw(a=0){a=yw(a);if(!a&&!O("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
v("yt_logging_screen.getCurrentCsn",Fw);function Gw(a,b,c){const d=Dw();(c=Fw(c))&&delete d[c];b&&(d[a]=b)}
function Hw(a){return Dw()[a]}
v("yt_logging_screen.getCttAuthInfo",Hw);v("yt_logging_screen.setCurrentScreen",function(a,b,c=0,d){if(a!==yw(c)||b!==O(Aw(c)))if(Gw(a,d,c),zw(a,c),xo(Aw(c),b),b=()=>{setTimeout(()=>{a&&Pq("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:vw,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Iw(){const a=kh(Jw);let b;return(new dj((c,d)=>{a.onSuccess=e=>{So(e)?c(new Kw(e)):d(new Lw(`Request failed, status=${To(e)}`,"net.badstatus",e))};
a.onError=e=>{d(new Lw("Unknown request error","net.unknown",e))};
a.onTimeout=e=>{d(new Lw("Request timed out","net.timeout",e))};
b=gp("//googleads.g.doubleclick.net/pagead/id",a)})).Ic(c=>{c instanceof mj&&b?.abort();
return ij(c)})}
var Lw=class extends Ba{constructor(a,b,c){super(`${a}, errorCode=${b}`);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}},Kw=class{constructor(a){this.xhr=a}};function Mw(a,b=null){a.ka=2;a.h=b}
function Nw(a,b=null){a.ka=1;a.h=b}
class Ow{constructor(){this.ka=0;this.h=null}then(a,b,c){return this.ka===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Pw(a):this.ka===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Qw(a):this}getValue(){return this.h}isRejected(){return this.ka==2}}Ow.prototype.$goog_Thenable=!0;function Qw(a=null){const b=new Ow;Mw(b,a);return b}
function Pw(a=null){const b=new Ow;Nw(b,a);return b}
;function Rw(a){const b=O("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(Ab(a)));return a}
function Sw(a){const b={};R("json_condensed_response")&&(b.prettyPrint="false");return a=Mo(a,b||{},!1)}
function Tw(a,b="POST"){a={method:b,mode:No(a)?"same-origin":"cors",credentials:No(a)?"same-origin":"include"};b={};const c={};for(const d of Object.keys(b))b[d]&&(c[d]=b[d]);Object.keys(c).length>0&&(a.headers=c);return a}
;function Uw(){return Tg()||(Pc||Qc)&&Wq("applewebkit")&&!Wq("version")&&(!Wq("safari")||Wq("gsa/"))||Oc&&Wq("version/")?!0:O("EOM_VISITOR_DATA")?!1:!0}
;function Vw(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Ww(a){var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");let c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(d){return b}if(c)a:for(const d in go)if(go[d]==c.embeddedPlayerMode){b=go[d];break a}return b}
;class Xw extends Ba{constructor(a){super(a.message||a.description||a.name);this.isMissing=a instanceof Yw;this.isTimeout=a instanceof Lw&&a.errorCode=="net.timeout";this.isCanceled=a instanceof mj}}Xw.prototype.name="BiscottiError";class Yw extends Ba{constructor(){super("Biscotti ID is missing from server")}}Yw.prototype.name="BiscottiMissingError";const Jw={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0};let Zw=null;
function $w(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Uw())return Error("User has not consented - not fetching biscotti id.");const a=O("PLAYER_VARS",{});if(ih(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Ww(a)==="EMBEDDED_PLAYER_MODE_PFL")return Error("Biscotti id fetching has been disabled for pfl.")}
function so(){const a=$w();if(a!==void 0)return ij(a);Zw||(Zw=Iw().then(ax).Ic(b=>bx(2,b)));
return Zw}
function ax(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Yw;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Yw;a=a.id;to(a);Zw=Pw(a);cx(18E5,2);return a}
function bx(a,b){b=new Xw(b);to("");Zw=Qw(b);a>0&&cx(12E4,a-1);throw b;}
function cx(a,b){Uo(function(){Iw().then(ax,c=>bx(b,c)).Ic(bj)},a)}
function dx(){try{const a=w("yt.ads.biscotti.getId_");return a?a():so()}catch(a){return ij(a)}}
;function ex(a){a&&(a.dataset?a.dataset[fx()]="true":bb(a))}
function gx(a){return a?a.dataset?a.dataset[fx()]:a.getAttribute("data-loaded"):null}
const hx={};function fx(){return hx.loaded||(hx.loaded="loaded".replace(/\-([a-z])/g,(a,b)=>b.toUpperCase()))}
;class ix{constructor(a){a=a||{};const b={},c={};this.url=a.url||"";this.args=a.args||kh(b);this.assets=a.assets||{};this.attrs=a.attrs||kh(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}clone(){const a=new ix;for(const b in this)if(this.hasOwnProperty(b)){const c=this[b];ja(c)=="object"?a[b]=kh(c):a[b]=c}return a}};var jx=["att/get"],kx=["share/get_share_panel"],lx=["share/get_web_player_share_panel"],mx=["feedback"],nx=["notification/modify_channel_preference"],ox=["browse/edit_playlist"],px=["subscription/subscribe"],qx=["subscription/unsubscribe"];const rx=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};v("yt.msgs_",rx);function sx(a){uo(rx,arguments)}
;function tx(a,b,c=null){ux(a,b,c)}
function vx(a){a=wx(a);const b=document.getElementById(a);b&&(Gu(a),b.parentNode.removeChild(b))}
function xx(a,b){a&&b&&(a=`${ma(b)}`,(a=yx[a])&&Eu(a))}
function ux(a,b,c=null){const d=wx(typeof a==="string"?a:a.toString());let e=document.getElementById(d);var f=e&&gx(e);const g=e&&!f;f?b&&b():(b&&(f=Cu(d,b),b=`${ma(b)}`,yx[b]=f),g||(e=zx(a,d,()=>{gx(e)||(ex(e),Fu(d),Uo(()=>{Gu(d)},0))},c)))}
function zx(a,b,c,d=null){const e=rh("SCRIPT");e.id=b;e.onload=()=>{c&&setTimeout(c,0)};
e.onreadystatechange=()=>{switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);$a(e,typeof a==="string"?Xn(a):a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function wx(a){const b=document.createElement("a");Sa(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return`js-${vb(a)}`}
const yx={};function Ax(a){const b=Bx(a);let c=document.getElementById(b);const d=c&&gx(c);d||c&&!d||(c=Cx(a,b,()=>{if(!gx(c)){ex(c);Fu(b);const e=ra(Gu,b);Uo(e,0)}}))}
function Cx(a,b,c){const d=document.createElement("link");d.id=b;d.onload=()=>{c&&setTimeout(c,0)};
a=Xn(a);eb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Bx(a){const b=rh("A");Sa(b,new Ka(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return`css-${vb(a)}`}
;function Dx(a,...b){if(!Ex(a)||b.some(c=>!Ex(c)))throw Error("Only objects may be merged.");
for(const c of b)Fx(a,c)}
function Fx(a,b){for(const c in b)if(Ex(b[c])){if(c in a&&!Ex(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Fx(a[c],b[c])}else if(Gx(b[c])){if(c in a&&!Gx(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Hx(a[c],b[c])}else a[c]=b[c];return a}
function Hx(a,b){for(const c of b)Ex(c)?a.push(Fx({},c)):Gx(c)?a.push(Hx([],c)):a.push(c);return a}
function Ex(a){return typeof a==="object"&&!Array.isArray(a)}
function Gx(a){return typeof a==="object"&&Array.isArray(a)}
;const Ix="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Jx(a,b){var c=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),d=yb(window.location.href);d&&c.push(d);d=yb(a);if(fb(c,d)>=0||!d&&a.lastIndexOf("/",0)==0)if(c=document.createElement("a"),Sa(c,a),a=c.href)if(a=Ab(a),a=Bb(a))if(!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Fw()},b)),e){var e=parseInt(e,10);isFinite(e)&&e>0&&Kx(a,b,e)}else Kx(a,b)}
function Kx(a,b,c){a=Lx(a);b=b?Eb(b):"";c=c||5;Uw()&&Ip(a,b,c)}
function Lx(a){for(let b of Ix)a=Jb(a,b);return"ST-"+vb(a).toString(36)}
;Date.now();function Mx(a){let b=0;for(let c=0;c<a.length;c++)b=b*31+a.charCodeAt(c),c<a.length-1&&(b%=0x800000000000);return b%1E5}
;class Nx extends Js{constructor(a){super(arguments);this.csn=a}}const Ss=new Ks("screen-created",Nx),Ox=[];let Px=0;const Qx=new Map,Rx=new Map,Sx=new Map;
function Tx(a,b,c,d,e=!1,f={}){Object.assign(f,Ux({cttAuthInfo:Hw(b)||void 0},b));for(const h of d){var g=h.getAsJson();(gh(g)||!g.trackingParams&&!g.veType)&&V(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){const k=Vx(h,b);if(g.veType&&!Rx.has(k)&&!Sx.has(k)&&!e){if(!R("il_attach_cache_limit")||Qx.size<1E3){Qx.set(k,[a,b,c,h]);return}R("il_attach_cache_limit")&&Qx.size>1E3&&V(new S("IL Attach cache exceeded limit"))}g=Vx(c,b);Qx.has(g)?Wx(c,b):Sx.set(g,!0)}}d=d.filter(h=>
{h.csn!==b?(h.csn=b,h=!0):h=!1;return h});
c={csn:b,parentVe:c.getAsJson(),childVes:ib(d,h=>h.getAsJson())};
b==="UNDEFINED_CSN"?Xx("visualElementAttached",f,c):a?$v("visualElementAttached",c,a,f):Pq("visualElementAttached",c,f)}
function Xx(a,b,c){Ox.push({sf:a,payload:c,li:void 0,options:b});Px||(Px=Ts())}
function Us(a){if(Ox){for(const b of Ox)b.payload&&(b.payload.csn=a.csn,Pq(b.sf,b.payload,b.options));Ox.length=0}Px=0}
function Vx(a,b){return`${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`}
function Wx(a,b){a=Vx(a,b);Qx.has(a)&&(b=Qx.get(a)||[],Tx(b[0],b[1],b[2],[b[3]],!0,{}),Qx.delete(a))}
function Ux(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;class Yx{flush(a=[],b=!1){if(R("enable_client_streamz_web"))for(const c of a)a=Hg(c),this.h&&of(a,Dg,2,this.h),a={serializedIncrementBatch:Uc(a.j())},Pq("streamzIncremented",a,{sendIsolatedPayload:b})}}var xl=class extends Yx{constructor(){super()}},Zx=class extends Yx{constructor(a){super();var b=new Dg;var c=new Cg;c=tf(c,1,"botguard");a=tf(c,2,a);a=nf(a,Cg);jf(b,1,Eg,a);a&&!xd(a)&&Ve(b.W);this.h=b}};let wl;const $x=new Map;function ay(){try{return!!self.localStorage}catch{return!1}}
;function by(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function cy(a){if(ay()){var b=Object.keys(window.localStorage);for(const c of b)b=by(c),b===void 0||a.includes(b)||self.localStorage.removeItem(c)}}
function dy(){if(!ay())return!1;const a=$p();var b=Object.keys(window.localStorage);for(const c of b)if(b=by(c),b!==void 0&&b!==a)return!0;return!1}
;function ey(){let a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch{a=!0}return(O("INNERTUBE_CLIENT_NAME")==="WEB"||O("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function fy(){try{window.sessionStorage.removeItem("stickiness_reload");window.sessionStorage.removeItem("session_logininfo");xo("LOGIN_INFO","");window.sessionStorage.setItem("from_switch_account","1");var a;let c=gy;c||(c=document.querySelector("#persist_identity"));if(a=c){var b=a.src?(new URL(a.src)).origin:"*";a.contentWindow?.postMessage({action:"clear"},b)}}catch{}}
function hy(a){if(a)if(a.startsWith("https://accounts.google.com/AddSession"))fy();else if(a.startsWith("https://accounts.google.com/ServiceLogin"))fy();else{var b;if(b=a.startsWith("https://myaccount.google.com"))b=(a instanceof qm?a.clone():new qm(a)).h.endsWith("/youtubeoptions");b&&fy()}if(O("LOGGED_IN",!0)&&ey()){b=O("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=yb(window.location.href);c&&b.push(c);c=yb(a);fb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=Ab(a),(b=Bb(b))?(b=Lx(b),b=(b=Jp(b)||null)?Jo(b):
{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;ey()?(d||(d=O("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Jx(a,b)}}
let gy=null;function iy(a,b={},c=!1){const d=O("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Jx(a,b);if(c)return!1;hy(a);b=window;a=Fb(a,{});hy(a);a=Pa(a+"",Oa)||La;b=b.location;a=Ra(a);a!==void 0&&(b.href=a);return!0}
;function jy(a){if(ih(O("PLAYER_VARS",{}))!="1"){a&&ro();try{dx().then(()=>{},()=>{}),Uo(jy,18E5)}catch(b){Bo(b)}}}
;var ky=class{constructor(){this.h={}}contains(a){return Object.prototype.hasOwnProperty.call(this.h,a)}get(a){if(this.contains(a))return this.h[a]}set(a,b){this.h[a]=b}Ub(){return Object.keys(this.h)}remove(a){delete this.h[a]}};new class{constructor(){this.mappings=new ky}get(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Ta(b,void 0)}}return a}};const ly=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function my(){var a=window.location.href;if(R("kevlar_disable_theme_param"))return null;const b=zb(a);if(R("enable_dark_theme_only_on_shorts")&&b?.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{const c=Ko(a).theme;return ly.get(c)||null}catch(c){}return null}
;function ny(a){const b=new gk;if(a.interpreterJavascript){var c=Vn(a.interpreterJavascript);c=Ya(c).toString();var d=new ek;tf(d,6,c);of(b,ek,1,d,Cd)}else a.interpreterUrl&&(c=Wn(a.interpreterUrl),c=Ia(c).toString(),d=new fk,tf(d,4,c),of(b,fk,2,d,Cd));a.interpreterHash&&hf(b,3,ve(a.interpreterHash),Cd);a.program&&hf(b,4,ve(a.program),Cd);a.globalName&&hf(b,5,ve(a.globalName),Cd);a.clientExperimentsStateBlob&&hf(b,7,ve(a.clientExperimentsStateBlob),Cd);return b}
function oy(a){const b={};a=a.split("&");for(const c of a)a=c.split("="),a.length===2&&(b[a[0]]=a[1]);return b}
function py(a){return Number(a.t)||7200}
;async function qy(){var a=window;await Ob(ry());const b=a.bgevmc;if(!b)throw Error("BGE Controls not exposed");return{pause:()=>{b.p()},
resume:()=>{b.r()},
checkForRefresh:()=>b.cr()}}
function ry(){return R("bg_st_hr")?"havuokmhhs-0":`${"havuokmhhs"}-${Math.floor(globalThis.performance?.timeOrigin||0)}`}
function sy(a){window.bgens=a}
class ty{constructor(a){this.h=a}bindInnertubeChallengeFetcher(a){this.h.bicf(a)}registerChallengeFetchedCallback(a){this.h.bcr(a)}getLatestChallengeResponse(){return this.h.blc()}}function uy(){return new Promise(a=>{const b=window;b.ntpevasrs!==void 0?a(new ty(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(c=>{a(new ty(c))}))})}
;const vy=[];var wy=function(a,...b){if(b.length===0)return Ha(a[0]);let c=a[0];for(let d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Ha(c)}`https://static.doubleclick.net/instream/ad_status.js`;
let xy=!1;function yy(){if(Uw()){var a=O("PLAYER_VARS",{});if(ih(a)!="1"&&Ww(a)!=="EMBEDDED_PLAYER_MODE_PFL"){var b=()=>{xy=!0;"google_ad_status"in window?xo("DCLKSTAT",1):xo("DCLKSTAT",2)};
try{const c=Va(document);tx(wy,b,c)}catch(c){}vy.push(Jl.va(()=>{if(!(xy||"google_ad_status"in window)){try{xx(wy.toString(),b)}catch(c){}xy=!0;xo("DCLKSTAT",3)}},5E3))}}}
function zy(){const a=Number(O("DCLKSTAT",0));return isNaN(a)?0:a}
;var W=class{constructor(a){this.h=a}};[new W("b.f_"),new W("j.s_"),new W("r.s_"),new W("e.h_"),new W("i.s_"),new W("s.t_"),new W("p.h_"),new W("s.i_"),new W("f.i_"),new W("a.b_"),new W("a.o_"),new W("g.o_"),new W("p.i_"),new W("p.m_"),new W("n.k_"),new W("i.f_"),new W("a.s_"),new W("m.c_"),new W("n.h_"),new W("o.p_"),new W("m.p_"),new W("o.a_"),new W("d.p_"),new W("e.i_")].reduce((a,b)=>{a[b.h]=b;return a},{});function Ay(a){return w("ytcsi."+(a||"")+"data_")||By(a)}
function Cy(){const a=Ay();a.info||(a.info={});return a.info}
function Dy(a){a=Ay(a);a.metadata||(a.metadata={});return a.metadata}
function Ey(a){a=Ay(a);a.tick||(a.tick={});return a.tick}
function Fy(a){a=Ay(a);if(a.gel){const b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Gy(a){a=Fy(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Hy(){const a=Fy();a.preLoggedGelInfos||(a.preLoggedGelInfos=[]);return a.preLoggedGelInfos}
function Iy(a){let b=Ay(a).nonce;b||(b=uw(),Ay(a).nonce=b);return b}
function By(a){const b={tick:{},info:{}};v("ytcsi."+(a||"")+"data_",b);return b}
;const Jy=I("ytcsi_debug_max_size",100);function Ky(){let a=w("ytcsi.debug");a||(a=[],v("ytcsi.debug",a),v("ytcsi.reference",{}));return a}
function Ly(a){const b=Ky();b.push(a);R("limit_ytcsi_debug_array_size")&&b.length>Jy&&b.splice(0,b.length-Jy)}
function My(a){a=a||"";const b=Ny();if(b[a])return b[a];const c={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};Ly(c);return b[a]=c}
function Ny(){const a=w("ytcsi.reference");if(a)return a;Ky();return w("ytcsi.reference")}
;var Oy={auto_search:"LATENCY_ACTION_AUTO_SEARCH",ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",cast_splash:"LATENCY_ACTION_CAST_SPLASH",channel_activity:"LATENCY_ACTION_FAMILY_CENTER_CHANNEL_ACTIVITY",channels:"LATENCY_ACTION_CHANNELS",chips:"LATENCY_ACTION_CHIPS",commerce_transaction:"LATENCY_ACTION_COMMERCE_TRANSACTION",direct_playback:"LATENCY_ACTION_DIRECT_PLAYBACK",editor:"LATENCY_ACTION_EDITOR",
embed:"LATENCY_ACTION_EMBED",embed_no_video:"LATENCY_ACTION_EMBED_NO_VIDEO",entity_key_serialization_perf:"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",entity_key_deserialization_perf:"LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",explore:"LATENCY_ACTION_EXPLORE",favorites:"LATENCY_ACTION_FAVORITES",home:"LATENCY_ACTION_HOME",inboarding:"LATENCY_ACTION_INBOARDING",landing:"LATENCY_ACTION_LANDING",learning:"LATENCY_ACTION_LEARNING",learning_journey_browse:"LATENCY_ACTION_LEARNING_JOURNEY_BROWSE",
learning_journey_watch:"LATENCY_ACTION_LEARNING_JOURNEY_WATCH",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",live_pagination:"LATENCY_ACTION_LIVE_PAGINATION",management:"LATENCY_ACTION_MANAGEMENT",mini_app:"LATENCY_ACTION_MINI_APP_PLAY",notification_settings:"LATENCY_ACTION_FAMILY_CENTER_NOTIFICATION_SETTINGS",onboarding:"LATENCY_ACTION_ONBOARDING",parent_profile_settings:"LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",parent_tools_collection:"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",parent_tools_dashboard:"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",
player_att:"LATENCY_ACTION_PLAYER_ATTESTATION",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",profile_settings:"LATENCY_ACTION_KIDS_PROFILE_SETTINGS",profile_switcher:"LATENCY_ACTION_LOGIN",projects:"LATENCY_ACTION_PROJECTS",reel_watch:"LATENCY_ACTION_REEL_WATCH",results:"LATENCY_ACTION_RESULTS",red:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",premium:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",privacy_policy:"LATENCY_ACTION_FAMILY_CENTER_PRIVACY_POLICY",review:"LATENCY_ACTION_REVIEW",
search_overview_answer:"LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",search_ui:"LATENCY_ACTION_SEARCH_UI",search_suggest:"LATENCY_ACTION_SUGGEST",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",secret_code:"LATENCY_ACTION_KIDS_SECRET_CODE",switchplan:"LATENCY_ACTION_UNPLUGGED_SWITCH_PLAN",seek:"LATENCY_ACTION_PLAYER_SEEK",settings:"LATENCY_ACTION_SETTINGS",store:"LATENCY_ACTION_STORE",supervision_dashboard:"LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_DASHBOARD",bedtime_reminder_settings:"LATENCY_ACTION_FAMILY_CENTER_BEDTIME_REMINDER_SETTINGS",
break_reminder_settings:"LATENCY_ACTION_FAMILY_CENTER_BREAK_REMINDER_SETTINGS",supervision_settings_dashboard:"LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_SETTINGS_DASHBOARD",time_management:"LATENCY_ACTION_FAMILY_CENTER_TIME_MANAGEMENT",update_profile:"LATENCY_ACTION_FAMILY_CENTER_UPDATE_PROFILE",viewing_permissions:"LATENCY_ACTION_FAMILY_CENTER_VIEWING_PERMISSIONS",shorts_settings:"LATENCY_ACTION_FAMILY_CENTER_SHORTS_SETTINGS",privacy_settings:"LATENCY_ACTION_FAMILY_CENTER_PRIVACY_SETTINGS",tenx:"LATENCY_ACTION_TENX",
video_preview:"LATENCY_ACTION_VIDEO_PREVIEW",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",watch_it_again:"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS",ww_rqs:"LATENCY_ACTION_WHO_IS_WATCHING",voice_assistant:"LATENCY_ACTION_VOICE_ASSISTANT",cast_load_by_entity_to_watch:"LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
networkless_performance:"LATENCY_ACTION_NETWORKLESS_PERFORMANCE",gel_compression:"LATENCY_ACTION_GEL_COMPRESSION",gel_jspb_serialize:"LATENCY_ACTION_GEL_JSPB_SERIALIZE",attestation_challenge_fetch:"LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH"};function Py(a){return Oy[a]||"LATENCY_ACTION_UNKNOWN"}
;var Qy=class extends Js{constructor(a,b){super(arguments);this.timer=b}},Ry=new Ks("aft-recorded",Qy);v("ytLoggingGelSequenceIdObj_",t.ytLoggingGelSequenceIdObj_||{});const Sy=t.ytLoggingLatencyUsageStats_||{};v("ytLoggingLatencyUsageStats_",Sy);function Ty(){Uy.instance||(Uy.instance=new Uy);return Uy.instance}
function Vy(a,b){Sy[b]=Sy[b]||{count:0};var c=Sy[b];c.count++;c.time=U();a.h||(a.h=aq(()=>{const d=U();for(const e in Sy)Sy[e]&&d-Sy[e].time>6E4&&delete Sy[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new S("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||V(c)),!0):!1}
var Uy=class{constructor(){this.h=0}tick(a,b,c,d){Vy(this,`tick_${a}_${b}`)||Pq("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})}info(a,b,c){const d=Object.keys(a).join("");Vy(this,`info_${d}_${b}`)||(a=Object.assign({},a),a.clientActionNonce=b,Pq("latencyActionInfo",a,{cttAuthInfo:c}))}jspbInfo(){}span(a,b,c){const d=Object.keys(a).join("");Vy(this,`span_${d}_${b}`)||(a.clientActionNonce=b,Pq("latencyActionSpan",a,{cttAuthInfo:c}))}};const Wy=window;class Xy{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
function Yy(){var a;R("csi_use_performance_navigation_timing")?(a=X?.getEntriesByType?.("navigation")?.[0]?.toJSON?.())?(a.requestStart=Zy(a.requestStart),a.responseEnd=Zy(a.responseEnd),a.redirectStart=Zy(a.redirectStart),a.redirectEnd=Zy(a.redirectEnd),a.domainLookupEnd=Zy(a.domainLookupEnd),a.connectStart=Zy(a.connectStart),a.connectEnd=Zy(a.connectEnd),a.responseStart=Zy(a.responseStart),a.secureConnectionStart=Zy(a.secureConnectionStart),a.domainLookupStart=Zy(a.domainLookupStart),a.isPerformanceNavigationTiming=
!0):a=X.timing:a=R("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(X.timing)):X.timing;return a}
function Zy(a){return Math.round($y()+a)}
function $y(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&X.timeOrigin?Math.floor(X.timeOrigin):X.timing.navigationStart}
var X=Wy.performance||Wy.mozPerformance||Wy.msPerformance||Wy.webkitPerformance||new Xy;let az=!1,bz=!1;
var cz={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj",
'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"},dz=qa(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||bj,X);
function ez(){const a=Hy(),b=Gy();var c=void 0;for(var d=0;d<a.length;d++){const h=a[d];if(h.loadType){c=h.loadType;break}}if(Dy().loadType==="cold"&&(b.loadType==="cold"||c==="cold")){c=Ey();d=Fy();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||typeof c[e]==="number"&&Y(e,fz(e));var f={},g=!1;e=h=>{Dx(b,h);Dx(f,h);g=!0};
for(const h of a)e(h);g&&gz(f)}}
function hz(a,b){Y("_start",a,b)}
function gz(a,b){if(!R("web_csi_action_sampling_enabled")||!Ay(b).actionDisabled){var c=My(b||"");Dx(c.info,a);a.loadType&&(c=a.loadType,Dy(b).loadType=c);Dx(Gy(b),a);c=Iy(b);b=Ay(b).cttAuthInfo;Ty().info(a,c,b)}}
function iz(){return(Qu().resolve(new Ku(As))?.wc()?.loggingHotConfig?.csiConfig?.debugTicks??[]).map(a=>Object.values(a)[0])}
function Y(a,b,c){if(!R("web_csi_action_sampling_enabled")||!Ay(c).actionDisabled){var d=Iy(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){Qu().resolve(new Ku(As))?.wc()&&!bz&&(bz=!0,Y("gcfl",U(),c));e=Qu().resolve(new Ku(As))?.wc()?.loggingHotConfig?.csiConfig?.debugSampleWeight||0;var f;if(f=e!==0)b:{f=iz();if(f.length>0)for(let h=0;h<f.length;h++)if(a===f[h]){f=!0;break b}f=!1}f?(e=Mx(d)%e!==0,Ay(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,gz(f,c)),Ay(c).debugTicksExcludedLogged=
!0):e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,X.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=` (${c})`),f===void 0||R("web_csi_disable_alt_time_performance_mark"))X.mark(e);else{f=R("csi_use_performance_navigation_timing")?f-X.timeOrigin:f-(X.timeOrigin||X.timing.navigationStart);try{X.mark(e,{startTime:f})}catch(h){}}e=My(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(var g of e.callback[a])g();g=Fy(c);g.gelTicks&&(g.gelTicks[a]=!0);e=Ey(c);g=b||U();e[a]=g;e=Ay(c).cttAuthInfo;a==="_start"?
(a=Ty(),Vy(a,`baseline_${d}`)||Pq("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:e})):Ty().tick(a,d,b,e);jz(c);return g}}}
function kz(){const a=X.getEntriesByType?.("mark");a&&a.forEach(b=>{b.name.startsWith("mark_")&&X.clearMarks?.(b.name)})}
function lz(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=iu+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function mz(){var a=O("TIMING_INFO",{});const b={},c=(d,e,f)=>{e=e.match("_rid")?e.split("_rid")[0]:e;typeof f==="number"&&(f=JSON.stringify(f));d.requestIds?d.requestIds.push({endpoint:e,id:f}):d.requestIds=[{endpoint:e,id:f}]};
for(const [d,e]of Object.entries(a)){a=d;const f=e;switch(a){case "GetBrowse_rid":c(b,a,f);break;case "GetGuide_rid":c(b,a,f);break;case "GetHome_rid":c(b,a,f);break;case "GetPlayer_rid":c(b,a,f);break;case "GetSearch_rid":c(b,a,f);break;case "GetSettings_rid":c(b,a,f);break;case "GetTrending_rid":c(b,a,f);break;case "GetWatchNext_rid":c(b,a,f);break;case "yt_red":b.isRedSubscriber=!!f;break;case "yt_ad":b.isMonetized=!!f}}return b}
function nz(a,b){a=document.querySelector(a);if(!a)return!1;var c="";const d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Va(document)&&a.setAttribute("nonce",Va(document));return c?(a=X.getEntriesByName(c))&&a[0]&&(a=a[0],c=$y(),Y("rsf_"+b,c+Math.round(a.fetchStart)),Y("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function oz(){const a=window.location.protocol;var b=X.getEntriesByType("resource");b=hb(b,c=>c.name.indexOf(`${a}//fonts.gstatic.com/s/`)===0);
(b=jb(b,(c,d)=>d.duration>c.duration?d:c))&&b.startTime>0&&b.responseEnd>0&&(Y("wffs",Zy(b.startTime)),Y("wffe",Zy(b.responseEnd)))}
function pz(a){var b=fz("aft",a);if(b)return b;b=O((a||"")+"TIMING_AFT_KEYS",["ol"]);const c=b.length;for(let d=0;d<c;d++){const e=fz(b[d],a);if(e)return e}return NaN}
function qz(a){v("ytglobal.timing"+(a||"")+"ready_",!0)}
function fz(a,b){if(a=Ey(b)[a])return typeof a==="number"?a:a[a.length-1]}
function jz(a){const b=fz("_start",a),c=pz(a),d=!az;b&&c&&d&&(Ps(Ry,new Qy(Math.round(c-b),a)),az=!0)}
function rz(){if(X.getEntriesByType){var a=X.getEntriesByType("paint");if(a=kb(a,c=>c.name==="first-paint"))return Zy(a.startTime)}let b;
R("csi_use_performance_navigation_timing")?b=X.getEntriesByType("first-paint")[0].startTime:b=X.timing.ri;return b?Math.max(0,b):0}
;function sz(a,b){P(()=>{My("").info.actionType=a;b&&xo("TIMING_AFT_KEYS",b);xo("TIMING_ACTION",a);var c=mz();Object.keys(c).length>0&&gz(c);c={isNavigation:!0,actionType:Py(O("TIMING_ACTION"))};var d=O("PREVIOUS_ACTION");d&&(c.previousAction=Py(d));if(d=O("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=O("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Fw())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=lz();if(d===1||d===-1)c.isVisible=!0;Dy();Cy();c.loadType="cold";d=Cy();var e=Yy();let f=$y();const g=O("CSI_START_TIMESTAMP_MILLIS",
0);g>0&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Y("srt",e.responseStart),d.prerender!==1&&hz(f));d=rz();d>0&&Y("fpt",d);d=Yy();d.isPerformanceNavigationTiming&&gz({performanceNavigationTiming:!0},void 0);Y("nreqs",d.requestStart,void 0);Y("nress",d.responseStart,void 0);Y("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Y("nrs",d.redirectStart,void 0),Y("nre",d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Y("ndnss",d.domainLookupStart,void 0),
Y("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Y("ntcps",d.connectStart,void 0),Y("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=$y()&&d.connectEnd-d.secureConnectionStart>0&&(Y("nstcps",d.secureConnectionStart,void 0),Y("ntcpe",d.connectEnd,void 0));X&&"getEntriesByType"in X&&oz();d=[];if(document.querySelector&&X&&X.getEntriesByName)for(var h in cz)cz.hasOwnProperty(h)&&(e=cz[h],nz(h,e)&&d.push(e));if(d.length>0){c.resourceInfo=[];for(const k of d)c.resourceInfo.push({resourceCache:k})}gz(c);
ez();qz();h=O("TIMING_ACTION");w("ytglobal.timingready_")&&h&&tz()&&pz()&&jz()})()}
function uz(){var a={};P(()=>{vz();var b=a.sampleRate;if(!R("web_csi_action_sampling_enabled")||b===void 0||b<=1)b=!1;else{var c=Iy("attestation_challenge_fetch");b=Mx(c)%b!==0}b&&(Ay("attestation_challenge_fetch").actionDisabled=!0);My("attestation_challenge_fetch").info.actionType="attestation_challenge_fetch";a.cttAuthInfo&&(Ay("attestation_challenge_fetch").cttAuthInfo=a.cttAuthInfo);xo("attestation_challenge_fetchTIMING_ACTION","attestation_challenge_fetch");P(hz)(a.startTime,"attestation_challenge_fetch");
b={actionType:Py("attestation_challenge_fetch")};a.ni&&(b.previousAction=Py(O("TIMING_ACTION")));(c=Fw())&&c!=="UNDEFINED_CSN"&&(b.clientScreenNonce=c);wz(b,"attestation_challenge_fetch");qz("attestation_challenge_fetch")})()}
function vz(){P(()=>{tz("attestation_challenge_fetch")&&xz("aa",void 0,"attestation_challenge_fetch");const a=Ny();a.attestation_challenge_fetch&&delete a.attestation_challenge_fetch;const b={timerName:"attestation_challenge_fetch",info:{},tick:{},span:{},jspbInfo:[]};Ly(b);a.attestation_challenge_fetch=b;By("attestation_challenge_fetch");dz();kz()})()}
function tz(a){return P(()=>yz("_start",a))()}
function wz(a,b,c=!1){P(gz)(a,b,c)}
function xz(a,b,c){return P(Y)(a,b,c)}
function yz(a,b){return P(()=>{const c=Ey(b);return a in c})()}
function zz(a){if(!R("universal_csi_network_ticks"))return"";a=zb(a)||"";const b=Object.keys(Hs);for(let c=0;c<b.length;c++){const d=b[c];if(a.includes(d))return d}return""}
function Az(a){if(!R("universal_csi_network_ticks"))return()=>{};
const b=Hs[a];return b?(Bz(b),()=>{var c=R("universal_csi_network_ticks")?(c=Is[a])?Bz(c):!1:!1;return c}):()=>{}}
function Bz(a){return P(()=>{if(yz(a))return!1;xz(a,void 0,void 0);return!0})()}
function Cz(a){P(()=>{if(!tz("attestation_challenge_fetch")||yz(a,"attestation_challenge_fetch"))return!1;xz(a,void 0,"attestation_challenge_fetch");return!0})()}
function Dz(){P(()=>{const a=Iy();requestAnimationFrame(()=>{setTimeout(()=>{a===Iy()&&xz("ol",void 0,void 0)},0)})})()}
const Ez=window;Ez.ytcsi&&(Ez.ytcsi.infoGel=wz,Ez.ytcsi.tick=xz);function Fz(a,b){a.h=b}
async function Gz(a){let b;if(t.ytAtP&&!R("ytatp_ks")){var c=await t.ytAtP;delete t.ytAtP;let e=c?.R;b=c?.T;e?a.i.h(1,a.j++):(a.i.h(2,a.j++),c=await a.xb(Hz(b,null)),e=JSON.stringify(c));t.ytAtRC?t.ytAtRC(e):V(Error("ytAtRC not defined for ytAtP."))}else t.ytAtRC?Jl.Xa(async()=>{b=t.ytAtT;delete t.ytAtT;if(t.ytAtRC){a.i.h(2,a.j++);var e=await a.xb(Hz(b,null));t.ytAtRC&&t.ytAtRC(JSON.stringify(e))}else a.i.h(6,a.j++)},2,I("att_init_delay",0)):(b=t.ytAtT,delete t.ytAtT,a.i.h(1,a.j++));
c=await uy();c.bindInnertubeChallengeFetcher(e=>{a.i.h(3,a.j++);return a.xb(Hz(b,e))});
c.registerChallengeFetchedCallback(e=>{e=e.challenge;if(!e)throw Error("BGE_MACR");e={challenge:e,ub:oy(e),vm:d,bgChallenge:new gk};e=Promise.resolve(e);a.h=e});
const d=await Ob(ry());c=c.getLatestChallengeResponse().challenge;if(!c)throw Error("BGE_MACIL");return{challenge:c,ub:oy(c),vm:d,bgChallenge:new gk}}
async function Iz(a){var b=Hz(void 0,ok().h);let c;try{c=await Jz(a,b)}catch(f){return V(Error("Failed to fetch attestation challenge after 5 attempts; not retrying for 24h.")),Kz(a,864E5),{challenge:"",ub:{},vm:void 0,bgChallenge:void 0}}b=c.pf;const d=c.qf;Kz(a,py(d)*1E3);a=void 0;let e;if("c1a"in d&&c.bgChallenge){e=ny(c.bgChallenge);try{await sk(ok(),e)}catch(f){return V(f),{challenge:b,ub:d,vm:a,bgChallenge:e}}try{a=new mk({challenge:e,Fb:{ja:"aGIf"}}),await a.Jb}catch(f){V(f),a=void 0}}return{challenge:b,
ub:d,vm:a,bgChallenge:e}}
async function Jz(a,b){let c=void 0,d=0;for(;d<5;){if(d>0){const e=1E3*Math.pow(2,d-1)+Math.random()*1E3;await new Promise(f=>{aq(()=>{f(void 0)},e)})}try{a.i.h(4,a.j++);
const e=await a.xb(b);return Lz(e)}catch(e){c=e,e instanceof Error&&V(e)}d++}throw c;}
function Kz(a,b){const c=Date.now()+b,d=async()=>{const e=c-Date.now();e<1E3?await Mz(a):aq(d,Math.min(e,6E4))};
d()}
async function Nz(a,b){sy(2);try{const c=await a.network.xb(b);c?c.challenge&&!c.bgChallenge?sy(1):sy(4):sy(3);return c}catch(c){sy(3)}}
function Lz(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");const b=a.challenge,c=oy(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return{...a,pf:b,qf:c}}
async function Mz(a){const b=await Promise.race([a.h,null]);var c=Iz(a);a.h=c;b?.vm?.dispose()}
var Pz=class{constructor(a,b,c){this.network=a;this.options=b;this.P=c;this.j=0;this.h=null;this.i=new yl;b.Pd?Fz(this,Gz(this)):b.preload&&Fz(this,new Promise(d=>{aq(()=>{d(Iz(this))},0)}))}async u(){return!!await Promise.race([this.h,
null])}async o(a,b,c){this.h===null&&Fz(this,Iz(this));let d=!1;const e={};return Promise.race([(async()=>{this.options.di&&this.options.Pd&&await (await qy())?.checkForRefresh();var f=await this.h;e.challenge=f.challenge;if(f.vm){var g={c:f.challenge,e:a,...b};try{d=!0;let h;(h=await f.vm.snapshot({Ka:g}))?e.webResponse=h:e.error="ATTESTATION_ERROR_VM_NO_RESPONSE"}catch{e.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR"}}else"c1a"in f.ub&&(e.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");a==="ENGAGEMENT_TYPE_PLAYBACK"&&
(f=f.ub,g={},f.c6a&&(g.reportingStatus=String(Number(f.c)^zy())),f.c6b&&(g.broadSpectrumDetectionResult=String(Number(f.c)^Number(O("CATSTAT",0)))),e.adblockReporting=g);return e})(),
Oz(c,()=>{const f=Object.assign({},e);d&&(f.error="ATTESTATION_ERROR_VM_TIMEOUT");return f})])}async xb(a){const b=this.P;
if(!b||b.ya())return Nz(this,a);Cz("att_pna");return new Promise(c=>{Ji(b,"publicytnetworkstatus-online",()=>{Nz(this,a).then(c)})})}};
function Oz(a,b){return new Promise(c=>{aq(()=>{c(b())},a)})}
function Hz(a,b){const c={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(c.eacrToken=a);b&&(c.interpreterHash=b);return c}
;const Qz={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function Rz(a){if(a.length===1)return a[0];var b=Qz.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(Qz).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
;var Uz=class{constructor(){this.h=Sz.instance}xb(a){Cz("att_fsr");return Tz(this.h,a).then(b=>{Cz("att_frr");return b})}};var Vz=new Ju("INNERTUBE_TRANSPORT_TOKEN");async function Wz(){var a=Qu().resolve(Vz);if(a){if(a=await Xz(a)){if(a.errorMetadata){V(Error(`Datasync IDs fetch responded with ${a.errorMetadata.status}: ${a.error}`));return}return a.Yh}V(Error("Network request to get Datasync IDs failed."))}else V(Error("InnertubeTransportService unavailable in fetchDatasyncIds"))}
;function Yz(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){const c=Number(b.expirationSeconds);setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&Ip("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
var Zz=class{constructor(){this.h={};if(this.i=Lp()){const a=Jp("CONSISTENCY");a&&Yz(this,{encryptedTokenJarContents:a})}}handleResponse(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");b=b.Bb.context?.request?.consistencyTokenJars||[];if(a=a.responseContext?.consistencyTokenJar){for(const c of b)delete this.h[c.encryptedTokenJarContents];Yz(this,a)}}};const $z=window.location.hostname.split(".").slice(-2).join(".");function aA(a){return a.localStorage===void 0?new Hq("yt-client-location"):a.localStorage}
function bA(){cA=w("yt.clientLocationService.instance");cA||(cA=new dA,v("yt.clientLocationService.instance",cA));return cA}
var dA=class{constructor(){this.i=-1;let a=O("LOCATION_PLAYABILITY_TOKEN");O("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.localStorage=aA(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.h=void 0)}setLocationOnInnerTubeContext(a){a.client||(a.client={});if(this.h)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.h.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.h.coords.longitude*
1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.h.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.j||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.j||this.locationPlayabilityToken}handleResponse(a){a=a.responseContext?.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.h=void 0,O("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.localStorage=aA(this))&&this.localStorage.set("yt-location-playability-token",
a,15552E3):Ip("YT_CL",JSON.stringify({loctok:a}),15552E3,$z,!0))}clearLocationPlayabilityToken(a){a==="TVHTML5"?(this.localStorage=aA(this))&&this.localStorage.remove("yt-location-playability-token"):Kp("YT_CL");this.j=void 0;this.i!==-1&&(clearTimeout(this.i),this.i=-1)}getCurrentPositionFromGeolocation(){if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));let a=!1,b=1E4;O("INNERTUBE_CLIENT_NAME")==="MWEB"&&(a=!0,
b=15E3);return new Promise((c,d)=>{navigator.geolocation.getCurrentPosition(e=>{this.h=e;c(e)},e=>{d(e)},{enableHighAccuracy:a,
maximumAge:0,timeout:b})})}createUnpluggedLocationInfo(a){const b={};
a=a.coords;a?.latitude&&(b.latitudeE7=Math.floor(a.latitude*1E7));a?.longitude&&(b.longitudeE7=Math.floor(a.longitude*1E7));a?.accuracy&&(b.locationRadiusMeters=Math.round(a.accuracy));return b}createLocationInfo(a){const b={};a=a.coords;a?.latitude&&(b.latitudeE7=Math.floor(a.latitude*1E7));a?.longitude&&(b.longitudeE7=Math.floor(a.longitude*1E7));return b}},cA;function eA(a,b=!1,c=!1){var d=O("INNERTUBE_CONTEXT");if(!d)return hw(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=lh(d);R("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=O("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;e.screenPixelDensity=
Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());Np();var f="USER_INTERFACE_THEME_LIGHT";Qp(165)?f="USER_INTERFACE_THEME_DARK":Qp(174)?f="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(f="USER_INTERFACE_THEME_DARK");f=my()||f;e.userInterfaceTheme=f;if(!b){if(f=
Xp())e.connectionType=f;R("web_log_effective_connection_type")&&(f=Yp())&&(d.client.effectiveConnectionType=f)}R("web_log_memory_total_kbytes")&&t.navigator?.deviceMemory&&(d.client.memoryTotalKbytes=`${t.navigator?.deviceMemory*1E6}`);if(R("web_gcf_hashes_innertube")){var g=zs();if(g){f=g.coldConfigData;const m=g.coldHashData;g=g.hotHashData;d.client.configInfo=d.client.configInfo||{};f&&(d.client.configInfo.coldConfigData=f);m&&(d.client.configInfo.coldHashData=m);g&&(d.client.configInfo.hotHashData=
g)}}f=Ko(t.location.href);!R("web_populate_internal_geo_killswitch")&&f.internalcountrycode&&(e.internalGeo=f.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo||(e.mainAppWebInfo={}),e.mainAppWebInfo.graftUrl=t.location.href,R("kevlar_woffle")&&Ep.instance&&(f=Ep.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!f.h&&f.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=Dp(),e.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!R("web_lr_app_quality_killswitch")&&(f=O("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:f})),f=O("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:f}));if(!R("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch{}h=void 0}h&&(e.timeZone=h)}(h=O("EXPERIMENTS_TOKEN",
""))?e.experimentsToken=h:delete e.experimentsToken;e=Zo();Zz.instance||(Zz.instance=new Zz);h=dh(Zz.instance.h);d.request={...d.request,internalExperimentFlags:e,consistencyTokenJars:h};!R("web_prequest_context_killswitch")&&(e=O("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=e);h=Np();e=Qp(58);h=h.get("gsml","");d.user={...d.user};e&&(d.user.enableSafetyMode=e);h&&(d.user.lockedSafetyMode=!0);R("warm_op_csn_cleanup")?c&&(b=Fw())&&(d.clientScreenNonce=b):!b&&(b=Fw())&&
(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=w("yt.mdx.remote.remoteClient_"))d.remoteClient=a;bA().setLocationOnInnerTubeContext(d);try{var k=Oo(),l=k.bid;delete k.bid;d.adSignalsInfo={params:[],bid:l};for(const [m,n]of Object.entries(k))k=m,l=n,d.adSignalsInfo.params?.push({key:k,value:`${l}`});if(d.client?.clientName==="TVHTML5"||d.client?.clientName==="TVHTML5_UNPLUGGED"){const m=O("INNERTUBE_CONTEXT");m.adSignalsInfo&&(d.adSignalsInfo.advertisingId=m.adSignalsInfo.advertisingId,
d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=m.adSignalsInfo.limitAdTracking)}}catch(m){hw(m)}return d}
;function fA(a){const b={"Content-Type":"application/json"};O("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=O("EOM_VISITOR_DATA"):O("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=O("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=O("LOGGED_IN",!1);O("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=O("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=O("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=O("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=
O("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=O("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));(a=O("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a);return b}
;function gA(a){return()=>new a}
;var hA=class{u(a,b={},c=Hp){var d={context:eA(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);e=`/youtubei/v1/${Rz(this.j())}`;const f=pv(a.commandMetadata,eo)?.apiUrl;f&&(e=f);e=Sw(Rw(e));a={command:a,...(void 0)};d={input:e,Ua:Tw(e),Bb:d,config:a};d.config.Pb?d.config.Pb.identity=c:d.config.Pb={identity:c};b.abortSignal&&(d.Ua.signal=b.abortSignal);return d}b=new S("Error: Failed to create Request from Command.",a);hw(b)}get o(){return!1}},iA=class extends hA{};const jA={GET_DATASYNC_IDS:gA(class extends iA{u(){return{input:"/getDatasyncIdsEndpoint",Ua:Tw("/getDatasyncIdsEndpoint","GET"),Bb:{}}}j(){return[]}i(){}h(){}})};const kA="tokens consistency service_params mss client_location entities adblock_detection response_received_commands store manifest player_preload shorts_prefetch".split(" "),lA=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PanelResponse"];
function mA(a,b,c){var d=nA;if(Sz.instance!==void 0){if(c=Sz.instance,a=[d!==c.o,a!==c.ga,b!==c.i,!1,!1,!1,!1],a.some(e=>e))throw new S("InnerTubeTransportService is already initialized",a);
}else Sz.instance=new Sz(d,a,b,c)}
function Tz(a,b){var c=`/youtubei/v1/${Rz(jx)}`,d={Pb:{identity:Hp}};let e=()=>{};
e=Az(zz(c));b.context||(b.context=eA(void 0,!0));return new dj(async f=>{var g=Rw(c);g=No(g)?"same-origin":"cors";g=a.i.Md?oA(d,g):await pA(d,g);var h=Sw(Rw(c));h={input:h,Ua:Tw(h),Bb:b,config:d};f(qA(a,h,g,e))})}
function Xz(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};const c=rA(a,b);return c?new dj(async(d,e)=>{const f=(await c).u(b,void 0,Hp);f?(hy(f.input),e=f.Ua?.mode==="cors"?"cors":void 0,e=a.i.Md?oA(f.config,e):await pA(f.config,e),d(qA(a,f,e))):e(new S("Error: Failed to build request for command.",b))}):ij(new S("Error: No request builder found for command.",b))}
function rA(a,b){a:{a=a.o;var c=pv(b,fo)?.signal;if(c&&a.cc&&(c=a.cc[c])){var d=c();break a}if((c=pv(b,co)?.request)&&a.te&&(c=a.te[c])){d=c();break a}for(d in b)if(a.od[d]&&(b=a.od[d])){d=b();break a}d=void 0}if(d!==void 0)return Promise.resolve(d)}
function oA(a,b){a=Fp({sessionIndex:a?.Pb?.sessionIndex});return{...fA(b),...a}}
async function pA(a,b){a=Fp({sessionIndex:a?.Pb?.sessionIndex});if(!(a instanceof dj)){var c=new dj(bj);ej(c,2,a);a=c}a=await a;return Promise.resolve({...fA(b),...a})}
async function qA(a,b,c,d=()=>{}){await sA(b);
const e=b.config?.requestKey;if(e&&a.h.has(e))var f=a.h.get(e);else f=JSON.stringify(b.Bb),b.Ua={...b.Ua,headers:{...(b.Ua?.headers??{}),...c}},c={...b.Ua},b.Ua.method==="POST"&&(c={...c,body:f}),b.config?.uf&&xz(b.config.uf),f=a.ga.fetch(b.input,c,b.config),e&&a.h.set(e,f);(f=await f)&&R("web_streaming_player")&&Array.isArray(f)&&(f=f[0].playerResponse);if(f&&"error"in f&&f?.error?.details){c=f.error.details;for(const g of c)(c=g["@type"])&&lA.indexOf(c)>-1&&(delete g["@type"],f=g)}e&&a.h.has(e)&&
a.h.delete(e);b.config?.wf&&xz(b.config.wf);tA(a,f,b);b.config?.tf&&xz(b.config.tf);d();return f||void 0}
async function sA(a){if(a?.Bb?.context){a=a.Bb.context;for(const b of[])await b.yi(a)}}
function tA(a,b,c){if(b&&!b?.sequenceMetaData?.skipProcessing&&a.j)for(const d of kA)a.j[d]&&a.j[d].handleResponse(b,c)}
var Sz=class{constructor(a,b,c,d){this.o=a;this.ga=b;this.i=c;this.j=d;this.h=new Map;a.cc||(a.cc={});a.cc={...jA,...a.cc}}};var uA=class extends iA{j(){return px}get o(){return!0}i(a){return pv(a,qo)||void 0}h(a,b,c={}){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)}};var vA=class extends iA{j(){return qx}get o(){return!0}i(a){return pv(a,po)||void 0}h(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)}};var wA=class extends iA{constructor(a){super();this.P=a}j(){return kx}i(a){return pv(a,jo)||pv(a,ko)||pv(a,io)}h(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);b.clientParamIdentifier&&this.P?.h(b.clientParamIdentifier)&&(a.clientParams=this.P.i(b.clientParamIdentifier))}};wA[Iu]=[new Ju("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN")];var xA=class extends iA{j(){return mx}get o(){return!0}i(a){return pv(a,ho)||void 0}h(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))}};var yA=class extends iA{j(){return mx}i(a){return pv(a,oo)}get o(){return!0}h(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)}};var zA=class extends iA{j(){return nx}i(a){return pv(a,no)||void 0}h(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)}};var AA=class extends iA{j(){return ox}i(a){return pv(a,mo)||void 0}h(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)}};var BA=class extends iA{j(){return lx}i(a){return pv(a,lo)}h(a,b,c={}){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)}};let CA=t.caches,DA;function EA(a){const b=a.indexOf(":");return b===-1?{Ad:a}:{Ad:a.substring(0,b),datasyncId:a.substring(b+1)}}
async function FA(){return DA!==void 0?DA:DA=new Promise(async a=>{try{await CA.open("test-only"),await CA.delete("test-only")}catch(b){if(b instanceof Error&&b.name==="SecurityError"){a(!1);return}}a("caches"in window)})}
async function GA(a){if(await FA()){var b=[],c=await CA.keys();for(const d of c)({datasyncId:c}=EA(d)),!c||a.includes(c)||b.push(CA.delete(d));Promise.all(b).then(d=>d.some(e=>e))}}
async function HA(){if(!await FA())return!1;const a=$p("cache contains other");var b=await CA.keys();for(const c of b)if({datasyncId:b}=EA(c),b&&b!==a)return!0;return!1}
;function IA(){try{return!!self.sessionStorage}catch{return!1}}
;function JA(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function KA(a){if(IA()){var b=Object.keys(window.sessionStorage);for(const c of b)b=JA(c),b===void 0||a.includes(b)||self.sessionStorage.removeItem(c)}}
function LA(){if(!IA())return!1;const a=$p();var b=Object.keys(window.sessionStorage);for(const c of b)if(b=JA(c),b!==void 0&&b!==a)return!0;return!1}
;function MA(){Wz().then(a=>{a&&(bs(a),GA(a),cy(a),KA(a))})}
function NA(){var a=new Wt;Jl.va(async()=>{if(!R("ytidb_clear_optimizations_killswitch")){var b=$p("clear");if(b.startsWith("V")&&b.endsWith("||")){b=[b];bs(b);GA(b);cy(b);KA(b);return}b=dy();const c=LA(),d=await HA(),e=await cs();if(!(b||c||d||e))return}a.ya()?MA():Ji(a,"publicytnetworkstatus-online",MA)})}
;function OA(a){return new Promise(b=>{window.setTimeout(b,a)})}
async function Ck(a,b,c){uz();xz("att_fs",void 0,"attestation_challenge_fetch");if(!a.h)throw new Cj(9,"Missing fetcher");const d=await a.h(b,c);b=d?.bgChallenge;if(!b)throw new Cj(15,"Missing field");a.i=d;a.j.forEach(e=>{e(d)});
a=ny(b);xz("att_fc",void 0,"attestation_challenge_fetch");vz();return a}
async function kl(a,b){const c=new Qh(100,3E5,.25,2);let d=void 0;for(;c.i<10;)try{return c.i>0&&await OA(c.getValue()),await PA(a,b)}catch(e){d=e instanceof Cj?e:new Cj(9,e instanceof Error?e.message:"Unknown"),Rh(c)}if(d)throw d;throw new Cj(9,"Unknown error");}
function PA(a,b){b=vk(wk(new xk,b),a.requestKey);const c=new kk,d=a.u();d.open("POST",a.o);d.setRequestHeader("X-Goog-Api-Key","AIzaSyDyT5W0Jh49F30Pqqtyfdf7pDLFKLJoAnw");d.setRequestHeader("Content-Type","application/json+protobuf");d.onload=()=>{if(So(d)){const e=Hl(d.responseText);c.resolve(e)}else c.reject(new Cj(Aj(To(d)),d.statusText))};
d.onerror=()=>{c.reject(new Cj(Aj(To(d)),d.statusText))};
d.send(b.serialize());return c.promise}
var QA=class{constructor(a,b,c){this.requestKey=a;this.o=b;this.i=c;this.u=()=>new XMLHttpRequest;
this.h=void 0;this.j=[]}getLatestChallengeResponse(){return this.i}};function RA(a){const b={bicf:d=>{a.h=d},
blc:()=>a.getLatestChallengeResponse(),
bcr:d=>{a.j.push(d)}},c=window;
c.ntpevasrs=b;if(c.ntpqfbel!==void 0)for(const d of c.ntpqfbel)d(b);c.ntpqfbel=void 0}
;function SA(a){if(a instanceof Error){var b=w("yt.logging.errors.log");b&&b(a,"WARNING")}}
;function TA(a,b){a=new UA(a,b);VA(a);b?.ai||WA(a)}
function VA(a){if(!a.vm){var b={maxAttempts:5,Ed:a.ttlSeconds*1E3};a.Qb.ytcsi?.tick?.("pot_ist");a.vm=a.Td({Oa:a.Oa,Fb:{disable:R("html5_web_po_disable_remote_logging"),ja:"aGIf",Je:Xo(),hf:R("wpo_dis_lfdms")?0:1E3,Lb:d=>{var e=$x.get(d);e||(e=new Zx(d),e=new zj(e),$x.set(d,e));return e}},
Mb:b,Se:a.bgChallenge,yc:SA});a.h=Date.now();Hk(a.vm,()=>{a.h=Date.now()});
a.Qb.bgevmc={p:()=>{a.vm?.pause()},
r:()=>{a.vm?.resume()},
cr:()=>a.vm?.checkForRefresh()??Promise.resolve()};
Vb(a.vm,async()=>WA(a),ry());
var c=a.j.bind(a);a.Yc&&a.ttlSeconds>0&&a.Yc.then(d=>{d.listen("publicytnetworkstatus-online",c)});
a.Fd(c)}}
function WA(a){if(a.i)return a.i;if(!a.vm)throw Error("VMNI");a.i=new ul({vm:a.vm,Oa:a.Oa,kd:!0,onError:SA,Mb:a.Vd});return a.i}
var UA=class{constructor(a,b){this.h=0;this.Qb=b?.Qb??window;this.Yc=b?.Yc;this.requestKey=b?.requestKey??(Yo("par_bir_key")||"O43z0dpjhgX20SCx4KAo");this.Td=b?.Td??(d=>new Kk(d));
const c=b?.gi??((d,e,f)=>new QA(d,e,f));
this.bgChallenge=ny(a.bgChallenge);this.ttlSeconds=py(oy(a.challenge||""));this.Oa=c(this.requestKey,R("par_at_ep")?["www.youtube.com","m.youtube.com"].includes(t.location.hostname)?"/api/jnn/v1/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT",a);this.Vd=b?.Vd;RA(this.Oa);this.Fd=b?.Fd??(d=>{Bi(this.Qb.document,"visibilitychange",()=>{this.Qb.document.visibilityState==="visible"&&d()})})}j(){Date.now()>
this.h+this.ttlSeconds*1E3&&this.vm?.F()}};
function XA(a){try{const b=JSON.parse(a);if(b.bgChallenge)return b}catch(b){}}
function YA(a=window){var b={},c=a.ytAtR;b?.ud?.zi();if(c){if(c=XA(c))b?.ud?.Dd("SUCCESS"),TA(c,b);a.ytAtR=void 0}else a.ytAtRC=d=>{if(d=XA(d))b?.ud?.Dd("SUCCESS"),TA(d,b),a.ytAtRC=void 0}}
;const ZA=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function $A(a,b,c,d,e,f){c?(a.state=2,tx(Xn(c),()=>{window.trayride?aB(a,d,e):(a.state=3,vx(c),V(new S("BL:ULB",`${c}`)))},f)):b?(f=rh("SCRIPT"),b instanceof Wa?(f.textContent=Ya(b),Za(f)):f.textContent=b,f.nonce=Va(document),document.head.appendChild(f),document.head.removeChild(f),window.trayride?aB(a,d,e):(a.state=4,V(new S("BL:ULBJ")))):V(new S("BL:ULV"))}
function aB(a,b,c){a.state=5;const d=!!a.h&&ZA.includes(yb(a.h)||"");try{const e=new mk({program:b,globalName:"trayride",Fb:{disable:!R("att_web_record_metrics")||!R("att_skip_metrics_for_cookieless_domains_ks")&&d,ja:"aGIf"}});e.Jb.then(()=>{a.state=6;c&&c(b)});
a.i(e)}catch(e){a.state=7,e instanceof Error&&V(e)}}
var bB=class{constructor(){this.state=1;this.vm=null;this.h=void 0}initialize(a,b,c,d){this.h=d;if(a.program){var e;d=a.interpreterUrl??null;a.interpreterSafeScript?e=Vn(a.interpreterSafeScript):e=a.interpreterScript??null;a.interpreterSafeUrl&&(d=Wn(a.interpreterSafeUrl).toString());$A(this,e,d,a.program,b,c)}else V(Error("BL:CIP"))}isLoading(){return this.state===2}invoke(a={}){return this.j()?this.o({Ka:a}):null}dispose(){this.i(null);this.state=8}j(){return!!this.vm}o(a){return this.vm.Kd(a)}i(a){Lb(this.vm);
this.vm=a}};function cB(){const a=w("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(b=>b in a)?a:null}
;var dB=class extends bB{i(a){cB()?.bgvma();if(a){const b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Kd.bind(a)};v("yt.abuse.playerAttLoader",b);v("yt.abuse.playerAttLoaderRun",c=>a.snapshot(c))}else v("yt.abuse.playerAttLoader",null),v("yt.abuse.playerAttLoaderRun",null)}j(){return!!cB()}o(a){return cB().bgvmc(a)}};var eB=new Ju("AUTH_SERVICE_TOKEN");var fB=class extends gv{constructor(){super("document_active");this.i=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.D},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.P},{from:"document_disposed_preventable",to:"document_active",action:this.j},{from:"document_disposed",to:"flush_logs",
action:this.P},{from:"document_disposed",to:"document_active",action:this.j},{from:"document_disposed",to:"document_disposed",action:()=>{}},
{from:"flush_logs",to:"document_active",action:this.j}];window.addEventListener("pagehide",a=>{this.transition("document_disposed",{event:a});R("web_disable_unload_listener")&&a.persisted===!1&&(this.h=new Map)});
window.addEventListener("beforeunload",a=>{this.transition("document_disposed_preventable",{event:a})})}D(a,b){if(!this.h.get("document_disposed_preventable")&&(a(b?.event),b?.event?.defaultPrevented||b?.event?.returnValue)){b.event.returnValue||(b.event.returnValue=!0);
b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")}u(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b?.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))}P(a,b){a(b?.event);this.transition("document_active")}j(){this.h=new Map}};var gB=class extends gv{constructor(){super("document_visibility_unknown");this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.j},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.P},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.P},{from:"document_visible",to:"document_visible",action:this.j},{from:"document_foregrounded",to:"document_visible",action:this.j},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.P},{from:"document_hidden",to:"document_visible",action:this.j},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.j}];document.addEventListener("visibilitychange",a=>{document.visibilityState==="visible"?this.transition("document_visible",{event:a}):this.transition("document_hidden",{event:a})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",a=>{this.transition("document_backgrounded",{event:a})}),window.addEventListener("focus",a=>{this.transition("document_foregrounded",{event:a})}))}j(a,b){a(b?.event);
R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")}h(a,b){a(b?.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")}u(a,b){a(b?.event)}P(a,b){a(b?.event)}};var hB=class{constructor(){this.o=new fB;this.u=new gB}install(...a){a.forEach(b=>{this.o.install(b)});
a.forEach(b=>{this.u.install(b)})}};function iB(a,b,c,d=0){if(!b)return!1;d=Fw(d);if(!d)return!1;a=a.client;b=new xw({trackingParams:b});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=Vx(b,d);Rx.set(f,!0);Wx(b,d)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Ux({cttAuthInfo:Hw(d)||void 0,automatedLogEventSource:void 0},d);b={csn:d,ve:b.getAsJson(),gestureType:e};c&&(b.clientData=c);d==="UNDEFINED_CSN"?Xx("visualElementGestured",f,b):a?$v("visualElementGestured",b,a,f):Pq("visualElementGestured",b,f);return!0}
function jB(a,b,c,d=0){const e=Fw(d);b=b||Cw(d);e&&b&&(a=a.client,d=Ux({cttAuthInfo:Hw(e)||void 0},e),c={csn:e,ve:b.getAsJson(),clientData:c},e==="UNDEFINED_CSN"?Xx("visualElementStateChanged",d,c):a?$v("visualElementStateChanged",c,a,d):Pq("visualElementStateChanged",c,d))}
function kB(a,b){if(b===void 0){const c=Ew();for(let d=0;d<c.length;d++)c[d]!==void 0&&kB(a,c[d])}else a.i.forEach((c,d)=>{(d=a.h.get(d))&&Tx(a.client,b,d,c)}),a.i.clear(),a.h.clear()}
var lB=class{constructor(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}clickCommand(a,b,c=0){return iB(this,a.clickTrackingParams,b,c)}stateChanged(a,b,c=0){this.visualElementStateChanged(new xw({trackingParams:a}),b,c)}visualElementStateChanged(a,b,c=0){c===0&&this.j.has(c)?this.o.push([a,b]):jB(this,a,b,c)}};var nB=class extends hB{constructor(){super();this.install({document_disposed:{callback:this.h}});R("combine_ve_grafts")&&this.install({document_disposed:{callback:this.i}});this.install({flush_logs:{callback:this.j}});R("web_log_cfg_cee_ks")||aq(mB)}j(){Pq("finalPayload",{csn:Fw()})}h(){qw(sw)}i(){var a=kB;lB.instance||(lB.instance=new lB);a(lB.instance)}};
function mB(){const a=O("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Gd();for(const c of a)b(c)&&Pq("genericClientExperimentEvent",{eventType:c});delete wo.CLIENT_EXPERIMENT_EVENTS}}
;var oB=class extends S{constructor(){super("JSON parsing failed after fetch",[]);this.errorType=1;Object.setPrototypeOf(this,new.target.prototype)}};function pB(a,b,c){if(a.h){const d=zb(Jb(b,"key"))||"/UNKNOWN_PATH";a.h.start(d)}a=c;R("wug_networking_gzip_request")&&(a=bt(c));return new window.Request(b,a)}
var qB=class{constructor(a){this.h=a}async fetch(a,b,c){a=pB(this,a,b);return fetch(a).then(d=>this.handleResponse(d,c)).catch(d=>{V(d);
if(c?.Ie&&d instanceof oB&&d.errorType===1)return Promise.reject(d)})}handleResponse(a,b){let c;
c=a.text().then(d=>{if(b?.af&&a.ok)return Sf(b.af,d);d=d.replace(")]}'","");let e;if(b?.Ie&&d)try{e=JSON.parse(d)}catch(f){throw new oB;}return e??JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.fi(),c=c.then(d=>{V(new S("Error: API fetch failed",a.status,a.url,d));return{...d,errorMetadata:{status:a.status}}}));
return c}};qB[Iu]=[new Ku(new Ju("NETWORK_SLI_TOKEN"))];var rB=new Ju("NETWORK_MANAGER_TOKEN");function sB(){let a=w("ytglobal.storage_");a||(a=new tB,v("ytglobal.storage_",a));return a}
var tB=class{async estimate(){const a=navigator;if(a.storage?.estimate)return a.storage.estimate();if(a.webkitTemporaryStorage?.queryUsageAndQuota)return uB()}};function uB(){const a=navigator;return new Promise((b,c)=>{a.webkitTemporaryStorage?.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((d,e)=>{b({usage:d,quota:e})},d=>{c(d)}):c(Error("webkitTemporaryStorage is not supported."))})}
v("ytglobal.storageClass_",tB);function vB(a,b){sB().estimate().then(c=>{a.h("idbQuotaExceeded",{...b,isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:wB(c?.usage),deviceStorageQuotaMbytes:wB(c?.quota)})})}
class Qq{constructor(a,b){this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=.2}ta(a){this.handleError(a)}logEvent(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":vB(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":this.h("idbTransactionAborted",
{...b,hasWindowUnloaded:this.i})}}}function wB(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var nA={od:{feedbackEndpoint:gA(xA),modifyChannelNotificationPreferenceEndpoint:gA(zA),playlistEditEndpoint:gA(AA),shareEntityEndpoint:gA(wA),subscribeEndpoint:gA(uA),undoFeedbackEndpoint:gA(yA),unsubscribeEndpoint:gA(vA),webPlayerShareEntityServiceEndpoint:gA(BA)}};function xB(){const a=Qu();Lu(a,{Yb:rB,hd:qB});Lu(a,{Yb:eB,hd:Gp});const b=bA(),c=a.resolve(eB),d=a.resolve(rB),e={};b&&(e.client_location=b);mA(d,c,e);Lu(a,{Yb:Vz,Qd:Sz.instance})}
;const yB=new Map;function zB(a,b,c,d=()=>{},e=null){b=new AB(a,b,c,d,e);
yB.set(a,b)}
function BB(a){if(!a.onReadyPatchApplied){var b=a.addEventListener;a.addEventListener=(c,d)=>{c==="onReady"?Promise.resolve().then(()=>{d(a)}):b.call(a,c,d)};
a.onReadyPatchApplied=!0}}
function CB(a){if(w("yt.player.Application.create"))Promise.resolve().then(()=>{DB(a)});
else{EB(Wn(a.webPlayerContextConfig.trustedJsUrl),()=>{DB(a)},()=>{a.G||a.yc()});
const b=a.webPlayerContextConfig.trustedCssUrl;b&&FB(Wn(b))}}
function DB(a){if(!a.G){var b=w("yt.player.Application.create");try{a.api=b(a.container,{args:a.playerVars},a.webPlayerContextConfig,void 0).getInternalApi(),BB(a.api),a.api.isReady=()=>!0,a.h(a.api)}catch(c){throw a.yc(),c;
}}}
var AB=class extends y{constructor(a,b,c,d,e){super();this.container=a;this.webPlayerContextConfig=b;this.h=c;this.yc=d;this.playerVars=e;CB(this)}aa(){this.api&&this.api.destroy();sh(this.container);super.aa()}};function FB(a){const b=`ytp-${a.toString()}`;if(!document.getElementById(b)){var c=document.createElement("link");c.id=b;eb(c,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(c)}}
function EB(a,b,c){const d=`ytp-${a.toString()}`,e=document.getElementById(d);if(e)e.dataset.failed?c():e.dataset.loaded?b():(e.addEventListener("error",()=>{c()}),e.addEventListener("load",()=>{b()}));
else{var f=document.createElement("script");f.id=d;f.addEventListener("error",()=>{f.dataset.failed="true";c()});
f.addEventListener("load",()=>{f.dataset.loaded="true";b()});
$a(f,a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(f,a.firstChild)}}
;function GB(a){O("ENABLE_WEBVIEW_API")&&window.ytwebviewplayer&&(window.addEventListener("message",b=>{try{const d=JSON.parse(b.data),e=d.methodName,f=d.args||[];a:{for(const g of f)if(String(g).includes("javascript:")){var c=!0;break a}c=!1}if(c)throw Error(`Dangerous call to "${e}" with [${f}].`);if(e&&typeof a[e]==="function")a[e](...f);else throw Error(`Unknown API method: "${e}".`);}catch(d){hw(d)}}),a.addEventListener("onReady",()=>{window.ytwebviewplayer.postMessage(JSON.stringify({type:"onPlayerReady"}))}),
a.addEventListener("onStateChange",b=>{window.ytwebviewplayer.postMessage(JSON.stringify({type:"onStateChange",
state:b}))}),a.addEventListener("onError",b=>{window.ytwebviewplayer.postMessage(JSON.stringify({type:"onError",
errorCode:b}))}))}
;const HB={["api.invalidparam"]:2,auth:150,["drm.auth"]:150,["heartbeat.net"]:150,["heartbeat.servererror"]:150,["heartbeat.stop"]:150,["html5.unsupportedads"]:5,["fmt.noneavailable"]:5,["fmt.decode"]:5,["fmt.unplayable"]:5,["html5.missingapi"]:5,["html5.unsupportedlive"]:5,["drm.unavailable"]:5,["mrm.blocked"]:151,["embedder.identity.denied"]:152,["embedder.identity.missing.referrer"]:153};const IB=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function JB(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function KB(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};for(const d of IB)a[d]&&(b[d]=a[d]);if(a=a.embedConfig||a.embed_config)if(typeof a==="string")b.embed_config=a;else if(la(a))try{const d=JSON.stringify(a);b.embed_config=d}catch(d){console.error("Invalid embedConfig JSON",d)}return b}
function LB(a,b,c,d){if(la(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){const e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function MB(a,b,c){a.o.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function NB(a){if(a.h)if(a.j)a.sendMessage("alreadyInitialized");else if(a.D){a.j=!0;a.D=!1;a.sendMessage("initialDelivery",OB(a));a.sendMessage("onReady");xz("ep_init_ar");for(const b of a.F)PB(a,b);a.F=[]}}
function PB(a,b,c=a.h){if(c){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{const d=JSON.stringify(b);c.postMessage(d,a.targetOrigin)}catch(d){V(d)}}}
function OB(a){if(!a.api)return null;const b=a.api.getApiInterface();lb(b,"getVideoData");const c={apiInterface:b};for(let e=0,f=b.length;e<f;e++){const g=b[e];if(g.search("get")===0||g.search("is")===0){var d=0;g.search("get")===0?d=3:g.search("is")===0&&(d=2);d=g.charAt(d).toLowerCase()+g.substring(d+1);try{const h=a.api[g]();c[d]=h}catch(h){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
function QB(a,b){a.sendMessage("infoDelivery",b)}
function RB(a,b,c){return d=>{b==="onError"?a.api.logApiCall(`${b} invocation`,c,d):a.api.logApiCall(`${b} invocation`,c);a.sendMessage(b,d)}}
var VB=class extends y{constructor(){var a=SB,b=TB;super();this.api=a;this.j=this.D=!1;this.F=[];this.K={};this.o=[];this.i=[];this.Y=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.X=R("web_player_split_event_bus_iframe");this.A=O("POST_MESSAGE_ORIGIN")||`${document.location.protocol}//${document.location.hostname}`;this.u=c=>{this.onMessage(c)};
UB.addEventListener("message",this.u);if(a=O("WIDGET_ID"))this.sessionId=a;b&&this.u(b);MB(this,"onReady",()=>{this.D=!0;var c=this.api.getVideoData();c.isPlayable||(this.Y=!0,this.errorCode=(c=c.errorCode)?HB[c]||5:5,this.sendMessage("onError",Number(this.errorCode)));NB(this);this.h||this.j||window.parent===window||!this.sessionId||PB(this,{event:"readyToListen"},window.parent)});
MB(this,"onVideoProgress",this.Wa.bind(this));MB(this,"onVolumeChange",this.Nb.bind(this));MB(this,"onApiChange",this.fa.bind(this));MB(this,"onPlaybackQualityChange",this.Ba.bind(this));MB(this,"onPlaybackRateChange",this.Fa.bind(this));MB(this,"onStateChange",this.Ja.bind(this));MB(this,"onWebglSettingsChanged",this.Lc.bind(this));MB(this,"onCaptionsTrackListChanged",this.la.bind(this));MB(this,"captionssettingschanged",this.qa.bind(this))}sendMessage(a,b){a={event:a,info:b===void 0?null:b};this.j?
PB(this,a):this.F.push(a)}Ja(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};
this.api.getVideoUrl&&(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());QB(this,a)}Ba(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&
(a.preferredQuality=this.api.getPreferredQuality());QB(this,a)}Fa(a){QB(this,{playbackRate:a})}fa(){const a=this.api.getOptions(),b={namespaces:a};for(let c=0,d=a.length;c<d;c++){const e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(let g=0,h=f.length;g<h;g++){const k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)}Nb(){QB(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})}Wa(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),
videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());QB(this,a)}Lc(){QB(this,{sphericalProperties:this.api.getSphericalProperties()})}la(){if(this.api.getCaptionTracks){const a={captionTracks:this.api.getCaptionTracks()};QB(this,a)}}qa(){if(this.api.getSubtitlesUserSettings){const a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};
QB(this,a)}}onMessage(a){if(!(this.A!=="*"&&a.origin!==this.A||this.h&&a.source!==this.h||typeof a.data!=="string")){try{var b=JSON.parse(a.data)}catch(f){return}if(b)switch(b.event){case "listening":var c=a.source;a=a.origin;b=b.id;a!=="null"&&(this.A=this.targetOrigin=a);this.h=c;this.sessionId=b;NB(this);break;case "command":c=b.func;var d=b.args;if(c==="addEventListener"&&d)b=d[0],c=a.origin,b==="onReady"?this.api.logApiCall(`${b} invocation`,c):b==="onError"&&this.Y&&(this.api.logApiCall(`${b} invocation`,
c,this.errorCode),this.errorCode=void 0),this.api.logApiCall(`${b} registration`,c),this.K[b]||b==="onReady"||(a=RB(this,b,c),this.i.push({eventType:b,listener:a,origin:c}),this.X?this.api.handleExternalCall("addEventListener",[b,a],c):this.api.addEventListener(b,a),this.K[b]=!0);else if(b=c,c=d,a=a.origin,this.api.isExternalMethodAvailable(b,a)){c=c||[];if(c.length>0&&JB(b)){var e=c;if(la(e[0])&&!Array.isArray(e[0]))d=e[0];else switch(d={},b){case "loadVideoById":case "cueVideoById":d=KB(e[0],e[1]!==
void 0?Number(e[1]):void 0,e[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":d=e[0];typeof d==="string"&&(d={mediaContentUrl:d,startSeconds:e[1]!==void 0?Number(e[1]):void 0,suggestedQuality:e[2]});b:{if((e=d.mediaContentUrl)&&(e=/\/([ve]|embed)\/([^#?]+)/.exec(e))&&e[2]){e=e[2];break b}e=null}d.videoId=e;d=KB(d);break;case "loadPlaylist":case "cuePlaylist":d=LB(e[0],e[1],e[2],e[3])}c.length=1;c[0]=d}this.api.handleExternalCall(b,c,a);JB(b)&&QB(this,OB(this))}}}}aa(){super.aa();UB.removeEventListener("message",
this.u);for(var a=0;a<this.o.length;a++){var b=this.o[a];this.api.removeEventListener(b.eventType,b.listener)}this.o=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.X?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]}};let UB=window;function WB(a,b,c){a.G||(b={id:a.id,command:b},c&&(b.data=c),XB.postMessage(JSON.stringify(b),a.origin))}
function YB(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function ZB(a,b){switch(a){case "loadVideoById":return[KB(b)];case "cueVideoById":return[KB(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[LB(b)];case "cuePlaylist":return[LB(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function $B(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
var bC=class extends y{constructor(a,b){var c=SB;super();this.api=c;this.id=a;this.origin=b;this.h={};this.j=R("web_player_split_event_bus_iframe");this.i=d=>{this.onMessage(d)};
aC.addEventListener("message",this.i);WB(this,"RECEIVING")}addListener(a,b){if(!(a in this.h)){var c=this.o.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}}o(a,b){this.G||WB(this,a,YB(a,b))}removeListener(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])}addEventListener(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)}removeEventListener(a,b,c){this.j?a==="onReady"?
this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)}onMessage(a){if(a.origin===this.origin){var b=a.data;if(typeof b==="string"){try{b=JSON.parse(b)}catch(e){return}if(b.command){var c=b.command;b=b.data;a=a.origin;if(!this.G){var d=b||{};switch(c){case "addEventListener":typeof d.event==="string"&&this.addListener(d.event,a);break;case "removeEventListener":typeof d.event==="string"&&this.removeListener(d.event,a);break;
default:this.api.isReady()&&this.api.isExternalMethodAvailable(c,a||null)&&(b=ZB(c,b||{}),b=this.api.handleExternalCall(c,b,a||null),(b=$B(c,b))&&WB(this,c,b))}}}}}}aa(){aC.removeEventListener("message",this.i);for(const a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);super.aa()}};let aC=window,XB=window.parent;let cC=new dB;function dC(){return cC.j()}
function eC(a={}){return cC.invoke(a)}
;function fC(a){a.Fa=!1;if(a.la)for(var b in a.h)a.h.hasOwnProperty(b)&&a.la(b,a.h[b]);for(const c in a.F)a.F.hasOwnProperty(c)&&clearTimeout(Number(c));a.F={};a.u=null;a.la=null;b=a.api;for(const c in b)b.hasOwnProperty(c)&&(b[c]=null);b.addEventListener=(c,d)=>{a.addEventListener(c,d)};
b.removeEventListener=(c,d)=>{a.removeEventListener(c,d)};
b.destroy=()=>{a.dispose()};
b.getLastError=()=>a.getLastError();
b.getPlayerType=()=>a.getPlayerType();
b.getCurrentVideoConfig=()=>a.Ja;
b.loadNewVideoConfig=c=>{a.loadNewVideoConfig(c)};
b.isReady=()=>a.isReady()}
function gC(a){let b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);a.i?.id===a.elementId&&(a.elementId=`${a.elementId}-player`,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
function hC(a){if(!a.G&&!a.X){var b=iC(a);if(b&&(jC(a)?"html5":null)==="html5")a.Y="html5",a.isReady()||kC(a);else if(lC(a),a.Y="html5",b&&a.j&&a.o)a.o.appendChild(a.j),kC(a);else{a.config&&(a.config.loaded=!0);let c=!1;a.D=()=>{c=!0;let d;d=mC(a,"player_bootstrap_method")?w("yt.player.Application.createAlternate")||w("yt.player.Application.create"):w("yt.player.Application.create");const e=a.config?nC(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,void 0);kC(a)};
a.X=!0;b?a.D():(tx(oC(a),a.D),(b=pC(a))&&Ax(b||""),qC(a)&&!c&&v("yt.player.Application.create",null))}}}
function rC(a){a.config&&a.config.loaded!==!0&&(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1?a.api.loadVideoByPlayerVars(a.config.args??null):a.api.cueVideoByPlayerVars(a.config.args))}
function nC(a){const b={};for(const c of Object.keys(a)){const d=a[c];b[c]=typeof d==="object"?kh(d):d}return b}
function sC(a,b){let c=b;if(typeof b==="string"){if(a.Ba[b])return a.Ba[b];c=(...d)=>{const e=w(b);if(e)try{e.apply(t,d)}catch(f){throw d=new S("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ba[b]=c}return c?c:null}
function jC(a){let b=qh(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector(`#${a.elementId}`));return b}
function oC(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function iC(a){let b=!0;const c=jC(a);c&&a.config&&(b=c.dataset.version===oC(a));return b&&!!w("yt.player.Application.create")}
function mC(a,b){let c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.serializedExperimentFlags:a.config?.args&&(c=a.config.args.fflags);return(c||"").split("&").includes(`${b}=true`)}
function kC(a){if(!a.G){const b=jC(a);let c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.X=!1,!mC(a,"html5_remove_not_servable_check_killswitch")&&b?.isNotServable&&a.config&&b?.isNotServable(a.config.args?.video_id)||tC(a)):a.Wa=setTimeout(()=>{kC(a)},50)}}
function lC(a){a.cancel();fC(a);a.Y=null;a.config&&(a.config.loaded=!1);const b=jC(a);b&&(iC(a)||!qC(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));a.o&&sh(a.o)}
function pC(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function qC(a){a=a.config?.args?.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function tC(a){fC(a);a.Fa=!0;const b=jC(a);if(b){a.u=uC(a,b,"addEventListener");a.la=uC(a,b,"removeEventListener");let c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());const d=a.api;for(let e=0;e<c.length;e++){const f=c[e];d[f]||(d[f]=uC(a,b,f))}}for(const c in a.h)a.h.hasOwnProperty(c)&&a.u&&a.u(c,a.h[c]);rC(a);a.qa&&a.qa(a.api);a.K.qb("onReady",a.api)}
function uC(a,b,c){const d=b[c];return(...e)=>{try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new S("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function vC(a,b){const c=d=>{const e=()=>{if(!a.G)try{a.K.qb(b,d??void 0)}catch(g){var f=new S("PlayerProxy error when creating global callback",{error:g.message,event:b,playerId:a.A,data:d,originalStack:g.stack,componentStack:g.se});f.level="WARNING";throw f;}};
if(mC(a,"web_player_publish_events_immediately"))e();else{const f=setTimeout(()=>{e();var g=a.F,h=String(f);h in g&&delete g[h]},0);
hh(a.F,String(f))}};
return a.h[b]=c}
var wC=class extends y{constructor(a,b,c,d){super();this.A=b;this.webPlayerContextConfig=d;this.Fa=!1;this.api={};this.la=this.u=null;this.K=new J;this.h={};this.Y=this.qa=this.elementId=this.Ja=this.config=null;this.X=!1;this.j=this.D=null;this.Ba={};this.Nb=["onReady"];this.lastError=null;this.Wa=NaN;this.F={};this.fa=0;this.i=this.o=a;Nb(this,this.K);fC(this);c?this.fa=setTimeout(()=>{this.loadNewVideoConfig(c)},0):d&&(gC(this),hC(this))}getId(){return this.A}loadNewVideoConfig(a){if(!this.G){this.fa&&
(clearTimeout(this.fa),this.fa=0);
var b=a||{};b instanceof ix||(b=new ix(b));this.config=b;this.setConfig(a);hC(this);this.isReady()&&rC(this)}}setConfig(a){this.Ja=a;this.config=nC(a);gC(this);this.qa||(this.qa=sC(this,this.config.args?.jsapicallback||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};if(this.config?.attrs){a=this.config.attrs;const b=a.width;b&&this.i&&(this.i.style.width=Fl(Number(b)||b));(a=a.height)&&this.i&&(this.i.style.height=Fl(Number(a)||a))}}isReady(){return this.Fa}addEventListener(a,
b){const c=sC(this,b);c&&(fb(this.Nb,a)>=0||this.h[a]||(b=vC(this,a),this.u&&this.u(a,b)),this.K.subscribe(a,c),a==="onReady"&&this.isReady()&&setTimeout(()=>{c(this.api)},0))}removeEventListener(a,b){this.G||(b=sC(this,b))&&this.K.unsubscribe(a,b)}getPlayerType(){return this.Y||(jC(this)?"html5":null)}getLastError(){return this.lastError}cancel(){this.D&&xx(oC(this),this.D);
clearTimeout(this.Wa);this.X=!1}aa(){lC(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new S("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ba=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Ja=this.config=this.api=null;delete this.o;delete this.i;super.aa()}};const xC={},yC="player_uid_"+(Math.random()*1E9>>>0);function zC(a,b){var c="player";c=typeof c==="string"?qh(c):c;const d=`${yC}_${ma(c)}`;let e=xC[d];e=new wC(c,d,a,b);xC[d]=e;e.addOnDisposeCallback(()=>{delete xC[e.getId()]});
return e.api}
;let SB=null,AC=null,TB;function BC(a){SB=a;SB.addEventListener("onVideoDataChange",CC);SB.addEventListener("onReady",DC);a=O("POST_MESSAGE_ID","player");const b=O("POST_MESSAGE_ORIGIN");O("ENABLE_JS_API")?AC=new VB:O("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(AC=new bC(a,b));TB=void 0}
function EC(){yy();R("ytidb_create_logger_embed_killswitch")||Nq();nB.h||(nB.h=new nB);nB.h.install({flush_logs:{callback:()=>{Nv()}}});
Vq||fu();xB();Jl.va(()=>{NA()});
const a=I("att_init_delay",200);R("enable_rta_manager")&&setTimeout(()=>{R("attmusi")&&YA(window);var b=new Uz;var c={preload:!R("enable_rta_npi"),Pd:R("attmusi")};c=c??{preload:!0};const d=c.Zh?void 0:new Wt;Pz.instance=new Pz(b,c,d);b=Pz.instance;if((R("attmusi")||R("attmusiw"))&&R("attmusi_ue")){b={s:b.o.bind(b),ir:b.u.bind(b)};c=window;c.attmp=b;if(c.attmq!==void 0)for(var e of c.attmq)e(b);c.attmq=void 0}else e=b.o.bind(b),v("yt.aba.att",e),e=b.u.bind(b),v("yt.aba.att2",e)},a);
aq(()=>{if(R("enable_zw_ping")){var b=O("INNERTUBE_CLIENT_NAME","UNKNOWN_INTERFACE"),c="/establish_zw";b==="WEB_EMBEDDED_PLAYER"?c="/embed/establish_zw":b==="TVHTML5"&&(c="https://www.youtube.com/tv/establish_zw");O("COOKIELESS",!1)&&b==="WEB_EMBEDDED_PLAYER"?(b=new Headers,b.set("X-Goog-Visitor-Id",O("VISITOR_DATA")),fetch(c,{method:"GET",mode:"no-cors",headers:b})):fetch(c,{method:"GET",mode:"no-cors",credentials:"include"})}})}
function FC(){Dz();const a=Np();var b=Qp(119),c=window.devicePixelRatio>1;if(document.body&&Ul(document.body,"exp-invert-logo"))if(c&&!Ul(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ul(d,"inverted-hdpi")){const f=Sl(d);Tl(d,f+(f.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ul(document.body,"inverted-hdpi")&&Vl();if(b!=c){b=`f${Math.floor(119/31)+1}`;d=Rp(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Mp[b]:(c=d.toString(16),Mp[b]=
c.toString());b=!0;R("web_secure_pref_cookie_killswitch")&&(b=!1);c=a.h;d=[];for(e in Mp)Mp.hasOwnProperty(e)&&d.push(`${e}=`+encodeURIComponent(String(Mp[e])));var e=d.join("&");Ip(c,e,63072E3,a.i,b)}}
function CC(){GC()}
function DC(){xz("ep_init_pr");GC()}
function GC(){var a=SB.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function HC(){SB&&SB.sendAbandonmentPing&&SB.sendAbandonmentPing();O("PL_ATT")&&cC.dispose();var a=Jl;for(let b=0,c=vy.length;b<c;b++)a.wa(vy[b]);vy.length=0;vx(wy.toString());xy=!1;xo("DCLKSTAT",0);Mb(AC);SB&&(SB.removeEventListener("onVideoDataChange",CC),SB.destroy(),SB=null)}
;xz("ep_init_eps");v("yt.setConfig",xo);v("yt.config.set",xo);v("yt.setMsg",sx);v("yt.msgs.set",sx);v("yt.logging.errors.log",hw);
v("writeEmbed",function(){xz("ep_init_wes");var a=O("PLAYER_CONFIG");if(!a){var b=O("PLAYER_VARS");b&&(a={args:b})}jy(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});b=document.referrer;window!==window.top&&b&&b!==document.URL&&(a.args.loaderUrl=b);b=O("WEB_PLAYER_CONTEXT_CONFIGS")?.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!b.serializedForcedExperimentIds){const c=Ko(window.location.href);c.forced_experiments&&
(b.serializedForcedExperimentIds=c.forced_experiments)}a.args?.autoplay?sz("watch",["pbs","pbu","pbp"]):a.args&&Vw(a.args)?sz("video_preview",["ol"]):sz("embed_no_video",["ep_init_ar"]);R("embeds_use_player_instances_library")||O("ENABLE_WEBVIEW_API")?(zB(document.getElementById("player"),b,c=>{O("ENABLE_WEBVIEW_API")?(c=c.getTrustedApi(),BB(c),GB(c)):BC(c)},()=>{throw Error("Unable to load player JS");
},a.args),O("ENABLE_WEBVIEW_API")||EC()):(a=zC(a,b),BC(a),EC());
xz("ep_init_wee")});
v("yt.abuse.player.botguardInitialized",w("yt.abuse.player.botguardInitialized")||dC);v("yt.abuse.player.invokeBotguard",w("yt.abuse.player.invokeBotguard")||eC);v("yt.abuse.dclkstatus.checkDclkStatus",w("yt.abuse.dclkstatus.checkDclkStatus")||zy);v("yt.player.exports.navigate",w("yt.player.exports.navigate")||iy);v("yt.util.activity.init",w("yt.util.activity.init")||tu);v("yt.util.activity.getTimeSinceActive",w("yt.util.activity.getTimeSinceActive")||xu);
v("yt.util.activity.setTimestamp",w("yt.util.activity.setTimestamp")||uu);window.addEventListener("load",P(function(){FC()}));
window.addEventListener("pageshow",P(function(a){a.persisted||FC()}));
window.addEventListener("pagehide",P(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?HC():a.persisted||HC()}));
v("yt.logging.errors.log",hw);gb(O("ERRORS")||[],a=>{hw.apply(null,a)});
xo("ERRORS",[]);wp(tp(),{});
window.onerror=function(a,b="Unknown file",c=0,d,e,f){var g=!1,h=yo("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(let k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}g&&(g=!1,e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new S(h),e.name="UnhandledWindowError",e.message=h,e.fileName=b,e.lineNumber=c,
isNaN(d)?delete e.columnNumber:e.columnNumber=d),R("wiz_enable_component_stack_propagation_killswitch")||(a=e,f?.componentStack||!(a=a.se))||(f||(f={}),f.componentStack=a),f&&pw(e,f),g?hw(e):V(e))};
uj=iw;window.addEventListener("unhandledrejection",a=>{if(a.reason instanceof Error){const b=a.reason;pw(b,{source:"unhandledrejection"});b.name==="AbortError"&&(b.level="WARNING")}iw(a.reason);a.preventDefault()});
(function(){if(O("ENABLE_JS_API")){var a=b=>{TB=b;window.removeEventListener("message",a)};
window.addEventListener("message",a)}})();
xz("ep_init_epe");}).call(this);
