(function() {

    var jQueryPath = 'http://dnkzzz1hlto79.cloudfront.net/assets/jquery-f8f4463ed494f2ce5428abe4538930b3.js';
    var jQueryTargetVersion = '1.8.3';
    var videoJsPath = 'http://dnkzzz1hlto79.cloudfront.net/assets/video-b2e429aa0d145d3cfd8ce31cbcbe082c.js';
    var assets = {"css":["http://dnkzzz1hlto79.cloudfront.net/assets/player-f74544953788c8fa2a324e823a4cf28b.css"],"js":["http://dnkzzz1hlto79.cloudfront.net/assets/player-0690f1c4997f0a1de26943f29f6b53b6.js"]};


  var divs         = {"target":"myplayer","rail":"myrail","companion":"mycompanion"};
  var environment  = {"base_url":"http://player.cnevids.com","freewheel":{"base_url":"5be16.v.fwmrm.net/ad/g/1?ssnw=376342\u0026asnw=376342\u0026flag=+sltp+emcr+slcb+qtcb+vicb-exvt+sync+fbad\u0026metr=1\u0026resp=json","branded_canvas_profile":"376342:cne_canvas_live","sponsored_banner_profile":"376342:cne_canvas_live"},"omniture_library_path":"//assets.adobedtm.com/6372cf21ef88ee60bc2977a4898dcb5c7945a212/satelliteLib-f6ce2f96a2667d456566d069cf599296f21c0f0f.js","omniture":{"ssid":"vanityfair.desktop.watch","domain":"vanityfair.com","suite_id":"conde-vanityfair","server":"stats2.vanityfair.com","secure_server":"sstats.vanityfair.com","google_analytics_id":""},"omniture_page_type":"","event_log_url":"//stats.cnevids.com/e","error_log_url":"stats.cnevids.com/monitor/","preroll_audit_url":"http://player.cnevids.com/log/pqa/","settings_path":"http://player.cnevids.com/settings","video_load_path":"http://player.cnevids.com/player/video.js","swf_url":"http://www.vanityfair.com/cnevids/video-js.swf","vpaid_swf_url":"http://www.vanityfair.com/cnevids/vpaid.swf","cors_proxy_swf_url":"http://www.vanityfair.com/cnevids/swfhttprequest.swf","ssl":false,"google_analytics":"UA-37483026-12","metrics_base_url":"stats.cnevids.com","etf_base_url":"event.condenastdigital.com","etf_environment":"PROD","segment_write_key":"4UgKNkmJx5HmlsX5tlK8cIAoMBhZo8u1","source_url":"http://www.vanityfair.com/hollywood/2015/06/caitlyn-jenner-bruce-cover-annie-leibovitz","source_referrer":null,"use_source_referrer":true,"defer_video_play":false,"sparrow_origin":"cne"};
  var video        = {"id":"55b2acf661646d79d800000d","slug":"call-me-caitlyn-documentary","url":"http://video.vanityfair.com/watch/call-me-caitlyn-documentary","scene_url":"https://thescene.com/watch/vanityfair/call-me-caitlyn-documentary","title":"“Call Me Caitlyn,” a Documentary","poster_frame":"http://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_vanityfair.png,fl_progressive,g_face,h_450,q_80,w_800/v1437954185/vanityfair_call-me-caitlyn-documentary.jpg","duration":637,"sources":[[{"type":"video/webm","src":"http://dp8hsntg6do36.cloudfront.net/55b2acf661646d79d800000d/0cdde862-21d3-4ec4-99f8-e1f22e583cd4high.webm","quality":"high"},{"type":"video/webm","src":"http://dp8hsntg6do36.cloudfront.net/55b2acf661646d79d800000d/0cdde862-21d3-4ec4-99f8-e1f22e583cd4low.webm","quality":"low"},{"type":"video/mp4","src":"http://dp8hsntg6do36.cloudfront.net/55b2acf661646d79d800000d/0cdde862-21d3-4ec4-99f8-e1f22e583cd4high.mp4","quality":"high"},{"type":"video/mp4","src":"http://dp8hsntg6do36.cloudfront.net/55b2acf661646d79d800000d/0cdde862-21d3-4ec4-99f8-e1f22e583cd4low.mp4","quality":"low"}]],"thumb_encode":"http://dp8hsntg6do36.cloudfront.net/55b2acf661646d79d800000d/0cdde862-21d3-4ec4-99f8-e1f22e583cd4thumbs.webm","brand":"vanityfair","brand_image":"//dnkzzz1hlto79.cloudfront.net/assets/brands/vanityfair-aebfb68745f016a15f31a5f8511be943.png","freewheel_fallback_asset_id":"2627269","legacy_comscore_beacon_url":"http://b.scorecardresearch.com/p?c1=1\u0026c2=6035094\u0026c3=vanityfair-com\u0026c8=%E2%80%9CCall+Me+Caitlyn%2C%E2%80%9D+a+Documentary","comscore_config":{"c2":6035094,"c3":"vanityfair-com","c8":"“Call Me Caitlyn,” a Documentary"},"series_title":"Cover Shoots","season_title":"2015","series_slug":"cover-photo-shoots","categories":["Cover Shoots","Hollywood"],"series_categories":["Cover Shoots","Hollywood"],"cne_categories":["Pop Culture--Celebrities"],"tags":["jeremy elkin","pulitzer prize winner","kardashian family","olympic champion","call me caitlyn","dana brown","jane sarkin","new york","gold medal","malibu","cover stars","annie leibovitz","behind-the-scenes","kardashian","style","bruce jenner","short film","secrets","graydon carter","buzz bissinger","reality tv","documentary","culture","celebrity","magazine","transgender","olympics","jessica diehl","hollywood","jenner","magazine cover","caitlyn jenner","ellen kiell","geena rocero"],"cue_points":[],"premiere_date":"2015-07-27T00:50:00+00:00","next_video":{"id":"5591a8c761646d06a9270000","slug":"channing-tatum-poses-in-the-rain-for-annie-leibovitz","thumb_path":"http://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_vanityfair.png,fl_progressive,g_face,h_81,q_80,w_144/v1435620496/vanityfair_cover-photo-shoots-08-tk-2.jpg","title":"Channing Tatum Poses in the Rain for Annie Leibovitz"},"enable_embed":true,"info_panel_path":"http://player.cnevids.com/panels/info/55b2acf661646d79d800000d.js","share_panel_path":"http://player.cnevids.com/panels/share/55b2acf661646d79d800000d/51cc9f86bb8f554e4e000002.js?share_player_id=51cc9fb8bb8f55bdfb000005","etf_poster_frame":null,"etf_site_code":null,"cne_produced":false,"play_beacons":[]};
  var playlist     = {"id":null,"poster_frame":null,"slug":"null"};
  var playerConfig = {"id":"51cc9f86bb8f554e4e000002","ssid":"vanityfair.desktop.contextual","fw_network_id":"376342","show_bug":false,"show_thescene_logo":true,"play_btn_colors":{"bg_color":"046efe","bg_color_hover":"046efe","fg_color":"ffffff","fg_color_hover":"ffffff"},"play_btn_stroke":{"color":"046efe","color_hover":"046efe","width":"0"},"isScriptEmbed":true,"autoplay":false,"show_controls":true,"continuous_loop":false,"inViewportAutoplay":false,"preload":"true","muted":"0","onReady":"onPlayerReady","enableShare":true,"enableInfoPanel":false,"ads_disabled":false,"has_companion":false,"companion_dimensions":{"height":60,"width":300},"has_branded_canvas":false,"has_sponsored_banner":false,"fw_profile_ids":{"with_flash":"376342:cne_smrx_live_w_swf","without_flash":"376342:cne_smrx_live","twitter":"376342:cne_distrTwitter_live"},"share_player_id":"51cc9fb8bb8f55bdfb000005","autoplayNext":true,"adKeyValues":null,"default_quality":"LOW","enable_play_beacons":false,"enable_in_video_subscribe":false,"player_error_monitoring":true,"subscribe_annotation_path":"http://player.cnevids.com/annotations/subscribe.js","subscribe_annotation_options":{"panel_types":["bubble","form"],"show_time_in_seconds":25,"duration_time_in_seconds":10},"skin":"3"};

  window._cne=window._cne?window._cne:{};var BootloadManager=function(){this.assetLoaders={},this.urls=[],this.addAsset=function(e,t,n){var i=new AssetLoader(e,t,n);this.assetLoaders[e]=i,this.urls.push(e)},this.queueNextAsset=function(){if(this.serialIndex<this.urls.length){var e=this.assetLoaders[this.urls[this.serialIndex]],t=this;e.callback=function(e){t.serialIndex++,t.queueNextAsset(),t.assetDone(e)},e.load()}},this.assetDone=function(e){delete this.assetLoaders[e];var t=!0;for(var n in this.assetLoaders)this.assetLoaders.hasOwnProperty(n)&&(t=!1);t&&this.onAllComplete&&this.onAllComplete()},this.load=function(e,t){if(t="undefined"==typeof t?!0:t,this.onAllComplete=e,t)for(var n=0;n<this.urls.length;n++){var i=this,s=this.assetLoaders[this.urls[n]];s.callback=function(e){i.assetDone(e)},s.load()}else this.serialIndex=0,this.queueNextAsset()}},AssetLoader=function(e,t,n){var i=this;n=n?n:{},this.getIsComplete=function(){return _cne.assets=_cne.assets?_cne.assets:{},_cne.assets[this.url]===!0},this.setIsComplete=function(e){_cne.assets=_cne.assets?_cne.assets:{},_cne.assets[this.url]=e},this.defaultLoadCheck=function(){return this.getIsComplete()},this.assetType=t,this.url=e,this.loadSuccess=n.loadSuccess?n.loadSuccess:function(){},this.loadCheck=n.loadCheck?n.loadCheck:this.defaultLoadCheck,this.load=function(){function e(){var t=!1,n=document.styleSheets;for(var s in n)if(n.hasOwnProperty(s)&&n[s].href===i.url){i.loadComplete(),t=!0;break}t===!1&&window.setTimeout(e,50)}if(this.loadCheck())return i.runCallback(),void 0;var n;"js"===t?(n=document.createElement("script"),n.setAttribute("type","text/javascript"),n.setAttribute("src",this.url)):"css"===t&&(n=document.createElement("link"),n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",this.url)),n.readyState?n.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&i.loadComplete()}:"css"===t&&_cne.util.BrowserDetectionHelper.detectSafari5()?window.setTimeout(e,50):n.onload=this.loadComplete,(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(n)},this.loadComplete=function(){i.setIsComplete(!0),i.loadSuccess(),i.runCallback()},this.runCallback=function(){i.callback&&i.callback(i.url)}};_cne.Timer=function(){this.startTime=(new Date).getTime(),this.getTimeElapsed=function(){var e=(new Date).getTime();return e-this.startTime},this.getTimeFrom=function(e){return currTime-e}};var ie=function(){for(var e,t=3,n=document.createElement("div"),i=n.getElementsByTagName("i");n.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",i[0];);return t>4?t:e}();!function(){var e=window._cne;window._cne.ns=function(t){var n=e;if(!t)return n;for(var i=t.split("."),s=0;s<i.length;s++)if(""!==r){var r=i[s],o=n[r];n[r]=o?o:{},n=n[r]}return n}}(),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length>>>0,n=Number(arguments[1])||0;for(n=0>n?Math.ceil(n):Math.floor(n),0>n&&(n+=t);t>n;n++)if(n in this&&this[n]===e)return n;return-1}),function(){_cne.ns("util");var e=!1,t=/xyz/.test(function(){})?/\b_super\b/:/.*/,n=_cne.util.Class=function(){};n.extend=function(n){function i(){!e&&this.init&&this.init.apply(this,arguments)}var s=this.prototype;e=!0;var r=new this;e=!1;for(var o in n)r[o]="function"==typeof n[o]&&"function"==typeof s[o]&&t.test(n[o])?function(e,t){return function(){var n=this._super;this._super=s[e];var i=t.apply(this,arguments);return this._super=n,i}}(o,n[o]):n[o];return i.prototype=r,i.prototype.constructor=i,i.extend=arguments.callee,i}}(),function(){_cne.ns("util"),_cne.util.CookieHelper={create:function(e,t,n){var i="";if(n){var s=new Date;s.setTime(s.getTime()+24*n*60*60*1e3),i="; expires="+s.toGMTString()}document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+i+"; path=/"},read:function(e){for(var t=encodeURIComponent(e)+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var s=n[i];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(t))return decodeURIComponent(s.substring(t.length,s.length))}return null},erase:function(e){this.create(e,"",-1)},generateGuid:function(){var e=function(){return Math.floor(65536*Math.random()).toString(16)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}}}(),function(){_cne.ns("util"),_cne.util.QueryHelper={getUrlVars:function(){for(var e,t=[],n=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),i=0;i<n.length;i++)e=n[i].split("="),t.push(e[0]),t[e[0]]=decodeURIComponent(e[1]);return t}}}(),function(){"undefined"==typeof _cne.util.cneAnalytics&&(_cne.util.cneAnalytics=_cne.util.Class.extend({init:function(){this.trackers={},this.uniqueKeys=[]},registerTracker:function(e){null!=this.trackers[e.name]?this.trackers[e.name].push(e):this.trackers[e.name]=[e]},selectTrackers:function(e){var t=[];if(null==e)for(var n in this.trackers)t=t.concat(this.trackers[n]);else for(var i=0;i<e.length;i++)this.trackers[e[i]]&&(t=t.concat(this.trackers[e[i]]));return t},hasEventOccurred:function(e){return this.uniqueKeys.indexOf(e)>=0?!0:(this.uniqueKeys.push(e),!1)},send:function(e,t){var n=e.charAt(0).toUpperCase()+e.slice(1),i=this.selectTrackers(t.trackers);if(null!=t.trackers&&delete t.trackers,"string"==typeof t.onlyTo&&(t.onlyTo=[t.onlyTo]),"object"==typeof t.onlyTo){for(var s=[],r=0;r<i.length;r++)for(var o=0;o<t.onlyTo.length;o++)i[r].trackerType===t.onlyTo[o]&&s.push(i[r]);i=s,delete t.onlyTo}if(null==t.uniqueKey||!this.hasEventOccurred(t.uniqueKey))if(null!=t.delay)setTimeout(function(){for(var e=0;e<i.length;e++)i[e].send(n,t)},t.delay),delete t.delay;else for(var r=0;r<i.length;r++)i[r].send(n,t)}}),_cne.util.cneAnalytics.getInstance=function(){return null==_cne.util.cneAnalytics._instance&&(_cne.util.cneAnalytics._instance=new _cne.util.cneAnalytics),_cne.util.cneAnalytics._instance},_cne.util.cneAnalyticsTracker=_cne.util.Class.extend({init:function(e,t,n){this.name=e,this.trackingId=t,this.sampleSize=n?n:1},send:function(e,t){_cne.util.SampleHelper.isInSample(this.sampleSize)&&this["send"+e](t)},sendPageview:function(){},scrubPageviewArgs:function(e){return e},sendEvent:function(){},scrubEventArgs:function(e){return e},sendBeacon:function(){},scrubBeaconArgs:function(e){return e},sendTiming:function(){},scrubTimingArgs:function(e){return e},shallowCopyArgs:function(e){var t={};for(var n in e)t[n]=e[n];return t},mergeArgs:function(e,t){e=this.shallowCopyArgs(e);for(var n in t)e[n]=t[n];return e},stripArgs:function(e,t,n){n="undefined"!=typeof n?n:[],t="undefined"!=typeof t?t:[],e=this.shallowCopyArgs(e);for(var i in e)(t.indexOf(i)>=0||n.length>0&&n.indexOf(i)<0)&&delete e[i];return e},transformArgs:function(e,t){e=this.shallowCopyArgs(e);for(var n in e)null!=t[n]&&(e[t[n]]=e[n],delete e[n]);return e}}),_cne.util.MetricsTracker=_cne.util.cneAnalyticsTracker.extend({init:function(e,t,n,i){this._super(e,null,i),this.trackerType="metrics",this.baseUrl=t,this.useSsl=n},sendBeacon:function(e){url=null,protocol=this.useSsl?"https://":"http://",url=null!=e.value?protocol+this.baseUrl+e.metricName+"/"+e.value:protocol+this.baseUrl+e.metricName;var t=new Image;t.src=url}}),_cne.util.SampleHelper={isInSample:function(e){sampleGroupCookieName="cne_cneanalytics_sample_group";var t=_cne.util.CookieHelper.read(sampleGroupCookieName);return null==t&&(t=Math.random()),_cne.util.CookieHelper.create(sampleGroupCookieName,t,1),e>=t}})}(),function(){_cne.ns("util"),_cne.util.AudienceManager={getSegmentKeyValues:function(){var e=_cne.util.CookieHelper.read("aam_fw");if(e){var t=decodeURIComponent(e);return t=t.split(";")}return[]},getUserId:function(){return _cne.util.CookieHelper.read("aam_uuid")}}}(),function(){_cne.ns("util"),_cne.util.BrowserDetectionHelper={detectSafari5:function(){if(void 0===this.isSafari5){var e=/Version\/5.+\sSafari\//g;this.isSafari5=!!navigator.userAgent.match(e)&&!navigator.userAgent.match(" Chrom")}return this.isSafari5}}}();
  var loader=function(){var e=new BootloadManager,a=new BootloadManager,n=new _cne.Timer;e.addAsset(jQueryPath,"js",{loadCheck:function(){var e="undefined"!=typeof window._cne.$,a="undefined"!=typeof window.jQuery,n=a&&window.jQuery.fn.jquery===jQueryTargetVersion;return e||n?(e||(window._cne.$=window.jQuery),!0):!1},loadSuccess:function(){window._cne.$=window.jQuery.noConflict(!0)}}),e.addAsset(videoJsPath,"js");for(var s=0;s<assets.js.length;s++)e.addAsset(assets.js[s],"js");for(var s=0;s<assets.css.length;s++)a.addAsset(assets.css[s],"css");var t=function(){_cne.players=_cne.players?_cne.players:{},_cne.players[divs.target]=new _cne.player.Player(divs,video,environment,playerConfig,playlist);var e=_cne.players[divs.target].analytics;e.send("beacon",{metricName:"player_assets_load_time",value:n.getTimeElapsed()}),e.send("timing",{timingCategory:"Player",timingVar:"Assets Load Time",timingValue:n.getTimeElapsed()}),_cne.players[divs.target].eventLog.log("Timing",{time_type:"player_assets_load_time",time:n.getTimeElapsed()}),_cne.playlist_bar.load(video.id,playlist.id)},i=!1,o=!1,d=!1,r=function(){d||i&&o&&(d=!0,t())},l=function(){i=!0,r()},c=function(){o=!0,r()};e.load(l,!1),a.load(c)};
  loader(); 

})();
