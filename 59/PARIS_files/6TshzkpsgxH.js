/*!CK:2559209352!*//*1459866040,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Jz7wb"]); }

__d('LtgTranslationPreferences.react',['cx','ix','AsyncRequest','ContentTranslationStrings','CSS','Image.react','Link.react','LtgDisableAutoTranslatePreferenceEntry','LtgEditTranslationPreferenceEntry','LtgLanguageSettingsPreferenceEntry','LtgNeverTranslatePreferenceEntry','LtgReportLanguagePreferenceEntry','LtgRatingTranslationPreference.react','LtgScoreFeedbackButton.react','LtgTranslationPreferenceEntryBase','LtgTranslationPreferencesTypedLogger','TranslationRating','MenuSeparator.react','Middot.react','PopoverMenu.react','React','ReactComponentWithPureRenderMixin','ReactXUIMenu','SimpleXUIDialog','TextAreaWithLineLimit.react','TextWithEntities.react','TranslationPreferenceEvent','TranslationTrigger','XUIGrayText.react','XUIMenuStaticItem.react','classWithMixins','highlight','mixin'],function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('ReactXUIMenu').Item,m=[c('TranslationPreferenceEvent').DISABLE_TRANSLATION,c('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION,c('TranslationPreferenceEvent').EDIT_TRANSLATION,c('TranslationPreferenceEvent').REPORT_LANGUAGE,c('TranslationPreferenceEvent').LANGUAGE_SETTINGS];j=babelHelpers.inherits(n,c('classWithMixins')(c('React').Component,c('mixin')(c('ReactComponentWithPureRenderMixin'))));k=j&&j.prototype;n.defaultProps={shouldLog:true,isShowingOriginal:false};function n(o){k.constructor.call(this,o);this.state={content:this.props.translationData.translatedText,rating:c('TranslationRating').UNDEFINED,isShowingOriginal:this.props.isShowingOriginal};}n.prototype.$LtgTranslationPreferences1=function(o){var p=null;switch(o){case c('TranslationPreferenceEvent').DISABLE_TRANSLATION:p=new (c('LtgNeverTranslatePreferenceEntry'))(this.props.translationData);break;case c('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION:p=new (c('LtgDisableAutoTranslatePreferenceEntry'))(this.props.translationData,this.state.isShowingOriginal);break;case c('TranslationPreferenceEvent').LANGUAGE_SETTINGS:p=new (c('LtgLanguageSettingsPreferenceEntry'))(this.props.translationData);break;case c('TranslationPreferenceEvent').EDIT_TRANSLATION:if(this.props.shouldShowEditTranslation)p=new (c('LtgEditTranslationPreferenceEntry'))(this.props.translationData,this.state.isShowingOriginal);break;case c('TranslationPreferenceEvent').REPORT_LANGUAGE:p=new (c('LtgReportLanguagePreferenceEntry'))(this.props.translationData,this.state.isShowingOriginal);break;}if(p===null||!p.getShouldShowPreference())return null;return (c('React').createElement(l,{key:o,value:p},p&&p.getEntryTitle()));};n.prototype.$LtgTranslationPreferences2=function(o,p){if(!p.item.getValue)return;var q=p.item.getValue();if(q.getUseConfirmDialog()){this.$LtgTranslationPreferences3(q);}else if(q.getUseEditableDialog()){this.$LtgTranslationPreferences4(q);}else{this.$LtgTranslationPreferences5(q);if(q.getUseSuccessDialog())this.$LtgTranslationPreferences6(q);}q.log();};n.prototype.$LtgTranslationPreferences3=function(o){c('SimpleXUIDialog').showConfirm(o.getDialogBody(),o.getDialogTitle(),function(p){return p&&this.$LtgTranslationPreferences5(o);}.bind(this));};n.prototype.$LtgTranslationPreferences4=function(o){c('SimpleXUIDialog').showConfirm(c('React').createElement('div',null,c('React').createElement(c('XUIGrayText.react'),{display:'block',size:'small',className:"_1cqx"},c('React').createElement(c('TextWithEntities.react'),{text:this.props.translationData.originalText})),c('React').createElement(c('TextAreaWithLineLimit.react'),{className:"_5d_f _2pig",onChange:function(p){return this.setState({content:p});}.bind(this),defaultValue:this.props.translationData.translatedText,size:'medium'})),o.getDialogTitle(),function(p){if(p){o.setContent(this.state.content);this.$LtgTranslationPreferences5(o);}}.bind(this));};n.prototype.$LtgTranslationPreferences6=function(o){c('SimpleXUIDialog').show(o.getDialogBody(),o.getDialogTitle());};n.prototype.$LtgTranslationPreferences5=function(o){var p=o.getURIForAsyncAction();if(p!==null){new (c('AsyncRequest'))().setURI(p).send();}else o.performAction();};n.prototype.$LtgTranslationPreferences7=function(){if(this.props.originalMessage===null)return;if(this.state.isShowingOriginal){c('CSS').hide(this.props.originalMessage);}else{c('CSS').show(this.props.originalMessage);c('highlight')(this.props.originalMessage);}this.setState({isShowingOriginal:!this.state.isShowingOriginal});this.$LtgTranslationPreferences8(this.state.isShowingOriginal?c('TranslationPreferenceEvent').HIDE_ORIGINAL:c('TranslationPreferenceEvent').SEE_ORIGINAL);};n.prototype.$LtgTranslationPreferences9=function(){this.$LtgTranslationPreferences8(c('TranslationPreferenceEvent').TRANSLATION_PREFERENCES);};n.prototype.render=function(){var o=m.map(function(s){return this.$LtgTranslationPreferences1(s);}.bind(this));if(this.props.attributionStyle!=='language')o.unshift(c('React').createElement(c('XUIMenuStaticItem.react'),{key:'rating'},c('React').createElement(c('LtgRatingTranslationPreference.react'),{onClick:function(s){return this.setState({rating:s});}.bind(this),score:this.state.rating,shouldLog:this.props.shouldLog,translationData:this.props.translationData})),c('React').createElement(c('MenuSeparator.react'),{key:'ratingseparator'}));var p=c('React').createElement(c('ReactXUIMenu'),{onItemClick:function(s,t){return this.$LtgTranslationPreferences2(s,t);}.bind(this)},o),q=[];if(this.props.showGear===true)q.push(c('React').createElement(c('PopoverMenu.react'),{key:'gear',menu:p},c('React').createElement(c('Link.react'),{onClick:function(){return this.$LtgTranslationPreferences9();}.bind(this)},c('React').createElement(c('Image.react'),{className:"_h8_",src:i('/images/browse/smurfbar/gear-icon.png')}))));if(this.props.attributionStyle==='language')q.push(c('React').createElement(c('PopoverMenu.react'),{key:'attributionLanguage',menu:p},c('React').createElement(c('Link.react'),{onClick:function(){return this.$LtgTranslationPreferences9();}.bind(this)},c('ContentTranslationStrings').getTranslatedFrom(this.props.translationData.sourceDialectName))));if(this.props.translationData.trigger===c('TranslationTrigger').AUTO_TRANSLATION)q.push(c('React').createElement(c('Link.react'),{key:'seeOriginal',className:"_h90",onClick:function(){return this.$LtgTranslationPreferences7();}.bind(this)},this.state.isShowingOriginal?c('ContentTranslationStrings').HIDE_ORIGINAL:c('ContentTranslationStrings').SEE_ORIGINAL));if(this.props.attributionStyle==='rating'){q.push(c('React').createElement(c('PopoverMenu.react'),{key:'rating',menu:p},c('React').createElement(c('Link.react'),{onClick:function(){return this.$LtgTranslationPreferences9();}.bind(this)},c('ContentTranslationStrings').RATE_TRANSLATION)));}else q.push(c('React').createElement('div',{className:"_43f8",key:'inlineRating'},c('React').createElement(c('LtgScoreFeedbackButton.react'),{translationData:this.props.translationData})));var r=[];q.forEach(function(s,t){if(t!==0)r.push(c('React').createElement(c('Middot.react'),{key:t}));r.push(s);});return (c('React').createElement('span',{className:"_5pio"},r));};n.prototype.$LtgTranslationPreferences8=function(event){if(this.props.shouldLog)new (c('LtgTranslationPreferencesTypedLogger'))().setTranslationID(this.props.translationData.translationID).setFbid(this.props.translationData.targetID).setTranslationTrigger(this.props.translationData.trigger).setClickType(event).log();};f.exports=n;},null);