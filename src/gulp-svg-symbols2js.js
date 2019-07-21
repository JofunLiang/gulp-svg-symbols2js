var fs = require('fs');
var path = require('path');
var through = require('through2');
var replaceExt = require('replace-ext');
var escapeStr = require('js-string-escape');

var PLUGIN_NAME = 'gulp-svg-symbols2js';

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

    if (isSVG) {
      // buffer
      if (file.isBuffer()) {
        var wrapper = fs.readFileSync(path.join(__dirname, './wrapper.js'), 'utf8');
        var svg = bufferToString(file.contents, enc);
        var content = wrapper.replace('$$$', svg);
        
        file.contents = Buffer.from(content, 'utf8');
        file.path = replaceExt(file.path, '.js');
      }
      
      // stream
      if (file.isStream()) {
        throw new PluginError(PLUGIN_NAME, 'Cannot do SVG symbols to js on a stream!');
      }
    }
    
    cb(null, file);
  })
}
