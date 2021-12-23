jQuery(document).ready(function() {
 
  /*
      Stop video playing when the MODAL is being closed (has finished closing)
  */
  $('#myModal').on('hidden.bs.modal', function(e) {
      $('#myModal iframe').each(function() {
          var videoURL = $(this).attr('src');
          $(this).attr('src', videoURL);
      });
  });

});