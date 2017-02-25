(function () {

  $(document).ready(function(){
    $('#checkbox1').change(function() {
          updateFields(500);
      });

    $('#checkbox2').change(function() {
          updateFields(750);
      });

      $('#checkbox3').change(function() {
            updateFields(1000);
        });

        $('#checkbox4').change(function() {
              updateFields(1500);
          });

          $('#checkbox5').change(function() {
                updateFields(2000);
            });


    function updateFields(timeoutperiod) {
      $('#price').html('<img src="img/loading.gif" style="width:100px">');
      // $('.overlay').toggleClass('hidden');
      window.setTimeout(function () {
        $('#price').html(400+$(":checked").length*150+' Kč');
        // $('.overlay').toggleClass('hidden');
      }, timeoutperiod);

    };
  });



})();
