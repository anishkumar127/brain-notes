## CSS [attribute] Selector

The `[attribute]` selector is used to select elements with a specified attribute.

The following example selects all <a> elements with a target attribute:

### Example

a[target] {  background-color: yellow;}


## CSS [attribute="value"] Selector

The `[attribute="value"]` selector is used to select elements with a specified attribute and value.

The following example selects all <a> elements with a target="_blank" attribute:

### Example

a[target="_blank"] {  background-color: yellow;}




## CSS [attribute~="value"] Selector

The `[attribute~="value"]` selector is used to select elements with an attribute value containing a specified word.

The following example selects all elements with a title attribute that contains a space-separated list of words, one of which is "flower":

### Example

[title~="flower"] {  border: 5px solid yellow;}


## CSS [attribute|="value"] Selector

The `[attribute|="value"]` selector is used to select elements with the specified attribute, whose value can be exactly the specified value, or the specified value followed by a hyphen (-).

**Note:** The value has to be a whole word, either alone, like class="top", or followed by a hyphen( - ), like class="top-text".

### Example

[class|="top"] {  background: yellow;}




### Reference

[Reference](https://www.w3schools.com/css/css_attribute_selectors.asp)

