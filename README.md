# The Cellbang Style Guide

[![npm version](https://img.shields.io/npm/v/@celljs/style-guide.svg?style=flat)](https://www.npmjs.com/package/@celljs/style-guide)
[![npm downloads](https://img.shields.io/npm/dm/@celljs/style-guide.svg?style=flat)](https://www.npmjs.com/package/@celljs/style-guide)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/cellbang/style-guide/blob/master/LICENSE)


## 介绍

本存储库是 Cellbang 风格指南的所在地，其中包括以下配置：
- [Prettier](#prettier)
- [ESLint](#eslint)
- [TypeScript](#typescript)

## 安装

我们的所有配置都包含在一个包`@celljs/style-guide`中。安装命令如下：

```sh
# If you use npm
npm i --save-dev @celljs/style-guide

# If you use pmpm
pnpm i --save-dev @celljs/style-guide

# If you use Yarn
yarn add --dev @celljs/style-guide
```

我们的一些 ESLint 配置需要 peer 依赖。具体内容可以查看 [ESLint](#eslint)。

## Prettier


> 注意：Prettier 是此软件包的对等依赖项，应安装
> 在项目的根目录下。
>
> 请参阅：https://prettier.io/docs/en/install.html

要使用共享 Prettier 配置，请在 `package.json` 中设置以下内容。


```json
{
  "prettier": "@celljs/style-guide/prettier"
}
```

## ESLint

> 注意：ESLint 是此软件包的 peer 依赖项，应安装
> 在项目的根目录下。
>
> 请参阅：https://eslint.org/docs/user-guide/getting-started#installation-and-usage

此 ESLint 配置被设计为可组合的，且要求 ESLint 版本为：^9.0.0。

以下基本配置可用。您可以使用其中之一或两者
配置，但它们应该始终位于配置数组中的第一个：

- `@celljs/style-guide/eslint/base`
- `@celljs/style-guide/eslint/errors`

请注意，您可以设置配置范围，以便配置仅针对特定文件。

以下附加配置可用：

- `@celljs/style-guide/eslint`（所有配置）
- `@celljs/style-guide/eslint/base` （基础配置）
- `@celljs/style-guide/eslint/errors`（错误级别的配置）
- `@celljs/style-guide/eslint/build`（构建级别的配置，包括基础和错误级别的配置）
- `@celljs/style-guide/eslint/warnings`（警告级别的配置）
- `@celljs/style-guide/eslint/xxs`（跨站脚本攻击相关的配置）

> 由于围绕 ESLint 配置解析的问题（请参阅
> [eslint/eslint#9188](https://github.com/eslint/eslint/issues/9188)。

例如，一个简单的项目复用 ESLint 配置，配置如下

```js
module.exports = [
  ...require('@celljs/style-guide/eslint')
];
```
当然，也可以更具情况选择具体级别的一个或多个配置。
```js
module.exports = [
  ...require('@celljs/style-guide/eslint/base'),
  ...require('@celljs/style-guide/eslint/errors')
];
```

如果是一个纯 javascript 项目，配置如下：

```js
module.exports = [
  ...require('@celljs/style-guide/eslint/javascript')
];
```

## TypeScript

要使用共享 TypeScript 配置，请在 `tsconfig.json` 中设置以下内容。

```json
{
  "extends": "@celljs/style-guide/typescript"
}
```

