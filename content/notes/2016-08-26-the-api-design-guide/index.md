---
# [Front Matter Formats](https://gohugo.io/content-management/front-matter/)
title: "The API Design Guide"
description: "One piece of software talking to another piece of software."
keywords: "The API Design Guide"
date: 2016-08-26
publishDate: 2016-08-26
lastmod: 2019-01-01
slug: the-api-design-guide
# aliases:
# - old_url_path
# - another_old_ulr_path
# categories:
# - category_1
# - category_2
# series:
# -  series_1
# -  series_2
tags:
- "Coding"
draft: false
# Template specific - Minimo Theme
toc: true
cover:
  image: /images/covers/cover-escalator.png
  caption: "Sydney Trains - Martin Place Escalators"
  style: full
---

> An API allows one piece of software talking to another piece of software

### Definitions

Some terms used in this guide and there definitions:

- **API** - Application Programming Interface, an interface for one piece of software to talk to another;
- **Collection** - A collection of resources found at an endpoint;
- **Consumer (Client)** - A client computer application making requests of the API;
- **cURL** - A command line tool for getting and sending files using URL syntax;
- **Endpoint** - An API URL on a Server which represents either a Resource or a Collection;
- **Granularity** - The level of detailed returned in the request response;
- **HTTP** - A protocol for communicating over networks, aka the internet;
- **Idempotent (Stateless)** - Side-effect free, can happen multiple times without affecting the data state;
- **Resource** - A single instance of an object in an endpoint request response;
- **REST (RESTful)** - Representational State Transfer, an architectural style for the design of network-based software;
- **SSL** - Secure Socket Layer, the standard security technology for establishing an encrypted link between a web server and a browser
- **URL** - Uniform Resource Locator and is a reference (an address) to a resource on the Internet.
- **URL Segment** - A slash-separated piece of information in the URL;

### AIM

The aim of this design guide is to assist in the planing and development of a REST API.

### Overview

An API is an: Application Programming Interface. An interface for one piece of software to talk to another[^concepts] and data to be shared. It is a set of endpoints for serving up data.

### REST API

