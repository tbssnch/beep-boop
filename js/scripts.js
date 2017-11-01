function numberFunction(userInput) {
  var numbers = [];
  var daves =
  for (var i = 0; i <= userInput; i++) {
    if (userInput % 3 === 0) {
      numbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else if (i === 0) {
      numbers[i] = "Beep!";
    }
    else if (i === 1) {
      numbers[i] = "Boop!";
    }
    else {
      numbers.push(i);
    }

    console.log(i);

//console.log(i);
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
