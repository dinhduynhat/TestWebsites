window.__adroll||(function(){function m(){this.exp=5E4;this.eexp=720;this.pv=1E11*Math.random();this.__adc="__ar_v4";this._nad=0;this._lce=null;this._loaded=this._broken=!1;this._url=2E3;this._kwl=300;this._r={};this._logs=[]};m.prototype.cookieEnabled=function(a){if(this._global("adroll_ext_network")||this._global("adroll_optout")||this._broken)return!1;if(2<=this._nad||a)return this._lce;this.set("_te_","1");return"1"===this.get("_te_")?(this.del("_te_"),0<this._nad&&!this.get(this.__adc)?this._lce=!1:this._lce=!0):this._lce=!1};
m.prototype.get=function(a){var b=window.document.cookie;if(null===b)return this._broken=!0,null;var c;0>b.indexOf(a+"=")?b=null:(a=b.indexOf(a+"=")+a.length+1,c=b.indexOf(";",a),-1===c&&(c=b.length),b=b.substring(a,c),b=""===b?null:window.unescape(b));return b};
m.prototype.set=function(a,b,c){var d;c&&"number"===typeof c?(d=new Date,d.setTime(d.getTime()+36E5*c),c=d.toGMTString(),c="; expires="+c):c="";d="; domain="+window.location.hostname;b=window.escape(b);window.document.cookie=a+"="+b+c+"; path=/"+d};m.prototype.del=function(a){this.set(a,"",-8760)};
m.prototype.check_cookie=function(a,b){if(this._global("adroll_ext_network")||this._global("adroll_optout"))return"";for(var c=a.split("|"),d=c.length-1;0<=d;d--)if(c[d]){var f=c[d].split(":");b===f[0]&&(f[2]=""+(parseInt(f[2])+1),c[d]=f.join(":"))}return c.join("|")};m.prototype.handle=function(a){var b=this.get(this.__adc)||"";-1!==b.indexOf(a)?this.set(this.__adc,this.check_cookie(b,a),this.exp):(a=[b,[a,this.get_date(this.eexp),"1"].join(":")].join("|"),this.set(this.__adc,a,this.exp))};
m.prototype.expire_old=function(){if(!this._global("adroll_ext_network")&&!this._global("adroll_optout")){for(var a=this.get_date(!1),b=this.get(this.__adc),b=b?b.split("|"):[""],c=[],d=b.length-1;0<=d;d--)b[d]&&b[d].split(":")[1]>a&&c.push(b[d]);this.set(this.__adc,c.join("|"),this.exp)}};m.prototype.get_date=function(a){var b=new Date;a&&b.setTime(b.getTime()+36E5*a);a=""+b.getUTCFullYear();var c=b.getUTCMonth(),c=10<=c?c:"0"+c,b=b.getUTCDate();return[a,c,10<=b?b:"0"+b].join("")};m.prototype.generate_link=function(){return""};m.prototype.view=function(a){var b=new window.Image;b.src=this._srv("/view/"+a);b.setAttribute("width","1");b.setAttribute("height","1");b.setAttribute("border","0");this._head().appendChild(b)};m.prototype.set_cookie=function(){};
m.prototype.reset=function(){this._set_global("adroll_c_id",null);this._set_global("adroll_url_macro","");this._set_global("adroll_c_macro","");this._set_global("adroll_cpm_macro","");this._set_global("adroll_ext_network",null);this._set_global("adroll_subnetwork",null);this._set_global("adroll_ad_payload",null);this._set_global("adroll_win_notif",null)};m.prototype.set_pixel_cookie=function(a,b,c){this._global("adroll_optout")||(this.handle(a),this.handle(b),this.handle(c),this.pixel_loaded())};
m.prototype.add_pixel_load_callback=function(a){this._loaded?a():this._ensure_global("adroll_callbacks",[]).push(a)};m.prototype.pixel_loaded=function(){this._loaded=!0;for(var a=this._ensure_global("adroll_callbacks",[]),b=0;b<a.length;b++)a[b]()};m.prototype.addLoadEvent=function(a){if(this._has_global("__adroll_loaded")&&this._global("__adroll_loaded")||this._has_global("_adroll_ie")&&this._global("_adroll_ie")||/msie/i.test(window.navigator.userAgent))return a();if(/WebKit/i.test(window.navigator.userAgent)){var b=window.setInterval(function(){/loaded|complete/.test(window.document.readyState)&&window.clearInterval(b);a()},10);return null}var c=window.onload;window.onload=function(){a();c&&c()}};
m.prototype._head=function(){return(window.document.getElementsByTagName("head")||[null])[0]||(window.document.getElementsByTagName("body")||[null])[0]||window.document.getElementsByTagName("script")[0].parentNode};m.prototype.external_data_to_qs=function(a){var b=[],c=this.get_external_data();if(!c)return null;for(var d in c)c.hasOwnProperty(d)&&b.push(this.normalize_var(window.escape(""+d)+"="+window.escape(""+c[d]),!1));b=b.join("&");a&&(b=window.escape(b));return"adroll_external_data="+b};
m.prototype.replace_external_data=function(a){var b=this.get_external_data(),c=this.get_conversion_value(),d=null,f;if(b)for(f in b)b.hasOwnProperty(f)&&(d=new RegExp("\\["+f+"\\]","gi"),a=a.replace(d,b[f]),d=new RegExp("\\["+f+"_ESC\\]","gi"),a=a.replace(d,window.escape(b[f])));if(c)for(f in c)c.hasOwnProperty(f)&&(d=new RegExp("\\["+f+"\\]","gi"),a=a.replace(d,c[f]),d=new RegExp("\\["+f+"_ESC\\]","gi"),a=a.replace(d,window.escape(c[f])));return a};
m.prototype.get_external_data=function(){if(this._has_global("adroll_custom_data")){var a=this._global("adroll_custom_data"),b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c.toLowerCase()]=a[c]);return b}return null};
m.prototype.get_conversion_value=function(){var a=this._ensure_global("adroll_currency",null),b=this._ensure_global("adroll_conversion_value",null),c=this._ensure_global("adroll_conversion_value_in_dollars",null);return b?{conv_value:""+b,currency:a}:c?{conv_value:""+parseInt(100*c),currency:"USC"}:null};m.prototype._has_global=function(a){return this._is_defined(this._global(a))};m.prototype._global=function(a){return window[a]};m.prototype._set_global=function(a,b){window[a]=b};m.prototype._unset_global=function(a){delete window[a]};m.prototype._ensure_global=function(a,b){this._has_global(a)||this._set_global(a,b);return this._global(a)};m.prototype.macro_values=function(){var a=this._ensure_global("adroll_cpm_macro",null),b=this._ensure_global("adroll_url_macro",null),c=this._ensure_global("adroll_c_macro",null),d=this._ensure_global("adroll_subnetwork",null),f=this._ensure_global("adroll_ad_payload",null),n=this._ensure_global("adroll_win_notif",null),p={r:/^\$\{.*\}$/i,g:/^%%.*%%$/i,b:/^\[.*\]$/i,x:/^\$\{.*\}$/i,t:/INSERTCLICKTRACKER/}[this._global("adroll_ext_network")],p=this._is_defined(p)?p:/CANNOT_MATCH_THIS/,q={};a&&!p.test(a)&&
(q.adroll_cpm_macro=a);b&&!p.test(b)&&(q.adroll_url_macro=b);c&&!p.test(c)&&(q.adroll_c_macro=c);d&&!p.test(d)&&(q.adroll_subnetwork=d);f&&!p.test(f)&&(q.adroll_ad_payload=f);n&&!p.test(n)&&(q.adroll_win_notif=n);return q};m.prototype.format_macros=function(a,b,c,d){return this.macro_url_params(this.macro_values(),a,b,c,d)};
m.prototype.macro_url_params=function(a,b,c,d,f){f=this._is_defined(f)?f:!1;var n=d?window.escape:function(a){return a},p=a.adroll_cpm_macro,q=a.adroll_url_macro,l=c?a.adroll_c_macro:null,h=[],e=b?this.parseUri(b):null,e=e?this.endswith(e.path,".tp"):!1;!e&&f&&h.push(["desturl",""]);l&&0===l.indexOf("http")?(f=n,"g"===this._global("adroll_ext_network")&&(f=d?function(a){return a}:window.unescape),h.push(["clickurl",f(l)])):e&&f&&h.push(["clickurl",""]);this._global("adroll_ext_network")&&h.push(["adroll_network",
this._global("adroll_ext_network")]);p&&h.push(["cpm",p]);a.adroll_subnetwork&&h.push(["adroll_subnetwork",a.adroll_subnetwork]);a.adroll_ad_payload&&h.push(["adroll_ad_payload",a.adroll_ad_payload]);q&&(a=this.parseUri(window.unescape(q)),h.push(["site_url",n("http://"+a.host)]),c&&(h.push(["adroll_width",n(this._global("adroll_width"))]),h.push(["adroll_height",n(this._global("adroll_height"))])));this.log("Macros found "+this.serialize(h));return b?this.buildurl(b,h):this.serialize(h)};
m.prototype.serialize=function(a){if(a.length){for(var b=[],c=a.length-1;0<=c;c--)b.push(a[c].join("="));return b.join("&")}return""};m.prototype.endswith=function(a,b){return-1!==a.indexOf(b,a.length-b.length)};m.prototype.buildurl=function(a,b){var c=this.serialize(b),d=a.indexOf("?");return c?d===a.length-1?a+c:-1!==d?"&"===a[a.length-1]?a+c:a+"&"+c:a+"?"+c:a};m.prototype.md5=function(){function a(a,b){var c=(a&65535)+(b&65535);return(a>>16)+(b>>16)+(c>>16)<<16|c&65535}function b(b,c,h,e,d,g){c=a(a(c,b),a(e,g));return a(c<<d|c>>>32-d,h)}function c(a,c,h,e,d,g,f){return b(c&h|~c&e,a,c,d,g,f)}function d(a,c,d,e,k,g,f){return b(c&e|d&~e,a,c,k,g,f)}function f(a,c,d,e,k,g,f){return b(d^(c|~e),a,c,k,g,f)}function n(n,l){var h=n[0],e=n[1],k=n[2],g=n[3],h=c(h,e,k,g,l[0],7,-680876936),g=c(g,h,e,k,l[1],12,-389564586),k=c(k,g,h,e,l[2],17,606105819),e=c(e,k,g,h,l[3],
22,-1044525330),h=c(h,e,k,g,l[4],7,-176418897),g=c(g,h,e,k,l[5],12,1200080426),k=c(k,g,h,e,l[6],17,-1473231341),e=c(e,k,g,h,l[7],22,-45705983),h=c(h,e,k,g,l[8],7,1770035416),g=c(g,h,e,k,l[9],12,-1958414417),k=c(k,g,h,e,l[10],17,-42063),e=c(e,k,g,h,l[11],22,-1990404162),h=c(h,e,k,g,l[12],7,1804603682),g=c(g,h,e,k,l[13],12,-40341101),k=c(k,g,h,e,l[14],17,-1502002290),e=c(e,k,g,h,l[15],22,1236535329),h=d(h,e,k,g,l[1],5,-165796510),g=d(g,h,e,k,l[6],9,-1069501632),k=d(k,g,h,e,l[11],14,643717713),e=d(e,
k,g,h,l[0],20,-373897302),h=d(h,e,k,g,l[5],5,-701558691),g=d(g,h,e,k,l[10],9,38016083),k=d(k,g,h,e,l[15],14,-660478335),e=d(e,k,g,h,l[4],20,-405537848),h=d(h,e,k,g,l[9],5,568446438),g=d(g,h,e,k,l[14],9,-1019803690),k=d(k,g,h,e,l[3],14,-187363961),e=d(e,k,g,h,l[8],20,1163531501),h=d(h,e,k,g,l[13],5,-1444681467),g=d(g,h,e,k,l[2],9,-51403784),k=d(k,g,h,e,l[7],14,1735328473),e=d(e,k,g,h,l[12],20,-1926607734),h=b(e^k^g,h,e,l[5],4,-378558),g=b(h^e^k,g,h,l[8],11,-2022574463),k=b(g^h^e,k,g,l[11],16,1839030562),
e=b(k^g^h,e,k,l[14],23,-35309556),h=b(e^k^g,h,e,l[1],4,-1530992060),g=b(h^e^k,g,h,l[4],11,1272893353),k=b(g^h^e,k,g,l[7],16,-155497632),e=b(k^g^h,e,k,l[10],23,-1094730640),h=b(e^k^g,h,e,l[13],4,681279174),g=b(h^e^k,g,h,l[0],11,-358537222),k=b(g^h^e,k,g,l[3],16,-722521979),e=b(k^g^h,e,k,l[6],23,76029189),h=b(e^k^g,h,e,l[9],4,-640364487),g=b(h^e^k,g,h,l[12],11,-421815835),k=b(g^h^e,k,g,l[15],16,530742520),e=b(k^g^h,e,k,l[2],23,-995338651),h=f(h,e,k,g,l[0],6,-198630844),g=f(g,h,e,k,l[7],10,1126891415),
k=f(k,g,h,e,l[14],15,-1416354905),e=f(e,k,g,h,l[5],21,-57434055),h=f(h,e,k,g,l[12],6,1700485571),g=f(g,h,e,k,l[3],10,-1894986606),k=f(k,g,h,e,l[10],15,-1051523),e=f(e,k,g,h,l[1],21,-2054922799),h=f(h,e,k,g,l[8],6,1873313359),g=f(g,h,e,k,l[15],10,-30611744),k=f(k,g,h,e,l[6],15,-1560198380),e=f(e,k,g,h,l[13],21,1309151649),h=f(h,e,k,g,l[4],6,-145523070),g=f(g,h,e,k,l[11],10,-1120210379),k=f(k,g,h,e,l[2],15,718787259),e=f(e,k,g,h,l[9],21,-343485551);n[0]=a(h,n[0]);n[1]=a(e,n[1]);n[2]=a(k,n[2]);n[3]=
a(g,n[3])}var p="0123456789abcdef".split("");return function(a){var b=a;/[\x80-\xFF]/.test(b)&&(b=unescape(encodeURI(b)));var c=b.length;a=[1732584193,-271733879,-1732584194,271733878];var e;for(e=64;e<=b.length;e+=64){for(var d=b.substring(e-64,e),g=[],f=void 0,f=0;64>f;f+=4)g[f>>2]=d.charCodeAt(f)+(d.charCodeAt(f+1)<<8)+(d.charCodeAt(f+2)<<16)+(d.charCodeAt(f+3)<<24);n(a,g)}b=b.substring(e-64);d=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<b.length;e++)d[e>>2]|=b.charCodeAt(e)<<(e%4<<3);d[e>>2]|=
128<<(e%4<<3);if(55<e)for(n(a,d),e=0;16>e;e++)d[e]=0;d[14]=8*c;n(a,d);for(b=0;b<a.length;b++){c=a;e=b;d=a[b];g="";for(f=0;4>f;f++)g+=p[d>>8*f+4&15]+p[d>>8*f&15];c[e]=g}return a.join("")}}();m.prototype._gurl=function(){var a=window.location;return this.normalize_url(a.pathname+a.search)};
m.prototype.extract_pid=function(a,b,c){function d(a){return a?(a=new RegExp(a,"gi"),!!a.exec(q)):null}a||(a={});var f=b=null,n=null,p=null,q=this._gurl(),l=this.get_external_data();l&&(f=l.product_id,b=l.product_group,n=l.product_action,p=l.adroll_product_category_id);if(!f&&a.regexp_group&&!("string"===a.regexp_group&&a.regexp_group instanceof String)&&"html"===a.regexp_group.scheme){if(d(a.blacklist_regexp)||!0!==d(a.regexp))return"";f=this.get_product_id_from_dom(a.regexp_group)}else if(!f){if(d(a.blacklist_regexp))return"";
f=this.get_product_id_from_url(q,a.regexp,a.regexp_group)}b||!a.product_group_group||"string"===a.product_group_group&&a.product_group_group instanceof String||"html"!==a.product_group_group.scheme?b||a.product_group_regexp&&(b=this.get_product_id_from_url(q,a.product_group_regexp,a.product_group_group)):b=this.get_product_id_from_dom(a.product_group_group);if(!f)return null;a={product_id:f,product_group:b,product_action:n,product_category:p};c&&c(a);return a};
m.prototype.get_pid=function(a){this.extract_pid(a,"adroll",function(a){if(a){var c=a.product_id,d=a.product_group,f=a.product_action,n=a.product_category;a=[];var p;if(c instanceof Array)for(p=0;p<c.length;p++)a.push(["adroll_product_id",this.normalize_var((c[p]+"").toLowerCase(),!0)]);else a.push(["adroll_product_id",this.normalize_var((c+"").toLowerCase(),!0)]);if(n instanceof Array)for(p=0;p<n.length;p++)a.push(["adroll_product_category_id",this.normalize_var((n[p]+"").toLowerCase(),!0)]);else n&&
a.push(["adroll_product_category_id",this.normalize_var((n+"").toLowerCase(),!0)]);d&&a.push(["adroll_product_group",this.normalize_var((d+"").toLowerCase(),!0)]);f&&a.push(["adroll_product_action",this.normalize_var((f+"").toLowerCase(),!0)]);(c=this.external_data_to_qs(!0))&&a.push([c]);c=this._srv(this.buildurl("/p/"+this._global("adroll_adv_id")+"/",a));d=window.document.createElement("img");d.src=c;d.height=d.width=1;d.border=0;this._head().appendChild(d)}}.bind(this))};
m.prototype.get_product_id_from_dom=function(a){var b=null,c;a.path&&(window.jQuery?(c=window.jQuery(a.path),c.length&&(c=c.eq(0),b="text"===a.attribute?c.text():c.attr(a.attribute))):window.Prototype&&window.$$?(c=window.$$(a.path),c.length&&(c=c[0],b="text"===a.attribute?c.innerText&&!window.opera?c.innerText:c.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g," "):c.readAttribute(a.attribute))):window.YUI?(c=window.YUI().use("node"),c.one&&(c=c.one(a.path),b=null,c&&(b="text"===a.attribute?
c.get("text"):c.getAttribute(a.attribute)))):window.$$&&(c=window.$$(a.path),c.length&&(c=c[0],b="text"===a.attribute?c.get("text"):c.getProperty(a.attribute))));if(b&&(b=b.replace(/^\s\s*/,"").replace(/\s\s*$/,""),a.regular_expression&&a.regular_expression_replace))if(c=new RegExp(a.regular_expression,"gi"),b=c.exec(b),null!==b){a=a.regular_expression_replace;for(c=0;c<b.length;c++)a=a.replace(new RegExp("\\\\"+c,"gi"),b[c]||"");b=a}else b="";return b};
m.prototype.get_product_id_from_url=function(a,b,c){var d=null;try{d=parseInt(c)}catch(f){}return null!==d&&!isNaN(d)&&b&&(a=(new RegExp(b,"gi")).exec(a),null!==a&&d in a)?a[d]:null};m.prototype.render_pixel_code=function(a,b){this.expire_old();var c=this._srv("/pixel"),d=window.document.createElement("script");d.setAttribute("async","true");d.type="text/javascript";var f=this.get_keywords();this.addLoadEvent(function(n){return function(){var p=[];try{p.push("adroll_s_ref="+window.escape(window.document.referrer))}catch(g){}try{p.push("keyw="+window.escape(f))}catch(g){}try{n._has_global("adroll_segments")&&p.push("name="+window.escape(n._global("adroll_segments").toLowerCase()))}catch(g){}try{var q=
n.get_conversion_value();q.conv_value&&p.push("conv_value="+q.conv_value);q.currency&&p.push("adroll_currency="+q.currency)}catch(g){}try{if(n._has_email()){var l=n._global("adroll_email"),l=l.replace(/^\s+|\s+$/g,""),h=l.toLowerCase();n.is_already_hashed(h)?p.push("hashed_email="+h):n.is_email_valid(l)?(p.push("email="+window.escape(l)),p.push("hashed_email="+n.md5(h))):(p.push("data_error=email"),p.push("data_error_message=invalid_format"))}}catch(g){}try{if(n._has_user_identifier()){var e=n._global("adroll_user_identifier"),
e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,"");p.push("user_identifier="+n.md5(e))}}catch(g){}try{n._has_email()||n._has_user_identifier()||n.findAndSetEmailVarCustomData()}catch(g){}try{var k=n.external_data_to_qs(!0);k&&p.push(k)}catch(g){}p=n.get_base_url(c,a,b,null,"",p);d.src=p;n._head().appendChild(d)}}(this))};
m.prototype.render_ad_code=function(a,b,c,d){d=this._is_defined(d)?d:null;if(!this._is_defined(this._r[b])||d){var f=["width="+this._global("adroll_width"),"height="+this._global("adroll_height"),"x=0","y=0"];if(c)this.log("Rendering test ad "+c+" in space "+b),f.push("test_ad="+c),a=this.get_url(a,b,null,"ad",f);else if(d){this.log("Rendering adgroup "+d);c=this.macro_values();var n=this.macro_url_params(c,!1,!1,!1,!1);f.push(n);this.render_win_notification(c);a=this.get_url(a,b,d,null,f)}else this.log("Rendering ad space "+
b),a=this.get_url(a,b,null,"ad",f);this.expire_old();window.document.write('<script src="'+a+'">\x3c/script>');this._nad+=1;this._r[b]=1}};m.prototype.render_win_notification=function(a){if(a.adroll_cpm_macro&&a.adroll_win_notif){var b=new window.Image,c=this._secure()?"https://":"http://";b.src=c+a.adroll_win_notif+a.adroll_cpm_macro;b.setAttribute("width","1");b.setAttribute("height","1");b.setAttribute("border","0");this._head().appendChild(b)}};
m.prototype.get_base_url=function(a,b,c,d,f,n){a=a+"/"+b+"/"+c+(d?"/"+d:"")+(f?"/"+f:"");var p="";this.cookieEnabled(!1)?(p=window.escape(this.get_eids()),a+="?pv="+this.pv+"&cookie="+p):a+="?no-cookies=1&pv="+this.pv;n&&(a+="&"+n.join("&"));if(a.length>this._url){this.del(this.__adc);if(a.length-p.length>this._url)return"#";this.log("Url was too big, shrinking it");return this.get_url(b,c,d,f,n)}this.log("Generated url: "+a);return a};
m.prototype.get_url=function(a,b,c,d,f){var n=c?this._srv("/c"):this._srv("/r");return this.get_base_url(n,a,b,c,d,f)};m.prototype.get_eids=function(){if(this._global("adroll_ext_network")||this._global("adroll_optout"))return"";try{for(var a=this.get(this.__adc),b=a?a.split("|"):"",a=[],c=b.length-1;0<=c;c--)if(b[c]){var d=b[c].split(":");a.push([d[0],d[2]].join(":"))}return a.join("|")}catch(f){return this.del(this.__adc),""}};m.prototype.record_user=function(a){var b="adroll_conversion_value adroll_conversion_value_in_dollars adroll_segments adroll_email adroll_user_identifier adroll_currency".split(" "),c,d;a=a||{};var f={adroll_email:!0,adroll_user_identifier:!0};for(c=0;c<b.length;c++){try{this._unset_global(b[c])}catch(n){}if(b[c]in a){b[c]in f?this._set_global(b[c],window.escape(a[b[c]])):this._set_global(b[c],a[b[c]]);try{delete a[b[c]]}catch(n){}}}try{this._unset_global("adroll_custom_data")}catch(n){}for(d in a)if(a.hasOwnProperty(d)){this._set_global("adroll_custom_data",
a);break}this.render_pixel_code(this._global("adroll_adv_id"),this._global("adroll_pix_id"))};m.prototype._has_email=function(){return this._has_global("adroll_email")&&"username@example.com"!==this._global("adroll_email")};m.prototype._has_user_identifier=function(){return this._has_global("adroll_user_identifier")&&"example_user_id"!==this._global("adroll_user_identifier")};m.prototype.is_already_hashed=function(a){return/^[a-f0-9]{32}$/.test(a)};
m.prototype.getEmailVar=function(a,b,c){if(0===b)return null;var d,f;for(f in a){if(30<Date.now()-c)return null;if(Object.prototype.hasOwnProperty.call(a,f)&&a[f]!==a){if("string"===typeof a[f]&&""!==a[f]&&255>a[f].length&&-1<a[f].indexOf("@")&&-1===a[f].indexOf(" ")&&this.is_email_valid(a[f]))return'["'+f+'"]';if("object"===typeof a[f]&&a!==window&&(d=this.getEmailVar(a[f],b-1,c)))return'["'+f+'"]'+d}}};
m.prototype.findAndSetEmailVarCustomData=function(){if(0===Math.round(100*Math.random())%10){var a,b={dataLayer:this._global("dataLayer"),window:window},c=Date.now(),d;for(d in b)if(b.hasOwnProperty(d)&&this._is_defined(b[d])&&(a=this.getEmailVar(b[d],4,c))){this._ensure_global("adroll_custom_data",{}).email_var=d+a;break}}};m.prototype.is_email_valid=function(a){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(a)};m.prototype._is_defined=function(a){return"undefined"!==typeof a};m.prototype.normalize_var=function(a,b){if(!a)return"";a=a.toString().substr(0,this._kwl).replace(/,/gi,".");b&&(a=window.escape(a));return a};m.prototype.get_keywords=function(){try{var a=window.document.referrer||"";if(!a)return"";var b=this.parseUri(a);return-1!==b.host.indexOf("www.google.")?b.queryKey.q.substring(0,this._kwl):-1!==b.host.indexOf("bing.com")?b.queryKey.q.substring(0,this._kwl):""}catch(c){return""}};
m.prototype.parseUri=function(a){a=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a);for(var b={queryKey:{}},c=14,d="source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");c--;)b[d[c]]=a[c]||"";b[d[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(a,c,d){c&&(b.queryKey[c]=d)});return b};
m.prototype._secure=function(){return!0};m.prototype._protocol=function(){return window.document.location.protocol};m.prototype._native=function(){try{return"http"!==this._protocol().slice(0,4)}catch(a){return!0}};m.prototype._srv=function(a){a=this._is_defined(a)?a:"";return"https://d.adroll.com"+a};m.prototype._cdn=function(a){a=this._is_defined(a)?a:"";return this._secure()?"https://s.adroll.com"+a:"http://a.adroll.com"+a};m.prototype.log=function(a){this._logs.push(a)};
m.prototype.read_log=function(a){return this._logs.join(a?"\n":"<br>\n")};m.prototype.normalize_url=function(a){return a.toLowerCase()};window.__adroll=window.__adroll||new m;}());
(function(a){a.adroll_optout=!1;a.adroll_ext_network=null;a.adroll_callbacks="undefined"===typeof a.adroll_callbacks?[]:a.adroll_callbacks;a.__adroll.render_pixel_code(a.adroll_adv_id,a.adroll_pix_id)})(window);
