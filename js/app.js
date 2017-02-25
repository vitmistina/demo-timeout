(function () {

  $(document).ready(function(){

    var promisesCounter = 0;

    $(':checkbox').change(function() {
          updateFields($('#request-duration').val());
      });


    function updateFields(timeoutperiod) {
      promisesCounter++;
      $('#price').html('<img src="img/loading.gif" style="width:100px">');
      if ($('#request-type').val()=="sync") {
        $('.overlay').toggleClass('hidden');
      }
      window.setTimeout(function () {
        promisesCounter--;
        if (promisesCounter == 0) {
          $('#price').html(400+$(":checked").length*150+' Kč');
          if ($('#request-type').val()=="sync") {
            $('.overlay').toggleClass('hidden');
          }
        }
      }, timeoutperiod);

    };
  });



})();
