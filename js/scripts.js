var list = document.getElementById('list');
var numberOfLiElements = document.getElementsByTagName('li');

function addLiElement() {
	var newLiElement =  document.createElement('li');
	newLiElement.innerText = "item " + numberOfLiElements.length;
	list.appendChild(newLiElement);  
	console.log();
}

var buttonElement = document.getElementById('addElem');

buttonElement.addEventListener('click', function() {
	addLiElement();
});