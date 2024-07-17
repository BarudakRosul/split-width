<div align="center">
  <img src="../image/logo.svg" alt="Split Width Logo" width="220"/>
  <h1>Split Width</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/split-width/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bug</a> · <a href="https://github.com/BarudakRosul/split-width/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/split-width/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/split-width/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-width"><img src="https://img.shields.io/npm/v/@barudakrosul/split-width" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/split-width" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-width"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fsplit-width" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/split-width/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/split-width?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/split-width/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/split-width?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/split-width/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/split-width" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [License](#license)
7. [Acknowledge](#acknowledge)
8. [Donate](#donate)
9. [Changelog](#changelog)

## Introduction

Split Width is a JavaScript extension that splits a string into an array of substrings of a specified width.

## Features

Split Width offers the following features:

- Splits a string into an array of substrings with a specified width.
- Can be integrated into TypeScript code.

## Installation

To install Split Width locally, follow these installation steps:

```shell
npm install @barudakrosul/split-width
```

## Usage

To start using Split Width, import the module first:

**1\. CommonJS**
```javascript
require("@barudakrosul/split-width");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import "@barudakrosul/split-width";
```

**3\. TypeScript**
```typescript
import "@barudakrosul/split-width";
```

Example of usage:

```javascript
let text = "HelloWorld!";
console.log(text.splitWidth(5));

// Result:
// [ 'Hello', 'World', '!' ]
```

```javascript
let text = "This is an example string.";
console.log(text.splitWidth(5));

// Result:
// [ 'This ', 'is an', ' exam', 'ple s', 'tring', '.' ]
```

## Contribution

Contributions to Split Width are greatly appreciated! Whether reporting bugs, suggesting new features, or contributing to code improvements.

## License

Split Width is licensed under the Apache-2.0 License - see the [LICENSE](/LICENSE) file for details.

## Acknowledge

Split Width appreciates the support and contributions of the following individuals and open source projects:

- [@FajarKim](https://github.com/FajarKim) - Lead developer and creator of the application.
- Open source community - For valuable contributions to the tools and libraries used in this project.

## Donate

We really appreciate your support to continue developing this project. If you find this project useful, you can support us with a donation:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Every donation, no matter the amount, means a lot to us. Thank you for your support! ❤️

## Changelog

Keep up with the latest changes and updates of Split Width by referring to [Changelog](https://github.com/BarudakRosul/split-width/releases).

Thank you for choosing Split Width! We aim to provide an easy solution to split a string into an array of substrings of a specified width.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)