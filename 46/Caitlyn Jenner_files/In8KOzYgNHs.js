/*!CK:4176784253!*//*1458856706,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["cCmYD"]); }

__d("ModuleDependencies",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(l,m,n){var o=c.__debug.modulesMap[n],p=c.__debug.deps;if(m[n])return;m[n]=true;if(!o){p[n]&&(l[n]=true);return;}if(!o.dependencies||!o.dependencies.length){if(o.waiting)l[n]=true;return;}o.dependencies.forEach(function(q){h(l,m,q);});}function i(l){if(c.__debug){var m={};h(m,{},l);var n=Object.keys(m);n.sort();return n;}return null;}function j(){var l={loading:{},missing:[]};if(!c.__debug)return l;var m={},n=c.__debug.getModules(),o=c.__debug.deps;for(var p in n){var q=n[p];if(q.waiting){var r={};h(r,{},q.id);delete r[q.id];l.loading[q.id]=Object.keys(r);l.loading[q.id].sort();l.loading[q.id].forEach(function(s){if(!(s in n)&&o[s])m[s]=1;});}}l.missing=Object.keys(m);l.missing.sort();return l;}var k={setRequireDebug:function(l){c.__debug=l;},getMissing:i,getNotLoadedModules:j};f.exports=k;},null);
__d('ModuleErrorLogger',['Bootloader','ErrorUtils','ModuleDependencies','BanzaiScuba'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(k){if(!k||!k.length)return 0;return k.reduce(function(l,m){return l+m;})/k.length;}function i(k){if(!k)return [];var l=[];for(var m in k)l.push(k[m]);return l;}var j={init:function(){c('ErrorUtils').addListener(function(k){if(k.name!=='ModuleError')return;var l=c('ModuleDependencies').getNotLoadedModules(),m=Object.keys(l.loading),n=i(c('Bootloader').getLoadingUrls()),o=i(c('Bootloader').getLoadedUrlTimes()),p={};l.missing.forEach(function(s){p[s]=1;});var q={};m.forEach(function(s){q[s]=1;});var r=new (c('BanzaiScuba'))('module_errors',null,{addAsnFields:true,addPredictedGeographyFields:true,addBrowserFields:true,addMobileDeviceFields:true,addPageFields:true,addUserFields:true});r.addNormal('message',k.message).addInteger('missing_count',l.missing.length).addInteger('loading_count',m.length).addInteger('error_url_count',c('Bootloader').getErrorUrls().length).addTagset('missing_modules',p).addTagset('loading_modules',q).addInteger('mean_url_loading_time',Math.floor(h(n))).addInteger('mean_url_loaded_time',Math.floor(h(o))).post();},true);}};f.exports=j;},null);
__d('ResetScrollOnUnload',['Run'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={disableScrollRestoration:function(){c('Run').onUnload(function(){window.history.scrollRestoration='manual';});},init:function(i){c('Run').onUnload(function(){window.history.scrollRestoration='manual';i.style.opacity='0';window.scrollTo(0,0);});}};f.exports=h;},null);
__d('ScriptPathLogger',['Banzai','ScriptPath','isInIframe'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='script_path_change',i={scriptPath:null,categoryToken:null,extraData:{}},j=false,k='imp_id';function l(u){if(!u||u.search('/feed/topics/')==-1)return '';var v=u.split('/');return v[v.length-1];}function m(u){if(!u||u.search('/review/queue/endless/')==-1)return '';return n(u,'queue_id');}function n(u,v){v=v.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var w=new RegExp('[\\?&]'+v+'=([^&#]*)'),x=w.exec(u);return x===null?'':decodeURIComponent(x[1].replace(/\+/g,' '));}function o(u,v,w,x){if(!j||c('isInIframe')())return;var y=c('Banzai').isEnabled('vital_navigations')?c('Banzai').VITAL:c('Banzai').BASIC,z={source_path:u.scriptPath,source_token:u.categoryToken,dest_path:v.scriptPath,dest_token:v.categoryToken,impression_id:v.extraData.imp_id,cause:w};if(x)z.extra_data=x;if(u.scriptPath===null)z.referrer=document.referrer;var aa=c('ScriptPath').getClickPointInfo();if(aa)z.click_point_info=aa;if(u.extraData)for(var ba in u.extraData)if(ba!=k)z['source_'+ba]=u.extraData[ba];if(v.extraData)for(var ca in v.extraData)if(ca!=k)z['dest_'+ca]=v.extraData[ca];var da=l(window.location.href);if(da!='')z.dest_topic_feed=da;var ea=m(window.location.href);if(ea!='')z.dest_srt_queue_id=ea;if(u.topViewEndpoint)z.source_endpoint=u.topViewEndpoint;if(v.topViewEndpoint)z.dest_endpoint=v.topViewEndpoint;if(u.restored)z.source_restored=true;c('Banzai').post(h,z,y);c('ScriptPath').setClickPointInfo(null);}function p(){o(c('ScriptPath').getSourcePageInfo()||i,c('ScriptPath').getPageInfo(),c('ScriptPath').CAUSE.PAGE_LOAD);}function q(u,v,w){o(u,v,c('ScriptPath').CAUSE.TRANSITION,w);}function r(){o(c('ScriptPath').getPageInfo(),i,c('ScriptPath').CAUSE.PAGE_UNLOAD);c('ScriptPath').shutdown();}var s=c('ScriptPath').subscribe(function(u){if(j){var v=u.source,w=u.dest,x=u.cause,y=u.extraData;if(x){o(v||i,w||i,x,y);}else if(v){q(v,w,y);}else p();}});c('Banzai').subscribe(c('Banzai').SHUTDOWN,r);var t={startLogging:function(){j=true;if(c('ScriptPath').getPageInfo())p();},stopLogging:function(){j=false;c('ScriptPath').unsubscribe(s);}};t.BANZAI_LOGGING_ROUTE=h;f.exports=t;},null);
__d('TimeSpentArray',['Banzai','pageID','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=2,i=h*32,j,k,l,m,n,o,p,q,r,s={},t;function u(){return {timeoutDelayMap:s,nextDelay:t,timeoutInSeconds:l};}function v(){if(j){var da=Date.now();if(da>n)p=Math.min(i,Math.ceil(da/1000-m));var ea=aa();if(ea)j(ea,t);}z();}function w(){x();k=c('setTimeoutAcrossTransitions')(v,l*1000);}function x(){if(k){clearTimeout(k);k=null;}}function y(da){m=da;n=m*1000;o=[1];for(var ea=1;ea<h;ea++)o.push(0);p=1;q+=1;r+=1;var fa=r.toString()+'_delay';t=s[fa];if(typeof t=='undefined')t=s.delay;var ga=r.toString()+'_timeout',ha=s[ga];if(typeof ha=='undefined')ha=s.timeout;ha=Math.min(ha,i);l=ha||i;w();}function z(){x();o=null;}function aa(){if(!o)return null;return {tos_id:c('pageID'),start_time:m,tos_array:o.slice(0),tos_len:p,tos_seq:r,tos_cum:q};}function ba(da){if(da>=n&&da-n<1000)return;ca(Math.floor(da/1000));}function ca(da){var ea=da-m;if(ea<0||ea>=i)v();if(!o){y(da);}else{o[ea>>5]|=1<<(ea&31);p=ea+1;q+=1;n=da*1000;}}f.exports={init:function(da,ea,fa){q=0;r=-1;j=da;if(typeof ea=='object'&&ea!==null){s=ea;}else s={};if(!fa)fa=Date.now();y(Math.floor(fa/1000));c('Banzai').subscribe(c('Banzai').SHUTDOWN,v);},update:function(da){ba(da);},get:function(){return aa();},ship:function(){v();},reset:function(){z();},testState:function(){return u();}};},null);
__d('TimeSpentImmediateActiveSecondsLogger',['Banzai','ImmediateActiveSecondsConfig','ScriptPath'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='immediate_active_seconds',i={signal:true,retry:true},j=c('ImmediateActiveSecondsConfig').sampling_rate,k=c('ImmediateActiveSecondsConfig').ias_bucket,l=0;function m(q){if(j<=0)return false;var r=Math.floor(q/1000)%j;return r===k;}function n(q){if(q>=l&&q-l<1000)return;if(m(q)){var r={activity_time_ms:q,last_activity_time_ms:l,script_path:c('ScriptPath').getTopViewEndpoint()};try{c('Banzai').post(h,r,i);}catch(s){}}l=Math.floor(q/1000)*1000;}function o(event,q,r){if(s<0||t<0||s>t)return;var s=Math.floor(q/1000),t=Math.floor(r/1000);if(!p(s,t))return;var u={event:event,start_time_ms:q,end_time_ms:r};c('Banzai').post(h,u,i);}function p(q,r){if(j<=0)return false;if(r-q>=j)return true;var s=q+(k-q%j+j)%j;return s<=r;}f.exports={maybeReportActiveSecond:n,maybeReportActiveInterval:o};},null);
__d('TimeSpentBitArrayLogger',['Arbiter','Banzai','BanzaiODS','TimeSpentArray','TimeSpentConfig','TimeSpentImmediateActiveSecondsLogger','UserActivity','isInIframe'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={delay:c('Banzai').BASIC.delay,retry:true};function i(j,k){if(c('Banzai').isEnabled('time_spent_bit_array')){c('Arbiter').inform('timespent/tosbitdataposted',babelHelpers['extends']({},j));if(typeof k=='number'){h.delay=k;}else h.delay=c('Banzai').BASIC.delay;c('Banzai').post('time_spent_bit_array',babelHelpers['extends']({},j),h);h.delay=c('TimeSpentConfig').delay;}}f.exports={init:function(j){if(c('isInIframe')())return;c('UserActivity').subscribe(function(l,m){var n=m.last_inform;c('TimeSpentArray').update(n);c('TimeSpentImmediateActiveSecondsLogger').maybeReportActiveSecond(n);});var k=Date.now();c('TimeSpentArray').init(i,c('TimeSpentConfig'),k);c('TimeSpentImmediateActiveSecondsLogger').maybeReportActiveSecond(k);c('BanzaiODS').bumpEntityKey('ms.time_spent.qa.www','time_spent.bits.js_initialized');}};},null);
__d('NavigationClickPointHandler',['Event','ScriptPath','collectDataAttributes'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={getClickPointInfo:function(j){var k=null,l=c('collectDataAttributes')(j,['ft'],['href','data-click']),m=l.normal.href;if(!m||m==='#')return false;var n=l.normal['data-click'];if(k===null&&n)k={click:n};var o=l.ft.tn;if(k===null&&o)k={tn:o};if(k===null&&j.getAttribute){var p=j.getAttribute('class');if(p)k={'class':p};}return k;}};function i(event){var j=event.target||event.srcElement,k=h.getClickPointInfo(j);if(k!==false)c('ScriptPath').setClickPointInfo(k);}c('Event').listen(document.documentElement,{click:i});f.exports=h;},null);