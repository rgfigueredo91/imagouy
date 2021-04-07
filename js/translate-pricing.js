
document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            tittles: " Para quien es nuestro servicio",
            architecture: " Firmas de Arquitectura",
            students: " Estudiantes de fin de carrera",
            developers: " Desarrolladores",
            professionals: " Profesionales",
            paragraph: " Presupuestamos cada trabajo por separado. El precio para cada proyecto esta definido por su complejidad, su alcance, fechas limite, etc. De esta manera podemos asegurar la mejor calidad-precio. Para hacer un presupuesto certero, necesitamos ver el proyecto. Documentación básica es suficiente, algunos planos, dibujos, no hay necesidad de esperar por un desarrollo completo del mismo. Necesitamos cantidad de imágenes, duración de videos, tours virtuales, dependiendo que tipo de servicio estas buscando. Si estas interesado en nuestros servicios, envíanos una solicitud y podemos cotizarte sin costo alguno. Si buscas estimar un precio, puedes usar la calculadora a continuación. ",
            imstudent: " Soy estudiante",
            experience: " Seleccionar experiencia",
            selectanoption: " Seleccionar opción",
            lightexp: " Experiencia simple",
            fullexp: " Experiencia total"
            

        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //pricing
        document.getElementById("titleservicefor").textContent = language.esp.tittles;
        document.getElementById("architecture-studio").textContent = language.esp.architecture;
        document.getElementById("finalcareerstudents").textContent = language.esp.students;
        document.getElementById("developers").textContent = language.esp.developers;
        document.getElementById("professionals").textContent = language.esp.professionals;
        document.getElementById("principalparagraph").textContent = language.esp.paragraph;
        document.getElementById("imstudent").textContent = language.esp.imstudent;
        document.getElementById("selectexperiencetrans").textContent = language.esp.experience;
        document.getElementById("selectanoption").textContent = language.esp.selectanoption;
        document.getElementById("lightexperiencetransl").textContent = language.esp.lightexp;

        


    }   
    
 
});

