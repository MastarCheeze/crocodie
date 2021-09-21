$("#button").on("mousedown", function() {
  $("#image").attr("src", "img/dead.jpg")
}).on("mouseup mouseleave", function() {
  $("#image").attr("src", "img/alive.jpeg")
});
