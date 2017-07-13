// create div element
var pluginDiv = document.createElement('div');

// Overlay example CSS
pluginDiv.style.cssText = '	position: absolute; right: 0px; top: 100px; background-color: blue;color: white;padding-top: 10px;padding-left: 10px;padding-bottom: 10px;padding-right: 10px;';

// content of <div>CONTENT</div>
pluginDiv.innerHTML = 'CLICK : <a href="#">REFERAL !!</a>';

// add div element to document->body
document.body.appendChild(pluginDiv);