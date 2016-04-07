
/* DAC.js 3.0.2 Copyright 2016 AOL Advertising. */
try{!function(){"use strict";function a(a){g=a.modules,e=a.coreClasses.Logger,f=a.coreClasses.RequestContext,b(a),c(g,i,h),d(g,i,h)}function b(a){var b=function(){},c=a.coreClasses.Queue;b.prototype=c.prototype,j.prototype=new b,j.prototype.constructor=j,j.superClass=c.prototype,a.modules.pluginClasses.MultiAdGroupQueue=j,j.prototype.advance=function(){var a=this.getNextRequest();if(this.namespace.Utils.isObject(a))if(this.isMultiAdRequest(a)){var b=this.curPointer+this.virtualSubGroupCounter;this.namespace.AdQueue.processMultiAdRequest(a,this.id,b)}else a.isMultiGroup&&1===a.size()&&this.doAutoAdInjection&&(a=this.storage[a.storageIndex[0]],delete a.adLoadScript,delete a.partOfMultiAd),this.namespace.AdQueue.processAdRequest(a,this);else this.close()},j.prototype.inVirtualMode=function(){return this.virtualSubGropusList.length>0},j.prototype.addRequest=function(a){this.storage.push(a);var b={context:a,addOns:[]},c=this;a.config.placement&&(this.requests[a.config.placement]=b),a.config.alias&&(this.requests[a.config.alias]=b),a.config.responsive&&a.config.responsive.bounds&&this.namespace.Utils.each(a.config.responsive.bounds,function(a){c.requests[a.id]=b})},j.prototype.isMultiAdRequest=function(a){return a.isMultiGroup&&(a.size()>1||1===a.size()&&!this.doAutoAdInjection)},j.prototype.getNextRequest=function(){var a;return this.curPointer+=1,this.inVirtualMode()?(this.virtualSubGroupCounter++,a=this.virtualSubGropusList[this.curPointer]):a=this.groupList[this.curPointer],a},j.prototype.addMultiGroup=function(a,b){b?this.virtualSubGropusList.push(a):(this.groupList.push(a),a.queue=this,a.isVirtualGroup=!1)}}function c(a,b,c){function d(a,b){z(a,b),a.start()}function e(b,c,d){a.AdcallBuilder.buildMultiAdCallUrl(b),b.logger.log(E,"loadGroup","Injection of multi ad request"),a.ResourceLoader.loadTransientScript(b.multiAdCallUrl,g(b,c,d),b.logger)}function g(a,d,e){return function(f){var g=d+"_"+e,i=b.adqueues[d];if(a.logger.log(E,"createLoadCallbackClosure","Load done. group index "+e+" of queue "+d+" status= "+f),!i)return void a.logger.log(E,"createLoadCallbackClosure","Queue with id "+d+" was removed.");if(f){try{h(g,a,d),l(a,d),i.doAutoAdInjection?n(a,g,i,i.executeConfig.multiAd.skipDefault):(i.executeConfig.multiAd.autoInjectShownResponsive&&x(a,i,g),w(a,i.id)),J.isFunc(i.executeConfig.multiAd.readyCallback)&&i.executeConfig.multiAd.readyCallback.call(c,a.getAdIds(!0),d)}catch(j){a.logger.log(E,"createLoadCallbackClosure",j.message)}i.advance()}else a.logger.isEnabled()&&a.logger.log(E,"createLoadCallbackClosure","#Group "+e+" from queue "+d+" could not be loaded"),i.advance()}}function h(a,d,e){var f={},g=b.adqueues[e];F[a]=c.ADTECH_showAd,G[e]=G[e]||{},j(a,d,e),J.isFunc(c.ADTECH_bannerMetaData)&&(f=c.ADTECH_bannerMetaData()),J.eachKey(f,function(b,c){d.addBannerMetaData(b,c),c.addOnParent&&(G[e][b]=F[a])}),i(d.aliases,g,d),i(d.placements,g,d)}function i(a,b,c){J.each(a,function(a){a&&(b.executeConfig.multiAd.autoInjectShownResponsive||(b.requests[a].context.shown=!1),s(b,a,c))})}function j(b,c,d){a.Utils.each(c.getAdIds(),function(a){G[d][a]=F[b]})}function l(d,e){var f=b.adqueues[e];f.executeConfig.multiAd.autoInjectShownResponsive&&a.Utils.each(d.getAdIds(),function(a){var b=f.requests[a];if(b.sharesContainer){var d=c.document.getElementById(b.context.config.adContainerId);d&&(d.innerHTML="")}})}function m(a,b,d,e){return function(f){try{a.call(c,b,f,d)}catch(g){}J.each(e,function(b){try{a.call(c,b.id,f,d)}catch(e){}})}}function n(a,b,c,d){var e=a.getAdIds(!1,!0);a.logger.log(E,"injectGroup","Group size "+e.length+" using skipDefault "+d);for(var f=0;f<e.length;f++){var g=e[f].id,h=c.storage[a.storageIndex[e[f].index]],i=t(h.id,c);o(h,g,d,b,i,c.id)}}function o(a,b,c,d,e,f){var g=e.sameParent,h=!1;a.config.fif.usefif&&!a.config.fif.shareWithAddOns&&(g=[],h=!0),r(a,p(a,b,F[d],c,g,f)),h&&J.each(e.sameParent,function(a){a.config.skipContainerClean=!0,r(a,p(a,a.id,F[d],c,[],f))}),J.each(e.standalone,function(a){r(a,p(a,a.id,F[d],c,[],f))})}function p(a,b,c,d,e,f){var g;return a.config.fif.usefif?(g='<script id="adscript">',g=q(g,b,d,f),J.each(e,function(a){g=q(g,a.id,d,f)}),g+="</script>"):g=m(c,b,d,e),g}function q(a,b,c,d){var e=J.isString(b)?"'":"";return a+="parent.ADTECH.writeAd("+e+b+e+", document, "+c+", "+d+");"}function r(b,c,d){d=d||{},b.config.fif.usefif?b.adLoadScript=c:d.bannerCode=c;try{a.BannerInjector.injectBannerAsyncMode(b,d)}catch(e){b.logger.log(E,"injectBanner",e.message)}}function s(d,e,g){var h,i=g.getAddOnsIds(e),j=d.requests[e],k=j.context;i&&0!==i.length&&(j.addOns=[],J.each(i,function(g){var i=new f(a,b,c);if(i.config={},J.isStringANumber(g)?i.config.placement=parseInt(g,10):i.config.alias=g,a.ConfigResolver.isPlacementConfigDefined(g)){var l=a.ConfigResolver.buildConfiguration(i);i.config=a.ConfigFinalizer.process(l,i.logger),h=!1}else i.config.adContainerId=k.config.adContainerId,i.config.fif=k.config.fif,i.config.preLoad=k.config.preLoad,h=!0;i.id=g,j.addOns.push(g),d.requests[g]={context:i,multiAdSkipDefault:j.multiAdSkipDefault,addOns:[],parentId:e,sharesContainer:h},h&&(j.sharesContainer=!0)}))}function t(a,b){var c={sameParent:[],standalone:[]};return J.each(b.requests[a].addOns,function(a){var d=b.requests[a];d.sharesContainer?c.sameParent.push(d.context):c.standalone.push(d.context)}),c}function u(a,b,d,e){G[e][a].call(c,a,b,d)}function v(b,c){var d;if(c||(c=a.AdQueue.getRequestQueue(b)),d=a.AdQueue.getRequest(b,c),!d)throw new Error(E+"#showAd The banner id "+b+" was not queued");return d.context.shown?void d.context.logger.log(E,"showAd","Banner was shown."):void(G[c]&&G[c][b]?y(d,b,c):(d.context.logger.log(E,"showAd","Code not yet available. Will inject immediately when adcall completes."),d.showScheduled=!0))}function w(b,c){for(var d,e,f=b.getAdIds(!1,!0),g=0;g<f.length;g++)e=f[g].id,d=a.AdQueue.getRequest(e,c),d.showScheduled&&(b.logger.log(E,"injectShowScheduleRequest","Scheduled showAd for "+e+" processed"),delete d.showScheduled,y(d,e,c))}function x(a,b,c){for(var d=a.getAdIds(!1,!0),e=b.executeConfig.multiAd.skipDefault,f=0;f<d.length;f++){var g=d[f].id,h=b.storage[a.storageIndex[d[f].index]];if(h.shown&&h.responsiveId){h.logger.log(E,"autoInjectShownResponsiveAds","Reshow request id "+h.id);var i=t(h.id,b);o(h,g,e,c,i,b.id)}}}function y(a,b,c){var d=a.context,e=G[c][b];a.sharesContainer&&(d.config.skipContainerClean=!0,d.config.fif.usefif&&(d.config.fif.shareWithAddOns=!1)),r(d,p(d,b,e,a.multiAdSkipDefault,[],c))}function z(d,e){var f=e.length>0;if(f&&(d.virtualSubGropusList=[]),d.storage.length>0){for(var g=new k(a,b,c),h=0;h<d.storage.length;h++){var i=d.storage[h];if(!f||A(i,e)){var j=B(i,g),l=C(d.storage[h]);j||(g=D(g,d,f)),g.addRequest(d.storage[h],h,l)}}g.isEmpty()||D(g,d,f),d.doAutoAdInjection=!d.executeConfig.multiAd.disableAdInjection}}function A(a,b){var c=!1;return J.each(b,function(b){b===a.id&&(c=!0)}),c}function B(b,c){var d,e=b.config;return c.isEmpty()?d=!0:(d=a.Utils.objectsEquals(e,c.config,H),d&&(d=a.Utils.objectsEquals(b.getConfigParams(),c.config.params,I,!0))),d}function C(a){var b=a.config,c={base:{params:{}},custom:{params:{}}};return J.copyObject(c.base,b,H),J.copyObject(c.base.params,a.getConfigParams(),I,!0),J.copyObject(c.custom.params,a.getConfigParams(),["size"]),c}function D(d,e,f){e.addMultiGroup(d,f),d.logger.log(E,"closeGroup","Multi group created with size: "+d.storageIndex.length);var g=d.size(),h={};return J.each(d.storageIndex,function(a){var b=e.storage[a],c=d.customConfigs[b.id];!c&&b.responsiveId&&(c=d.customConfigs[b.responsiveId]),J.eachKey(c.params,function(a,b){h[a]?h[a].value===b?h[a].count++:h[a].count=0:h[a]={count:1,value:b}})}),J.eachKey(h,function(a,b){b.count===g&&(d.config.params[a]=b.value,J.eachKey(d.customConfigs,function(b,c){delete c.params[a]}))}),new k(a,b,c)}var E="MultiAdManager",F=[],G=[],H=["protocol","server","network","pageid","sizeid","performGeoDetection","performScreenDetection","performTimezoneDetection","performFlashDetection","performRichMediaDetection"],I=["alias","size"],J=a.Utils;a[E]={load:d,loadGroup:e,showAd:v,writeAd:u,isCompatibleWithGroup:B,closeGroupAndCreateNew:D,processMultiAdResponse:h,resolveAddOnsConfigurations:s}}function d(a){function b(a){var b=a.config,c={},h=b.protocol+"://"+b.server+f+e+f+b.network+f+"0"+f+b.pageid.toString()+f+b.sizeid.toString()+f+"mode=multiad;",i=a.getActivePlacementsIds(),j=a.getActiveAliases();i.length>0&&(h+="plcids=",h+=d(i,a),j.length>0&&(h+=";")),j.length>0&&(h+="alias=",h+=d(j,a)),c.alias=!0,h=g.addUrlParams(h,b,";",!1,c),a.multiAdCallUrl=h}function c(b,c){var d="";if(b.customConfigs[c]&&a.Utils.isObject(b.customConfigs[c].params)){var e={alias:!0},f=g.addUrlParams("",b.customConfigs[c],",",!0,e);f.length>1&&(d+="("+f.substring(1)+")")}return d}function d(b,d){var e=!0,f="";return a.Utils.each(b,function(a){e||(f+=","),e=!1,a&&(f+=a,f+=c(d,a))}),f}var e="multiad/3.0",f="/",g=a.AdcallBuilder;g.buildMultiAdCallUrl=b}var e,f,g,h=window,i=h.ADTECH,j=function(a,b,c,d){j.superClass.constructor.call(this,a,b,c,d),this.groupList=[],this.allowGrouping=!0,this.virtualSubGropusList=[],this.virtualSubGroupCounter=0},k=function(a,b,c){this.modules=a,this.aliases=[],this.placements=[],this.storageIndex=[],this.isMultiGroup=!0,this.config={},this.customConfigs={},this.bannersMetaData={},this.isResponsive=!1,this.hasPlacementIds=!1,this.hasAliasIds=!1,this.logger=new e(a,b,c)};k.prototype.addRequest=function(a,b,c){var d=a.config.alias,e=a.config.placement;this.modules.Utils.isNumber(a.responsiveId)?(this.isResponsive=!0,e=a.responsiveId,d=void 0):this.modules.Utils.isString(a.responsiveId)&&(this.isResponsive=!0,d=a.responsiveId),this.isEmpty()&&(this.config=c.base),a.responsiveId&&a.id!==a.responsiveId||(this.customConfigs[a.id]=c.custom),d&&d!=a.id&&(this.customConfigs[d]=c.custom),e&&e!=a.id&&(this.customConfigs[e]=c.custom),this.placements.push(e),this.aliases.push(d),d&&(this.hasAliasIds=!0),e&&(this.hasPlacementIds=!0),this.storageIndex.push(b),this.logger.isEnabled=this.logger.isEnabled||a.logger.isEnabled,a.partOfMultiAd=!0},k.prototype.isEmpty=function(){return 0===this.aliases.length},k.prototype.size=function(){return this.aliases.length},k.prototype.getAdIds=function(a,b){var c=[],d=[],e=this.bannersMetaData,f=this;return g.Utils.each(this.aliases,function(a,d){if(f.isVirtualGroup===!1){var e=f.getRequestContext(d);if(e.disableAdInjection)return}c.push(a?b?{id:a,index:d}:a:b?{id:f.placements[d],index:d}:f.placements[d])}),g.Utils.each(c,function(b,c){d.push(b);var g=f.aliases[c],h=f.placements[c],i=e[g]?e[g]:e[h];a&&i&&i.addons&&Array.prototype.push.apply(d,i.addons)}),d},k.prototype.addBannerMetaData=function(a,b){var c,d=b.addOnParent;this.bannersMetaData[a]=this.bannersMetaData[a]||{addons:[]},d&&(this.bannersMetaData[d]||(this.bannersMetaData[d]={addons:[]}),c=this.bannersMetaData[d],c.addons.push(a))},k.prototype.getAddOnsIds=function(a){return this.bannersMetaData[a]?this.bannersMetaData[a].addons:[]},k.prototype.getRequestContext=function(a){var b,c=this.storageIndex[a];return(c||0===c)&&(b=this.queue.storage[c]),b},k.prototype.getActiveValues=function(a){var b=[],c=this;return c.isVirtualGroup===!1&&g.Utils.each(a,function(a,d){var e=c.getRequestContext(d);e&&!e.disableAdInjection&&b.push(a)}),b},k.prototype.getActivePlacementsIds=function(){var a=[];return this.hasPlacementIds&&(a=this.isVirtualGroup===!1?this.getActiveValues(this.placements):this.placements),a},k.prototype.getActiveAliases=function(){var a=[];return this.hasAliasIds&&(a=this.isVirtualGroup===!1?this.getActiveValues(this.aliases):this.aliases),a},i.registerPlugin(a)}()}catch(e){if(window.ADTECH&&window.ADTECH.debugMode)throw e}