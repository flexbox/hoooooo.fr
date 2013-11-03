function doMagicIn() {
  velocity = 0.1;
  fade = "fadeInLeft";

  $('#mi-h').animo({animation: fade, duration: velocity}, function() {
    $('#mi-h').addClass("is-visible");
    $('#mi-one').animo({animation: fade, duration: velocity}, function() {
      $('#mi-one').addClass("is-visible");
      $('#mi-two').animo({animation: fade, duration: velocity}, function() {
        $('#mi-two').addClass("is-visible");
        $('#mi-three').animo({animation: fade, duration: velocity}, function() {
          $('#mi-three').addClass("is-visible");
          $('#mi-four').animo({animation: fade, duration: velocity}, function() {
            $('#mi-four').addClass("is-visible");
            $('#mi-five').animo({animation: fade, duration: velocity}, function() {
              $('#mi-five').addClass("is-visible");
              $('#mi-six').animo({animation: fade, duration: velocity}, function() {
                $('#mi-six').addClass("is-visible");
              });
            });
          });
        });
      });
    });
  });
}

function doMagicInAgain() {
  velocity = 0.1;
  fade = "fadeInLeft";
  console.log('again');

  $('#mia-one').animo({animation: fade, duration: velocity}, function() {
    $('#mia-one').addClass("is-visible");
    $('#mia-two').animo({animation: fade, duration: velocity}, function() {
      $('#mia-two').addClass("is-visible");
      $('#mia-three').animo({animation: fade, duration: velocity}, function() {
        $('#mia-three').addClass("is-visible");
        $('#mia-four').animo({animation: fade, duration: velocity}, function() {
          $('#mia-four').addClass("is-visible");
        });
      });
    });
  });
}

$(document).ready(function() {
  window.setTimeout(function() {
    doMagicIn();
  }, 199);

  window.setTimeout(function() {
    doMagicInAgain();
  }, 2000);

});
