---
layout: page
title: Writeups
permalink: /writeups
---

{% for post in site.categories.writeups %}
   -  [{{post.title}}]({{post.url}})
{% endfor %}