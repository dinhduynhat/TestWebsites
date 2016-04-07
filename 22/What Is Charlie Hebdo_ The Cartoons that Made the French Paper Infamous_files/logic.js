
var creative = {};

/**
 * Window onload handler.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

/**
 * Select ad elements with zepto selectors to setup dom
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('main-container');
  creative.dom.exit = document.getElementById('exit');
  //Animation Elements

  creative.dom.bgImg = $('#bg-img');
  creative.dom.whiteBg = $('.white-bg');

  creative.dom.composeCursor = $('.compose-cursor');
  creative.dom.composeButton = $('.compose-button');
  creative.dom.composeBg = $('.compose-bg');

  creative.dom.cursor = $('.email-address-shadow .left div.cursor');
  creative.dom.email = {};
  creative.dom.email.left = $('.email-address-shadow .left');
  creative.dom.email.right = $('.email-address-shadow .right');
  creative.dom.email.companyName = $('.email-company-name');
  creative.dom.email.letterone = $('.email-letter-1');
  creative.dom.email.lettertwo = $('.email-letter-2');
  creative.dom.email.letterthree = $('.email-letter-3');
  creative.dom.email.letterfour = $('.email-letter-4');
  creative.dom.at = $('.email-at-sign');
  creative.dom.dot = $('.email-dot');
  creative.dom.c = $('.email-c');
  creative.dom.o = $('.email-o');
  creative.dom.m = $('.email-m');
  creative.dom.email.allEmail = $('.email');

  creative.dom.texts = {};
  creative.dom.texts.professionalEmail = $('.professional-email-text');
  creative.dom.texts.professionalBusiness = $('.professional-business-text');

  creative.dom.gmailLogo = $('.gmail-logo');
  creative.dom.texts.gmailForWork = $('.gmail-for-work-title');
  creative.dom.texts.lookPro = $('.gmail-for-work-block h3');
  creative.dom.startNowButton = $('.start-now-button');
  creative.dom.startNowButtonShimmer = $('.icon-effect');

  creative.dom.footer = $('.footer');


}

/**
 * Ad initialisation.
 */
