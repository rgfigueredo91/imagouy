//PRICES VARIABLES

let STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 140;
let STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 145;
let STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 170;
let STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 180;

//VARIABLE FOR OTHER COUNTRIES STUDENT

const USER_COUNTRY = "UY";
fetch("https://ipinfo.io", {headers: {Accept: "application/json"}}).then(response => response.json()).then(json => {
	console.log(json)

if (json.country === "UY"){		
		console.log("Estoy en Uruguay");
		
	}
	else {
		STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 200;
		STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 210;
		STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 250;
		STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 270;
		console.log(json.country);
	}
});

//VARIABLE FOR CHANGETOGGLE

let clicked = false;
let studentYesOrNo = "no"

function changeToggleDisabledEnabled() {
	studentYesOrNo = clicked ? "no" : "yes";
	document.getElementById("experience").disabled = clicked;
	document.getElementById("timeline").disabled = clicked;

	if (clicked) {
		console.log("Im not student");
	} else{
		console.log("Im student");
	}

	clicked = !clicked;

	return studentYesOrNo;
}

function addingParagraphOnExperience() {
	let experiences = document.getElementById("experience");
	let htmlContentToAppend = "";

	if (experiences.value == "light-experience" && window.location.hash !== "#esp"){
		
				htmlContentToAppend = `
				<p>This experience will give freedoom to the 3d artist to design the image.
				Reducing contact to an initial meeting and a camera viewpoint correction prior to rendering.
				After this, the final image is rendered, post-produced and sent. This does not affect the quality of the work, 
				it just speeds up the work process. If you want to find out more about this workflow please download the following file. 
			</p>
			<a href="pdf/Workflow_for_students-light.pdf" download="Workflow for students-light"  target="_blank">
                                        <button type="button"> English version - light  </button> </a>
				`
			}

	if (experiences.value == "light-experience" && window.location.hash === "#esp"){
		
				htmlContentToAppend = `
				<p>El contepto de este workflow es dejar libertad a los artistas 3d para diseñar la imagen. 
				Teniendo un contacto reducido a una instancia de reunión inicial y una instancia de corrección del punto de vista previo al renderizado. 
				Esto no implica en absoluto una pérdida de calidad en la imagen obtenida, simplemente agiliza el proceso de producción. 
				Si buscas saber más de este workflow, por favor descarga el archivo a continuación. 
			</p>
			<a href=pdf/Proceso_de_trabajo_Estudiantes-simple.pdf" download="Proceso de trabajo Estudiantes-simple"  target="_blank">
                                            <button type="button"> Versión en español - Simple </button> </a>
				`
			}
	if (experiences.value == "full-experience" && window.location.hash !== "#esp"){
				
				htmlContentToAppend = `
				<p>This experience is based on a greater bond between the team and you, generating correction instances, in which it is possible to make changes 
				(material textures, lights and equipment) on images already rendered, having more control of the image. 
				If you want to find out more about this workflow please download the following file. 
				
			</p>
			<a href="pdf/Workflow_for_students-full.pdf" download="Workflow for students-full"  target="_blank">
                                        <button type="button"> English version - Full </button> </a>
				`
			}


	if (experiences.value == "full-experience" && window.location.hash === "#esp"){
				
				htmlContentToAppend = `
				<p>El concepto de este workflow se basa en un mayor vínculo entre el equipo y ustedes, generando una instancia de corrección, 
				en las que es posible hacer cambios (texturas materiales, luces y equipamiento) sobre imágenes ya renderizadas, 
				teniendo un mayor control de las mismas. Si buscas saber más de este workflow, por favor descarga el archivo a continuación. 
				
			</p>
			<a href="pdf/Proceso_de_trabajo_Estudiantes-total.pdf" download="Proceso de trabajo Estudiantes-total"  target="_blank">
                                            <button type="button"> Versión en español - Total  </button> </a>
				`
			}
	document.getElementById("jsExperienceid").innerHTML = htmlContentToAppend;
};

