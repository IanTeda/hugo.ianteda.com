---
title: "RESTful Code Structure"
description: "Notes on structuring the code for a RESTful code base"
keywords:
  - Rust
  - Code Patterns
  - Code Structures
  - Rest
date: 2023-12-19
publishDate: 2023-12-19
lastmod: 2023-12-19
slug: restful-code-structure
# aliases:
# - old_url_path
# - another_old_ulr_path
# categories:
# - category_1
# - category_2
# series:
# -  series 1
tags:
  - "Rest"
  - "Code"
  - "Code-Structure"
draft: false
# Template specific - Minimo Theme
cover:
  image: /images/covers/cover-old-typewriter.png
  caption: "Old Typewritter"
  style: full
---

Good practices is to organise code to separate concerns.

For an API there are three layers

1. Web layer
2. Service layer 
3. Data access layer 

## Web layer 

The web layer is where we process HTTP requests, interface with the service layer and return a http response.

The main abstractions utilised in the web layer include:

- Routes: where we declare API endpoints and associated controllers
- Controllers: is where we unpack the endpoint request and interface with services
- Middleware: is where we include reusable code that modify requests for things such as cache control, authentication, error handling etc.

### Routes

Route endpoints should be separated into entities which are then broken down into actions.

1. Get
2. Get one
3. Post
4. Delete

### Controllers 

Controllers should be unpacking the HTTP request such as headers, URL parameters, body data etc. before sending actions to the services layer 

### Middleware 

Middleware hold functions that are common across routes.

## Service Layer 

The service layer is where we apply the business logic and make requests of the data layer.

## Data Layer 

This is where we communicate with the database.





#### References

- [How to structure an Express.js REST API](https://blog.treblle.com/egergr/)
