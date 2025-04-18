---
layout: page
title: Blog
permalink: /blog
---
<!-- <section class="list">
	{% if site.posts.size == 0 %}
		<p class="text-center">Nothing published yet!</p>
	{% else %}
		{% for post in site.posts %}
			{% if post.categories == 'notes' %}
				{% if post.hidden != true %}
					{% include blog-post.html %}
				{% endif %}
			{% endif %}
		{% endfor %}
	{% endif %}
</section> -->
{% for post in site.categories.notes%}
   -  [{{post.title}}]({{post.url}})
{% endfor %}