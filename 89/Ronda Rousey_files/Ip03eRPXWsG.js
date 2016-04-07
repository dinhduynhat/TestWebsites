/*!CK:2698323451!*//*1458837925,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["toBNy"]); }

__d('P2PBannerStore',['invariant','EventEmitter','P2PActionConstants','P2PAPI','P2PDispatcher'],function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k,l={},m=false,n=false;i=babelHelpers.inherits(o,c('EventEmitter'));j=i&&i.prototype;function o(){j.constructor.call(this);k=c('P2PDispatcher').register(this.onEventDispatched.bind(this));}o.prototype.onEventDispatched=function(p){var q=p.type,r=p.data;switch(q){case c('P2PActionConstants').BANNER_STATES_UPDATED:this.handleBannerStatesUpdated(r);this.emit('change');break;case c('P2PActionConstants').BANNER_DISMISSED:this.handleBannerDismissed(r);this.emit('change');break;case c('P2PActionConstants').BANNER_COMPLETED:this.handleBannerCompleted(r);this.emit('change');break;}};o.prototype.handleBannerStatesUpdated=function(p){m=true;l=p;};o.prototype.handleBannerDismissed=function(p){var q=this.getBannerState(p);q.hasBeenDismissed=true;};o.prototype.shouldShowBanner=function(p){var q;if(!n){c('P2PAPI').getBannerStates();n=true;return false;}if(!m)return false;q=this.getBannerState(p);return (q.eligible&&!q.hasBeenDismissed);};o.prototype.handleBannerCompleted=function(p){var q=this.getBannerState(p);q.eligible=false;};o.prototype.getBannerState=function(p){var q=l[p];!q?h(0):void 0;return q;};f.exports=new o();},null);
__d('P2PPlatformContextStore',['Arbiter','ChannelConstants','CurrentUser','EventEmitter','ImmutableObject','Map','MercuryIDs','P2PActions','P2PActionConstants','P2PAPI','P2PChannelType','P2PDispatcher'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=new (c('Map'))(),k=new (c('Map'))(),l=null;h=babelHelpers.inherits(m,c('EventEmitter'));i=h&&h.prototype;function m(){i.constructor.call(this);l=c('P2PDispatcher').register(this.onEventDispatched.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType(c('P2PChannelType').PLATFORM_CONTEXT_NEW),this.handleChannelUpdated.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType(c('P2PChannelType').PLATFORM_CONTEXT_ELIGIBLE_ITEM_UPDATED),this.handleChannelChanged.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType(c('P2PChannelType').PLATFORM_CONTEXT_DISMISSED),this.handleChannelChanged.bind(this));}m.prototype.onEventDispatched=function(n){var o=n.type,p=n.data;switch(o){case c('P2PActionConstants').PLATFORM_CONTEXT_ADDED:this.handlePlatformContextAdded(p);this.emit('change');break;case c('P2PActionConstants').PLATFORM_CONTEXT_ADDED_ERROR:this.handlePlatformContextAddedError(p);this.emit('change');break;case c('P2PActionConstants').PLATFORM_CONTEXT_SAVE_ERRORS_CLEARED:this.handlePlatformContextSaveErrorsCleared(p);this.emit('change');break;case c('P2PActionConstants').PLATFORM_CONTEXT_BANNER_DISMISSED:this.handlePlatformContextBannerDisimssed(p);this.emit('change');break;case c('P2PActionConstants').PLATFORM_CONTEXT_PRODUCT_ITEM_SOLD:this.handlePlatformContextProductItemSold(p);this.emit('change');break;case c('P2PActionConstants').PLATFORM_CONTEXT_CHANGED:this.handlePlatformContextChanged(p);this.emit('change');break;}};m.prototype.handleChannelUpdated=function(n,o){var p=o.obj;c('P2PActions').addPlatformContext(p);};m.prototype.handleChannelChanged=function(n,o){var p=o.obj;c('P2PActions').platformContextChanged(p);};m.prototype.handlePlatformContextAdded=function(n){this.setPlatformContext(n);};m.prototype.handlePlatformContextAddedError=function(n){k.set(n.itemID,n.error);};m.prototype.handlePlatformContextSaveErrorsCleared=function(n){k['delete'](n);};m.prototype.handlePlatformContextChanged=function(n){j.forEach(function(o,p){if(o.id===n.id)this.setPlatformContext(n);}.bind(this));};m.prototype.handlePlatformContextBannerDisimssed=function(n){j.forEach(function(o,p){if(o.id===n){if(this.isViewerSellerForPlatformContext(o)){o=c('ImmutableObject').set(o,{banner:c('ImmutableObject').set(o.banner,{shouldShowToSeller:false})});}else if(this.isViewerBuyerForPlatformContext(o))o=c('ImmutableObject').set(o,{banner:c('ImmutableObject').set(o.banner,{shouldShowToBuyer:false})});j.set(p,o);}}.bind(this));};m.prototype.handlePlatformContextProductItemSold=function(n){j.forEach(function(o,p){if(o.id===n){o=c('ImmutableObject').set(o,{product:c('ImmutableObject').set(o.product,{isAvailable:false})});j.set(p,o);}});};m.prototype.setPlatformContext=function(n){var o=new (c('ImmutableObject'))(n);o=c('ImmutableObject').set(o,{product:new (c('ImmutableObject'))(n.product)});o=c('ImmutableObject').set(o,{banner:new (c('ImmutableObject'))(n.banner)});j.set(this.getOtherUserIDForPlatformContext(n),o);};m.prototype.shouldShowBanner=function(n){var o,p;if(!n)return false;o=this.getPlatformContextByOtherUserID(n);if(!o){j.set(n,new (c('ImmutableObject'))({}));c('P2PAPI').getPlatformContextByOtherUserID({otherUserID:n});return false;}p=o.banner;return !!(this.isViewerSellerForPlatformContext(o)&&p.shouldShowToSeller||this.isViewerBuyerForPlatformContext(o)&&p.shouldShowToBuyer);};m.prototype.isViewerSellerForPlatformContext=function(n){return n.sellerID===c('CurrentUser').getID();};m.prototype.isViewerBuyerForPlatformContext=function(n){return n.buyerID===c('CurrentUser').getID();};m.prototype.getOtherUserIDForPlatformContext=function(n){return (this.isViewerSellerForPlatformContext(n)?n.buyerID:n.sellerID);};m.prototype.getPlatformContextByOtherUserID=function(n){return j.get(n);};m.prototype.getThreadIDFromPlatformContext=function(n){var o=this.getOtherUserIDForPlatformContext(n);return c('MercuryIDs').getThreadIDFromUserID(o);};m.prototype.getSaveError=function(n){return k.get(n);};m.prototype.getDispatchToken=function(){return l;};f.exports=new m();},null);
__d('P2PChatThreadBannerContainer.react',['P2PBannerStore','P2PBannerType','P2PProductItemChatThreadBanner.react','P2PPlatformContextStore','P2PRequestSenderNUXChatThreadBanner.react','P2PSenderNUXChatThreadBanner.react','StoreAndPropBasedStateMixin','React'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'P2PChatThreadBannerContainer',mixins:[c('StoreAndPropBasedStateMixin')(c('P2PBannerStore'),c('P2PPlatformContextStore'))],propTypes:{isVisible:h.bool,otherUserID:h.string,threadID:h.string},statics:{calculateState:function(j){return {productItemBannerShown:c('P2PPlatformContextStore').shouldShowBanner(j.otherUserID),requestSenderNUXBannerShown:c('P2PBannerStore').shouldShowBanner(c('P2PBannerType').REQUEST_SENDER_NUX),senderNUXBannerShown:c('P2PBannerStore').shouldShowBanner(c('P2PBannerType').SENDER_NUX)};}},renderRequestSenderNUXBanner:function(){if(!this.props.threadID||!this.props.isVisible)return null;return (c('React').createElement(c('P2PRequestSenderNUXChatThreadBanner.react'),{threadID:this.props.threadID}));},renderSenderNUXBanner:function(){if(!this.props.threadID||!this.props.isVisible)return null;return (c('React').createElement(c('P2PSenderNUXChatThreadBanner.react'),{threadID:this.props.threadID}));},renderProductItemBanner:function(){var j=this.props.otherUserID,k;if(j)k=c('P2PPlatformContextStore').getPlatformContextByOtherUserID(j);if(!k)return null;return (c('React').createElement(c('P2PProductItemChatThreadBanner.react'),{platformContext:k}));},render:function(){var j;if(this.state.senderNUXBannerShown){j=this.renderSenderNUXBanner();}else if(this.state.requestSenderNUXBannerShown){j=this.renderRequestSenderNUXBanner();}else if(this.state.productItemBannerShown)j=this.renderProductItemBanner();return (c('React').createElement('div',null,j));}});f.exports=i;},null);