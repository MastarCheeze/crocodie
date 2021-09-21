Console.log("yeah")
$("#button").on("mousedown", function() {
  $("#text").text("lovely image of dead crocodile");
  $("#image").attr("src", "img/dead.jpg");
}).on("mouseup mouseleave", function() {
  $("#text").text("lovely image of crocodile");
  $("#image").attr("src", "img/alive.jpeg");
});
