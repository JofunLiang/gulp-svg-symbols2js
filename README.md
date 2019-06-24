# gulp-svg-symbols2js - Embed SVG Symbols as JavaScript
The plugin inject SVG Symbols files into JavaScript, Works with gulp-svg-symbols.

# Usage

Install gulp-svg-symbols2js as a development dependency:
```
npm install --save-dev gulp-svg-symbols2js
```

Next, add it to one of the streams in your gulpfile.js:
```js
var gulp = require('gulp');
var svgSymbols = require('gulp-svg-symbols');
var svgSymbols2js = require('gulp-svg-symbols2js');

gulp.task("default", function(){
  gulp.src("src/icons/**/*.svg")
    .pipe(svgSymbols())
    .pipe(svgSymbols2js())
    .pipe(gulp.dest("dist/icons"));
})
```

This will change the SVG Symbols files into JavaScript. If you want to do compression, you need to install gulp-uglify:
```js
var gulp = require('gulp');
var svgSymbols = require('gulp-svg-symbols');
var svgSymbols2js = require('gulp-svg-symbols2js');
var uglify = require('gulp-uglify');

gulp.task("default", function(){
  gulp.src("src/icons/**/*.svg")
    .pipe(svgSymbols())
    .pipe(svgSymbols2js())
    .pipe(uglify())
    .pipe(gulp.dest("dist/icons"));
})
```

# License
This software is released under an [MIT Licence](./MIT Licence) with an additional non-advertising clause.