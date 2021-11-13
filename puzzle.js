var current_moves = 0;
function swapTiles(cell1, cell2) {
	var temp = document.getElementById(cell1).className;
	document.getElementById(cell1).className = document.getElementById(cell2).className;
	document.getElementById(cell2).className = temp;
}

function shuffle() {
	for (var row = 1; row <= 4; row++) {
		for (var column = 1; column <= 4; column++) {
			var row2 = Math.floor(Math.random() * 4 + 1);
			var column2 = Math.floor(Math.random() * 4 + 1);
			swapTiles("cell" + row + column, "cell" + row2 + column2);
		}
	}
}

function clickTile(row, column) {

	var cell = document.getElementById("cell" + row + column);
	var tile = cell.className;

	moves = document.getElementById("moves");

	if (tile != "blankSpace") {
		if (column < 4) {
			if (document.getElementById("cell" + row + (column + 1)).className == "blankSpace") {
				swapTiles("cell" + row + column, "cell" + row + (column + 1));
				increment_moves();
			}
		}
		if (column > 1) {
			if (document.getElementById("cell" + row + (column - 1)).className == "blankSpace") {
				swapTiles("cell" + row + column, "cell" + row + (column - 1));
				increment_moves();
			}
		}
		if (row > 1) {
			if (document.getElementById("cell" + (row - 1) + column).className == "blankSpace") {
				swapTiles("cell" + row + column, "cell" + (row - 1) + column);
				increment_moves();
			}
		}
		if (row < 4) {
			if (document.getElementById("cell" + (row + 1) + column).className == "blankSpace") {
				swapTiles("cell" + row + column, "cell" + (row + 1) + column);
				increment_moves();
			}
		}
	}

	if (checkIfWon()) {
		document.body.style.backgroundColor = "gold";
		alert("You win!");
	}
	return;
}

function increment_moves() {

	if (moves) {
		current_moves++;
		moves.innerHTML = current_moves;
	}
}

function checkIfWon() {
	let tileCount = 1;
	for (let rowTest = 1; rowTest < 5; rowTest++) {
		for (let colTest = 1; colTest < 5; colTest++) {
			let cellTest = "cell" + rowTest + colTest;
			let tileTest = "tile" + tileCount;
			if (tileTest === "tile16") {
				break;
			}
			if (!(document.getElementById(cellTest).classList.contains(tileTest))) {
				return false;
			}
			tileCount++;
		}
	}
	return true;
}
