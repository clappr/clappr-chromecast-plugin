module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
    },
    "globals": {
        "chrome": false,
        "process": false,
        "VERSION": false
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};
