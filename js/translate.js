
document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        esp: {
            works: " trabajos",
            about: " sobre nosotros",
            contact: " contáctanos",
            artists: " artistas",
            process: " procesos",
            pricess: " precios",
            references: " referencias",
            portfolio: " Arq Vis",
            visualization: " 360 Vis",
            rights: " © 2020 Imago Rendering Studio. Todos los derechos reservados.",
            vr: " Ps R.V",
        }
    };
    //define language via window hash
    if (window.location.hash === "#esp") {

        //MENU PRINCIPAL
        
        //desktop
        document.getElementById("link-font").textContent = language.esp.works;
        document.getElementById("link-font-about").textContent = language.esp.about;
        document.getElementById("contactid").textContent = language.esp.contact;
        document.getElementById("artist-translate").textContent = language.esp.artists;
        document.getElementById("process-translate").textContent = language.esp.process;
        document.getElementById("prices-translate").textContent = language.esp.pricess;
        document.getElementById("references-translate").textContent = language.esp.references;
        document.getElementById("portfolio-translate").textContent = language.esp.portfolio;
        document.getElementById("360-translate").textContent = language.esp.visualization;
        document.getElementById("rights-reserved").textContent = language.esp.rights;
        document.getElementById("vr-translate").textContent = language.esp.vr;
        
        
        //phone
        document.getElementById("artist-translate-phone").textContent = language.esp.artists;
        document.getElementById("process-translate-phone").textContent = language.esp.process;
        document.getElementById("prices-translate-phone").textContent = language.esp.pricess;
        document.getElementById("references-translate-phone").textContent = language.esp.references;
        document.getElementById("contact-translate-phone").textContent = language.esp.contact;
        document.getElementById("portfolio-translate-phone").textContent = language.esp.portfolio;
        document.getElementById("360-translate-phone").textContent = language.esp.visualization;
        document.getElementById("psvr-translate-phone").textContent = language.esp.vr;

        //desktop mantener el #eng cuando hago click en los links 

      
        document.getElementById("contactid").href = "contact.html#esp";
        document.getElementById("artist-translate").href = "artists.html#esp";
        document.getElementById("prices-translate").href = "pricing.html#esp";
        document.getElementById("references-translate").href = "reviews.html#esp";
        document.getElementById("process-translate").href = "process.html#esp";
        document.getElementById("portfolio-translate").href = "index.html#esp";
        document.getElementById("360-translate").href = "360.html#esp";
        document.getElementById("vr-translate").href = "vr.html#esp";

          //phone mantener el #eng cuando hago click en los links
        document.getElementById("contact-translate-phone").href = "contact.html#esp";
        document.getElementById("artist-translate-phone").href = "artists.html#esp";
        document.getElementById("prices-translate-phone").href = "pricing.html#esp";
        document.getElementById("references-translate-phone").href = "reviews.html#esp";
        document.getElementById("process-translate-phone").href = "process.html#esp";
        document.getElementById("portfolio-translate-phone").href = "index.html#esp";
        document.getElementById("360-translate-phone").href = "360.html#esp";
        document.getElementById("psvr-translate-phone").href = "vr.html#esp";
        
    }   

 
});




function timedRefresh() {
    setTimeout("location.reload(true);", 600);
    }


