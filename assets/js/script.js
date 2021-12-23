// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
  //alert('this is an example alert');
  $('.carousel').carousel({
  interval: 2000
})
  
});

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