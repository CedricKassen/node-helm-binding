export default {
    semi: true,
    bracketSpacing: true,
    singleQuote: false,
    jsxSingleQuote: false,
    quoteProps: "as-needed",
    trailingComma: "all",
    arrowParens: "always",
    proseWrap: "always",
    tabWidth: 4,
    overrides: [
        {
            files: ["*.json"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
