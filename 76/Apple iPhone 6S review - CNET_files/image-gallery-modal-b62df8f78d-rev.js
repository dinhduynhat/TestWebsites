define(["jquery","managers/components.desktop","version!fly/managers/debug","version!fly/managers/gpt","managers/page-vars","managers/tealium","managers/guid","managers/ad","version!fly/components/base"],function(t,e,a,o,i,s,r,l){a=a.init("imageGalleryModal"),t.widget("cnet.imageGalleryModal",t.fly.base,{options:{domain:"//cnet1.cbsistatic.com",assetsPath:"/fly/"+i.assetsVersion.version,cssPath:"/css/image_gallery/single.desktop.css",url:"",index:1},cssLoadPath:"",url:"",hostUrl:"",hostState:{},hostScrollTop:0,hostAdData:{},hostGuid:0,hasSkin:!1,hasSkinLockNarrow:!1,isHostGallery:!1,_create:function(){var e=this;this._setup(),"www.theroadshow.com"!==window.location.hostname&&this.$element.on("click",function(a){e.cssLoadPath="prod"==i.environment?e.options.domain+e.options.assetsPath+e.options.cssPath:e.options.cssPath,a.preventDefault(),e._clickControl();for(var o="",s=t(a.target).closest("[section],[id]"),r=0;3>r;r++)s.attr("section")?o=s.attr("section")+"|"+o:s.attr("id")&&(o=s.attr("id")+"|"+o),s=s.parent().closest("[section],[id]");o=o.slice(0,o.length-1),window.dwTag=o})},_storeHostPageData:function(){this.hostUrl=window.location.href,this.hostState=window.history.state,this.hostScrollTop=t(window).scrollTop(),this.hostAdData=t.extend(!0,{},i.ads.data),this.hostTracking=t.extend(!0,{},i.tracking),this.hostImage=t('meta[property="og:image"]').attr("content").trim(),this.hostGuid=r.getViewGuid(),this.url=""!==this.options.url?this.options.url:this.$element.attr("href")},_clickControl:function(){var n=this,d=t("body");if($htmlTag=t("html"),t("#bodyWrapper").length>0)a.log("IGM: replacing gallery modal"),t("#bodyWrapper").data("persist","true"),t("#bodyWrapper .closeModal").trigger("click"),$htmlTag.removeClass("overflow"),t("#bodyWrapper").addClass("loadingArea"),t("#bodyWrapper #rbSkin").empty();else{a.log("IGM: setting up gallery modal");var c=t("<div id='bodyWrapper' class='loadingArea'><div id='rbSkin'></div></div>");d.append(c),d.addClass("galleryModal"),this._loadCss(this.cssLoadPath,"galleryCSS")}"image_gallery"==i.tracking.data.pageType&&(n.isHostGallery=!0),n._storeHostPageData();var p=window.location.search,h=/ab=.*&/,g=/ab=.*/;h.test(p)?p=p.replace(h,""):g.test(p)&&(p=p.replace(g,"")),t.ajax({url:this.url+p,dataType:"json",context:document.body}).done(function(c){a.log("Gallery loaded"),n.hasSkin=t("body.skinAd").length?!0:!1,n.hasSkinLockNarrow=t("body.skinlocknarrow").length?!0:!1,i.ads.data=c.adData,i.tracking.data=c.trackingData,r.resetViewGuid(),s.init(c.trackingData),l.setupTargeting(),s.trackPageLoad(t.extend(!0,c.trackingData,{viewguid:r.getViewGuid(),title:c.trackingData.photoGalleryTitle,_pageViewGuid:r.getViewGuid(),_topicPrimaryId:c.trackingData.topicId[0],_pageUrl:n.url,pageUrl:n.url,photoGalleryTitle:c.trackingData.photoGalleryTitle,photoGalleryId:c.trackingData.photoGalleryId,photoGalleryType:c.trackingData.articleType,pageName:""!=n.options.url?n.options.url:i.tracking.data._pageName}));var p=t(c.template);0==t("#bodyWrapper #rbSkin").length&&t("#bodyWrapper").append('<div id="rbSkin"></div>'),t("#bodyWrapper #rbSkin").append(p),t("#bodyWrapper").removeClass("loadingArea"),e.process(t("#bodyWrapper"));try{o.init(i.ads.data.gpt),a.log("item.adData: ",i.ads.data.gpt)}catch(h){a.log("gptMgr.init had trouble: ",h)}try{l.loadAds(),a.log("test loadAds")}catch(h){a.log("adMgr.loadAds(); had trouble: ",h)}this.$close=t('[data-item="modal-close"]'),this.$close.on("click",function(){n._closeModal(d,c.trackingData)})}).fail(function(){n.hasSkin||d.removeClass("skinAd"),this.hasSkinLockNarrow||d.removeClass("skinlocknarrow"),d.removeClass("galleryModal"),t("#bodyWrapper").remove(),window.location=n.$element.attr("href")})},_closeModal:function(e,a){this.hasSkin||e.removeClass("skinAd"),s.trackCustomEvent("trackCloseGallery",{_articleTitle:a.photoGalleryTitle,_articleId:a.photoGalleryId,_authorPrimaryName:a.articleAuthorName,_articleType:a.articleType,_pageType:a.pageType,siteSection:a.siteSection,siteEdition:a._siteEdition,_siteTypeDevice:a._siteTypeDevice,_siteHier:a.siteHier,_pageViewGuid:a._pageViewGuid,clickGenericText:"close-gallery"},"trackClick"),i.tracking=this.hostTracking,i.ads.data=this.hostAdData,window.history.replaceState&&window.history.replaceState(this.hostState,"",this.hostUrl),t('meta[property="og:image"]').attr("content",this.hostImage),t("title").text(this.hostTracking.data._pageTitle),r.resetViewGuid(this.hostGuid),this.hasSkinLockNarrow||e.removeClass("skinlocknarrow"),this.isHostGallery||$htmlTag.removeClass("overflow"),"true"===t("#bodyWrapper").data("persist")?(t("#bodyWrapper #rbSkin").remove(),t("#bodyWrapper").data("persist",null)):(t("#bodyWrapper").remove(),e.removeClass("galleryModal"),t(window).resize(),t(window).scrollTop(this.hostScrollTop))},_loadCss:function(e,a){var o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("id",a),o.setAttribute("href",e),"undefined"!=typeof o&&0==t("#"+a).length&&document.getElementsByTagName("head")[0].appendChild(o)},open:function(){this.cssLoadPath="prod"==i.environment?this.options.domain+this.options.assetsPath+this.options.cssPath:this.options.cssPath,this._clickControl()}})});