---
title: Typography
menu: Typography
order: 200
---

There is very little to add to typography for current Markdown but there still is something.

## Sup

**Markdown**

```
^2^
```

**Raw HTML**

	<sup><small>2</small></sup>

**Examples**

Markup | HTML | Result
-------|------|---
`C^0^` | `C<sup><small>0</small></sup>` | C<sup><small>0</small></sup>  
`Compant^®^` | `Company<sup><small>®</small></sup>` | Company<sup><small>®</small></sup>

## Small and Big

Although `<big>` is deprecated in HTML5 it is still supported by all browsers and in fact very handy.

**Markdown**

	--small text-- and ++big text++

**Raw HTML**

	<small>small text </small> and <big>big text</big>

**Examples**

<small>small text</small>
and <big>big text</big>


## Keyboard keys

One of the very important thing is `<kbd>` tag. With proper formating it may be very useful for PC related tutorials. Or comments on [superuser.com](http://superuser.com) or other [stackoverflow.com](http://stackoverflow.com/) like websites.  

**Markdown**

	Please use [Ctrl]+[v] or [⌘]+[v] for Mac to insert message.

**Raw HTML**

	Please use <kbd>Ctrl</kbd>+<kbd>v</kbd> or <kbd>⌘</kbd>+<kbd>v</kbd> for Mac to insert message.

**Examples**

Please use <kbd>Ctrl</kbd>+<kbd>v</kbd> or <kbd>⌘</kbd>+<kbd>v</kbd> for Mac to insert message.

It is important to understand how it works if you want to use it.

1. It will convert any single character in square brackets.
2. It will convert any string in square brackets from list bellow.

List of allowed strings.

- `[Ctrl]`
- `[Alt]`
- `[Shift]`
- `[Command]`
- `[Windows]`
- `[Tab]`
- `[Backspace]`
- `[Insert]`
- `[Delete]`
- `[Enter]`
- `[F(1-16)]`
- `[Ctrl *]`
- `[Alt *]`
- `[Shift *]`
- `[Command *]`
- `[Windows *]`

Where `*` is any single symbol. For example `[Command ⌘]`.

All other texts in single square brackets will be ignored.

## Code

This already in Markdown for ages. Why not add it to this standart? 

**Markdown**

	```php
	<?php echo phpinfo(); ?>
	```

**Result**
	
```php
<?php echo phpinfo(); ?>
```

> TODO: think what highlight engine to use, to be compatile to standard CSS themes.

## Table

Although there already is table syntax, to be true it is absolutely unreadable in plain text format. I mean it might looks good for small table like this.

	Name  | Lunch order | Spicy  | Owes
	------| ----------- | ------ | -----:
	Joan  | saag paneer | medium | $11
	Sally | vindaloo    | mild   | $14
	Erin  | lamb madras | HOT    | $5


But for table where cell text may exceed one line in plain text it looks messy. And if you want to insert code examples or few paragraphs it become merely at all impossible. 

This is why we wan to create readable alternative table layout.

**Markdown**

	| Method Name | Description |
	|===========================|
	
	Method Name: `insert()`
	
	Description: This method insert values into page. It accept `$list` parameter.
	
	- `$list` - array or elements
	
	Here is the example
		
		<?php  insert(array($page, $header)); ?>
		
	|===========================|
	
	Method Name: `delete()`
	Description: This method deletes given element.
	
	- `$element` - string element name
	
	Here is the example
		
		<?php  delete('header'); ?>
	|__________________________|

As you can see this is very readable text format of table. First you set header and define number of columns and columns names.

	| Method Name | Description |
	|===========================|

Then you list your table rows vertically separating them with 
	
	|===========================|

And you end table with 

	|__________________________|

There have to be at least 3 symbols between `|`. `|===|` and `|___|` will work as well. 

You start every sell with column name and semicolon `:`. 

	Method Name: `delete()`
	Description: This method deletes given element.

You can insert new lines between every cell content. This will work as well.

**Raw HTML**

```html
<table>
    <thead>
    <tr>
        <th>Method Name</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>insert()</code></td>
            <td>
                <p>This method insert values into page. It accept <code>$list</code> parameter.</p>

                <ul>
                    <li>
                        <code>$list</code> - array or elements
                    </li>
                </ul>

                Here is the example

                <pre>&lt;?php  insert(array($page, $header)); ?&gt;</pre>
            </td>
        </tr>
        <tr>
            <td><code>delete()</code></td>
            <td>
                <p>This method deletes given element.</p>

                <ul>
                    <li>
                    <code>$element</code> - string element name
                    </li>
                </ul>

                Here is the example

                <pre>&lt;?php  delete('header'); ?&gt;</pre>
            </td>
        </tr>
    </tbody>
</table>
```
	
**Result**

<table>
	<thead>
	<tr>
		<th>Method Name</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>insert()</code></td>
			<td>
				<p>This method insert values into page. It accept <code>$list</code> parameter.</p>

				<ul>
					<li>
						<code>$list</code> - array or elements
					</li>
				</ul>

				Here is the example

				<pre>&lt;?php  insert(array($page, $header)); ?&gt;</pre>
			</td>
		</tr>
		<tr>
			<td><code>delete()</code></td>
			<td>
				<p>This method deletes given element.</p>

				<ul>
					<li>
					<code>$element</code> - string element name
					</li>
				</ul>

				Here is the example

				<pre>&lt;?php  delete('header'); ?&gt;</pre>
			</td>
		</tr>
	</tbody>
</table>
