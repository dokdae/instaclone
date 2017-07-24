$(document).ready(function() {
  var $heart = $(".heart"),
    $ellipsis = $(".fa-ellipsis-h"),
    $overlay = $(".overlay"),
    $close = $(".fa-times"),
    $cancel = $(".link--cancel");

  $heart.click(function() {
    $(this).toggleClass("fa-heart-o heart-pumping fa-heart");
  });

  $ellipsis.click(function() {
    $overlay.fadeIn(200);
  });

  $close.click(closePopUp);
  $cancel.click(closePopUp);

  function closePopUp(event) {
    event.preventDefault();
    $overlay.fadeOut(200);
  }
});
