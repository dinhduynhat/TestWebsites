_satellite.pushBlockingScript(function(event, target, $variables){
  /* Minified Code */
_satellite.ppv={
milestones:[10,20,30,40,50,60,70,80,90,100],
tracked:[],calculate:function(){var g=document,j=document.body,k=window,c=_satellite.ppv.milestones.sort(function(i,d){return i-d});var h=Math.max(Math.max(j.scrollHeight,g.documentElement.scrollHeight),Math.max(j.offsetHeight,g.documentElement.offsetHeight),Math.max(j.clientHeight,g.documentElement.clientHeight)),a=k.innerHeight||(g.documentElement.clientHeight||j.clientHeight),n=k.pageYOffset||(g.documentElement.scrollTop||j.scrollTop),f=n+a,l=Math.round(f/h*100);for(var e=0;e<c.length;e++){if((c[e]&&c[e+1])||c[e]==c[c.length-1]){if((c[e]<=l&&c[e+1]>l)||(c[e]<=l&&c[e]==c[c.length-1]&&l<=100)){if(_satellite.indexOf(_satellite.ppv.tracked,c[e])==-1){_satellite.setCookie("ppvPlugin",c[e]);_satellite.ppv.tracked.push(c[e])}}}}},scroll:function(){_satellite.addEventHandler(window,"scroll",_satellite.ppv.calculate,false);_satellite.addEventHandler(window,"resize",_satellite.ppv.calculate,false)}};_satellite.addEventHandler(window,"load",_satellite.ppv.scroll,false);
});
