module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
          alias: {
            "@myutils": "./src/utils",
            "@my-nav": "./src/navigation",
            "@my-types": "./src/types",
            "@my-style": "./src/style",
            "@my-components": "./src/components",
            "@my-screens": "./src/screens",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
