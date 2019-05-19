const path = require('path');

module.exports = {
  siteTitle: `Website`,
  siteTitleShort: `wb`,
  siteDescription: `A solid start for a Gatsby project`,
  siteUrl: `https://goofy-shockley-a56654.netlify.com`,
  themeColor: '#000',
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  analytics: {
    ga: null,
    mixpanel: null,
  },
};
