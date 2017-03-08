console.log("hello");


var dogFoodContainer = document.getElementById("dogFoodContainer");

function sendToDom(xhrData){
	var dogFoodString = "";
	var currentFood;
	for(var i=0; i<xhrData.dog_brands.length; i++){
		currentFood = xhrData.dog_brands[i];

		dogFoodString +=
		dogFoodString +=
		dogFoodString +=
		dogFoodString +=
	}
	dogFoodContainer.innerHTML = dogFoodString;
}

function executeThisCodeAfterFileIsLoaded(){
	var data = JSON.parse(this.responseText);
	sendToDom(data);
}

function executeThisCodeAfterFileFails(){
	alert("BOOO");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "main.json");
myRequest.send();








