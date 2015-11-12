Website Performance Optimization portfolio project
==================================================

## Synopsis

This is my fourth project in the Udacity frontend nanodegree program, which
focuses on web optimization.  You can view the final project
[here](http://tneisinger.github.io/frontend-nanodegree-mobile-portfolio).

The source code for this project can be found in src/ while the optimized code
is saved in the dist/ directory.

## Setup

If you simply want to view the final project, you can do so
[here](http://tneisinger.github.io/frontend-nanodegree-mobile-portfolio).  If
you would like to install and run this project on your local machine, simply
clone this repo and open the dist/index.html file in your favorite web browser.

All source code for this project is located in the src/ directory.  This
project uses npm and grunt to minify images and source code and place the
minified files into the dist/ directory.  If you wish to modify the source
code, it is recommended that you use grunt in order for your changes to the
source code in src/ to be reflected in the dist/ directory.

## Optimizations of views/js/main.js

Two main features were addressed in optimizing the pizza.html page: the
animation of the background pizzas when the page was scrolled, and the resizing
of the foreground pizzas when the input slider was adjusted.

To improve the scrolling animation, I performed the following optimizations:

- Remove superfluous pizzas from the background. (Reduced from 200 to 50)
- Move animating javascript into a requestAnimationFrame function.
- Move calculations and element selections out of for-loops where possible.
- Use getElementsByClassName instead of querySelectorAll.
- Use transform for animation rather than left, right, top, or bottom.
- Store all the moving pizzas in a global variable to avoid repeated lookups.

To improve the responsiveness of the resizable foreground pizzas, I performed
the following optimizations:

- Modify changePizzaSizes function to prevent forced synchronous layouts.
- Simplify the changePizzaSizes function, removing extra calculations.
