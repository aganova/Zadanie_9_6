var list = document.getElementById('list');
var liElements = document.getElementsByTagName('li');

function addLiElement() {
	var newLiElement =  document.createElement('li');
	newLiElement.innerText = "item " + liElements.length;
	list.appendChild(newLiElement);  
}

var buttonElement = document.getElementById('addElem');

buttonElement.addEventListener('click', function() {
	addLiElement();
});