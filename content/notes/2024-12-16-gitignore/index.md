---
# [Front Matter Formats](https://gohugo.io/content-management/front-matter/)
title: "Gitignore"
description: "Notes on using .gitignore"
keywords:
  - Git
  - Gitignore
  - .gitignore
date: 2024-12-16
publishDate: 2024-12-16
lastmod: 2024-12-16 
slug: gitignore
tags:
  - "Git"
draft: false
# Template specific - Minimo Theme
cover:
  image: /images/covers/cover-old-typewriter.png
  caption: "Old Typewritter"
  style: full
---

Note to future self when setting up a new Git repository.

Ignore all dot files by exeption

```
# By Default, Ignore any .*, except for:
.*
!.gitignore
!.github
!.devcontainer
!.vscode
!.gitmodules
```

