if(typeof Reuters=="undefined"||Reuters==null)Reuters={};Reuters.namespace=function(){var a=arguments,b=null,d,c,e;for(d=0;d<a.length;d+=1){e=(""+a[d]).split(".");b=Reuters;for(c=e[0]=="Reuters"?1:0;c<e.length;c+=1)b[e[c]]=b[e[c]]||{},b=b[e[c]]}return b};Reuters.namespace("utils");Reuters.utils.signinLabel="Sign In";Reuters.utils.registerLabel="Register";Reuters.utils.newsOrStockSearchText="Search Reuters";Reuters.utils.accountInfoLabel="Account Information";Reuters.utils.loginFAQLabel="Login FAQ";
Reuters.utils.logoutLabel="Logout";Reuters.utils.myCart="My Cart";Reuters.utils.addLoadEvent=function(a,b){if(typeof a!="function")try{console.debug("function called addLoadEvent with a non-function param")}catch(d){}else{var c=window.onload;window.onload=typeof window.onload!="function"?b!==void 0?function(){a.call(b)}:a:function(){c();b!==void 0?a.call(b):a()}}};
Reuters.utils.enableSearchBox=function(a,b,d){var c=document.getElementById(a),e="",f="",g=document.getElementById("masthead")==null?"#999;":"#666;";if(c){if(c.value==b)c.style.cssText="color: "+g;c.onfocus=function(){if(c.value==b)c.value="",c.style.cssText="color: #000;"};c.onblur=function(){if(c.value=="")c.value=b,c.style.cssText="color: "+g;setTimeout(function(){if(document.getElementById("suggestedSearch"))document.getElementById("suggestedSearch").innerHTML=""},500)};c.onkeyup=function(b){if(a==
"searchfield"){if(!b)b=window.event;if(b&&(b.keyCode===40||b.keyCode==38)){if(b=b.keyCode===40?1:-1,document.getElementById("suggestedSearchResults"))e==""?nextItem=e="sugg0":(e=YAHOO.util.Dom.getElementsByClassName("selected","","suggestedSearchResults")[0].id,nextItem="sugg"+(parseInt(e.substr(4))+b)),YAHOO.util.Dom.removeClass(e,"selected"),document.getElementById(nextItem)?(YAHOO.util.Dom.addClass(nextItem,"selected"),c.value=document.getElementById(nextItem).getAttribute("suggSearch"),e=nextItem):
(e="",c.value=f)}else if(c.value!=""){b=Reuters.info===null||typeof Reuters.info==="undefined"?"us":Reuters.utils.getRealEdition(Reuters.info.edition,"us");if(b=="cn"||b=="betacn"||b=="jp"||b=="betajp")return true;b="http://search."+b+".reuters.com/query/suggestion.do?q="+encodeURIComponent(c.value)+"&site="+b+"&resultsPerPage=5&callback=Reuters.utils.storeSuggestedSearchNewsResults";Reuters.utils.loadScript("suggestedSearchJSON",b);f=c.value}else{if(document.getElementById("suggestedSearch"))document.getElementById("suggestedSearch").innerHTML=
"";e=""}}};if(d)c.onkeypress=function(a){if(!a)a=window.event;if(a&&(a.keyCode===13||a.which===13||a.charCode===13))return typeof d!="undefined"&&d(),false}}};
Reuters.utils.storeSuggestedSearchNewsResults=function(a){Reuters.utils.suggestedSearchResults=a;var b=a.edition=="US"?"www":a.edition.toLowerCase(),a=a.queryString,d=a.indexOf("."),a=d>0?a.substring(0,d):a,b="http://"+b+".reuters.com/do/marketDataAjax?type=search&searchType=symbol&search="+encodeURIComponent(a)+"&callback=Reuters.utils.storeSuggestedSearchSymbolResults";Reuters.utils.loadScript("suggestedSearchSymbolJSON",b)};
Reuters.utils.storeSuggestedSearchSymbolResults=function(a){Reuters.utils.suggestedSearchResults.quoteSearchResult=a;a=document.getElementById("searchfield").value;if(Reuters.utils.suggestedSearchResults.quoteSearchResult.length<=0)a="http://"+(Reuters.info===null||typeof Reuters.info==="undefined"?"www":Reuters.utils.getRealEdition(Reuters.info.edition,"www"))+".reuters.com/do/marketDataAjax?type=search&searchType=name&search="+encodeURIComponent(a)+"&callback=Reuters.utils.storeSuggestedSearchNameResults",
Reuters.utils.loadScript("suggestedSearchNameJSON",a);else{for(var b=[],d=0;d<Reuters.utils.suggestedSearchResults.quoteSearchResult.length;d++)Reuters.utils.suggestedSearchResults.quoteSearchResult[d].ric.toLowerCase().startsWith(a.toLowerCase())&&b.push(Reuters.utils.suggestedSearchResults.quoteSearchResult[d]);Reuters.utils.suggestedSearchResults.quoteSearchResult=b;Reuters.utils.loadSuggestedSearch(Reuters.utils.suggestedSearchResults)}};
Reuters.utils.storeSuggestedSearchNameResults=function(a){Reuters.utils.suggestedSearchResults.quoteSearchResult=a;Reuters.utils.loadSuggestedSearch(Reuters.utils.suggestedSearchResults)};
Reuters.utils.loadSuggestedSearch=function(a){function b(){var a=document.getElementById("masthead")==null?document.getElementById("header"):$(".mast-strip"),b=document.createElement("div");b.id="suggestedSearch";var c=document.createElement("div");c.id="suggestedSearchResults";b.appendChild(c);document.getElementById("masthead")==null?a.appendChild(b):a.append(b)}function d(a,b){var c=document.createElement("div");c.id=a;if(b){var d=document.createElement("h5");d.innerHTML=b;c.appendChild(d)}return c}
function c(b){var c=b.search(RegExp(a.queryString,"i")),d=c+a.queryString.length;return c==-1?b:b.substr(0,c)+"<span class='query'>"+b.substr(c,a.queryString.length)+"</span>"+b.substr(d)}document.getElementById("suggestedSearch")||b();(function(){var b=document.createElement("div"),f=0;if(document.getElementById("suggestedSearchResults"))var g=document.getElementById("suggestedSearchResults");else g=document.createElement("div"),g.id="suggestedSearchResults",document.getElementById("suggestedSearch").appendChild(g);
var h="http://"+(Reuters.info===null||typeof Reuters.info==="undefined"?"www":Reuters.info.edition===null||typeof Reuters.info.edition==="undefined"?"www":Reuters.utils.getRealEdition(Reuters.info.edition,"www"))+".reuters.com";if(a.newsSearchResult.length>=1){var k=d("newsResults","News"),j=document.createElement("ul");j.id="newsResultsList";k.appendChild(j);for(i=0;i<a.newsSearchResult.length;i++)result=a.newsSearchResult[i],li=document.createElement("li"),li.id="sugg"+f,li.setAttribute("suggSearch",
result.queryString),li.innerHTML='<a href="'+h+"/search/news?blob="+result.queryString+'" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"search","label":$(this).attr("href")});>'+c(result.queryString)+"</a>",j.appendChild(li),f++;b.appendChild(k)}if(a.quoteSearchResult.length>=1){k=d("companyResults","Stocks");j=document.createElement("table");j.id="companyResultsList";k.appendChild(j);for(i=0;i<a.quoteSearchResult.length&&i<5;i++)result=a.quoteSearchResult[i],
tr=document.createElement("tr"),tr.id="sugg"+f,tr.setAttribute("suggSearch",result.ric),td1=document.createElement("td"),td1.innerHTML='<span class="ric"><a href="'+h+"/finance/stocks/overview?symbol="+result.ric+'">'+c(result.ric)+"</a></span>",td2=document.createElement("td"),td2.innerHTML='<span class="companyName">'+result.name+"</span>",td3=document.createElement("td"),td3.innerHTML='<span class="exchange">'+result.exchange+"</span>",tr.appendChild(td1),tr.appendChild(td2),tr.appendChild(td3),
j.appendChild(tr),f++;stockLink=document.createElement("p");stockLink.id="stockLink";stockLink.innerHTML='<a href="'+h+"/finance/stocks/lookup?search="+a.orignalqueryString.replace(/ /g,"+")+'&searchType=any&sortBy=&dateRange=&comSortBy=marketcap">&#187; More Stocks Results</a>';k.appendChild(stockLink);b.appendChild(k)}if(a.newsSearchResult.length==0&&a.quoteSearchResult.length==0)f=d("noResults"),f.innerHTML="<p>No results found.</p>",b.appendChild(f);g.innerHTML=b.innerHTML})()};
Reuters.utils.loadScript=function(a,b){var d=document.getElementById(a),c=document.getElementsByTagName("head")[0];d!=null&&c.removeChild&&c.removeChild(d);if(document.createElement)d=document.createElement("script"),d.id=a,d.setAttribute("type","text/javascript"),d.setAttribute("src",Reuters.utils.convertStaticUrl(b)),d.setAttribute("charset","UTF-8");c.appendChild(d)};
Reuters.utils.loadStylesheet=function(a,b){var d=document.getElementById(a),c=document.getElementsByTagName("head")[0];d!=null&&c.removeChild&&c.removeChild(d);if(document.createElement)d=document.createElement("link"),d.id=a,d.setAttribute("rel","stylesheet"),d.setAttribute("href",Reuters.utils.convertStaticUrl(b));c.appendChild(d)};Reuters.utils.writeScript=function(a){document.write('<script src="'+Reuters.utils.convertStaticUrl(a)+'" type="text/javascript"><\/script>')};
Reuters.utils.writeStylesheet=function(a){document.write('<link href="'+Reuters.utils.convertStaticUrl(a)+'" rel="stylesheet" />')};
Reuters.utils.convertStaticUrl=function(a){try{if(!parallelMediaHosts||parallelMediaHosts===null||typeof parallelMediaHosts==="undefined")return a;var b=parallelMediaHosts;if(a.indexOf("/resources")==0&&b instanceof Array&&b.length>0){var d=a.lastIndexOf("/"),c=a.toLowerCase().substring(d+1),e=c.lastIndexOf(".");e>0&&(c=c.substring(0,e));var f=c.lastIndexOf("-min");f>0&&(c=c.substring(0,f));var g=c.charCodeAt(c.length-1)%b.length;return"http://"+b[g]+a}}catch(h){console.debug("convert static url error ! "+
h),console.debug(a),console.debug(typeof a)}return a};Reuters.utils.replaceContent=function(a,b,d,c){(new Reuters.utils._contentReplacer(a,b,d,c)).update()};
Reuters.utils._contentReplacer=function(a,b,d,c){this.elementId=a;this.url=b;this.reloadCallbackFunc=c;this.interval=d?d:null;this.success=function(b){if(b.responseText!==void 0&&b.responseText!=null&&b.responseText.indexOf("No Data")<0){var b=b.responseText,c=document.getElementById(a),d=document.createElement(c.tagName);d.innerHTML=b;if(c.innerHTML!=d.innerHTML)c.parentNode.replaceChild(d,c),d.id=a,this.reloadCallbackFunc&&typeof this.reloadCallbackFunc=="function"&&this.reloadCallbackFunc()}if(this.interval!=
null)try{setTimeout(this.update.bind(this),this.interval)}catch(h){trace("Somebody tell Mike about this: "+h)}};this.failure=function(){};this.update=function(){YAHOO.util.Connect.asyncRequest("GET",this.url,this)}};Reuters.utils.showGrid=function(){if(location.href.search("grid=true")!=-1){var a=document.getElementsByTagName("div");for(i=0;i<a.length;i++)a[i].className.search("section")!=-1&&(a[i].style.cssText+=' background: url("/resources_v2/images/bg_grid.gif") top left')}};
Reuters.utils.popup=function(a,b,d,c,e,f){b="width="+b+",height="+d+",top="+((screen.height-d)/4).toString()+",left="+((screen.width-b)/2).toString();switch(c){case 1:b+=",toolbar=no,status=no,resizable=no,scrollbars=no";break;case 2:b+=",menubar=yes,toolbar=yes,status=yes,resizable=yes,location=yes,scrollbars=yes";break;case 3:b+=",toolbar=no,status=no,resizable=no,scrollbars=yes"}e||(e="reutersPopup");f==null&&(f=typeof Reuters.info=="undefined"||Reuters.info==null?"":Reuters.info.articleId);switch(e){case "emailArticle":dcsMultiTrack("WT.cg_n",
"Event - Share","DCSext.ContentID_Shared",f,"DCSext.VBC","","DCSext.ContentType","Share","DCSext.DartZone","","DCSext.ModID","","DCSext.ModImp","","DCSext.rChannel","Event","dcsuri","/share");break;case "shareArticle":dcsMultiTrack("WT.cg_n","Event - Share","DCSext.ContentID_Shared",f,"DCSext.VBC","","DCSext.ContentType","Share","DCSext.DartZone","","DCSext.ModID","","DCSext.ModImp","","DCSext.rChannel","Event","dcsuri","/share")}(popupWindow=window.open(a,e,b))&&popupWindow.focus()};Reuters.utils.addLoadEvent(Reuters.utils.showGrid);
Reuters.utils.addLoadEvent(function(){Reuters.utils.enableSearchBox("searchfield",Reuters.utils.newsOrStockSearchText)});Reuters.namespace("lang");Reuters.lang.isEmpty=function(a){return a===null||typeof a==="undefined"||typeof a=="string"&&a.length<=0};Reuters.lang.isNotEmpty=function(a){return!Reuters.lang.isEmpty(a)};Reuters.namespace("lang.Arrays");
Reuters.lang.Arrays.remove=function(a,b){if(Reuters.lang.isNotEmpty(a)&&Reuters.lang.isNotEmpty(b))for(var d=0;d<a.length;d++)if(a[d]==b)return a.splice(d,1),d};trace=function(){try{console.debug.apply(console,arguments)}catch(a){try{console.debug=function(){for(var a=0;a<arguments.length;a++)console.log(arguments[a])},console.debug.apply(console,arguments)}catch(b){}}};
Reuters.utils.isLoggedIn=function(){var a=1;window.location.host.indexOf("us")>-1||window.location.host.indexOf("www")>-1?a=1:window.location.host.indexOf("uk")>-1?a=2:window.location.host.indexOf("jp")>-1?a=4:window.location.host.indexOf("in")>-1?a=9:window.location.host.indexOf("cn")>-1&&(a=10);if(typeof YAHOO!="undefined"){var b=YAHOO.util.Cookie.get("customerId"),d=YAHOO.util.Cookie.get("edition");loggedIn=b!=null&&b!="@"&&a==d}else loggedIn=false;return loggedIn};
Reuters.utils.hasScreenName=function(){if(Reuters.utils.isLoggedIn()){var a=Reuters.tns.CURRENT_USER.getUserInfo();if(typeof a.screenName!="undefined"&&a.screenName!="")return true}return false};
Reuters.utils.login=function(a){var b=Reuters.info===null||typeof Reuters.info==="undefined"?"us":Reuters.utils.getRealEdition(Reuters.info.edition,"us");if(Reuters.utils.isLoggedIn()==false){var d;b=="us"?(d=Reuters.utils.showOverlayCurtain(500,560,100),d.innerHTML=a=="COMMENTS"?'<div id="modalLoginFlow"><div class="closer" onclick="Reuters.utils.closeLogin()"></div><iframe id="loginFrame" src="https://commerce.'+b+".reuters.com/login/pages/login/loginEmbedded.do?go="+encodeURIComponent(location.href)+
"&success=http://"+location.hostname+'/assets/loginSuccessful&flow=COMMENTS" width="490" height="550" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe></div>':'<div id="modalLoginFlow"><div class="closer" onclick="Reuters.utils.closeLogin()"></div><iframe id="loginFrame" src="https://commerce.'+b+".reuters.com/login/pages/login/loginEmbedded.do?go="+encodeURIComponent(location.href)+"&success=http://"+location.hostname+'/assets/loginSuccessful" width="490" height="550" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe></div>'):
(d=Reuters.utils.showOverlayCurtain(910,410,100),d.innerHTML='<div id="modalLoginFlow"><div class="closer" onclick="Reuters.utils.closeLogin()"></div><iframe id="loginFrame" src="https://commerce.'+b+".reuters.com/login/pages/login/loginEmbedded.do?go="+encodeURIComponent(location.href)+"&success=http://"+location.hostname+'/assets/loginSuccessful" width="900" height="400" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe></div>')}};
Reuters.utils.logout=function(){if(Reuters.info===null||typeof Reuters.info==="undefined")location.href="https://commerce.us.reuters.com/login/pages/login/logout.do?go="+encodeURIComponent(location.href);else{var a=Reuters.utils.getRealEdition(Reuters.info.edition,"us");location.href="https://commerce."+a+".reuters.com/login/pages/login/logout.do?go="+encodeURIComponent(location.href)}};
Reuters.utils.loadHeaderLinks=function(){var a=Reuters.info===null||typeof Reuters.info==="undefined"?"us":Reuters.info.edition===null||typeof Reuters.info.edition==="undefined"?"us":Reuters.utils.getRealEdition(Reuters.info.edition,"us");if(document.getElementById("utilities")){var b="<ul>";if(a=="cn")b+='<li class="last new-social"><a href="/rss" target="_blank"><div class="rss_head_cn"></div></a><a href="http://newslink.cn.reuters.com/join/subscribe" target="_blank"><div class="email_head_cn"></div></a></li>';
else if(Reuters.utils.isLoggedIn()==false)b+=a=="us"?'<li id="signin-control"><a href="https://commerce.'+a+".reuters.com/login/pages/login/portfolioLogin.do?go="+encodeURIComponent(location.href)+'" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"profile","label":$(this).attr("href")});>'+Reuters.utils.signinLabel+"</a></li>":'<li class="first_util"><a href="https://commerce.'+a+".reuters.com/login/pages/login/portfolioLogin.do?go="+encodeURIComponent(location.href)+
'" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"profile","label":$(this).attr("href")});>'+Reuters.utils.signinLabel+"</a></li>",b+='<li><a href="https://commerce.'+a+".reuters.com/registration/pages/registration/begin.do?go="+encodeURIComponent(location.href)+'" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"profile","label":$(this).attr("href")});>'+Reuters.utils.registerLabel+"</a></li>";else{typeof myaccount==="undefined"&&
(myaccount="My Account");b+='<li><a href="https://commerce.'+a+'.reuters.com/profile" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"profile","label":$(this).attr("href")}); >'+myaccount+"</a></li>";if(YAHOO.util.Cookie.get("socialLoginProvider")){var d=YAHOO.util.Cookie.get("socialLoginProvider");trace("socialLoginProvider: "+d);b+='<li id="loggedin-social" onmouseover="Reuters.utils.showSocialLoggedInFlyout()" onmouseout="Reuters.utils.hideSocialLoggedInSoon();"><div class="socProvider '+
d+'"> </div></li>'}Reuters.info.edition!="IN"&&Reuters.info.edition!="CN"&&Reuters.info.edition!="JP"&&Reuters.info.edition!="BETACN"&&Reuters.info.edition!="BETAJP"&&(b+='<li><a href="https://commerce.'+a+'.reuters.com/purchase/mycart.do" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"profile","label":$(this).attr("href")});>My Cart</a></li>');Reuters.info.edition!="CN"&&Reuters.info.edition!="JP"&&Reuters.info.edition!="BETACN"&&Reuters.info.edition!="BETAJP"&&
(b+='<li><a href="https://commerce.'+a+".reuters.com/login/pages/login/portfolioLogin.do?go=http://portfolio."+a+".reuters.com/"+a.toUpperCase()+"/overview.asp&go_withoutlogin=http://portfolio."+a+".reuters.com/"+a.toUpperCase()+'/public/index.asp" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"profile","label":$(this).attr("href")});>Portfolio</a></li>');typeof logout==="undefined"&&(logout="Logout");b+='<li><a href="javascript:Reuters.utils.logout();" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"profile","label":$(this).attr("href")});>'+
logout+"</a></li>"}a=="us"?(b+='<li class="last new-social"><a href="https://twitter.com/reuters" target="_blank"  onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); ><div  class="twitter_head"></div></a><a href="https://www.facebook.com/Reuters" target="_blank"  onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); ><div class="facebook_head"></div></a><a href="https://www.linkedin.com/company/thomson-reuters_1400" target="_blank"   onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"linkedin_follow"}); ><div class="linkedin_head"></div></a></li>',
b+=typeof document.forms.gigyaFormInHeader=="undefined"?'<div id="gigya-controller"><form action="https://commerce.'+a+".reuters.com/login/pages/login/portfolioLogin.do?go="+encodeURIComponent(location.href)+'" method="post" name="gigyaFormInHeader"><input type="hidden" value="827" name="__MOID__" /><input type="hidden"  value="CheckGigyaResponseForm" name="__FH__" /><input type="hidden" name="uid"/><input type="hidden" name="signature"/><input type="hidden" name="timestamp"/><input type="hidden" name="email"/><input type="hidden" name="backUrl"/><input type="hidden" name="backParameterEncoded"/><input type="hidden" name="source"/><input type="hidden" name="loginProvider"/><input type="hidden" name="providers"/></form><div id="gigyalogin"></div></div>':
'<div id="gigya-controller"><div id="gigyalogin"></div></div>'):Reuters.info.edition=="UK"?b+='<li class="last new-social"><a href="https://twitter.com/ReutersUK" target="_blank"  onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); ><div  class="twitter_head"></div></a><a href="https://www.facebook.com/ReutersUK" target="_blank" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); ><div class="facebook_head"></div></a><a href="https://www.linkedin.com/company/thomson-reuters_1400" target="_blank" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"linkedin_follow"}); ><div class="linkedin_head"></div></a></li>':
Reuters.info.edition=="IN"&&(b+='<li class="last new-social"><a href="https://twitter.com/ReutersIndia" target="_blank"  onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); ><div  class="twitter_head"></div></a><a href="https://www.facebook.com/india.reuters" target="_blank" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); ><div class="facebook_head"></div></a><a href="https://www.linkedin.com/company/thomson-reuters_1400" target="_blank" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"linkedin_follow"}); ><div class="linkedin_head"></div></a></li>');
b+="</ul>";document.getElementById("utilities").innerHTML=b}};Reuters.utils.addLoadEvent(Reuters.utils.loadHeaderLinks);
Reuters.utils.loadFooterLinks=function(){var a=Reuters.info===null||typeof Reuters.info==="undefined"?"us":Reuters.info.edition===null||typeof Reuters.info.edition==="undefined"?"us":Reuters.utils.getRealEdition(Reuters.info.edition,"us");if(document.getElementById("footer-utilities")){var b='<span class="footerparent">'+Reuters.utils.accountInfoLabel+"</span><ul>";Reuters.utils.isLoggedIn()==false?(b+='<li class="h-links"> <a href="https://commerce.'+a+".reuters.com/registration/pages/registration/begin.do?go="+
encodeURIComponent(location.href)+'" target="_top">'+Reuters.utils.registerLabel+"</a></li>",b+=a=="us"?'<li class="h-linkend"> <a href="https://commerce.'+a+".reuters.com/login/pages/login/portfolioLogin.do?go="+encodeURIComponent(location.href)+'">'+Reuters.utils.signinLabel+"</a></li>":'<li class="h-linkend"> <a href="https://commerce.'+a+".reuters.com/login/pages/login/portfolioLogin.do?go="+encodeURIComponent(location.href)+'" target="_top">'+Reuters.utils.signinLabel+"</a></li>"):(typeof myaccount===
"undefined"&&(myaccount="My Account"),b+='<li class="h-links"> <a href="https://commerce.'+a+'.reuters.com/profile" target="_top">'+myaccount+"</a></li>",Reuters.info.edition!="IN"&&(b+='<li class="h-links"> <a href="https://commerce.'+a+'.reuters.com/purchase/mycart.do" target="_top" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"profile","label":$(this).attr("href")});>'+Reuters.utils.myCart+"</a></li>"),Reuters.info.edition!="JP"&&Reuters.info.edition!="BETAJP"&&
(b+='<li class="h-links"> <a href="https://commerce.'+a+".reuters.com/login/pages/login/portfolioLogin.do?go=http://portfolio."+a+".reuters.com/"+a.toUpperCase()+"/overview.asp&go_withoutlogin=http://portfolio."+a+".reuters.com/"+a.toUpperCase()+'/public/index.asp">Portfolio</a></li>'),b+='<li class="h-linkend"> <a href="javascript:Reuters.utils.logout();" target="_top">'+Reuters.utils.logoutLabel+"</a></li>");b+="</ul>";document.getElementById("footer-utilities").innerHTML=b}};Reuters.utils.addLoadEvent(Reuters.utils.loadFooterLinks);
Reuters.utils.showLoginOptions=function(){if((document.getElementById("header")||document.getElementById("reutersHeader"))&&document.getElementById("signin-social").offsetHeight!=0)if(document.getElementById("login-social-flyout"))document.getElementById("login-social-flyout").className="",Reuters.utils.dontHideLoginOptions();else{var a=document.createElement("div");a.id="login-social-flyout";typeof gigya=="undefined"&&Reuters.utils.loadScript("gigyaservices","https://cdns.gigya.com/JS/gigya.js?services=socialize&APIKey="+
Reuters.info.gigyaAPIKey);var b="";typeof Reuters.nav.isCommerce!="undefined"&&Reuters.nav.isCommerce==false&&(b="http://static.reuters.com");Reuters.utils.loadScript("gigyacreds",b+"/resources_v2/js/rcom-login-gigya.js");a.innerHTML='<div id="loadScreen"><img src="'+b+'/resources_v2/images/icon_social_loading.gif" border="0" alt="Loading..." /></div>';a.onmouseover=Reuters.utils.dontHideLoginOptions;a.onmouseout=Reuters.utils.hideLoginOptionsSoon;document.getElementById("header")?document.getElementById("masthead")==
null?document.getElementById("header").appendChild(a):$(".mast-strip").append(a):document.getElementById("reutersHeader")&&document.getElementById("reutersHeader").appendChild(a)}};
Reuters.utils.showLoginOptionsViaGigya=function(){if(document.getElementById("login-social-flyout")){var a="",a='<div class="biglabel">Sign in with <a href="https://commerce.'+(Reuters.info===null||typeof Reuters.info==="undefined"?"us":Reuters.utils.getRealEdition(Reuters.info.edition,"us"))+".reuters.com/login/pages/login/portfolioLogin.do?go="+encodeURIComponent(location.href)+'">Reuters</a>...</div>';a+=document.getElementById("masthead")==null?'<div id="login-social-options">':'<div id="login-social-options"><div class="divider"></div>';
a+='<div class="label">Or, sign in using:</div>';a+='<div class="gigyaAction" id="rgaAol" onclick="gigya.services.socialize.plugins.login.providerClick(\'gigyalogin\',\'aol\')" title="AOL"><span class="hrefClone">AOL</span></div>';a+='<div class="gigyaAction" id="rgaFacebook" onclick="gigya.services.socialize.plugins.login.providerClick(\'gigyalogin\',\'facebook\')" title="Facebook"><span class="hrefClone">Facebook</span></div>';a+='<div class="gigyaAction" id="rgaGoogle" onclick="gigya.services.socialize.plugins.login.providerClick(\'gigyalogin\',\'google\')" title="Google"><span class="hrefClone">Google</span></div>';
a+='<div class="gigyaAction" id="rgaLinkedin" onclick="gigya.services.socialize.plugins.login.providerClick(\'gigyalogin\',\'linkedin\')" title="LinkedIn"><span class="hrefClone">LinkedIn</span></div>';a+='<div class="gigyaAction" id="rgaTwitter" onclick="gigya.services.socialize.plugins.login.providerClick(\'gigyalogin\',\'twitter\')" title="Twitter"><span class="hrefClone">Twitter</span></div>';a+='<div class="gigyaAction" id="rgaYahoo" onclick="gigya.services.socialize.plugins.login.providerClick(\'gigyalogin\',\'yahoo\')" title="Yahoo"><span class="hrefClone">Yahoo</span></div>';
a+="</div>";document.getElementById("login-social-flyout").innerHTML=a}};Reuters.utils.dontHideLoginOptions=function(){clearTimeout(Reuters.utils.hideLoginTimer)};Reuters.utils.hideLoginOptionsSoon=function(){Reuters.utils.hideLoginTimer=setTimeout(Reuters.utils.hideLoginOptions,100)};Reuters.utils.hideLoginOptions=function(){if(document.getElementById("login-social-flyout"))document.getElementById("login-social-flyout").className="hidden"};
Reuters.utils.showSocialLoggedInFlyout=function(){if(document.getElementById("header")||document.getElementById("reutersHeader"))if(document.getElementById("social-loggedin-flyout"))document.getElementById("social-loggedin-flyout").className="",Reuters.utils.dontHideSocialLoggedIn();else{var a=YAHOO.util.Cookie.get("socialLoginProvider"),b="facebook,google,yahoo,linkedin,aol,twitter".split(","),d=document.createElement("div");d.id="social-loggedin-flyout";typeof gigya=="undefined"&&Reuters.utils.loadScript("gigyaservices",
"https://cdns.gigya.com/JS/gigya.js?services=socialize&APIKey="+Reuters.info.gigyaAPIKey);var c="";typeof Reuters.nav.isCommerce!="undefined"&&Reuters.nav.isCommerce==false&&(c="http://static.reuters.com");Reuters.utils.loadScript("gigyacreds",c+"/resources_v2/js/rcom-login-gigya.js");c='<div class="label">You\'re logged in using: </div>';c+='<div class="gigyaLoggedIn '+a+'"><span class="providerName">'+a+"</span></div>";c+=document.getElementById("masthead")==null?'<div class="manageAcct"><div class="biglabel"><a href="https://commerce.us.reuters.com/profile" onmousedown="dataLayer.push({"event":"click-event","category":"navigation","action":"profile","label":$(this).attr("href")});" >Manage My Account...</a></div><div class="divider2"></div></div>':
'<div class="manageAcct"><div class="biglabel"><div class="divider"></div><a href="https://commerce.us.reuters.com/profile">Manage My Account...</a></div><div class="divider2"></div></div>';c+='<div class="socialOptions"><div class="biglabel">Link Other Accounts...</div><ul>';for(i=0;i<b.length;i++)b[i]!=a&&(c+='<li title="'+b[i]+'" class="'+b[i]+"\" onclick=\"gigya.services.socialize.plugins.login.providerClick('gigyalogin','"+b[i]+"')\"></li>");c+="</ul></div>";d.innerHTML=c;d.onmouseover=Reuters.utils.dontHideSocialLoggedIn;
d.onmouseout=Reuters.utils.hideSocialLoggedInSoon;document.getElementById("masthead")==null?document.getElementById("header")?document.getElementById("header").appendChild(d):document.getElementById("reutersHeader")&&document.getElementById("reutersHeader").appendChild(d):$(".mast-strip").append(d)}};Reuters.utils.hideSocialLoggedInSoon=function(){Reuters.utils.hideSocialLoggedinTimer=setTimeout(Reuters.utils.hideSocialLoggedIn,100)};Reuters.utils.dontHideSocialLoggedIn=function(){clearTimeout(Reuters.utils.hideSocialLoggedinTimer)};
Reuters.utils.hideSocialLoggedIn=function(){if(document.getElementById("social-loggedin-flyout"))document.getElementById("social-loggedin-flyout").className="hidden"};Reuters.utils.getQueryStringParameter=function(a,b){var d=a.split("?"),c="",e="";if(d.length>1){c=d[1];d=c.split("&");for(c=0;c<d.length;c++){var f=d[c].split("=");f[0]==b&&(e=f[1])}}return e};
Reuters.utils.replaceQueryStringParam=function(a,b,d){var c=a.split("?"),e=a="",a="";if(c.length>1){for(var a=c[0],e=c[1],c=e.split("&"),e=false,f=0;f<c.length;f++){var g=c[f].split("=");g[0]==b&&(g[1]=d,e=true);a+=f==0?"?":"&";a+=g[0]+"="+g[1]}e||(a+="&"+b+"="+d)}else a=c[0],a=a+"?"+b+"="+d;return a};
Reuters.utils.closeLogin=function(){Reuters.utils.hideOverlayCurtain();Reuters.utils.isLoggedIn()==true&&(Reuters.tns.reloadLoginStatus(),Reuters.utils.loadHeaderLinks(),setTimeout(Reuters.utils.doCommerceSurveyCheck,2E3))};Reuters.utils.tryStartRefresh=function(){typeof Reuters.refresh!="undefined"&&Reuters.refresh.startRefresh()};Reuters.utils.tryStopRefresh=function(){typeof Reuters.refresh!="undefined"&&Reuters.refresh.stopRefresh()};
Reuters.utils.showOverlayCurtain=function(a,b,d){if(document.getElementById("overlayMask"))document.getElementById("overlayMask").className="",document.getElementById("overlayContents").className="";else{var c=document.createElement("div");c.id="overlayMask";document.getElementById("header3P")?document.body.insertBefore(c,document.getElementById("header3P")):document.getElementById("header")&&document.body.insertBefore(c,document.getElementById("header"));c=document.createElement("div");c.id="overlayContents";
document.body.insertBefore(c,document.getElementById("overlayMask"))}c=Reuters.utils.getInnerXY();if(c.height<=b)var e=document.getElementById("header").offsetHeight+document.getElementById("content").offsetHeight+(b-c.height)+d+10;c.height>b&&(e=document.getElementById("header").offsetHeight+document.getElementById("content").offsetHeight+d+10);if(c.width<=980)c.width=980,e+=17;c.width>980&&(is_ie5up&&(c.width+=17),c.width-=17);d+=Reuters.utils.getScrollXY().y;document.getElementById("overlayMask").style.cssText=
"height: "+e+"px; width: "+c.width+"px;";document.getElementById("overlayContents").style.cssText="top: "+d+"px; width: "+a+"px; height: "+b+"px; left: "+Math.round((document.getElementById("content").offsetWidth-a)/2)+"px;";Reuters.utils.tryStopRefresh();if(document.all&&!window.opera&&!window.XMLHttpRequest)if(document.getElementById("iframeHackForIE"))document.getElementById("iframeHackForIE").style.display="block";else{a=document.getElementsByTagName("select");if(a.length>0)for(x=0;x<a.length;x++)a[x].style.zIndex=
"-1";document.getElementById("overlayMask").style.zIndex="0";a=document.createElement("iframe");a.id="iframeHackForIE";a.setAttribute("scrolling","no");a.setAttribute("class","iframeHackForIE");a.setAttribute("width",c.width);a.setAttribute("height",e);a.setAttribute("src","javascript:'<html></html>';");document.body.insertBefore(a,document.getElementById("overlayMask"))}return document.getElementById("overlayContents")};
Reuters.utils.showVideoOverlayCurtain=function(){document.getElementById("videoTranscript").className="";document.getElementById("videoTranscript").style.cssText="display:block;";Reuters.utils.tryStopRefresh()};Reuters.utils.closeVideoTranscript=function(){if(document.getElementById("videoTranscript"))document.getElementById("videoTranscript").className="hidden",document.getElementById("videoTranscript").style.cssText="display:hidden;";Reuters.utils.tryStartRefresh()};
Reuters.utils.hideOverlayCurtain=function(){if(document.getElementById("overlayMask")){document.getElementById("overlayMask").className="hidden";document.getElementById("overlayMask").style.cssText="";document.getElementById("overlayContents").className="hidden";document.getElementById("overlayContents").style.cssText="";if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)&&document.getElementById("iframeHackForIE"))document.getElementById("iframeHackForIE").style.display=
"none";Reuters.utils.tryStartRefresh()}};
Reuters.utils.getInnerXY=function(){var a=0,b=0;if(typeof window.innerWidth=="number")a=window.innerWidth,b=window.innerHeight;else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight))a=document.documentElement.clientWidth,b=document.documentElement.clientHeight;else if(document.body&&(document.body.clientWidth||document.body.clientHeight))a=document.body.clientWidth,b=document.body.clientHeight;return{width:a,height:b}};
Reuters.utils.getScrollXY=function(){var a=0,b=0;if(typeof window.pageYOffset=="number")b=window.pageYOffset,a=window.pageXOffset;else if(document.body&&(document.body.scrollLeft||document.body.scrollTop))b=document.body.scrollTop,a=document.body.scrollLeft;else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop))b=document.documentElement.scrollTop,a=document.documentElement.scrollLeft;return{x:a,y:b}};
Reuters.utils.getIframeObj=function(a){try{return document.frames?document.frames(a).document:document.getElementById(a).contentDocument}catch(b){return null}};
Reuters.utils.printStackTrace=function(){var a=[],b=false;try{c.dont.exist+=0}catch(d){if(d.stack){for(var b=d.stack.split("\n"),c=0,e=b.length;c<e;c++)b[c].match(/^\s*[A-Za-z0-9\-_\$]+\(/)&&a.push(b[c]);a.shift();b=true}else if(window.opera&&d.message){b=d.message.split("\n");c=0;for(e=b.length;c<e;c++)if(b[c].match(/^\s*[A-Za-z0-9\-_\$]+\(/)){var f=b[c];b[c+1]&&(f+=" at "+b[c+1],c++);a.push(f)}a.shift();b=true}}if(!b)for(c=arguments.callee.caller;c;)b=c.toString(),b=b.substring(b.indexOf("function")+
8,b.indexOf("("))||"anonymous",a.push(b),c=c.caller;try{console.debug("stacktrace: %o",a.join("nn"))}catch(g){}};Reuters.utils.submitSearch=function(){if(arguments.length==0)var a=document.getElementById("searchfield"),b=Reuters.utils.newsOrStockSearchText;else a=document.getElementById(arguments[0]),b=arguments[1];a=a.value;return a==""||a==b?false:true};Reuters.utils.submitSearchNews=function(){var a=document.getElementById("newsSearchField").value;return a==""||a=="Keyword"?false:true};
Reuters.utils.submitSearchStocks=function(){var a=document.getElementById("stockSearchField").value;return a==""||a=="Symbol"?false:true};Reuters.utils.submitSearchMedia=function(){var a=document.getElementById("multimediaSearchfield").value;return a==""||a=="Search Multimedia"?false:true};Reuters.utils.submitSearchVideo=function(){var a=document.getElementById("videoSearchField").value;return a==""||a=="Search Videos"?false:true};
Reuters.utils.handleCommerceSurveyCheckResult=function(a){try{if(a!==void 0&&a.checkResult!==void 0&&a.checkResult.indexOf("NEED_SURVEY")>-1){var b=a.surveyUrl;if(b!==void 0&&b!="")sucessAssetsUrl=location.protocol+"//"+location.host+"/assets/loyaltysurveysuccess",failedAssetsUrl=location.protocol+"//"+location.host+"/assets/loyaltysurveyfailed",cancelAssetsUrl=location.protocol+"//"+location.host+"/assets/loyaltysurveycancel",b=b+"&success="+encodeURIComponent(sucessAssetsUrl)+"&failed="+encodeURIComponent(failedAssetsUrl)+
"&cancel="+encodeURIComponent(cancelAssetsUrl),Reuters.utils.showOverlayCurtain(500,510,100).innerHTML='<div class="closer" onclick="Reuters.utils.closeLogin()"></div><iframe id="loginFrame" src="'+b+'" width="490" height="500" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe>'}}catch(d){YAHOO.util.Cookie.remove("commerceLastSurvey"),trace("handle commerce survey check result error:"+d)}};
Reuters.utils.doCommerceSurveyCheck=function(){if(Reuters.utils.isLoggedIn()==true&&!(typeof YAHOO!="undefined"&&YAHOO.util.Cookie.get("commerceLastSurvey")!=null)){var a=Reuters.info===null||typeof Reuters.info==="undefined"?"us":Reuters.utils.getRealEdition(Reuters.info.edition,"us");try{var b="https://commerce."+a+".reuters.com/services/surveycheck?key="+encodeURIComponent(YAHOO.util.Cookie.get("customerId"))+"&callback=Reuters.utils.handleCommerceSurveyCheckResult";Reuters.utils.loadScript("commerceSurveyModal",
b)}catch(d){trace("commerce survey check error:"+d)}}};if(_tr_commerce_loyalty_survey_checking_flag==null||_tr_commerce_loyalty_survey_checking_flag=="undefined")var _tr_commerce_loyalty_survey_checking_flag=false;location.pathname.indexOf("/assets/")!=0&&_tr_commerce_loyalty_survey_checking_flag!=true&&(Reuters.utils.addLoadEvent(Reuters.utils.doCommerceSurveyCheck),_tr_commerce_loyalty_survey_checking_flag=true);
Reuters.utils.setInfoCookie=function(){var a="US";if(typeof Reuters.info!="undefined"&&Reuters.info.edition!="BETAUS")a=Reuters.info.edition;YAHOO.util.Cookie.setSub("info","edition",a,{domain:"reuters.com"})};Reuters.utils.loadScript("errorPage","/resources_v2/js/rcom-wt-mlt.js");Reuters.utils.regMouseEventsVideoAsThumbnail=function(a){$("#embedVideo_"+a.toString()).mouseover(function(){Reuters.utils.mouseoverVideoAsIframe(this)});$("#embedVideo_"+a.toString()).mouseout(function(){Reuters.utils.mouseoutVideoAsIframe(this)})};
Reuters.utils.loadVideoAsThumbnail=function(a){$("#videoIframe_"+a.toString()).parent().html(Reuters.utils["originalVideoThumb_"+a.toString()]);Reuters.utils.regMouseEventsVideoAsThumbnail(a)};Reuters.utils.loadVideoAsIframe=function(a,b){Reuters.utils["originalVideoThumb_"+b.toString()]=$(a).parent().html();a.parentNode.innerHTML='<iframe src="/assets/iframes/videoBeta?videoId='+b+'" border="0" frameborder="0" scrolling="no" framespacing="0" height="215" width="380" id="videoIframe_'+b+'"></iframe>'};
Reuters.utils.mouseoverVideoAsIframe=function(a){$(a).find(".playhead").addClass("over")};Reuters.utils.mouseoutVideoAsIframe=function(a){$(a).find(".playhead").removeClass("over")};Reuters.utils.getRealEdition=function(a,b){var d=a.toLowerCase();d.search(/betaus/i)>=0?d=b:d.search(/betacn/i)>=0?d="cn":d.search(/betajp/i)>=0&&(d="jp");return d};