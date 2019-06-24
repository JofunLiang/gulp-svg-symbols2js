var fs = require('fs');
var path = require('path');
var through = require('through2');
var replaceExt = require('replace-ext');
var escapeStr = require('js-string-escape');

function bufferToString (buffer, encoding) {
  var str;
  
  try {
    str = buffer.toString(encoding)
  } catch (e) {
    str = buffer.toString()
  }
  
  return escapeStr(str)
}

module.exports = function () {
  
  return through.obj(function (file, enc, cb) {
    var isSVG = path.extname(file.path) === '.svg';

    if (isSVG &&　file.isBuffer()) {
      var wrapper = fs.readFileSync(path.join(__dirname, './wrapper.js'), 'utf8');
      var svg = bufferToString(file.contents, enc);
      var content = wrapper.replace('$$$', svg);
      
      file.contents = new Buffer(content, 'utf8');
      file.path = replaceExt(file.path, '.js');
    }
    
    cb(null, file);
  })
}