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
		div.style.backgroundColor = 'gray'
		div.style.gridAutoRows = size;
		div.onmouseover = function (e) {
			div.style.backgroundColor = 'black'
		}
		div.className = 'grid-item'
		container.appendChild(div);
	}
}


createDivs(16);