(function() {var k,l=this;
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function p(a){return"string"==typeof a}var r="closure_uid_"+(1E9*Math.random()>>>0),aa=0;function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return t.apply(null,arguments)}function da(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var u=Date.now||function(){return+new Date};
function w(a,b){function c(){}c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ba=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};var x={VersionInfo:"$Rev: 391 $"};var ea;var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ga(a,b){for(var c=0,d=fa(String(a)).split("."),e=fa(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",m=e[g]||"",S=RegExp("(\\d*)(\\D*)","g"),T=RegExp("(\\d*)(\\D*)","g");do{var z=S.exec(h)||["","",""],A=T.exec(m)||["","",""];if(0==z[0].length&&0==A[0].length)break;c=ha(0==z[1].length?0:parseInt(z[1],10),0==A[1].length?0:parseInt(A[1],10))||ha(0==z[2].length,0==A[2].length)||ha(z[2],A[2])}while(0==c)}return c}function ha(a,b){return a<b?-1:a>b?1:0}
function ia(){var a=p(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return"visibilityState".replace(new RegExp("(^"+(a?"|["+a+"]+":"")+")([a-z])","g"),function(a,c,d){return c+d.toUpperCase()})};var y="closure_listenable_"+(1E6*Math.random()|0),ja=0;function ka(a,b,c,d,e){this.listener=a;this.c=null;this.src=b;this.type=c;this.G=!!d;this.I=e;++ja;this.C=this.F=!1}function B(a){a.C=!0;a.listener=null;a.c=null;a.src=null;a.I=null};function la(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function na(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ma.length;f++)c=ma[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var oa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function pa(a){this.src=a;this.c={};this.f=0}function qa(a,b,c,d,e,f){var g=b.toString();b=a.c[g];b||(b=a.c[g]=[],a.f++);var h=ra(b,c,e,f);-1<h?(a=b[h],d||(a.F=!1)):(a=new ka(c,a.src,g,!!e,f),a.F=d,b.push(a));return a}function sa(a,b){var c=b.type;if(!(c in a.c))return!1;var d=a.c[c],e=oa(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(B(b),0==a.c[c].length&&(delete a.c[c],a.f--));return f}
function ra(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.C&&f.listener==b&&f.G==!!c&&f.I==d)return e}return-1};var C;a:{var ta=l.navigator;if(ta){var ua=ta.userAgent;if(ua){C=ua;break a}}C=""};var va=-1!=C.indexOf("Opera")||-1!=C.indexOf("OPR"),D=-1!=C.indexOf("Trident")||-1!=C.indexOf("MSIE"),wa=-1!=C.indexOf("Edge"),E=-1!=C.indexOf("Gecko")&&!(-1!=C.toLowerCase().indexOf("webkit")&&-1==C.indexOf("Edge"))&&!(-1!=C.indexOf("Trident")||-1!=C.indexOf("MSIE"))&&-1==C.indexOf("Edge"),F=-1!=C.toLowerCase().indexOf("webkit")&&-1==C.indexOf("Edge");
function xa(){var a=C;if(E)return/rv\:([^\);]+)(\)|;)/.exec(a);if(wa)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(F)return/WebKit\/(\S+)/.exec(a)}function ya(){var a=l.document;return a?a.documentMode:void 0}var za=function(){if(va&&l.opera){var a;var b=l.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=xa())&&(a=b?b[1]:"");return D&&(b=ya(),b>parseFloat(a))?String(b):a}(),Aa={};function G(a){return Aa[a]||(Aa[a]=0<=ga(za,a))}
var Ba=l.document,Ca=Ba&&D?ya()||("CSS1Compat"==Ba.compatMode?parseInt(za,10):5):void 0;var Da=!D||9<=Ca,Ea=D&&!G("9");!F||G("528");E&&G("1.9b")||D&&G("8")||va&&G("9.5")||F&&G("528");E&&!G("8")||D&&G("9");function H(){0!=Fa&&(Ga[this[r]||(this[r]=++aa)]=this);this.m=this.m;this.c=this.c}var Fa=0,Ga={};H.prototype.m=!1;H.prototype.L=function(){if(!this.m&&(this.m=!0,this.A(),0!=Fa)){var a=this[r]||(this[r]=++aa);delete Ga[a]}};function Ha(a,b){a.m?b.call(void 0):(a.c||(a.c=[]),a.c.push(b))}H.prototype.A=function(){if(this.c)for(;this.c.length;)this.c.shift()()};function Ia(a){a&&"function"==typeof a.L&&a.L()};function I(a,b){this.type=a;this.c=this.target=b;this.O=!0}I.prototype.f=function(){this.O=!1};function Ja(a){Ja[" "](a);return a}Ja[" "]=function(){};function J(a,b){I.call(this,a?a.type:"");this.relatedTarget=this.c=this.target=null;this.clientY=this.clientX=0;this.g=null;a&&this.init(a,b)}w(J,I);
J.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.c=b;var e=a.relatedTarget;if(e){if(E){var f;a:{try{Ja(e.nodeName);f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=
void 0!==d.clientY?d.clientY:d.pageY);this.g=a;a.defaultPrevented&&this.f()};J.prototype.f=function(){J.K.f.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ea)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Ka="closure_lm_"+(1E6*Math.random()|0),La={},Ma=0;function K(a,b,c,d,e){if("array"==n(b)){for(var f=0;f<b.length;f++)K(a,b[f],c,d,e);return null}c=Na(c);return a&&a[y]?qa(a.u,String(b),c,!1,d,e):Oa(a,b,c,!1,d,e)}
function Oa(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=L(a);h||(a[Ka]=h=new pa(a));c=qa(h,b,c,d,e,f);if(c.c)return c;d=Pa();c.c=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Qa(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Ma++;return c}
function Pa(){var a=Ra,b=Da?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Sa(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)Sa(a,b[f],c,d,e);else c=Na(c),a&&a[y]?qa(a.u,String(b),c,!0,d,e):Oa(a,b,c,!0,d,e)}
function Ta(a,b,c,d,e){if("array"==n(b)){for(var f=0;f<b.length;f++)Ta(a,b[f],c,d,e);return null}c=Na(c);if(a&&a[y])return a=a.u,b=String(b).toString(),b in a.c?(f=a.c[b],c=ra(f,c,d,e),-1<c?(B(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.c[b],a.f--),c=!0):c=!1):c=!1,c;if(!a)return!1;if(a=L(a))if(b=a.c[b.toString()],a=-1,b&&(a=ra(b,c,!!d,e)),c=-1<a?b[a]:null)return Ua(c);return!1}
function Ua(a){if("number"==typeof a||!a||a.C)return!1;var b=a.src;if(b&&b[y])return sa(b.u,a);var c=a.type,d=a.c;b.removeEventListener?b.removeEventListener(c,d,a.G):b.detachEvent&&b.detachEvent(Qa(c),d);Ma--;(c=L(b))?(sa(c,a),0==c.f&&(c.src=null,b[Ka]=null)):B(a);return!0}function Qa(a){return a in La?La[a]:La[a]="on"+a}function Va(a,b,c,d){var e=!0;if(a=L(a))if(b=a.c[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.G==c&&!f.C&&(f=Wa(f,d),e=e&&!1!==f)}return e}
function Wa(a,b){var c=a.listener,d=a.I||a.src;a.F&&Ua(a);return c.call(d,b)}
function Ra(a,b){if(a.C)return!0;if(!Da){var c;if(!(c=b))a:{c=["window","event"];for(var d=l,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new J(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.c;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;0<=g;g--){c.c=e[g];var h=Va(e[g],f,!0,c),d=d&&h}for(g=0;g<e.length;g++)c.c=e[g],h=Va(e[g],f,!1,c),
d=d&&h}return d}return Wa(a,new J(b,this))}function L(a){a=a[Ka];return a instanceof pa?a:null}var Xa="__closure_events_fn_"+(1E9*Math.random()>>>0);function Na(a){if("function"==n(a))return a;a[Xa]||(a[Xa]=function(b){return a.handleEvent(b)});return a[Xa]};x.Event="$Rev: 391 $";function M(a){Ya.call(this);K(a,["mouseenter","mousemove"],this.i,!0,this);K(a,"mouseleave",this.f,!1,this)}w(M,Ya);function Za(a,b,c){var d=b!=a.g||c!=a.m;a.g=b;a.m=c;return d}M.prototype.i=function(a){Za(this,a.pageX||a.clientX,a.pageY||a.clientX)&&(this.start(),this.c&&(window.clearTimeout(this.c),this.c=null),this.c=window.setTimeout(t(function(){this.f()},this),5E3))};M.prototype.f=function(){this.c&&(window.clearTimeout(this.c),this.c=null);this.stop()};x.DwellTimer="$Rev: 395 $";function N(){H.call(this);this.u=new pa(this);this.D=this;this.v=null}w(N,H);N.prototype[y]=!0;N.prototype.addEventListener=function(a,b,c,d){K(this,a,b,c,d)};N.prototype.removeEventListener=function(a,b,c,d){Ta(this,a,b,c,d)};
function $a(a,b){var c,d=a.v;if(d)for(c=[];d;d=d.v)c.push(d);var d=a.D,e=b,f=e.type||e;if(p(e))e=new I(e,d);else if(e instanceof I)e.target=e.target||d;else{var g=e,e=new I(f,d);na(e,g)}var g=!0,h;if(c)for(var m=c.length-1;0<=m;m--)h=e.c=c[m],g=O(h,f,!0,e)&&g;h=e.c=d;g=O(h,f,!0,e)&&g;g=O(h,f,!1,e)&&g;if(c)for(m=0;m<c.length;m++)h=e.c=c[m],g=O(h,f,!1,e)&&g}
N.prototype.A=function(){N.K.A.call(this);if(this.u){var a=this.u,b=0,c;for(c in a.c){for(var d=a.c[c],e=0;e<d.length;e++)++b,B(d[e]);delete a.c[c];a.f--}}this.v=null};function O(a,b,c,d){b=a.u.c[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.C&&g.G==c){var h=g.listener,m=g.I||g.src;g.F&&sa(a.u,g);e=!1!==h.call(m,d)&&e}}return e&&0!=d.O};function P(a,b){N.call(this);this.g=a||1;this.f=b||l;this.i=t(this.$,this);this.j=u()}w(P,N);k=P.prototype;k.H=!1;k.o=null;k.$=function(){if(this.H){var a=u()-this.j;0<a&&a<.8*this.g?this.o=this.f.setTimeout(this.i,this.g-a):(this.o&&(this.f.clearTimeout(this.o),this.o=null),$a(this,"tick"),this.H&&(this.o=this.f.setTimeout(this.i,this.g),this.j=u()))}};k.start=function(){this.H=!0;this.o||(this.o=this.f.setTimeout(this.i,this.g),this.j=u())};
k.stop=function(){this.H=!1;this.o&&(this.f.clearTimeout(this.o),this.o=null)};k.A=function(){P.K.A.call(this);this.stop();delete this.f};function ab(a,b,c){H.call(this);this.j=null!=c?t(a,c):a;this.i=b;this.g=t(this.V,this);this.f=[]}w(ab,H);k=ab.prototype;k.J=!1;k.M=0;k.B=null;k.U=function(a){this.f=arguments;this.B||this.M?this.J=!0:bb(this)};k.stop=function(){this.B&&(l.clearTimeout(this.B),this.B=null,this.J=!1,this.f=[])};k.A=function(){ab.K.A.call(this);this.stop()};k.V=function(){this.B=null;this.J&&!this.M&&(this.J=!1,bb(this))};
function bb(a){var b;b=a.g;var c=a.i;if("function"!=n(b))if(b&&"function"==typeof b.handleEvent)b=t(b.handleEvent,b);else throw Error("Invalid listener argument");b=2147483647<c?-1:l.setTimeout(b,c||0);a.B=b;a.j.apply(null,a.f)};var Q=!1,R="";function cb(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Q=!0,a.description)){R=cb(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Q=!0;R="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(Q=(a=navigator.mimeTypes["application/x-shockwave-flash"])&&a.enabledPlugin)){R=cb(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Q=!0;R=cb(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Q=!0;R="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Q=!0,R=cb(b.GetVariable("$version"))}catch(c){}})();var db=R;function U(a,b){this.width=a;this.height=b}U.prototype.clone=function(){return new U(this.width,this.height)};U.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};U.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};U.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function eb(){return F?"Webkit":E?"Moz":D?"ms":va?"O":null};!E&&!D||D&&9<=Ca||E&&G("1.9.1");D&&G("9");function fb(a,b){var c=[];return gb(a,b,c,!0)?c[0]:void 0}function gb(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||gb(a,b,c,d))return!0;a=a.nextSibling}return!1}function hb(a){this.c=a||l.document||document}hb.prototype.appendChild=function(a,b){a.appendChild(b)};function jb(a){if("visibilityState"in a)return a.visibilityState;var b=eb();if(b)return a[b.toLowerCase()+ia()]}
function kb(a){var b;if(!(b=!(!window.$sf||!window.$sf.ext)))try{b=!(!top.location.href||!(window.inFIF||window.isAJAX||window.inDapIF||window.cnnDocDomain||window.expandMarketsAd||self.frameElement&&-1!=(self.frameElement.id||self.frameElement.name||"").search(/ad.*iframe$/)))}catch(g){b=!1}if(b||a.parentNode==document.body)return document.body;for(b=a;b&&!("SCRIPT"==b.tagName&&b.src&&0<=b.src.indexOf("/embed/"));b=b.previousSibling);if(b){var c=b.src.match(/[\.\/](\d+)x(\d+)[\.\/]/),d=c[1],e=c[2],
f=function(a){return a.clientHeight>e/2&&a.clientWidth>d/2};for(b=b.nextSibling;b!=a;b=b.nextSibling){if(f(b))return b;if(c=fb(b,f))return c}}return null}function lb(a,b,c){void 0===c&&(c=50);a()?b():c&&setTimeout(function(){lb(a,b,c-1)},100)}x.util="$Rev: 391 $";function mb(a){N.call(this);nb(this,a)}w(mb,N);mb.prototype.f=function(){var a=new I("a");a.visibilityState=this.s();$a(this,a)};
function nb(a,b){a.g=eb().toLowerCase();b.visibilityState&&(a.s=function(){return b.visibilityState},K(b,"visibilitychange",a.f,!1,a));!a.s&&a.g+"VisibilityState"in b&&(a.s=function(){return jb(b)},K(b,((eb()||"")+"visibilitychange").toLowerCase(),a.f,!1,a));if(!a.s&&D&&0<=ga(db,"11.2")){var c;do c="fn"+Math.floor(1000001*Math.random());while(window[c]);var d="resume";window[c]=function(b){d=b;a.f()};a.s=function(){return"resume"==d?"visible":"hidden"};c='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1" style="position:fixed;top:50%;left:50%;" id="{C}" name="{C}"><param name="movie" value="//ad.wsodcdn.com/rm/ViewSupport-f41cac.swf"/><param name="flashvars" value="callback={C}"><param name="allowScriptAccess" value="always"></object>'.replace(/\{C\}/g,
c);var e=document.createElement("div");e.innerHTML=c;document.body.appendChild(e)}a.s||(a.s=function(){return"indeterminate"})}x.TabWatcher="$Rev: 501 $";function V(a,b,c){N.call(this);this.i=new ab(this.N,a,this);Ha(this,da(Ia,this.i));this.j=new P(b);Ha(this,da(Ia,this.j));this.g=c;K(this.j,"tick",this.f,!1,this);ob(this,K);this.j.start()}w(V,N);V.prototype.f=function(){this.i.U()};V.prototype.N=function(){$a(this,"b")};V.prototype.stop=function(){this.i.M++;ob(this,Ta);this.L()};function ob(a,b){var c=window;try{b(a.g,"a",a.f,!1,a);do if(b(c,"scroll",a.f,!1,a),c==top){b(c,"resize",a.f,!1,a);break}while(c=c.parent)}catch(d){}}x.WindowWatcher="$Rev: 501 $";function Ya(){var a=0,b=0;this.start=function(){b||(b=(new Date).getTime())};this.stop=function(){b&&(a+=(new Date).getTime()-b);b=0};this.reset=function(){a=0;b&&(b=(new Date).getTime())};this.value=function(){var c=a;b&&(c+=(new Date).getTime()-b);return c/1E3}}x.Stopwatch="$Rev: 391 $";function pb(a){if(!a)return null;this.data=a;this.data.e="";var b=this.id=String((new Date).getTime()+Math.random());this.j=!1;this.m=[5,25,270,1500];document.write("<span id="+this.id+" data-account="+a.a+" data-place="+a.p+"></span>");Sa(window,["beforeunload","unload"],this.Z,!1,this);lb(t(function(){return this.v=document.getElementById(b)},this),t(this.T,this))}function W(a,b){a.v.setAttribute("data-status",b)}k=pb.prototype;
k.T=function(){lb(t(function(){return this.ad=kb(this.v)},this),t(this.X,this))};k.X=function(){if(null===this.ad.getAttribute("data-viewability")){jb(document)||(this.data.e=".vs-false");this.g=new mb(document);this.ad.setAttribute("data-viewability",this.id);W(this,"NON_VIEWABLE");qb(this,rb(this,!1));if(sb(this)||tb()){this.c=new Ya;var a=new V(100,1E3,this.g);K(a,"b",this.S,!1,this)}else W(this,"INDETERMINATE");this.f=new M(this.ad)}};k.Z=function(){this.P||(this.P=!0,ub(this))};
function vb(a){a.D||(sb(a)?a.D=1:a.D=tb()?3:2);return a.D}function wb(a){var b=a.N?"0":"1",c=Math.round(a.f.value());a.N=!0;a.f.reset();return b+"|"+c}function xb(a){var b=a.R?"0":"1",c=Math.round(Math.min(a.m[0],a.c.value()));a.R=!0;a.c.reset();return b+"|"+c}function ub(a){var b=[],c={};a.j&&a.c&&.5<a.c.value()&&(b.push("101"),c["101"]=xb(a));a.f&&.5<a.f.value()&&(b.push("1001"),c["1001"]=wb(a));b.length&&qb(a,yb(a,b,c))}function tb(){try{return window.$sf}catch(a){}return!1}
function sb(a){try{return top.location.href&&document.body.getBoundingClientRect&&"indeterminate"!=a.g.s()}catch(b){}return!1}
k.S=function(){0<=zb(this)&&!this.i&&(W(this,"PENDING"),this.c.start(),this.i=this.j?new V(100,2500,this.g):new V(25,100,this.g),this.i.timestamp=(new Date).getTime(),K(this.i,"b",this.W,!1,this));this.m.length&&this.c&&this.c.value()>this.m[0]&&(ub(this),this.m.shift());this.m.length||(this.c=null);if(1<this.f.value()&&!this.aa){this.aa=!0;var a=[vb(this)+"100","1001"],b={1001:wb(this)};qb(this,yb(this,a,b))}};
k.W=function(a){var b=zb(this);0>b?(W(this,"NON_VIEWABLE"),this.c.stop(),this.i.stop(),this.i=null):!this.j&&(new Date).getTime()>a.target.timestamp+1E3&&(this.j=!0,qb(this,rb(this,!0,b)),this.v.setAttribute("data-viewable",!0),W(this,"VIEWABLE"))};function Ab(a,b){var c=Number(a)*Number(b);return 242500>c?c/2:.3*c}
function zb(a){if("visible"!=a.g.s())return-1;if(window.$sf&&window.$sf.ext)try{var b=window.$sf.ext.geom(),c=b.par,d=b.self,e=Number(d.h),f=Number(d.w),g=Number(d.t),h=Number(d.b),m=Number(d.l),S=Number(d.r),T=Number(c.t),z=Number(c.b),A=Number(c.l),ib=Number(c.r);g<T&&(e-=T-g);h>z&&(e+=z-h);m<A&&(f-=A-m);S>ib&&(f+=ib-S);return f*e>Ab(d.w,d.h)?0:-1}catch(Bb){return-1}var b=a.ad,c=window,v;do a:{d=b;try{var q=d.getBoundingClientRect()}catch(Bb){v={left:0,top:0,right:0,bottom:0};break a}D&&d.ownerDocument.body&&
(e=d.ownerDocument,q.left-=e.documentElement.clientLeft+e.body.clientLeft,q.top-=e.documentElement.clientTop+e.body.clientTop);d=(d?new hb(9==d.nodeType?d:d.ownerDocument||d.document):ea||(ea=new hb)).c;d=(d.parentWindow||d.defaultView||window).document;d="CSS1Compat"==d.compatMode?d.documentElement:d.body;d=new U(d.clientWidth,d.clientHeight);e={top:q.top,left:q.left,width:q.width,height:q.height};void 0===e.height&&(e.height=q.bottom-q.top);void 0===e.width&&(e.width=q.right-q.left);0>e.left&&(e.width+=
e.left,e.left=0);0>e.top&&(e.height+=e.top,e.top=0);e.width=Math.min(Math.max(d.width-e.left,0),e.width);e.height=Math.min(Math.max(d.height-e.top,0),e.height);v&&(e.top+=v.top,e.left+=v.left,e.width=Math.min(Math.max(d.width-e.left,0),v.width),e.height=Math.min(Math.max(d.height-e.top,0),v.height));v=e}while(c!=top&&(b=c.frameElement)&&(c=c.parent));a=Ab(a.ad.clientWidth,a.ad.clientHeight);return 0<v.width&&0<v.height&&v.width*v.height>a?0:-1}
function rb(a,b,c){var d=vb(a);b&&(d=10*d+c);c=[d];d={};b&&a.c&&.5<a.c.value()&&(c.push("101"),d["101"]=xb(a));b&&a.f&&.5<a.f.value()&&(c.push("1001"),d["1001"]=wb(a));return yb(a,c,d)}function yb(a,b,c){var d=a.data;b=b.join("_");var e=[];la(c,function(a,b){e.push(b+"|"+a)});return("{b}view/{a}/{p}.{c}."+b+".{d}.{t}.{u}.{x}.{ct}{e}/"+a.id+"**;"+e.join("_")+";").replace(/\{([a-z]{1,2})\}/g,function(a,b){return d[b]})}
function qb(a,b){var c=document.createElement("img");K(c,"error",function(){this.data.e=".err"},!1,a);c.height=c.width=0;c.src=b;a.v.appendChild(c)}try{new pb(window.wsod_ad[window.wsod.ad.a][window.wsod.ad.p])}catch(a){}x.Viewable="$Rev: 501 $";var X=["markit","ads","Viewable","Version"],Y=l;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===x?Y[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=x;})();
