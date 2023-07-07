---
# [Front Matter Formats](https://gohugo.io/content-management/front-matter/)
title: "VS Code Recommended Extensions"
description: "Recommended VS Code extensions within your repository"
keywords:
- VSCode
- Recommended
- Plugins
date: 2023-07-07
publishDate: 2020-07-07
lastmod: 2020-07-07
slug: vscode-recommended-extensions
# aliases:
# - old_url_path
# - another_old_ulr_path
# categories:
# - category_1
# - category_2
# series:
# -  series 1
tags:
- "VSCode"
- "Programming"
draft: false
# Template specific - Minimo Theme
cover:
  image: /images/covers/vscode.png
  caption: "VS Code Cover Image"
  style: full
---

A good set of extensions can make working with a programming language more productive and often you'd like to share this list with others. You can create a recommended list of extensions for your project in the `extensions.json` folder within the `.vscode`.

`./.vscode/extensions.json`

```json
{
  "recommendations": [
    "plugin1", 
    "plugin2"
  ]
}
```

This page is a collection of `extension.json` files for different languages and projects.

## General

A collection of VS Code extensions for most projects and languages.

```json
{
  "recommendations": [
    "Gruntfuggly.todo-tree", 
    "eamodio.gitlens",
    "GitHub.copilot",
    "alefragnani.Bookmarks",
    "tomoki1207.pdf",
    "streetsidesoftware.code-spell-checker",
    "Tyriar.sort-lines"
  ]
}
```

## Rust

A collection of VS Code extensions for the Rust programming language

```json
{
  "recommendations": [
    "rust-lang.rust-analyzer",
    "vadimcn.vscode-lldb"
    "bungcip.better-toml"
  ]
}
```

## Hugo

A collection of VS Code extensions for the Hugo static website generator;

```json
{
  "recommendations": [
    "akmittal.hugofy",
    "nickdodd79.gulptasks"
  ]
}
```
