if (typeof document !== 'undefined' && document.addEventListener) {
  
  (function(doc, svgSymbol) {
    
    // Inserts an element at the top of the target element.
    function prepend (el, target) {
      var firstChild = target.firstChild;
      
      if (firstChild) {
        firstChild.parentNode.insertBefore(el, firstChild);
      } else {
        target.appendChild(el);
      }
    };
    
    // Add SVG Symbols to the body.
    function appendSvg () {
      var div, svg;
      
      div = doc.createElement('div');
      div.innerHTML = svgSymbol;
      svgSymbol = null;
      svg = div.getElementsByTagName('svg')[0];
      if (svg) {
        svg.setAttribute('aria-hidden', 'true');
        svg.style.cssText = 'position: absolute; width: 0px; height: 0px; overflow: hidden;';
        prepend(svg, doc.body);
      }
    }
    
    /**
     * The code checks that the DOM is ready.
     * and executes the appendSvg function when the DOM is ready.
     */
    if (~['complete', 'loaded', 'interactive'].indexOf(doc.readyState)) {
      setTimeout(appendSvg, 0);
    } else {
      doc.addEventListener('DOMContentLoaded', function handler () {
        doc.removeEventListener('DOMContentLoaded', handler, false);
        appendSvg();
      }, false)
    }
    
  })(document, '$$$');
  
}