"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var iPerceptions=iPerceptions||{};iPerceptions.ipEngine={url:"//ips-invite.iperceptions.com/wUniversal.aspx?sdfc=095904e8-{0}-fb330c52-9ae4-4a44-a31d-b80f2c680ca0&lID={1}&source=91787&visitorID=[ipe_v]&sessionID=[ipe_s]&device=[device]",device:"",culture:"",langId:0,pageViewed:0,launch:function(ipDef,dv,ct,visit,sId,key){"use strict";var wrapper=iPerceptions.Wrapper,i,j,invites,invite,trigger,rate,expires,visitorId=visit.visitors[visit.visitors.length-1].id;try{this.device=dv.toLowerCase(),this.culture=ct;var validDomains=!1,domains=JSON.parse(ipDef.Domains),theDomain=location.host,noWildCards;for(i=0;i<domains.length;i+=1)noWildCards=domains[i].substring(1),theDomain===domains[i]?validDomains=!0:"*."===domains[i].substring(0,2)&&-1!==theDomain.indexOf(noWildCards,theDomain.length-noWildCards.length)&&(validDomains=!0);if(!validDomains)return;for(this.pageViewed=wrapper.getPageViewed(),invites=ipDef.Invites,i=0;i<invites.length;i+=1)invite=invites[i],invite.CustomScript&&invite.CustomScript.length>0&&eval(invite.CustomScript),invite.ProjectInviteTriggers=this.shuffleObject(invite.ProjectInviteTriggers),-10===invite.TemplateId&&this.evaluateInvite(invite)&&wrapper.injectJs("Iperceptions_"+invite.ProjectId.toString(),invite.CommentCardUrl,null,function(){var e={langID:langId};ipeCC[0].ipeIcon(e)});invites=this.reinvite(invites,visit.history),invites=wrapper.getIframeSessionStorage("ipe."+wrapper.companyId+".winning",invites)}catch(e){}},displayInvite:function(e,t,i,r,n,a){var o,s,c,g,u,l=iPerceptions.Wrapper,v=n.visitors[n.visitors.length-1].id;for(e=this.shuffleObject(e),o=0;o<e.length;o+=1)for(c=e[o],s=0;s<c.ProjectInviteTriggers.length;s+=1){g=c.ProjectInviteTriggers[s];var p=l.getCookie("IPE_DISP_"+c.ProjectId),d=l.getCookie("IPE_M_"+c.ProjectId);if("1"===p&&"1"===d||this.evaluateTrigger(g)===!0)return void l.injectJs("Iperceptions_invite",this.url.replace("{0}",c.ProjectId).replace("{1}",g.LanguageId).replace("[ipe_v]",v).replace("[ipe_s]",a).replace("[device]",i),null,function(){("1"!==p||"1"!==d)&&(u=iPerceptions.ipEngine.setreinvite(c,n.history),iPerceptions.Wrapper.updateVisit(n,u))})}u=new Date,u.setFullYear(u.getFullYear()+1),l.updateVisit(n,u)},reinvite:function(e,t){var i,r,n,a=[],o=[],s=new Date;for(i=0;i<e.length;i+=1){var c=iPerceptions.Wrapper.getCookie("IPE_DISP_"+e[i].ProjectId),g=iPerceptions.Wrapper.getCookie("IPE_M_"+e[i].ProjectId);if("1"===c&&"1"===g)return o.push(e[i]),o;-10!=e[i].TemplateId&&a.push(e[i])}for(s.setYear(s.getYear()-1),i=0;i<t.length;i+=1){var u=null;for(n=new Date(t[i].date),s=n>s?n:s,r=0;r<a.length&&null===u;r+=1)a[r].ProjectId===t[i].id&&(u=r);null!==u&&void 0!==u&&(n.setDate(n.getDate()+e[u].ReInviteProject),n>new Date&&a.splice(u,1))}for(i=0;i<a.length;i+=1)n=new Date(this.getString(s)),n.setDate(n.getDate()+a[i].ReInviteOtherProject),(n<=new Date||"1"===c&&"1"===g)&&o.push(a[i]);return o},setreinvite:function(e,t){var i,r,n,a=new Date,o=null;for(n=a,i=this.getString(a),r=0;r<t.length;r+=1)t[r].id===e.ProjectId&&(o=r),a=new Date(t[r].date),a.setDate(a.getDate()+t[r].ReInviteProject),n=a>n?a:n;return null!==o?t[o].date=i:t.push({id:e.ProjectId,date:i,host:location.host}),n},evaluateRate:function(e,t,i,r,n,a,o,s){var c=iPerceptions.Wrapper,g=[];t=(void 0!=t||null!=t)&&t.length>0?JSON.parse(t):[],t instanceof Array||(t=[]);for(var u=[],l=0;l<e.length;l++){var v=e[l],p=[];for(j=0;j<v.ProjectInviteTriggers.length;j+=1)if(trigger=v.ProjectInviteTriggers[j],2!==trigger.InviteTypeId)if(-1===t.indexOf(trigger.Id)){if(0===t.length){rate="tablet"===this.device?trigger.TabletRate:"mobile"===this.device?trigger.MobileRate:trigger.DesktopRate;var d=100*Math.random();d<rate&&(u.push(trigger.Id),p.push(trigger))}}else p.push(trigger);p.length>0&&(v.ProjectInviteTriggers=p,g.push(v))}0==u.length&&(u=t),c.setInvites(JSON.stringify(u)),this.displayInvite(g,i,r,n,a,o,s)},getString:function(e){return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()},shuffleObject:function(e){var t,i,r;for(r=e.length-1;r>=0;r-=1)Math.random()<.5&&(t=Math.floor(Math.random()*r),i=e[r],e[r]=e[t],e[t]=i);return e},evaluateInvite:function(e){var t;for(t=0;t<e.ProjectInviteTriggers.length;t+=1)if(this.evaluateTrigger(e.ProjectInviteTriggers[t])===!0)return langId=e.ProjectInviteTriggers[t].LanguageId,!0;return!1},evaluateTrigger:function(e){var t,i=e.ProjectInviteTriggerConditions[0],r=this.evaluateCondition(i);for(t=1;t<e.ProjectInviteTriggerConditions.length;t+=1)i=e.ProjectInviteTriggerConditions[t],r=i.IsAnd===!0?r&&this.evaluateCondition(i):r||this.evaluateCondition(i);return r},evaluateCondition:function(e){try{switch(e.ConditionTypeId){case 1:return this.evaluateOperation(e.ConditionOperationId,this.culture.toString(),e.Value);case 2:var t=location.href.toLowerCase();return(3===e.ConditionOperationId||6===e.ConditionOperationId)&&0===e.Value.toLowerCase().indexOf("www")&&(t=location.href.replace(/^https?:\/\//,"")),this.evaluateOperation(e.ConditionOperationId,t,e.Value.toLowerCase());case 3:return this.evaluateOperation(e.ConditionOperationId,this.getQueryParam(e.Parameter),e.Value);case 4:return this.evaluateOperation(e.ConditionOperationId,iPerceptions.Wrapper.getCookie(e.Parameter),e.Value);case 5:return this.evaluateTrigger(e.CompanyInviteRule);case 6:return this.evaluateOperation(e.ConditionOperationId,this.pageViewed.toString(),e.Value);case 7:return this.evaluateOperation(e.ConditionOperationId,this.device.toLowerCase(),e.Value.toLowerCase());case 8:return this.evaluateCustomCondition(e.Value)}}catch(i){}},evaluateOperation:function(e,t,i){if(e>0&&11>e&&void 0===t)return!1;t=t.trim(),i=i.trim();try{switch(e){case 1:return t===i;case 2:return t!==i;case 3:return 0===t.indexOf(i.toString());case 4:return-1!==t.indexOf(i.toString());case 5:return-1===t.indexOf(i.toString());case 6:return t.toString()===i.toString();case 7:return i.length>0&&t.substring(t.length-i.length,t.length)===i;case 8:return parseInt(t)<parseInt(i);case 9:return parseInt(t)>parseInt(i);case 10:return""!==t;case 11:return""===t;case 12:return this.getDevice(parseInt(i));case 13:return!this.getDevice(parseInt(i));case 14:return""===t;case 15:return""!==t}}catch(r){}},evaluateCustomCondition:function(e){if(void 0===e&&0==e.length)return!1;try{return new Function(e)()}catch(t){}return!1},getQueryParam:function(e){var t,i,r,n=location.search.substring(1).split("&");for(r=0;r<n.length;r+=1)i=n[r].split("="),i[0]===e&&(void 0===t?t=i[1]:"string"==typeof t?t=[t,i[1]]:t.push(i[1]));return t instanceof Array?t.join():t},getDevice:function(e){return 1===e&&"desktop"===this.device||3===e&&"tablet"===this.device||2===e&&"mobile"===this.device},toJson:function(){var e,t={};for(e in this)this.hasOwnProperty(e)&&(t[e]="function"==typeof this[e]?this[e].toString():this[e]);return JSON.stringify(t)}};