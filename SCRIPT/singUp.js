$('#password, #confirm_password').on('keyup', function () {
  if ($('#password').val() == $('#confirm_password').val()) {
    $('#message').html('').css('color', 'green');
  } else 
    $('#message').html('As senhas não são iguais.').css('color', 'red');
});

document.querySelector("#kc-form-signup > div:nth-child(6) > div > button")