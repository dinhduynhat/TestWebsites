/* UI BUILD: Friday, Mar 18 2016 at  4:19:12 PM */
/* MD5: 4069ada9dde4871c7f4682a4c99b4b16 */

(function(){function e(){if(!document.getElementById("dioBT")){var e=document.createElement("script"),t="//s.btstatic.com/tag.js",a='{ site: "LFWj91x" }';e.id="dioBT",e.type="text/javascript",e.src=t,e.text=a,document.body.appendChild(e)}}"undefined"!=typeof dioFramework&&dioFramework?EventManager.when("analytics:ready",e):e()})();try{window.track&&"pcat21204"===window.track.catId&&require(["activatedDevices/javascript/i18n/en/activatedDevices"],function(e){EventManager.when("page:ready",function(){e.noWarrantiesFoundMessage="You can select a protection plan for your device in your cart.",e.appleCare.IPHONE.details="AppleCare+ for iPhone extends your coverage to two years from the original purchase date of your iPhone(1) and adds up to two incidents of accidental damage coverage, each subject to a service fee plus applicable tax ($79 for iPhone 6 or earlier models, $99 for iPhone 6s or iPhone 6s Plus)."})})}catch(e){}try{document.cookie="com_ress=true; domain=.bestbuy.com; path=/",document.cookie="com_ress_or=true; domain=.bestbuy.com; path=/"}catch(e){}try{require(["cookieManager"],function(e){var t,a=e.get("customerZipCode");"string"!=typeof a||a.match(/\|(Y|N)/i)||(t=a.match(/\d{5}/),t&&"string"==typeof t[0]?(e.delete("customerZipCode"),document.cookie="customerZipCode="+t[0]+"|Y;domain=.bestbuy.com;path=/"):e.delete("customerZipCode"))})}catch(e){require(["cookieManager"],function(e){e.delete("customerZipCode")})}(function(){try{var e=$("#analytics-data").data();e&&"pcmcat748300666861"===e.catId&&$("head").append("<style> .availability-status-content, .availability-checkbox { display: none !important; }</style>")}catch(t){}})(),$(function(){function e(){try{var e=$("#priceblock-wrapper .cart-button, .priceblock .cart-button").data();e&&"IN_STORE_ONLY"===e.buttonStateId&&$("#instore-only .pickup-time-message").html("Find it at a Best Buy store<br /><strong>In Store Only</strong>")}catch(t){}}try{if("pdp"!==track.catId)return;e(),EventManager.on("pdp:tab:activated",function(t){try{("buyingOptions"===t.tabId||"overview"===t.tabId)&&e()}catch(a){}}),EventManager.on("pdp:initialized",function(){e()}),EventManager.on("pdp:attribute-change",function(){e()})}catch(t){}}),$(function(){try{var e=$("#header .rewards .rewards-display");if(!e.length)return;e.find(".certs").remove(),e.find(".points").css({margin:"10px auto","float":"none"})}catch(t){}}),function(){var e="sc-icr-lightbox/javascript/views/icrLightBoxView";try{require.specified(e)&&require([e],function(e){var t=e.prototype;t&&t._setIcrUserSubmissionCookie&&!t._isCoreUser&&(t._setIcrUserSubmissionCookie=function(){document.cookie="ICRFC=true; domain=.bestbuy.com; path=/;"})})}catch(t){}}(),function(){try{window.track&&"connectedDevices,upgrade"===window.track.pageType&&$(document.body).append("<style>.review-links-container > div:last-child { display: none; }</style>")}catch(e){}}(),$(function(){var e,t,a;try{if(!$("#analytics-data").data("pageType").match("browse,list"))return;$(".facet-title").each(function(e,t){var a,i;try{a=$(t),i=a.find(".clear-facet"),i.length&&i.attr("aria-label","Clear "+a.find(".facet-applied").text()+" filters")}catch(r){}}),$(".selected-facet-copy.clear-all a").attr("aria-label","Clear all filters"),e=$(".applied-facets"),e.find(".applied-facet-value").each(function(e,t){var a,i,r;try{a=$(t),i=a.find(".facet-copy"),r=a.find(".remove"),r.attr("aria-label",r.attr("title")),i.attr("aria-label","Filtered by "+i.text())}catch(o){}}),t=$("#header > a").first(),a=$(".list-page-results"),a.length&&(t.after("<a href='#skiptoproducts' title='Skip to products' class='skip'>Skip to products</a>"),a.before("<div id='skiptoproducts' tabindex='-1'></div>")),e.length&&(t.after("<a href='#skiptofilters' title='Skip to selected filters' class='skip'>Skip to selected filters</a>"),e.parent().prepend("<div id='skiptofilters' tabindex='-1'></div>"))}catch(i){}}),function(){try{if(!$("#analytics-data").data("pageType").match("browse,pdp"))return;window.console||(window.console={log:function(){}})}catch(e){}}(),$(function(){$("body.size-s").on("click",".widget-feature .toggle-button .show-more-button",function(){try{_.has(require,"s.contexts._.defined._vendors/blazy")&&require(["_vendors/blazy"],function(e){new e})}catch(e){}})}),function(){try{$("head").first().append("<style> #header-v4 .primary-list-wrap>li.cart { white-space: nowrap; } #header-v4 .globalnav-wrap .utility-nav li, #header-v4 .category-nav>ul>li { margin:0; }</style>")}catch(e){}}();