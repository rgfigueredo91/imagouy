function calc()
            {
				let model = document.getElementById('model').value;
				let experienceType = document.getElementById('experience').value;
				let numberInterior = document.getElementById('interior').value;
				let numberExterior = document.getElementById('exterior').value;
				let maxPorcentaje =  0.25
				var priceInterior = numberInterior * 140;
				var priceExterior = numberExterior * 120;
				let porcentaje = ((parseFloat(numberInterior) + parseFloat(numberExterior) - 1)*5)/100;
				

                
                if(experienceType === 'light-experience' && porcentaje <= 0.25 && model === "no"){
                    document.getElementById('result').value = (priceInterior + priceExterior) - ((priceExterior + priceInterior)*porcentaje) + 120 + ' USD';
				}

				if(experienceType === 'light-experience' && porcentaje <= 0.25 && model === "yes"){
                    document.getElementById('result').value = (priceInterior + priceExterior) - ((priceExterior + priceInterior)*porcentaje) + ' USD';
				}

				if(experienceType === 'light-experience' && porcentaje > 0.25 && model === "no") {
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje) + 120 + ' USD';
				}

				if(experienceType === 'light-experience' && porcentaje > 0.25 && model === "yes") {
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje)  + ' USD';
				}

				if(experienceType === 'full-experience' && porcentaje <= 0.25 && model === "no") {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
                    document.getElementById('result').value = (priceInterior +  priceExterior) - ((priceInterior +  priceExterior)*porcentaje) + 120 + ' USD';
				}

				if(experienceType === 'full-experience' && porcentaje <= 0.25 && model === "yes") {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
                    document.getElementById('result').value = (priceInterior +  priceExterior) - ((priceInterior +  priceExterior)*porcentaje) + ' USD';
				}






				if(experienceType === 'full-experience' && porcentaje > 0.25 && model === "no") {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje) + 120 + ' USD';
				}

				if(experienceType === 'full-experience' && porcentaje > 0.25 && model === "yes") {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje) + ' USD';
				}

				if(numberInterior < 0 || numberExterior < 0){
				document.getElementById('result').value = 0
				}
			}