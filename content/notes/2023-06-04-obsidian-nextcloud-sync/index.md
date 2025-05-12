---
# [Front Matter Formats](https://gohugo.io/content-management/front-matter/)
title: "Syncing Obsidian to Nextcloud"
description: "Sync Obsidian vault across multiple devices using Nextcloud as WebDav"
keywords: "Express Setup"
date: 2020-10-12
publishDate: 2020-10-12
lastmod: 2020-10-14
slug: obsidian-nextcloud-sync
# aliases:
# - old_url_path
# - another_old_ulr_path
# categories:
# - category_1
# - category_2
# series:
# -  series 1
tags:
- "Obsidian"
- "Nextcloud"
- "WebDAV"
draft: true
# Template specific - Minimo Theme
cover:
  image: /images/covers/cover-flower-2.png
  caption: "Cover Flower"
  style: full
---

Nextcloud fully supports the WebDAV protocol so you can connect and synchronize files through a Nextcloud instance

## Obsidian

Enable community plugins

Download [Remotely Save](obsidian://show-plugin?id=remotely-save) plugin.

Once downloaded goto the `Remotely Settings` and 

Choose a Remote Service: "Webdav"

Replace `{{nextcloud.server}}` with your nextcloud URL and `{{user}}` with your nextcloud user name

Server Address: `https://{{nextcloud.server}}/remote.php/dav/files/{{user}}/`

Username: `{{user}}`
Password: nextcloud app password