REST API is an architectural design style that follows a defined set of objectives. It was first defined by Roy [Thomas Fielding](https://en.wikipedia.org/wiki/Roy_Fielding) in his 2000 PhD dissertation “Architectural Styles and the Design of Network-based Software Architectures”.

The REST architectural style aims to be:

- **Stateless:** each request contains all the information needed to complete the request;
- **Independent:** client-server model allows for different client environments and implementations to use the API;
- **Cacheable:** responses define themselves as cacheable or not, improving latency, scalability and responsiveness;
- **Granularity:** use the lowest possible level of deatil to satisfy as many difference requirements and use cases as possible;
- **Secure:** use of HTTP authorisation headers to securely send data;
- **Encapsulation:** expose only the date data you want to, in a controlled way;

### Success

A successful REST API, is one that:

- Has good documentation that is easy to find;
- Uses web standards where they make sense;
- Is friendly to the developer and can be explored via a browser address bar;
- Is simple, intuitive and consistent to make adoption not only easy but pleasant;
- Provides enough flexibility to power the majority of development environments;
- Is efficient, while maintaining a balance with other requirements;
- Has been developed using Test Driven Development (TDD) principles

### Documentation

The API should be well documented with cURL examples with JSON responses. A cURL examples can be cut-and-pasted, removing any ambiguity regarding endpoint calls and applicable JSON responses.

### API BASE/ROOT URL

The root or entry point into the API should be as simple as possible. Long complex URLs appear daunting. Two common API roots are:

1. `https://api.example.com/*`
2. `https://example.com/api/*`

The single root entry point should contain some basic information about the API, such as:

- Information on the API version;
- Supported features;
- A list of top-level collections;
- A list of singleton resources;
- A small summary of operating status;
- Some statistics;
- A link to the documentation

### Versioning

The version number should refer to major releases of the API. An API is never going to be stable, change is inevitable in fact needed. What is important is how that change is managed. When third-party software applications (clients) integrate with your API, they become dependent on the availability of the API. Versioning allows for backwards compatibility and continued development.

There are two common methods for managing API versions:

1. in the request HTTP header;

```html
Accept: application/com.ianteda.app-v3+json
Content-Type: application/com.ianteda.app-v3+json 
```

1. in the URL;

```html
GET https://api.example.com/v1/endpoint
```

This guide recommends option 2. Having the API version in the endpoint URL, it is obvious and human readable.

### Security

All API requests and responses should be over SSL (HTTPS). Do not redirect non-SSL requests to the SSL endpoint, as this can leak information. Instead throw an API error response when the request comes over non-SSL.

With the use of Webtokens, SSL simplifies the authentication model. Never use a custom authentication protocol, stick to the standards like [Oauth 2](https://oauth.net/2/). Webtokens means the users state (authentication) is kept on the user end, sot that every request can be authenticated against the webtokens. This avoids server session states, sticking to the REST stateless server principle.

Access within the API should be based on the resource not the endpoint URL.

Use request rate limiting to the endpoints, to avoid performance issues.

Keep in mind when providing authentication responses that:

- **401 "Unauthorized"** - Really means unauthenticated. You need valid credentials for me to respond to this request;
- **403 "Forbidden"** - Really means unauthorized. I understood your credentials, but sorry, you are not allowed to access that resource;

### Error Messages

When responding with an error the JSON body should return a useful error message, a unique internal error code with reference to documentation, a detailed description and a 400 http status. Error messages should be human-readable from the browser, include a diagnostic message to help the consumer resolve the error condition and be as descriptive as possible.

```json
Status: 400 BAD REQUEST
{
  "code" : unique_project_code,
  "property" : "What caused the error",
  "message" : "Something bad has happened :(",
  "description" : "More details about the error here",
  "developer_message : "Extra information to help resolve the error response",
  "documentation_url": "https://ianteda.com/api/documentation"
}
```

### Endpoints

#### Rules

Some Endpoint rules to keep in mind:

- **Nouns** - Always represent endpoints with nouns, not verbs;
- **Plurals** - Always use the plural of the noun. It avoids confusing pluralisation such as person and people;
- **Logical** - Endpoints should make sense from the perspective of the API consumer. Aka developer, not the data model;
- **Not one-to-one** - Endpoints don't necessarily need to or make sense to map one-to-one to the data (database) model;
- **Actions** - Endpoint actions should be verbs;
- **down case** - Down case end points and actions;
- **Snake Case** - Use snake_case;
- **Full Path** - In your responses provide a link to the fully qualified canoncial API path;
- **Resource Created** - When posting (creation and update) to an endpoint the response should return the resource created;
- **Names and IDs** - Accept Ids and names in endpoint requests;
- **Limit Nesting** - Limit endpoint nesting;
- **Human Readable** - The API response should  be human readable, pretty print by default. i.e. Do not remove white space;
- **GZip** - Compress responses, since we are going pretty print response with whitespaces;
- **Cache** - Cache responses with ETag and `Cache-Control: max-age=0, private, must-revalidate`;
- **Media Type** - Use Media Type `Content-Type: application/json; charset=utf-8`;
- **Expansion** - Keep response as small as possible with links to expansion (or materialisation);
- **Documentation** - Each endpoint should provide a link to its documentation;
- **Boolean** - Treat boolean actions on a resource as a sub resource. `PUT /resource/{key}/activate`;
- **Granularity:** Keep resource detail to the lowest practical level with links to expansion;
- **Multiple Endpoing Query:** Create an endpoint for multiple resource queries, such as search;
- **Analytics** - Keep track of the version/endpoints of your API being used by Consumers;
- **Response Output** - Use JSON;

#### Actions

Typical actions on an endpoint

MethodURI end pointNotesGET/resourceReturns a list of all the resources in the collection. By default items in the list are a minimal representation of themselvesGET/resource/{key}Returns the full content of the resource identified by the given key (name or id)POST/resourceCreate a new resourcePUT/resource/{key}Update a resource identified by the given key (name or id)PATCH/resource/{key}Partially update a resource identified by the given key (name or id)DELTE/resource/{key}Delete a resource identified by the given key (name or id)

#### Relationships

##### One to many relationships

If Relationships exist within a resource, extend the endpoint.

MethodURI end pointNotesGET/resource/{key}/relationshipRetrieve a list of relationships for the resource {key (name or id)}GET/resource/{key}/relationship/{key}Retrieve relationship {key} (name or id) for a given resource {key (name or id)}POST/resource/{key}/relationshipCreate a new relationship for a given resource {key (name or id)}PUT/resource/{key}/relationship/{key}Update relationship {key} (name or ide) for ticket {key (name or id)}PATCH/resource/{key}/relationship/{key}Partially update relationship {key (name or id)} for resource {key (name or id)}DELETE/resource/{key}/relationship/{key}Delete relationship {key (name or id)} for resource {key (name or id)}

##### Many to many relationships

If the relationship exists external to a resource, provide an end point for the relationship. With a href link within the resource response to the relationship. By creating an endpoint for the relationship it can be deleted without deleting the resource.

#### Provide Request-Ids for Introspection

Include a Request-Id header in each API response, populated with a UUID value. By logging these values on the client, server and any backing services, it provides a mechanism to trace, diagnose and debug requests.

#### Pagination

Divide large responses across multiple requests with pagination. Using offset and limit parameters

- `../resource?offset=50&limit=25` - Will return a response starting from 50 of the next 25 resource items.

Provide links within the paged response to other pages.

```json
{
  "first" : "/resource/00001",
  "previous" : "/resource/34523",
  "next" : "/resource/34525",
  "last" : "/resource/8764534",
  "index : {
    00001: "/resource?offset=0&limit=25",
    00002: "/resource?offset=25&limit=25",
    00003: "/resource?offset=50&limit=25"
  }
}
```

#### Parameters

Complex result filters, sorting and searching can all be easily implemented as query parameters on top of the resource URL

##### Filtering

Use a unique query parameter for each field that implements filtering. When requesting a list of resources from the /resources endpoint the default should be the smallest practical, say those in the open state. Provide a mechanism to return all `GET /resources?state=all` or those closed `GET /resources?state=closed`

##### Sorting

Use the a generic parameter such as `?sort=` to describe sorting rules for a resource endpoint. Accommodate complex sorting requirements with a list of comma separated fields, each with a possible unary negative for descending order or positive.

- `GET /resources?sort=-priority` - Responds with a list of resources in descending order of priority field
- `GET /resources?sort=-priority,created_at` - Responds with a list of resources in descending order of priority.  With older resources within the priority being first.

##### Searching

Sometimes basic filters is not enough and you need the power of full text search. Use a query parameter on the resources endpoint `?query=search term`. Search queries should be passed straight to the search engine and API output should be in the same format as a normal list result.

To make the API experience more pleasant for the average consumer, consider packaging up sets of query conditions into easily accessible endpoints.

### HTTP status codes

HTTP status codes can help your consumers navigate your API. Providing context to the API responses.

Useful list of API HTTP status codes

CodeStatusNotes200OKResponse to a successful GET, PUT, PATCH or DELETE. Can also be used for a POST that doesn't result in a creation201CreatedResponse to a POST that results in a creation. Should be combined with a Location header pointing to the location of the new resource204No ContentResponse to a successful request that won't be returning a body (like a DELETE request)304Not ModifiedUsed when HTTP caching headers are in play400Bad RequestThe request is malformed, such as if the body does not parse401UnauthorizedWhen no or invalid authentication details are provided. Also useful to trigger an auth popup if the API is used from a browser403ForbiddenWhen authentication succeeded but authenticated user doesn't have access to the resource404Not FoundWhen a non-existent resource is requested405Method Not AllowedWhen an HTTP method is being requested that isn't allowed for the authenticated user410GoneIndicates that the resource at this end point is no longer available. Useful as a blanket response for old API versions415Unsupported Media TypeIf incorrect content type was provided as part of the request422Unprocessable EntityUsed for validation errors429Too Many RequestsWhen a request is rejected due to rate limiting

##### References

- [10 Design Tips For APIs](https://phraseapp.com/blog/posts/best-practice-10-design-tips-for-apis/)
- [Application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface)
- [Best Practices for a Pragmatic RESTful API](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [Beautiful REST & JSON APIs](https://www.youtube.com/watch?v=mZ8_QgJ5mbs)
- [How to design a REST API](http://blog.octo.com/en/design-a-rest-api/)
- [Representational state transfer](https://en.wikipedia.org/wiki/Representational_state_transfer)
- [REST API Design - Resource Modeling](https://www.thoughtworks.com/insights/blog/rest-api-design-resource-modeling)
- [REST API concepts and examples](https://www.youtube.com/watch?v=7YcW25PHnAA)
- [Thoughts on RESTful API Design](https://restful-api-design.readthedocs.io/en/latest/)
- [What Exactly is RESTful Programming](http://stackoverflow.com/questions/671118/what-exactly-is-restful-programming)
