console.log("yeah");
$("#button").on("mousedown", function() {
  console.log("you pressed");
  $("#text").text("lovely image of dead crocodile");
  $("#image").attr("src", "img/dead.jpg");
}).on("mouseup mouseleave", function() {
  console.log("you no pressed anymore");
  $("#text").text("lovely image of crocodile");
  $("#image").attr("src", "img/alive.jpeg");
});
