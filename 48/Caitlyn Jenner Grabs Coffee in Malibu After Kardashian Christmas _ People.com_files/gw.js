var rsi_now=new Date();
var rsi_csid='H07710';if(typeof(csids)=="undefined"){var csids=[rsi_csid];}else{csids.push(rsi_csid);};function rsiClient(hb){this._rsiEa=hb;this._rsiFa=1;this._rsiGa=1;this._rsiHa=0;this._rsiIa=0;this._rsiJa="120814";this._rsiKa="pix04.revsci.net";this._rsiLa="js";this._rsiMa="b";this._rsiNa="3";this._rsiOa=3;this._rsiPa=1;this._rsiQa=0;this._rsiRa=new Array();this._rsiSa=0;this._rsiTa=null;this._rsiUa=null;this._rsiVa=null;this._rsiWa=[];this._rsiXa=null;this._rsiYa=null;this._rsiZa=0;this.DM_cat=function(ib){this._rsiTa=ib;};this.DM_name=function(jb){this._rsiUa=jb;};this.DM_keywords=function(st){this._rsiVa=st;};this.DM_event=function(kb){this._rsiWa.push(kb);};this.DM_addToLoc=function(n,v){this._rsiXa=_rsi$a(this._rsiXa,n,v);};this.DM_addEncToLoc=function(n,v){this.DM_addToLoc(_rsiab(n),_rsiab(v));};this.DM_setLoc=function(u){this._rsiXa=u;};this.rsi_c=function(hb){this._rsiEa=hb;};this.rsi_ral=function(lb){this._rsiFa=lb;};this.rsi_riu=function(mb){this._rsiGa=mb;};this.rsi_tiu=function(nb){this._rsiHa=nb;};this.rsi_m=function(ob){this._rsiIa=ob;};this.rsi_s=function(pb){this._rsiKa=pb;};this.rsi_t=function(qb){this._rsiLa=qb;};this.rsi_en=function(rb){this._rsiMa=rb;};this.rsi_cn=function(sb){this._rsiNa=sb;};this.rsi_us=function(tb){this._rsiOa=tb;};this.rsi_ra=function(ra){this._rsiPa=ra;};this.rsi_ieac=function(ac){this._rsiQa=ac;};this.DM_tag=function(){var ub;if(this._rsiSa==0||this._rsiIa==1){if(typeof(DM_prepClient)=="function"){try{DM_prepClient(this._rsiEa,this);}catch(ignore){}}var vb=this._rsibb();if(this._rsiLa=="gif"){ub=new Image(2,3);ub.src=vb;this._rsiRa[this._rsiRa.length]=ub;}else if(this._rsiLa=="js"){var wb=document.createElement("script");wb.language="JavaScript";wb.type="text/javascript";wb.src=vb;var xb=(document.body==null)?document.getElementsByTagName("head")[0]:document.body;if(this._rsiQa&&_rsicb()){xb.appendChild(wb);}else{xb.insertBefore(wb,xb.firstChild);}ub=wb;}this._rsiSa=1;}this.rsi_r();return ub;};this._rsibb=function(){var yb="";this.DM_addEncToLoc("_rsiL",this._rsiZa);yb="DM_LOC="+_rsiab(this._rsiXa);if(this._rsiTa){yb+="&DM_CAT="+_rsiab(this._rsiTa);}if(this._rsiWa&&this._rsiWa.length){for(var x=0;x<this._rsiWa.length;++x){yb+="&DM_EVT="+_rsiab(this._rsiWa[x]);}}if(this._rsiVa){yb+="&DM_KYW="+_rsiab(this._rsiVa);}if(this._rsiGa==1&&this._rsiYa){yb+="&DM_REF="+_rsiab(this._rsiYa);}if(this._rsiHa==1){yb+="&DM_TIT="+_rsiab(document.title);}if(this._rsiUa){yb+="&DM_NAM="+_rsiab(this._rsiUa);}yb+="&DM_EOM=1";var zb="http"+(location.protocol=="https:"?"s":"")+"://";var Ab="/"+this._rsiEa+"/"+this._rsiMa+this._rsiNa+"/0/"+this._rsiOa+"/"+this._rsiJa+"/";var Bb=Math.floor(Math.random()*1000000000)+"."+this._rsiLa;var Cb=zb+this._rsiKa+Ab+Bb+"?D="+_rsiab(yb)+"&C="+_rsiab(csids);var Db=Cb.length;if(Db>=2000){if(Cb.charAt(1998)=='%'){Cb=Cb.substr(0,1998);}else if(Cb.charAt(1999)=='%'){Cb=Cb.substr(0,1999);}else{Cb=Cb.substr(0,2000);}if(Cb.charAt(Cb.length-3)=='%'&&Cb.charAt(Cb.length-2)=='2'&&Cb.charAt(Cb.length-1)=='5'){Cb=Cb.substr(0,Cb.length-3);}}return Cb;};this.rsi_r=function(){var Eb;var Fb;var Gb=0;var Hb=0;if(this._rsiFa==1){var Ib=window;while(true){try{Eb=Ib.document.location;Fb=Ib.document.referrer;Gb=Hb;}catch(notAllowed){}if(Ib==window.top||Ib==Ib.parent){break;}Ib=Ib.parent;Hb++;}}else{Eb=window.document.location;Fb=window.document.referrer;}this._rsiZa=Hb-Gb;this._rsiYa=this._rsiPa?_rsidb(Fb.toString()):Fb.toString();if(this._rsiZa==0){this._rsiXa=(this._rsiPa)?_rsidb(Eb.href):Eb.href;}else{this._rsiXa=this._rsiYa;}this._rsiTa=null;this._rsiUa=null;this._rsiVa=null;this._rsiWa=[];};this.rsi_r();}var _rsiab;if(typeof(encodeURIComponent)=="function"){_rsiab=encodeURIComponent;}else{var _rsieb=new RegExp("[\x00-\x20]|[\x22-\x26]|[\x2B-\x2C]|\x2F|[\x3A-\x40]|[\x5B-\x5E]|\x60|[\x7B-\x7D]|[\x7F-\uFFFF]","g");_rsiab=function(v){return v.toString().replace(_rsieb,_rsifb);}}function _rsi$a(u,n,v){return u+(u.indexOf("?")==-1?"?":"&")+n+"="+v;}function _rsidb(u){var i=u.indexOf('#');return(i>=0)?u.substr(0,i):u;}function _rsigb(i){var Jb=i.toString(16).toUpperCase();return Jb.length<2?"0"+Jb:Jb;}function _rsifb(c){var i=c.charCodeAt(0);if(isNaN(i))return "";if(i<128)return "%"+_rsigb(i);if(i<2048)return "%"+_rsigb(0xC0+(i>>6))+"%"+_rsigb(0x80+(i&0x3F));if(i<65536)return "%"+_rsigb(0xE0+(i>>12))+"%"+_rsigb(0x80+(i>>6&0x3F))+"%"+_rsigb(0x80+(i&0x3F));return "%"+_rsigb(0xF0+(i>>18))+"%"+_rsigb(0x80+(i>>12&0x3F))+"%"+_rsigb(0x80+(i>>6&0x3F))+"%"+_rsigb(0x80+(i&0x3F));}function _rsicb(){return(navigator.appName=='Microsoft Internet Explorer');}window[rsi_csid]=new rsiClient(rsi_csid);
function DM_cat(aa){window[rsi_csid].DM_cat(aa);}function DM_name(ba){window[rsi_csid].DM_name(ba);}function DM_keywords(kw){window[rsi_csid].DM_keywords(kw);}function DM_event(ca){window[rsi_csid].DM_event(ca);}function DM_addToLoc(n,v){window[rsi_csid].DM_addToLoc(n,v);}function DM_addEncToLoc(n,v){window[rsi_csid].DM_addEncToLoc(n,v);}function DM_setLoc(u){window[rsi_csid].DM_setLoc(u);}function DM_tag(){window[rsi_csid].DM_tag();}
function asi_addElem(e){var p=document.body==null?document.getElementsByTagName('head')[0]:document.body;p.insertBefore(e,p.firstChild);}
function asi_makeIFrame(u,h,w){var e=document.createElement("iframe");e.height=h?h:0;e.width=w?w:0;e.frameBorder=0;e.src=u;return e;}
function asi_makeJS(u){var e=document.createElement("script");e.language="JavaScript";e.type="text/javascript";e.async=true;e.src=u;return e;}
function asi_makeGIF(u){var i=new Image(2,2);i.src=u;return i;}
function asi_scheme(){return "http"+(location.protocol=="https:"?"s":"");}
function asi_addOnSegs(wa){var xa=DM_onSegsAvailable;var ya=rsi_csid.toLowerCase();return function(za,Aa){wa(za,Aa);if(typeof(xa)=="function"&&Aa==ya){xa(za,Aa);}};}

