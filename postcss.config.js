module.exports = {
  plugins: [
  	require('postcss-import'),
  	require('postcss-mixins'),
    require('precss'),
    require('autoprefixer'),
    /*require('postcss-aspect-ratio-mini'),
    require('postcss-px-to-viewport')({
    	viewportWidth: 750,      // (Number) The width of the viewport.
        viewportHeight: 1334,    // (Number) The height of the viewport.
        unitPrecision: 3,        // (Number) The decimal numbers to allow the REM units to grow to.
        viewportUnit: 'vw',      // (String) Expected units.
        selectorBlackList: [],  // (Array) The selectors to ignore and leave as px.
        minPixelValue: 1,       // (Number) Set the minimum pixel value to replace.
        mediaQuery: false       // (Boolean) Allow px to be converted in media queries.
    }),
    require('postcss-viewport-units')*/
  ]
}