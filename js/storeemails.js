

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

//saving data

form.addEventListener('submit', (e) =>{
        e.preventDefault();
        db.collection('datos').add({
            name: form.name.value,
            email: form.email.value
        })
        document.getElementById("idshow").style.display="block";
        document.getElementById("ocultarboton").style.display="none"
        alert("Thanks! now you can check estimated prices, Gracias ahora puedes chequear los precios estimados")
        
 })
 


