define(["idcta/config","idcta/translations","idcta/apiUtils"],function(e,c,g){var f=window.location.host.split(".");var d;var a;var h=window.location.protocol;if(f[f.length-2]==="co"&&f[f.length-1]==="uk"){d=f[f.length-3]+".co.uk";a=f[f.length-4]}else{d=f[f.length-2]+"."+f[f.length-1];a=f[f.length-3]}var b={register_url:g.modifyTLD(e.register_url),signin_url:g.modifyTLD(e.signin_url),signout_url:g.modifyTLD(e.signout_url),status_url:g.modifyTLD(e.status_url),settings_url:g.modifyTLD(e.settings_url),tokenRefresh_url:e.tokenRefresh_url,"bbcid-v5":e["bbcid-v5"],idapp:{version:e.idapp.version,hostname:g.verifyEndpointUrl(window.location.host,false),insecurehostname:g.verifyEndpointUrl(window.location.host,false),tld:d},tokenRefresh:e.tokenRefresh||false,idtranslations:{version:e.idtranslations.version},identity:{baseUrl:"https://talkback."+a+"."+d+"/identity",cookieAgeDays:e.identity.cookieAgeDays,accessTokenCookieName:e.identity.accessTokenCookieName},idpurl:e.idpurl,translation_signedout:c.translation_signedout,translation_signedin:c.translation_signedin,useOverlay:false,ptrt:window.location.href,fallback:{config:e.fallback||false,translations:c.fallback||false}};b.getConfigAsync=function(){return{then:function(i){return i(b)}}};b.getConfig=function(){return b};b.buildIdappResourceUrl=function(j,i){return g.buildIdappResourceUrl(j,i)};return b});