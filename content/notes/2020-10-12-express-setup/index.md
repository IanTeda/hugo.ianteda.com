---
# [Front Matter Formats](https://gohugo.io/content-management/front-matter/)
title: "Express Setup"
description: "Post 02 in a series of posts about writing an Express REST API using Sequelize object rational mapping for SQL databases."
keywords: "Express Setup"
date: 2020-10-12
publishDate: 2020-10-12
lastmod: 2020-10-14
slug: express-setup
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
  image: /images/covers/cover-bush-stairs.png
  caption: "Cover Image - Caption"
  style: full
---

Post 02 in a series of posts about writing an Express REST API using Sequelize object rational mapping for SQL databases.

In this post we will steps through setting up the express server within the project

## Install NPM Dependencies

Lets start by install the express module and dotenv. 

Dotnev is helpful because we can set our environmental variables to use during development in a .env file and add it to the .gitignore to avoid sharing secret information with the internet.

```bash
  npm install --save express dotenv 

```

Terminal command to install Express
## Create Folder / File Structure

Next lets create a view folders and files to separate responsibilities and structure the express server app.

```bash
mkdir src
mkdir src/config
touch src/config/server.config.js
touch src/config/index.js
touch src/app.js
touch .env
```

Terminal commands to create Express folder structure
### Server Config

We use this file to configure the server before importing it into our app.js file to start listening for http requests

```javascript
 // ./src/config/server.config.js
    
import express from 'express';

// Set variables based on NODE_ENV
let defaultPort;
switch (process.env.NODE_ENV) {
  case 'production':
    defaultPort = 8080;
    break;
  case 'development':
    defaultPort = 3000;
    break;
  case 'test':
    defaultPort = 3333;
    break;
  default:
    defaultPort = 3000;
    break;
}

/**
 * EXPRESS SERVER
 * --------------
 * An instance of the Express sever
 *
 * @name server
 * @returns {object} Express server instance
 */
const server = express();

// Set the server port
server.set('port', process.env.HTTP_PORT || defaultPort);

export default server;    
```
   
### Config Index

To keep our code neat and readable, we will create a config index file that will export each of the config files. Making for neat import statement when requiring.

```javascript
// ./src/config/index.js

export { default as server } from './server.config'; // I need to be last because I am the server and require everything
```

### Express Server App

Import our server config and start listening for http requests

```javascript
import { server } from './config';

/** @type {Number} The http port number to listen for http request on  */
const port = server.get('port');

// Start listening for http requests
server.listen(port, () => {
  console.log(`SERVER: Running on port ${port}`);
});

/**
 * EXPRESS SERVER
 * --------------
 * Express server export for testing
 *
 * @name server
 * @returns {object} Express server instance configuration
 */
export default server;

./src/app.js
```
   
### Environmental File

Keep our secret information in the .env file and git ignore the file to avoid uploading it to the repository for the internet to find.

We require the dotenv file when starting nodemon in the package.json file below

```properties
HTTP_PORT=3000
HTTPS_PORT=8000


./.env
```


### NPM Run Scripts

Add a few npm run script to load and test the express server.

clear; will clear the terminal window before executing the npm script

nodemon we setup in post 01, and is a utility to automatic reload our node instance when a file change is detected

--require dotenv/config loads the .env file before executing the app entry point

--exec babel-node will transpile our ECMAScript project prior to executing

```json
    ...
      "scripts": {
        "dev": "clear; nodemon --require dotenv/config --exec babel-node src/app.js",
        "start": "NODE_ENV=production babel-node src/app.js",
        "test": "clear; NODE_ENV=test mocha"
      },
      ...

./package.json
```

## Testing with Mocha Chai

We are aiming to have a test driven development project, with maximum test coverage.

So we want to setup our test environment

```bash
npm install --save-dev mocha chai
```

Terminal commands to install development dependencies
### Create Folder & File Structure

Lets setup the folder and file structure for our testing environment.

```bash
    touch .mocharc.yml
    mkdir test
    mkdir test/unit
    mkdir test/unit/config
    touch test/unit/app.spec.js
    touch test/unit/config/server.config.spec.js
```


Terminal commands to setup our testing environment

```javascript
// ./test/unit/app.spec.js

import { assert } from 'chai';
import app from '../../src/app';


describe('Unit :: Express Server App', () => {
  it('expect the Express server app to be callable', (done) => {
    // https://github.com/expressjs/express/blob/master/test/app.js
    assert.equal(typeof app, 'function');
    done();
  });
});
```

app.js testing specification

```javascript
// ./test/unit/config/server.config.spec.js

import { assert, expect } from 'chai';
import { server } from '../../../src/config';

describe('Unit :: Config :: Server', () => {
  it('expect server config to default port to 3333 for testing', (done) => {
    const port = server.get('port');
    expect(port).to.be.equal(3333);
    done();
  });
});
```

server.config.js testing specification
Test everything is works

```bash
npm test
```

Terminal command to test our files

```bash
SERVER: Running on port 3333


Unit :: Express Server App
  ✓ expect the Express server app to be callable

Unit :: Config :: Server
  ✓ expect server config to default port to 3333 for testing


2 passing (11ms)
```

Terminal out from test command
