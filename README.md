# This template contains

* React v17
* Redux toolkit
* ESlint
* Stylelint
* Vite
* i18next
* React router v6

# Getting Started

Got to package.json line 63
change "NADSOFT-" to whatever jira prefixed tasks

ex: "JOB360 uses JOB in jira" so we use "JOB-" instead of "NADSOFT-"

using the prefix is required, or commitlinter will reject you commit, unless you change its rules 

```
git clone https://github.com/TareqRafed/Nadsoft-react/
yarn
yarn prepare
yarn dev
```

# Recommended 

Make sure to install Eslint, Stylelint, Prettier plugins using vscode market
also I highly recommended to use these settings for vscode, to get the best dev expereience 
```
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.requireConfig": true
}

```