function addingImageInteriorScope() {
	let slider = document.getElementById('interior-slider');
	let name = ""
	let htmlContentToAppend = "";
	if (slider.value == "1"){
		htmlContentToAppend = `
		<img  src="img/imgscope/2x1Vh.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/2x1Vh.jpg" data-src="" width="100">';
	}
	else if (slider.value == "2"){
		htmlContentToAppend = `
		<img  src="img/imgscope/1x1Bm.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/1x1Bm.jpg" data-src="" width="100">';
	}
	else if (slider.value == "3"){
		htmlContentToAppend = 
		`<img  src="img/imgscope/1x1Bp.jpg" data-src="" >`;
		name = '<img  src="img/imgscope/1x1Bp.jpg" data-src="" width="100">';
	}
	document.getElementById("images-scopes").innerHTML = htmlContentToAppend;
	console.log(slider.value);

	return name;
};

function addingImageExteriorScope() {
	let slider = document.getElementById('exterior-slider');
	let name = "";
	let htmlContentToAppend = "";
	
	if (slider.value == "1"){
		htmlContentToAppend = `
		<img  src="img/imgscope/2x1Hh.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/2x1Hh.jpg" data-src="" width="100">';
	}
	else if (slider.value == "2"){
		htmlContentToAppend = `
		<img  src="img/imgscope/1x1Bk.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/1x1Bk.jpg" data-src="" width="100">';
	}
	else if (slider.value == "3"){
	
		htmlContentToAppend = `
		<img  src="img/imgscope/2x1Hza.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/2x1Hza.jpg" data-src="" width="100">';
	}
	document.getElementById("images-scopes-exterior").innerHTML = htmlContentToAppend;
	return name;
};

//RENDERINGS AMOUNT
function interiorCount()
{
	return parseInt(document.getElementById("interior").value);
}

function exteriorCount()
{
	return parseInt(document.getElementById("exterior").value);
}

//InteriorPrices
function interiorPrices(amount, experiences, timeline){
	timeline = document.getElementById('timeline').value;
	let slider = document.getElementById('interior-slider');
	amount = interiorCount();
	let prices = 0
	experiences = document.getElementById("experience").value
	console.log(experiences)
	//light experience
	if(experiences == "light-experience" && slider.value == "1"){
		prices = STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*0.95*amount;
		if(timeline == "rush"){
			prices = STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*0.95*amount*1.05;
		}
	}
	if(experiences == "light-experience" && slider.value == "2"){
		prices = STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*amount
		if(timeline == "rush"){
			prices = STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*amount*1.05;
		}
	}

	if(experiences == "light-experience" && slider.value == "3"){
		prices = STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*1.1*amount
		if(timeline == "rush"){
			prices = STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*amount*1.1*1.06;
		}
	}
	//Full experience
	else if(experiences == "full-experience" && slider.value == "1"){
		prices = STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*0.95*amount;
		if(timeline == "rush"){
			prices = STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*0.95*amount*1.05;
		}
	}

	else if(experiences == "full-experience" && slider.value == "2"){
		prices = STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*amount;
		if(timeline == "rush"){
			prices = STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*amount*1.05;
		}
	}

	else if(experiences == "full-experience" && slider.value == "3"){
		prices = STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*1.11*amount;
		if(timeline == "rush"){
			prices = STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*amount*1.11*1.06;
		}
	}
	
	
	return prices;
}
//exteriorPrices

function exteriorPrices(amount, experiences, timeline, slide){
	timeline = document.getElementById('timeline').value;
	slide = document.getElementById('exterior-slider').value;
	amount = exteriorCount();
	let prices = 0
	experiences = document.getElementById("experience").value;
	console.log(experiences)
//light experience
	if(experiences == "light-experience" && slide == "1"){
		prices = STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*0.95*amount;
		if(timeline == "rush"){
			prices = STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*0.95*amount*1.05;
		}
	}
	if(experiences == "light-experience" && slide == "2"){
		prices = STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*amount
		if(timeline == "rush"){
			prices = STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*amount*1.05;
		}
	}

	if(experiences == "light-experience" && slide == "3"){
		prices = STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*1.1*amount
		if(timeline == "rush"){
			prices = STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*amount*1.1*1.06;
		}
	}
//Full experience
	else if(experiences == "full-experience" && slide == "1"){
		prices = STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*0.95*amount;
		if(timeline == "rush"){
			prices = STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*0.95*amount*1.05;
		}
	}

	else if(experiences == "full-experience" && slide == "2"){
		prices = STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*amount;
		if(timeline == "rush"){
			prices = STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*amount*1.05;
		}
	}

	else if(experiences == "full-experience" && slide == "3"){
		prices = STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*1.11*amount;
		if(timeline == "rush"){
			prices = STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*amount*1.11*1.06;
		}
	}
	
	
	return prices;
}

function discountAmountRenderingInteriorAndFinalPrice(amountRenderings, interiorPrice){
	interiorPrice = interiorPrices();
	amountRenderings = interiorCount() + exteriorCount();
	console.log(amountRenderings);

	if (amountRenderings === 2){
		return interiorPrice*0.96  
	} if(amountRenderings === 3) {
		return interiorPrice*0.92
	} if(amountRenderings === 4) {
		return interiorPrice*0.88
	} if(amountRenderings === 5) {
		console.log("eestoy en el 5 if")
		return interiorPrice*0.84
	} if(amountRenderings === 6) {
		return interiorPrice*0.8
	} if(amountRenderings > 6) {
		return interiorPrice*0.8
	}
	return interiorPrice;
}

function discountAmountRenderingExteriorAndFinalPrice(amountRenderings, exteriorPrice){
	exteriorPrice = exteriorPrices();
	amountRenderings = interiorCount() + exteriorCount();
	if (amountRenderings === 2){
		return exteriorPrice*0.96  
	} if(amountRenderings === 3) {
		return exteriorPrice*0.92
	} if(amountRenderings === 4) {
		return exteriorPrice*0.88
	} if(amountRenderings === 5) {
		return exteriorPrice*0.84
	} if(amountRenderings === 6) {
		return exteriorPrice*0.8
	} if(amountRenderings > 6) {
		return exteriorPrice*0.8
	}
	return exteriorPrice;
}

function tellMeExperience(){
	let experiences = document.getElementById("experience").value;
	if(experiences === "light-experience"){
		experiences = document.getElementById("lightexperiencetransl").textContent;
	}

	if(experiences === "full-experience"){
		experiences = document.getElementById("fullexperiencetransl").textContent;
	}
	return experiences;
}

function showPrices(){
	let sumaCantidadRenders = parseInt(interiorCount()) + parseInt(exteriorCount());
	let sumaPrecioRenders = Math.ceil(discountAmountRenderingExteriorAndFinalPrice()) + Math.ceil(discountAmountRenderingInteriorAndFinalPrice());
	let experiences = document.getElementById("experience").value
	let timeline = document.getElementById('timeline').value;
	if(experiences === "full-experience" || experiences === "light-experience"){
		let contenido = `
		<tr>
			<td>${addingImageInteriorScope()}</td>
			
			<td>${interiorCount()}</td>
			<td>${Math.ceil(discountAmountRenderingInteriorAndFinalPrice()*0.9)} USD - ${Math.ceil(discountAmountRenderingInteriorAndFinalPrice()*1.2)} USD</td>
		</tr>
		<tr>
			<td>`+ addingImageExteriorScope()+`</td>
			
			<td>`+ exteriorCount()+`</td>
			<td>`+ Math.ceil(discountAmountRenderingExteriorAndFinalPrice()*0.9)+` `+`USD`+` `+`-`+` `+ Math.ceil(discountAmountRenderingExteriorAndFinalPrice()*1.2)+` `+`USD` +`</td>
		</tr>
		<tr>
			<td class="totalclass">`+ "TOTAL" + `</td>
			<td>`+ sumaCantidadRenders + `</td>
			<td>`+ Math.ceil(sumaPrecioRenders*0.9)+` `+`USD`+` `+`-`+` `+ Math.ceil(sumaPrecioRenders*1.2)+` `+`USD` +`</td>
		</tr>
			`;
		document.getElementById("tablacarrito").innerHTML = contenido;
		document.getElementById("tablacarrito").style.opacity = "1";
		document.getElementById("opacity-one").style.opacity = "1";
		}

		if(studentYesOrNo === "no") {
			document.getElementById("tablacarrito").style.opacity = "0";
			document.getElementById("opacity-one").style.opacity = "0";
			alert("You are not a student");
		}

		if(experiences === "" && studentYesOrNo === "yes") {
			document.getElementById("tablacarrito").style.opacity = "0";
			document.getElementById("opacity-one").style.opacity = "0";
			alert("No experience select");
		}

		if(timeline === "" && studentYesOrNo === "yes") {
			document.getElementById("tablacarrito").style.opacity = "0";
			document.getElementById("opacity-one").style.opacity = "0";
			alert("No timeline select");
		}

		
}

   






