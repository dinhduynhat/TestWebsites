!function(e,t){function n(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function i(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function o(){return window.matchMedia("only screen and (max-width: 767px)").matches}function r(){!function(e){function t(){function t(){return!e.support.cors&&window.XDomainRequest}function n(){return!window.matchMedia}var i=e.Deferred(),o="//cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.2/jquery.xdomainrequest.min.js",r=g+"/assets/polyfills/match_media.js";if(t()&&n())G=!0,e.when(e.getScript(o),e.getScript(r)).done(i.resolve);else if(t())G=!0,e.when(e.getScript(o)).done(i.resolve);else{if(!n())return i.resolve();e.when(e.getScript(r)).done(i.resolve)}return i.promise()}t().then(a)}(jQuery)}function a(){!function(r){function a(e,t){var n=ht();r(e).attr("id",n).addClass("gwi-widget").data(t),Dt[n]=r(e)}function P(e,t,n){return r.ajax({url:kt(zt)+w+e,type:"POST",crossDomain:!0,data:r.extend(Gt(n),t)})}function V(e){var t={watchable_type:e.type,watchable_id:e.id};return r.ajax({url:kt(zt)+w+"logo",type:"GET",crossDomain:!0,dataType:"jsonp",data:r.extend(Gt(e),t)})}function N(e){if(!(zt.isAppLink||e.isRefresh||e.isCombinedButton)){var t={watchable_type:e.type,watchable_id:e.id};return P("widget_serve",t,e)}}function q(e){if(!(zt.isAppLink||e.isRefresh||e.isCombinedButton)){var t={watchable_type:e.type,watchable_id:e.id};return P("button_serve",t,e)}}function Q(e,t){var n=zt.trackingCookie,i={movie:"m",show:"s",season:"d",episode:"e"}[e];return n&&n[i]?n[i][t]:void 0}function F(e){var t=Q(e.type,e.id);return t?t.c:void 0}function K(e){return{modality:Z(e),campaign:Y(e),lead_partner_id:X(e)}}function $(e){if(!e.isRefresh){var t={watchable_type:e.type,watchable_id:e.id};return P("button_clicked",t,e)}}function X(e){var t=Q(e.type,e.id);return t?t.p:zt.partnerId}function J(){var e=pt(zt.originURL);return e?e.gwiCampaign:void 0}function Y(e){return J()||F(e)||e.campaign||zt.campaign}function Z(e){var t=e.modality||zt.modality;if(t)return t;if(e.flavor||e.render)return e.flavor&&!e.render?e.flavor.replace("-","_")+"_modal":"microsite"===e.flavor?"microsite":e.flavor.replace("-","_")+"_"+e.render.replace("-","_")}function et(e){try{return e instanceof HTMLElement}catch(t){return"object"==typeof e&&1===e.nodeType&&"object"==typeof e.style&&"object"==typeof e.ownerDocument}}function tt(){var n=t.documentElement;return{x:(e.pageXOffset||n.scrollLeft)-(n.clientLeft||0),y:(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}}function nt(){var n=t.documentElement,i=t.getElementsByTagName("body")[0];return{width:e.innerWidth||n.clientWidth||i.clientWidth,height:e.innerHeight||n.clientHeight||i.clientHeight}}function it(){var e=t.documentElement,n=t.body;return{width:Math.max(n.scrollWidth,e.scrollWidth,n.offsetWidth,e.offsetWidth,n.clientWidth,e.clientWidth),height:Math.max(n.scrollHeight,e.scrollHeight,n.offsetHeight,e.offsetHeight,n.clientHeight,e.clientHeight)}}function ot(e,t){r(e).css(t)}function rt(e,t){r(e).attr(t)}function at(e,t){var n,i=e.apiKey||zt.apiKey||"",o=zt.gwiHost||"https://gowatchit.com",a=zt.anonymizerHost?kt(zt):zt.anonymizerHost,s=e.theme||zt.theme,l=e.render||zt.render,c=e.flavor||zt.flavor,d=Y(e),u=Z(e),p=e.redirectRoute,f=zt.isAppLink,v=X(e),h=e.draft,g=zt.originURL,m=e.forceImpression,b=e.forceLocalOptions||zt.forceLocalOptions,w=e.mobilePreference||zt.mobilePreference,y=e.hideHeader||zt.hideHeader,x=e.combineOnlineOndemand,I=e.combineDvdBluray,W=e.layout||zt.layout,C=zt.externalLinks,k=e.tvSelectors,G=e.trailerUrlType,T=e.trailerUrl,S=e.trailerAutoplay,_=e.eventTitle,z=e.eventDescription,D=e.eventStartDate,M=e.eventEndDate,j=e.eventDuration,H=e.eventAddress,L=e.micrositeUrl,E=e.directvApiKey,B=e.dvrChannelNumber,R=e.dvrStartTime,O=e.facebookShareLink,U=e.twitterShareLink,A=e.googlePlusShareLink,P=e.externalWebsite,V=e.mobileLayout,N=e.shareMessage,q=zt.openCalendar;void 0===k&&(k=!0),void 0===I&&(I=!0),void 0===x&&(x=!1),void 0===y&&(y=!1),void 0===e.autoGeolocation&&void 0===zt.autoGeolocation&&(autoGeolocation=!0),"mini"===e.flavor&&(autoGeolocation=!1),(e.autoGeolocation===!1||zt.autoGeolocation===!1)&&(autoGeolocation=!1),(e.autoGeolocation===!0||zt.autoGeolocation===!0)&&(autoGeolocation=!0);var Q=0;return t&&(Q=r(t).offset().top),n=r.extend({id:e.id},{type:e.type},{flavor:c},{apiKey:i},{theme:s},{layout:W},{tvSelectors:k},{partnerId:zt.partnerId},{leadPartnerId:v},{combineOnlineOndemand:x},{combineDvdBluray:I},{hideHeader:y},{viewportHeight:nt().height},{viewportScrollTop:r(window).scrollTop()},{widgetOffset:Q},{autoGeolocation:autoGeolocation},a?{anonymizerHost:a}:{},l?{render:l}:{},o?{gwiHost:o}:{},g?{originURL:g}:{},p?{redirectRoute:p}:{},C?{externalLinks:C}:{},d?{campaign:d}:{},u?{modality:u}:{},T?{trailerUrl:T}:{},G?{trailerUrlType:G}:{},S?{trailerAutoplay:S}:{},f?{isAppLink:f}:{},b?{forceLocalOptions:b}:{},w?{mobilePreference:w}:{},m?{forceImpression:m}:{},h?{draft:h}:{},_?{eventTitle:_}:{},z?{eventDescription:z}:{},D?{eventStartDate:D}:{},M?{eventEndDate:M}:{},j?{eventDuration:j}:{},H?{eventAddress:H}:{},q?{openCalendar:q}:{},L?{micrositeUrl:L}:{},O?{facebookShareLink:O}:{},U?{twitterShareLink:U}:{},A?{googlePlusShareLink:A}:{},P?{externalWebsite:P}:{},V?{mobileLayout:V}:{},N?{shareMessage:N}:{},E?{directvApiKey:E}:{},B?{dvrChannelNumber:B}:{},R?{dvrStartTime:R}:{})}function st(e,t){if(t&&e){var n=r('<iframe style="display: none;"></iframe>');r(e).append(n),n.get(0).contentDocument.write(t)}}function lt(e,t){return e&&(t.pixelEncoded||zt.pixelEncoded)&&(e=decodeURIComponent(e)),e}function ct(e){var t=e.impressionPixel||zt.impressionPixel;return lt(t,e)}function dt(e){var t=e.alertConversionPixel||zt.alertConversionPixel;return lt(t,e)}function ut(e){var t=e.providerConversionPixel||zt.providerConversionPixel;return lt(t,e)}function pt(e){var t={},n=e.split("?")[1];if("undefined"==typeof n)return null;for(var i=n.split("&"),o=0;o<i.length;o++){var r=i[o].split("="),a=decodeURIComponent(r[0]),s=decodeURIComponent(r[1]);t[a]=s}return t}function ft(e,t){return r.param(at(e,t))}function vt(e,t){var n=zt.anonymizerHost?kt(zt):zt.anonymizerHost,i=n?n+"/superwidget":"https://superwidget.gowatchit.com/superwidget";return i+="?"+ft(e,t)}function ht(){return"gwi-superwidget-"+ ++St}function gt(e,t){var n=ht(),i=vt(e,t);Mt.print("[GWI]:CREATING WIDGET FRAME"),Mt.print("--SRC:",i),Mt.print("-UNIT:",n);var o="mini"===e.flavor?{visibility:"hidden"}:{visibility:"hidden","min-width":"250px"},a=e.flavor+"-frame",s=_t[n]=r("<iframe></iframe>").attr({src:i,"class":a,id:n,"options-expanded":"false",scrolling:"no",frameborder:"0",height:"100%",width:"100%",name:n}).css(o).data(e).get(0);return s}function mt(e){_t[e]&&0!==r(_t[e]).parent().length&&r(_t[e]).remove(),delete _t[e]}function bt(e,t,n,i){if(!r.support.cors&&window.XDomainRequest)return r('<div class="ie9-loader" style="text-align:center; margin-top: 200px;">Loading...</div>');var o=r('<div class="loading-dots">');"left"===t&&o.addClass("left"),"center"===t&&o.addClass("center"),n&&o.addClass("inline"),i&&o.addClass("invert-color");for(var a=0;e>=a;a++)o.append(r('<div class="bounce'+a+'"></div>'));return o}function wt(e){return"hidden"!==r(e).css("visibility")}function yt(e){var t=r("#"+e);wt(t)&&(t.siblings(".loading-dots").remove(),t.siblings(".ie9-loader").remove())}function xt(e){var t=r("#"+e);wt(t)||t.css("visibility","visible")}function It(e,t){var n=r("#"+e),i=Ht.getFrame();0===n.length||!t&&n.is(i)||(n.is(i)?Ht.updateDimensions({height:t+"px"}):n.css("height",t+"px"))}function Wt(){var t=r.Deferred();return e.JSON?t.resolve():r.getScript("/json2.js").then(t.resolve),t.promise()}function Ct(e){if(!e.anonymizerHost)return Mt.print("[GWI]: Skipping Allowed Region Check."),r.Deferred().resolve();var t=(e.anonymizerHost?e.anonymizerHost:kt(e))+m;return r.ajax({url:t,crossDomain:!0,dataType:"json",data:Gt(),error:function(e,t,n){Mt.print("[GWI]: Error in Allowed Region check."),Mt.print("xhr: "+e+"; status: "+t+"; err: "+n)}}).then(function(e){return e.allowed_region?void 0:r.Deferred().reject()})}function kt(e){var t=e.anonymizerHost||e.gwiHost||"https://gowatchit.com";return window.location.protocol.indexOf("https")<0&&G&&(t=t.replace("https","http")),t}function Gt(e){return e||(e={}),r.extend({api_key:zt.apiKey,origin_url:zt.originURL},K(e))}var Tt=t.getElementById(s).src.match(/^https?:\/\/[^/]*/i).pop(),St=0,_t={},zt={},Dt={},Mt=function(){function e(e){return h&&console&&console[e]&&"function"==typeof console[e]?function(){console[e].apply(console,[].slice.call(arguments))}:function(){}}return{error:e("error"),warn:e("warn"),print:e("log"),dump:e("dir")}}(),jt=function(){function i(t,n,i){c(t).then(function(o){var r=JSON.stringify({event:y+n,frame:"_top",info:i||{}});x?o.contentWindow.postMessage(r,Tt):e.frames[t].location.hash="#"+r})}function o(e,t){e="string"==typeof e?e.split(/\s+/):e,r.each(e,function(e,n){l.hasOwnProperty(n)||(l[n]=[]),l[n].push(t)})}function a(e){var t;try{t=JSON.parse(e.data)}catch(n){t=null}if(t&&t.event&&t.frame){Mt.print("[GWI]::XFrame message received: "+t.event),Mt.dump(t);var i=[t.event.replace(y,""),t.info,t.frame];r.each(l[i[0]]||[],function(e,t){t.apply(null,i)})}}var s="",l={},c=function(){function n(){for(var r=a.length-1;r>=0;r--){var s=t.getElementById(a[r]);s&&s.contentWindow&&(o[a[r]].resolve(s),a.splice(r,1))}i=a.length?e.setTimeout(n,25):null}var i,o={},a=[];return function(e){return o.hasOwnProperty(e)||(o[e]=r.Deferred(),a.push(e),i||n()),o[e]}}();return x?n(e,"message",a):e.setInterval(function(){try{var t=e.location.hash;t!==s&&(s=t,~t.indexOf(y)&&(e.location.hash="#",a({data:t.substr(1)})))}catch(n){}},50),{send:i,receive:o,dispatch:function(e,t,n){var o=n?[n]:[];r.each(_t,function(n){n!==e&&i.apply(jt,[n,t].concat(o))})}}}(),Ht=function(){function i(e){return"string"==typeof e&&~e.indexOf("%")}function o(e,t){return i(e)?~~(t*(parseFloat(e)/100)):parseInt(e)}function a(e){function t(e,t){return t-o(e,t)>>1}var n=zt.modalMaxHeight?{width:C+"px"}:{},i=nt(),a=i.width<W?r(window).scrollTop()+.05*i.height:r(window).scrollTop()+.15*i.height,s=i.width<W?r.extend({},h.mobile,e||{}):r.extend({},h.desktop,n,e||{});return s.top=t(s.height,i.height)+r(window).scrollTop(),s.top<a&&(s.top=a),s.top+="px",s.left=t(s.width,i.width)+"px",r.extend({position:"absolute"},s)}function s(){w&&r(w).attr("id")&&mt(r(w).attr("id")),g&&0!==r(g).parent().length&&r(g).remove(),m&&0!==r(m).parent().length&&r(m).remove(),g=m=b=w=null,e.onGwiModalClose&&"function"==typeof e.onGwiModalClose&&e.onGwiModalClose()}function l(){return!!(g||m||b||w)}function c(n,i){var c,d,h,y,x,W,C,k=a();if(l()&&s(),m=r("<div></div>").addClass("gwi-blocker").css(f).get(0),g=r("<div></div>").addClass("gwi-modal-dialog").css(u).get(0),b=r("<div></div>").addClass("gwi-modal-content").css(p).get(0),zt.modalMaxHeight){var G={"max-height":zt.modalMaxHeight,"overflow-y":"scroll","overflow-x":"hidden"};r(g).css(G),r(b).css({height:"inherit"})}r(t.body).append(m).append(g),r(b).append(bt(3,"center",!0)),r(g).append(b);var T=r.Deferred(),S=r.Deferred();i&&i.animate?(C=i.animate.frame?_t[i.animate.frame].getBoundingClientRect():{left:0,top:0},x=o(k.width,nt().width),W=o(k.height,nt().height),c=C.left+i.animate.rect.left,h=C.top+i.animate.rect.top+r(window).scrollTop(),d=parseInt(k.left),y=parseInt(k.top),r(g).css({left:c,top:h,width:i.animate.rect.width,height:i.animate.rect.height}),r(g).animate({left:d,top:y,width:x,height:W,opacity:1},I,function(){S.resolve()}),r(m).animate({opacity:.75},I,function(){T.resolve()})):(S.resolve(),T.resolve()),S.then(function(){ot(g,r.extend({opacity:1},k)),w=gt(n),ot(w,v),r(b).append(w);var t=ct(n);st(b,t),e.onGwiModalOpen&&"function"==typeof e.onGwiModalOpen&&e.onGwiModalOpen()})}function d(e){if(null!==g){ot(g,r.extend({opacity:1},a(e||{}))),ot(w,{height:a(e||{}).height});for(var t in _t)jt.send(t,"modal-position-change",{modalTop:parseInt(a(e||{}).top)})}}var u={position:"absolute",margin:0,opacity:.5,zIndex:10102,"box-sizing":"border-box"},p={position:"relative",border:"1px solid #e5e5e5",borderRadius:"3px",webkitBoxShadow:"0 0 2px 2px rgba(224, 224, 224, 0.45)",mozBoxShadow:"0 0 2px 2px rgba(224, 224, 224, 0.45)",boxShadow:"0 0 2px 2px rgba(224, 224, 224, 0.45)",outline:0,height:"100%",width:"100%",webkitBoxSizing:"content-box",mozBoxSizing:"content-box",boxSizing:"content-box"},f={position:"fixed",top:0,left:0,width:"100%",height:"100%",opacity:0,backgroundColor:"#fff",zIndex:10101},v={borderRadius:"3px",display:"block"},h={mobile:{width:"95%",height:"95%"},desktop:{width:"768px",height:"500px"}},g=null,m=null,b=null,w=null;return n(e,"resize",function(){null!==g&&ot(g,r.extend({opacity:1},a()));for(var e in _t)jt.send(e,"viewport-resize",{viewportHeight:r(window).height()})}),{show:c,remove:s,updateDimensions:d,getFrame:function(){return w},getContent:function(){return b},isVisible:function(){return null!==g}}}();Mt.print("[GWI]::booting..."),Mt.print("[GWI]::checking availability..."),r.when(Wt()).then(function(){e.GWI&&"object"==typeof e.GWI?zt=e.GWI.config:(Mt.print("[GWI]: Setting the widget config in a div is now deprecated. "+T),zt=r("#gwi-widget-config").data()),zt.originURL=e.location.href,Tt=zt.anonymizerHost?kt(zt):g,Ct(zt).then(function(){function t(e,t){t||(t=r(e).data()),Mt.print("[GWI]: GWI.injectWidget is now deprecated. Please use GWI.display instead. "+T),t=At(t),t=Nt(t),t.flavor="alert",t.render="power-button",Ft(e,t)}function s(e,t){var n=r.extend({flavor:zt.widgetFlavor},t||r(e).data()),i=gt(n,e),o=ct(n),a=r("<div></div>").addClass(d).css("height",300).append(bt(3,"center",!0));a.append(i),r(e).replaceWith(a),st(a,o)}function h(){var e='<a class="powered-by" target="blank" href="http://www.gowatchit.com"><div class="icon-gowatchit" style="max-width:25px;">'+u+'</div><span>GoWatchIt</span></a><div class="privacy-and-terms"><a target="_blank" href="http://www.gowatchit.com/pages/privacy">Privacy</a><a target="_blank" href="http://www.gowatchit.com/pages/privacy#interest-based-ad">Ad Choices</a></div>';return e}function m(e){return r("<div/>").text(e).html()}function w(e){var t="";return t+='<div class="footer power-button-footer clearfix"><div class="footer-left">',t+=e?'<span class="greeting">Hi, '+m(e)+'</span><a href="#" class="power-button-sign-out">Sign Out</a>':'<a href="#" class="power-button-sign-in">Sign in now</a>',t+="</div>",t+='<div class="footer-right powered-by-holder clearfix">'+h()+"</div></div>"}function y(e){e.preventDefault();var t="/api/v3/session/logout";return r.ajax({url:kt(zt)+t,type:"GET",dataType:"jsonp",data:Gt(e.data.params)}).then(function(){qt()})}function x(e){e.preventDefault();var t,n=e.data.params,i=e.data.button;t=r.extend({},n,{redirectRoute:"sign-in",animate:r(i).get(0)}),Yt(t)}function I(e,t){e.find(".power-button-sign-out").on("click",{params:t},y),e.find(".power-button-sign-in").on("click",{params:t,button:e},x)}function W(e){var t;switch(e){case"Add to Queue":t="Queue It";break;case"Set TV Alert":case"Set Movie Alert":t="Set Alert";break;default:t=e}return t}function C(e,t,n,i,o){o||(o={});var a;switch(i.flavor){case"alert":a="alert-button";break;case"availability":a="availability-button";break;case"link":a="link-button"}i.buttonText&&(i.forceLocalOptions||zt.forceLocalOptions)&&(t=i.buttonText),i.buttonWidth<120&&(t=W(t));var s=r("<div></div>").addClass(a),l=r("<button></button>").addClass("btn-gwi btn-gwi-block"),c=r(w(o.greeting));return $icon="icon-gowatchit"===n?r('<div class="icon icon-gowatchit" style="max-width:25px;"></div>').append(u):"icon-email"===n?r('<div class="icon icon-email" style="max-width:25px;"></div>').append(p):"icon-calendar"===n?r('<div class="icon icon-calendar" style="max-width:25px;"></div>').append(f):r('<div class="icon '+n+'">'),$btnText=r("<span></span>").addClass("btn-text").html(t),l.append($icon).append($btnText),s.html(l),"power-button"===i.render&&s.append(c),i.buttonWidth<120&&(l.find(".icon").hide(),c.hide()),r(e).html(s),I(r(e),i),l}function G(e){var t=zt.anonymizerHost?kt(zt):g,n=t+"/assets/",i="gwi-widget-button-theme-"+e+"-style";if(0===r("#"+i).length){Mt.print("adding stylesheet...");var o={id:i,rel:"stylesheet",type:"text/css",href:n+A[e]};googleFontsAttrs={rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800"};var a=r("<link></link>").attr(o),s=r("<link></link>").attr(googleFontsAttrs);r("head").append([a,s])}}function P(e){r(e).prop("disabled",!0)}function Q(e,t){var n,i,o=!0;return n=r.map(e,function(e){return e.disclosure_id}),i=r.map(t,function(e){return e.id}),r.each(i,function(e,t){o=o&&-1!==r.inArray(t,n)}),o}function F(e){r(e).children().hide(),r(e).append(bt(3,"center",!1,!0))}function K(e){r(e).find(".loading-dots").remove(),r(e).children().show()}function J(e){var t="/api/v3/"+e.type+"s/"+e.id+"/superwidget/status";return r.ajax({url:kt(zt)+t,dataType:"jsonp",data:Gt(e)})}function Y(e,t){return J(t).then(function(n){var i=n.status.text,o=n.status.disclosures,a=n.status.requiredDisclosures,s=n.status.isRegisteredUser,l=n.status.auth_token,c=n.status.greeting,d=C(e,i,"icon-email",t,{greeting:c});("episode"===t.type||"season"===t.type)&&(t.type="show",t.id=n.status.show_id),n.status.inQueue?P(d):n.status.isUserSignedIn&&Q(o,a)?($(t),r(d).on("click",function(e){e.preventDefault();var n=r(d);F(n),at(t.type,t.id,l,t).then(function(){var e="movie"===t.type&&s?"In Queue":"Alert Set";K(n),n.find(".btn-text").html(e),P(n),tn(t)})})):r(d).on("click",{button:d,params:t},lt)})}function at(e,t,n,i){var o="/api/v3/"+e+"s/"+t+"/quick_alert",a={auth_token:n};return r.ajax({url:kt(zt)+o,type:"POST",data:r.extend(Gt(i),a)})}function lt(e){var t=e.data.params;if(e.preventDefault(),o()&&"transition"===t.mobilePreference){t.render="inline";var n=kt(zt)+"/superwidget/app?"+ft(t);window.open(n)}else Yt(t)}function vt(e){var t=kt(zt)+"/api/v3/"+e.type+"s/"+e.id+"/superwidget";return r.ajax({url:t,data:{api_key:zt.apiKey}}).then(function(e){return e.config.availability_button_text||"Watch Now"})}function ht(e,t){return vt(t).then(function(n){var i=C(e,n,"icon-gowatchit",t);r(i).on("click",{button:i,params:t},lt)})}function mt(e,t){var n=C(e,"GoWatchIt","icon-gowatchit",t);r(n).on("click",function(e){e.preventDefault();var n=t.campaign||zt.campaign,i=kt(zt);"movie"===t.type&&(i+="/movies/"+t.id),i+="?lead_partner_id="+X(t),i+="&modality="+Z(t),n&&(i+="&campaign="+encodeURIComponent(n)),window.open(i)})}function wt(e,t){t||(t=r(e).data()),Mt.print("[GWI]: GWI.showButton is now deprecated. Please use GWI.display instead. "+T),t=At(t),t=Nt(t),"availability"==t.flavor?t.render="button":"alert"==t.flavor&&(t.render="simple-button"),Ft(e,t)}function Wt(e,t){t||(t=r(e).data()),t.flavor=t.flavor||"alert",t.buttonWidth=t.buttonWidth||"auto",t.buttonBgColor=t.buttonBgColor||null,t.buttonTextColor=t.buttonTextColor||null,"auto"!==t.buttonWidth&&(t.buttonWidth=parseInt(t.buttonWidth,10)),"alert"===t.flavor?Y(e,t).then(function(){Et(e,t)}):"availability"===t.flavor?ht(e,t).then(function(){Et(e,t)}):"calendar"===t.flavor?(Tt(e,t),Et(e,t)):"link"===t.flavor&&(mt(e,t),Et(e,t)),a(e,t)}function Ct(e){var t=kt(zt)+"/api/v3/"+e.type+"s/"+e.id;return r.ajax({url:t,data:Gt(e)}).then(function(t){return t[e.type]})}function Tt(t,n){var i=n.buttonText||"Add to Calendar",o=C(t,i,"icon-calendar",n);r(o).on("click",{button:o,params:n},lt),"movie"===n.type&&n.micrositeUrl&&Ct(n).then(function(t){t.in_theaters&&(r(o).off("click"),r(o).on("click",function(){var t=St(n.micrositeUrl);e.open(t)}))})}function St(e){var t=-1===e.indexOf("?")?"?":"&";return e+t+"modality=calendar_button&openCalendar=true"}function Lt(e,t){{var n,i,o=r.extend({},t,{render:"button",flavor:"availability",modality:"availability_combined",isCombinedButton:!0}),a=r.extend({},t,{render:"power-button",flavor:"alert",modality:"alert_combined",isCombinedButton:!0});r.extend({},t,{modality:t.flavor+"_combined"})}t.modality=Z(t),n=r(e).clone().attr({"data-render":"button","data-flavor":"availability"}),n.addClass("gwi-subwidget"),r(e).append(n),Ft(n.get(0),o),i=r(e).clone().attr({"data-render":"power-button","data-flavor":"alert"}),i.addClass("gwi-subwidget"),r(e).append(i),Ft(i.get(0),a)}function Et(e,t){var n=r(e).find("."+k),i=r(e).find(".icon");"auto"!==t.buttonWidth?r(e).width(t.buttonWidth):t.buttonWidth=r(e).width(),t.buttonWidth<=5&&r(e).css("font-size","14px"),t.buttonWidth>5&&t.buttonWidth<=120&&(n.addClass("text-center"),r(e).css("font-size",.135*t.buttonWidth)),t.buttonWidth>120&&t.buttonWidth<=175&&r(e).css("font-size",.075*t.buttonWidth),t.buttonWidth>175&&r(e).css("font-size","14px"),t.buttonBgColor&&(t.buttonBorderColor||(t.buttonBorderColor=t.buttonBgColor),n.css({"background-color":t.buttonBgColor,"background-image":"none"}),n.hover(function(){n.css(t.buttonHoverBgColor?{"background-color":t.buttonHoverBgColor}:{opacity:.75})},function(){n.css({"background-color":t.buttonBgColor,opacity:1})})),t.buttonTextColor&&(ot(n,{color:t.buttonTextColor}),ot(i,{fill:t.buttonTextColor}),n.hover(function(){var e=t.buttonHoverTextColor?t.buttonHoverTextColor:t.buttonTextColor;n.css({color:e}),i.css({fill:e})},function(){n.css({color:t.buttonTextColor}),i.css({fill:t.buttonTextColor})})),t.buttonBorderColor&&(ot(n,{borderColor:t.buttonBorderColor}),n.hover(function(){t.buttonHoverBorderColor&&n.css({"border-color":t.buttonHoverBorderColor})},function(){n.css({"border-color":t.buttonBorderColor,opacity:1})})),t.buttonBackgroundImageUrl&&(t.buttonBgImageUrl=t.buttonBackgroundImageUrl,Mt.print("[GWI]: buttonBackgroundImageUrl is now deprecated. Please use buttonBgImageUrl instead. "+T)),t.buttonBgImageUrl&&(n.css("background","url("+t.buttonBgImageUrl+")"),n.children().css("visibility","hidden"),t.buttonBorderColor||n.css("border","none")),t.style&&Mt.print('[GWI]: data-style is now deprecated. Please use flavor "data-button-style" instead. '+T);var o=t.buttonStyle||t.style||null;o&&n.attr("style",o),t["class"]&&Mt.print('[GWI]: data-class is now deprecated. Please use flavor "data-button-class" instead. '+T);var a=t.buttonClass||t["class"]||null;a&&n.addClass(a)}function Bt(e){var t={term:e};return r.ajax({url:kt(zt)+b,data:r.extend(Gt(),t)})}function Rt(e,t){Bt(t.search).then(function(n){var i,o=n.search.movies[0],r=n.search.shows[0],a=t.type,s={movie:o,show:r};if(t.type&&"movie"!==t.type?a="show":t.type||(a=o?"movie":"show"),i=s[a])Mt.print("[GWI]: Search found "+a+' with search term "'+t.search+'"'),delete t.search,t.id=i.id,t.type=a,Ft(e,t);else{var l;l=t.type&&"movie"!==t.type?"TV Show":t.type?"Movie":"Movie or TV Show",Mt.print("[GWI]: No "+l+' found with search term: "'+t.search+'"')}})}function Ot(e){var t=e.id,n=kt(zt)+"/api/v3/shows/"+t+"/latest_available_episode";return r.ajax({url:n,data:Gt(e)})}function Ut(e,t){return delete t.selectedEpisode,Ot(t).then(function(n){t.id=n.episode.id,t.type="episode",Mt.print("[GWI]: Found latest episode. Loading widget with episode #"+t.id),Ft(e,t)},function(){Mt.error("[GWI]: There is no episode available for show #"+t.id+". Loading widget for show."),Ft(e,t)})}function At(e){return e.theme=e.theme||zt.theme||"default",e.layout=e.layout||"tabs",e.render=e.render||"inline",e}function Pt(e,t,n){Mt.error("[GWI]: Invalid parameter for "+e+": '"+t+"'. Accepted parameters: "+n.join(", "))}function Vt(e,t){var n,i=parseInt(e.id),o={alert:D,availability:z,link:LINK_RENDERS,trailer:j,"tune-in":M,microsite:H,calendar:L,mini:E,list:B,directv:R};if(isNaN(i)||1>i)return Mt.error("[GWI]: Invalid parameter for id: '"+e.id+"'. Must be a positive number."),!1;if(!e.type||r.inArray(e.type,S)<0)return Pt("type",e.type,S),!1;if(r.inArray(e.flavor,_)<0)return Pt("flavor",e.flavor,_),!1;if(!t&&(n=o[e.flavor],r.inArray(e.render,n)<0))return Pt("render",e.render,n),!1;if("trailer"==e.flavor){if(r.inArray(e.trailerUrlType,U)<0)return Pt("trailerUrlType",e.trailerUrlType,U),!1;if(!e.trailerUrl)return Mt.error("[GWI]: You must provide a trailerURl."),!1}if("calendar"===e.flavor){if(!e.eventStartDate||isNaN(new Date(e.eventStartDate).getTime()))return Mt.error("[GWI]: Invalid eventStartDate: '"+e.eventStartDate+"'"),!1;if(!e.eventEndDate&&!e.eventDuration)return Mt.error("[GWI]: Must specify an eventEndDate or eventDuration."),!1;if(e.eventEndDate&&isNaN(new Date(e.eventEndDate).getTime()))return Mt.error("[GWI]: Invalid eventEndDate: '"+e.eventEndDate+"'"),!1;if(e.eventDuration&&isNaN(parseInt(e.eventDuration)))return Mt.error("[GWI]: Invalid eventDuration: '"+e.eventDuration+"'"),!1}if(e.selectedEpisode){if("show"!=e.type)return Mt.error('[GWI]: Invalid type "'+e.type+'". Type must be "show" when selectedEpisode is enabled.'),!1;if(r.inArray(e.selectedEpisode,O)<0)return Pt("selectedEpisode",e.selectedEpisode,O),!1}return!0}function Nt(e){return"quick-alert"===e.flavor?(Mt.print('[GWI]: Widget flavor "quick-alert" is now deprecated. Please use flavor "alert" instead. '+T),e.flavor="alert"):"availabilities"===e.flavor&&(Mt.print('[GWI]: Widget flavor "availabilities" is now deprecated. Please use flavor "availability" instead. '+T),e.flavor="availability"),e.categories&&(Mt.print("[GWI]: Categories is now deprecated. Please use combineOnlineOndemand flag instead. "+T),e.combineOnlineOndemand=3==e.categories),e}function qt(){r.each(Dt,function(e,t){var n=r(t),i=n.data();i.isRefresh=!0,"alert"===i.flavor&&Ft(n.get(0),i)})}function Qt(e,t){t||(t=r(e).data());var n='<div class="footer powered-by-holder clearfix">'+h()+"</div>";V(t),r(e).append(n)}function Ft(e,t){if(t||(t=r(e).data()),t.render||(t.render="power-button"),t.search)return void Rt(e,t);if(t=At(t),t=Nt(t),Vt(t,!1)){if(t.selectedEpisode&&"latest-available"===t.selectedEpisode)return void Ut(e,t);var n=t.flavor,i=t.render,o=i.indexOf("button")>-1||"combined"===i,a="inline"===i;t.modality||(t.modality=Z(t)),0!=t.animate&&(t.animate=e),"alert"===n?"power-button"===i||"simple-button"===i?Wt(e,t):"inline"===i?s(e,t):"combined"===i&&Lt(e,t):"availability"===n?"button"===i?Wt(e,t):"rail"===i?s(e,t):"inline"===i?s(e,t):"combined"===i&&Lt(e,t):"trailer"===n?"inline"===i&&s(e,t):"link"===n?"button"===i&&Wt(e,t):"tune-in"===n?"inline"===i&&s(e,t):"microsite"===n?"inline"===i&&s(e,t):"calendar"===n?"inline"===i?s(e,t):"button"===i&&Wt(e,t):"mini"===n?"inline"===i&&s(e,t):"directv"===n?"inline"===i&&s(e,t):"list"===n?"inline"===i&&s(e,t):Mt.error("[GWI]: Unrecognized flavor/render combo."),a?N(t):o?q(t):Mt.error("[GWI]: Neither inline or button, not firing any widget/button serve. Render value is: "+i)}}function Kt(){r("a").each(function(){var e=r(this).attr("href"),t=(""+e).match(v);if(t){var n=zt.widgetFlavor,i={id:t.pop(),type:t.pop(),flavor:n};if("alert"===n){i.trigger="power-button";var o=gt(i);o.setAttribute("data-href",e),r(this).replaceWith(o)}else("availability"===n||"availabilities"===n||"link"===n)&&Wt(r(this).get(0),i)}})}function $t(){r("."+l).each(function(){Ft(this)})}function Xt(){r("."+c).each(function(){Qt(this)})}function Jt(e){Mt.print("[GWI]: GWI.showWidget is now deprecated. Please use GWI.showModal instead. "+T),Yt(e)}function Yt(e){var t,n,i=r.extend({},zt,r.isPlainObject(e)?e:et(e)?r(e).data():null);i.trigger="modal",i.render="modal",t=[i],i=At(i),i=Nt(i),Vt(i,!0)&&(i.modality||(i.modality=Z(i)),i.blowup===!0||i.animate===!0?n=e:(n=i.blowup||i.animate,et(n)||(n=null)),n&&t.push({animate:{rect:n.getBoundingClientRect()}}),Ht.show.apply(null,t),N(e))}function Zt(){Mt.print("Setting config: ",zt),zt.autoEmbed&&(Mt.print("[GWI]::auto-embedding widgets"),Kt())}function en(e){st("body",ut(e))}function tn(e){st("body",dt(e))}function nn(){function a(){var t=pt(zt.originURL);if(t&&t.gwiScroll){var n=r("."+d).first();if(n.length>0){var i=n.offset();e.scrollTo(i.left,i.top-300)}}}function s(){var e=pt(zt.originURL);if(e&&e.gwiAutoOpen){var t=r("."+l).map(function(){var e=r(this).data().render;return e&&-1!==e.indexOf("button")?this:void 0}),n=t.first();if(n.length>0){var i=r(n).data();Yt(i)}}}Mt.print("[GWI]::parsing config"),Zt(),$t(),Xt(),jt.receive("frame-loaded frame-resize",function(e,t,n){var i=function(){var e;return e="microsite"==r("#"+n).data().flavor?o()?document.documentElement.clientHeight:"auto":t.widgetHeight}();t.widgetHeight>0&&(xt(n),yt(n),r("."+d).css("height","auto"),It(n,i))}),jt.receive("frame-close-modal-popup",function(){Ht.remove()}),jt.receive("frame-open-widget-modal",function(e,t,n){var i=t.widgetConfig;i.animate=r("#"+n).get(0),i.forceImpression=!0,Yt(i)}),jt.receive("frame-open-registration-modal",function(e,t,n){var i=t.widgetConfig;i.redirectRoute="registration",i.flavor="alert",i.animate=r("#"+n).get(0),Yt(i)}),jt.receive("frame-open-sign-in-modal",function(e,t,n){var i=t.widgetConfig;i.redirectRoute="sign-in",i.flavor="alert",i.animate=r("#"+n).get(0),Yt(i)}),jt.receive("frame-close-window",function(){window.close()}),jt.receive("signin-state-change",function(e,t,n){qt(),jt.dispatch(n,e,{state:t.state})}),jt.receive("alert-complete alert-reset",function(e,t,n){qt();var i=r("#"+n);tn(i.data()),jt.dispatch(n,e)}),jt.receive("provider-clicked",function(e,t,n){var i=r("#"+n);en(i.data())}),r(window).scroll(function(){for(var e in _t)jt.send(e,"scroll-change",{viewportScrollTop:r(window).scrollTop()})}),e.GWI={DOM:{addListener:n,removeListener:i,setAttributes:rt,setStyle:ot,getDocumentSize:it,getWindowSize:nt,getScrollOffset:tt},triggerProviderConversionPixel:en,triggerAlertConversionPixel:tn,setConfig:Zt,injectWidgetByLink:Kt,showWidget:Jt,injectWidget:t,showButton:wt,showModal:Yt,display:Ft},a(),s(),e.goWatchItReady&&"function"==typeof e.goWatchItReady&&e.goWatchItReady()}Mt.print("[GWI]::availability check: allowed"),nn(),G(zt.theme||"default")},function(){Mt.print("[GWI]::availability check: not allowed")})})}(jQuery)}var s="gwijslib",l="gwi-widget",c="gwi-branding",d="gwi-iframe-holder",u='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 37.93 37.859" enable-background="new 0 0 37.93 37.859" xml:space="preserve"><g><path d="M19.439,0.001c4.499,0.001,8.999,0.063,13.496-0.02c3.255-0.061,5.007,1.195,4.989,4.654c-0.05,9.497-0.056,18.996,0.005,28.493c0.022,3.385-1.536,4.805-4.864,4.783c-9.331-0.061-18.663-0.078-27.993,0.008c-3.637,0.034-5.089-1.634-5.062-5.162c0.069-9.164,0.091-18.329-0.009-27.493c-0.042-3.852,1.644-5.418,5.443-5.298C10.104,0.112,14.774,0,19.439,0.001z M34.183,19.108c0.07-8.563-6.508-15.301-15.004-15.369C10.638,3.67,3.909,10.27,3.841,18.782c-0.068,8.557,6.516,15.297,15.013,15.369C27.398,34.224,34.113,27.633,34.183,19.108z"/><path d="M31.702,19.143c-0.134,6.899-6.195,12.733-13.006,12.517c-6.921-0.219-12.621-6.305-12.329-13.163c0.288-6.769,6.045-12.319,12.725-12.268C25.961,6.282,31.835,12.297,31.702,19.143z M16.299,12.248c0,4.924,0,8.741,0,13.475c3.225-2.521,5.728-4.477,8.843-6.912C22.002,16.481,19.471,14.602,16.299,12.248z"/></g></svg>',p='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 15.904 15.904" enable-background="new 0 0 15.904 15.904" xml:space="preserve"><path class="fill" d="M7.952,0C3.56,0,0,3.56,0,7.952c0,4.392,3.56,7.952,7.952,7.952c4.392,0,7.952-3.56,7.952-7.952 C15.904,3.56,12.344,0,7.952,0z M12.289,11.25H3.615V6.565L7.98,8.356l4.309-1.791V11.25z M12.289,5.533L7.924,7.324L3.615,5.533 V4.654h8.675V5.533z"/></svg>',f='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path d="M320,64H192V32h128V64z M512,96v352c0,35.344-28.656,64-64,64H64c-35.344,0-64-28.656-64-64V96c0-35.344,28.656-64,64-64v32c-17.641,0-32,14.375-32,32v64h448V96c0-17.625-14.344-32-32-32V32C483.344,32,512,60.656,512,96z M128,400H32v48c0,17.656,14.359,32,32,32h64V400z M128,304H32v64h96V304z M128,192H32v80h96V192z M240,400h-80v80h80V400z M240,304h-80v64h80V304zM240,192h-80v80h80V192z M352,400h-80v80h80V400z M352,304h-80v64h80V304z M352,192h-80v80h80V192z M480,400h-96v80h64c17.656,0,32-14.344,32-32V400z M480,304h-96v64h96V304z M480,192h-96v80h96V192z M112,96h32c8.844,0,16-7.156,16-16V16c0-8.844-7.156-16-16-16h-32c-8.844,0-16,7.156-16,16v64C96,88.844,103.156,96,112,96z M368,96h32c8.844,0,16-7.156,16-16V16c0-8.844-7.156-16-16-16h-32c-8.844,0-16,7.156-16,16v64C352,88.844,359.156,96,368,96z"/></svg>',v=/gowatchit.com\/(movie|show|episode)s\/([1-9]\d*)+(?:[?#/]|$)/,h=!0,g="https://superwidget.gowatchit.com",m="/api/v3/service/allowed_region",b="/api/v3/search/",w="/api/v3/tracking/",y="watchit-",x="function"==typeof e.postMessage||"object"==typeof e.postMessage,I=500,W=767,C=800,k="btn-gwi",G=!1,T="Go to http://gowatchit.com/sdk/docs for more information.",S=["movie","show","season","episode","list"],_=["availability","availabilities","alert","link","quick-alert","tune-in","trailer","microsite","calendar","mini","directv","list"],z=LINK_RENDERS=["button","inline","combined"],D=["simple-button","power-button","inline","combined"],M=["inline"],j=["inline"],H=["inline"],L=["inline","button"],E=["inline"],B=["inline"],R=["inline"],O=["latest-available"],U=["youtube","other"],A={"default":"themes/default.button-f13488614c5ab0f3b4be575a73d1a11b.css",mpaa:"themes/mpaa.button-17c44a7a3369ce6b494692a485517fe3.css",decider:"themes/decider.button-25717d5b7b83c73c837916587d54d261.css",thecredits:"themes/thecredits.button.css",furious:"themes/furious.button-c2653b19103f6bb37fbc610fb25c8b6d.css",ifc_blue:"themes/ifc_blue.button-df8a73cfeab5e2282c7847ab06152c3e.css",ifc_green:"themes/ifc_green.button-edb498450ccf087350527441efa1c15c.css",ifc_gold:"themes/ifc_gold.button-b3ab758974055a96a7d140ac43f79209.css",ifc_crimson:"themes/ifc_crimson.button-ef9aa5099352cf951f3d82d29ef4c69a.css",buzzfeed_blue:"themes/buzzfeed_blue.button-a4245a2d2d045dc48aaf7d356d654d00.css",ew:"themes/ew.button-f13488614c5ab0f3b4be575a73d1a11b.css",sundance:"themes/sundance.button-9569b87817679a0896a4828029336fa9.css",sisters:"themes/sisters.button-68a217b4c65e4d381fe291c19ba539e9.css"};
window.console||(window.console={}),window.console.log||(window.console.log=function(){}),window.console.error||(window.console.error=function(){}),window.console.dir||(window.console.dir=function(){}),function P(){if("loading"===t.readyState)return e.setTimeout(P,50);if("function"==typeof e.jQuery&&"string"==typeof e.jQuery().jquery)console.log("[GWI]: jQuery was found."),r();else{var i=t.createElement("script");i.type="text/javascript",i.src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",n(i,"load",function(){jQuery.noConflict(),r()});var o=t.getElementsByTagName("script")[0];o.parentNode.insertBefore(i,o),console.log("[GWI]: jQuery not found. Loading jQuery 1.11.1...")}}()}(window,document);