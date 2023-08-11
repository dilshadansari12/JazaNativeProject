const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push(
  // Adds support for `.mjs` files for i18n-js(make-plural)
  "mjs"
);

module.exports = config;
