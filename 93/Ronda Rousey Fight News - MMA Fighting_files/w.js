;(function(){function a(){if(window.parent===window)return;window.parent.postMessage('umbel.tracker.init','*');}(function(a){if(!a.map)a.map=function(a){var b=[];for(var c=0;c<this.length;c++)b.push(a(this[c]));return b;};if(!a.indexOf)a.indexOf=function(a,b){if(this===undefined||this===null)throw new TypeError('"this" is null or not defined');var c=this.length>>>0;b=+b||0;if(Math.abs(b)===Infinity)b=0;if(b<0){b+=c;if(b<0)b=0;}for(;b<c;b++)if(this[b]===a)return b;return -1;};})(Array.prototype);var b=function(){function a(a){var b,d,e=this,g=a.length,h=0,i=e.i=e.j=e.m=0;for(e.S=[],e.c=[],g||(a=[g++]);f>h;)e.S[h]=h++;for(h=0;f>h;h++)b=e.S[h],i=c(i+b+a[h%g]),d=e.S[i],e.S[h]=d,e.S[i]=b;e.g=function(a){var b=e.S,d=c(e.i+1),g=b[d],h=c(e.j+g),i=b[h];b[d]=i,b[h]=g;for(var j=b[c(g+i)];--a;)d=c(d+1),g=b[d],h=c(h+g),i=b[h],b[d]=i,b[h]=g,j=j*f+b[c(g+i)];return e.i=d,e.j=h,j;},e.g(f);}function b(a,b,d,e){for(a+="",d=0,e=0;a.length>e;e++)b[c(e)]=c((d^=19*b[c(e)])+a.charCodeAt(e));a="";for(e in b)a+=String.fromCharCode(b[e]);return a;}function c(a){return a&f-1;}var d=[],e={},f=256,g=6,h=52;e.seed=function(c){var k,l=[];return c=b(c,l),k=new a(l),b(k.S,d),e.random=function(){for(var a=k.g(g),b=i,c=0;h>a;)a=(a+c)*f,b*=f,c=k.g(1);for(;a>=j;)a/=2,b/=2,c>>>=1;return(a+c)/b;},c;};var i=Math.pow(f,g),h=Math.pow(2,h),j=2*h;return b(Math.random(),d),function(a){return e.seed(a),function(){return e.random();};};}();var c;if(!c)c={};(function(){function a(a){return a<10?"0"+a:a;}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(b){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf();};}var b=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,d=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,f,g={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;function i(a){d.lastIndex=0;return d.test(a)?'"'+a.replace(d,function(a){var b=g[a];return typeof b==="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+a+'"';}function j(a,b){var c,d,g,k,l=e,m,n=b[a];if(n&&typeof n==="object"&&typeof n.toJSON==="function"&&Object.prototype.toString.call(n)!='[object Array]')n=n.toJSON(a);if(typeof h==="function")n=h.call(b,a,n);switch(typeof n){case "string":return i(n);case "number":return isFinite(n)?String(n):"null";case "boolean":case "null":return String(n);case "object":if(!n)return "null";e+=f;m=[];if(Object.prototype.toString.apply(n)==="[object Array]"){k=n.length;for(c=0;c<k;c+=1)m[c]=j(c,n)||"null";g=m.length===0?"[]":e?"[\n"+e+m.join(",\n"+e)+"\n"+l+"]":"["+m.join(",")+"]";e=l;return g;}if(h&&typeof h==="object"){k=h.length;for(c=0;c<k;c+=1)if(typeof h[c]==="string"){d=h[c];g=j(d,n);if(g)m.push(i(d)+(e?": ":":")+g);}}else for(d in n)if(Object.prototype.hasOwnProperty.call(n,d)){g=j(d,n);if(g)m.push(i(d)+(e?": ":":")+g);}g=m.length===0?"{}":e?"{\n"+e+m.join(",\n"+e)+"\n"+l+"}":"{"+m.join(",")+"}";e=l;return g;}}if(typeof c.stringify!=="function")c.stringify=function(a,b,c){var d;e="";f="";if(typeof c==="number")for(d=0;d<c;d+=1)f+=" ";else if(typeof c==="string")f=c;h=b;if(b&&typeof b!=="function"&&(typeof b!=="object"||typeof b.length!=="number"))throw new Error("JSON.stringify");return j("",{"":a});};if(typeof c.parse!=="function")c.parse=function(a,c){var d;function e(a,b){var d,f,g=a[b];if(g&&typeof g==="object")for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)){f=e(g,d);if(f!==undefined)g[d]=f;else delete g[d];}return c.call(a,b,g);}a=String(a);b.lastIndex=0;if(b.test(a))a=a.replace(b,function(a){return "\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);});if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){d=eval("("+a+")");return typeof c==="function"?e({"":d},""):d;}throw new SyntaxError("JSON.parse");};}());window._umbel=window._umbel||[];var d=encodeURIComponent,e=decodeURIComponent;var f=function(){};var g={build_qs:function(a){var b="";for(var c in a){var e=a[c];b+=d(c)+"="+d(e)+"&";}if(b.length>0)b=b.substring(0,b.length-1);return b;},parse_qs:function(a){var b={};if(typeof a!='string')return b;a.replace(/([^=&]+)=([^&]*)/gi,function(a,c,d){b[e(c)]=e(d);});return b;},get_get_vars:function(a){if(typeof a==='undefined')var a=window.location.href;var b=a.split(/\?(.+)/);if(b.length!=3)return{};return this.parse_qs(b[1]);},get_hash_vars:function(){return this.parse_qs(window.location.href.split(/#(.+)/)[1]);},get_referring_host:function(){return document.referrer.split('/')[2];},get_referrer_whitelist:function(){return ["google.com","facebook.com","pinterest.com","twitter.com","wikipedia.org","huffingtonpost.com","yahoo.com","reddit.com","linkedin.com","bing.com","tumblr.com","aol.com","tomahawknation.com","bleacherreport.com","m.bleacherreport.com","arrowheadpride.com","mobile.newsnow.co.uk","newsnow.co.uk","news.google.com","mmafighting.com","sports.yahoo.com"];},get_whitelisted_referrer:function(){var a=this.get_referring_host();if(a){var b=a.toLowerCase().split('.');var c=b.slice(-3).join('.');if(this.get_referrer_whitelist().indexOf(c)>-1)return c;c=b.slice(-2).join('.');if(this.get_referrer_whitelist().indexOf(c)>-1)return c;}return false;}};var h=function(){this.queue_kv=new j('umbel1-q');this.values_kv=new j('umbel1-v');this.daily_kv=new j('umbel1-d');this.init_id();this.event_blacklist=['session.ping'];this.jsonp_whitelist=['activationapp.success'];this.unique=0;};h.prototype={api_key:'rhrdgrjixmwngtzk',property_id:30,send_data:function(a,b){a.unique=++this.unique;var d=new Image();if(typeof b=='function')d.onload=b;d.style.visibility='hidden';d.style.display='none';d.src='https://rhrdgrjixmwngtzk.capture.umbel.com/measure.gif?'+g.build_qs({'json':c.stringify(a)});},send_data_jsonp:function(a){a.unique=++this.unique;var b='https://api.umbel.com/capture.js?'+g.build_qs({'json':c.stringify(a)});this.jsonp_request(b,a.success,a.error,a.unique);},jsonp_request:function(a,b,c,d){typeof d==='undefined'&&(d=++this.unique);typeof b!=='function'&&(b=f);typeof c!=='function'&&(c=f);var e,h,i=function(){e.parentNode.removeChild(e);window['__umbelcb'+d]=f;},j=setTimeout(function(){i();c();},10000);window['__umbelcb'+d]=function(a){clearTimeout(j);i();if(a.success)b(a);else c(a);};a+=a.indexOf('?')>-1?'&':'?';a+=g.build_qs({'callback':'__umbelcb'+d});h=document.getElementsByTagName('script')[0]||document.head;e=document.createElement('script');e.src=a;h.parentNode.insertBefore(e,h);},delete_queued:function(a){var b=this.queue_kv;return function(){b.del(a,true);};},send_queued:function(){var a=this.queue_kv.get_all();for(var b in a)try{var d=c.parse(a[b]);d.timestamp=b;d.browser_id=this.browser_id;d.api_key=this.api_key;this.send_data(d,this.delete_queued(b));}catch(e){this.delete_queued(b)();}},isodate:function(a){a=a||new Date();if(a.toISOString)return a.toISOString();var b=function(a){return a<10?'0'+a:a;};var c=a.getUTCFullYear()+'-'+b(a.getUTCMonth()+1)+'-'+b(a.getUTCDate())+'T'+b(a.getUTCHours())+':'+b(a.getUTCMinutes())+':'+b(a.getUTCSeconds())+'.'+b(a.getUTCMilliseconds())+'Z';return c;},gen_id:function(){var a=b(this.isodate()+Math.random().toString()+document.cookie+navigator.userAgent);return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(b){var c=a()*16|0,d=b=='x'?c:(c&0x3|0x8);return d.toString(16);});},init_id:function(){var a=i.get('umbel_browser_id');if(!a)var a=this.gen_id();i.set('umbel_browser_id',a,365);this.browser_id=a;},valid_event:function(a){var b,c,g,h,i;var j=window._umbel_property||null;if(a instanceof Array){var k=a.length;if(k>3||k<2)return;c=a[1];b=a[0];g=(k==3)?a[2]:'';}else if(typeof a==='object'){c=a.name;if(!c)return;b=a.type||'send';g=a.value||null;h=a.success||f;i=a.error||f;}else return;if(this.event_blacklist.indexOf(c)!=-1)return;if(b=='set'){var l=this.values_kv.get(c);if(l==g)return;else this.values_kv.set(c,g,true);}else if(b=='tag'){var m=this.values_kv.get(c);if(typeof m!='undefined'){var n=m.split('|');for(var o=0;o<n.length;o++)if(e(n[o])==g)return;this.values_kv.set(c,m+'|'+d(g),true);}else this.values_kv.set(c,d(g),true);}else if(b=='daily'){var p=c;var q=new Date();var r=q.getFullYear()+'-'+q.getMonth()+'-'+q.getDate();if(j)c+='.'+j;var s=this.daily_kv.get(c);if(s==r)return;else{this.daily_kv.set(c,r,true);c=p;}}else if(b!='send')return;var t=this.isodate();var u={name:c,value:g,timestamp:t,browser_id:this.browser_id,api_key:this.api_key,success:h,error:i};if(window._umbel_test_mode)u.testing=true;if(j)u.property_slug=j;return u;},send_event:function(a){var b=this.valid_event(a);if(b==undefined)return;var d=this;if(this.jsonp_whitelist.indexOf(b.name)!=-1){this.send_data_jsonp(b);return;}var e=function(a){var e={'name':b.name,'value':a};if(b.property_slug)e.property_slug=b.property_slug;d.queue_kv.set(b.timestamp,c.stringify(e),true);b.value=a;d.send_data(b,d.delete_queued(b.timestamp,b.callback));};if(typeof b.value=='function')b.value(e);else e(b.value);},patch_push:function(){for(var a=0;a<_umbel.length;a++)this.send_event(_umbel[a]);_umbel.length=0;var b=this;_umbel.push=function(a){b.send_event(a);};},send_builtin_events:function(){_umbel.push({'type':'set','name':'app.user_agent','value':navigator.userAgent});var a=g.get_whitelisted_referrer();if(a)_umbel.push({'type':'tag','name':'action.referrer','value':a});}};var i={set:function(a,b,c,d,e){if(typeof d==='undefined')d='/';if(typeof e==='undefined'){var f=document.domain.split('.');e='.'+f[f.length-2]+'.'+f[f.length-1];if(f.length<2)e=null;}var g=new Date();g.setDate(g.getDate()+c);var h=escape(b)+((c==undefined)?"":"; expires="+g.toUTCString())+((d===null)?'':'; path='+d)+((e===null)?'':'; domain='+e);var i=a+"="+h;document.cookie=i;},get:function(a){var b=this.get_match(function(b){return(a===b);});if(b.length)return b[0][1];},get_match:function(a){var b,c,d,e=[],f=document.cookie.split(";");for(b=0;b<f.length;b++){c=f[b].substr(0,f[b].indexOf("="));d=f[b].substr(f[b].indexOf("=")+1);c=c.replace(/^\s+|\s+$/g,"");if(a(c))e.push([c,unescape(d)]);}return e;},del:function(a,b,c){this.set(a,'',-1,b,c);this.set(a,'',-1,b,null);}};var j=function(a){this.namespace=a||'umbel1-v';this.cache=this.get_all();};j.prototype={get_all:function(){var a=this.namespace;var b=i.get_match(function(b){return b.slice(0,a.length)==a;});this.cc=b.length;var c={};b.map(function(a){var b=g.parse_qs(a[1]);for(var d in b)c[d]=b[d];});return c;},get:function(a){return this.cache[a];},set:function(a,b,c){this.cache[a]=b;if(c)this.commit();},del:function(a,b){delete this.cache[a];if(b)this.commit();},commit:function(){var a=[];for(var b in this.cache){var c={};c[b]=this.cache[b];a.push(g.build_qs(c));}var d=[];var e='';for(var f=0;f<a.length;f++){if(a[f].length+e.length>4000){d.push(e);e='';}if(e==='')e=a[f];else e+='&'+a[f];}if(e)d.push(e);this.cc=Math.max(this.cc,d.length);for(var f=0;f<this.cc;f++)if(f<d.length)i.set(this.namespace+f,d[f]);else i.del(this.namespace+f);}};var k=function(){var b=new h();b.patch_push();b.send_queued();b.send_builtin_events();a();};try{k();}catch(l){}})();