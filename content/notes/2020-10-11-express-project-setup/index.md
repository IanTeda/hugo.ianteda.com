---
# [Front Matter Formats](https://gohugo.io/content-management/front-matter/)
title: "Express Project Setup"
description: "Post number 01 of a series of posts on writing and Express Sequelize API server.true"
keywords: "The meta keywords for the content"
date: 2020-10-10
publishDate: 2020-10-10
lastmod: 2020-10-13
slug: express-project-setup
# aliases:
# - old_url_path
# - another_old_ulr_path
# categories:
# - category_1
# - category_2
series:
-  "Express Sequelize API"
tags:
- "Coding"
- "Javascript"
- "Express"
- "Sequelize"
draft: false
# Template specific - Minimo Theme
cover:
  image: /images/covers/cover-train-tracks.png
  caption: "Cover Image - Caption"
  style: full
---

Post number 01 of a series of posts on writing and Express Sequelize API server.

*Code reference: [Git Commit](*[https://github.com/IanTeda/express-sequelize-api/commit/1e86eda81472d4c9ccc26fe0782eb9353a944e2b](https://github.com/IanTeda/express-sequelize-api/commit/1e86eda81472d4c9ccc26fe0782eb9353a944e2b)*)*

## Create Github Repository

Start by creating a [new repository](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-new-repository) on Github, initialising it with 

- A readme file
- A .gitignore file for node
- A MIT license 

![](/content/images/2020/10/Screen-Shot-2020-10-11-at-9.15.40-am.png)Github initialisation options
## Clone Repository Onto Local Machine

Grab the repository https link, open up your favourite terminal and navigate to the root code workspace folder.

Clone the previously created remote project repository and change directory into new local repository

```bash
git clone git clone https://github.com/IanTeda/express-sequelize-api.git
cd express-sequelize-api
```

Clone Repository & Change Directory in Local Repository
## Create NPM Package

> npm is the package manager for [Node.js](http://nodejs.org/).

Once we have cloned the repository, it is time to setup the npm package.json file by initialising npm

```bash
npm init
```

Terminal command to initiate npm package.json
The command will ask you a set of questions to pre-populate the package.json

```bash
package name: (express-sequelize-api) 
version: (1.0.0) 0.1.0
description: Express Sequelize API Template
entry point: (index.js) src/app.js
test command: 
git repository: (https://github.com/IanTeda/express-sequelize-api.git) 
keywords: Express, Sequelize, RESTful, API
author: Ian Teda <ian@teda.id.au>
license: (ISC) MIT
```

*NPM init questions*
After you have answered the questions npm will generate a package.json file similar to the below.

```json
{
  "name": "express-sequelize-api",
  "version": "0.1.0",
  "description": "Express Sequelize API Template",
  "main": "src/app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/IanTeda/express-sequelize-api.git"
  },
  "keywords": [
    "Express",
    "Sequelize",
    "RESTful",
    "API"
  ],
  "author": "Ian Teda <ian@teda.id.au>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/IanTeda/express-sequelize-api/issues"
  },
  "homepage": "https://github.com/IanTeda/express-sequelize-api#readme"
}
```

npm init generated package.json file
## Setup Babel

> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript

Next we want to setup babel so we can write in ECMAScript

Install the required babel packages.

```bash
npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/plugin-transform-runtime
```

Terminal command to install npm packages for babel
Now we have the required packages install lets configure the project to use babel with the *.babelrc* file

```json
*./.babelrc*

{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/transform-runtime"
  ],
  "sourceMaps": "inline",
  "retainLines": true
}
```

## Setup Nodemon

> Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.

To save us having to restart the express server every time a file changes, we are going to use Nodemon to help us out.

```bash
npm install --save-dev nodemon
```

Terminal command to install the required Nodemon npm package
Now that the Nodemon package is install we need to configure the project to use it with through the *nodemon.json* configuration file 

```json
*./nodemon.json*

{
  "watch": [
    "package.json",
    "nodemon.json",
    ".eslintrc.json",
    ".babelrc",
    ".prettierrc",
    "src/"
  ],
  "verbose": true,
  "ignore": ["*.test.js", "*.spec.js"]
}
```

## Commit Changes to Git and Push to Remote

Now we need to commit the changes to the repository

```bash
git add .
git commit -m "Initial project setup"
git push -u origin main
```

Terminal command to commit file changes to repository
#### References

- [Git]([https://git-scm.com/](https://git-scm.com/))
- [Github]([https://github.com/](https://github.com/))
- [NPM Init]([https://docs.npmjs.com/cli/init](https://docs.npmjs.com/cli/init))
- [Babel]([https://babeljs.io/](https://babeljs.io/))
- [Nodemon]([https://nodemon.io/](https://nodemon.io/))
- [VS Code]([https://code.visualstudio.com/](https://code.visualstudio.com/))
