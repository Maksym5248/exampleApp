module.exports = {
  "parser": "babel-eslint",
  "root": true,
  "extends": ["airbnb","prettier"],
  "globals": { "fetch": false },
  "env": {
    "jest": true
  },
  "plugins": ["react", "react-native","prettier"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".android.js", ".ios.js"]
      },
      "babel-module": {
        "@components": "./app/components",
        "@constants": "./app/constants",
        "@navigation": "./app/navigation",
        "@screens": "./app/screens",
        '@services': './app/services',
        "@styles": "./app/styles"
      },
    }
  },
  "rules": {
    "jsx-a11y/href-no-hash": "off",
    "max-len": [2, 100, 2, {"ignoreTemplateLiterals": true, "ignoreUrls": true}],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true,
        "optionalDependencies": false,
        "peerDependencies": false
      }
    ],
    "function-paren-newline": 0,
    "import/prefer-default-export": 0,
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "no-underscore-dangle": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react/jsx-props-no-spreading": 0,
    "class-methods-use-this": "off",
    "arrow-parens": "off",
    "no-param-reassign": 0,
    "camelcase" : 0,
    "prettier/prettier": "error",
    "no-use-before-define": ["error", { "functions": false }],
    "import/no-named-as-default": 0,
    "no-console": 0
  }
}
