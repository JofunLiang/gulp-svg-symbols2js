var Assert, fs, path, Vinyl, symbols2js;

Assert = require('assert');
fs = require('fs');
path = require('path');
Vinyl = require('vinyl');
symbols2js = require('../src/gulp-svg-symbols2js');

function makeFile (contents, path) {
  if (typeof contents === 'string') {
    contents = new Buffer(contents, 'utf8');
  }

  return new Vinyl({
    path: path || "test/svgicon/testing.svg",
    cwd: "test/",
    base: "test",
    contents: contents
  });
}

describe('gulp-svg-symbols2js:\n', function() {
  it('exported a function.\n', function () {
    Assert.equal('function', typeof symbols2js);
  });
  
  it('only deal with SVG files.\n', function (done) {
    var stream = symbols2js();
    
    stream.write(makeFile('<svg></svg>', 'test/svg/icon.css'));
    
    stream.once('data', function (file) {
      Assert.equal(file.contents.toString('utf8'), '<svg></svg>');
      done();
    })
  })
  
  it('in buffer mode.\n', function (done) {
    var stream = symbols2js();
    
    stream.write(makeFile('<svg></svg>'));
    
    stream.once('data', function (file) {
      Assert(file.isBuffer());

      var wrapper = fs.readFileSync(path.join(__dirname, '../src/wrapper.js'), 'utf8');
      wrapper = wrapper.replace('$$$', '<svg></svg>');
      Assert.equal(file.contents.toString('utf8'), wrapper);
      done();
    })
  })
})