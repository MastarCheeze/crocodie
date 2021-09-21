$(document).ready(function() {
  $("#button").on("mousedown", function() {
    $("#title").text("Crocodile Crocodied");
    $("#text").text("lovely image of dead crocodile");
    $("#image").attr("src", "img/dead.jpg");
  }).on("mouseup mouseleave", function() {
    $("#title").text("Crocodile");
    $("#text").text("lovely image of crocodile");
    $("#image").attr("src", "img/alive.jpeg");
  });
});
