define("common/modules/analytics/omnitureMedia",["qwery","common/utils/config","common/modules/analytics/omniture","lodash/objects/values","common/utils/chain"],function(e,n,t,i,o){function a(a){function r(e){return a.el().getAttribute(e)}var d,l,u=r("data-embed-path")||n.page.pageId,c=e("audio",a.el()).length?"audio":"video",p=!1,m=!1,v=!!guardian.isEmbed,h={"video:play":"event17","preroll:request":"event97","preroll:play":"event59","preroll:skip":"event99","preroll:end":"event64","audio:play":"event19","video:25":"event21","video:50":"event22","video:75":"event23","video:end":"event18","audio:end":"event20","video:fullscreen":"event96",duration:"event57"},f=["eVar11","prop41","prop43","prop44","eVar44","eVar74","eVar61"];this.getDuration=function(){return parseInt(r("data-duration"),10)||void 0},this.getPosition=function(){return a.currentTime()},this.play=function(){"video"===c&&p&&this.startDurationEventTimer()},this.pause=function(){"video"===c&&this.stopDurationEventTimer()},this.sendEvent=function(e,n,a){t.populateEventProperties(n||e),s.eVar74=a?c+" ad":c+" content",s.eVar43=s.prop43=c.charAt(0).toUpperCase()+c.slice(1),s.eVar44=s.prop44=u,m&&(s.prop41="PrerollMilestone"),s.linkTrackVars+=","+o(f).join(","),s.linkTrackEvents+=","+i(h).join(","),s.events+=","+e,s.tl(!0,"o",n||e),s.prop41=s.eVar44=s.prop44=s.eVar43=s.prop43=s.eVar74=void 0},this.sendNamedEvent=function(e,n){this.sendEvent(h[e],e,n)},this.omnitureInit=function(){s.loadModule("Media"),s.Media.autoTrack=!1,s.Media.trackWhilePlaying=!1,s.Media.trackVars=t.getStandardProps()+","+o(f).join(","),s.Media.trackEvents=i(h).join(","),s.Media.segmentByMilestones=!1,s.Media.trackUsingContextData=!1,s.eVar11=v?"Embedded":n.page.sectionName||"",s.eVar7=s.pageName,s.Media.open(u,this.getDuration(),"HTML5 Video")},this.getDurationWatched=function(){var e=0,n=new Date,t=(n-d)/1e3;return l&&p&&t>1&&(e=Math.round(t)),d=n,e},this.baseDurationEvent=function(){var e=[],n=this.getDurationWatched();return n&&e.push(h.duration+"="+n),e},this.sendSegment=function(e){var n=this.baseDurationEvent();n.push(e),this.sendEvent(n.join(","))},this.sendDurationEvent=function(){var e=this.baseDurationEvent();e&&e.length>0&&this.sendEvent(e.join(","))},this.startDurationEventTimer=function(){this.stopDurationEventTimer(),d=new Date,l=window.setInterval(this.sendDurationEvent.bind(this),1e4)},this.stopDurationEventTimer=function(){this.sendDurationEvent(),l&&window.clearInterval(l),l=!1},this.onContentPlay=function(){p=!0,this.sendNamedEvent("video:play"),this.startDurationEventTimer()},this.onPrerollPlay=function(){m=!0,this.sendNamedEvent("preroll:play",!0)},this.init=function(){this.omnitureInit(),a.on("play",this.play.bind(this)),a.on("pause",this.pause.bind(this)),a.one("video:preroll:request",this.sendNamedEvent.bind(this,"preroll:request",!0)),a.one("video:preroll:play",this.onPrerollPlay.bind(this)),a.one("video:preroll:skip",this.sendNamedEvent.bind(this,"preroll:skip",!0)),a.one("video:preroll:end",this.sendNamedEvent.bind(this,"preroll:end",!0)),a.one("video:content:play",this.onContentPlay.bind(this)),a.one("audio:content:play",this.sendNamedEvent.bind(this,"audio:play")),a.one("video:content:25",this.sendNamedEvent.bind(this,"video:25")),a.one("video:content:50",this.sendNamedEvent.bind(this,"video:50")),a.one("video:content:75",this.sendNamedEvent.bind(this,"video:75")),a.one("video:content:end",this.sendNamedEvent.bind(this,"video:end")),a.one("audio:content:end",this.sendNamedEvent.bind(this,"audio:end")),a.on("player:fullscreen",this.sendNamedEvent.bind(this,"video:fullscreen"))}}return a}),define("text!common/views/ui/video-ads-skip-overlay.html",[],function(){return'<div class="js-ads-skip vjs-ads-skip">\n    <span class="vjs-ads-skip__countdown">You may skip this advert in <span class="js-skip-remaining-time"><%=skipTimeout%></span> seconds</span>\n</div>\n'}),define("lodash/arrays/sortedIndex",["../functions/createCallback","../utilities/identity"],function(e,n){function t(t,i,o,a){var r=0,s=t?t.length:r;for(o=o?e(o,a,1):n,i=o(i);s>r;){var d=r+s>>>1;o(t[d])<i?r=d+1:s=d}return r}return t}),define("lodash/arrays/indexOf",["../internals/baseIndexOf","./sortedIndex"],function(e,n){function t(t,o,a){if("number"==typeof a){var r=t?t.length:0;a=0>a?i(0,r+a):a||0}else if(a){var s=n(t,o);return t[s]===o?s:-1}return e(t,o,a)}var i=Math.max;return t}),define("common/modules/video/events",["bean","qwery","common/utils/report-error","common/utils/$","common/utils/config","common/utils/detect","common/utils/template","common/modules/analytics/omnitureMedia","common/modules/onward/history","text!common/views/ui/video-ads-skip-overlay.html","lodash/arrays/indexOf","lodash/functions/throttle"],function(e,n,t,i,o,a,r,s,d,l,u,c){function p(e){return x?"video":e.guMediaType}function m(e){return _&&!d.isRevisit(o.page.pageId)&&e.guAutoplay}function v(e,n){return p(n)+":"+e}function h(e,n,t){var i=x?"ophan/embed":"ophan/ng";e&&require([i],function(i){var o={};o[p(t)]={id:e,eventType:n.type},i.record(o)})}function f(e,n){I.concat(M.map(function(e){return"content:"+e})).forEach(function(t){e.one(v(t,e),function(t){h(n,t,e)})})}function g(e){new s(e).init()}function y(e){var n={end:function(){e.trigger(v("preroll:end",e)),k(e,!0)},start:function(){var t=e.duration();t?e.trigger(v("preroll:play",e)):e.one("durationchange",n.start)},ready:function(){e.trigger(v("preroll:ready",e)),e.one("adstart",n.start),e.one("adend",n.end),m(e)&&e.play()}},t=function(){k(e),m(e)&&e.play(),e.off("adtimeout",t),e.off("adserror",t)};e.one("adsready",n.ready),e.one("adtimeout",t),e.one("adserror",t)}function b(e,n){var t=["gu-video-457263940","gu-video-55e4835ae4b00856194f85c2"];o.switches.kruxVideoTracking&&o.switches.krux&&i(e.el()).attr("data-media-id")&&-1!==u(t,i(e.el()).attr("data-media-id"))&&("videoPlaying"===n?Krux("admEvent","KAIQvckS",{}):"videoEnded"===n&&Krux("admEvent","KBaTegd5",{}))}function k(e){var n={end:function(){e.trigger(v("content:end",e))},play:function(){var t=e.duration();t?e.trigger(v("content:play",e)):e.one("durationchange",n.play)},timeupdate:function(){var n=Math.round(parseInt(e.currentTime()/e.duration()*100,10));M.reverse().some(function(t){return n>=t?(e.trigger(v("content:"+t,e)),!0):!1})},ready:function(){e.trigger(v("content:ready",e)),e.one("play",n.play),e.on("timeupdate",c(n.timeupdate,1e3)),e.one("ended",n.end),m(e)&&e.play()}};n.ready()}function w(n){n.on("playing",function(){b(n,"videoPlaying"),e.fire(document.body,"videoPlaying")}),n.on("pause",function(){e.fire(document.body,"videoPause")}),n.on("ended",function(){e.fire(document.body,"videoEnded"),b(n,"videoEnded")})}function E(t){var o,a={update:function(){var r=this.ima.getAdsManager(),s=r.getCurrentAd().getDuration()-r.getRemainingTime(),d=parseInt((t-s).toFixed(),10);d>0?i(".js-skip-remaining-time",this.el()).text(d):(window.clearInterval(o),i(".js-ads-skip",this.el()).html('<button class="js-ads-skip-button vjs-ads-skip__button" data-link-name="Skip video advert"><i class="i i-play-icon-grey skip-icon"></i><i class="i i-play-icon-gold skip-icon"></i>Skip advert</button>'),e.on(n(".js-ads-skip-button")[0],"click",a.skip.bind(this)))},skip:function(){i(".js-ads-skip",this.el()).hide(),this.trigger(v("preroll:skip",this)),this.ima.onAdComplete_(),this.ima.onContentResumeRequested_(),this.ima.getAdsManager().stop()},init:function(){var e=r(l,{skipTimeout:t});i(this.el()).append(e),o=setInterval(a.update.bind(this),250)},end:function(){i(".js-ads-skip",this.el()).hide(),window.clearInterval(o)}};this.one(v("preroll:play",this),a.init.bind(this)),this.one(v("preroll:end",this),a.end.bind(this))}function j(e){e&&"message"in e&&"code"in e&&t(new Error(e.message),{feature:"player",vjsCode:e.code},!1)}function C(e){var n=e.error();return null!==n?(j(n),4===n.code):!1}function T(e){e.on("error",function(){j(e.error()),i(".vjs-big-play-button").hide()})}var _=a.isBreakpoint({min:"desktop"}),x=!!guardian.isEmbed,M=[25,50,75],I=["preroll:request","preroll:ready","preroll:play","preroll:end","content:ready","content:play","content:end"];return{constructEventName:v,bindContentEvents:k,bindPrerollEvents:y,bindGlobalEvents:w,initOphanTracking:f,initOmnitureTracking:g,adSkipCountdown:E,handleInitialMediaError:C,bindErrorHandler:T}}),define("common/modules/video/fullscreener",["bean","bonzo"],function(e,n){function t(){var t=this,i=n.create('<div class="vjs-fullscreen-clickbox"></div>')[0],o={click:function(e){this.paused()?this.play():this.pause(),e.stop()},dblclick:function(e){e.stop(),this.isFullscreen()?this.exitFullscreen():this.requestFullscreen()}};n(i).appendTo(t.contentEl()),e.on(i,"click",o.click.bind(t)),e.on(i,"dblclick",o.dblclick.bind(t)),t.on("fullscreenchange",function(){this.isFullscreen()&&t.trigger("player:fullscreen")})}return t}),define("common/modules/video/supportedBrowsers",["bean","common/utils/$","common/utils/detect","common/utils/config","lodash/collections/some"],function(e,n,t,i,o){function a(t){e.on(n("."+s)[0],"click",function(){t.error(null)})}var r={Firefox:"25",Chrome:"28",IE:"9",Opera:"14",Safari:"6"},s="vjs-error-display__close",d=t.getUserAgent,l='Your browser is no longer supported. <a href="http://whatbrowser.org" target="_blank">Update your browser?</a> <button class="'+s+'">close</button>';return function(e){var n=o(r,function(e,n){return d.browser===n&&d.version<e});n&&i.switches.mediaPlayerSupportedBrowsers&&(e.error(l),a(e))}}),define("common/modules/video/tech-order",["common/utils/$","lodash/collections/contains","lodash/arrays/compact","lodash/collections/map","common/utils/chain"],function(e,n,t,i,o){function a(n){return e("source",n).map(function(e){var n=e.getAttribute("type");return s[n]?s[n]:n})}function r(e){return o(a(e)).and(i,function(n){return e.canPlayType(n)}).and(t).and(n,"probably").value()}var s={"video/m3u8":'video/m3u8; codecs="avc1.42C01e, mp4a.40.2"',"video/mp4":'video/mp4; codecs="avc1.42C01e, mp4a.40.2"',"video/3gp:large":'video/3gp:large; codecs="avc1.42C01e, mp4a.40.2"',"video/3gp:small":'video/3gp:small; codecs="avc1.42C01e, mp4a.40.2"',"video/webm":'video/webm; codecs="vp8, vorbis"'};return function(e){var n=["html5","flash"];return"canPlayType"in e&&r(e)?n:n.reverse()}}),define("bootstraps/enhanced/media/video-player",["videojs","videojsads","videojsima","videojspersistvolume","videojsplaylist","videojsembed"],function(e){return e}),define("text!common/views/ui/loading.html",[],function(){return'<div class="pamplemousse">\n    <div class="pamplemousse__pip"><i></i></div>\n    <div class="pamplemousse__pip"><i></i></div>\n    <div class="pamplemousse__pip"><i></i></div>\n</div>\n'}),define("bootstraps/enhanced/media/main",["bean","bonzo","fastdom","common/utils/fastdom-promise","raven","Promise","common/utils/$","common/utils/config","common/utils/defer-to-analytics","common/utils/detect","common/utils/mediator","common/utils/url","common/utils/ajax","common/modules/analytics/beacon","common/modules/commercial/build-page-targeting","common/modules/commercial/commercial-features","common/modules/component","common/modules/video/events","common/modules/video/fullscreener","common/modules/video/supportedBrowsers","common/modules/video/tech-order","bootstraps/enhanced/media/video-player","text!common/views/ui/loading.html"],function(e,n,t,i,o,a,r,s,d,l,u,c,p,m,v,h,f,g,y,b,k,w,E){function j(){var e={ad_rule:1,correlator:(new Date).getTime(),cust_params:encodeURIComponent(c.constructQuery(v())),env:"vp",gdfp_req:1,impl:"s",iu:s.page.adUnit,output:"xml_vast2",scp:encodeURIComponent("slot=video"),sz:"400x300",unviewed_position_start:1};return"http://"+s.page.dfpHost+"/gampad/ads?"+c.constructQuery(e)}function C(e){e.loadingSpinner.contentEl().innerHTML=E}function T(e){r(".vjs-tech",e.el()).attr("aria-hidden",!0),r(".vjs-big-play-button",e.el()).attr("aria-hidden",!0),r(".vjs-current-time",e.el()).attr("aria-hidden",!0),r(".vjs-time-divider",e.el()).attr("aria-hidden",!0),r(".vjs-duration",e.el()).attr("aria-hidden",!0),r(".vjs-embed-button",e.el()).attr("aria-hidden",!0),r(".vjs-play-control",e.el()).attr("aria-label","video play"),r(".vjs-mute-control",e.el()).attr("aria-label","video mute"),r(".vjs-fullscreen-control",e.el()).attr("aria-label","video fullscreen")}function _(e,t){var i=w(e,t),o=r(e),a=parseInt(o.attr("data-duration"),10);return i.ready(function(){isNaN(a)||(i.duration(a),i.trigger("timeupdate")),i.guAutoplay="true"===r(e).attr("data-auto-play"),i.height(n(i.el()).parent().dim().height),i.width(n(i.el()).parent().dim().width),g.handleInitialMediaError(i)&&(i.dispose(),t.techOrder=k(e).reverse(),i=w(e,t))}),i}function x(e){return e.target.firstChild&&e.target.firstChild.id&&e.target.firstChild.id.indexOf("flash_api")>0}function M(i){t.read(function(){r(".js-video-play-button",i).each(function(i){var o=n(i);e.on(i,"click",function(){var e,a,s;s=n(i).parent().parent(),e=r(".js-video-placeholder",s),a=r(".js-video-player",s),t.write(function(){e.removeClass("media__placeholder--active").addClass("media__placeholder--hidden"),a.removeClass("media__container--hidden").addClass("media__container--active"),o.removeClass("media__placeholder--active").addClass("media__placeholder--hidden"),P(r("video",a).get(0),!0)})}),t.write(function(){o.removeClass("media__placeholder--hidden").addClass("media__placeholder--active")})})})}function I(e){s.page.videoJsFlashSwf&&(w.options.flash.swf=s.page.videoJsFlashSwf),w.plugin("adSkipCountdown",g.adSkipCountdown),w.plugin("fullscreener",y),t.read(function(){r(".js-gu-media--enhance").each(function(n){P(n,!1,e)})}),M(document.body),u.on("modules:related:loaded",M),u.on("page:media:moreinloaded",M)}function P(e,i,r){var u,c,v,h,f=e.tagName.toLowerCase(),y=n(e).addClass("vjs vjs-tech-"+w.options.techOrder[0]),E=y.attr("data-media-id"),M="true"===y.attr("data-block-video-ads"),I="true"===y.attr("data-show-end-slate"),P=y.attr("data-end-slate"),N=y.attr("data-embed-path"),V=y.attr("data-canonical-url")||(N?"/"+N:null),S=k(e),q=r&&!M;h=new a(function(e){V?p({url:V+"/info.json"}).then(function(n){e(n.expired)}):e(!1)}),u=_(e,{techOrder:S,controls:!0,autoplay:!1,preload:"metadata",plugins:{embed:{embeddable:!s.page.isFront&&s.switches.externalVideoEmbeds&&("Video"===s.page.contentType||"true"===y.attr("data-embeddable")),location:s.page.externalEmbedHost+"/embed/video/"+(N?N:s.page.pageId)}}}),h.then(function(e){e?u.ready(function(){u.error({code:0,type:"Video Expired",message:"This video has been removed. This could be because it launched early, our rights have expired, there was a legal issue, or for another reason."}),u.bigPlayButton.dispose(),u.errorDisplay.open()}):(g.bindErrorHandler(u),u.guMediaType=f,v=new a(function(e){u.ready(function(){var n;d(function(){g.initOmnitureTracking(u),g.initOphanTracking(u,E),g.bindGlobalEvents(u),g.bindContentEvents(u),q&&g.bindPrerollEvents(u)}),C(u),T(u),b(u),u.one("playing",function(e){x(e)?m.counts("video-tech-flash"):m.counts("video-tech-html5")}),n=u.volume(),n&&(u.volume(0),u.volume(n)),u.persistvolume({namespace:"gu.vjs"}),"video"===f?(u.fullscreener(),I&&l.isBreakpoint({min:"desktop"})&&D(u,P),q?o.wrap({tags:{feature:"media"}},function(){u.adSkipCountdown(15),u.ima({id:E,adTagUrl:j(),prerollTimeout:1e3}),u.ima.requestAds(),u.trigger(g.constructEventName("preroll:request",u)),e()})():e()):(u.playlist({mediaType:"audio",continuous:!1}),e()),u.on("mousemove",function(){clearTimeout(c),t.write(function(){u.addClass("vjs-mousemoved")}),c=setTimeout(function(){t.write(function(){u.removeClass("vjs-mousemoved")})},500)})})}),v.then(function(){i&&u.play()}))})}function D(e,t){var i=new f,o="vjs-has-ended";i.endpoint=t,i.fetch(e.el(),"html"),e.one(g.constructEventName("content:play",e),function(){e.on("ended",function(){n(e.el()).addClass(o)})}),e.on("playing",function(){n(e.el()).removeClass(o)})}function N(){if(s.isMedia&&s.page.showRelatedContent){var e=s.page.contentType.toLowerCase(),n=new f,t=r(".js-onward")[0],i="/"+e+"/section/"+s.page.section;"seriesId"in s.page&&(i+="/"+s.page.seriesId),i+=".json?shortUrl="+s.page.shortUrl,"video"===e&&(i+="&exclude-tag=guardian-professional/guardian-professional"),n.endpoint=i,n.fetch(t).then(function(){u.emit("page:media:moreinloaded",t),u.emit("page:new-content",t)})}}function V(){if(s.isMedia){var e=s.page.contentType.toLowerCase(),n=new f,t=r("video"===e?".js-video-components-container":".js-media-popular")[0],i="/"+(s.page.isPodcast?"podcast":e)+"/most-viewed.json";n.manipulationType="video"===e?"append":"html",n.endpoint=i,n.fetch(t,"html").then(function(){u.emit("page:new-content")})}}function S(e){o.wrap({tags:{feature:"media"}},function(){I(e)})()}function q(){var e=h.videoPreRolls&&!s.page.hasMultipleVideosInPage&&!s.page.isAdvertisementFeature;s.switches.enhancedMediaPlayer&&(e?require(["js!//imasdk.googleapis.com/js/sdkloader/ima3.js"]).then(function(){S(!0)},function(e){o.captureException(e,{tags:{feature:"media",action:"ads"}}),S()}):S()),N(),V()}return{init:q}});
//# sourceMappingURL=main.js.map