---
---
var docs = {
{% for post in site.posts %}
    {% include post.json %},
{% endfor %}
{% for post in site.pages %}
    {% if post.url contains '.html' %}
        {% include post.json.liquid %},
    {% endif %}
{% endfor %}
};