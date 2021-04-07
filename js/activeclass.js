$(document).ready(function () {
  
    $('ul.activenavbar > li')
            .click(function (e) {
        $('activenavbar > li')
            .removeClass('active');
        $(this).addClass('active');
    });
});