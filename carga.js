const images = document.querySelectorAll('.img');
                    
for (let i = 0; i<images.length; i++){
    images[i].addEventListener("load", myFunction())
    }


function myFunction() {
   images.forEach(el=>el.style.opacity="1");
}
    