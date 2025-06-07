---
title: "Ansible User"
description: "Creating an ansible user on a remote host"
keywords:
  - Ansible
  - SSH
date: 2025-05-13
publishDate: 2025-05-13
lastmod: 2025-06-07
slug: ansible-user
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
  - "SSH"
  - "Code"
draft: false
# Template specific - Minimo Theme
cover:
  image: /images/covers/ansible_logo.webp
  caption: "Ansible Logo"
  style: full
---

I use [Ansible](https://www.redhat.com/en/ansible-collaborative) to manage my home network. It helps automate repetitive computer tasks, making it easier to repeat the process of setting up and managing computers.

I like to create a specific `ansible` user on the remote host computer so that Ansible can do its thing. Additionally, Ansible requires `ssh` access to the computer, and since Ansible will not work without a remote user, it is a manual task I find myself doing a bit.

The process includes creating a remote user, copying the `ansible` public SSH key to the remote machine, and update `~./ssh/config` to alias the Ansible user for easier login.

## 1. Create Remote User

First, we need to create the Ansible user on the remote machine by SSH'ing into the remote machine with an existing user, adding the `ansible` user, making sure they are a `sudo` user, and exiting from the SSH session.

```bash
ssh <existing_user>@<computer>
```

```bash
sudo adduser ansible
```

```bash
usermod -aG sudo ansible
```

```bash
exit
```

## 2. Copy SSH Public Keys

Next, we need to copy the `ansible` SSH public key into the authorized_keys of the remote computer to allow passwordless login with the SSH private/public keys. We can do this by utilising the `ssh-copy-id` command and ensuring the file permissions are set correctly on the remote computer.

```bash
ssh-copy-id -p 2222 -f -i ~/.ssh/ansible.pub ansible@<computer>
```

```bash
ssh -p 2222 -i ~/.ssh/ansible.pub ansible@<computer> "chmod 700 .ssh; chmod 640 .ssh/authorized_keys"
```

## 3. Alias Ansible in SSH Config

The final step is to update [`.shh/config`](https://linuxize.com/post/using-the-ssh-config-file/) to alias the `ansible` user and remote computer in the SSH config file so we do not need to use the port and identity flags when SSH'ing in.

```ini
#-- ~./ssh/config

... existing code ...

Host <computer>
 HostName <computer>
 IdentityFile ~/.ssh/ansible
 User ansible
 Port 2222

... existing code ...
```

## 4.Login Test

Now we should be able to test the setup by logging into the remote machine using a passwordless  `ssh` connection.

```bash
ssh ansible@<computer>
```
