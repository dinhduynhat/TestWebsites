/*!CK:2917996122!*//*1459902026,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["faylF"]); }

__d("LanguageSettingsAction",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={TRANSLATE_INTO:"translate_into",DO_NOT_TRANSLATE:"do_not_translate",DO_NOT_AUTO_TRANSLATE:"do_not_auto_translate",UNDO_NEVER_TRANSLATE:"undo_never_translate",UNDO_DISABLE_AUTO_TRANSLATE:"undo_disable_auto_translate"};},null);
__d("TranslationPreferenceEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SEE_ORIGINAL:"click_see_original",HIDE_ORIGINAL:"click_hide_original",TRANSLATION_PREFERENCES:"click_translation_preferences",DISABLE_TRANSLATION:"disable_translation",DISABLE_AUTO_TRANSLATION:"disable_auto_translation",LANGUAGE_SETTINGS:"language_settings",EDIT_TRANSLATION:"edit_translation",REPORT_LANGUAGE:"report language"};},null);
__d("TranslationTrigger",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SEE_TRANSLATION:"see_translation",AUTO_TRANSLATION:"auto_translation",SEE_CONVERSION:"see_conversion"};},null);
__d("XLtgPostTranslationGenSurveyController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ltg\/see_translation\/survey\/",{survey_id:{type:"String",required:true},__asyncDialog:{type:"Int"}});},null);
__d('LtgScoreFeedbackButton.react',['cx','fbt','AsyncRequest','ContentTranslationStrings','LayerFadeOnHide','LtgTranslationUserFeedbackTypedLogger','TranslationRating','React','ReactDOM','ReactLayeredComponentMixin','TranslationTrigger','XUIContextualDialog.react','XUIContextualDialogBody.react','XUIGrayText.react','XLtgPostTranslationGenSurveyController'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k={RATED_ONE_SURVEY:'943404649071665',RATED_TWO_SURVEY:'531844646984611',RATED_THREE_SURVEY:'1503513503275612',RATED_FOUR_SURVEY:'451354448399959',RATED_FIVE_SURVEY:'319676288156137'},l={};l[c('TranslationRating').VERY_BAD]=i._("Very bad.");l[c('TranslationRating').BAD]=i._("Bad.");l[c('TranslationRating').OK]=i._("OK.");l[c('TranslationRating').GOOD]=i._("Good.");l[c('TranslationRating').VERY_GOOD]=i._("Very good.");var m={};m[c('TranslationRating').VERY_BAD]=i._("I can't understand anything.");m[c('TranslationRating').BAD]=i._("I can't understand most of this.");m[c('TranslationRating').OK]=i._("I can understand enough of this.");m[c('TranslationRating').GOOD]=i._("I can understand most of this.");m[c('TranslationRating').VERY_GOOD]=i._("I can understand everything.");var n=[c('TranslationRating').VERY_BAD,c('TranslationRating').BAD,c('TranslationRating').OK,c('TranslationRating').GOOD,c('TranslationRating').VERY_GOOD],o=c('React').createClass({displayName:'LtgScoreFeedbackButton',mixins:[c('ReactLayeredComponentMixin')],propTypes:{translationData:j.shape({translationID:j.string.isRequired,targetID:j.string.isRequired,fbtype:j.number.isRequired,authorID:j.string.isRequired,sourceDialect:j.string.isRequired,sourceDialectName:j.string.isRequired,targetDialect:j.string.isRequired,targetDialectName:j.string.isRequired,trigger:j.oneOf([c('TranslationTrigger').SEE_TRANSLATION,c('TranslationTrigger').AUTO_TRANSLATION,c('TranslationTrigger').SEE_CONVERSION]).isRequired,originalConfidence:j.number.isRequired,scaledConfidence:j.number.isRequired,systemID:j.string.isRequired,originalText:j.string.isRequired,translatedText:j.string.isRequired}).isRequired},getInitialState:function(){return {hoverScore:c('TranslationRating').UNDEFINED,score:c('TranslationRating').UNDEFINED,hasHoverState:false,hasFeedbackConfirmation:false};},_showSurvey:function(p){new (c('AsyncRequest'))().setURI(c('XLtgPostTranslationGenSurveyController').getURIBuilder().setString('survey_id',p).getURI()).send();},renderDefaultTooltipDialogBody:function(){return (c('React').createElement(c('XUIContextualDialogBody.react'),null,c('React').createElement(c('XUIGrayText.react'),{shade:'medium',size:'small',display:'block'},this.hasDefaultPosition()?c('ContentTranslationStrings').RATE_TRANSLATION:c('ContentTranslationStrings').CHANGE_RATING),c('React').createElement(c('XUIGrayText.react'),{shade:'dark',size:'small',weight:'bold'},l[this.state.hoverScore]),c('React').createElement(c('XUIGrayText.react'),{shade:'dark',size:'small'},' '+c('ContentTranslationStrings').getUserFeedbackDescriptionForScore(this.state.hoverScore))));},renderTooltipAfterUserFeedbackDialogBody:function(){var p=c('React').createElement(c('XUIGrayText.react'),{shade:'dark',size:'small',display:'block'},i._("You rated this: {Bolded score text in rating message}",[i.param('Bolded score text in rating message',c('React').createElement(c('XUIGrayText.react'),{shade:'dark',size:'small',weight:'bold'},l[this.state.score]))])),q=c('React').createElement(c('XUIGrayText.react'),{shade:'dark',size:'small'},i._("Thank you for helping improve translations for everyone!"));return (c('React').createElement(c('XUIContextualDialogBody.react'),null,p,q));},onSlotClick:function(p,event){if(p!=this.state.score){this._selectSurvey(p);this._logUserRating(p);this.setState({score:p,hasFeedbackConfirmation:true});setTimeout(function(){this.setState({hasFeedbackConfirmation:false});}.bind(this),1500);}},onSlotMouseEnter:function(p,event){this.setState({hasHoverState:true,hoverScore:p});},onSlotMouseLeave:function(p,event){this.setState({hasHoverState:false});},getRefNameByScore:function(p){return 'scores-button-slot-'+p;},hasDefaultPosition:function(){return this.state.score==c('TranslationRating').UNDEFINED;},renderLayers:function(){var p=this.getRefNameByScore(this.state.hoverScore),q=c('ReactDOM').findDOMNode(this.refs[p]);return {tooltipDialog:c('React').createElement(c('XUIContextualDialog.react'),{hoverContext:q,shown:this.state.hasHoverState&&!this.state.hasFeedbackConfirmation,contextRef:function(){return this.refs[p];}.bind(this),position:'below',width:250},this.state.score!==this.state.hoverScore?this.renderDefaultTooltipDialogBody():this.renderTooltipAfterUserFeedbackDialogBody()),hasFeedbackConfirmationDialog:c('React').createElement(c('XUIContextualDialog.react'),{hoverContext:q,contextRef:function(){return this.refs[p];}.bind(this),shown:this.state.hasFeedbackConfirmation,position:'below',behaviors:{LayerFadeOnHide:c('LayerFadeOnHide')}},c('React').createElement(c('XUIContextualDialogBody.react'),null,c('React').createElement(c('XUIGrayText.react'),{shade:'dark',size:'small',weight:'bold',display:'block'},i._("Thank you for rating!")),c('React').createElement(c('XUIGrayText.react'),{shade:'dark',size:'small'},i._("You're helping improve translations for everyone."))))};},renderSlot:function(p,q){var r="_5mln"+(q<=p?' '+"_5mlo":'');return (c('React').createElement('div',{ref:this.getRefNameByScore(q),className:r,key:'slot_'+q,onClick:this.onSlotClick.bind(this,q),onMouseEnter:this.onSlotMouseEnter.bind(this,q),onMouseLeave:this.onSlotMouseLeave.bind(this,q)}));},render:function(){var p=this.state.hasHoverState?this.state.hoverScore:this.state.score;return (c('React').createElement('div',{className:"_5mlr",ref:'scores-button'},n.map(this.renderSlot.bind(this,p))));},_selectSurvey:function(p){switch(p){case c('TranslationRating').VERY_BAD:this._showSurvey(k.RATED_ONE_SURVEY);break;case c('TranslationRating').BAD:this._showSurvey(k.RATED_TWO_SURVEY);break;case c('TranslationRating').OK:this._showSurvey(k.RATED_THREE_SURVEY);break;case c('TranslationRating').GOOD:this._showSurvey(k.RATED_FOUR_SURVEY);break;case c('TranslationRating').VERY_GOOD:this._showSurvey(k.RATED_FIVE_SURVEY);break;default:break;}},_logUserRating:function(p){new (c('LtgTranslationUserFeedbackTypedLogger'))().setTranslationID(this.props.translationData.translationID).setFbid(this.props.translationData.targetID).setFbtypeEnum(this.props.translationData.fbtype).setAuthorID(this.props.translationData.authorID).setTranslationTrigger(this.props.translationData.trigger).setContentLocale(this.props.translationData.sourceDialect).setTargetLocale(this.props.translationData.targetDialect).setSystemID(this.props.translationData.systemID).setInputText(this.props.translationData.originalText).setTranslatedText(this.props.translationData.translatedText).setOriginalTranslationConfidence(this.props.translationData.originalConfidence).setScaledTranslationConfidence(this.props.translationData.scaledConfidence).setUserRating(p).log();}});f.exports=o;},null);
__d('LtgTranslationDropdownMenu.react',['cx','ContextualLayerAutoFlip','ContextualLayerUpdateOnScroll','LayerHideOnBlur','LayerFadeOnHide','React','XUIContextualDialog.react'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'LtgTranslationDropdownMenu',render:function(){var j=this.props,k=j.children,l=babelHelpers.objectWithoutProperties(j,['children']);return (c('React').createElement(c('XUIContextualDialog.react'),babelHelpers['extends']({behaviors:{ContextualLayerAutoFlip:c('ContextualLayerAutoFlip'),ContextualLayerUpdateOnScroll:c('ContextualLayerUpdateOnScroll'),LayerHideOnBlur:c('LayerHideOnBlur'),LayerFadeOnHide:c('LayerFadeOnHide')}},l),c('React').createElement('div',{className:"_4d4g"},k)));}});f.exports=i;},null);
__d("XLtgDisableAutoTranslatePreferenceController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/disable_auto_translate\/",{dialect:{type:"String",required:true},event_trigger:{type:"Enum",required:true,enumType:1}});},null);
__d('LtgDisableAutoTranslatePreference.react',['cx','AsyncRequest','ContentTranslationStrings','React','LanguageSettingsAction','XLtgDisableAutoTranslatePreferenceController','Link.react','SimpleXUIDialog','XUIDialogButton.react','XUIDialogOkayButton.react','emptyFunction'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'LtgDisableAutoTranslatePreference',propTypes:{isShown:i.bool.isRequired,onPreferenceClick:i.func.isRequired,sourceLocale:i.string.isRequired,sourceLocaleName:i.string.isRequired},render:function(){if(!this.props.isShown)return null;return (c('React').createElement(c('Link.react'),{className:"_5qpb",onClick:this._onDisableAutoTranslateClick},c('ContentTranslationStrings').getDisableAutoTranslate(this.props.sourceLocaleName)));},_onDisableAutoTranslateClick:function(){this._sendDisableAutoTranslateRequest(c('LanguageSettingsAction').DO_NOT_AUTO_TRANSLATE,this._onConfirm);this.props.onPreferenceClick();},_sendDisableAutoTranslateRequest:function(k,l){new (c('AsyncRequest'))().setURI(c('XLtgDisableAutoTranslatePreferenceController').getURIBuilder().setString('dialect',this.props.sourceLocale).setEnum('event_trigger',k).getURI()).setHandler(function(m){if(this.isMounted()&&m.payload.success)l();}.bind(this)).send();},_onConfirm:function(){c('SimpleXUIDialog').showEx(c('ContentTranslationStrings').getDisableAutoTranslateDialog(this.props.sourceLocaleName),c('ContentTranslationStrings').getDisableAutoTranslate(this.props.sourceLocaleName),c('React').createElement('div',null,c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:c('ContentTranslationStrings').UNDO,onClick:this._onUndoClick,use:'default'}),c('React').createElement(c('XUIDialogOkayButton.react'),{action:'cancel',use:'confirm'})));},_onUndoClick:function(){this._sendDisableAutoTranslateRequest(c('LanguageSettingsAction').UNDO_DISABLE_AUTO_TRANSLATE,c('emptyFunction'));}});f.exports=j;},null);
__d("XLtgEditTranslationPreferenceController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/edit_translation\/",{content_id:{type:"FBID"},source_locale:{type:"String",required:true},target_locale:{type:"String",required:true},translation:{type:"String",required:true}});},null);
__d('LtgEditTranslationPreference.react',['cx','AsyncRequest','ContentTranslationStrings','Link.react','SimpleXUIDialog','React','TextAreaWithLineLimit.react','TextWithEntities.react','XLtgEditTranslationPreferenceController','XUIDialogButton.react','XUIGrayText.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'LtgEditTranslationPreference',propTypes:{contentId:i.string.isRequired,isShown:i.bool.isRequired,onPreferenceClick:i.func.isRequired,sourceLocale:i.string.isRequired,targetLocale:i.string.isRequired,text:i.string.isRequired,translation:i.string.isRequired},getInitialState:function(){return {newTranslation:this.props.translation};},render:function(){if(!this.props.isShown)return null;return (c('React').createElement(c('Link.react'),{className:"_5qpb",onClick:this._onEditTranslationClick},c('ContentTranslationStrings').EDIT_TRANSLATION_MENU));},_onTranslationTextChange:function(k){this.setState({newTranslation:k});},_onEditTranslationClick:function(){c('SimpleXUIDialog').showEx(c('React').createElement('div',null,c('React').createElement(c('XUIGrayText.react'),{display:'block',size:'small',className:"_1cqx"},c('React').createElement(c('TextWithEntities.react'),{text:this.props.text})),c('React').createElement(c('TextAreaWithLineLimit.react'),{className:"_5d_f _2pig",onChange:this._onTranslationTextChange,defaultValue:this.state.newTranslation,size:'medium'})),c('ContentTranslationStrings').EDIT_TRANSLATION_DIALOG_TITLE_NORMAL,c('React').createElement('div',null,c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:c('ContentTranslationStrings').CANCEL,use:'default'}),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:c('ContentTranslationStrings').SUBMIT,onClick:this._onSubmitClick,use:'confirm'})));},_onSubmitClick:function(){this._sendTranslationEditRequest(this.state.newTranslation,this._onEditSuccess,this._onEditFail);},_sendTranslationEditRequest:function(k,l,m){new (c('AsyncRequest'))().setURI(c('XLtgEditTranslationPreferenceController').getURIBuilder().setFBID('content_id',this.props.contentId).setString('source_locale',this.props.sourceLocale).setString('target_locale',this.props.targetLocale).setString('translation',k).getURI()).setHandler(function(n){if(this.isMounted()&&n.payload.success){l();}else m();}.bind(this)).send();},_onEditSuccess:function(){c('SimpleXUIDialog').showEx(c('ContentTranslationStrings').EDIT_TRANSLATION_THANKS,c('ContentTranslationStrings').EDIT_TRANSLATION_DIALOG_TITLE_NORMAL,c('React').createElement('div',null,c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:c('ContentTranslationStrings').DONE,use:'confirm'})));},_onEditFail:function(){c('SimpleXUIDialog').showEx(c('ContentTranslationStrings').EDIT_TRANSLATION_ERROR,c('ContentTranslationStrings').EDIT_TRANSLATION_DIALOG_TITLE_ERROR,c('React').createElement('div',null,c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:c('ContentTranslationStrings').CLOSE,use:'confirm'})));}});f.exports=j;},null);
__d("XLtgNeverTranslatePreferenceController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/never_translate\/",{dialect:{type:"String",required:true},event_trigger:{type:"Enum",required:true,enumType:1}});},null);
__d('LtgNeverTranslatePreference.react',['cx','AsyncRequest','ContentTranslationStrings','React','LanguageSettingsAction','XLtgNeverTranslatePreferenceController','Link.react','SimpleXUIDialog','XUIDialogButton.react','XUIDialogOkayButton.react','emptyFunction'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'LtgNeverTranslatePreference',propTypes:{onPreferenceClick:i.func.isRequired,sourceLocale:i.string.isRequired,sourceLocaleName:i.string.isRequired},render:function(){return (c('React').createElement(c('Link.react'),{className:"_5qpb",onClick:this._onNeverTranslateClick},c('ContentTranslationStrings').getNeverTranslate(this.props.sourceLocaleName)));},_onNeverTranslateClick:function(){this._sendNeverTranslateRequest(c('LanguageSettingsAction').DO_NOT_TRANSLATE,this._onConfirm);this.props.onPreferenceClick();},_sendNeverTranslateRequest:function(k,l){new (c('AsyncRequest'))().setURI(c('XLtgNeverTranslatePreferenceController').getURIBuilder().setString('dialect',this.props.sourceLocale).setEnum('event_trigger',k).getURI()).setHandler(function(m){if(this.isMounted()&&m.payload.success)l();}.bind(this)).send();},_onConfirm:function(){c('SimpleXUIDialog').showEx(c('ContentTranslationStrings').getNeverTranslateDialog(this.props.sourceLocaleName),c('ContentTranslationStrings').getNeverTranslate(this.props.sourceLocaleName),c('React').createElement('div',null,c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:c('ContentTranslationStrings').UNDO,onClick:this._onUndoClick,use:'default'}),c('React').createElement(c('XUIDialogOkayButton.react'),{action:'cancel',use:'confirm'})));},_onUndoClick:function(){this._sendNeverTranslateRequest(c('LanguageSettingsAction').UNDO_NEVER_TRANSLATE,c('emptyFunction'));}});f.exports=j;},null);
__d('LtgReportLanguageTranslationPreference.react',['cx','BanzaiLogger','ContentTranslationStrings','React','ReactComponentWithPureRenderMixin','Link.react','SimpleXUIDialog'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'LtgReportLanguageTranslationPreference',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{feedbackTargetID:i.string.isRequired,isShown:i.bool.isRequired,onPreferenceClick:i.func.isRequired,sourceLocale:i.string.isRequired,sourceLocaleName:i.string.isRequired,text:i.string.isRequired},render:function(){if(!this.props.isShown)return null;return (c('React').createElement(c('Link.react'),{onClick:this._handleReportLanguageClick,className:"_5qpb"},c('ContentTranslationStrings').getReportLanguage(this.props.sourceLocaleName)));},_handleReportLanguageClick:function(){this._reportAndShowConfirmation();this.props.onPreferenceClick();},_reportAndShowConfirmation:function(){this._logReportLanguage();c('SimpleXUIDialog').show(c('ContentTranslationStrings').REPORT_LANGUAGE_DIALOG_TY,c('ContentTranslationStrings').getReportLanguageDialogHeader(this.props.sourceLocaleName));},_logReportLanguage:function(){c('BanzaiLogger').log('LtgLanguageFeedbackLoggerConfig',{fbid:this.props.feedbackTargetID,text:this.props.text,detected_locale:this.props.sourceLocale});}});f.exports=j;},null);
__d('LtgTranslationPreferencesDropdown.react',['cx','BanzaiLogger','ContentTranslationStrings','Link.react','LtgDisableAutoTranslatePreference.react','LtgEditTranslationPreference.react','LtgNeverTranslatePreference.react','LtgReportLanguageTranslationPreference.react','LtgTranslationDropdownMenu.react','React','ReactComponentWithPureRenderMixin','ReactDOM','ReactLayeredComponentMixin','TranslationPreferenceEvent','TranslationTrigger'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'LtgTranslationPreferencesDropdown',mixins:[c('ReactLayeredComponentMixin'),c('ReactComponentWithPureRenderMixin')],getInitialState:function(){return {isShown:false};},propTypes:{feedbackTargetID:i.string.isRequired,isShowingOriginal:i.bool.isRequired,shouldShowEditTranslation:i.bool,sourceLocale:i.string.isRequired,sourceLocaleName:i.string.isRequired,targetLocaleName:i.string.isRequired,text:i.string.isRequired,translationApp:i.string,translation:i.string.isRequired,translationTrigger:i.string.isRequired},getDefaultProps:function(){return {shouldShowEditTranslation:false};},render:function(){var k=this._getAttributionText(this.props.sourceLocaleName);return (c('React').createElement(c('Link.react'),{ref:'translationAttributionLink',onClick:this._handleLinkClick},k));},shouldShowDisableAutoTranslateOption:function(){return this.props.translationTrigger===c('TranslationTrigger').AUTO_TRANSLATION;},renderLayers:function(){var k=this.shouldShowDisableAutoTranslateOption();return {contextualDialog:c('React').createElement(c('LtgTranslationDropdownMenu.react'),{context:c('ReactDOM').findDOMNode(this.refs.translationAttributionLink),onToggle:function(l){return this._handleToggle(l);}.bind(this),position:'below',shown:this.state.isShown},c('React').createElement('div',{className:"_jju"},c('ContentTranslationStrings').getTranslatedFromTo(this.props.sourceLocaleName,this.props.targetLocaleName)),c('React').createElement(c('LtgNeverTranslatePreference.react'),{onPreferenceClick:this._handleLinkClick,sourceLocale:this.props.sourceLocale,sourceLocaleName:this.props.sourceLocaleName}),c('React').createElement(c('LtgDisableAutoTranslatePreference.react'),{isShown:k,onPreferenceClick:this._handleLinkClick,sourceLocale:this.props.sourceLocale,sourceLocaleName:this.props.sourceLocaleName}),c('React').createElement(c('LtgEditTranslationPreference.react'),{isShown:this.props.shouldShowEditTranslation,text:this.props.text,translation:this.props.translation,onPreferenceClick:this._handleLinkClick,contentId:this.props.feedbackTargetID,sourceLocale:this.props.sourceLocale,targetLocale:this.props.targetLocale}),c('React').createElement(c('LtgReportLanguageTranslationPreference.react'),{feedbackTargetID:this.props.feedbackTargetID,isShown:this.props.isShowingOriginal,onPreferenceClick:this._handleLinkClick,sourceLocale:this.props.sourceLocale,sourceLocaleName:this.props.sourceLocaleName,text:this.props.text}))};},_getAttributionText:function(k){return c('ContentTranslationStrings').getTranslatedFrom(k);},_handleToggle:function(k){this.setState({isShown:k});},_handleLinkClick:function(){if(!this.state.isShown)this._logTranslationPreferencesClick();this.setState({isShown:!this.state.isShown});},_logTranslationPreferencesClick:function(){c('BanzaiLogger').log('LtgTranslationPreferencesLoggerConfig',{translation_id:this.props.translationID,translation_app:this.props.translationApp,fbid:this.props.feedbackTargetID,content_locale:this.props.sourceLocale,target_locale:this.props.targetLocale,author_id:this.props.authorID,viewer_id:this.props.viewerID,viewer_understood_locales:this.props.viewerLocales,translation_trigger:this.props.translationTrigger,click_type:c('TranslationPreferenceEvent').TRANSLATION_PREFERENCES});}});f.exports=j;},null);