//tealium universal tag - utag.4 ut4.0.201512031840, Copyright 2015 Tealium.com Inc. All Rights Reserved.
try{if(!utag.libloader){utag.libloader=function(src,handler,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;if(typeof handler=='function'){b.handlerFlag=0;b.onreadystatechange=function(){if((this.readyState=='complete'||this.readyState=='loaded')&&!b.handlerFlag){b.handlerFlag=1;handler()}};b.onload=function(){if(!b.handlerFlag){b.handlerFlag=1;handler()}};a.getElementsByTagName('head')[0].appendChild(b)}}};(function(id,loader,u){u=utag.o[loader].sender[id]={};u.ev={'view':1};u.map={"_siteId":"siteid","_sitePrimaryRsid":"rsid","_pageType":"pagetype","_topicPrimaryName":"topic","_topicPrimaryId":"topicguid","_articleId":"assetguid","_articleTitle":"assettitle","_articleType":"assettype","_authorPrimaryId":"authorid","_authorPrimaryName":"author","_articlePubDate":"pubdate","_pageViewGuid":"viewguid","_collectionPrimaryId":"colguid","_topicBreadCrumb":"topicbrcrm","_deviceType":"devicetype","_siteType":"sitetype","_siteTypeDevice":"v21","_ctype":"ctype","_cval":"cval"};u.extend=[function(a,b){if(a=="view"&&b['pageType']=="video_share"){return false;}},function(a,b){if(b['pageType']=='front_door'||b['pageType']=='product_main'){DW.tagYahoo=false;}},function(a,b){try{if(1){b['_ctype']='viewguid';b['_cval']=b['pageViewGuid']}}catch(e){utag.DB(e)}},function(a,b){annotateLinks=function(e){var links=document.getElementsByTagName("a");var link_cnt=links.length;var oldTagLevels=DW.tagLevels;for(x=0;x<link_cnt;x++){var a=links[x];var tag=DW.buildTag(a);a.setAttribute("data-s-object-id",tag);}
DW.tagLevels=oldTagLevels;}
jQuery(window).load(function(){annotateLinks();});}];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!="undefined"){var data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};for(d in utag.loader.GV(u.map)){if(typeof b[d]!='undefined'){e=u.map[d].split(',');for(f=0;f<e.length;f++){data[e[f]]=b[d]}}}
dw_callback=function(){u.initialized=true;DW.pageParams=data;DW.tagComscore=false;DW.tagNielsen=false;DW.trackClicks(DW.noTagClickHandler);DW.clear();}
if(!u.initialized){if(document.location.protocol=="http:"){utag.libloader("http://dw.cbsimg.net/js/cbsi/ds.js",dw_callback);}else{utag.libloader("https://dw.cbsi.com/js/cbsi/ds.js",dw_callback);}}else{dw_callback();}}};try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('4','cbsi.cnetglobalsite');}catch(e){}