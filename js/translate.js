
document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            works: " trabajos",
            about: " conócenos",
            contact: " sobre nosotros",
            artists: " artistas",
            process: " procesos",
            pricess: " precios",
            references: " referencias"
        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {
        
        //desktop
        document.getElementById("link-font").textContent = language.esp.works;
        document.getElementById("link-font-about").textContent = language.esp.about;
        document.getElementById("contactid").textContent = language.esp.contact;
        document.getElementById("artist-translate").textContent = language.esp.artists;
        document.getElementById("process-translate").textContent = language.esp.process;
        document.getElementById("prices-translate").textContent = language.esp.pricess;
        document.getElementById("references-translate").textContent = language.esp.references;
        
        
        //phone
       

        //mantener el #eng cuando hago click en los links
        document.getElementById("link-font").href = "index.html#esp";
        document.getElementById("contactid").href = "contact.html#esp";
        document.getElementById("artist-translate").href = "artists.html#esp";
        document.getElementById("prices-translate").href = "pricing.html#esp";
        document.getElementById("references-translate").href = "reviews.html#esp";

        
    }   
 
});

function timedRefresh() {
    setTimeout("location.reload(true);", 600);
    }