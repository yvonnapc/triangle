var triangle = function(a,b,c) {

    if ((a === b) && (b === c) && (a === c)) {
      $(".type").text("equilateral");
      return "equilateral";
    }
    else if ((a === b) || (b === c) || (a === c)) {
      $(".type").text("isosceles");
      return "isosceles";
    }
    else if ((a != b) && (b != c) && (c != a)) {

      $(".type").text("scalene");
      return "scalene";
    }
    //
    // if (((a + b) === c) || ((a + c) === b) || ((b + c) === a)) {
    // return false;
   else {
    return false;
  }


};

$(document).ready(function() {
  $("form#triangleInput").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());
    var result = triangle(a,b,c);

    if (!result) {              // same as writing if (result === false)
      $(".not").text("not");
    }
    else {
      $(".not").text("");
    }

    if (isNaN(a,b,c)) {
      alert("Please Enter a Number");
    }

    $("#result").show();
    event.preventDefault();
  });
    });