function asi_addElem(e){var p=document.body==null?document.getElementsByTagName('head')[0]:document.body;p.insertBefore(e,p.firstChild);}
function asi_makeIFrame(u,h,w){var e=document.createElement("iframe");e.height=h?h:0;e.width=w?w:0;e.frameBorder=0;e.src=u;return e;}
function asi_makeJS(u){var e=document.createElement("script");e.language="JavaScript";e.type="text/javascript";e.async=true;e.src=u;return e;}
function asi_makeGIF(u){var i=new Image(2,2);i.src=u;return i;}
function asi_scheme(){return "http"+(location.protocol=="https:"?"s":"");}
function asi_addOnSegs(wa){var xa=DM_onSegsAvailable;var ya=rsi_csid.toLowerCase();return function(za,Aa){wa(za,Aa);if(typeof(xa)=="function"&&Aa==ya){xa(za,Aa);}};}

asi_makeGIF(' http://tags.bluekai.com/site/2736');
function createDoubleClickBidManagerCB(custCode){
   var prevDM_onSegsAvail = DM_onSegsAvailable;
   var origCsid = rsi_csid.toLowerCase();
   custCode = custCode.toLowerCase();
   return function(userSegs,csid) {
		if (csid == custCode) {
			if (userSegs.length > 0) {
				var url = asi_scheme() + "://3266374.fls.doubleclick.net/activityi;src=3266374;type=audsci;cat=audsci;u1=";
				var csidInSegId;
				
				for (var x = 0; x < userSegs.length && url.length < 2000; ++x) {
					csidInSegId = userSegs[x].toLowerCase().substr(0,6);    
					
					if(csidInSegId == custCode){
						url += userSegs[x].toLowerCase() + "-";
					}                
				}
				url += ";ord=1;num=1?";
				asi_makeGIF(url);
			}
		}
		if (typeof(prevDM_onSegsAvail) == "function" && csid == origCsid) {
			 prevDM_onSegsAvail(userSegs,csid);
		}	
	};
};
var DM_onSegsAvailable = createDoubleClickBidManagerCB("J11259");
asi_addElem(asi_makeJS("//pix04.revsci.net/J11259/a0/0/0/0.js"));
