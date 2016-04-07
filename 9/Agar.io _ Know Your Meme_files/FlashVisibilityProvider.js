EBG.declareNamespace("RichModules"),EBG.RichModules.FlashVisibilityProvider=function(i,t){EBG.callSuperConstructor(EBG.RichModules.FlashVisibilityProvider,this,[i,t]);try{this.maxVisibilityArea=t.width*t.height,this.pixelContainer=this._writeFlashRenderPixels(),this._subscribeToEvents()}catch(e){EBG.log.error("Error while constructing flash provider: "+e.description)}},EBG.RichModules.FlashVisibilityProvider.prototype={name:"Flash",pixelContainerId:null,pixels:[],maxVisibilityArea:0,_calculationTimeOut:!1,_isReady:!1,_loadedPixelsCounter:0,pixelCountPerAxis:5,_calculateVisibilityPercentage:function(){if(!this._isReady)return-1;var i=0;if(this.maxVisibilityArea=(this.adConfig.width-2)*(this.adConfig.height-2),EBG.adaptor.isPageVisible()){for(var t={top:this.adConfig.height-2,left:this.adConfig.width-2,bottom:0,right:0},e=EBG.filterArray(this.pixels,function(i){return i.isVisible}),s=0;s<e.length;s++){var a=e[s];t.left=Math.min(t.left,a.X),t.right=Math.max(t.right,a.X),t.top=Math.min(t.top,a.Y),t.bottom=Math.max(t.bottom,a.Y)}t.top<t.bottom&&t.left<t.right&&(i=Math.round(100*((t.bottom-t.top)*(t.right-t.left)/this.maxVisibilityArea)))}return i},_calculateVisibilityPercentageByAlgorithem:function(i,t){return 100*(1-(i+(t-i*t)))},_getViewPortMetrics:function(){return null},getAxisHiddenAreaPercent:function(i,t){for(var e=0,s=0;s<this.pixels.length;s++)this.pixels[s].axis!=i||this.pixels[s].isVisible||(e+=t);return e/this.maxVisibilityArea},_handlePixelMessage:function(args){var data={};if(args.length>0)for(var argsArr=args.split(","),paramArr=["id","isVisible","axis"],i=0;i<argsArr.length;i++){var value=argsArr[i];data[paramArr[i]]='"'==value.charAt(0)||"'"==value.charAt(0)||"false"==value||"true"==value?eval(value):value}for(var i=0;i<this.pixels.length;i++)if(this.pixels[i].id==data.id){this.pixels[i].isVisible=!("1"!==data.isVisible),this.pixels[i].loaded||(this.pixels[i].loaded=!0,this._loadedPixelsCounter++),this._triggerCalculation();break}},_writeFlashRenderPixels:function(){EBG.log.startGroup("FlashVisibilityManager._writeFlashRenderPixels");var i=EBG.adaptor.getPositioningById(this._resObjId,!0,this.adConfig.actualServingMode),t=EBG.adaptor.generateElementId("VisibilityDiv",this.adConfig.uid),e={tagName:EBG.Adaptors.TagNames.DIV,attributes:{id:t,dir:"ltr",style:{position:"absolute",width:EBG.px(this.adConfig.width),height:EBG.px(this.adConfig.height),top:EBG.px(i.Y),left:EBG.px(i.X),"z-index":-10}},children:this._createPixelsJson()};return void 0!==this.adConfig.display&&(e.attributes.style.display=this.adConfig.display),EBG.adaptor.addInlineDOM(e,this.adConfig.placeHolderId),EBG.log.endGroup(),EBG.adaptor.getElementById(t)},_createPixelsJson:function(){var i=this._getPixelCordinates();if(!i||0==i.length)throw"could not get cordinates for creating render pixels";for(var t,e,s=[],a=0;a<i.length;a++)t=i[a],e=this._resObjId+"pixel"+t.X+":"+t.Y,s.push(this._buildRenderPixelJson(e,t.axis,t.X,t.Y)),this.pixels.push({id:e,axis:t.axis,X:t.X,Y:t.Y,isVisible:!1,loaded:!1});return s.push(this._createScriptTag()),s},_createScriptTag:function(){var i="handlePixel_"+this.adConfig.uid,t=EBG.format("EBG.ads['{0}'].visibilityMgr._visibilityProvider._handlePixelMessage",this.adConfig.uid),e=EBG.format("function {0}(args)",i);e+=EBG.format("{ try{ if(!args||args=='null')args=''; return {0}(args);}catch(e){if(window.mmFSExceptionAlert)mmFSExceptionAlert('Command: '+command+'\\nargs: '+args.toString()+'\\n\\nexception in DoFS func:\\n'+e.message)}}",t);var s={tagName:EBG.Adaptors.TagNames.SCRIPT,text:e};return s},_getPixelCordinates:function(){for(var i=[],t=(this.adConfig.width-2)/(this.pixelCountPerAxis-1),e=1,s=1;s<this.pixelCountPerAxis-1;s++)i.push({X:t*s+1,Y:1,axis:"X"}),i.push({X:t*s+1,Y:this.adConfig.height-1,axis:"X"});t=(this.adConfig.height-2)/(this.pixelCountPerAxis-1),e=1;for(var s=1;s<this.pixelCountPerAxis-1;s++)i.push({X:1,Y:t*s+1,axis:"Y"}),i.push({X:this.adConfig.width-1,Y:t*s+1,axis:"Y"}),e=Math.abs(e-this.adConfig.width);return i},_buildRenderPixelJson:function(i,t,e,s){var a={play:"true",resId:this.adConfig.uid,resPath:this.adConfig.bigSDir+"/Res/Assets/Pixel"+EBG.flashPixelVer+"/pixel.swf",unique:0,wmode:"transparent",tagName:EBG.Adaptors.TagNames.OBJECT,attributes:{id:i,dir:"ltr",name:i,style:{position:"absolute",textAlign:"left",width:"1px",height:"1px",left:EBG.px(e),top:EBG.px(s),"z-index":1e3},codebase:EBG.format("{0}download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#",EBG.protocol),version:EBG.format("{0},0,0,0",this.adConfig.flashVer)},params:{play:"true",wmode:"transparent",menu:"false",flashVars:"ebAdUID="+this.adConfig.uid+"&id="+i+"&axis="+t,allowScriptAccess:"always",allowFullScreen:"true"}};return this._isSupportShockwave()?(a.attributes.type="application/x-shockwave-flash",a.attributes.data=a.resPath):(a.attributes.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",a.params.movie=a.resPath),a},_isSupportShockwave:function(){var i=!0;return(EBG.adaptor.browser.isIE()&&EBG.adaptor.browser.getVersion()<11||EBG.adaptor.browser.getVersion()>10&&(this.adConfig.displayWin||EBG.adaptor.getDisplayWin()).document.documentMode<9)&&(i=!1),i},_subscribeToEvents:function(){EBG.callSuperFunction(EBG.RichModules.BasicVisibilityProvider,this,"_subscribeToEvents"),EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_RESIZE,this._repositonPixels,this))},_repositonPixels:function(){var i=EBG.adaptor.getPositioningById(this._resObjId,!0,this.adConfig.actualServingMode);this.pixelContainer.style.top=EBG.px(i.Y),this.pixelContainer.style.left=EBG.px(i.X)},updateResourceObjId:function(i){EBG.callSuperFunction(EBG.RichModules.FlashVisibilityProvider,this,"updateResourceObjId",[i]),this._repositonPixels()},_triggerCalculation:function(){if(clearInterval(this._intervalHandler),this._checkPixelsLoaded()&&!this._calculationTimeOut){var i=this;this._calculationTimeOut=setTimeout(function(){i._calculationTimeOut=null;var t=i._calculateVisibilityResult();i._dispatchCheckVisibility(t)},600)}},_checkPixelsLoaded:function(){return this._isReady||(this._isReady=2*this.pixelCountPerAxis==this._loadedPixelsCounter),this._isReady},start:function(){EBG.callSuperFunction(EBG.RichModules.FlashVisibilityProvider,this,"start"),this._triggerCalculation()}},EBG.declareClass(EBG.RichModules.FlashVisibilityProvider,EBG.RichModules.BasicVisibilityProvider);