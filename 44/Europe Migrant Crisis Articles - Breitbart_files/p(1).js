if(!window.__adrta__aait){__adrta__aait=""}if(!window.__adrta__aasi){__adrta__aasi=""}if(!window.__adrta__aast){__adrta__aast=""}if(!window.__adrta__aavi){__adrta__aavi=""}if(!window.__adrta__aavt){__adrta__aavt=""}if(!window.__adrta__aadb){__adrta__aadb=""}if(!window.__adrta__aasm){__adrta__aasm=0}var swfobject=function(){var C="undefined",q="object",T="Shockwave Flash",Z="ShockwaveFlash.ShockwaveFlash",p="application/x-shockwave-flash",S="SWFObjectExprInst",w="onreadystatechange",Q=window,h=document,s=navigator,V=false,X=[],n=[],P=[],K=[],H,o,D,A,L=false,a=false,l,F,j=true,J=false,O=function(){var ad=typeof h.getElementById!==C&&typeof h.getElementsByTagName!==C&&typeof h.createElement!==C,ak=s.userAgent.toLowerCase(),ab=s.platform.toLowerCase(),ah=ab?/win/.test(ab):/win/.test(ak),af=ab?/mac/.test(ab):/mac/.test(ak),ai=/webkit/.test(ak)?parseFloat(ak.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,aa=s.appName==="Microsoft Internet Explorer",aj=[0,0,0],ae=null;if(typeof s.plugins!==C&&typeof s.plugins[T]===q){ae=s.plugins[T].description;if(ae&&(typeof s.mimeTypes!==C&&s.mimeTypes[p]&&s.mimeTypes[p].enabledPlugin)){V=true;aa=false;ae=ae.replace(/^.*\s+(\S+\s+\S+$)/,"$1");aj[0]=m(ae.replace(/^(.*)\..*$/,"$1"));aj[1]=m(ae.replace(/^.*\.(.*)\s.*$/,"$1"));aj[2]=/[a-zA-Z]/.test(ae)?m(ae.replace(/^.*[a-zA-Z]+(.*)$/,"$1")):0}}else{if(typeof Q.ActiveXObject!==C){try{var ag=new ActiveXObject(Z);if(ag){ae=ag.GetVariable("$version");if(ae){aa=true;ae=ae.split(" ")[1].split(",");aj=[m(ae[0]),m(ae[1]),m(ae[2])]}}}catch(ac){}}}return{w3:ad,pv:aj,wk:ai,ie:aa,win:ah,mac:af}}(),i=function(){if(!O.w3){return}if((typeof h.readyState!==C&&(h.readyState==="complete"||h.readyState==="interactive"))||(typeof h.readyState===C&&(h.getElementsByTagName("body")[0]||h.body))){f()}if(!L){if(typeof h.addEventListener!==C){h.addEventListener("DOMContentLoaded",f,false)}if(O.ie){h.attachEvent(w,function aa(){if(h.readyState==="complete"){h.detachEvent(w,aa);f()}});if(Q==top){(function ac(){if(L){return}try{h.documentElement.doScroll("left")}catch(ad){setTimeout(ac,0);return}f()}())}}if(O.wk){(function ab(){if(L){return}if(!/loaded|complete/.test(h.readyState)){setTimeout(ab,0);return}f()}())}}}();function f(){if(L||!document.getElementsByTagName("body")[0]){return}try{var ac,ad=B("span");ad.style.display="none";ac=h.getElementsByTagName("body")[0].appendChild(ad);ac.parentNode.removeChild(ac);ac=null;ad=null}catch(ae){return}L=true;var aa=X.length;for(var ab=0;ab<aa;ab++){X[ab]()}}function M(aa){if(L){aa()}else{X[X.length]=aa}}function r(ab){if(typeof Q.addEventListener!==C){Q.addEventListener("load",ab,false)}else{if(typeof h.addEventListener!==C){h.addEventListener("load",ab,false)}else{if(typeof Q.attachEvent!==C){g(Q,"onload",ab)}else{if(typeof Q.onload==="function"){var aa=Q.onload;Q.onload=function(){aa();ab()}}else{Q.onload=ab}}}}}function Y(){var aa=h.getElementsByTagName("body")[0];var ae=B(q);ae.setAttribute("style","visibility: hidden;");ae.setAttribute("type",p);var ad=aa.appendChild(ae);if(ad){var ac=0;(function ab(){if(typeof ad.GetVariable!==C){try{var ag=ad.GetVariable("$version");if(ag){ag=ag.split(" ")[1].split(",");O.pv=[m(ag[0]),m(ag[1]),m(ag[2])]}}catch(af){O.pv=[8,0,0]}}else{if(ac<10){ac++;setTimeout(ab,10);return}}aa.removeChild(ae);ad=null;G()}())}else{G()}}function G(){var aj=n.length;if(aj>0){for(var ai=0;ai<aj;ai++){var ab=n[ai].id;var ae=n[ai].callbackFn;var ad={success:false,id:ab};if(O.pv[0]>0){var ah=c(ab);if(ah){if(E(n[ai].swfVersion)&&!(O.wk&&O.wk<312)){v(ab,true);if(ae){ad.success=true;ad.ref=y(ab);ad.id=ab;ae(ad)}}else{if(n[ai].expressInstall&&z()){var al={};al.data=n[ai].expressInstall;al.width=ah.getAttribute("width")||"0";al.height=ah.getAttribute("height")||"0";if(ah.getAttribute("class")){al.styleclass=ah.getAttribute("class")}if(ah.getAttribute("align")){al.align=ah.getAttribute("align")}var ak={};var aa=ah.getElementsByTagName("param");var af=aa.length;for(var ag=0;ag<af;ag++){if(aa[ag].getAttribute("name").toLowerCase()!=="movie"){ak[aa[ag].getAttribute("name")]=aa[ag].getAttribute("value")}}R(al,ak,ab,ae)}else{b(ah);if(ae){ae(ad)}}}}}else{v(ab,true);if(ae){var ac=y(ab);if(ac&&typeof ac.SetVariable!==C){ad.success=true;ad.ref=ac;ad.id=ac.id}ae(ad)}}}}}X[0]=function(){if(V){Y()}else{G()}};function y(ac){var aa=null,ab=c(ac);if(ab&&ab.nodeName.toUpperCase()==="OBJECT"){if(typeof ab.SetVariable!==C){aa=ab}else{aa=ab.getElementsByTagName(q)[0]||ab}}return aa}function z(){return !a&&E("6.0.65")&&(O.win||O.mac)&&!(O.wk&&O.wk<312)}function R(ad,ae,aa,ac){var ah=c(aa);aa=W(aa);a=true;D=ac||null;A={success:false,id:aa};if(ah){if(ah.nodeName.toUpperCase()==="OBJECT"){H=I(ah);o=null}else{H=ah;o=aa}ad.id=S;if(typeof ad.width===C||(!/%$/.test(ad.width)&&m(ad.width)<310)){ad.width="310"}if(typeof ad.height===C||(!/%$/.test(ad.height)&&m(ad.height)<137)){ad.height="137"}var ag=O.ie?"ActiveX":"PlugIn",af="MMredirectURL="+encodeURIComponent(Q.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+ag+"&MMdoctitle="+encodeURIComponent(h.title.slice(0,47)+" - Flash Player Installation");if(typeof ae.flashvars!==C){ae.flashvars+="&"+af}else{ae.flashvars=af}if(O.ie&&ah.readyState!=4){var ab=B("div");aa+="SWFObjectNew";ab.setAttribute("id",aa);ah.parentNode.insertBefore(ab,ah);ah.style.display="none";x(ah)}t(ad,ae,aa)}}function b(ab){if(O.ie&&ab.readyState!=4){ab.style.display="none";var aa=B("div");ab.parentNode.insertBefore(aa,ab);aa.parentNode.replaceChild(I(ab),aa);x(ab)}else{ab.parentNode.replaceChild(I(ab),ab)}}function I(af){var ae=B("div");if(O.win&&O.ie){ae.innerHTML=af.innerHTML}else{var ab=af.getElementsByTagName(q)[0];if(ab){var ag=ab.childNodes;if(ag){var aa=ag.length;for(var ad=0;ad<aa;ad++){if(!(ag[ad].nodeType==1&&ag[ad].nodeName==="PARAM")&&!(ag[ad].nodeType==8)){ae.appendChild(ag[ad].cloneNode(true))}}}}}return ae}function k(aa,ab){var ac=B("div");ac.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+aa+"'>"+ab+"</object>";return ac.firstChild}function t(ai,ah,ab){var aa,ae=c(ab);ab=W(ab);if(O.wk&&O.wk<312){return aa}if(ae){var ad=(O.ie)?B("div"):B(q),ag,ac,af;if(typeof ai.id===C){ai.id=ab}for(af in ah){if(ah.hasOwnProperty(af)&&af.toLowerCase()!=="movie"){e(ad,af,ah[af])}}if(O.ie){ad=k(ai.data,ad.innerHTML)}for(ag in ai){if(ai.hasOwnProperty(ag)){ac=ag.toLowerCase();if(ac==="styleclass"){ad.setAttribute("class",ai[ag])}else{if(ac!=="classid"&&ac!=="data"){ad.setAttribute(ag,ai[ag])}}}}if(O.ie){P[P.length]=ai.id}else{ad.setAttribute("type",p);ad.setAttribute("data",ai.data)}ae.parentNode.insertBefore(ad,ae);aa=ad}return aa}function e(ac,aa,ab){var ad=B("param");ad.setAttribute("name",aa);ad.setAttribute("value",ab);ac.appendChild(ad)}function x(ac){var ab=c(ac);if(ab&&ab.nodeName.toUpperCase()==="OBJECT"){if(O.ie){ab.style.display="none";(function aa(){if(ab.readyState==4){for(var ad in ab){if(typeof ab[ad]==="function"){ab[ad]=null}}ab.parentNode.removeChild(ab)}else{setTimeout(aa,10)}}())}else{ab.parentNode.removeChild(ab)}}}function U(aa){return(aa&&aa.nodeType&&aa.nodeType===1)}function W(aa){return(U(aa))?aa.id:aa}function c(ac){if(U(ac)){return ac}var aa=null;try{aa=h.getElementById(ac)}catch(ab){}return aa}function B(aa){return h.createElement(aa)}function m(aa){return parseInt(aa,10)}function g(ac,aa,ab){ac.attachEvent(aa,ab);K[K.length]=[ac,aa,ab]}function E(ac){ac+="";var ab=O.pv,aa=ac.split(".");aa[0]=m(aa[0]);aa[1]=m(aa[1])||0;aa[2]=m(aa[2])||0;return(ab[0]>aa[0]||(ab[0]==aa[0]&&ab[1]>aa[1])||(ab[0]==aa[0]&&ab[1]==aa[1]&&ab[2]>=aa[2]))?true:false}function u(af,ab,ag,ae){var ad=h.getElementsByTagName("head")[0];if(!ad){return}var aa=(typeof ag==="string")?ag:"screen";if(ae){l=null;F=null}if(!l||F!=aa){var ac=B("style");ac.setAttribute("type","text/css");ac.setAttribute("media",aa);l=ad.appendChild(ac);if(O.ie&&typeof h.styleSheets!==C&&h.styleSheets.length>0){l=h.styleSheets[h.styleSheets.length-1]}F=aa}if(l){if(typeof l.addRule!==C){l.addRule(af,ab)}else{if(typeof h.createTextNode!==C){l.appendChild(h.createTextNode(af+" {"+ab+"}"))}}}}function v(ad,aa){if(!j){return}var ab=aa?"visible":"hidden",ac=c(ad);if(L&&ac){ac.style.visibility=ab}else{if(typeof ad==="string"){u("#"+ad,"visibility:"+ab)}}}function N(ab){var ac=/[\\\"<>\.;]/;var aa=ac.exec(ab)!==null;return aa&&typeof encodeURIComponent!==C?encodeURIComponent(ab):ab}var d=function(){if(O.ie){window.attachEvent("onunload",function(){var af=K.length;for(var ae=0;ae<af;ae++){K[ae][0].detachEvent(K[ae][1],K[ae][2])}var ac=P.length;for(var ad=0;ad<ac;ad++){x(P[ad])}for(var ab in O){O[ab]=null}O=null;for(var aa in swfobject){swfobject[aa]=null}swfobject=null})}}();return{registerObject:function(ae,aa,ad,ac){if(O.w3&&ae&&aa){var ab={};ab.id=ae;ab.swfVersion=aa;ab.expressInstall=ad;ab.callbackFn=ac;n[n.length]=ab;v(ae,false)}else{if(ac){ac({success:false,id:ae})}}},getObjectById:function(aa){if(O.w3){return y(aa)}},embedSWF:function(af,al,ai,ak,ab,ae,ad,ah,aj,ag){var ac=W(al),aa={success:false,id:ac};if(O.w3&&!(O.wk&&O.wk<312)&&af&&al&&ai&&ak&&ab){v(ac,false);M(function(){ai+="";ak+="";var an={};if(aj&&typeof aj===q){for(var aq in aj){an[aq]=aj[aq]}}an.data=af;an.width=ai;an.height=ak;var ar={};if(ah&&typeof ah===q){for(var ao in ah){ar[ao]=ah[ao]}}if(ad&&typeof ad===q){for(var am in ad){if(ad.hasOwnProperty(am)){var ap=(J)?encodeURIComponent(am):am,at=(J)?encodeURIComponent(ad[am]):ad[am];if(typeof ar.flashvars!==C){ar.flashvars+="&"+ap+"="+at}else{ar.flashvars=ap+"="+at}}}}if(E(ab)){var au=t(an,ar,al);if(an.id==ac){v(ac,true)}aa.success=true;aa.ref=au;aa.id=au.id}else{if(ae&&z()){an.data=ae;R(an,ar,al,ag);return}else{v(ac,true)}}if(ag){ag(aa)}})}else{if(ag){ag(aa)}}},switchOffAutoHideShow:function(){j=false},enableUriEncoding:function(aa){J=(typeof aa===C)?true:aa},ua:O,getFlashPlayerVersion:function(){return{major:O.pv[0],minor:O.pv[1],release:O.pv[2]}},hasFlashPlayerVersion:E,createSWF:function(ac,ab,aa){if(O.w3){return t(ac,ab,aa)}else{return undefined}},showExpressInstall:function(ac,ad,aa,ab){if(O.w3&&z()){R(ac,ad,aa,ab)}},removeSWF:function(aa){if(O.w3){x(aa)}},createCSS:function(ad,ac,ab,aa){if(O.w3){u(ad,ac,ab,aa)}},addDomLoadEvent:M,addLoadEvent:r,getQueryParamValue:function(ad){var ac=h.location.search||h.location.hash;if(ac){if(/\?/.test(ac)){ac=ac.split("?")[1]}if(!ad){return N(ac)}var ab=ac.split("&");for(var aa=0;aa<ab.length;aa++){if(ab[aa].substring(0,ab[aa].indexOf("="))==ad){return N(ab[aa].substring((ab[aa].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var aa=c(S);if(aa&&H){aa.parentNode.replaceChild(H,aa);if(o){v(o,true);if(O.ie){H.style.display="block"}}if(D){D(A)}}a=false}},version:"2.3"}}();this["Pixalate"+46506418735834441]=(function(){var aG="1460007500847";var F=false;var aH=false;var al=46506418735834441;var X="Z1pU4Q5QQbihnImpZYASO13FMoWCXZr/gK3lZsYDCXE=";var V="13.1";var p=/http(s)?:\/\/(cdn|js|q).adrta.com\/(aa|ap|aanf|at|ca|p).js#.*/;var u=/(?:\?([^#]*))/;var N=/https?:\/\/\w.*[\w]/;var E=/(\w+):\/{2}([^\/:]+)(?:\:(\d+))?(\/(?:[^?]+\/)?)?([^\?#]+)?(?:\?([^#]*))?(\#.*)?$/;var aq=",88x31,120x20,120x240,120x60,120x600,120x90,125x125,160x600,168x28,168x42,168X42,180x150,192x53,200x200,216x36,216x54,234x60,240x400,250x250,300x100,300x1050,300x150,300x250,300x50,300x600,300x75,320x50,320x100,320x480,336x280,400x300,468x60,480x320,550x480,640x480,700x500,720x300,728x90,768x1024,950x90,970x250,970x90,970x66,1024x768,";var s=[15000,15000,30000,30000,60000,60000];var B=[15000,15000,30000,30000,60000,60000];var aX=0;var aD=100;var ax=0.5;var x=511;var aL=2047;var aO=9000000000000000;var ar=false;var d=[];var ap=false;var l=false;var ak=false;var aK=new Date().getTimezoneOffset();var L=(navigator.userAgent.indexOf("Opera Mini")!=-1);var aW=(navigator.userAgent.indexOf("MSIE")!=-1);var at=window.location.protocol;if(at.indexOf("http")!=0){at="http:"}d.push(al);var aj=0;var G=null;try{G=document.currentScript}catch(ag){}if(!G){aj=1;var ao=document.getElementsByTagName("script");var I=[];for(var ad=0;ad<ao.length;++ad){I[ad]=ao[ad]}G=I[I.length-1];for(var aa=I.length-1;aa>=0;--aa){var Z=I[aa];if(Z&&Z.src&&p.test(Z.src)){G=Z;aj=0;break}}}var aT=G.src.substring(G.src.indexOf("#")+1).replace(/%%/g,"%25%25").split(";");var T=aT.shift();if(T.indexOf("=")!=-1||T.length==0||G.src.indexOf("#")==-1){T="px"}var o=[];for(var ac=0;ac<aT.length;++ac){if(aT[ac].indexOf("blocked")!=-1){ar=true}if(N.test(aT[ac])){aT[ac]=aT[ac].replace(E,"$1://$2$4$5")}if(aT[ac].indexOf("kv2=")!=-1){o.push(aT.splice(ac,1))}}var aM="__aaci="+T;if(aT.length>0){aM+="&"+aT.join("&")}var aN=aM.indexOf("&__aa__=");if(aN!=-1){aM=aM.substring(0,aN)}__adrta__aadb=aH||__adrta__aadb||(("&"+aM+"&").indexOf("&debug=true&")!=-1);var v=true;var k=0;var aC="";var af="";var aB=window;try{var R=window;for(var ad=0;ad<16;++ad){v=true;try{aC=R.location.href.replace(u,"").substring(0,x);if(aC=="undefined"){aC=R.location.href.substring(0,x)}af=R.document.referrer.replace(u,"").substring(0,x);if(af=="undefined"){af=R.document.referrer.substring(0,x)}aB=R}catch(ag){if(window.location.ancestorOrigins&&window.location.ancestorOrigins.length>0){af=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]}v=false}if(R==window.top){break}R=R.parent;++k}}catch(ag){v=false;if(window.location.ancestorOrigins&&window.location.ancestorOrigins.length>0){af=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]}}if(window.location.ancestorOrigins&&window.location.ancestorOrigins.length>0){var J=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]}var h=false;var ah=(document.hasFocus&&document.hasFocus())||(aB.document.hasFocus&&aB.document.hasFocus());if(v){var aE=null;if(aW){aE=aB.document.onfocusin;aB.document.onfocusin=function(){ah=true;if(aE){try{aE()}catch(i){}}}}else{aE=aB.onfocus;aB.onfocus=function(){ah=true;if(aE){aE()}}}var U=null;var ay=null;if(aW){U=aB.document.onfocusout;aB.document.onfocusout=function(){if(ay!=aB.document.activeElement){ay=aB.document.activeElement}else{ah=false;if(U){try{U()}catch(i){}}}}}else{U=aB.onblur;aB.onblur=function(){ah=false;if(U){U()}}}}var au=0;var aQ=0;var D=function(){if(aQ!=0){var i=new Date().getTime();au+=i-aQ;aQ=i}var e=au;au=0;return e};var f=function(){var i=function(){aQ=new Date().getTime()};var e=function(){if(aQ!=0){au+=new Date().getTime()-aQ;aQ=0}};if(aP.addEventListener){aP.addEventListener("mouseover",i,false);aP.addEventListener("mouseout",e,false)}else{if(aP.attachEvent){aP.attachEvent("mouseover",i);aP.attachEvent("mouseout",e)}}};var aP=null;var a1=false;var t=0;var av=0;var aY=0;var az=new Date().getTime();var aS=function(e,i){return(aq.indexOf(","+e+"x"+i+",")!=-1)};var aw=function(e){if(e.getAttribute("height")){return parseInt(e.getAttribute("height"))}if((e.style)&&(e.style.height)&&(e.style.height.indexOf("%")==-1)){return parseInt(e.style.height)}return e.offsetHeight};var ae=function(e){if(e.getAttribute("width")){return parseInt(e.getAttribute("width"))}if((e.style)&&(e.style.width)&&(e.style.height.indexOf("%")==-1)){return parseInt(e.style.width)}return e.offsetWidth};var aA=function(j){if(!j){return j}if(j.nodeType!=1){return aA(j.nextSibling)}if(j.tagName=="SCRIPT"){return aA(j.nextSibling)}var e=ae(j);var n=aw(j);if(aS(e,n)){t=e;av=n;return j}if(j.tagName=="IMG"){return aA(j.nextSibling)}if(!j.firstChild){return aA(j.nextSibling)}var i=aA(j.firstChild);if(i){return i}return aA(j.nextSibling)};var aI=function(){aP=aA(G.parentNode.firstChild);if(!aP&&(window!=top)){aP=aA(document.body)}if(aP){a1=true;aY=new Date().getTime()-az;if(aY<1){aY=1}f()}};aI();if(a1&&v){ap=true;l=true}var a=false;var q=0;var m=0;var M=0;var Y=0;var c=false;var aJ=new Date().getTime();var a0=false;var aR=0;var K=0;var W=[0,0,0,0,0,0,0];var an=function(){var i=new Date().getTime();var e=i-aJ;aJ=i;return e};var aZ=function(e){var j=0;var i=0;if(e.offsetParent){do{if(e.style.position=="fixed"){j=e.getBoundingClientRect().left;i=e.getBoundingClientRect().top;break}j+=e.offsetLeft;j-=e.scrollLeft;i+=e.offsetTop;i-=e.scrollTop}while((e=e.offsetParent)&&(e.tagName!="BODY"))}return[j,i]};var C=function(j){try{var a2=j.parent.document.getElementsByTagName("IFRAME");for(var n=0;n<a2.length;n++){if(a2[n].contentWindow==j){return a2[n]}}}catch(w){}return null};var Q=function(){var i=0;var e=0;if(typeof(aB.innerWidth)=="number"){i=aB.innerWidth;e=aB.innerHeight}else{if(aB.document.documentElement&&(aB.document.documentElement.clientWidth||aB.document.documentElement.clientHeight)){i=aB.document.documentElement.clientWidth;e=aB.document.documentElement.clientHeight}}return[i,e]};var S=function(){var i=0;var e=0;if(typeof(aB.pageYOffset)=="number"){e=aB.pageYOffset;i=aB.pageXOffset}else{if(aB.document.body&&(aB.document.body.scrollLeft||aB.document.body.scrollTop)){e=aB.document.body.scrollTop;i=aB.document.body.scrollLeft}else{if(aB.document.documentElement&&(aB.document.documentElement.scrollLeft||aB.document.documentElement.scrollTop)){e=aB.document.documentElement.scrollTop;i=aB.document.documentElement.scrollLeft}}}return[i,e]};var O=false;var y=function(){a0=true;++K;if(ah){h=true;if(v){var bl=0;var bj=0;var bf=window;for(var bo=0;bo<16;++bo){try{var ba=C(bf);if(ba){var a6=aZ(ba);bl+=a6[0];bj+=a6[1]}}catch(bq){}if(bf==window.top){break}bf=bf.parent}var a2=S();var bh=a2[1];var bs=a2[0];var bi=Q();var n=bh+bi[1];var bp=bs+bi[0];var a3=Math.max(aB.document.documentElement.clientHeight,aB.document.body.scrollHeight,aB.document.documentElement.scrollHeight,aB.document.body.offsetHeight,aB.document.documentElement.offsetHeight);var a5=Math.max(aB.document.documentElement.clientWidth,aB.document.body.scrollWidth,aB.document.documentElement.scrollWidth,aB.document.body.offsetWidth,aB.document.documentElement.offsetWidth);W[0]+=a3;W[1]+=a5;var bc=a3*0.2;var j=0;for(var bo=2;bo<7;++bo){var bd=j+bc;var bb=bd-j;if(bb<0){j=bd;continue}if(j<bh){j=bh}if(bd>n){bd=n}var bu=bd-j;j=bd;if(bu<=0){continue}W[bo]+=Math.floor((bu/bb)*1000)/1000}++aR;var a6=aZ(aP);var bt=a6[1]+bj;var bn=a6[0]+bl;var a7=bt+aP.offsetHeight;var bg=bn+aP.offsetWidth;var be=(bt<bh)?bh:bt;var a4=(bn<bs)?bs:bn;var bm=(a7>n)?n:a7;var bk=(bg>bp)?bp:bg;var a9=(a7-bt)*(bg-bn);if(a9<0){a9=0}var br=(bm-be)*(bk-a4);if(br<0){br=0}q=bn;m=bt;var a8=0;if(L){a8=1}else{if(a9>0){a8=Math.floor((br/a9)*1000)/1000}if(!O){if((bt+((a7-bt)/2)<=bi[1])&&(bn+((bg-bn)/2)<=bi[0])){a=true}O=true}}if(a8>=ax){M+=a8;++Y}if(M>=10){c=true}}}};var g=function(a8,w,a7){var j="";var a3="";var i="";j+="cb="+Math.floor(Math.random()*90000000);if(a8){for(var a6 in a8){j+="&"+a6+"="+encodeURIComponent(a8[a6])}}if(w){for(var a4 in w){if(a4!="__aaam"){a3+="&"+a4+"="+encodeURIComponent(w[a4])}}if(w.__aaam){i+="&__aaam="+encodeURIComponent(w.__aaam)}}var a2=document.createElement("script");a2.setAttribute("type","text/javascript");var e=(at+"//adrta.com/i?");e+=j;e+="&"+aM;if(o.length>0){e+="&"+o.join("")}e+=a3;e+=i;e=e.substring(0,aL);a2.setAttribute("src",e);if(a2.readyState){a2.onreadystatechange=function(){if(a2.readyState=="loaded"||a2.readyState=="complete"){a2.onreadystatechange=null;a2.parentNode.removeChild(a2);if(a7){a7()}}}}else{a2.onload=function(){a2.onload=null;a2.parentNode.removeChild(a2);if(a7){a7()}}}document.getElementsByTagName("head")[0].appendChild(a2);if(F){var a5=document.createElement("script");a5.setAttribute("type","text/javascript");var n=(at+"//testbed.pixalate.net/i?");n+=j;n+="&"+aM;if(o.length>0){n+="&"+o.join("")}n+=a3;n+=i;n=n.substring(0,aL);a5.setAttribute("src",n);if(a5.readyState){a5.onreadystatechange=function(){if(a5.readyState=="loaded"||a5.readyState=="complete"){a5.onreadystatechange=null;a5.parentNode.removeChild(a5);if(a7){a7()}}}}else{a5.onload=function(){a5.onload=null;a5.parentNode.removeChild(a5);if(a7){a7()}}}document.getElementsByTagName("head")[0].appendChild(a5)}};var ab=function(a4){var a3="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var j="";var bc,a9,a7,bb,a8,a6,a5;var w=0;a4=a4.replace(/\r\n/g,"\n");var ba="";for(var e=0;e<a4.length;e++){var a2=a4.charCodeAt(e);if(a2<128){ba+=String.fromCharCode(a2)}else{if((a2>127)&&(a2<2048)){ba+=String.fromCharCode((a2>>6)|192);ba+=String.fromCharCode((a2&63)|128)}else{ba+=String.fromCharCode((a2>>12)|224);ba+=String.fromCharCode(((a2>>6)&63)|128);ba+=String.fromCharCode((a2&63)|128)}}}a4=ba;while(w<a4.length){bc=a4.charCodeAt(w++);a9=a4.charCodeAt(w++);a7=a4.charCodeAt(w++);bb=bc>>2;a8=((bc&3)<<4)|(a9>>4);a6=((a9&15)<<2)|(a7>>6);a5=a7&63;if(isNaN(a9)){a6=a5=64}else{if(isNaN(a7)){a5=64}}j=j+a3.charAt(bb)+a3.charAt(a8)+a3.charAt(a6)+a3.charAt(a5)}return j};var r=0;var aV=false;var P=function(w){r++;var i={};var e={};i.__aasv=V;i.__aaii=al;i.__aait=aG;if(__adrta__aasi.length>0){i.__aasi=__adrta__aasi;i.__aast=__adrta__aast}if(__adrta__aavi.length>0){i.__aavi=__adrta__aavi;i.__aavt=__adrta__aavt}i.__aavz=aK;i.__aaib=(((k>0)&&v)?1:0);i.__aaai=((k>0)?1:0);i.__aaaa=(a?1:0);i.__aafl=(v)?aB.innerHeight||aB.document.documentElement.clientHeight:0;i.__aaaf=(a1?1:0);i.__aaag=aY;i.__aaax=Math.floor(q);i.__aaay=Math.floor(m);if((t!=0)||(av!=0)){i.__aasz=t+"x"+av}i.__aapf=(h?1:0);if(aj!=0){i.__aaec=aj}if(!a0){i.__aaae=0;i.__aaat=0;i.__aaav=0;i.__aaas=0;i.__aaah=0;i.__aaph=0;i.__aapw=0;i.__aapc=0;i.__aap1=0;i.__aap2=0;i.__aap3=0;i.__aap4=0;i.__aap5=0}else{i.__aaup=r;h=false;if(Y==0){i.__aaat=0;i.__aaae=0}else{i.__aaat=Y*aD;i.__aaae=Math.round((M/Y)*1000)/1000;if(i.__aaat<=0||i.__aaae<=0){i.__aaat=0;i.__aaae=0}}i.__aaav=(c?1:0);M=0;Y=0;i.__aaas=an();i.__aaah=D();if(i.__aaas<0){i.__aaas=0}if(i.__aaah<0){i.__aaah=0}if(i.__aaat>i.__aaas){i.__aaat=i.__aaas}if(i.__aaah>i.__aaas){i.__aaah=i.__aaas}if(K>0){i.__aapc=K*aD;K=0}if(aR>0){i.__aaph=Math.ceil(W[0]/aR);i.__aapw=Math.ceil(W[1]/aR);i.__aap1=Math.round((W[2]/aR)*1000)/1000;i.__aap2=Math.round((W[3]/aR)*1000)/1000;i.__aap3=Math.round((W[4]/aR)*1000)/1000;i.__aap4=Math.round((W[5]/aR)*1000)/1000;i.__aap5=Math.round((W[6]/aR)*1000)/1000;for(var j=0;j<7;++j){W[j]=0}aR=0}else{i.__aaph=0;i.__aapw=0;i.__aapc=0;i.__aap1=0;i.__aap2=0;i.__aap3=0;i.__aap4=0;i.__aap5=0}}if(ar){i.__aaab=1}if(screen&&screen.width&&screen.height){i.__aass=screen.width+"x"+screen.height}if(ap){i.__aaim=1}if(l){i.__aawm=1}if(ak){i.__aanf=1}if(X){i.__aacb=X}e.__aapu=aC;e.__aapr=af;if(J&&J.indexOf("applewebdata://")==-1){e.__aatu=J}if(__adrta__aadb){i.__aadb=1;if(!aV){e.__aaam=ab(G.parentNode.innerHTML);aV=true}}g(i,e,w)};var H=s[aX++];var b=new Date().getTime()+H;var ai=false;if(swfobject.hasFlashPlayerVersion("9.0.0")){ak=true}function am(){}am.tag=function(i){var e=/\$\{PXL8_CLICK}/g;return i.replace(e,am.getClickURL())};am.getClickURL=function(){var e=aT.join("&");if(o.length>0){e+="&"+o.join("")}return"http://adrta.com/c?clid="+T+"&"+e+"&__aaii="+al+"&redirect="};am.updateVisibility=function(e){c=e;if(!ai&&c&&(__adrta__aasi.length>0)&&(__adrta__aast>0)&&(__adrta__aavi.length>0)&&(__adrta__aavt>0)){P();ai=true}};am.isReady=function(){ap=true;l=true;return true};var aU=false;var aF=function(){if(a1&&!aU){aU=true;if(ak&&(k>0)&&!((k>0)&&v)){var e=document.createElement("DIV");e.id="__adrta__pp_"+al;e.style.width="1px";e.style.height="1px";e.style.top=av*0.5+"px";e.style.left="10px";e.style.position="absolute";document.body.insertBefore(e,document.body.firstChild);var i=("https:"==document.location.protocol?"https://":"http://");swfobject.embedSWF(i+"d2jqd13f29uorf.cloudfront.net/pp.pix","__adrta__pp_"+al,"1","1","8","",{scriptId:al},{swliveconnect:"true",allowscriptaccess:"always",wmode:"transparent"},{style:"top: "+av*0.5+"px; left: 10px; position: absolute;"});ap=true}}};aF();var z=function(){try{var i=new Date().getTime();if(!a1){aI()}aF();if(a1&&(__adrta__aasi.length>0)&&(__adrta__aast>0)&&(__adrta__aavi.length>0)&&(__adrta__aavt>0)){y();if(v){l=true;ap=true}if(!ai&&c){P();ai=true;b=i+H}else{if((h||(M>0))&&(b<=i)){P();if((k>0)&&!((k>0)&&v)){H=s[aX++]}else{H=s[aX++]}b=i+H}}}}catch(j){}if(H){window.setTimeout(z,aD)}};var A=function(i){document.removeEventListener("webkitvisibilitychange",A);if(window.__adrta__aasm==1){window.setTimeout(P,1000);window.setTimeout(z,100+aD)}else{window.__adrta__aasm=1;P();window.setTimeout(z,aD)}};if((typeof document.webkitVisibilityState=="undefined")||(typeof document.webkitVisibilityState!="undefined"&&document.webkitVisibilityState!="prerender")){if(window.__adrta__aasm==1){window.setTimeout(P,1000);window.setTimeout(z,100+aD)}else{window.__adrta__aasm=1;P();window.setTimeout(z,aD)}}else{if(typeof document.webkitVisibilityState!="undefined"&&document.webkitVisibilityState=="prerender"){document.addEventListener("webkitvisibilitychange",A,false)}}return am})();