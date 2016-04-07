/*!CK:1959302832!*//*1459901534,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["+wFEV"]); }

__d("BOFCancellationReason",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CUSTOMER_REQUESTED:1,OUT_OF_STOCK:2,INVALID_ADDRESS:3,SUSPICIOUS_ORDER:4,INCORRECT_PRODUCT_DESCRIPTION:5,CANCEL_REASON_OTHER:6,NO_LONGER_WANT:7,ACCIDENTAL_PURCHASE:8,ORDERED_WRONG_ITEM:9,ORDERED_WRONG_QTY:10,NEED_TO_CHANGE_OR_UPDATE_SHIPPING_INFO:11,NEED_TO_CHANGE_OR_UPDATE_BILLING_INFO:12,FOUND_A_CHEAPER_PRICE:13,CUSTOMER_CANCEL_REASON_OTHER:14,INTERNAL_REASON_OTHER:101,CANCEL_COMPROMISED:102,CANCEL_SFI_FAKE:103,CANCEL_SFI_REAL:104,ASYNC_PAYMENT_FAILED:105,ASYNC_PAYMENT_FAILED_UNKNOWN:106};},null);
__d("BOFCommunicationCode",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMMUNICATION_CODE_DELIVERY_ISSUE:1,COMMUNICATION_CODE_ORDER_ISSUE:2,COMMUNICATION_CODE_CHANGE_ORDER:3,COMMUNICATION_CODE_RETURN_REFUND:4,COMMUNICATION_CODE_EXCHANGE:5,COMMUNICATION_CODE_CANCEL_ORDER:6,COMMUNICATION_CODE_OTHER:0};},null);
__d("BOFOrderState",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BOF_ORDER_STATE_RISK_QUEUED:82,BOF_ORDER_STATE_NOT_FULFILLED:78,BOF_ORDER_STATE_FULFILLED:70,BOF_ORDER_STATE_CANCELED:67,BOF_ORDER_STATE_CUSTOMER_CANCELED:85,BOF_ORDER_STATE_RISK_QUEUED_PROCESSING:81,BOF_ORDER_STATE_NOT_FULFILLED_PROCESSING:87,BOF_ORDER_STATE_FULFILLED_PROCESSING:68,BOF_ORDER_STATE_CANCELED_PROCESSING:88,BOF_ORDER_STATE_CUSTOMER_CANCELED_PROCESSING:69,BOF_ORDER_STATE_AUTH_PENDING_PROCESSING:65,BOF_ORDER_STATE_AUTH_PENDING:80};},null);
__d("CommerceOrderStates",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NOT_FULFILLED:78,FULFILLED:70,CANCELED:67,COMPLETED:-1,UNKNOWN:0};},null);
__d("CommerceUI",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={MAX_ITEMS_IN_QUANTITY_SELECTOR:9,MAX_VARIANTS:4};},null);
__d("CurrencyUsage",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={RENDER:1,PAYMENT_TYPE_CREDIT_CARD:2,PAYMENT_TYPE_PAYPAL:4,PAYMENT_TYPE_MOBILE:8,PAYMENT_TYPE_DIRECT_DEBIT:16,ANY:31,ALL:72057594037927940,ADS:22,ALL_BUT_DD:72057594037927920};},null);
__d("P2PLinkConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={receiverIneligibleHelpURI:"http:\/\/www.facebook.com\/help\/1495718484027862",addDebitCardHelpURI:"http:\/\/www.facebook.com\/help\/200298266807261",helpCenterURI:"http:\/\/www.facebook.com\/help\/863171203733904",contactSupportURI:"http:\/\/www.facebook.com\/help\/contact\/1491759007768605",disabledPaymentsSupportURI:"http:\/\/www.facebook.com\/help\/contact\/223254857690713",complianceLearnMoreURI:"http:\/\/www.facebook.com\/help\/1555715811351399",complianceLearnMoreMsiteURI:"http:\/\/www.facebook.com\/help\/messenger-app\/369959656515129",contactFraudTeamURI:"http:\/\/www.facebook.com\/help\/contact\/370238886476028",payerProtectionURI:"http:\/\/www.facebook.com\/payer_protection\/",helpTransferSystemFailureURI:"http:\/\/www.facebook.com\/help\/contact\/614010102040957",helpTransferManualReviewURI:"http:\/\/www.facebook.com\/help\/messenger-app\/1463256903894928",helpTransferRecipientCanceledURI:"http:\/\/www.facebook.com\/help\/messenger-app\/1564459413784472",helpTransferCompletedURI:"http:\/\/www.facebook.com\/help\/messenger-app\/750020781733477",helpTransferCanceledSameCardURI:"http:\/\/www.facebook.com\/help\/messenger-app\/818512131561533",helpTransferPushFailURI:"http:\/\/www.facebook.com\/help\/1386991644944095",settingsWWWURI:"http:\/\/www.facebook.com\/settings?tab=payments",settingsMsiteURI:"http:\/\/m.facebook.com\/settings\/p2p\/",mTermsURI:"http:\/\/www.facebook.com\/legal\/m",mHelpURI:"http:\/\/www.facebook.com\/help\/messenger-app\/870471599656315",disputeURI:"http:\/\/www.facebook.com\/help\/contact\/828169843971429",paymentMethodsURI:"https:\/\/www.facebook.com\/settings?tab=payments&section=settings",paymentHistoryURI:"https:\/\/www.facebook.com\/settings?tab=payments&section=history"};},null);
__d("XCommerceOrderParam",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={EMAIL:"email",JSON_RESPONSE:"jr",MSG_TO_SELLER:"msg_to_seller",MSG_TO_BUYER:"msg_to_buyer",ORDER:"order",ORDER_ID:"order_id",REASON:"reason",REFUND_REASON_CODE:"refund_reason_code",CANCEL_REASON_CODE:"cancel_reason_code",OVERALL_SCORE:"overall_score",CURRENCY:"currency",AMOUNT:"amount"};},null);
__d('CommerceErrorNotice.react',['React','XUINotice.react','XUIText.react'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'CommerceErrorNotice',propTypes:{error:h.oneOfType([h.string,h.object])},getDefaultProps:function(){return {error:null};},render:function(){var j=this.props.error;if(!j)return c('React').createElement('span',null);var k=null;if(j.__html){k=c('React').createElement(c('XUIText.react'),{size:'small',display:'block',dangerouslySetInnerHTML:j});}else k=c('React').createElement(c('XUIText.react'),{size:'small',display:'block'},j);var l=this.props,m=l.className,n=l.use,o=babelHelpers.objectWithoutProperties(l,['className','use']);return (c('React').createElement(c('XUINotice.react'),babelHelpers['extends']({use:n||'warn',className:m},o),k));}});f.exports=i;},null);
__d('CommerceMailingAddress.react',['React'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'CommerceMailingAddress',propTypes:{name:h.string,careOf:h.string,street1:h.string.isRequired,street2:h.string,street3:h.string,city:h.string.isRequired,region:h.string.isRequired,postalCode:h.string.isRequired,country:h.string,phoneNumber:h.string},render:function(){return (c('React').createElement('div',null,c('React').createElement('div',null,this.props.name),c('React').createElement('div',null,this.props.careOf),c('React').createElement('div',null,this.props.street1),c('React').createElement('div',null,this.props.street2),c('React').createElement('div',null,this.props.street3),c('React').createElement('div',null,this.props.city+', '+this.props.region+' ',this.props.postalCode),c('React').createElement('div',null,this.props.country),c('React').createElement('div',null,this.props.phoneNumber)));}});f.exports=i;},null);
__d('InsightsPager.react',['cx','fbt','React','XUISpinner.react'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').createClass({displayName:'InsightsPager',onClick:function(){if(!this.props.isLoading)this.props.onClick();},render:function(){var k;if(this.props.isLoading){k=c('React').createElement(c('XUISpinner.react'),{className:"_vj4",color:'white',size:'large'});}else k=i._("See More");return (c('React').createElement('div',{className:"_25q1",onClick:this.onClick},k));}});f.exports=j;},null);
__d('HelpLink.react',['React','joinClasses','TooltipLink.react'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').createClass({displayName:'HelpLink',render:function(){return (c('React').createElement(c('TooltipLink.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"uiHelpLink mls")}),undefined));}});f.exports=h;},null);
__d('XUIPagerButtons.react',['invariant','React','XUIButtonGroup.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'XUIPagerButtons',render:function(){!(this.props.children.length===2)?h(0):void 0;return (c('React').createElement(c('XUIButtonGroup.react'),this.props,this.props.children));}});f.exports=i;},null);
__d('XUIDataTableBody.react',['cx','React','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'XUIDataTableBody',propTypes:{columns:i.array.isRequired,rows:i.array.isRequired,height:i.number,selectedRow:i.object,onRowMouseEnter:i.func,onRowMouseLeave:i.func,onRowClick:i.func},_renderRow:function(k,l){var m=this.props.columns.map(function(r){return k[r.id];}),n=this.props.onRowMouseEnter?this.props.onRowMouseEnter.bind(null,k):null,o=this.props.onRowMouseLeave?this.props.onRowMouseLeave.bind(null,k):null,p=this.props.onRowClick?this.props.onRowClick.bind(null,k):null,q=m.map(function(r,s){return (this._renderCell(r,s,k));}.bind(this));return (c('React').createElement('tr',{className:c('joinClasses')(k.className||null,this.props.selectedRow===k?"_4jpt":''),key:k.key||'row'+l,onMouseEnter:n,onMouseLeave:o,onClick:p},q));},_renderCell:function(k,l,m){var n=this.props.columns[l],o;if(n.cellRenderer){o=n.cellRenderer(k,l,m);}else o=k;var p=!!n.isNumeric?"_54_7":'';if(this.props.height)o=c('React').createElement('div',{style:{display:'block',width:n.width}},o);return (c('React').createElement('td',{className:p,key:'cell'+l},o));},render:function(){var k=this.props.height?{height:this.props.height,overflowY:'scroll',display:'block'}:null;return (c('React').createElement('tbody',{style:k},this.props.rows.map(this._renderRow)));}});f.exports=j;},null);
__d('XUIDataTableHead.react',['cx','AccessibleTableParts.react','React','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('AccessibleTableParts.react').HeadRow,j=c('React').PropTypes,k=c('React').createClass({displayName:'XUIDataTableHead',propTypes:{columns:j.array.isRequired,columnToSortBy:j.string,onSortSelection:j.func.isRequired,reverseSort:j.bool,useFixedWidth:j.bool},_onCellClick:function(l){this.props.onSortSelection(l.id);},_renderHeaderCell:function(l){var m=l.sortable,n=l.id===this.props.columnToSortBy,o=c('joinClasses')((!!m?"_54_8":'')+(n?' '+"_54_9":'')+(!!l.isNumeric?' '+"_54_7":'')+(n&&this.props.reverseSort?' '+"_5y6x":''),l.className),p=null;if(!isNaN(parseFloat(l.width))){var q=typeof l.width==='number'?'px':'';p={width:l.width+q};}var r;if(l.headerRenderer){r=l.headerRenderer(l.label);}else r=l.label||null;if(this.props.useFixedWidth)r=c('React').createElement('div',{style:{display:'block',width:l.width}},r);return (c('React').createElement('th',{key:l.id,style:p,onClick:m?this._onCellClick.bind(this,l):null,className:o},r));},render:function(){var l=this.props.useFixedWidth?{display:'block'}:null;return (c('React').createElement('thead',{style:l},c('React').createElement(i,null,this.props.columns.map(this._renderHeaderCell))));}});f.exports=k;},null);
__d('XUIDataTable.react',['cx','React','XUIDataTableBody.react','XUIDataTableHead.react','XUITable.react','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=100,k=c('React').createClass({displayName:'XUIDataTable',propTypes:{onSortAttempt:i.func.isRequired,reverseSort:i.bool.isRequired,columnToSortBy:i.string,columns:i.array.isRequired,rows:i.array.isRequired,selectedRow:i.object,outerBorder:i.bool,showHeader:i.bool,bodyHeight:i.number,viewStart:i.number,viewLength:i.number,onRowMouseEnter:i.func,onRowMouseLeave:i.func,onRowClick:i.func},getDefaultProps:function(){return {showHeader:true,viewStart:0,viewLength:null};},_getColumns:function(){if(!this.props.bodyHeight)return this.props.columns;return this.props.columns.map(function(l){return babelHelpers['extends']({},l,{width:l.width||j});});},render:function(){var l=null;if(this.props.showHeader)l=c('React').createElement(c('XUIDataTableHead.react'),{columns:this._getColumns(),columnToSortBy:this.props.columnToSortBy,onSortSelection:this.props.onSortAttempt,reverseSort:this.props.reverseSort,useFixedWidth:!!this.props.bodyHeight});var m="_54_6"+(!!this.props.bodyHeight?' '+"_4yv-":'');return (c('React').createElement(c('XUITable.react'),{'data-testid':this.props['data-testid'],outerBorder:this.props.outerBorder,className:c('joinClasses')(this.props.className,m)},l,c('React').createElement(c('XUIDataTableBody.react'),{columns:this._getColumns(),rows:this.props.rows,height:this.props.bodyHeight,selectedRow:this.props.selectedRow,onRowMouseEnter:this.props.onRowMouseEnter,onRowMouseLeave:this.props.onRowMouseLeave,onRowClick:this.props.onRowClick})));}});f.exports=k;},null);
__d('ObjectSort',['invariant'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={getStringSortFunction:function(j){return function(k,l){var m=k[j],n=l[j];!(typeof m=='string'&&typeof n=='string')?h(0):void 0;return m.toLowerCase().localeCompare(n.toLowerCase());};},getReverseStringSortFunction:function(j){return function(k,l){var m=k[j],n=l[j];!(typeof m=='string'&&typeof n=='string')?h(0):void 0;return -m.toLowerCase().localeCompare(n.toLowerCase());};},getNumericSortFunction:function(j){return function(k,l){return (k[j]||0)-(l[j]||0);};},getReverseNumericSortFunction:function(j){return function(k,l){return -((k[j]||0)-(l[j]||0));};}};f.exports=i;},null);
__d('getDataTableSlice',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j,k){if(j===0&&(k==null||k>=i.length))return i;return i.slice(j,k==null?undefined:j+k);}f.exports=h;},null);
__d('XUISortableDataTable.react',['invariant','ObjectSort','React','XUIDataTable.react','arrayStableSort','emptyFunction','getDataTableSlice'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'XUISortableDataTable',propTypes:{outerBorder:i.bool,columns:i.array.isRequired,columnToSortBy:i.string,onSort:i.func,reverseSort:i.bool,rows:i.array.isRequired,stickyRows:i.array,stickyFooterRows:i.array,showHeader:i.bool,highlightClickedRow:i.bool,viewStart:i.number,viewLength:i.number,onRowMouseEnter:i.func,onRowMouseLeave:i.func,onRowClick:i.func},getDefaultProps:function(){return {onSort:c('emptyFunction'),showHeader:true,highlightClickedRow:false,reverseSort:false,viewStart:0,viewLength:null,stickyRows:[],stickyFooterRows:[]};},getInitialState:function(){return {columnToSortBy:this.props.columnToSortBy,selectedRow:null,reverseSort:this.props.reverseSort};},componentWillReceiveProps:function(k){var l=this.state.columnToSortBy;if(!l)return;var m=this._getSortColumn(k.columns,l);if(!m)this.setState({columnToSortBy:null});},_getSortColumn:function(k,l){for(var m=0;m<k.length;m++)if(k[m].id===l)return k[m];return null;},_getFallbackComparator:function(k,l){switch(typeof k){case 'string':return c('ObjectSort').getStringSortFunction(l);case 'number':return c('ObjectSort').getReverseNumericSortFunction(l);default:throw new Error('No sort comparator available for column '+l+'.'+'Columns not displaying strings or numbers should have custom '+'comparator functions.');}},_getComparator:function(k,l,m){var n=this._getSortColumn(this.props.columns,l).comparator;if(n===undefined)n=k.length?this._getFallbackComparator(k[0][l],l):c('emptyFunction');if(m)return function(o,p){return -n(o,p);};return n;},_onSortSelection:function(k){var l=k===this.state.columnToSortBy&&!this.state.reverseSort;this.setState({columnToSortBy:k,reverseSort:l});this.props.onSort(k,l);},_onRowClick:function(k,l){if(this.props.highlightClickedRow)this.setState({selectedRow:k});this.props.onRowClick&&this.props.onRowClick(k,l);},_getSortedRows:function(){var k;if(this.state.columnToSortBy){var l=this._getSortColumn(this.props.columns,this.state.columnToSortBy);k=c('arrayStableSort')(this.props.rows,this._getComparator(this.props.rows,this.state.columnToSortBy,this.state.reverseSort));}else k=this.props.rows;k=c('getDataTableSlice')(k,this.props.viewStart,this.props.viewLength);return this.props.stickyRows.concat(k).concat(this.props.stickyFooterRows);},render:function(){return (c('React').createElement(c('XUIDataTable.react'),babelHelpers['extends']({},this.props,{selectedRow:this.state.selectedRow,columnToSortBy:this.state.columnToSortBy,reverseSort:this.state.reverseSort,onSortAttempt:this._onSortSelection,onRowClick:this._onRowClick,rows:this._getSortedRows()})));}});f.exports=j;},null);
__d("XPaymentReceiptDownloadController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/payment_receipt\/download\/",{id:{type:"Int",required:true}});},null);
__d("XPaymentsOnboardingValidationController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/payments\/validator\/",{});},null);