var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.id=input.value;
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function getEventTarget(event){
    return event.target;
}
function applyItemActions(event){
    var item=getEventTarget(event);
    //Add toggle for done class on li click
    if(item.tagName==="LI"){
        item.classList.toggle("done");
     }
    //Remove li on delete button click
    else if(item.tagName==="BUTTON"){
        item.parentElement.remove();
     }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", applyItemActions)


