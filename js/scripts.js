function numberFunction(userInput) {
  var numbers = [];
  for (var i = 0; i <= userInput; i++) {

console.log(i);

}
}
numberFunction();


$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var output = numberFunction(userInput);


    $(".result").text(output);

  });
});
