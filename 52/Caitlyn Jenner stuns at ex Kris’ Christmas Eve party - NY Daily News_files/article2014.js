function JAN42016(){}var AsideBigger=0;jQuery(document).ready(function(){jQuery(document).scrollTop(0);if(!jQuery("body.wide").length){aAside();}enlarge();aRotatorAll();aRelatedRail();aFonts();fbCount();aQuotations();if(htmlStorage&&typeof localStorage.getItem("aBaseURL")!=="undefined"&&localStorage.getItem("aBaseURL")!==null){jQuery(".a-close").attr("href",localStorage.getItem("aBaseURL"));}if(!jQuery("body.wide").length){if(jQuery("#nydn-aside").height()>jQuery("#a-body").height()){AsideBigger=1;}}aFacebookClick();aTwitter();(function(e,a,f){var c,b=e.getElementsByTagName(a)[0];if(e.getElementById(f)){return;}c=e.createElement(a);c.id=f;c.src="//connect.facebook.net/en_US/sdk.js";b.parentNode.insertBefore(c,b);}(document,"script","facebook-jssdk"));});jQuery(window).load(function(){aRelatedRail();if(!jQuery("body.wide").length){aAside();jQuery(document).scroll(function(a){aAside();});jQuery(window).resize(function(a){aAside();});}});function aSearch(){jQuery("#nydn-search").on("click","dt",function(a){a.stopPropagation();jQuery("#nydn-search dd").slideToggle(300,function(){jQuery(this).parent().toggleClass("on");});jQuery("body").on("click",function(b){if(!jQuery(b.target).is("#nydn-search, #nydn-search-text, #nydn-search-submit, #nydn-search dd")){jQuery("#nydn-search dd").slideUp(300,function(){jQuery(this).parent().removeClass("on");});}});});}function scrollNext(){if(!jQuery("#next-btn").length){return;}jQuery(window).scroll(function(){var c=jQuery("#a-body article").length;var b=jQuery(this).scrollTop();var a=jQuery(window).height();function e(){var f=jQuery(d).offset().top-a;if(b>f){jQuery("#next-btn").show("slide",{direction:"right"},300);}else{jQuery("#next-btn").hide("slide",{direction:"right"},300);}}if(c){var d=jQuery("#a-body article p:last");e();}else{var d=jQuery(".story-body p:last");e();}});jQuery("#next-btn").on("click","span",function(){jQuery("#next-btn").hide("slide",{direction:"right"},300,function(){jQuery(this).remove();});});}function aRelatedRail(){if(jQuery("#a-all-related").length){jQuery("body").addClass("aRelatedRailDone");jQuery("#a-body article > .a-module").not(".v").each(function(c){if(jQuery(this).find('iframe[src*="vimeo.com"]').length||jQuery(this).find('iframe[src*="youtube.com"]').length||jQuery(this).find('iframe[src*="hulu.com"]').length||jQuery(this).find("object#flashObj").length||jQuery(this).find(".ndn_embed").length){jQuery(this).addClass("video");}});var b=jQuery("#a-body article > .a-module").not(".h");var a=b.add("#a-body article > .a-module.h.video");aModNo=b.length+jQuery("#a-body article > .a-module.h.video").length;aRelNo=jQuery("#a-all-related > div").length;aRelDone=0;lowPos=0;setTimeout(function(){for(i=0;i<aModNo&&aRelDone<aRelNo;i++){jaMod=a.eq(i);jaModNext=a.eq(i+1);lowPos=jaMod.position().top+jaMod.outerHeight(true);if(jaModNext.length){aModH=jaModNext.position().top-(jaMod.position().top+jaMod.outerHeight(true)+21);}else{aModH=jQuery("#a-body article").outerHeight(true)-(jaMod.position().top+jaMod.outerHeight(true)+21);
}for(j=aRelDone;j<aRelNo&&aRelDone<aRelNo;j++){jrMod=jQuery("#a-all-related > div").eq(j);aRelH=jrMod.outerHeight(true);if((aModH-21)>aRelH){jrMod.css("opacity","1").css("top",lowPos+"px");aModH=aModH-aRelH;lowPos=lowPos+aRelH+6;aRelDone++;}else{break;}}}},500);}}function aFonts(){jQuery("#a-font li").on("touchstart click",function(){jQuery("#a-font li").removeClass("on");jQuery(this).addClass("on");switch(jQuery(this).index()){case 0:jQuery("#a-body").attr("class","small");break;case 1:jQuery("#a-body").attr("class","medium");break;case 2:jQuery("#a-body").attr("class","large");break;}});}function aStickyNav(){}function aSplitters(){jQuery(".split2, .split3").each(function(){var a=0,b=jQuery(this).children(".a-caption").length;for(i=1;i<jQuery(this).children(".a-image").children("img").length;i++){if(b){jQuery(this).children(".a-image").children(".a-caption").hide();}a=jQuery(this).children(".a-image").children("img").eq(a).height()>jQuery(this).children(".a-image").children("img").eq(i).height()?i:a;}aShortestH=(jQuery(this).find("img").eq(a).height()==0)?jQuery(this).find("img").eq(1).height():jQuery(this).find("img").eq(a).height();jQuery(this).find("img").wrap("<ins style='height:"+aShortestH+"px;'></ins>");});}function aSplitterRotator(b){var c=jQuery("#a-overlay-module .a-module");var f=jQuery("#a-overlay-module figure").size();var e=b.parent("figure").index();var d=500;jQuery("#a-overlay-module figure").hide();jQuery("#a-overlay-module figure").eq(e).show();jQuery(".split2 > .a-credit, .split3 > .a-credit ").hide();c.find("figure, .splitter.next").on("touchstart  click",function(h){h.preventDefault();h.stopPropagation();g();});c.find(".splitter.prev").on("touchstart  click",function(h){h.preventDefault();h.stopPropagation();a();});jQuery(document).bind("keydown",function(h){if(h.keyCode==37){a();}if(h.keyCode==39){g();}});setTimeout(function(){var h=jQuery("#a-overlay-module .a-images figure:eq("+e+")").height();jQuery("#a-overlay-module .a-images").css("height",h+"px");},300);function a(){if(!c.find("figure").is(":animated")){SlideSelectedPrevious=e-1;if(SlideSelectedPrevious<0){SlideSelectedPrevious=f-1;}if(SlideSelectedPrevious!=0){jQuery("#a-overlay-module figure:eq("+e+")").stop().hide("slide",{direction:"right"},d);}jQuery("#a-overlay-module figure:eq("+SlideSelectedPrevious+")").stop().show("slide",{direction:"left"},d);if(SlideSelectedPrevious==0){jQuery("#a-overlay-module figure:eq("+e+")").stop().hide("slide",{direction:"right"},d);}var h=jQuery("#a-overlay-module figure").eq(SlideSelectedPrevious).height();jQuery("#a-overlay-module .a-images").animate({height:h},d);e=SlideSelectedPrevious;}}function g(){if(!c.find("figure").is(":animated")){SlideSelectedNext=e+1;if(SlideSelectedNext>f-1){SlideSelectedNext=0;}if(SlideSelectedNext!=0){jQuery("#a-overlay-module figure:eq("+e+")").stop().hide("slide",{direction:"left"},d);}jQuery("#a-overlay-module figure:eq("+SlideSelectedNext+")").stop().show("slide",{direction:"right"},d);if(SlideSelectedNext==0){jQuery("#a-overlay-module figure:eq("+e+")").stop().hide("slide",{direction:"left"},d);
}var h=jQuery("#a-overlay-module figure").eq(SlideSelectedNext).height();jQuery("#a-overlay-module .a-images").animate({height:h},d);e=SlideSelectedNext;}}}function aRotatorAll(){jQuery(".a-rotator").each(function(a){aRotator(jQuery(this).attr("id"),0);});}function aRotator(e,m){var k=jQuery("#"+e);var l=k.find("figure").size();var h=0;var c=500;var d=k.find(".figures figure:eq("+h+") .a-credit").clone();var a=k.find(".figures figure:eq("+h+") .a-rotator-caption").clone();k.find(".figures figure:eq("+h+")").css("display","block");if(!k.next(".a-credit").length||k.next(".a-credit").text().length==0){k.after('<span class="a-credit"></span>');if(jQuery(d).length){k.next(".a-credit").replaceWith(d);}}if(!k.nextAll(".a-rotator-caption").length||k.nextAll(".a-rotator-caption").text().length==0){k.next(".a-credit").after(a);if(jQuery(a).length){k.nextAll(".a-rotator-caption").replaceWith(a);}}k.disableSelection();if(k.find(".thumbs li.on").length){h=k.find(".thumbs li.on").index();}if(k.find("b.on").length){h=k.find("b.on").index();}if(jQuery("#bigRotator").length){jQuery("#bigRotator .figures figure").css("display","none");if(k.find(".thumbs li.on").length){h=k.find(".thumbs li.on").index();}if(k.find("b.on").length){h=k.find("b.on").index()-1;}jQuery("#bigRotator .figures figure:eq("+h+")").css("display","block");bigRotatorImgH=jQuery("#bigRotator").find(".figures figure:eq("+h+") img").attr("height");jQuery("#bigRotator").css("height",bigRotatorImgH+"px");}if(k.hasClass("dots")&&!k.find("b").length){k.find(".figures figure").each(function(n){order=jQuery(this).index();jQuery("<b title='"+order+"'></b>").insertBefore("#"+e+" .next");});k.find(".previous + b").addClass("on");}if(k.hasClass("thumbs")&&!k.find(".thumbs li").hasClass("on")){k.find(".thumbs li:first-child").addClass("on");}k.find(".figures figure").on("touchstart",function(n){n.preventDefault();n.stopPropagation();if(!k.find(".figures figure").is(":animated")){SlideSelectedNext=h+1;if(SlideSelectedNext>l-1){SlideSelectedNext=0;}if(SlideSelectedNext!=0){k.find(".figures figure:eq("+h+")").stop().hide("slide",{direction:"left"},c);}k.find(".figures figure:eq("+SlideSelectedNext+")").stop().show("slide",{direction:"right"},c);if(SlideSelectedNext==0){k.find(".figures figure:eq("+h+")").stop().hide("slide",{direction:"left"},c);}h=SlideSelectedNext;b(e);}});jQuery(".a-enlarge").on("touchstart click",function(n){n.preventDefault();n.stopImmediatePropagation();aCreditText=k.find(".figures figure:eq("+h+") .a-credit").text();aCaptionText=k.find(".figures figure:eq("+h+") .a-rotator-caption").text();setTimeout(function(){jQuery("#bigRotator ~ .a-credit").text(aCreditText);jQuery("#bigRotator ~ .a-rotator-caption").text(aCaptionText);},500);});k.find(".next, figure").on("touchstart click",function(n){n.preventDefault();n.stopPropagation();if(jQuery("#bigRotator .figures").length){jQuery("#bigRotator .figures").css("overflow","hidden");setTimeout(function(){jQuery("#bigRotator .figures").css("overflow","visible");
},c);}if(!k.find(".figures figure").is(":animated")){SlideSelectedNext=h+1;if(SlideSelectedNext>l-1){SlideSelectedNext=0;}if(SlideSelectedNext!=0){k.find(".figures figure:eq("+h+")").stop().hide("slide",{direction:"left"},c);}k.find(".figures figure:eq("+SlideSelectedNext+")").stop().show("slide",{direction:"right"},c);if(SlideSelectedNext==0){k.find(".figures figure:eq("+h+")").stop().hide("slide",{direction:"left"},c);}h=SlideSelectedNext;b(e);}});k.find(".previous").on("touchstart click",function(n){n.preventDefault();n.stopPropagation();if(jQuery("#bigRotator .figures").length){jQuery("#bigRotator .figures").css("overflow","hidden");setTimeout(function(){jQuery("#bigRotator .figures").css("overflow","visible");},c);}if(!k.find(".figures figure").is(":animated")){SlideSelectedPrevious=h-1;if(SlideSelectedPrevious<0){SlideSelectedPrevious=l-1;}if(SlideSelectedPrevious!=0){k.find(".figures figure:eq("+h+")").stop().hide("slide",{direction:"right"},c);}k.find(".figures figure:eq("+SlideSelectedPrevious+")").stop().show("slide",{direction:"left"},c);setTimeout(function(){jQuery("#bigRotator .figures").css("overflow","visible");},c);if(SlideSelectedPrevious==0){k.find(".figures figure:eq("+h+")").stop().hide("slide",{direction:"right"},c);}h=SlideSelectedPrevious;b(e);}});k.find(".controls b").on("touchstart click",function(n){n.preventDefault();n.stopPropagation();k.find(".figures figure:eq("+h+")").fadeOut(c);h=jQuery(this).index()-1;g(e);});k.find(".thumbs li").on("touchstart  click",function(n){n.preventDefault();n.stopPropagation();k.find(".figures figure:eq("+h+")").fadeOut(c);h=jQuery(this).index();g(e);});function g(n){k.find(".figures figure:eq("+h+")").fadeIn(c);b(n);}function f(n){k.find(".figures figure:eq("+h+")").fadeOut(c);h+=1;if(h>l-1){h=0;}g(n);}function b(r){if(jQuery("#bigRotator").length){var p=jQuery("#bigRotator figure").eq(h).find("img").attr("height");jQuery("#bigRotator").animate({height:p},c);}k.find(".controls b").removeClass("on");k.find(".controls b").eq(h).addClass("on");k.find(".thumbs li").removeClass("on");k.find(".thumbs li").eq(h).addClass("on");var n=h;d=k.find(".figures figure:eq("+h+") .a-credit").clone();a=k.find(".figures figure:eq("+h+") .a-rotator-caption").clone();var o=k.find(".figures figure:eq("+h+") .a-credit").length;if(o){k.next(".a-credit").fadeOut(250,function(){d.hide();jQuery(this).replaceWith(d);d.fadeIn(250);});}else{k.next(".a-credit").fadeOut(250,function(){jQuery(this).replaceWith('<span class="a-credit"></span>');});}var q=k.find(".figures figure:eq("+h+") .a-rotator-caption").length;if(q){k.nextAll(".a-rotator-caption").fadeOut(250,function(){a.hide();jQuery(this).replaceWith(a);a.fadeIn(250);});}else{k.nextAll(".a-rotator-caption").fadeOut(250,function(){jQuery(this).replaceWith('<h2 class="a-rotator-caption"></h2>');});}}}function changeURL(){var c=jQuery("#a-overlay-module .a-image img,#bigRotator figure img, #autoBigRotator figure img");var b=$("#bigRotator figure img:visible, #autoBigRotator figure img:visible");
var a=/article_[0-9][0-9][0-9]/;$(b).on("load",function(){jQuery("#bigRotator, #autoBigRotator").height(b.height());});c.each(function(f,d,g){var e=new Image();newString=jQuery(d).attr("src").replace(a,"article_970");jQuery(d).attr("src",newString);e.src=newString;$(e).on("load",function(){jQuery(d).attr("height",e.height);});});}function enlarge(){jQuery(".a-enlarge").unbind("click").on("touchstart click",function(c){aOverlayStart(c);if(jQuery(this).parents(".a-rotator").length){var a=jQuery(this).parents(".a-module").clone();jQuery(a).find(".a-rotator").attr("id","bigRotator").appendTo("#a-overlay-module");aRotator("bigRotator",0);}else{if(jQuery(this).parents(".auto-rotator").length){var a=jQuery(this).parents(".a-module").clone();jQuery(a).find(".auto-rotator").attr("id","autoBigRotator").appendTo("#a-overlay-module");autoRotator("autoBigRotator",0);}else{if(jQuery(this).parents(".a-images").length){var a=jQuery(this).parents(".a-module").clone();jQuery(a).appendTo("#a-overlay-module");jQuery('<span class="splitter prev"></span><span class="splitter next"></span>').appendTo("#a-overlay-module .a-module .a-images");var b=jQuery(this);aSplitterRotator(b);aOverlaySRC();}else{if(jQuery(this).parents(".a-image").length){var a=jQuery(this).parents(".a-module").clone();jQuery(a).appendTo("#a-overlay-module");aOverlaySRC();}else{if(jQuery(this).siblings(".ndnPreview").length){var a=jQuery(this).parents(".a-module").clone();jQuery(a).appendTo("#a-overlay-module");jQuery("#a-overlay-module .ndnPreview").attr("class","ndn_embed").attr("id","ndnVid");ndnPlayer("ndnVid",{"type":"VideoPlayer/Single","trackingGroup":90051,"widgetId":1,"siteSection":"nydailynews","width":970,"height":546,"videoId":jQuery(this).siblings(".ndn_embedPreview").attr("data-config-video-id")});}else{if(jQuery(this).parents(".a-video-preview").length){var a=jQuery(this).parents(".a-module").clone();jQuery(a).appendTo("#a-overlay-module");}}}}}}jQuery("#a-overlay-module").append("<span id='a-close'>Close X</span>");jQuery("#a-overlay").fadeTo(1000,1);changeURL();aOverlayCloseAll(c);});}function aOverlayStart(a){a.preventDefault();jQuery("#a-overlay").remove();jQuery("body").css("background-color","#272727");aOverlayYop=jQuery(document).scrollTop()==0?170:100;aScrollTop=jQuery(document).scrollTop()+aOverlayYop;jQuery("body").append("<div id='a-overlay' style='height:"+jQuery(document).height()+"px'><div id='a-overlay-module' style='top:"+aScrollTop+"px'></div></div>");jQuery(".a-close").fadeOut();}function aOverlayCloseAll(a){jQuery("body").on("touchstart click","#a-close",function(b){aOverlayClose(b);});if(!jQuery("#a-overlay-module figure").length>1){jDocument.bind("keydown",function(b){if(b.which==37){aOverlayClose(b);}});}jDocument.bind("keydown",function(b){if(b.which==27){aOverlayClose(b);}});jQuery("html").on("touchstart click",function(b){if(jQuery(b.target).attr("id")=="a-overlay"){aOverlayClose(b);}});}function aOverlayClose(a){a.preventDefault();jQuery("#a-overlay").fadeOut();
jQuery("body").css("background-color","inherit");jQuery(".a-close").fadeIn();setTimeout(function(){jQuery("#a-overlay").remove();},1000);jQuery(document).unbind("keydown");}function aOverlaySRC(a){jQuery("#a-overlay-module img").each(function(){tempSRC=jQuery(this).attr("src")+"?enlarged";jQuery(this).attr("src",tempSRC);});}function aAside(){var c=jQuery("#nydn-aside"),g=jQuery("#a-body"),f=jQuery("#nydn-main"),e=c.height(),b=g.height(),d=jQuery("#nydn-aside").offset().top,h=jQuery("#nydn-body-top").height()+jQuery("#p-nydn-header").height(),a=f.height();if(e<b||e<a){if(AsideBigger){AsideBigger=0;g.removeClass("anchored").removeClass("docked");}jQuery("body").removeClass("AsideBigger").addClass("AsideSmaller");if(jQuery("#p-nav").length){anchoredLeft=jQuery("#nydn-body").offset().left+10;}else{anchoredLeft=jQuery("#nydn-body").offset().left+670+10;}c.css("left",anchoredLeft+"px");if(g.length||f.length){jDocking=g.length?g:f;}if((jQuery("#p-nav").length)&&(e<jQuery(window).height())){if(jQuery(document).scrollTop()>=h-10){c.addClass("hanging");}else{c.removeClass("hanging");}DhBelow=jDocking.height()-(jQuery(document).scrollTop()-jDocking.offset().top);if(jQuery("#nydn-aside.hanging").height()>=DhBelow){c.addClass("docked");}else{c.removeClass("docked");}}else{if(jQuery(window).height()<=jQuery(document).scrollTop()+jDocking.offset().top+e){if(jQuery(document).scrollTop()+jQuery(window).height()>jDocking.offset().top+e){c.addClass("anchored").css("left",anchoredLeft+"px");}else{c.removeClass("anchored");}if(jQuery(document).scrollTop()+jQuery(window).height()>jDocking.offset().top+jDocking.height()){c.addClass("docked");}else{c.removeClass("docked").css("bottom","0px");}}else{c.removeClass("anchored");}}}else{if(e>b||e>a){jQuery("body").removeClass("AsideSmaller");jQuery("body").addClass("AsideBigger");if(g.length||f.length){jDocking=g.length?g:f;}if(jQuery("#p-nav").length){anchoredLeft=jQuery("#nydn-body").offset().left+335+10;}else{anchoredLeft=jQuery("#nydn-body").offset().left+10;}jDocking.css("left",anchoredLeft+"px");if(jQuery(window).height()<=jQuery(document).scrollTop()+c.offset().top+jDocking.height()){if(jQuery(document).scrollTop()+jQuery(window).height()>c.offset().top+jDocking.height()){jDocking.addClass("anchored").css("left",anchoredLeft+"px");}else{jDocking.removeClass("anchored");}if(jQuery(document).scrollTop()+jQuery(window).height()>c.offset().top+e){jDocking.addClass("docked");}else{jDocking.removeClass("docked").css("bottom","0px");}}else{c.removeClass("anchored");}}}}function aQuotations(){jQuery("blockquote.quotations").prepend("<b><i></i></b>").append("<b><i></i></b>");}function fbCount(){var a=document.getElementById("og_url");jQuery.get("http://graph.facebook.com?ids="+a.getAttribute("content"),function(b){var d=b[a.getAttribute("content")].shares;var c=jQuery("#a-share-top .a-share-facebook");if(d==null){return;}c.after('<li class="fb-count">'+d+"</li>");c.hover(function(){jQuery(".fb-count").css("cssText","background: #1a1a1a !important");
},function(){jQuery(".fb-count").css("cssText","background: #3763C2 !important");});});}function aTwitter(){if(typeof _satellite.track=="function"&&jQuery(".a-share-twitter").length){jQuery(".a-share-twitter a").on("click",function(){_satellite.track("TwitterShare");});}}function aFacebookClick(){if(typeof _satellite.track=="function"&&jQuery(".a-share-facebook").length){jQuery(".a-share-facebook").on("click",function(){_satellite.track("FacebookShare");});}}window.fbAsyncInit=function(){FB.init({appId:107464888913,xfbml:true,version:"v2.1",status:true});var b=document.getElementById("og_url");function a(){return FB.ui({method:"share",href:b.getAttribute("content")});}jQuery(".a-share-facebook").on("click",function(){a();});};