var init=function(){function e(e,n){var o=document.createElement("iframe");o.style.display="none",o.onload=n,o.src=e,document.body.appendChild(o)}function n(){var e={};return location.search.substr(1).split("&").forEach(function(n){var o=n.split("="),i=o[0],a=decodeURIComponent(o[1]);i in e?e[i].push(a):e[i]=[a]}),e}function o(e,n){if(window&&window.parent&&"postMessage"in window.parent){var o=JSON.stringify({type:"check",deviceToken:e,denied:n});l&&console.log(o),parent.postMessage(o,"*")}}function i(){window.location.href=document.referrer}var a="<%=websitePushID%>",r=!!window.PushManager||!!navigator.push,t=!!window.Notification,s=!!navigator.serviceWorker,c=r&&t&&s,l=!1;l&&console.log("init");var d=n();if(l&&console.log(d),d.noteID&&1==d.noteID.length&&d.sendID&&1==d.sendID.length)return void window.location.replace("https://go.goroost.com/note/"+d.noteID[0]+"/"+d.sendID[0]);var f=d.tags,p=d.alias&&d.alias.length>0?d.alias[0]:null,u=d.appKey&&d.appKey.length>0?d.appKey[0]:null,g="&appKey="+u;if(p&&(g+="&alias="+encodeURIComponent(p)),f)for(var m=0;m<f.length;m++){var h=f[m];g+="&tag="+encodeURIComponent(h)}var v,w="https://go.goroost.com",y="/roost_worker.js?appKey="+u,k="/",b={safari:{check:function(){var e=window.safari.pushNotification.permission(a);"granted"==e.permission?o(e.deviceToken,!1):"default"==e.permission?o(null,!1):o(null,!0)},prompt:function(){var n=window.safari.pushNotification.permission(a);if(l&&console.log(n),"default"==n.permission){e(w+"/api/frame/register?prompt=true&appKey="+u),b.safari.internal.watchPrompt=setInterval(function(){var e=window.safari.pushNotification.permission(a);"granted"!=e.permission||firedCallback||(b.safari.internal.safariCallback(e),l&&console.log("Did fake callback")),b.safari.internal.firedCallback&&clearInterval(b.safari.internal.watchPrompt)},1e3);var o={tags:f,alias:p};window.safari.pushNotification.requestPermission("https://go.goroost.com/register/native/safari/"+u,a,{website:encodeURIComponent(location.href),data:JSON.stringify(o)},b.safari.internal.safariCallback)}else"granted"==n.permission?window.location.href=document.referrer:window.location.href=document.referrer},internal:{firedCallback:!1,watchPrompt:null,safariCallback:function(e){b.safari.internal.watchPrompt&&(clearInterval(b.safari.internal.watchPrompt),b.safari.internal.watchPrompt=null),b.safari.internal.firedCallback||(b.safari.internal.firedCallback=!0,"granted"==e.permission?i():window.location.href=document.referrer)}}},serviceWorkers:{check:function(){if("undefined"!=typeof ga&&ga("send","event","Chrome","check"),l&&console.log("Notification.permission",Notification.permission),"granted"===Notification.permission){var e=navigator.serviceWorker.ready,n=setTimeout(function(){o(null,!1)},1e3);e.then(function(e){if(clearTimeout(n),!e||!e.pushManager)return void o(null,!1);l&&console.log(e),l&&console.log(e.pushManager);try{e.pushManager.getSubscription().then(function(e){if(l&&console.log(e),null==e)return void o(null,!1);var n=null;n="subscriptionId"in e?e.subscriptionId:e.endpoint,o(n,!1)})}catch(i){console.log(i),o(null,!1)}},function(e){console.log(e),o(null,!1)})}else"default"===Notification.permission?o(null,!1):o(null,!0)},prompt:function(){navigator.serviceWorker.register(y,{scope:k}).then(function(e){l&&console.log("SW ready",e)},function(e){console.log("Roost Error: Could not register service worker.  Validate correct file installed: "+y,e)});var n="default"!=Notification.permission;n||e(w+"/api/frame/register?prompt=true&appKey="+u),"undefined"!=typeof ga&&ga("send","event","Chrome","prompt"),Notification.requestPermission(function(n){l&&console.log("Notification.requestPermission result.",n),"granted"===n?("undefined"!=typeof ga&&ga("send","event","Chrome","accept"),navigator.serviceWorker.ready.then(function(n){l&&console.log(n),n.pushManager.subscribe({userVisibleOnly:!0}).then(function(n){l&&console.log("registered",n);var o=null;o="subscriptionId"in n?n.subscriptionId:n.endpoint,e(w+"/api/frame/register?deviceToken="+encodeURIComponent(o)+g,function(){i()})},function(e){console.log("Roost Error: ",e),window.location.href=document.referrer})})):"denied"===n?("undefined"!=typeof ga&&ga("send","event","Chrome","reject"),window.location.href=document.referrer):("undefined"!=typeof ga&&ga("send","event","Chrome","close"),window.location.href=document.referrer)})}}};l&&console.log(window),l&&console.log(window.safari),window&&"undefined"!=typeof window.safari?v=b.safari:c&&(v=b.serviceWorkers),l&&console.log("implementation",v);var C=window.location.hash;return C&&0==C.indexOf("#bellstats")?void("undefined"!=typeof ga&&ga("send","event","Bell",C.substring(1,C.length))):("#safaricheck"===C?"undefined"!=typeof ga&&ga("send","event","Safari","safaricheck"):"#safariprompt"===C?"undefined"!=typeof ga&&ga("send","event","Safari","safariprompt"):"#safarireject"===C?"undefined"!=typeof ga&&ga("send","event","Safari","safarireject"):"#safariaccept"===C&&"undefined"!=typeof ga&&ga("send","event","Safari","safariaccept"),void(v&&(l&&console.log("hash",C),"#check"===C?v.check():"#register"===C&&v.prompt())))};"interactive"===document.readyState||"complete"===document.readyState?init():document.addEventListener?window.addEventListener("load",init):document.attachEvent("onload",init);