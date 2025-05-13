---
title: "Ansible Playbook Template"
description: "A git repository template for getting started with a multi-host playbook."
keywords:
  - Ansible
  - Playbook
  - Ansible Playbook
date: 2025-05-14
publishDate: 2025-05-14
lastmod: 2025-05-14
slug: ansible-playbook-template
# aliases:
# - old_url_path
# - another_old_ulr_path
# categories:
# - category_1
# - category_2
# series:
# -  series 1
tags:
  - "Ansible"
  - "Code"
draft: false
# Template specific - Minimo Theme
cover:
  image: /images/covers/ansible_logo.webp
  caption: "Ansible Logo"
  style: full
---

I have created a repository at [https://github.com/IanTeda/ansible_playbooks_template](https://github.com/IanTeda/ansible_playbooks_template) to capture my practice of maintaining a multi-host ansible playbook. The repository is a template for getting started with [Ansible](https://www.redhat.com/en/ansible-collaborative). It follows the folder and file structure I found the easiest to use

## Repository Structure

I have put together this repository with the following Ansible structure:

1. ansible.cfg
2. Host Inventory
3. Group Variables
4. Host Variables

## Ansible Config

The `ansible.cfg` file sets the location of the following key files, and thus points Ansible to the correct folders and files:

- `inventory = ./inventory`
- `private_key_file = ~/.ssh/ansible`
- `vault_password_file = ~/.ansible/vault-pass.txt`

## Inventory

The host inventory has an entry point of `./inventory/all.yaml`, which builds out the children (groups). This file can be `.ini` or `.yaml`, I prefer to use `.yaml`
The inventory file are then broken out into the groups defined in `./inventory/all.yaml`

## Group Variables

The `./group_vars` are broken down into the groups defined in `./inventory/all.yaml. Global variables should be kept variables are defined in`./group_vars/all.yaml`. Variables of the same name in`./group_vars/all.yaml` will be overwritten by variables in groups suck as `/group_vars/debain.yaml'

## Host Variables

The `./host_vars` are broken down into the hosts nominated in inventory group files. Variables of the same name in these files will overwrite variables in `./group_vars`.

## Private Key File

`private_key_file` sets the default location of the Ansible user SSH private key that is used to access the remote host.

For some notes on creating an Ansible user check out [https://ianteda.com/notes/ansible-user/](https://ianteda.com/notes/ansible-user/)

## Vault Password File

`vault_password_file` sets the location of the Ansible password for encrypting and decrypting vaults. This stores the password in plain text and should be outside your repository with the appropriate file permissions set. This allows encrypted vaults to be stored in the repository without revealing secrets.
