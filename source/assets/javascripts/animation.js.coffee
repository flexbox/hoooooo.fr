$(document).ready ->
  realisticTypewriter = new RealisticTypewriter()
  typeWriterElement = document.getElementById('typewriter')
  # realisticTypewriter.minimumInitialDelay = 0;

  # realisticTypewriter.minimumCharactersPerSecond = 1500
  realisticTypewriter.maximumCharactersPerSecond = 100

  velocityMain = "1000"
  velocity = "50"

  realisticTypewriter.type 'Hoooooo !', typeWriterElement, ->
    setTimeout (->
      realisticTypewriter.type "Ho", typeWriterElement, ->
        setTimeout (->
          realisticTypewriter.type 'Ho', typeWriterElement, ->
            setTimeout (->
              realisticTypewriter.type 'Ho', typeWriterElement, ->
                setTimeout (->
                  realisticTypewriter.type 'Ho', typeWriterElement
                ), velocity
            ), velocity
        ), velocity
    ), velocityMain
