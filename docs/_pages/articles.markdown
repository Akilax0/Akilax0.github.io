---
layout: page
title: Articles
permalink: /articles
---

{% for post in site.categories.articles %}
   -  [{{post.title}}]({{post.url}})
{% endfor %}