import postcssPresetEnv from "postcss-preset-env";

export const plugins = [postcssPresetEnv({
  stage: 3,
  features: {
    "logical-properties-and-values": false,
    "opacity-percentage": true,
    "text-decoration-shorthand": true
  }
})];