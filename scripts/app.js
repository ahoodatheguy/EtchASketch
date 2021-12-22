const container = document.querySelector('#grid-container');

// Default Settings
const DEFAULT_COLOR = "#000000";
const DEFAULT_SIZE = 16;

// Current settings
let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor) {
	currentColor = newColor;
}

function setCurrentSize(newSize) {
	currentSize = newSize;
}

function createDivs(size) {

	// Style Grid
	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`

	// Create a grid of divs
	for (var i = 0; i < (size ** 2); i++) {
		const div = document.createElement('div');
		div.style.display = 'grid';

		// Style Individual Cells
		div.style.backgroundColor = 'gray';
		div.style.gridAutoRows = size;
		div.onmouseover = function (e) {
			div.style.backgroundColor = currentColor;
		}
		div.className = 'grid-item';
		container.appendChild(div);
	}
}

// Clear the Board
function clearBoard() {
	var gridCells = document.querySelectorAll('.grid-item');
	gridCells.forEach(element => {
		element.style.backgroundColor = 'gray'
	});
}

gridSize = parseInt(prompt("How big do you want your Etch-A-Sketch to be?"))

if (gridSize <= 100 && gridSize >= 1) {
	createDivs(gridSize);
}
else {
	alert('Invalid Size! (max. 100)')
	alert('Defaulting to 16')
	createDivs(currentSize)
}