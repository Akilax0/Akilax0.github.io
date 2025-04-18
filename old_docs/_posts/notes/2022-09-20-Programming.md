---
layout: post
title:  "Programming"
date:   2022-08-20 18:41:19 +0530
categories: notes 
author: "Akilax0"

---

# Programming


{% for post in site.categories.programming %}
   -  [{{post.title}}]({{post.url}})
{% endfor %}