# Mirrors and beams

## Game object

Game logic:
* n - row number
* m - col number
* clip\_size - mirror number
* board - list of objects on a level
* clipboard - list of mirrors (strictly speaking of mirror directions)

Game drawing:
* svg\_fields - all the svg rects representing board fields
* svg\_clips\_fields - mirror fields

## Board elements
* obj - object type, __OEn__
* col - color, __CEn__ (Bulb, Source)
* dir - direction, __DEn__ (Mirror, Source)
* pos - position: x, y

## Files

### utils.js
Helper functions for the entire project.

### game.js
* enum: OEn (Object Enum) - avaiable object types (Bulb, Mirror, Source)
* enum: CEn (Color Enum) - avaiable color types (R, G, B, C, M, Y)
* enum: DEn (Direction Enum) - avaiable directions (N, NE, E, SE, S, SW, W, NW)
* function: newGame(game) - set up board
* function: move(game, src, dest) - change position of src element to dest; process game state

### drawing.js
* function: createBoard(game, root) - create svg representation of game and embed it in root
* function: updateBoard(game) - update svg representation

### index.html
Structure of the application.  
Pins together all the project files.

### style.css
Generic styles.

