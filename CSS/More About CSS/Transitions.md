CSS transitions allows you to change property values smoothly, over a given duration.

-   `transition`
-   `transition-delay`
-   `transition-duration`
-   `transition-property`
-   `transition-timing-function`

## How to Use CSS Transitions?

To create a transition effect, you must specify two things:

-   the CSS property you want to add an effect to
-   the duration of the effect

**Note:** If the duration part is not specified, the transition will have no effect, because the default value is 0.


## Specify the Speed Curve of the Transition

The `transition-timing-function` property specifies the speed curve of the transition effect.

The transition-timing-function property can have the following values:

-   `ease` - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
-   `linear` - specifies a transition effect with the same speed from start to end
-   `ease-in` - specifies a transition effect with a slow start
-   `ease-out` - specifies a transition effect with a slow end
-   `ease-in-out` - specifies a transition effect with a slow start and end
-   `cubic-bezier(n,n,n,n)` - lets you define your own values in a cubic-bezier function


## Delay the Transition Effect

The `transition-delay` property specifies a delay (in seconds) for the transition effect.

The following example has a 1 second delay before starting:

### Example

div {  transition-delay: 1s;}



## Transition + Transformation

The following example adds a transition effect to the transformation:

### Example

div {  transition: width 2s, height 2s, transform 2s;}



## More Transition Examples

The CSS transition properties can be specified one by one, like this:

### Example

div {  transition-property: width;  
  transition-duration: 2s;  
  transition-timing-function: linear;  
  transition-delay: 1s;}

or by using the shorthand property `transition`:

### Example

div {  transition: width 2s linear 1s;}

