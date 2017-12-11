$(document).ready(function(){
    var message = $('.partyMessage');
    var button = $('.partyButton');
    message.hide();

    $('.jc-slider').jcSlider();

    $('.partyButton').on('click', function() {
      var countdown = new Countdown(10, function(seconds) {
        button.text('Countdown to this really cool thing... ' + seconds);
      }, function() {
          button.hide();
          message.show();
      });
    });

});
