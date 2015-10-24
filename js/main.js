function clickCell(node){
	displayNumberChooser();	
	document.clicked = node;
}

function pickNumber(node){
	hideNumberChooser();
	document.clicked.innerHTML = node.innerHTML;
}

function displayNumberChooser(){
	node = document.getElementsByClassName("placeholder")[0];
	node.style["display"]="flex";
}

function hideNumberChooser(){
	node = document.getElementsByClassName("placeholder")[0];
	node.style["display"]="none";
}

function clickMenu(){
	switchMenu();
}

function switchMenu(){
	node = document.getElementsByClassName("menu")[0];
	if(node.style["display"] == "none"){
		node.style["display"] = "flex";
	}
	else{
		node.style["display"] = "none";
	}
}

function checkValidGroup(group){
	//group is an array of nodes which can represent a row, column or inner square
}
function initializeGroups(){
	//this function should initialize all groups (lines, rows and inner squares and store them somewhere)
}
function checkBoard(){
	//this function should run checkValidGroup on every group available if all groups are valid the game is over 
}