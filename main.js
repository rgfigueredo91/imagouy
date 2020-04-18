console.log('it works')

$(document).ready(function () {
  $('.submit').click(function (event){
    
    console.log('clicked button')

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }

    if(subject.length >= 2) {
      statusElm.append('')
    } else {
      event.preventDefault()
      statusElm.append('<div>Subject is not valid</div>')
    }

    if(message.length > 20) {
      statusElm.append('')
    } else {
      event.preventDefault()
      statusElm.append('<div>Message is not valid</div>')
    }


  })
})