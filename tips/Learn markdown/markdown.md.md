# Markdown

Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

---
## Cheat-Sheet

### Headings
```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

Here is a heading: `# Heading`, **don't do this:** `#Heading` 

### Emphasis
```markdown
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

### Line Breaks
```markdown
First line with two spaces after.  
And the next line.
```

### Lists

#### Ordered Lists
```markdown
1. First item
2. Second item
3. Third item
```

#### Unordered Lists
```markdown
- First item
- Second item
- Third item
```

### Links
```markdown
Link with text: [link-text](https://www.google.com)
```

### Images
```markdown
Image with alt text: ![alt-text](https://camo.githubusercontent.com/4d89cd791580bfb19080f8b0844ba7e1235aa4becc3f43dfd708a769e257d8de/68747470733a2f2f636e642d70726f642d312e73332e75732d776573742d3030342e6261636b626c617a6562322e636f6d2f6e65772d62616e6e6572342d7363616c65642d666f722d6769746875622e6a7067)

Image without alt text: ![](https://camo.githubusercontent.com/4d89cd791580bfb19080f8b0844ba7e1235aa4becc3f43dfd708a769e257d8de/68747470733a2f2f636e642d70726f642d312e73332e75732d776573742d3030342e6261636b626c617a6562322e636f6d2f6e65772d62616e6e6572342d7363616c65642d666f722d6769746875622e6a7067)
```

### Code Blocks

#### Inline Code Block
```markdown
Inline `code` has `back-ticks around` it.
```

#### Blocks of Code
<pre>
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```
</pre>

### Tables

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily.

```markdown
| Heading 1 | Heading 2 | Heading 3 |
|---|---|---|
| col1 | col2 | col3 |
| col1 | col2 | col3 |
```

### Bold

```markdown
**bold text**
```

### Italic

```markdown
*italicized text*
```

### Blockquote

```markdown
> blockquote
```

### Horizontal Rule

```markdown
---
```

### Link
```markdown
[Markdown Guide](https://www.markdownguide.org)
```

### Image
```markdown
![alt text](https://www.markdownguide.org/assets/images/tux.png)
```

## Extended Syntax

```markdown
These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.
```
  
### Fenced Code Block

```

{

  "firstName": "John",

  "lastName": "Smith",

  "age": 25

}

```
### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term

: definition

### Strikethrough

~~The world is flat.~~

### Emoji

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

I need to highlight these ==very important words==.


### Subscript

H~2~O

### Superscript

X^2^

### Task list

To create a task list start line with square brackets with an empty space.
Ex: [ <space> ] and add text for task.
To check the task replace the space between the bracket with "x".

```markdown
[x] Write the post
[ ] Update the website
[ ] Contact the user
```