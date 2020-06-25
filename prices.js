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

function calc()
            {
				var units = document.getElementById('units').value
				var priceMeter = parseInt(document.getElementById('metros').value);
				var model = document.getElementById('model').value;
				let experienceType = document.getElementById('experience').value;
				let numberInterior = document.getElementById('interior').value;
				let numberExterior = document.getElementById('exterior').value;
				let maxPorcentaje =  0.25
				var priceInterior = numberInterior * 140;
				var priceExterior = numberExterior * 120;
				let porcentaje = ((parseInt(numberInterior) + parseInt(numberExterior) - 1)*5)/100;
				
				//precio por metro cuadrado
				if (units === "m2" && priceMeter > 0 && priceMeter <= 50) {
					priceMeter = priceMeter * 1;
				}

				if (units === "m2" && priceMeter > 50 && priceMeter <= 100 ){
					priceMeter = 50 + (priceMeter * 0.5);
				}

				if (units === "m2" && priceMeter > 100 && priceMeter <= 1000 ){
					priceMeter = 100 + (priceMeter * 0.05);
				}

				if (units === "m2" && priceMeter > 1000 ){
					priceMeter = 160;
				}

				//precio por pie cuadrado
				if (units === "sqft" && priceMeter > 0 && priceMeter <= 538) {
					priceMeter = priceMeter * 0.09;
				}

				if (units === "sqft" && priceMeter > 538 && priceMeter <= 1076) {
					priceMeter = 50 + ( priceMeter * 0.046);
				}

				if (units === "sqft" && priceMeter > 1076 && priceMeter <= 10764) {
					priceMeter = 100 + ( priceMeter * 0.0046);
				}

				if (units === "sqft" && priceMeter > 10764) {
					priceMeter = 160;
				}



				
				//no tiene modelado en experiencia light porcentajes menores de 25 y 25
                if(experienceType === 'light-experience' && porcentaje <= 0.25 && model === "no"){
                    document.getElementById('result').value = (priceInterior + priceExterior) - ((priceExterior + priceInterior)*porcentaje) + priceMeter + ' USD';
				}


				//tiene modelado en experiencia light porcentajes menores de 25 y 25
				if(experienceType === 'light-experience' && porcentaje <= 0.25 && model === "yes"){
					
                    document.getElementById('result').value = (priceInterior + priceExterior) - ((priceExterior + priceInterior)*porcentaje) + ' USD';
				}

				//no tiene modelado en experiencia light siempre aplica porcentaje de 25
				if(experienceType === 'light-experience' && porcentaje > 0.25 && model === "no") {
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje) + priceMeter + ' USD';
				}
				//tiene modelado en experiencia light siempre aplica porcentaje de 25
				if(experienceType === 'light-experience' && porcentaje > 0.25 && model === "yes") {
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje)  + ' USD';
				}



				if(experienceType === 'full-experience' && porcentaje <= 0.25 && model === "no") {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
                    document.getElementById('result').value = (priceInterior +  priceExterior) - ((priceInterior +  priceExterior)*porcentaje) + priceMeter + ' USD';
				}

				if(experienceType === 'full-experience' && porcentaje <= 0.25 && model === "yes") {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
                    document.getElementById('result').value = (priceInterior +  priceExterior) - ((priceInterior +  priceExterior)*porcentaje) + ' USD';
				}

				if(experienceType === 'full-experience' && porcentaje > 0.25 && model === "no") {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje) + priceMeter + ' USD';
				}

				if(experienceType === 'full-experience' && porcentaje > 0.25 && model === "yes") {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje) + ' USD';
				}




				if(numberInterior < 0 || numberExterior < 0 || priceMeter <= 0 && model !== "yes"){
				document.getElementById('result').value = 0;
				}
			}