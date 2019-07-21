# gulp-svg-symbols2js
该插件将SVG Symbols文件注入JavaScript，与 [gulp-svg-symbols](https://www.npmjs.com/package/gulp-svg-symbols)配合使用。

![npm](https://img.shields.io/npm/v/gulp-svg-symbols2js.svg)
![npm](https://img.shields.io/npm/dm/gulp-svg-symbols2js.svg)
![NPM](https://img.shields.io/npm/l/gulp-svg-symbols2js.svg)

# 用法

安装gulp-svg-symbols2js作为开发依赖项：
```
npm install --save-dev gulp-svg-symbols2js
```

接下来，将其添加到gulpfile.js中的任务：
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

这会将SVG Symbols文件更改为JavaScript。如果要进行压缩，则需要安装[gulp-uglify](https://www.npmjs.com/package/gulp-uglify):
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