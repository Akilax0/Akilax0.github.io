---
layout: page
title: Projects
permalink: /projects/
---
<!-- <section class="list">
    {% for post in site.posts %}
        {% if post.projects %}
            {% if post.hidden != true %}
                <div class="item {% if post.star %}star{% endif %}">
                    <a class="url" href="{% if post.externalLink %}{{ post.externalLink }}{% else %}{{ site.url }}{{ post.url }}{% endif %}">
                        <aside><time datetime="{{ post.date | date:"%d-%m-%Y" }}">{{ post.date | date: "%b %d %Y" }}</time></aside>
                        <h3 class="title">{{ post.title }}</h3>
                    </a>
                </div>
            {% endif %}
        {% endif %}
    {% endfor %}
</section> -->

{% for post in site.categories.projects %}
   -  [{{post.title}}]({{post.github}})
   <br>
   {{post.description}}
{% endfor %}