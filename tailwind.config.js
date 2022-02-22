const CONFIG = require('./config.js');

module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    fontFamily: {
      body: 'Arial, Helvetica, "微軟正黑體", "Microsoft JhengHei", "Heiti TC", "黑體", sans-serif'
    },
    screens: {
      mLandscape: [{
        raw: `(max-width: ${CONFIG.mobileMaxWidth - 1}px) and (orientation: landscape) and (min-width: 480px),
        (max-width: 999px) and (max-height: 428px) and (orientation: landscape) and (orientation: landscape) and (min-width: 480px)`
      }],
      m: [{
        raw: `(max-width: 999px) and (max-height: 428px) and (orientation: landscape), (max-width: ${CONFIG.mobileMaxWidth - 1}px)`
      }],
      t: [{
        raw: `(min-width: ${CONFIG.mobileMaxWidth}px) and (max-width: 1001px) and (min-height: 428px),
        (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)`
      }],
      tm: [{
        raw: '(max-width: 1001px), (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)'
      }],
      pt: [{
        raw: `(min-width: ${CONFIG.mobileMaxWidth}px) and (min-height: 428px)`
      }],
      pMin: [{
        min: '1001px',
        max: `${CONFIG.desktopMinWidth}px`
      }],
      p: [{
        raw: '(min-width: 1001px) and (orientation: landscape)'
      }],
      pMax: [{
        min: `${CONFIG.desktopMinWidth + 1}px`
      }],
      firefox: [{
        raw: '(min--moz-device-pixel-ratio:0) and (display-mode:browser), (min--moz-device-pixel-ratio:0) and (display-mode:fullscreen)'
      }],
      IE: [{
        raw: 'screen and (-ms-high-contrast:active), (-ms-high-contrast:none)'
      }]
    },
    boxShadow: {
    },
    extend: {
      fontSize: {
        ...{
          vmp: `${((16 / CONFIG.desktopMinWidth) * 100)}vw`,
          vmt: `${((16 / 768) * 100)}vw`,
          vmm: `${((16 / CONFIG.basicMobileWidth) * 100)}vw`,
          vmmls: `${(((16 / CONFIG.basicMobileWidth) * 100) / 1.77)}vw`
        }
      },
      lineHeight: {
        default: 1.5
      }
    }
  },
  plugins: [],
}
