function id$(id) {
	return document.getElementById(id);
}

function $(selector) {
	return document.querySelector(selector);
}

function $$(selector) {
	return document.querySelectorAll(selector);
}

function createSVG(element, root, onload, width, height) {
	var svg_el = document.createElementNS("http://www.w3.org/2000/svg", element);

	if(root !== undefined)   root.appendChild(svg_el);
	if(onload !== undefined)  svg_el.setAttribute("onload", onload);
	if(width !== undefined)  svg_el.setAttribute("width", width);
	if(height !== undefined) svg_el.setAttribute("height", height);

	return svg_el;
}

function setAttribs(element) {
	for(var i=1; i<arguments.length; ++i)
		element.setAttribute(arguments[i][0], arguments[i][1]);
}

