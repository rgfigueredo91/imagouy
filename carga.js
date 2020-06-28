const portfolio =  document.querySelectorAll(".img");
                    
for (let i = 0; i<portfolio.length; i++){
    portfolio[i].addEventListener("load", myFunction())
    function myFunction() {
        
        portfolio.forEach(el=>el.style.opacity="1");
    }
    }


    
    