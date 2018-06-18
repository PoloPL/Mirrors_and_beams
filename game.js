OEn = { // Object Enum
	Bulb:   0,
	Mirror: 1,
	Source: 2
};

CEn = { // Color Enum
	R: "#FF0000",
	G: "#00FF00",
	B: "#0000FF",

	C: "#00FFFF",
	M: "#FF00FF",
	Y: "#FFFF00"
};

DEn = { // Direction Enum
	N:  0,
	NE: 1,
	E:  2,
	SE: 3,
	S:  4,
	SW: 5,
	W:  6,
	NW: 7
};

Object.freeze(OEn);
Object.freeze(CEn);
Object.freeze(DEn);

function newGame(game) {
	var game = {};

	game.n = 9;
	game.m = 8;
	game.clip_size = 4;

	game.board = [
		{obj: OEn.Source, col: CEn.R, dir: DEn.SE, pos: {x: 0, y: 1}},
		{obj: OEn.Source, col: CEn.G, dir: DEn.SE, pos: {x: 2, y: 0}},
		{obj: OEn.Source, col: CEn.R, dir: DEn.SE, pos: {x: 4, y: 0}},
		{obj: OEn.Bulb  , col: CEn.Y, pos: {x: 4, y: 2}},
		{obj: OEn.Bulb  , col: CEn.Y, pos: {x: 2, y: 5}},
		{obj: OEn.Bulb  , col: CEn.Y, pos: {x: 4, y: 5}},
		{obj: OEn.Bulb  , col: CEn.Y, pos: {x: 6, y: 5}},
	];

	game.clipboard = [
		DEn.WN,
		DEn.SE,
		DEn.W,
		DEn.WN
	];

	return game;
}

function move(game, src, dest) {
}

