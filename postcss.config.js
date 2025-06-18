// module.exports = {
//     plugins: {
//       "postcss-import": {},
//       tailwindcss: {},
//       autoprefixer: {},
//     },
// };

module.exports = {
  plugins: [
    require('tailwindcss/postcss'),
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
      },
    }),
    require('postcss-flexbugs-fixes'),
    require('postcss-normalize')({
      forceImport: true,
      browsers: 'last 2 versions',
    }),
    require('postcss-color-function'),
    require('postcss-calc'),    
    require('postcss-hexrgba'),
    require('postcss-merge-rules'),
    require('postcss-discard-comments'),
    require('postcss-reporter')({
      clearReportedMessages: true,
    }),
    require('postcss-clean')({
      level: 2,
    }),
  ],
};
