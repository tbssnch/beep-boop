function numberFunction(userInput) {
  var numbers = [];
  for (var i = 0; i <= userInput; i++) {
    if (i === 0) {
      numbers.push("Beep!");
    }
    else if (i === 1) {
      numbers.push("Boop!");
    }
    else if (i % 3 === 0) {
      numbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else {
      numbers.push(i);
    }
}
  return numbers;
}



$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var output = numberFunction(userInput);


    $("#result").text(output);

  });
});