function init() {

  addListeners();

  // Polite loading
  if (Enabler.isVisible()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {
  creative.dom.exit.addEventListener('click', exitClickHandler);
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.exit.style.display = "block";
    //run the animations

  runAnimationLoop();
}


function runAnimationLoop(){

  creative.cursorTimeline = new TimelineLite({onComplete:repeatCursorBlink});
  creative.cursorTimeline
    .to( creative.dom.cursor, 0.2, {autoAlpha: 0})
    .to( creative.dom.cursor, 0.15, {autoAlpha: 1})

  function repeatCursorBlink(){
    creative.dom.cursorInterval = setTimeout(function(){
      creative.cursorTimeline.restart();
    },300)
  }
  function stopCursorBlink(){
    creative.cursorTimeline.stop().kill().remove();
    clearInterval(creative.dom.cursorInterval);
    creative.cursorTimeline.stop().kill().remove();
    clearInterval(creative.dom.cursorInterval);
  }

  creative.MainTimeline = new TimelineLite({
     onComplete:repeatMainTimeline
  });

  creative.MainTimeline
    .addLabel('compose-click')
    .to(creative.dom.composeCursor, 2.2, {ease: Back.easeInOut.config(1), top:44, left: 420},'compose-click')
    .set(creative.dom.composeButton, {className: "+=hover-compose-button", delay: 1.3},'compose-click')
    .set(creative.dom.composeButton, {className: "-=hover-compose-button", delay: 2.3},'compose-click')
    .set(creative.dom.composeButton, {className: "+=active-compose-button", delay: 2.3},'compose-click')
    .set(creative.dom.composeCursor, {scale:0.8, delay:2.3},'compose-click')

    .addLabel('compose-click-b')
    .to(creative.dom.composeCursor, 0.2, {scale:1},'compose-click-b')
    .set(creative.dom.composeButton, {className: "-=active-compose-button", delay: 0.2},'compose-click-b')
    .set(creative.dom.composeButton, {className: "+=hover-compose-button", delay: 0.2},'compose-click-b')
    .addLabel('compose-fadeout')
    .to(creative.dom.composeBg, 0.5, {autoAlpha:0, delay: 0.3}, 'compose-fadeout')

    .addLabel('letterone')
    .to( creative.dom.email.letterone, 0.2, {autoAlpha:1}, 'letterone' )
    .set( creative.dom.cursor, {left: 24}, 'letterone')

    .addLabel('lettertwo')
    .to( creative.dom.email.lettertwo, 0.1, {autoAlpha:1}, 'lettertwo' )
    .set( creative.dom.cursor, {left: 37}, 'lettertwo')

    .addLabel('letterthree')
    .to( creative.dom.email.letterthree, 0.1, {autoAlpha:1}, 'letterthree' )
    .set( creative.dom.cursor, {left: 47}, 'letterthree')

    .addLabel('letterfour')
    .to( creative.dom.email.letterfour, 0.1, {autoAlpha:1}, 'letterfour' )
    .set( creative.dom.cursor, {left: 60}, 'letterfour')

    .addLabel('at')
    .to( creative.dom.at, 0.1, {autoAlpha:1}, 'at' )
    .set( creative.dom.cursor, {left: 83}, 'at')

    .addLabel('dot')
    .to( creative.dom.dot, 0.1, {autoAlpha:1,delay:0.5}, 'dot' )
    .set( creative.dom.cursor, {left: 229,delay:0.5}, 'dot')

    .addLabel('c')
    .to( creative.dom.c, 0.1, {autoAlpha:1}, 'c')
    .set( creative.dom.cursor, {left: 244}, 'c')

    .addLabel('o')
    .to( creative.dom.o, 0.1, {autoAlpha:1}, 'o')
    .set( creative.dom.cursor, {left: 256}, 'o')

    .addLabel('m')
    .to( creative.dom.m, 0.2, {autoAlpha:1}, 'm')
    .set( creative.dom.cursor, {left: 280}, 'm')

    .addLabel('slide-one')
    .set( creative.dom.cursor, {left: 900, delay:1}, 'slide-one')
    .to(  creative.dom.bgImg, 1, {left: -80, ease: Power3.easeIn, delay:0.8},'slide-one')
    .to(creative.dom.email.left, 1, {left:26, ease: Power3.easeIn, delay:0.8},'slide-one')
    .to(creative.dom.email.right, 1, {left:249, ease: Power3.easeIn, delay:0.8},'slide-one')
    .to(creative.dom.whiteBg, 1,{left:319, ease: Power3.easeIn, delay:0.8},'slide-one' )
    .to(creative.dom.gmailLogo, 0.4, { autoAlpha:1, delay:1.8}, 'slide-one')
    .to(creative.dom.texts.gmailForWork, 0.4, { autoAlpha:1, delay:1.8}, 'slide-one')

    .addLabel('professional-text')
    .to(creative.dom.texts.professionalEmail, 0.8, { autoAlpha:1, delay:0.5 }, 'professional-text')
    .to(creative.dom.texts.professionalBusiness, 0.8, { autoAlpha:1, delay:1.5 }, 'professional-text')

    .addLabel('professional-text-fade')
    .to(creative.dom.texts.professionalEmail, 0.5, { autoAlpha:0, delay:1 }, 'professional-text-fade')
    .to(creative.dom.texts.professionalBusiness, 0.5, { autoAlpha:0, delay:1 }, 'professional-text-fade')

    .addLabel('slide-two')
    .to( creative.dom.bgImg, 1, {left: -362, ease: Power3.easeIn},'slide-two')
    .to(creative.dom.whiteBg, 1,{left:0, ease: Power3.easeIn},'slide-two' )
    .to(creative.dom.email.left, 1, {left:-245, ease: Power3.easeIn},'slide-two')
    .to(creative.dom.email.right, 1, {left:-62, ease: Power3.easeIn},'slide-two')
    .to(creative.dom.gmailLogo, 1.3, { left:-587, ease: Power3.easeIn}, 'slide-two')
    .to(creative.dom.texts.gmailForWork, 1.3, { left: -587, ease: Power3.easeIn}, 'slide-two')

    .addLabel('final-fade')
    .to(creative.dom.texts.lookPro, 0.4, { autoAlpha:1,delay: 0.5}, 'final-fade')
    .to(creative.dom.startNowButton, 0.3, {autoAlpha:1,delay: 1.5}, 'final-fade')

    .addLabel('shimmer')
    .set(creative.dom.startNowButtonShimmer, {className: "+=shimmer"},'shimmer')
    .to(creative.dom.startNowButtonShimmer,0.6, {autoAlpha:0,delay:0.1},'shimmer')

  //
  //
  //   .addLabel('letterone')
  //   .to( creative.dom.email.letterone, 0.2, {autoAlpha:1,delay:1}, 'letterone' )
  //   .set( creative.dom.cursor, {left: 0,delay:1}, 'letterone')
  //
  //   .addLabel('lettertwo')
  //   .to( creative.dom.email.lettertwo, 0.1, {autoAlpha:1}, 'lettertwo' )
  //   .set( creative.dom.cursor, {left: 14}, 'lettertwo')
  //
  //   .addLabel('letterthree')
  //   .to( creative.dom.email.letterthree, 0.1, {autoAlpha:1}, 'letterthree' )
  //   .set( creative.dom.cursor, {left: 29}, 'letterthree')
  //
  // /*  .addLabel('letterfour')
  //   .to( creative.dom.email.letterfour, 0.1, {autoAlpha:1}, 'letterfour' )
  //   .set( creative.dom.cursor, {left: 54}, 'letterfour')*/
  //
  //   .addLabel('at')
  //   .to( creative.dom.at, 0.1, {autoAlpha:1}, 'at' )
  //   .set( creative.dom.cursor, {left: 54}, 'at')
  //
  //   .addLabel('dot')
  //   .to( creative.dom.dot, 0.1, {autoAlpha:1,delay:0.5}, 'dot' )
  //   .set( creative.dom.cursor, {left: 189,delay:0.5}, 'dot')
  //
  //   .addLabel('c')
  //   .to( creative.dom.c, 0.1, {autoAlpha:1}, 'c')
  //   .set( creative.dom.cursor, {left: 202}, 'c')
  //
  //   .addLabel('o')
  //   .to( creative.dom.o, 0.1, {autoAlpha:1}, 'o')
  //   .set( creative.dom.cursor, {left: 222}, 'o')
  //
  //   .addLabel('m')
  //   .to( creative.dom.m, 0.2, {autoAlpha:1}, 'm')
  //   .set( creative.dom.cursor, {left: 234}, 'm')
  //
  //   .addLabel('bg-fade')
  //   .to( creative.dom.bgImg, 0.3, {autoAlpha:0,delay: 1}, 'bg-fade')
  //   .set( creative.dom.cursor,{display:"none",delay: 1}, 'bg-fade')
  //   .to( creative.dom.email.allEmail, 0.5, {
  //     textShadow: "none",
  //     color: "#808285",
  //     fontSize:"18px",
  //     fontWeight:"300",
  //     textShadow:"0px 0px 0px rgba(0, 0, 0, 0)",
  //     delay: 1 }, 'bg-fade' )
  //   .to( creative.dom.email.companyName, 0.2, {autoAlpha:1, delay:1 }, 'bg-fade')
  //   .to( creative.dom.email.left, 0.5, {left:67,delay:1}, 'bg-fade')
  //   .to( creative.dom.email.right, 0.5, {left:197,delay:1}, 'bg-fade')
  //
  //   .addLabel('email-wipe')
  //   // .add(stopCursorBlink, 'email-wipe')
  //   .to( creative.dom.email.companyName, 0.2, {left:178,autoAlpha:0,delay:0.75},'email-wipe')
  //   // .to( creative.dom.email.companyName, 0.3, {},'email-wipe')
  //   .to( creative.dom.email.left, 0.2, {left:154,autoAlpha:0,delay:0.75}, 'email-wipe')
  //   .to( creative.dom.email.right, 0.2, {left:275,autoAlpha:0,delay:0.75}, 'email-wipe')
  //
  //   .addLabel('professional-text')
  //   .to(creative.dom.texts.professionalEmail, 0.2, {left:0, autoAlpha:1, delay:0.5}, 'professional-text')
  //   .to(creative.dom.texts.professionalBusiness, 0.2, {left:0, autoAlpha:1, delay:1.2}, 'professional-text')
  //
  //   .to(creative.dom.texts.professionalEmail, 0.2, {left:100, autoAlpha:0, delay:3.75}, 'professional-text')
  //   .to(creative.dom.texts.professionalBusiness, 0.2, {left:100, autoAlpha:0, delay:3.95}, 'professional-text')
  //   .to(creative.dom.footer, 0.3, {autoAlpha:0, delay:3.85}, 'professional-text')
  //
  //   .addLabel('gmail-for-work')
  //   .to(creative.dom.gmailLogo, 0.4, {left:0, autoAlpha:1}, 'gmail-for-work')
  //   .to(creative.dom.texts.gmailForWork, 0.4, {left:0, autoAlpha:1}, 'gmail-for-work')
  //   .to(creative.dom.texts.lookPro, 0.4, {left:0, autoAlpha:1,delay: 1}, 'gmail-for-work')
  //   .to(creative.dom.startNowButton, 0.3, {scale:1, autoAlpha:1,delay: 2, ease: Back.easeOut.config(2)}, 'gmail-for-work')
  //   .addLabel('shimmer')
  //   .set(creative.dom.startNowButtonShimmer, {className: "+=shimmer"},'shimmer')
  //   .to(creative.dom.startNowButtonShimmer,0.6, {autoAlpha:0,delay:0.1},'shimmer')



    creative.playedOnce = false;
    function repeatMainTimeline(){
      if (creative.playedOnce == false) {
        creative.playedOnce = true;
        setTimeout(function(){
          creative.MainTimeline.restart();
        },3000)
      } else {
        stopCursorBlink();
      }
    }

}


// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
  Enabler.exit('BackgroundExit');
}

/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);
