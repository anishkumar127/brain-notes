-   `visible` - Default. The overflow is not clipped. The content renders outside the element's box
-   `hidden` - The overflow is clipped, and the rest of the content will be invisible
-   `scroll` - The overflow is clipped, and a scrollbar is added to see the rest of the content
-   `auto` - Similar to `scroll`, but it adds scrollbars only when necessary

**Note:** The `overflow` property only works for block elements with a specified height.

## overflow-x and overflow-y

The `overflow-x` and `overflow-y` properties specifies whether to change the overflow of content just horizontally or vertically (or both):

`overflow-x` specifies what to do with the left/right edges of the content.  
`overflow-y` specifies what to do with the top/bottom edges of the content.

```css
div {  overflow-x: hidden; /* Hide horizontal scrollbar */  
  overflow-y: scroll; /* Add vertical scrollbar */}
```

