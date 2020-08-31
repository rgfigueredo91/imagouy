console.log('it works')

$(document).ready(function () {
  $('.submit').click(function (event){
    
    console.log('clicked button')
    var name = $('.name').val()
    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()



    if(name.length >= 5) {
      statusElm.append('')
    } else {
      event.preventDefault()
      statusElm.append('<div>please write a valid name</div>')
    }

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('')
    } else {
      event.preventDefault()
      statusElm.append('<div>please write a valid e-mail</div>')
    }

    if(subject.length >= 1) {
      statusElm.append('')
    } else {
      event.preventDefault()
      statusElm.append('<div>please write the subject</div>')
    }

    if(message.length > 10) {
      statusElm.append('')
    } else {
      event.preventDefault()
      statusElm.append('<div>please write a longer message</div>')
    }

   


  })
})