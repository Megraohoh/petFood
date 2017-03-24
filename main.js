
var dogFoodContainer = document.getElementById("dogFoodContainer");
var catFoodContainer = document.getElementById("catFoodContainer");

function sendToDogDom(xhrData){	
	var dogFoodString = "";
	var currentFood;

	for(var i=0; i<xhrData.dog_brands.length; i++){
		currentFood = xhrData.dog_brands;
		dogFoodString += `<h3>${currentFood[i].name}</h3>`;
	
		for(var j=0; j<xhrData.dog_brands[i].types.length; j++){
			var currentFoodType = xhrData.dog_brands[i].types[j].type;
			
			dogFoodString += `<p>Food type is ${currentFoodType}</p>`

			for(var k=0; k<xhrData.dog_brands[i].types[j].volumes.length; k++){
				var currentSizePrice = xhrData.dog_brands[i].types[j].volumes[k];

				dogFoodString += `<p>The ${currentSizePrice.name} weight is ${currentSizePrice.price}</p>`;
				
			}

		}


	}

	dogFoodContainer.innerHTML = dogFoodString;
}

function executeDogCodeAfterFileIsLoaded(){
	var data = JSON.parse(this.responseText);
	sendToDogDom(data);
	
}

function executeThisCodeAfterFileFails(){
	alert("BOOO");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeDogCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dogfood.json");
myRequest.send();

////////////FUNCTION TO CALL CAT FOOD JSON///////////////

function sendToCatDom(xhrData){	
	var catFoodString = "";
	var currentFood;

	for(var x=0; x<xhrData.cat_brands.length; x++){
		currentFood = xhrData.cat_brands;
		catFoodString += `<h3>${currentFood[x].name}</h3>`;
	
		for(var y=0; y<xhrData.cat_brands[x].types.length; y++){
			var currentFoodType = xhrData.cat_brands[x].types[y].type;
			
			catFoodString += `<p>Food type is ${currentFoodType}</p>`

			for(var z=0; z<xhrData.cat_brands[x].types[y].volumes.length; z++){
				var currentSizePrice = xhrData.cat_brands[x].types[y].volumes[z];

				catFoodString += `<p>The ${currentSizePrice.name} weight is ${currentSizePrice.price}</p>`;
				
			}

		}


	}

	catFoodContainer.innerHTML = catFoodString;
}


function executeCatCodeAfterFileIsLoaded(){
	var data = JSON.parse(this.responseText);
	sendToCatDom(data);
}

function executeThisCodeAfterFileFails(){
	alert("BOOO");
}

var myRequestCats = new XMLHttpRequest();
myRequestCats.addEventListener("load", executeCatCodeAfterFileIsLoaded);
myRequestCats.addEventListener("error", executeThisCodeAfterFileFails);
myRequestCats.open("GET", "catfood.json");
myRequestCats.send();










       












