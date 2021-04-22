

const form = document.getElementById('formtext');
console.log(form);

function renderDatos(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let country = document.createElement('span');
    let exteriorScope = document.createElement('span');
    let interiorScope = document.createElement('span');
    let exteriorAmount = document.createElement('span');
    let interiorAmount = document.createElement('span');
    let student = document.createElement('span');
    let experience = document.createElement('span');
    let company = document.createElement('span');
    let timeline = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    email.textContent = doc.data().email;
    country.textContent = doc.data().country;
    exteriorScope.textContent = doc.data().exteriorScope;
    interiorScope.textContent = doc.data().exteriorScope;
    interiorAmount.textContent = doc.data().interiorAmount;
    exteriorAmount.textContent = doc.data().exteriorAmount;
    experience.textContent = doc.data().experience;
    student.textContent = doc.data().student;
    company.textContent = doc.data().company;
    timeline.textContent = doc.data().timeline;

    li.appendChild(name);
    li.appendChild(email);


}



//getting data
db.collection('datos').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderDatos(doc)
    })
});

let email2 = document.getElementById('emailvalid');
let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let exteriorSlide = document.getElementById('exterior-slider');
let interiorSlide = document.getElementById('interior-slider');
let interiorAmount = document.getElementById('interior');
let exteriorAmount = document.getElementById('exterior');
let experience = document.getElementById('experience');
let company = document.getElementById('companyvalid');
let timeline = document.getElementById('timeline');

//saving data

function button(){
       
        
       if(email2.value.match(pattern) && timeline != ""){ db.collection('datos').add({
            name: form.name.value,
            email: form.email.value,
            country: form.country.value,
            exteriorslide: exteriorSlide.value,
            interiorslide: interiorSlide.value,
            interiorAmount: interiorAmount.value,
            exteriorAmount: exteriorAmount.value,
            student: studentYesOrNo,
            experience: experience.value,
            company: company.value,
            timeline: timeline.value

        })
        document.getElementById("ocultarboton").style.display="block"
        document.getElementById("idbutton").style.display="none"
        document.getElementById("textareaidnow").value = "timeline: " + timeline.value + "\n" + "Exerience: " + experience.value + "\n" + "Exterior Scope: " + exteriorSlide.value + "\n" + "InteriorScope: " + interiorSlide.value + "\n" + "Interior amount: " + interiorAmount.value + "\n" + "Exterior Amount: " +  exteriorAmount.value + "\n" + "Student: " + studentYesOrNo;
        alert("Thanks! now you can check estimated prices, Gracias ahora puedes chequear los precios estimados")}
        else
        {
            alert("timeline need")
        }
        
 }
 


