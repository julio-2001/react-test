module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: ["react-refresh"],
    rules: {
        "quote-props":"error",
        "prefer-object-spread":"error",
        "array-callback-return":"error",
        "prefer-destructuring":"error",
        "quotes":"error",
        "func-style":"error",
        "func-names":"error",
        "default-param-last":"error",
        "space-before-function-paren":"warn",
        "space-before-blocks":"warn",
        "function-paren-newline":"warn",
        "arrow-spacing":"warn",
        "import/no-mutable-exports":"error",
        "import/prefer-default-export":"warn",
        "object-curly-newline":"warn",
        "eqeqeq":"warn",
        "brace-style":"warn",
        "no-else-return":"warn"
    },
    ignorePatterns:["node_modules","*.cjs"]
};
