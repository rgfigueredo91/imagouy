function calc()
            {
				let experienceType = document.getElementById('experience').value;
				let numberInterior = document.getElementById('interior').value;
				let numberExterior = document.getElementById('exterior').value;
				let maxPorcentaje =  0.25
				var priceInterior = numberInterior * 140;
				var priceExterior = numberExterior * 120;
				let porcentaje = ((parseFloat(numberInterior) + parseFloat(numberExterior) - 1)*5)/100;
				

                
                if(experienceType === 'light-experience' && porcentaje <= 0.25){
                    document.getElementById('result').value = (priceInterior + priceExterior) - ((priceExterior + priceInterior)*porcentaje);
				}
				if(experienceType === 'light-experience' && porcentaje > 0.25) {
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje)
				}

				if(experienceType === 'full-experience' && porcentaje <= 0.25) {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
                    document.getElementById('result').value = (priceInterior +  priceExterior) - ((priceInterior +  priceExterior)*porcentaje);
				}
				if(experienceType === 'full-experience' && porcentaje > 0.25) {
					var priceInterior = numberInterior * 220;
					var priceExterior = numberExterior * 180;
					document.getElementById('result').value = (priceExterior + priceInterior) - ((priceExterior + priceInterior)*maxPorcentaje);
				}

				if(numberInterior < 0 || numberExterior < 0){
				document.getElementById('result').value = 0
				}
			}