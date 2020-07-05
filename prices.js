const MAX_RENDERING_COUNT_DISCOUNT_RATE = 0.20;

let FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 200;
let FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 180;

let LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 150;
let LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 120;

const USER_COUNTRY = "UY";

fetch("https://ipinfo.io", {headers: {Accept: "application/json"}}).then(response => response.json()).then(json => {

	if (json.country === "UY"){
		
		console.log("Estoy en Uruguay");
		
	}
	else {
		LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 1000;
		LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 1000;
		FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 1000;
		FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 1000;
		console.log("No estoy en Uruguay");
	}
});

function computeModelPriceByMeter(area) {
	// area: int (in square meters)
	//
	// returns: int o float

	if (0 <= area && area <= 20) {
		return area * 2.0;
	} else if (20 < area && area <= 50) {
		return 40 + (area-20) * 1;
	} else if (50 < area && area <= 100) {
		return 60 + (area-40) * 1;
	} else if (100 < area && area <= 1000) {
		return 115 + area * 0.05;
	} else if (1000 < area && area <= 1500) {
		return 100 + area * 0.07;
	} else {
		return 210;
	}
}

function computeModelPrice(unit, area) {
	// unit: str ("m2" o "sqft")
	// area: int
	//
	// returns: int o float

	if (unit == "sqft") {
		area *= 0.092903;
	}

	return computeModelPriceByMeter(area);
}

function computeRenderingCountDiscountedPrice(isFullExperience, indoorRenderingCount, outdoorRenderingCount) {
	// isFullExperience: boolean
	// indoorRenderingCount: int
	// outdoorRenderingCount: int
	//
	// returns: int o float

	const renderingCount = indoorRenderingCount + outdoorRenderingCount;
	const renderingCountDiscountRate = Math.min(0.05 * (renderingCount - 1), MAX_RENDERING_COUNT_DISCOUNT_RATE);
	const renderingCountRate = 1 - renderingCountDiscountRate;

	const indoorRenderingUnitPrice = isFullExperience ? FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE : LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE;
	const outdoorRenderingUnitPrice = isFullExperience ? FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE : LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE;

	const indoorRenderingFullPrice = indoorRenderingCount * indoorRenderingUnitPrice;
	const outdoorRenderingFullPrice = outdoorRenderingCount * outdoorRenderingUnitPrice;

	return (indoorRenderingFullPrice + outdoorRenderingFullPrice) * renderingCountRate;
}

function computePrice(userAlreadyHasAModel, modelAreaUnit, modelArea, isFullExperience, indoorRenderingCount, outdoorRenderingCount) {
	// userAlreadyHasAModel: boolean
	// modelAreaUnit: str ("m2" o "sqft")
	// modelArea: int
	// isFullExperience: boolean
	// indoorRenderingCount: int
	// outdoorRenderingCount: int
	//

	// returns: int o float


	const modelPrice = userAlreadyHasAModel ? 0 : computeModelPrice(modelAreaUnit, modelArea);
	const renderingDiscountedPrice = computeRenderingCountDiscountedPrice(isFullExperience, indoorRenderingCount, outdoorRenderingCount);

	return modelPrice + renderingDiscountedPrice;
}

////////////////////////////////////////////////////

const selectElement = document.getElementById('model');

selectElement.addEventListener('change', event => {
	document.getElementById('metros').disabled = selectElement.value === "yes";
	document.getElementById('units').disabled = selectElement.value === "yes";
});





function computePriceFromForm() {
	const userAlreadyHasAModel = document.getElementById('model').value === "yes";
	const modelAreaUnit = document.getElementById('units').value;
	const modelArea = Math.max(parseInt(document.getElementById('metros').value), 0);
	const experienceType = document.getElementById('experience').value === "full-experience";
	const indoorRenderingCount = Math.max(parseInt(document.getElementById('interior').value), 0);
	const outdoorRenderingCount = Math.max(parseInt(document.getElementById('exterior').value), 0);

	document.getElementById('result').value = Math.ceil(computePrice(userAlreadyHasAModel, modelAreaUnit, modelArea, experienceType, indoorRenderingCount, outdoorRenderingCount) * 0.85) + ' $ - ' + Math.ceil(computePrice(userAlreadyHasAModel, modelAreaUnit, modelArea, experienceType, indoorRenderingCount, outdoorRenderingCount) * 1.23) + ' $';
}
