
var dogFoodContainer = document.getElementById("dogFoodContainer");

function sendToDom(xhrData){
	var dogFoodString = "";
	var currentFood;

	for(var i=0; i<xhrData.dog_brands.length; i++){
		currentFood = xhrData.dog_brands;
		dogFoodString += `<h3>${currentFood[i].name}</h3>`;
	
		for(var j=0; j<xhrData.dog_brands[i].types.length; j++){
			var currentFoodType = xhrData.dog_brands[i].types[j].type;
			// dogFoodString += `<h3>${currentFoodType}</h3>`;
			dogFoodString += `<p>Food type is ${currentFoodType}</p>`

			for(var k=0; k<xhrData.dog_brands[i].types[j].volumes.length; k++){
				var currentSizePrice = xhrData.dog_brands[i].types[j].volumes[k];

				dogFoodString += `<p>The ${currentSizePrice.name} weight is ${currentSizePrice.price}</p>`;
				// dogFoodString += `<p>${currentSizePrice.price}</p>`;
			}

		}


	}

	dogFoodContainer.innerHTML = dogFoodString;
}

function executeThisCodeAfterFileIsLoaded(){
	var data = JSON.parse(this.responseText);
	sendToDom(data);
	console.log(data);
}

function executeThisCodeAfterFileFails(){
	alert("BOOO");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dogfood.json");
myRequest.send();











       












