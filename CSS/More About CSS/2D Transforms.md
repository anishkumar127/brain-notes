## CSS 2D Transforms

CSS transforms allow you to move, rotate, scale, and skew elements.

## CSS 2D Transforms Methods

With the CSS `transform` property you can use the following 2D transformation methods:

-   `translate()`
-   `rotate()`
-   `scaleX()`
-   `scaleY()`
-   `scale()`
-   `skewX()`
-   `skewY()`
-   `skew()`
-   `matrix()`

## The translate() Method
The `translate()` method moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).

The following example moves the <div> element 50 pixels to the right, and 100 pixels down from its current position:

### Example

div {  transform: translate(50px, 100px);}


## rotate()

The `rotate()` method rotates an element clockwise or counter-clockwise according to a given degree.

The following example rotates the <div> element clockwise with 20 degrees:

### Example

div {  transform: rotate(20deg);}

Using negative values will rotate the element counter-clockwise.

## The scale() Method

The `scale()` method increases or decreases the size of an element (according to the parameters given for the width and height).

The following example increases the <div> element to be two times of its original width, and three times of its original height: 

### Example

div {  transform: scale(2, 3);}


The following example decreases the <div> element to be half of its original width and height: 

### Example

div {  transform: scale(0.5, 0.5);}


## The scaleX() Method

The `scaleX()` method increases or decreases the width of an element.

The following example increases the <div> element to be two times of its original width: 

### Example

div {  transform: scaleX(2);}


## The scaleY() Method

The `scaleY()` method increases or decreases the height of an element.

The following example increases the <div> element to be three times of its original height: 

### Example

div {  transform: scaleY(3);}


## The skewX() Method

The `skewX()` method skews an element along the X-axis by the given angle.

The following example skews the <div> element 20 degrees along the X-axis:

### Example

div {  transform: skewX(20deg);}


## The skewY() Method

The `skewY()` method skews an element along the Y-axis by the given angle.

The following example skews the <div> element 20 degrees along the Y-axis:

### Example

div {  transform: skewY(20deg);}


## The skew() Method

The `skew()` method skews an element along the X and Y-axis by the given angles.

The following example skews the <div> element 20 degrees along the X-axis, and 10 degrees along the Y-axis:

### Example

div {  transform: skew(20deg, 10deg);}


## The matrix() Method

The `matrix()` method combines all the 2D transform methods into one.

The matrix() method take six parameters, containing mathematic functions, which allows you to rotate, scale, move (translate), and skew elements.

The parameters are as follow: matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())

### Example

div {  transform: matrix(1, -0.3, 0, 1, 0, 0);}



