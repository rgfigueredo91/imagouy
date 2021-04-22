document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            tittles: " Para quien es nuestro servicio",
            architecture: " Firmas de Arquitectura",
            students: " Estudiantes de fin de carrera",
            developers: " Desarrolladores",
            professionals: " Profesionales",
            paragraph: " Presupuestamos cada trabajo por separado. El precio para cada proyecto esta definido por su complejidad, su alcance, fechas limite, etc. De esta manera podemos asegurar la mejor calidad-precio. Para hacer un presupuesto certero, necesitamos ver el proyecto. Documentación básica sería suficiente, algunos planos, dibujos, no hay necesidad de esperar por un desarrollo completo del mismo. Necesitamos cantidad de imágenes, duración de videos, tours virtuales, dependiendo que tipo de servicio estas buscando. Si estas interesado en nuestros servicios, envíanos una solicitud y podemos cotizarte sin costo alguno.",
            imstudent: " SOY ESTUDIANTE DE FIN DE CARRERA",
            experience: " SELECCIONAR EXPERIENCIA",
            selectanoption: " Seleccionar opción",
            lightexp: " Experiencia simple",
            fullexp: " Experiencia total",
            interiorrendering: " RENDERS INTERIORES",
            scope: " Alcance",
            scope2: " Alcance",
            amountint: " Cantidad",
            exteriorrendering: " RENDERS EXTERIORES",
            amountext: " Cantidad",
            timeline: " TIEMPOS",
            rush: " Urgente (0-10 días)",
            standard: " Normal (11-30 días)",
            check: " Ver precio estimado",
            lastp: " El precio es estimativo y puede variar en función de las complejidades del proyecto. Si quieres saber con mas exactitud el precio, contáctanos por privado y con gusto te aclararemos todas las dudas.",
            selectanoption2: " Seleccionar opción",
            ifYouAre: " Si estas buscando estimar precios automáticamente, usa la calculadora debajo, envía tus datos y te enviaremos un e-mail con la información.",
            scopetranslate: " ALCANCE",
            amounfinal: " CANTIDAD",
            button: " Envía para chequear precios",
            name: " Nombre",
            country: " país",
            company: " compañía, universidad",
            submitforcheck: " envía para chequear precios"
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
        document.getElementById("interiorrenderingtrans").textContent = language.esp.interiorrendering;
        document.getElementById("scoperender").textContent = language.esp.scope;
        document.getElementById("scoperender2").textContent = language.esp.scope2;
        document.getElementById("interioramounttrans").textContent = language.esp.amountint;
        document.getElementById("exteriorrenderingtrans").textContent = language.esp.exteriorrendering;
        document.getElementById("exterioramounttrans").textContent = language.esp.amountext;
        document.getElementById("timelinetranslate").textContent = language.esp.timeline;
        document.getElementById("rushtranslate").textContent = language.esp.rush;
        document.getElementById("standardtranslate").textContent = language.esp.standard;
       // document.getElementById("checkpricing").textContent = language.esp.check;
        document.getElementById("lastparagraph").textContent = language.esp.lastp;
        document.getElementById("fullexperiencetransl").textContent = language.esp.fullexp;
        document.getElementById("selectanoption2").textContent = language.esp.selectanoption2;
        document.getElementById("ifYouAreId").textContent = language.esp.ifYouAre;
        document.getElementById("scoptranslate").textContent = language.esp.scopetranslate;
        document.getElementById("amounttranslate").textContent = language.esp.amounfinal;
        document.getElementById("ocultarboton").textContent = language.esp.button;
        document.getElementById("nametranslate").placeholder = language.esp.name;
        document.getElementById("countrytranslate").placeholder = language.esp.country;
        document.getElementById("companyvalid").placeholder = language.esp.company;
        document.getElementById("idbutton").textContent = language.esp.submitforcheck;

    }   
    
 
});

