---
layout: projects
title: Projects
permalink: /projects
---

{% for post in site.categories.projects %}
   -  [{{post.title}}]({{post.url}})
   <br>
   {{post.description}}
{% endfor %}