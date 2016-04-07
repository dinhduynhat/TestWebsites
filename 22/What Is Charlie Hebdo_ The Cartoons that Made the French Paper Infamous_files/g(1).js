<html><body><html>
<body onload='rfiFirePixels()'>
<script type="text/javascript">

window.rfiEventHandler = function(obj, type, handler) {
    if (obj.addEventListener) {
        obj.addEventListener(type, handler, false);
    } else if (obj.attachEvent) {
        obj.attachEvent('on' + type, handler);
    }
    obj['on' + type] = handler;
};

window.rfiFirePixels = function() {
    var data = new Object();
    var timeout = 15000, collectStats = !0, statsDone = !1;
    var pixels = [{"b":13488,"s":"http://cm.g.doubleclick.net/pixel?google_nid=rfi&google_cm=&google_sc=&google_hm=NzcyMTU2MjMzNzc3ODczNzg5&forward="}, {"b":17243,"s":"http://ib.adnxs.com/pxj?bidder=18&seg=378601&action=setuids('772156233777873789','1CAESEKck-uCy7syvSZnWFix15IM');&redir="}, {"b":51433,"s":"http://pixel.rubiconproject.com/tap.php?v=13490&nid=2596&put=772156233777873789&expires=30&next="}, {"b":54855,"s":"http://image2.pubmatic.com/AdServer/Pug?vcode=bz0yJnR5cGU9MSZjb2RlPTI3MzkmdGw9MTU3NjgwMA==&piggybackCookie=772156233777873789&r="}, {"b":54831,"s":"http://t4.liverail.com/?metric=csync&p=3010&s=772156233777873789&redirect="}, {"b":52220,"s":"http://dsum.casalemedia.com/rum?cm_dsp_id=57&external_user_id=772156233777873789&forward="}, {"b":40977,"s":"http://ads.yahoo.com/cms/v1?esig=1~84c296ca4cae9f73fbcc48363a3cd4cd34be98f5&nwid=10000648372&sigv=1"}, {"b":55065,"s":"http://soma.smaato.net/oapi/idsync?redirect=http%3A%2F%2Fp.rfihub.com%2Fcm%3Fpub%3D720%26partnerId%3DSomaCookieUserId"}, {"b":42261,"s":"http://us-u.openx.net/w/1.0/sd?id=537073062&val=772156233777873789&r="}, {"b":52643,"s":"http://geo-um.btrll.com/v1/map_pixel/partner/62.png"}, {"b":53707,"s":"http://sync.search.spotxchange.com/partner?adv_id=7180&uid=772156233777873789&img=1"}, {"b":56605,"s":"http://a.rfihub.com/adb.gif?ms=&rb=383&ca=2039&po=100&ra=8rUN26DIDRM1"}, {"b":54645,"s":"http://tapestry.tapad.com/tapestry/1?ta_partner_id=937&ta_partner_did=772156233777873789&ta_format=gif"}, {"b":56607,"s":"http://cs.gssprt.jp/yie/ld/cs?dspid=rocket&uid=772156233777873789"}, {"b":56659,"s":"http://x.bidswitch.net/sync?dsp_id=119&user_id=772156233777873789&expires=30"}];
    var fbPixels = [
        
    ];
    var additionalHtml = "";
    var pixelId = 2039;
    var debugInfo = null;
    pixels = pixels.concat(fbPixels);
    data.id = "383,2039,7f1fe7e35336baeab3a779860b2e3389";

    var sendMsg = function(type, data) {
        var msg = new Object();
        msg.type = type;
        msg.id = pixelId;
        if (data != null) {
            msg.data = data;
        }
        window.parent.postMessage(msg, '*');
    };

    if (debugInfo != null) {
        var inIframe = (function() {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        })();

        if (!inIframe) {
            console.log(JSON.stringify(debugInfo));
        } else {
            sendMsg(3, debugInfo);
        }
    }

    if (additionalHtml !== "") {
        var d = document.createElement("div");
        d.id = "rfiAddH";
        d.innerHTML = additionalHtml;
        document.body.appendChild(d);
    }

    if (collectStats) {
        data.stats = new Object();
        for (i in pixels) {
            data.stats[pixels[i].b] = "";
        }
    }

    var recordTime = function(elem, type) {
        if (collectStats) {
            data.stats[elem.elemId] = (new Date().getTime() - elem.initTime) + "," + type;
        }
    };

    for (i in pixels) {
        var img = document.createElement('IMG');
        img.onload = function() {
            recordTime(this, 1);
        };
        img.onerror = function() {
            recordTime(this, 2);
        };
        img.onabort = function() {
            recordTime(this, 3);
        };
        img.elemId = pixels[i].b;
        img.src = pixels[i].s;
        var t = new Date().getTime();
        img.initTime = t;
        document.body.appendChild(img);
    }

    var sendStats = function() {
        sendMsg(2, data);
    };

    setTimeout(function() {
        sendStats();
        sendMsg(1, null);
    }, timeout);

    var unloadEventHandler = function(event) {
        if (collectStats && !statsDone) {
            sendStats();
            statsDone = !0;
        }
    };

    rfiEventHandler(window, "unload", unloadEventHandler);
    rfiEventHandler(window, "beforeunload", unloadEventHandler);
};
</script>
</body>
</html>
</body></html>