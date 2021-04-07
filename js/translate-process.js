
document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
          
            cooperation: " Coopera con nosotros",
            stage1:" ETAPA 1",
            previous:" Información previa",
        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {
        

        //process
        
        document.getElementById("cooperation-translate").textContent = language.esp.cooperation;
        document.getElementById("stage1").textContent = language.esp.stage1;
        document.getElementById("previous-info").textContent = language.esp.previous;
    }   
    
 
});

