document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            clientes: "Clientes",
            thanks: " Gracias",
            sofia: " Arquitecta Sofía Gallo Fassi",
            paragraphsofia: " Excelente trabajo! Siempre predispuestos y abiertos a lo que queríamos transmitir, además de entregar antes de la fecha acordada.",
            paragraphrodrigo: " Excelente trabajo, entendieron al toque el proyecto y la materialidad buscada, y por más de estar contra reloj , sacaron una imagen espectacular, de muy buena calidad. Estoy más que  agradecido con ellos. Los recomiendo a full, arriba gurisada.",
            rodrigo:" Arquitecto Rodrigo Mariñelarena",
            claudia:" Arquitecta Claudia Curbelo",
            paragraphclaudia:" Muy buen trabajo! Excelente predisposición en todo momento. Entrega en tiempo y forma.",
            soledad:" Arquitecta Soledad Añón",
            paragraphsoledad: " El profesionalismo y la seriedad con la que trabajan se refleja en cada uno de sus productos que demuestran ser excelentes visualizaciones arquitectónicas, logrando una atmósfera tal que traspasa el papel o la pantalla. Los recomiendo!"
        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //vr
        
        document.getElementById("clientesid").textContent = language.esp.clientes;
        document.getElementById("thankstrans").textContent = language.esp.thanks;
        document.getElementById("sofiagallofassi").textContent = language.esp.sofia;
        document.getElementById("paragraphidsofia").textContent = language.esp.paragraphsofia;
        document.getElementById("marinalarena").textContent = language.esp.rodrigo;
        document.getElementById("paragraphirodrigo").textContent = language.esp.paragraphrodrigo;
        document.getElementById("claudiaid").textContent = language.esp.claudia;
        document.getElementById("paragraphiclauida").textContent = language.esp.paragraphclaudia;
        document.getElementById("soledadid").textContent = language.esp.soledad;
        document.getElementById("paragraphisoledad").textContent = language.esp.paragraphsoledad;
        
    }   
    
 
});