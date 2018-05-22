module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 8
    },
    "env": {
        "es6": true
    },
    "rules": {
        "array-bracket-spacing": ["error", "never"],
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "camelcase": "error",
        "comma-dangle": ["error", "never"],
        "comma-style": ["error", "last"],
        "curly": "error",
        "eol-last": "error",
        "eqeqeq": ["error", "smart"],
        "guard-for-in": "error",
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "keyword-spacing": "error",
        "max-nested-callbacks": ["error", 4],
        "no-caller": "error",
        "no-case-declarations": "off",
        "no-console": "off",
        "no-const-assign": "error",
        "no-else-return": "error",
        "no-empty-pattern": "error",
        "no-empty": "off",
        "no-extra-semi": "error",
        "no-floating-decimal": "error",
        "no-inline-comments": "off",
        "no-lonely-if": "error",
        "no-mixed-requires": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": ["error", { "max": 2 }],
        "no-param-reassign": "off",
        "no-plusplus": "error",
        "no-process-exit": "off",
        "no-self-compare": "error",
        "no-shadow": "off",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-undefined": "off",
        "no-underscore-dangle": "off",
        "no-unused-vars": ["error", { "args": "after-used", "argsIgnorePattern": "^_" }],
        "no-use-before-define": ["error", { "functions": false }],
        "no-useless-concat": "error",
        "no-var": "error",
        "object-curly-spacing": ["error", "always"],
        "object-shorthand": "error",
        "operator-linebreak": ["error", "after"],
        "prefer-arrow-callback": ["error", { "allowNamedFunctions": true } ],
        "prefer-const": "error",
        "quotes": ["error", "single"],
        "require-yield": "off",
        "semi": ["error", "always"],
        "semi-spacing": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", { "anonymous": "never", "named": "never" }],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "yoda": ["error", "never", { "exceptRange": true }],
        "no-buffer-constructor": ["error"]
    }
};
