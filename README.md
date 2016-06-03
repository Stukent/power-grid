# Power Grid
Power Grid is a responsive grid designed for web applications. Use Power Grid where other grid systems don't provide enough control.

With this you can create advanced layouts without playing with CSS. It's declarative which means it's easy to understand and debug.

There are three new `data-` attributes exposed:
- `data-pos` Position
- `data-grid` Grid Parameters
- `data-break` Responsive Breakpoints

## `data-pos`
The `data-pos` attribute is inspired by SVG Pathstrings. When present on a tag, the tags `position` is set to `absolute`. For example, if you want an element to be:

```css
div {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
```

Instead you would write:

```html
<div data-pos="T0 L0 R0 B0"></div>
```

And you'd get the same effect. Each unit here is 1/16 of a 320x320 grid, which means 20px or 6.25%. To use percentages instead of pixels, use a lowercase letter. For example, sometimes you want an element to stretch it's width with the screen. Here's a CSS example:
```css
div {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;

  width: 25%;
}
```
The element's width would stretch to 25%. You can do the same with the Power Grid:

```html
<div data-pos="T0 L0 B0 w4"></div>
```

Notice the `w4` is lowercase. All lowercase letters use percentages instead of pixels.

Using the `data-pos` attribute, you can set:
- `T` Top position in units of 20px (eg: `T3` => `top: 60px`)
- `L` Left position in units of 20px (eg: `L3` => `left: 60px`)
- `R` Right position in units of 20px (eg: `R3` => `right: 60px`)
- `B` Bottom position in units of 20px (eg: `B3` => `bottom: 60px`)
- `W` Width in units of 20px (eg: `W3` => `width: 60px`)
- `H` Height in units of 20px (eg: `H3` => `height: 60px`)
- `t` Top position in units of 6.25% (eg: `t3` => `top: 18.75%`)
- `l` Left position in units of 6.25% (eg: `l3` => `left: 18.75%`)
- `r` Right position in units of 6.25% (eg: `r3` => `bottom: 18.75%`)
- `b` Bottom position in units of 6.25% (eg: `b3` => `right: 18.75%`)
- `w` Width in units of 6.25% (eg: `W3` => `width: 18.75%`)
- `h` Height in units of 6.25% (eg: `H3` => `height: 18.75%`)

Sometimes you need to add two units together, adding `h2H2` would create an element with a height of `40px` plus `12.5%`.

Additionally, you can set the origin of an element to the center by using:
- `cx` Center Horizontally
- `cy` Center Vertically
- `cxy` Center Horizontally

## `data-grid`
Grids are container elements. There are two parameters you can set. By including `data-grid`, you set the element's `position` to `absolute`. If this is not the desired behavior, and you intended it to be `position: relative`, add `data-grid="inline"`.

The second parameter that you can set is the smallest size of the grid. By default, the grid has no defined size. All units are in 20px so the attribute `data-grid="12x2"` would create a div with a minimum size of 240px by 40px. The largest available size is 16x16, and the smallest is 0x0.

## `data-break`
This is where the real power of the Power Grid comes into play. If you had an element that had the attribute `data-pos="T0 R0 H4"` but you know that on smaller screens, the height needs to be half that size and on the bottom of the page, simply add `data-break="col2H2 col2B0"`. In the Power Grid, columns and rows are 320px. so using `col2H2` means on any screen size smaller than two columns, set the height to be two units. `data-break` can also show/hide elements by adding `hide` or `show`: `data-break="col2hide"`.
