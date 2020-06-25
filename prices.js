const selectElement = document.getElementById('model');

selectElement.addEventListener('change', (event) => {
	if (selectElement.value === "yes"){
	document.getElementById('metros').disabled = true;
	document.getElementById('units').disabled = true;
	}
	if (selectElement.value === "no"){
		document.getElementById('metros').disabled = false;
		document.getElementById('units').disabled = false;
}
  });

function precioSegunMetro(){

	var units = document.getElementById('units').value;
	var priceMeter = parseFloat((document.getElementById('metros').value));

	//precio por metro cuadrado

	if (units === "m2" && priceMeter > 0 && priceMeter <= 50) {
		priceMeter = priceMeter;
	}

	if (units === "m2" && priceMeter > 50 && priceMeter <= 100 ){
		priceMeter = 50 + (priceMeter  * 0.5);
	}

	if (units === "m2" && priceMeter > 100 && priceMeter <= 1000 ){
		priceMeter = 100 + (priceMeter * 0.05);
	}

	if (units === "m2" && priceMeter > 1000 ){
		priceMeter = 160;
	}

	//precio por pie cuadrado
	if (units === "sqft" && priceMeter > 0 && priceMeter <= 538) {
		priceMeter =  priceMeter * 0.09;
	}
	if (units === "sqft" && priceMeter > 538 && priceMeter <= 1076) {
		priceMeter = 50 + (priceMeter * 0.046);
	}
	if (units === "sqft" && priceMeter > 1076 && priceMeter <= 10764) {
		priceMeter = 100 + (priceMeter * 0.0046);
	}
	if (units === "sqft" && priceMeter > 10764) {
		priceMeter = 160;
	}

	return priceMeter;

}

function calc()
            {
				var model = document.getElementById('model').value;
				let experienceType = document.getElementById('experience').value;
				let numberInterior = document.getElementById('interior').value;
				let numberExterior = document.getElementById('exterior').value;
				let maxPorcentaje =  0.25;
				var priceInterior = numberInterior * 140;
				var priceExterior = numberExterior * 120;
				let porcentaje = (((1*numberInterior) + (1*numberExterior) - 1)*5)/100;
				
				//no tiene modelado en experiencia light porcentajes menores de 25 y 25
                if(experienceType === 'light-experience' && porcentaje <= 0.25 && model === "no"){
                    document.getElementById('result').value = (priceInterior + priceExterior) - ((priceExterior + priceInterior)*porcentaje) + precioSegunMetro() + ' USD';
				}

				//tiene modelado en experiencia light porcentajes menores de 25 y 25
				if(experienceType === 'light-experience' && porcentaje <= 0.25 && model === "yes"){
					
                    document.getElementById('result').value = (priceInterior + priceExterior) - ((priceExterior + priceInterior)*porcentaje) + ' USD';
				}
				//no tiene modelado en experiencia light siempre aplica porcentaje de 25
				if(experienceType === 'light-experience' && porcentaje > 0.25 && model === "no") {
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje) + precioSegunMetro() + ' USD';
				}
				//tiene modelado en experiencia light siempre aplica porcentaje de 25
				if(experienceType === 'light-experience' && porcentaje > 0.25 && model === "yes") {
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje)  + ' USD';
				}



				if(experienceType === 'full-experience' && porcentaje <= 0.25 && model === "no") {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
                    document.getElementById('result').value = (priceInterior +  priceExterior) - ((priceInterior +  priceExterior)*porcentaje) + precioSegunMetro() + ' USD';
				}

				if(experienceType === 'full-experience' && porcentaje <= 0.25 && model === "yes") {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
                    document.getElementById('result').value = (priceInterior +  priceExterior) - ((priceInterior +  priceExterior)*porcentaje) + ' USD';
				}

				if(experienceType === 'full-experience' && porcentaje > 0.25 && model === "no") {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje) + precioSegunMetro() + ' USD';
				}

				if(experienceType === 'full-experience' && porcentaje > 0.25 && model === "yes") {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje) + ' USD';
				}




				if(numberInterior < 0 || numberExterior < 0 || precioSegunMetro() <= 0 && model !== "yes"){
				document.getElementById('result').value = 0;
				}
			}