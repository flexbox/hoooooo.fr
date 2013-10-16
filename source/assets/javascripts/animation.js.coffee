$(document).ready ->

  velocity_main = 1000
  velocity = 5

  $('#one').delay(velocity_main).slideDown(->
    $('#two').delay(velocity_main).slideDown(->
      $('#three').slideDown(->
        $('#four').slideDown(->
            $('#five').slideDown()
          )
        )
      )
    )

