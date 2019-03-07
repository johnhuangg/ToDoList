var input = document.getElementById("userinput");
var btn= document.getElementById("addbtn");
var list=document.querySelector("ul");
var item=document.getElementsByClassName("li");
//var testVar=document.getElementById("testp");

function lengthInput(){
	
	return input.value.length;
}
function addListClick(){
	//testVar.innerHTML=input.value.length;

	if (input.value.length()>0){
		//testVar.innerHTML="click test ok";
		addElementToList();
	}
}
function addListEnter(){
	//testVar.innerHTML="enter test ok";
	if (input.value.length>0&&event.which==13){
		//testVar.innerHTML="enter test ok";
		addElementToList();
	}
}
function addElementToList(){
	//testVar.innerHTML="element good";
	var newItem = document.createElement("li");
	newItem.className="list-group-item";
	var itemInfo = document.createTextNode(input.value);
	newItem.appendChild(itemInfo);
	list.appendChild(newItem);
	input.value="";
	
	var deleteB = document.createElement("button");
	deleteB.className="btn btn-primary cancel-btn";
	deleteB.innerHTML="X";
	newItem.appendChild(deleteB);
	
	
	deleteB.addEventListener("click", deleteElement);
	function deleteElement(){
		list.removeChild(newItem);
	}
	
	
}

btn.addEventListener("click",addListClick);
input.addEventListener("keypress",addListEnter);
