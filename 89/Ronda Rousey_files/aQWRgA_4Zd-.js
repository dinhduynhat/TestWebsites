/*!CK:3242791964!*//*1459738862,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["jywnt"]); }

__d('MNCommerceDialogContainer.react',['MNCommerceDialogStateStore','PureStoreBasedStateMixin','React'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').createClass({displayName:'MNCommerceDialogContainer',mixins:[c('PureStoreBasedStateMixin')(c('MNCommerceDialogStateStore'))],statics:{calculateState:function(){var i=c('MNCommerceDialogStateStore').getDialogContainer();return {dialogContainer:i};}},render:function(){var i=this.state.dialogContainer;if(!i)return null;return c('React').createElement(i,null);}});f.exports=h;},null);
__d('P2PDialogStore',['EventEmitter','P2PActionConstants','P2PDispatcher'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j,k={};h=babelHelpers.inherits(l,c('EventEmitter'));i=h&&h.prototype;function l(){i.constructor.call(this);j=c('P2PDispatcher').register(this.onEventDispatched.bind(this));k={dialogClass:null,dialogProps:null};}l.prototype.getState=function(){return k;};l.prototype.onEventDispatched=function(m){var n=m.type,o=m.data;switch(n){case c('P2PActionConstants').DIALOG_SHOWN:k.dialogClass=o.dialogClass;k.dialogProps=o.dialogProps;this.emit('change');break;case c('P2PActionConstants').DIALOG_CLOSED:k.dialogClass=null;k.dialogProps=null;this.emit('change');break;}};f.exports=new l();},null);
__d('P2PDialogContainer.react',['P2PDialogStore','React','ReactLayeredComponentMixin'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').createClass({displayName:'P2PDialogContainer',mixins:[c('ReactLayeredComponentMixin')],getInitialState:function(){return c('P2PDialogStore').getState();},componentDidMount:function(){this.dialogStoreSub=c('P2PDialogStore').addListener('change',this.onDialogStoreChange);},componentWillUnmount:function(){if(this.dialogStoreSub){this.dialogStoreSub.remove();this.dialogStoreSub=null;}},onDialogStoreChange:function(){this.setState(c('P2PDialogStore').getState());},renderLayers:function(){if(!this.state.dialogClass)return {};var i=this.state.dialogClass;return {dialog:c('React').createElement(i,this.state.dialogProps)};},render:function(){return null;}});f.exports=h;},null);