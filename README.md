# gulp-svg-symbols2js
The plugin inject SVG Symbols files into JavaScript, Works with [gulp-svg-symbols](https://www.npmjs.com/package/gulp-svg-symbols).

![npm](https://img.shields.io/npm/v/gulp-svg-symbols2js.svg)
![GitHub](https://img.shields.io/github/license/jofunliang/gulp-svg-symbols2js.svg)

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

This will change the SVG Symbols files into JavaScript. If you want to do compression, you need to install [gulp-uglify](https://www.npmjs.com/package/gulp-uglify):
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
This software is released under an [MIT Licence](./LICENSE.md) with an additional non-advertising clause.