/*!CK:3840107346!*//*1458802917,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Ktdt1"]); }

__d('DetectBrokenProxyCache',['AsyncSignal','Cookie','URI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=c('Cookie').get(j);if(k!=i&&k!=null&&i!='0'){var l={c:'si_detect_broken_proxy_cache',m:j+' '+i+' '+k},m=new (c('URI'))('/common/scribe_endpoint.php').getQualifiedURI().toString();new (c('AsyncSignal'))(m,l).send();}}f.exports={run:h};},null);
__d('DimensionLogging',['BanzaiNectar','getViewportDimensions'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('getViewportDimensions')();c('BanzaiNectar').log('browser_dimension','homeload',{x:h.width,y:h.height,sw:window.screen.width,sh:window.screen.height,aw:window.screen.availWidth,ah:window.screen.availHeight,at:window.screen.availTop,al:window.screen.availLeft});},null);
__d('DimensionTracking',['Cookie','Event','debounce','getViewportDimensions','isInIframe'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){var i=c('getViewportDimensions')();c('Cookie').set('wd',i.width+'x'+i.height);}if(!c('isInIframe')()){setTimeout(h,100);c('Event').listen(window,'resize',c('debounce')(h,250));c('Event').listen(window,'focus',h);}},null);
__d('HighContrastMode',['AccessibilityLogger','CSS','CurrentUser','DOM','Style','URI','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(i){var j=new (c('URI'))(window.location.href);if(j.getPath().indexOf('/intern/')===0)return;if(window.top!==window.self)return;var k=c('DOM').create('div');c('DOM').appendContent(document.body,k);k.style.cssText='border: 1px solid !important;'+'border-color: red green !important;'+'position: fixed;'+'height: 5px;'+'top: -999px;'+'background-image: url('+i.spacerImage+') !important;';var l=c('Style').get(k,'background-image'),m=c('Style').get(k,'border-top-color'),n=c('Style').get(k,'border-right-color'),o=m==n&&l&&(l=='none'||l=='url(invalid-url:)');if(o){c('CSS').conditionClass(document.documentElement,'highContrast',o);if(c('CurrentUser').getID())c('AccessibilityLogger').logHCM();}c('DOM').remove(k);h.init=c('emptyFunction');}};f.exports=h;},null);
__d('Live',['Arbiter','AsyncDOM','AsyncSignal','ChannelConstants','DataStore','DOM','ServerJS','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){k=JSON.parse(JSON.stringify(k));new (c('ServerJS'))().setRelativeTo(j).handle(k);}var i={logAll:false,startup:function(j){i.logAll=j;i.startup=c('emptyFunction');c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('live'),i.handleMessage.bind(i));},lookupLiveNode:function(j,k){var l=c('DOM').scry(document.body,'.live_'+j+'_'+k);l.forEach(function(m){if(c('DataStore').get(m,'seqnum')===undefined){var n=JSON.parse(m.getAttribute('data-live'));c('DataStore').set(m,'seqnum',n.seq);}});return l;},handleMessage:function(j,k){var l=k.obj,m=l.fbid,n=l.assoc,o=this.lookupLiveNode(m,n);if(!o)return false;o.forEach(function(p){c('AsyncDOM').invoke(l.updates,p);if(l.js)h(p,l.js);});},log:function(){if(i.logAll){var j=Array.from(arguments).join(':');new (c('AsyncSignal'))('/common/scribe_endpoint.php',{c:'live_sequence',m:j}).send();}}};f.exports=i;},null);