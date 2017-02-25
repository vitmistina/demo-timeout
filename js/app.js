(function () {

  $(document).ready(function(){

    var promisesCounter = 0;

    $(':checkbox').change(function() {
          updateFields($('#request-duration').val(),$('#request-type').val());
      });


    function updateFields(requestDuration,requestType) {
      promisesCounter++;
      $('#price').html('<img src="img/loading.gif" style="width:100px">');
      if (requestType=="sync") {
        $('.overlay').toggleClass('hidden');
      }
      window.setTimeout(function () {
        promisesCounter--;
        if (promisesCounter == 0) {
          $('#price').html(400+$(":checked").length*150+' Kč');
          if (requestType=="sync") {
            $('.overlay').toggleClass('hidden');
          }
        }
      }, requestDuration);

    };
  });



})();
