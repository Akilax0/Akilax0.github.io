---
layout: post
title:  "Jekyll Setup"
date:   2022-06-27 18:41:19 +0530
categories: notes
author: "Akilax0"

---


# Jekyll

## Setup

- Install ruby and gem
    
    ```bash
    sudo apt install ruby gem 
    ```
    
- install jekyll and bundler for to create site
    
    ```bash
    gem install jekyll bundler
    ```
    
- create new site
    
    ```bash
    jekyll new {website_name}
    ```
    
- run site locally
    
    ```bash
    bundle exec jekyll serve {--livereload}
    ```
    
- if webrick error add
    
    ```bash
    gem "webrick"
    ```
    
    to the Gemfile and run 
    
    ```bash
    bundle install
    ```
    

_posts

contains all the blog posts written in md. 

_site

folder structure to host site independently(on a server)

_drafts 

contains drafts of blog posts


```markdown
jekyll serve --draft
```

Doesn’t have to name a draft in a special convention with date. will be assigned the last edited. 

## Blog post


```markdown
---
layout: post
title:  "HELLO to Jekyll!"
date:   2022-06-27 18:41:19 +0530
categories: jekyll delete
author: "Akilax0"

---

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/\
```

The first lines contains the parameters for the post which will be used by the page generator. The pages are named in given format so they can be built with given permalink and design. 

## Creating Page

Pages on website not a blog.

Ex : about.md

created at root or at given dir. Same as conventional sites. 

## Permalinks 

Can see the folder structure at _site 

categories depend on front matter. can define a permalink to regardless.

```markdown
permalink: "/new-url/test"
```

uses this instead of date. Can also use variables from the front matter. 

```markdown
permalink: "/:categories/:year/:month/:day/:title"
```

recommend to use for each page.

## Default Front matter

The default yaml even without typing them in individually.

Edit the _config.yml file with 

```yaml
#Defaults 
defaults:
  - 
    scope:
      path: ""
      type: "posts"
    values: 
        #values
        layout: "post"
```

Here we define a scope for the defaults. 

**path** : defines which files under path defined would get effected. based on the site structue.

**type** :  based on the type defined in the front matter. 

**values** : defines the attributes to be added. 

→ Restart server after editting _config.yaml


## Themes

Install themes from 

[https://rubygems.org/](https://rubygems.org/)

add theme to Gemfille and run

```bash
bundle install
```

Change the theme in _config.yaml

→ might want to edit the layouts to according to the _layouts available in the theme

## Layouts

can define layouts under the directory 

_layouts

this will override or create new layouts to be used by the pages. 

```html
---
layout: "page"
--- 

<h1>This is a post</h1>
<hr>

{{content}}
```

This will put the .md content to the page. Also note that using the layout: page becomes a higher level layout for this layout.

## Variables

can be used in the html layout pages 

```html
//page level
{{page.author}}

//layout level
{{layout.author}}

//site level defined in the config.yaml
{{site.title}}
```

For adding a title on site

```html
<html>
<head>
    <meta charset="UTF-8">
    <title>{{site.title}}</title>
</head>
<body>
    {{content}}
</body>
</html>
```

[https://jekyllrb.com/docs/variables/](https://jekyllrb.com/docs/variables/)

## Includes

Includes to be used on sites. Create a folder at root as _includes.

For example if defining a header to be included in the layouts create a file as header.html

```html
<h1 style="color: {{ include.color }}">{{site.title}}</h1>
<hr><br>
```

Then we can access them in the layouts as 

```html
<body>
    {% include header.html color="blue" %}
    {{content}}
</body>
```


Here the variable color is passed back to the header file. 

## Looping through posts

Lets say want to loop through posts and display on a home.html

```html
{% for post in site.posts %}
    <li><a href="{{ post.url }}">{{post.title}}</a></li>
{% endfor %}
```

loops through the posts and lists the links of each post. Also can be done for other categories/layouts as well.

## Conditionals


Checking for conditions in each page.

Color the current post red

## Data Files

Can create in

- YAML
- JSON
- CSV

These files are stored under _data folder.

Can be accessed as 




You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/