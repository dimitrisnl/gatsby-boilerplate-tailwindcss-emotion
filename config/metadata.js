const path = require('path');

module.exports = {
  siteTitle: `Website`,
  siteTitleShort: `wb`,
  siteDescription: `A solid start for a Gatsby project`,
  siteUrl: `http://localhost:3000`,
  themeColor: 'red',
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  analytics: {
    ga: null,
    mixpanel: null,
  },
};
