(function(e){var g=false;var d=[];function b(i,j){if(g){f(i,j)}else{d.push({crowdTwistEventName:i,eventOptions:j})}}function f(i,j){try{switch(i){case"pageVisit":ct_trck_visit_ufc(j);break;case"watchedVideo":ct_trck_watched_a_ufc_video(j);break;case"votedInPoll":ct_trck_vote_in_a_poll(j);break;case"readNews":ct_trck_read_an_article_on_ufc(j);break}}catch(k){console.log("Could not trigger event "+eventName)}}function a(i){if(!g){var j=Math.floor(Math.random()*10000000000000000);var k="//cdn.crowdtwist.com/trck/prod/"+i.siteId+"/"+i.clientId+"/v2/"+j+"/actions";e.getScript(k,c)}}function c(){g=true;while(d.length>0){var i=d.shift();f(i.crowdTwistEventName,i.eventOptions)}}var h={loadScript:function(i){a(i)}};e.crowdTwist=function(j,i){if(h[j]){h[j](i)}else{b(j,i)}}})(jQuery);