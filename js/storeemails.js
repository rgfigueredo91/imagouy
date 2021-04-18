

const form = document.getElementById('formtext');
console.log(form);

function renderDatos(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');
    
    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    email.textContent = doc.data().email;

    li.appendChild(name);
    li.appendChild(email);


}



//getting data
db.collection('datos').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderDatos(doc)
    })
});

let email = document.getElementById('emailvalid');
let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//saving data

form.addEventListener('submit', (e) =>{
       e.preventDefault();
        
       if(email.value.match(pattern)){ db.collection('datos').add({
            name: form.name.value,
            email: form.email.value
        })
        document.getElementById("idshow").style.display="block";
        document.getElementById("ocultarboton").style.display="none"
        alert("Thanks! now you can check estimated prices, Gracias ahora puedes chequear los precios estimados")}
        else
        {
            alert("write a valid email")
        }
        
 })
 


