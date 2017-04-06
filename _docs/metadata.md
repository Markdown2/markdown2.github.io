---
title:  "Document Metadata"
menu:   "Metadata"
order: 500
---

At the bottom of your document you can include configuration section. There you can set some page rendering parameters. This will not be visible by default. 

Some of engines like Jekill already use something like that. We would not like to breack backward compatibility, but we would like to bring this section at the bottom of the page.

In order to support Jekyll syntax we recommend this section at very bottom but possible at very top too.



 	  ---
    columns=2;
    prettify=1;
    bootstrap=1;
    tables_class=table table-stripped;
    img_class=img-rounded
    css=http://mycss.com/bootstrap.css;
    javascript=http://mycss.com/bootstrap.js;
    author=Sergey Romanov;
    email=myemail@mail.ru;
    gravatar=myemail@mail.ru;
    profile=http://mysite.com;
    date=20013-12-25 00:00:00;
    ---

It is more of a free tog o section. You can put there whatever you want. I mean different markdown processors may accept different parameters. But we will try to also create set on standard parameters.

Here is the list of all possible configuration values.

Value         | Default | Description
--------------|---------|---
`columns`     | 2       | how many columns document should be. Apply CSS `column-count` property.
`syntax_theme`    | 0       | Will load Google prettifier script on the page al call it.
`css_framework`    | bootstrap | This will tell parser what classes to add to typography in CSS Framework section.
`css`         | none    | Will import CSS file on the page. You can include few separated by coma.
`js`  | none    | Will load external Javascript. You can include few separated by coma.
`date` |  none | Publish date. Will be placed at the bottom of document. Time is optional.
`disqus` | | Insert [Disqus](http://www.disqus.com) comment system.
`idebate` | | Insert [IntenseDebate](http://intensedebate.com/) comment system.

Also posible

- Cackle
- Facebook
- VK

`css` and `js` result example.

	<style type="text/css">
	  @import url("http://mycss.com/bootstrap.css");
	</style>
	<script src="http://mycss.com/bootstrap.js"></script>

> TODO: List of parameters