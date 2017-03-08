/* eslint-disable global-require, import/no-extraneous-dependencies */
module.exports = {
  // parser: require('postcss-scss'),
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions'],
    }),
    // require('precss'),
  ],
};
