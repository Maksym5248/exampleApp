import fontSizes from './fontSizes';

const {
  // xxbig,
  // xmbig,
  xbig,
  // big,
  xxxlarge,
  // xxlarge,
  xlarge,
  large,
  xxmedium,
  xxlmedium,
  xlmedium,
  lmedium,
  // xmedium,
  medium,
  xxsmall,
  xsmall,
} = fontSizes;

// Font Family: Akzidenz-Grotesk Pro
// Font Style: Bold Condensed
// Font Size: 14px
// Line Height: 11.9px
// Line Height: 85%
// Letter Spacing: 4%

const textStyle = {
  header1: {
    fontSize: xbig,
    fontFamily: 'LeagueGothic-Regular',
  },
  header2: {
    fontSize: xxxlarge,
    fontFamily: 'LeagueGothic-Regular',
  },

  subHeader1: {
    fontSize: xlarge,
    fontFamily: 'AkzidenzGroteskPro-BoldCn',
  },
  subHeader2: {
    fontFamily: 'AkzidenzGroteskPro-BoldCn',
    fontSize: lmedium,
    letterSpacing: medium * 0.04,
  },
  subHeader3: {
    fontFamily: 'AkzidenzGroteskPro-BoldCn',
    fontSize: medium,
    letterSpacing: medium * 0.04,
  },
  subHeader24: {
    fontFamily: 'AkzidenzGroteskPro-BoldCn',
    fontSize: xlarge,
    letterSpacing: xlarge * 0.04,
  },

  caption12: {
    fontFamily: 'AkzidenzGroteskPro-Md',
    fontSize: xsmall,
    lineHeight: xxsmall,
    letterSpacing: xsmall * -0.04,
  },

  mainText16: {
    fontFamily: 'AkzidenzGroteskPro-Light',
    fontSize: lmedium,
    lineHeight: lmedium,
  },

  textButton14: {
    fontFamily: 'AkzidenzGroteskPro-Md',
    fontSize: medium,
    letterSpacing: xsmall * 0.04,
  },

  textButton18: {
    fontFamily: 'AkzidenzGroteskPro-Md',
    fontSize: xlmedium,
    lineHeight: xxlmedium,
    letterSpacing: xsmall * 0.04,
  },

  names1: {
    fontFamily: 'AkzidenzGroteskPro-BoldCn',
    fontSize: xxmedium,
    lineHeight: large,
    letterSpacing: xsmall * 0.04,
  },
  names2: {
    fontFamily: 'AkzidenzGroteskPro-BoldCn',
    fontSize: lmedium,
    lineHeight: xlmedium,
    letterSpacing: xsmall * 0.04,
  },

  regular: {
    fontFamily: 'AkzidenzGroteskPro-Regular',
    fontSize: medium,
    letterSpacing: medium * -0.04,
  },
  regular16: {
    fontFamily: 'AkzidenzGroteskPro-Regular',
    fontSize: lmedium,
    // lineHeight: xxlmedium,
  },

  mainText: {
    fontFamily: 'AkzidenzGroteskPro-Light',
    fontSize: lmedium,
    lineHeight: xxmedium,
  },
  leagueRegular: {
    fontFamily: 'LeagueGothic-Regular',
  },
  akzidenzMd: {
    fontFamily: 'AkzidenzGroteskPro-Md',
  },
  akzidenzBold: {
    fontFamily: 'AkzidenzGroteskPro-BoldCn',
  },
  akzidenzLight: {
    fontFamily: 'AkzidenzGroteskPro-Light',
  },
  customLeague: {
    fontFamily: 'LeagueGothic-Regular',
  },
  customAkzidenzMd: {
    fontFamily: 'AkzidenzGroteskPro-Md',
  },
  customAkzidenzBold: {
    fontFamily: 'AkzidenzGroteskPro-BoldCn',
  },
  customAkzidenzLight: {
    fontFamily: 'AkzidenzGroteskPro-Light',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
};

export default textStyle;
