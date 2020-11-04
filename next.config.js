const { regions } = require('./src/config/localization');
module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: regions,
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'na',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
  },
};