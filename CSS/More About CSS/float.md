The `float` property is used for positioning and formatting content e.g. let an image float left to the text in a container.

The `float` property can have one of the following values:

-   `left` - The element floats to the left of its container
-   `right` - The element floats to the right of its container
-   `none` - The element does not float (will be displayed just where it occurs in the text). This is default
-   `inherit` - The element inherits the float value of its parent

In its simplest use, the `float` property can be used to wrap text around images.

 - clear: left;

If a floated element is taller than the containing element, it will "overflow" outside of its container. We can then add a clearfix hack to solve this problem:
```css
.clearfix {  overflow: auto;}
```

The `overflow: auto` clearfix works well as long as you are able to keep control of your margins and padding (else you might see scrollbars). The **new, modern clearfix hack** however, is safer to use, and the following code is used for most webpages:

### Example


```css
.clearfix::after {  content: "";  
  clear: both;  
  display: table;}
```


**What is box-sizing?**

You can easily create three floating boxes side by side. However, when you add something that enlarges the width of each box (e.g. padding or borders), the box will break. The `box-sizing` property allows us to include the padding and border in the box's total width (and height), making sure that the padding stays inside of the box and that it does not break.

