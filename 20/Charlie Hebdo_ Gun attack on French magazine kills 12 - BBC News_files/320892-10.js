rubicon_cb = Math.random(); rubicon_rurl = document.referrer; if(top.location==document.location){rubicon_rurl = document.location;} rubicon_rurl = escape(rubicon_rurl);
window.rubicon_ad = "3853796" + "." + "js"; window.rubicon_creative = "4153506" + "." + "js"; document.write("\n"); rubicon_tag_code = "<script language=\"JavaScript\" type=\"text/javascript\">\niframe = false;\nif (top !== self) {\niframe = true; // ads is served in iframe - GPT Async\n}\n(function() {\ntry {\n  if (!iframe) {\n//   console.log(\"Sync - No size update required for 300x600\");\n  } else {\n   var ad = parent.bbcdotcom.ad(\"mpu\");\n   if (typeof ad !== \'undefined\' && typeof ad.setIframeSize !== \'undefined\') {\n    ad.setIframeSize(250, 300);\n//   console.log(\"Async - Update iframe size to 300x250\");\n   }\n  }\n \n} catch (e) {}\n}());\n<\/script>\n\n<!--  Begin Rubicon Project Tag -->\n<!--  Site: BBC.com - US Only   Zone: AUG14 Europe News ATF   Size: Medium Rectangle  -->\n<!--  PLACEMENT: Above the Fold;   -->\n<script language=\"JavaScript\" type=\"text/javascript\">\nrp_account   = \'9176\';\nrp_site      = \'20873\';\nrp_zonesize  = \'320892-15\';\nrp_adtype    = \'js\';\nrp_smartfile = \'[SMART FILE URL]\';\n<\/script>\n<script type=\"text/javascript\" src=\"http://ads.rubiconproject.com/ad/9176.js\"><\/script>\n<!--  End Rubicon Project Tag -->"; rubicon_tag_code = rubicon_tag_code.replace(/##RUBICON_CB##/g,rubicon_cb); document.write(rubicon_tag_code); document.write("<div style=\"height: 0px; width: 0px; overflow: hidden\">\n<script>\n(function() {var proto = document.location.protocol; var server=\"http://tap2-cdn.rubiconproject.com\"; if (proto == \"https:\") server=\"https://tap-secure.rubiconproject.com\"; document.write(\'<iframe src=\"\'+server+\'/partner/scripts/rubicon/emily.html?rtb_ext=1&pc=9176/20873&geo=na&co=us\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"NO\" width=\"0\" height=\"0\" style=\"height: 0px; width: 0px\"></iframe>\'); })();\n<\/script>\n\n</div>");