---
title:  "CSS Frameworks"
menu: "Styles"
order: 300
---

[Twitted bootstrap](http://twitter.github.io/bootstrap), ZURB Foundation are most popular frontend development CSS framework nowadays. It is absolutely useful to have support of it. It means that you can use standard bootstrap classes to format your page. And you do not need to style it. Just include `bootstrap.css`.

There is a parametr in meta section that tells interpriter to what framework to style document Twitter Bootstrap or Zurb Faundation or Materialize. Those are 3 major frameworks plan to support.

> TODO: Example of HTML generation for each framework.

On the other hand if you do not use or do not want to use bootstrap, this is still very useful and you can just ad your own CSS to format bootstrap classes that are used by Markdown 2.

## Badges and Labels

**Markdown**

```
There are ((12)) pieces but only !((5)) of them are ![[usable]] and ((7)) are [[unusable]].
```

**Raw HTML**

```html
There are <span class="badge">12</span> pieces but only <span class="badge badge-important alert">5</span>
of them are <span class="label label-important alert">usable</span> and <span class="badge">12</span> 
are <span class="label">unusable</span>.
```

**Result**

There are <span class="badge">12</span> pieces but only <span class="badge badge-important">5</span> of them are <span class="label label-important">usable</span> and <span class="badge">12</span> are <span class="label">unusable</span>.


## Lead text

lead text is just like blockquote starts with `>` but with `!!!`

**Markdown**

	!!! This is is lead text

**Raw HTML**
	
	<div class="lead">This is lead text</div>

**Result**

<div class="lead">This is lead text</div>




## Hero unit

**Markdown**

	#####################################
	Welcome To Markdown2
	---
	
	Awesome way to create text to HTML documents.
	
	#####################################

**Raw HTML**

	<div class="hero-unit">
		<h1>Welcome To Markdown2</h1>
		<p>Awesome way to create text to HTML documents.</p>
	</div>

**Result**
<div class="hero-unit">
	<h1>Welcome To Markdown2</h1>
	<p>Awesome way to create text to HTML documents.</p>
</div>