
function clickCell(node){
	displayNumberChooser();	
	document.clicked = node;
}

function pickNumber(node){
	hideNumberChooser();
	document.clicked.innerHTML = node.innerHTML;
}

function displayNumberChooser(){
	node = document.getElementsByClassName("fixed-cont")[0];
	node.style["display"]="flex";
}

function hideNumberChooser(){
	node = document.getElementsByClassName("fixed-cont")[0];
	node.style["display"]="none";
}