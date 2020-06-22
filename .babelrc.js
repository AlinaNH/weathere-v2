module.exports = {
  "presets": [
    ["@babel/preset-env", {"modules": false} ]
  ],
  "env": {
    "test": {
      "plugins": [
        "transform-es2015-modules-commonjs",
        ["transform-import-css", {
          "generateScopedName": "lib-[name]-[local]-[hash:base64:4]"
        }],
        "css-modules-transform",
        "@babel/plugin-proposal-class-properties"
      ]
    }
  }
};