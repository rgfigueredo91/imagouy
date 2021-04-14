document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            
            title: " Cierra la brecha entre las visualizaciones 360º y la realidad virtual",
            caption: " Mira la experiencia en este proyecto",
            rgf: " R|G|F - Arquitectura",
        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //artists
        
        document.getElementById("titlesvr").textContent = language.esp.title;
        document.getElementById("captiontitle").textContent = language.esp.caption;
        document.getElementById("rgfarchitecture").textContent = language.esp.rgf;
        
        
        
    }   
    
 
});