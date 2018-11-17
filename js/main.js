$(document).ready(() => {

  function hideAll(){
  $('#times').hide();
  $('#fun').hide();
  $('#misery').hide();
  $('#conspiracy').hide();
}
  hideAll();

  $('.images').click(function() {

    hideAll();

  switch ($(this).attr("id")) {
        case "falling":
          $('#conspiracy').slideToggle();
          break;
          case "riot":
          $('#misery').slideToggle();
          break;
        case "paramore":
          $('#fun').slideToggle();
          break;
        case "laughter":
          $('#times').slideToggle();
          break;
      }
    });
//dont delete
});
