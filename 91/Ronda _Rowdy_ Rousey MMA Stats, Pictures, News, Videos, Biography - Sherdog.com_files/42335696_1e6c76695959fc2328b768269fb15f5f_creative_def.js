(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '72',
      INTERACTION_TIMER: '73',
      INTERACTIVE_IMPRESSION: '74',
      MANUAL_CLOSE: '75',
      BACKUP_IMAGE_IMPRESSION: '76',
      EXPAND_TIMER: '77',
      FULL_SCREEN: '78',
      VIDEO_PLAY: '79',
      VIDEO_VIEW_TIMER: '80',
      VIDEO_COMPLETE: '81',
      VIDEO_INTERACTION: '82',
      VIDEO_PAUSE: '83',
      VIDEO_MUTE: '84',
      VIDEO_REPLAY: '85',
      VIDEO_MIDPOINT: '86',
      VIDEO_STOP: '87',
      VIDEO_UNMUTE: '88',
      DYNAMIC_CREATIVE_IMPRESSION: '',
      HTML5_CREATIVE_IMPRESSION: ''
    },
    exitEvents: [
      {
        name: 'exit',
        reportingId: '27626901',
        url: 'https://www.youtube.com/user/USDOTNHTSA/Featured',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
    ],
    childFiles: [
      {
        name: 'Bitmap11.png',
        url: '/ads/richmedia/studio/pv2/42335694/20160401115429454/300x250_EMOJI/images/Bitmap11.png',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'createjs-2015.11.26.min.js',
        url: '/ads/richmedia/studio/pv2/42335694/20160401115429454/300x250_EMOJI/createjs-2015.11.26.min.js',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'Bitmap13copy.png',
        url: '/ads/richmedia/studio/pv2/42335694/20160401115429454/300x250_EMOJI/images/Bitmap13copy.png',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'Bitmap14.png',
        url: '/ads/richmedia/studio/pv2/42335694/20160401115429454/300x250_EMOJI/images/Bitmap14.png',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'Bitmap15.png',
        url: '/ads/richmedia/studio/pv2/42335694/20160401115429454/300x250_EMOJI/images/Bitmap15.png',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'NE_130_PreCmpJaredA.jpg',
        url: '/ads/richmedia/studio/pv2/42335694/20160401115429454/300x250_EMOJI/images/NE_130_PreCmpJaredA.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'Bitmap13.png',
        url: '/ads/richmedia/studio/pv2/42335694/20160401115429454/300x250_EMOJI/images/Bitmap13.png',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'NE_170_PreCmpJaredA.jpg',
        url: '/ads/richmedia/studio/pv2/42335694/20160401115429454/300x250_EMOJI/images/NE_170_PreCmpJaredA.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: '_30_26sec870852.jpg',
        url: '/ads/richmedia/studio/pv2/42335694/20160401115429454/300x250_EMOJI/images/_30_26sec870852.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'NT07-52564_300x250_Emoji.js',
        url: '/ads/richmedia/studio/pv2/42335694/20160401115429454/300x250_EMOJI/NT07-52564_300x250_Emoji.js',
        isVideo: false,
        transcodeInformation: null
      }
    ],
    videoFiles: [
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '42303055',
        artworkType: 'HTML5',
        displayType: 'BANNER',
        width: '300',
        height: '250',
        servingPath: '/ads/richmedia/studio/pv2/42335694/20160401115429454/300x250_EMOJI/main.html',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: null,
        htmlArtworkTypeData: {
          isTransparent: false,
          sdkVersion: '01_110' // Duplicating sdk version in subsequent field as version format not the same.
        },
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: null,
        imageGalleryTypeData: null,
        pageSettings:null,
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'html_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '99612766461';
  var adId = '0';
  var templateVersion = '200_126';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
