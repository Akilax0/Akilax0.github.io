---
layout: projects
title: Projects
permalink: /projects
---

{% for post in site.categories.projects %}
   -  [{{post.title}}]({{post.github}})
   <br>
   {{post.description}}
{% endfor %}