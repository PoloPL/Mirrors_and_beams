function createBoard(game, root) {
	const
		FIELD_WIDTH = 45,
		FIELD_HEIGHT = 45,
		STROKE_WIDTH = 5,
		SVG_WIDTH = STROKE_WIDTH + (FIELD_WIDTH + STROKE_WIDTH) * game.m,
		SVG_HEIGHT = STROKE_WIDTH + (FIELD_HEIGHT + STROKE_WIDTH) * game.n,
		SVG_CLIP_WIDTH = STROKE_WIDTH + (FIELD_WIDTH + STROKE_WIDTH) * game.clip_size,
		SVG_CLIP_HEIGHT = 2 * STROKE_WIDTH + FIELD_WIDTH;

	game.svg_fields = [];
	game.svg_clip_fields = [];

	var svg_el = createSVG("svg", root, "makeDraggable(evt)", SVG_WIDTH, SVG_HEIGHT);

	for(var i=0; i<game.n; ++i) {
		var g_el = createSVG("g", svg_el);
		g_el.setAttribute("style", "stroke-width: " + STROKE_WIDTH + ";");

		game.svg_fields.push([]);

		for(var j=0; j<game.m; ++j) {
			var rect_el = createSVG("rect", g_el);
			setAttribs(
				rect_el,
				//["onload",'makeDraggable(evt)'],
				["x", STROKE_WIDTH + j * (STROKE_WIDTH + FIELD_WIDTH)],
				["y", STROKE_WIDTH + i * (STROKE_WIDTH + FIELD_HEIGHT)],
				["width", FIELD_WIDTH],
				["height", FIELD_HEIGHT]
			);
			game.svg_fields[i].push(rect_el);
		}
	}

	var g_el = createSVG("g", createSVG("svg", root, "makeDraggable(evt)", SVG_CLIP_WIDTH, SVG_CLIP_HEIGHT));
	g_el.setAttribute("style", "stroke-width: " + STROKE_WIDTH + ";");
	for(var i=0; i<game.clip_size; ++i) {
		var rect_el = createSVG("rect", g_el);
		setAttribs(
			rect_el,
				["x", STROKE_WIDTH + i * (STROKE_WIDTH + FIELD_WIDTH)+100],
				["y", STROKE_WIDTH+495],
				["width", FIELD_WIDTH],
				["height", FIELD_HEIGHT]
		);
		game.svg_clip_fields.push(rect_el);
	}
};

function updateBoard(game) {
	for(var field of game.board) {
		var svg_field = game.svg_fields[field.pos.x][field.pos.y];
		svg_field.setAttribute("class", 'draggable');
		svg_field.setAttribute("fill", field.col);
	}
}



function makeDraggable(evt) {
  var svg = evt.target;
  svg.addEventListener('mousedown', startDrag);
  svg.addEventListener('mousemove', drag);
  svg.addEventListener('mouseup', endDrag);
  svg.addEventListener('mouseleave', endDrag);
  var selectedElement = false
  
  function getMousePosition(evt) {
  var CTM = svg.getScreenCTM();
  return {
    x: (evt.clientX - CTM.e) / CTM.a,
    y: (evt.clientY - CTM.f) / CTM.d
  };
}
  
var selectedElement, offset;
function startDrag(evt) {
  if (evt.target.classList.contains('draggable')) {
    selectedElement = evt.target;
    offset = getMousePosition(evt);
    offset.x -= parseFloat(selectedElement.getAttributeNS(null, "x"));
    offset.y -= parseFloat(selectedElement.getAttributeNS(null, "y"));
  }
}
  
function drag(evt) {
  if (selectedElement) {
    evt.preventDefault();
    var coord = getMousePosition(evt);
    selectedElement.setAttributeNS(null, "x", coord.x - offset.x);
    selectedElement.setAttributeNS(null, "y", coord.y - offset.y);
  }
}

function endDrag(evt) {
  selectedElement = null;
}

}

