module.exports = {
    extends: ["next", "turbo", "prettier", "next/core-web-vitals"],
    plugins: ["prettier", "import"],
    rules: {
        "@next/next/no-html-link-for-pages": ["error", "../../apps/web/src/app"],
        "import/no-unresolved": [2, { caseSensitive: true, commonjs: true, amd: true }],
    },
};
