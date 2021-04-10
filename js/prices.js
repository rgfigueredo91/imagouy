//PRICES VARIABLES
let STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 150;
let STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 160;
let STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 220;
let STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 230;

//VARIABLE FOR OTHER COUNTRIES STUDENT
const USER_COUNTRY = "UY";

//VARIABLE FOR CHANGETOGGLE
let clicked = false;

fetch("https://ipinfo.io", {headers: {Accept: "application/json"}}).then(response => response.json()).then(json => {

	if (json.country === "UY"){
		
		console.log("Estoy en Uruguay");
		
	}
	else {
		STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 230;
		STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 250;
		STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 350;
		STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 370;
		NORMAL_RENDER_INDOOR = 450;
		NORMAL_RENDER_OUDDOOR = 500;
		console.log(json.country);
	}
});



function changeToggleDisabledEnabled(){
	
	if(!clicked) {
		clicked = true;
		document.getElementById("experience").disabled=false;
		console.log("Im student")
	} else{
		clicked = false;
		document.getElementById("experience").disabled=true;
		console.log("Im not student")
	}
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
			<a href="https://imagouy.com/pdf/Workflow_for_students-light.pdf" download="Workflow for students-light"  target="_blank">
                                        <button id="englishversion"> English version - light  </button> </a>
				`
			}

	if (experiences.value == "light-experience" && window.location.hash === "#esp"){
		
				htmlContentToAppend = `
				<p>El contepto de este workflow es dejar libertad a los artistas 3d para diseñar la imagen. 
				Teniendo un contacto reducido a una instancia de reunión inicial y una instancia de corrección del punto de vista previo al renderizado. 
				Esto no implica en absoluto una pérdida de calidad en la imagen obtenida, simplemente agiliza el proceso de producción. 
				Si buscas saber más de este workflow, por favor descarga el archivo a continuación. 
			</p>
			<a href="https://imagouy.com/pdf/Proceso_de_trabajo_Estudiantes-simple.pdf" download="Proceso de trabajo Estudiantes-simple"  target="_blank">
                                            <button id="españolversion"> Versión en español - Simple </button> </a>
				`
			}
	if (experiences.value == "full-experience" && window.location.hash !== "#esp"){
				
				htmlContentToAppend = `
				<p>This experience is based on a greater bond between the team and you, generating correction instances, in which it is possible to make changes 
				(material textures, lights and equipment) on images already rendered, having more control of the image. 
				If you want to find out more about this workflow please contact us.
				
			</p>
			<a href="https://imagouy.com/pdf/Workflow_for_students-full.pdf" download="Workflow for students-full"  target="_blank">
                                        <button id="englishversion"> English version - Full </button> </a>
				`
			}


	if (experiences.value == "full-experience" && window.location.hash === "#esp"){
				
				htmlContentToAppend = `
				<p>El concepto de este workflow se basa en un mayor vínculo entre el equipo y ustedes, generando una instancia de corrección, 
				en las que es posible hacer cambios (texturas materiales, luces y equipamiento) sobre imágenes ya renderizadas, 
				teniendo un mayor control de las mismas. Si buscas saber más de este workflow, por favor descarga el archivo a continuación. 
				
			</p>
			<a href="https://imagouy.com/pdf/Proceso_de_trabajo_Estudiantes-total.pdf" download="Proceso de trabajo Estudiantes-total"  target="_blank">
                                            <button id="españolversion"> Versión en español - Total  </button> </a>
				`
			}
	document.getElementById("jsExperienceid").innerHTML = htmlContentToAppend;
};

function addingImageInteriorScope() {
	let slider = document.getElementById('interior-slider');
	let htmlContentToAppend = "";
	console.log(slider.value)
	if (slider.value == "1"){
		htmlContentToAppend = `
		<img  src="img/imgscope/2x1Vh.jpg" data-src="" >
		`
	}
	else if (slider.value == "2"){
		htmlContentToAppend = `
		<img  src="img/imgscope/1x1Bm.jpg" data-src="" >
		`
	}
	else if (slider.value == "3"){
		htmlContentToAppend = `
		<img  src="img/imgscope/1x1Bp.jpg" data-src="" >
		`
	}
	document.getElementById("images-scopes").innerHTML = htmlContentToAppend;
};

function addingImageExteriorScope() {
	let slider = document.getElementById('exterior-slider');
	let htmlContentToAppend = "";
	console.log(slider.value)
	if (slider.value == "1"){
		htmlContentToAppend = `
		<img  src="img/imgscope/2x1Hh.jpg" data-src="" >
		`
	}
	else if (slider.value == "2"){
		htmlContentToAppend = `
		<img  src="img/imgscope/1x1Bk.jpg" data-src="" >
		`
	}
	else if (slider.value == "3"){
	
		htmlContentToAppend = `
		<img  src="img/imgscope/2x1Hza.jpg" data-src="" >
		`
	}
	document.getElementById("images-scopes-exterior").innerHTML = htmlContentToAppend;
};






