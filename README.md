# 🛠️ BetaHuhn config files

This repository contains common configuration files for my projects. It is based on [Koj's](https://github.com/koj-co) [config repo](https://github.com/koj-co/config), I only changed the linter to eslint and modified some other things to my preference.

## 💻 Usage

Install the package as a dev dependency from [npm](https://www.npmjs.com/package/@betahuhn/config):

```bash
npm install --save-dev @betahuhn/config
```

### Eslint

This config includes a ESLint configuration I use in my personal projects. To use this configuration, create an ESLint config file `.eslintrc.js` in the project root:

```js
module.exports = require("@betahuhn/config").eslint;
```

### Semantic Release

I use [Semantic Release](https://github.com/semantic-release/semantic-release) for automated deployments of my packages. The configuration adds support for [Gitmoji](https://gitmoji.carloscuesta.me) commits, creating release notes with a `CHANGELOG.md`, and publishing to GitHub and npm.

Create a Semantic Release config file `release.config.js` in the project room. If you want to release the `master` or `production` branches, you can use the import directly:

```js
module.exports = require("@betahuhn/config").master;
```

Alternately, you can specify the branch you want to release:

```js
module.exports = require("@betahuhn/config").release("branch-name");
```

## 📄 License

[MIT](./LICENSE) © [Maximilian Schiller](https://github.com/betahuhn) and [Koj](https://koj.co)
