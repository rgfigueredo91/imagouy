
document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
          
            cooperation: " Coopera con nosotros",
            stage1:" ETAPA 1",
            previous:" Información previa",
            stage2:" ETAPA 2",
            paragraph:" Para realizar un presupuesto lo más ajustado posible necesitamos información sobre el proyecto, ya sean planos, bocetos, modelos 3D, número de imágenes a realizar, plazo de entrega, etc. No es necesario que el proyecto esté perfectamente definido para generar el mismo.",
            paragraph2:" La mayoría de estudios disponen de modelos 3D propios. El mismo debe ajustarse a nuestros estándares. Si dispone de sus propios modelos 3D, envíenoslo previamente y realizaremos las comprobaciones necesarias.",
            stage3:" ETAPA 3",
            model:" Modelo 3D",
            beginning:" Comienzo",
            paragraph3:" Aceptado el presupuesto, y tras el pago de la provisión de fondos, iniciamos el encargo. Durante el proceso de modelado se envían imágenes del progreso para confirmar que todo es correcto.",
            stage4:" ETAPA 4",
            whiterender:" Render blanco - Punto de vista",
            paragraph4:" Una vez confirmado que el modelo es correcto, los puntos de vistas seran chequeados con ustedes. Propondremos camaras y enviaremos sugerencias por algunas particularmente. Vamos a sugerir la que nos parece la mejor opcion. Estas imagenes son renders blancos, sin materiales. Las cámaras no se cambian posteriormente.",
        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //process
        
        document.getElementById("cooperation-translate").textContent = language.esp.cooperation;
        document.getElementById("stage1").textContent = language.esp.stage1;
        document.getElementById("stage2").textContent = language.esp.stage2;
        document.getElementById("previous-info").textContent = language.esp.previous;
        document.getElementById("paragraph-stage1").textContent = language.esp.paragraph;
        document.getElementById("paragraph-stage2").textContent = language.esp.paragraph2;
        document.getElementById("stage3").textContent = language.esp.stage3;
        document.getElementById("model-info").textContent = language.esp.model;
        document.getElementById("beginning-info").textContent = language.esp.beginning;
        document.getElementById("paragraph-stage3").textContent = language.esp.paragraph3;
        document.getElementById("stage4").textContent = language.esp.stage4;
        document.getElementById("whiterender-info").textContent = language.esp.whiterender;
        document.getElementById("paragraph-stage4").textContent = language.esp.paragraph4;

        


    }   
    
 
});

