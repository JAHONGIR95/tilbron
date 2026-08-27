import nextConfig from "eslint-config-next";

const eslintConfig = [{ ignores: ["bot"] }, ...nextConfig];

export default eslintConfig;
