module.exports = {
    "extends":  "airbnb",
    "parser":   "babel-eslint",
    "settings": {
        "import/resolver": {
            "webpack": {}
        }
    },
    "env": {
        "browser": true,
        "es6":     true,
        "jest":    true
    },
    "rules": {
        "comma-dangle":                      [2, "never"],
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved":              "off",
        "import/extensions":                 "off",
        "react/forbid-prop-types":           "off",
        "react/require-default-props":       "off",
        "arrow-body-style":                  "off",
        "max-len":                           "off",
        "jsx-a11y/label-has-for":            "off",
        "curly":                             "off",
        "import/no-named-as-default-member": "off",
        "consistent-return":                 "off",
        "function-paren-newline":            "off",
        "key-spacing":                       [2, {"align": "value"}],
        "no-use-before-define":              0,
        "semi":                              [2, "never"],
        "object-curly-spacing":              [0, "never"],
        "jsx-quotes":                        [2, "prefer-single"],
        "arrow-parens":                      [0, "always"],
        "react/forbid-prop-types":           "warn",
        "object-curly-newline":              ["error", { "consistent": true }],
        "jsx-a11y/anchor-is-valid":          [ "error", {
            "components":  [ "Link" ],
            "specialLink": [ "to", "hrefLeft", "hrefRight" ],
            "aspects":     [ "noHref", "invalidHref", "preferButton" ]
        }],
        "react/jsx-wrap-multilines": [2, {
            "declaration": "parens-new-line",
            "assignment":  "parens-new-line",
            "return":      "parens-new-line",
            "arrow":       "parens-new-line",
            "condition":   "parens-new-line",
            "logical":     "parens-new-line",
            "prop":        "parens-new-line"
            }]
    }
};
